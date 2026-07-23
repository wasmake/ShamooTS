// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';
import type * as j_org_bukkit_plugin from './org.bukkit.plugin.generated.js';

/** JVM abstract org.bukkit.conversations.BooleanPrompt. */
export interface BooleanPromptMembers {
  readonly __javaSupertypes?: readonly [ValidatingPrompt];
  acceptValidatedInput(arg0: ConversationContext, arg1: string): Prompt | null;
  acceptValidatedInput(arg0: ConversationContext, arg1: boolean): Prompt | null;
  isInputValid(arg0: ConversationContext, arg1: string): boolean;
}
export type BooleanPrompt = BooleanPromptMembers & ValidatingPrompt;
export interface BooleanPromptStatics {
  new(): BooleanPrompt;
}

/** JVM interface org.bukkit.conversations.Conversable. */
export interface ConversableMembers {
  abandonConversation(arg0: Conversation): void;
  abandonConversation(arg0: Conversation, arg1: ConversationAbandonedEvent): void;
  acceptConversationInput(arg0: string): void;
  beginConversation(arg0: Conversation): boolean;
  isConversing(): boolean;
  sendRawMessage(arg0: string): void;
  sendRawMessage(arg0: JavaOpaque<"java.util.UUID"> | null, arg1: string): void | null;
}
export type Conversable = ConversableMembers;
export interface ConversableStatics {
}

/** JVM class org.bukkit.conversations.Conversation. */
export interface ConversationMembers {
  abandon(): void;
  abandon(arg0: ConversationAbandonedEvent): void;
  abandonedListeners: JavaList<ConversationAbandonedListener>;
  acceptInput(arg0: string): void;
  addConversationAbandonedListener(arg0: ConversationAbandonedListener): void;
  begin(): void;
  cancellers: JavaList<ConversationCanceller>;
  context: ConversationContext;
  currentPrompt: Prompt;
  getCancellers(): JavaList<ConversationCanceller>;
  getContext(): ConversationContext;
  getForWhom(): Conversable;
  getPrefix(): ConversationPrefix;
  getState(): Conversation_ConversationState;
  isLocalEchoEnabled(): boolean;
  isModal(): boolean;
  localEchoEnabled: boolean;
  modal: boolean;
  outputNextPrompt(): void;
  prefix: ConversationPrefix;
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
  setSessionData(arg0: object, arg1: object | null): void | null;
}
export type ConversationContext = ConversationContextMembers;
export interface ConversationContextStatics {
  new(arg0: j_org_bukkit_plugin.Plugin | null, arg1: Conversable, arg2: JavaMap<object, object>): ConversationContext;
}

/** JVM class org.bukkit.conversations.ConversationFactory. */
export interface ConversationFactoryMembers {
  abandonedListeners: JavaList<ConversationAbandonedListener>;
  addConversationAbandonedListener(arg0: ConversationAbandonedListener): ConversationFactory;
  buildConversation(arg0: Conversable): Conversation;
  cancellers: JavaList<ConversationCanceller>;
  firstPrompt: Prompt;
  initialSessionData: JavaMap<object, object>;
  isModal: boolean;
  localEchoEnabled: boolean;
  playerOnlyMessage: string;
  plugin: j_org_bukkit_plugin.Plugin;
  prefix: ConversationPrefix;
  thatExcludesNonPlayersWithMessage(arg0: string | null): ConversationFactory | null;
  withConversationCanceller(arg0: ConversationCanceller): ConversationFactory;
  withEscapeSequence(arg0: string): ConversationFactory;
  withFirstPrompt(arg0: Prompt | null): ConversationFactory | null;
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
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
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
  fixedSet: JavaList<string>;
  formatFixedSet(): string;
  isInputValid(arg0: ConversationContext, arg1: string): boolean;
}
export type FixedSetPrompt = FixedSetPromptMembers & ValidatingPrompt;
export interface FixedSetPromptStatics {
  new(...arg0: Array<string>): FixedSetPrompt;
}

