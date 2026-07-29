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
/** Handles io.papermc.paper.event.entity.ElderGuardianAppearanceEvent. */
export const OnElderGuardianAppearanceEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnElderGuardianAppearanceEvent', "io.papermc.paper.event.entity.ElderGuardianAppearanceEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityAttemptSmashAttackEvent. */
export const OnEntityAttemptSmashAttackEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityAttemptSmashAttackEvent', "io.papermc.paper.event.entity.EntityAttemptSmashAttackEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityAttemptSpinAttackEvent. */
export const OnEntityAttemptSpinAttackEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityAttemptSpinAttackEvent', "io.papermc.paper.event.entity.EntityAttemptSpinAttackEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityCompostItemEvent. */
export const OnEntityCompostItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityCompostItemEvent', "io.papermc.paper.event.entity.EntityCompostItemEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityDamageItemEvent. */
export const OnEntityDamageItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityDamageItemEvent', "io.papermc.paper.event.entity.EntityDamageItemEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityDyeEvent. */
export const OnEntityDyeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityDyeEvent', "io.papermc.paper.event.entity.EntityDyeEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityEffectTickEvent. */
export const OnEntityEffectTickEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityEffectTickEvent', "io.papermc.paper.event.entity.EntityEffectTickEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityEquipmentChangedEvent. */
export const OnEntityEquipmentChangedEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityEquipmentChangedEvent', "io.papermc.paper.event.entity.EntityEquipmentChangedEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityFertilizeEggEvent. */
export const OnEntityFertilizeEggEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityFertilizeEggEvent', "io.papermc.paper.event.entity.EntityFertilizeEggEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityInsideBlockEvent. */
export const OnEntityInsideBlockEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityInsideBlockEvent', "io.papermc.paper.event.entity.EntityInsideBlockEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityKnockbackEvent. */
export const OnEntityKnockbackEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityKnockbackEvent', "io.papermc.paper.event.entity.EntityKnockbackEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityLoadCrossbowEvent. */
export const OnEntityLoadCrossbowEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityLoadCrossbowEvent', "io.papermc.paper.event.entity.EntityLoadCrossbowEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityMoveEvent. */
export const OnEntityMoveEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityMoveEvent', "io.papermc.paper.event.entity.EntityMoveEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityPortalReadyEvent. */
export const OnEntityPortalReadyEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityPortalReadyEvent', "io.papermc.paper.event.entity.EntityPortalReadyEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityPushedByEntityAttackEvent. */
export const OnEntityPushedByEntityAttackEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityPushedByEntityAttackEvent', "io.papermc.paper.event.entity.EntityPushedByEntityAttackEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.EntityToggleSitEvent. */
export const OnEntityToggleSitEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityToggleSitEvent', "io.papermc.paper.event.entity.EntityToggleSitEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.FishHookStateChangeEvent. */
export const OnFishHookStateChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnFishHookStateChangeEvent', "io.papermc.paper.event.entity.FishHookStateChangeEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.PufferFishStateChangeEvent. */
export const OnPufferFishStateChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPufferFishStateChangeEvent', "io.papermc.paper.event.entity.PufferFishStateChangeEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.ShulkerDuplicateEvent. */
export const OnShulkerDuplicateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnShulkerDuplicateEvent', "io.papermc.paper.event.entity.ShulkerDuplicateEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.TameableDeathMessageEvent. */
export const OnTameableDeathMessageEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnTameableDeathMessageEvent', "io.papermc.paper.event.entity.TameableDeathMessageEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.WardenAngerChangeEvent. */
export const OnWardenAngerChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnWardenAngerChangeEvent', "io.papermc.paper.event.entity.WardenAngerChangeEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.entity.WaterBottleSplashEvent. */
export const OnWaterBottleSplashEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnWaterBottleSplashEvent', "io.papermc.paper.event.entity.WaterBottleSplashEvent", priority, receiveCancelled);
