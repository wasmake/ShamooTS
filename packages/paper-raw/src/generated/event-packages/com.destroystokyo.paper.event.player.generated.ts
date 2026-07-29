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
/** Handles com.destroystokyo.paper.event.player.IllegalPacketEvent. */
export const OnIllegalPacketEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnIllegalPacketEvent', "com.destroystokyo.paper.event.player.IllegalPacketEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerAdvancementCriterionGrantEvent. */
export const OnPlayerAdvancementCriterionGrantEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerAdvancementCriterionGrantEvent', "com.destroystokyo.paper.event.player.PlayerAdvancementCriterionGrantEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerArmorChangeEvent. */
export const OnPlayerArmorChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerArmorChangeEvent', "com.destroystokyo.paper.event.player.PlayerArmorChangeEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerAttackEntityCooldownResetEvent. */
export const OnPlayerAttackEntityCooldownResetEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerAttackEntityCooldownResetEvent', "com.destroystokyo.paper.event.player.PlayerAttackEntityCooldownResetEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerClientOptionsChangeEvent. */
export const OnPlayerClientOptionsChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerClientOptionsChangeEvent', "com.destroystokyo.paper.event.player.PlayerClientOptionsChangeEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerConnectionCloseEvent. */
export const OnPlayerConnectionCloseEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerConnectionCloseEvent', "com.destroystokyo.paper.event.player.PlayerConnectionCloseEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerElytraBoostEvent. */
export const OnPlayerElytraBoostEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerElytraBoostEvent', "com.destroystokyo.paper.event.player.PlayerElytraBoostEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerHandshakeEvent. */
export const OnPlayerHandshakeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerHandshakeEvent', "com.destroystokyo.paper.event.player.PlayerHandshakeEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerJumpEvent. */
export const OnPlayerJumpEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerJumpEvent', "com.destroystokyo.paper.event.player.PlayerJumpEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerLaunchProjectileEvent. */
export const OnPlayerLaunchProjectileEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLaunchProjectileEvent', "com.destroystokyo.paper.event.player.PlayerLaunchProjectileEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerPickupExperienceEvent. */
export const OnPlayerPickupExperienceEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPickupExperienceEvent', "com.destroystokyo.paper.event.player.PlayerPickupExperienceEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerPostRespawnEvent. */
export const OnPlayerPostRespawnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPostRespawnEvent', "com.destroystokyo.paper.event.player.PlayerPostRespawnEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerReadyArrowEvent. */
export const OnPlayerReadyArrowEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerReadyArrowEvent', "com.destroystokyo.paper.event.player.PlayerReadyArrowEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerRecipeBookClickEvent. */
export const OnPlayerRecipeBookClickEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRecipeBookClickEvent', "com.destroystokyo.paper.event.player.PlayerRecipeBookClickEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerSetSpawnEvent. */
export const OnPlayerSetSpawnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerSetSpawnEvent', "com.destroystokyo.paper.event.player.PlayerSetSpawnEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerStartSpectatingEntityEvent. */
export const OnPlayerStartSpectatingEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerStartSpectatingEntityEvent', "com.destroystokyo.paper.event.player.PlayerStartSpectatingEntityEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerStopSpectatingEntityEvent. */
export const OnPlayerStopSpectatingEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerStopSpectatingEntityEvent', "com.destroystokyo.paper.event.player.PlayerStopSpectatingEntityEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerTeleportEndGatewayEvent. */
export const OnPlayerTeleportEndGatewayEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerTeleportEndGatewayEvent', "com.destroystokyo.paper.event.player.PlayerTeleportEndGatewayEvent", priority, receiveCancelled);
/** Handles com.destroystokyo.paper.event.player.PlayerUseUnknownEntityEvent. */
export const OnPlayerUseUnknownEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerUseUnknownEntityEvent', "com.destroystokyo.paper.event.player.PlayerUseUnknownEntityEvent", priority, receiveCancelled);
