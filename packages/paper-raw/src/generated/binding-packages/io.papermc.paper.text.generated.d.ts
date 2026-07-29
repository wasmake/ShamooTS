// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_flattener from './net.kyori.adventure.text.flattener.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** JVM interface io.papermc.paper.text.Filtered. */
export interface FilteredMembers<T = unknown> {
  filtered(): T | null;
  raw(): T;
}
export type Filtered<T = unknown> = FilteredMembers<T>;
export interface FilteredStatics {
  of<T>(arg0: T, arg1: T | null): Filtered<T>;
}

/** JVM class io.papermc.paper.text.PaperComponents. */
export interface PaperComponentsMembers {
}
export type PaperComponents = PaperComponentsMembers;
export interface PaperComponentsStatics {
  colorDownsamplingGsonSerializer(): JavaOpaque<"net.kyori.adventure.text.serializer.gson.GsonComponentSerializer">;
  flattener(): j_net_kyori_adventure_text_flattener.ComponentFlattener;
  gsonSerializer(): JavaOpaque<"net.kyori.adventure.text.serializer.gson.GsonComponentSerializer">;
  legacySectionSerializer(): JavaOpaque<"net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer">;
  plainSerializer(): JavaOpaque<"net.kyori.adventure.text.serializer.plain.PlainComponentSerializer">;
  plainTextSerializer(): JavaOpaque<"net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer">;
  /** @throws java.io.IOException */
  resolveWithContext(arg0: j_net_kyori_adventure_text.Component, arg1: j_org_bukkit_command.CommandSender | null, arg2: j_org_bukkit_entity.Entity | null): j_net_kyori_adventure_text.Component;
  /** @throws java.io.IOException */
  resolveWithContext(arg0: j_net_kyori_adventure_text.Component, arg1: j_org_bukkit_command.CommandSender | null, arg2: j_org_bukkit_entity.Entity | null, arg3: boolean): j_net_kyori_adventure_text.Component;
}
