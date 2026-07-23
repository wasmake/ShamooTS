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
/** Handles com.velocitypowered.api.event.connection.ConnectionHandshakeEvent. */
export const OnConnectionHandshakeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnConnectionHandshakeEvent', "com.velocitypowered.api.event.connection.ConnectionHandshakeEvent");
/** Handles com.velocitypowered.api.event.connection.DisconnectEvent. */
export const OnDisconnectEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnDisconnectEvent', "com.velocitypowered.api.event.connection.DisconnectEvent");
/** Handles com.velocitypowered.api.event.connection.LoginEvent. */
export const OnLoginEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnLoginEvent', "com.velocitypowered.api.event.connection.LoginEvent");
/** Handles com.velocitypowered.api.event.connection.PluginMessageEvent. */
export const OnPluginMessageEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPluginMessageEvent', "com.velocitypowered.api.event.connection.PluginMessageEvent");
/** Handles com.velocitypowered.api.event.connection.PostLoginEvent. */
export const OnPostLoginEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPostLoginEvent', "com.velocitypowered.api.event.connection.PostLoginEvent");
/** Handles com.velocitypowered.api.event.connection.PreLoginEvent. */
export const OnPreLoginEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPreLoginEvent', "com.velocitypowered.api.event.connection.PreLoginEvent");
/** Handles com.velocitypowered.api.event.connection.PreTransferEvent. */
export const OnPreTransferEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPreTransferEvent', "com.velocitypowered.api.event.connection.PreTransferEvent");
