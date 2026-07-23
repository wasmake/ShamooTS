import { SHAMOO_DECLARATIONS } from '@shamoo/decorators';
import {
  OnPacketReceive,
  OnPacketSend,
  PACKETS,
  PAPER_PACKET_COMPATIBILITY,
  PacketHandler,
  type PacketContext,
  type PacketDecision,
  type PacketType,
} from '@shamoo/paper-packets';
import { describe, expect, it } from 'vitest';

describe('packet wrapper contracts', () => {
  const inbound = PACKETS['net.minecraft.network.protocol.game.ServerboundChatPacket'];
  const outbound = PACKETS['net.minecraft.network.protocol.game.ClientboundAddEntityPacket'];

  it('exposes exact compatibility, registrations, contexts, and decisions', () => {
    expect(inbound).toMatchObject({
      direction: 'serverbound',
      phase: 'play',
      compatibility: PAPER_PACKET_COMPATIBILITY,
    });
    type InboundPacket = typeof inbound extends PacketType<infer Packet> ? Packet : never;
    const packet = {} as InboundPacket;
    const context: PacketContext<InboundPacket> = {
      type: inbound,
      direction: 'serverbound',
      state: 'play',
      connection: { id: 'one', remoteAddress: '127.0.0.1', state: 'play', player: null },
      player: null,
      handle: { packet, compatibility: PAPER_PACKET_COMPATIBILITY } as never,
    };
    const decisions: PacketDecision<InboundPacket>[] = [
      { action: 'pass' },
      { action: 'cancel' },
      { action: 'replace', packet },
    ];
    expect(context.handle.compatibility).toBe(PAPER_PACKET_COMPATIBILITY);
    expect(decisions.map((decision) => decision.action)).toEqual(['pass', 'cancel', 'replace']);
  });

  it('records all packet decorators and appends to existing metadata', () => {
    const metadata: Record<PropertyKey, object> = {};
    const context = { kind: 'method', name: 'handle', metadata };
    PacketHandler(inbound)({}, context);
    OnPacketReceive(inbound)({}, context);
    OnPacketSend(outbound)({}, context);
    expect(metadata[SHAMOO_DECLARATIONS]).toEqual([
      expect.objectContaining({ name: 'PacketHandler', member: 'handle', arguments: [inbound] }),
      expect.objectContaining({ name: 'OnPacketReceive', arguments: [inbound] }),
      expect.objectContaining({ name: 'OnPacketSend', arguments: [outbound] }),
    ]);
  });

  it('rejects non-method targets and tolerates missing metadata', () => {
    expect(() => {
      PacketHandler(inbound)({}, { kind: 'class' });
    }).toThrow('@PacketHandler can only decorate a method');
    expect(() => {
      OnPacketReceive(inbound)({}, { kind: 'method' });
    }).not.toThrow();
  });
});
