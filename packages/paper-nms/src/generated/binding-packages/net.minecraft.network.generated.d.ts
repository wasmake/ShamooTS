// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_login from './net.minecraft.network.protocol.login.generated.js';
import type * as j_net_minecraft_network_protocol_status from './net.minecraft.network.protocol.status.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_util_debugchart from './net.minecraft.util.debugchart.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.network.BandwidthDebugMonitor. */
export interface BandwidthDebugMonitorMembers {
  onReceive(arg0: number): void;
  tick(): void;
}
export type BandwidthDebugMonitor = BandwidthDebugMonitorMembers;
export interface BandwidthDebugMonitorStatics {
  new(arg0: j_net_minecraft_util_debugchart.LocalSampleLogger): BandwidthDebugMonitor;
}

/** JVM class net.minecraft.network.CipherBase. */
export interface CipherBaseMembers {
  /** @throws javax.crypto.ShortBufferException */
  decipher(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">): JavaOpaque<"io.netty.buffer.ByteBuf">;
  /** @throws javax.crypto.ShortBufferException */
  encipher(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">): void;
}
export type CipherBase = CipherBaseMembers;
export interface CipherBaseStatics {
  new(arg0: JavaOpaque<"javax.crypto.Cipher">): CipherBase;
}

/** JVM class net.minecraft.network.CipherDecoder. */
export interface CipherDecoderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.handler.codec.MessageToMessageDecoder", [JavaOpaque<"io.netty.buffer.ByteBuf">]>];
  /** @throws java.lang.Exception */
  decode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: JavaList<object>): void;
  /** @throws java.lang.Exception */
  decode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object, arg2: JavaList<object>): void;
  handlerRemoved(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">): void;
}
export type CipherDecoder = CipherDecoderMembers & JavaOpaque<"io.netty.handler.codec.MessageToMessageDecoder", [JavaOpaque<"io.netty.buffer.ByteBuf">]>;
export interface CipherDecoderStatics {
  new(arg0: JavaOpaque<"com.velocitypowered.natives.encryption.VelocityCipher">): CipherDecoder;
}

/** JVM class net.minecraft.network.CipherEncoder. */
export interface CipherEncoderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.handler.codec.MessageToMessageEncoder", [JavaOpaque<"io.netty.buffer.ByteBuf">]>];
  /** @throws java.lang.Exception */
  encode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: JavaList<object>): void;
  /** @throws java.lang.Exception */
  encode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object, arg2: JavaList<object>): void;
  handlerRemoved(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">): void;
}
export type CipherEncoder = CipherEncoderMembers & JavaOpaque<"io.netty.handler.codec.MessageToMessageEncoder", [JavaOpaque<"io.netty.buffer.ByteBuf">]>;
export interface CipherEncoderStatics {
  new(arg0: JavaOpaque<"com.velocitypowered.natives.encryption.VelocityCipher">): CipherEncoder;
}

/** JVM interface net.minecraft.network.ClientboundPacketListener. */
export interface ClientboundPacketListenerMembers {
  readonly __javaSupertypes?: readonly [PacketListener];
  flow(): j_net_minecraft_network_protocol.PacketFlow;
}
export type ClientboundPacketListener = ClientboundPacketListenerMembers & PacketListener;
export interface ClientboundPacketListenerStatics {
}

/** JVM class net.minecraft.network.CompressionDecoder. */
export interface CompressionDecoderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.handler.codec.ByteToMessageDecoder">];
  /** @throws java.lang.Exception */
  decode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: JavaList<object>): void;
  handlerRemoved0(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">): void;
  setThreshold(arg0: JavaOpaque<"com.velocitypowered.natives.compression.VelocityCompressor">, arg1: number, arg2: boolean): void;
}
export type CompressionDecoder = CompressionDecoderMembers & JavaOpaque<"io.netty.handler.codec.ByteToMessageDecoder">;
export interface CompressionDecoderStatics {
  new(arg0: number, arg1: boolean): CompressionDecoder;
  new(arg0: JavaOpaque<"com.velocitypowered.natives.compression.VelocityCompressor">, arg1: number, arg2: boolean): CompressionDecoder;
  readonly MAXIMUM_COMPRESSED_LENGTH: 2097152;
  readonly MAXIMUM_UNCOMPRESSED_LENGTH: 8388608;
}

/** JVM class net.minecraft.network.CompressionEncoder. */
export interface CompressionEncoderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.handler.codec.MessageToByteEncoder", [JavaOpaque<"io.netty.buffer.ByteBuf">]>];
  /** @throws java.lang.Exception */
  allocateBuffer(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: boolean): JavaOpaque<"io.netty.buffer.ByteBuf">;
  /** @throws java.lang.Exception */
  allocateBuffer(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object, arg2: boolean): JavaOpaque<"io.netty.buffer.ByteBuf">;
  /** @throws java.lang.Exception */
  encode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: JavaOpaque<"io.netty.buffer.ByteBuf">): void;
  /** @throws java.lang.Exception */
  encode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object, arg2: JavaOpaque<"io.netty.buffer.ByteBuf">): void;
  getThreshold(): number;
  handlerRemoved(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">): void;
  setThreshold(arg0: number): void;
}
export type CompressionEncoder = CompressionEncoderMembers & JavaOpaque<"io.netty.handler.codec.MessageToByteEncoder", [JavaOpaque<"io.netty.buffer.ByteBuf">]>;
export interface CompressionEncoderStatics {
  new(arg0: number): CompressionEncoder;
  new(arg0: JavaOpaque<"com.velocitypowered.natives.compression.VelocityCompressor"> | null, arg1: number): CompressionEncoder;
}

