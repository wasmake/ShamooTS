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
/** Handles com.destroystokyo.paper.event.server.AsyncTabCompleteEvent. */
export const OnAsyncTabCompleteEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnAsyncTabCompleteEvent', "com.destroystokyo.paper.event.server.AsyncTabCompleteEvent");
/** Handles com.destroystokyo.paper.event.server.GS4QueryEvent. */
export const OnGS4QueryEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnGS4QueryEvent', "com.destroystokyo.paper.event.server.GS4QueryEvent");
/** Handles com.destroystokyo.paper.event.server.PaperServerListPingEvent. */
export const OnPaperServerListPingEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPaperServerListPingEvent', "com.destroystokyo.paper.event.server.PaperServerListPingEvent");
/** Handles com.destroystokyo.paper.event.server.ServerExceptionEvent. */
export const OnServerExceptionEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServerExceptionEvent', "com.destroystokyo.paper.event.server.ServerExceptionEvent");
/** Handles com.destroystokyo.paper.event.server.ServerTickEndEvent. */
export const OnServerTickEndEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServerTickEndEvent', "com.destroystokyo.paper.event.server.ServerTickEndEvent");
/** Handles com.destroystokyo.paper.event.server.ServerTickStartEvent. */
export const OnServerTickStartEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnServerTickStartEvent', "com.destroystokyo.paper.event.server.ServerTickStartEvent");
/** Handles com.destroystokyo.paper.event.server.WhitelistToggleEvent. */
export const OnWhitelistToggleEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnWhitelistToggleEvent', "com.destroystokyo.paper.event.server.WhitelistToggleEvent");
