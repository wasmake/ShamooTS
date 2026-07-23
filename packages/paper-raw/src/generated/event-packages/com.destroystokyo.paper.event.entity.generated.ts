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
/** Handles com.destroystokyo.paper.event.entity.CreeperIgniteEvent. */
export const OnCreeperIgniteEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnCreeperIgniteEvent', "com.destroystokyo.paper.event.entity.CreeperIgniteEvent");
/** Handles com.destroystokyo.paper.event.entity.EnderDragonFireballHitEvent. */
export const OnEnderDragonFireballHitEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEnderDragonFireballHitEvent', "com.destroystokyo.paper.event.entity.EnderDragonFireballHitEvent");
/** Handles com.destroystokyo.paper.event.entity.EnderDragonFlameEvent. */
export const OnEnderDragonFlameEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEnderDragonFlameEvent', "com.destroystokyo.paper.event.entity.EnderDragonFlameEvent");
/** Handles com.destroystokyo.paper.event.entity.EnderDragonShootFireballEvent. */
export const OnEnderDragonShootFireballEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEnderDragonShootFireballEvent', "com.destroystokyo.paper.event.entity.EnderDragonShootFireballEvent");
/** Handles com.destroystokyo.paper.event.entity.EndermanAttackPlayerEvent. */
export const OnEndermanAttackPlayerEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEndermanAttackPlayerEvent', "com.destroystokyo.paper.event.entity.EndermanAttackPlayerEvent");
/** Handles com.destroystokyo.paper.event.entity.EndermanEscapeEvent. */
export const OnEndermanEscapeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEndermanEscapeEvent', "com.destroystokyo.paper.event.entity.EndermanEscapeEvent");
/** Handles com.destroystokyo.paper.event.entity.EntityAddToWorldEvent. */
export const OnEntityAddToWorldEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityAddToWorldEvent', "com.destroystokyo.paper.event.entity.EntityAddToWorldEvent");
/** Handles com.destroystokyo.paper.event.entity.EntityJumpEvent. */
export const OnEntityJumpEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityJumpEvent', "com.destroystokyo.paper.event.entity.EntityJumpEvent");
/** Handles com.destroystokyo.paper.event.entity.EntityKnockbackByEntityEvent. */
export const OnEntityKnockbackByEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityKnockbackByEntityEvent', "com.destroystokyo.paper.event.entity.EntityKnockbackByEntityEvent");
/** Handles com.destroystokyo.paper.event.entity.EntityPathfindEvent. */
export const OnEntityPathfindEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityPathfindEvent', "com.destroystokyo.paper.event.entity.EntityPathfindEvent");
/** Handles com.destroystokyo.paper.event.entity.EntityRemoveFromWorldEvent. */
export const OnEntityRemoveFromWorldEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityRemoveFromWorldEvent', "com.destroystokyo.paper.event.entity.EntityRemoveFromWorldEvent");
/** Handles com.destroystokyo.paper.event.entity.EntityTeleportEndGatewayEvent. */
export const OnEntityTeleportEndGatewayEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityTeleportEndGatewayEvent', "com.destroystokyo.paper.event.entity.EntityTeleportEndGatewayEvent");
/** Handles com.destroystokyo.paper.event.entity.EntityZapEvent. */
export const OnEntityZapEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityZapEvent', "com.destroystokyo.paper.event.entity.EntityZapEvent");
/** Handles com.destroystokyo.paper.event.entity.ExperienceOrbMergeEvent. */
export const OnExperienceOrbMergeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnExperienceOrbMergeEvent', "com.destroystokyo.paper.event.entity.ExperienceOrbMergeEvent");
/** Handles com.destroystokyo.paper.event.entity.PhantomPreSpawnEvent. */
export const OnPhantomPreSpawnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPhantomPreSpawnEvent', "com.destroystokyo.paper.event.entity.PhantomPreSpawnEvent");
/** Handles com.destroystokyo.paper.event.entity.PlayerNaturallySpawnCreaturesEvent. */
export const OnPlayerNaturallySpawnCreaturesEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerNaturallySpawnCreaturesEvent', "com.destroystokyo.paper.event.entity.PlayerNaturallySpawnCreaturesEvent");
/** Handles com.destroystokyo.paper.event.entity.PreCreatureSpawnEvent. */
export const OnPreCreatureSpawnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPreCreatureSpawnEvent', "com.destroystokyo.paper.event.entity.PreCreatureSpawnEvent");
/** Handles com.destroystokyo.paper.event.entity.PreSpawnerSpawnEvent. */
export const OnPreSpawnerSpawnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPreSpawnerSpawnEvent', "com.destroystokyo.paper.event.entity.PreSpawnerSpawnEvent");
/** Handles com.destroystokyo.paper.event.entity.ProjectileCollideEvent. */
export const OnProjectileCollideEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnProjectileCollideEvent', "com.destroystokyo.paper.event.entity.ProjectileCollideEvent");
/** Handles com.destroystokyo.paper.event.entity.SkeletonHorseTrapEvent. */
export const OnSkeletonHorseTrapEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSkeletonHorseTrapEvent', "com.destroystokyo.paper.event.entity.SkeletonHorseTrapEvent");
/** Handles com.destroystokyo.paper.event.entity.SlimeChangeDirectionEvent. */
export const OnSlimeChangeDirectionEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSlimeChangeDirectionEvent', "com.destroystokyo.paper.event.entity.SlimeChangeDirectionEvent");
/** Handles com.destroystokyo.paper.event.entity.SlimePathfindEvent. */
export const OnSlimePathfindEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSlimePathfindEvent', "com.destroystokyo.paper.event.entity.SlimePathfindEvent");
/** Handles com.destroystokyo.paper.event.entity.SlimeSwimEvent. */
export const OnSlimeSwimEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSlimeSwimEvent', "com.destroystokyo.paper.event.entity.SlimeSwimEvent");
/** Handles com.destroystokyo.paper.event.entity.SlimeTargetLivingEntityEvent. */
export const OnSlimeTargetLivingEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSlimeTargetLivingEntityEvent', "com.destroystokyo.paper.event.entity.SlimeTargetLivingEntityEvent");
/** Handles com.destroystokyo.paper.event.entity.SlimeWanderEvent. */
export const OnSlimeWanderEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSlimeWanderEvent', "com.destroystokyo.paper.event.entity.SlimeWanderEvent");
/** Handles com.destroystokyo.paper.event.entity.ThrownEggHatchEvent. */
export const OnThrownEggHatchEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnThrownEggHatchEvent', "com.destroystokyo.paper.event.entity.ThrownEggHatchEvent");
/** Handles com.destroystokyo.paper.event.entity.TurtleGoHomeEvent. */
export const OnTurtleGoHomeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnTurtleGoHomeEvent', "com.destroystokyo.paper.event.entity.TurtleGoHomeEvent");
/** Handles com.destroystokyo.paper.event.entity.TurtleLayEggEvent. */
export const OnTurtleLayEggEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnTurtleLayEggEvent', "com.destroystokyo.paper.event.entity.TurtleLayEggEvent");
/** Handles com.destroystokyo.paper.event.entity.TurtleStartDiggingEvent. */
export const OnTurtleStartDiggingEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnTurtleStartDiggingEvent', "com.destroystokyo.paper.event.entity.TurtleStartDiggingEvent");
/** Handles com.destroystokyo.paper.event.entity.WitchConsumePotionEvent. */
export const OnWitchConsumePotionEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnWitchConsumePotionEvent', "com.destroystokyo.paper.event.entity.WitchConsumePotionEvent");
/** Handles com.destroystokyo.paper.event.entity.WitchReadyPotionEvent. */
export const OnWitchReadyPotionEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnWitchReadyPotionEvent', "com.destroystokyo.paper.event.entity.WitchReadyPotionEvent");
/** Handles com.destroystokyo.paper.event.entity.WitchThrowPotionEvent. */
export const OnWitchThrowPotionEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnWitchThrowPotionEvent', "com.destroystokyo.paper.event.entity.WitchThrowPotionEvent");
