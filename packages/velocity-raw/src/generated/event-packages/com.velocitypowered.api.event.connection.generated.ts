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
/** Handles com.velocitypowered.api.event.connection.ConnectionHandshakeEvent. */
export const OnConnectionHandshakeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnConnectionHandshakeEvent', "com.velocitypowered.api.event.connection.ConnectionHandshakeEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.connection.DisconnectEvent. */
export const OnDisconnectEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnDisconnectEvent', "com.velocitypowered.api.event.connection.DisconnectEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.connection.LoginEvent. */
export const OnLoginEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnLoginEvent', "com.velocitypowered.api.event.connection.LoginEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.connection.PluginMessageEvent. */
export const OnPluginMessageEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPluginMessageEvent', "com.velocitypowered.api.event.connection.PluginMessageEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.connection.PostLoginEvent. */
export const OnPostLoginEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPostLoginEvent', "com.velocitypowered.api.event.connection.PostLoginEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.connection.PreLoginEvent. */
export const OnPreLoginEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPreLoginEvent', "com.velocitypowered.api.event.connection.PreLoginEvent", priority, receiveCancelled);
/** Handles com.velocitypowered.api.event.connection.PreTransferEvent. */
export const OnPreTransferEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPreTransferEvent', "com.velocitypowered.api.event.connection.PreTransferEvent", priority, receiveCancelled);
