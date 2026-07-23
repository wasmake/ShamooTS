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
/** Handles com.destroystokyo.paper.event.player.IllegalPacketEvent. */
export const OnIllegalPacketEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnIllegalPacketEvent', "com.destroystokyo.paper.event.player.IllegalPacketEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerAdvancementCriterionGrantEvent. */
export const OnPlayerAdvancementCriterionGrantEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerAdvancementCriterionGrantEvent', "com.destroystokyo.paper.event.player.PlayerAdvancementCriterionGrantEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerArmorChangeEvent. */
export const OnPlayerArmorChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerArmorChangeEvent', "com.destroystokyo.paper.event.player.PlayerArmorChangeEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerAttackEntityCooldownResetEvent. */
export const OnPlayerAttackEntityCooldownResetEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerAttackEntityCooldownResetEvent', "com.destroystokyo.paper.event.player.PlayerAttackEntityCooldownResetEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerClientOptionsChangeEvent. */
export const OnPlayerClientOptionsChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerClientOptionsChangeEvent', "com.destroystokyo.paper.event.player.PlayerClientOptionsChangeEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerConnectionCloseEvent. */
export const OnPlayerConnectionCloseEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerConnectionCloseEvent', "com.destroystokyo.paper.event.player.PlayerConnectionCloseEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerElytraBoostEvent. */
export const OnPlayerElytraBoostEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerElytraBoostEvent', "com.destroystokyo.paper.event.player.PlayerElytraBoostEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerHandshakeEvent. */
export const OnPlayerHandshakeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerHandshakeEvent', "com.destroystokyo.paper.event.player.PlayerHandshakeEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerJumpEvent. */
export const OnPlayerJumpEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerJumpEvent', "com.destroystokyo.paper.event.player.PlayerJumpEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerLaunchProjectileEvent. */
export const OnPlayerLaunchProjectileEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLaunchProjectileEvent', "com.destroystokyo.paper.event.player.PlayerLaunchProjectileEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerPickupExperienceEvent. */
export const OnPlayerPickupExperienceEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPickupExperienceEvent', "com.destroystokyo.paper.event.player.PlayerPickupExperienceEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerPostRespawnEvent. */
export const OnPlayerPostRespawnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPostRespawnEvent', "com.destroystokyo.paper.event.player.PlayerPostRespawnEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerReadyArrowEvent. */
export const OnPlayerReadyArrowEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerReadyArrowEvent', "com.destroystokyo.paper.event.player.PlayerReadyArrowEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerRecipeBookClickEvent. */
export const OnPlayerRecipeBookClickEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRecipeBookClickEvent', "com.destroystokyo.paper.event.player.PlayerRecipeBookClickEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerSetSpawnEvent. */
export const OnPlayerSetSpawnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerSetSpawnEvent', "com.destroystokyo.paper.event.player.PlayerSetSpawnEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerStartSpectatingEntityEvent. */
export const OnPlayerStartSpectatingEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerStartSpectatingEntityEvent', "com.destroystokyo.paper.event.player.PlayerStartSpectatingEntityEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerStopSpectatingEntityEvent. */
export const OnPlayerStopSpectatingEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerStopSpectatingEntityEvent', "com.destroystokyo.paper.event.player.PlayerStopSpectatingEntityEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerTeleportEndGatewayEvent. */
export const OnPlayerTeleportEndGatewayEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerTeleportEndGatewayEvent', "com.destroystokyo.paper.event.player.PlayerTeleportEndGatewayEvent");
/** Handles com.destroystokyo.paper.event.player.PlayerUseUnknownEntityEvent. */
export const OnPlayerUseUnknownEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerUseUnknownEntityEvent', "com.destroystokyo.paper.event.player.PlayerUseUnknownEntityEvent");
