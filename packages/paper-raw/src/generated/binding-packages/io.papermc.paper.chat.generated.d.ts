// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_audience from './net.kyori.adventure.audience.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** JVM interface io.papermc.paper.chat.ChatRenderer. */
export interface ChatRendererMembers {
  render(arg0: j_org_bukkit_entity.Player, arg1: j_net_kyori_adventure_text.Component, arg2: j_net_kyori_adventure_text.Component, arg3: j_net_kyori_adventure_audience.Audience): j_net_kyori_adventure_text.Component;
}
export type ChatRenderer = ChatRendererMembers;
export interface ChatRendererStatics {
  defaultRenderer(): ChatRenderer;
  viewerUnaware(arg0: ChatRenderer_ViewerUnaware): ChatRenderer;
}

/** JVM interface io.papermc.paper.chat.ChatRenderer$Default. */
export interface ChatRenderer_DefaultMembers {
  readonly __javaSupertypes?: readonly [ChatRenderer, ChatRenderer_ViewerUnaware];
}
export type ChatRenderer_Default = ChatRenderer_DefaultMembers & ChatRenderer & ChatRenderer_ViewerUnaware;
export interface ChatRenderer_DefaultStatics {
}

/** JVM interface io.papermc.paper.chat.ChatRenderer$ViewerUnaware. */
export interface ChatRenderer_ViewerUnawareMembers {
  render(arg0: j_org_bukkit_entity.Player, arg1: j_net_kyori_adventure_text.Component, arg2: j_net_kyori_adventure_text.Component): j_net_kyori_adventure_text.Component;
}
export type ChatRenderer_ViewerUnaware = ChatRenderer_ViewerUnawareMembers;
export interface ChatRenderer_ViewerUnawareStatics {
}
