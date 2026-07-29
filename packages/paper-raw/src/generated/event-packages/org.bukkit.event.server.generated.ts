// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
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
/** Handles org.bukkit.event.server.BroadcastMessageEvent. */
export const OnBroadcastMessageEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBroadcastMessageEvent', "org.bukkit.event.server.BroadcastMessageEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.server.MapInitializeEvent. */
export const OnMapInitializeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnMapInitializeEvent', "org.bukkit.event.server.MapInitializeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.server.PluginDisableEvent. */
export const OnPluginDisableEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPluginDisableEvent', "org.bukkit.event.server.PluginDisableEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.server.PluginEnableEvent. */
export const OnPluginEnableEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPluginEnableEvent', "org.bukkit.event.server.PluginEnableEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.server.RemoteServerCommandEvent. */
export const OnRemoteServerCommandEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnRemoteServerCommandEvent', "org.bukkit.event.server.RemoteServerCommandEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.server.ServerCommandEvent. */
export const OnServerCommandEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServerCommandEvent', "org.bukkit.event.server.ServerCommandEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.server.ServerListPingEvent. */
export const OnServerListPingEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServerListPingEvent', "org.bukkit.event.server.ServerListPingEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.server.ServerLoadEvent. */
export const OnServerLoadEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServerLoadEvent', "org.bukkit.event.server.ServerLoadEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.server.ServiceRegisterEvent. */
export const OnServiceRegisterEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServiceRegisterEvent', "org.bukkit.event.server.ServiceRegisterEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.server.ServiceUnregisterEvent. */
export const OnServiceUnregisterEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServiceUnregisterEvent', "org.bukkit.event.server.ServiceUnregisterEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.server.TabCompleteEvent. */
export const OnTabCompleteEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnTabCompleteEvent', "org.bukkit.event.server.TabCompleteEvent", priority, receiveCancelled);
