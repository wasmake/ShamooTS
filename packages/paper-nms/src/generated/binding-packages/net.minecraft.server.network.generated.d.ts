// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_common from './net.minecraft.network.protocol.common.generated.js';
import type * as j_net_minecraft_network_protocol_configuration from './net.minecraft.network.protocol.configuration.generated.js';
import type * as j_net_minecraft_network_protocol_cookie from './net.minecraft.network.protocol.cookie.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_network_protocol_handshake from './net.minecraft.network.protocol.handshake.generated.js';
import type * as j_net_minecraft_network_protocol_login from './net.minecraft.network.protocol.login.generated.js';
import type * as j_net_minecraft_network_protocol_ping from './net.minecraft.network.protocol.ping.generated.js';
import type * as j_net_minecraft_network_protocol_status from './net.minecraft.network.protocol.status.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_dedicated from './net.minecraft.server.dedicated.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_chunk from './net.minecraft.world.level.chunk.generated.js';
import type * as j_org_bukkit_craftbukkit from './org.bukkit.craftbukkit.generated.js';
import type * as j_org_bukkit_craftbukkit_entity from './org.bukkit.craftbukkit.entity.generated.js';

/** JVM record net.minecraft.server.network.CommonListenerCookie. */
export interface CommonListenerCookieMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  brandName(): string | null;
  channels(): JavaSet<string>;
  clientInformation(): j_net_minecraft_server_level.ClientInformation;
  equals(arg0: object): boolean;
  gameProfile(): JavaOpaque<"com.mojang.authlib.GameProfile">;
  hashCode(): number;
  keepAlive(): JavaOpaque<"io.papermc.paper.util.KeepAlive">;
  latency(): number;
  toString(): string;
  transferred(): boolean;
}
export type CommonListenerCookie = CommonListenerCookieMembers & JavaOpaque<"java.lang.Record">;
export interface CommonListenerCookieStatics {
  new(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">, arg1: number, arg2: j_net_minecraft_server_level.ClientInformation, arg3: boolean, arg4: string | null, arg5: JavaSet<string>, arg6: JavaOpaque<"io.papermc.paper.util.KeepAlive">): CommonListenerCookie;
  createInitial(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">, arg1: boolean): CommonListenerCookie;
}

/** JVM interface net.minecraft.server.network.ConfigurationTask. */
export interface ConfigurationTaskMembers {
  start(arg0: JavaConsumer<j_net_minecraft_network_protocol.Packet<object>>): void;
  type(): ConfigurationTask_Type;
}
export type ConfigurationTask = ConfigurationTaskMembers;
export interface ConfigurationTaskStatics {
}

/** JVM record net.minecraft.server.network.ConfigurationTask$Type. */
export interface ConfigurationTask_TypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): string;
  toString(): string;
}
export type ConfigurationTask_Type = ConfigurationTask_TypeMembers & JavaOpaque<"java.lang.Record">;
export interface ConfigurationTask_TypeStatics {
  new(arg0: string): ConfigurationTask_Type;
}

/** JVM record net.minecraft.server.network.Filterable. */
export interface FilterableMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  filtered(): JavaOptional<T>;
  get(arg0: boolean): T;
  hashCode(): number;
  map<U>(arg0: JavaFunction<T, U>): Filterable<U>;
  raw(): T;
  resolve<U>(arg0: JavaFunction<T, JavaOptional<U>>): JavaOptional<Filterable<U>>;
  toString(): string;
}
export type Filterable<T = unknown> = FilterableMembers<T> & JavaOpaque<"java.lang.Record">;
export interface FilterableStatics {
  new<T>(arg0: T, arg1: JavaOptional<T>): Filterable<T>;
  codec<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>): JavaOpaque<"com.mojang.serialization.Codec", [Filterable<T>]>;
  from(arg0: FilteredText): Filterable<string>;
  passThrough<T>(arg0: T): Filterable<T>;
  streamCodec<B /* extends JavaOpaque<"io.netty.buffer.ByteBuf"> */, T>(arg0: j_net_minecraft_network_codec.StreamCodec<B, T>): j_net_minecraft_network_codec.StreamCodec<B, Filterable<T>>;
}

/** JVM record net.minecraft.server.network.FilteredText. */
export interface FilteredTextMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  filtered(): string | null;
  filteredOrEmpty(): string;
  hashCode(): number;
  isFiltered(): boolean;
  mask(): j_net_minecraft_network_chat.FilterMask;
  raw(): string;
  toString(): string;
}
export type FilteredText = FilteredTextMembers & JavaOpaque<"java.lang.Record">;
export interface FilteredTextStatics {
  new(arg0: string, arg1: j_net_minecraft_network_chat.FilterMask): FilteredText;
  readonly EMPTY: FilteredText;
  fullyFiltered(arg0: string): FilteredText;
  passThrough(arg0: string): FilteredText;
}

