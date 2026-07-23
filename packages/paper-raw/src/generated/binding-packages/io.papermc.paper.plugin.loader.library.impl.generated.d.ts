// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_loader_library from './io.papermc.paper.plugin.loader.library.generated.js';

/** JVM class io.papermc.paper.plugin.loader.library.impl.JarLibrary. */
export interface JarLibraryMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_plugin_loader_library.ClassPathLibrary];
  /** @throws io.papermc.paper.plugin.loader.library.LibraryLoadingException */
  register(arg0: j_io_papermc_paper_plugin_loader_library.LibraryStore): void;
}
export type JarLibrary = JarLibraryMembers & j_io_papermc_paper_plugin_loader_library.ClassPathLibrary;
export interface JarLibraryStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">): JarLibrary;
}

/** JVM class io.papermc.paper.plugin.loader.library.impl.MavenLibraryResolver. */
export interface MavenLibraryResolverMembers {
  readonly __javaSupertypes?: readonly [j_io_papermc_paper_plugin_loader_library.ClassPathLibrary];
  addDependency(arg0: JavaOpaque<"org.eclipse.aether.graph.Dependency">): void;
  addRepository(arg0: JavaOpaque<"org.eclipse.aether.repository.RemoteRepository">): void;
  /** @throws io.papermc.paper.plugin.loader.library.LibraryLoadingException */
  register(arg0: j_io_papermc_paper_plugin_loader_library.LibraryStore): void;
}
export type MavenLibraryResolver = MavenLibraryResolverMembers & j_io_papermc_paper_plugin_loader_library.ClassPathLibrary;
export interface MavenLibraryResolverStatics {
  new(): MavenLibraryResolver;
  readonly MAVEN_CENTRAL_DEFAULT_MIRROR: string;
}
