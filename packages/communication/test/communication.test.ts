import {
  CodecError,
  CommunicationError,
  CommunicationClient,
  ServiceRegistry,
  ServiceUnavailableError,
  VersionedEventBus,
  binaryCommunicationHandler,
  defineEventContract,
  defineRemoteProcedure,
  defineServiceContract,
  dependentReloadConsumers,
  dependentReloadOrder,
  jsonCodec,
  registerCompilerServices,
  type BinaryRequestTransport,
} from '@shamoo/communication';
import { Container } from '@shamoo/di';
import { InvocationRuntime, loadRuntimeMetadata } from '@shamoo/lifecycle';
import { encodeCommunicationEnvelope } from '@shamoo/runtime-protocol';
import { describe, expect, it } from 'vitest';

interface GreetingService {
  greet(name: string): string;
}

const greeting = defineServiceContract<GreetingService>({
  id: 'example.greeting',
  version: '1.2.0',
  methods: ['greet'],
});

describe('cross-plugin services', () => {
  it('routes compiler-declared service methods through InvocationRuntime', async () => {
    const location = { file: 'plugin.ts', line: 1, column: 1 };
    const target = { greet: (name: string) => `hello ${name}` };
    const manifest = {
      version: 'test',
      modules: [],
      communication: {
        services: [
          {
            id: greeting.id,
            version: greeting.version,
            componentId: 'plugin.ts#Greeting',
            methods: ['greet'],
          },
        ],
        events: [],
        consumers: [],
      },
      components: [
        {
          id: 'plugin.ts#Greeting',
          kind: 'service' as const,
          name: 'Greeting',
          file: 'plugin.ts',
          platform: 'common' as const,
          decorators: [],
          constructor: [],
          properties: [],
          methods: [{ name: 'greet', decorators: [], parameters: [], location }],
          location,
        },
      ],
    };
    const loaded = loadRuntimeMetadata(manifest, {
      resolveComponent: () => target,
      resolveToken: () => 'token',
      isExecutableMethod: () => true,
    });
    const runtime = new InvocationRuntime(new Container());
    const registry = new ServiceRegistry(manifest.communication);
    const registrations = registerCompilerServices(manifest, loaded, runtime, registry);
    await expect(registry.service(greeting).greet('Alex')).resolves.toBe('hello Alex');
    registrations[0]?.close();
  });

  it('enforces compiler-declared service and event contracts', async () => {
    const metadata = {
      services: [
        {
          id: greeting.id,
          version: greeting.version,
          componentId: 'plugin.ts#Greeting',
          methods: ['greet'],
        },
      ],
      events: [{ id: 'example.changed', version: '1.0.0' }],
      consumers: [],
    } as const;
    expect(() =>
      new ServiceRegistry(metadata).register(greeting, { greet: (name) => name }),
    ).not.toThrow();
    const undeclared = defineServiceContract<{ ping(): void }>({
      id: 'example.ping',
      version: '1.0.0',
      methods: ['ping'],
    });
    expect(() => new ServiceRegistry(metadata).service(undeclared)).toThrow('compiler metadata');
    const bus = new VersionedEventBus(metadata);
    const declared = defineEventContract({
      id: 'example.changed',
      version: '1.0.0',
      codec: jsonCodec<number>(),
    });
    await expect(bus.publish(declared, 1)).resolves.toBe(0);
    expect(() =>
      bus.subscribe(
        defineEventContract({ id: 'example.other', version: '1.0.0', codec: jsonCodec<number>() }),
        () => undefined,
      ),
    ).toThrow('compiler metadata');
  });

  it('uses per-consumer compiler metadata for Java-compatible dependent reload', () => {
    const manifest = (name: string, dependentReload: 'keep-running' | 'reload') => ({
      name,
      compiler: {
        version: 'test',
        components: [],
        modules: [],
        communication: {
          services: [],
          events: [],
          consumers: [{ id: 'example.greeting', versionRange: '^1.0.0', dependentReload }],
        },
      },
    });
    expect(
      dependentReloadConsumers('example.greeting', [
        manifest('z-consumer', 'reload'),
        manifest('a-consumer', 'reload'),
        manifest('running', 'keep-running'),
      ]),
    ).toEqual(['a-consumer', 'z-consumer']);
  });

  it('retains proxy identity and resolves every call against the current provider', () => {
    const services = new ServiceRegistry();
    const first = services.register(greeting, { greet: (name) => `old ${name}` });
    const proxy = services.service(greeting, '^1.0.0');
    expect(Reflect.get(proxy, 'greet')).toBe(Reflect.get(proxy, 'greet'));
    expect(proxy.greet('world')).toBe('old world');

    const replacement = services.register(greeting, { greet: (name) => `new ${name}` });
    first.close();
    expect(services.service(greeting, '^1.0.0')).toBe(proxy);
    expect(proxy.greet('world')).toBe('new world');

    replacement.close();
    expect(() => proxy.greet('world')).toThrow(ServiceUnavailableError);
  });

  it('reports incompatible providers without handing out a stale implementation', () => {
    const services = new ServiceRegistry();
    services.register(greeting, { greet: () => 'hello' });
    const proxy = services.service(greeting, '^2.0.0');
    expect(services.availability(greeting, '^2.0.0')).toEqual({
      available: false,
      reason: 'incompatible',
    });
    expect(() => proxy.greet('world')).toThrow('incompatible');
  });

  it('validates contracts, registrations, ranges, and proxy reflection', () => {
    expect(() => defineServiceContract({ id: 'Bad Id', version: '1.0.0', methods: ['x'] })).toThrow(
      'contract id',
    );
    expect(() =>
      defineServiceContract({ id: 'example.service', version: '^1.0.0', methods: ['x'] }),
    ).toThrow('exact semver');
    expect(() =>
      defineServiceContract({ id: 'example.service', version: '1.0.0', methods: [] }),
    ).toThrow('unique method');
    expect(() =>
      defineServiceContract({ id: 'example.service', version: '1.0.0', methods: ['x', 'x'] }),
    ).toThrow('unique method');

    const contract = defineServiceContract<{ x(): number }>({
      id: 'example.service',
      version: '1.0.0',
      methods: ['x'],
    });
    const services = new ServiceRegistry();
    expect(() => services.register(contract, {} as { x(): number })).toThrow('missing method');
    expect(() => services.availability(contract, 'invalid range')).toThrow('Invalid semver range');
    expect(() => services.service(contract, 'invalid range')).toThrow('Invalid semver range');
    for (const version of ['v1.0.0', ' 1.0.0 '])
      expect(() =>
        defineServiceContract({ id: 'example.strict', version, methods: ['x'] }),
      ).toThrow('exact semver');
    for (const range of ['v1.0.0', '1.0.0 ||'])
      expect(() => services.availability(contract, range)).toThrow('Invalid semver range');
    expect(services.availability(contract)).toEqual({ available: false, reason: 'missing' });
    const proxy = services.service(contract);
    expect(Object.prototype.toString.call(proxy)).toBe('[object ShamooServiceProxy]');
    expect(Reflect.get(proxy, 'other')).toBeUndefined();
    expect(Reflect.get(proxy, Symbol.iterator)).toBeUndefined();
    expect(Reflect.set(proxy, 'x', () => 2)).toBe(false);
    expect(() => proxy.x()).toThrow('missing');

    const first = services.register(contract, { x: () => 1 });
    const replacement = services.register(contract, { x: () => 2 });
    first.close();
    first.close();
    expect(proxy.x()).toBe(2);
    replacement.close();
    replacement.close();

    const mutable = { x: () => 3 };
    services.register(contract, mutable);
    Reflect.set(mutable, 'x', 3);
    expect(() => proxy.x()).toThrow('missing');
  });
});

