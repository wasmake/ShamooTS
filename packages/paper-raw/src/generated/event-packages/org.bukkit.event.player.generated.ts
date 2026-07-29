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
/** Handles org.bukkit.event.player.AsyncPlayerChatEvent. */
export const OnAsyncPlayerChatEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnAsyncPlayerChatEvent', "org.bukkit.event.player.AsyncPlayerChatEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.AsyncPlayerChatPreviewEvent. */
export const OnAsyncPlayerChatPreviewEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnAsyncPlayerChatPreviewEvent', "org.bukkit.event.player.AsyncPlayerChatPreviewEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.AsyncPlayerPreLoginEvent. */
export const OnAsyncPlayerPreLoginEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnAsyncPlayerPreLoginEvent', "org.bukkit.event.player.AsyncPlayerPreLoginEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerAdvancementDoneEvent. */
export const OnPlayerAdvancementDoneEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerAdvancementDoneEvent', "org.bukkit.event.player.PlayerAdvancementDoneEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerAnimationEvent. */
export const OnPlayerAnimationEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerAnimationEvent', "org.bukkit.event.player.PlayerAnimationEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerArmorStandManipulateEvent. */
export const OnPlayerArmorStandManipulateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerArmorStandManipulateEvent', "org.bukkit.event.player.PlayerArmorStandManipulateEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerAttemptPickupItemEvent. */
export const OnPlayerAttemptPickupItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerAttemptPickupItemEvent', "org.bukkit.event.player.PlayerAttemptPickupItemEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerBedEnterEvent. */
export const OnPlayerBedEnterEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBedEnterEvent', "org.bukkit.event.player.PlayerBedEnterEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerBedLeaveEvent. */
export const OnPlayerBedLeaveEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBedLeaveEvent', "org.bukkit.event.player.PlayerBedLeaveEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerBucketEmptyEvent. */
export const OnPlayerBucketEmptyEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBucketEmptyEvent', "org.bukkit.event.player.PlayerBucketEmptyEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerBucketEntityEvent. */
export const OnPlayerBucketEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBucketEntityEvent', "org.bukkit.event.player.PlayerBucketEntityEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerBucketFillEvent. */
export const OnPlayerBucketFillEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBucketFillEvent', "org.bukkit.event.player.PlayerBucketFillEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerBucketFishEvent. */
export const OnPlayerBucketFishEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBucketFishEvent', "org.bukkit.event.player.PlayerBucketFishEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerChangedMainHandEvent. */
export const OnPlayerChangedMainHandEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChangedMainHandEvent', "org.bukkit.event.player.PlayerChangedMainHandEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerChangedWorldEvent. */
export const OnPlayerChangedWorldEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChangedWorldEvent', "org.bukkit.event.player.PlayerChangedWorldEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerChatEvent. */
export const OnPlayerChatEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChatEvent', "org.bukkit.event.player.PlayerChatEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerChatTabCompleteEvent. */
export const OnPlayerChatTabCompleteEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChatTabCompleteEvent', "org.bukkit.event.player.PlayerChatTabCompleteEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerCommandPreprocessEvent. */
export const OnPlayerCommandPreprocessEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerCommandPreprocessEvent', "org.bukkit.event.player.PlayerCommandPreprocessEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerCommandSendEvent. */
export const OnPlayerCommandSendEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerCommandSendEvent', "org.bukkit.event.player.PlayerCommandSendEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerDropItemEvent. */
export const OnPlayerDropItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerDropItemEvent', "org.bukkit.event.player.PlayerDropItemEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerEditBookEvent. */
export const OnPlayerEditBookEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerEditBookEvent', "org.bukkit.event.player.PlayerEditBookEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerEggThrowEvent. */
export const OnPlayerEggThrowEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerEggThrowEvent', "org.bukkit.event.player.PlayerEggThrowEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerExpChangeEvent. */
export const OnPlayerExpChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerExpChangeEvent', "org.bukkit.event.player.PlayerExpChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerExpCooldownChangeEvent. */
export const OnPlayerExpCooldownChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerExpCooldownChangeEvent', "org.bukkit.event.player.PlayerExpCooldownChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerFishEvent. */
export const OnPlayerFishEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerFishEvent', "org.bukkit.event.player.PlayerFishEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerGameModeChangeEvent. */
export const OnPlayerGameModeChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerGameModeChangeEvent', "org.bukkit.event.player.PlayerGameModeChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerHarvestBlockEvent. */
export const OnPlayerHarvestBlockEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerHarvestBlockEvent', "org.bukkit.event.player.PlayerHarvestBlockEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerHideEntityEvent. */
export const OnPlayerHideEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerHideEntityEvent', "org.bukkit.event.player.PlayerHideEntityEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerInputEvent. */
export const OnPlayerInputEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerInputEvent', "org.bukkit.event.player.PlayerInputEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerInteractAtEntityEvent. */
export const OnPlayerInteractAtEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerInteractAtEntityEvent', "org.bukkit.event.player.PlayerInteractAtEntityEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerInteractEntityEvent. */
export const OnPlayerInteractEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerInteractEntityEvent', "org.bukkit.event.player.PlayerInteractEntityEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerInteractEvent. */
export const OnPlayerInteractEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerInteractEvent', "org.bukkit.event.player.PlayerInteractEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerItemBreakEvent. */
export const OnPlayerItemBreakEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemBreakEvent', "org.bukkit.event.player.PlayerItemBreakEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerItemConsumeEvent. */
export const OnPlayerItemConsumeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemConsumeEvent', "org.bukkit.event.player.PlayerItemConsumeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerItemDamageEvent. */
export const OnPlayerItemDamageEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemDamageEvent', "org.bukkit.event.player.PlayerItemDamageEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerItemHeldEvent. */
export const OnPlayerItemHeldEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemHeldEvent', "org.bukkit.event.player.PlayerItemHeldEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerItemMendEvent. */
export const OnPlayerItemMendEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemMendEvent', "org.bukkit.event.player.PlayerItemMendEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerJoinEvent. */
export const OnPlayerJoinEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerJoinEvent', "org.bukkit.event.player.PlayerJoinEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerKickEvent. */
export const OnPlayerKickEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerKickEvent', "org.bukkit.event.player.PlayerKickEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerLevelChangeEvent. */
export const OnPlayerLevelChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLevelChangeEvent', "org.bukkit.event.player.PlayerLevelChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerLinksSendEvent. */
export const OnPlayerLinksSendEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLinksSendEvent', "org.bukkit.event.player.PlayerLinksSendEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerLocaleChangeEvent. */
export const OnPlayerLocaleChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLocaleChangeEvent', "org.bukkit.event.player.PlayerLocaleChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerLoginEvent. */
export const OnPlayerLoginEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLoginEvent', "org.bukkit.event.player.PlayerLoginEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerMoveEvent. */
export const OnPlayerMoveEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerMoveEvent', "org.bukkit.event.player.PlayerMoveEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerPickupArrowEvent. */
export const OnPlayerPickupArrowEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPickupArrowEvent', "org.bukkit.event.player.PlayerPickupArrowEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerPickupItemEvent. */
export const OnPlayerPickupItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPickupItemEvent', "org.bukkit.event.player.PlayerPickupItemEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerPortalEvent. */
export const OnPlayerPortalEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPortalEvent', "org.bukkit.event.player.PlayerPortalEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerPreLoginEvent. */
export const OnPlayerPreLoginEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPreLoginEvent', "org.bukkit.event.player.PlayerPreLoginEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerQuitEvent. */
export const OnPlayerQuitEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerQuitEvent', "org.bukkit.event.player.PlayerQuitEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerRecipeBookClickEvent. */
export const OnPlayerRecipeBookClickEvent_2 = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRecipeBookClickEvent_2', "org.bukkit.event.player.PlayerRecipeBookClickEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerRecipeBookSettingsChangeEvent. */
export const OnPlayerRecipeBookSettingsChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRecipeBookSettingsChangeEvent', "org.bukkit.event.player.PlayerRecipeBookSettingsChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerRecipeDiscoverEvent. */
export const OnPlayerRecipeDiscoverEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRecipeDiscoverEvent', "org.bukkit.event.player.PlayerRecipeDiscoverEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerRegisterChannelEvent. */
export const OnPlayerRegisterChannelEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRegisterChannelEvent', "org.bukkit.event.player.PlayerRegisterChannelEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerResourcePackStatusEvent. */
export const OnPlayerResourcePackStatusEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerResourcePackStatusEvent', "org.bukkit.event.player.PlayerResourcePackStatusEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerRespawnEvent. */
export const OnPlayerRespawnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRespawnEvent', "org.bukkit.event.player.PlayerRespawnEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerRiptideEvent. */
export const OnPlayerRiptideEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRiptideEvent', "org.bukkit.event.player.PlayerRiptideEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerShearEntityEvent. */
export const OnPlayerShearEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerShearEntityEvent', "org.bukkit.event.player.PlayerShearEntityEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerShowEntityEvent. */
export const OnPlayerShowEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerShowEntityEvent', "org.bukkit.event.player.PlayerShowEntityEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerSignOpenEvent. */
export const OnPlayerSignOpenEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerSignOpenEvent', "org.bukkit.event.player.PlayerSignOpenEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerSpawnChangeEvent. */
export const OnPlayerSpawnChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerSpawnChangeEvent', "org.bukkit.event.player.PlayerSpawnChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerStatisticIncrementEvent. */
export const OnPlayerStatisticIncrementEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerStatisticIncrementEvent', "org.bukkit.event.player.PlayerStatisticIncrementEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerSwapHandItemsEvent. */
export const OnPlayerSwapHandItemsEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerSwapHandItemsEvent', "org.bukkit.event.player.PlayerSwapHandItemsEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerTakeLecternBookEvent. */
export const OnPlayerTakeLecternBookEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerTakeLecternBookEvent', "org.bukkit.event.player.PlayerTakeLecternBookEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerTeleportEvent. */
export const OnPlayerTeleportEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerTeleportEvent', "org.bukkit.event.player.PlayerTeleportEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerToggleFlightEvent. */
export const OnPlayerToggleFlightEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerToggleFlightEvent', "org.bukkit.event.player.PlayerToggleFlightEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerToggleSneakEvent. */
export const OnPlayerToggleSneakEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerToggleSneakEvent', "org.bukkit.event.player.PlayerToggleSneakEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerToggleSprintEvent. */
export const OnPlayerToggleSprintEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerToggleSprintEvent', "org.bukkit.event.player.PlayerToggleSprintEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerUnleashEntityEvent. */
export const OnPlayerUnleashEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerUnleashEntityEvent', "org.bukkit.event.player.PlayerUnleashEntityEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerUnregisterChannelEvent. */
export const OnPlayerUnregisterChannelEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerUnregisterChannelEvent', "org.bukkit.event.player.PlayerUnregisterChannelEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.player.PlayerVelocityEvent. */
export const OnPlayerVelocityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerVelocityEvent', "org.bukkit.event.player.PlayerVelocityEvent", priority, receiveCancelled);
