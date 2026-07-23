import { createHash } from 'node:crypto';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import {
  analyzePlatformCoverage,
  canonicalCoverageJson,
  diffGeneratedFile,
  generatePlatform,
  migrateJvmApiModelV1,
  parseJvmApiModel,
  readJvmApiModel,
  syncGeneratedFile,
  verifyModelChecksum,
  type JvmApiModel,
} from '@shamoo/platform-codegen';
import { describe, expect, it } from 'vitest';

const minimalModel = (overrides: Partial<JvmApiModel> = {}): JvmApiModel => ({
  schemaVersion: 2,
  platform: 'paper',
  apiVersion: 'test',
  generatedBy: 'test',
  declarations: [],
  ...overrides,
});

describe('JVM model validation', () => {
  it.each([
    [null, 'model must be an object'],
    [[], 'model must be an object'],
    [{}, 'schemaVersion must be 2'],
    [{ ...minimalModel(), platform: 'fabric' }, 'Unsupported model.platform'],
    [{ ...minimalModel(), declarations: null }, 'model.declarations must be an array'],
    [
      { ...minimalModel(), declarations: [{ id: 'a', javaName: 'a.A', name: 'A', kind: 'trait' }] },
      'Unsupported model.declarations[0].kind',
    ],
    [
      { ...minimalModel(), events: [{ type: 'Event', javaName: 'a.Event', cancellable: 'yes' }] },
      'cancellable must be boolean',
    ],
    [
      {
        ...minimalModel(),
        packets: [{ type: 'Packet', javaName: 'a.Packet', registrations: [] }],
      },
      'registrations must not be empty',
    ],
    [
      {
        ...minimalModel(),
        packets: [
          {
            type: 'Packet',
            javaName: 'a.Packet',
            registrations: [{ phase: 'invalid', direction: 'clientbound' }],
          },
        ],
      },
      'Invalid packet phase or direction',
    ],
    [
      {
        ...minimalModel(),
        packets: [
          {
            type: 'Packet',
            javaName: 'a.Packet',
            registrations: [{ phase: 'play', direction: 'sideways' }],
          },
        ],
      },
      'Invalid packet phase or direction',
    ],
    [
      {
        ...minimalModel(),
        packets: [
          {
            type: 'Packet',
            javaName: 'a.Packet',
            registrations: [{ phase: 'play', direction: 'clientbound', id: -1 }],
          },
        ],
      },
      'id must be a non-negative integer',
    ],
  ])('rejects malformed input %#', (input, message) => {
    expect(() => parseJvmApiModel(input)).toThrow(message);
  });

  it('rejects duplicate declaration, event, and packet keys', () => {
    const declaration = { id: 'same', javaName: 'a.A', name: 'A', kind: 'class' as const };
    expect(() =>
      parseJvmApiModel(minimalModel({ declarations: [declaration, declaration] })),
    ).toThrow('Duplicate declaration id');
    const event = { type: 'Same', javaName: 'a.Event', cancellable: false };
    expect(() => parseJvmApiModel(minimalModel({ events: [event, event] }))).toThrow(
      'Duplicate event type',
    );
    const packet = {
      type: 'Same',
      javaName: 'a.Packet',
      registrations: [{ phase: 'play' as const, direction: 'clientbound' as const }],
    };
    expect(() => parseJvmApiModel(minimalModel({ packets: [packet, packet] }))).toThrow(
      'Duplicate packet type',
    );
  });

  it.each([
    [
      'parameter nullable',
      {
        methods: [
          { name: 'm', parameters: [{ name: 'p', type: 'int', nullable: 1 }], returns: 'void' },
        ],
      },
      'nullable must be boolean',
    ],
    [
      'parameter varargs',
      {
        methods: [
          { name: 'm', parameters: [{ name: 'p', type: 'int', varargs: 'yes' }], returns: 'void' },
        ],
      },
      'varargs must be boolean',
    ],
    [
      'method nullable',
      { methods: [{ name: 'm', parameters: [], returns: 'void', nullable: null }] },
      'nullable must be boolean',
    ],
    [
      'method static',
      { methods: [{ name: 'm', parameters: [], returns: 'void', static: 1 }] },
      'static must be boolean',
    ],
    [
      'method default',
      { methods: [{ name: 'm', parameters: [], returns: 'void', default: 'yes' }] },
      'default must be boolean',
    ],
    [
      'field readonly',
      { fields: [{ name: 'f', type: 'int', readonly: 1 }] },
      'readonly must be boolean',
    ],
    [
      'field nullable',
      { fields: [{ name: 'f', type: 'int', nullable: 'yes' }] },
      'nullable must be boolean',
    ],
    [
      'field static',
      { fields: [{ name: 'f', type: 'int', static: null }] },
      'static must be boolean',
    ],
    [
      'field constant',
      { fields: [{ name: 'f', type: 'int', constant: null }] },
      'constant must be string, number, or boolean',
    ],
  ])('rejects a present nonboolean or mistyped optional %s', (_label, members, message) => {
    expect(() =>
      parseJvmApiModel(
        minimalModel({
          declarations: [
            { id: 'a.A', javaName: 'a.A', name: 'A', kind: 'interface', ...members } as never,
          ],
        }),
      ),
    ).toThrow(message);
  });

  it('rejects a non-final varargs parameter', () => {
    expect(() =>
      parseJvmApiModel(
        minimalModel({
          declarations: [
            {
              id: 'a.A',
              javaName: 'a.A',
              name: 'A',
              kind: 'interface',
              methods: [
                {
                  name: 'm',
                  parameters: [
                    { name: 'first', type: 'int', varargs: true },
                    { name: 'second', type: 'int' },
                  ],
                  returns: 'void',
                },
              ],
            },
          ],
        }),
      ),
    ).toThrow('varargs may only be true for the last parameter');
  });

  it('keeps v1 migration explicit and validates the migrated result', () => {
    expect(() => migrateJvmApiModelV1(minimalModel())).toThrow('schemaVersion must be 1');
    const withoutPackets = migrateJvmApiModelV1({ ...minimalModel(), schemaVersion: 1 });
    expect(withoutPackets.packets).toBeUndefined();
    const migrated = migrateJvmApiModelV1({
      ...minimalModel(),
      schemaVersion: 1,
      packets: [
        {
          type: 'Packet',
          javaName: 'a.Packet',
          phase: 'play',
          direction: 'clientbound',
          id: 7,
        },
      ],
    });
    expect(migrated.packets?.[0]?.registrations).toEqual([
      { phase: 'play', direction: 'clientbound', id: 7 },
    ]);
  });
});

