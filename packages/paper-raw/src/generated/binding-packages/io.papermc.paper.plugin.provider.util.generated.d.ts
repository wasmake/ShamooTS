// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class io.papermc.paper.plugin.provider.util.ProviderUtil. */
export interface ProviderUtilMembers {
}
export type ProviderUtil = ProviderUtilMembers;
export interface ProviderUtilStatics {
  new(): ProviderUtil;
  loadClass<T>(arg0: string, arg1: JavaClass<T>, arg2: JavaOpaque<"java.lang.ClassLoader">): T;
  loadClass<T>(arg0: string, arg1: JavaClass<T>, arg2: JavaOpaque<"java.lang.ClassLoader">, arg3: JavaRunnable | null): T;
}
