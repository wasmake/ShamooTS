// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_dialog from './net.minecraft.server.dialog.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_stats from './net.minecraft.stats.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_animal_horse from './net.minecraft.world.entity.animal.horse.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_monster_warden from './net.minecraft.world.entity.monster.warden.generated.js';
import type * as j_net_minecraft_world_entity_projectile from './net.minecraft.world.entity.projectile.generated.js';
import type * as j_net_minecraft_world_food from './net.minecraft.world.food.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_item_trading from './net.minecraft.world.item.trading.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_scores from './net.minecraft.world.scores.generated.js';
import type * as j_org_bukkit_craftbukkit_entity from './org.bukkit.craftbukkit.entity.generated.js';

/** JVM class net.minecraft.world.entity.player.Abilities. */
export interface AbilitiesMembers {
  apply(arg0: Abilities_Packed): void;
  flying: boolean;
  flyingSpeed: number;
  getFlyingSpeed(): number;
  getWalkingSpeed(): number;
  instabuild: boolean;
  invulnerable: boolean;
  mayBuild: boolean;
  mayfly: boolean;
  pack(): Abilities_Packed;
  setFlyingSpeed(arg0: number): void;
  setWalkingSpeed(arg0: number): void;
  walkingSpeed: number;
}
export type Abilities = AbilitiesMembers;
export interface AbilitiesStatics {
  new(): Abilities;
}

/** JVM record net.minecraft.world.entity.player.Abilities$Packed. */
export interface Abilities_PackedMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  flying(): boolean;
  flyingSpeed(): number;
  hashCode(): number;
  instabuild(): boolean;
  invulnerable(): boolean;
  mayBuild(): boolean;
  mayFly(): boolean;
  toString(): string;
  walkingSpeed(): number;
}
export type Abilities_Packed = Abilities_PackedMembers & JavaOpaque<"java.lang.Record">;
export interface Abilities_PackedStatics {
  new(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: number, arg6: number): Abilities_Packed;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Abilities_Packed]>;
}

/** Live JVM enum net.minecraft.world.entity.player.ChatVisiblity; constants are host handles, not strings. */
export type ChatVisiblity = JavaEnum<"net.minecraft.world.entity.player.ChatVisiblity", "FULL" | "HIDDEN" | "SYSTEM"> & ChatVisiblityMembers;
export interface ChatVisiblityMembers {
  getCaption(): j_net_minecraft_network_chat.Component;
  getId(): number;
  getKey(): string;
}
export interface ChatVisiblityStatics {
  readonly FULL: ChatVisiblity;
  readonly HIDDEN: ChatVisiblity;
  readonly SYSTEM: ChatVisiblity;
  byId(arg0: number): ChatVisiblity;
  valueOf(arg0: string): ChatVisiblity;
  values(): Array<ChatVisiblity>;
}

/** JVM record net.minecraft.world.entity.player.Input. */
export interface Input_2Members {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  backward(): boolean;
  equals(arg0: object): boolean;
  forward(): boolean;
  hashCode(): number;
  jump(): boolean;
  left(): boolean;
  right(): boolean;
  shift(): boolean;
  sprint(): boolean;
  toString(): string;
}
export type Input_2 = Input_2Members & JavaOpaque<"java.lang.Record">;
export interface Input_2Statics {
  new(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean): Input_2;
  readonly EMPTY: Input_2;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, Input_2>;
}

