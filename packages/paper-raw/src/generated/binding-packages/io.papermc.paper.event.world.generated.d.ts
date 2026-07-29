// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_command_brigadier from './io.papermc.paper.command.brigadier.generated.js';
import type * as j_io_papermc_paper_math from './io.papermc.paper.math.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_event_world from './org.bukkit.event.world.generated.js';
import type * as j_org_bukkit_generator_structure from './org.bukkit.generator.structure.generated.js';

/** JVM class io.papermc.paper.event.world.StructuresLocateEvent. */
export interface StructuresLocateEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_world.WorldEvent, j_org_bukkit_event.Cancellable];
  getHandlers(): j_org_bukkit_event.HandlerList;
  getOrigin(): j_org_bukkit.Location;
  getRadius(): number;
  getResult(): StructuresLocateEvent_Result | null;
  getStructures(): JavaList<j_org_bukkit_generator_structure.Structure_2>;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setFindUnexplored(arg0: boolean): void;
  setRadius(arg0: number): void;
  setResult(arg0: StructuresLocateEvent_Result | null): void;
  setStructures(arg0: JavaList<j_org_bukkit_generator_structure.Structure_2>): void;
  shouldFindUnexplored(): boolean;
}
export type StructuresLocateEvent = StructuresLocateEventMembers & j_org_bukkit_event_world.WorldEvent & j_org_bukkit_event.Cancellable;
export interface StructuresLocateEventStatics {
  new(arg0: j_org_bukkit.World, arg1: j_org_bukkit.Location, arg2: JavaList<j_org_bukkit_generator_structure.Structure_2>, arg3: number, arg4: boolean): StructuresLocateEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM record io.papermc.paper.event.world.StructuresLocateEvent$Result. */
export interface StructuresLocateEvent_ResultMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  pos(): j_io_papermc_paper_math.Position;
  position(): j_org_bukkit.Location;
  structure(): j_org_bukkit_generator_structure.Structure_2;
  toString(): string;
}
export type StructuresLocateEvent_Result = StructuresLocateEvent_ResultMembers & JavaOpaque<"java.lang.Record">;
export interface StructuresLocateEvent_ResultStatics {
  new(arg0: j_io_papermc_paper_math.Position, arg1: j_org_bukkit_generator_structure.Structure_2): StructuresLocateEvent_Result;
}

/** JVM class io.papermc.paper.event.world.WorldDifficultyChangeEvent. */
export interface WorldDifficultyChangeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_world.WorldEvent];
  getCommandSource(): j_io_papermc_paper_command_brigadier.CommandSourceStack | null;
  getDifficulty(): j_org_bukkit.Difficulty;
  getHandlers(): j_org_bukkit_event.HandlerList;
}
export type WorldDifficultyChangeEvent = WorldDifficultyChangeEventMembers & j_org_bukkit_event_world.WorldEvent;
export interface WorldDifficultyChangeEventStatics {
  new(arg0: j_org_bukkit.World, arg1: j_io_papermc_paper_command_brigadier.CommandSourceStack | null, arg2: j_org_bukkit.Difficulty): WorldDifficultyChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}

/** JVM class io.papermc.paper.event.world.WorldGameRuleChangeEvent. */
export interface WorldGameRuleChangeEventMembers {
  readonly __javaSupertypes?: readonly [j_org_bukkit_event_world.WorldEvent, j_org_bukkit_event.Cancellable];
  getCommandSender(): j_org_bukkit_command.CommandSender | null;
  getGameRule(): j_org_bukkit.GameRule<object>;
  getHandlers(): j_org_bukkit_event.HandlerList;
  getValue(): string;
  isCancelled(): boolean;
  setCancelled(arg0: boolean): void;
  setValue(arg0: string): void;
}
export type WorldGameRuleChangeEvent = WorldGameRuleChangeEventMembers & j_org_bukkit_event_world.WorldEvent & j_org_bukkit_event.Cancellable;
export interface WorldGameRuleChangeEventStatics {
  new(arg0: j_org_bukkit.World, arg1: j_org_bukkit_command.CommandSender | null, arg2: j_org_bukkit.GameRule<object>, arg3: string): WorldGameRuleChangeEvent;
  getHandlerList(): j_org_bukkit_event.HandlerList;
}
