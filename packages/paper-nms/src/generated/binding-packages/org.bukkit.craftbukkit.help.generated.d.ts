// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit_craftbukkit from './org.bukkit.craftbukkit.generated.js';

/** JVM class org.bukkit.craftbukkit.help.CommandAliasHelpTopic. */
export interface CommandAliasHelpTopicMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.help.HelpTopic">];
  canSee(arg0: JavaOpaque<"org.bukkit.command.CommandSender">): boolean;
  getFullText(arg0: JavaOpaque<"org.bukkit.command.CommandSender">): string;
}
export type CommandAliasHelpTopic = CommandAliasHelpTopicMembers & JavaOpaque<"org.bukkit.help.HelpTopic">;
export interface CommandAliasHelpTopicStatics {
  new(arg0: string, arg1: string, arg2: JavaOpaque<"org.bukkit.help.HelpMap">): CommandAliasHelpTopic;
}

/** JVM class org.bukkit.craftbukkit.help.CustomHelpTopic. */
export interface CustomHelpTopicMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.help.HelpTopic">];
  canSee(arg0: JavaOpaque<"org.bukkit.command.CommandSender">): boolean;
}
export type CustomHelpTopic = CustomHelpTopicMembers & JavaOpaque<"org.bukkit.help.HelpTopic">;
export interface CustomHelpTopicStatics {
  new(arg0: string, arg1: string, arg2: string, arg3: string): CustomHelpTopic;
}

/** JVM class org.bukkit.craftbukkit.help.CustomIndexHelpTopic. */
export interface CustomIndexHelpTopicMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.help.IndexHelpTopic">];
  getFullText(arg0: JavaOpaque<"org.bukkit.command.CommandSender">): string;
}
export type CustomIndexHelpTopic = CustomIndexHelpTopicMembers & JavaOpaque<"org.bukkit.help.IndexHelpTopic">;
export interface CustomIndexHelpTopicStatics {
  new(arg0: JavaOpaque<"org.bukkit.help.HelpMap">, arg1: string, arg2: string, arg3: string, arg4: JavaList<string>, arg5: string): CustomIndexHelpTopic;
}

/** JVM class org.bukkit.craftbukkit.help.HelpTopicAmendment. */
export interface HelpTopicAmendmentMembers {
  getFullText(): string;
  getPermission(): string;
  getShortText(): string;
  getTopicName(): string;
}
export type HelpTopicAmendment = HelpTopicAmendmentMembers;
export interface HelpTopicAmendmentStatics {
  new(arg0: string, arg1: string, arg2: string, arg3: string): HelpTopicAmendment;
}

/** JVM class org.bukkit.craftbukkit.help.HelpYamlReader. */
export interface HelpYamlReaderMembers {
  commandTopicsInMasterIndex(): boolean;
  getGeneralTopics(): JavaList<JavaOpaque<"org.bukkit.help.HelpTopic">>;
  getIgnoredPlugins(): JavaList<string>;
  getIndexTopics(): JavaList<JavaOpaque<"org.bukkit.help.HelpTopic">>;
  getTopicAmendments(): JavaList<HelpTopicAmendment>;
}
export type HelpYamlReader = HelpYamlReaderMembers;
export interface HelpYamlReaderStatics {
  new(arg0: JavaOpaque<"org.bukkit.Server">): HelpYamlReader;
}

/** JVM class org.bukkit.craftbukkit.help.MultipleCommandAliasHelpTopic. */
export interface MultipleCommandAliasHelpTopicMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.help.HelpTopic">];
  canSee(arg0: JavaOpaque<"org.bukkit.command.CommandSender">): boolean;
}
export type MultipleCommandAliasHelpTopic = MultipleCommandAliasHelpTopicMembers & JavaOpaque<"org.bukkit.help.HelpTopic">;
export interface MultipleCommandAliasHelpTopicStatics {
  new(arg0: JavaOpaque<"org.bukkit.command.MultipleCommandAlias">): MultipleCommandAliasHelpTopic;
}

/** JVM class org.bukkit.craftbukkit.help.MultipleCommandAliasHelpTopicFactory. */
export interface MultipleCommandAliasHelpTopicFactoryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.help.HelpTopicFactory", [JavaOpaque<"org.bukkit.command.MultipleCommandAlias">]>];
  createTopic(arg0: JavaOpaque<"org.bukkit.command.MultipleCommandAlias">): JavaOpaque<"org.bukkit.help.HelpTopic">;
}
export type MultipleCommandAliasHelpTopicFactory = MultipleCommandAliasHelpTopicFactoryMembers & JavaOpaque<"org.bukkit.help.HelpTopicFactory", [JavaOpaque<"org.bukkit.command.MultipleCommandAlias">]>;
export interface MultipleCommandAliasHelpTopicFactoryStatics {
  new(): MultipleCommandAliasHelpTopicFactory;
}

/** JVM class org.bukkit.craftbukkit.help.SimpleHelpMap. */
export interface SimpleHelpMapMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"org.bukkit.help.HelpMap">];
  addTopic(arg0: JavaOpaque<"org.bukkit.help.HelpTopic">): void;
  clear(): void;
  getHelpTopic(arg0: string): JavaOpaque<"org.bukkit.help.HelpTopic">;
  getHelpTopics(): JavaCollection<JavaOpaque<"org.bukkit.help.HelpTopic">>;
  getIgnoredPlugins(): JavaList<string>;
  initializeCommands(): void;
  initializeGeneralTopics(): void;
  registerHelpTopicFactory(arg0: JavaClass<object>, arg1: JavaOpaque<"org.bukkit.help.HelpTopicFactory">): void;
}
export type SimpleHelpMap = SimpleHelpMapMembers & JavaOpaque<"org.bukkit.help.HelpMap">;
export interface SimpleHelpMapStatics {
  new(arg0: j_org_bukkit_craftbukkit.CraftServer): SimpleHelpMap;
}