/** JVM class net.minecraft.server.network.LegacyProtocolUtils. */
export interface LegacyProtocolUtilsMembers {
}
export type LegacyProtocolUtils = LegacyProtocolUtilsMembers;
export interface LegacyProtocolUtilsStatics {
  new(): LegacyProtocolUtils;
  readonly CUSTOM_PAYLOAD_PACKET_ID: 250;
  readonly CUSTOM_PAYLOAD_PACKET_PING_CHANNEL: "MC|PingHost";
  readonly DISCONNECT_PACKET_ID: 255;
  readonly FAKE_PROTOCOL_VERSION: 127;
  readonly GET_INFO_PACKET_ID: 254;
  readonly GET_INFO_PACKET_VERSION_1: 1;
  readLegacyString(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">): string;
  writeLegacyString(arg0: JavaOpaque<"io.netty.buffer.ByteBuf">, arg1: string): void;
}

/** JVM class net.minecraft.server.network.LegacyQueryHandler. */
export interface LegacyQueryHandlerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"io.netty.channel.ChannelInboundHandlerAdapter">];
  channelRead(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">, arg1: object): void;
  handlerRemoved(arg0: JavaOpaque<"io.netty.channel.ChannelHandlerContext">): void;
}
export type LegacyQueryHandler = LegacyQueryHandlerMembers & JavaOpaque<"io.netty.channel.ChannelInboundHandlerAdapter">;
export interface LegacyQueryHandlerStatics {
  new(arg0: j_net_minecraft_server.ServerInfo): LegacyQueryHandler;
}

/** JVM class net.minecraft.server.network.LegacyTextFilter. */
export interface LegacyTextFilterMembers {
  readonly __javaSupertypes?: readonly [ServerTextFilter];
  createContext(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): TextFilter;
}
export type LegacyTextFilter = LegacyTextFilterMembers & ServerTextFilter;
export interface LegacyTextFilterStatics {
  createTextFilterFromConfig(arg0: string): ServerTextFilter | null;
}

/** JVM class net.minecraft.server.network.MemoryServerHandshakePacketListenerImpl. */
export interface MemoryServerHandshakePacketListenerImplMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_handshake.ServerHandshakePacketListener];
  handleIntention(arg0: j_net_minecraft_network_protocol_handshake.ClientIntentionPacket): void;
  isAcceptingMessages(): boolean;
  onDisconnect(arg0: j_net_minecraft_network.DisconnectionDetails): void;
}
export type MemoryServerHandshakePacketListenerImpl = MemoryServerHandshakePacketListenerImplMembers & j_net_minecraft_network_protocol_handshake.ServerHandshakePacketListener;
export interface MemoryServerHandshakePacketListenerImplStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer, arg1: j_net_minecraft_network.Connection): MemoryServerHandshakePacketListenerImpl;
}

/** JVM class net.minecraft.server.network.PlayerChunkSender. */
export interface PlayerChunkSenderMembers {
  dropChunk(arg0: j_net_minecraft_server_level.ServerPlayer, arg1: j_net_minecraft_world_level.ChunkPos): void;
  isPending(arg0: bigint): boolean;
  markChunkPendingToSend(arg0: j_net_minecraft_world_level_chunk.LevelChunk): void;
  onChunkBatchReceivedByClient(arg0: number): void;
  sendNextChunks(arg0: j_net_minecraft_server_level.ServerPlayer): void;
}
export type PlayerChunkSender = PlayerChunkSenderMembers;
export interface PlayerChunkSenderStatics {
  new(arg0: boolean): PlayerChunkSender;
  readonly MAX_CHUNKS_PER_TICK: 64;
  readonly MIN_CHUNKS_PER_TICK: 0.01;
  sendChunk(arg0: ServerGamePacketListenerImpl, arg1: j_net_minecraft_server_level.ServerLevel, arg2: j_net_minecraft_world_level_chunk.LevelChunk): void;
}

/** JVM class net.minecraft.server.network.PlayerSafetyServiceTextFilter. */
export interface PlayerSafetyServiceTextFilterMembers {
  readonly __javaSupertypes?: readonly [ServerTextFilter];
}
export type PlayerSafetyServiceTextFilter = PlayerSafetyServiceTextFilterMembers & ServerTextFilter;
export interface PlayerSafetyServiceTextFilterStatics {
  createTextFilterFromConfig(arg0: string): ServerTextFilter | null;
}

