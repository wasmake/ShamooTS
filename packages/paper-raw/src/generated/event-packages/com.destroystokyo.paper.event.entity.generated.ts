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
/** Handles com.destroystokyo.paper.event.entity.CreeperIgniteEvent. */
export const OnCreeperIgniteEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnCreeperIgniteEvent', "com.destroystokyo.paper.event.entity.CreeperIgniteEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.EnderDragonFireballHitEvent. */
export const OnEnderDragonFireballHitEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEnderDragonFireballHitEvent', "com.destroystokyo.paper.event.entity.EnderDragonFireballHitEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.EnderDragonFlameEvent. */
export const OnEnderDragonFlameEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEnderDragonFlameEvent', "com.destroystokyo.paper.event.entity.EnderDragonFlameEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.EnderDragonShootFireballEvent. */
export const OnEnderDragonShootFireballEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEnderDragonShootFireballEvent', "com.destroystokyo.paper.event.entity.EnderDragonShootFireballEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.EndermanAttackPlayerEvent. */
export const OnEndermanAttackPlayerEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEndermanAttackPlayerEvent', "com.destroystokyo.paper.event.entity.EndermanAttackPlayerEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.EndermanEscapeEvent. */
export const OnEndermanEscapeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEndermanEscapeEvent', "com.destroystokyo.paper.event.entity.EndermanEscapeEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.EntityAddToWorldEvent. */
export const OnEntityAddToWorldEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityAddToWorldEvent', "com.destroystokyo.paper.event.entity.EntityAddToWorldEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.EntityJumpEvent. */
export const OnEntityJumpEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityJumpEvent', "com.destroystokyo.paper.event.entity.EntityJumpEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.EntityKnockbackByEntityEvent. */
export const OnEntityKnockbackByEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityKnockbackByEntityEvent', "com.destroystokyo.paper.event.entity.EntityKnockbackByEntityEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.EntityPathfindEvent. */
export const OnEntityPathfindEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityPathfindEvent', "com.destroystokyo.paper.event.entity.EntityPathfindEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.EntityRemoveFromWorldEvent. */
export const OnEntityRemoveFromWorldEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityRemoveFromWorldEvent', "com.destroystokyo.paper.event.entity.EntityRemoveFromWorldEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.EntityTeleportEndGatewayEvent. */
export const OnEntityTeleportEndGatewayEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityTeleportEndGatewayEvent', "com.destroystokyo.paper.event.entity.EntityTeleportEndGatewayEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.EntityZapEvent. */
export const OnEntityZapEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityZapEvent', "com.destroystokyo.paper.event.entity.EntityZapEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.ExperienceOrbMergeEvent. */
export const OnExperienceOrbMergeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnExperienceOrbMergeEvent', "com.destroystokyo.paper.event.entity.ExperienceOrbMergeEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.PhantomPreSpawnEvent. */
export const OnPhantomPreSpawnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPhantomPreSpawnEvent', "com.destroystokyo.paper.event.entity.PhantomPreSpawnEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.PlayerNaturallySpawnCreaturesEvent. */
export const OnPlayerNaturallySpawnCreaturesEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerNaturallySpawnCreaturesEvent', "com.destroystokyo.paper.event.entity.PlayerNaturallySpawnCreaturesEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.PreCreatureSpawnEvent. */
export const OnPreCreatureSpawnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPreCreatureSpawnEvent', "com.destroystokyo.paper.event.entity.PreCreatureSpawnEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.PreSpawnerSpawnEvent. */
export const OnPreSpawnerSpawnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPreSpawnerSpawnEvent', "com.destroystokyo.paper.event.entity.PreSpawnerSpawnEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.ProjectileCollideEvent. */
export const OnProjectileCollideEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnProjectileCollideEvent', "com.destroystokyo.paper.event.entity.ProjectileCollideEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.SkeletonHorseTrapEvent. */
export const OnSkeletonHorseTrapEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSkeletonHorseTrapEvent', "com.destroystokyo.paper.event.entity.SkeletonHorseTrapEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.SlimeChangeDirectionEvent. */
export const OnSlimeChangeDirectionEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSlimeChangeDirectionEvent', "com.destroystokyo.paper.event.entity.SlimeChangeDirectionEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.SlimePathfindEvent. */
export const OnSlimePathfindEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSlimePathfindEvent', "com.destroystokyo.paper.event.entity.SlimePathfindEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.SlimeSwimEvent. */
export const OnSlimeSwimEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSlimeSwimEvent', "com.destroystokyo.paper.event.entity.SlimeSwimEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.SlimeTargetLivingEntityEvent. */
export const OnSlimeTargetLivingEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSlimeTargetLivingEntityEvent', "com.destroystokyo.paper.event.entity.SlimeTargetLivingEntityEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.SlimeWanderEvent. */
export const OnSlimeWanderEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSlimeWanderEvent', "com.destroystokyo.paper.event.entity.SlimeWanderEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.ThrownEggHatchEvent. */
export const OnThrownEggHatchEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnThrownEggHatchEvent', "com.destroystokyo.paper.event.entity.ThrownEggHatchEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.TurtleGoHomeEvent. */
export const OnTurtleGoHomeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnTurtleGoHomeEvent', "com.destroystokyo.paper.event.entity.TurtleGoHomeEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.TurtleLayEggEvent. */
export const OnTurtleLayEggEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnTurtleLayEggEvent', "com.destroystokyo.paper.event.entity.TurtleLayEggEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.TurtleStartDiggingEvent. */
export const OnTurtleStartDiggingEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnTurtleStartDiggingEvent', "com.destroystokyo.paper.event.entity.TurtleStartDiggingEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.WitchConsumePotionEvent. */
export const OnWitchConsumePotionEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnWitchConsumePotionEvent', "com.destroystokyo.paper.event.entity.WitchConsumePotionEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.WitchReadyPotionEvent. */
export const OnWitchReadyPotionEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnWitchReadyPotionEvent', "com.destroystokyo.paper.event.entity.WitchReadyPotionEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.entity.WitchThrowPotionEvent. */
export const OnWitchThrowPotionEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnWitchThrowPotionEvent', "com.destroystokyo.paper.event.entity.WitchThrowPotionEvent", priority, receiveCancelled);