/** JVM class net.minecraft.network.Connection. */
export interface ConnectionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.channel.SimpleChannelInboundHandler", [j_net_minecraft_network_protocol.Packet<object>]>];
  readonly PACKET_LIMIT_LOCK: object;
  address: JavaOpaque<"java.net.SocketAddress">;
  readonly allPacketCounts: JavaOpaque<"io.papermc.paper.util.IntervalledCounter"> | null;
  channel: JavaOpaque<"io.netty.channel.Channel">;
  /** @throws java.lang.Exception */
  channelActive(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">): void;
  channelInactive(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">): void;
  /** @throws java.lang.Exception */
  channelRead0(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object): void;
  channelRead0(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: j_net_minecraft_network_protocol.Packet<object>): void;
  clearPacketQueue(): void;
  configurePacketHandler(arg0: JavaOpaque<"io.netty.channel.ChannelPipeline">): void;
  disconnect(arg0: DisconnectionDetails): void;
  disconnect(arg0: j_net_minecraft_network_chat.Component): void;
  enableAutoRead(): void;
  exceptionCaught(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: JavaOpaque<"java.lang.Throwable">): void;
  flushChannel(): void;
  getAverageReceivedPackets(): number;
  getAverageSentPackets(): number;
  getDisconnectionDetails(): DisconnectionDetails | null;
  getLoggableAddress(arg0: boolean): string;
  getPacketListener(): PacketListener | null;
  getPlayer(): j_net_minecraft_server_level.ServerPlayer;
  getReceiving(): j_net_minecraft_network_protocol.PacketFlow;
  getRemoteAddress(): JavaOpaque<"java.net.SocketAddress">;
  getSending(): j_net_minecraft_network_protocol.PacketFlow;
  haProxyAddress: JavaOpaque<"java.net.SocketAddress"> | null;
  handleDisconnection(): void;
  hostname: string;
  initiateServerboundPlayConnection<S /* extends ServerboundPacketListener */, C /* extends ClientboundPacketListener */>(arg0: string, arg1: number, arg2: ProtocolInfo<S>, arg3: ProtocolInfo<C>, arg4: C, arg5: boolean): void;
  initiateServerboundPlayConnection(arg0: string, arg1: number, arg2: j_net_minecraft_network_protocol_login.ClientLoginPacketListener): void;
  initiateServerboundStatusConnection(arg0: string, arg1: number, arg2: j_net_minecraft_network_protocol_status.ClientStatusPacketListener): void;
  isConnected(): boolean;
  isConnecting(): boolean;
  isEncrypted(): boolean;
  isMemoryConnection(): boolean;
  isPending: boolean;
  legacySavedLoginEventResultOverride: JavaOptional<j_net_minecraft_network_chat.Component> | null;
  readonly packetSpecificLimits: JavaMap<JavaClass<j_net_minecraft_network_protocol.Packet<object>>, JavaOpaque<"io.papermc.paper.util.IntervalledCounter">>;
  preparing: boolean;
  protocolVersion: number;
  queueImmunity: boolean;
  resourcePackStatus: JavaOpaque<"org.bukkit.event.player.PlayerResourcePackStatusEvent$Status"> | null;
  runOnceConnected(arg0: JavaConsumer<Connection>): void;
  savedPlayerForLoginEventLegacy: j_net_minecraft_server_level.ServerPlayer | null;
  send(arg0: j_net_minecraft_network_protocol.Packet<object>): void;
  send(arg0: j_net_minecraft_network_protocol.Packet<object>, arg1: JavaOpaque<"io.netty.channel.ChannelFutureListener"> | null): void | null;
  send(arg0: j_net_minecraft_network_protocol.Packet<object>, arg1: JavaOpaque<"io.netty.channel.ChannelFutureListener"> | null, arg2: boolean): void | null;
  setBandwidthLogger(arg0: j_net_minecraft_util_debugchart.LocalSampleLogger): void;
  /** @throws net.minecraft.util.CryptException */
  setEncryptionKey(arg0: JavaOpaque<"javax.crypto.SecretKey">): void;
  setListenerForServerboundHandshake(arg0: PacketListener): void;
  setReadOnly(): void;
  setupCompression(arg0: number, arg1: boolean): void;
  setupInboundProtocol<T /* extends PacketListener */>(arg0: ProtocolInfo<T>, arg1: T): void;
  setupOutboundProtocol(arg0: ProtocolInfo<object>): void;
  spoofedProfile: Array<JavaOpaque<"com.mojang.authlib.properties.Property">>;
  spoofedUUID: JavaOpaque<"java.util.UUID">;
  tick(): void;
  tickSecond(): void;
  virtualHost: JavaOpaque<"java.net.InetSocketAddress">;
}
export type Connection = ConnectionMembers & JavaOpaque<"io.netty.channel.SimpleChannelInboundHandler", [j_net_minecraft_network_protocol.Packet<object>]>;
export interface ConnectionStatics {
  new(arg0: j_net_minecraft_network_protocol.PacketFlow): Connection;
  readonly LOCAL_WORKER_GROUP: JavaSupplier<JavaOpaque<"io.netty.channel.DefaultEventLoopGroup">>;
  readonly NETWORK_EPOLL_WORKER_GROUP: JavaSupplier<JavaOpaque<"io.netty.channel.epoll.EpollEventLoopGroup">>;
  readonly NETWORK_WORKER_GROUP: JavaSupplier<JavaOpaque<"io.netty.channel.nio.NioEventLoopGroup">>;
  readonly PACKET_MARKER: JavaOpaque<"org.slf4j.Marker">;
  readonly PACKET_RECEIVED_MARKER: JavaOpaque<"org.slf4j.Marker">;
  readonly PACKET_SENT_MARKER: JavaOpaque<"org.slf4j.Marker">;
  readonly ROOT_MARKER: JavaOpaque<"org.slf4j.Marker">;
  configureInMemoryPipeline(arg0: JavaOpaque<"io.netty.channel.ChannelPipeline">, arg1: j_net_minecraft_network_protocol.PacketFlow): void;
  configureSerialization(arg0: JavaOpaque<"io.netty.channel.ChannelPipeline">, arg1: j_net_minecraft_network_protocol.PacketFlow, arg2: boolean, arg3: BandwidthDebugMonitor | null): void | null;
  connect(arg0: JavaOpaque<"java.net.InetSocketAddress">, arg1: boolean, arg2: Connection): JavaOpaque<"io.netty.channel.ChannelFuture">;
  connectToLocalServer(arg0: JavaOpaque<"java.net.SocketAddress">): Connection;
  connectToServer(arg0: JavaOpaque<"java.net.InetSocketAddress">, arg1: boolean, arg2: j_net_minecraft_util_debugchart.LocalSampleLogger | null): Connection | null;
}

/** Live JVM enum net.minecraft.network.ConnectionProtocol; constants are host handles, not strings. */
export type ConnectionProtocol = JavaEnum<"net.minecraft.network.ConnectionProtocol", "CONFIGURATION" | "HANDSHAKING" | "LOGIN" | "PLAY" | "STATUS"> & ConnectionProtocolMembers;
export interface ConnectionProtocolMembers {
  id(): string;
}
export interface ConnectionProtocolStatics {
  readonly CONFIGURATION: ConnectionProtocol;
  readonly HANDSHAKING: ConnectionProtocol;
  readonly LOGIN: ConnectionProtocol;
  readonly PLAY: ConnectionProtocol;
  readonly STATUS: ConnectionProtocol;
  valueOf(arg0: string): ConnectionProtocol;
  values(): Array<ConnectionProtocol>;
}

/** JVM record net.minecraft.network.DisconnectionDetails. */
export interface DisconnectionDetailsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  bugReportLink(): JavaOptional<JavaOpaque<"java.net.URI">>;
  disconnectionReason(): JavaOptional<JavaOpaque<"io.papermc.paper.connection.DisconnectionReason">>;
  equals(arg0: object): boolean;
  hashCode(): number;
  quitMessage(): JavaOptional<j_net_minecraft_network_chat.Component>;
  reason(): j_net_minecraft_network_chat.Component;
  report(): JavaOptional<JavaOpaque<"java.nio.file.Path">>;
  toString(): string;
}
export type DisconnectionDetails = DisconnectionDetailsMembers & JavaOpaque<"java.lang.Record">;
export interface DisconnectionDetailsStatics {
  new(arg0: j_net_minecraft_network_chat.Component): DisconnectionDetails;
  new(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOptional<JavaOpaque<"java.nio.file.Path">>, arg2: JavaOptional<JavaOpaque<"java.net.URI">>): DisconnectionDetails;
  new(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOptional<JavaOpaque<"java.nio.file.Path">>, arg2: JavaOptional<JavaOpaque<"java.net.URI">>, arg3: JavaOptional<j_net_minecraft_network_chat.Component>, arg4: JavaOptional<JavaOpaque<"io.papermc.paper.connection.DisconnectionReason">>): DisconnectionDetails;
}

