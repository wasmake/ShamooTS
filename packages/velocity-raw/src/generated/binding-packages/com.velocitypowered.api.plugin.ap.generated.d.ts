// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class com.velocitypowered.api.plugin.ap.PluginAnnotationProcessor. */
export interface PluginAnnotationProcessorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"javax.annotation.processing.AbstractProcessor">];
  getSupportedSourceVersion(): JavaOpaque<"javax.lang.model.SourceVersion">;
  init(arg0: JavaOpaque<"javax.annotation.processing.ProcessingEnvironment">): void;
  process(arg0: JavaSet<JavaOpaque<"javax.lang.model.element.TypeElement">>, arg1: JavaOpaque<"javax.annotation.processing.RoundEnvironment">): boolean;
}
export type PluginAnnotationProcessor = PluginAnnotationProcessorMembers & JavaOpaque<"javax.annotation.processing.AbstractProcessor">;
export interface PluginAnnotationProcessorStatics {
  new(): PluginAnnotationProcessor;
}

/** JVM class com.velocitypowered.api.plugin.ap.SerializedPluginDescription. */
export interface SerializedPluginDescriptionMembers {
  equals(arg0: object): boolean;
  getAuthors(): JavaList<string>;
  getDependencies(): JavaList<SerializedPluginDescription_Dependency>;
  getDescription(): string | null;
  getId(): string;
  getMain(): string;
  getName(): string | null;
  getUrl(): string | null;
  getVersion(): string | null;
  hashCode(): number;
  toString(): string;
}
export type SerializedPluginDescription = SerializedPluginDescriptionMembers;
export interface SerializedPluginDescriptionStatics {
  readonly ID_PATTERN: JavaOpaque<"java.util.regex.Pattern">;
  readonly ID_PATTERN_STRING: "[a-z][a-z0-9-_]{0,63}";
}

/** JVM class com.velocitypowered.api.plugin.ap.SerializedPluginDescription$Dependency. */
export interface SerializedPluginDescription_DependencyMembers {
  equals(arg0: object): boolean;
  getId(): string;
  hashCode(): number;
  isOptional(): boolean;
  toString(): string;
}
export type SerializedPluginDescription_Dependency = SerializedPluginDescription_DependencyMembers;
export interface SerializedPluginDescription_DependencyStatics {
  new(arg0: string, arg1: boolean): SerializedPluginDescription_Dependency;
}
