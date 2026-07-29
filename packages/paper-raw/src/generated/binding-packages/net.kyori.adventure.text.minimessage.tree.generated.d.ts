// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM interface net.kyori.adventure.text.minimessage.tree.Node. */
export interface NodeMembers {
  children(): JavaList<Node>;
  parent(): Node | null;
  toString(): string;
}
export type Node = NodeMembers;
export interface NodeStatics {
}

/** JVM interface net.kyori.adventure.text.minimessage.tree.Node$Root. */
export interface Node_RootMembers {
  readonly __javaSupertypes?: readonly [Node];
  input(): string;
}
export type Node_Root = Node_RootMembers & Node;
export interface Node_RootStatics {
}
