// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class net.minecraft.util.datafix.schemas.NamespacedSchema. */
export interface NamespacedSchemaMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  getChoiceType(arg0: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">, arg1: string): JavaOpaque<"com.mojang.datafixers.types.Type", [object]>;
}
export type NamespacedSchema = NamespacedSchemaMembers & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface NamespacedSchemaStatics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): NamespacedSchema;
  readonly NAMESPACED_STRING_CODEC: JavaOpaque<"com.mojang.serialization.codecs.PrimitiveCodec", [string]>;
  ensureNamespaced(arg0: string): string;
  namespacedString(): JavaOpaque<"com.mojang.datafixers.types.Type", [string]>;
}

/** JVM class net.minecraft.util.datafix.schemas.V100. */
export interface V100Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V100 = V100Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V100Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V100;
}

/** JVM class net.minecraft.util.datafix.schemas.V102. */
export interface V102Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V102 = V102Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V102Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V102;
}

/** JVM class net.minecraft.util.datafix.schemas.V1022. */
export interface V1022Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V1022 = V1022Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V1022Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1022;
}

/** JVM class net.minecraft.util.datafix.schemas.V106. */
export interface V106Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V106 = V106Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V106Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V106;
}

/** JVM class net.minecraft.util.datafix.schemas.V107. */
export interface V107Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V107 = V107Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V107Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V107;
}

/** JVM class net.minecraft.util.datafix.schemas.V1125. */
export interface V1125Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V1125 = V1125Members & NamespacedSchema;
export interface V1125Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1125;
}

/** JVM class net.minecraft.util.datafix.schemas.V135. */
export interface V135Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V135 = V135Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V135Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V135;
}

/** JVM class net.minecraft.util.datafix.schemas.V143. */
export interface V143Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V143 = V143Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V143Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V143;
}

/** JVM class net.minecraft.util.datafix.schemas.V1451. */
export interface V1451Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1451 = V1451Members & NamespacedSchema;
export interface V1451Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1451;
}

/** JVM class net.minecraft.util.datafix.schemas.V1451_1. */
export interface V1451_1Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V1451_1 = V1451_1Members & NamespacedSchema;
export interface V1451_1Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1451_1;
}

/** JVM class net.minecraft.util.datafix.schemas.V1451_2. */
export interface V1451_2Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1451_2 = V1451_2Members & NamespacedSchema;
export interface V1451_2Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1451_2;
}

/** JVM class net.minecraft.util.datafix.schemas.V1451_3. */
export interface V1451_3Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1451_3 = V1451_3Members & NamespacedSchema;
export interface V1451_3Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1451_3;
}

/** JVM class net.minecraft.util.datafix.schemas.V1451_4. */
export interface V1451_4Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V1451_4 = V1451_4Members & NamespacedSchema;
export interface V1451_4Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1451_4;
}

/** JVM class net.minecraft.util.datafix.schemas.V1451_5. */
export interface V1451_5Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1451_5 = V1451_5Members & NamespacedSchema;
export interface V1451_5Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1451_5;
}

/** JVM class net.minecraft.util.datafix.schemas.V1451_6. */
export interface V1451_6Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V1451_6 = V1451_6Members & NamespacedSchema;
export interface V1451_6Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1451_6;
  readonly REPACK_OBJECTIVE_ID: JavaOpaque<"com.mojang.datafixers.types.templates.Hook$HookFunction">;
  readonly SPECIAL_OBJECTIVE_MARKER: "_special";
  readonly UNPACK_OBJECTIVE_ID: JavaOpaque<"com.mojang.datafixers.types.templates.Hook$HookFunction">;
  createCriterionTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  packNamespacedWithDot(arg0: string): string;
}

/** JVM class net.minecraft.util.datafix.schemas.V1458. */
export interface V1458Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V1458 = V1458Members & NamespacedSchema;
export interface V1458Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1458;
  nameable(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">;
  nameableInventory(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">;
}

/** JVM class net.minecraft.util.datafix.schemas.V1460. */
export interface V1460Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V1460 = V1460Members & NamespacedSchema;
export interface V1460Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1460;
  registerInventory(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
  registerMob(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
}

/** JVM class net.minecraft.util.datafix.schemas.V1466. */
export interface V1466Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V1466 = V1466Members & NamespacedSchema;
export interface V1466Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1466;
}

/** JVM class net.minecraft.util.datafix.schemas.V1470. */
export interface V1470Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1470 = V1470Members & NamespacedSchema;
export interface V1470Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1470;
  registerMob(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
}

/** JVM class net.minecraft.util.datafix.schemas.V1481. */
export interface V1481Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1481 = V1481Members & NamespacedSchema;
export interface V1481Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1481;
}

