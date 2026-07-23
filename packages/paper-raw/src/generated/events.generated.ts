// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
export * from './event-packages/com.destroystokyo.paper.event.block.generated.js';
export * from './event-packages/com.destroystokyo.paper.event.brigadier.generated.js';
export * from './event-packages/com.destroystokyo.paper.event.entity.generated.js';
export * from './event-packages/com.destroystokyo.paper.event.inventory.generated.js';
export * from './event-packages/com.destroystokyo.paper.event.player.generated.js';
export * from './event-packages/com.destroystokyo.paper.event.profile.generated.js';
export * from './event-packages/com.destroystokyo.paper.event.server.generated.js';
export * from './event-packages/com.destroystokyo.paper.loottable.generated.js';
export * from './event-packages/io.papermc.paper.event.block.generated.js';
export * from './event-packages/io.papermc.paper.event.connection.generated.js';
export * from './event-packages/io.papermc.paper.event.connection.configuration.generated.js';
export * from './event-packages/io.papermc.paper.event.entity.generated.js';
export * from './event-packages/io.papermc.paper.event.packet.generated.js';
export * from './event-packages/io.papermc.paper.event.player.generated.js';
export * from './event-packages/io.papermc.paper.event.server.generated.js';
export * from './event-packages/io.papermc.paper.event.world.generated.js';
export * from './event-packages/io.papermc.paper.event.world.border.generated.js';
export * from './event-packages/io.papermc.paper.threadedregions.generated.js';
export * from './event-packages/org.bukkit.event.block.generated.js';
export * from './event-packages/org.bukkit.event.command.generated.js';
export * from './event-packages/org.bukkit.event.enchantment.generated.js';
export * from './event-packages/org.bukkit.event.entity.generated.js';
export * from './event-packages/org.bukkit.event.hanging.generated.js';
export * from './event-packages/org.bukkit.event.inventory.generated.js';
export * from './event-packages/org.bukkit.event.player.generated.js';
export * from './event-packages/org.bukkit.event.raid.generated.js';
export * from './event-packages/org.bukkit.event.server.generated.js';
export * from './event-packages/org.bukkit.event.vehicle.generated.js';
export * from './event-packages/org.bukkit.event.weather.generated.js';
export * from './event-packages/org.bukkit.event.world.generated.js';
export const EVENT_TYPES = {
  "com.destroystokyo.paper.event.block.AnvilDamagedEvent": {
    "type": "AnvilDamagedEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.block.BeaconEffectEvent": {
    "type": "BeaconEffectEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.block.BlockDestroyEvent": {
    "type": "BlockDestroyEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.block.TNTPrimeEvent": {
    "type": "TNTPrimeEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.brigadier.AsyncPlayerSendCommandsEvent": {
    "type": "AsyncPlayerSendCommandsEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.brigadier.AsyncPlayerSendSuggestionsEvent": {
    "type": "AsyncPlayerSendSuggestionsEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.brigadier.CommandRegisteredEvent": {
    "type": "CommandRegisteredEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.CreeperIgniteEvent": {
    "type": "CreeperIgniteEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.EnderDragonFireballHitEvent": {
    "type": "EnderDragonFireballHitEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.EnderDragonFlameEvent": {
    "type": "EnderDragonFlameEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.EnderDragonShootFireballEvent": {
    "type": "EnderDragonShootFireballEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.EndermanAttackPlayerEvent": {
    "type": "EndermanAttackPlayerEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.EndermanEscapeEvent": {
    "type": "EndermanEscapeEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.EntityAddToWorldEvent": {
    "type": "EntityAddToWorldEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.entity.EntityJumpEvent": {
    "type": "EntityJumpEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.EntityKnockbackByEntityEvent": {
    "type": "EntityKnockbackByEntityEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.EntityPathfindEvent": {
    "type": "EntityPathfindEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.EntityRemoveFromWorldEvent": {
    "type": "EntityRemoveFromWorldEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.entity.EntityTeleportEndGatewayEvent": {
    "type": "EntityTeleportEndGatewayEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.EntityZapEvent": {
    "type": "EntityZapEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.ExperienceOrbMergeEvent": {
    "type": "ExperienceOrbMergeEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.PhantomPreSpawnEvent": {
    "type": "PhantomPreSpawnEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.PlayerNaturallySpawnCreaturesEvent": {
    "type": "PlayerNaturallySpawnCreaturesEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.PreCreatureSpawnEvent": {
    "type": "PreCreatureSpawnEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.PreSpawnerSpawnEvent": {
    "type": "PreSpawnerSpawnEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.ProjectileCollideEvent": {
    "type": "ProjectileCollideEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.SkeletonHorseTrapEvent": {
    "type": "SkeletonHorseTrapEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.SlimeChangeDirectionEvent": {
    "type": "SlimeChangeDirectionEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.SlimePathfindEvent": {
    "type": "SlimePathfindEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.SlimeSwimEvent": {
    "type": "SlimeSwimEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.SlimeTargetLivingEntityEvent": {
    "type": "SlimeTargetLivingEntityEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.SlimeWanderEvent": {
    "type": "SlimeWanderEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.ThrownEggHatchEvent": {
    "type": "ThrownEggHatchEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.entity.TurtleGoHomeEvent": {
    "type": "TurtleGoHomeEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.TurtleLayEggEvent": {
    "type": "TurtleLayEggEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.TurtleStartDiggingEvent": {
    "type": "TurtleStartDiggingEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.WitchConsumePotionEvent": {
    "type": "WitchConsumePotionEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.WitchReadyPotionEvent": {
    "type": "WitchReadyPotionEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.entity.WitchThrowPotionEvent": {
    "type": "WitchThrowPotionEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.inventory.PrepareGrindstoneEvent": {
    "type": "PrepareGrindstoneEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.inventory.PrepareResultEvent": {
    "type": "PrepareResultEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.player.IllegalPacketEvent": {
    "type": "IllegalPacketEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.player.PlayerAdvancementCriterionGrantEvent": {
    "type": "PlayerAdvancementCriterionGrantEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.player.PlayerArmorChangeEvent": {
    "type": "PlayerArmorChangeEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.player.PlayerAttackEntityCooldownResetEvent": {
    "type": "PlayerAttackEntityCooldownResetEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.player.PlayerClientOptionsChangeEvent": {
    "type": "PlayerClientOptionsChangeEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.player.PlayerConnectionCloseEvent": {
    "type": "PlayerConnectionCloseEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.player.PlayerElytraBoostEvent": {
    "type": "PlayerElytraBoostEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.player.PlayerHandshakeEvent": {
    "type": "PlayerHandshakeEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.player.PlayerJumpEvent": {
    "type": "PlayerJumpEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.player.PlayerLaunchProjectileEvent": {
    "type": "PlayerLaunchProjectileEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.player.PlayerPickupExperienceEvent": {
    "type": "PlayerPickupExperienceEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.player.PlayerPostRespawnEvent": {
    "type": "PlayerPostRespawnEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.player.PlayerReadyArrowEvent": {
    "type": "PlayerReadyArrowEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.player.PlayerRecipeBookClickEvent": {
    "type": "PlayerRecipeBookClickEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.player.PlayerSetSpawnEvent": {
    "type": "PlayerSetSpawnEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.player.PlayerStartSpectatingEntityEvent": {
    "type": "PlayerStartSpectatingEntityEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.player.PlayerStopSpectatingEntityEvent": {
    "type": "PlayerStopSpectatingEntityEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.player.PlayerTeleportEndGatewayEvent": {
    "type": "PlayerTeleportEndGatewayEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.player.PlayerUseUnknownEntityEvent": {
    "type": "PlayerUseUnknownEntityEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.profile.FillProfileEvent": {
    "type": "FillProfileEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.profile.LookupProfileEvent": {
    "type": "LookupProfileEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.profile.PreFillProfileEvent": {
    "type": "PreFillProfileEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.profile.PreLookupProfileEvent": {
    "type": "PreLookupProfileEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.profile.ProfileWhitelistVerifyEvent": {
    "type": "ProfileWhitelistVerifyEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.server.AsyncTabCompleteEvent": {
    "type": "AsyncTabCompleteEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.server.GS4QueryEvent": {
    "type": "GS4QueryEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.server.PaperServerListPingEvent": {
    "type": "PaperServerListPingEvent",
    "cancellable": true
  },
  "com.destroystokyo.paper.event.server.ServerExceptionEvent": {
    "type": "ServerExceptionEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.server.ServerTickEndEvent": {
    "type": "ServerTickEndEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.server.ServerTickStartEvent": {
    "type": "ServerTickStartEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.event.server.WhitelistToggleEvent": {
    "type": "WhitelistToggleEvent",
    "cancellable": false
  },
  "com.destroystokyo.paper.loottable.LootableInventoryReplenishEvent": {
    "type": "LootableInventoryReplenishEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.block.BeaconActivatedEvent": {
    "type": "BeaconActivatedEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.block.BeaconDeactivatedEvent": {
    "type": "BeaconDeactivatedEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.block.BellRevealRaiderEvent": {
    "type": "BellRevealRaiderEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.block.BellRingEvent": {
    "type": "BellRingEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.block.BlockBreakBlockEvent": {
    "type": "BlockBreakBlockEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.block.BlockBreakProgressUpdateEvent": {
    "type": "BlockBreakProgressUpdateEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.block.BlockFailedDispenseEvent": {
    "type": "BlockFailedDispenseEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.block.BlockLockCheckEvent": {
    "type": "BlockLockCheckEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.block.BlockPreDispenseEvent": {
    "type": "BlockPreDispenseEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.block.CompostItemEvent": {
    "type": "CompostItemEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.block.DragonEggFormEvent": {
    "type": "DragonEggFormEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.block.PlayerShearBlockEvent": {
    "type": "PlayerShearBlockEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.block.TargetHitEvent": {
    "type": "TargetHitEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.block.VaultChangeStateEvent": {
    "type": "VaultChangeStateEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.connection.configuration.AsyncPlayerConnectionConfigureEvent": {
    "type": "AsyncPlayerConnectionConfigureEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.connection.configuration.PlayerConnectionInitialConfigureEvent": {
    "type": "PlayerConnectionInitialConfigureEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.connection.configuration.PlayerConnectionReconfigureEvent": {
    "type": "PlayerConnectionReconfigureEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.connection.PlayerConnectionValidateLoginEvent": {
    "type": "PlayerConnectionValidateLoginEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.entity.ElderGuardianAppearanceEvent": {
    "type": "ElderGuardianAppearanceEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.EntityAttemptSmashAttackEvent": {
    "type": "EntityAttemptSmashAttackEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.entity.EntityAttemptSpinAttackEvent": {
    "type": "EntityAttemptSpinAttackEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.EntityCompostItemEvent": {
    "type": "EntityCompostItemEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.EntityDamageItemEvent": {
    "type": "EntityDamageItemEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.EntityDyeEvent": {
    "type": "EntityDyeEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.EntityEffectTickEvent": {
    "type": "EntityEffectTickEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.EntityEquipmentChangedEvent": {
    "type": "EntityEquipmentChangedEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.entity.EntityFertilizeEggEvent": {
    "type": "EntityFertilizeEggEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.EntityInsideBlockEvent": {
    "type": "EntityInsideBlockEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.EntityKnockbackEvent": {
    "type": "EntityKnockbackEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.EntityLoadCrossbowEvent": {
    "type": "EntityLoadCrossbowEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.EntityMoveEvent": {
    "type": "EntityMoveEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.EntityPortalReadyEvent": {
    "type": "EntityPortalReadyEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.EntityPushedByEntityAttackEvent": {
    "type": "EntityPushedByEntityAttackEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.EntityToggleSitEvent": {
    "type": "EntityToggleSitEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.FishHookStateChangeEvent": {
    "type": "FishHookStateChangeEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.entity.PufferFishStateChangeEvent": {
    "type": "PufferFishStateChangeEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.ShulkerDuplicateEvent": {
    "type": "ShulkerDuplicateEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.TameableDeathMessageEvent": {
    "type": "TameableDeathMessageEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.WardenAngerChangeEvent": {
    "type": "WardenAngerChangeEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.entity.WaterBottleSplashEvent": {
    "type": "WaterBottleSplashEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.packet.ClientTickEndEvent": {
    "type": "ClientTickEndEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.packet.PlayerChunkLoadEvent": {
    "type": "PlayerChunkLoadEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.packet.PlayerChunkUnloadEvent": {
    "type": "PlayerChunkUnloadEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.packet.UncheckedSignChangeEvent": {
    "type": "UncheckedSignChangeEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.AsyncChatCommandDecorateEvent": {
    "type": "AsyncChatCommandDecorateEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.AsyncChatDecorateEvent": {
    "type": "AsyncChatDecorateEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.AsyncChatEvent": {
    "type": "AsyncChatEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.CartographyItemEvent": {
    "type": "CartographyItemEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.ChatEvent": {
    "type": "ChatEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerArmSwingEvent": {
    "type": "PlayerArmSwingEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerBedFailEnterEvent": {
    "type": "PlayerBedFailEnterEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerChangeBeaconEffectEvent": {
    "type": "PlayerChangeBeaconEffectEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerClientLoadedWorldEvent": {
    "type": "PlayerClientLoadedWorldEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.player.PlayerDeepSleepEvent": {
    "type": "PlayerDeepSleepEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerFailMoveEvent": {
    "type": "PlayerFailMoveEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.player.PlayerFlowerPotManipulateEvent": {
    "type": "PlayerFlowerPotManipulateEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerInsertLecternBookEvent": {
    "type": "PlayerInsertLecternBookEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerInventorySlotChangeEvent": {
    "type": "PlayerInventorySlotChangeEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.player.PlayerItemCooldownEvent": {
    "type": "PlayerItemCooldownEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerItemFrameChangeEvent": {
    "type": "PlayerItemFrameChangeEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerItemGroupCooldownEvent": {
    "type": "PlayerItemGroupCooldownEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerLecternPageChangeEvent": {
    "type": "PlayerLecternPageChangeEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerLoomPatternSelectEvent": {
    "type": "PlayerLoomPatternSelectEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerMapFilledEvent": {
    "type": "PlayerMapFilledEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.player.PlayerNameEntityEvent": {
    "type": "PlayerNameEntityEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerOpenSignEvent": {
    "type": "PlayerOpenSignEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerPickBlockEvent": {
    "type": "PlayerPickBlockEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerPickEntityEvent": {
    "type": "PlayerPickEntityEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerPurchaseEvent": {
    "type": "PlayerPurchaseEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerServerFullCheckEvent": {
    "type": "PlayerServerFullCheckEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.player.PlayerShieldDisableEvent": {
    "type": "PlayerShieldDisableEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerSignCommandPreprocessEvent": {
    "type": "PlayerSignCommandPreprocessEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerStonecutterRecipeSelectEvent": {
    "type": "PlayerStonecutterRecipeSelectEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerStopUsingItemEvent": {
    "type": "PlayerStopUsingItemEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.player.PlayerTrackEntityEvent": {
    "type": "PlayerTrackEntityEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerTradeEvent": {
    "type": "PlayerTradeEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.player.PlayerUntrackEntityEvent": {
    "type": "PlayerUntrackEntityEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.player.PrePlayerAttackEntityEvent": {
    "type": "PrePlayerAttackEntityEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.server.ServerResourcesReloadedEvent": {
    "type": "ServerResourcesReloadedEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.server.WhitelistStateUpdateEvent": {
    "type": "WhitelistStateUpdateEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.world.border.WorldBorderBoundsChangeEvent": {
    "type": "WorldBorderBoundsChangeEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.world.border.WorldBorderBoundsChangeFinishEvent": {
    "type": "WorldBorderBoundsChangeFinishEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.world.border.WorldBorderCenterChangeEvent": {
    "type": "WorldBorderCenterChangeEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.world.StructuresLocateEvent": {
    "type": "StructuresLocateEvent",
    "cancellable": true
  },
  "io.papermc.paper.event.world.WorldDifficultyChangeEvent": {
    "type": "WorldDifficultyChangeEvent",
    "cancellable": false
  },
  "io.papermc.paper.event.world.WorldGameRuleChangeEvent": {
    "type": "WorldGameRuleChangeEvent",
    "cancellable": true
  },
  "io.papermc.paper.threadedregions.RegionizedServerInitEvent": {
    "type": "RegionizedServerInitEvent",
    "cancellable": false
  },
  "org.bukkit.event.block.BellResonateEvent": {
    "type": "BellResonateEvent",
    "cancellable": false
  },
  "org.bukkit.event.block.BellRingEvent": {
    "type": "BellRingEvent_2",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockBreakEvent": {
    "type": "BlockBreakEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockBurnEvent": {
    "type": "BlockBurnEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockCanBuildEvent": {
    "type": "BlockCanBuildEvent",
    "cancellable": false
  },
  "org.bukkit.event.block.BlockCookEvent": {
    "type": "BlockCookEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockDamageAbortEvent": {
    "type": "BlockDamageAbortEvent",
    "cancellable": false
  },
  "org.bukkit.event.block.BlockDamageEvent": {
    "type": "BlockDamageEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockDispenseArmorEvent": {
    "type": "BlockDispenseArmorEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockDispenseEvent": {
    "type": "BlockDispenseEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockDispenseLootEvent": {
    "type": "BlockDispenseLootEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockDropItemEvent": {
    "type": "BlockDropItemEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockExpEvent": {
    "type": "BlockExpEvent",
    "cancellable": false
  },
  "org.bukkit.event.block.BlockExplodeEvent": {
    "type": "BlockExplodeEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockFadeEvent": {
    "type": "BlockFadeEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockFertilizeEvent": {
    "type": "BlockFertilizeEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockFormEvent": {
    "type": "BlockFormEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockFromToEvent": {
    "type": "BlockFromToEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockGrowEvent": {
    "type": "BlockGrowEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockIgniteEvent": {
    "type": "BlockIgniteEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockMultiPlaceEvent": {
    "type": "BlockMultiPlaceEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockPhysicsEvent": {
    "type": "BlockPhysicsEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockPistonExtendEvent": {
    "type": "BlockPistonExtendEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockPistonRetractEvent": {
    "type": "BlockPistonRetractEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockPlaceEvent": {
    "type": "BlockPlaceEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockReceiveGameEvent": {
    "type": "BlockReceiveGameEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockRedstoneEvent": {
    "type": "BlockRedstoneEvent",
    "cancellable": false
  },
  "org.bukkit.event.block.BlockShearEntityEvent": {
    "type": "BlockShearEntityEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BlockSpreadEvent": {
    "type": "BlockSpreadEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.BrewingStartEvent": {
    "type": "BrewingStartEvent",
    "cancellable": false
  },
  "org.bukkit.event.block.CampfireStartEvent": {
    "type": "CampfireStartEvent",
    "cancellable": false
  },
  "org.bukkit.event.block.CauldronLevelChangeEvent": {
    "type": "CauldronLevelChangeEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.CrafterCraftEvent": {
    "type": "CrafterCraftEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.EntityBlockFormEvent": {
    "type": "EntityBlockFormEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.FluidLevelChangeEvent": {
    "type": "FluidLevelChangeEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.InventoryBlockStartEvent": {
    "type": "InventoryBlockStartEvent",
    "cancellable": false
  },
  "org.bukkit.event.block.LeavesDecayEvent": {
    "type": "LeavesDecayEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.MoistureChangeEvent": {
    "type": "MoistureChangeEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.NotePlayEvent": {
    "type": "NotePlayEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.SculkBloomEvent": {
    "type": "SculkBloomEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.SignChangeEvent": {
    "type": "SignChangeEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.SpongeAbsorbEvent": {
    "type": "SpongeAbsorbEvent",
    "cancellable": true
  },
  "org.bukkit.event.block.TNTPrimeEvent": {
    "type": "TNTPrimeEvent_2",
    "cancellable": true
  },
  "org.bukkit.event.block.VaultDisplayItemEvent": {
    "type": "VaultDisplayItemEvent",
    "cancellable": true
  },
  "org.bukkit.event.command.UnknownCommandEvent": {
    "type": "UnknownCommandEvent",
    "cancellable": false
  },
  "org.bukkit.event.enchantment.EnchantItemEvent": {
    "type": "EnchantItemEvent",
    "cancellable": true
  },
  "org.bukkit.event.enchantment.PrepareItemEnchantEvent": {
    "type": "PrepareItemEnchantEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.AreaEffectCloudApplyEvent": {
    "type": "AreaEffectCloudApplyEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.ArrowBodyCountChangeEvent": {
    "type": "ArrowBodyCountChangeEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.BatToggleSleepEvent": {
    "type": "BatToggleSleepEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.CreatureSpawnEvent": {
    "type": "CreatureSpawnEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.CreeperPowerEvent": {
    "type": "CreeperPowerEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EnderDragonChangePhaseEvent": {
    "type": "EnderDragonChangePhaseEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityAirChangeEvent": {
    "type": "EntityAirChangeEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityBreakDoorEvent": {
    "type": "EntityBreakDoorEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityBreedEvent": {
    "type": "EntityBreedEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityChangeBlockEvent": {
    "type": "EntityChangeBlockEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityCombustByBlockEvent": {
    "type": "EntityCombustByBlockEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityCombustByEntityEvent": {
    "type": "EntityCombustByEntityEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityCombustEvent": {
    "type": "EntityCombustEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityCreatePortalEvent": {
    "type": "EntityCreatePortalEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityDamageByBlockEvent": {
    "type": "EntityDamageByBlockEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityDamageByEntityEvent": {
    "type": "EntityDamageByEntityEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityDamageEvent": {
    "type": "EntityDamageEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityDeathEvent": {
    "type": "EntityDeathEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityDismountEvent": {
    "type": "EntityDismountEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityDropItemEvent": {
    "type": "EntityDropItemEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityEnterBlockEvent": {
    "type": "EntityEnterBlockEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityEnterLoveModeEvent": {
    "type": "EntityEnterLoveModeEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityExhaustionEvent": {
    "type": "EntityExhaustionEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityExplodeEvent": {
    "type": "EntityExplodeEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityInteractEvent": {
    "type": "EntityInteractEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityKnockbackByEntityEvent": {
    "type": "EntityKnockbackByEntityEvent_2",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityKnockbackEvent": {
    "type": "EntityKnockbackEvent_2",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityMountEvent": {
    "type": "EntityMountEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityPickupItemEvent": {
    "type": "EntityPickupItemEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityPlaceEvent": {
    "type": "EntityPlaceEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityPortalEnterEvent": {
    "type": "EntityPortalEnterEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityPortalEvent": {
    "type": "EntityPortalEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityPortalExitEvent": {
    "type": "EntityPortalExitEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityPoseChangeEvent": {
    "type": "EntityPoseChangeEvent",
    "cancellable": false
  },
  "org.bukkit.event.entity.EntityPotionEffectEvent": {
    "type": "EntityPotionEffectEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityRegainHealthEvent": {
    "type": "EntityRegainHealthEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityRemoveEvent": {
    "type": "EntityRemoveEvent",
    "cancellable": false
  },
  "org.bukkit.event.entity.EntityResurrectEvent": {
    "type": "EntityResurrectEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityShootBowEvent": {
    "type": "EntityShootBowEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntitySpawnEvent": {
    "type": "EntitySpawnEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntitySpellCastEvent": {
    "type": "EntitySpellCastEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityTameEvent": {
    "type": "EntityTameEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityTargetEvent": {
    "type": "EntityTargetEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityTargetLivingEntityEvent": {
    "type": "EntityTargetLivingEntityEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityTeleportEvent": {
    "type": "EntityTeleportEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityToggleGlideEvent": {
    "type": "EntityToggleGlideEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityToggleSwimEvent": {
    "type": "EntityToggleSwimEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityTransformEvent": {
    "type": "EntityTransformEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.EntityUnleashEvent": {
    "type": "EntityUnleashEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.ExpBottleEvent": {
    "type": "ExpBottleEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.ExplosionPrimeEvent": {
    "type": "ExplosionPrimeEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.FireworkExplodeEvent": {
    "type": "FireworkExplodeEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.FoodLevelChangeEvent": {
    "type": "FoodLevelChangeEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.HorseJumpEvent": {
    "type": "HorseJumpEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.ItemDespawnEvent": {
    "type": "ItemDespawnEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.ItemMergeEvent": {
    "type": "ItemMergeEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.ItemSpawnEvent": {
    "type": "ItemSpawnEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.LingeringPotionSplashEvent": {
    "type": "LingeringPotionSplashEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.PiglinBarterEvent": {
    "type": "PiglinBarterEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.PigZapEvent": {
    "type": "PigZapEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.PigZombieAngerEvent": {
    "type": "PigZombieAngerEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.PlayerDeathEvent": {
    "type": "PlayerDeathEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.PlayerLeashEntityEvent": {
    "type": "PlayerLeashEntityEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.PotionSplashEvent": {
    "type": "PotionSplashEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.ProjectileHitEvent": {
    "type": "ProjectileHitEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.ProjectileLaunchEvent": {
    "type": "ProjectileLaunchEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.SheepDyeWoolEvent": {
    "type": "SheepDyeWoolEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.SheepRegrowWoolEvent": {
    "type": "SheepRegrowWoolEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.SlimeSplitEvent": {
    "type": "SlimeSplitEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.SpawnerSpawnEvent": {
    "type": "SpawnerSpawnEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.StriderTemperatureChangeEvent": {
    "type": "StriderTemperatureChangeEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.TrialSpawnerSpawnEvent": {
    "type": "TrialSpawnerSpawnEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.VillagerAcquireTradeEvent": {
    "type": "VillagerAcquireTradeEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.VillagerCareerChangeEvent": {
    "type": "VillagerCareerChangeEvent",
    "cancellable": true
  },
  "org.bukkit.event.entity.VillagerReplenishTradeEvent": {
    "type": "VillagerReplenishTradeEvent",
    "cancellable": true
  },
  "org.bukkit.event.hanging.HangingBreakByEntityEvent": {
    "type": "HangingBreakByEntityEvent",
    "cancellable": true
  },
  "org.bukkit.event.hanging.HangingBreakEvent": {
    "type": "HangingBreakEvent",
    "cancellable": true
  },
  "org.bukkit.event.hanging.HangingPlaceEvent": {
    "type": "HangingPlaceEvent",
    "cancellable": true
  },
  "org.bukkit.event.inventory.BrewEvent": {
    "type": "BrewEvent",
    "cancellable": true
  },
  "org.bukkit.event.inventory.BrewingStandFuelEvent": {
    "type": "BrewingStandFuelEvent",
    "cancellable": true
  },
  "org.bukkit.event.inventory.CraftItemEvent": {
    "type": "CraftItemEvent",
    "cancellable": true
  },
  "org.bukkit.event.inventory.FurnaceBurnEvent": {
    "type": "FurnaceBurnEvent",
    "cancellable": true
  },
  "org.bukkit.event.inventory.FurnaceExtractEvent": {
    "type": "FurnaceExtractEvent",
    "cancellable": false
  },
  "org.bukkit.event.inventory.FurnaceSmeltEvent": {
    "type": "FurnaceSmeltEvent",
    "cancellable": true
  },
  "org.bukkit.event.inventory.FurnaceStartSmeltEvent": {
    "type": "FurnaceStartSmeltEvent",
    "cancellable": false
  },
  "org.bukkit.event.inventory.HopperInventorySearchEvent": {
    "type": "HopperInventorySearchEvent",
    "cancellable": false
  },
  "org.bukkit.event.inventory.InventoryClickEvent": {
    "type": "InventoryClickEvent",
    "cancellable": true
  },
  "org.bukkit.event.inventory.InventoryCloseEvent": {
    "type": "InventoryCloseEvent",
    "cancellable": false
  },
  "org.bukkit.event.inventory.InventoryCreativeEvent": {
    "type": "InventoryCreativeEvent",
    "cancellable": true
  },
  "org.bukkit.event.inventory.InventoryDragEvent": {
    "type": "InventoryDragEvent",
    "cancellable": true
  },
  "org.bukkit.event.inventory.InventoryEvent": {
    "type": "InventoryEvent",
    "cancellable": false
  },
  "org.bukkit.event.inventory.InventoryMoveItemEvent": {
    "type": "InventoryMoveItemEvent",
    "cancellable": true
  },
  "org.bukkit.event.inventory.InventoryOpenEvent": {
    "type": "InventoryOpenEvent",
    "cancellable": true
  },
  "org.bukkit.event.inventory.InventoryPickupItemEvent": {
    "type": "InventoryPickupItemEvent",
    "cancellable": true
  },
  "org.bukkit.event.inventory.PrepareAnvilEvent": {
    "type": "PrepareAnvilEvent",
    "cancellable": false
  },
  "org.bukkit.event.inventory.PrepareGrindstoneEvent": {
    "type": "PrepareGrindstoneEvent_2",
    "cancellable": false
  },
  "org.bukkit.event.inventory.PrepareInventoryResultEvent": {
    "type": "PrepareInventoryResultEvent",
    "cancellable": false
  },
  "org.bukkit.event.inventory.PrepareItemCraftEvent": {
    "type": "PrepareItemCraftEvent",
    "cancellable": false
  },
  "org.bukkit.event.inventory.PrepareSmithingEvent": {
    "type": "PrepareSmithingEvent",
    "cancellable": false
  },
  "org.bukkit.event.inventory.SmithItemEvent": {
    "type": "SmithItemEvent",
    "cancellable": true
  },
  "org.bukkit.event.inventory.TradeSelectEvent": {
    "type": "TradeSelectEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.AsyncPlayerChatEvent": {
    "type": "AsyncPlayerChatEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.AsyncPlayerChatPreviewEvent": {
    "type": "AsyncPlayerChatPreviewEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.AsyncPlayerPreLoginEvent": {
    "type": "AsyncPlayerPreLoginEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerAdvancementDoneEvent": {
    "type": "PlayerAdvancementDoneEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerAnimationEvent": {
    "type": "PlayerAnimationEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerArmorStandManipulateEvent": {
    "type": "PlayerArmorStandManipulateEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerAttemptPickupItemEvent": {
    "type": "PlayerAttemptPickupItemEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerBedEnterEvent": {
    "type": "PlayerBedEnterEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerBedLeaveEvent": {
    "type": "PlayerBedLeaveEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerBucketEmptyEvent": {
    "type": "PlayerBucketEmptyEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerBucketEntityEvent": {
    "type": "PlayerBucketEntityEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerBucketFillEvent": {
    "type": "PlayerBucketFillEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerBucketFishEvent": {
    "type": "PlayerBucketFishEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerChangedMainHandEvent": {
    "type": "PlayerChangedMainHandEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerChangedWorldEvent": {
    "type": "PlayerChangedWorldEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerChatEvent": {
    "type": "PlayerChatEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerChatTabCompleteEvent": {
    "type": "PlayerChatTabCompleteEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerCommandPreprocessEvent": {
    "type": "PlayerCommandPreprocessEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerCommandSendEvent": {
    "type": "PlayerCommandSendEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerDropItemEvent": {
    "type": "PlayerDropItemEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerEditBookEvent": {
    "type": "PlayerEditBookEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerEggThrowEvent": {
    "type": "PlayerEggThrowEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerExpChangeEvent": {
    "type": "PlayerExpChangeEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerExpCooldownChangeEvent": {
    "type": "PlayerExpCooldownChangeEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerFishEvent": {
    "type": "PlayerFishEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerGameModeChangeEvent": {
    "type": "PlayerGameModeChangeEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerHarvestBlockEvent": {
    "type": "PlayerHarvestBlockEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerHideEntityEvent": {
    "type": "PlayerHideEntityEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerInputEvent": {
    "type": "PlayerInputEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerInteractAtEntityEvent": {
    "type": "PlayerInteractAtEntityEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerInteractEntityEvent": {
    "type": "PlayerInteractEntityEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerInteractEvent": {
    "type": "PlayerInteractEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerItemBreakEvent": {
    "type": "PlayerItemBreakEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerItemConsumeEvent": {
    "type": "PlayerItemConsumeEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerItemDamageEvent": {
    "type": "PlayerItemDamageEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerItemHeldEvent": {
    "type": "PlayerItemHeldEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerItemMendEvent": {
    "type": "PlayerItemMendEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerJoinEvent": {
    "type": "PlayerJoinEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerKickEvent": {
    "type": "PlayerKickEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerLevelChangeEvent": {
    "type": "PlayerLevelChangeEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerLinksSendEvent": {
    "type": "PlayerLinksSendEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerLocaleChangeEvent": {
    "type": "PlayerLocaleChangeEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerLoginEvent": {
    "type": "PlayerLoginEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerMoveEvent": {
    "type": "PlayerMoveEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerPickupArrowEvent": {
    "type": "PlayerPickupArrowEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerPickupItemEvent": {
    "type": "PlayerPickupItemEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerPortalEvent": {
    "type": "PlayerPortalEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerPreLoginEvent": {
    "type": "PlayerPreLoginEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerQuitEvent": {
    "type": "PlayerQuitEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerRecipeBookClickEvent": {
    "type": "PlayerRecipeBookClickEvent_2",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerRecipeBookSettingsChangeEvent": {
    "type": "PlayerRecipeBookSettingsChangeEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerRecipeDiscoverEvent": {
    "type": "PlayerRecipeDiscoverEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerRegisterChannelEvent": {
    "type": "PlayerRegisterChannelEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerResourcePackStatusEvent": {
    "type": "PlayerResourcePackStatusEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerRespawnEvent": {
    "type": "PlayerRespawnEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerRiptideEvent": {
    "type": "PlayerRiptideEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerShearEntityEvent": {
    "type": "PlayerShearEntityEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerShowEntityEvent": {
    "type": "PlayerShowEntityEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerSignOpenEvent": {
    "type": "PlayerSignOpenEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerSpawnChangeEvent": {
    "type": "PlayerSpawnChangeEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerStatisticIncrementEvent": {
    "type": "PlayerStatisticIncrementEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerSwapHandItemsEvent": {
    "type": "PlayerSwapHandItemsEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerTakeLecternBookEvent": {
    "type": "PlayerTakeLecternBookEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerTeleportEvent": {
    "type": "PlayerTeleportEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerToggleFlightEvent": {
    "type": "PlayerToggleFlightEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerToggleSneakEvent": {
    "type": "PlayerToggleSneakEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerToggleSprintEvent": {
    "type": "PlayerToggleSprintEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerUnleashEntityEvent": {
    "type": "PlayerUnleashEntityEvent",
    "cancellable": true
  },
  "org.bukkit.event.player.PlayerUnregisterChannelEvent": {
    "type": "PlayerUnregisterChannelEvent",
    "cancellable": false
  },
  "org.bukkit.event.player.PlayerVelocityEvent": {
    "type": "PlayerVelocityEvent",
    "cancellable": true
  },
  "org.bukkit.event.raid.RaidFinishEvent": {
    "type": "RaidFinishEvent",
    "cancellable": false
  },
  "org.bukkit.event.raid.RaidSpawnWaveEvent": {
    "type": "RaidSpawnWaveEvent",
    "cancellable": false
  },
  "org.bukkit.event.raid.RaidStopEvent": {
    "type": "RaidStopEvent",
    "cancellable": false
  },
  "org.bukkit.event.raid.RaidTriggerEvent": {
    "type": "RaidTriggerEvent",
    "cancellable": true
  },
  "org.bukkit.event.server.BroadcastMessageEvent": {
    "type": "BroadcastMessageEvent",
    "cancellable": true
  },
  "org.bukkit.event.server.MapInitializeEvent": {
    "type": "MapInitializeEvent",
    "cancellable": false
  },
  "org.bukkit.event.server.PluginDisableEvent": {
    "type": "PluginDisableEvent",
    "cancellable": false
  },
  "org.bukkit.event.server.PluginEnableEvent": {
    "type": "PluginEnableEvent",
    "cancellable": false
  },
  "org.bukkit.event.server.RemoteServerCommandEvent": {
    "type": "RemoteServerCommandEvent",
    "cancellable": true
  },
  "org.bukkit.event.server.ServerCommandEvent": {
    "type": "ServerCommandEvent",
    "cancellable": true
  },
  "org.bukkit.event.server.ServerListPingEvent": {
    "type": "ServerListPingEvent",
    "cancellable": false
  },
  "org.bukkit.event.server.ServerLoadEvent": {
    "type": "ServerLoadEvent",
    "cancellable": false
  },
  "org.bukkit.event.server.ServiceRegisterEvent": {
    "type": "ServiceRegisterEvent",
    "cancellable": false
  },
  "org.bukkit.event.server.ServiceUnregisterEvent": {
    "type": "ServiceUnregisterEvent",
    "cancellable": false
  },
  "org.bukkit.event.server.TabCompleteEvent": {
    "type": "TabCompleteEvent",
    "cancellable": true
  },
  "org.bukkit.event.vehicle.VehicleBlockCollisionEvent": {
    "type": "VehicleBlockCollisionEvent",
    "cancellable": false
  },
  "org.bukkit.event.vehicle.VehicleCreateEvent": {
    "type": "VehicleCreateEvent",
    "cancellable": true
  },
  "org.bukkit.event.vehicle.VehicleDamageEvent": {
    "type": "VehicleDamageEvent",
    "cancellable": true
  },
  "org.bukkit.event.vehicle.VehicleDestroyEvent": {
    "type": "VehicleDestroyEvent",
    "cancellable": true
  },
  "org.bukkit.event.vehicle.VehicleEnterEvent": {
    "type": "VehicleEnterEvent",
    "cancellable": true
  },
  "org.bukkit.event.vehicle.VehicleEntityCollisionEvent": {
    "type": "VehicleEntityCollisionEvent",
    "cancellable": true
  },
  "org.bukkit.event.vehicle.VehicleExitEvent": {
    "type": "VehicleExitEvent",
    "cancellable": true
  },
  "org.bukkit.event.vehicle.VehicleMoveEvent": {
    "type": "VehicleMoveEvent",
    "cancellable": false
  },
  "org.bukkit.event.vehicle.VehicleUpdateEvent": {
    "type": "VehicleUpdateEvent",
    "cancellable": false
  },
  "org.bukkit.event.weather.LightningStrikeEvent": {
    "type": "LightningStrikeEvent",
    "cancellable": true
  },
  "org.bukkit.event.weather.ThunderChangeEvent": {
    "type": "ThunderChangeEvent",
    "cancellable": true
  },
  "org.bukkit.event.weather.WeatherChangeEvent": {
    "type": "WeatherChangeEvent",
    "cancellable": true
  },
  "org.bukkit.event.world.AsyncStructureGenerateEvent": {
    "type": "AsyncStructureGenerateEvent",
    "cancellable": false
  },
  "org.bukkit.event.world.AsyncStructureSpawnEvent": {
    "type": "AsyncStructureSpawnEvent",
    "cancellable": true
  },
  "org.bukkit.event.world.ChunkLoadEvent": {
    "type": "ChunkLoadEvent",
    "cancellable": false
  },
  "org.bukkit.event.world.ChunkPopulateEvent": {
    "type": "ChunkPopulateEvent",
    "cancellable": false
  },
  "org.bukkit.event.world.ChunkUnloadEvent": {
    "type": "ChunkUnloadEvent",
    "cancellable": false
  },
  "org.bukkit.event.world.EntitiesLoadEvent": {
    "type": "EntitiesLoadEvent",
    "cancellable": false
  },
  "org.bukkit.event.world.EntitiesUnloadEvent": {
    "type": "EntitiesUnloadEvent",
    "cancellable": false
  },
  "org.bukkit.event.world.GenericGameEvent": {
    "type": "GenericGameEvent",
    "cancellable": true
  },
  "org.bukkit.event.world.LootGenerateEvent": {
    "type": "LootGenerateEvent",
    "cancellable": true
  },
  "org.bukkit.event.world.PortalCreateEvent": {
    "type": "PortalCreateEvent",
    "cancellable": true
  },
  "org.bukkit.event.world.SpawnChangeEvent": {
    "type": "SpawnChangeEvent",
    "cancellable": false
  },
  "org.bukkit.event.world.StructureGrowEvent": {
    "type": "StructureGrowEvent",
    "cancellable": true
  },
  "org.bukkit.event.world.TimeSkipEvent": {
    "type": "TimeSkipEvent",
    "cancellable": true
  },
  "org.bukkit.event.world.WorldInitEvent": {
    "type": "WorldInitEvent",
    "cancellable": false
  },
  "org.bukkit.event.world.WorldLoadEvent": {
    "type": "WorldLoadEvent",
    "cancellable": false
  },
  "org.bukkit.event.world.WorldSaveEvent": {
    "type": "WorldSaveEvent",
    "cancellable": false
  },
  "org.bukkit.event.world.WorldUnloadEvent": {
    "type": "WorldUnloadEvent",
    "cancellable": true
  }
} as const;
export type GeneratedEventType = typeof EVENT_TYPES[keyof typeof EVENT_TYPES]['type'];
export type GeneratedEventCancellabilityMap = { readonly [Name in keyof typeof EVENT_TYPES]: (typeof EVENT_TYPES)[Name]['cancellable'] };
export interface GeneratedEventMap {
  readonly "com.destroystokyo.paper.event.block.AnvilDamagedEvent": import('./binding-packages/com.destroystokyo.paper.event.block.generated.js').AnvilDamagedEvent;
  readonly "com.destroystokyo.paper.event.block.BeaconEffectEvent": import('./binding-packages/com.destroystokyo.paper.event.block.generated.js').BeaconEffectEvent;
  readonly "com.destroystokyo.paper.event.block.BlockDestroyEvent": import('./binding-packages/com.destroystokyo.paper.event.block.generated.js').BlockDestroyEvent;
  readonly "com.destroystokyo.paper.event.block.TNTPrimeEvent": import('./binding-packages/com.destroystokyo.paper.event.block.generated.js').TNTPrimeEvent;
  readonly "com.destroystokyo.paper.event.brigadier.AsyncPlayerSendCommandsEvent": import('./binding-packages/com.destroystokyo.paper.event.brigadier.generated.js').AsyncPlayerSendCommandsEvent<never>;
  readonly "com.destroystokyo.paper.event.brigadier.AsyncPlayerSendSuggestionsEvent": import('./binding-packages/com.destroystokyo.paper.event.brigadier.generated.js').AsyncPlayerSendSuggestionsEvent;
  readonly "com.destroystokyo.paper.event.brigadier.CommandRegisteredEvent": import('./binding-packages/com.destroystokyo.paper.event.brigadier.generated.js').CommandRegisteredEvent<never>;
  readonly "com.destroystokyo.paper.event.entity.CreeperIgniteEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').CreeperIgniteEvent;
  readonly "com.destroystokyo.paper.event.entity.EnderDragonFireballHitEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').EnderDragonFireballHitEvent;
  readonly "com.destroystokyo.paper.event.entity.EnderDragonFlameEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').EnderDragonFlameEvent;
  readonly "com.destroystokyo.paper.event.entity.EnderDragonShootFireballEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').EnderDragonShootFireballEvent;
  readonly "com.destroystokyo.paper.event.entity.EndermanAttackPlayerEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').EndermanAttackPlayerEvent;
  readonly "com.destroystokyo.paper.event.entity.EndermanEscapeEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').EndermanEscapeEvent;
  readonly "com.destroystokyo.paper.event.entity.EntityAddToWorldEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').EntityAddToWorldEvent;
  readonly "com.destroystokyo.paper.event.entity.EntityJumpEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').EntityJumpEvent;
  readonly "com.destroystokyo.paper.event.entity.EntityKnockbackByEntityEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').EntityKnockbackByEntityEvent;
  readonly "com.destroystokyo.paper.event.entity.EntityPathfindEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').EntityPathfindEvent;
  readonly "com.destroystokyo.paper.event.entity.EntityRemoveFromWorldEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').EntityRemoveFromWorldEvent;
  readonly "com.destroystokyo.paper.event.entity.EntityTeleportEndGatewayEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').EntityTeleportEndGatewayEvent;
  readonly "com.destroystokyo.paper.event.entity.EntityZapEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').EntityZapEvent;
  readonly "com.destroystokyo.paper.event.entity.ExperienceOrbMergeEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').ExperienceOrbMergeEvent;
  readonly "com.destroystokyo.paper.event.entity.PhantomPreSpawnEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').PhantomPreSpawnEvent;
  readonly "com.destroystokyo.paper.event.entity.PlayerNaturallySpawnCreaturesEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').PlayerNaturallySpawnCreaturesEvent;
  readonly "com.destroystokyo.paper.event.entity.PreCreatureSpawnEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').PreCreatureSpawnEvent;
  readonly "com.destroystokyo.paper.event.entity.PreSpawnerSpawnEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').PreSpawnerSpawnEvent;
  readonly "com.destroystokyo.paper.event.entity.ProjectileCollideEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').ProjectileCollideEvent;
  readonly "com.destroystokyo.paper.event.entity.SkeletonHorseTrapEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').SkeletonHorseTrapEvent;
  readonly "com.destroystokyo.paper.event.entity.SlimeChangeDirectionEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').SlimeChangeDirectionEvent;
  readonly "com.destroystokyo.paper.event.entity.SlimePathfindEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').SlimePathfindEvent;
  readonly "com.destroystokyo.paper.event.entity.SlimeSwimEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').SlimeSwimEvent;
  readonly "com.destroystokyo.paper.event.entity.SlimeTargetLivingEntityEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').SlimeTargetLivingEntityEvent;
  readonly "com.destroystokyo.paper.event.entity.SlimeWanderEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').SlimeWanderEvent;
  readonly "com.destroystokyo.paper.event.entity.ThrownEggHatchEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').ThrownEggHatchEvent;
  readonly "com.destroystokyo.paper.event.entity.TurtleGoHomeEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').TurtleGoHomeEvent;
  readonly "com.destroystokyo.paper.event.entity.TurtleLayEggEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').TurtleLayEggEvent;
  readonly "com.destroystokyo.paper.event.entity.TurtleStartDiggingEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').TurtleStartDiggingEvent;
  readonly "com.destroystokyo.paper.event.entity.WitchConsumePotionEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').WitchConsumePotionEvent;
  readonly "com.destroystokyo.paper.event.entity.WitchReadyPotionEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').WitchReadyPotionEvent;
  readonly "com.destroystokyo.paper.event.entity.WitchThrowPotionEvent": import('./binding-packages/com.destroystokyo.paper.event.entity.generated.js').WitchThrowPotionEvent;
  readonly "com.destroystokyo.paper.event.inventory.PrepareGrindstoneEvent": import('./binding-packages/com.destroystokyo.paper.event.inventory.generated.js').PrepareGrindstoneEvent;
  readonly "com.destroystokyo.paper.event.inventory.PrepareResultEvent": import('./binding-packages/com.destroystokyo.paper.event.inventory.generated.js').PrepareResultEvent;
  readonly "com.destroystokyo.paper.event.player.IllegalPacketEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').IllegalPacketEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerAdvancementCriterionGrantEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerAdvancementCriterionGrantEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerArmorChangeEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerArmorChangeEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerAttackEntityCooldownResetEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerAttackEntityCooldownResetEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerClientOptionsChangeEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerClientOptionsChangeEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerConnectionCloseEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerConnectionCloseEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerElytraBoostEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerElytraBoostEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerHandshakeEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerHandshakeEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerJumpEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerJumpEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerLaunchProjectileEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerLaunchProjectileEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerPickupExperienceEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerPickupExperienceEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerPostRespawnEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerPostRespawnEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerReadyArrowEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerReadyArrowEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerRecipeBookClickEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerRecipeBookClickEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerSetSpawnEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerSetSpawnEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerStartSpectatingEntityEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerStartSpectatingEntityEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerStopSpectatingEntityEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerStopSpectatingEntityEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerTeleportEndGatewayEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerTeleportEndGatewayEvent;
  readonly "com.destroystokyo.paper.event.player.PlayerUseUnknownEntityEvent": import('./binding-packages/com.destroystokyo.paper.event.player.generated.js').PlayerUseUnknownEntityEvent;
  readonly "com.destroystokyo.paper.event.profile.FillProfileEvent": import('./binding-packages/com.destroystokyo.paper.event.profile.generated.js').FillProfileEvent;
  readonly "com.destroystokyo.paper.event.profile.LookupProfileEvent": import('./binding-packages/com.destroystokyo.paper.event.profile.generated.js').LookupProfileEvent;
  readonly "com.destroystokyo.paper.event.profile.PreFillProfileEvent": import('./binding-packages/com.destroystokyo.paper.event.profile.generated.js').PreFillProfileEvent;
  readonly "com.destroystokyo.paper.event.profile.PreLookupProfileEvent": import('./binding-packages/com.destroystokyo.paper.event.profile.generated.js').PreLookupProfileEvent;
  readonly "com.destroystokyo.paper.event.profile.ProfileWhitelistVerifyEvent": import('./binding-packages/com.destroystokyo.paper.event.profile.generated.js').ProfileWhitelistVerifyEvent;
  readonly "com.destroystokyo.paper.event.server.AsyncTabCompleteEvent": import('./binding-packages/com.destroystokyo.paper.event.server.generated.js').AsyncTabCompleteEvent;
  readonly "com.destroystokyo.paper.event.server.GS4QueryEvent": import('./binding-packages/com.destroystokyo.paper.event.server.generated.js').GS4QueryEvent;
  readonly "com.destroystokyo.paper.event.server.PaperServerListPingEvent": import('./binding-packages/com.destroystokyo.paper.event.server.generated.js').PaperServerListPingEvent;
  readonly "com.destroystokyo.paper.event.server.ServerExceptionEvent": import('./binding-packages/com.destroystokyo.paper.event.server.generated.js').ServerExceptionEvent;
  readonly "com.destroystokyo.paper.event.server.ServerTickEndEvent": import('./binding-packages/com.destroystokyo.paper.event.server.generated.js').ServerTickEndEvent;
  readonly "com.destroystokyo.paper.event.server.ServerTickStartEvent": import('./binding-packages/com.destroystokyo.paper.event.server.generated.js').ServerTickStartEvent;
  readonly "com.destroystokyo.paper.event.server.WhitelistToggleEvent": import('./binding-packages/com.destroystokyo.paper.event.server.generated.js').WhitelistToggleEvent;
  readonly "com.destroystokyo.paper.loottable.LootableInventoryReplenishEvent": import('./binding-packages/com.destroystokyo.paper.loottable.generated.js').LootableInventoryReplenishEvent;
  readonly "io.papermc.paper.event.block.BeaconActivatedEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').BeaconActivatedEvent;
  readonly "io.papermc.paper.event.block.BeaconDeactivatedEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').BeaconDeactivatedEvent;
  readonly "io.papermc.paper.event.block.BellRevealRaiderEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').BellRevealRaiderEvent;
  readonly "io.papermc.paper.event.block.BellRingEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').BellRingEvent;
  readonly "io.papermc.paper.event.block.BlockBreakBlockEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').BlockBreakBlockEvent;
  readonly "io.papermc.paper.event.block.BlockBreakProgressUpdateEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').BlockBreakProgressUpdateEvent;
  readonly "io.papermc.paper.event.block.BlockFailedDispenseEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').BlockFailedDispenseEvent;
  readonly "io.papermc.paper.event.block.BlockLockCheckEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').BlockLockCheckEvent;
  readonly "io.papermc.paper.event.block.BlockPreDispenseEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').BlockPreDispenseEvent;
  readonly "io.papermc.paper.event.block.CompostItemEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').CompostItemEvent;
  readonly "io.papermc.paper.event.block.DragonEggFormEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').DragonEggFormEvent;
  readonly "io.papermc.paper.event.block.PlayerShearBlockEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').PlayerShearBlockEvent;
  readonly "io.papermc.paper.event.block.TargetHitEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').TargetHitEvent;
  readonly "io.papermc.paper.event.block.VaultChangeStateEvent": import('./binding-packages/io.papermc.paper.event.block.generated.js').VaultChangeStateEvent;
  readonly "io.papermc.paper.event.connection.configuration.AsyncPlayerConnectionConfigureEvent": import('./binding-packages/io.papermc.paper.event.connection.configuration.generated.js').AsyncPlayerConnectionConfigureEvent;
  readonly "io.papermc.paper.event.connection.configuration.PlayerConnectionInitialConfigureEvent": import('./binding-packages/io.papermc.paper.event.connection.configuration.generated.js').PlayerConnectionInitialConfigureEvent;
  readonly "io.papermc.paper.event.connection.configuration.PlayerConnectionReconfigureEvent": import('./binding-packages/io.papermc.paper.event.connection.configuration.generated.js').PlayerConnectionReconfigureEvent;
  readonly "io.papermc.paper.event.connection.PlayerConnectionValidateLoginEvent": import('./binding-packages/io.papermc.paper.event.connection.generated.js').PlayerConnectionValidateLoginEvent;
  readonly "io.papermc.paper.event.entity.ElderGuardianAppearanceEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').ElderGuardianAppearanceEvent;
  readonly "io.papermc.paper.event.entity.EntityAttemptSmashAttackEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityAttemptSmashAttackEvent;
  readonly "io.papermc.paper.event.entity.EntityAttemptSpinAttackEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityAttemptSpinAttackEvent;
  readonly "io.papermc.paper.event.entity.EntityCompostItemEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityCompostItemEvent;
  readonly "io.papermc.paper.event.entity.EntityDamageItemEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityDamageItemEvent;
  readonly "io.papermc.paper.event.entity.EntityDyeEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityDyeEvent;
  readonly "io.papermc.paper.event.entity.EntityEffectTickEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityEffectTickEvent;
  readonly "io.papermc.paper.event.entity.EntityEquipmentChangedEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityEquipmentChangedEvent;
  readonly "io.papermc.paper.event.entity.EntityFertilizeEggEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityFertilizeEggEvent;
  readonly "io.papermc.paper.event.entity.EntityInsideBlockEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityInsideBlockEvent;
  readonly "io.papermc.paper.event.entity.EntityKnockbackEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityKnockbackEvent;
  readonly "io.papermc.paper.event.entity.EntityLoadCrossbowEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityLoadCrossbowEvent;
  readonly "io.papermc.paper.event.entity.EntityMoveEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityMoveEvent;
  readonly "io.papermc.paper.event.entity.EntityPortalReadyEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityPortalReadyEvent;
  readonly "io.papermc.paper.event.entity.EntityPushedByEntityAttackEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityPushedByEntityAttackEvent;
  readonly "io.papermc.paper.event.entity.EntityToggleSitEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').EntityToggleSitEvent;
  readonly "io.papermc.paper.event.entity.FishHookStateChangeEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').FishHookStateChangeEvent;
  readonly "io.papermc.paper.event.entity.PufferFishStateChangeEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').PufferFishStateChangeEvent;
  readonly "io.papermc.paper.event.entity.ShulkerDuplicateEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').ShulkerDuplicateEvent;
  readonly "io.papermc.paper.event.entity.TameableDeathMessageEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').TameableDeathMessageEvent;
  readonly "io.papermc.paper.event.entity.WardenAngerChangeEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').WardenAngerChangeEvent;
  readonly "io.papermc.paper.event.entity.WaterBottleSplashEvent": import('./binding-packages/io.papermc.paper.event.entity.generated.js').WaterBottleSplashEvent;
  readonly "io.papermc.paper.event.packet.ClientTickEndEvent": import('./binding-packages/io.papermc.paper.event.packet.generated.js').ClientTickEndEvent;
  readonly "io.papermc.paper.event.packet.PlayerChunkLoadEvent": import('./binding-packages/io.papermc.paper.event.packet.generated.js').PlayerChunkLoadEvent;
  readonly "io.papermc.paper.event.packet.PlayerChunkUnloadEvent": import('./binding-packages/io.papermc.paper.event.packet.generated.js').PlayerChunkUnloadEvent;
  readonly "io.papermc.paper.event.packet.UncheckedSignChangeEvent": import('./binding-packages/io.papermc.paper.event.packet.generated.js').UncheckedSignChangeEvent;
  readonly "io.papermc.paper.event.player.AsyncChatCommandDecorateEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').AsyncChatCommandDecorateEvent;
  readonly "io.papermc.paper.event.player.AsyncChatDecorateEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').AsyncChatDecorateEvent;
  readonly "io.papermc.paper.event.player.AsyncChatEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').AsyncChatEvent;
  readonly "io.papermc.paper.event.player.CartographyItemEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').CartographyItemEvent;
  readonly "io.papermc.paper.event.player.ChatEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').ChatEvent;
  readonly "io.papermc.paper.event.player.PlayerArmSwingEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerArmSwingEvent;
  readonly "io.papermc.paper.event.player.PlayerBedFailEnterEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerBedFailEnterEvent;
  readonly "io.papermc.paper.event.player.PlayerChangeBeaconEffectEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerChangeBeaconEffectEvent;
  readonly "io.papermc.paper.event.player.PlayerClientLoadedWorldEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerClientLoadedWorldEvent;
  readonly "io.papermc.paper.event.player.PlayerDeepSleepEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerDeepSleepEvent;
  readonly "io.papermc.paper.event.player.PlayerFailMoveEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerFailMoveEvent;
  readonly "io.papermc.paper.event.player.PlayerFlowerPotManipulateEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerFlowerPotManipulateEvent;
  readonly "io.papermc.paper.event.player.PlayerInsertLecternBookEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerInsertLecternBookEvent;
  readonly "io.papermc.paper.event.player.PlayerInventorySlotChangeEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerInventorySlotChangeEvent;
  readonly "io.papermc.paper.event.player.PlayerItemCooldownEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerItemCooldownEvent;
  readonly "io.papermc.paper.event.player.PlayerItemFrameChangeEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerItemFrameChangeEvent;
  readonly "io.papermc.paper.event.player.PlayerItemGroupCooldownEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerItemGroupCooldownEvent;
  readonly "io.papermc.paper.event.player.PlayerLecternPageChangeEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerLecternPageChangeEvent;
  readonly "io.papermc.paper.event.player.PlayerLoomPatternSelectEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerLoomPatternSelectEvent;
  readonly "io.papermc.paper.event.player.PlayerMapFilledEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerMapFilledEvent;
  readonly "io.papermc.paper.event.player.PlayerNameEntityEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerNameEntityEvent;
  readonly "io.papermc.paper.event.player.PlayerOpenSignEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerOpenSignEvent;
  readonly "io.papermc.paper.event.player.PlayerPickBlockEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerPickBlockEvent;
  readonly "io.papermc.paper.event.player.PlayerPickEntityEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerPickEntityEvent;
  readonly "io.papermc.paper.event.player.PlayerPurchaseEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerPurchaseEvent;
  readonly "io.papermc.paper.event.player.PlayerServerFullCheckEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerServerFullCheckEvent;
  readonly "io.papermc.paper.event.player.PlayerShieldDisableEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerShieldDisableEvent;
  readonly "io.papermc.paper.event.player.PlayerSignCommandPreprocessEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerSignCommandPreprocessEvent;
  readonly "io.papermc.paper.event.player.PlayerStonecutterRecipeSelectEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerStonecutterRecipeSelectEvent;
  readonly "io.papermc.paper.event.player.PlayerStopUsingItemEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerStopUsingItemEvent;
  readonly "io.papermc.paper.event.player.PlayerTrackEntityEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerTrackEntityEvent;
  readonly "io.papermc.paper.event.player.PlayerTradeEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerTradeEvent;
  readonly "io.papermc.paper.event.player.PlayerUntrackEntityEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PlayerUntrackEntityEvent;
  readonly "io.papermc.paper.event.player.PrePlayerAttackEntityEvent": import('./binding-packages/io.papermc.paper.event.player.generated.js').PrePlayerAttackEntityEvent;
  readonly "io.papermc.paper.event.server.ServerResourcesReloadedEvent": import('./binding-packages/io.papermc.paper.event.server.generated.js').ServerResourcesReloadedEvent;
  readonly "io.papermc.paper.event.server.WhitelistStateUpdateEvent": import('./binding-packages/io.papermc.paper.event.server.generated.js').WhitelistStateUpdateEvent;
  readonly "io.papermc.paper.event.world.border.WorldBorderBoundsChangeEvent": import('./binding-packages/io.papermc.paper.event.world.border.generated.js').WorldBorderBoundsChangeEvent;
  readonly "io.papermc.paper.event.world.border.WorldBorderBoundsChangeFinishEvent": import('./binding-packages/io.papermc.paper.event.world.border.generated.js').WorldBorderBoundsChangeFinishEvent;
  readonly "io.papermc.paper.event.world.border.WorldBorderCenterChangeEvent": import('./binding-packages/io.papermc.paper.event.world.border.generated.js').WorldBorderCenterChangeEvent;
  readonly "io.papermc.paper.event.world.StructuresLocateEvent": import('./binding-packages/io.papermc.paper.event.world.generated.js').StructuresLocateEvent;
  readonly "io.papermc.paper.event.world.WorldDifficultyChangeEvent": import('./binding-packages/io.papermc.paper.event.world.generated.js').WorldDifficultyChangeEvent;
  readonly "io.papermc.paper.event.world.WorldGameRuleChangeEvent": import('./binding-packages/io.papermc.paper.event.world.generated.js').WorldGameRuleChangeEvent;
  readonly "io.papermc.paper.threadedregions.RegionizedServerInitEvent": import('./binding-packages/io.papermc.paper.threadedregions.generated.js').RegionizedServerInitEvent;
  readonly "org.bukkit.event.block.BellResonateEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BellResonateEvent;
  readonly "org.bukkit.event.block.BellRingEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BellRingEvent_2;
  readonly "org.bukkit.event.block.BlockBreakEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockBreakEvent;
  readonly "org.bukkit.event.block.BlockBurnEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockBurnEvent;
  readonly "org.bukkit.event.block.BlockCanBuildEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockCanBuildEvent;
  readonly "org.bukkit.event.block.BlockCookEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockCookEvent;
  readonly "org.bukkit.event.block.BlockDamageAbortEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockDamageAbortEvent;
  readonly "org.bukkit.event.block.BlockDamageEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockDamageEvent;
  readonly "org.bukkit.event.block.BlockDispenseArmorEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockDispenseArmorEvent;
  readonly "org.bukkit.event.block.BlockDispenseEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockDispenseEvent;
  readonly "org.bukkit.event.block.BlockDispenseLootEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockDispenseLootEvent;
  readonly "org.bukkit.event.block.BlockDropItemEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockDropItemEvent;
  readonly "org.bukkit.event.block.BlockExpEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockExpEvent;
  readonly "org.bukkit.event.block.BlockExplodeEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockExplodeEvent;
  readonly "org.bukkit.event.block.BlockFadeEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockFadeEvent;
  readonly "org.bukkit.event.block.BlockFertilizeEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockFertilizeEvent;
  readonly "org.bukkit.event.block.BlockFormEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockFormEvent;
  readonly "org.bukkit.event.block.BlockFromToEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockFromToEvent;
  readonly "org.bukkit.event.block.BlockGrowEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockGrowEvent;
  readonly "org.bukkit.event.block.BlockIgniteEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockIgniteEvent;
  readonly "org.bukkit.event.block.BlockMultiPlaceEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockMultiPlaceEvent;
  readonly "org.bukkit.event.block.BlockPhysicsEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockPhysicsEvent;
  readonly "org.bukkit.event.block.BlockPistonExtendEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockPistonExtendEvent;
  readonly "org.bukkit.event.block.BlockPistonRetractEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockPistonRetractEvent;
  readonly "org.bukkit.event.block.BlockPlaceEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockPlaceEvent;
  readonly "org.bukkit.event.block.BlockReceiveGameEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockReceiveGameEvent;
  readonly "org.bukkit.event.block.BlockRedstoneEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockRedstoneEvent;
  readonly "org.bukkit.event.block.BlockShearEntityEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockShearEntityEvent;
  readonly "org.bukkit.event.block.BlockSpreadEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BlockSpreadEvent;
  readonly "org.bukkit.event.block.BrewingStartEvent": import('./binding-packages/org.bukkit.event.block.generated.js').BrewingStartEvent;
  readonly "org.bukkit.event.block.CampfireStartEvent": import('./binding-packages/org.bukkit.event.block.generated.js').CampfireStartEvent;
  readonly "org.bukkit.event.block.CauldronLevelChangeEvent": import('./binding-packages/org.bukkit.event.block.generated.js').CauldronLevelChangeEvent;
  readonly "org.bukkit.event.block.CrafterCraftEvent": import('./binding-packages/org.bukkit.event.block.generated.js').CrafterCraftEvent;
  readonly "org.bukkit.event.block.EntityBlockFormEvent": import('./binding-packages/org.bukkit.event.block.generated.js').EntityBlockFormEvent;
  readonly "org.bukkit.event.block.FluidLevelChangeEvent": import('./binding-packages/org.bukkit.event.block.generated.js').FluidLevelChangeEvent;
  readonly "org.bukkit.event.block.InventoryBlockStartEvent": import('./binding-packages/org.bukkit.event.block.generated.js').InventoryBlockStartEvent;
  readonly "org.bukkit.event.block.LeavesDecayEvent": import('./binding-packages/org.bukkit.event.block.generated.js').LeavesDecayEvent;
  readonly "org.bukkit.event.block.MoistureChangeEvent": import('./binding-packages/org.bukkit.event.block.generated.js').MoistureChangeEvent;
  readonly "org.bukkit.event.block.NotePlayEvent": import('./binding-packages/org.bukkit.event.block.generated.js').NotePlayEvent;
  readonly "org.bukkit.event.block.SculkBloomEvent": import('./binding-packages/org.bukkit.event.block.generated.js').SculkBloomEvent;
  readonly "org.bukkit.event.block.SignChangeEvent": import('./binding-packages/org.bukkit.event.block.generated.js').SignChangeEvent;
  readonly "org.bukkit.event.block.SpongeAbsorbEvent": import('./binding-packages/org.bukkit.event.block.generated.js').SpongeAbsorbEvent;
  readonly "org.bukkit.event.block.TNTPrimeEvent": import('./binding-packages/org.bukkit.event.block.generated.js').TNTPrimeEvent_2;
  readonly "org.bukkit.event.block.VaultDisplayItemEvent": import('./binding-packages/org.bukkit.event.block.generated.js').VaultDisplayItemEvent;
  readonly "org.bukkit.event.command.UnknownCommandEvent": import('./binding-packages/org.bukkit.event.command.generated.js').UnknownCommandEvent;
  readonly "org.bukkit.event.enchantment.EnchantItemEvent": import('./binding-packages/org.bukkit.event.enchantment.generated.js').EnchantItemEvent;
  readonly "org.bukkit.event.enchantment.PrepareItemEnchantEvent": import('./binding-packages/org.bukkit.event.enchantment.generated.js').PrepareItemEnchantEvent;
  readonly "org.bukkit.event.entity.AreaEffectCloudApplyEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').AreaEffectCloudApplyEvent;
  readonly "org.bukkit.event.entity.ArrowBodyCountChangeEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').ArrowBodyCountChangeEvent;
  readonly "org.bukkit.event.entity.BatToggleSleepEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').BatToggleSleepEvent;
  readonly "org.bukkit.event.entity.CreatureSpawnEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').CreatureSpawnEvent;
  readonly "org.bukkit.event.entity.CreeperPowerEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').CreeperPowerEvent;
  readonly "org.bukkit.event.entity.EnderDragonChangePhaseEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EnderDragonChangePhaseEvent;
  readonly "org.bukkit.event.entity.EntityAirChangeEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityAirChangeEvent;
  readonly "org.bukkit.event.entity.EntityBreakDoorEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityBreakDoorEvent;
  readonly "org.bukkit.event.entity.EntityBreedEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityBreedEvent;
  readonly "org.bukkit.event.entity.EntityChangeBlockEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityChangeBlockEvent;
  readonly "org.bukkit.event.entity.EntityCombustByBlockEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityCombustByBlockEvent;
  readonly "org.bukkit.event.entity.EntityCombustByEntityEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityCombustByEntityEvent;
  readonly "org.bukkit.event.entity.EntityCombustEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityCombustEvent;
  readonly "org.bukkit.event.entity.EntityCreatePortalEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityCreatePortalEvent;
  readonly "org.bukkit.event.entity.EntityDamageByBlockEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityDamageByBlockEvent;
  readonly "org.bukkit.event.entity.EntityDamageByEntityEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityDamageByEntityEvent;
  readonly "org.bukkit.event.entity.EntityDamageEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityDamageEvent;
  readonly "org.bukkit.event.entity.EntityDeathEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityDeathEvent;
  readonly "org.bukkit.event.entity.EntityDismountEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityDismountEvent;
  readonly "org.bukkit.event.entity.EntityDropItemEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityDropItemEvent;
  readonly "org.bukkit.event.entity.EntityEnterBlockEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityEnterBlockEvent;
  readonly "org.bukkit.event.entity.EntityEnterLoveModeEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityEnterLoveModeEvent;
  readonly "org.bukkit.event.entity.EntityExhaustionEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityExhaustionEvent;
  readonly "org.bukkit.event.entity.EntityExplodeEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityExplodeEvent;
  readonly "org.bukkit.event.entity.EntityInteractEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityInteractEvent;
  readonly "org.bukkit.event.entity.EntityKnockbackByEntityEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityKnockbackByEntityEvent_2;
  readonly "org.bukkit.event.entity.EntityKnockbackEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityKnockbackEvent_2;
  readonly "org.bukkit.event.entity.EntityMountEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityMountEvent;
  readonly "org.bukkit.event.entity.EntityPickupItemEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityPickupItemEvent;
  readonly "org.bukkit.event.entity.EntityPlaceEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityPlaceEvent;
  readonly "org.bukkit.event.entity.EntityPortalEnterEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityPortalEnterEvent;
  readonly "org.bukkit.event.entity.EntityPortalEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityPortalEvent;
  readonly "org.bukkit.event.entity.EntityPortalExitEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityPortalExitEvent;
  readonly "org.bukkit.event.entity.EntityPoseChangeEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityPoseChangeEvent;
  readonly "org.bukkit.event.entity.EntityPotionEffectEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityPotionEffectEvent;
  readonly "org.bukkit.event.entity.EntityRegainHealthEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityRegainHealthEvent;
  readonly "org.bukkit.event.entity.EntityRemoveEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityRemoveEvent;
  readonly "org.bukkit.event.entity.EntityResurrectEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityResurrectEvent;
  readonly "org.bukkit.event.entity.EntityShootBowEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityShootBowEvent;
  readonly "org.bukkit.event.entity.EntitySpawnEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntitySpawnEvent;
  readonly "org.bukkit.event.entity.EntitySpellCastEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntitySpellCastEvent;
  readonly "org.bukkit.event.entity.EntityTameEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityTameEvent;
  readonly "org.bukkit.event.entity.EntityTargetEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityTargetEvent;
  readonly "org.bukkit.event.entity.EntityTargetLivingEntityEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityTargetLivingEntityEvent;
  readonly "org.bukkit.event.entity.EntityTeleportEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityTeleportEvent;
  readonly "org.bukkit.event.entity.EntityToggleGlideEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityToggleGlideEvent;
  readonly "org.bukkit.event.entity.EntityToggleSwimEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityToggleSwimEvent;
  readonly "org.bukkit.event.entity.EntityTransformEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityTransformEvent;
  readonly "org.bukkit.event.entity.EntityUnleashEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').EntityUnleashEvent;
  readonly "org.bukkit.event.entity.ExpBottleEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').ExpBottleEvent;
  readonly "org.bukkit.event.entity.ExplosionPrimeEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').ExplosionPrimeEvent;
  readonly "org.bukkit.event.entity.FireworkExplodeEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').FireworkExplodeEvent;
  readonly "org.bukkit.event.entity.FoodLevelChangeEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').FoodLevelChangeEvent;
  readonly "org.bukkit.event.entity.HorseJumpEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').HorseJumpEvent;
  readonly "org.bukkit.event.entity.ItemDespawnEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').ItemDespawnEvent;
  readonly "org.bukkit.event.entity.ItemMergeEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').ItemMergeEvent;
  readonly "org.bukkit.event.entity.ItemSpawnEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').ItemSpawnEvent;
  readonly "org.bukkit.event.entity.LingeringPotionSplashEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').LingeringPotionSplashEvent;
  readonly "org.bukkit.event.entity.PiglinBarterEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').PiglinBarterEvent;
  readonly "org.bukkit.event.entity.PigZapEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').PigZapEvent;
  readonly "org.bukkit.event.entity.PigZombieAngerEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').PigZombieAngerEvent;
  readonly "org.bukkit.event.entity.PlayerDeathEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').PlayerDeathEvent;
  readonly "org.bukkit.event.entity.PlayerLeashEntityEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').PlayerLeashEntityEvent;
  readonly "org.bukkit.event.entity.PotionSplashEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').PotionSplashEvent;
  readonly "org.bukkit.event.entity.ProjectileHitEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').ProjectileHitEvent;
  readonly "org.bukkit.event.entity.ProjectileLaunchEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').ProjectileLaunchEvent;
  readonly "org.bukkit.event.entity.SheepDyeWoolEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').SheepDyeWoolEvent;
  readonly "org.bukkit.event.entity.SheepRegrowWoolEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').SheepRegrowWoolEvent;
  readonly "org.bukkit.event.entity.SlimeSplitEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').SlimeSplitEvent;
  readonly "org.bukkit.event.entity.SpawnerSpawnEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').SpawnerSpawnEvent;
  readonly "org.bukkit.event.entity.StriderTemperatureChangeEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').StriderTemperatureChangeEvent;
  readonly "org.bukkit.event.entity.TrialSpawnerSpawnEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').TrialSpawnerSpawnEvent;
  readonly "org.bukkit.event.entity.VillagerAcquireTradeEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').VillagerAcquireTradeEvent;
  readonly "org.bukkit.event.entity.VillagerCareerChangeEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').VillagerCareerChangeEvent;
  readonly "org.bukkit.event.entity.VillagerReplenishTradeEvent": import('./binding-packages/org.bukkit.event.entity.generated.js').VillagerReplenishTradeEvent;
  readonly "org.bukkit.event.hanging.HangingBreakByEntityEvent": import('./binding-packages/org.bukkit.event.hanging.generated.js').HangingBreakByEntityEvent;
  readonly "org.bukkit.event.hanging.HangingBreakEvent": import('./binding-packages/org.bukkit.event.hanging.generated.js').HangingBreakEvent;
  readonly "org.bukkit.event.hanging.HangingPlaceEvent": import('./binding-packages/org.bukkit.event.hanging.generated.js').HangingPlaceEvent;
  readonly "org.bukkit.event.inventory.BrewEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').BrewEvent;
  readonly "org.bukkit.event.inventory.BrewingStandFuelEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').BrewingStandFuelEvent;
  readonly "org.bukkit.event.inventory.CraftItemEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').CraftItemEvent;
  readonly "org.bukkit.event.inventory.FurnaceBurnEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').FurnaceBurnEvent;
  readonly "org.bukkit.event.inventory.FurnaceExtractEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').FurnaceExtractEvent;
  readonly "org.bukkit.event.inventory.FurnaceSmeltEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').FurnaceSmeltEvent;
  readonly "org.bukkit.event.inventory.FurnaceStartSmeltEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').FurnaceStartSmeltEvent;
  readonly "org.bukkit.event.inventory.HopperInventorySearchEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').HopperInventorySearchEvent;
  readonly "org.bukkit.event.inventory.InventoryClickEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').InventoryClickEvent;
  readonly "org.bukkit.event.inventory.InventoryCloseEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').InventoryCloseEvent;
  readonly "org.bukkit.event.inventory.InventoryCreativeEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').InventoryCreativeEvent;
  readonly "org.bukkit.event.inventory.InventoryDragEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').InventoryDragEvent;
  readonly "org.bukkit.event.inventory.InventoryEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').InventoryEvent;
  readonly "org.bukkit.event.inventory.InventoryMoveItemEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').InventoryMoveItemEvent;
  readonly "org.bukkit.event.inventory.InventoryOpenEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').InventoryOpenEvent;
  readonly "org.bukkit.event.inventory.InventoryPickupItemEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').InventoryPickupItemEvent;
  readonly "org.bukkit.event.inventory.PrepareAnvilEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').PrepareAnvilEvent;
  readonly "org.bukkit.event.inventory.PrepareGrindstoneEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').PrepareGrindstoneEvent_2;
  readonly "org.bukkit.event.inventory.PrepareInventoryResultEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').PrepareInventoryResultEvent;
  readonly "org.bukkit.event.inventory.PrepareItemCraftEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').PrepareItemCraftEvent;
  readonly "org.bukkit.event.inventory.PrepareSmithingEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').PrepareSmithingEvent;
  readonly "org.bukkit.event.inventory.SmithItemEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').SmithItemEvent;
  readonly "org.bukkit.event.inventory.TradeSelectEvent": import('./binding-packages/org.bukkit.event.inventory.generated.js').TradeSelectEvent;
  readonly "org.bukkit.event.player.AsyncPlayerChatEvent": import('./binding-packages/org.bukkit.event.player.generated.js').AsyncPlayerChatEvent;
  readonly "org.bukkit.event.player.AsyncPlayerChatPreviewEvent": import('./binding-packages/org.bukkit.event.player.generated.js').AsyncPlayerChatPreviewEvent;
  readonly "org.bukkit.event.player.AsyncPlayerPreLoginEvent": import('./binding-packages/org.bukkit.event.player.generated.js').AsyncPlayerPreLoginEvent;
  readonly "org.bukkit.event.player.PlayerAdvancementDoneEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerAdvancementDoneEvent;
  readonly "org.bukkit.event.player.PlayerAnimationEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerAnimationEvent;
  readonly "org.bukkit.event.player.PlayerArmorStandManipulateEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerArmorStandManipulateEvent;
  readonly "org.bukkit.event.player.PlayerAttemptPickupItemEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerAttemptPickupItemEvent;
  readonly "org.bukkit.event.player.PlayerBedEnterEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerBedEnterEvent;
  readonly "org.bukkit.event.player.PlayerBedLeaveEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerBedLeaveEvent;
  readonly "org.bukkit.event.player.PlayerBucketEmptyEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerBucketEmptyEvent;
  readonly "org.bukkit.event.player.PlayerBucketEntityEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerBucketEntityEvent;
  readonly "org.bukkit.event.player.PlayerBucketFillEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerBucketFillEvent;
  readonly "org.bukkit.event.player.PlayerBucketFishEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerBucketFishEvent;
  readonly "org.bukkit.event.player.PlayerChangedMainHandEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerChangedMainHandEvent;
  readonly "org.bukkit.event.player.PlayerChangedWorldEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerChangedWorldEvent;
  readonly "org.bukkit.event.player.PlayerChatEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerChatEvent;
  readonly "org.bukkit.event.player.PlayerChatTabCompleteEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerChatTabCompleteEvent;
  readonly "org.bukkit.event.player.PlayerCommandPreprocessEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerCommandPreprocessEvent;
  readonly "org.bukkit.event.player.PlayerCommandSendEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerCommandSendEvent;
  readonly "org.bukkit.event.player.PlayerDropItemEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerDropItemEvent;
  readonly "org.bukkit.event.player.PlayerEditBookEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerEditBookEvent;
  readonly "org.bukkit.event.player.PlayerEggThrowEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerEggThrowEvent;
  readonly "org.bukkit.event.player.PlayerExpChangeEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerExpChangeEvent;
  readonly "org.bukkit.event.player.PlayerExpCooldownChangeEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerExpCooldownChangeEvent;
  readonly "org.bukkit.event.player.PlayerFishEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerFishEvent;
  readonly "org.bukkit.event.player.PlayerGameModeChangeEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerGameModeChangeEvent;
  readonly "org.bukkit.event.player.PlayerHarvestBlockEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerHarvestBlockEvent;
  readonly "org.bukkit.event.player.PlayerHideEntityEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerHideEntityEvent;
  readonly "org.bukkit.event.player.PlayerInputEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerInputEvent;
  readonly "org.bukkit.event.player.PlayerInteractAtEntityEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerInteractAtEntityEvent;
  readonly "org.bukkit.event.player.PlayerInteractEntityEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerInteractEntityEvent;
  readonly "org.bukkit.event.player.PlayerInteractEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerInteractEvent;
  readonly "org.bukkit.event.player.PlayerItemBreakEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerItemBreakEvent;
  readonly "org.bukkit.event.player.PlayerItemConsumeEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerItemConsumeEvent;
  readonly "org.bukkit.event.player.PlayerItemDamageEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerItemDamageEvent;
  readonly "org.bukkit.event.player.PlayerItemHeldEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerItemHeldEvent;
  readonly "org.bukkit.event.player.PlayerItemMendEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerItemMendEvent;
  readonly "org.bukkit.event.player.PlayerJoinEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerJoinEvent;
  readonly "org.bukkit.event.player.PlayerKickEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerKickEvent;
  readonly "org.bukkit.event.player.PlayerLevelChangeEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerLevelChangeEvent;
  readonly "org.bukkit.event.player.PlayerLinksSendEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerLinksSendEvent;
  readonly "org.bukkit.event.player.PlayerLocaleChangeEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerLocaleChangeEvent;
  readonly "org.bukkit.event.player.PlayerLoginEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerLoginEvent;
  readonly "org.bukkit.event.player.PlayerMoveEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerMoveEvent;
  readonly "org.bukkit.event.player.PlayerPickupArrowEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerPickupArrowEvent;
  readonly "org.bukkit.event.player.PlayerPickupItemEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerPickupItemEvent;
  readonly "org.bukkit.event.player.PlayerPortalEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerPortalEvent;
  readonly "org.bukkit.event.player.PlayerPreLoginEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerPreLoginEvent;
  readonly "org.bukkit.event.player.PlayerQuitEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerQuitEvent;
  readonly "org.bukkit.event.player.PlayerRecipeBookClickEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerRecipeBookClickEvent_2;
  readonly "org.bukkit.event.player.PlayerRecipeBookSettingsChangeEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerRecipeBookSettingsChangeEvent;
  readonly "org.bukkit.event.player.PlayerRecipeDiscoverEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerRecipeDiscoverEvent;
  readonly "org.bukkit.event.player.PlayerRegisterChannelEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerRegisterChannelEvent;
  readonly "org.bukkit.event.player.PlayerResourcePackStatusEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerResourcePackStatusEvent;
  readonly "org.bukkit.event.player.PlayerRespawnEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerRespawnEvent;
  readonly "org.bukkit.event.player.PlayerRiptideEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerRiptideEvent;
  readonly "org.bukkit.event.player.PlayerShearEntityEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerShearEntityEvent;
  readonly "org.bukkit.event.player.PlayerShowEntityEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerShowEntityEvent;
  readonly "org.bukkit.event.player.PlayerSignOpenEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerSignOpenEvent;
  readonly "org.bukkit.event.player.PlayerSpawnChangeEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerSpawnChangeEvent;
  readonly "org.bukkit.event.player.PlayerStatisticIncrementEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerStatisticIncrementEvent;
  readonly "org.bukkit.event.player.PlayerSwapHandItemsEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerSwapHandItemsEvent;
  readonly "org.bukkit.event.player.PlayerTakeLecternBookEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerTakeLecternBookEvent;
  readonly "org.bukkit.event.player.PlayerTeleportEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerTeleportEvent;
  readonly "org.bukkit.event.player.PlayerToggleFlightEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerToggleFlightEvent;
  readonly "org.bukkit.event.player.PlayerToggleSneakEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerToggleSneakEvent;
  readonly "org.bukkit.event.player.PlayerToggleSprintEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerToggleSprintEvent;
  readonly "org.bukkit.event.player.PlayerUnleashEntityEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerUnleashEntityEvent;
  readonly "org.bukkit.event.player.PlayerUnregisterChannelEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerUnregisterChannelEvent;
  readonly "org.bukkit.event.player.PlayerVelocityEvent": import('./binding-packages/org.bukkit.event.player.generated.js').PlayerVelocityEvent;
  readonly "org.bukkit.event.raid.RaidFinishEvent": import('./binding-packages/org.bukkit.event.raid.generated.js').RaidFinishEvent;
  readonly "org.bukkit.event.raid.RaidSpawnWaveEvent": import('./binding-packages/org.bukkit.event.raid.generated.js').RaidSpawnWaveEvent;
  readonly "org.bukkit.event.raid.RaidStopEvent": import('./binding-packages/org.bukkit.event.raid.generated.js').RaidStopEvent;
  readonly "org.bukkit.event.raid.RaidTriggerEvent": import('./binding-packages/org.bukkit.event.raid.generated.js').RaidTriggerEvent;
  readonly "org.bukkit.event.server.BroadcastMessageEvent": import('./binding-packages/org.bukkit.event.server.generated.js').BroadcastMessageEvent;
  readonly "org.bukkit.event.server.MapInitializeEvent": import('./binding-packages/org.bukkit.event.server.generated.js').MapInitializeEvent;
  readonly "org.bukkit.event.server.PluginDisableEvent": import('./binding-packages/org.bukkit.event.server.generated.js').PluginDisableEvent;
  readonly "org.bukkit.event.server.PluginEnableEvent": import('./binding-packages/org.bukkit.event.server.generated.js').PluginEnableEvent;
  readonly "org.bukkit.event.server.RemoteServerCommandEvent": import('./binding-packages/org.bukkit.event.server.generated.js').RemoteServerCommandEvent;
  readonly "org.bukkit.event.server.ServerCommandEvent": import('./binding-packages/org.bukkit.event.server.generated.js').ServerCommandEvent;
  readonly "org.bukkit.event.server.ServerListPingEvent": import('./binding-packages/org.bukkit.event.server.generated.js').ServerListPingEvent;
  readonly "org.bukkit.event.server.ServerLoadEvent": import('./binding-packages/org.bukkit.event.server.generated.js').ServerLoadEvent;
  readonly "org.bukkit.event.server.ServiceRegisterEvent": import('./binding-packages/org.bukkit.event.server.generated.js').ServiceRegisterEvent;
  readonly "org.bukkit.event.server.ServiceUnregisterEvent": import('./binding-packages/org.bukkit.event.server.generated.js').ServiceUnregisterEvent;
  readonly "org.bukkit.event.server.TabCompleteEvent": import('./binding-packages/org.bukkit.event.server.generated.js').TabCompleteEvent;
  readonly "org.bukkit.event.vehicle.VehicleBlockCollisionEvent": import('./binding-packages/org.bukkit.event.vehicle.generated.js').VehicleBlockCollisionEvent;
  readonly "org.bukkit.event.vehicle.VehicleCreateEvent": import('./binding-packages/org.bukkit.event.vehicle.generated.js').VehicleCreateEvent;
  readonly "org.bukkit.event.vehicle.VehicleDamageEvent": import('./binding-packages/org.bukkit.event.vehicle.generated.js').VehicleDamageEvent;
  readonly "org.bukkit.event.vehicle.VehicleDestroyEvent": import('./binding-packages/org.bukkit.event.vehicle.generated.js').VehicleDestroyEvent;
  readonly "org.bukkit.event.vehicle.VehicleEnterEvent": import('./binding-packages/org.bukkit.event.vehicle.generated.js').VehicleEnterEvent;
  readonly "org.bukkit.event.vehicle.VehicleEntityCollisionEvent": import('./binding-packages/org.bukkit.event.vehicle.generated.js').VehicleEntityCollisionEvent;
  readonly "org.bukkit.event.vehicle.VehicleExitEvent": import('./binding-packages/org.bukkit.event.vehicle.generated.js').VehicleExitEvent;
  readonly "org.bukkit.event.vehicle.VehicleMoveEvent": import('./binding-packages/org.bukkit.event.vehicle.generated.js').VehicleMoveEvent;
  readonly "org.bukkit.event.vehicle.VehicleUpdateEvent": import('./binding-packages/org.bukkit.event.vehicle.generated.js').VehicleUpdateEvent;
  readonly "org.bukkit.event.weather.LightningStrikeEvent": import('./binding-packages/org.bukkit.event.weather.generated.js').LightningStrikeEvent;
  readonly "org.bukkit.event.weather.ThunderChangeEvent": import('./binding-packages/org.bukkit.event.weather.generated.js').ThunderChangeEvent;
  readonly "org.bukkit.event.weather.WeatherChangeEvent": import('./binding-packages/org.bukkit.event.weather.generated.js').WeatherChangeEvent;
  readonly "org.bukkit.event.world.AsyncStructureGenerateEvent": import('./binding-packages/org.bukkit.event.world.generated.js').AsyncStructureGenerateEvent;
  readonly "org.bukkit.event.world.AsyncStructureSpawnEvent": import('./binding-packages/org.bukkit.event.world.generated.js').AsyncStructureSpawnEvent;
  readonly "org.bukkit.event.world.ChunkLoadEvent": import('./binding-packages/org.bukkit.event.world.generated.js').ChunkLoadEvent;
  readonly "org.bukkit.event.world.ChunkPopulateEvent": import('./binding-packages/org.bukkit.event.world.generated.js').ChunkPopulateEvent;
  readonly "org.bukkit.event.world.ChunkUnloadEvent": import('./binding-packages/org.bukkit.event.world.generated.js').ChunkUnloadEvent;
  readonly "org.bukkit.event.world.EntitiesLoadEvent": import('./binding-packages/org.bukkit.event.world.generated.js').EntitiesLoadEvent;
  readonly "org.bukkit.event.world.EntitiesUnloadEvent": import('./binding-packages/org.bukkit.event.world.generated.js').EntitiesUnloadEvent;
  readonly "org.bukkit.event.world.GenericGameEvent": import('./binding-packages/org.bukkit.event.world.generated.js').GenericGameEvent;
  readonly "org.bukkit.event.world.LootGenerateEvent": import('./binding-packages/org.bukkit.event.world.generated.js').LootGenerateEvent;
  readonly "org.bukkit.event.world.PortalCreateEvent": import('./binding-packages/org.bukkit.event.world.generated.js').PortalCreateEvent;
  readonly "org.bukkit.event.world.SpawnChangeEvent": import('./binding-packages/org.bukkit.event.world.generated.js').SpawnChangeEvent;
  readonly "org.bukkit.event.world.StructureGrowEvent": import('./binding-packages/org.bukkit.event.world.generated.js').StructureGrowEvent;
  readonly "org.bukkit.event.world.TimeSkipEvent": import('./binding-packages/org.bukkit.event.world.generated.js').TimeSkipEvent;
  readonly "org.bukkit.event.world.WorldInitEvent": import('./binding-packages/org.bukkit.event.world.generated.js').WorldInitEvent;
  readonly "org.bukkit.event.world.WorldLoadEvent": import('./binding-packages/org.bukkit.event.world.generated.js').WorldLoadEvent;
  readonly "org.bukkit.event.world.WorldSaveEvent": import('./binding-packages/org.bukkit.event.world.generated.js').WorldSaveEvent;
  readonly "org.bukkit.event.world.WorldUnloadEvent": import('./binding-packages/org.bukkit.event.world.generated.js').WorldUnloadEvent;
}
