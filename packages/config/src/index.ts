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