describe('signature generation', () => {
  it('preserves transitive cross-shard inheritance and safely collapses cycles', () => {
    const generated = generatePlatform(
      minimalModel({
        declarations: [
          {
            id: 'pointer.Pointered',
            javaName: 'pointer.Pointered',
            name: 'Pointered',
            kind: 'interface',
            methods: [{ name: 'getPointer', parameters: [], returns: 'java.lang.Object' }],
          },
          {
            id: 'audience.Audience',
            javaName: 'audience.Audience',
            name: 'Audience',
            kind: 'interface',
            implements: ['pointer.Pointered'],
          },
          {
            id: 'command.CommandSource',
            javaName: 'command.CommandSource',
            name: 'CommandSource',
            kind: 'interface',
            implements: ['audience.Audience'],
          },
          {
            id: 'entity.Leashable',
            javaName: 'entity.Leashable',
            name: 'Leashable',
            kind: 'interface',
            methods: [{ name: 'getLeashHolder', parameters: [], returns: 'java.lang.Object' }],
          },
          {
            id: 'entity.Mob',
            javaName: 'entity.Mob',
            name: 'Mob',
            kind: 'interface',
            implements: ['entity.Leashable'],
          },
          {
            id: 'ranged.RangedEntity',
            javaName: 'ranged.RangedEntity',
            name: 'RangedEntity',
            kind: 'interface',
            implements: ['entity.Mob'],
          },
          {
            id: 'cycle.A',
            javaName: 'cycle.A',
            name: 'A',
            kind: 'interface',
            implements: ['cycle.B'],
            methods: [{ name: 'shared', parameters: [], returns: 'void' }],
          },
          {
            id: 'cycle.B',
            javaName: 'cycle.B',
            name: 'B',
            kind: 'interface',
            implements: ['cycle.A'],
            methods: [
              { name: 'shared', parameters: [], returns: 'void' },
              { name: 'fromB', parameters: [], returns: 'void' },
            ],
          },
        ],
      }),
    );
    expect(generated.declarationShards['binding-packages/command.generated.d.ts']).toContain(
      'type CommandSource = CommandSourceMembers & j_audience.Audience',
    );
    expect(generated.declarationShards['binding-packages/ranged.generated.d.ts']).toContain(
      'type RangedEntity = RangedEntityMembers & j_entity.Mob',
    );
    const cycle = generated.declarationShards['binding-packages/cycle.generated.d.ts'];
    if (cycle === undefined) throw new Error('Missing cycle declaration shard.');
    expect(cycle).not.toMatch(/interface [AB] extends/);
    expect(cycle.match(/shared\(\): void;/g)).toHaveLength(2);
    expect(cycle.match(/fromB\(\): void;/g)).toHaveLength(2);
  });

  it('fails coverage when checker-visible generated identities are removed or invalid', () => {
    const model = minimalModel({
      declarations: [
        {
          id: 'a.A',
          javaName: 'a.A',
          name: 'A',
          kind: 'interface',
          methods: [{ name: 'required', parameters: [], returns: 'void' }],
        },
      ],
      events: [{ type: 'A', javaName: 'a.A', cancellable: false }],
      packets: [
        {
          type: 'A',
          javaName: 'a.A',
          registrations: [{ phase: 'play', direction: 'clientbound', id: 7 }],
        },
      ],
    });
    const generated = generatePlatform(model);
    const shard = generated.declarationShards['binding-packages/a.generated.d.ts'];
    if (shard === undefined) throw new Error('Missing test declaration shard.');
    expect(() =>
      analyzePlatformCoverage(model, {
        ...generated,
        declarationShards: {
          ...generated.declarationShards,
          'binding-packages/a.generated.d.ts': shard.replace(/\s+required\(\): void;/, ''),
        },
      }),
    ).toThrow('method a.A#required');
    expect(() =>
      analyzePlatformCoverage(model, {
        ...generated,
        declarations: generated.declarations.replace("').A;", "').Missing;"),
      }),
    ).toThrow(/strict TypeScript validation|declaration index/);
    expect(() =>
      analyzePlatformCoverage(model, {
        ...generated,
        events: generated.events.replace('"cancellable": false', '"cancellable": true'),
        packets: generated.packets.replace('"id": 7', '"id": 8'),
      }),
    ).toThrow(/event identity a\.A[\s\S]*packet registrations a\.A/);
  });

  it('renders collisions and rich JVM signatures while reporting opaque mappings', () => {
    const generated = generatePlatform(
      minimalModel({
        mapping: 'mojang',
        declarations: [
          { id: 'a.Base', javaName: 'a.Base', name: 'Base', kind: 'interface' },
          { id: 'b.Base', javaName: 'b.Base', name: 'Base', kind: 'interface' },
          {
            id: 'a.Mode',
            javaName: 'a.Mode',
            name: 'Mode',
            kind: 'enum',
            enumConstants: ['NORMAL', 'not-valid'],
          },
          { id: 'a.Raw', javaName: 'a.Raw', name: 'Raw', kind: 'opaque' },
          {
            id: 'a.Sample',
            javaName: 'a.Sample',
            name: 'Sample',
            kind: 'class',
            deprecated: 'Use NewSample.',
            typeParameters: [{ name: '1T', bound: 'a.Base & b.Base' }],
            extends: ['a.Base'],
            implements: ['b.Base'],
            constructors: [
              {
                parameters: [{ name: 'not-valid', type: 'java.lang.String', nullable: true }],
                deprecated: 'factory only',
                typeParameters: [{ name: 'C', bound: 'java.lang.Object' }],
                throws: ['java.lang.Exception'],
              },
            ],
            fields: [
              { name: 'value', type: '[I', readonly: true, nullable: true },
              { name: 'VERSION', type: 'int', static: true, constant: 2 },
              { name: 'other', type: 'missing.Type', static: true, deprecated: 'legacy' },
            ],
            methods: [
              {
                name: 'map-value',
                parameters: [
                  { name: 'consumer', type: 'java.util.function.BiConsumer<a.Base, b.Base>' },
                  { name: 'items', type: 'java.util.List<? extends b.Base>', varargs: true },
                ],
                returns: 'java.util.Map<java.lang.String, missing.Type>[]',
                nullable: true,
                default: true,
                deprecated: 'legacy',
                typeParameters: [{ name: 'R', bound: 'a.Base' }],
                throws: ['java.lang.IllegalStateException'],
              },
              {
                name: 'create',
                parameters: [
                  { name: 'descriptor', type: '[[Ljava/lang/String;' },
                  { name: 'entry', type: 'java.util.Map<java.lang.String, b.Base>$Entry' },
                ],
                returns: 'java.util.function.Function<? super a.Base, ?>',
                static: true,
              },
              {
                name: 'broken',
                parameters: [],
                returns: 'java.util.List<a.Base',
              },
            ],
          },
          { id: 'root', javaName: 'lowercase', name: 'Lowercase', kind: 'record' },
          { id: 'fallback', javaName: 'lower.package', name: 'Package', kind: 'abstract' },
        ],
        events: [{ type: 'Sample', javaName: 'a.Sample', cancellable: true }],
        packets: [
          {
            type: 'Sample',
            javaName: 'a.Sample',
            registrations: [
              { phase: 'play', direction: 'clientbound' },
              { phase: 'common', direction: 'serverbound', id: 0 },
            ],
          },
        ],
      }),
      [{ package: 'x', reason: 'r', stability: 's', alternative: 'a', approval: 'yes' }],
    );

    expect(generated.declarations).toContain('Generated from paper test (mojang)');
    expect(generated.declarations.match(/Base\.generated\.js/g)).toBeNull();
    const shard = generated.declarationShards['binding-packages/a.generated.d.ts'];
    expect(shard).toContain('import type * as j_b');
    expect(shard).toContain('readonly value: Array<number> | null');
    expect(shard).toContain('"map-value"<R /* extends Base */>');
    expect(shard).toContain('JavaBiConsumer<Base, j_b.Base>');
    expect(shard).toContain('Array<Array<string>>');
    expect(shard).toContain('entry: JavaMapEntry');
    expect(generated.events).toContain('Sample<never>');
    expect(generated.packets).toContain('"id": 0');
    expect(generated.coverage).toMatchObject({
      declarations: { expected: 7, emitted: 7, percent: 100 },
      events: { expected: 1 },
      packets: { expected: 1 },
      packetRegistrations: { expected: 2 },
      packetRegistrationIds: { expected: 1 },
      exclusions: [{ package: 'x' }],
    });
    expect(generated.coverage.opaqueMappings).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ javaName: 'missing.Type', occurrences: 2 }),
        expect.objectContaining({ reason: 'unparseable-signature' }),
      ]),
    );
    expect(canonicalCoverageJson(generated.coverage).endsWith('\n')).toBe(true);
  });
});

