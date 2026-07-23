// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class net.minecraft.server.packs.linkfs.LinkFileSystem. */
export interface LinkFileSystemMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.nio.file.FileSystem">];
  close(): void;
  getFileStores(): Iterable<JavaOpaque<"java.nio.file.FileStore">>;
  getPath(arg0: string, ...arg1: Array<string>): JavaOpaque<"java.nio.file.Path">;
  getPathMatcher(arg0: string): JavaOpaque<"java.nio.file.PathMatcher">;
  getRootDirectories(): Iterable<JavaOpaque<"java.nio.file.Path">>;
  getSeparator(): string;
  getUserPrincipalLookupService(): JavaOpaque<"java.nio.file.attribute.UserPrincipalLookupService">;
  isOpen(): boolean;
  isReadOnly(): boolean;
  newWatchService(): JavaOpaque<"java.nio.file.WatchService">;
  provider(): JavaOpaque<"java.nio.file.spi.FileSystemProvider">;
  rootPath(): JavaOpaque<"net.minecraft.server.packs.linkfs.LinkFSPath">;
  store(): JavaOpaque<"java.nio.file.FileStore">;
  supportedFileAttributeViews(): JavaSet<string>;
}
export type LinkFileSystem = LinkFileSystemMembers & JavaOpaque<"java.nio.file.FileSystem">;
export interface LinkFileSystemStatics {
  readonly PATH_SEPARATOR: "/";
  builder(): LinkFileSystem_Builder;
}

/** JVM class net.minecraft.server.packs.linkfs.LinkFileSystem$Builder. */
export interface LinkFileSystem_BuilderMembers {
  build(arg0: string): JavaOpaque<"java.nio.file.FileSystem">;
  put(arg0: JavaList<string>, arg1: string, arg2: JavaOpaque<"java.nio.file.Path">): LinkFileSystem_Builder;
  put(arg0: JavaList<string>, arg1: JavaOpaque<"java.nio.file.Path">): LinkFileSystem_Builder;
}
export type LinkFileSystem_Builder = LinkFileSystem_BuilderMembers;
export interface LinkFileSystem_BuilderStatics {
  new(): LinkFileSystem_Builder;
}

/** JVM record net.minecraft.server.packs.linkfs.PathContents$DirectoryContents. */
export interface PathContents_DirectoryContentsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.server.packs.linkfs.PathContents">];
  children(): JavaMap<string, JavaOpaque<"net.minecraft.server.packs.linkfs.LinkFSPath">>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type PathContents_DirectoryContents = PathContents_DirectoryContentsMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.server.packs.linkfs.PathContents">;
export interface PathContents_DirectoryContentsStatics {
  new(arg0: JavaMap<string, JavaOpaque<"net.minecraft.server.packs.linkfs.LinkFSPath">>): PathContents_DirectoryContents;
}

/** JVM record net.minecraft.server.packs.linkfs.PathContents$FileContents. */
export interface PathContents_FileContentsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, JavaOpaque<"net.minecraft.server.packs.linkfs.PathContents">];
  contents(): JavaOpaque<"java.nio.file.Path">;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type PathContents_FileContents = PathContents_FileContentsMembers & JavaOpaque<"java.lang.Record"> & JavaOpaque<"net.minecraft.server.packs.linkfs.PathContents">;
export interface PathContents_FileContentsStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">): PathContents_FileContents;
}
