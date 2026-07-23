import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const compiler = vi.hoisted(() => ({ compile: vi.fn() }));
vi.mock('../src/index.js', () => ({ compilePlugin: compiler.compile }));

const originalArgv = process.argv;
const stdout = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
const stderr = vi.spyOn(process.stderr, 'write').mockImplementation(() => true);

async function run(...arguments_: string[]): Promise<void> {
  process.argv = ['node', 'cli.ts', ...arguments_];
  vi.resetModules();
  await import('../src/cli.js');
  await vi.waitFor(() => {
    expect(
      stdout.mock.calls.length + stderr.mock.calls.length + compiler.compile.mock.calls.length,
    ).toBeGreaterThan(0);
  });
}

beforeEach(() => {
  compiler.compile.mockResolvedValue({ metadata: '{"ok":true}\n', diagnostics: [] });
  process.exitCode = undefined;
});

afterEach(() => {
  process.argv = originalArgv;
  vi.clearAllMocks();
});

describe('compiler executable', () => {
  it('prints help and validates required options and platforms', async () => {
    await run('--help');
    expect(stdout).toHaveBeenCalledWith(expect.stringContaining('Usage: shamooc'));
    await run('--entry', 'src/plugin.ts');
    expect(stderr).toHaveBeenLastCalledWith(expect.stringContaining('requires --entry'));
    await run('--entry', 'src/plugin.ts', '--package', '@fixture/plugin', '--platform', 'fabric');
    expect(stderr).toHaveBeenLastCalledWith('Unsupported platform: fabric.\n');
  });

  it('compiles dual-platform requests and prints metadata without an output file', async () => {
    await run(
      '--project',
      'tsconfig.test.json',
      '--entry',
      'src/plugin.ts',
      '--paper-entry',
      'src/paper.ts',
      '--velocity-entry',
      'src/velocity.ts',
      '--package',
      '@fixture/plugin',
      '--platform',
      'paper,velocity',
    );
    expect(compiler.compile).toHaveBeenCalledWith({
      tsconfig: 'tsconfig.test.json',
      entrypoint: 'src/plugin.ts',
      paperEntrypoint: 'src/paper.ts',
      velocityEntrypoint: 'src/velocity.ts',
      packageName: '@fixture/plugin',
      platforms: ['paper', 'velocity'],
    });
    expect(stdout).toHaveBeenLastCalledWith('{"ok":true}\n');
  });

  it('does not print metadata when writing output and formats diagnostics', async () => {
    await run(
      '--entry',
      'src/plugin.ts',
      '--package',
      '@fixture/plugin',
      '--platform',
      'paper',
      '--out',
      'manifest.json',
    );
    expect(stdout).not.toHaveBeenCalled();
    compiler.compile.mockResolvedValue({
      diagnostics: [
        { code: 'TYPESCRIPT', message: 'global failure' },
        {
          code: 'PLATFORM_LEAK',
          message: 'wrong platform',
          location: { file: 'src/plugin.ts', line: 2, column: 3 },
        },
      ],
    });
    await run('--entry', 'src/plugin.ts', '--package', '@fixture/plugin', '--platform', 'velocity');
    expect(stderr).toHaveBeenCalledWith('TYPESCRIPT: global failure\n');
    expect(stderr).toHaveBeenCalledWith('PLATFORM_LEAK src/plugin.ts:2:3: wrong platform\n');
    expect(process.exitCode).toBe(1);
  });

  it('prints non-Error compiler failures', async () => {
    compiler.compile.mockRejectedValue('compiler unavailable');
    await run('--entry', 'src/plugin.ts', '--package', '@fixture/plugin', '--platform', 'paper');
    expect(stderr).toHaveBeenLastCalledWith('compiler unavailable\n');
  });
});
