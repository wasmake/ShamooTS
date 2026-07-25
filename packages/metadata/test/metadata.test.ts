import { parseCompilerMetadata, type CanonicalValue, type MethodMetadata } from '@shamoo/metadata';
import { describe, expect, it } from 'vitest';

const location = { file: 'src/plugin.ts', line: 1, column: 1 };
const metadata = (argument: CanonicalValue = null) => ({
  version: 'test',
  components: [
    {
      id: 'src/plugin.ts#Plugin',
      kind: 'plugin',
      name: 'Plugin',
      file: 'src/plugin.ts',
      platform: 'common',
      decorators: [{ name: 'Plugin', arguments: [argument], location }],
      constructor: [] as {
        index: number;
        token: { kind: 'token'; value: string };
        location: typeof location;
      }[],
      properties: [],
      methods: [] as MethodMetadata[],
      location,
    },
  ],
  modules: [],
  communication: {
    services: [] as {
      id: string;
      version: string;
      componentId: string;
      methods: string[];
    }[],
    events: [] as { id: string; version: string }[],
    consumers: [] as {
      id: string;
      versionRange: string;
      dependentReload: 'keep-running' | 'reload';
    }[],
  },
});

function nestedValue(depth: number): CanonicalValue {
  let value: CanonicalValue = 'leaf';
  for (let index = 0; index < depth; index += 1) value = [value];
  return value;
}

describe('compiler metadata admission', () => {
  it('matches Runtime canonical depth, source position, and dependency index limits', () => {
    expect(() => parseCompilerMetadata(metadata(nestedValue(64)))).not.toThrow();
    expect(() => parseCompilerMetadata(metadata(nestedValue(65)))).toThrow(
      'Canonical value nesting exceeds 64',
    );

    const invalidLocation = structuredClone(metadata());
    const locationComponent = invalidLocation.components[0];
    if (locationComponent === undefined) throw new Error('Missing location fixture component.');
    locationComponent.location.line = 0;
    expect(() => parseCompilerMetadata(invalidLocation)).toThrow();

    const invalidDependency = structuredClone(metadata());
    const dependencyComponent = invalidDependency.components[0];
    if (dependencyComponent === undefined) throw new Error('Missing dependency fixture component.');
    dependencyComponent.constructor = [
      { index: -1, token: { kind: 'token', value: 'value' }, location },
    ];
    expect(() => parseCompilerMetadata(invalidDependency)).toThrow();
  });

  it.each(['v1.0.0', ' 1.0.0 '])('rejects non-strict exact version %j', (version) => {
    const value = metadata();
    value.communication.events = [{ id: 'example.event', version }];
    expect(() => parseCompilerMetadata(value)).toThrow('exact semantic version');
  });

  it.each(['v1.0.0', '1.0.0 ||'])('rejects non-NPM range %j', (versionRange) => {
    const value = metadata();
    value.communication.consumers = [
      { id: 'example.event', versionRange, dependentReload: 'keep-running' as const },
    ];
    expect(() => parseCompilerMetadata(value)).toThrow('NPM semantic version range');
  });

  it('requires domain-safe unique communication IDs', () => {
    const slash = metadata();
    slash.communication.events = [{ id: 'example/event', version: '1.0.0' }];
    expect(() => parseCompilerMetadata(slash)).toThrow('communication contract identifier');

    const duplicate = metadata();
    duplicate.communication.events = [
      { id: 'example.event', version: '1.0.0' },
      { id: 'example.event', version: '2.0.0' },
    ];
    expect(() => parseCompilerMetadata(duplicate)).toThrow('duplicated');
  });

  it('rejects duplicate executable identities and unknown service providers', () => {
    const duplicateComponent = metadata();
    const component = duplicateComponent.components[0];
    if (component === undefined) throw new Error('Missing component fixture.');
    duplicateComponent.components.push(structuredClone(component));
    expect(() => parseCompilerMetadata(duplicateComponent)).toThrow('Component id is duplicated');

    const conflictingMethod = metadata();
    const conflictingComponent = conflictingMethod.components[0];
    if (conflictingComponent === undefined) throw new Error('Missing component fixture.');
    conflictingComponent.methods = [
      {
        name: 'run',
        lifecycle: 'enable',
        invocation: 'task',
        decorators: [],
        parameters: [],
        location,
      },
    ];
    expect(() => parseCompilerMetadata(conflictingMethod)).toThrow('both lifecycle and invocation');

    const missingProvider = metadata();
    missingProvider.communication.services = [
      {
        id: 'example.service',
        version: '1.0.0',
        componentId: 'src/missing.ts#Missing',
        methods: ['run'],
      },
    ];
    expect(() => parseCompilerMetadata(missingProvider)).toThrow('unknown component');
  });
});
