// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';

/** JVM class net.minecraft.util.context.ContextKey. */
export interface ContextKeyMembers<T = unknown> {
  name(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
}
export type ContextKey<T = unknown> = ContextKeyMembers<T>;
export interface ContextKeyStatics {
  new<T>(arg0: j_net_minecraft_resources.ResourceLocation): ContextKey<T>;
  vanilla<T>(arg0: string): ContextKey<T>;
}

/** JVM class net.minecraft.util.context.ContextKeySet. */
export interface ContextKeySetMembers {
  allowed(): JavaSet<ContextKey<object>>;
  required(): JavaSet<ContextKey<object>>;
  toString(): string;
}
export type ContextKeySet = ContextKeySetMembers;
export interface ContextKeySetStatics {
}

/** JVM class net.minecraft.util.context.ContextKeySet$Builder. */
export interface ContextKeySet_BuilderMembers {
  build(): ContextKeySet;
  optional(arg0: ContextKey<object>): ContextKeySet_Builder;
  required(arg0: ContextKey<object>): ContextKeySet_Builder;
}
export type ContextKeySet_Builder = ContextKeySet_BuilderMembers;
export interface ContextKeySet_BuilderStatics {
  new(): ContextKeySet_Builder;
}

/** JVM class net.minecraft.util.context.ContextMap. */
export interface ContextMapMembers {
  getOptional<T>(arg0: ContextKey<T>): T | null;
  getOrDefault<T>(arg0: ContextKey<T>, arg1: T | null): T | null;
  getOrThrow<T>(arg0: ContextKey<T>): T;
  has(arg0: ContextKey<object>): boolean;
}
export type ContextMap = ContextMapMembers;
export interface ContextMapStatics {
}

/** JVM class net.minecraft.util.context.ContextMap$Builder. */
export interface ContextMap_BuilderMembers {
  create(arg0: ContextKeySet): ContextMap;
  getOptionalParameter<T>(arg0: ContextKey<T>): T | null;
  getParameter<T>(arg0: ContextKey<T>): T;
  withOptionalParameter<T>(arg0: ContextKey<T>, arg1: T | null): ContextMap_Builder | null;
  withParameter<T>(arg0: ContextKey<T>, arg1: T): ContextMap_Builder;
}
export type ContextMap_Builder = ContextMap_BuilderMembers;
export interface ContextMap_BuilderStatics {
  new(): ContextMap_Builder;
}
