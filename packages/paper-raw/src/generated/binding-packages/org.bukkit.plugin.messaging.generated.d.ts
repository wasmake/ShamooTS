// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_connection from './io.papermc.paper.connection.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM class org.bukkit.plugin.messaging.ChannelNameTooLongException. */
export interface ChannelNameTooLongExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type ChannelNameTooLongException = ChannelNameTooLongExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface ChannelNameTooLongExceptionStatics {
  new(): ChannelNameTooLongException;
  new(arg0: number, arg1: string): ChannelNameTooLongException;
}

/** JVM class org.bukkit.plugin.messaging.ChannelNotRegisteredException. */
export interface ChannelNotRegisteredExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type ChannelNotRegisteredException = ChannelNotRegisteredExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface ChannelNotRegisteredExceptionStatics {
  new(): ChannelNotRegisteredException;
  new(arg0: string): ChannelNotRegisteredException;
}

/** JVM class org.bukkit.plugin.messaging.MessageTooLargeException. */
export interface MessageTooLargeExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type MessageTooLargeException = MessageTooLargeExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface MessageTooLargeExceptionStatics {
  new(): MessageTooLargeException;
  new(arg0: number): MessageTooLargeException;
  new(arg0: string): MessageTooLargeException;
  new(arg0: Array<number>): MessageTooLargeException;
}

/** JVM interface org.bukkit.plugin.messaging.Messenger. */
export interface MessengerMembers {
  dispatchIncomingMessage(arg0: j_io_papermc_paper_connection.PlayerConnection, arg1: string, arg2: Array<number>): void;
  dispatchIncomingMessage(arg0: j_org_bukkit_entity.Player, arg1: string, arg2: Array<number>): void;
  getIncomingChannelRegistrations(arg0: string): JavaSet<PluginMessageListenerRegistration>;
  getIncomingChannelRegistrations(arg0: j_org_bukkit_plugin.Plugin): JavaSet<PluginMessageListenerRegistration>;
  getIncomingChannelRegistrations(arg0: j_org_bukkit_plugin.Plugin, arg1: string): JavaSet<PluginMessageListenerRegistration>;
  getIncomingChannels(): JavaSet<string>;
  getIncomingChannels(arg0: j_org_bukkit_plugin.Plugin): JavaSet<string>;
  getOutgoingChannels(): JavaSet<string>;
  getOutgoingChannels(arg0: j_org_bukkit_plugin.Plugin): JavaSet<string>;
  isIncomingChannelRegistered(arg0: j_org_bukkit_plugin.Plugin, arg1: string): boolean;
  isOutgoingChannelRegistered(arg0: j_org_bukkit_plugin.Plugin, arg1: string): boolean;
  isRegistrationValid(arg0: PluginMessageListenerRegistration): boolean;
  isReservedChannel(arg0: string): boolean;
  registerIncomingPluginChannel(arg0: j_org_bukkit_plugin.Plugin, arg1: string, arg2: PluginMessageListener): PluginMessageListenerRegistration;
  registerOutgoingPluginChannel(arg0: j_org_bukkit_plugin.Plugin, arg1: string): void;
  unregisterIncomingPluginChannel(arg0: j_org_bukkit_plugin.Plugin): void;
  unregisterIncomingPluginChannel(arg0: j_org_bukkit_plugin.Plugin, arg1: string): void;
  unregisterIncomingPluginChannel(arg0: j_org_bukkit_plugin.Plugin, arg1: string, arg2: PluginMessageListener): void;
  unregisterOutgoingPluginChannel(arg0: j_org_bukkit_plugin.Plugin): void;
  unregisterOutgoingPluginChannel(arg0: j_org_bukkit_plugin.Plugin, arg1: string): void;
}
export type Messenger = MessengerMembers;
export interface MessengerStatics {
  readonly MAX_CHANNEL_SIZE: number;
  readonly MAX_MESSAGE_SIZE: 1048576;
}

/** Live JVM enum org.bukkit.plugin.messaging.PluginChannelDirection; constants are host handles, not strings. */
export type PluginChannelDirection = JavaEnum<"org.bukkit.plugin.messaging.PluginChannelDirection", "INCOMING" | "OUTGOING"> & PluginChannelDirectionMembers;
export interface PluginChannelDirectionMembers {
}
export interface PluginChannelDirectionStatics {
  readonly INCOMING: PluginChannelDirection;
  readonly OUTGOING: PluginChannelDirection;
  valueOf(arg0: string): PluginChannelDirection;
  values(): Array<PluginChannelDirection>;
}