/** JVM abstract net.minecraft.server.network.ServerCommonPacketListenerImpl. */
export interface ServerCommonPacketListenerImplMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_common.ServerCommonPacketListener];
  readonly connection: j_net_minecraft_network.Connection;
  readonly cserver: j_org_bukkit_craftbukkit.CraftServer;
  disconnect(arg0: j_net_minecraft_network.DisconnectionDetails): void;
  disconnect(arg0: j_net_minecraft_network_chat.Component): void;
  disconnect(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOpaque<"io.papermc.paper.connection.DisconnectionReason">): void;
  disconnectAsync(arg0: j_net_minecraft_network.DisconnectionDetails): void;
  disconnectAsync(arg0: j_net_minecraft_network_chat.Component): void;
  disconnectAsync(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOpaque<"io.papermc.paper.connection.DisconnectionReason">): void;
  getApiConnection(): JavaOpaque<"io.papermc.paper.connection.PlayerCommonConnection">;
  getAudience(): JavaOpaque<"net.kyori.adventure.audience.Audience">;
  getOwner(): JavaOpaque<"com.mojang.authlib.GameProfile">;
  handleCookieResponse(arg0: j_net_minecraft_network_protocol_cookie.ServerboundCookieResponsePacket): void;
  handleCustomClickAction(arg0: j_net_minecraft_network_protocol_common.ServerboundCustomClickActionPacket): void;
  handleCustomPayload(arg0: j_net_minecraft_network_protocol_common.ServerboundCustomPayloadPacket): void;
  handleKeepAlive(arg0: j_net_minecraft_network_protocol_common.ServerboundKeepAlivePacket): void;
  handlePong(arg0: j_net_minecraft_network_protocol_common.ServerboundPongPacket): void;
  handleResourcePackResponse(arg0: j_net_minecraft_network_protocol_common.ServerboundResourcePackPacket): void;
  isTransferred(): boolean;
  latency(): number;
  onDisconnect(arg0: j_net_minecraft_network.DisconnectionDetails): void;
  /** @throws net.minecraft.ReportedException */
  onPacketError(arg0: j_net_minecraft_network_protocol.Packet, arg1: JavaOpaque<"java.lang.Exception">): void;
  readonly packCallbacks: JavaMap<JavaOpaque<"java.util.UUID">, JavaOpaque<"net.kyori.adventure.resource.ResourcePackCallback">>;
  paperConnection(): JavaOpaque<"io.papermc.paper.connection.PaperCommonConnection", [object]>;
  playerBrand: string | null;
  readonly pluginMessagerChannels: JavaSet<string>;
  processedDisconnect: boolean;
  resumeFlushing(): void;
  send(arg0: j_net_minecraft_network_protocol.Packet<object>): void;
  send(arg0: j_net_minecraft_network_protocol.Packet<object>, arg1: JavaOpaque<"io.netty.channel.ChannelFutureListener"> | null): void;
  suspendFlushing(): void;
}
export type ServerCommonPacketListenerImpl = ServerCommonPacketListenerImplMembers & j_net_minecraft_network_protocol_common.ServerCommonPacketListener;
export interface ServerCommonPacketListenerImplStatics {
  readonly CUSTOM_REGISTER: j_net_minecraft_resources.ResourceLocation;
  readonly LATENCY_CHECK_INTERVAL: 15000;
}

/** JVM class net.minecraft.server.network.ServerConfigurationPacketListenerImpl. */
export interface ServerConfigurationPacketListenerImplMembers {
  readonly __javaSupertypes?: readonly [ServerCommonPacketListenerImpl, j_net_minecraft_network.TickablePacketListener, j_net_minecraft_network_protocol_configuration.ServerConfigurationPacketListener];
  clientInformation: j_net_minecraft_server_level.ClientInformation;
  currentTask: ConfigurationTask | null;
  disconnectAsync(arg0: j_net_minecraft_network.DisconnectionDetails): void;
  finishCurrentTask(arg0: ConfigurationTask_Type): void;
  getApiConnection(): JavaOpaque<"io.papermc.paper.connection.PlayerCommonConnection">;
  getAudience(): JavaOpaque<"net.kyori.adventure.audience.Audience">;
  handleClientInformation(arg0: j_net_minecraft_network_protocol_common.ServerboundClientInformationPacket): void;
  handleConfigurationFinished(arg0: j_net_minecraft_network_protocol_configuration.ServerboundFinishConfigurationPacket): void;
  handleCustomPayload(arg0: j_net_minecraft_network_protocol_common.ServerboundCustomPayloadPacket): void;
  handleResourcePackResponse(arg0: j_net_minecraft_network_protocol_common.ServerboundResourcePackPacket): void;
  handleSelectKnownPacks(arg0: j_net_minecraft_network_protocol_configuration.ServerboundSelectKnownPacks): void;
  isAcceptingMessages(): boolean;
  onDisconnect(arg0: j_net_minecraft_network.DisconnectionDetails): void;
  paperConnection: (JavaOpaque<"io.papermc.paper.connection.PaperPlayerConfigurationConnection">) & { (): JavaOpaque<"io.papermc.paper.connection.PaperPlayerConfigurationConnection"> };
  returnToWorld(): void;
  startConfiguration(): void;
  tick(): void;
}
export type ServerConfigurationPacketListenerImpl = ServerConfigurationPacketListenerImplMembers & ServerCommonPacketListenerImpl & j_net_minecraft_network.TickablePacketListener & j_net_minecraft_network_protocol_configuration.ServerConfigurationPacketListener;
export interface ServerConfigurationPacketListenerImplStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer, arg1: j_net_minecraft_network.Connection, arg2: CommonListenerCookie): ServerConfigurationPacketListenerImpl;
}

