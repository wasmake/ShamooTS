import type { ConfigDecoder, ConfigSource } from '@shamoo/config';

export interface ExampleConfig {
  readonly greeting: string;
  readonly announceOnEnable: boolean;
  readonly maximumGreetingLength: number;
}

export class MemoryConfigSource implements ConfigSource {
  public readonly name = 'example defaults';

  public constructor(private readonly value: unknown) {}

  public load(): unknown {
    return this.value;
  }
}

function objectValue(input: unknown): Record<string, unknown> {
  if (input === null || typeof input !== 'object' || Array.isArray(input)) {
    throw new TypeError('Configuration must be an object.');
  }
  return input as Record<string, unknown>;
}

export const exampleConfigDecoder: ConfigDecoder<ExampleConfig> = {
  decode(input) {
    const value = objectValue(input);
    if (typeof value.greeting !== 'string' || value.greeting.trim().length === 0) {
      throw new TypeError('Configuration greeting must be a non-empty string.');
    }
    if (typeof value.announceOnEnable !== 'boolean') {
      throw new TypeError('Configuration announceOnEnable must be boolean.');
    }
    if (
      typeof value.maximumGreetingLength !== 'number' ||
      !Number.isSafeInteger(value.maximumGreetingLength) ||
      value.maximumGreetingLength <= 0
    ) {
      throw new TypeError('Configuration maximumGreetingLength must be a positive integer.');
    }

    const greeting = value.greeting.trim();
    if (greeting.length > value.maximumGreetingLength) {
      throw new RangeError('Configuration greeting exceeds maximumGreetingLength.');
    }
    return Object.freeze({
      greeting,
      announceOnEnable: value.announceOnEnable,
      maximumGreetingLength: value.maximumGreetingLength,
    });
  },
};