/** JVM class net.minecraft.util.datafix.schemas.V1483. */
export interface V1483Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1483 = V1483Members & NamespacedSchema;
export interface V1483Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1483;
}

/** JVM class net.minecraft.util.datafix.schemas.V1486. */
export interface V1486Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1486 = V1486Members & NamespacedSchema;
export interface V1486Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1486;
}

/** JVM class net.minecraft.util.datafix.schemas.V1488. */
export interface V1488Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1488 = V1488Members & NamespacedSchema;
export interface V1488Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1488;
}

/** JVM class net.minecraft.util.datafix.schemas.V1510. */
export interface V1510Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1510 = V1510Members & NamespacedSchema;
export interface V1510Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1510;
}

/** JVM class net.minecraft.util.datafix.schemas.V1800. */
export interface V1800Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1800 = V1800Members & NamespacedSchema;
export interface V1800Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1800;
}

/** JVM class net.minecraft.util.datafix.schemas.V1801. */
export interface V1801Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1801 = V1801Members & NamespacedSchema;
export interface V1801Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1801;
}

/** JVM class net.minecraft.util.datafix.schemas.V1904. */
export interface V1904Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1904 = V1904Members & NamespacedSchema;
export interface V1904Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1904;
}

/** JVM class net.minecraft.util.datafix.schemas.V1906. */
export interface V1906Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1906 = V1906Members & NamespacedSchema;
export interface V1906Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1906;
  registerInventory(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
}

/** JVM class net.minecraft.util.datafix.schemas.V1909. */
export interface V1909Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1909 = V1909Members & NamespacedSchema;
export interface V1909Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1909;
}

/** JVM class net.minecraft.util.datafix.schemas.V1920. */
export interface V1920Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1920 = V1920Members & NamespacedSchema;
export interface V1920Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1920;
  registerInventory(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
}

/** JVM class net.minecraft.util.datafix.schemas.V1928. */
export interface V1928Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1928 = V1928Members & NamespacedSchema;
export interface V1928Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1928;
  registerMob(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
}

/** JVM class net.minecraft.util.datafix.schemas.V1929. */
export interface V1929Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1929 = V1929Members & NamespacedSchema;
export interface V1929Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1929;
}

/** JVM class net.minecraft.util.datafix.schemas.V1931. */
export interface V1931Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V1931 = V1931Members & NamespacedSchema;
export interface V1931Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V1931;
}

/** JVM class net.minecraft.util.datafix.schemas.V2100. */
export interface V2100Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2100 = V2100Members & NamespacedSchema;
export interface V2100Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2100;
  registerMob(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
}

/** JVM class net.minecraft.util.datafix.schemas.V2501. */
export interface V2501Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2501 = V2501Members & NamespacedSchema;
export interface V2501Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2501;
}

/** JVM class net.minecraft.util.datafix.schemas.V2502. */
export interface V2502Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2502 = V2502Members & NamespacedSchema;
export interface V2502Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2502;
}

/** JVM class net.minecraft.util.datafix.schemas.V2505. */
export interface V2505Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2505 = V2505Members & NamespacedSchema;
export interface V2505Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2505;
}

/** JVM class net.minecraft.util.datafix.schemas.V2509. */
export interface V2509Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2509 = V2509Members & NamespacedSchema;
export interface V2509Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2509;
}

/** JVM class net.minecraft.util.datafix.schemas.V2511_1. */
export interface V2511_1Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2511_1 = V2511_1Members & NamespacedSchema;
export interface V2511_1Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2511_1;
}

/** JVM class net.minecraft.util.datafix.schemas.V2519. */
export interface V2519Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2519 = V2519Members & NamespacedSchema;
export interface V2519Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2519;
}

/** JVM class net.minecraft.util.datafix.schemas.V2522. */
export interface V2522Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2522 = V2522Members & NamespacedSchema;
export interface V2522Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2522;
}

/** JVM class net.minecraft.util.datafix.schemas.V2551. */
export interface V2551Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V2551 = V2551Members & NamespacedSchema;
export interface V2551Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2551;
}

/** JVM class net.minecraft.util.datafix.schemas.V2568. */
export interface V2568Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2568 = V2568Members & NamespacedSchema;
export interface V2568Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2568;
}

