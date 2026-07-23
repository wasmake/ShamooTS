// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_connection from './io.papermc.paper.connection.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';

/** JVM class io.papermc.paper.event.connection.PlayerConnectionValidateLoginEvent. */
export interface PlayerConnectionValidateLoginEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event.Event];
  allow(): void;
  getConnection(): j_io_papermc_paper_connection.PlayerConnection;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getKickMessage(): j_net_kyori_adventure_text.Component | null;
  isAllowed(): boolean;
  kickMessage(arg0: j_net_kyori_adventure_text.Component): void;
}
export type PlayerConnectionValidateLoginEvent = PlayerConnectionValidateLoginEventMembers & j_org_bukkit_event.Event;
export interface PlayerConnectionValidateLoginEventStatics {
  new(arg0: j_io_papermc_paper_connection.PlayerConnection, arg1: j_net_kyori_adventure_text.Component): PlayerConnectionValidateLoginEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
