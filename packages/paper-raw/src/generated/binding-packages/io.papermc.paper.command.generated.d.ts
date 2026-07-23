// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM interface io.papermc.paper.command.CommandBlockHolder. */
export interface CommandBlockHolderMembers {
  getCommand(): string;
  getSuccessCount(): number;
  lastOutput(): j_net_kyori_adventure_text.Component;
  lastOutput(arg0: j_net_kyori_adventure_text.Component): void | null;
  setCommand(arg0: string): void | null;
  setSuccessCount(arg0: number): void;
}
export type CommandBlockHolder = CommandBlockHolderMembers;
export interface CommandBlockHolderStatics {
}
