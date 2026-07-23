// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM interface io.papermc.paper.plugin.loader.library.ClassPathLibrary. */
export interface ClassPathLibraryMembers {
  /** @throws io.papermc.paper.plugin.loader.library.LibraryLoadingException */
  register(arg0: LibraryStore): void;
}
export type ClassPathLibrary = ClassPathLibraryMembers;
export interface ClassPathLibraryStatics {
}

/** JVM class io.papermc.paper.plugin.loader.library.LibraryLoadingException. */
export interface LibraryLoadingExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
}
export type LibraryLoadingException = LibraryLoadingExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface LibraryLoadingExceptionStatics {
  new(arg0: string): LibraryLoadingException;
  new(arg0: string, arg1: JavaOpaque<"java.lang.Exception">): LibraryLoadingException;
}

/** JVM interface io.papermc.paper.plugin.loader.library.LibraryStore. */
export interface LibraryStoreMembers {
  addLibrary(arg0: JavaOpaque<"java.nio.file.Path">): void;
}
export type LibraryStore = LibraryStoreMembers;
export interface LibraryStoreStatics {
}