/** JVM interface org.bukkit.plugin.messaging.PluginMessageListener. */
export interface PluginMessageListenerMembers {
  onPluginMessageReceived(arg0: string, arg1: j_io_papermc_paper_connection.PlayerConnection, arg2: Array<number>): void;
  onPluginMessageReceived(arg0: string, arg1: j_org_bukkit_entity.Player, arg2: Array<number>): void;
}
export type PluginMessageListener = PluginMessageListenerMembers;
export interface PluginMessageListenerStatics {
}

/** JVM class org.bukkit.plugin.messaging.PluginMessageListenerRegistration. */
export interface PluginMessageListenerRegistrationMembers {
  equals(arg0: object): boolean;
  getChannel(): string;
  getListener(): PluginMessageListener;
  getPlugin(): j_org_bukkit_plugin.Plugin;
  hashCode(): number;
  isValid(): boolean;
}
export type PluginMessageListenerRegistration = PluginMessageListenerRegistrationMembers;
export interface PluginMessageListenerRegistrationStatics {
  new(arg0: Messenger, arg1: j_org_bukkit_plugin.Plugin, arg2: string, arg3: PluginMessageListener): PluginMessageListenerRegistration;
}

/** JVM interface org.bukkit.plugin.messaging.PluginMessageRecipient. */
export interface PluginMessageRecipientMembers {
  getListeningPluginChannels(): JavaSet<string>;
  sendPluginMessage(arg0: j_org_bukkit_plugin.Plugin, arg1: string, arg2: Array<number>): void;
}
export type PluginMessageRecipient = PluginMessageRecipientMembers;
export interface PluginMessageRecipientStatics {
}

/** JVM class org.bukkit.plugin.messaging.ReservedChannelException. */
export interface ReservedChannelExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type ReservedChannelException = ReservedChannelExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface ReservedChannelExceptionStatics {
  new(): ReservedChannelException;
  new(arg0: string): ReservedChannelException;
}

/** JVM class org.bukkit.plugin.messaging.StandardMessenger. */
export interface StandardMessengerMembers {
  readonly __javaSupertypes?: readonly [Messenger];
  dispatchIncomingMessage(arg0: j_io_papermc_paper_connection.PlayerConnection, arg1: string, arg2: Array<number>): void;
  dispatchIncomingMessage(arg0: j_org_bukkit_entity.Player, arg1: string, arg2: Array<number>): void;
  getIncomingChannelRegistrations(arg0: string): JavaSet<PluginMessageListenerRegistration>;
  getIncomingChannelRegistrations(arg0: j_org_bukkit_plugin.Plugin): JavaSet<PluginMessageListenerRegistration>;
  getIncomingChannelRegistrations(arg0: j_org_bukkit_plugin.Plugin, arg1: string): JavaSet<PluginMessageListenerRegistration>;
  getIncomingChannels(): JavaSet<string>;
  getIncomingChannels(arg0: j_org_bukkit_plugin.Plugin): JavaSet<string>;
  getOutgoingChannels(): JavaSet<string>;
  getOutgoingChannels(arg0: j_org_bukkit_plugin.Plugin): JavaSet<string>;
  isIncomingChannelRegistered(arg0: j_org_bukkit_plugin.Plugin, arg1: string): boolean;
  isOutgoingChannelRegistered(arg0: j_org_bukkit_plugin.Plugin, arg1: string): boolean;
  isRegistrationValid(arg0: PluginMessageListenerRegistration): boolean;
  isReservedChannel(arg0: string): boolean;
  registerIncomingPluginChannel(arg0: j_org_bukkit_plugin.Plugin, arg1: string, arg2: PluginMessageListener): PluginMessageListenerRegistration;
  registerOutgoingPluginChannel(arg0: j_org_bukkit_plugin.Plugin, arg1: string): void;
  unregisterIncomingPluginChannel(arg0: j_org_bukkit_plugin.Plugin): void;
  unregisterIncomingPluginChannel(arg0: j_org_bukkit_plugin.Plugin, arg1: string): void;
  unregisterIncomingPluginChannel(arg0: j_org_bukkit_plugin.Plugin, arg1: string, arg2: PluginMessageListener): void;
  unregisterOutgoingPluginChannel(arg0: j_org_bukkit_plugin.Plugin): void;
  unregisterOutgoingPluginChannel(arg0: j_org_bukkit_plugin.Plugin, arg1: string): void;
}
export type StandardMessenger = StandardMessengerMembers & Messenger;
export interface StandardMessengerStatics {
  new(): StandardMessenger;
  validateAndCorrectChannel(arg0: string): string;
  validateChannel(arg0: string): void;
  validatePluginMessage(arg0: Messenger, arg1: j_org_bukkit_plugin.Plugin, arg2: string, arg3: Array<number>): void;
}
