// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM abstract org.bukkit.conversations.BooleanPrompt. */
export interface BooleanPromptMembers {
  readonly __javaSupertypes?: readonly [ValidatingPrompt];
}
export type BooleanPrompt = BooleanPromptMembers & ValidatingPrompt;
export interface BooleanPromptStatics {
}

/** JVM interface org.bukkit.conversations.Conversable. */
export interface ConversableMembers {
  abandonConversation(arg0: Conversation): void;
  abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void;
  acceptConversationInput(arg0: string): void;
  beginConversation(arg0: Conversation): boolean;
  isConversing(): boolean;
  sendRawMessage(arg0: string): void;
  sendRawMessage(arg0: JavaOpaque<"java.util.UUID"> | null, arg1: string): void;
}
export type Conversable = ConversableMembers;
export interface ConversableStatics {
}

/** JVM class org.bukkit.conversations.Conversation. */
export interface ConversationMembers {
  abandon(): void;
  abandon(arg0: ConversationAbandonedEvent): void;
  acceptInput(arg0: string): void;
  addConversationAbandonedListener(arg0: ConversationAbandonedListener): void;
  begin(): void;
  getCancellers(): JavaList<ConversationCanceller>;
  getContext(): ConversationContext;
  getForWhom(): Conversable;
  getPrefix(): ConversationPrefix;
  getState(): Conversation_ConversationState;
  isLocalEchoEnabled(): boolean;
  isModal(): boolean;
  outputNextPrompt(): void;
  removeConversationAbandonedListener(arg0: ConversationAbandonedListener): void;
  setLocalEchoEnabled(arg0: boolean): void;
}
export type Conversation = ConversationMembers;
export interface ConversationStatics {
  new(arg0: j_org_bukkit_plugin.Plugin | null, arg1: Conversable, arg2: Prompt | null): Conversation;
  new(arg0: j_org_bukkit_plugin.Plugin | null, arg1: Conversable, arg2: Prompt | null, arg3: JavaMap<object, object>): Conversation;
}

/** Live JVM enum org.bukkit.conversations.Conversation$ConversationState; constants are host handles, not strings. */
export type Conversation_ConversationState = JavaEnum<"org.bukkit.conversations.Conversation$ConversationState", "ABANDONED" | "STARTED" | "UNSTARTED"> & Conversation_ConversationStateMembers;
export interface Conversation_ConversationStateMembers {
}
export interface Conversation_ConversationStateStatics {
  readonly ABANDONED: Conversation_ConversationState;
  readonly STARTED: Conversation_ConversationState;
  readonly UNSTARTED: Conversation_ConversationState;
  valueOf(arg0: string): Conversation_ConversationState;
  values(): Array<Conversation_ConversationState>;
}

/** JVM class org.bukkit.conversations.ConversationAbandonedEvent. */
export interface ConversationAbandonedEventMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.EventObject">];
  getCanceller(): ConversationCanceller | null;
  getContext(): ConversationContext;
  gracefulExit(): boolean;
}
export type ConversationAbandonedEvent = ConversationAbandonedEventMembers & JavaOpaque<"java.util.EventObject">;
export interface ConversationAbandonedEventStatics {
  new(arg0: Conversation): ConversationAbandonedEvent;
  new(arg0: Conversation, arg1: ConversationCanceller | null): ConversationAbandonedEvent;
}

/** JVM interface org.bukkit.conversations.ConversationAbandonedListener. */
export interface ConversationAbandonedListenerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.util.EventListener">];
  conversationAbandoned(arg0: ConversationAbandonedEvent): void;
}
export type ConversationAbandonedListener = ConversationAbandonedListenerMembers & JavaOpaque<"java.util.EventListener">;
export interface ConversationAbandonedListenerStatics {
}

/** JVM interface org.bukkit.conversations.ConversationCanceller. */
export interface ConversationCancellerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Cloneable">];
  cancelBasedOnInput(arg0: ConversationContext, arg1: string): boolean;
  clone(): ConversationCanceller;
  setConversation(arg0: Conversation): void;
}
export type ConversationCanceller = ConversationCancellerMembers & JavaOpaque<"java.lang.Cloneable">;
export interface ConversationCancellerStatics {
}