/** JVM class net.minecraft.util.datafix.schemas.V2571. */
export interface V2571Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2571 = V2571Members & NamespacedSchema;
export interface V2571Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2571;
}

/** JVM class net.minecraft.util.datafix.schemas.V2684. */
export interface V2684Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V2684 = V2684Members & NamespacedSchema;
export interface V2684Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2684;
}

/** JVM class net.minecraft.util.datafix.schemas.V2686. */
export interface V2686Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2686 = V2686Members & NamespacedSchema;
export interface V2686Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2686;
}

/** JVM class net.minecraft.util.datafix.schemas.V2688. */
export interface V2688Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2688 = V2688Members & NamespacedSchema;
export interface V2688Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2688;
}

/** JVM class net.minecraft.util.datafix.schemas.V2704. */
export interface V2704Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2704 = V2704Members & NamespacedSchema;
export interface V2704Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2704;
}

/** JVM class net.minecraft.util.datafix.schemas.V2707. */
export interface V2707Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V2707 = V2707Members & NamespacedSchema;
export interface V2707Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2707;
}

/** JVM class net.minecraft.util.datafix.schemas.V2831. */
export interface V2831Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V2831 = V2831Members & NamespacedSchema;
export interface V2831Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2831;
}

/** JVM class net.minecraft.util.datafix.schemas.V2832. */
export interface V2832Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V2832 = V2832Members & NamespacedSchema;
export interface V2832Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2832;
}

/** JVM class net.minecraft.util.datafix.schemas.V2842. */
export interface V2842Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V2842 = V2842Members & NamespacedSchema;
export interface V2842Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V2842;
}

/** JVM class net.minecraft.util.datafix.schemas.V3076. */
export interface V3076Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3076 = V3076Members & NamespacedSchema;
export interface V3076Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3076;
}

/** JVM class net.minecraft.util.datafix.schemas.V3078. */
export interface V3078Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3078 = V3078Members & NamespacedSchema;
export interface V3078Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3078;
  registerMob(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
}

/** JVM class net.minecraft.util.datafix.schemas.V3081. */
export interface V3081Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3081 = V3081Members & NamespacedSchema;
export interface V3081Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3081;
}

/** JVM class net.minecraft.util.datafix.schemas.V3082. */
export interface V3082Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3082 = V3082Members & NamespacedSchema;
export interface V3082Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3082;
}

/** JVM class net.minecraft.util.datafix.schemas.V3083. */
export interface V3083Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3083 = V3083Members & NamespacedSchema;
export interface V3083Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3083;
}

/** JVM class net.minecraft.util.datafix.schemas.V3202. */
export interface V3202Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3202 = V3202Members & NamespacedSchema;
export interface V3202Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3202;
}

/** JVM class net.minecraft.util.datafix.schemas.V3203. */
export interface V3203Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3203 = V3203Members & NamespacedSchema;
export interface V3203Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3203;
}

/** JVM class net.minecraft.util.datafix.schemas.V3204. */
export interface V3204Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3204 = V3204Members & NamespacedSchema;
export interface V3204Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3204;
}

/** JVM class net.minecraft.util.datafix.schemas.V3325. */
export interface V3325Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3325 = V3325Members & NamespacedSchema;
export interface V3325Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3325;
}

/** JVM class net.minecraft.util.datafix.schemas.V3326. */
export interface V3326Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3326 = V3326Members & NamespacedSchema;
export interface V3326Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3326;
}

/** JVM class net.minecraft.util.datafix.schemas.V3327. */
export interface V3327Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3327 = V3327Members & NamespacedSchema;
export interface V3327Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3327;
}

/** JVM class net.minecraft.util.datafix.schemas.V3328. */
export interface V3328Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3328 = V3328Members & NamespacedSchema;
export interface V3328Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3328;
}

/** JVM class net.minecraft.util.datafix.schemas.V3438. */
export interface V3438Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3438 = V3438Members & NamespacedSchema;
export interface V3438Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3438;
}

/** JVM class net.minecraft.util.datafix.schemas.V3439. */
export interface V3439Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3439 = V3439Members & NamespacedSchema;
export interface V3439Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3439;
  sign(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">;
}

/** JVM class net.minecraft.util.datafix.schemas.V3439_1. */
export interface V3439_1Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3439_1 = V3439_1Members & NamespacedSchema;
export interface V3439_1Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3439_1;
}

/** JVM class net.minecraft.util.datafix.schemas.V3448. */
export interface V3448Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3448 = V3448Members & NamespacedSchema;
export interface V3448Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3448;
}