/** JVM class net.minecraft.world.entity.player.Inventory. */
export interface InventoryMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world.Container, j_net_minecraft_world.Nameable];
  add(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  add(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  addAndPickItem(arg0: j_net_minecraft_world_item.ItemStack, arg1: number): void;
  canHold(arg0: j_net_minecraft_world_item.ItemStack): number;
  clearContent(): void;
  clearOrCountMatchingItems(arg0: JavaPredicate<j_net_minecraft_world_item.ItemStack>, arg1: number, arg2: j_net_minecraft_world.Container): number;
  contains(arg0: JavaPredicate<j_net_minecraft_world_item.ItemStack>): boolean;
  contains(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item>): boolean;
  contains(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  createInventoryUpdatePacket(arg0: number): j_net_minecraft_network_protocol_game.ClientboundSetPlayerInventoryPacket;
  dropAll(): void;
  readonly equipment: j_net_minecraft_world_entity.EntityEquipment;
  fillStackedContents(arg0: StackedItemContents): void;
  findSlotMatchingCraftingIngredient(arg0: JavaOpaque<"io.papermc.paper.inventory.recipe.ItemOrExact">, arg1: j_net_minecraft_world_item.ItemStack): number;
  findSlotMatchingItem(arg0: j_net_minecraft_world_item.ItemStack): number;
  getArmorContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getContainerSize(): number;
  getContents(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getExtraContent(): JavaList<j_net_minecraft_world_item.ItemStack>;
  getFreeSlot(): number;
  getItem(arg0: number): j_net_minecraft_world_item.ItemStack;
  getLocation(): JavaOpaque<"org.bukkit.Location">;
  getMaxStackSize(): number;
  getName(): j_net_minecraft_network_chat.Component;
  getNonEquipmentItems(): j_net_minecraft_core.NonNullList<j_net_minecraft_world_item.ItemStack>;
  getOwner(): JavaOpaque<"org.bukkit.inventory.InventoryHolder">;
  getSelectedItem(): j_net_minecraft_world_item.ItemStack;
  getSelectedSlot(): number;
  getSlotWithRemainingSpace(arg0: j_net_minecraft_world_item.ItemStack): number;
  getSuitableHotbarSlot(): number;
  getTimesChanged(): number;
  getViewers(): JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
  isEmpty(): boolean;
  load(arg0: j_net_minecraft_world_level_storage.ValueInput_TypedInputList<j_net_minecraft_world.ItemStackWithSlot>): void;
  onClose(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  onOpen(arg0: j_org_bukkit_craftbukkit_entity.CraftHumanEntity): void;
  pickSlot(arg0: number, arg1: number): void;
  placeItemBackInInventory(arg0: j_net_minecraft_world_item.ItemStack): void;
  placeItemBackInInventory(arg0: j_net_minecraft_world_item.ItemStack, arg1: boolean): void;
  readonly player: Player;
  removeFromSelected(arg0: boolean): j_net_minecraft_world_item.ItemStack;
  removeItem(arg0: number, arg1: number): j_net_minecraft_world_item.ItemStack;
  removeItem(arg0: j_net_minecraft_world_item.ItemStack): void;
  removeItemNoUpdate(arg0: number): j_net_minecraft_world_item.ItemStack;
  replaceWith(arg0: Inventory): void;
  save(arg0: j_net_minecraft_world_level_storage.ValueOutput_TypedOutputList<j_net_minecraft_world.ItemStackWithSlot>): void;
  setChanged(): void;
  setItem(arg0: number, arg1: j_net_minecraft_world_item.ItemStack): void;
  setMaxStackSize(arg0: number): void;
  setSelectedItem(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  setSelectedSlot(arg0: number): void;
  stillValid(arg0: Player): boolean;
  tick(): void;
  transaction: JavaList<JavaOpaque<"org.bukkit.entity.HumanEntity">>;
}
export type Inventory = InventoryMembers & j_net_minecraft_world.Container & j_net_minecraft_world.Nameable;
export interface InventoryStatics {
  new(arg0: Player, arg1: j_net_minecraft_world_entity.EntityEquipment): Inventory;
  readonly EQUIPMENT_SLOTS_SORTED_BY_INDEX: Array<j_net_minecraft_world_entity.EquipmentSlot>;
  readonly EQUIPMENT_SLOT_MAPPING: JavaOpaque<"it.unimi.dsi.fastutil.ints.Int2ObjectMap", [j_net_minecraft_world_entity.EquipmentSlot]>;
  readonly INVENTORY_SIZE: 36;
  readonly NOT_FOUND_INDEX: -1;
  readonly POP_TIME_DURATION: 5;
  readonly SELECTION_SIZE: 9;
  readonly SLOT_BODY_ARMOR: 41;
  readonly SLOT_OFFHAND: 40;
  readonly SLOT_SADDLE: 42;
  getSelectionSize(): number;
  isHotbarSlot(arg0: number): boolean;
  isUsableForCrafting(arg0: j_net_minecraft_world_item.ItemStack): boolean;
}

/** JVM abstract net.minecraft.world.entity.player.Player. */
export interface PlayerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.LivingEntity];
  actuallyHurt(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number, arg3: JavaOpaque<"org.bukkit.event.entity.EntityDamageEvent">): boolean;
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  addItem(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  affectsSpawning: boolean;
  aiStep(): void;
  animateHurt(arg0: number): void;
  attack(arg0: j_net_minecraft_world_entity.Entity): void;
  awardRecipes(arg0: JavaCollection<j_net_minecraft_world_item_crafting.RecipeHolder<object>>): number;
  awardRecipesByKey(arg0: JavaList<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_item_crafting.Recipe<object>>>): void;
  awardStat(arg0: j_net_minecraft_resources.ResourceLocation): void;
  awardStat(arg0: j_net_minecraft_resources.ResourceLocation, arg1: number): void;
  awardStat(arg0: j_net_minecraft_stats.Stat<object>): void;
  awardStat(arg0: j_net_minecraft_stats.Stat<object>, arg1: number): void;
  blockActionRestricted(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_level.GameType): boolean;
  blockInteractionRange(): number;
  blockUsingItem(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): void;
  bob: number;
  canBeHitByProjectile(): boolean;
  canBeSeenAsEnemy(): boolean;
  canDropItems(): boolean;
  canEat(arg0: boolean): boolean;
  canGlide(): boolean;
  canHarmPlayer(arg0: Player): boolean;
  canInteractWithBlock(arg0: j_net_minecraft_core.BlockPos, arg1: number): boolean;
  canInteractWithEntity(arg0: j_net_minecraft_world_entity.Entity, arg1: number): boolean;
  canInteractWithEntity(arg0: j_net_minecraft_world_phys.AABB, arg1: number): boolean;
  canPlayerFitWithinBlocksAndEntitiesWhen(arg0: j_net_minecraft_world_entity.Pose): boolean;
  canSimulateMovement(): boolean;
  canSprint(): boolean;
  canUseGameMasterBlocks(): boolean;
  causeFallDamage(arg0: number, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): boolean;
  causeFoodExhaustion(arg0: number): void;
  causeFoodExhaustion(arg0: number, arg1: JavaOpaque<"org.bukkit.event.entity.EntityExhaustionEvent$ExhaustionReason">): void;
  clientLoadedTimeoutTimer: number;
  closeContainer(): void;
  closeContainer(arg0: JavaOpaque<"org.bukkit.event.inventory.InventoryCloseEvent$Reason">): void;
  closeUnloadedInventory(arg0: JavaOpaque<"org.bukkit.event.inventory.InventoryCloseEvent$Reason">): void;
  containerMenu: j_net_minecraft_world_inventory.AbstractContainerMenu;
  createEquipment(): j_net_minecraft_world_entity.EntityEquipment;
  createItemCooldowns(): j_net_minecraft_world_item.ItemCooldowns;
  crit(arg0: j_net_minecraft_world_entity.Entity): void;
  currentExplosionCause: j_net_minecraft_world_entity.Entity | null;
  currentImpulseImpactPos: j_net_minecraft_world_phys.Vec3 | null;
  debugInfo(): string;
  readonly defaultFlySpeed: 0.02;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  destroyVanishingCursedItems(): void;
  die(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  displayClientMessage(arg0: j_net_minecraft_network_chat.Component, arg1: boolean): void;
  doAutoAttackOnTouch(arg0: j_net_minecraft_world_entity.LivingEntity): void;
  doCloseContainer(): void;
  doWaterSplashEffect(): void;
  doesEmitEquipEvent(arg0: j_net_minecraft_world_entity.EquipmentSlot): boolean;
  drop(arg0: j_net_minecraft_world_item.ItemStack, arg1: boolean): j_net_minecraft_world_entity_item.ItemEntity | null;
  dropEquipment(arg0: j_net_minecraft_server_level.ServerLevel): void;
  enchantmentSeed: number;
  enderChestInventory: j_net_minecraft_world_inventory.PlayerEnderChestContainer;
  entityInteractionRange(): number;
  experienceLevel: number;
  experienceProgress: number;
  fauxSleeping: boolean;
  fishing: j_net_minecraft_world_entity_projectile.FishingHook | null;
  flyingFallDamage: JavaOpaque<"net.kyori.adventure.util.TriState">;
  foodData: j_net_minecraft_world_food.FoodData;
  freeAt(arg0: j_net_minecraft_core.BlockPos): boolean;
  gameMode(): j_net_minecraft_world_level.GameType | null;
  gameProfile: JavaOpaque<"com.mojang.authlib.GameProfile">;
  getAbilities(): Abilities;
  getAbsorptionAmount(): number;
  getAttackStrengthScale(arg0: number): number;
  getBaseExperienceReward(arg0: j_net_minecraft_server_level.ServerLevel): number;
  getBlockSpeedFactor(): number;
  getBukkitEntity(): j_org_bukkit_craftbukkit_entity.CraftEntity;
  getBukkitEntity(): j_org_bukkit_craftbukkit_entity.CraftHumanEntity;
  getCooldowns(): j_net_minecraft_world_item.ItemCooldowns;
  getCurrentItemAttackStrengthDelay(): number;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getDefaultDimensions(arg0: j_net_minecraft_world_entity.Pose): j_net_minecraft_world_entity.EntityDimensions;
  getDestroySpeed(arg0: j_net_minecraft_world_level_block_state.BlockState): number;
  getDimensionChangingDelay(): number;
  getDismountPoses(): JavaOpaque<"com.google.common.collect.ImmutableList", [j_net_minecraft_world_entity.Pose]>;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getEnchantedDamage(arg0: j_net_minecraft_world_entity.Entity, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): number;
  getEnchantmentSeed(): number;
  getEnderChestInventory(): j_net_minecraft_world_inventory.PlayerEnderChestContainer;
  getFallSounds(): j_net_minecraft_world_entity.LivingEntity_Fallsounds;
  getFireImmuneTicks(): number;
  getFlyingSpeed(): number;
  getFoodData(): j_net_minecraft_world_food.FoodData;
  getGameProfile(): JavaOpaque<"com.mojang.authlib.GameProfile">;
  getHurtDir(): number;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getInventory(): Inventory;
  getLastDeathLocation(): JavaOptional<j_net_minecraft_core.GlobalPos>;
  getLuck(): number;
  getMainArm(): j_net_minecraft_world_entity.HumanoidArm;
  getMaxHeadRotationRelativeToBody(): number;
  getMovementEmission(): j_net_minecraft_world_entity.Entity_MovementEmission;
  getName(): j_net_minecraft_network_chat.Component;
  getPermissionLevel(): number;
  getProjectile(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  getRopeHoldPosition(arg0: number): j_net_minecraft_world_phys.Vec3;
  getScore(): number;
  getScoreboard(): j_net_minecraft_world_scores.Scoreboard;
  getScoreboardName(): string;
  getShoulderEntityLeft(): j_net_minecraft_nbt.CompoundTag;
  getShoulderEntityRight(): j_net_minecraft_nbt.CompoundTag;
  getSleepTimer(): number;
  getSlot(arg0: number): j_net_minecraft_world_entity.SlotAccess;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getSpeed(): number;
  getSwimHighSpeedSplashSound(): j_net_minecraft_sounds.SoundEvent;
  getSwimSound(): j_net_minecraft_sounds.SoundEvent;
  getSwimSplashSound(): j_net_minecraft_sounds.SoundEvent;
  getWardenSpawnTracker(): JavaOptional<j_net_minecraft_world_entity_monster_warden.WardenSpawnTracker>;
  getWeaponItem(): j_net_minecraft_world_item.ItemStack;
  getXpNeededForNextLevel(): number;
  giveExperienceLevels(arg0: number): void;
  giveExperiencePoints(arg0: number): void;
  handleCreativeModeItemDrop(arg0: j_net_minecraft_world_item.ItemStack): void;
  handleEntityEvent(arg0: number): void;
  hasClientLoaded(): boolean;
  hasContainerOpen(): boolean;
  hasCorrectToolForDrops(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  hasInfiniteMaterials(): boolean;
  hasPermissions(arg0: number): boolean;
  hurtArmor(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): void;
  hurtDir: number;
  hurtHelmet(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): void;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  increaseScore(arg0: number): void;
  interactOn(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  internalSetAbsorptionAmount(arg0: number): void;
  readonly inventoryMenu: j_net_minecraft_world_inventory.InventoryMenu;
  isAffectedByFluids(): boolean;
  isAlwaysExperienceDropper(): boolean;
  isAlwaysTicking(): boolean;
  isClientAuthoritative(): boolean;
  isCreative(): boolean;
  isEffectiveAi(): boolean;
  isHurt(): boolean;
  isIgnoringFallDamageFromCurrentImpulse(): boolean;
  isImmobile(): boolean;
  isInvulnerableTo(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource): boolean;
  isLocalClientAuthoritative(): boolean;
  isLocalPlayer(): boolean;
  isModelPartShown(arg0: PlayerModelPart): boolean;
  isPushedByFluid(): boolean;
  isReducedDebugInfo(): boolean;
  isScoping(): boolean;
  isSecondaryUseActive(): boolean;
  isSleepingLongEnough(): boolean;
  isSpectator(): boolean;
  isStayingOnGroundSurface(): boolean;
  isSwimming(): boolean;
  isTextFilteringEnabled(): boolean;
  jumpTriggerTime: number;
  killedEntity(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity.LivingEntity): boolean;
  magicCrit(arg0: j_net_minecraft_world_entity.Entity): void;
  makeStuckInBlock(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_phys.Vec3): void;
  mayBuild(): boolean;
  mayUseItemAt(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction, arg2: j_net_minecraft_world_item.ItemStack): boolean;
  maybeBackOffFromEdge(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_entity.MoverType): j_net_minecraft_world_phys.Vec3;
  oBob: number;
  oldLevel: number;
  onAboveBubbleColumn(arg0: boolean, arg1: j_net_minecraft_core.BlockPos): void;
  onClimbable(): boolean;
  onEnchantmentPerformed(arg0: j_net_minecraft_world_item.ItemStack, arg1: number): void;
  onInsideBubbleColumn(arg0: boolean): void;
  onUpdateAbilities(): void;
  openCommandBlock(arg0: j_net_minecraft_world_level_block_entity.CommandBlockEntity): void;
  openDialog(arg0: j_net_minecraft_core.Holder<j_net_minecraft_server_dialog.Dialog>): void;
  openHorseInventory(arg0: j_net_minecraft_world_entity_animal_horse.AbstractHorse, arg1: j_net_minecraft_world.Container): void;
  openItemGui(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world.InteractionHand): void;
  openJigsawBlock(arg0: j_net_minecraft_world_level_block_entity.JigsawBlockEntity): void;
  openMenu(arg0: j_net_minecraft_world.MenuProvider | null): JavaOptionalNumber | null;
  openMinecartCommandBlock(arg0: j_net_minecraft_world_level.BaseCommandBlock): void;
  openStructureBlock(arg0: j_net_minecraft_world_level_block_entity.StructureBlockEntity): void;
  openTestBlock(arg0: j_net_minecraft_world_level_block_entity.TestBlockEntity): void;
  openTestInstanceBlock(arg0: j_net_minecraft_world_level_block_entity.TestInstanceBlockEntity): void;
  openTextEdit(arg0: j_net_minecraft_world_level_block_entity.SignBlockEntity, arg1: boolean): void;
  playNotifySound(arg0: j_net_minecraft_sounds.SoundEvent, arg1: j_net_minecraft_sounds.SoundSource, arg2: number, arg3: number): void;
  playSound(arg0: j_net_minecraft_sounds.SoundEvent, arg1: number, arg2: number): void;
  playStepSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  preventsBlockDrops(): boolean;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  releaseLeftShoulderEntity(): j_net_minecraft_world_entity.Entity;
  releaseRightShoulderEntity(): j_net_minecraft_world_entity.Entity;
  remove(arg0: j_net_minecraft_world_entity.Entity_RemovalReason, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRemoveEvent$Cause"> | null): void | null;
  removeEntitiesOnShoulder(): void;
  removeVehicle(): void;
  removeVehicle(arg0: boolean): void;
  resetAttackStrengthTicker(): void;
  resetCurrentImpulseContext(): void;
  resetRecipes(arg0: JavaCollection<j_net_minecraft_world_item_crafting.RecipeHolder<object>>): number;
  resetStat(arg0: j_net_minecraft_stats.Stat<object>): void;
  respawn(): void;
  rideTick(): void;
  sendMerchantOffers(arg0: number, arg1: j_net_minecraft_world_item_trading.MerchantOffers, arg2: number, arg3: number, arg4: boolean, arg5: boolean): void;
  setClientLoaded(arg0: boolean): void;
  setEntityOnShoulder(arg0: j_net_minecraft_nbt.CompoundTag): boolean;
  setIgnoreFallDamageFromCurrentImpulse(arg0: boolean): void;
  setLastDeathLocation(arg0: JavaOptional<j_net_minecraft_core.GlobalPos>): void;
  setMainArm(arg0: j_net_minecraft_world_entity.HumanoidArm): void;
  setReducedDebugInfo(arg0: boolean): void;
  setRemainingFireTicks(arg0: number): void;
  setScore(arg0: number): void;
  setShoulderEntityLeft(arg0: j_net_minecraft_nbt.CompoundTag): void;
  setShoulderEntityRight(arg0: j_net_minecraft_nbt.CompoundTag): void;
  shouldBeSaved(): boolean;
  shouldRotateWithMinecart(): boolean;
  shouldShowName(): boolean;
  sleepCounter: number;
  startAutoSpinAttack(arg0: number, arg1: number, arg2: j_net_minecraft_world_item.ItemStack): void;
  startFallFlying(): void;
  startSleepInBed(arg0: j_net_minecraft_core.BlockPos): JavaOpaque<"com.mojang.datafixers.util.Either", [Player_BedSleepingProblem, j_net_minecraft_util.Unit]>;
  startSleepInBed(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): JavaOpaque<"com.mojang.datafixers.util.Either", [Player_BedSleepingProblem, j_net_minecraft_util.Unit]>;
  stopSleepInBed(arg0: boolean, arg1: boolean): void;
  stopSleeping(): void;
  sweepAttack(): void;
  takeXpDelay: number;
  tick(): void;
  tickClientLoadTimeout(): void;
  tickRegeneration(): void;
  totalExperience: number;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
  triggerRecipeCrafted(arg0: j_net_minecraft_world_item_crafting.RecipeHolder<object>, arg1: JavaList<j_net_minecraft_world_item.ItemStack>): void;
  tryReadyArrow(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack, arg2: JavaOpaque<"org.apache.commons.lang3.mutable.MutableBoolean">): boolean;
  tryResetCurrentImpulseContext(): void;
  tryToStartFallFlying(): boolean;
  updateIsUnderwater(): boolean;
  updatePlayerPose(): void;
  updateSwimming(): void;
  updateTutorialInventoryAction(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_inventory.ClickAction): void;
  wantsToStopRiding(): boolean;
  wasUnderwater: boolean;
  xCloak: number;
  xCloakO: number;
  yCloak: number;
  yCloakO: number;
  zCloak: number;
  zCloakO: number;
}
export type Player = PlayerMembers & j_net_minecraft_world_entity.LivingEntity;
export interface PlayerStatics {
  new(arg0: j_net_minecraft_world_level.Level, arg1: JavaOpaque<"com.mojang.authlib.GameProfile">): Player;
  readonly CLIENT_LOADED_TIMEOUT_TIME: 60;
  readonly CRAFTING_SLOT_OFFSET: 500;
  readonly CROUCH_BB_HEIGHT: 1.5;
  readonly DATA_PLAYER_MAIN_HAND: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly DATA_PLAYER_MODE_CUSTOMISATION: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly DATA_SHOULDER_LEFT: j_net_minecraft_network_syncher.EntityDataAccessor<j_net_minecraft_nbt.CompoundTag>;
  readonly DATA_SHOULDER_RIGHT: j_net_minecraft_network_syncher.EntityDataAccessor<j_net_minecraft_nbt.CompoundTag>;
  readonly DEFAULT_BLOCK_INTERACTION_RANGE: 4.5;
  readonly DEFAULT_ENTITY_INTERACTION_RANGE: 3;
  readonly DEFAULT_EYE_HEIGHT: 1.62;
  readonly DEFAULT_MAIN_HAND: j_net_minecraft_world_entity.HumanoidArm;
  readonly DEFAULT_MODEL_CUSTOMIZATION: 0;
  readonly DEFAULT_VEHICLE_ATTACHMENT: j_net_minecraft_world_phys.Vec3;
  readonly ENDER_SLOT_OFFSET: 200;
  readonly HELD_ITEM_SLOT: 499;
  readonly MAX_HEALTH: 20;
  readonly SLEEP_DURATION: 100;
  readonly STANDING_DIMENSIONS: j_net_minecraft_world_entity.EntityDimensions;
  readonly SWIMMING_BB_HEIGHT: 0.6;
  readonly SWIMMING_BB_WIDTH: 0.6;
  readonly WAKE_UP_DURATION: 10;
  createAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
}

/** Live JVM enum net.minecraft.world.entity.player.Player$BedSleepingProblem; constants are host handles, not strings. */
export type Player_BedSleepingProblem = JavaEnum<"net.minecraft.world.entity.player.Player$BedSleepingProblem", "NOT_POSSIBLE_HERE" | "NOT_POSSIBLE_NOW" | "NOT_SAFE" | "OBSTRUCTED" | "OTHER_PROBLEM" | "TOO_FAR_AWAY"> & Player_BedSleepingProblemMembers;
export interface Player_BedSleepingProblemMembers {
  getMessage(): j_net_minecraft_network_chat.Component | null;
}
export interface Player_BedSleepingProblemStatics {
  readonly NOT_POSSIBLE_HERE: Player_BedSleepingProblem;
  readonly NOT_POSSIBLE_NOW: Player_BedSleepingProblem;
  readonly NOT_SAFE: Player_BedSleepingProblem;
  readonly OBSTRUCTED: Player_BedSleepingProblem;
  readonly OTHER_PROBLEM: Player_BedSleepingProblem;
  readonly TOO_FAR_AWAY: Player_BedSleepingProblem;
  valueOf(arg0: string): Player_BedSleepingProblem;
  values(): Array<Player_BedSleepingProblem>;
}

/** JVM class net.minecraft.world.entity.player.PlayerEquipment. */
export interface PlayerEquipmentMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity.EntityEquipment];
  get(arg0: j_net_minecraft_world_entity.EquipmentSlot): j_net_minecraft_world_item.ItemStack;
  isEmpty(): boolean;
  set(arg0: j_net_minecraft_world_entity.EquipmentSlot, arg1: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
}
export type PlayerEquipment = PlayerEquipmentMembers & j_net_minecraft_world_entity.EntityEquipment;
export interface PlayerEquipmentStatics {
  new(arg0: Player): PlayerEquipment;
}

/** Live JVM enum net.minecraft.world.entity.player.PlayerModelPart; constants are host handles, not strings. */
export type PlayerModelPart = JavaEnum<"net.minecraft.world.entity.player.PlayerModelPart", "CAPE" | "HAT" | "JACKET" | "LEFT_PANTS_LEG" | "LEFT_SLEEVE" | "RIGHT_PANTS_LEG" | "RIGHT_SLEEVE"> & PlayerModelPartMembers;
export interface PlayerModelPartMembers {
  getBit(): number;
  getId(): string;
  getMask(): number;
  getName(): j_net_minecraft_network_chat.Component;
}
export interface PlayerModelPartStatics {
  readonly CAPE: PlayerModelPart;
  readonly HAT: PlayerModelPart;
  readonly JACKET: PlayerModelPart;
  readonly LEFT_PANTS_LEG: PlayerModelPart;
  readonly LEFT_SLEEVE: PlayerModelPart;
  readonly RIGHT_PANTS_LEG: PlayerModelPart;
  readonly RIGHT_SLEEVE: PlayerModelPart;
  valueOf(arg0: string): PlayerModelPart;
  values(): Array<PlayerModelPart>;
}

/** JVM record net.minecraft.world.entity.player.ProfileKeyPair. */
export interface ProfileKeyPairMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  dueRefresh(): boolean;
  equals(arg0: object): boolean;
  hashCode(): number;
  privateKey(): JavaOpaque<"java.security.PrivateKey">;
  publicKey(): ProfilePublicKey;
  refreshedAfter(): JavaOpaque<"java.time.Instant">;
  toString(): string;
}
export type ProfileKeyPair = ProfileKeyPairMembers & JavaOpaque<"java.lang.Record">;
export interface ProfileKeyPairStatics {
  new(arg0: JavaOpaque<"java.security.PrivateKey">, arg1: ProfilePublicKey, arg2: JavaOpaque<"java.time.Instant">): ProfileKeyPair;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ProfileKeyPair]>;
}

/** JVM record net.minecraft.world.entity.player.ProfilePublicKey. */
export interface ProfilePublicKeyMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  createSignatureValidator(): j_net_minecraft_util.SignatureValidator;
  data(): ProfilePublicKey_Data;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type ProfilePublicKey = ProfilePublicKeyMembers & JavaOpaque<"java.lang.Record">;
export interface ProfilePublicKeyStatics {
  new(arg0: ProfilePublicKey_Data): ProfilePublicKey;
  readonly EXPIRED_PROFILE_PUBLIC_KEY: j_net_minecraft_network_chat.Component;
  readonly EXPIRY_GRACE_PERIOD: JavaOpaque<"java.time.Duration">;
  readonly TRUSTED_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ProfilePublicKey]>;
  /** @throws net.minecraft.world.entity.player.ProfilePublicKey$ValidationException */
  createValidated(arg0: j_net_minecraft_util.SignatureValidator, arg1: JavaOpaque<"java.util.UUID">, arg2: ProfilePublicKey_Data): ProfilePublicKey;
}

/** JVM record net.minecraft.world.entity.player.ProfilePublicKey$Data. */
export interface ProfilePublicKey_DataMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  expiresAt(): JavaOpaque<"java.time.Instant">;
  hasExpired(): boolean;
  hasExpired(arg0: JavaOpaque<"java.time.Duration">): boolean;
  hashCode(): number;
  key(): JavaOpaque<"java.security.PublicKey">;
  keySignature(): Array<number>;
  toString(): string;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type ProfilePublicKey_Data = ProfilePublicKey_DataMembers & JavaOpaque<"java.lang.Record">;
export interface ProfilePublicKey_DataStatics {
  new(arg0: JavaOpaque<"java.time.Instant">, arg1: JavaOpaque<"java.security.PublicKey">, arg2: Array<number>): ProfilePublicKey_Data;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): ProfilePublicKey_Data;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [ProfilePublicKey_Data]>;
}

/** JVM class net.minecraft.world.entity.player.ProfilePublicKey$ValidationException. */
export interface ProfilePublicKey_ValidationExceptionMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_network_chat.ThrowingComponent];
  readonly kickCause: JavaOpaque<"org.bukkit.event.player.PlayerKickEvent$Cause">;
}
export type ProfilePublicKey_ValidationException = ProfilePublicKey_ValidationExceptionMembers & j_net_minecraft_network_chat.ThrowingComponent;
export interface ProfilePublicKey_ValidationExceptionStatics {
  new(arg0: j_net_minecraft_network_chat.Component): ProfilePublicKey_ValidationException;
  new(arg0: j_net_minecraft_network_chat.Component, arg1: JavaOpaque<"org.bukkit.event.player.PlayerKickEvent$Cause">): ProfilePublicKey_ValidationException;
}

/** JVM class net.minecraft.world.entity.player.StackedContents. */
export interface StackedContentsMembers<T = unknown> {
  account(arg0: T, arg1: number): void;
  readonly amounts: JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntOpenHashMap", [T]>;
  clear(): void;
  getResultUpperBound(arg0: JavaList<StackedContents_IngredientInfo<T>>): number;
  tryPick(arg0: JavaList<StackedContents_IngredientInfo<T>>, arg1: number, arg2: StackedContents_Output<T> | null): boolean | null;
  tryPickAll(arg0: JavaList<StackedContents_IngredientInfo<T>>, arg1: number, arg2: StackedContents_Output<T> | null): number | null;
}
export type StackedContents<T = unknown> = StackedContentsMembers<T>;
export interface StackedContentsStatics {
  new<T>(): StackedContents<T>;
}

/** JVM interface net.minecraft.world.entity.player.StackedContents$IngredientInfo. */
export interface StackedContents_IngredientInfoMembers<T = unknown> {
  acceptsItem(arg0: T): boolean;
}
export type StackedContents_IngredientInfo<T = unknown> = StackedContents_IngredientInfoMembers<T>;
export interface StackedContents_IngredientInfoStatics {
}

/** JVM interface net.minecraft.world.entity.player.StackedContents$Output. */
export interface StackedContents_OutputMembers<T = unknown> {
  accept(arg0: T): void;
}
export type StackedContents_Output<T = unknown> = StackedContents_OutputMembers<T>;
export interface StackedContents_OutputStatics {
}

/** JVM class net.minecraft.world.entity.player.StackedItemContents. */
export interface StackedItemContentsMembers {
  accountSimpleStack(arg0: j_net_minecraft_world_item.ItemStack): void;
  accountStack(arg0: j_net_minecraft_world_item.ItemStack): void;
  accountStack(arg0: j_net_minecraft_world_item.ItemStack, arg1: number): void;
  canCraft(arg0: JavaList<StackedContents_IngredientInfo<JavaOpaque<"io.papermc.paper.inventory.recipe.ItemOrExact">>>, arg1: StackedContents_Output<JavaOpaque<"io.papermc.paper.inventory.recipe.ItemOrExact">> | null): boolean | null;
  canCraft(arg0: j_net_minecraft_world_item_crafting.Recipe<object>, arg1: number, arg2: StackedContents_Output<JavaOpaque<"io.papermc.paper.inventory.recipe.ItemOrExact">> | null): boolean | null;
  canCraft(arg0: j_net_minecraft_world_item_crafting.Recipe<object>, arg1: StackedContents_Output<JavaOpaque<"io.papermc.paper.inventory.recipe.ItemOrExact">> | null): boolean | null;
  clear(): void;
  getBiggestCraftableStack(arg0: j_net_minecraft_world_item_crafting.Recipe<object>, arg1: number, arg2: StackedContents_Output<JavaOpaque<"io.papermc.paper.inventory.recipe.ItemOrExact">> | null): number | null;
  getBiggestCraftableStack(arg0: j_net_minecraft_world_item_crafting.Recipe<object>, arg1: StackedContents_Output<JavaOpaque<"io.papermc.paper.inventory.recipe.ItemOrExact">> | null): number | null;
  initializeExtras(arg0: j_net_minecraft_world_item_crafting.Recipe<object>, arg1: j_net_minecraft_world_item_crafting.CraftingInput | null): void | null;
  resetExtras(): void;
}
export type StackedItemContents = StackedItemContentsMembers;
export interface StackedItemContentsStatics {
  new(): StackedItemContents;
}
