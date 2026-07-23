// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
type GeneratedEventDecorator = {
  (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor): void;
  <This, Arguments extends unknown[], Return>(value: (this: This, ...arguments_: Arguments) => Return, context: ClassMethodDecoratorContext<This, (this: This, ...arguments_: Arguments) => Return>): void;
};
function generatedEventDecorator(name: string, javaName: string): GeneratedEventDecorator {
  return (...invocation: Array<object | string | symbol>) => {
    const context = invocation[1] as { readonly kind?: string; readonly name?: string | symbol; readonly metadata?: Record<PropertyKey, object> } | undefined;
    const key = Symbol.for('shamoo.decorator.declarations');
    const legacyMember = typeof invocation[1] === 'string' || typeof invocation[1] === 'symbol' ? invocation[1] : undefined;
    if (context?.kind !== 'method' && legacyMember === undefined) throw new TypeError('@' + name + ' can only decorate a method.');
    const carrier = context?.metadata ?? (invocation[0] as { constructor: Record<PropertyKey, object> }).constructor;
    const declarations = carrier[key] as object[] | undefined;
    const value = { name, target: 'method', arguments: [javaName], member: context?.name ?? legacyMember };
    if (declarations === undefined) Object.defineProperty(carrier, key, { configurable: true, value: [value] });
    else declarations.push(value);
  };
}
/** Handles com.velocitypowered.api.event.player.CookieReceiveEvent. */
export const OnCookieReceiveEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnCookieReceiveEvent', "com.velocitypowered.api.event.player.CookieReceiveEvent");
/** Handles com.velocitypowered.api.event.player.CookieRequestEvent. */
export const OnCookieRequestEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnCookieRequestEvent', "com.velocitypowered.api.event.player.CookieRequestEvent");
/** Handles com.velocitypowered.api.event.player.CookieStoreEvent. */
export const OnCookieStoreEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnCookieStoreEvent', "com.velocitypowered.api.event.player.CookieStoreEvent");
/** Handles com.velocitypowered.api.event.player.GameProfileRequestEvent. */
export const OnGameProfileRequestEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnGameProfileRequestEvent', "com.velocitypowered.api.event.player.GameProfileRequestEvent");
/** Handles com.velocitypowered.api.event.player.KickedFromServerEvent. */
export const OnKickedFromServerEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnKickedFromServerEvent', "com.velocitypowered.api.event.player.KickedFromServerEvent");
/** Handles com.velocitypowered.api.event.player.PlayerChannelRegisterEvent. */
export const OnPlayerChannelRegisterEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChannelRegisterEvent', "com.velocitypowered.api.event.player.PlayerChannelRegisterEvent");
/** Handles com.velocitypowered.api.event.player.PlayerChannelUnregisterEvent. */
export const OnPlayerChannelUnregisterEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChannelUnregisterEvent', "com.velocitypowered.api.event.player.PlayerChannelUnregisterEvent");
/** Handles com.velocitypowered.api.event.player.PlayerChatEvent. */
export const OnPlayerChatEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChatEvent', "com.velocitypowered.api.event.player.PlayerChatEvent");
/** Handles com.velocitypowered.api.event.player.PlayerChooseInitialServerEvent. */
export const OnPlayerChooseInitialServerEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChooseInitialServerEvent', "com.velocitypowered.api.event.player.PlayerChooseInitialServerEvent");
/** Handles com.velocitypowered.api.event.player.PlayerClientBrandEvent. */
export const OnPlayerClientBrandEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerClientBrandEvent', "com.velocitypowered.api.event.player.PlayerClientBrandEvent");
/** Handles com.velocitypowered.api.event.player.PlayerModInfoEvent. */
export const OnPlayerModInfoEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerModInfoEvent', "com.velocitypowered.api.event.player.PlayerModInfoEvent");
/** Handles com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent. */
export const OnPlayerResourcePackStatusEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerResourcePackStatusEvent', "com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent");
/** Handles com.velocitypowered.api.event.player.PlayerSettingsChangedEvent. */
export const OnPlayerSettingsChangedEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerSettingsChangedEvent', "com.velocitypowered.api.event.player.PlayerSettingsChangedEvent");
/** Handles com.velocitypowered.api.event.player.ServerConnectedEvent. */
export const OnServerConnectedEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServerConnectedEvent', "com.velocitypowered.api.event.player.ServerConnectedEvent");
/** Handles com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent. */
export const OnServerLoginPluginMessageEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServerLoginPluginMessageEvent', "com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent");
/** Handles com.velocitypowered.api.event.player.ServerPostConnectEvent. */
export const OnServerPostConnectEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServerPostConnectEvent', "com.velocitypowered.api.event.player.ServerPostConnectEvent");
/** Handles com.velocitypowered.api.event.player.ServerPreConnectEvent. */
export const OnServerPreConnectEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServerPreConnectEvent', "com.velocitypowered.api.event.player.ServerPreConnectEvent");
/** Handles com.velocitypowered.api.event.player.ServerResourcePackRemoveEvent. */
export const OnServerResourcePackRemoveEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServerResourcePackRemoveEvent', "com.velocitypowered.api.event.player.ServerResourcePackRemoveEvent");
/** Handles com.velocitypowered.api.event.player.ServerResourcePackSendEvent. */
export const OnServerResourcePackSendEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServerResourcePackSendEvent', "com.velocitypowered.api.event.player.ServerResourcePackSendEvent");
/** Handles com.velocitypowered.api.event.player.TabCompleteEvent. */
export const OnTabCompleteEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnTabCompleteEvent', "com.velocitypowered.api.event.player.TabCompleteEvent");
