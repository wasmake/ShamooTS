// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';

/** JVM interface net.minecraft.network.protocol.login.custom.CustomQueryAnswerPayload. */
export interface CustomQueryAnswerPayloadMembers {
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type CustomQueryAnswerPayload = CustomQueryAnswerPayloadMembers;
export interface CustomQueryAnswerPayloadStatics {
}

/** JVM interface net.minecraft.network.protocol.login.custom.CustomQueryPayload. */
export interface CustomQueryPayloadMembers {
  id(): j_net_minecraft_resources.ResourceLocation;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type CustomQueryPayload = CustomQueryPayloadMembers;
export interface CustomQueryPayloadStatics {
}

/** JVM record net.minecraft.network.protocol.login.custom.DiscardedQueryAnswerPayload. */
export interface DiscardedQueryAnswerPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomQueryAnswerPayload];
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type DiscardedQueryAnswerPayload = DiscardedQueryAnswerPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomQueryAnswerPayload;
export interface DiscardedQueryAnswerPayloadStatics {
  new(): DiscardedQueryAnswerPayload;
  readonly INSTANCE: DiscardedQueryAnswerPayload;
}

/** JVM record net.minecraft.network.protocol.login.custom.DiscardedQueryPayload. */
export interface DiscardedQueryPayloadMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, CustomQueryPayload];
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type DiscardedQueryPayload = DiscardedQueryPayloadMembers & JavaOpaque<"java.lang.Record"> & CustomQueryPayload;
export interface DiscardedQueryPayloadStatics {
  new(arg0: j_net_minecraft_resources.ResourceLocation): DiscardedQueryPayload;
}
