import type { Awaitable } from '@shamoo/common';

export interface ConfigSource {
  readonly name: string;
  load(): Awaitable<unknown>;
}
export interface ConfigDecoder<T> {
  decode(input: unknown): T;
}
export async function readConfig<T>(source: ConfigSource, decoder: ConfigDecoder<T>): Promise<T> {
  return decoder.decode(await source.load());
}

interface PluginFileHost {
  shamooReadTextFile(path: string): Promise<unknown>;
  shamooWriteTextFile(path: string, contents: string): Promise<unknown>;
}

function fileHost(): PluginFileHost {
  const value: unknown = Reflect.get(globalThis, 'host');
  if (
    value === null ||
    typeof value !== 'object' ||
    typeof Reflect.get(value, 'shamooReadTextFile') !== 'function' ||
    typeof Reflect.get(value, 'shamooWriteTextFile') !== 'function'
  )
    throw new TypeError('ShamooRuntime plugin file storage is unavailable.');
  return value as PluginFileHost;
}

function path(value: string): string {
  if (value.trim().length === 0 || value.includes('\\') || value.startsWith('/'))
    throw new TypeError('Plugin file path must be a nonblank relative POSIX path.');
  return value;
}

/** Policy-confined UTF-8 persistence seeded from allowed files in the installed plugin artifact. */
export const pluginFiles = Object.freeze({
  async read(file: string): Promise<string> {
    const result = await fileHost().shamooReadTextFile(path(file));
    if (typeof result !== 'string')
      throw new TypeError('Runtime returned invalid plugin file content.');
    return result;
  },
  async write(file: string, contents: string): Promise<void> {
    if (typeof contents !== 'string') throw new TypeError('Plugin file content must be text.');
    await fileHost().shamooWriteTextFile(path(file), contents);
  },
});
