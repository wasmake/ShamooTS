// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';

/** JVM class net.minecraft.nbt.visitors.CollectFields. */
export interface CollectFieldsMembers {
  readonly __javaSupertypes?: readonly [CollectToTag];
  getMissingFieldCount(): number;
  visitContainerEnd(): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visitEntry(arg0: j_net_minecraft_nbt.TagType<object>): j_net_minecraft_nbt.StreamTagVisitor_EntryResult;
  visitEntry(arg0: j_net_minecraft_nbt.TagType<object>, arg1: string): j_net_minecraft_nbt.StreamTagVisitor_EntryResult;
  visitRootEntry(arg0: j_net_minecraft_nbt.TagType<object>): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
}
export type CollectFields = CollectFieldsMembers & CollectToTag;
export interface CollectFieldsStatics {
  new(...arg0: Array<FieldSelector>): CollectFields;
}

/** JVM class net.minecraft.nbt.visitors.CollectToTag. */
export interface CollectToTagMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_nbt.StreamTagVisitor];
  depth(): number;
  getResult(): j_net_minecraft_nbt.Tag | null;
  visit(arg0: number): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: number): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: number): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: number): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: bigint): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: string): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: number): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: Array<number>): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: Array<number>): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: Array<bigint>): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visitContainerEnd(): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visitElement(arg0: j_net_minecraft_nbt.TagType<object>, arg1: number): j_net_minecraft_nbt.StreamTagVisitor_EntryResult;
  visitEnd(): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visitEntry(arg0: j_net_minecraft_nbt.TagType<object>): j_net_minecraft_nbt.StreamTagVisitor_EntryResult;
  visitEntry(arg0: j_net_minecraft_nbt.TagType<object>, arg1: string): j_net_minecraft_nbt.StreamTagVisitor_EntryResult;
  visitList(arg0: j_net_minecraft_nbt.TagType<object>, arg1: number): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visitRootEntry(arg0: j_net_minecraft_nbt.TagType<object>): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
}
export type CollectToTag = CollectToTagMembers & j_net_minecraft_nbt.StreamTagVisitor;
export interface CollectToTagStatics {
  new(): CollectToTag;
}

/** JVM record net.minecraft.nbt.visitors.FieldSelector. */
export interface FieldSelectorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  name(): string;
  path(): JavaList<string>;
  toString(): string;
  type(): j_net_minecraft_nbt.TagType<object>;
}
export type FieldSelector = FieldSelectorMembers & JavaOpaque<"java.lang.Record">;
export interface FieldSelectorStatics {
  new(arg0: string, arg1: string, arg2: j_net_minecraft_nbt.TagType<object>, arg3: string): FieldSelector;
  new(arg0: string, arg1: j_net_minecraft_nbt.TagType<object>, arg2: string): FieldSelector;
  new(arg0: JavaList<string>, arg1: j_net_minecraft_nbt.TagType<object>, arg2: string): FieldSelector;
  new(arg0: j_net_minecraft_nbt.TagType<object>, arg1: string): FieldSelector;
}

/** JVM record net.minecraft.nbt.visitors.FieldTree. */
export interface FieldTreeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  addEntry(arg0: FieldSelector): void;
  depth(): number;
  equals(arg0: object): boolean;
  fieldsToRecurse(): JavaMap<string, FieldTree>;
  hashCode(): number;
  isSelected(arg0: j_net_minecraft_nbt.TagType<object>, arg1: string): boolean;
  selectedFields(): JavaMap<string, j_net_minecraft_nbt.TagType<object>>;
  toString(): string;
}
export type FieldTree = FieldTreeMembers & JavaOpaque<"java.lang.Record">;
export interface FieldTreeStatics {
  new(arg0: number, arg1: JavaMap<string, j_net_minecraft_nbt.TagType<object>>, arg2: JavaMap<string, FieldTree>): FieldTree;
  createRoot(): FieldTree;
}

/** JVM interface net.minecraft.nbt.visitors.SkipAll. */
export interface SkipAllMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_nbt.StreamTagVisitor];
  visit(arg0: number): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: number): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: number): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: number): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: bigint): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: string): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: number): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: Array<number>): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: Array<number>): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visit(arg0: Array<bigint>): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visitContainerEnd(): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visitElement(arg0: j_net_minecraft_nbt.TagType<object>, arg1: number): j_net_minecraft_nbt.StreamTagVisitor_EntryResult;
  visitEnd(): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visitEntry(arg0: j_net_minecraft_nbt.TagType<object>): j_net_minecraft_nbt.StreamTagVisitor_EntryResult;
  visitEntry(arg0: j_net_minecraft_nbt.TagType<object>, arg1: string): j_net_minecraft_nbt.StreamTagVisitor_EntryResult;
  visitList(arg0: j_net_minecraft_nbt.TagType<object>, arg1: number): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visitRootEntry(arg0: j_net_minecraft_nbt.TagType<object>): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
}
export type SkipAll = SkipAllMembers & j_net_minecraft_nbt.StreamTagVisitor;
export interface SkipAllStatics {
  readonly INSTANCE: SkipAll;
}

/** JVM class net.minecraft.nbt.visitors.SkipFields. */
export interface SkipFieldsMembers {
  readonly __javaSupertypes?: readonly [CollectToTag];
  visitContainerEnd(): j_net_minecraft_nbt.StreamTagVisitor_ValueResult;
  visitEntry(arg0: j_net_minecraft_nbt.TagType<object>, arg1: string): j_net_minecraft_nbt.StreamTagVisitor_EntryResult;
}
export type SkipFields = SkipFieldsMembers & CollectToTag;
export interface SkipFieldsStatics {
  new(...arg0: Array<FieldSelector>): SkipFields;
}
