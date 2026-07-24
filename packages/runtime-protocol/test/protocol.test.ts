import { readFile } from 'node:fs/promises';

import {
  COMMON_DESCRIPTOR_JSON_SCHEMA,
  COMMUNICATION_PROTOCOL_VERSION,
  MANIFEST_VERSION,
  MAX_COMMUNICATION_FRAME_BYTES,
  MAX_COMMUNICATION_PAYLOAD_BYTES,
  PROTOCOL_VERSION,
  ProtocolVersionSchema,
  ProtocolValidationError,
  RuntimeSourceMap,
  CommunicationWireError,
  decodeCommunicationEnvelope,
  encodeCommunicationEnvelope,
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
  it('maps exact one-based cross-runtime source positions', () => {
    const maps = new RuntimeSourceMap();
    const generated = { resourceName: 'paper/index.js', line: 2, column: 4 };
    const original = { resourceName: 'src/plugin.ts', line: 10, column: 3 };
    maps.register(generated, original);
    expect(maps.map(generated)).toEqual(original);
    expect(maps.map({ ...generated, column: 5 })).toEqual({ ...generated, column: 5 });
    expect(maps.size).toBe(1);
    expect(() => {
      maps.register({ ...generated, line: 0 }, original);
    }).toThrow('one-based');
    maps.clear();
    expect(maps.size).toBe(0);
  });

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

  it('rejects conflicting dependencies and duplicate capability entries', async () => {
    const conflicting = structuredClone(await fixture());
    conflicting.dependencies.required = { core: '1.x' };
    conflicting.dependencies.optional = { core: '^1.0.0' };
    expect(() => parseCommonDescriptor(conflicting)).toThrow('both required and optional');

    const ordering = structuredClone(await fixture());
    ordering.dependencies.loadBefore = ['core', 'core'];
    ordering.dependencies.loadAfter = ['identity'];
    ordering.node.builtins = ['node:buffer', 'node:buffer'];
    const error = await Promise.resolve()
      .then(() => parseCommonDescriptor(ordering))
      .catch((reason: unknown) => reason);
    expect(error).toBeInstanceOf(ProtocolValidationError);
    expect((error as ProtocolValidationError).issues.map(({ message }) => message)).toEqual(
      expect.arrayContaining([
        'Duplicate load ordering entry: core',
        'A plugin cannot order itself.',
        'Entries must be unique.',
      ]),
    );
  });

  it('accepts explicitly relative entrypoints', async () => {
    const value = structuredClone(await fixture());
    value.platforms.paper.entrypoint = './dist/paper.mjs';
    expect(parseCommonDescriptor(value).platforms.paper).toMatchObject({
      entrypoint: './dist/paper.mjs',
    });
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

  it('rejects the shared Java/TypeScript canonical invalid-v1 cases', async () => {
    const cases = JSON.parse(
      await readFile(
        new URL('./fixtures/common-descriptor.invalid-v1.json', import.meta.url),
        'utf8',
      ),
    ) as { name: string; pointer: string; value: unknown }[];
    for (const invalid of cases) {
      const value = structuredClone(await fixture()) as unknown as Record<string, unknown>;
      const segments = invalid.pointer.slice(1).split('/');
      let target: Record<string, unknown> | unknown[] = value;
      for (const segment of segments.slice(0, -1)) {
        const next: unknown = Reflect.get(target, segment);
        if (next === null || typeof next !== 'object')
          throw new Error(`Invalid golden pointer: ${invalid.pointer}`);
        target = next as Record<string, unknown> | unknown[];
      }
      const key = segments.at(-1);
      if (key === undefined) throw new Error(`Invalid golden pointer: ${invalid.pointer}`);
      Reflect.set(target, key, invalid.value);
      expect(isCommonDescriptor(value), invalid.name).toBe(false);
    }
  });
});

describe('communication wire protocol', () => {
  const requestId = '00112233-4455-6677-8899-aabbccddeeff';
  const golden = async (): Promise<Record<string, Uint8Array>> =>
    Object.fromEntries(
      (await readFile(new URL('./fixtures/communication-v1-golden.hex', import.meta.url), 'ascii'))
        .trim()
        .split('\n')
        .map((line) => {
          const [name, hex] = line.split('=', 2) as [string, string];
          return [name, Uint8Array.from(Buffer.from(hex, 'hex'))];
        }),
    );
  const requiredFixture = (fixtures: Record<string, Uint8Array>, name: string): Uint8Array => {
    const value = fixtures[name];
    if (value === undefined) throw new Error(`Missing golden fixture: ${name}`);
    return value;
  };

  it('matches Java golden bytes and decodes every role', async () => {
    const request = {
      protocolVersion: COMMUNICATION_PROTOCOL_VERSION,
      kind: 'request',
      requestId,
      contract: { id: 'example/routing', version: '1.2.3' },
      operation: 'lookup',
      payload: Uint8Array.from([0, 1, 254, 255]),
    } as const;
    const success = {
      protocolVersion: COMMUNICATION_PROTOCOL_VERSION,
      kind: 'response',
      requestId,
      status: 'success',
      payload: Uint8Array.from([0, 1, 254, 255]),
    } as const;
    const error = {
      protocolVersion: COMMUNICATION_PROTOCOL_VERSION,
      kind: 'response',
      requestId,
      status: 'error',
      error: { code: 'unavailable', message: 'Provider is reloading.' },
    } as const;
    const fixtures = await golden();
    for (const [name, envelope] of Object.entries({ request, success, error })) {
      const fixture = requiredFixture(fixtures, name);
      expect(encodeCommunicationEnvelope(envelope)).toEqual(fixture);
      expect(decodeCommunicationEnvelope(fixture)).toEqual(envelope);
    }
  });

  it('rejects oversized, malformed UTF-8, trailing, non-UUID, and future frames', async () => {
    const base = {
      protocolVersion: COMMUNICATION_PROTOCOL_VERSION,
      kind: 'request',
      requestId,
      contract: { id: 'example/routing', version: '1.0.0' },
      operation: 'lookup',
      payload: new Uint8Array(),
    } as const;
    expect(() =>
      encodeCommunicationEnvelope({
        ...base,
        payload: new Uint8Array(MAX_COMMUNICATION_PAYLOAD_BYTES + 1),
      }),
    ).toThrow(CommunicationWireError);
    expect(() =>
      decodeCommunicationEnvelope(new Uint8Array(MAX_COMMUNICATION_FRAME_BYTES + 1)),
    ).toThrow(CommunicationWireError);
    expect(() => encodeCommunicationEnvelope({ ...base, requestId: 'request-1' })).toThrow(
      CommunicationWireError,
    );
    expect(() =>
      encodeCommunicationEnvelope({ ...base, contract: { id: 'bad route', version: '1.0.0' } }),
    ).toThrow(CommunicationWireError);
    expect(() =>
      encodeCommunicationEnvelope({
        ...base,
        contract: { id: 'example/routing', version: 'v1.0.0' },
      }),
    ).toThrow(CommunicationWireError);
    const fixtures = await golden();
    const requestFixture = requiredFixture(fixtures, 'request');
    const trailing = new Uint8Array(requestFixture.byteLength + 1);
    trailing.set(requestFixture);
    expect(() => decodeCommunicationEnvelope(trailing)).toThrow(CommunicationWireError);
    const malformed = requestFixture.slice();
    malformed[32] = 0xff;
    expect(() => decodeCommunicationEnvelope(malformed)).toThrow(CommunicationWireError);
    const future = requestFixture.slice();
    future[4] = 2;
    expect(() => decodeCommunicationEnvelope(future)).toThrow(CommunicationWireError);
  });

  it('rejects invalid envelope fields before encoding', () => {
    const base = {
      protocolVersion: COMMUNICATION_PROTOCOL_VERSION,
      kind: 'request',
      requestId,
      contract: { id: 'example/routing', version: '1.0.0' },
      operation: 'lookup',
      payload: new Uint8Array(),
    } as const;
    expect(() => encodeCommunicationEnvelope({ ...base, protocolVersion: 2 as 1 })).toThrow(
      'Unsupported communication protocol version',
    );
    expect(() => encodeCommunicationEnvelope({ ...base, operation: 'bad operation' })).toThrow(
      'Invalid operation',
    );
    expect(() =>
      encodeCommunicationEnvelope({
        ...base,
        payload: new DataView(new ArrayBuffer(1)) as unknown as Uint8Array,
      }),
    ).toThrow('must be a Uint8Array');

    const response = {
      protocolVersion: COMMUNICATION_PROTOCOL_VERSION,
      kind: 'response',
      requestId,
      status: 'error',
      error: { code: 'unavailable', message: 'Unavailable' },
    } as const;
    expect(() =>
      encodeCommunicationEnvelope({ ...response, error: { ...response.error, code: 'BAD CODE' } }),
    ).toThrow('Invalid error code');
    expect(() =>
      encodeCommunicationEnvelope({ ...response, error: { ...response.error, message: '  ' } }),
    ).toThrow('must not be blank');
    expect(() =>
      encodeCommunicationEnvelope({
        ...response,
        error: { ...response.error, message: '\ud800x' },
      }),
    ).toThrow('not valid Unicode');
    expect(() =>
      encodeCommunicationEnvelope({
        ...response,
        error: { ...response.error, message: 'x'.repeat(1_025) },
      }),
    ).toThrow('Invalid error message byte length');
  });

  it('rejects malformed frame headers, lengths, and decoded fields', async () => {
    const fixtures = await golden();
    const request = requiredFixture(fixtures, 'request');
    const invalid = (mutate: (frame: Uint8Array) => void): Uint8Array => {
      const frame = request.slice();
      mutate(frame);
      return frame;
    };
    expect(() => decodeCommunicationEnvelope(new Uint8Array(21))).toThrow(
      'Invalid communication frame size',
    );
    expect(() => decodeCommunicationEnvelope(invalid((frame) => (frame[0] = 0)))).toThrow(
      'Invalid communication magic',
    );
    expect(() => decodeCommunicationEnvelope(invalid((frame) => (frame[5] = 3)))).toThrow(
      'Invalid communication role',
    );
    expect(() => decodeCommunicationEnvelope(request.slice(0, 22))).toThrow(
      'Truncated contract id length',
    );
    expect(() =>
      decodeCommunicationEnvelope(
        invalid((frame) => {
          new DataView(frame.buffer).setUint16(22, 0);
        }),
      ),
    ).toThrow('Invalid contract id length');
    expect(() => decodeCommunicationEnvelope(invalid((frame) => (frame[32] = 0x20)))).toThrow(
      'Invalid contract id',
    );
    expect(() => decodeCommunicationEnvelope(invalid((frame) => (frame[47] = 0x76)))).toThrow(
      'Contract version must be exact semver',
    );
    expect(() => decodeCommunicationEnvelope(invalid((frame) => (frame[52] = 0x20)))).toThrow(
      'Invalid operation',
    );

    for (const [name, message] of [
      ['success', 'Response length does not match the frame'],
      ['error', 'Error lengths do not match the frame'],
    ] as const) {
      const fixture = requiredFixture(fixtures, name);
      const trailing = new Uint8Array(fixture.byteLength + 1);
      trailing.set(fixture);
      expect(() => decodeCommunicationEnvelope(trailing)).toThrow(message);
    }
    const structuredError = requiredFixture(fixtures, 'error').slice();
    structuredError[26] = 0x20;
    expect(() => decodeCommunicationEnvelope(structuredError)).toThrow('Invalid structured error');
  });

  it('does not retain mutable payload or frame bytes', () => {
    const payload = Uint8Array.from([1, 2]);
    const frame = encodeCommunicationEnvelope({
      protocolVersion: 1,
      kind: 'response',
      requestId,
      status: 'success',
      payload,
    });
    payload[0] = 9;
    const decoded = decodeCommunicationEnvelope(frame);
    frame[frame.length - 1] = 9;
    expect(
      decoded.kind === 'response' && decoded.status === 'success' ? decoded.payload : undefined,
    ).toEqual(Uint8Array.from([1, 2]));
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

  it('reports disabled and incompatible selected platforms', async () => {
    const paperDisabled = structuredClone(await fixture());
    paperDisabled.platforms.paper = { enabled: false };
    expect(negotiateCompatibility(paperDisabled, runtime()).reasons).toMatchObject([
      { path: 'platforms.paper.enabled' },
    ]);

    const velocityDisabled = structuredClone(await fixture());
    velocityDisabled.platforms.velocity = { enabled: false };
    expect(
      negotiateCompatibility(
        velocityDisabled,
        runtime({ platform: { name: 'velocity', velocityApiVersion: '3.4.0' } }),
      ).reasons,
    ).toMatchObject([{ path: 'platforms.velocity.enabled' }]);

    expect(
      negotiateCompatibility(
        await fixture(),
        runtime({ platform: { name: 'velocity', velocityApiVersion: '4.0.0' } }),
      ).reasons,
    ).toMatchObject([{ path: 'platforms.velocity.velocityApi' }]);
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