/** JVM class net.minecraft.server.network.ServerConnectionListener. */
export interface ServerConnectionListenerMembers {
  acceptConnections(): void;
  getConnections(): JavaList<j_net_minecraft_network.Connection>;
  getServer(): j_net_minecraft_server.MinecraftServer;
  running: boolean;
  startMemoryChannel(): JavaOpaque<"java.net.SocketAddress">;
  /** @throws java.io.IOException */
  startTcpServerListener(arg0: JavaOpaque<"java.net.InetAddress"> | null, arg1: number): void;
  /** @throws java.io.IOException */
  startTcpServerListener(arg0: JavaOpaque<"java.net.SocketAddress">): void;
  stop(): void;
  tick(): void;
}
export type ServerConnectionListener = ServerConnectionListenerMembers;
export interface ServerConnectionListenerStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer): ServerConnectionListener;
  readonly SERVER_EPOLL_EVENT_GROUP: JavaSupplier<JavaOpaque<"io.netty.channel.epoll.EpollEventLoopGroup">>;
  readonly SERVER_EVENT_GROUP: JavaSupplier<JavaOpaque<"io.netty.channel.nio.NioEventLoopGroup">>;
}

/** JVM class net.minecraft.server.network.ServerGamePacketListenerImpl. */
export interface ServerGamePacketListenerImplMembers {
  readonly __javaSupertypes?: readonly [ServerCommonPacketListenerImpl, j_net_minecraft_network.TickablePacketListener, j_net_minecraft_network_protocol_game.GameProtocols_Context, j_net_minecraft_network_protocol_game.ServerGamePacketListener, ServerPlayerConnection];
  ackBlockChangesUpTo(arg0: number): void;
  chat(arg0: string, arg1: j_net_minecraft_network_chat.PlayerChatMessage, arg2: boolean): void;
  readonly chunkSender: PlayerChunkSender;
  disconnect(arg0: JavaOpaque<"net.kyori.adventure.text.Component">): void;
  disconnect(arg0: JavaOpaque<"net.kyori.adventure.text.Component">, arg1: JavaOpaque<"org.bukkit.event.player.PlayerKickEvent$Cause">): void;
  disconnect(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOpaque<"org.bukkit.event.player.PlayerKickEvent$Cause">): void;
  disconnectAsync(arg0: JavaOpaque<"net.kyori.adventure.text.Component">, arg1: JavaOpaque<"org.bukkit.event.player.PlayerKickEvent$Cause">): void;
  disconnectAsync(arg0: j_net_minecraft_network.DisconnectionDetails): void;
  disconnectAsync(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOpaque<"org.bukkit.event.player.PlayerKickEvent$Cause">): void;
  getApiConnection(): JavaOpaque<"io.papermc.paper.connection.PlayerCommonConnection">;
  getAudience(): JavaOpaque<"net.kyori.adventure.audience.Audience">;
  getCraftPlayer(): j_org_bukkit_craftbukkit_entity.CraftPlayer;
  getPlayer(): j_net_minecraft_server_level.ServerPlayer;
  getRawAddress(): JavaOpaque<"java.net.SocketAddress">;
  getRemoteAddress(): JavaOpaque<"java.net.SocketAddress">;
  handleAcceptPlayerLoad(arg0: j_net_minecraft_network_protocol_game.ServerboundPlayerLoadedPacket): void;
  handleAcceptTeleportPacket(arg0: j_net_minecraft_network_protocol_game.ServerboundAcceptTeleportationPacket): void;
  handleAnimate(arg0: j_net_minecraft_network_protocol_game.ServerboundSwingPacket): void;
  handleBlockEntityTagQuery(arg0: j_net_minecraft_network_protocol_game.ServerboundBlockEntityTagQueryPacket): void;
  handleBundleItemSelectedPacket(arg0: j_net_minecraft_network_protocol_game.ServerboundSelectBundleItemPacket): void;
  handleChangeDifficulty(arg0: j_net_minecraft_network_protocol_game.ServerboundChangeDifficultyPacket): void;
  handleChangeGameMode(arg0: j_net_minecraft_network_protocol_game.ServerboundChangeGameModePacket): void;
  handleChat(arg0: j_net_minecraft_network_protocol_game.ServerboundChatPacket): void;
  handleChatAck(arg0: j_net_minecraft_network_protocol_game.ServerboundChatAckPacket): void;
  handleChatCommand(arg0: j_net_minecraft_network_protocol_game.ServerboundChatCommandPacket): void;
  handleChatSessionUpdate(arg0: j_net_minecraft_network_protocol_game.ServerboundChatSessionUpdatePacket): void;
  handleChunkBatchReceived(arg0: j_net_minecraft_network_protocol_game.ServerboundChunkBatchReceivedPacket): void;
  handleClientCommand(arg0: j_net_minecraft_network_protocol_game.ServerboundClientCommandPacket): void;
  handleClientInformation(arg0: j_net_minecraft_network_protocol_common.ServerboundClientInformationPacket): void;
  handleClientTickEnd(arg0: j_net_minecraft_network_protocol_game.ServerboundClientTickEndPacket): void;
  handleCommand(arg0: string): void;
  handleConfigurationAcknowledged(arg0: j_net_minecraft_network_protocol_game.ServerboundConfigurationAcknowledgedPacket): void;
  handleContainerButtonClick(arg0: j_net_minecraft_network_protocol_game.ServerboundContainerButtonClickPacket): void;
  handleContainerClick(arg0: j_net_minecraft_network_protocol_game.ServerboundContainerClickPacket): void;
  handleContainerClose(arg0: j_net_minecraft_network_protocol_game.ServerboundContainerClosePacket): void;
  handleContainerClose(arg0: j_net_minecraft_network_protocol_game.ServerboundContainerClosePacket, arg1: JavaOpaque<"org.bukkit.event.inventory.InventoryCloseEvent$Reason">): void;
  handleContainerSlotStateChanged(arg0: j_net_minecraft_network_protocol_game.ServerboundContainerSlotStateChangedPacket): void;
  handleCustomCommandSuggestions(arg0: j_net_minecraft_network_protocol_game.ServerboundCommandSuggestionPacket): void;
  handleCustomPayload(arg0: j_net_minecraft_network_protocol_common.ServerboundCustomPayloadPacket): void;
  handleDebugSampleSubscription(arg0: j_net_minecraft_network_protocol_game.ServerboundDebugSampleSubscriptionPacket): void;
  handleEditBook(arg0: j_net_minecraft_network_protocol_game.ServerboundEditBookPacket): void;
  handleEntityTagQuery(arg0: j_net_minecraft_network_protocol_game.ServerboundEntityTagQueryPacket): void;
  handleInteract(arg0: j_net_minecraft_network_protocol_game.ServerboundInteractPacket): void;
  handleJigsawGenerate(arg0: j_net_minecraft_network_protocol_game.ServerboundJigsawGeneratePacket): void;
  handleLockDifficulty(arg0: j_net_minecraft_network_protocol_game.ServerboundLockDifficultyPacket): void;
  handleMovePlayer(arg0: j_net_minecraft_network_protocol_game.ServerboundMovePlayerPacket): void;
  handleMoveVehicle(arg0: j_net_minecraft_network_protocol_game.ServerboundMoveVehiclePacket): void;
  handlePaddleBoat(arg0: j_net_minecraft_network_protocol_game.ServerboundPaddleBoatPacket): void;
  handlePickItemFromBlock(arg0: j_net_minecraft_network_protocol_game.ServerboundPickItemFromBlockPacket): void;
  handlePickItemFromEntity(arg0: j_net_minecraft_network_protocol_game.ServerboundPickItemFromEntityPacket): void;
  handlePingRequest(arg0: j_net_minecraft_network_protocol_ping.ServerboundPingRequestPacket): void;
  handlePlaceRecipe(arg0: j_net_minecraft_network_protocol_game.ServerboundPlaceRecipePacket): void;
  handlePlayerAbilities(arg0: j_net_minecraft_network_protocol_game.ServerboundPlayerAbilitiesPacket): void;
  handlePlayerAction(arg0: j_net_minecraft_network_protocol_game.ServerboundPlayerActionPacket): void;
  handlePlayerCommand(arg0: j_net_minecraft_network_protocol_game.ServerboundPlayerCommandPacket): void;
  handlePlayerInput(arg0: j_net_minecraft_network_protocol_game.ServerboundPlayerInputPacket): void;
  handleRecipeBookChangeSettingsPacket(arg0: j_net_minecraft_network_protocol_game.ServerboundRecipeBookChangeSettingsPacket): void;
  handleRecipeBookSeenRecipePacket(arg0: j_net_minecraft_network_protocol_game.ServerboundRecipeBookSeenRecipePacket): void;
  handleRenameItem(arg0: j_net_minecraft_network_protocol_game.ServerboundRenameItemPacket): void;
  handleResourcePackResponse(arg0: j_net_minecraft_network_protocol_common.ServerboundResourcePackPacket): void;
  handleSeenAdvancements(arg0: j_net_minecraft_network_protocol_game.ServerboundSeenAdvancementsPacket): void;
  handleSelectTrade(arg0: j_net_minecraft_network_protocol_game.ServerboundSelectTradePacket): void;
  handleSetBeaconPacket(arg0: j_net_minecraft_network_protocol_game.ServerboundSetBeaconPacket): void;
  handleSetCarriedItem(arg0: j_net_minecraft_network_protocol_game.ServerboundSetCarriedItemPacket): void;
  handleSetCommandBlock(arg0: j_net_minecraft_network_protocol_game.ServerboundSetCommandBlockPacket): void;
  handleSetCommandMinecart(arg0: j_net_minecraft_network_protocol_game.ServerboundSetCommandMinecartPacket): void;
  handleSetCreativeModeSlot(arg0: j_net_minecraft_network_protocol_game.ServerboundSetCreativeModeSlotPacket): void;
  handleSetJigsawBlock(arg0: j_net_minecraft_network_protocol_game.ServerboundSetJigsawBlockPacket): void;
  handleSetStructureBlock(arg0: j_net_minecraft_network_protocol_game.ServerboundSetStructureBlockPacket): void;
  handleSetTestBlock(arg0: j_net_minecraft_network_protocol_game.ServerboundSetTestBlockPacket): void;
  handleSignUpdate(arg0: j_net_minecraft_network_protocol_game.ServerboundSignUpdatePacket): void;
  handleSignedChatCommand(arg0: j_net_minecraft_network_protocol_game.ServerboundChatCommandSignedPacket): void;
  handleTeleportToEntityPacket(arg0: j_net_minecraft_network_protocol_game.ServerboundTeleportToEntityPacket): void;
  handleTestInstanceBlockAction(arg0: j_net_minecraft_network_protocol_game.ServerboundTestInstanceBlockActionPacket): void;
  handleUseItem(arg0: j_net_minecraft_network_protocol_game.ServerboundUseItemPacket): void;
  handleUseItemOn(arg0: j_net_minecraft_network_protocol_game.ServerboundUseItemOnPacket): void;
  hasInfiniteMaterials(): boolean;
  internalTeleport(arg0: j_net_minecraft_world_entity.PositionMoveRotation, arg1: JavaSet<j_net_minecraft_world_entity.Relative>): void;
  isAcceptingMessages(): boolean;
  isDisconnected(): boolean;
  onDisconnect(arg0: j_net_minecraft_network.DisconnectionDetails): void;
  paperConnection(): JavaOpaque<"io.papermc.paper.connection.PaperPlayerGameConnection">;
  player: j_net_minecraft_server_level.ServerPlayer;
  readonly playerGameConnection: JavaOpaque<"io.papermc.paper.connection.PaperPlayerGameConnection">;
  resetPosition(): void;
  sendDisguisedChatMessage(arg0: j_net_minecraft_network_chat.Component, arg1: j_net_minecraft_network_chat.ChatType_Bound): void;
  sendPlayerChatMessage(arg0: j_net_minecraft_network_chat.PlayerChatMessage, arg1: j_net_minecraft_network_chat.ChatType_Bound): void;
  shouldHandleMessage(arg0: j_net_minecraft_network_protocol.Packet<object>): boolean;
  switchToConfig(): void;
  teleport(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
  teleport(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): boolean;
  teleport(arg0: j_net_minecraft_world_entity.PositionMoveRotation, arg1: JavaSet<j_net_minecraft_world_entity.Relative>): void;
  teleport(arg0: j_net_minecraft_world_entity.PositionMoveRotation, arg1: JavaSet<j_net_minecraft_world_entity.Relative>, arg2: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): boolean;
  teleport(arg0: JavaOpaque<"org.bukkit.Location">): void;
  tick(): void;
}
export type ServerGamePacketListenerImpl = ServerGamePacketListenerImplMembers & ServerCommonPacketListenerImpl & j_net_minecraft_network.TickablePacketListener & j_net_minecraft_network_protocol_game.GameProtocols_Context & j_net_minecraft_network_protocol_game.ServerGamePacketListener & ServerPlayerConnection;
export interface ServerGamePacketListenerImplStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer, arg1: j_net_minecraft_network.Connection, arg2: j_net_minecraft_server_level.ServerPlayer, arg3: CommonListenerCookie): ServerGamePacketListenerImpl;
  isChatMessageIllegal(arg0: string): boolean;
}