/** JVM class org.bukkit.conversations.ConversationContext. */
export interface ConversationContextMembers {
  getAllSessionData(): JavaMap<object, object>;
  getForWhom(): Conversable;
  getPlugin(): j_org_bukkit_plugin.Plugin | null;
  getSessionData(arg0: object): object | null;
  setSessionData(arg0: object, arg1: object | null): void;
}
export type ConversationContext = ConversationContextMembers;
export interface ConversationContextStatics {
  new(arg0: j_org_bukkit_plugin.Plugin | null, arg1: Conversable, arg2: JavaMap<object, object>): ConversationContext;
}

/** JVM class org.bukkit.conversations.ConversationFactory. */
export interface ConversationFactoryMembers {
  addConversationAbandonedListener(arg0: ConversationAbandonedListener): ConversationFactory;
  buildConversation(arg0: Conversable): Conversation;
  thatExcludesNonPlayersWithMessage(arg0: string | null): ConversationFactory;
  withConversationCanceller(arg0: ConversationCanceller): ConversationFactory;
  withEscapeSequence(arg0: string): ConversationFactory;
  withFirstPrompt(arg0: Prompt | null): ConversationFactory;
  withInitialSessionData(arg0: JavaMap<object, object>): ConversationFactory;
  withLocalEcho(arg0: boolean): ConversationFactory;
  withModality(arg0: boolean): ConversationFactory;
  withPrefix(arg0: ConversationPrefix): ConversationFactory;
  withTimeout(arg0: number): ConversationFactory;
}
export type ConversationFactory = ConversationFactoryMembers;
export interface ConversationFactoryStatics {
  new(arg0: j_org_bukkit_plugin.Plugin): ConversationFactory;
}

/** JVM interface org.bukkit.conversations.ConversationPrefix. */
export interface ConversationPrefixMembers {
  getPrefix(arg0: ConversationContext): string;
}
export type ConversationPrefix = ConversationPrefixMembers;
export interface ConversationPrefixStatics {
}

/** JVM class org.bukkit.conversations.ExactMatchConversationCanceller. */
export interface ExactMatchConversationCancellerMembers {
  readonly __javaSupertypes?: readonly [ConversationCanceller];
  cancelBasedOnInput(arg0: ConversationContext, arg1: string): boolean;
  clone(): ConversationCanceller;
  setConversation(arg0: Conversation): void;
}
export type ExactMatchConversationCanceller = ExactMatchConversationCancellerMembers & ConversationCanceller;
export interface ExactMatchConversationCancellerStatics {
  new(arg0: string): ExactMatchConversationCanceller;
}

/** JVM abstract org.bukkit.conversations.FixedSetPrompt. */
export interface FixedSetPromptMembers {
  readonly __javaSupertypes?: readonly [ValidatingPrompt];
}
export type FixedSetPrompt = FixedSetPromptMembers & ValidatingPrompt;
export interface FixedSetPromptStatics {
}

/** JVM class org.bukkit.conversations.InactivityConversationCanceller. */
export interface InactivityConversationCancellerMembers {
  readonly __javaSupertypes?: readonly [ConversationCanceller];
  cancelBasedOnInput(arg0: ConversationContext, arg1: string): boolean;
  clone(): ConversationCanceller;
  setConversation(arg0: Conversation): void;
}
export type InactivityConversationCanceller = InactivityConversationCancellerMembers & ConversationCanceller;
export interface InactivityConversationCancellerStatics {
  new(arg0: j_org_bukkit_plugin.Plugin, arg1: number): InactivityConversationCanceller;
}

/** JVM class org.bukkit.conversations.ManuallyAbandonedConversationCanceller. */
export interface ManuallyAbandonedConversationCancellerMembers {
  readonly __javaSupertypes?: readonly [ConversationCanceller];
  cancelBasedOnInput(arg0: ConversationContext, arg1: string): boolean;
  clone(): ConversationCanceller;
  setConversation(arg0: Conversation): void;
}
export type ManuallyAbandonedConversationCanceller = ManuallyAbandonedConversationCancellerMembers & ConversationCanceller;
export interface ManuallyAbandonedConversationCancellerStatics {
  new(): ManuallyAbandonedConversationCanceller;
}

