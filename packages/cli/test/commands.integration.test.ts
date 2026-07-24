import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import { afterEach, describe, expect, it } from 'vitest';

import { readProjectConfig, runCli } from '../src/index.js';

const temporary: string[] = [];

async function workspace(): Promise<string> {
  const path = await mkdtemp(join(tmpdir(), 'shamoo-cli-'));
  temporary.push(path);
  return path;
}

function output(): {
  readonly stdout: string[];
  readonly stderr: string[];
  readonly io: { stdout(value: string): void; stderr(value: string): void };
} {
  const stdout: string[] = [];
  const stderr: string[] = [];
  return {
    stdout,
    stderr,
    io: { stdout: (value) => stdout.push(value), stderr: (value) => stderr.push(value) },
  };
}

afterEach(async () => {
  await Promise.all(temporary.splice(0).map((path) => rm(path, { recursive: true, force: true })));
});

describe('CLI command integration', () => {
  it('prints command metadata and validates create options', async () => {
    const root = await workspace();
    const help = output();
    expect(await runCli([], { cwd: root, io: help.io })).toBe(0);
    expect(help.stdout.join('')).toContain('Usage:');
    const version = output();
    expect(await runCli(['--version'], { cwd: root, io: version.io })).toBe(0);
    expect(version.stdout.join('')).toMatch(/^\d+\.\d+\.\d+/u);
    await expect(
      runCli(['create', 'plugin', '--name'], { cwd: root, io: output().io }),
    ).rejects.toThrow('requires a value');
    await expect(
      runCli(['create', 'plugin', '--platform', 'fabric'], { cwd: root, io: output().io }),
    ).rejects.toThrow('Unsupported platform');
  });

  it('strictly validates project configuration shapes and optional paths', async () => {
    const root = await workspace();
    const config = join(root, 'shamoo.config.json');
    for (const [value, message] of [
      [null, 'must contain an object'],
      [{ platforms: ['paper'], entrypoint: 'src.ts' }, "'name'"],
      [{ name: 'example', platforms: [], entrypoint: 'src.ts' }, "'platforms'"],
      [{ name: 'example', platforms: ['paper', 'paper'], entrypoint: 'src.ts' }, "'platforms'"],
      [{ name: 'example', platforms: ['fabric'], entrypoint: 'src.ts' }, "'platforms'"],
      [{ name: 'example', platforms: ['paper'], entrypoint: 'src.ts', deploy: [] }, "'deploy'"],
      [{ name: 'example', platforms: ['paper'], entrypoint: '' }, "'entrypoint'"],
      [{ name: 'example', platforms: ['paper'], entrypoint: '/absolute.ts' }, 'relative'],
    ] as const) {
      await writeFile(config, JSON.stringify(value), 'utf8');
      await expect(readProjectConfig(root)).rejects.toThrow(message);
    }

    await writeFile(
      config,
      JSON.stringify({
        name: '@example/dual',
        platforms: ['paper', 'velocity'],
        entrypoint: 'src/common.ts',
        paperEntrypoint: 'src/paper.ts',
        velocityEntrypoint: 'src/velocity.ts',
        tsconfig: 'config/tsconfig.json',
        outDir: 'output',
        deploy: { paper: 'paper/plugins', velocity: 'velocity/plugins' },
      }),
      'utf8',
    );
    await expect(readProjectConfig(root)).resolves.toMatchObject({
      platforms: ['paper', 'velocity'],
      deploy: { paper: 'paper/plugins', velocity: 'velocity/plugins' },
    });
  });

  it('creates a project and diagnoses its real files', async () => {
    const root = await workspace();
    const created = output();
    expect(
      await runCli(
        ['create', 'identity', '--name', '@example/identity', '--platform', 'paper,velocity'],
        { cwd: root, io: created.io },
      ),
    ).toBe(0);
    expect(created.stdout.join('')).toContain('Created 8 files');

    const diagnosed = output();
    expect(await runCli(['doctor', '--project', 'identity'], { cwd: root, io: diagnosed.io })).toBe(
      0,
    );
    expect(diagnosed.stdout.join('')).toContain('OK config');
    expect(diagnosed.stdout.join('')).toContain('WARNING deploy:paper');
    expect(diagnosed.stderr).toEqual([]);
    const diagnosedJson = output();
    expect(
      await runCli(['doctor', '--project', 'identity', '--json'], {
        cwd: root,
        io: diagnosedJson.io,
      }),
    ).toBe(0);
    expect(JSON.parse(diagnosedJson.stdout.join(''))).toBeInstanceOf(Array);
  });

  it('synchronizes Paper bindings from a real model and detects a stale diff', async () => {
    const root = await workspace();
    const model = join(root, 'paper.model.json');
    await writeFile(
      model,
      JSON.stringify({
        schemaVersion: 2,
        platform: 'paper',
        apiVersion: 'test',
        generatedBy: 'command-integration-test',
        declarations: [{ id: 'a.Value', javaName: 'a.Value', name: 'Value', kind: 'record' }],
        events: [{ type: 'Value', javaName: 'a.Value', cancellable: false }],
      }),
      'utf8',
    );
    const generated = join(root, 'generated');
    const synced = output();
    expect(
      await runCli(['paper', 'sync', 'paper', model, generated], { cwd: '/', io: synced.io }),
    ).toBe(0);
    expect(synced.stdout.join('')).toContain('Synchronized paper bindings');
    await writeFile(join(generated, 'bindings.generated.ts'), '// stale\n', 'utf8');
    const diff = output();
    expect(
      await runCli(['paper', 'diff', 'paper', model, generated], { cwd: '/', io: diff.io }),
    ).toBe(1);
    expect(diff.stderr.join('')).toContain('Stale paper bindings');

    const velocityModel = join(root, 'velocity.model.json');
    const velocityGenerated = join(root, 'velocity-generated');
    await writeFile(
      velocityModel,
      JSON.stringify({
        schemaVersion: 2,
        platform: 'velocity',
        apiVersion: 'test',
        generatedBy: 'command-integration-test',
        declarations: [{ id: 'a.Value', javaName: 'a.Value', name: 'Value', kind: 'record' }],
        events: [{ type: 'Value', javaName: 'a.Value', cancellable: false }],
      }),
      'utf8',
    );
    const velocity = output();
    expect(
      await runCli(['velocity', 'sync', velocityModel, velocityGenerated], {
        cwd: '/',
        io: velocity.io,
      }),
    ).toBe(0);
    expect(velocity.stdout.join('')).toContain('Synchronized velocity bindings');
  });

  it('builds, deploys, and completes an aborted development watch with real artifacts', async () => {
    const root = await workspace();
    await mkdir(join(root, 'src'));
    await writeFile(join(root, 'src/plugin.ts'), 'export default { enable() {} };\n', 'utf8');
    await writeFile(
      join(root, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          target: 'ES2022',
          module: 'NodeNext',
          moduleResolution: 'NodeNext',
          strict: true,
          noEmit: true,
        },
        include: ['src/**/*.ts'],
      }),
      'utf8',
    );
    await writeFile(
      join(root, 'shamoo.config.json'),
      JSON.stringify({
        name: '@example/identity',
        platforms: ['paper'],
        entrypoint: 'src/plugin.ts',
        deploy: { paper: 'server/plugins' },
      }),
      'utf8',
    );
    const deployed = output();
    expect(await runCli(['deploy'], { cwd: root, io: deployed.io })).toBe(0);
    expect(await readFile(join(root, 'server/plugins/identity/paper/index.js'), 'utf8')).toContain(
      'enable',
    );
    await expect(
      readFile(join(root, 'server/plugins/identity/paper/index.js.map'), 'utf8'),
    ).resolves.toContain('sources');
    await expect(
      readFile(join(root, 'server/plugins/identity/shamoo.metadata.json'), 'utf8'),
    ).resolves.toContain('"format": "source-map-v3"');
    await expect(
      readFile(join(root, 'server/plugins/identity/shamoo-plugin.json'), 'utf8'),
    ).resolves.toContain('"entrypoint": "paper/index.js"');
    expect(await runCli(['build'], { cwd: root, io: output().io })).toBe(0);
    expect(
      await runCli(['deploy', '--paper', 'alternate/plugins'], { cwd: root, io: output().io }),
    ).toBe(0);
    await expect(
      readFile(join(root, 'alternate/plugins/identity/paper/index.js'), 'utf8'),
    ).resolves.toContain('enable');

    const controller = new AbortController();
    controller.abort();
    const development = output();
    expect(
      await runCli(['dev'], { cwd: root, io: development.io, watchSignal: controller.signal }),
    ).toBe(0);
    expect(development.stdout.join('')).toContain('Deployed 4 development files');
  });

  it('reports actionable Winter migrations and skips symlink traversal', async () => {
    const root = await workspace();
    const source = join(root, 'winter');
    await mkdir(source);
    await writeFile(
      join(source, 'IdentityService.java'),
      'import winter.Service;\n@Service\nclass IdentityService { @OnReload void reload() {} }\n',
      'utf8',
    );
    const report = output();
    expect(
      await runCli(['migrate', 'winter', source, '--json'], { cwd: root, io: report.io }),
    ).toBe(0);
    const parsed = JSON.parse(report.stdout.join('')) as { findings: { winter: string }[] };
    expect(parsed.findings.map((finding) => finding.winter)).toEqual(['Service', 'OnReload']);
    const text = output();
    expect(await runCli(['migrate', 'winter', source], { cwd: root, io: text.io })).toBe(0);
    expect(text.stdout.join('')).toContain('IdentityService.java');
  });

  it('rejects malformed command arguments and escaping project paths', async () => {
    const root = await workspace();
    await writeFile(
      join(root, 'shamoo.config.json'),
      JSON.stringify({
        name: 'example',
        platforms: ['paper'],
        entrypoint: '../outside.ts',
      }),
      'utf8',
    );
    await expect(runCli(['doctor'], { cwd: root, io: output().io })).resolves.toBe(1);
    await expect(runCli(['create'], { cwd: root, io: output().io })).rejects.toThrow(
      'requires a target directory',
    );
    await expect(runCli(['migrate', 'fabric'], { cwd: root, io: output().io })).rejects.toThrow(
      'migrate winter',
    );
    await expect(readFile(join(root, 'outside.ts'), 'utf8')).rejects.toThrow();
  });
});