/** JVM class net.minecraft.util.datafix.schemas.V3682. */
export interface V3682Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3682 = V3682Members & NamespacedSchema;
export interface V3682Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3682;
}

/** JVM class net.minecraft.util.datafix.schemas.V3683. */
export interface V3683Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3683 = V3683Members & NamespacedSchema;
export interface V3683Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3683;
}

/** JVM class net.minecraft.util.datafix.schemas.V3685. */
export interface V3685Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3685 = V3685Members & NamespacedSchema;
export interface V3685Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3685;
  abstractArrow(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">;
}

/** JVM class net.minecraft.util.datafix.schemas.V3689. */
export interface V3689Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3689 = V3689Members & NamespacedSchema;
export interface V3689Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3689;
}

/** JVM class net.minecraft.util.datafix.schemas.V3799. */
export interface V3799Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3799 = V3799Members & NamespacedSchema;
export interface V3799Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3799;
}

/** JVM class net.minecraft.util.datafix.schemas.V3807. */
export interface V3807Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3807 = V3807Members & NamespacedSchema;
export interface V3807Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3807;
}

/** JVM class net.minecraft.util.datafix.schemas.V3808. */
export interface V3808Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3808 = V3808Members & NamespacedSchema;
export interface V3808Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3808;
}

/** JVM class net.minecraft.util.datafix.schemas.V3808_1. */
export interface V3808_1Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3808_1 = V3808_1Members & NamespacedSchema;
export interface V3808_1Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3808_1;
}

/** JVM class net.minecraft.util.datafix.schemas.V3808_2. */
export interface V3808_2Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3808_2 = V3808_2Members & NamespacedSchema;
export interface V3808_2Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3808_2;
}

/** JVM class net.minecraft.util.datafix.schemas.V3813. */
export interface V3813Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V3813 = V3813Members & NamespacedSchema;
export interface V3813Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3813;
}

/** JVM class net.minecraft.util.datafix.schemas.V3816. */
export interface V3816Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3816 = V3816Members & NamespacedSchema;
export interface V3816Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3816;
}

/** JVM class net.minecraft.util.datafix.schemas.V3818. */
export interface V3818Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3818 = V3818Members & NamespacedSchema;
export interface V3818Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3818;
}

/** JVM class net.minecraft.util.datafix.schemas.V3818_3. */
export interface V3818_3Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V3818_3 = V3818_3Members & NamespacedSchema;
export interface V3818_3Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3818_3;
  components(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaOpaque<"java.util.SequencedMap", [string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>]>;
}

/** JVM class net.minecraft.util.datafix.schemas.V3818_4. */
export interface V3818_4Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V3818_4 = V3818_4Members & NamespacedSchema;
export interface V3818_4Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3818_4;
}

/** JVM class net.minecraft.util.datafix.schemas.V3818_5. */
export interface V3818_5Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V3818_5 = V3818_5Members & NamespacedSchema;
export interface V3818_5Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3818_5;
}

/** JVM class net.minecraft.util.datafix.schemas.V3825. */
export interface V3825Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3825 = V3825Members & NamespacedSchema;
export interface V3825Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3825;
}

/** JVM class net.minecraft.util.datafix.schemas.V3938. */
export interface V3938Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V3938 = V3938Members & NamespacedSchema;
export interface V3938Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V3938;
  abstractArrow(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">;
}

/** JVM class net.minecraft.util.datafix.schemas.V4059. */
export interface V4059Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V4059 = V4059Members & NamespacedSchema;
export interface V4059Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4059;
  components(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaOpaque<"java.util.SequencedMap", [string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>]>;
}

/** JVM class net.minecraft.util.datafix.schemas.V4067. */
export interface V4067Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V4067 = V4067Members & NamespacedSchema;
export interface V4067Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4067;
}

/** JVM class net.minecraft.util.datafix.schemas.V4070. */
export interface V4070Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V4070 = V4070Members & NamespacedSchema;
export interface V4070Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4070;
}

/** JVM class net.minecraft.util.datafix.schemas.V4071. */
export interface V4071Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V4071 = V4071Members & NamespacedSchema;
export interface V4071Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4071;
}

/** JVM class net.minecraft.util.datafix.schemas.V4290. */
export interface V4290Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V4290 = V4290Members & NamespacedSchema;
export interface V4290Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4290;
}

/** JVM class net.minecraft.util.datafix.schemas.V4292. */
export interface V4292Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V4292 = V4292Members & NamespacedSchema;
export interface V4292Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4292;
}

