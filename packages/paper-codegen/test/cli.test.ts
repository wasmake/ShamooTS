import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const codegen = vi.hoisted(() => ({
  diff: vi.fn(),
  sync: vi.fn(),
}));

vi.mock('../src/index.js', () => ({
  diffPaperBindings: codegen.diff,
  syncPaperBindings: codegen.sync,
}));

const originalArgv = process.argv;

async function run(...arguments_: string[]): Promise<void> {
  process.argv = ['node', 'cli.ts', ...arguments_];
  vi.resetModules();
  await import('../src/cli.js');
  await vi.waitFor(() => {
    expect(
      codegen.diff.mock.calls.length + codegen.sync.mock.calls.length + stderr.mock.calls.length,
    ).toBeGreaterThan(0);
  });
}

const stdout = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
const stderr = vi.spyOn(process.stderr, 'write').mockImplementation(() => true);

beforeEach(() => {
  codegen.diff.mockResolvedValue({
    declarations: { changed: false },
    metadata: { changed: false },
    coverage: { changed: false },
    shards: {},
  });
  codegen.sync.mockResolvedValue([]);
  process.exitCode = undefined;
});

afterEach(() => {
  process.argv = originalArgv;
  vi.clearAllMocks();
});

describe('Paper codegen executable', () => {
  it('runs generate defaults and explicit sync arguments', async () => {
    await run();
    expect(codegen.sync).toHaveBeenCalledWith(
      expect.objectContaining({
        surface: 'paper',
        outputDirectory: `${process.cwd()}/src/generated`,
      }),
    );
    expect(stdout).toHaveBeenCalledWith('Verified paper generated bindings (0 changed).\n');

    codegen.sync.mockResolvedValue(['/out/file']);
    await run('sync', 'paper-packets', 'model.json', '/out');
    expect(codegen.sync).toHaveBeenLastCalledWith({
      surface: 'paper-packets',
      model: 'model.json',
      outputDirectory: '/out',
    });
    expect(stdout).toHaveBeenLastCalledWith(
      'Updated paper-packets generated bindings (1 changed).\n',
    );
  });

  it('reports stale diffs and accepts clean diffs', async () => {
    await run('diff', 'paper-nms');
    expect(process.exitCode).toBeUndefined();
    codegen.diff.mockResolvedValue({
      declarations: { changed: false },
      metadata: { changed: false },
      coverage: { changed: false },
      shards: { shard: { changed: true } },
    });
    await run('diff', 'paper');
    expect(stderr).toHaveBeenLastCalledWith('paper generated bindings are out of date.\n');
    expect(process.exitCode).toBe(1);
  });

  it('prints surface, command, and non-Error failures', async () => {
    await run('generate', 'folia');
    expect(stderr).toHaveBeenLastCalledWith('Unknown Paper surface: folia\n');
    await run('watch', 'paper');
    expect(stderr).toHaveBeenLastCalledWith('Unknown codegen command: watch\n');
    codegen.sync.mockRejectedValue('scanner failed');
    await run('generate', 'paper');
    expect(stderr).toHaveBeenLastCalledWith('scanner failed\n');
  });
});
