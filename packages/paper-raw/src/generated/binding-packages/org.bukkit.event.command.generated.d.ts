// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';

/** JVM class org.bukkit.event.command.UnknownCommandEvent. */
export interface UnknownCommandEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  getCommandLine(): string;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getMessage(): string | null;
  getSender(): j_org_bukkit_command.CommandSender;
  message(): j_net_kyori_adventure_text.Component | null;
  message(arg0: j_net_kyori_adventure_text.Component | null): void;
  setMessage(arg0: string | null): void;
}
export type UnknownCommandEvent = UnknownCommandEventMembers & j_org_bukkit_event.Event;
export interface UnknownCommandEventStatics {
  new(arg0: j_org_bukkit_command.CommandSender, arg1: string, arg2: j_net_kyori_adventure_text.Component | null): UnknownCommandEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
