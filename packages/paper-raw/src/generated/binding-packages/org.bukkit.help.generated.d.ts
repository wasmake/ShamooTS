// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_command from './org.bukkit.command.generated.js';

/** JVM class org.bukkit.help.GenericCommandHelpTopic. */
export interface GenericCommandHelpTopicMembers {
  readonly __javaSupertypes?: readonly [HelpTopic];
  canSee(arg0: j_org_bukkit_command.CommandSender): boolean;
  command: j_org_bukkit_command.Command;
}
export type GenericCommandHelpTopic = GenericCommandHelpTopicMembers & HelpTopic;
export interface GenericCommandHelpTopicStatics {
  new(arg0: j_org_bukkit_command.Command): GenericCommandHelpTopic;
}

/** JVM interface org.bukkit.help.HelpMap. */
export interface HelpMapMembers {
  addTopic(arg0: HelpTopic): void;
  clear(): void;
  getHelpTopic(arg0: string): HelpTopic | null;
  getHelpTopics(): JavaCollection<HelpTopic>;
  getIgnoredPlugins(): JavaList<string>;
  registerHelpTopicFactory(arg0: JavaClass<object>, arg1: HelpTopicFactory<object>): void;
}
export type HelpMap = HelpMapMembers;
export interface HelpMapStatics {
}

/** JVM abstract org.bukkit.help.HelpTopic. */
export interface HelpTopicMembers {
  amendCanSee(arg0: string | null): void | null;
  amendTopic(arg0: string | null, arg1: string | null): void | null;
  amendedPermission: string;
  applyAmendment(arg0: string, arg1: string | null): string | null;
  canSee(arg0: j_org_bukkit_command.CommandSender): boolean;
  fullText: string;
  getFullText(arg0: j_org_bukkit_command.CommandSender): string;
  getName(): string;
  getShortText(): string;
  name: string;
  shortText: string;
}
export type HelpTopic = HelpTopicMembers;
export interface HelpTopicStatics {
  new(): HelpTopic;
}

/** JVM class org.bukkit.help.HelpTopicComparator. */
export interface HelpTopicComparatorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.Comparator", [HelpTopic]>];
  compare(arg0: object, arg1: object): number;
  compare(arg0: HelpTopic, arg1: HelpTopic): number;
}
export type HelpTopicComparator = HelpTopicComparatorMembers & JavaOpaque<"java.util.Comparator", [HelpTopic]>;
export interface HelpTopicComparatorStatics {
  helpTopicComparatorInstance(): HelpTopicComparator;
  topicNameComparatorInstance(): HelpTopicComparator_TopicNameComparator;
}

/** JVM class org.bukkit.help.HelpTopicComparator$TopicNameComparator. */
export interface HelpTopicComparator_TopicNameComparatorMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.Comparator", [string]>];
  compare(arg0: object, arg1: object): number;
  compare(arg0: string, arg1: string): number;
}
export type HelpTopicComparator_TopicNameComparator = HelpTopicComparator_TopicNameComparatorMembers & JavaOpaque<"java.util.Comparator", [string]>;
export interface HelpTopicComparator_TopicNameComparatorStatics {
}

/** JVM interface org.bukkit.help.HelpTopicFactory. */
export interface HelpTopicFactoryMembers<TCommand /* extends j_org_bukkit_command.Command */ = unknown> {
  createTopic(arg0: TCommand): HelpTopic | null;
}
export type HelpTopicFactory<TCommand /* extends j_org_bukkit_command.Command */ = unknown> = HelpTopicFactoryMembers<TCommand>;
export interface HelpTopicFactoryStatics {
}

/** JVM class org.bukkit.help.IndexHelpTopic. */
export interface IndexHelpTopicMembers {
  readonly __javaSupertypes?: readonly [HelpTopic];
  allTopics: JavaCollection<HelpTopic>;
  amendCanSee(arg0: string | null): void | null;
  buildIndexLine(arg0: j_org_bukkit_command.CommandSender, arg1: HelpTopic): string;
  buildPreamble(arg0: j_org_bukkit_command.CommandSender): string;
  canSee(arg0: j_org_bukkit_command.CommandSender): boolean;
  getFullText(arg0: j_org_bukkit_command.CommandSender): string;
  permission: string;
  preamble: string;
  setTopicsCollection(arg0: JavaCollection<HelpTopic>): void;
}
export type IndexHelpTopic = IndexHelpTopicMembers & HelpTopic;
export interface IndexHelpTopicStatics {
  new(arg0: string, arg1: string | null, arg2: string | null, arg3: JavaCollection<HelpTopic>): IndexHelpTopic;
  new(arg0: string, arg1: string | null, arg2: string | null, arg3: JavaCollection<HelpTopic>, arg4: string | null): IndexHelpTopic;
}
