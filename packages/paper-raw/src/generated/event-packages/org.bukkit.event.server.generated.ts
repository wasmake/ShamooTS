// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
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
/** Handles org.bukkit.event.server.BroadcastMessageEvent. */
export const OnBroadcastMessageEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBroadcastMessageEvent', "org.bukkit.event.server.BroadcastMessageEvent");
/** Handles org.bukkit.event.server.MapInitializeEvent. */
export const OnMapInitializeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnMapInitializeEvent', "org.bukkit.event.server.MapInitializeEvent");
/** Handles org.bukkit.event.server.PluginDisableEvent. */
export const OnPluginDisableEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPluginDisableEvent', "org.bukkit.event.server.PluginDisableEvent");
/** Handles org.bukkit.event.server.PluginEnableEvent. */
export const OnPluginEnableEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPluginEnableEvent', "org.bukkit.event.server.PluginEnableEvent");
/** Handles org.bukkit.event.server.RemoteServerCommandEvent. */
export const OnRemoteServerCommandEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnRemoteServerCommandEvent', "org.bukkit.event.server.RemoteServerCommandEvent");
/** Handles org.bukkit.event.server.ServerCommandEvent. */
export const OnServerCommandEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServerCommandEvent', "org.bukkit.event.server.ServerCommandEvent");
/** Handles org.bukkit.event.server.ServerListPingEvent. */
export const OnServerListPingEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServerListPingEvent', "org.bukkit.event.server.ServerListPingEvent");
/** Handles org.bukkit.event.server.ServerLoadEvent. */
export const OnServerLoadEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServerLoadEvent', "org.bukkit.event.server.ServerLoadEvent");
/** Handles org.bukkit.event.server.ServiceRegisterEvent. */
export const OnServiceRegisterEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServiceRegisterEvent', "org.bukkit.event.server.ServiceRegisterEvent");
/** Handles org.bukkit.event.server.ServiceUnregisterEvent. */
export const OnServiceUnregisterEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServiceUnregisterEvent', "org.bukkit.event.server.ServiceUnregisterEvent");
/** Handles org.bukkit.event.server.TabCompleteEvent. */
export const OnTabCompleteEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnTabCompleteEvent', "org.bukkit.event.server.TabCompleteEvent");