/** JVM class net.minecraft.server.network.ServerHandshakePacketListenerImpl. */
export interface ServerHandshakePacketListenerImplMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_handshake.ServerHandshakePacketListener];
  handleIntention(arg0: j_net_minecraft_network_protocol_handshake.ClientIntentionPacket): void;
  isAcceptingMessages(): boolean;
  onDisconnect(arg0: j_net_minecraft_network.DisconnectionDetails): void;
}
export type ServerHandshakePacketListenerImpl = ServerHandshakePacketListenerImplMembers & j_net_minecraft_network_protocol_handshake.ServerHandshakePacketListener;
export interface ServerHandshakePacketListenerImplStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer, arg1: j_net_minecraft_network.Connection): ServerHandshakePacketListenerImpl;
}

/** JVM class net.minecraft.server.network.ServerLoginPacketListenerImpl. */
export interface ServerLoginPacketListenerImplMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network.TickablePacketListener, j_net_minecraft_network_protocol_login.ServerLoginPacketListener];
  authenticatedProfile: JavaOpaque<"com.mojang.authlib.GameProfile"> | null;
  readonly connection: j_net_minecraft_network.Connection;
  disconnect(arg0: string): void;
  disconnect(arg0: j_net_minecraft_network_chat.Component): void;
  fillListenerSpecificCrashDetails(arg0: j_net_minecraft.CrashReport, arg1: j_net_minecraft.CrashReportCategory): void;
  getUserName(): string;
  handleCookieResponse(arg0: j_net_minecraft_network_protocol_cookie.ServerboundCookieResponsePacket): void;
  handleCustomQueryPacket(arg0: j_net_minecraft_network_protocol_login.ServerboundCustomQueryAnswerPacket): void;
  handleHello(arg0: j_net_minecraft_network_protocol_login.ServerboundHelloPacket): void;
  handleKey(arg0: j_net_minecraft_network_protocol_login.ServerboundKeyPacket): void;
  handleLoginAcknowledgement(arg0: j_net_minecraft_network_protocol_login.ServerboundLoginAcknowledgedPacket): void;
  iKnowThisMayNotBeTheBestIdeaButPleaseDisableUsernameValidation: boolean;
  isAcceptingMessages(): boolean;
  onDisconnect(arg0: j_net_minecraft_network.DisconnectionDetails): void;
  requestedUsername: string | null;
  requestedUuid: JavaOpaque<"java.util.UUID"> | null;
  state: ServerLoginPacketListenerImpl_State;
  tick(): void;
  tickTimeout(): void;
  readonly transferred: boolean;
}
export type ServerLoginPacketListenerImpl = ServerLoginPacketListenerImplMembers & j_net_minecraft_network.TickablePacketListener & j_net_minecraft_network_protocol_login.ServerLoginPacketListener;
export interface ServerLoginPacketListenerImplStatics {
  new(arg0: j_net_minecraft_server.MinecraftServer, arg1: j_net_minecraft_network.Connection, arg2: boolean): ServerLoginPacketListenerImpl;
}

