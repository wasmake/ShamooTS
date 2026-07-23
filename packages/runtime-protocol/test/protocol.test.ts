import { readFile } from 'node:fs/promises';

import {
  COMMON_DESCRIPTOR_JSON_SCHEMA,
  MANIFEST_VERSION,
  PROTOCOL_VERSION,
  ProtocolVersionSchema,
  ProtocolValidationError,
  isCommonDescriptor,
  negotiateCompatibility,
  parseCommonDescriptor,
  type CommonDescriptor,
  type RuntimeCompatibility,
} from '@shamoo/runtime-protocol';
import { describe, expect, it } from 'vitest';

const canonicalDescriptor = {
  name: 'identity',
  displayName: 'Shamoo Identity',
  version: '1.0.0',
  shamoo: { api: '^1.0.0', runtime: '^1.0.0', manifest: 1 },
  platforms: {
    paper: {
      enabled: true,
      entrypoint: 'dist/paper.mjs',
      minecraft: '1.21.x',
      paperApi: '1.21.x',
    },
    velocity: { enabled: true, entrypoint: 'dist/velocity.mjs', velocityApi: '3.x' },
  },
  dependencies: { required: {}, optional: {}, loadBefore: [], loadAfter: [] },
  node: {
    builtins: ['node:buffer'],
    filesystem: { read: ['./'], write: ['./data'] },
    network: false,
    workers: false,
    childProcess: false,
    nativeAddons: false,
  },
  reload: { watch: true, debounceMs: 500, preserveState: true },
} as const;

async function fixture(): Promise<CommonDescriptor> {
  const json = await readFile(
    new URL('./fixtures/common-descriptor.golden.json', import.meta.url),
    'utf8',
  );
  return parseCommonDescriptor(JSON.parse(json) as unknown);
}

function runtime(overrides: Partial<RuntimeCompatibility> = {}): RuntimeCompatibility {
  return {
    protocol: PROTOCOL_VERSION,
    runtimeVersion: '1.0.0',
    apiVersion: '1.2.0',
    platform: { name: 'paper', minecraftVersion: '1.21.4', paperApiVersion: '1.21.4' },
    node: {
      builtins: new Set(['node:buffer']),
      filesystem: { read: true, write: true },
      network: false,
      workers: false,
      childProcess: false,
      nativeAddons: false,
    },
    ...overrides,
  };
}

describe('common protocol descriptor', () => {
  it('matches and round-trips the cross-runtime golden fixture exactly', async () => {
    const descriptor = await fixture();
    expect(descriptor).toEqual(canonicalDescriptor);
    expect(parseCommonDescriptor(JSON.parse(JSON.stringify(descriptor)) as unknown)).toEqual(
      descriptor,
    );
    expect(descriptor.shamoo.manifest).toBe(MANIFEST_VERSION);
    expect(COMMON_DESCRIPTOR_JSON_SCHEMA.$schema).toContain('draft-07');
    expect(Object.isFrozen(COMMON_DESCRIPTOR_JSON_SCHEMA)).toBe(true);
  });

  it.each([
    [
      'unknown field',
      (value: Record<string, unknown>) => {
        value.identity = {};
      },
    ],
    [
      'manifest version',
      (value: Record<string, unknown>) => {
        (value.shamoo as Record<string, unknown>).manifest = 2;
      },
    ],
    [
      'entrypoint traversal',
      (value: Record<string, unknown>) => {
        const platforms = value.platforms as Record<string, Record<string, unknown>>;
        if (platforms.paper === undefined) throw new Error('Fixture must contain Paper.');
        platforms.paper.entrypoint = '../plugin.mjs';
      },
    ],
    [
      'entrypoint extension',
      (value: Record<string, unknown>) => {
        const platforms = value.platforms as Record<string, Record<string, unknown>>;
        if (platforms.paper === undefined) throw new Error('Fixture must contain Paper.');
        platforms.paper.entrypoint = 'dist/plugin.ts';
      },
    ],
    [
      'absolute filesystem path',
      (value: Record<string, unknown>) => {
        const node = value.node as Record<string, unknown>;
        ((node.filesystem as Record<string, unknown>).read as unknown[]) = ['/secret'];
      },
    ],
    [
      'filesystem traversal',
      (value: Record<string, unknown>) => {
        const node = value.node as Record<string, unknown>;
        ((node.filesystem as Record<string, unknown>).read as unknown[]) = ['./data/../secret'];
      },
    ],
    [
      'filesystem backslash',
      (value: Record<string, unknown>) => {
        const node = value.node as Record<string, unknown>;
        ((node.filesystem as Record<string, unknown>).write as unknown[]) = ['.\\data'];
      },
    ],
    [
      'invalid semver range',
      (value: Record<string, unknown>) => {
        const platforms = value.platforms as Record<string, Record<string, unknown>>;
        if (platforms.velocity === undefined) throw new Error('Fixture must contain Velocity.');
        platforms.velocity.velocityApi = 'latest';
      },
    ],
    [
      'invalid plugin name',
      (value: Record<string, unknown>) => {
        value.name = 'Bad Name';
      },
    ],
    [
      'obsolete reload field',
      (value: Record<string, unknown>) => {
        const reload = value.reload as Record<string, unknown>;
        delete reload.watch;
        reload.enabled = true;
      },
    ],
  ])('rejects %s with structured issues', async (_name, mutate) => {
    const value = structuredClone(await fixture()) as unknown as Record<string, unknown>;
    mutate(value);
    expect(isCommonDescriptor(value)).toBe(false);
    try {
      parseCommonDescriptor(value);
      throw new Error('Expected descriptor validation to fail.');
    } catch (error) {
      expect(error).toBeInstanceOf(ProtocolValidationError);
      const issue = (error as ProtocolValidationError).issues[0];
      expect(issue?.code.length).toBeGreaterThan(0);
      expect(issue?.message.length).toBeGreaterThan(0);
    }
  });

  it('requires both strict platform objects and at least one enabled platform', async () => {
    const value = structuredClone(await fixture());
    value.platforms.paper = { enabled: false };
    value.platforms.velocity = { enabled: false, velocityApi: '3.x' };
    expect(() => parseCommonDescriptor(value)).toThrow('At least one platform must be enabled');
    expect(() =>
      parseCommonDescriptor({ ...value, platforms: { paper: value.platforms.paper } }),
    ).toThrow(ProtocolValidationError);
    expect(() =>
      parseCommonDescriptor({
        ...value,
        platforms: { ...value.platforms, paper: { enabled: false, paperApi: 'invalid' } },
      }),
    ).toThrow(ProtocolValidationError);
  });

  it('accepts npm x-ranges and dependency maps', async () => {
    const value = structuredClone(await fixture());
    value.dependencies.required = { core: '1.x' };
    value.dependencies.optional = { economy: '^2.0.0' };
    value.dependencies.loadAfter = ['core'];
    expect(parseCommonDescriptor(value).dependencies).toEqual(value.dependencies);
  });

  it.each(['', ' ', '\t\n'])('rejects empty semver range %j', async (range) => {
    const value = structuredClone(await fixture());
    value.shamoo.api = range;
    expect(() => parseCommonDescriptor(value)).toThrow(ProtocolValidationError);
  });

  it.each(['data dir', 'data\tfile', 'data\u0001file'])('rejects unsafe path %j', async (path) => {
    const value = structuredClone(await fixture());
    value.node.filesystem.read = [path];
    expect(() => parseCommonDescriptor(value)).toThrow(ProtocolValidationError);
  });
});

