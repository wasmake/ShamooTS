// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_thread from './net.minecraft.util.thread.generated.js';

/** JVM abstract net.minecraft.network.protocol.BundleDelimiterPacket. */
export interface BundleDelimiterPacketMembers<T /* extends j_net_minecraft_network.PacketListener */ = unknown> {
  readonly __javaSupertypes?: readonly [Packet<T>];
  handle(arg0: T): void;
  type(): PacketType<BundleDelimiterPacket<T>>;
}
export type BundleDelimiterPacket<T /* extends j_net_minecraft_network.PacketListener */ = unknown> = BundleDelimiterPacketMembers<T> & Packet<T>;
export interface BundleDelimiterPacketStatics {
  new<T /* extends j_net_minecraft_network.PacketListener */>(): BundleDelimiterPacket<T>;
}

/** JVM abstract net.minecraft.network.protocol.BundlePacket. */
export interface BundlePacketMembers<T /* extends j_net_minecraft_network.PacketListener */ = unknown> {
  readonly __javaSupertypes?: readonly [Packet<T>];
  subPackets(): Iterable<Packet<T>>;
  type(): PacketType<BundlePacket<T>>;
}
export type BundlePacket<T /* extends j_net_minecraft_network.PacketListener */ = unknown> = BundlePacketMembers<T> & Packet<T>;
export interface BundlePacketStatics {
  new<T /* extends j_net_minecraft_network.PacketListener */>(arg0: Iterable<Packet<T>>): BundlePacket<T>;
}

/** JVM interface net.minecraft.network.protocol.BundlerInfo. */
export interface BundlerInfoMembers {
  startPacketBundling(arg0: Packet<object>): BundlerInfo_Bundler | null;
  unbundlePacket(arg0: Packet<object>, arg1: JavaConsumer<Packet<object>>): void;
}
export type BundlerInfo = BundlerInfoMembers;
export interface BundlerInfoStatics {
  readonly BUNDLE_SIZE_LIMIT: 4096;
  createForPacket<T /* extends j_net_minecraft_network.PacketListener */, P /* extends BundlePacket<T> */>(arg0: PacketType<P>, arg1: JavaFunction<Iterable<Packet<T>>, P>, arg2: BundleDelimiterPacket<T>): BundlerInfo;
}

/** JVM interface net.minecraft.network.protocol.BundlerInfo$Bundler. */
export interface BundlerInfo_BundlerMembers {
  addPacket(arg0: Packet<object>): Packet<object> | null;
}
export type BundlerInfo_Bundler = BundlerInfo_BundlerMembers;
export interface BundlerInfo_BundlerStatics {
}

/** JVM interface net.minecraft.network.protocol.CodecModifier. */
export interface CodecModifierMembers<B = unknown, V = unknown, C = unknown> {
  apply(arg0: j_net_minecraft_network_codec.StreamCodec<B, V>, arg1: C): j_net_minecraft_network_codec.StreamCodec<B, V>;
}
export type CodecModifier<B = unknown, V = unknown, C = unknown> = CodecModifierMembers<B, V, C>;
export interface CodecModifierStatics {
}

/** JVM interface net.minecraft.network.protocol.Packet. */
export interface PacketMembers<T /* extends j_net_minecraft_network.PacketListener */ = unknown> {
  getExtraPackets(): JavaList<Packet<object>> | null;
  handle(arg0: T): void;
  hasFinishListener(): boolean;
  hasLargePacketFallback(): boolean;
  isReady(): boolean;
  isSkippable(): boolean;
  isTerminal(): boolean;
  onPacketDispatch(arg0: j_net_minecraft_server_level.ServerPlayer | null): void | null;
  onPacketDispatchFinish(arg0: j_net_minecraft_server_level.ServerPlayer | null, arg1: JavaOpaque<"io.netty.channel.ChannelFuture"> | null): void | null;
  packetTooLarge(arg0: j_net_minecraft_network.Connection): boolean;
  type(): PacketType<Packet<T>>;
}
export type Packet<T /* extends j_net_minecraft_network.PacketListener */ = unknown> = PacketMembers<T>;
export interface PacketStatics {
  codec<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, T /* extends Packet<object> */>(arg0: j_net_minecraft_network_codec.StreamMemberEncoder<B, T>, arg1: j_net_minecraft_network_codec.StreamDecoder<B, T>): j_net_minecraft_network_codec.StreamCodec<B, T>;
}

