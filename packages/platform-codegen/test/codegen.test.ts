import { readFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { promisify } from 'node:util';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { EVENT_TYPES as PAPER_EVENT_TYPES } from '@shamoo/paper-raw';
import { PACKETS, PACKET_TYPES, PAPER_PACKET_COMPATIBILITY } from '@shamoo/paper-packets';
import {
  generatePlatform,
  migrateJvmApiModelV1,
  parseJvmApiModel,
  type JvmApiModel,
} from '@shamoo/platform-codegen';
import { EVENT_TYPES as VELOCITY_EVENT_TYPES } from '@shamoo/velocity-raw';
import { beforeAll, describe, expect, it } from 'vitest';

const root = fileURLToPath(new URL('../../../', import.meta.url));
const executeFile = promisify(execFile);
const paths = {
  paper: join(root, 'packages/paper-codegen/models/paper.model.json'),
  velocity: join(root, 'packages/velocity-codegen/models/velocity.model.json'),
  nms: join(root, 'packages/paper-codegen/models/paper-nms.model.json'),
  packets: join(root, 'packages/paper-codegen/models/paper-packets.model.json'),
} as const;
const models = {} as Record<keyof typeof paths, JvmApiModel>;
interface ProvenanceManifest {
  readonly models: readonly { readonly file: string; readonly sha256: string }[];
}

beforeAll(async () => {
  await Promise.all(
    Object.entries(paths).map(async ([name, path]) => {
      models[name as keyof typeof paths] = parseJvmApiModel(await readFile(path, 'utf8'));
    }),
  );
});

describe('complete platform binding generation', () => {
  it('pins the complete canonical scanner models', () => {
    expect(models.paper.declarations).toHaveLength(2165);
    expect(models.paper.events).toHaveLength(422);
    expect(models.velocity.declarations).toHaveLength(358);
    expect(models.velocity.events).toHaveLength(46);
    expect(models.nms.declarations).toHaveLength(6004);
    expect(models.packets.declarations).toHaveLength(219);
    expect(models.packets.packets).toHaveLength(219);
  });

  it('matches every pinned model checksum directly to its provenance manifest', async () => {
    for (const directory of ['packages/paper-codegen/models', 'packages/velocity-codegen/models']) {
      const manifest = JSON.parse(
        await readFile(join(root, directory, 'manifest.json'), 'utf8'),
      ) as ProvenanceManifest;
      for (const model of manifest.models) {
        const checksum = createHash('sha256')
          .update(await readFile(join(root, directory, model.file)))
          .digest('hex');
        expect(checksum, model.file).toBe(model.sha256);
      }
    }
  });

  it('reports 100% coverage against real model denominators', async () => {
    const reports = await Promise.all(
      [
        'packages/paper-raw/src/generated/coverage.generated.json',
        'packages/velocity-raw/src/generated/coverage.generated.json',
        'packages/paper-nms/src/generated/coverage.generated.json',
        'packages/paper-packets/src/generated/coverage.generated.json',
      ].map(
        async (path) =>
          JSON.parse(await readFile(join(root, path), 'utf8')) as Record<string, unknown>,
      ),
    );
    expect(reports.map((report) => (report.declarations as { expected: number }).expected)).toEqual(
      [2165, 358, 6004, 219],
    );
    for (const report of reports)
      for (const category of [
        'declarations',
        'members',
        'events',
        'exceptions',
        'packets',
        'packetRegistrations',
        'packetRegistrationIds',
        'declarationIndex',
      ]) {
        const count = report[category] as { expected: number; emitted: number; percent: number };
        expect(count.emitted).toBe(count.expected);
        expect(count.percent).toBe(100);
      }
    expect(reports[3]).toMatchObject({
      declarations: { expected: 219 },
      members: { expected: 2029 },
      packets: { expected: 219 },
      packetRegistrations: { expected: 244 },
      packetRegistrationIds: { expected: 244 },
    });
  });

  it('keeps generated event and packet registries in parity with canonical models', () => {
    expect(Object.keys(PAPER_EVENT_TYPES)).toHaveLength(models.paper.events?.length ?? 0);
    expect(Object.keys(VELOCITY_EVENT_TYPES)).toHaveLength(models.velocity.events?.length ?? 0);
    const registrations = Object.values(PACKET_TYPES).reduce(
      (total, packet) => total + packet.registrations.length,
      0,
    );
    const expected = models.packets.packets?.reduce(
      (total, packet) => total + packet.registrations.length,
      0,
    );
    expect(registrations).toBe(expected);
  });

  it('retains shared schema-v2 packet phases and numeric IDs', () => {
    expect(models.packets.schemaVersion).toBe(2);
    const generated = generatePlatform({
      schemaVersion: 2,
      platform: 'paper-packets',
      apiVersion: 'test',
      generatedBy: 'test',
      declarations: [{ id: 'a.Packet', javaName: 'a.Packet', name: 'Packet', kind: 'record' }],
      packets: [
        {
          type: 'Packet',
          javaName: 'a.Packet',
          registrations: [
            { phase: 'common', direction: 'clientbound', id: 3 },
            { phase: 'play', direction: 'clientbound', id: 99 },
          ],
        },
      ],
    });
    expect(generated.coverage.packets).toMatchObject({ expected: 1, emitted: 1, percent: 100 });
    expect(generated.coverage.packetRegistrations).toMatchObject({
      expected: 2,
      emitted: 2,
      percent: 100,
    });
    expect(generated.coverage.packetRegistrationIds).toMatchObject({ expected: 2, emitted: 2 });
    expect(generated.packets).toContain('"id": 3');
    expect(generated.packets).toContain('"id": 99');

    const shared =
      PACKET_TYPES['net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket'];
    expect(shared.registrations).toEqual([
      { phase: 'configuration', direction: 'clientbound', id: 0 },
      { phase: 'login', direction: 'clientbound', id: 5 },
      { phase: 'play', direction: 'clientbound', id: 21 },
    ]);
  });

  it('keeps schema-v1 migration explicit and fixture-only', async () => {
    const fixture = await readFile(
      join(root, 'packages/paper-codegen/fixtures/paper-packets.model.json'),
      'utf8',
    );
    expect(() => parseJvmApiModel(fixture)).toThrow('schemaVersion must be 2');
    const migrated = migrateJvmApiModelV1(fixture);
    expect(migrated.schemaVersion).toBe(2);
    expect(
      migrated.packets?.find(
        (packet) =>
          packet.javaName === 'net.minecraft.network.protocol.login.ServerboundHelloPacket',
      )?.registrations,
    ).toEqual([{ phase: 'login', direction: 'serverbound' }]);
  });

  it('rejects malformed models and exposes packet compatibility metadata', () => {
    expect(() => parseJvmApiModel({ schemaVersion: 3 })).toThrow('schemaVersion');
    const chat = PACKETS['net.minecraft.network.protocol.game.ServerboundChatPacket'];
    expect(chat.direction).toBe('serverbound');
    expect(chat.phase).toBe('play');
    expect(chat.registrations).toHaveLength(1);
    expect(chat.compatibility).toBe(PAPER_PACKET_COMPATIBILITY);
  });

  it('compiles barrels containing every generated declaration shard', async () => {
    await expect(
      executeFile(
        process.execPath,
        [
          join(root, 'node_modules/typescript/bin/tsc'),
          '--project',
          join(root, 'packages/platform-codegen/test/fixtures/complete-generated/tsconfig.json'),
          '--pretty',
          'false',
        ],
        { maxBuffer: 10 * 1024 * 1024 },
      ),
    ).resolves.toMatchObject({ stderr: '' });
  }, 120_000);
});