describe('generated filesystem helpers', () => {
  it('reads, verifies, diffs, creates, updates, and leaves matching files alone', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'shamoo-codegen-'));
    const modelPath = join(directory, 'model.json');
    const serialized = JSON.stringify(minimalModel());
    await writeFile(modelPath, serialized);
    await expect(readJvmApiModel(modelPath)).resolves.toMatchObject({ platform: 'paper' });
    const checksum = createHash('sha256').update(serialized).digest('hex');
    await expect(verifyModelChecksum(modelPath, checksum)).resolves.toBeUndefined();
    await expect(verifyModelChecksum(modelPath, 'bad')).rejects.toThrow('checksum drift');

    const output = join(directory, 'nested', 'file.ts');
    await expect(diffGeneratedFile(output, 'first')).resolves.toEqual({
      changed: true,
      expected: 'first',
    });
    await expect(syncGeneratedFile(output, 'first')).resolves.toBe(true);
    await expect(syncGeneratedFile(output, 'first')).resolves.toBe(false);
    await expect(diffGeneratedFile(output, 'second')).resolves.toEqual({
      changed: true,
      expected: 'second',
      actual: 'first',
    });
    await expect(syncGeneratedFile(output, 'second')).resolves.toBe(true);
    await expect(readFile(output, 'utf8')).resolves.toBe('second');
    await expect(diffGeneratedFile(directory, 'x')).rejects.toMatchObject({ code: 'EISDIR' });
  });
});