/** Live JVM enum net.minecraft.network.protocol.PacketFlow; constants are host handles, not strings. */
export type PacketFlow = JavaEnum<"net.minecraft.network.protocol.PacketFlow", "CLIENTBOUND" | "SERVERBOUND"> & PacketFlowMembers;
export interface PacketFlowMembers {
  getOpposite(): PacketFlow;
  id(): string;
}
export interface PacketFlowStatics {
  readonly CLIENTBOUND: PacketFlow;
  readonly SERVERBOUND: PacketFlow;
  valueOf(arg0: string): PacketFlow;
  values(): Array<PacketFlow>;
}

/** JVM record net.minecraft.network.protocol.PacketType. */
export interface PacketTypeMembers<T /* extends Packet<object> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  flow(): PacketFlow;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
}
export type PacketType<T /* extends Packet<object> */ = unknown> = PacketTypeMembers<T> & JavaOpaque<"java.lang.Record">;
export interface PacketTypeStatics {
  new<T /* extends Packet<object> */>(arg0: PacketFlow, arg1: j_net_minecraft_resources.ResourceLocation): PacketType<T>;
}

/** JVM class net.minecraft.network.protocol.PacketUtils. */
export interface PacketUtilsMembers {
}
export type PacketUtils = PacketUtilsMembers;
export interface PacketUtilsStatics {
  new(): PacketUtils;
  /** @throws net.minecraft.server.RunningOnDifferentThreadException */
  ensureRunningOnSameThread<T /* extends j_net_minecraft_network.PacketListener */>(arg0: Packet<T>, arg1: T, arg2: j_net_minecraft_server_level.ServerLevel): void;
  /** @throws net.minecraft.server.RunningOnDifferentThreadException */
  ensureRunningOnSameThread<T /* extends j_net_minecraft_network.PacketListener */>(arg0: Packet<T>, arg1: T, arg2: j_net_minecraft_util_thread.BlockableEventLoop<object>): void;
  fillCrashReport<T /* extends j_net_minecraft_network.PacketListener */>(arg0: j_net_minecraft.CrashReport, arg1: T, arg2: Packet<T> | null): void | null;
  getCurrentPacketProcessors(): JavaList<j_net_minecraft_network.PacketListener>;
  getTotalProcessedPackets(): bigint;
  makeReportedException<T /* extends j_net_minecraft_network.PacketListener */>(arg0: JavaOpaque<"java.lang.Exception">, arg1: Packet<T>, arg2: T): j_net_minecraft.ReportedException;
  readonly packetProcessing: JavaOpaque<"java.util.concurrent.ConcurrentLinkedDeque", [j_net_minecraft_network.PacketListener]>;
}

/** JVM class net.minecraft.network.protocol.ProtocolCodecBuilder. */
export interface ProtocolCodecBuilderMembers<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */ = unknown, L /* extends j_net_minecraft_network.PacketListener */ = unknown> {
  add<T /* extends Packet<L> */>(arg0: PacketType<T>, arg1: j_net_minecraft_network_codec.StreamCodec<B, T>): ProtocolCodecBuilder<B, L>;
  build(): j_net_minecraft_network_codec.StreamCodec<B, Packet<L>>;
}
export type ProtocolCodecBuilder<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */ = unknown, L /* extends j_net_minecraft_network.PacketListener */ = unknown> = ProtocolCodecBuilderMembers<B, L>;
export interface ProtocolCodecBuilderStatics {
  new<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, L /* extends j_net_minecraft_network.PacketListener */>(arg0: PacketFlow): ProtocolCodecBuilder<B, L>;
}

