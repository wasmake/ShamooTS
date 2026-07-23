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
/** Handles org.bukkit.event.player.AsyncPlayerChatEvent. */
export const OnAsyncPlayerChatEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnAsyncPlayerChatEvent', "org.bukkit.event.player.AsyncPlayerChatEvent");
/** Handles org.bukkit.event.player.AsyncPlayerChatPreviewEvent. */
export const OnAsyncPlayerChatPreviewEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnAsyncPlayerChatPreviewEvent', "org.bukkit.event.player.AsyncPlayerChatPreviewEvent");
/** Handles org.bukkit.event.player.AsyncPlayerPreLoginEvent. */
export const OnAsyncPlayerPreLoginEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnAsyncPlayerPreLoginEvent', "org.bukkit.event.player.AsyncPlayerPreLoginEvent");
/** Handles org.bukkit.event.player.PlayerAdvancementDoneEvent. */
export const OnPlayerAdvancementDoneEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerAdvancementDoneEvent', "org.bukkit.event.player.PlayerAdvancementDoneEvent");
/** Handles org.bukkit.event.player.PlayerAnimationEvent. */
export const OnPlayerAnimationEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerAnimationEvent', "org.bukkit.event.player.PlayerAnimationEvent");
/** Handles org.bukkit.event.player.PlayerArmorStandManipulateEvent. */
export const OnPlayerArmorStandManipulateEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerArmorStandManipulateEvent', "org.bukkit.event.player.PlayerArmorStandManipulateEvent");
/** Handles org.bukkit.event.player.PlayerAttemptPickupItemEvent. */
export const OnPlayerAttemptPickupItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerAttemptPickupItemEvent', "org.bukkit.event.player.PlayerAttemptPickupItemEvent");
/** Handles org.bukkit.event.player.PlayerBedEnterEvent. */
export const OnPlayerBedEnterEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBedEnterEvent', "org.bukkit.event.player.PlayerBedEnterEvent");
/** Handles org.bukkit.event.player.PlayerBedLeaveEvent. */
export const OnPlayerBedLeaveEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBedLeaveEvent', "org.bukkit.event.player.PlayerBedLeaveEvent");
/** Handles org.bukkit.event.player.PlayerBucketEmptyEvent. */
export const OnPlayerBucketEmptyEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBucketEmptyEvent', "org.bukkit.event.player.PlayerBucketEmptyEvent");
/** Handles org.bukkit.event.player.PlayerBucketEntityEvent. */
export const OnPlayerBucketEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBucketEntityEvent', "org.bukkit.event.player.PlayerBucketEntityEvent");
/** Handles org.bukkit.event.player.PlayerBucketFillEvent. */
export const OnPlayerBucketFillEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBucketFillEvent', "org.bukkit.event.player.PlayerBucketFillEvent");
/** Handles org.bukkit.event.player.PlayerBucketFishEvent. */
export const OnPlayerBucketFishEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBucketFishEvent', "org.bukkit.event.player.PlayerBucketFishEvent");
/** Handles org.bukkit.event.player.PlayerChangedMainHandEvent. */
export const OnPlayerChangedMainHandEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChangedMainHandEvent', "org.bukkit.event.player.PlayerChangedMainHandEvent");
/** Handles org.bukkit.event.player.PlayerChangedWorldEvent. */
export const OnPlayerChangedWorldEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChangedWorldEvent', "org.bukkit.event.player.PlayerChangedWorldEvent");
/** Handles org.bukkit.event.player.PlayerChatEvent. */
export const OnPlayerChatEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChatEvent', "org.bukkit.event.player.PlayerChatEvent");
/** Handles org.bukkit.event.player.PlayerChatTabCompleteEvent. */
export const OnPlayerChatTabCompleteEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChatTabCompleteEvent', "org.bukkit.event.player.PlayerChatTabCompleteEvent");
/** Handles org.bukkit.event.player.PlayerCommandPreprocessEvent. */
export const OnPlayerCommandPreprocessEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerCommandPreprocessEvent', "org.bukkit.event.player.PlayerCommandPreprocessEvent");
/** Handles org.bukkit.event.player.PlayerCommandSendEvent. */
export const OnPlayerCommandSendEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerCommandSendEvent', "org.bukkit.event.player.PlayerCommandSendEvent");
/** Handles org.bukkit.event.player.PlayerDropItemEvent. */
export const OnPlayerDropItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerDropItemEvent', "org.bukkit.event.player.PlayerDropItemEvent");
/** Handles org.bukkit.event.player.PlayerEditBookEvent. */
export const OnPlayerEditBookEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerEditBookEvent', "org.bukkit.event.player.PlayerEditBookEvent");
/** Handles org.bukkit.event.player.PlayerEggThrowEvent. */
export const OnPlayerEggThrowEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerEggThrowEvent', "org.bukkit.event.player.PlayerEggThrowEvent");
/** Handles org.bukkit.event.player.PlayerExpChangeEvent. */
export const OnPlayerExpChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerExpChangeEvent', "org.bukkit.event.player.PlayerExpChangeEvent");
/** Handles org.bukkit.event.player.PlayerExpCooldownChangeEvent. */
export const OnPlayerExpCooldownChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerExpCooldownChangeEvent', "org.bukkit.event.player.PlayerExpCooldownChangeEvent");
/** Handles org.bukkit.event.player.PlayerFishEvent. */
export const OnPlayerFishEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerFishEvent', "org.bukkit.event.player.PlayerFishEvent");
/** Handles org.bukkit.event.player.PlayerGameModeChangeEvent. */
export const OnPlayerGameModeChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerGameModeChangeEvent', "org.bukkit.event.player.PlayerGameModeChangeEvent");
/** Handles org.bukkit.event.player.PlayerHarvestBlockEvent. */
export const OnPlayerHarvestBlockEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerHarvestBlockEvent', "org.bukkit.event.player.PlayerHarvestBlockEvent");
/** Handles org.bukkit.event.player.PlayerHideEntityEvent. */
export const OnPlayerHideEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerHideEntityEvent', "org.bukkit.event.player.PlayerHideEntityEvent");
/** Handles org.bukkit.event.player.PlayerInputEvent. */
export const OnPlayerInputEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerInputEvent', "org.bukkit.event.player.PlayerInputEvent");
/** Handles org.bukkit.event.player.PlayerInteractAtEntityEvent. */
export const OnPlayerInteractAtEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerInteractAtEntityEvent', "org.bukkit.event.player.PlayerInteractAtEntityEvent");
/** Handles org.bukkit.event.player.PlayerInteractEntityEvent. */
export const OnPlayerInteractEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerInteractEntityEvent', "org.bukkit.event.player.PlayerInteractEntityEvent");
/** Handles org.bukkit.event.player.PlayerInteractEvent. */
export const OnPlayerInteractEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerInteractEvent', "org.bukkit.event.player.PlayerInteractEvent");
/** Handles org.bukkit.event.player.PlayerItemBreakEvent. */
export const OnPlayerItemBreakEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemBreakEvent', "org.bukkit.event.player.PlayerItemBreakEvent");
/** Handles org.bukkit.event.player.PlayerItemConsumeEvent. */
export const OnPlayerItemConsumeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemConsumeEvent', "org.bukkit.event.player.PlayerItemConsumeEvent");
/** Handles org.bukkit.event.player.PlayerItemDamageEvent. */
export const OnPlayerItemDamageEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemDamageEvent', "org.bukkit.event.player.PlayerItemDamageEvent");
/** Handles org.bukkit.event.player.PlayerItemHeldEvent. */
export const OnPlayerItemHeldEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemHeldEvent', "org.bukkit.event.player.PlayerItemHeldEvent");
/** Handles org.bukkit.event.player.PlayerItemMendEvent. */
export const OnPlayerItemMendEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemMendEvent', "org.bukkit.event.player.PlayerItemMendEvent");
/** Handles org.bukkit.event.player.PlayerJoinEvent. */
export const OnPlayerJoinEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerJoinEvent', "org.bukkit.event.player.PlayerJoinEvent");
/** Handles org.bukkit.event.player.PlayerKickEvent. */
export const OnPlayerKickEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerKickEvent', "org.bukkit.event.player.PlayerKickEvent");
/** Handles org.bukkit.event.player.PlayerLevelChangeEvent. */
export const OnPlayerLevelChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLevelChangeEvent', "org.bukkit.event.player.PlayerLevelChangeEvent");
/** Handles org.bukkit.event.player.PlayerLinksSendEvent. */
export const OnPlayerLinksSendEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLinksSendEvent', "org.bukkit.event.player.PlayerLinksSendEvent");
/** Handles org.bukkit.event.player.PlayerLocaleChangeEvent. */
export const OnPlayerLocaleChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLocaleChangeEvent', "org.bukkit.event.player.PlayerLocaleChangeEvent");
/** Handles org.bukkit.event.player.PlayerLoginEvent. */
export const OnPlayerLoginEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLoginEvent', "org.bukkit.event.player.PlayerLoginEvent");
/** Handles org.bukkit.event.player.PlayerMoveEvent. */
export const OnPlayerMoveEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerMoveEvent', "org.bukkit.event.player.PlayerMoveEvent");
/** Handles org.bukkit.event.player.PlayerPickupArrowEvent. */
export const OnPlayerPickupArrowEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPickupArrowEvent', "org.bukkit.event.player.PlayerPickupArrowEvent");
/** Handles org.bukkit.event.player.PlayerPickupItemEvent. */
export const OnPlayerPickupItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPickupItemEvent', "org.bukkit.event.player.PlayerPickupItemEvent");
/** Handles org.bukkit.event.player.PlayerPortalEvent. */
export const OnPlayerPortalEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPortalEvent', "org.bukkit.event.player.PlayerPortalEvent");
/** Handles org.bukkit.event.player.PlayerPreLoginEvent. */
export const OnPlayerPreLoginEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPreLoginEvent', "org.bukkit.event.player.PlayerPreLoginEvent");
/** Handles org.bukkit.event.player.PlayerQuitEvent. */
export const OnPlayerQuitEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerQuitEvent', "org.bukkit.event.player.PlayerQuitEvent");
/** Handles org.bukkit.event.player.PlayerRecipeBookClickEvent. */
export const OnPlayerRecipeBookClickEvent_2 = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRecipeBookClickEvent_2', "org.bukkit.event.player.PlayerRecipeBookClickEvent");
/** Handles org.bukkit.event.player.PlayerRecipeBookSettingsChangeEvent. */
export const OnPlayerRecipeBookSettingsChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRecipeBookSettingsChangeEvent', "org.bukkit.event.player.PlayerRecipeBookSettingsChangeEvent");
/** Handles org.bukkit.event.player.PlayerRecipeDiscoverEvent. */
export const OnPlayerRecipeDiscoverEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRecipeDiscoverEvent', "org.bukkit.event.player.PlayerRecipeDiscoverEvent");
/** Handles org.bukkit.event.player.PlayerRegisterChannelEvent. */
export const OnPlayerRegisterChannelEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRegisterChannelEvent', "org.bukkit.event.player.PlayerRegisterChannelEvent");
/** Handles org.bukkit.event.player.PlayerResourcePackStatusEvent. */
export const OnPlayerResourcePackStatusEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerResourcePackStatusEvent', "org.bukkit.event.player.PlayerResourcePackStatusEvent");
/** Handles org.bukkit.event.player.PlayerRespawnEvent. */
export const OnPlayerRespawnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRespawnEvent', "org.bukkit.event.player.PlayerRespawnEvent");
/** Handles org.bukkit.event.player.PlayerRiptideEvent. */
export const OnPlayerRiptideEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerRiptideEvent', "org.bukkit.event.player.PlayerRiptideEvent");
/** Handles org.bukkit.event.player.PlayerShearEntityEvent. */
export const OnPlayerShearEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerShearEntityEvent', "org.bukkit.event.player.PlayerShearEntityEvent");
/** Handles org.bukkit.event.player.PlayerShowEntityEvent. */
export const OnPlayerShowEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerShowEntityEvent', "org.bukkit.event.player.PlayerShowEntityEvent");
/** Handles org.bukkit.event.player.PlayerSignOpenEvent. */
export const OnPlayerSignOpenEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerSignOpenEvent', "org.bukkit.event.player.PlayerSignOpenEvent");
/** Handles org.bukkit.event.player.PlayerSpawnChangeEvent. */
export const OnPlayerSpawnChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerSpawnChangeEvent', "org.bukkit.event.player.PlayerSpawnChangeEvent");
/** Handles org.bukkit.event.player.PlayerStatisticIncrementEvent. */
export const OnPlayerStatisticIncrementEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerStatisticIncrementEvent', "org.bukkit.event.player.PlayerStatisticIncrementEvent");
/** Handles org.bukkit.event.player.PlayerSwapHandItemsEvent. */
export const OnPlayerSwapHandItemsEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerSwapHandItemsEvent', "org.bukkit.event.player.PlayerSwapHandItemsEvent");
/** Handles org.bukkit.event.player.PlayerTakeLecternBookEvent. */
export const OnPlayerTakeLecternBookEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerTakeLecternBookEvent', "org.bukkit.event.player.PlayerTakeLecternBookEvent");
/** Handles org.bukkit.event.player.PlayerTeleportEvent. */
export const OnPlayerTeleportEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerTeleportEvent', "org.bukkit.event.player.PlayerTeleportEvent");
/** Handles org.bukkit.event.player.PlayerToggleFlightEvent. */
export const OnPlayerToggleFlightEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerToggleFlightEvent', "org.bukkit.event.player.PlayerToggleFlightEvent");
/** Handles org.bukkit.event.player.PlayerToggleSneakEvent. */
export const OnPlayerToggleSneakEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerToggleSneakEvent', "org.bukkit.event.player.PlayerToggleSneakEvent");
/** Handles org.bukkit.event.player.PlayerToggleSprintEvent. */
export const OnPlayerToggleSprintEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerToggleSprintEvent', "org.bukkit.event.player.PlayerToggleSprintEvent");
/** Handles org.bukkit.event.player.PlayerUnleashEntityEvent. */
export const OnPlayerUnleashEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerUnleashEntityEvent', "org.bukkit.event.player.PlayerUnleashEntityEvent");
/** Handles org.bukkit.event.player.PlayerUnregisterChannelEvent. */
export const OnPlayerUnregisterChannelEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerUnregisterChannelEvent', "org.bukkit.event.player.PlayerUnregisterChannelEvent");
/** Handles org.bukkit.event.player.PlayerVelocityEvent. */
export const OnPlayerVelocityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerVelocityEvent', "org.bukkit.event.player.PlayerVelocityEvent");
