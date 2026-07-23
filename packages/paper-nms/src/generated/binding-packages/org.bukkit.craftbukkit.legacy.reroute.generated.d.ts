// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_craftbukkit_util from './org.bukkit.craftbukkit.util.generated.js';

/** JVM interface org.bukkit.craftbukkit.legacy.reroute.DoNotReroute. */
export interface DoNotRerouteMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
}
export type DoNotReroute = DoNotRerouteMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface DoNotRerouteStatics {
}

/** JVM interface org.bukkit.craftbukkit.legacy.reroute.InjectCompatibility. */
export interface InjectCompatibilityMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  value(): string;
}
export type InjectCompatibility = InjectCompatibilityMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface InjectCompatibilityStatics {
}

/** JVM interface org.bukkit.craftbukkit.legacy.reroute.InjectPluginName. */
export interface InjectPluginNameMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
}
export type InjectPluginName = InjectPluginNameMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface InjectPluginNameStatics {
}

/** JVM interface org.bukkit.craftbukkit.legacy.reroute.InjectPluginVersion. */
export interface InjectPluginVersionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
}
export type InjectPluginVersion = InjectPluginVersionMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface InjectPluginVersionStatics {
}

/** JVM interface org.bukkit.craftbukkit.legacy.reroute.NotInBukkit. */
export interface NotInBukkitMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
}
export type NotInBukkit = NotInBukkitMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface NotInBukkitStatics {
}

/** JVM interface org.bukkit.craftbukkit.legacy.reroute.RequireCompatibility. */
export interface RequireCompatibilityMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  value(): string;
}
export type RequireCompatibility = RequireCompatibilityMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface RequireCompatibilityStatics {
}

/** JVM interface org.bukkit.craftbukkit.legacy.reroute.RequirePluginVersion. */
export interface RequirePluginVersionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  maxInclusive(): string;
  minInclusive(): string;
  value(): string;
}
export type RequirePluginVersion = RequirePluginVersionMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface RequirePluginVersionStatics {
}

/** JVM record org.bukkit.craftbukkit.legacy.reroute.RequirePluginVersionData. */
export interface RequirePluginVersionDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  maxInclusive(): j_org_bukkit_craftbukkit_util.ApiVersion;
  minInclusive(): j_org_bukkit_craftbukkit_util.ApiVersion;
  test(arg0: j_org_bukkit_craftbukkit_util.ApiVersion): boolean;
  toString(): string;
}
export type RequirePluginVersionData = RequirePluginVersionDataMembers & JavaOpaque<"java.lang.Record">;
export interface RequirePluginVersionDataStatics {
  new(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: j_org_bukkit_craftbukkit_util.ApiVersion): RequirePluginVersionData;
  create(arg0: RequirePluginVersion): RequirePluginVersionData;
}

/** JVM class org.bukkit.craftbukkit.legacy.reroute.Reroute. */
export interface RerouteMembers {
  apply(arg0: j_org_bukkit_craftbukkit_util.ApiVersion, arg1: string, arg2: string, arg3: string, arg4: boolean, arg5: JavaConsumer<RerouteMethodData>): boolean;
}
export type Reroute = RerouteMembers;
export interface RerouteStatics {
}

/** JVM record org.bukkit.craftbukkit.legacy.reroute.RerouteArgument. */
export interface RerouteArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  injectCompatibility(): string | null;
  injectPluginName(): boolean;
  injectPluginVersion(): boolean;
  instruction(): number;
  sourceType(): JavaOpaque<"org.objectweb.asm.Type">;
  toString(): string;
  type(): JavaOpaque<"org.objectweb.asm.Type">;
}
export type RerouteArgument = RerouteArgumentMembers & JavaOpaque<"java.lang.Record">;
export interface RerouteArgumentStatics {
  new(arg0: JavaOpaque<"org.objectweb.asm.Type">, arg1: JavaOpaque<"org.objectweb.asm.Type">, arg2: boolean, arg3: boolean, arg4: string | null): RerouteArgument;
}

/** JVM interface org.bukkit.craftbukkit.legacy.reroute.RerouteArgumentType. */
export interface RerouteArgumentTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  value(): string;
}
export type RerouteArgumentType = RerouteArgumentTypeMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface RerouteArgumentTypeStatics {
}

/** JVM class org.bukkit.craftbukkit.legacy.reroute.RerouteBuilder. */
export interface RerouteBuilderMembers {
  build(): Reroute;
  forClass(arg0: JavaClass<object>): RerouteBuilder;
}
export type RerouteBuilder = RerouteBuilderMembers;
export interface RerouteBuilderStatics {
  create(arg0: JavaPredicate<string>): RerouteBuilder;
}

/** JVM record org.bukkit.craftbukkit.legacy.reroute.RerouteMethodData. */
export interface RerouteMethodDataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  arguments(): JavaList<RerouteArgument>;
  equals(arg0: object): boolean;
  hashCode(): number;
  isInBukkit(): boolean;
  methodKey(): string;
  requiredPluginVersion(): RequirePluginVersionData | null;
  rerouteReturn(): RerouteReturn;
  sourceDesc(): JavaOpaque<"org.objectweb.asm.Type">;
  sourceName(): string;
  sourceOwner(): JavaOpaque<"org.objectweb.asm.Type">;
  staticReroute(): boolean;
  targetName(): string;
  targetOwner(): string;
  targetType(): JavaOpaque<"org.objectweb.asm.Type">;
  toString(): string;
}
export type RerouteMethodData = RerouteMethodDataMembers & JavaOpaque<"java.lang.Record">;
export interface RerouteMethodDataStatics {
  new(arg0: string, arg1: JavaOpaque<"org.objectweb.asm.Type">, arg2: JavaOpaque<"org.objectweb.asm.Type">, arg3: string, arg4: boolean, arg5: JavaOpaque<"org.objectweb.asm.Type">, arg6: string, arg7: string, arg8: JavaList<RerouteArgument>, arg9: RerouteReturn, arg10: boolean, arg11: RequirePluginVersionData | null): RerouteMethodData;
}

/** JVM interface org.bukkit.craftbukkit.legacy.reroute.RerouteMethodName. */
export interface RerouteMethodNameMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  value(): string;
}
export type RerouteMethodName = RerouteMethodNameMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface RerouteMethodNameStatics {
}

/** JVM record org.bukkit.craftbukkit.legacy.reroute.RerouteReturn. */
export interface RerouteReturnMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  instruction(): number;
  toString(): string;
  type(): JavaOpaque<"org.objectweb.asm.Type">;
}
export type RerouteReturn = RerouteReturnMembers & JavaOpaque<"java.lang.Record">;
export interface RerouteReturnStatics {
  new(arg0: JavaOpaque<"org.objectweb.asm.Type">): RerouteReturn;
}

/** JVM interface org.bukkit.craftbukkit.legacy.reroute.RerouteReturnType. */
export interface RerouteReturnTypeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  value(): string;
}
export type RerouteReturnType = RerouteReturnTypeMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface RerouteReturnTypeStatics {
}

/** JVM interface org.bukkit.craftbukkit.legacy.reroute.RerouteStatic. */
export interface RerouteStaticMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  value(): string;
}
export type RerouteStatic = RerouteStaticMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface RerouteStaticStatics {
}