/** JVM class org.bukkit.conversations.InactivityConversationCanceller. */
export interface InactivityConversationCancellerMembers {
  readonly __javaSupertypes?: readonly [ConversationCanceller];
  cancelBasedOnInput(arg0: ConversationContext, arg1: string): boolean;
  cancelling(arg0: Conversation): void;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
  clone(): ConversationCanceller;
  conversation: Conversation;
  plugin: j_org_bukkit_plugin.Plugin;
  setConversation(arg0: Conversation): void;
  timeoutSeconds: number;
}
export type InactivityConversationCanceller = InactivityConversationCancellerMembers & ConversationCanceller;
export interface InactivityConversationCancellerStatics {
  new(arg0: j_org_bukkit_plugin.Plugin, arg1: number): InactivityConversationCanceller;
}

/** JVM class org.bukkit.conversations.ManuallyAbandonedConversationCanceller. */
export interface ManuallyAbandonedConversationCancellerMembers {
  readonly __javaSupertypes?: readonly [ConversationCanceller];
  cancelBasedOnInput(arg0: ConversationContext, arg1: string): boolean;
  /** @throws java.lang.CloneNotSupportedException */
  clone(): object;
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
  getNextPrompt(arg0: ConversationContext): Prompt | null;
}
export type MessagePrompt = MessagePromptMembers & Prompt;
export interface MessagePromptStatics {
  new(): MessagePrompt;
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
  acceptValidatedInput(arg0: ConversationContext, arg1: number): Prompt | null;
  acceptValidatedInput(arg0: ConversationContext, arg1: string): Prompt | null;
  getFailedValidationText(arg0: ConversationContext, arg1: number): string | null;
  getFailedValidationText(arg0: ConversationContext, arg1: string): string | null;
  getInputNotNumericText(arg0: ConversationContext, arg1: string): string | null;
  isInputValid(arg0: ConversationContext, arg1: string): boolean;
  isNumberValid(arg0: ConversationContext, arg1: number): boolean;
}
export type NumericPrompt = NumericPromptMembers & ValidatingPrompt;
export interface NumericPromptStatics {
  new(): NumericPrompt;
}

/** JVM abstract org.bukkit.conversations.PlayerNamePrompt. */
export interface PlayerNamePromptMembers {
  readonly __javaSupertypes?: readonly [ValidatingPrompt];
  acceptValidatedInput(arg0: ConversationContext, arg1: string): Prompt | null;
  acceptValidatedInput(arg0: ConversationContext, arg1: j_org_bukkit_entity.Player): Prompt | null;
  isInputValid(arg0: ConversationContext, arg1: string): boolean;
}
export type PlayerNamePrompt = PlayerNamePromptMembers & ValidatingPrompt;
export interface PlayerNamePromptStatics {
  new(arg0: j_org_bukkit_plugin.Plugin): PlayerNamePrompt;
}

/** JVM class org.bukkit.conversations.PluginNameConversationPrefix. */
export interface PluginNameConversationPrefixMembers {
  readonly __javaSupertypes?: readonly [ConversationPrefix];
  getPrefix(arg0: ConversationContext): string;
  plugin: j_org_bukkit_plugin.Plugin;
  prefixColor: j_org_bukkit.ChatColor;
  separator: string;
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
  isInputValid(arg0: ConversationContext, arg1: string): boolean;
}
export type RegexPrompt = RegexPromptMembers & ValidatingPrompt;
export interface RegexPromptStatics {
  new(arg0: string): RegexPrompt;
  new(arg0: JavaOpaque<"java.util.regex.Pattern">): RegexPrompt;
}

/** JVM abstract org.bukkit.conversations.StringPrompt. */
export interface StringPromptMembers {
  readonly __javaSupertypes?: readonly [Prompt];
  blocksForInput(arg0: ConversationContext): boolean;
}
export type StringPrompt = StringPromptMembers & Prompt;
export interface StringPromptStatics {
  new(): StringPrompt;
}

/** JVM abstract org.bukkit.conversations.ValidatingPrompt. */
export interface ValidatingPromptMembers {
  readonly __javaSupertypes?: readonly [Prompt];
  acceptInput(arg0: ConversationContext, arg1: string | null): Prompt | null;
  acceptValidatedInput(arg0: ConversationContext, arg1: string): Prompt | null;
  blocksForInput(arg0: ConversationContext): boolean;
  getFailedValidationText(arg0: ConversationContext, arg1: string): string | null;
  isInputValid(arg0: ConversationContext, arg1: string): boolean;
}
export type ValidatingPrompt = ValidatingPromptMembers & Prompt;
export interface ValidatingPromptStatics {
  new(): ValidatingPrompt;
}
