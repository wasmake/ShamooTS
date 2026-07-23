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
/** Handles org.bukkit.event.entity.AreaEffectCloudApplyEvent. */
export const OnAreaEffectCloudApplyEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnAreaEffectCloudApplyEvent', "org.bukkit.event.entity.AreaEffectCloudApplyEvent");
/** Handles org.bukkit.event.entity.ArrowBodyCountChangeEvent. */
export const OnArrowBodyCountChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnArrowBodyCountChangeEvent', "org.bukkit.event.entity.ArrowBodyCountChangeEvent");
/** Handles org.bukkit.event.entity.BatToggleSleepEvent. */
export const OnBatToggleSleepEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBatToggleSleepEvent', "org.bukkit.event.entity.BatToggleSleepEvent");
/** Handles org.bukkit.event.entity.CreatureSpawnEvent. */
export const OnCreatureSpawnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnCreatureSpawnEvent', "org.bukkit.event.entity.CreatureSpawnEvent");
/** Handles org.bukkit.event.entity.CreeperPowerEvent. */
export const OnCreeperPowerEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnCreeperPowerEvent', "org.bukkit.event.entity.CreeperPowerEvent");
/** Handles org.bukkit.event.entity.EnderDragonChangePhaseEvent. */
export const OnEnderDragonChangePhaseEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEnderDragonChangePhaseEvent', "org.bukkit.event.entity.EnderDragonChangePhaseEvent");
/** Handles org.bukkit.event.entity.EntityAirChangeEvent. */
export const OnEntityAirChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityAirChangeEvent', "org.bukkit.event.entity.EntityAirChangeEvent");
/** Handles org.bukkit.event.entity.EntityBreakDoorEvent. */
export const OnEntityBreakDoorEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityBreakDoorEvent', "org.bukkit.event.entity.EntityBreakDoorEvent");
/** Handles org.bukkit.event.entity.EntityBreedEvent. */
export const OnEntityBreedEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityBreedEvent', "org.bukkit.event.entity.EntityBreedEvent");
/** Handles org.bukkit.event.entity.EntityChangeBlockEvent. */
export const OnEntityChangeBlockEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityChangeBlockEvent', "org.bukkit.event.entity.EntityChangeBlockEvent");
/** Handles org.bukkit.event.entity.EntityCombustByBlockEvent. */
export const OnEntityCombustByBlockEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityCombustByBlockEvent', "org.bukkit.event.entity.EntityCombustByBlockEvent");
/** Handles org.bukkit.event.entity.EntityCombustByEntityEvent. */
export const OnEntityCombustByEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityCombustByEntityEvent', "org.bukkit.event.entity.EntityCombustByEntityEvent");
/** Handles org.bukkit.event.entity.EntityCombustEvent. */
export const OnEntityCombustEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityCombustEvent', "org.bukkit.event.entity.EntityCombustEvent");
/** Handles org.bukkit.event.entity.EntityCreatePortalEvent. */
export const OnEntityCreatePortalEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityCreatePortalEvent', "org.bukkit.event.entity.EntityCreatePortalEvent");
/** Handles org.bukkit.event.entity.EntityDamageByBlockEvent. */
export const OnEntityDamageByBlockEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityDamageByBlockEvent', "org.bukkit.event.entity.EntityDamageByBlockEvent");
/** Handles org.bukkit.event.entity.EntityDamageByEntityEvent. */
export const OnEntityDamageByEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityDamageByEntityEvent', "org.bukkit.event.entity.EntityDamageByEntityEvent");
/** Handles org.bukkit.event.entity.EntityDamageEvent. */
export const OnEntityDamageEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityDamageEvent', "org.bukkit.event.entity.EntityDamageEvent");
/** Handles org.bukkit.event.entity.EntityDeathEvent. */
export const OnEntityDeathEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityDeathEvent', "org.bukkit.event.entity.EntityDeathEvent");
/** Handles org.bukkit.event.entity.EntityDismountEvent. */
export const OnEntityDismountEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityDismountEvent', "org.bukkit.event.entity.EntityDismountEvent");
/** Handles org.bukkit.event.entity.EntityDropItemEvent. */
export const OnEntityDropItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityDropItemEvent', "org.bukkit.event.entity.EntityDropItemEvent");
/** Handles org.bukkit.event.entity.EntityEnterBlockEvent. */
export const OnEntityEnterBlockEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityEnterBlockEvent', "org.bukkit.event.entity.EntityEnterBlockEvent");
/** Handles org.bukkit.event.entity.EntityEnterLoveModeEvent. */
export const OnEntityEnterLoveModeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityEnterLoveModeEvent', "org.bukkit.event.entity.EntityEnterLoveModeEvent");
/** Handles org.bukkit.event.entity.EntityExhaustionEvent. */
export const OnEntityExhaustionEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityExhaustionEvent', "org.bukkit.event.entity.EntityExhaustionEvent");
/** Handles org.bukkit.event.entity.EntityExplodeEvent. */
export const OnEntityExplodeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityExplodeEvent', "org.bukkit.event.entity.EntityExplodeEvent");
/** Handles org.bukkit.event.entity.EntityInteractEvent. */
export const OnEntityInteractEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityInteractEvent', "org.bukkit.event.entity.EntityInteractEvent");
/** Handles org.bukkit.event.entity.EntityKnockbackByEntityEvent. */
export const OnEntityKnockbackByEntityEvent_2 = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityKnockbackByEntityEvent_2', "org.bukkit.event.entity.EntityKnockbackByEntityEvent");
/** Handles org.bukkit.event.entity.EntityKnockbackEvent. */
export const OnEntityKnockbackEvent_2 = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityKnockbackEvent_2', "org.bukkit.event.entity.EntityKnockbackEvent");
/** Handles org.bukkit.event.entity.EntityMountEvent. */
export const OnEntityMountEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityMountEvent', "org.bukkit.event.entity.EntityMountEvent");
/** Handles org.bukkit.event.entity.EntityPickupItemEvent. */
export const OnEntityPickupItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityPickupItemEvent', "org.bukkit.event.entity.EntityPickupItemEvent");
/** Handles org.bukkit.event.entity.EntityPlaceEvent. */
export const OnEntityPlaceEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityPlaceEvent', "org.bukkit.event.entity.EntityPlaceEvent");
/** Handles org.bukkit.event.entity.EntityPortalEnterEvent. */
export const OnEntityPortalEnterEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityPortalEnterEvent', "org.bukkit.event.entity.EntityPortalEnterEvent");
/** Handles org.bukkit.event.entity.EntityPortalEvent. */
export const OnEntityPortalEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityPortalEvent', "org.bukkit.event.entity.EntityPortalEvent");
/** Handles org.bukkit.event.entity.EntityPortalExitEvent. */
export const OnEntityPortalExitEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityPortalExitEvent', "org.bukkit.event.entity.EntityPortalExitEvent");
/** Handles org.bukkit.event.entity.EntityPoseChangeEvent. */
export const OnEntityPoseChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityPoseChangeEvent', "org.bukkit.event.entity.EntityPoseChangeEvent");
/** Handles org.bukkit.event.entity.EntityPotionEffectEvent. */
export const OnEntityPotionEffectEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityPotionEffectEvent', "org.bukkit.event.entity.EntityPotionEffectEvent");
/** Handles org.bukkit.event.entity.EntityRegainHealthEvent. */
export const OnEntityRegainHealthEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityRegainHealthEvent', "org.bukkit.event.entity.EntityRegainHealthEvent");
/** Handles org.bukkit.event.entity.EntityRemoveEvent. */
export const OnEntityRemoveEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityRemoveEvent', "org.bukkit.event.entity.EntityRemoveEvent");
/** Handles org.bukkit.event.entity.EntityResurrectEvent. */
export const OnEntityResurrectEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityResurrectEvent', "org.bukkit.event.entity.EntityResurrectEvent");
/** Handles org.bukkit.event.entity.EntityShootBowEvent. */
export const OnEntityShootBowEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityShootBowEvent', "org.bukkit.event.entity.EntityShootBowEvent");
/** Handles org.bukkit.event.entity.EntitySpawnEvent. */
export const OnEntitySpawnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntitySpawnEvent', "org.bukkit.event.entity.EntitySpawnEvent");
/** Handles org.bukkit.event.entity.EntitySpellCastEvent. */
export const OnEntitySpellCastEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntitySpellCastEvent', "org.bukkit.event.entity.EntitySpellCastEvent");
/** Handles org.bukkit.event.entity.EntityTameEvent. */
export const OnEntityTameEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityTameEvent', "org.bukkit.event.entity.EntityTameEvent");
/** Handles org.bukkit.event.entity.EntityTargetEvent. */
export const OnEntityTargetEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityTargetEvent', "org.bukkit.event.entity.EntityTargetEvent");
/** Handles org.bukkit.event.entity.EntityTargetLivingEntityEvent. */
export const OnEntityTargetLivingEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityTargetLivingEntityEvent', "org.bukkit.event.entity.EntityTargetLivingEntityEvent");
/** Handles org.bukkit.event.entity.EntityTeleportEvent. */
export const OnEntityTeleportEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityTeleportEvent', "org.bukkit.event.entity.EntityTeleportEvent");
/** Handles org.bukkit.event.entity.EntityToggleGlideEvent. */
export const OnEntityToggleGlideEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityToggleGlideEvent', "org.bukkit.event.entity.EntityToggleGlideEvent");
/** Handles org.bukkit.event.entity.EntityToggleSwimEvent. */
export const OnEntityToggleSwimEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityToggleSwimEvent', "org.bukkit.event.entity.EntityToggleSwimEvent");
/** Handles org.bukkit.event.entity.EntityTransformEvent. */
export const OnEntityTransformEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityTransformEvent', "org.bukkit.event.entity.EntityTransformEvent");
/** Handles org.bukkit.event.entity.EntityUnleashEvent. */
export const OnEntityUnleashEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityUnleashEvent', "org.bukkit.event.entity.EntityUnleashEvent");
/** Handles org.bukkit.event.entity.ExpBottleEvent. */
export const OnExpBottleEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnExpBottleEvent', "org.bukkit.event.entity.ExpBottleEvent");
/** Handles org.bukkit.event.entity.ExplosionPrimeEvent. */
export const OnExplosionPrimeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnExplosionPrimeEvent', "org.bukkit.event.entity.ExplosionPrimeEvent");
/** Handles org.bukkit.event.entity.FireworkExplodeEvent. */
export const OnFireworkExplodeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnFireworkExplodeEvent', "org.bukkit.event.entity.FireworkExplodeEvent");
/** Handles org.bukkit.event.entity.FoodLevelChangeEvent. */
export const OnFoodLevelChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnFoodLevelChangeEvent', "org.bukkit.event.entity.FoodLevelChangeEvent");
/** Handles org.bukkit.event.entity.HorseJumpEvent. */
export const OnHorseJumpEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnHorseJumpEvent', "org.bukkit.event.entity.HorseJumpEvent");
/** Handles org.bukkit.event.entity.ItemDespawnEvent. */
export const OnItemDespawnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnItemDespawnEvent', "org.bukkit.event.entity.ItemDespawnEvent");
/** Handles org.bukkit.event.entity.ItemMergeEvent. */
export const OnItemMergeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnItemMergeEvent', "org.bukkit.event.entity.ItemMergeEvent");
/** Handles org.bukkit.event.entity.ItemSpawnEvent. */
export const OnItemSpawnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnItemSpawnEvent', "org.bukkit.event.entity.ItemSpawnEvent");
/** Handles org.bukkit.event.entity.LingeringPotionSplashEvent. */
export const OnLingeringPotionSplashEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnLingeringPotionSplashEvent', "org.bukkit.event.entity.LingeringPotionSplashEvent");
/** Handles org.bukkit.event.entity.PiglinBarterEvent. */
export const OnPiglinBarterEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPiglinBarterEvent', "org.bukkit.event.entity.PiglinBarterEvent");
/** Handles org.bukkit.event.entity.PigZapEvent. */
export const OnPigZapEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPigZapEvent', "org.bukkit.event.entity.PigZapEvent");
/** Handles org.bukkit.event.entity.PigZombieAngerEvent. */
export const OnPigZombieAngerEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPigZombieAngerEvent', "org.bukkit.event.entity.PigZombieAngerEvent");
/** Handles org.bukkit.event.entity.PlayerDeathEvent. */
export const OnPlayerDeathEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerDeathEvent', "org.bukkit.event.entity.PlayerDeathEvent");
/** Handles org.bukkit.event.entity.PlayerLeashEntityEvent. */
export const OnPlayerLeashEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLeashEntityEvent', "org.bukkit.event.entity.PlayerLeashEntityEvent");
/** Handles org.bukkit.event.entity.PotionSplashEvent. */
export const OnPotionSplashEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPotionSplashEvent', "org.bukkit.event.entity.PotionSplashEvent");
/** Handles org.bukkit.event.entity.ProjectileHitEvent. */
export const OnProjectileHitEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnProjectileHitEvent', "org.bukkit.event.entity.ProjectileHitEvent");
/** Handles org.bukkit.event.entity.ProjectileLaunchEvent. */
export const OnProjectileLaunchEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnProjectileLaunchEvent', "org.bukkit.event.entity.ProjectileLaunchEvent");
/** Handles org.bukkit.event.entity.SheepDyeWoolEvent. */
export const OnSheepDyeWoolEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSheepDyeWoolEvent', "org.bukkit.event.entity.SheepDyeWoolEvent");
/** Handles org.bukkit.event.entity.SheepRegrowWoolEvent. */
export const OnSheepRegrowWoolEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSheepRegrowWoolEvent', "org.bukkit.event.entity.SheepRegrowWoolEvent");
/** Handles org.bukkit.event.entity.SlimeSplitEvent. */
export const OnSlimeSplitEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSlimeSplitEvent', "org.bukkit.event.entity.SlimeSplitEvent");
/** Handles org.bukkit.event.entity.SpawnerSpawnEvent. */
export const OnSpawnerSpawnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSpawnerSpawnEvent', "org.bukkit.event.entity.SpawnerSpawnEvent");
/** Handles org.bukkit.event.entity.StriderTemperatureChangeEvent. */
export const OnStriderTemperatureChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnStriderTemperatureChangeEvent', "org.bukkit.event.entity.StriderTemperatureChangeEvent");
/** Handles org.bukkit.event.entity.TrialSpawnerSpawnEvent. */
export const OnTrialSpawnerSpawnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnTrialSpawnerSpawnEvent', "org.bukkit.event.entity.TrialSpawnerSpawnEvent");
/** Handles org.bukkit.event.entity.VillagerAcquireTradeEvent. */
export const OnVillagerAcquireTradeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnVillagerAcquireTradeEvent', "org.bukkit.event.entity.VillagerAcquireTradeEvent");
/** Handles org.bukkit.event.entity.VillagerCareerChangeEvent. */
export const OnVillagerCareerChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnVillagerCareerChangeEvent', "org.bukkit.event.entity.VillagerCareerChangeEvent");
/** Handles org.bukkit.event.entity.VillagerReplenishTradeEvent. */
export const OnVillagerReplenishTradeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnVillagerReplenishTradeEvent', "org.bukkit.event.entity.VillagerReplenishTradeEvent");
