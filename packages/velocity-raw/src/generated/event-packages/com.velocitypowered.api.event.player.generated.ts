// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
type GeneratedEventDecorator = {
  (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor): void;
  <This, Arguments extends unknown[], Return>(value: (this: This, ...arguments_: Arguments) => Return, context: ClassMethodDecoratorContext<This, (this: This, ...arguments_: Arguments) => Return>): void;
};
type GeneratedEventPriority = 'LOWEST' | 'LOW' | 'NORMAL' | 'HIGH' | 'HIGHEST' | 'MONITOR';
function generatedEventDecorator(name: string, javaName: string, priority: GeneratedEventPriority, receiveCancelled: boolean): GeneratedEventDecorator {
  return (...invocation: Array<object | string | symbol>) => {
    const context = invocation[1] as { readonly kind?: string; readonly name?: string | symbol; readonly metadata?: Record<PropertyKey, object> } | undefined;
    const key = Symbol.for('shamoo.decorator.declarations');
    const legacyMember = typeof invocation[1] === 'string' || typeof invocation[1] === 'symbol' ? invocation[1] : undefined;
    if (context?.kind !== 'method' && legacyMember === undefined) throw new TypeError('@' + name + ' can only decorate a method.');
    const carrier = context?.metadata ?? (invocation[0] as { constructor: Record<PropertyKey, object> }).constructor;
    const declarations = carrier[key] as object[] | undefined;
    const value = { name, target: 'method', arguments: [javaName, priority, receiveCancelled], member: context?.name ?? legacyMember };
    if (declarations === undefined) Object.defineProperty(carrier, key, { configurable: true, value: [value] });
    else declarations.push(value);
  };
}
/** Handles com.velocitypowered.api.event.player.CookieReceiveEvent. */
export const OnCookieReceiveEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnCookieReceiveEvent', "com.velocitypowered.api.event.player.CookieReceiveEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.CookieRequestEvent. */
export const OnCookieRequestEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnCookieRequestEvent', "com.velocitypowered.api.event.player.CookieRequestEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.CookieStoreEvent. */
export const OnCookieStoreEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnCookieStoreEvent', "com.velocitypowered.api.event.player.CookieStoreEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.GameProfileRequestEvent. */
export const OnGameProfileRequestEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnGameProfileRequestEvent', "com.velocitypowered.api.event.player.GameProfileRequestEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.KickedFromServerEvent. */
export const OnKickedFromServerEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnKickedFromServerEvent', "com.velocitypowered.api.event.player.KickedFromServerEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.PlayerChannelRegisterEvent. */
export const OnPlayerChannelRegisterEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChannelRegisterEvent', "com.velocitypowered.api.event.player.PlayerChannelRegisterEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.PlayerChannelUnregisterEvent. */
export const OnPlayerChannelUnregisterEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChannelUnregisterEvent', "com.velocitypowered.api.event.player.PlayerChannelUnregisterEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.PlayerChatEvent. */
export const OnPlayerChatEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChatEvent', "com.velocitypowered.api.event.player.PlayerChatEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.PlayerChooseInitialServerEvent. */
export const OnPlayerChooseInitialServerEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChooseInitialServerEvent', "com.velocitypowered.api.event.player.PlayerChooseInitialServerEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.PlayerClientBrandEvent. */
export const OnPlayerClientBrandEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerClientBrandEvent', "com.velocitypowered.api.event.player.PlayerClientBrandEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.PlayerModInfoEvent. */
export const OnPlayerModInfoEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerModInfoEvent', "com.velocitypowered.api.event.player.PlayerModInfoEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent. */
export const OnPlayerResourcePackStatusEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerResourcePackStatusEvent', "com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.PlayerSettingsChangedEvent. */
export const OnPlayerSettingsChangedEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerSettingsChangedEvent', "com.velocitypowered.api.event.player.PlayerSettingsChangedEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.ServerConnectedEvent. */
export const OnServerConnectedEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServerConnectedEvent', "com.velocitypowered.api.event.player.ServerConnectedEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent. */
export const OnServerLoginPluginMessageEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServerLoginPluginMessageEvent', "com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.ServerPostConnectEvent. */
export const OnServerPostConnectEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServerPostConnectEvent', "com.velocitypowered.api.event.player.ServerPostConnectEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.ServerPreConnectEvent. */
export const OnServerPreConnectEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServerPreConnectEvent', "com.velocitypowered.api.event.player.ServerPreConnectEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.ServerResourcePackRemoveEvent. */
export const OnServerResourcePackRemoveEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServerResourcePackRemoveEvent', "com.velocitypowered.api.event.player.ServerResourcePackRemoveEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.ServerResourcePackSendEvent. */
export const OnServerResourcePackSendEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServerResourcePackSendEvent', "com.velocitypowered.api.event.player.ServerResourcePackSendEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.player.TabCompleteEvent. */
export const OnTabCompleteEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnTabCompleteEvent', "com.velocitypowered.api.event.player.TabCompleteEvent", priority, receiveCancelled);