/** Live JVM enum net.minecraft.server.network.ServerLoginPacketListenerImpl$State; constants are host handles, not strings. */
export type ServerLoginPacketListenerImpl_State = JavaEnum<"net.minecraft.server.network.ServerLoginPacketListenerImpl$State", "ACCEPTED" | "AUTHENTICATING" | "HELLO" | "KEY" | "NEGOTIATING" | "PROTOCOL_SWITCHING" | "VERIFYING" | "WAITING_FOR_DUPE_DISCONNECT"> & ServerLoginPacketListenerImpl_StateMembers;
export interface ServerLoginPacketListenerImpl_StateMembers {
}
export interface ServerLoginPacketListenerImpl_StateStatics {
  readonly ACCEPTED: ServerLoginPacketListenerImpl_State;
  readonly AUTHENTICATING: ServerLoginPacketListenerImpl_State;
  readonly HELLO: ServerLoginPacketListenerImpl_State;
  readonly KEY: ServerLoginPacketListenerImpl_State;
  readonly NEGOTIATING: ServerLoginPacketListenerImpl_State;
  readonly PROTOCOL_SWITCHING: ServerLoginPacketListenerImpl_State;
  readonly VERIFYING: ServerLoginPacketListenerImpl_State;
  readonly WAITING_FOR_DUPE_DISCONNECT: ServerLoginPacketListenerImpl_State;
  valueOf(arg0: string): ServerLoginPacketListenerImpl_State;
  values(): Array<ServerLoginPacketListenerImpl_State>;
}