/** JVM class net.minecraft.util.datafix.schemas.V4300. */
export interface V4300Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V4300 = V4300Members & NamespacedSchema;
export interface V4300Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4300;
}

/** JVM class net.minecraft.util.datafix.schemas.V4301. */
export interface V4301Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V4301 = V4301Members & NamespacedSchema;
export interface V4301Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4301;
}

/** JVM class net.minecraft.util.datafix.schemas.V4302. */
export interface V4302Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V4302 = V4302Members & NamespacedSchema;
export interface V4302Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4302;
}

/** JVM class net.minecraft.util.datafix.schemas.V4306. */
export interface V4306Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V4306 = V4306Members & NamespacedSchema;
export interface V4306Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4306;
}

/** JVM class net.minecraft.util.datafix.schemas.V4307. */
export interface V4307Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V4307 = V4307Members & NamespacedSchema;
export interface V4307Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4307;
  components(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaOpaque<"java.util.SequencedMap", [string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>]>;
}

/** JVM class net.minecraft.util.datafix.schemas.V4312. */
export interface V4312Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V4312 = V4312Members & NamespacedSchema;
export interface V4312Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4312;
}

/** JVM class net.minecraft.util.datafix.schemas.V4420. */
export interface V4420Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V4420 = V4420Members & NamespacedSchema;
export interface V4420Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4420;
}

/** JVM class net.minecraft.util.datafix.schemas.V4421. */
export interface V4421Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V4421 = V4421Members & NamespacedSchema;
export interface V4421Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V4421;
}

/** JVM class net.minecraft.util.datafix.schemas.V501. */
export interface V501Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V501 = V501Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V501Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V501;
}

/** JVM class net.minecraft.util.datafix.schemas.V700. */
export interface V700Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V700 = V700Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V700Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V700;
}

/** JVM class net.minecraft.util.datafix.schemas.V701. */
export interface V701Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V701 = V701Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V701Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V701;
}

/** JVM class net.minecraft.util.datafix.schemas.V702. */
export interface V702Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V702 = V702Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V702Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V702;
}

/** JVM class net.minecraft.util.datafix.schemas.V703. */
export interface V703Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V703 = V703Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V703Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V703;
}

/** JVM class net.minecraft.util.datafix.schemas.V704. */
export interface V704Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  getChoiceType(arg0: JavaOpaque<"com.mojang.datafixers.DSL$TypeReference">, arg1: string): JavaOpaque<"com.mojang.datafixers.types.Type", [object]>;
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V704 = V704Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V704Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V704;
  readonly ADD_NAMES: JavaOpaque<"com.mojang.datafixers.types.templates.Hook$HookFunction">;
  readonly ITEM_TO_BLOCKENTITY: JavaMap<string, string>;
}

/** JVM class net.minecraft.util.datafix.schemas.V705. */
export interface V705Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V705 = V705Members & NamespacedSchema;
export interface V705Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V705;
  readonly ADD_NAMES: JavaOpaque<"com.mojang.datafixers.types.templates.Hook$HookFunction">;
  registerMob(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
  registerThrowableProjectile(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
}

/** JVM class net.minecraft.util.datafix.schemas.V808. */
export interface V808Members {
  readonly __javaSupertypes?: readonly [NamespacedSchema];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
}
export type V808 = V808Members & NamespacedSchema;
export interface V808Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V808;
  registerInventory(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
}

/** JVM class net.minecraft.util.datafix.schemas.V99. */
export interface V99Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.datafixers.schemas.Schema">];
  registerBlockEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerEntities(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>;
  registerTypes(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>): void;
}
export type V99 = V99Members & JavaOpaque<"com.mojang.datafixers.schemas.Schema">;
export interface V99Statics {
  new(arg0: number, arg1: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): V99;
  readonly ADD_NAMES: JavaOpaque<"com.mojang.datafixers.types.templates.Hook$HookFunction">;
  readonly ITEM_TO_ENTITY: JavaMap<string, string>;
  addNames<T>(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [T]>, arg1: JavaMap<string, string>, arg2: JavaMap<string, string>): T;
  itemStackTag(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">;
  registerInventory(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
  registerMinecart(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
  registerThrowableProjectile(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">, arg1: JavaMap<string, JavaSupplier<JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">>>, arg2: string): void;
  sign(arg0: JavaOpaque<"com.mojang.datafixers.schemas.Schema">): JavaOpaque<"com.mojang.datafixers.types.templates.TypeTemplate">;
}
