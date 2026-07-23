// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_event from './org.bukkit.event.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM class io.papermc.paper.event.executor.EventExecutorFactory. */
export interface EventExecutorFactoryMembers {
}
export type EventExecutorFactory = EventExecutorFactoryMembers;
export interface EventExecutorFactoryStatics {
  create(arg0: JavaOpaque<"java.lang.reflect.Method">, arg1: JavaClass<j_org_bukkit_event.Event>): j_org_bukkit_plugin.EventExecutor;
}
