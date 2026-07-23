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
/** Handles io.papermc.paper.event.block.BeaconActivatedEvent. */
export const OnBeaconActivatedEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBeaconActivatedEvent', "io.papermc.paper.event.block.BeaconActivatedEvent");
/** Handles io.papermc.paper.event.block.BeaconDeactivatedEvent. */
export const OnBeaconDeactivatedEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBeaconDeactivatedEvent', "io.papermc.paper.event.block.BeaconDeactivatedEvent");
/** Handles io.papermc.paper.event.block.BellRevealRaiderEvent. */
export const OnBellRevealRaiderEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBellRevealRaiderEvent', "io.papermc.paper.event.block.BellRevealRaiderEvent");
/** Handles io.papermc.paper.event.block.BellRingEvent. */
export const OnBellRingEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBellRingEvent', "io.papermc.paper.event.block.BellRingEvent");
/** Handles io.papermc.paper.event.block.BlockBreakBlockEvent. */
export const OnBlockBreakBlockEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockBreakBlockEvent', "io.papermc.paper.event.block.BlockBreakBlockEvent");
/** Handles io.papermc.paper.event.block.BlockBreakProgressUpdateEvent. */
export const OnBlockBreakProgressUpdateEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockBreakProgressUpdateEvent', "io.papermc.paper.event.block.BlockBreakProgressUpdateEvent");
/** Handles io.papermc.paper.event.block.BlockFailedDispenseEvent. */
export const OnBlockFailedDispenseEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockFailedDispenseEvent', "io.papermc.paper.event.block.BlockFailedDispenseEvent");
/** Handles io.papermc.paper.event.block.BlockLockCheckEvent. */
export const OnBlockLockCheckEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockLockCheckEvent', "io.papermc.paper.event.block.BlockLockCheckEvent");
/** Handles io.papermc.paper.event.block.BlockPreDispenseEvent. */
export const OnBlockPreDispenseEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockPreDispenseEvent', "io.papermc.paper.event.block.BlockPreDispenseEvent");
/** Handles io.papermc.paper.event.block.CompostItemEvent. */
export const OnCompostItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnCompostItemEvent', "io.papermc.paper.event.block.CompostItemEvent");
/** Handles io.papermc.paper.event.block.DragonEggFormEvent. */
export const OnDragonEggFormEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnDragonEggFormEvent', "io.papermc.paper.event.block.DragonEggFormEvent");
/** Handles io.papermc.paper.event.block.PlayerShearBlockEvent. */
export const OnPlayerShearBlockEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerShearBlockEvent', "io.papermc.paper.event.block.PlayerShearBlockEvent");
/** Handles io.papermc.paper.event.block.TargetHitEvent. */
export const OnTargetHitEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnTargetHitEvent', "io.papermc.paper.event.block.TargetHitEvent");
/** Handles io.papermc.paper.event.block.VaultChangeStateEvent. */
export const OnVaultChangeStateEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnVaultChangeStateEvent', "io.papermc.paper.event.block.VaultChangeStateEvent");
