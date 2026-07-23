// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM interface com.velocitypowered.api.proxy.messages.ChannelIdentifier. */
export interface ChannelIdentifierMembers {
  getId(): string;
}
export type ChannelIdentifier = ChannelIdentifierMembers;
export interface ChannelIdentifierStatics {
}

/** JVM interface com.velocitypowered.api.proxy.messages.ChannelMessageSink. */
export interface ChannelMessageSinkMembers {
  sendPluginMessage(arg0: ChannelIdentifier, arg1: PluginMessageEncoder): boolean;
  sendPluginMessage(arg0: ChannelIdentifier, arg1: Array<number>): boolean;
}
export type ChannelMessageSink = ChannelMessageSinkMembers;
export interface ChannelMessageSinkStatics {
}

/** JVM interface com.velocitypowered.api.proxy.messages.ChannelMessageSource. */
export interface ChannelMessageSourceMembers {
}
export type ChannelMessageSource = ChannelMessageSourceMembers;
export interface ChannelMessageSourceStatics {
}

/** JVM interface com.velocitypowered.api.proxy.messages.ChannelRegistrar. */
export interface ChannelRegistrarMembers {
  register(...arg0: Array<ChannelIdentifier>): void;
  unregister(...arg0: Array<ChannelIdentifier>): void;
}
export type ChannelRegistrar = ChannelRegistrarMembers;
export interface ChannelRegistrarStatics {
}

/** JVM class com.velocitypowered.api.proxy.messages.LegacyChannelIdentifier. */
export interface LegacyChannelIdentifierMembers {
  readonly __javaSupertypes?: readonly [ChannelIdentifier];
  equals(arg0: object): boolean | null;
  getId(): string;
  getName(): string;
  hashCode(): number;
  toString(): string;
}
export type LegacyChannelIdentifier = LegacyChannelIdentifierMembers & ChannelIdentifier;
export interface LegacyChannelIdentifierStatics {
  new(arg0: string): LegacyChannelIdentifier;
}

/** JVM class com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier. */
export interface MinecraftChannelIdentifierMembers {
  readonly __javaSupertypes?: readonly [ChannelIdentifier];
  asKey(): JavaOpaque<"net.kyori.adventure.key.Key">;
  equals(arg0: object): boolean | null;
  getId(): string;
  getName(): string;
  getNamespace(): string;
  hashCode(): number;
  toString(): string;
}
export type MinecraftChannelIdentifier = MinecraftChannelIdentifierMembers & ChannelIdentifier;
export interface MinecraftChannelIdentifierStatics {
  create(arg0: string, arg1: string): MinecraftChannelIdentifier;
  forDefaultNamespace(arg0: string): MinecraftChannelIdentifier;
  from(arg0: string): MinecraftChannelIdentifier;
  from(arg0: JavaOpaque<"net.kyori.adventure.key.Key">): MinecraftChannelIdentifier;
}

/** JVM interface com.velocitypowered.api.proxy.messages.PluginMessageEncoder. */
export interface PluginMessageEncoderMembers {
  encode(arg0: JavaOpaque<"com.google.common.io.ByteArrayDataOutput">): void;
}
export type PluginMessageEncoder = PluginMessageEncoderMembers;
export interface PluginMessageEncoderStatics {
}
