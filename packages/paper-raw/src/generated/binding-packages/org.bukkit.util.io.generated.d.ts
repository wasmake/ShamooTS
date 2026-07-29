// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class org.bukkit.util.io.BukkitObjectInputStream. */
export interface BukkitObjectInputStreamMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.io.ObjectInputStream">];
}
export type BukkitObjectInputStream = BukkitObjectInputStreamMembers & JavaOpaque<"java.io.ObjectInputStream">;
export interface BukkitObjectInputStreamStatics {
  /** @throws java.io.IOException */
  new(arg0: JavaOpaque<"java.io.InputStream">): BukkitObjectInputStream;
}

/** JVM class org.bukkit.util.io.BukkitObjectOutputStream. */
export interface BukkitObjectOutputStreamMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.io.ObjectOutputStream">];
}
export type BukkitObjectOutputStream = BukkitObjectOutputStreamMembers & JavaOpaque<"java.io.ObjectOutputStream">;
export interface BukkitObjectOutputStreamStatics {
  /** @throws java.io.IOException */
  new(arg0: JavaOpaque<"java.io.OutputStream">): BukkitObjectOutputStream;
}
