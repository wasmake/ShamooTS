// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class org.bukkit.craftbukkit.util.permissions.CommandPermissions. */
export interface CommandPermissionsMembers {
}
export type CommandPermissions = CommandPermissionsMembers;
export interface CommandPermissionsStatics {
  registerPermissions(arg0: JavaOpaque<"org.bukkit.permissions.Permission">): JavaOpaque<"org.bukkit.permissions.Permission">;
}

/** JVM class org.bukkit.craftbukkit.util.permissions.CraftDefaultPermissions. */
export interface CraftDefaultPermissionsMembers {
}
export type CraftDefaultPermissions = CraftDefaultPermissionsMembers;
export interface CraftDefaultPermissionsStatics {
  registerCorePermissions(): void;
}
