// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM interface org.bukkit.configuration.serialization.ConfigurationSerializable. */
export interface ConfigurationSerializableMembers {
  serialize(): JavaMap<string, object>;
}
export type ConfigurationSerializable = ConfigurationSerializableMembers;
export interface ConfigurationSerializableStatics {
}

/** JVM class org.bukkit.configuration.serialization.ConfigurationSerialization. */
export interface ConfigurationSerializationMembers {
  deserialize(arg0: JavaMap<string, object>): ConfigurationSerializable | null;
}
export type ConfigurationSerialization = ConfigurationSerializationMembers;
export interface ConfigurationSerializationStatics {
  readonly SERIALIZED_TYPE_KEY: "==";
  deserializeObject(arg0: JavaMap<string, object>): ConfigurationSerializable | null;
  deserializeObject(arg0: JavaMap<string, object>, arg1: JavaClass<ConfigurationSerializable>): ConfigurationSerializable | null;
  getAlias(arg0: JavaClass<ConfigurationSerializable>): string;
  getClassByAlias(arg0: string): JavaClass<ConfigurationSerializable> | null;
  registerClass(arg0: JavaClass<ConfigurationSerializable>): void;
  registerClass(arg0: JavaClass<ConfigurationSerializable>, arg1: string): void;
  unregisterClass(arg0: JavaClass<ConfigurationSerializable>): void;
  unregisterClass(arg0: string): void;
}

/** JVM interface org.bukkit.configuration.serialization.DelegateDeserialization. */
export interface DelegateDeserializationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  value(): JavaClass<ConfigurationSerializable>;
}
export type DelegateDeserialization = DelegateDeserializationMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface DelegateDeserializationStatics {
}

/** JVM interface org.bukkit.configuration.serialization.SerializableAs. */
export interface SerializableAsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  value(): string;
}
export type SerializableAs = SerializableAsMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface SerializableAsStatics {
}
