// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class net.minecraft.world.level.validation.ContentValidationException. */
export interface ContentValidationExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Exception">];
  getMessage(): string;
}
export type ContentValidationException = ContentValidationExceptionMembers & JavaOpaque<"java.lang.Exception">;
export interface ContentValidationExceptionStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaList<ForbiddenSymlinkInfo>): ContentValidationException;
  getMessage(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaList<ForbiddenSymlinkInfo>): string;
}

/** JVM class net.minecraft.world.level.validation.DirectoryValidator. */
export interface DirectoryValidatorMembers {
  /** @throws java.io.IOException */
  validateDirectory(arg0: JavaOpaque<"java.nio.file.Path">, arg1: boolean): JavaList<ForbiddenSymlinkInfo>;
  /** @throws java.io.IOException */
  validateKnownDirectory(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaList<ForbiddenSymlinkInfo>): void;
  /** @throws java.io.IOException */
  validateSymlink(arg0: JavaOpaque<"java.nio.file.Path">): JavaList<ForbiddenSymlinkInfo>;
  /** @throws java.io.IOException */
  validateSymlink(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaList<ForbiddenSymlinkInfo>): void;
}
export type DirectoryValidator = DirectoryValidatorMembers;
export interface DirectoryValidatorStatics {
  new(arg0: JavaOpaque<"java.nio.file.PathMatcher">): DirectoryValidator;
}

/** JVM record net.minecraft.world.level.validation.ForbiddenSymlinkInfo. */
export interface ForbiddenSymlinkInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  link(): JavaOpaque<"java.nio.file.Path">;
  target(): JavaOpaque<"java.nio.file.Path">;
  toString(): string;
}
export type ForbiddenSymlinkInfo = ForbiddenSymlinkInfoMembers & JavaOpaque<"java.lang.Record">;
export interface ForbiddenSymlinkInfoStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">, arg1: JavaOpaque<"java.nio.file.Path">): ForbiddenSymlinkInfo;
}

/** JVM class net.minecraft.world.level.validation.PathAllowList. */
export interface PathAllowListMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.nio.file.PathMatcher">];
  getForFileSystem(arg0: JavaOpaque<"java.nio.file.FileSystem">): JavaOpaque<"java.nio.file.PathMatcher">;
  matches(arg0: JavaOpaque<"java.nio.file.Path">): boolean;
}
export type PathAllowList = PathAllowListMembers & JavaOpaque<"java.nio.file.PathMatcher">;
export interface PathAllowListStatics {
  new(arg0: JavaList<PathAllowList_ConfigEntry>): PathAllowList;
  readPlain(arg0: JavaOpaque<"java.io.BufferedReader">): PathAllowList;
}

/** JVM record net.minecraft.world.level.validation.PathAllowList$ConfigEntry. */
export interface PathAllowList_ConfigEntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  compile(arg0: JavaOpaque<"java.nio.file.FileSystem">): JavaOpaque<"java.nio.file.PathMatcher">;
  equals(arg0: object): boolean;
  hashCode(): number;
  pattern(): string;
  toString(): string;
  type(): PathAllowList_EntryType;
}
export type PathAllowList_ConfigEntry = PathAllowList_ConfigEntryMembers & JavaOpaque<"java.lang.Record">;
export interface PathAllowList_ConfigEntryStatics {
  new(arg0: PathAllowList_EntryType, arg1: string): PathAllowList_ConfigEntry;
}

/** JVM interface net.minecraft.world.level.validation.PathAllowList$EntryType. */
export interface PathAllowList_EntryTypeMembers {
  compile(arg0: JavaOpaque<"java.nio.file.FileSystem">, arg1: string): JavaOpaque<"java.nio.file.PathMatcher">;
}
export type PathAllowList_EntryType = PathAllowList_EntryTypeMembers;
export interface PathAllowList_EntryTypeStatics {
  readonly FILESYSTEM: PathAllowList_EntryType;
  readonly PREFIX: PathAllowList_EntryType;
}
