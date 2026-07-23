// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';

/** JVM class org.bukkit.craftbukkit.conversations.ConversationTracker. */
export interface ConversationTrackerMembers {
  abandonAllConversations(): void;
  abandonConversation(arg0: JavaOpaque<"org.bukkit.conversations.Conversation">, arg1: JavaOpaque<"org.bukkit.conversations.ConversationAbandonedEvent">): void;
  acceptConversationInput(arg0: string): void;
  beginConversation(arg0: JavaOpaque<"org.bukkit.conversations.Conversation">): boolean;
  isConversing(): boolean;
  isConversingModaly(): boolean;
}
export type ConversationTracker = ConversationTrackerMembers;
export interface ConversationTrackerStatics {
  new(): ConversationTracker;
}
