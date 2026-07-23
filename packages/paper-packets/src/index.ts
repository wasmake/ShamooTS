/** Exact-version Paper packet declarations and interception metadata. */
import { SHAMOO_DECLARATIONS, type ShamooDecorator } from '@shamoo/decorators';
import type { Player } from '@shamoo/paper-raw';

export * from './generated/bindings.generated.js';
export * from './generated/packets.generated.js';

import { PACKET_TYPES, type GeneratedPacketMap } from './generated/packets.generated.js';

export const PAPER_PACKET_COMPATIBILITY = 'protocol-1.21.8+paper.55+mache.2' as const;
export type PacketDirection = 'serverbound' | 'clientbound';
export type ProtocolState = 'handshake' | 'status' | 'login' | 'configuration' | 'play';
export type ProtocolPhase = ProtocolState | 'common';
export interface PacketRegistration<
  Phase extends ProtocolPhase = ProtocolPhase,
  Direction extends PacketDirection = PacketDirection,
> {
  readonly phase: Phase;
  readonly direction: Direction;
  readonly id?: number;
}
declare const opaqueJvmHandle: unique symbol;
declare const livePacketHandle: unique symbol;
export type OpaqueJvmHandle<JavaName extends string> = object & {
  readonly [opaqueJvmHandle]: JavaName;
};
export interface LivePacketHandle<T> {
  readonly packet: T;
  readonly compatibility: typeof PAPER_PACKET_COMPATIBILITY;
  readonly [livePacketHandle]: true;
}
export interface PacketType<
  T,
  Phase extends ProtocolPhase = ProtocolPhase,
  Direction extends PacketDirection = PacketDirection,
  Registrations extends readonly PacketRegistration[] = readonly PacketRegistration<
    Phase,
    Direction
  >[],
> {
  readonly javaName: keyof GeneratedPacketMap;
  readonly phase: Phase;
  readonly direction: Direction;
  readonly registrations: Registrations;
  readonly compatibility: typeof PAPER_PACKET_COMPATIBILITY;
  readonly __packet?: T;
}
export type GeneratedPacketTypes = {
  readonly [Name in keyof GeneratedPacketMap]: PacketType<
    GeneratedPacketMap[Name],
    (typeof PACKET_TYPES)[Name]['registrations'][number]['phase'],
    (typeof PACKET_TYPES)[Name]['registrations'][number]['direction'],
    (typeof PACKET_TYPES)[Name]['registrations']
  >;
};
export const PACKETS = Object.fromEntries(
  Object.entries(PACKET_TYPES).map(([javaName, descriptor]) => [
    javaName,
    {
      javaName,
      phase: descriptor.registrations[0].phase,
      direction: descriptor.registrations[0].direction,
      registrations: descriptor.registrations,
      compatibility: PAPER_PACKET_COMPATIBILITY,
    },
  ]),
) as GeneratedPacketTypes;
export interface PacketConnection {
  readonly id: string;
  readonly remoteAddress: string;
  readonly state: ProtocolState;
  readonly player: Player | null;
}
export interface PacketContext<T> {
  readonly type: PacketType<T>;
  readonly direction: PacketDirection;
  readonly state: ProtocolState;
  readonly connection: PacketConnection;
  readonly player: Player | null;
  readonly handle: LivePacketHandle<T>;
}
export type PacketDecision<T> =
  | { readonly action: 'pass' }
  | { readonly action: 'cancel' }
  | { readonly action: 'replace'; readonly packet: T };
export type InboundPacketHandler<T> = (
  packet: T,
  context: PacketContext<T>,
) => PacketDecision<T> | Promise<PacketDecision<T>>;
export type OutboundPacketHandler<T> = (
  packet: T,
  context: PacketContext<T>,
) => PacketDecision<T> | Promise<PacketDecision<T>>;

function packetDecorator(name: string, type?: PacketType<object>): ShamooDecorator {
  return (...invocation: unknown[]) => {
    const context = invocation[1] as
      | {
          readonly kind?: string;
          readonly name?: string | symbol;
          readonly metadata?: Record<PropertyKey, object>;
        }
      | undefined;
    if (context?.kind !== 'method') throw new TypeError(`@${name} can only decorate a method.`);
    const metadata = context.metadata;
    if (metadata === undefined) return;
    const existing = metadata[SHAMOO_DECLARATIONS] as object[] | undefined;
    const value = {
      name,
      target: 'method',
      member: context.name,
      arguments: type === undefined ? [] : [type],
    };
    if (existing === undefined)
      Object.defineProperty(metadata, SHAMOO_DECLARATIONS, {
        configurable: true,
        value: [value],
      });
    else existing.push(value);
  };
}
export const PacketHandler = <T>(type: PacketType<T>): ShamooDecorator =>
  packetDecorator('PacketHandler', type as PacketType<object>);
export const OnPacketReceive = <T>(
  type: PacketType<T, ProtocolPhase, 'serverbound'>,
): ShamooDecorator => packetDecorator('OnPacketReceive', type as PacketType<object>);
export const OnPacketSend = <T>(
  type: PacketType<T, ProtocolPhase, 'clientbound'>,
): ShamooDecorator => packetDecorator('OnPacketSend', type as PacketType<object>);
