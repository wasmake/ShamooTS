import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const codegen = vi.hoisted(() => ({ diff: vi.fn(), sync: vi.fn() }));

vi.mock('../src/index.js', () => ({
  VELOCITY_CODEGEN_PACKAGE_DIRECTORY: '/repository/packages/velocity-codegen',
  diffVelocityBindings: codegen.diff,
  syncVelocityBindings: codegen.sync,
}));

const originalArgv = process.argv;
const stdout = vi.spyOn(process.stdout, 'write').mockImplementation(() => true);
const stderr = vi.spyOn(process.stderr, 'write').mockImplementation(() => true);

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

beforeEach(() => {
  codegen.diff.mockResolvedValue({
    declarations: { changed: false },
    events: { changed: false },
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

describe('Velocity codegen executable', () => {
  it('runs default generation and explicit sync', async () => {
    await run();
    expect(codegen.sync).toHaveBeenCalledWith({
      outputDirectory: `${process.cwd()}/src/generated`,
    });
    expect(stdout).toHaveBeenCalledWith('Verified velocity generated bindings (0 changed).\n');
    codegen.sync.mockResolvedValue(['one', 'two']);
    await run('sync', 'model.json', '/out');
    expect(codegen.sync).toHaveBeenLastCalledWith({
      model: 'model.json',
      outputDirectory: '/out',
    });
    expect(stdout).toHaveBeenLastCalledWith('Updated velocity generated bindings (2 changed).\n');
  });

  it('handles clean and stale diffs', async () => {
    await run('diff');
    expect(process.exitCode).toBeUndefined();
    codegen.diff.mockResolvedValue({
      declarations: { changed: true },
      events: { changed: false },
      coverage: { changed: false },
      shards: {},
    });
    await run('diff');
    expect(stderr).toHaveBeenLastCalledWith('velocity generated bindings are out of date.\n');
    expect(process.exitCode).toBe(1);
  });

  it('reports command and non-Error failures', async () => {
    await run('watch');
    expect(stderr).toHaveBeenLastCalledWith('Unknown codegen command: watch\n');
    codegen.sync.mockRejectedValue(17);
    await run('generate');
    expect(stderr).toHaveBeenLastCalledWith('17\n');
  });
});