/** JVM class net.minecraft.network.FriendlyByteBuf. */
export interface FriendlyByteBufMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.buffer.ByteBuf">];
  readonly adventure$locale: JavaOpaque<"java.util.Locale"> | null;
  alloc(): JavaOpaque<"io.netty.buffer.ByteBufAllocator">;
  array(): Array<number>;
  arrayOffset(): number;
  asReadOnly(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  bytesBefore(arg0: number): number;
  bytesBefore(arg0: number, arg1: number): number;
  bytesBefore(arg0: number, arg1: number, arg2: number): number;
  capacity(): number;
  capacity(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  capacity(arg0: number): FriendlyByteBuf;
  clear(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  clear(): FriendlyByteBuf;
  codecDepth: number;
  compareTo(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): number;
  compareTo(arg0: object): number;
  copy(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  copy(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  discardReadBytes(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  discardReadBytes(): FriendlyByteBuf;
  discardSomeReadBytes(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  discardSomeReadBytes(): FriendlyByteBuf;
  duplicate(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  ensureWritable(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  ensureWritable(arg0: number): FriendlyByteBuf;
  ensureWritable(arg0: number, arg1: boolean): number;
  equals(arg0: object): boolean;
  forEachByte(arg0: number, arg1: number, arg2: JavaOpaque<"io.netty.util.ByteProcessor">): number;
  forEachByte(arg0: JavaOpaque<"io.netty.util.ByteProcessor">): number;
  forEachByteDesc(arg0: number, arg1: number, arg2: JavaOpaque<"io.netty.util.ByteProcessor">): number;
  forEachByteDesc(arg0: JavaOpaque<"io.netty.util.ByteProcessor">): number;
  getBoolean(arg0: number): boolean;
  getByte(arg0: number): number;
  getBytes(arg0: number, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">): JavaOpaque<"io.netty.buffer.ByteBuf">;
  getBytes(arg0: number, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">): FriendlyByteBuf;
  getBytes(arg0: number, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  getBytes(arg0: number, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: number): FriendlyByteBuf;
  getBytes(arg0: number, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: number, arg3: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  getBytes(arg0: number, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: number, arg3: number): FriendlyByteBuf;
  /** @throws java.io.IOException */
  getBytes(arg0: number, arg1: JavaOpaque<"java.io.OutputStream">, arg2: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  /** @throws java.io.IOException */
  getBytes(arg0: number, arg1: JavaOpaque<"java.io.OutputStream">, arg2: number): FriendlyByteBuf;
  getBytes(arg0: number, arg1: JavaOpaque<"java.nio.ByteBuffer">): JavaOpaque<"io.netty.buffer.ByteBuf">;
  getBytes(arg0: number, arg1: JavaOpaque<"java.nio.ByteBuffer">): FriendlyByteBuf;
  /** @throws java.io.IOException */
  getBytes(arg0: number, arg1: JavaOpaque<"java.nio.channels.FileChannel">, arg2: bigint, arg3: number): number;
  /** @throws java.io.IOException */
  getBytes(arg0: number, arg1: JavaOpaque<"java.nio.channels.GatheringByteChannel">, arg2: number): number;
  getBytes(arg0: number, arg1: Array<number>): JavaOpaque<"io.netty.buffer.ByteBuf">;
  getBytes(arg0: number, arg1: Array<number>): FriendlyByteBuf;
  getBytes(arg0: number, arg1: Array<number>, arg2: number, arg3: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  getBytes(arg0: number, arg1: Array<number>, arg2: number, arg3: number): FriendlyByteBuf;
  getChar(arg0: number): string;
  getCharSequence(arg0: number, arg1: number, arg2: JavaOpaque<"java.nio.charset.Charset">): string;
  getDouble(arg0: number): number;
  getFloat(arg0: number): number;
  getInt(arg0: number): number;
  getIntLE(arg0: number): number;
  getLong(arg0: number): bigint;
  getLongLE(arg0: number): bigint;
  getMedium(arg0: number): number;
  getMediumLE(arg0: number): number;
  getShort(arg0: number): number;
  getShortLE(arg0: number): number;
  getUnsignedByte(arg0: number): number;
  getUnsignedInt(arg0: number): bigint;
  getUnsignedIntLE(arg0: number): bigint;
  getUnsignedMedium(arg0: number): number;
  getUnsignedMediumLE(arg0: number): number;
  getUnsignedShort(arg0: number): number;
  getUnsignedShortLE(arg0: number): number;
  hasArray(): boolean;
  hasMemoryAddress(): boolean;
  hashCode(): number;
  indexOf(arg0: number, arg1: number, arg2: number): number;
  internalNioBuffer(arg0: number, arg1: number): JavaOpaque<"java.nio.ByteBuffer">;
  isContiguous(): boolean;
  isDirect(): boolean;
  isReadOnly(): boolean;
  isReadable(): boolean;
  isReadable(arg0: number): boolean;
  isWritable(): boolean;
  isWritable(arg0: number): boolean;
  markReaderIndex(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  markReaderIndex(): FriendlyByteBuf;
  markWriterIndex(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  markWriterIndex(): FriendlyByteBuf;
  maxCapacity(): number;
  maxFastWritableBytes(): number;
  maxWritableBytes(): number;
  memoryAddress(): bigint;
  nioBuffer(): JavaOpaque<"java.nio.ByteBuffer">;
  nioBuffer(arg0: number, arg1: number): JavaOpaque<"java.nio.ByteBuffer">;
  nioBufferCount(): number;
  nioBuffers(): Array<JavaOpaque<"java.nio.ByteBuffer">>;
  nioBuffers(arg0: number, arg1: number): Array<JavaOpaque<"java.nio.ByteBuffer">>;
  order(): JavaOpaque<"java.nio.ByteOrder">;
  order(arg0: JavaOpaque<"java.nio.ByteOrder">): JavaOpaque<"io.netty.buffer.ByteBuf">;
  readBitSet(): JavaOpaque<"java.util.BitSet">;
  readBlockHitResult(): j_net_minecraft_world_phys.BlockHitResult;
  readBlockPos(): j_net_minecraft_core.BlockPos;
  readBoolean(): boolean;
  readById<T>(arg0: JavaOpaque<"java.util.function.IntFunction", [T]>): T;
  readByte(): number;
  readByteArray(): Array<number>;
  readByteArray(arg0: number): Array<number>;
  readBytes(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  readBytes(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): JavaOpaque<"io.netty.buffer.ByteBuf">;
  readBytes(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): FriendlyByteBuf;
  readBytes(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  readBytes(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number): FriendlyByteBuf;
  readBytes(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number, arg2: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  readBytes(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number, arg2: number): FriendlyByteBuf;
  /** @throws java.io.IOException */
  readBytes(arg0: JavaOpaque<"java.io.OutputStream">, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  /** @throws java.io.IOException */
  readBytes(arg0: JavaOpaque<"java.io.OutputStream">, arg1: number): FriendlyByteBuf;
  readBytes(arg0: JavaOpaque<"java.nio.ByteBuffer">): JavaOpaque<"io.netty.buffer.ByteBuf">;
  readBytes(arg0: JavaOpaque<"java.nio.ByteBuffer">): FriendlyByteBuf;
  /** @throws java.io.IOException */
  readBytes(arg0: JavaOpaque<"java.nio.channels.FileChannel">, arg1: bigint, arg2: number): number;
  /** @throws java.io.IOException */
  readBytes(arg0: JavaOpaque<"java.nio.channels.GatheringByteChannel">, arg1: number): number;
  readBytes(arg0: Array<number>): JavaOpaque<"io.netty.buffer.ByteBuf">;
  readBytes(arg0: Array<number>): FriendlyByteBuf;
  readBytes(arg0: Array<number>, arg1: number, arg2: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  readBytes(arg0: Array<number>, arg1: number, arg2: number): FriendlyByteBuf;
  readChar(): string;
  readCharSequence(arg0: number, arg1: JavaOpaque<"java.nio.charset.Charset">): string;
  readChunkPos(): j_net_minecraft_world_level.ChunkPos;
  readCollection<T, C /* extends JavaCollection<T> */>(arg0: JavaOpaque<"java.util.function.IntFunction", [C]>, arg1: j_net_minecraft_network_codec.StreamDecoder<FriendlyByteBuf, T>): C;
  readContainerId(): number;
  readDate(): JavaOpaque<"java.util.Date">;
  readDouble(): number;
  readEither<L, R>(arg0: j_net_minecraft_network_codec.StreamDecoder<FriendlyByteBuf, L>, arg1: j_net_minecraft_network_codec.StreamDecoder<FriendlyByteBuf, R>): JavaOpaque<"com.mojang.datafixers.util.Either", [L, R]>;
  readEnum<T /* extends JavaOpaque<"java.lang.Enum", [T]> */>(arg0: JavaClass<T>): T;
  readEnumSet<E /* extends JavaOpaque<"java.lang.Enum", [E]> */>(arg0: JavaClass<E>): JavaOpaque<"java.util.EnumSet", [E]>;
  readFixedBitSet(arg0: number): JavaOpaque<"java.util.BitSet">;
  readFixedSizeLongArray(arg0: Array<bigint>): Array<bigint>;
  readFloat(): number;
  readGlobalPos(): j_net_minecraft_core.GlobalPos;
  readInstant(): JavaOpaque<"java.time.Instant">;
  readInt(): number;
  readIntIdList(): JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">;
  readIntLE(): number;
  readLenientJsonWithCodec<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>): T;
  readList<T>(arg0: j_net_minecraft_network_codec.StreamDecoder<FriendlyByteBuf, T>): JavaList<T>;
  readLong(): bigint;
  readLongArray(): Array<bigint>;
  readLongLE(): bigint;
  readMap<K, V, M /* extends JavaMap<K, V> */>(arg0: JavaOpaque<"java.util.function.IntFunction", [M]>, arg1: j_net_minecraft_network_codec.StreamDecoder<FriendlyByteBuf, K>, arg2: j_net_minecraft_network_codec.StreamDecoder<FriendlyByteBuf, V>): M;
  readMap<K, V>(arg0: j_net_minecraft_network_codec.StreamDecoder<FriendlyByteBuf, K>, arg1: j_net_minecraft_network_codec.StreamDecoder<FriendlyByteBuf, V>): JavaMap<K, V>;
  readMedium(): number;
  readMediumLE(): number;
  readNbt(): j_net_minecraft_nbt.CompoundTag | null;
  readNbt(arg0: j_net_minecraft_nbt.NbtAccounter): j_net_minecraft_nbt.Tag | null;
  readNullable<T>(arg0: j_net_minecraft_network_codec.StreamDecoder<FriendlyByteBuf, T>): T | null;
  readOptional<T>(arg0: j_net_minecraft_network_codec.StreamDecoder<FriendlyByteBuf, T>): JavaOptional<T>;
  readPublicKey(): JavaOpaque<"java.security.PublicKey">;
  readQuaternion(): JavaOpaque<"org.joml.Quaternionf">;
  readRegistryKey<T>(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>;
  readResourceKey<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): j_net_minecraft_resources.ResourceKey<T>;
  readResourceLocation(): j_net_minecraft_resources.ResourceLocation;
  readRetainedSlice(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  readSectionPos(): j_net_minecraft_core.SectionPos;
  readShort(): number;
  readShortLE(): number;
  readSlice(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  readUUID(): JavaOpaque<"java.util.UUID">;
  readUnsignedByte(): number;
  readUnsignedInt(): bigint;
  readUnsignedIntLE(): bigint;
  readUnsignedMedium(): number;
  readUnsignedMediumLE(): number;
  readUnsignedShort(): number;
  readUnsignedShortLE(): number;
  readUtf(): string;
  readUtf(arg0: number): string;
  readVarInt(): number;
  readVarIntArray(): Array<number>;
  readVarIntArray(arg0: number): Array<number>;
  readVarLong(): bigint;
  readVec3(): j_net_minecraft_world_phys.Vec3;
  readVector3f(): JavaOpaque<"org.joml.Vector3f">;
  readWithCodec<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [j_net_minecraft_nbt.Tag]>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: j_net_minecraft_nbt.NbtAccounter): T;
  readWithCodecTrusted<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [j_net_minecraft_nbt.Tag]>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>): T;
  readWithCount(arg0: JavaConsumer<FriendlyByteBuf>): void;
  readableBytes(): number;
  readerIndex(): number;
  readerIndex(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  readerIndex(arg0: number): FriendlyByteBuf;
  refCnt(): number;
  release(): boolean;
  release(arg0: number): boolean;
  resetReaderIndex(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  resetReaderIndex(): FriendlyByteBuf;
  resetWriterIndex(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  resetWriterIndex(): FriendlyByteBuf;
  retain(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  retain(): JavaOpaque<"io.netty.util.ReferenceCounted">;
  retain(): FriendlyByteBuf;
  retain(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  retain(arg0: number): JavaOpaque<"io.netty.util.ReferenceCounted">;
  retain(arg0: number): FriendlyByteBuf;
  retainedDuplicate(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  retainedSlice(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  retainedSlice(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setBoolean(arg0: number, arg1: boolean): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setBoolean(arg0: number, arg1: boolean): FriendlyByteBuf;
  setByte(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setByte(arg0: number, arg1: number): FriendlyByteBuf;
  setBytes(arg0: number, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setBytes(arg0: number, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">): FriendlyByteBuf;
  setBytes(arg0: number, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setBytes(arg0: number, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: number): FriendlyByteBuf;
  setBytes(arg0: number, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: number, arg3: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setBytes(arg0: number, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: number, arg3: number): FriendlyByteBuf;
  /** @throws java.io.IOException */
  setBytes(arg0: number, arg1: JavaOpaque<"java.io.InputStream">, arg2: number): number;
  setBytes(arg0: number, arg1: JavaOpaque<"java.nio.ByteBuffer">): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setBytes(arg0: number, arg1: JavaOpaque<"java.nio.ByteBuffer">): FriendlyByteBuf;
  /** @throws java.io.IOException */
  setBytes(arg0: number, arg1: JavaOpaque<"java.nio.channels.FileChannel">, arg2: bigint, arg3: number): number;
  /** @throws java.io.IOException */
  setBytes(arg0: number, arg1: JavaOpaque<"java.nio.channels.ScatteringByteChannel">, arg2: number): number;
  setBytes(arg0: number, arg1: Array<number>): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setBytes(arg0: number, arg1: Array<number>): FriendlyByteBuf;
  setBytes(arg0: number, arg1: Array<number>, arg2: number, arg3: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setBytes(arg0: number, arg1: Array<number>, arg2: number, arg3: number): FriendlyByteBuf;
  setChar(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setChar(arg0: number, arg1: number): FriendlyByteBuf;
  setCharSequence(arg0: number, arg1: string, arg2: JavaOpaque<"java.nio.charset.Charset">): number;
  setDouble(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setDouble(arg0: number, arg1: number): FriendlyByteBuf;
  setFloat(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setFloat(arg0: number, arg1: number): FriendlyByteBuf;
  setIndex(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setIndex(arg0: number, arg1: number): FriendlyByteBuf;
  setInt(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setInt(arg0: number, arg1: number): FriendlyByteBuf;
  setIntLE(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setIntLE(arg0: number, arg1: number): FriendlyByteBuf;
  setLong(arg0: number, arg1: bigint): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setLong(arg0: number, arg1: bigint): FriendlyByteBuf;
  setLongLE(arg0: number, arg1: bigint): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setLongLE(arg0: number, arg1: bigint): FriendlyByteBuf;
  setMedium(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setMedium(arg0: number, arg1: number): FriendlyByteBuf;
  setMediumLE(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setMediumLE(arg0: number, arg1: number): FriendlyByteBuf;
  setShort(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setShort(arg0: number, arg1: number): FriendlyByteBuf;
  setShortLE(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setShortLE(arg0: number, arg1: number): FriendlyByteBuf;
  setZero(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  setZero(arg0: number, arg1: number): FriendlyByteBuf;
  skipBytes(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  skipBytes(arg0: number): FriendlyByteBuf;
  slice(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  slice(arg0: number, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  toString(): string;
  toString(arg0: number, arg1: number, arg2: JavaOpaque<"java.nio.charset.Charset">): string;
  toString(arg0: JavaOpaque<"java.nio.charset.Charset">): string;
  touch(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  touch(): JavaOpaque<"io.netty.util.ReferenceCounted">;
  touch(): FriendlyByteBuf;
  touch(arg0: object): JavaOpaque<"io.netty.buffer.ByteBuf">;
  touch(arg0: object): JavaOpaque<"io.netty.util.ReferenceCounted">;
  touch(arg0: object): FriendlyByteBuf;
  trackCodecDepth: boolean;
  unwrap(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writableBytes(): number;
  writeBitSet(arg0: JavaOpaque<"java.util.BitSet">): void;
  writeBlockHitResult(arg0: j_net_minecraft_world_phys.BlockHitResult): void;
  writeBlockPos(arg0: j_net_minecraft_core.BlockPos): FriendlyByteBuf;
  writeBoolean(arg0: boolean): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeBoolean(arg0: boolean): FriendlyByteBuf;
  writeById<T>(arg0: JavaOpaque<"java.util.function.ToIntFunction", [T]>, arg1: T): FriendlyByteBuf;
  writeByte(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeByte(arg0: number): FriendlyByteBuf;
  writeByteArray(arg0: Array<number>): FriendlyByteBuf;
  writeBytes(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeBytes(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): FriendlyByteBuf;
  writeBytes(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeBytes(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number): FriendlyByteBuf;
  writeBytes(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number, arg2: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeBytes(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number, arg2: number): FriendlyByteBuf;
  /** @throws java.io.IOException */
  writeBytes(arg0: JavaOpaque<"java.io.InputStream">, arg1: number): number;
  writeBytes(arg0: JavaOpaque<"java.nio.ByteBuffer">): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeBytes(arg0: JavaOpaque<"java.nio.ByteBuffer">): FriendlyByteBuf;
  /** @throws java.io.IOException */
  writeBytes(arg0: JavaOpaque<"java.nio.channels.FileChannel">, arg1: bigint, arg2: number): number;
  /** @throws java.io.IOException */
  writeBytes(arg0: JavaOpaque<"java.nio.channels.ScatteringByteChannel">, arg1: number): number;
  writeBytes(arg0: Array<number>): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeBytes(arg0: Array<number>): FriendlyByteBuf;
  writeBytes(arg0: Array<number>, arg1: number, arg2: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeBytes(arg0: Array<number>, arg1: number, arg2: number): FriendlyByteBuf;
  writeChar(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeChar(arg0: number): FriendlyByteBuf;
  writeCharSequence(arg0: string, arg1: JavaOpaque<"java.nio.charset.Charset">): number;
  writeChunkPos(arg0: j_net_minecraft_world_level.ChunkPos): FriendlyByteBuf;
  writeCollection<T>(arg0: JavaCollection<T>, arg1: j_net_minecraft_network_codec.StreamEncoder<FriendlyByteBuf, T>): void;
  writeContainerId(arg0: number): void;
  writeDate(arg0: JavaOpaque<"java.util.Date">): FriendlyByteBuf;
  writeDouble(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeDouble(arg0: number): FriendlyByteBuf;
  writeEither<L, R>(arg0: JavaOpaque<"com.mojang.datafixers.util.Either", [L, R]>, arg1: j_net_minecraft_network_codec.StreamEncoder<FriendlyByteBuf, L>, arg2: j_net_minecraft_network_codec.StreamEncoder<FriendlyByteBuf, R>): void;
  writeEnum(arg0: JavaOpaque<"java.lang.Enum", [object]>): FriendlyByteBuf;
  writeEnumSet<E /* extends JavaOpaque<"java.lang.Enum", [E]> */>(arg0: JavaOpaque<"java.util.EnumSet", [E]>, arg1: JavaClass<E>): void;
  writeFixedBitSet(arg0: JavaOpaque<"java.util.BitSet">, arg1: number): void;
  writeFixedSizeLongArray(arg0: Array<bigint>): FriendlyByteBuf;
  writeFloat(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeFloat(arg0: number): FriendlyByteBuf;
  writeGlobalPos(arg0: j_net_minecraft_core.GlobalPos): void;
  writeInstant(arg0: JavaOpaque<"java.time.Instant">): void;
  writeInt(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeInt(arg0: number): FriendlyByteBuf;
  writeIntIdList(arg0: JavaOpaque<"it.unimi.dsi.fastutil.ints.IntList">): void;
  writeIntLE(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeIntLE(arg0: number): FriendlyByteBuf;
  writeJsonWithCodec<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: T): void;
  writeJsonWithCodec<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: T, arg2: number): void;
  writeLong(arg0: bigint): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeLong(arg0: bigint): FriendlyByteBuf;
  writeLongArray(arg0: Array<bigint>): FriendlyByteBuf;
  writeLongLE(arg0: bigint): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeLongLE(arg0: bigint): FriendlyByteBuf;
  writeMap<K, V>(arg0: JavaMap<K, V>, arg1: j_net_minecraft_network_codec.StreamEncoder<FriendlyByteBuf, K>, arg2: j_net_minecraft_network_codec.StreamEncoder<FriendlyByteBuf, V>): void;
  writeMedium(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeMedium(arg0: number): FriendlyByteBuf;
  writeMediumLE(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeMediumLE(arg0: number): FriendlyByteBuf;
  writeNbt(arg0: j_net_minecraft_nbt.Tag | null): FriendlyByteBuf | null;
  writeNullable<T>(arg0: T | null, arg1: j_net_minecraft_network_codec.StreamEncoder<FriendlyByteBuf, T>): void | null;
  writeOptional<T>(arg0: JavaOptional<T>, arg1: j_net_minecraft_network_codec.StreamEncoder<FriendlyByteBuf, T>): void;
  writePublicKey(arg0: JavaOpaque<"java.security.PublicKey">): FriendlyByteBuf;
  writeQuaternion(arg0: JavaOpaque<"org.joml.Quaternionf">): void;
  writeResourceKey(arg0: j_net_minecraft_resources.ResourceKey<object>): void;
  writeResourceLocation(arg0: j_net_minecraft_resources.ResourceLocation): FriendlyByteBuf;
  writeSectionPos(arg0: j_net_minecraft_core.SectionPos): FriendlyByteBuf;
  writeShort(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeShort(arg0: number): FriendlyByteBuf;
  writeShortLE(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeShortLE(arg0: number): FriendlyByteBuf;
  writeUUID(arg0: JavaOpaque<"java.util.UUID">): FriendlyByteBuf;
  writeUtf(arg0: string): FriendlyByteBuf;
  writeUtf(arg0: string, arg1: number): FriendlyByteBuf;
  writeVarInt(arg0: number): FriendlyByteBuf;
  writeVarIntArray(arg0: Array<number>): FriendlyByteBuf;
  writeVarLong(arg0: bigint): FriendlyByteBuf;
  writeVec3(arg0: j_net_minecraft_world_phys.Vec3): void;
  writeVector3f(arg0: JavaOpaque<"org.joml.Vector3f">): void;
  writeWithCodec<T>(arg0: JavaOpaque<"com.mojang.serialization.DynamicOps", [j_net_minecraft_nbt.Tag]>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg2: T): FriendlyByteBuf;
  writeZero(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeZero(arg0: number): FriendlyByteBuf;
  writerIndex(): number;
  writerIndex(arg0: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writerIndex(arg0: number): FriendlyByteBuf;
}
export type FriendlyByteBuf = FriendlyByteBufMembers & JavaOpaque<"io.netty.buffer.ByteBuf">;
export interface FriendlyByteBufStatics {
  new(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): FriendlyByteBuf;
  readonly DEFAULT_NBT_QUOTA: 2097152;
  readonly MAX_COMPONENT_STRING_LENGTH: 262144;
  readonly MAX_STRING_LENGTH: 32767;
  limitValue<T>(arg0: JavaOpaque<"java.util.function.IntFunction", [T]>, arg1: number): JavaOpaque<"java.util.function.IntFunction", [T]>;
  readBlockPos(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): j_net_minecraft_core.BlockPos;
  readByteArray(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): Array<number>;
  readByteArray(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number): Array<number>;
  readChunkPos(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): j_net_minecraft_world_level.ChunkPos;
  readContainerId(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): number;
  readFixedSizeLongArray(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: Array<bigint>): Array<bigint>;
  readLongArray(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): Array<bigint>;
  readNbt(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): j_net_minecraft_nbt.CompoundTag | null;
  readNbt(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: j_net_minecraft_nbt.NbtAccounter): j_net_minecraft_nbt.Tag | null;
  readNullable<T, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */>(arg0: B, arg1: j_net_minecraft_network_codec.StreamDecoder<B, T>): T | null;
  readQuaternion(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): JavaOpaque<"org.joml.Quaternionf">;
  readUUID(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): JavaOpaque<"java.util.UUID">;
  readVec3(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): j_net_minecraft_world_phys.Vec3;
  readVector3f(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): JavaOpaque<"org.joml.Vector3f">;
  writeBlockPos(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: j_net_minecraft_core.BlockPos): void;
  writeByteArray(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: Array<number>): void;
  writeChunkPos(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: j_net_minecraft_world_level.ChunkPos): void;
  writeContainerId(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number): void;
  writeFixedSizeLongArray(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: Array<bigint>): void;
  writeLongArray(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: Array<bigint>): void;
  writeNbt(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: j_net_minecraft_nbt.Tag | null): void | null;
  writeNullable<T, B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */>(arg0: B, arg1: T | null, arg2: j_net_minecraft_network_codec.StreamEncoder<B, T>): void | null;
  writeQuaternion(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: JavaOpaque<"org.joml.Quaternionf">): void;
  writeUUID(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: JavaOpaque<"java.util.UUID">): void;
  writeVec3(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: j_net_minecraft_world_phys.Vec3): void;
  writeVector3f(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: JavaOpaque<"org.joml.Vector3f">): void;
}

/** JVM class net.minecraft.network.HandlerNames. */
export interface HandlerNamesMembers {
}
export type HandlerNames = HandlerNamesMembers;
export interface HandlerNamesStatics {
  new(): HandlerNames;
  readonly BUNDLER: "bundler";
  readonly COMPRESS: "compress";
  readonly DECODER: "decoder";
  readonly DECOMPRESS: "decompress";
  readonly DECRYPT: "decrypt";
  readonly ENCODER: "encoder";
  readonly ENCRYPT: "encrypt";
  readonly INBOUND_CONFIG: "inbound_config";
  readonly LATENCY: "latency";
  readonly LEGACY_QUERY: "legacy_query";
  readonly OUTBOUND_CONFIG: "outbound_config";
  readonly PACKET_HANDLER: "packet_handler";
  readonly PREPENDER: "prepender";
  readonly SPLITTER: "splitter";
  readonly TIMEOUT: "timeout";
  readonly UNBUNDLER: "unbundler";
}

/** JVM record net.minecraft.network.HashedPatchMap. */
export interface HashedPatchMapMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  addedComponents(): JavaMap<j_net_minecraft_core_component.DataComponentType<object>, number>;
  equals(arg0: object): boolean;
  hashCode(): number;
  matches(arg0: j_net_minecraft_core_component.DataComponentPatch, arg1: HashedPatchMap_HashGenerator): boolean;
  removedComponents(): JavaSet<j_net_minecraft_core_component.DataComponentType<object>>;
  toString(): string;
}
export type HashedPatchMap = HashedPatchMapMembers & JavaOpaque<"java.lang.Record">;
export interface HashedPatchMapStatics {
  new(arg0: JavaMap<j_net_minecraft_core_component.DataComponentType<object>, number>, arg1: JavaSet<j_net_minecraft_core_component.DataComponentType<object>>): HashedPatchMap;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<RegistryFriendlyByteBuf, HashedPatchMap>;
  create(arg0: j_net_minecraft_core_component.DataComponentPatch, arg1: HashedPatchMap_HashGenerator): HashedPatchMap;
}

/** JVM interface net.minecraft.network.HashedPatchMap$HashGenerator. */
export interface HashedPatchMap_HashGeneratorMembers {
  readonly __javaSupertypes?: readonly [JavaFunction<j_net_minecraft_core_component.TypedDataComponent<object>, number>];
}
export type HashedPatchMap_HashGenerator = HashedPatchMap_HashGeneratorMembers & JavaFunction<j_net_minecraft_core_component.TypedDataComponent<object>, number>;
export interface HashedPatchMap_HashGeneratorStatics {
}

/** JVM interface net.minecraft.network.HashedStack. */
export interface HashedStackMembers {
  matches(arg0: j_net_minecraft_world_item.ItemStack, arg1: HashedPatchMap_HashGenerator): boolean;
}
export type HashedStack = HashedStackMembers;
export interface HashedStackStatics {
  readonly EMPTY: HashedStack;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<RegistryFriendlyByteBuf, HashedStack>;
  create(arg0: j_net_minecraft_world_item.ItemStack, arg1: HashedPatchMap_HashGenerator): HashedStack;
}

/** JVM record net.minecraft.network.HashedStack$ActualItem. */
export interface HashedStack_ActualItemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, HashedStack];
  components(): HashedPatchMap;
  count(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>;
  matches(arg0: j_net_minecraft_world_item.ItemStack, arg1: HashedPatchMap_HashGenerator): boolean;
  toString(): string;
}
export type HashedStack_ActualItem = HashedStack_ActualItemMembers & JavaOpaque<"java.lang.Record"> & HashedStack;
export interface HashedStack_ActualItemStatics {
  new(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_item.Item>, arg1: number, arg2: HashedPatchMap): HashedStack_ActualItem;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<RegistryFriendlyByteBuf, HashedStack_ActualItem>;
}

/** JVM record net.minecraft.network.HiddenByteBuf. */
export interface HiddenByteBufMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"io.netty.util.ReferenceCounted">];
  contents(): JavaOpaque<"io.netty.buffer.ByteBuf">;
  equals(arg0: object): boolean;
  hashCode(): number;
  refCnt(): number;
  release(): boolean;
  release(arg0: number): boolean;
  retain(): JavaOpaque<"io.netty.util.ReferenceCounted">;
  retain(): HiddenByteBuf;
  retain(arg0: number): JavaOpaque<"io.netty.util.ReferenceCounted">;
  retain(arg0: number): HiddenByteBuf;
  toString(): string;
  touch(): JavaOpaque<"io.netty.util.ReferenceCounted">;
  touch(): HiddenByteBuf;
  touch(arg0: object): JavaOpaque<"io.netty.util.ReferenceCounted">;
  touch(arg0: object): HiddenByteBuf;
}
export type HiddenByteBuf = HiddenByteBufMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"io.netty.util.ReferenceCounted">;
export interface HiddenByteBufStatics {
  new(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): HiddenByteBuf;
  pack(arg0: object): object;
  unpack(arg0: object): object;
}

/** JVM class net.minecraft.network.LocalFrameDecoder. */
export interface LocalFrameDecoderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.channel.ChannelInboundHandlerAdapter">];
  channelRead(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object): void;
}
export type LocalFrameDecoder = LocalFrameDecoderMembers & JavaOpaque<"io.netty.channel.ChannelInboundHandlerAdapter">;
export interface LocalFrameDecoderStatics {
  new(): LocalFrameDecoder;
}

/** JVM class net.minecraft.network.LocalFrameEncoder. */
export interface LocalFrameEncoderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.channel.ChannelOutboundHandlerAdapter">];
  write(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object, arg2: JavaOpaque<"io.netty.channel.ChannelPromise">): void;
}
export type LocalFrameEncoder = LocalFrameEncoderMembers & JavaOpaque<"io.netty.channel.ChannelOutboundHandlerAdapter">;
export interface LocalFrameEncoderStatics {
  new(): LocalFrameEncoder;
}

/** JVM class net.minecraft.network.MonitoredLocalFrameDecoder. */
export interface MonitoredLocalFrameDecoderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.channel.ChannelInboundHandlerAdapter">];
  channelRead(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object): void;
}
export type MonitoredLocalFrameDecoder = MonitoredLocalFrameDecoderMembers & JavaOpaque<"io.netty.channel.ChannelInboundHandlerAdapter">;
export interface MonitoredLocalFrameDecoderStatics {
  new(arg0: BandwidthDebugMonitor): MonitoredLocalFrameDecoder;
}

/** JVM class net.minecraft.network.PacketBundlePacker. */
export interface PacketBundlePackerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.handler.codec.MessageToMessageDecoder", [j_net_minecraft_network_protocol.Packet<object>]>];
  /** @throws java.lang.Exception */
  decode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object, arg2: JavaList<object>): void;
  /** @throws java.lang.Exception */
  decode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: j_net_minecraft_network_protocol.Packet<object>, arg2: JavaList<object>): void;
}
export type PacketBundlePacker = PacketBundlePackerMembers & JavaOpaque<"io.netty.handler.codec.MessageToMessageDecoder", [j_net_minecraft_network_protocol.Packet<object>]>;
export interface PacketBundlePackerStatics {
  new(arg0: j_net_minecraft_network_protocol.BundlerInfo): PacketBundlePacker;
}

/** JVM class net.minecraft.network.PacketBundleUnpacker. */
export interface PacketBundleUnpackerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.handler.codec.MessageToMessageEncoder", [j_net_minecraft_network_protocol.Packet<object>]>];
  /** @throws java.lang.Exception */
  encode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object, arg2: JavaList<object>): void;
  /** @throws java.lang.Exception */
  encode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: j_net_minecraft_network_protocol.Packet<object>, arg2: JavaList<object>): void;
}
export type PacketBundleUnpacker = PacketBundleUnpackerMembers & JavaOpaque<"io.netty.handler.codec.MessageToMessageEncoder", [j_net_minecraft_network_protocol.Packet<object>]>;
export interface PacketBundleUnpackerStatics {
  new(arg0: j_net_minecraft_network_protocol.BundlerInfo): PacketBundleUnpacker;
}

/** JVM class net.minecraft.network.PacketDecoder. */
export interface PacketDecoderMembers<T /* extends PacketListener */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.handler.codec.ByteToMessageDecoder">, ProtocolSwapHandler];
  /** @throws java.lang.Exception */
  decode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: JavaList<object>): void;
}
export type PacketDecoder<T /* extends PacketListener */ = unknown> = PacketDecoderMembers<T> & JavaOpaque<"io.netty.handler.codec.ByteToMessageDecoder"> & ProtocolSwapHandler;
export interface PacketDecoderStatics {
  new<T /* extends PacketListener */>(arg0: ProtocolInfo<T>): PacketDecoder<T>;
}

/** JVM class net.minecraft.network.PacketEncoder. */
export interface PacketEncoderMembers<T /* extends PacketListener */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.handler.codec.MessageToByteEncoder", [j_net_minecraft_network_protocol.Packet<T>]>];
  /** @throws java.lang.Exception */
  encode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object, arg2: JavaOpaque<"io.netty.buffer.ByteBuf">): void;
  /** @throws java.lang.Exception */
  encode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: j_net_minecraft_network_protocol.Packet<T>, arg2: JavaOpaque<"io.netty.buffer.ByteBuf">): void;
}
export type PacketEncoder<T /* extends PacketListener */ = unknown> = PacketEncoderMembers<T> & JavaOpaque<"io.netty.handler.codec.MessageToByteEncoder", [j_net_minecraft_network_protocol.Packet<T>]>;
export interface PacketEncoderStatics {
  new<T /* extends PacketListener */>(arg0: ProtocolInfo<T>): PacketEncoder<T>;
}

/** JVM class net.minecraft.network.PacketEncoder$PacketTooLargeException. */
export interface PacketEncoder_PacketTooLargeExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
  getPacket(): j_net_minecraft_network_protocol.Packet<object>;
}
export type PacketEncoder_PacketTooLargeException = PacketEncoder_PacketTooLargeExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface PacketEncoder_PacketTooLargeExceptionStatics {
}

/** JVM interface net.minecraft.network.PacketListener. */
export interface PacketListenerMembers {
  createDisconnectionInfo(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOpaque<"java.lang.Throwable">): DisconnectionDetails;
  fillCrashReport(arg0: j_net_minecraft.CrashReport): void;
  fillListenerSpecificCrashDetails(arg0: j_net_minecraft.CrashReport, arg1: j_net_minecraft.CrashReportCategory): void;
  flow(): j_net_minecraft_network_protocol.PacketFlow;
  isAcceptingMessages(): boolean;
  onDisconnect(arg0: DisconnectionDetails): void;
  /** @throws net.minecraft.ReportedException */
  onPacketError(arg0: j_net_minecraft_network_protocol.Packet, arg1: JavaOpaque<"java.lang.Exception">): void;
  protocol(): ConnectionProtocol;
  shouldHandleMessage(arg0: j_net_minecraft_network_protocol.Packet<object>): boolean;
}
export type PacketListener = PacketListenerMembers;
export interface PacketListenerStatics {
}

/** JVM class net.minecraft.network.PacketSendListener. */
export interface PacketSendListenerMembers {
}
export type PacketSendListener = PacketSendListenerMembers;
export interface PacketSendListenerStatics {
  new(): PacketSendListener;
  exceptionallySend(arg0: JavaSupplier<j_net_minecraft_network_protocol.Packet<object>>): JavaOpaque<"io.netty.channel.ChannelFutureListener">;
  thenRun(arg0: JavaRunnable): JavaOpaque<"io.netty.channel.ChannelFutureListener">;
}

/** JVM interface net.minecraft.network.ProtocolInfo. */
export interface ProtocolInfoMembers<T /* extends PacketListener */ = unknown> {
  bundlerInfo(): j_net_minecraft_network_protocol.BundlerInfo | null;
  codec(): j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, j_net_minecraft_network_protocol.Packet<T>>;
  flow(): j_net_minecraft_network_protocol.PacketFlow;
  id(): ConnectionProtocol;
}
export type ProtocolInfo<T /* extends PacketListener */ = unknown> = ProtocolInfoMembers<T>;
export interface ProtocolInfoStatics {
}

/** JVM interface net.minecraft.network.ProtocolInfo$Details. */
export interface ProtocolInfo_DetailsMembers {
  flow(): j_net_minecraft_network_protocol.PacketFlow;
  id(): ConnectionProtocol;
  listPackets(arg0: ProtocolInfo_Details_PacketVisitor): void;
}
export type ProtocolInfo_Details = ProtocolInfo_DetailsMembers;
export interface ProtocolInfo_DetailsStatics {
}

/** JVM interface net.minecraft.network.ProtocolInfo$Details$PacketVisitor. */
export interface ProtocolInfo_Details_PacketVisitorMembers {
  accept(arg0: j_net_minecraft_network_protocol.PacketType<object>, arg1: number): void;
}
export type ProtocolInfo_Details_PacketVisitor = ProtocolInfo_Details_PacketVisitorMembers;
export interface ProtocolInfo_Details_PacketVisitorStatics {
}

/** JVM interface net.minecraft.network.ProtocolInfo$DetailsProvider. */
export interface ProtocolInfo_DetailsProviderMembers {
  details(): ProtocolInfo_Details;
}
export type ProtocolInfo_DetailsProvider = ProtocolInfo_DetailsProviderMembers;
export interface ProtocolInfo_DetailsProviderStatics {
}

/** JVM interface net.minecraft.network.ProtocolSwapHandler. */
export interface ProtocolSwapHandlerMembers {
}
export type ProtocolSwapHandler = ProtocolSwapHandlerMembers;
export interface ProtocolSwapHandlerStatics {
  handleInboundTerminalPacket(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: j_net_minecraft_network_protocol.Packet<object>): void;
  handleOutboundTerminalPacket(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: j_net_minecraft_network_protocol.Packet<object>): void;
}

/** JVM class net.minecraft.network.RateKickingConnection. */
export interface RateKickingConnectionMembers {
  readonly __javaSupertypes?: readonly [Connection];
  tickSecond(): void;
}
export type RateKickingConnection = RateKickingConnectionMembers & Connection;
export interface RateKickingConnectionStatics {
  new(arg0: number): RateKickingConnection;
}

/** JVM class net.minecraft.network.RegistryFriendlyByteBuf. */
export interface RegistryFriendlyByteBufMembers {
  readonly __javaSupertypes?: readonly [FriendlyByteBuf];
  registryAccess(): j_net_minecraft_core.RegistryAccess;
}
export type RegistryFriendlyByteBuf = RegistryFriendlyByteBufMembers & FriendlyByteBuf;
export interface RegistryFriendlyByteBufStatics {
  new(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: j_net_minecraft_core.RegistryAccess): RegistryFriendlyByteBuf;
  decorator(arg0: j_net_minecraft_core.RegistryAccess): JavaFunction<JavaOpaque<"io.netty.buffer.ByteBuf">, RegistryFriendlyByteBuf>;
}

/** JVM interface net.minecraft.network.ServerboundPacketListener. */
export interface ServerboundPacketListenerMembers {
  readonly __javaSupertypes?: readonly [PacketListener];
  flow(): j_net_minecraft_network_protocol.PacketFlow;
}
export type ServerboundPacketListener = ServerboundPacketListenerMembers & PacketListener;
export interface ServerboundPacketListenerStatics {
}

/** JVM class net.minecraft.network.SkipPacketDecoderException. */
export interface SkipPacketDecoderExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.handler.codec.DecoderException">, SkipPacketException, j_net_minecraft_network_codec.IdDispatchCodec_DontDecorateException];
}
export type SkipPacketDecoderException = SkipPacketDecoderExceptionMembers & JavaOpaque<"io.netty.handler.codec.DecoderException"> & SkipPacketException & j_net_minecraft_network_codec.IdDispatchCodec_DontDecorateException;
export interface SkipPacketDecoderExceptionStatics {
  new(arg0: string): SkipPacketDecoderException;
  new(arg0: JavaOpaque<"java.lang.Throwable">): SkipPacketDecoderException;
}

/** JVM class net.minecraft.network.SkipPacketEncoderException. */
export interface SkipPacketEncoderExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.handler.codec.EncoderException">, SkipPacketException, j_net_minecraft_network_codec.IdDispatchCodec_DontDecorateException];
}
export type SkipPacketEncoderException = SkipPacketEncoderExceptionMembers & JavaOpaque<"io.netty.handler.codec.EncoderException"> & SkipPacketException & j_net_minecraft_network_codec.IdDispatchCodec_DontDecorateException;
export interface SkipPacketEncoderExceptionStatics {
  new(arg0: string): SkipPacketEncoderException;
  new(arg0: JavaOpaque<"java.lang.Throwable">): SkipPacketEncoderException;
}

/** JVM interface net.minecraft.network.SkipPacketException. */
export interface SkipPacketExceptionMembers {
}
export type SkipPacketException = SkipPacketExceptionMembers;
export interface SkipPacketExceptionStatics {
}

/** JVM interface net.minecraft.network.TickablePacketListener. */
export interface TickablePacketListenerMembers {
  readonly __javaSupertypes?: readonly [PacketListener];
  tick(): void;
}
export type TickablePacketListener = TickablePacketListenerMembers & PacketListener;
export interface TickablePacketListenerStatics {
}

/** JVM class net.minecraft.network.UnconfiguredPipelineHandler. */
export interface UnconfiguredPipelineHandlerMembers {
}
export type UnconfiguredPipelineHandler = UnconfiguredPipelineHandlerMembers;
export interface UnconfiguredPipelineHandlerStatics {
  new(): UnconfiguredPipelineHandler;
  setupInboundProtocol<T /* extends PacketListener */>(arg0: ProtocolInfo<T>): UnconfiguredPipelineHandler_InboundConfigurationTask;
  setupOutboundProtocol<T /* extends PacketListener */>(arg0: ProtocolInfo<T>): UnconfiguredPipelineHandler_OutboundConfigurationTask;
}

/** JVM class net.minecraft.network.UnconfiguredPipelineHandler$Inbound. */
export interface UnconfiguredPipelineHandler_InboundMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.channel.ChannelDuplexHandler">];
  channelRead(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object): void;
  /** @throws java.lang.Exception */
  write(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object, arg2: JavaOpaque<"io.netty.channel.ChannelPromise">): void;
}
export type UnconfiguredPipelineHandler_Inbound = UnconfiguredPipelineHandler_InboundMembers & JavaOpaque<"io.netty.channel.ChannelDuplexHandler">;
export interface UnconfiguredPipelineHandler_InboundStatics {
  new(): UnconfiguredPipelineHandler_Inbound;
}

/** JVM interface net.minecraft.network.UnconfiguredPipelineHandler$InboundConfigurationTask. */
export interface UnconfiguredPipelineHandler_InboundConfigurationTaskMembers {
  andThen(arg0: UnconfiguredPipelineHandler_InboundConfigurationTask): UnconfiguredPipelineHandler_InboundConfigurationTask;
  run(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">): void;
}
export type UnconfiguredPipelineHandler_InboundConfigurationTask = UnconfiguredPipelineHandler_InboundConfigurationTaskMembers;
export interface UnconfiguredPipelineHandler_InboundConfigurationTaskStatics {
}

/** JVM class net.minecraft.network.UnconfiguredPipelineHandler$Outbound. */
export interface UnconfiguredPipelineHandler_OutboundMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.channel.ChannelOutboundHandlerAdapter">];
  /** @throws java.lang.Exception */
  write(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object, arg2: JavaOpaque<"io.netty.channel.ChannelPromise">): void;
}
export type UnconfiguredPipelineHandler_Outbound = UnconfiguredPipelineHandler_OutboundMembers & JavaOpaque<"io.netty.channel.ChannelOutboundHandlerAdapter">;
export interface UnconfiguredPipelineHandler_OutboundStatics {
  new(): UnconfiguredPipelineHandler_Outbound;
}

/** JVM interface net.minecraft.network.UnconfiguredPipelineHandler$OutboundConfigurationTask. */
export interface UnconfiguredPipelineHandler_OutboundConfigurationTaskMembers {
  andThen(arg0: UnconfiguredPipelineHandler_OutboundConfigurationTask): UnconfiguredPipelineHandler_OutboundConfigurationTask;
  run(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">): void;
}
export type UnconfiguredPipelineHandler_OutboundConfigurationTask = UnconfiguredPipelineHandler_OutboundConfigurationTaskMembers;
export interface UnconfiguredPipelineHandler_OutboundConfigurationTaskStatics {
}

/** JVM class net.minecraft.network.Utf8String. */
export interface Utf8StringMembers {
}
export type Utf8String = Utf8StringMembers;
export interface Utf8StringStatics {
  new(): Utf8String;
  read(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number): string;
  write(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: string, arg2: number): void;
}

/** JVM class net.minecraft.network.VarInt. */
export interface VarIntMembers {
}
export type VarInt = VarIntMembers;
export interface VarIntStatics {
  new(): VarInt;
  getByteSize(arg0: number): number;
  getByteSizeOld(arg0: number): number;
  hasContinuationBit(arg0: number): boolean;
  read(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): number;
  write(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
  writeOld(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: number): JavaOpaque<"io.netty.buffer.ByteBuf">;
}

/** JVM class net.minecraft.network.Varint21FrameDecoder. */
export interface Varint21FrameDecoderMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.handler.codec.ByteToMessageDecoder">];
  decode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: JavaList<object>): void;
  handlerRemoved0(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">): void;
}
export type Varint21FrameDecoder = Varint21FrameDecoderMembers & JavaOpaque<"io.netty.handler.codec.ByteToMessageDecoder">;
export interface Varint21FrameDecoderStatics {
  new(arg0: BandwidthDebugMonitor | null): Varint21FrameDecoder;
}

/** JVM class net.minecraft.network.Varint21LengthFieldPrepender. */
export interface Varint21LengthFieldPrependerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.handler.codec.MessageToByteEncoder", [JavaOpaque<"io.netty.buffer.ByteBuf">]>];
  encode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: JavaOpaque<"io.netty.buffer.ByteBuf">, arg2: JavaOpaque<"io.netty.buffer.ByteBuf">): void;
  /** @throws java.lang.Exception */
  encode(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object, arg2: JavaOpaque<"io.netty.buffer.ByteBuf">): void;
}
export type Varint21LengthFieldPrepender = Varint21LengthFieldPrependerMembers & JavaOpaque<"io.netty.handler.codec.MessageToByteEncoder", [JavaOpaque<"io.netty.buffer.ByteBuf">]>;
export interface Varint21LengthFieldPrependerStatics {
  new(): Varint21LengthFieldPrepender;
  readonly MAX_VARINT21_BYTES: 3;
}

/** JVM class net.minecraft.network.VarLong. */
export interface VarLongMembers {
}
export type VarLong = VarLongMembers;
export interface VarLongStatics {
  new(): VarLong;
  getByteSize(arg0: bigint): number;
  hasContinuationBit(arg0: number): boolean;
  read(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): bigint;
  write(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: bigint): JavaOpaque<"io.netty.buffer.ByteBuf">;
}
