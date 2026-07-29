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
/** Handles org.bukkit.event.entity.AreaEffectCloudApplyEvent. */
export const OnAreaEffectCloudApplyEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnAreaEffectCloudApplyEvent', "org.bukkit.event.entity.AreaEffectCloudApplyEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.ArrowBodyCountChangeEvent. */
export const OnArrowBodyCountChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnArrowBodyCountChangeEvent', "org.bukkit.event.entity.ArrowBodyCountChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.BatToggleSleepEvent. */
export const OnBatToggleSleepEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBatToggleSleepEvent', "org.bukkit.event.entity.BatToggleSleepEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.CreatureSpawnEvent. */
export const OnCreatureSpawnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnCreatureSpawnEvent', "org.bukkit.event.entity.CreatureSpawnEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.CreeperPowerEvent. */
export const OnCreeperPowerEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnCreeperPowerEvent', "org.bukkit.event.entity.CreeperPowerEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EnderDragonChangePhaseEvent. */
export const OnEnderDragonChangePhaseEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEnderDragonChangePhaseEvent', "org.bukkit.event.entity.EnderDragonChangePhaseEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityAirChangeEvent. */
export const OnEntityAirChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityAirChangeEvent', "org.bukkit.event.entity.EntityAirChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityBreakDoorEvent. */
export const OnEntityBreakDoorEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityBreakDoorEvent', "org.bukkit.event.entity.EntityBreakDoorEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityBreedEvent. */
export const OnEntityBreedEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityBreedEvent', "org.bukkit.event.entity.EntityBreedEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityChangeBlockEvent. */
export const OnEntityChangeBlockEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityChangeBlockEvent', "org.bukkit.event.entity.EntityChangeBlockEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityCombustByBlockEvent. */
export const OnEntityCombustByBlockEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityCombustByBlockEvent', "org.bukkit.event.entity.EntityCombustByBlockEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityCombustByEntityEvent. */
export const OnEntityCombustByEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityCombustByEntityEvent', "org.bukkit.event.entity.EntityCombustByEntityEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityCombustEvent. */
export const OnEntityCombustEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityCombustEvent', "org.bukkit.event.entity.EntityCombustEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityCreatePortalEvent. */
export const OnEntityCreatePortalEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityCreatePortalEvent', "org.bukkit.event.entity.EntityCreatePortalEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityDamageByBlockEvent. */
export const OnEntityDamageByBlockEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityDamageByBlockEvent', "org.bukkit.event.entity.EntityDamageByBlockEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityDamageByEntityEvent. */
export const OnEntityDamageByEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityDamageByEntityEvent', "org.bukkit.event.entity.EntityDamageByEntityEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityDamageEvent. */
export const OnEntityDamageEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityDamageEvent', "org.bukkit.event.entity.EntityDamageEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityDeathEvent. */
export const OnEntityDeathEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityDeathEvent', "org.bukkit.event.entity.EntityDeathEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityDismountEvent. */
export const OnEntityDismountEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityDismountEvent', "org.bukkit.event.entity.EntityDismountEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityDropItemEvent. */
export const OnEntityDropItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityDropItemEvent', "org.bukkit.event.entity.EntityDropItemEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityEnterBlockEvent. */
export const OnEntityEnterBlockEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityEnterBlockEvent', "org.bukkit.event.entity.EntityEnterBlockEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityEnterLoveModeEvent. */
export const OnEntityEnterLoveModeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityEnterLoveModeEvent', "org.bukkit.event.entity.EntityEnterLoveModeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityExhaustionEvent. */
export const OnEntityExhaustionEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityExhaustionEvent', "org.bukkit.event.entity.EntityExhaustionEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityExplodeEvent. */
export const OnEntityExplodeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityExplodeEvent', "org.bukkit.event.entity.EntityExplodeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityInteractEvent. */
export const OnEntityInteractEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityInteractEvent', "org.bukkit.event.entity.EntityInteractEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityKnockbackByEntityEvent. */
export const OnEntityKnockbackByEntityEvent_2 = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityKnockbackByEntityEvent_2', "org.bukkit.event.entity.EntityKnockbackByEntityEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityKnockbackEvent. */
export const OnEntityKnockbackEvent_2 = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityKnockbackEvent_2', "org.bukkit.event.entity.EntityKnockbackEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityMountEvent. */
export const OnEntityMountEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityMountEvent', "org.bukkit.event.entity.EntityMountEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityPickupItemEvent. */
export const OnEntityPickupItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityPickupItemEvent', "org.bukkit.event.entity.EntityPickupItemEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityPlaceEvent. */
export const OnEntityPlaceEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityPlaceEvent', "org.bukkit.event.entity.EntityPlaceEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityPortalEnterEvent. */
export const OnEntityPortalEnterEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityPortalEnterEvent', "org.bukkit.event.entity.EntityPortalEnterEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityPortalEvent. */
export const OnEntityPortalEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityPortalEvent', "org.bukkit.event.entity.EntityPortalEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityPortalExitEvent. */
export const OnEntityPortalExitEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityPortalExitEvent', "org.bukkit.event.entity.EntityPortalExitEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityPoseChangeEvent. */
export const OnEntityPoseChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityPoseChangeEvent', "org.bukkit.event.entity.EntityPoseChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityPotionEffectEvent. */
export const OnEntityPotionEffectEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityPotionEffectEvent', "org.bukkit.event.entity.EntityPotionEffectEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityRegainHealthEvent. */
export const OnEntityRegainHealthEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityRegainHealthEvent', "org.bukkit.event.entity.EntityRegainHealthEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityRemoveEvent. */
export const OnEntityRemoveEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityRemoveEvent', "org.bukkit.event.entity.EntityRemoveEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityResurrectEvent. */
export const OnEntityResurrectEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityResurrectEvent', "org.bukkit.event.entity.EntityResurrectEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityShootBowEvent. */
export const OnEntityShootBowEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityShootBowEvent', "org.bukkit.event.entity.EntityShootBowEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntitySpawnEvent. */
export const OnEntitySpawnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntitySpawnEvent', "org.bukkit.event.entity.EntitySpawnEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntitySpellCastEvent. */
export const OnEntitySpellCastEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntitySpellCastEvent', "org.bukkit.event.entity.EntitySpellCastEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityTameEvent. */
export const OnEntityTameEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityTameEvent', "org.bukkit.event.entity.EntityTameEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityTargetEvent. */
export const OnEntityTargetEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityTargetEvent', "org.bukkit.event.entity.EntityTargetEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityTargetLivingEntityEvent. */
export const OnEntityTargetLivingEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityTargetLivingEntityEvent', "org.bukkit.event.entity.EntityTargetLivingEntityEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityTeleportEvent. */
export const OnEntityTeleportEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityTeleportEvent', "org.bukkit.event.entity.EntityTeleportEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityToggleGlideEvent. */
export const OnEntityToggleGlideEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityToggleGlideEvent', "org.bukkit.event.entity.EntityToggleGlideEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityToggleSwimEvent. */
export const OnEntityToggleSwimEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityToggleSwimEvent', "org.bukkit.event.entity.EntityToggleSwimEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityTransformEvent. */
export const OnEntityTransformEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityTransformEvent', "org.bukkit.event.entity.EntityTransformEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.EntityUnleashEvent. */
export const OnEntityUnleashEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityUnleashEvent', "org.bukkit.event.entity.EntityUnleashEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.ExpBottleEvent. */
export const OnExpBottleEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnExpBottleEvent', "org.bukkit.event.entity.ExpBottleEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.ExplosionPrimeEvent. */
export const OnExplosionPrimeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnExplosionPrimeEvent', "org.bukkit.event.entity.ExplosionPrimeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.FireworkExplodeEvent. */
export const OnFireworkExplodeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnFireworkExplodeEvent', "org.bukkit.event.entity.FireworkExplodeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.FoodLevelChangeEvent. */
export const OnFoodLevelChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnFoodLevelChangeEvent', "org.bukkit.event.entity.FoodLevelChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.HorseJumpEvent. */
export const OnHorseJumpEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnHorseJumpEvent', "org.bukkit.event.entity.HorseJumpEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.ItemDespawnEvent. */
export const OnItemDespawnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnItemDespawnEvent', "org.bukkit.event.entity.ItemDespawnEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.ItemMergeEvent. */
export const OnItemMergeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnItemMergeEvent', "org.bukkit.event.entity.ItemMergeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.ItemSpawnEvent. */
export const OnItemSpawnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnItemSpawnEvent', "org.bukkit.event.entity.ItemSpawnEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.LingeringPotionSplashEvent. */
export const OnLingeringPotionSplashEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnLingeringPotionSplashEvent', "org.bukkit.event.entity.LingeringPotionSplashEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.PiglinBarterEvent. */
export const OnPiglinBarterEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPiglinBarterEvent', "org.bukkit.event.entity.PiglinBarterEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.PigZapEvent. */
export const OnPigZapEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPigZapEvent', "org.bukkit.event.entity.PigZapEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.PigZombieAngerEvent. */
export const OnPigZombieAngerEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPigZombieAngerEvent', "org.bukkit.event.entity.PigZombieAngerEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.PlayerDeathEvent. */
export const OnPlayerDeathEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerDeathEvent', "org.bukkit.event.entity.PlayerDeathEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.PlayerLeashEntityEvent. */
export const OnPlayerLeashEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLeashEntityEvent', "org.bukkit.event.entity.PlayerLeashEntityEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.PotionSplashEvent. */
export const OnPotionSplashEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPotionSplashEvent', "org.bukkit.event.entity.PotionSplashEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.ProjectileHitEvent. */
export const OnProjectileHitEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnProjectileHitEvent', "org.bukkit.event.entity.ProjectileHitEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.ProjectileLaunchEvent. */
export const OnProjectileLaunchEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnProjectileLaunchEvent', "org.bukkit.event.entity.ProjectileLaunchEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.SheepDyeWoolEvent. */
export const OnSheepDyeWoolEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSheepDyeWoolEvent', "org.bukkit.event.entity.SheepDyeWoolEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.SheepRegrowWoolEvent. */
export const OnSheepRegrowWoolEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSheepRegrowWoolEvent', "org.bukkit.event.entity.SheepRegrowWoolEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.SlimeSplitEvent. */
export const OnSlimeSplitEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSlimeSplitEvent', "org.bukkit.event.entity.SlimeSplitEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.SpawnerSpawnEvent. */
export const OnSpawnerSpawnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSpawnerSpawnEvent', "org.bukkit.event.entity.SpawnerSpawnEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.StriderTemperatureChangeEvent. */
export const OnStriderTemperatureChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnStriderTemperatureChangeEvent', "org.bukkit.event.entity.StriderTemperatureChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.TrialSpawnerSpawnEvent. */
export const OnTrialSpawnerSpawnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnTrialSpawnerSpawnEvent', "org.bukkit.event.entity.TrialSpawnerSpawnEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.VillagerAcquireTradeEvent. */
export const OnVillagerAcquireTradeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVillagerAcquireTradeEvent', "org.bukkit.event.entity.VillagerAcquireTradeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.VillagerCareerChangeEvent. */
export const OnVillagerCareerChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVillagerCareerChangeEvent', "org.bukkit.event.entity.VillagerCareerChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.entity.VillagerReplenishTradeEvent. */
export const OnVillagerReplenishTradeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVillagerReplenishTradeEvent', "org.bukkit.event.entity.VillagerReplenishTradeEvent", priority, receiveCancelled);
