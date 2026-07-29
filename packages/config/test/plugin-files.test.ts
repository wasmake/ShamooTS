import { pluginFiles } from '@shamoo/config';
import { afterEach, describe, expect, it, vi } from 'vitest';

const originalHost = Object.getOwnPropertyDescriptor(globalThis, 'host');

afterEach(() => {
  vi.restoreAllMocks();
  Reflect.deleteProperty(globalThis, 'host');
  if (originalHost !== undefined) Object.defineProperty(globalThis, 'host', originalHost);
});

describe('plugin files', () => {
  it('uses the policy-confined Runtime text operations', async () => {
    const read = vi.fn().mockResolvedValue('value');
    const write = vi.fn().mockResolvedValue(null);
    Reflect.set(globalThis, 'host', {
      shamooReadTextFile: read,
      shamooWriteTextFile: write,
    });

    await expect(pluginFiles.read('data/config.yml')).resolves.toBe('value');
    await pluginFiles.write('data/config.yml', 'updated');

    expect(read).toHaveBeenCalledWith('data/config.yml');
    expect(write).toHaveBeenCalledWith('data/config.yml', 'updated');
  });

  it('rejects absolute and backslash paths before calling Runtime', async () => {
    Reflect.set(globalThis, 'host', {
      shamooReadTextFile: vi.fn(),
      shamooWriteTextFile: vi.fn(),
    });

    await expect(pluginFiles.read('/etc/passwd')).rejects.toThrow('relative POSIX path');
    await expect(pluginFiles.write('data\\config.yml', '')).rejects.toThrow('relative POSIX path');
  });

  it('validates the host boundary, returned content, and write input', async () => {
    await expect(pluginFiles.read('data/config.yml')).rejects.toThrow('storage is unavailable');
    Reflect.set(globalThis, 'host', {
      shamooReadTextFile: vi.fn().mockResolvedValue(null),
      shamooWriteTextFile: vi.fn().mockResolvedValue(null),
    });

    await expect(pluginFiles.read('data/config.yml')).rejects.toThrow(
      'invalid plugin file content',
    );
    await expect(pluginFiles.write('data/config.yml', 1 as never)).rejects.toThrow(
      'content must be text',
    );
  });
});