/** JVM class net.minecraft.network.protocol.ProtocolInfoBuilder. */
export interface ProtocolInfoBuilderMembers<T /* extends j_net_minecraft_network.PacketListener */ = unknown, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */ = unknown, C = unknown> {
  addPacket<P /* extends Packet<T> */>(arg0: PacketType<P>, arg1: j_net_minecraft_network_codec.StreamCodec<B, P>): ProtocolInfoBuilder<T, B, C>;
  addPacket<P /* extends Packet<T> */>(arg0: PacketType<P>, arg1: j_net_minecraft_network_codec.StreamCodec<B, P>, arg2: CodecModifier<B, P, C>): ProtocolInfoBuilder<T, B, C>;
  buildUnbound(): UnboundProtocol<T, B, C>;
  buildUnbound(arg0: C): SimpleUnboundProtocol<T, B>;
  withBundlePacket<P /* extends BundlePacket<T> */, D /* extends BundleDelimiterPacket<T> */>(arg0: PacketType<P>, arg1: JavaFunction<Iterable<Packet<T>>, P>, arg2: D): ProtocolInfoBuilder<T, B, C>;
}
export type ProtocolInfoBuilder<T /* extends j_net_minecraft_network.PacketListener */ = unknown, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */ = unknown, C = unknown> = ProtocolInfoBuilderMembers<T, B, C>;
export interface ProtocolInfoBuilderStatics {
  new<T /* extends j_net_minecraft_network.PacketListener */, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, C>(arg0: j_net_minecraft_network.ConnectionProtocol, arg1: PacketFlow): ProtocolInfoBuilder<T, B, C>;
  clientboundProtocol<T /* extends j_net_minecraft_network.ClientboundPacketListener */, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */>(arg0: j_net_minecraft_network.ConnectionProtocol, arg1: JavaConsumer<ProtocolInfoBuilder<T, B, j_net_minecraft_util.Unit>>): SimpleUnboundProtocol<T, B>;
  contextClientboundProtocol<T /* extends j_net_minecraft_network.ClientboundPacketListener */, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, C>(arg0: j_net_minecraft_network.ConnectionProtocol, arg1: JavaConsumer<ProtocolInfoBuilder<T, B, C>>): UnboundProtocol<T, B, C>;
  contextServerboundProtocol<T /* extends j_net_minecraft_network.ServerboundPacketListener */, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, C>(arg0: j_net_minecraft_network.ConnectionProtocol, arg1: JavaConsumer<ProtocolInfoBuilder<T, B, C>>): UnboundProtocol<T, B, C>;
  serverboundProtocol<T /* extends j_net_minecraft_network.ServerboundPacketListener */, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */>(arg0: j_net_minecraft_network.ConnectionProtocol, arg1: JavaConsumer<ProtocolInfoBuilder<T, B, j_net_minecraft_util.Unit>>): SimpleUnboundProtocol<T, B>;
}

/** JVM interface net.minecraft.network.protocol.SimpleUnboundProtocol. */
export interface SimpleUnboundProtocolMembers<T /* extends j_net_minecraft_network.PacketListener */ = unknown, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network.ProtocolInfo_DetailsProvider];
  bind(arg0: JavaFunction<JavaOpaque<"io.netty.buffer.ByteBuf">, B>): j_net_minecraft_network.ProtocolInfo<T>;
}
export type SimpleUnboundProtocol<T /* extends j_net_minecraft_network.PacketListener */ = unknown, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */ = unknown> = SimpleUnboundProtocolMembers<T, B> & j_net_minecraft_network.ProtocolInfo_DetailsProvider;
export interface SimpleUnboundProtocolStatics {
}

/** JVM interface net.minecraft.network.protocol.UnboundProtocol. */
export interface UnboundProtocolMembers<T /* extends j_net_minecraft_network.PacketListener */ = unknown, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */ = unknown, C = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network.ProtocolInfo_DetailsProvider];
  bind(arg0: JavaFunction<JavaOpaque<"io.netty.buffer.ByteBuf">, B>, arg1: C): j_net_minecraft_network.ProtocolInfo<T>;
}
export type UnboundProtocol<T /* extends j_net_minecraft_network.PacketListener */ = unknown, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */ = unknown, C = unknown> = UnboundProtocolMembers<T, B, C> & j_net_minecraft_network.ProtocolInfo_DetailsProvider;
export interface UnboundProtocolStatics {
}