/** JVM interface net.minecraft.server.network.ServerPlayerConnection. */
export interface ServerPlayerConnectionMembers {
  getPlayer(): j_net_minecraft_server_level.ServerPlayer;
  send(arg0: j_net_minecraft_network_protocol.Packet<object>): void;
}
export type ServerPlayerConnection = ServerPlayerConnectionMembers;
export interface ServerPlayerConnectionStatics {
}

/** JVM class net.minecraft.server.network.ServerStatusPacketListenerImpl. */
export interface ServerStatusPacketListenerImplMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_protocol_status.ServerStatusPacketListener];
  handlePingRequest(arg0: j_net_minecraft_network_protocol_ping.ServerboundPingRequestPacket): void;
  handleStatusRequest(arg0: j_net_minecraft_network_protocol_status.ServerboundStatusRequestPacket): void;
  isAcceptingMessages(): boolean;
  onDisconnect(arg0: j_net_minecraft_network.DisconnectionDetails): void;
}
export type ServerStatusPacketListenerImpl = ServerStatusPacketListenerImplMembers & j_net_minecraft_network_protocol_status.ServerStatusPacketListener;
export interface ServerStatusPacketListenerImplStatics {
  new(arg0: j_net_minecraft_network_protocol_status.ServerStatus, arg1: j_net_minecraft_network.Connection): ServerStatusPacketListenerImpl;
}