describe('compatibility negotiation', () => {
  it('accepts future protocol minors in the standalone version schema', () => {
    expect(ProtocolVersionSchema.parse({ major: 1, minor: 7 })).toEqual({ major: 1, minor: 7 });
    expect(ProtocolVersionSchema.safeParse({ major: 1, minor: -1 }).success).toBe(false);
    expect(ProtocolVersionSchema.safeParse({ major: 2, minor: 0 }).success).toBe(false);
    expect('protocol' in canonicalDescriptor).toBe(false);
  });
  it('checks only the selected enabled platform', async () => {
    expect(negotiateCompatibility(await fixture(), runtime())).toEqual({
      compatible: true,
      reasons: [],
    });
    expect(
      negotiateCompatibility(
        await fixture(),
        runtime({ platform: { name: 'velocity', velocityApiVersion: '3.4.0' } }),
      ),
    ).toEqual({ compatible: true, reasons: [] });
  });

  it('checks Paper Minecraft and API ranges independently', async () => {
    const result = negotiateCompatibility(
      await fixture(),
      runtime({
        platform: { name: 'paper', minecraftVersion: '1.20.6', paperApiVersion: '1.20.6' },
      }),
    );
    expect(result.reasons.map(({ path }) => path)).toEqual([
      'platforms.paper.minecraft',
      'platforms.paper.paperApi',
    ]);
  });

  it('reports all runtime, protocol, platform, and Node incompatibilities', async () => {
    const descriptor = structuredClone(await fixture());
    descriptor.node.network = true;
    descriptor.node.workers = true;
    const result = negotiateCompatibility(
      descriptor,
      runtime({
        protocol: { major: 2, minor: 0 },
        runtimeVersion: '2.0.0',
        apiVersion: '2.0.0',
        platform: { name: 'paper', minecraftVersion: '1.20.6', paperApiVersion: '1.20.6' },
        node: {
          builtins: new Set(),
          filesystem: { read: false, write: false },
          network: false,
          workers: false,
          childProcess: false,
          nativeAddons: false,
        },
      }),
    );
    expect(result.compatible).toBe(false);
    expect(new Set(result.reasons.map(({ code }) => code))).toEqual(
      new Set(['PROTOCOL', 'RUNTIME', 'API', 'PLATFORM', 'MINECRAFT', 'CAPABILITY']),
    );
    expect(
      result.reasons.every(({ message, path }) => message.length > 10 && path.length > 0),
    ).toBe(true);
  });
});