describe('versioned events and reload policies', () => {
  it('delivers codec-validated events only to compatible subscribers', async () => {
    const codec = jsonCodec<{ value: number }>({
      validate: (value): value is { value: number } =>
        typeof value === 'object' &&
        value !== null &&
        typeof Reflect.get(value, 'value') === 'number',
    });
    const event = defineEventContract({ id: 'example.changed', version: '2.1.0', codec });
    const bus = new VersionedEventBus();
    const received: number[] = [];
    bus.subscribe(
      event,
      (value) => {
        received.push(value.value);
      },
      '^2.0.0',
    );
    bus.subscribe(
      event,
      () => {
        received.push(99);
      },
      '^1.0.0',
    );
    expect(await bus.publish(event, { value: 7 })).toBe(1);
    expect(received).toEqual([7]);
  });

  it('computes direct and transitive dependent reload sets deterministically', () => {
    const graph = new Map([
      ['feature', new Set(['core'])],
      ['ui', new Set(['feature'])],
      ['other', new Set(['database'])],
    ]);
    expect(dependentReloadOrder('core', graph, 'none')).toEqual([]);
    expect(dependentReloadOrder('core', graph, 'direct')).toEqual(['feature']);
    expect(dependentReloadOrder('core', graph, 'transitive')).toEqual(['feature', 'ui']);
  });

  it('validates event subscriptions and awaits asynchronous listeners', async () => {
    const codec = jsonCodec<number>();
    expect(() => defineEventContract({ id: 'invalid id', version: '1.0.0', codec })).toThrow();
    const event = defineEventContract({ id: 'example.async', version: '1.0.0', codec });
    const bus = new VersionedEventBus();
    expect(() => bus.subscribe(event, () => undefined, 'invalid range')).toThrow();
    let delivered = false;
    const subscription = bus.subscribe(event, async () => {
      await Promise.resolve();
      delivered = true;
    });
    await expect(bus.publish(event, 1)).resolves.toBe(1);
    expect(delivered).toBe(true);
    subscription.close();
    subscription.close();
    await expect(bus.publish(event, 2)).resolves.toBe(0);
  });
});