/** JVM abstract net.minecraft.server.network.ServerTextFilter. */
export interface ServerTextFilterMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.AutoCloseable">];
  close(): void;
  createContext(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): TextFilter;
}
export type ServerTextFilter = ServerTextFilterMembers & JavaOpaque<"java.lang.AutoCloseable">;
export interface ServerTextFilterStatics {
  createFromConfig(arg0: j_net_minecraft_server_dedicated.DedicatedServerProperties): ServerTextFilter | null;
}

/** JVM interface net.minecraft.server.network.ServerTextFilter$IgnoreStrategy. */
export interface ServerTextFilter_IgnoreStrategyMembers {
  shouldIgnore(arg0: string, arg1: number): boolean;
}
export type ServerTextFilter_IgnoreStrategy = ServerTextFilter_IgnoreStrategyMembers;
export interface ServerTextFilter_IgnoreStrategyStatics {
  readonly IGNORE_FULLY_FILTERED: ServerTextFilter_IgnoreStrategy;
  readonly NEVER_IGNORE: ServerTextFilter_IgnoreStrategy;
  ignoreOverThreshold(arg0: number): ServerTextFilter_IgnoreStrategy;
  select(arg0: number): ServerTextFilter_IgnoreStrategy;
}

/** JVM interface net.minecraft.server.network.ServerTextFilter$MessageEncoder. */
export interface ServerTextFilter_MessageEncoderMembers {
  encode(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">, arg1: string): JavaOpaque<"com.google.gson.JsonObject">;
}
export type ServerTextFilter_MessageEncoder = ServerTextFilter_MessageEncoderMembers;
export interface ServerTextFilter_MessageEncoderStatics {
}

/** JVM class net.minecraft.server.network.ServerTextFilter$PlayerContext. */
export interface ServerTextFilter_PlayerContextMembers {
  readonly __javaSupertypes?: readonly [TextFilter];
  processMessageBundle(arg0: JavaList<string>): PromiseLike<JavaList<FilteredText>>;
  processStreamMessage(arg0: string): PromiseLike<FilteredText>;
}
export type ServerTextFilter_PlayerContext = ServerTextFilter_PlayerContextMembers & TextFilter;
export interface ServerTextFilter_PlayerContextStatics {
}

/** JVM class net.minecraft.server.network.ServerTextFilter$RequestFailedException. */
export interface ServerTextFilter_RequestFailedExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type ServerTextFilter_RequestFailedException = ServerTextFilter_RequestFailedExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface ServerTextFilter_RequestFailedExceptionStatics {
}

/** JVM interface net.minecraft.server.network.TextFilter. */
export interface TextFilterMembers {
  join(): void;
  leave(): void;
  processMessageBundle(arg0: JavaList<string>): PromiseLike<JavaList<FilteredText>>;
  processStreamMessage(arg0: string): PromiseLike<FilteredText>;
}
export type TextFilter = TextFilterMembers;
export interface TextFilterStatics {
  readonly DUMMY: TextFilter;
}
