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
/** Handles io.papermc.paper.event.entity.ElderGuardianAppearanceEvent. */
export const OnElderGuardianAppearanceEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnElderGuardianAppearanceEvent', "io.papermc.paper.event.entity.ElderGuardianAppearanceEvent");
/** Handles io.papermc.paper.event.entity.EntityAttemptSmashAttackEvent. */
export const OnEntityAttemptSmashAttackEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityAttemptSmashAttackEvent', "io.papermc.paper.event.entity.EntityAttemptSmashAttackEvent");
/** Handles io.papermc.paper.event.entity.EntityAttemptSpinAttackEvent. */
export const OnEntityAttemptSpinAttackEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityAttemptSpinAttackEvent', "io.papermc.paper.event.entity.EntityAttemptSpinAttackEvent");
/** Handles io.papermc.paper.event.entity.EntityCompostItemEvent. */
export const OnEntityCompostItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityCompostItemEvent', "io.papermc.paper.event.entity.EntityCompostItemEvent");
/** Handles io.papermc.paper.event.entity.EntityDamageItemEvent. */
export const OnEntityDamageItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityDamageItemEvent', "io.papermc.paper.event.entity.EntityDamageItemEvent");
/** Handles io.papermc.paper.event.entity.EntityDyeEvent. */
export const OnEntityDyeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityDyeEvent', "io.papermc.paper.event.entity.EntityDyeEvent");
/** Handles io.papermc.paper.event.entity.EntityEffectTickEvent. */
export const OnEntityEffectTickEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityEffectTickEvent', "io.papermc.paper.event.entity.EntityEffectTickEvent");
/** Handles io.papermc.paper.event.entity.EntityEquipmentChangedEvent. */
export const OnEntityEquipmentChangedEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityEquipmentChangedEvent', "io.papermc.paper.event.entity.EntityEquipmentChangedEvent");
/** Handles io.papermc.paper.event.entity.EntityFertilizeEggEvent. */
export const OnEntityFertilizeEggEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityFertilizeEggEvent', "io.papermc.paper.event.entity.EntityFertilizeEggEvent");
/** Handles io.papermc.paper.event.entity.EntityInsideBlockEvent. */
export const OnEntityInsideBlockEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityInsideBlockEvent', "io.papermc.paper.event.entity.EntityInsideBlockEvent");
/** Handles io.papermc.paper.event.entity.EntityKnockbackEvent. */
export const OnEntityKnockbackEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityKnockbackEvent', "io.papermc.paper.event.entity.EntityKnockbackEvent");
/** Handles io.papermc.paper.event.entity.EntityLoadCrossbowEvent. */
export const OnEntityLoadCrossbowEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityLoadCrossbowEvent', "io.papermc.paper.event.entity.EntityLoadCrossbowEvent");
/** Handles io.papermc.paper.event.entity.EntityMoveEvent. */
export const OnEntityMoveEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityMoveEvent', "io.papermc.paper.event.entity.EntityMoveEvent");
/** Handles io.papermc.paper.event.entity.EntityPortalReadyEvent. */
export const OnEntityPortalReadyEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityPortalReadyEvent', "io.papermc.paper.event.entity.EntityPortalReadyEvent");
/** Handles io.papermc.paper.event.entity.EntityPushedByEntityAttackEvent. */
export const OnEntityPushedByEntityAttackEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityPushedByEntityAttackEvent', "io.papermc.paper.event.entity.EntityPushedByEntityAttackEvent");
/** Handles io.papermc.paper.event.entity.EntityToggleSitEvent. */
export const OnEntityToggleSitEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityToggleSitEvent', "io.papermc.paper.event.entity.EntityToggleSitEvent");
/** Handles io.papermc.paper.event.entity.FishHookStateChangeEvent. */
export const OnFishHookStateChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnFishHookStateChangeEvent', "io.papermc.paper.event.entity.FishHookStateChangeEvent");
/** Handles io.papermc.paper.event.entity.PufferFishStateChangeEvent. */
export const OnPufferFishStateChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPufferFishStateChangeEvent', "io.papermc.paper.event.entity.PufferFishStateChangeEvent");
/** Handles io.papermc.paper.event.entity.ShulkerDuplicateEvent. */
export const OnShulkerDuplicateEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnShulkerDuplicateEvent', "io.papermc.paper.event.entity.ShulkerDuplicateEvent");
/** Handles io.papermc.paper.event.entity.TameableDeathMessageEvent. */
export const OnTameableDeathMessageEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnTameableDeathMessageEvent', "io.papermc.paper.event.entity.TameableDeathMessageEvent");
/** Handles io.papermc.paper.event.entity.WardenAngerChangeEvent. */
export const OnWardenAngerChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnWardenAngerChangeEvent', "io.papermc.paper.event.entity.WardenAngerChangeEvent");
/** Handles io.papermc.paper.event.entity.WaterBottleSplashEvent. */
export const OnWaterBottleSplashEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnWaterBottleSplashEvent', "io.papermc.paper.event.entity.WaterBottleSplashEvent");
