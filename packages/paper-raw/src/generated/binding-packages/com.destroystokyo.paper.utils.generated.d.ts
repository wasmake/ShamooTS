// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_plugin_configuration from './io.papermc.paper.plugin.configuration.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM class com.destroystokyo.paper.utils.CachedSizeConcurrentLinkedQueue. */
export interface CachedSizeConcurrentLinkedQueueMembers<E = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.concurrent.ConcurrentLinkedQueue", [E]>];
  add(arg0: E): boolean;
  poll(): E | null;
  size(): number;
}
export type CachedSizeConcurrentLinkedQueue<E = unknown> = CachedSizeConcurrentLinkedQueueMembers<E> & JavaOpaque<"java.util.concurrent.ConcurrentLinkedQueue", [E]>;
export interface CachedSizeConcurrentLinkedQueueStatics {
  new<E>(): CachedSizeConcurrentLinkedQueue<E>;
}

/** JVM class com.destroystokyo.paper.utils.PaperPluginLogger. */
export interface PaperPluginLoggerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.logging.Logger">];
  setParent(arg0: JavaOpaque<"java.util.logging.Logger">): void;
}
export type PaperPluginLogger = PaperPluginLoggerMembers & JavaOpaque<"java.util.logging.Logger">;
export interface PaperPluginLoggerStatics {
  getLogger(arg0: j_io_papermc_paper_plugin_configuration.PluginMeta): JavaOpaque<"java.util.logging.Logger">;
  getLogger(arg0: j_org_bukkit_plugin.PluginDescriptionFile): JavaOpaque<"java.util.logging.Logger">;
}