describe('communication codecs', () => {
  it('bounds and validates JSON in both directions', () => {
    expect(() => jsonCodec({ maximumBytes: 0 })).toThrow(RangeError);
    const bounded = jsonCodec<unknown>({ maximumBytes: 2 });
    expect(() => bounded.encode('large')).toThrow(CodecError);
    expect(() => bounded.decode(new Uint8Array(3))).toThrow(CodecError);
    expect(() => jsonCodec().encode(1n)).toThrow('cannot be encoded');
    expect(() => jsonCodec().decode(Uint8Array.of(0xff))).toThrow('not valid UTF-8 JSON');
    expect(() =>
      jsonCodec<number>({ validate: (value): value is number => typeof value === 'number' }).decode(
        new TextEncoder().encode('"wrong"'),
      ),
    ).toThrow('failed codec validation');
  });
});

describe('optional remote communication', () => {
  const procedure = defineRemoteProcedure({
    id: 'example.routing',
    version: '1.0.0',
    operation: 'lookup',
    request: jsonCodec<{ player: string }>(),
    response: jsonCodec<{ server: string }>(),
  });

  it('has explicit standalone behavior when Velocity is unavailable', async () => {
    const transport: BinaryRequestTransport = {
      availability: () => ({ available: false, reason: 'No Velocity channel is connected.' }),
      request: () => Promise.reject(new Error('must not send')),
    };
    const client = new CommunicationClient(transport);
    expect(client.availability()).toEqual({
      available: false,
      reason: 'No Velocity channel is connected.',
    });
    await expect(client.request(procedure, { player: 'Alex' })).rejects.toMatchObject({
      code: 'UNAVAILABLE',
    });
  });

  it('round-trips typed request and response payloads', async () => {
    const server = binaryCommunicationHandler((request) =>
      Promise.resolve({
        protocolVersion: 1,
        kind: 'response',
        requestId: request.requestId,
        status: 'success',
        payload: procedure.response.encode({ server: 'lobby' }),
      }),
    );
    const transport: BinaryRequestTransport = {
      availability: () => ({ available: true }),
      request: (payload) => server(payload),
    };
    await expect(
      new CommunicationClient(transport).request(procedure, { player: 'Alex' }),
    ).resolves.toEqual({
      server: 'lobby',
    });
  });

  it('rejects a handler response with a different UUID', async () => {
    const server = binaryCommunicationHandler(() =>
      Promise.resolve({
        protocolVersion: 1,
        kind: 'response',
        requestId: '00112233-4455-6677-8899-aabbccddeeff',
        status: 'success',
        payload: new Uint8Array(),
      }),
    );
    const transport: BinaryRequestTransport = {
      availability: () => ({ available: true }),
      request: (payload) => server(payload),
    };
    await expect(
      new CommunicationClient(transport).request(procedure, { player: 'Alex' }),
    ).rejects.toMatchObject({ code: 'INVALID_RESPONSE' });
  });

  it('rejects request envelopes returned as responses', async () => {
    const client = new CommunicationClient({
      availability: () => ({ available: true }),
      request: (payload) => Promise.resolve(payload),
    });
    await expect(client.request(procedure, { player: 'Alex' })).rejects.toMatchObject({
      code: 'INVALID_RESPONSE',
    });
  });

  it('validates procedures, timeouts, remote failures, and transport failures', async () => {
    expect(() => defineRemoteProcedure({ ...procedure, operation: 'Invalid Op' })).toThrow(
      'operation',
    );
    const available = { availability: () => ({ available: true as const }) };
    expect(
      () =>
        new CommunicationClient(
          { ...available, request: () => Promise.resolve(new Uint8Array()) },
          0,
        ),
    ).toThrow(RangeError);
    const failed = new CommunicationClient({
      ...available,
      request: () => Promise.reject(new Error('transport failed')),
    });
    await expect(failed.request(procedure, { player: 'Alex' })).rejects.toMatchObject({
      code: 'TRANSPORT_ERROR',
    });
    await expect(failed.request(procedure, { player: 'Alex' }, { timeoutMs: 0 })).rejects.toThrow(
      RangeError,
    );

    const remote = binaryCommunicationHandler((request) =>
      Promise.resolve({
        protocolVersion: 1,
        kind: 'response',
        requestId: request.requestId,
        status: 'error',
        error: { code: 'denied', message: 'no' },
      }),
    );
    const remoteClient = new CommunicationClient({
      ...available,
      request: (payload) => remote(payload),
    });
    await expect(remoteClient.request(procedure, { player: 'Alex' })).rejects.toMatchObject({
      code: 'REMOTE_ERROR',
    });
  });

  it('enforces timeout and abort semantics even when a transport ignores cancellation', async () => {
    const transport: BinaryRequestTransport = {
      availability: () => ({ available: true }),
      request: () => new Promise(() => undefined),
    };
    const client = new CommunicationClient(transport, 10);
    await expect(client.request(procedure, { player: 'Alex' })).rejects.toMatchObject({
      code: 'TIMEOUT',
    });

    const abort = new AbortController();
    const pending = client.request(procedure, { player: 'Alex' }, { signal: abort.signal });
    abort.abort();
    await expect(pending).rejects.toMatchObject({ code: 'ABORTED' });

    const alreadyAborted = new AbortController();
    alreadyAborted.abort();
    await expect(
      client.request(procedure, { player: 'Alex' }, { signal: alreadyAborted.signal }),
    ).rejects.toMatchObject({ code: 'ABORTED' });

    const duringRequest = new AbortController();
    const aborting = new CommunicationClient({
      availability: () => ({ available: true }),
      request: () => {
        duringRequest.abort();
        return Promise.reject(new Error('transport stopped'));
      },
    });
    await expect(
      aborting.request(procedure, { player: 'Alex' }, { signal: duringRequest.signal }),
    ).rejects.toMatchObject({ code: 'ABORTED' });
  });

  it('rejects response envelopes at the server boundary and invalid handler output', async () => {
    const response = binaryCommunicationHandler(() => Promise.reject(new Error('unused')));
    const responseBytes = encodeCommunicationEnvelope({
      protocolVersion: 1,
      kind: 'response',
      requestId: '00112233-4455-6677-8899-aabbccddeeff',
      status: 'success',
      payload: new Uint8Array(),
    });
    await expect(response(responseBytes)).rejects.toBeInstanceOf(CommunicationError);

    const mismatched = binaryCommunicationHandler((request) =>
      Promise.resolve({
        protocolVersion: 1,
        kind: 'response',
        requestId: request.requestId.replace(/^./, request.requestId.startsWith('0') ? '1' : '0'),
        status: 'success',
        payload: new Uint8Array(),
      }),
    );
    await expect(
      new CommunicationClient({
        availability: () => ({ available: true }),
        request: mismatched,
      }).request(procedure, { player: 'Alex' }),
    ).rejects.toMatchObject({ code: 'INVALID_RESPONSE' });
  });
});
