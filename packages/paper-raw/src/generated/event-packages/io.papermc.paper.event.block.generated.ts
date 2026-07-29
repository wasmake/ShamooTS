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
/** Handles io.papermc.paper.event.block.BeaconActivatedEvent. */
export const OnBeaconActivatedEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBeaconActivatedEvent', "io.papermc.paper.event.block.BeaconActivatedEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.block.BeaconDeactivatedEvent. */
export const OnBeaconDeactivatedEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBeaconDeactivatedEvent', "io.papermc.paper.event.block.BeaconDeactivatedEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.block.BellRevealRaiderEvent. */
export const OnBellRevealRaiderEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBellRevealRaiderEvent', "io.papermc.paper.event.block.BellRevealRaiderEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.block.BellRingEvent. */
export const OnBellRingEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBellRingEvent', "io.papermc.paper.event.block.BellRingEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.block.BlockBreakBlockEvent. */
export const OnBlockBreakBlockEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockBreakBlockEvent', "io.papermc.paper.event.block.BlockBreakBlockEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.block.BlockBreakProgressUpdateEvent. */
export const OnBlockBreakProgressUpdateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockBreakProgressUpdateEvent', "io.papermc.paper.event.block.BlockBreakProgressUpdateEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.block.BlockFailedDispenseEvent. */
export const OnBlockFailedDispenseEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockFailedDispenseEvent', "io.papermc.paper.event.block.BlockFailedDispenseEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.block.BlockLockCheckEvent. */
export const OnBlockLockCheckEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockLockCheckEvent', "io.papermc.paper.event.block.BlockLockCheckEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.block.BlockPreDispenseEvent. */
export const OnBlockPreDispenseEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockPreDispenseEvent', "io.papermc.paper.event.block.BlockPreDispenseEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.block.CompostItemEvent. */
export const OnCompostItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnCompostItemEvent', "io.papermc.paper.event.block.CompostItemEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.block.DragonEggFormEvent. */
export const OnDragonEggFormEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnDragonEggFormEvent', "io.papermc.paper.event.block.DragonEggFormEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.block.PlayerShearBlockEvent. */
export const OnPlayerShearBlockEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerShearBlockEvent', "io.papermc.paper.event.block.PlayerShearBlockEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.block.TargetHitEvent. */
export const OnTargetHitEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnTargetHitEvent', "io.papermc.paper.event.block.TargetHitEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.block.VaultChangeStateEvent. */
export const OnVaultChangeStateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVaultChangeStateEvent', "io.papermc.paper.event.block.VaultChangeStateEvent", priority, receiveCancelled);
