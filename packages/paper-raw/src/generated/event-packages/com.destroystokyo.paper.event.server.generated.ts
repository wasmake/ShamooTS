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
/** Handles com.destroystokyo.paper.event.server.AsyncTabCompleteEvent. */
export const OnAsyncTabCompleteEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnAsyncTabCompleteEvent', "com.destroystokyo.paper.event.server.AsyncTabCompleteEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.server.GS4QueryEvent. */
export const OnGS4QueryEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnGS4QueryEvent', "com.destroystokyo.paper.event.server.GS4QueryEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.server.PaperServerListPingEvent. */
export const OnPaperServerListPingEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPaperServerListPingEvent', "com.destroystokyo.paper.event.server.PaperServerListPingEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.server.ServerExceptionEvent. */
export const OnServerExceptionEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServerExceptionEvent', "com.destroystokyo.paper.event.server.ServerExceptionEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.server.ServerTickEndEvent. */
export const OnServerTickEndEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServerTickEndEvent', "com.destroystokyo.paper.event.server.ServerTickEndEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.server.ServerTickStartEvent. */
export const OnServerTickStartEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnServerTickStartEvent', "com.destroystokyo.paper.event.server.ServerTickStartEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.server.WhitelistToggleEvent. */
export const OnWhitelistToggleEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnWhitelistToggleEvent', "com.destroystokyo.paper.event.server.WhitelistToggleEvent", priority, receiveCancelled);