/** JVM abstract org.bukkit.conversations.MessagePrompt. */
export interface MessagePromptMembers {
  readonly __javaSupertypes?: readonly [Prompt];
  acceptInput(arg0: ConversationContext, arg1: string | null): Prompt | null;
  blocksForInput(arg0: ConversationContext): boolean;
}
export type MessagePrompt = MessagePromptMembers & Prompt;
export interface MessagePromptStatics {
}

/** JVM class org.bukkit.conversations.NullConversationPrefix. */
export interface NullConversationPrefixMembers {
  readonly __javaSupertypes?: readonly [ConversationPrefix];
  getPrefix(arg0: ConversationContext): string;
}
export type NullConversationPrefix = NullConversationPrefixMembers & ConversationPrefix;
export interface NullConversationPrefixStatics {
  new(): NullConversationPrefix;
}

/** JVM abstract org.bukkit.conversations.NumericPrompt. */
export interface NumericPromptMembers {
  readonly __javaSupertypes?: readonly [ValidatingPrompt];
}
export type NumericPrompt = NumericPromptMembers & ValidatingPrompt;
export interface NumericPromptStatics {
}

/** JVM abstract org.bukkit.conversations.PlayerNamePrompt. */
export interface PlayerNamePromptMembers {
  readonly __javaSupertypes?: readonly [ValidatingPrompt];
}
export type PlayerNamePrompt = PlayerNamePromptMembers & ValidatingPrompt;
export interface PlayerNamePromptStatics {
}

/** JVM class org.bukkit.conversations.PluginNameConversationPrefix. */
export interface PluginNameConversationPrefixMembers {
  readonly __javaSupertypes?: readonly [ConversationPrefix];
  getPrefix(arg0: ConversationContext): string;
}
export type PluginNameConversationPrefix = PluginNameConversationPrefixMembers & ConversationPrefix;
export interface PluginNameConversationPrefixStatics {
  new(arg0: j_org_bukkit_plugin.Plugin): PluginNameConversationPrefix;
  new(arg0: j_org_bukkit_plugin.Plugin, arg1: string, arg2: j_org_bukkit.ChatColor): PluginNameConversationPrefix;
}

/** JVM interface org.bukkit.conversations.Prompt. */
export interface PromptMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Cloneable">];
  acceptInput(arg0: ConversationContext, arg1: string | null): Prompt | null;
  blocksForInput(arg0: ConversationContext): boolean;
  getPromptText(arg0: ConversationContext): string;
}
export type Prompt = PromptMembers & JavaOpaque<"java.lang.Cloneable">;
export interface PromptStatics {
  readonly END_OF_CONVERSATION: Prompt;
}

/** JVM abstract org.bukkit.conversations.RegexPrompt. */
export interface RegexPromptMembers {
  readonly __javaSupertypes?: readonly [ValidatingPrompt];
}
export type RegexPrompt = RegexPromptMembers & ValidatingPrompt;
export interface RegexPromptStatics {
}

/** JVM abstract org.bukkit.conversations.StringPrompt. */
export interface StringPromptMembers {
  readonly __javaSupertypes?: readonly [Prompt];
  blocksForInput(arg0: ConversationContext): boolean;
}
export type StringPrompt = StringPromptMembers & Prompt;
export interface StringPromptStatics {
}

/** JVM abstract org.bukkit.conversations.ValidatingPrompt. */
export interface ValidatingPromptMembers {
  readonly __javaSupertypes?: readonly [Prompt];
  acceptInput(arg0: ConversationContext, arg1: string | null): Prompt | null;
  blocksForInput(arg0: ConversationContext): boolean;
}
export type ValidatingPrompt = ValidatingPromptMembers & Prompt;
export interface ValidatingPromptStatics {
}
