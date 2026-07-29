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
/** Handles com.velocitypowered.api.event.proxy.ListenerBoundEvent. */
export const OnListenerBoundEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnListenerBoundEvent', "com.velocitypowered.api.event.proxy.ListenerBoundEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.proxy.ListenerCloseEvent. */
export const OnListenerCloseEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnListenerCloseEvent', "com.velocitypowered.api.event.proxy.ListenerCloseEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.proxy.ProxyInitializeEvent. */
export const OnProxyInitializeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnProxyInitializeEvent', "com.velocitypowered.api.event.proxy.ProxyInitializeEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.proxy.ProxyPingEvent. */
export const OnProxyPingEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnProxyPingEvent', "com.velocitypowered.api.event.proxy.ProxyPingEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.proxy.ProxyPreShutdownEvent. */
export const OnProxyPreShutdownEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnProxyPreShutdownEvent', "com.velocitypowered.api.event.proxy.ProxyPreShutdownEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.proxy.ProxyReloadEvent. */
export const OnProxyReloadEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnProxyReloadEvent', "com.velocitypowered.api.event.proxy.ProxyReloadEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.proxy.ProxyShutdownEvent. */
export const OnProxyShutdownEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnProxyShutdownEvent', "com.velocitypowered.api.event.proxy.ProxyShutdownEvent", priority, receiveCancelled);
