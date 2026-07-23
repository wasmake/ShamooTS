// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class net.minecraft.util.eventlog.EventLogDirectory. */
export interface EventLogDirectoryMembers {
  /** @throws java.io.IOException */
  createNewFile(arg0: JavaOpaque<"java.time.LocalDate">): EventLogDirectory_RawFile;
  /** @throws java.io.IOException */
  listFiles(): EventLogDirectory_FileList;
}
export type EventLogDirectory = EventLogDirectoryMembers;
export interface EventLogDirectoryStatics {
  /** @throws java.io.IOException */
  open(arg0: JavaOpaque<"java.nio.file.Path">, arg1: string): EventLogDirectory;
}

/** JVM record net.minecraft.util.eventlog.EventLogDirectory$CompressedFile. */
export interface EventLogDirectory_CompressedFileMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EventLogDirectory_File];
  compress(): EventLogDirectory_CompressedFile;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): EventLogDirectory_FileId;
  /** @throws java.io.IOException */
  openReader(): JavaOpaque<"java.io.Reader"> | null;
  path(): JavaOpaque<"java.nio.file.Path">;
  toString(): string;
}
export type EventLogDirectory_CompressedFile = EventLogDirectory_CompressedFileMembers & JavaOpaque<"java.lang.Record"> & EventLogDirectory_File;
export interface EventLogDirectory_CompressedFileStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">, arg1: EventLogDirectory_FileId): EventLogDirectory_CompressedFile;
}

/** JVM interface net.minecraft.util.eventlog.EventLogDirectory$File. */
export interface EventLogDirectory_FileMembers {
  /** @throws java.io.IOException */
  compress(): EventLogDirectory_CompressedFile;
  id(): EventLogDirectory_FileId;
  /** @throws java.io.IOException */
  openReader(): JavaOpaque<"java.io.Reader"> | null;
  path(): JavaOpaque<"java.nio.file.Path">;
}
export type EventLogDirectory_File = EventLogDirectory_FileMembers;
export interface EventLogDirectory_FileStatics {
}

/** JVM record net.minecraft.util.eventlog.EventLogDirectory$FileId. */
export interface EventLogDirectory_FileIdMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  date(): JavaOpaque<"java.time.LocalDate">;
  equals(arg0: object): boolean;
  hashCode(): number;
  index(): number;
  toFileName(arg0: string): string;
  toString(): string;
}
export type EventLogDirectory_FileId = EventLogDirectory_FileIdMembers & JavaOpaque<"java.lang.Record">;
export interface EventLogDirectory_FileIdStatics {
  new(arg0: JavaOpaque<"java.time.LocalDate">, arg1: number): EventLogDirectory_FileId;
  parse(arg0: string): EventLogDirectory_FileId | null;
}

/** JVM class net.minecraft.util.eventlog.EventLogDirectory$FileList. */
export interface EventLogDirectory_FileListMembers {
  readonly __javaSupertypes?: readonly [Iterable<EventLogDirectory_File>];
  compressAll(): EventLogDirectory_FileList;
  ids(): JavaSet<EventLogDirectory_FileId>;
  iterator(): JavaOpaque<"java.util.Iterator", [EventLogDirectory_File]>;
  prune(arg0: JavaOpaque<"java.time.LocalDate">, arg1: number): EventLogDirectory_FileList;
  stream(): JavaOpaque<"java.util.stream.Stream", [EventLogDirectory_File]>;
}
export type EventLogDirectory_FileList = EventLogDirectory_FileListMembers & Iterable<EventLogDirectory_File>;
export interface EventLogDirectory_FileListStatics {
}

/** JVM record net.minecraft.util.eventlog.EventLogDirectory$RawFile. */
export interface EventLogDirectory_RawFileMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, EventLogDirectory_File];
  /** @throws java.io.IOException */
  compress(): EventLogDirectory_CompressedFile;
  equals(arg0: object): boolean;
  hashCode(): number;
  id(): EventLogDirectory_FileId;
  /** @throws java.io.IOException */
  openChannel(): JavaOpaque<"java.nio.channels.FileChannel">;
  /** @throws java.io.IOException */
  openReader(): JavaOpaque<"java.io.Reader"> | null;
  path(): JavaOpaque<"java.nio.file.Path">;
  toString(): string;
}
export type EventLogDirectory_RawFile = EventLogDirectory_RawFileMembers & JavaOpaque<"java.lang.Record"> & EventLogDirectory_File;
export interface EventLogDirectory_RawFileStatics {
  new(arg0: JavaOpaque<"java.nio.file.Path">, arg1: EventLogDirectory_FileId): EventLogDirectory_RawFile;
}

/** JVM class net.minecraft.util.eventlog.JsonEventLog. */
export interface JsonEventLogMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.io.Closeable">];
  /** @throws java.io.IOException */
  close(): void;
  /** @throws java.io.IOException */
  openReader(): JsonEventLogReader<T>;
  /** @throws java.io.IOException */
  write(arg0: T): void;
}
export type JsonEventLog<T = unknown> = JsonEventLogMembers<T> & JavaOpaque<"java.io.Closeable">;
export interface JsonEventLogStatics {
  new<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: JavaOpaque<"java.nio.channels.FileChannel">): JsonEventLog<T>;
  /** @throws java.io.IOException */
  open<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: JavaOpaque<"java.nio.file.Path">): JsonEventLog<T>;
}

/** JVM interface net.minecraft.util.eventlog.JsonEventLogReader. */
export interface JsonEventLogReaderMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.io.Closeable">];
  /** @throws java.io.IOException */
  next(): T | null;
}
export type JsonEventLogReader<T = unknown> = JsonEventLogReaderMembers<T> & JavaOpaque<"java.io.Closeable">;
export interface JsonEventLogReaderStatics {
  create<T>(arg0: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg1: JavaOpaque<"java.io.Reader">): JsonEventLogReader<T>;
}
