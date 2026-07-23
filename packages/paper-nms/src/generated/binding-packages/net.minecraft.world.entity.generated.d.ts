// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_arguments from './net.minecraft.commands.arguments.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_component from './net.minecraft.core.component.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_network_codec from './net.minecraft.network.codec.generated.js';
import type * as j_net_minecraft_network_protocol from './net.minecraft.network.protocol.generated.js';
import type * as j_net_minecraft_network_protocol_game from './net.minecraft.network.protocol.game.generated.js';
import type * as j_net_minecraft_network_syncher from './net.minecraft.network.syncher.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_sounds from './net.minecraft.sounds.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_world from './net.minecraft.world.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity_ai from './net.minecraft.world.entity.ai.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_entity_ai_control from './net.minecraft.world.entity.ai.control.generated.js';
import type * as j_net_minecraft_world_entity_ai_goal from './net.minecraft.world.entity.ai.goal.generated.js';
import type * as j_net_minecraft_world_entity_ai_navigation from './net.minecraft.world.entity.ai.navigation.generated.js';
import type * as j_net_minecraft_world_entity_ai_sensing from './net.minecraft.world.entity.ai.sensing.generated.js';
import type * as j_net_minecraft_world_entity_ai_village from './net.minecraft.world.entity.ai.village.generated.js';
import type * as j_net_minecraft_world_entity_ambient from './net.minecraft.world.entity.ambient.generated.js';
import type * as j_net_minecraft_world_entity_animal from './net.minecraft.world.entity.animal.generated.js';
import type * as j_net_minecraft_world_entity_animal_allay from './net.minecraft.world.entity.animal.allay.generated.js';
import type * as j_net_minecraft_world_entity_animal_armadillo from './net.minecraft.world.entity.animal.armadillo.generated.js';
import type * as j_net_minecraft_world_entity_animal_axolotl from './net.minecraft.world.entity.animal.axolotl.generated.js';
import type * as j_net_minecraft_world_entity_animal_camel from './net.minecraft.world.entity.animal.camel.generated.js';
import type * as j_net_minecraft_world_entity_animal_frog from './net.minecraft.world.entity.animal.frog.generated.js';
import type * as j_net_minecraft_world_entity_animal_goat from './net.minecraft.world.entity.animal.goat.generated.js';
import type * as j_net_minecraft_world_entity_animal_horse from './net.minecraft.world.entity.animal.horse.generated.js';
import type * as j_net_minecraft_world_entity_animal_sheep from './net.minecraft.world.entity.animal.sheep.generated.js';
import type * as j_net_minecraft_world_entity_animal_sniffer from './net.minecraft.world.entity.animal.sniffer.generated.js';
import type * as j_net_minecraft_world_entity_animal_wolf from './net.minecraft.world.entity.animal.wolf.generated.js';
import type * as j_net_minecraft_world_entity_boss_enderdragon from './net.minecraft.world.entity.boss.enderdragon.generated.js';
import type * as j_net_minecraft_world_entity_boss_wither from './net.minecraft.world.entity.boss.wither.generated.js';
import type * as j_net_minecraft_world_entity_decoration from './net.minecraft.world.entity.decoration.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_monster from './net.minecraft.world.entity.monster.generated.js';
import type * as j_net_minecraft_world_entity_monster_breeze from './net.minecraft.world.entity.monster.breeze.generated.js';
import type * as j_net_minecraft_world_entity_monster_creaking from './net.minecraft.world.entity.monster.creaking.generated.js';
import type * as j_net_minecraft_world_entity_monster_hoglin from './net.minecraft.world.entity.monster.hoglin.generated.js';
import type * as j_net_minecraft_world_entity_monster_piglin from './net.minecraft.world.entity.monster.piglin.generated.js';
import type * as j_net_minecraft_world_entity_monster_warden from './net.minecraft.world.entity.monster.warden.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_entity_projectile from './net.minecraft.world.entity.projectile.generated.js';
import type * as j_net_minecraft_world_entity_projectile_windcharge from './net.minecraft.world.entity.projectile.windcharge.generated.js';
import type * as j_net_minecraft_world_entity_vehicle from './net.minecraft.world.entity.vehicle.generated.js';
import type * as j_net_minecraft_world_flag from './net.minecraft.world.flag.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_item_alchemy from './net.minecraft.world.item.alchemy.generated.js';
import type * as j_net_minecraft_world_item_component from './net.minecraft.world.item.component.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';
import type * as j_net_minecraft_world_item_enchantment_effects from './net.minecraft.world.item.enchantment.effects.generated.js';
import type * as j_net_minecraft_world_item_equipment from './net.minecraft.world.item.equipment.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_entity from './net.minecraft.world.level.entity.generated.js';
import type * as j_net_minecraft_world_level_gameevent from './net.minecraft.world.level.gameevent.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_material from './net.minecraft.world.level.material.generated.js';
import type * as j_net_minecraft_world_level_pathfinder from './net.minecraft.world.level.pathfinder.generated.js';
import type * as j_net_minecraft_world_level_portal from './net.minecraft.world.level.portal.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_phys_shapes from './net.minecraft.world.phys.shapes.generated.js';
import type * as j_net_minecraft_world_scores from './net.minecraft.world.scores.generated.js';
import type * as j_net_minecraft_world_waypoints from './net.minecraft.world.waypoints.generated.js';
import type * as j_org_bukkit_craftbukkit_attribute from './org.bukkit.craftbukkit.attribute.generated.js';
import type * as j_org_bukkit_craftbukkit_entity from './org.bukkit.craftbukkit.entity.generated.js';
import type * as j_org_bukkit_craftbukkit_event from './org.bukkit.craftbukkit.event.generated.js';

/** JVM abstract net.minecraft.world.entity.AgeableMob. */
export interface AgeableMobMembers {
  readonly __javaSupertypes?: readonly [PathfinderMob];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  age: number;
  ageBoundaryReached(): void;
  ageLocked: boolean;
  ageUp(arg0: number): void;
  ageUp(arg0: number, arg1: boolean): void;
  aiStep(): void;
  canBreed(): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: EntitySpawnReason, arg3: SpawnGroupData | null): SpawnGroupData | null;
  forcedAge: number;
  forcedAgeTimer: number;
  getAge(): number;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: AgeableMob): AgeableMob | null;
  getForcedAge(): number;
  getForcedAgeTimer(): number;
  inactiveTick(): void;
  isBaby(): boolean;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setAge(arg0: number): void;
  setBaby(arg0: boolean): void;
}
export type AgeableMob = AgeableMobMembers & PathfinderMob;
export interface AgeableMobStatics {
  new(arg0: EntityType<AgeableMob>, arg1: j_net_minecraft_world_level.Level): AgeableMob;
  readonly BABY_START_AGE: -24000;
  readonly DEFAULT_AGE: 0;
  readonly DEFAULT_FORCED_AGE: 0;
  getSpeedUpSecondsWhenFeeding(arg0: number): number;
}

/** JVM class net.minecraft.world.entity.AgeableMob$AgeableMobGroupData. */
export interface AgeableMob_AgeableMobGroupDataMembers {
  readonly __javaSupertypes?: readonly [SpawnGroupData];
  getBabySpawnChance(): number;
  getGroupSize(): number;
  increaseGroupSizeByOne(): void;
  isShouldSpawnBaby(): boolean;
}
export type AgeableMob_AgeableMobGroupData = AgeableMob_AgeableMobGroupDataMembers & SpawnGroupData;
export interface AgeableMob_AgeableMobGroupDataStatics {
  new(arg0: number): AgeableMob_AgeableMobGroupData;
  new(arg0: boolean): AgeableMob_AgeableMobGroupData;
  new(arg0: boolean, arg1: number): AgeableMob_AgeableMobGroupData;
}

/** JVM class net.minecraft.world.entity.AnimationState. */
export interface AnimationStateMembers {
  animateWhen(arg0: boolean, arg1: number): void;
  copyFrom(arg0: AnimationState): void;
  fastForward(arg0: number, arg1: number): void;
  getTimeInMillis(arg0: number): bigint;
  ifStarted(arg0: JavaConsumer<AnimationState>): void;
  isStarted(): boolean;
  start(arg0: number): void;
  startIfStopped(arg0: number): void;
  stop(): void;
}
export type AnimationState = AnimationStateMembers;
export interface AnimationStateStatics {
  new(): AnimationState;
}

/** JVM class net.minecraft.world.entity.AreaEffectCloud. */
export interface AreaEffectCloudMembers {
  readonly __javaSupertypes?: readonly [Entity, TraceableEntity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  addEffect(arg0: j_net_minecraft_world_effect.MobEffectInstance): void;
  applyImplicitComponent<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T): boolean;
  applyImplicitComponents(arg0: j_net_minecraft_core_component.DataComponentGetter): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  durationOnUse: number;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getDimensions(arg0: Pose): EntityDimensions;
  getDuration(): number;
  getDurationOnUse(): number;
  getOwner(): Entity | null;
  getOwner(): LivingEntity | null;
  getParticle(): j_net_minecraft_core_particles.ParticleOptions;
  getPistonPushReaction(): j_net_minecraft_world_level_material.PushReaction;
  getRadius(): number;
  getRadiusOnUse(): number;
  getRadiusPerTick(): number;
  getWaitTime(): number;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  inactiveTick(): void;
  isWaiting(): boolean;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  owner: EntityReference<LivingEntity> | null;
  potionContents: j_net_minecraft_world_item_alchemy.PotionContents;
  radiusOnUse: number;
  radiusPerTick: number;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  reapplicationDelay: number;
  refreshDimensions(): void;
  setCustomParticle(arg0: j_net_minecraft_core_particles.ParticleOptions | null): void | null;
  setDuration(arg0: number): void;
  setDurationOnUse(arg0: number): void;
  setOwner(arg0: LivingEntity | null): void | null;
  setPotionContents(arg0: j_net_minecraft_world_item_alchemy.PotionContents): void;
  setPotionDurationScale(arg0: number): void;
  setRadius(arg0: number): void;
  setRadiusOnUse(arg0: number): void;
  setRadiusPerTick(arg0: number): void;
  setWaitTime(arg0: number): void;
  setWaiting(arg0: boolean): void;
  tick(): void;
  waitTime: number;
}
export type AreaEffectCloud = AreaEffectCloudMembers & Entity & TraceableEntity;
export interface AreaEffectCloudStatics {
  new(arg0: EntityType<AreaEffectCloud>, arg1: j_net_minecraft_world_level.Level): AreaEffectCloud;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number): AreaEffectCloud;
  readonly DEFAULT_LINGERING_DURATION: 600;
  readonly DEFAULT_WIDTH: 6;
  readonly HEIGHT: 0.5;
  readonly INFINITE_DURATION: -1;
}

/** JVM interface net.minecraft.world.entity.Attackable. */
export interface AttackableMembers {
  getLastAttacker(): LivingEntity | null;
}
export type Attackable = AttackableMembers;
export interface AttackableStatics {
}

/** JVM record net.minecraft.world.entity.ConversionParams. */
export interface ConversionParamsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  keepEquipment(): boolean;
  preserveCanPickUpLoot(): boolean;
  team(): j_net_minecraft_world_scores.PlayerTeam | null;
  toString(): string;
  type(): ConversionType;
}
export type ConversionParams = ConversionParamsMembers & JavaOpaque<"java.lang.Record">;
export interface ConversionParamsStatics {
  new(arg0: ConversionType, arg1: boolean, arg2: boolean, arg3: j_net_minecraft_world_scores.PlayerTeam | null): ConversionParams;
  single(arg0: Mob, arg1: boolean, arg2: boolean): ConversionParams;
}

/** JVM interface net.minecraft.world.entity.ConversionParams$AfterConversion. */
export interface ConversionParams_AfterConversionMembers<T /* extends Mob */ = unknown> {
  finalizeConversion(arg0: T): void;
}
export type ConversionParams_AfterConversion<T /* extends Mob */ = unknown> = ConversionParams_AfterConversionMembers<T>;
export interface ConversionParams_AfterConversionStatics {
}

/** JVM interface net.minecraft.world.entity.ConversionParams$CancellingAfterConversion. */
export interface ConversionParams_CancellingAfterConversionMembers<T /* extends Mob */ = unknown> {
  finalizeConversionOrCancel(arg0: T): boolean;
}
export type ConversionParams_CancellingAfterConversion<T /* extends Mob */ = unknown> = ConversionParams_CancellingAfterConversionMembers<T>;
export interface ConversionParams_CancellingAfterConversionStatics {
}

/** Live JVM enum net.minecraft.world.entity.ConversionType; constants are host handles, not strings. */
export type ConversionType = JavaEnum<"net.minecraft.world.entity.ConversionType", "SINGLE" | "SPLIT_ON_DEATH"> & ConversionTypeMembers;
export interface ConversionTypeMembers {
  shouldDiscardAfterConversion(): boolean;
}
export interface ConversionTypeStatics {
  readonly SINGLE: ConversionType;
  readonly SPLIT_ON_DEATH: ConversionType;
  valueOf(arg0: string): ConversionType;
  values(): Array<ConversionType>;
}

/** JVM class net.minecraft.world.entity.Crackiness. */
export interface CrackinessMembers {
  byDamage(arg0: number, arg1: number): Crackiness_Level;
  byDamage(arg0: j_net_minecraft_world_item.ItemStack): Crackiness_Level;
  byFraction(arg0: number): Crackiness_Level;
}
export type Crackiness = CrackinessMembers;
export interface CrackinessStatics {
  readonly GOLEM: Crackiness;
  readonly WOLF_ARMOR: Crackiness;
}

/** Live JVM enum net.minecraft.world.entity.Crackiness$Level; constants are host handles, not strings. */
export type Crackiness_Level = JavaEnum<"net.minecraft.world.entity.Crackiness$Level", "HIGH" | "LOW" | "MEDIUM" | "NONE"> & Crackiness_LevelMembers;
export interface Crackiness_LevelMembers {
}
export interface Crackiness_LevelStatics {
  readonly HIGH: Crackiness_Level;
  readonly LOW: Crackiness_Level;
  readonly MEDIUM: Crackiness_Level;
  readonly NONE: Crackiness_Level;
  valueOf(arg0: string): Crackiness_Level;
  values(): Array<Crackiness_Level>;
}

/** JVM abstract net.minecraft.world.entity.Display. */
export interface DisplayMembers {
  readonly __javaSupertypes?: readonly [Entity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  affectedByCulling(): boolean;
  calculateInterpolationProgress(arg0: number): number;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getBillboardConstraints(): Display_BillboardConstraints;
  getBoundingBoxForCulling(): j_net_minecraft_world_phys.AABB;
  getBrightnessOverride(): j_net_minecraft_util.Brightness | null;
  getGlowColorOverride(): number;
  getHeight(): number;
  getInterpolation(): InterpolationHandler;
  getPistonPushReaction(): j_net_minecraft_world_level_material.PushReaction;
  getShadowRadius(): number;
  getShadowStrength(): number;
  getTeamColor(): number;
  getTransformationInterpolationDelay(): number;
  getTransformationInterpolationDuration(): number;
  getViewRange(): number;
  getWidth(): number;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isIgnoringBlockTriggers(): boolean;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  renderState(): Display_RenderState | null;
  setBillboardConstraints(arg0: Display_BillboardConstraints): void;
  setBrightnessOverride(arg0: j_net_minecraft_util.Brightness | null): void | null;
  setGlowColorOverride(arg0: number): void;
  setHeight(arg0: number): void;
  setPos(arg0: number, arg1: number, arg2: number): void;
  setShadowRadius(arg0: number): void;
  setShadowStrength(arg0: number): void;
  setTransformation(arg0: JavaOpaque<"com.mojang.math.Transformation">): void;
  setTransformationInterpolationDelay(arg0: number): void;
  setTransformationInterpolationDuration(arg0: number): void;
  setViewRange(arg0: number): void;
  setWidth(arg0: number): void;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  tick(): void;
  updateRenderState: boolean;
  updateRenderSubState(arg0: boolean, arg1: number): void;
}
export type Display = DisplayMembers & Entity;
export interface DisplayStatics {
  new(arg0: EntityType<object>, arg1: j_net_minecraft_world_level.Level): Display;
  readonly DATA_POS_ROT_INTERPOLATION_DURATION_ID: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly NO_BRIGHTNESS_OVERRIDE: -1;
  readonly TAG_BILLBOARD: "billboard";
  readonly TAG_BRIGHTNESS: "brightness";
  readonly TAG_GLOW_COLOR_OVERRIDE: "glow_color_override";
  readonly TAG_HEIGHT: "height";
  readonly TAG_POS_ROT_INTERPOLATION_DURATION: "teleport_duration";
  readonly TAG_SHADOW_RADIUS: "shadow_radius";
  readonly TAG_SHADOW_STRENGTH: "shadow_strength";
  readonly TAG_TRANSFORMATION: "transformation";
  readonly TAG_TRANSFORMATION_INTERPOLATION_DURATION: "interpolation_duration";
  readonly TAG_TRANSFORMATION_START_INTERPOLATION: "start_interpolation";
  readonly TAG_VIEW_RANGE: "view_range";
  readonly TAG_WIDTH: "width";
  createTransformation(arg0: j_net_minecraft_network_syncher.SynchedEntityData): JavaOpaque<"com.mojang.math.Transformation">;
}

/** Live JVM enum net.minecraft.world.entity.Display$BillboardConstraints; constants are host handles, not strings. */
export type Display_BillboardConstraints = JavaEnum<"net.minecraft.world.entity.Display$BillboardConstraints", "CENTER" | "FIXED" | "HORIZONTAL" | "VERTICAL"> & Display_BillboardConstraintsMembers;
export interface Display_BillboardConstraintsMembers {
  getSerializedName(): string;
}
export interface Display_BillboardConstraintsStatics {
  readonly CENTER: Display_BillboardConstraints;
  readonly FIXED: Display_BillboardConstraints;
  readonly HORIZONTAL: Display_BillboardConstraints;
  readonly VERTICAL: Display_BillboardConstraints;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [Display_BillboardConstraints]>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Display_BillboardConstraints]>;
  valueOf(arg0: string): Display_BillboardConstraints;
  values(): Array<Display_BillboardConstraints>;
}

/** JVM class net.minecraft.world.entity.Display$BlockDisplay. */
export interface Display_BlockDisplayMembers {
  readonly __javaSupertypes?: readonly [Display];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  blockRenderState(): Display_BlockDisplay_BlockRenderState | null;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setBlockState(arg0: j_net_minecraft_world_level_block_state.BlockState): void;
  updateRenderSubState(arg0: boolean, arg1: number): void;
}
export type Display_BlockDisplay = Display_BlockDisplayMembers & Display;
export interface Display_BlockDisplayStatics {
  new(arg0: EntityType<object>, arg1: j_net_minecraft_world_level.Level): Display_BlockDisplay;
  readonly TAG_BLOCK_STATE: "block_state";
}

/** JVM record net.minecraft.world.entity.Display$BlockDisplay$BlockRenderState. */
export interface Display_BlockDisplay_BlockRenderStateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  blockState(): j_net_minecraft_world_level_block_state.BlockState;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
}
export type Display_BlockDisplay_BlockRenderState = Display_BlockDisplay_BlockRenderStateMembers & JavaOpaque<"java.lang.Record">;
export interface Display_BlockDisplay_BlockRenderStateStatics {
  new(arg0: j_net_minecraft_world_level_block_state.BlockState): Display_BlockDisplay_BlockRenderState;
}

/** JVM interface net.minecraft.world.entity.Display$FloatInterpolator. */
export interface Display_FloatInterpolatorMembers {
  get(arg0: number): number;
}
export type Display_FloatInterpolator = Display_FloatInterpolatorMembers;
export interface Display_FloatInterpolatorStatics {
  constant(arg0: number): Display_FloatInterpolator;
}

/** JVM interface net.minecraft.world.entity.Display$GenericInterpolator. */
export interface Display_GenericInterpolatorMembers<T = unknown> {
  get(arg0: number): T;
}
export type Display_GenericInterpolator<T = unknown> = Display_GenericInterpolatorMembers<T>;
export interface Display_GenericInterpolatorStatics {
  constant<T>(arg0: T): Display_GenericInterpolator<T>;
}

/** JVM interface net.minecraft.world.entity.Display$IntInterpolator. */
export interface Display_IntInterpolatorMembers {
  get(arg0: number): number;
}
export type Display_IntInterpolator = Display_IntInterpolatorMembers;
export interface Display_IntInterpolatorStatics {
  constant(arg0: number): Display_IntInterpolator;
}

/** JVM class net.minecraft.world.entity.Display$ItemDisplay. */
export interface Display_ItemDisplayMembers {
  readonly __javaSupertypes?: readonly [Display];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getItemStack(): j_net_minecraft_world_item.ItemStack;
  getItemTransform(): j_net_minecraft_world_item.ItemDisplayContext;
  getSlot(arg0: number): SlotAccess;
  itemRenderState(): Display_ItemDisplay_ItemRenderState | null;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setItemStack(arg0: j_net_minecraft_world_item.ItemStack): void;
  setItemTransform(arg0: j_net_minecraft_world_item.ItemDisplayContext): void;
  updateRenderSubState(arg0: boolean, arg1: number): void;
}
export type Display_ItemDisplay = Display_ItemDisplayMembers & Display;
export interface Display_ItemDisplayStatics {
  new(arg0: EntityType<object>, arg1: j_net_minecraft_world_level.Level): Display_ItemDisplay;
}

/** JVM record net.minecraft.world.entity.Display$ItemDisplay$ItemRenderState. */
export interface Display_ItemDisplay_ItemRenderStateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  itemStack(): j_net_minecraft_world_item.ItemStack;
  itemTransform(): j_net_minecraft_world_item.ItemDisplayContext;
  toString(): string;
}
export type Display_ItemDisplay_ItemRenderState = Display_ItemDisplay_ItemRenderStateMembers & JavaOpaque<"java.lang.Record">;
export interface Display_ItemDisplay_ItemRenderStateStatics {
  new(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemDisplayContext): Display_ItemDisplay_ItemRenderState;
}

/** JVM record net.minecraft.world.entity.Display$RenderState. */
export interface Display_RenderStateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  billboardConstraints(): Display_BillboardConstraints;
  brightnessOverride(): number;
  equals(arg0: object): boolean;
  glowColorOverride(): number;
  hashCode(): number;
  shadowRadius(): Display_FloatInterpolator;
  shadowStrength(): Display_FloatInterpolator;
  toString(): string;
  transformation(): Display_GenericInterpolator<JavaOpaque<"com.mojang.math.Transformation">>;
}
export type Display_RenderState = Display_RenderStateMembers & JavaOpaque<"java.lang.Record">;
export interface Display_RenderStateStatics {
  new(arg0: Display_GenericInterpolator<JavaOpaque<"com.mojang.math.Transformation">>, arg1: Display_BillboardConstraints, arg2: number, arg3: Display_FloatInterpolator, arg4: Display_FloatInterpolator, arg5: number): Display_RenderState;
}

/** JVM class net.minecraft.world.entity.Display$TextDisplay. */
export interface Display_TextDisplayMembers {
  readonly __javaSupertypes?: readonly [Display];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  cacheDisplay(arg0: Display_TextDisplay_LineSplitter): Display_TextDisplay_CachedInfo;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getBackgroundColor(): number;
  getFlags(): number;
  getLineWidth(): number;
  getText(): j_net_minecraft_network_chat.Component;
  getTextOpacity(): number;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setFlags(arg0: number): void;
  setText(arg0: j_net_minecraft_network_chat.Component): void;
  setTextOpacity(arg0: number): void;
  textRenderState(): Display_TextDisplay_TextRenderState | null;
  updateRenderSubState(arg0: boolean, arg1: number): void;
}
export type Display_TextDisplay = Display_TextDisplayMembers & Display;
export interface Display_TextDisplayStatics {
  new(arg0: EntityType<object>, arg1: j_net_minecraft_world_level.Level): Display_TextDisplay;
  readonly DATA_BACKGROUND_COLOR_ID: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly DATA_LINE_WIDTH_ID: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly FLAG_ALIGN_LEFT: 8;
  readonly FLAG_ALIGN_RIGHT: 16;
  readonly FLAG_SEE_THROUGH: 2;
  readonly FLAG_SHADOW: 1;
  readonly FLAG_USE_DEFAULT_BACKGROUND: 4;
  readonly INITIAL_BACKGROUND: 1073741824;
  readonly TAG_TEXT: "text";
  getAlign(arg0: number): Display_TextDisplay_Align;
}

/** Live JVM enum net.minecraft.world.entity.Display$TextDisplay$Align; constants are host handles, not strings. */
export type Display_TextDisplay_Align = JavaEnum<"net.minecraft.world.entity.Display$TextDisplay$Align", "CENTER" | "LEFT" | "RIGHT"> & Display_TextDisplay_AlignMembers;
export interface Display_TextDisplay_AlignMembers {
  getSerializedName(): string;
}
export interface Display_TextDisplay_AlignStatics {
  readonly CENTER: Display_TextDisplay_Align;
  readonly LEFT: Display_TextDisplay_Align;
  readonly RIGHT: Display_TextDisplay_Align;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Display_TextDisplay_Align]>;
  valueOf(arg0: string): Display_TextDisplay_Align;
  values(): Array<Display_TextDisplay_Align>;
}

/** JVM record net.minecraft.world.entity.Display$TextDisplay$CachedInfo. */
export interface Display_TextDisplay_CachedInfoMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  lines(): JavaList<Display_TextDisplay_CachedLine>;
  toString(): string;
  width(): number;
}
export type Display_TextDisplay_CachedInfo = Display_TextDisplay_CachedInfoMembers & JavaOpaque<"java.lang.Record">;
export interface Display_TextDisplay_CachedInfoStatics {
  new(arg0: JavaList<Display_TextDisplay_CachedLine>, arg1: number): Display_TextDisplay_CachedInfo;
}

/** JVM record net.minecraft.world.entity.Display$TextDisplay$CachedLine. */
export interface Display_TextDisplay_CachedLineMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  contents(): j_net_minecraft_util.FormattedCharSequence;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  width(): number;
}
export type Display_TextDisplay_CachedLine = Display_TextDisplay_CachedLineMembers & JavaOpaque<"java.lang.Record">;
export interface Display_TextDisplay_CachedLineStatics {
  new(arg0: j_net_minecraft_util.FormattedCharSequence, arg1: number): Display_TextDisplay_CachedLine;
}

/** JVM interface net.minecraft.world.entity.Display$TextDisplay$LineSplitter. */
export interface Display_TextDisplay_LineSplitterMembers {
  split(arg0: j_net_minecraft_network_chat.Component, arg1: number): Display_TextDisplay_CachedInfo;
}
export type Display_TextDisplay_LineSplitter = Display_TextDisplay_LineSplitterMembers;
export interface Display_TextDisplay_LineSplitterStatics {
}

/** JVM record net.minecraft.world.entity.Display$TextDisplay$TextRenderState. */
export interface Display_TextDisplay_TextRenderStateMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  backgroundColor(): Display_IntInterpolator;
  equals(arg0: object): boolean;
  flags(): number;
  hashCode(): number;
  lineWidth(): number;
  text(): j_net_minecraft_network_chat.Component;
  textOpacity(): Display_IntInterpolator;
  toString(): string;
}
export type Display_TextDisplay_TextRenderState = Display_TextDisplay_TextRenderStateMembers & JavaOpaque<"java.lang.Record">;
export interface Display_TextDisplay_TextRenderStateStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: number, arg2: Display_IntInterpolator, arg3: Display_IntInterpolator, arg4: number): Display_TextDisplay_TextRenderState;
}

/** JVM record net.minecraft.world.entity.DropChances. */
export interface DropChancesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  byEquipment(): JavaMap<EquipmentSlot, number>;
  byEquipment(arg0: EquipmentSlot): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  isPreserved(arg0: EquipmentSlot): boolean;
  toString(): string;
  withEquipmentChance(arg0: EquipmentSlot, arg1: number): DropChances;
  withGuaranteedDrop(arg0: EquipmentSlot): DropChances;
}
export type DropChances = DropChancesMembers & JavaOpaque<"java.lang.Record">;
export interface DropChancesStatics {
  new(arg0: JavaMap<EquipmentSlot, number>): DropChances;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DropChances]>;
  readonly DEFAULT: DropChances;
  readonly DEFAULT_EQUIPMENT_DROP_CHANCE: 0.085;
  readonly PRESERVE_ITEM_DROP_CHANCE: 2;
  readonly PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: 1;
}

/** JVM class net.minecraft.world.entity.ElytraAnimationState. */
export interface ElytraAnimationStateMembers {
  getRotX(arg0: number): number;
  getRotY(arg0: number): number;
  getRotZ(arg0: number): number;
  tick(): void;
}
export type ElytraAnimationState = ElytraAnimationStateMembers;
export interface ElytraAnimationStateStatics {
  new(arg0: LivingEntity): ElytraAnimationState;
}

/** JVM abstract net.minecraft.world.entity.Entity. */
export interface EntityMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.entity.ChunkSystemEntity">, JavaOpaque<"ca.spottedleaf.moonrise.patches.entity_tracker.EntityTrackerEntity">, j_net_minecraft_core_component.DataComponentGetter, j_net_minecraft_network_syncher.SyncedDataHolder, j_net_minecraft_world.Nameable, j_net_minecraft_world_level_entity.EntityAccess, j_net_minecraft_world_scores.ScoreHolder];
  absSnapRotationTo(arg0: number, arg1: number): void;
  absSnapTo(arg0: number, arg1: number, arg2: number): void;
  absSnapTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
  activatedImmunityTick: bigint;
  activatedTick: bigint;
  readonly activationType: JavaOpaque<"io.papermc.paper.entity.activation.ActivationType">;
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput, arg1: boolean): void;
  addDeltaMovement(arg0: j_net_minecraft_world_phys.Vec3): void;
  addPassenger(arg0: Entity): void;
  addTag(arg0: string): boolean;
  adjustSpawnLocation(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  animateHurt(arg0: number): void;
  applyComponentsFromItemStack(arg0: j_net_minecraft_world_item.ItemStack): void;
  applyEffectsFromBlocks(): void;
  applyEffectsFromBlocks(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3): void;
  applyGravity(): void;
  applyImplicitComponent<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T): boolean;
  applyImplicitComponentIfPresent<T>(arg0: j_net_minecraft_core_component.DataComponentGetter, arg1: j_net_minecraft_core_component.DataComponentType<T>): boolean;
  applyImplicitComponents(arg0: j_net_minecraft_core_component.DataComponentGetter): void;
  awardKillScore(arg0: Entity, arg1: j_net_minecraft_world_damagesource.DamageSource): void;
  baseTick(): void;
  blockPosition(): j_net_minecraft_core.BlockPos;
  blocksBuilding: boolean;
  boardingCooldown: number;
  broadcastToPlayer(arg0: j_net_minecraft_server_level.ServerPlayer): boolean;
  calculateUpVector(arg0: number, arg1: number): j_net_minecraft_world_phys.Vec3;
  calculateViewVector(arg0: number, arg1: number): j_net_minecraft_world_phys.Vec3;
  callPortalEvent(arg0: Entity, arg1: JavaOpaque<"org.bukkit.Location">, arg2: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">, arg3: number, arg4: number): j_org_bukkit_craftbukkit_event.CraftPortalEvent | null;
  canAddPassenger(arg0: Entity): boolean;
  canBeCollidedWith(arg0: Entity | null): boolean | null;
  canBeHitByProjectile(): boolean;
  canCollideWith(arg0: Entity): boolean;
  canCollideWithBukkit(arg0: Entity): boolean;
  canControlVehicle(): boolean;
  canFreeze(): boolean;
  canRide(arg0: Entity): boolean;
  canSimulateMovement(): boolean;
  canSpawnSprintParticle(): boolean;
  canSprint(): boolean;
  canTeleport(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level.Level): boolean;
  canUsePortal(arg0: boolean): boolean;
  causeFallDamage(arg0: number, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): boolean;
  checkBelowWorld(): void;
  checkDespawn(): void;
  checkFallDamage(arg0: number, arg1: boolean, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_core.BlockPos): void;
  checkFallDistanceAccumulation(): void;
  checkSupportingBlock(arg0: boolean, arg1: j_net_minecraft_world_phys.Vec3 | null): void | null;
  chunkPosition(): j_net_minecraft_world_level.ChunkPos;
  clearFire(): void;
  clearFreeze(): void;
  clearMovementThisTick(): void;
  closerThan(arg0: Entity, arg1: number): boolean;
  closerThan(arg0: Entity, arg1: number, arg2: number): boolean;
  collidedWithFluid(arg0: j_net_minecraft_world_level_material.FluidState, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_phys.Vec3, arg3: j_net_minecraft_world_phys.Vec3): boolean;
  collidedWithShapeMovingFrom(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: JavaList<j_net_minecraft_world_phys.AABB>): boolean;
  collisionLoadChunks: boolean;
  considersEntityAsAlly(arg0: Entity): boolean;
  copyPosition(arg0: Entity): void;
  couldAcceptPassenger(): boolean;
  countPlayerPassengers(): number;
  createCommandSourceStackForNameResolution(arg0: j_net_minecraft_server_level.ServerLevel): j_net_minecraft_commands.CommandSourceStack;
  createHoverEvent(): j_net_minecraft_network_chat.HoverEvent;
  damageSources(): j_net_minecraft_world_damagesource.DamageSources;
  dampensVibrations(): boolean;
  readonly defaultActivationState: boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  deflection(arg0: j_net_minecraft_world_entity_projectile.Projectile): j_net_minecraft_world_entity_projectile.ProjectileDeflection;
  discard(): void;
  discard(arg0: JavaOpaque<"org.bukkit.event.entity.EntityRemoveEvent$Cause"> | null): void | null;
  dismountTo(arg0: number, arg1: number, arg2: number): void;
  dismountsUnderwater(): boolean;
  displayFireAnimation(): boolean;
  distanceTo(arg0: Entity): number;
  distanceToSqr(arg0: number, arg1: number, arg2: number): number;
  distanceToSqr(arg0: Entity): number;
  distanceToSqr(arg0: j_net_minecraft_world_phys.Vec3): number;
  doCheckFallDamage(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
  doWaterSplashEffect(): void;
  dropAllLeashConnections(arg0: j_net_minecraft_world_entity_player.Player | null): boolean | null;
  dropAllLeashConnections(arg0: j_net_minecraft_world_entity_player.Player | null, arg1: j_net_minecraft_world.InteractionHand | null): boolean | null;
  ejectPassengers(): void;
  readonly entityData: j_net_minecraft_network_syncher.SynchedEntityData;
  equals(arg0: object): boolean;
  extinguishFire(): void;
  fallDistance: number;
  fillCrashReportCategory(arg0: j_net_minecraft.CrashReportCategory): void;
  fireImmune(): boolean;
  firstTick: boolean;
  fixedPose: boolean;
  fixupDimensions(): void;
  fluidHeight: JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2DoubleMap", [j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_material.Fluid>]>;
  flyDist: number;
  forceDrops: boolean;
  forceSetRotation(arg0: number, arg1: number): void;
  freezeLocked: boolean;
  fromNetherPortal: boolean;
  fudgePositionAfterSizeChange(arg0: EntityDimensions): boolean;
  gameEvent(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>): void;
  gameEvent(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_level_gameevent.GameEvent>, arg1: Entity | null): void | null;
  generation: boolean;
  get<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>): T | null;
  getAddEntityPacket(arg0: j_net_minecraft_server_level.ServerEntity): j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>;
  getAirSupply(): number;
  getAttachments(): EntityAttachments;
  getBbHeight(): number;
  getBbWidth(): number;
  getBlockExplosionResistance(arg0: j_net_minecraft_world_level.Explosion, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: j_net_minecraft_world_level_material.FluidState, arg5: number): number;
  getBlockJumpFactor(): number;
  getBlockPosBelowThatAffectsMyMovement(): j_net_minecraft_core.BlockPos;
  getBlockSpeedFactor(): number;
  getBlockStateOn(): j_net_minecraft_world_level_block_state.BlockState;
  getBlockStateOnLegacy(): j_net_minecraft_world_level_block_state.BlockState;
  getBlockX(): number;
  getBlockY(): number;
  getBlockZ(): number;
  getBoundingBox(): j_net_minecraft_world_phys.AABB;
  getBoundingBoxAt(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_phys.AABB;
  getBukkitEntity(): j_org_bukkit_craftbukkit_entity.CraftEntity;
  getBukkitEntityRaw(): j_org_bukkit_craftbukkit_entity.CraftEntity | null;
  getBukkitYaw(): number;
  getControlledVehicle(): Entity | null;
  getControllingPassenger(): LivingEntity | null;
  getCustomName(): j_net_minecraft_network_chat.Component | null;
  getDefaultGravity(): number;
  getDefaultMaxAirSupply(): number;
  getDeltaMovement(): j_net_minecraft_world_phys.Vec3;
  getDimensionChangingDelay(): number;
  getDimensions(arg0: Pose): EntityDimensions;
  getDirection(): j_net_minecraft_core.Direction;
  getDismountLocationForPassenger(arg0: LivingEntity): j_net_minecraft_world_phys.Vec3;
  getDisplayName(): j_net_minecraft_network_chat.Component;
  getEncodeId(): string | null;
  getEncodeId(arg0: boolean): string | null;
  getEntityData(): j_net_minecraft_network_syncher.SynchedEntityData;
  getEyeHeight(): number;
  getEyeHeight(arg0: Pose): number;
  getEyePosition(): j_net_minecraft_world_phys.Vec3;
  getEyePosition(arg0: number): j_net_minecraft_world_phys.Vec3;
  getEyeY(): number;
  getFireImmuneTicks(): number;
  getFirstPassenger(): Entity | null;
  getFluidHeight(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_material.Fluid>): number;
  getFluidJumpThreshold(): number;
  getForward(): j_net_minecraft_world_phys.Vec3;
  getGravity(): number;
  getHandHoldingItemAngle(arg0: j_net_minecraft_world_item.Item): j_net_minecraft_world_phys.Vec3;
  getId(): number;
  getInBlockState(): j_net_minecraft_world_level_block_state.BlockState;
  getIndirectPassengers(): Iterable<Entity>;
  getInterpolation(): InterpolationHandler | null;
  getKnownMovement(): j_net_minecraft_world_phys.Vec3;
  getLightLevelDependentMagicValue(): number;
  getLightProbePosition(arg0: number): j_net_minecraft_world_phys.Vec3;
  getLookAngle(): j_net_minecraft_world_phys.Vec3;
  getLootTable(): JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>;
  getMaxAirSupply(): number;
  getMaxFallDistance(): number;
  getMotionDirection(): j_net_minecraft_core.Direction;
  getMovementEmission(): Entity_MovementEmission;
  getName(): j_net_minecraft_network_chat.Component;
  getNearestViewDirection(): j_net_minecraft_core.Direction;
  getOnPos(): j_net_minecraft_core.BlockPos;
  getOnPos(arg0: number): j_net_minecraft_core.BlockPos;
  getOnPosLegacy(): j_net_minecraft_core.BlockPos;
  getPassengerAttachmentPoint(arg0: Entity, arg1: EntityDimensions, arg2: number): j_net_minecraft_world_phys.Vec3;
  getPassengerRidingPosition(arg0: Entity): j_net_minecraft_world_phys.Vec3;
  getPassengers(): JavaList<Entity>;
  getPassengersAndSelf(): JavaOpaque<"java.util.stream.Stream", [Entity]>;
  getPercentFrozen(): number;
  getPickRadius(): number;
  getPickResult(): j_net_minecraft_world_item.ItemStack | null;
  getPistonPushReaction(): j_net_minecraft_world_level_material.PushReaction;
  getPortalCooldown(): number;
  getPose(): Pose;
  getPosition(arg0: number): j_net_minecraft_world_phys.Vec3;
  getPositionCodec(): j_net_minecraft_network_protocol_game.VecDeltaCodec;
  getPreciseBodyRotation(arg0: number): number;
  getPrimaryStepSoundBlockPos(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  getQuadLeashHolderOffsets(): Array<j_net_minecraft_world_phys.Vec3>;
  getRandom(): j_net_minecraft_util.RandomSource;
  getRandomX(arg0: number): number;
  getRandomY(): number;
  getRandomZ(arg0: number): number;
  getRelativePortalPosition(arg0: j_net_minecraft_core.Direction_Axis, arg1: j_net_minecraft.BlockUtil_FoundRectangle): j_net_minecraft_world_phys.Vec3;
  getRemainingFireTicks(): number;
  getRemovalReason(): Entity_RemovalReason | null;
  getRequiresPrecisePosition(): boolean;
  getRootVehicle(): Entity;
  getRopeHoldPosition(arg0: number): j_net_minecraft_world_phys.Vec3;
  getRotationVector(): j_net_minecraft_world_phys.Vec2;
  getScoreboardName(): string;
  getSelfAndPassengers(): JavaOpaque<"java.util.stream.Stream", [Entity]>;
  getServer(): j_net_minecraft_server.MinecraftServer | null;
  getSharedFlag(arg0: number): boolean;
  getSlot(arg0: number): SlotAccess;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getStringUUID(): string;
  getSwimHighSpeedSplashSound(): j_net_minecraft_sounds.SoundEvent;
  getSwimSound(): j_net_minecraft_sounds.SoundEvent;
  getSwimSplashSound(): j_net_minecraft_sounds.SoundEvent;
  getTags(): JavaSet<string>;
  getTeam(): j_net_minecraft_world_scores.PlayerTeam | null;
  getTeamColor(): number;
  getTicksFrozen(): number;
  getTicksRequiredToFreeze(): number;
  getType(): EntityType<object>;
  getTypeName(): j_net_minecraft_network_chat.Component;
  getUUID(): JavaOpaque<"java.util.UUID">;
  getUpVector(arg0: number): j_net_minecraft_world_phys.Vec3;
  getVehicle(): Entity | null;
  getVehicleAttachmentPoint(arg0: Entity): j_net_minecraft_world_phys.Vec3;
  getViewVector(arg0: number): j_net_minecraft_world_phys.Vec3;
  getViewXRot(arg0: number): number;
  getViewYRot(arg0: number): number;
  getVisualRotationYInDegrees(): number;
  getWeaponItem(): j_net_minecraft_world_item.ItemStack | null;
  getX(): number;
  getX(arg0: number): number;
  getXRot(): number;
  getXRot(arg0: number): number;
  getY(): number;
  getY(arg0: number): number;
  getYHeadRot(): number;
  getYRot(): number;
  getYRot(arg0: number): number;
  getZ(): number;
  getZ(arg0: number): number;
  handleDamageEvent(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  handleEntityEvent(arg0: number): void;
  handlePortal(): void;
  hasControllingPassenger(): boolean;
  hasCustomName(): boolean;
  hasExactlyOnePlayerPassenger(): boolean;
  hasGlowingTag(): boolean;
  hasImpulse: boolean;
  hasIndirectPassenger(arg0: Entity): boolean;
  hasPassenger(arg0: JavaPredicate<Entity>): boolean;
  hasPassenger(arg0: Entity): boolean;
  hasPose(arg0: Pose): boolean;
  hashCode(): number;
  horizontalCollision: boolean;
  hurt(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): void;
  hurtClient(arg0: j_net_minecraft_world_damagesource.DamageSource): boolean;
  hurtMarked: boolean;
  hurtOrSimulate(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  igniteForSeconds(arg0: number): void;
  igniteForSeconds(arg0: number, arg1: boolean): void;
  igniteForTicks(arg0: number): void;
  ignoreExplosion(arg0: j_net_minecraft_world_level.Explosion): boolean;
  inWorld: boolean;
  inactiveTick(): void;
  interact(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  interactAt(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  invulnerableTime: number;
  is(arg0: Entity): boolean;
  isAffectedByBlocks(): boolean;
  isAlive(): boolean;
  isAlliedTo(arg0: Entity | null): boolean | null;
  isAlliedTo(arg0: j_net_minecraft_world_scores.Team | null): boolean | null;
  isAlwaysTicking(): boolean;
  isAttackable(): boolean;
  isClientAuthoritative(): boolean;
  isCollidable(arg0: boolean): boolean;
  isColliding(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): boolean;
  isCrouching(): boolean;
  isCurrentlyGlowing(): boolean;
  isCustomNameVisible(): boolean;
  isDescending(): boolean;
  isDiscrete(): boolean;
  isEffectiveAi(): boolean;
  isEyeInFluid(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_material.Fluid>): boolean;
  isFlapping(): boolean;
  isFlyingVehicle(): boolean;
  isFree(arg0: number, arg1: number, arg2: number): boolean;
  isFreezing(): boolean;
  isFullyFrozen(): boolean;
  isHorizontalCollisionMinor(arg0: j_net_minecraft_world_phys.Vec3): boolean;
  isIgnoringBlockTriggers(): boolean;
  isInClouds(): boolean;
  isInLava(): boolean;
  isInLiquid(): boolean;
  isInPowderSnow: boolean;
  isInRain(): boolean;
  isInWall(): boolean;
  isInWater(): boolean;
  isInWaterOrRain(): boolean;
  isInterpolating(): boolean;
  isInvisible(): boolean;
  isInvisibleTo(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  isInvulnerable(): boolean;
  isInvulnerableToBase(arg0: j_net_minecraft_world_damagesource.DamageSource): boolean;
  isLocalClientAuthoritative(): boolean;
  isLocalInstanceAuthoritative(): boolean;
  isNoGravity(): boolean;
  isOnFire(): boolean;
  isOnPortalCooldown(): boolean;
  isOnRails(): boolean;
  isPassenger(): boolean;
  isPassengerOfSameVehicle(arg0: Entity): boolean;
  isPickable(): boolean;
  isPushable(): boolean;
  isPushedByFluid(): boolean;
  isRemoved(): boolean;
  isShiftKeyDown(): boolean;
  isSilent(): boolean;
  isSpectator(): boolean;
  isSprinting(): boolean;
  isSteppingCarefully(): boolean;
  isSupportedBy(arg0: j_net_minecraft_core.BlockPos): boolean;
  isSuppressingBounce(): boolean;
  isSwimming(): boolean;
  isTemporarilyActive: boolean;
  isTicking(): boolean;
  isUnderWater(): boolean;
  isVehicle(): boolean;
  isVisuallyCrawling(): boolean;
  isVisuallySwimming(): boolean;
  kill(arg0: j_net_minecraft_server_level.ServerLevel): void;
  killedEntity(arg0: j_net_minecraft_server_level.ServerLevel, arg1: LivingEntity): boolean;
  lastDamageCancelled: boolean;
  lastLavaContact: j_net_minecraft_core.BlockPos | null;
  lavaHurt(): void;
  lavaHurt(arg0: j_net_minecraft_core.BlockPos | null): void | null;
  lavaIgnite(): void;
  lavaIgnite(arg0: j_net_minecraft_core.BlockPos | null): void | null;
  lerpHeadTo(arg0: number, arg1: number): void;
  lerpMotion(arg0: number, arg1: number, arg2: number): void;
  lerpPositionAndRotationStep(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
  level(): j_net_minecraft_world_level.Level;
  limitPistonMovement(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  load(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  lookAt(arg0: j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor, arg1: j_net_minecraft_world_phys.Vec3): void;
  mainSupportingBlockPos: JavaOptional<j_net_minecraft_core.BlockPos>;
  makeBoundingBox(): j_net_minecraft_world_phys.AABB;
  makeBoundingBox(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.AABB;
  makeStuckInBlock(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_phys.Vec3): void;
  markHurt(): void;
  maxAirTicks: number;
  maxUpStep(): number;
  mayInteract(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): boolean;
  maybeBackOffFromEdge(arg0: j_net_minecraft_world_phys.Vec3, arg1: MoverType): j_net_minecraft_world_phys.Vec3;
  minorHorizontalCollision: boolean;
  mirror(arg0: j_net_minecraft_world_level_block.Mirror): number;
  moonrise$getChunkData(): JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkData">;
  moonrise$getChunkStatus(): j_net_minecraft_server_level.FullChunkStatus;
  moonrise$getSectionX(): number;
  moonrise$getSectionY(): number;
  moonrise$getSectionZ(): number;
  moonrise$getTrackedEntity(): j_net_minecraft_server_level.ChunkMap_TrackedEntity;
  moonrise$hasAnyPlayerPassengers(): boolean;
  moonrise$isHardColliding(): boolean;
  moonrise$isUpdatingSectionStatus(): boolean;
  moonrise$setChunkData(arg0: JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.level.chunk.ChunkData">): void;
  moonrise$setChunkStatus(arg0: j_net_minecraft_server_level.FullChunkStatus): void;
  moonrise$setSectionX(arg0: number): void;
  moonrise$setSectionY(arg0: number): void;
  moonrise$setSectionZ(arg0: number): void;
  moonrise$setTrackedEntity(arg0: j_net_minecraft_server_level.ChunkMap_TrackedEntity): void;
  moonrise$setUpdatingSectionStatus(arg0: boolean): void;
  move(arg0: MoverType, arg1: j_net_minecraft_world_phys.Vec3): void;
  moveDist: number;
  moveOrInterpolateTo(arg0: j_net_minecraft_world_phys.Vec3, arg1: number, arg2: number): void;
  moveRelative(arg0: number, arg1: j_net_minecraft_world_phys.Vec3): void;
  moveTowardsClosestSpace(arg0: number, arg1: number, arg2: number): void;
  nextStep(): number;
  noPhysics: boolean;
  notifyLeashHolder(arg0: Leashable): void;
  notifyLeasheeRemoved(arg0: Leashable): void;
  numCollisions: number;
  oldPosition(): j_net_minecraft_world_phys.Vec3;
  onAboveBubbleColumn(arg0: boolean, arg1: j_net_minecraft_core.BlockPos): void;
  onBelowWorld(): void;
  onClientRemoval(): void;
  onExplosionHit(arg0: Entity | null): void | null;
  onFlap(): void;
  onGround: (boolean) & { (): boolean };
  onInsideBlock(arg0: j_net_minecraft_world_level_block_state.BlockState): void;
  onInsideBubbleColumn(arg0: boolean): void;
  onPassengerTurned(arg0: Entity): void;
  onRemoval(arg0: Entity_RemovalReason): void;
  onSyncedDataUpdated(arg0: JavaList<j_net_minecraft_network_syncher.SynchedEntityData_DataValue<object>>): void;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  origin: j_net_minecraft_world_phys.Vec3 | null;
  originWorld: JavaOpaque<"java.util.UUID"> | null;
  passengers: JavaOpaque<"com.google.common.collect.ImmutableList", [Entity]>;
  persist: boolean;
  persistentInvisibility: boolean;
  pick(arg0: number, arg1: number, arg2: boolean): j_net_minecraft_world_phys.HitResult;
  placePortalTicket(arg0: j_net_minecraft_core.BlockPos): void;
  playCombinationStepSounds(arg0: j_net_minecraft_world_level_block_state.BlockState, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  playEntityOnFireExtinguishedSound(): void;
  playMuffledStepSound(arg0: j_net_minecraft_world_level_block_state.BlockState): void;
  playSound(arg0: j_net_minecraft_sounds.SoundEvent): void;
  playSound(arg0: j_net_minecraft_sounds.SoundEvent, arg1: number, arg2: number): void;
  playStepSound(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  playSwimSound(arg0: number): void;
  playerTouch(arg0: j_net_minecraft_world_entity_player.Player): void;
  pluginRemoved: boolean;
  portalCooldown: number;
  portalProcess: PortalProcessor | null;
  readonly posLock: object;
  position(): j_net_minecraft_world_phys.Vec3;
  positionRider(arg0: Entity): void;
  positionRider(arg0: Entity, arg1: Entity_MoveFunction): void;
  postTick(): void;
  preserveMotion: boolean;
  problemPath(): j_net_minecraft_util.ProblemReporter_PathElement;
  processFlappingMovement(): void;
  processPortalCooldown(): void;
  projectileSource: JavaOpaque<"org.bukkit.projectiles.ProjectileSource"> | null;
  propagateFallToPassengers(arg0: number, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): void;
  push(arg0: number, arg1: number, arg2: number): void;
  push(arg0: number, arg1: number, arg2: number, arg3: Entity | null): void | null;
  push(arg0: Entity): void;
  push(arg0: j_net_minecraft_world_phys.Vec3): void;
  readonly random: j_net_minecraft_util.RandomSource;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  reapplyPosition(): void;
  recreateFromPacket(arg0: j_net_minecraft_network_protocol_game.ClientboundAddEntityPacket): void;
  refreshDimensions(): void;
  refreshEntityData(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  registerScheduler(): void;
  registryAccess(): j_net_minecraft_core.RegistryAccess;
  remove(arg0: Entity_RemovalReason): void;
  remove(arg0: Entity_RemovalReason, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRemoveEvent$Cause"> | null): void | null;
  removeAfterChangingDimensions(): void;
  removeLatestMovementRecording(): void;
  removePassenger(arg0: Entity): boolean;
  removePassenger(arg0: Entity, arg1: boolean): boolean;
  removeTag(arg0: string): boolean;
  removeVehicle(): void;
  removeVehicle(arg0: boolean): void;
  repositionEntityAfterLoad(): boolean;
  resendPossiblyDesyncedDataValues(arg0: JavaList<j_net_minecraft_network_syncher.EntityDataAccessor<object>>, arg1: j_net_minecraft_server_level.ServerPlayer): void;
  resendPossiblyDesyncedEntityData(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  resetFallDistance(): void;
  restoreFrom(arg0: Entity): void;
  retireScheduler(): void;
  rideTick(): void;
  rotate(arg0: j_net_minecraft_world_level_block.Rotation): number;
  save(arg0: j_net_minecraft_world_level_storage.ValueOutput): boolean;
  saveAsPassenger(arg0: j_net_minecraft_world_level_storage.ValueOutput): boolean;
  saveAsPassenger(arg0: j_net_minecraft_world_level_storage.ValueOutput, arg1: boolean, arg2: boolean, arg3: boolean): boolean;
  saveWithoutId(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  saveWithoutId(arg0: j_net_minecraft_world_level_storage.ValueOutput, arg1: boolean, arg2: boolean, arg3: boolean): void;
  setAirSupply(arg0: number): void;
  setAsInsidePortal(arg0: j_net_minecraft_world_level_block.Portal, arg1: j_net_minecraft_core.BlockPos): void;
  setBoundingBox(arg0: j_net_minecraft_world_phys.AABB): void;
  setComponent<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: T): void;
  setCustomName(arg0: j_net_minecraft_network_chat.Component | null): void | null;
  setCustomNameVisible(arg0: boolean): void;
  setDeltaMovement(arg0: number, arg1: number, arg2: number): void;
  setDeltaMovement(arg0: j_net_minecraft_world_phys.Vec3): void;
  setGlowingTag(arg0: boolean): void;
  setId(arg0: number): void;
  setInvisible(arg0: boolean): void;
  setInvulnerable(arg0: boolean): void;
  setIsInPowderSnow(arg0: boolean): void;
  setLevel(arg0: j_net_minecraft_world_level.Level): void;
  setLevelCallback(arg0: j_net_minecraft_world_level_entity.EntityInLevelCallback): void;
  setNoGravity(arg0: boolean): void;
  setOldPos(): void;
  setOldPosAndRot(): void;
  setOldPosAndRot(arg0: j_net_minecraft_world_phys.Vec3, arg1: number, arg2: number): void;
  setOldRot(): void;
  setOnGround(arg0: boolean): void;
  setOnGroundWithMovement(arg0: boolean, arg1: j_net_minecraft_world_phys.Vec3): void;
  setOnGroundWithMovement(arg0: boolean, arg1: boolean, arg2: j_net_minecraft_world_phys.Vec3): void;
  setPortalCooldown(): void;
  setPortalCooldown(arg0: number): void;
  setPos(arg0: number, arg1: number, arg2: number): void;
  setPos(arg0: j_net_minecraft_world_phys.Vec3): void;
  setPosRaw(arg0: number, arg1: number, arg2: number): void;
  setPosRaw(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
  setPose(arg0: Pose): void;
  setRemainingFireTicks(arg0: number): void;
  setRemoved(arg0: Entity_RemovalReason, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRemoveEvent$Cause"> | null): void | null;
  setRequiresPrecisePosition(arg0: boolean): void;
  setRot(arg0: number, arg1: number): void;
  setSharedFlag(arg0: number, arg1: boolean): void;
  setSharedFlagOnFire(arg0: boolean): void;
  setShiftKeyDown(arg0: boolean): void;
  setSilent(arg0: boolean): void;
  setSprinting(arg0: boolean): void;
  setSwimming(arg0: boolean): void;
  setTicksFrozen(arg0: number): void;
  setUUID(arg0: JavaOpaque<"java.util.UUID">): void;
  setXRot(arg0: number): void;
  setYBodyRot(arg0: number): void;
  setYHeadRot(arg0: number): void;
  setYRot(arg0: number): void;
  shearOffAllLeashConnections(arg0: j_net_minecraft_world_entity_player.Player | null): boolean | null;
  shearOffAllLeashConnections(arg0: j_net_minecraft_world_entity_player.Player | null, arg1: j_net_minecraft_world.InteractionHand | null): boolean | null;
  shouldBeSaved(): boolean;
  shouldBlockExplode(arg0: j_net_minecraft_world_level.Explosion, arg1: j_net_minecraft_world_level.BlockGetter, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_world_level_block_state.BlockState, arg4: number): boolean;
  shouldPlayLavaHurtSound(): boolean;
  shouldRender(arg0: number, arg1: number, arg2: number): boolean;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  shouldShowName(): boolean;
  showVehicleHealth(): boolean;
  skipAttackInteraction(arg0: Entity): boolean;
  snapTo(arg0: number, arg1: number, arg2: number): void;
  snapTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
  snapTo(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: number): void;
  snapTo(arg0: j_net_minecraft_world_phys.Vec3): void;
  snapTo(arg0: j_net_minecraft_world_phys.Vec3, arg1: number, arg2: number): void;
  spawnAtLocation(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_item.ItemEntity): j_net_minecraft_world_entity_item.ItemEntity | null;
  spawnAtLocation(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_entity_item.ItemEntity | null;
  spawnAtLocation(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: number): j_net_minecraft_world_entity_item.ItemEntity | null;
  spawnAtLocation(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_entity_item.ItemEntity | null;
  spawnAtLocation(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_phys.Vec3, arg3: JavaConsumer<j_net_minecraft_world_entity_item.ItemEntity> | null): j_net_minecraft_world_entity_item.ItemEntity | null;
  spawnAtLocation(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_level.ItemLike): j_net_minecraft_world_entity_item.ItemEntity | null;
  spawnAtLocation(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_level.ItemLike, arg2: number): j_net_minecraft_world_entity_item.ItemEntity | null;
  spawnReason: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason"> | null;
  spawnSprintParticle(): void;
  spawnedViaMobSpawner: boolean;
  startRiding(arg0: Entity): boolean;
  startRiding(arg0: Entity, arg1: boolean): boolean;
  startSeenByPlayer(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  stopRiding(): void;
  stopRiding(arg0: boolean): void;
  stopSeenByPlayer(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  stringUUID: string;
  stuckSpeedMultiplier: j_net_minecraft_world_phys.Vec3;
  supportQuadLeashAsHolder(): boolean;
  syncPacketPositionCodec(arg0: number, arg1: number, arg2: number): void;
  teleport(arg0: j_net_minecraft_world_level_portal.TeleportTransition): Entity | null;
  teleportPassengers(): void;
  teleportRelative(arg0: number, arg1: number, arg2: number): void;
  teleportSetPosition(arg0: PositionMoveRotation, arg1: JavaSet<Relative>): void;
  teleportSpectators(arg0: j_net_minecraft_world_level_portal.TeleportTransition, arg1: j_net_minecraft_server_level.ServerLevel): void;
  teleportTo(arg0: number, arg1: number, arg2: number): void;
  teleportTo(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: number, arg3: number, arg4: JavaSet<Relative>, arg5: number, arg6: number, arg7: boolean): boolean;
  teleportTo(arg0: j_net_minecraft_server_level.ServerLevel, arg1: number, arg2: number, arg3: number, arg4: JavaSet<Relative>, arg5: number, arg6: number, arg7: boolean, arg8: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): boolean;
  thunderHit(arg0: j_net_minecraft_server_level.ServerLevel, arg1: LightningBolt): void;
  tick(): void;
  tickCount: number;
  toString(): string;
  totalEntityAge: number;
  touchingUnloadedChunk(): boolean;
  trackingPosition(): j_net_minecraft_world_phys.Vec3;
  turn(arg0: number, arg1: number): void;
  unRide(): void;
  unsetRemoved(): void;
  updateDynamicGameEventListener(arg0: JavaBiConsumer<j_net_minecraft_world_level_gameevent.DynamicGameEventListener<object>, j_net_minecraft_server_level.ServerLevel>): void;
  updateFluidHeightAndDoFluidPushing(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_material.Fluid>, arg1: number): boolean;
  updateInWaterStateAndDoFluidPushing(): boolean;
  updateSwimming(): void;
  uuid: JavaOpaque<"java.util.UUID">;
  valid: boolean;
  verticalCollision: boolean;
  verticalCollisionBelow: boolean;
  visibleByDefault: boolean;
  visualFire: JavaOpaque<"net.kyori.adventure.util.TriState">;
  wasEyeInWater: boolean;
  wasInPowderSnow: boolean;
  wasTouchingWater: boolean;
  waterSwimSound(): void;
  xOld: number;
  xRotO: number;
  xo: number;
  yOld: number;
  yRotO: number;
  yo: number;
  zOld: number;
  zo: number;
}
export type Entity = EntityMembers & JavaOpaque<"ca.spottedleaf.moonrise.patches.chunk_system.entity.ChunkSystemEntity"> & JavaOpaque<"ca.spottedleaf.moonrise.patches.entity_tracker.EntityTrackerEntity"> & j_net_minecraft_core_component.DataComponentGetter & j_net_minecraft_network_syncher.SyncedDataHolder & j_net_minecraft_world.Nameable & j_net_minecraft_world_level_entity.EntityAccess & j_net_minecraft_world_scores.ScoreHolder;
export interface EntityStatics {
  new(arg0: EntityType<object>, arg1: j_net_minecraft_world_level.Level): Entity;
  readonly BASE_SAFE_FALL_DISTANCE: 3;
  readonly BASE_TICKS_REQUIRED_TO_FREEZE: 140;
  readonly BOARDING_COOLDOWN: 60;
  readonly CONTENTS_SLOT_INDEX: 0;
  readonly DATA_POSE: j_net_minecraft_network_syncher.EntityDataAccessor<Pose>;
  readonly DATA_SHARED_FLAGS_ID: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly DATA_TICKS_FROZEN: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly DEFAULT_BB_HEIGHT: 1.8;
  readonly DEFAULT_BB_WIDTH: 0.6;
  readonly DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: 0.2;
  readonly DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: 0.500001;
  readonly DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: 0.999999;
  readonly FLAG_FALL_FLYING: 7;
  readonly FLAG_GLOWING: 6;
  readonly FLAG_INVISIBLE: 5;
  readonly FLAG_ONFIRE: 0;
  readonly FREEZE_HURT_FREQUENCY: 40;
  readonly MAX_ENTITY_TAG_COUNT: 1024;
  readonly MAX_MOVEMENTS_HANDELED_PER_TICK: 100;
  readonly SHARED_RANDOM: j_net_minecraft_util.RandomSource;
  readonly TAG_AIR: "Air";
  readonly TAG_DATA: "data";
  readonly TAG_FALL_DISTANCE: "fall_distance";
  readonly TAG_FIRE: "Fire";
  readonly TAG_GLOWING: "Glowing";
  readonly TAG_ID: "id";
  readonly TAG_INVULNERABLE: "Invulnerable";
  readonly TAG_MOTION: "Motion";
  readonly TAG_NO_GRAVITY: "NoGravity";
  readonly TAG_ON_GROUND: "OnGround";
  readonly TAG_PASSENGERS: "Passengers";
  readonly TAG_PORTAL_COOLDOWN: "PortalCooldown";
  readonly TAG_POS: "Pos";
  readonly TAG_ROTATION: "Rotation";
  readonly TAG_SILENT: "Silent";
  readonly TAG_UUID: "UUID";
  readonly TOTAL_AIR_SUPPLY: 300;
  castComponentValue<T>(arg0: j_net_minecraft_core_component.DataComponentType<T>, arg1: object | null): T | null;
  checkPosition(arg0: Entity, arg1: number, arg2: number, arg3: number): boolean;
  collideBoundingBox(arg0: Entity | null, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.AABB, arg3: j_net_minecraft_world_level.Level, arg4: JavaList<j_net_minecraft_world_phys_shapes.VoxelShape>): j_net_minecraft_world_phys.Vec3 | null;
  getCollisionHorizontalEscapeVector(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_phys.Vec3;
  getDefaultPassengerAttachmentPoint(arg0: Entity, arg1: Entity, arg2: EntityAttachments): j_net_minecraft_world_phys.Vec3;
  getInputVector(arg0: j_net_minecraft_world_phys.Vec3, arg1: number, arg2: number): j_net_minecraft_world_phys.Vec3;
  getViewScale(): number;
  handleOnAboveBubbleColumn(arg0: Entity, arg1: boolean, arg2: j_net_minecraft_core.BlockPos): void;
  handleOnInsideBubbleColumn(arg0: Entity, arg1: boolean): void;
  nextEntityId(): number;
  sendBubbleColumnParticles(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_core.BlockPos): void;
  setViewScale(arg0: number): void;
}

/** JVM record net.minecraft.world.entity.Entity$DefaultDrop. */
export interface Entity_DefaultDropMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  dropConsumer(): JavaConsumer<j_net_minecraft_world_item.ItemStack> | null;
  equals(arg0: object): boolean;
  hashCode(): number;
  item(): j_net_minecraft_world_item.Item;
  runConsumer(arg0: JavaConsumer<JavaOpaque<"org.bukkit.inventory.ItemStack">>): void;
  stack(): JavaOpaque<"org.bukkit.inventory.ItemStack">;
  toString(): string;
}
export type Entity_DefaultDrop = Entity_DefaultDropMembers & JavaOpaque<"java.lang.Record">;
export interface Entity_DefaultDropStatics {
  new(arg0: j_net_minecraft_world_item.Item, arg1: JavaOpaque<"org.bukkit.inventory.ItemStack">, arg2: JavaConsumer<j_net_minecraft_world_item.ItemStack> | null): Entity_DefaultDrop;
  new(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaConsumer<j_net_minecraft_world_item.ItemStack>): Entity_DefaultDrop;
}

/** JVM interface net.minecraft.world.entity.Entity$MoveFunction. */
export interface Entity_MoveFunctionMembers {
  accept(arg0: Entity, arg1: number, arg2: number, arg3: number): void;
}
export type Entity_MoveFunction = Entity_MoveFunctionMembers;
export interface Entity_MoveFunctionStatics {
}

/** Live JVM enum net.minecraft.world.entity.Entity$MovementEmission; constants are host handles, not strings. */
export type Entity_MovementEmission = JavaEnum<"net.minecraft.world.entity.Entity$MovementEmission", "ALL" | "EVENTS" | "NONE" | "SOUNDS"> & Entity_MovementEmissionMembers;
export interface Entity_MovementEmissionMembers {
  emitsAnything(): boolean;
  emitsEvents(): boolean;
  emitsSounds(): boolean;
}
export interface Entity_MovementEmissionStatics {
  readonly ALL: Entity_MovementEmission;
  readonly EVENTS: Entity_MovementEmission;
  readonly NONE: Entity_MovementEmission;
  readonly SOUNDS: Entity_MovementEmission;
  valueOf(arg0: string): Entity_MovementEmission;
  values(): Array<Entity_MovementEmission>;
}

/** Live JVM enum net.minecraft.world.entity.Entity$RemovalReason; constants are host handles, not strings. */
export type Entity_RemovalReason = JavaEnum<"net.minecraft.world.entity.Entity$RemovalReason", "CHANGED_DIMENSION" | "DISCARDED" | "KILLED" | "UNLOADED_TO_CHUNK" | "UNLOADED_WITH_PLAYER"> & Entity_RemovalReasonMembers;
export interface Entity_RemovalReasonMembers {
  shouldDestroy(): boolean;
  shouldSave(): boolean;
}
export interface Entity_RemovalReasonStatics {
  readonly CHANGED_DIMENSION: Entity_RemovalReason;
  readonly DISCARDED: Entity_RemovalReason;
  readonly KILLED: Entity_RemovalReason;
  readonly UNLOADED_TO_CHUNK: Entity_RemovalReason;
  readonly UNLOADED_WITH_PLAYER: Entity_RemovalReason;
  valueOf(arg0: string): Entity_RemovalReason;
  values(): Array<Entity_RemovalReason>;
}

/** Live JVM enum net.minecraft.world.entity.EntityAttachment; constants are host handles, not strings. */
export type EntityAttachment = JavaEnum<"net.minecraft.world.entity.EntityAttachment", "NAME_TAG" | "PASSENGER" | "VEHICLE" | "WARDEN_CHEST"> & EntityAttachmentMembers;
export interface EntityAttachmentMembers {
  createFallbackPoints(arg0: number, arg1: number): JavaList<j_net_minecraft_world_phys.Vec3>;
}
export interface EntityAttachmentStatics {
  readonly NAME_TAG: EntityAttachment;
  readonly PASSENGER: EntityAttachment;
  readonly VEHICLE: EntityAttachment;
  readonly WARDEN_CHEST: EntityAttachment;
  valueOf(arg0: string): EntityAttachment;
  values(): Array<EntityAttachment>;
}

/** JVM interface net.minecraft.world.entity.EntityAttachment$Fallback. */
export interface EntityAttachment_FallbackMembers {
  create(arg0: number, arg1: number): JavaList<j_net_minecraft_world_phys.Vec3>;
}
export type EntityAttachment_Fallback = EntityAttachment_FallbackMembers;
export interface EntityAttachment_FallbackStatics {
  readonly AT_CENTER: EntityAttachment_Fallback;
  readonly AT_FEET: EntityAttachment_Fallback;
  readonly AT_HEIGHT: EntityAttachment_Fallback;
  readonly ZERO: JavaList<j_net_minecraft_world_phys.Vec3>;
}

/** JVM class net.minecraft.world.entity.EntityAttachments. */
export interface EntityAttachmentsMembers {
  get(arg0: EntityAttachment, arg1: number, arg2: number): j_net_minecraft_world_phys.Vec3;
  getAverage(arg0: EntityAttachment): j_net_minecraft_world_phys.Vec3;
  getClamped(arg0: EntityAttachment, arg1: number, arg2: number): j_net_minecraft_world_phys.Vec3;
  getNullable(arg0: EntityAttachment, arg1: number, arg2: number): j_net_minecraft_world_phys.Vec3 | null;
  scale(arg0: number, arg1: number, arg2: number): EntityAttachments;
}
export type EntityAttachments = EntityAttachmentsMembers;
export interface EntityAttachmentsStatics {
  builder(): EntityAttachments_Builder;
  createDefault(arg0: number, arg1: number): EntityAttachments;
}

/** JVM class net.minecraft.world.entity.EntityAttachments$Builder. */
export interface EntityAttachments_BuilderMembers {
  attach(arg0: EntityAttachment, arg1: number, arg2: number, arg3: number): EntityAttachments_Builder;
  attach(arg0: EntityAttachment, arg1: j_net_minecraft_world_phys.Vec3): EntityAttachments_Builder;
  build(arg0: number, arg1: number): EntityAttachments;
}
export type EntityAttachments_Builder = EntityAttachments_BuilderMembers;
export interface EntityAttachments_BuilderStatics {
}

/** JVM record net.minecraft.world.entity.EntityDimensions. */
export interface EntityDimensionsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  attachments(): EntityAttachments;
  equals(arg0: object): boolean;
  eyeHeight(): number;
  fixed(): boolean;
  hashCode(): number;
  height(): number;
  makeBoundingBox(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_phys.AABB;
  makeBoundingBox(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.AABB;
  scale(arg0: number): EntityDimensions;
  scale(arg0: number, arg1: number): EntityDimensions;
  toString(): string;
  width(): number;
  withAttachments(arg0: EntityAttachments_Builder): EntityDimensions;
  withEyeHeight(arg0: number): EntityDimensions;
}
export type EntityDimensions = EntityDimensionsMembers & JavaOpaque<"java.lang.Record">;
export interface EntityDimensionsStatics {
  new(arg0: number, arg1: number, arg2: number, arg3: EntityAttachments, arg4: boolean): EntityDimensions;
  fixed(arg0: number, arg1: number): EntityDimensions;
  scalable(arg0: number, arg1: number): EntityDimensions;
}

/** JVM class net.minecraft.world.entity.EntityEquipment. */
export interface EntityEquipmentMembers {
  clear(): void;
  dropAll(arg0: LivingEntity): void;
  get(arg0: EquipmentSlot): j_net_minecraft_world_item.ItemStack;
  has(arg0: EquipmentSlot): boolean;
  isEmpty(): boolean;
  set(arg0: EquipmentSlot, arg1: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  setAll(arg0: EntityEquipment): void;
  tick(arg0: Entity): void;
}
export type EntityEquipment = EntityEquipmentMembers;
export interface EntityEquipmentStatics {
  new(): EntityEquipment;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EntityEquipment]>;
}

/** JVM class net.minecraft.world.entity.EntityEvent. */
export interface EntityEventMembers {
}
export type EntityEvent = EntityEventMembers;
export interface EntityEventStatics {
  new(): EntityEvent;
  readonly ARMADILLO_PEEK: 64;
  readonly ARMORSTAND_WOBBLE: 32;
  readonly BODY_BREAK: 65;
  readonly CANCEL_SHAKE_WETNESS: 56;
  readonly CHEST_BREAK: 50;
  readonly DEATH: 3;
  readonly DOLPHIN_LOOKING_FOR_TREASURE: 38;
  readonly DROWN_PARTICLES: 67;
  readonly EAT_GRASS: 10;
  readonly END_RAM: 59;
  readonly FEET_BREAK: 52;
  readonly FIREWORKS_EXPLODE: 17;
  readonly FISHING_ROD_REEL_IN: 31;
  readonly FOX_EAT: 45;
  readonly FULL_DEBUG_INFO: 23;
  readonly GUARDIAN_ATTACK_SOUND: 21;
  readonly HEAD_BREAK: 49;
  readonly HONEY_JUMP: 54;
  readonly HONEY_SLIDE: 53;
  readonly IN_LOVE_HEARTS: 18;
  readonly JUMP: 1;
  readonly LEGS_BREAK: 51;
  readonly LOVE_HEARTS: 12;
  readonly MAINHAND_BREAK: 47;
  readonly OFFER_FLOWER: 11;
  readonly OFFHAND_BREAK: 48;
  readonly PERMISSION_LEVEL_ADMINS: 27;
  readonly PERMISSION_LEVEL_ALL: 24;
  readonly PERMISSION_LEVEL_GAMEMASTERS: 26;
  readonly PERMISSION_LEVEL_MODERATORS: 25;
  readonly PERMISSION_LEVEL_OWNERS: 28;
  readonly POOF: 60;
  readonly PROTECTED_FROM_DEATH: 35;
  readonly RAVAGER_ROARED: 69;
  readonly RAVAGER_STUNNED: 39;
  readonly REDUCED_DEBUG_INFO: 22;
  readonly SADDLE_BREAK: 68;
  readonly SHAKE: 66;
  readonly SHAKE_WETNESS: 8;
  readonly SILVERFISH_MERGE_ANIM: 20;
  readonly SNIFFER_DIGGING_SOUND: 63;
  readonly SONIC_CHARGE: 62;
  readonly SQUID_ANIM_SYNCH: 19;
  readonly START_ATTACKING: 4;
  readonly START_RAM: 58;
  readonly STOP_ATTACKING: 5;
  readonly STOP_OFFER_FLOWER: 34;
  readonly SWAP_HANDS: 55;
  readonly TAMING_FAILED: 6;
  readonly TAMING_SUCCEEDED: 7;
  readonly TELEPORT: 46;
  readonly TENDRILS_SHIVER: 61;
  readonly TRUSTING_FAILED: 40;
  readonly TRUSTING_SUCCEEDED: 41;
  readonly USE_ITEM_COMPLETE: 9;
  readonly VILLAGER_ANGRY: 13;
  readonly VILLAGER_HAPPY: 14;
  readonly VILLAGER_SWEAT: 42;
  readonly WITCH_HAT_MAGIC: 15;
  readonly ZOMBIE_CONVERTING: 16;
}

/** JVM class net.minecraft.world.entity.EntityReference. */
export interface EntityReferenceMembers<StoredEntityType /* extends j_net_minecraft_world_level_entity.UniquelyIdentifyable */ = unknown> {
  equals(arg0: object): boolean;
  getEntity(arg0: j_net_minecraft_world_level_entity.UUIDLookup<StoredEntityType>, arg1: JavaClass<StoredEntityType>): StoredEntityType | null;
  getUUID(): JavaOpaque<"java.util.UUID">;
  hashCode(): number;
  matches(arg0: StoredEntityType): boolean;
  store(arg0: j_net_minecraft_world_level_storage.ValueOutput, arg1: string): void;
}
export type EntityReference<StoredEntityType /* extends j_net_minecraft_world_level_entity.UniquelyIdentifyable */ = unknown> = EntityReferenceMembers<StoredEntityType>;
export interface EntityReferenceStatics {
  new<StoredEntityType /* extends j_net_minecraft_world_level_entity.UniquelyIdentifyable */>(arg0: JavaOpaque<"java.util.UUID">): EntityReference<StoredEntityType>;
  new<StoredEntityType /* extends j_net_minecraft_world_level_entity.UniquelyIdentifyable */>(arg0: StoredEntityType): EntityReference<StoredEntityType>;
  codec<Type /* extends j_net_minecraft_world_level_entity.UniquelyIdentifyable */>(): JavaOpaque<"com.mojang.serialization.Codec", [EntityReference<Type>]>;
  get<StoredEntityType /* extends j_net_minecraft_world_level_entity.UniquelyIdentifyable */>(arg0: EntityReference<StoredEntityType> | null, arg1: j_net_minecraft_world_level_entity.UUIDLookup<StoredEntityType>, arg2: JavaClass<StoredEntityType>): StoredEntityType | null;
  read<StoredEntityType /* extends j_net_minecraft_world_level_entity.UniquelyIdentifyable */>(arg0: j_net_minecraft_world_level_storage.ValueInput, arg1: string): EntityReference<StoredEntityType> | null;
  readWithOldOwnerConversion<StoredEntityType /* extends j_net_minecraft_world_level_entity.UniquelyIdentifyable */>(arg0: j_net_minecraft_world_level_storage.ValueInput, arg1: string, arg2: j_net_minecraft_world_level.Level): EntityReference<StoredEntityType> | null;
  store(arg0: EntityReference<object> | null, arg1: j_net_minecraft_world_level_storage.ValueOutput, arg2: string): void | null;
  streamCodec<Type /* extends j_net_minecraft_world_level_entity.UniquelyIdentifyable */>(): j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, EntityReference<Type>>;
}

/** JVM class net.minecraft.world.entity.EntitySelector. */
export interface EntitySelector_2Members {
}
export type EntitySelector_2 = EntitySelector_2Members;
export interface EntitySelector_2Statics {
  readonly CAN_BE_COLLIDED_WITH: JavaPredicate<Entity>;
  readonly CAN_BE_PICKED: JavaPredicate<Entity>;
  readonly CONTAINER_ENTITY_SELECTOR: JavaPredicate<Entity>;
  readonly ENTITY_NOT_BEING_RIDDEN: JavaPredicate<Entity>;
  readonly ENTITY_STILL_ALIVE: JavaPredicate<Entity>;
  readonly IS_INSOMNIAC: JavaPredicate<j_net_minecraft_world_entity_player.Player>;
  readonly LIVING_ENTITY_STILL_ALIVE: JavaPredicate<Entity>;
  readonly NO_CREATIVE_OR_SPECTATOR: JavaPredicate<Entity>;
  readonly NO_SPECTATORS: JavaPredicate<Entity>;
  readonly PLAYER_AFFECTS_SPAWNING: JavaPredicate<Entity>;
  notRiding(arg0: Entity): JavaPredicate<Entity>;
  pushable(arg0: Entity, arg1: boolean): JavaPredicate<Entity>;
  pushableBy(arg0: Entity): JavaPredicate<Entity>;
  withinDistance(arg0: number, arg1: number, arg2: number, arg3: number): JavaPredicate<Entity>;
}

/** Live JVM enum net.minecraft.world.entity.EntitySpawnReason; constants are host handles, not strings. */
export type EntitySpawnReason = JavaEnum<"net.minecraft.world.entity.EntitySpawnReason", "BREEDING" | "BUCKET" | "CHUNK_GENERATION" | "COMMAND" | "CONVERSION" | "DIMENSION_TRAVEL" | "DISPENSER" | "EVENT" | "JOCKEY" | "LOAD" | "MOB_SUMMONED" | "NATURAL" | "PATROL" | "REINFORCEMENT" | "SPAWNER" | "SPAWN_ITEM_USE" | "STRUCTURE" | "TRIAL_SPAWNER" | "TRIGGERED"> & EntitySpawnReasonMembers;
export interface EntitySpawnReasonMembers {
}
export interface EntitySpawnReasonStatics {
  readonly BREEDING: EntitySpawnReason;
  readonly BUCKET: EntitySpawnReason;
  readonly CHUNK_GENERATION: EntitySpawnReason;
  readonly COMMAND: EntitySpawnReason;
  readonly CONVERSION: EntitySpawnReason;
  readonly DIMENSION_TRAVEL: EntitySpawnReason;
  readonly DISPENSER: EntitySpawnReason;
  readonly EVENT: EntitySpawnReason;
  readonly JOCKEY: EntitySpawnReason;
  readonly LOAD: EntitySpawnReason;
  readonly MOB_SUMMONED: EntitySpawnReason;
  readonly NATURAL: EntitySpawnReason;
  readonly PATROL: EntitySpawnReason;
  readonly REINFORCEMENT: EntitySpawnReason;
  readonly SPAWNER: EntitySpawnReason;
  readonly SPAWN_ITEM_USE: EntitySpawnReason;
  readonly STRUCTURE: EntitySpawnReason;
  readonly TRIAL_SPAWNER: EntitySpawnReason;
  readonly TRIGGERED: EntitySpawnReason;
  ignoresLightRequirements(arg0: EntitySpawnReason): boolean;
  isSpawner(arg0: EntitySpawnReason): boolean;
  valueOf(arg0: string): EntitySpawnReason;
  values(): Array<EntitySpawnReason>;
}

/** JVM class net.minecraft.world.entity.EntityType. */
export interface EntityTypeMembers<T /* extends Entity */ = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_flag.FeatureElement, j_net_minecraft_world_level_entity.EntityTypeTest<Entity, T>];
  builtInRegistryHolder(): j_net_minecraft_core.Holder_Reference<EntityType<object>>;
  canSerialize(): boolean;
  canSpawnFarFromPlayer(): boolean;
  canSummon(): boolean;
  clientTrackingRange(): number;
  create(arg0: j_net_minecraft_server_level.ServerLevel, arg1: JavaConsumer<T> | null, arg2: j_net_minecraft_core.BlockPos, arg3: EntitySpawnReason, arg4: boolean, arg5: boolean): T | null;
  create(arg0: j_net_minecraft_world_level.Level, arg1: EntitySpawnReason): T | null;
  fireImmune(): boolean;
  getBaseClass(): JavaClass<Entity>;
  getCategory(): MobCategory;
  getDefaultLootTable(): JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>;
  getDescription(): j_net_minecraft_network_chat.Component;
  getDescriptionId(): string;
  getDimensions(): EntityDimensions;
  getHeight(): number;
  getSpawnAABB(arg0: number, arg1: number, arg2: number): j_net_minecraft_world_phys.AABB;
  getWidth(): number;
  is(arg0: j_net_minecraft_core.HolderSet<EntityType<object>>): boolean;
  is(arg0: j_net_minecraft_tags.TagKey<EntityType<object>>): boolean;
  isBlockDangerous(arg0: j_net_minecraft_world_level_block_state.BlockState): boolean;
  onlyOpCanSetNbt(): boolean;
  requiredFeatures(): j_net_minecraft_world_flag.FeatureFlagSet;
  spawn(arg0: j_net_minecraft_server_level.ServerLevel, arg1: JavaConsumer<T> | null, arg2: j_net_minecraft_core.BlockPos, arg3: EntitySpawnReason, arg4: boolean, arg5: boolean): T | null;
  spawn(arg0: j_net_minecraft_server_level.ServerLevel, arg1: JavaConsumer<T> | null, arg2: j_net_minecraft_core.BlockPos, arg3: EntitySpawnReason, arg4: boolean, arg5: boolean, arg6: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): T | null;
  spawn(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: EntitySpawnReason): T | null;
  spawn(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos, arg2: EntitySpawnReason, arg3: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): T | null;
  spawn(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack | null, arg2: LivingEntity | null, arg3: j_net_minecraft_core.BlockPos, arg4: EntitySpawnReason, arg5: boolean, arg6: boolean): T | null;
  spawn(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack | null, arg2: LivingEntity | null, arg3: j_net_minecraft_core.BlockPos, arg4: EntitySpawnReason, arg5: boolean, arg6: boolean, arg7: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason">): T | null;
  toShortString(): string;
  toString(): string;
  trackDeltas(): boolean;
  tryCast(arg0: object): object | null;
  tryCast(arg0: Entity): T | null;
  updateInterval(): number;
}
export type EntityType<T /* extends Entity */ = unknown> = EntityTypeMembers<T> & j_net_minecraft_world_flag.FeatureElement & j_net_minecraft_world_level_entity.EntityTypeTest<Entity, T>;
export interface EntityTypeStatics {
  new<T /* extends Entity */>(arg0: EntityType_EntityFactory<T>, arg1: MobCategory, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: JavaOpaque<"com.google.common.collect.ImmutableSet", [j_net_minecraft_world_level_block.Block]>, arg7: EntityDimensions, arg8: number, arg9: number, arg10: number, arg11: string, arg12: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>, arg13: j_net_minecraft_world_flag.FeatureFlagSet): EntityType<T>;
  readonly ACACIA_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.Boat>;
  readonly ACACIA_CHEST_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.ChestBoat>;
  readonly ALLAY: EntityType<j_net_minecraft_world_entity_animal_allay.Allay>;
  readonly AREA_EFFECT_CLOUD: EntityType<AreaEffectCloud>;
  readonly ARMADILLO: EntityType<j_net_minecraft_world_entity_animal_armadillo.Armadillo>;
  readonly ARMOR_STAND: EntityType<j_net_minecraft_world_entity_decoration.ArmorStand>;
  readonly ARROW: EntityType<j_net_minecraft_world_entity_projectile.Arrow>;
  readonly AXOLOTL: EntityType<j_net_minecraft_world_entity_animal_axolotl.Axolotl>;
  readonly BAMBOO_CHEST_RAFT: EntityType<j_net_minecraft_world_entity_vehicle.ChestRaft>;
  readonly BAMBOO_RAFT: EntityType<j_net_minecraft_world_entity_vehicle.Raft>;
  readonly BAT: EntityType<j_net_minecraft_world_entity_ambient.Bat>;
  readonly BEE: EntityType<j_net_minecraft_world_entity_animal.Bee>;
  readonly BIRCH_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.Boat>;
  readonly BIRCH_CHEST_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.ChestBoat>;
  readonly BLAZE: EntityType<j_net_minecraft_world_entity_monster.Blaze>;
  readonly BLOCK_DISPLAY: EntityType<Display_BlockDisplay>;
  readonly BOGGED: EntityType<j_net_minecraft_world_entity_monster.Bogged>;
  readonly BREEZE: EntityType<j_net_minecraft_world_entity_monster_breeze.Breeze>;
  readonly BREEZE_WIND_CHARGE: EntityType<j_net_minecraft_world_entity_projectile_windcharge.BreezeWindCharge>;
  readonly CAMEL: EntityType<j_net_minecraft_world_entity_animal_camel.Camel>;
  readonly CAT: EntityType<j_net_minecraft_world_entity_animal.Cat>;
  readonly CAVE_SPIDER: EntityType<j_net_minecraft_world_entity_monster.CaveSpider>;
  readonly CHERRY_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.Boat>;
  readonly CHERRY_CHEST_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.ChestBoat>;
  readonly CHEST_MINECART: EntityType<j_net_minecraft_world_entity_vehicle.MinecartChest>;
  readonly CHICKEN: EntityType<j_net_minecraft_world_entity_animal.Chicken>;
  readonly COD: EntityType<j_net_minecraft_world_entity_animal.Cod>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EntityType<object>]>;
  readonly COMMAND_BLOCK_MINECART: EntityType<j_net_minecraft_world_entity_vehicle.MinecartCommandBlock>;
  readonly COW: EntityType<j_net_minecraft_world_entity_animal.Cow>;
  readonly CREAKING: EntityType<j_net_minecraft_world_entity_monster_creaking.Creaking>;
  readonly CREEPER: EntityType<j_net_minecraft_world_entity_monster.Creeper>;
  readonly DARK_OAK_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.Boat>;
  readonly DARK_OAK_CHEST_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.ChestBoat>;
  readonly DOLPHIN: EntityType<j_net_minecraft_world_entity_animal.Dolphin>;
  readonly DONKEY: EntityType<j_net_minecraft_world_entity_animal_horse.Donkey>;
  readonly DRAGON_FIREBALL: EntityType<j_net_minecraft_world_entity_projectile.DragonFireball>;
  readonly DROWNED: EntityType<j_net_minecraft_world_entity_monster.Drowned>;
  readonly EGG: EntityType<j_net_minecraft_world_entity_projectile.ThrownEgg>;
  readonly ELDER_GUARDIAN: EntityType<j_net_minecraft_world_entity_monster.ElderGuardian>;
  readonly ENDERMAN: EntityType<j_net_minecraft_world_entity_monster.EnderMan>;
  readonly ENDERMITE: EntityType<j_net_minecraft_world_entity_monster.Endermite>;
  readonly ENDER_DRAGON: EntityType<j_net_minecraft_world_entity_boss_enderdragon.EnderDragon>;
  readonly ENDER_PEARL: EntityType<j_net_minecraft_world_entity_projectile.ThrownEnderpearl>;
  readonly END_CRYSTAL: EntityType<j_net_minecraft_world_entity_boss_enderdragon.EndCrystal>;
  readonly EVOKER: EntityType<j_net_minecraft_world_entity_monster.Evoker>;
  readonly EVOKER_FANGS: EntityType<j_net_minecraft_world_entity_projectile.EvokerFangs>;
  readonly EXPERIENCE_BOTTLE: EntityType<j_net_minecraft_world_entity_projectile.ThrownExperienceBottle>;
  readonly EXPERIENCE_ORB: EntityType<ExperienceOrb>;
  readonly EYE_OF_ENDER: EntityType<j_net_minecraft_world_entity_projectile.EyeOfEnder>;
  readonly FALLING_BLOCK: EntityType<j_net_minecraft_world_entity_item.FallingBlockEntity>;
  readonly FIREBALL: EntityType<j_net_minecraft_world_entity_projectile.LargeFireball>;
  readonly FIREWORK_ROCKET: EntityType<j_net_minecraft_world_entity_projectile.FireworkRocketEntity>;
  readonly FISHING_BOBBER: EntityType<j_net_minecraft_world_entity_projectile.FishingHook>;
  readonly FOX: EntityType<j_net_minecraft_world_entity_animal.Fox>;
  readonly FROG: EntityType<j_net_minecraft_world_entity_animal_frog.Frog>;
  readonly FURNACE_MINECART: EntityType<j_net_minecraft_world_entity_vehicle.MinecartFurnace>;
  readonly GHAST: EntityType<j_net_minecraft_world_entity_monster.Ghast>;
  readonly GIANT: EntityType<j_net_minecraft_world_entity_monster.Giant>;
  readonly GLOW_ITEM_FRAME: EntityType<j_net_minecraft_world_entity_decoration.GlowItemFrame>;
  readonly GLOW_SQUID: EntityType<GlowSquid>;
  readonly GOAT: EntityType<j_net_minecraft_world_entity_animal_goat.Goat>;
  readonly GUARDIAN: EntityType<j_net_minecraft_world_entity_monster.Guardian>;
  readonly HAPPY_GHAST: EntityType<j_net_minecraft_world_entity_animal.HappyGhast>;
  readonly HOGLIN: EntityType<j_net_minecraft_world_entity_monster_hoglin.Hoglin>;
  readonly HOPPER_MINECART: EntityType<j_net_minecraft_world_entity_vehicle.MinecartHopper>;
  readonly HORSE: EntityType<j_net_minecraft_world_entity_animal_horse.Horse>;
  readonly HUSK: EntityType<j_net_minecraft_world_entity_monster.Husk>;
  readonly ILLUSIONER: EntityType<j_net_minecraft_world_entity_monster.Illusioner>;
  readonly INTERACTION: EntityType<Interaction>;
  readonly IRON_GOLEM: EntityType<j_net_minecraft_world_entity_animal.IronGolem>;
  readonly ITEM: EntityType<j_net_minecraft_world_entity_item.ItemEntity>;
  readonly ITEM_DISPLAY: EntityType<Display_ItemDisplay>;
  readonly ITEM_FRAME: EntityType<j_net_minecraft_world_entity_decoration.ItemFrame>;
  readonly JUNGLE_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.Boat>;
  readonly JUNGLE_CHEST_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.ChestBoat>;
  readonly LEASH_KNOT: EntityType<j_net_minecraft_world_entity_decoration.LeashFenceKnotEntity>;
  readonly LIGHTNING_BOLT: EntityType<LightningBolt>;
  readonly LINGERING_POTION: EntityType<j_net_minecraft_world_entity_projectile.ThrownLingeringPotion>;
  readonly LLAMA: EntityType<j_net_minecraft_world_entity_animal_horse.Llama>;
  readonly LLAMA_SPIT: EntityType<j_net_minecraft_world_entity_projectile.LlamaSpit>;
  readonly MAGMA_CUBE: EntityType<j_net_minecraft_world_entity_monster.MagmaCube>;
  readonly MANGROVE_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.Boat>;
  readonly MANGROVE_CHEST_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.ChestBoat>;
  readonly MARKER: EntityType<Marker>;
  readonly MINECART: EntityType<j_net_minecraft_world_entity_vehicle.Minecart>;
  readonly MOOSHROOM: EntityType<j_net_minecraft_world_entity_animal.MushroomCow>;
  readonly MULE: EntityType<j_net_minecraft_world_entity_animal_horse.Mule>;
  readonly OAK_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.Boat>;
  readonly OAK_CHEST_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.ChestBoat>;
  readonly OCELOT: EntityType<j_net_minecraft_world_entity_animal.Ocelot>;
  readonly OMINOUS_ITEM_SPAWNER: EntityType<OminousItemSpawner>;
  readonly PAINTING: EntityType<j_net_minecraft_world_entity_decoration.Painting>;
  readonly PALE_OAK_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.Boat>;
  readonly PALE_OAK_CHEST_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.ChestBoat>;
  readonly PANDA: EntityType<j_net_minecraft_world_entity_animal.Panda>;
  readonly PARROT: EntityType<j_net_minecraft_world_entity_animal.Parrot>;
  readonly PHANTOM: EntityType<j_net_minecraft_world_entity_monster.Phantom>;
  readonly PIG: EntityType<j_net_minecraft_world_entity_animal.Pig>;
  readonly PIGLIN: EntityType<j_net_minecraft_world_entity_monster_piglin.Piglin>;
  readonly PIGLIN_BRUTE: EntityType<j_net_minecraft_world_entity_monster_piglin.PiglinBrute>;
  readonly PILLAGER: EntityType<j_net_minecraft_world_entity_monster.Pillager>;
  readonly PLAYER: EntityType<j_net_minecraft_world_entity_player.Player>;
  readonly POLAR_BEAR: EntityType<j_net_minecraft_world_entity_animal.PolarBear>;
  readonly PUFFERFISH: EntityType<j_net_minecraft_world_entity_animal.Pufferfish>;
  readonly RABBIT: EntityType<j_net_minecraft_world_entity_animal.Rabbit>;
  readonly RAVAGER: EntityType<j_net_minecraft_world_entity_monster.Ravager>;
  readonly SALMON: EntityType<j_net_minecraft_world_entity_animal.Salmon>;
  readonly SHEEP: EntityType<j_net_minecraft_world_entity_animal_sheep.Sheep>;
  readonly SHULKER: EntityType<j_net_minecraft_world_entity_monster.Shulker>;
  readonly SHULKER_BULLET: EntityType<j_net_minecraft_world_entity_projectile.ShulkerBullet>;
  readonly SILVERFISH: EntityType<j_net_minecraft_world_entity_monster.Silverfish>;
  readonly SKELETON: EntityType<j_net_minecraft_world_entity_monster.Skeleton>;
  readonly SKELETON_HORSE: EntityType<j_net_minecraft_world_entity_animal_horse.SkeletonHorse>;
  readonly SLIME: EntityType<j_net_minecraft_world_entity_monster.Slime>;
  readonly SMALL_FIREBALL: EntityType<j_net_minecraft_world_entity_projectile.SmallFireball>;
  readonly SNIFFER: EntityType<j_net_minecraft_world_entity_animal_sniffer.Sniffer>;
  readonly SNOWBALL: EntityType<j_net_minecraft_world_entity_projectile.Snowball>;
  readonly SNOW_GOLEM: EntityType<j_net_minecraft_world_entity_animal.SnowGolem>;
  readonly SPAWNER_MINECART: EntityType<j_net_minecraft_world_entity_vehicle.MinecartSpawner>;
  readonly SPECTRAL_ARROW: EntityType<j_net_minecraft_world_entity_projectile.SpectralArrow>;
  readonly SPIDER: EntityType<j_net_minecraft_world_entity_monster.Spider>;
  readonly SPLASH_POTION: EntityType<j_net_minecraft_world_entity_projectile.ThrownSplashPotion>;
  readonly SPRUCE_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.Boat>;
  readonly SPRUCE_CHEST_BOAT: EntityType<j_net_minecraft_world_entity_vehicle.ChestBoat>;
  readonly SQUID: EntityType<j_net_minecraft_world_entity_animal.Squid>;
  readonly STRAY: EntityType<j_net_minecraft_world_entity_monster.Stray>;
  readonly STRIDER: EntityType<j_net_minecraft_world_entity_monster.Strider>;
  readonly TADPOLE: EntityType<j_net_minecraft_world_entity_animal_frog.Tadpole>;
  readonly TEXT_DISPLAY: EntityType<Display_TextDisplay>;
  readonly TNT: EntityType<j_net_minecraft_world_entity_item.PrimedTnt>;
  readonly TNT_MINECART: EntityType<j_net_minecraft_world_entity_vehicle.MinecartTNT>;
  readonly TRADER_LLAMA: EntityType<j_net_minecraft_world_entity_animal_horse.TraderLlama>;
  readonly TRIDENT: EntityType<j_net_minecraft_world_entity_projectile.ThrownTrident>;
  readonly TROPICAL_FISH: EntityType<j_net_minecraft_world_entity_animal.TropicalFish>;
  readonly TURTLE: EntityType<j_net_minecraft_world_entity_animal.Turtle>;
  readonly VEX: EntityType<j_net_minecraft_world_entity_monster.Vex>;
  readonly VILLAGER: EntityType<j_net_minecraft_world_entity_npc.Villager>;
  readonly VINDICATOR: EntityType<j_net_minecraft_world_entity_monster.Vindicator>;
  readonly WANDERING_TRADER: EntityType<j_net_minecraft_world_entity_npc.WanderingTrader>;
  readonly WARDEN: EntityType<j_net_minecraft_world_entity_monster_warden.Warden>;
  readonly WIND_CHARGE: EntityType<j_net_minecraft_world_entity_projectile_windcharge.WindCharge>;
  readonly WITCH: EntityType<j_net_minecraft_world_entity_monster.Witch>;
  readonly WITHER: EntityType<j_net_minecraft_world_entity_boss_wither.WitherBoss>;
  readonly WITHER_SKELETON: EntityType<j_net_minecraft_world_entity_monster.WitherSkeleton>;
  readonly WITHER_SKULL: EntityType<j_net_minecraft_world_entity_projectile.WitherSkull>;
  readonly WOLF: EntityType<j_net_minecraft_world_entity_animal_wolf.Wolf>;
  readonly ZOGLIN: EntityType<j_net_minecraft_world_entity_monster.Zoglin>;
  readonly ZOMBIE: EntityType<j_net_minecraft_world_entity_monster.Zombie>;
  readonly ZOMBIE_HORSE: EntityType<j_net_minecraft_world_entity_animal_horse.ZombieHorse>;
  readonly ZOMBIE_VILLAGER: EntityType<j_net_minecraft_world_entity_monster.ZombieVillager>;
  readonly ZOMBIFIED_PIGLIN: EntityType<j_net_minecraft_world_entity_monster.ZombifiedPiglin>;
  appendComponentsConfig<T /* extends Entity */>(arg0: JavaConsumer<T>, arg1: j_net_minecraft_world_item.ItemStack): JavaConsumer<T>;
  appendCustomEntityStackConfig<T /* extends Entity */>(arg0: JavaConsumer<T>, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_item.ItemStack, arg3: LivingEntity | null): JavaConsumer<T> | null;
  appendDefaultStackConfig<T /* extends Entity */>(arg0: JavaConsumer<T>, arg1: j_net_minecraft_world_level.Level, arg2: j_net_minecraft_world_item.ItemStack, arg3: LivingEntity | null): JavaConsumer<T> | null;
  by(arg0: j_net_minecraft_world_level_storage.ValueInput): JavaOptional<EntityType<object>>;
  byString(arg0: string): JavaOptional<EntityType<object>>;
  create(arg0: j_net_minecraft_world_level_storage.ValueInput, arg1: j_net_minecraft_world_level.Level, arg2: EntitySpawnReason): JavaOptional<Entity>;
  create(arg0: j_net_minecraft_world_level_storage.ValueInput, arg1: j_net_minecraft_world_level.Level, arg2: EntitySpawnReason, arg3: boolean): JavaOptional<Entity>;
  createDefaultStackConfig<T /* extends Entity */>(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack, arg2: LivingEntity | null): JavaConsumer<T> | null;
  getKey(arg0: EntityType<object>): j_net_minecraft_resources.ResourceLocation;
  getYOffset(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: boolean, arg3: j_net_minecraft_world_phys.AABB): number;
  loadEntitiesRecursive(arg0: j_net_minecraft_world_level_storage.ValueInput_ValueInputList, arg1: j_net_minecraft_world_level.Level, arg2: EntitySpawnReason): JavaOpaque<"java.util.stream.Stream", [Entity]>;
  loadEntityRecursive(arg0: j_net_minecraft_nbt.CompoundTag, arg1: j_net_minecraft_world_level.Level, arg2: EntitySpawnReason, arg3: JavaFunction<Entity, Entity>): Entity | null;
  loadEntityRecursive(arg0: j_net_minecraft_world_level_storage.ValueInput, arg1: j_net_minecraft_world_level.Level, arg2: EntitySpawnReason, arg3: JavaFunction<Entity, Entity>): Entity | null;
  updateCustomEntityTag(arg0: j_net_minecraft_world_level.Level, arg1: LivingEntity | null, arg2: Entity | null, arg3: j_net_minecraft_world_item_component.CustomData): void | null;
}

/** JVM class net.minecraft.world.entity.EntityType$Builder. */
export interface EntityType_BuilderMembers<T /* extends Entity */ = unknown> {
  attach(arg0: EntityAttachment, arg1: number, arg2: number, arg3: number): EntityType_Builder<T>;
  attach(arg0: EntityAttachment, arg1: j_net_minecraft_world_phys.Vec3): EntityType_Builder<T>;
  build(arg0: j_net_minecraft_resources.ResourceKey<EntityType<object>>): EntityType<T>;
  canSpawnFarFromPlayer(): EntityType_Builder<T>;
  clientTrackingRange(arg0: number): EntityType_Builder<T>;
  eyeHeight(arg0: number): EntityType_Builder<T>;
  fireImmune(): EntityType_Builder<T>;
  immuneTo(...arg0: Array<j_net_minecraft_world_level_block.Block>): EntityType_Builder<T>;
  nameTagOffset(arg0: number): EntityType_Builder<T>;
  noLootTable(): EntityType_Builder<T>;
  noSave(): EntityType_Builder<T>;
  noSummon(): EntityType_Builder<T>;
  passengerAttachments(...arg0: Array<number>): EntityType_Builder<T>;
  passengerAttachments(...arg0: Array<j_net_minecraft_world_phys.Vec3>): EntityType_Builder<T>;
  requiredFeatures(...arg0: Array<j_net_minecraft_world_flag.FeatureFlag>): EntityType_Builder<T>;
  ridingOffset(arg0: number): EntityType_Builder<T>;
  sized(arg0: number, arg1: number): EntityType_Builder<T>;
  spawnDimensionsScale(arg0: number): EntityType_Builder<T>;
  updateInterval(arg0: number): EntityType_Builder<T>;
  vehicleAttachment(arg0: j_net_minecraft_world_phys.Vec3): EntityType_Builder<T>;
}
export type EntityType_Builder<T /* extends Entity */ = unknown> = EntityType_BuilderMembers<T>;
export interface EntityType_BuilderStatics {
  createNothing<T /* extends Entity */>(arg0: MobCategory): EntityType_Builder<T>;
  of<T /* extends Entity */>(arg0: EntityType_EntityFactory<T>, arg1: MobCategory): EntityType_Builder<T>;
}

/** JVM interface net.minecraft.world.entity.EntityType$EntityFactory. */
export interface EntityType_EntityFactoryMembers<T /* extends Entity */ = unknown> {
  create(arg0: EntityType<T>, arg1: j_net_minecraft_world_level.Level): T | null;
}
export type EntityType_EntityFactory<T /* extends Entity */ = unknown> = EntityType_EntityFactoryMembers<T>;
export interface EntityType_EntityFactoryStatics {
}

/** Live JVM enum net.minecraft.world.entity.EquipmentSlot; constants are host handles, not strings. */
export type EquipmentSlot = JavaEnum<"net.minecraft.world.entity.EquipmentSlot", "BODY" | "CHEST" | "FEET" | "HEAD" | "LEGS" | "MAINHAND" | "OFFHAND" | "SADDLE"> & EquipmentSlotMembers;
export interface EquipmentSlotMembers {
  canIncreaseExperience(): boolean;
  getFilterBit(arg0: number): number;
  getId(): number;
  getIndex(): number;
  getIndex(arg0: number): number;
  getName(): string;
  getSerializedName(): string;
  getType(): EquipmentSlot_Type;
  isArmor(): boolean;
  limit(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
}
export interface EquipmentSlotStatics {
  readonly BODY: EquipmentSlot;
  readonly CHEST: EquipmentSlot;
  readonly FEET: EquipmentSlot;
  readonly HEAD: EquipmentSlot;
  readonly LEGS: EquipmentSlot;
  readonly MAINHAND: EquipmentSlot;
  readonly OFFHAND: EquipmentSlot;
  readonly SADDLE: EquipmentSlot;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [EquipmentSlot]>;
  readonly CODEC: j_net_minecraft_util.StringRepresentable_EnumCodec<EquipmentSlot>;
  readonly NO_COUNT_LIMIT: 0;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, EquipmentSlot>;
  readonly VALUES: JavaList<EquipmentSlot>;
  byName(arg0: string): EquipmentSlot;
  valueOf(arg0: string): EquipmentSlot;
  values(): Array<EquipmentSlot>;
}

/** Live JVM enum net.minecraft.world.entity.EquipmentSlot$Type; constants are host handles, not strings. */
export type EquipmentSlot_Type = JavaEnum<"net.minecraft.world.entity.EquipmentSlot$Type", "ANIMAL_ARMOR" | "HAND" | "HUMANOID_ARMOR" | "SADDLE"> & EquipmentSlot_TypeMembers;
export interface EquipmentSlot_TypeMembers {
}
export interface EquipmentSlot_TypeStatics {
  readonly ANIMAL_ARMOR: EquipmentSlot_Type;
  readonly HAND: EquipmentSlot_Type;
  readonly HUMANOID_ARMOR: EquipmentSlot_Type;
  readonly SADDLE: EquipmentSlot_Type;
  valueOf(arg0: string): EquipmentSlot_Type;
  values(): Array<EquipmentSlot_Type>;
}

/** Live JVM enum net.minecraft.world.entity.EquipmentSlotGroup; constants are host handles, not strings. */
export type EquipmentSlotGroup = JavaEnum<"net.minecraft.world.entity.EquipmentSlotGroup", "ANY" | "ARMOR" | "BODY" | "CHEST" | "FEET" | "HAND" | "HEAD" | "LEGS" | "MAINHAND" | "OFFHAND" | "SADDLE"> & EquipmentSlotGroupMembers;
export interface EquipmentSlotGroupMembers {
  getSerializedName(): string;
  iterator(): JavaOpaque<"java.util.Iterator", [EquipmentSlot]>;
  slots(): JavaList<EquipmentSlot>;
  test(arg0: EquipmentSlot): boolean;
}
export interface EquipmentSlotGroupStatics {
  readonly ANY: EquipmentSlotGroup;
  readonly ARMOR: EquipmentSlotGroup;
  readonly BODY: EquipmentSlotGroup;
  readonly CHEST: EquipmentSlotGroup;
  readonly FEET: EquipmentSlotGroup;
  readonly HAND: EquipmentSlotGroup;
  readonly HEAD: EquipmentSlotGroup;
  readonly LEGS: EquipmentSlotGroup;
  readonly MAINHAND: EquipmentSlotGroup;
  readonly OFFHAND: EquipmentSlotGroup;
  readonly SADDLE: EquipmentSlotGroup;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [EquipmentSlotGroup]>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EquipmentSlotGroup]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, EquipmentSlotGroup>;
  bySlot(arg0: EquipmentSlot): EquipmentSlotGroup;
  valueOf(arg0: string): EquipmentSlotGroup;
  values(): Array<EquipmentSlotGroup>;
}

/** JVM record net.minecraft.world.entity.EquipmentTable. */
export interface EquipmentTableMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  lootTable(): j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>;
  slotDropChances(): JavaMap<EquipmentSlot, number>;
  toString(): string;
}
export type EquipmentTable = EquipmentTableMembers & JavaOpaque<"java.lang.Record">;
export interface EquipmentTableStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg1: number): EquipmentTable;
  new(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg1: JavaMap<EquipmentSlot, number>): EquipmentTable;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [EquipmentTable]>;
  readonly DROP_CHANCES_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaMap<EquipmentSlot, number>]>;
}

/** JVM interface net.minecraft.world.entity.EquipmentUser. */
export interface EquipmentUserMembers {
  equip(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg1: j_net_minecraft_world_level_storage_loot.LootParams, arg2: bigint, arg3: JavaMap<EquipmentSlot, number>): void;
  equip(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg1: j_net_minecraft_world_level_storage_loot.LootParams, arg2: JavaMap<EquipmentSlot, number>): void;
  equip(arg0: EquipmentTable, arg1: j_net_minecraft_world_level_storage_loot.LootParams): void;
  getItemBySlot(arg0: EquipmentSlot): j_net_minecraft_world_item.ItemStack;
  resolveSlot(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaList<EquipmentSlot>): EquipmentSlot | null;
  setDropChance(arg0: EquipmentSlot, arg1: number): void;
  setItemSlot(arg0: EquipmentSlot, arg1: j_net_minecraft_world_item.ItemStack): void;
}
export type EquipmentUser = EquipmentUserMembers;
export interface EquipmentUserStatics {
}

/** JVM class net.minecraft.world.entity.ExperienceOrb. */
export interface ExperienceOrbMembers {
  readonly __javaSupertypes?: readonly [Entity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  count: number;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  doWaterSplashEffect(): void;
  getBlockPosBelowThatAffectsMyMovement(): j_net_minecraft_core.BlockPos;
  getDefaultGravity(): number;
  getIcon(): number;
  getInterpolation(): InterpolationHandler;
  getMovementEmission(): Entity_MovementEmission;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  getValue(): number;
  hurtClient(arg0: j_net_minecraft_world_damagesource.DamageSource): boolean;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isAttackable(): boolean;
  playerTouch(arg0: j_net_minecraft_world_entity_player.Player): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setValue(arg0: number): void;
  sourceEntityId: JavaOpaque<"java.util.UUID"> | null;
  spawnReason: JavaOpaque<"org.bukkit.entity.ExperienceOrb$SpawnReason">;
  tick(): void;
  triggerEntityId: JavaOpaque<"java.util.UUID"> | null;
  unstuckIfPossible(arg0: number): void;
}
export type ExperienceOrb = ExperienceOrbMembers & Entity;
export interface ExperienceOrbStatics {
  new(arg0: EntityType<ExperienceOrb>, arg1: j_net_minecraft_world_level.Level): ExperienceOrb;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: number): ExperienceOrb;
  new(arg0: j_net_minecraft_world_level.Level, arg1: number, arg2: number, arg3: number, arg4: number, arg5: JavaOpaque<"org.bukkit.entity.ExperienceOrb$SpawnReason"> | null, arg6: Entity | null, arg7: Entity | null): ExperienceOrb;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3, arg3: number): ExperienceOrb;
  new(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: JavaOpaque<"org.bukkit.entity.ExperienceOrb$SpawnReason"> | null, arg5: Entity | null, arg6: Entity | null): ExperienceOrb;
  readonly DATA_VALUE: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  award(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: number): void;
  awardWithDirection(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3, arg3: number): void;
  awardWithDirection(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_phys.Vec3, arg2: j_net_minecraft_world_phys.Vec3, arg3: number, arg4: JavaOpaque<"org.bukkit.entity.ExperienceOrb$SpawnReason"> | null, arg5: Entity | null, arg6: Entity | null): void | null;
  getExperienceValue(arg0: number): number;
}

/** JVM class net.minecraft.world.entity.GlowSquid. */
export interface GlowSquidMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal.Squid];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  aiStep(): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent;
  getBreedOffspring(arg0: j_net_minecraft_server_level.ServerLevel, arg1: AgeableMob): AgeableMob | null;
  getDarkTicksRemaining(): number;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent;
  getInkParticle(): j_net_minecraft_core_particles.ParticleOptions;
  getSquirtSound(): j_net_minecraft_sounds.SoundEvent;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setDarkTicks(arg0: number): void;
}
export type GlowSquid = GlowSquidMembers & j_net_minecraft_world_entity_animal.Squid;
export interface GlowSquidStatics {
  new(arg0: EntityType<GlowSquid>, arg1: j_net_minecraft_world_level.Level): GlowSquid;
  checkGlowSquidSpawnRules(arg0: EntityType<LivingEntity>, arg1: j_net_minecraft_world_level.ServerLevelAccessor, arg2: EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
}

/** JVM interface net.minecraft.world.entity.HasCustomInventoryScreen. */
export interface HasCustomInventoryScreenMembers {
  openCustomInventoryScreen(arg0: j_net_minecraft_world_entity_player.Player): void;
}
export type HasCustomInventoryScreen = HasCustomInventoryScreenMembers;
export interface HasCustomInventoryScreenStatics {
}

/** Live JVM enum net.minecraft.world.entity.HumanoidArm; constants are host handles, not strings. */
export type HumanoidArm = JavaEnum<"net.minecraft.world.entity.HumanoidArm", "LEFT" | "RIGHT"> & HumanoidArmMembers;
export interface HumanoidArmMembers {
  getCaption(): j_net_minecraft_network_chat.Component;
  getId(): number;
  getKey(): string;
  getOpposite(): HumanoidArm;
  getSerializedName(): string;
}
export interface HumanoidArmStatics {
  readonly LEFT: HumanoidArm;
  readonly RIGHT: HumanoidArm;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [HumanoidArm]>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [HumanoidArm]>;
  valueOf(arg0: string): HumanoidArm;
  values(): Array<HumanoidArm>;
}

/** JVM interface net.minecraft.world.entity.InsideBlockEffectApplier. */
export interface InsideBlockEffectApplierMembers {
  apply(arg0: InsideBlockEffectType): void;
  runAfter(arg0: InsideBlockEffectType, arg1: JavaConsumer<Entity>): void;
  runBefore(arg0: InsideBlockEffectType, arg1: JavaConsumer<Entity>): void;
}
export type InsideBlockEffectApplier = InsideBlockEffectApplierMembers;
export interface InsideBlockEffectApplierStatics {
  readonly NOOP: InsideBlockEffectApplier;
}

/** JVM class net.minecraft.world.entity.InsideBlockEffectApplier$StepBasedCollector. */
export interface InsideBlockEffectApplier_StepBasedCollectorMembers {
  readonly __javaSupertypes?: readonly [InsideBlockEffectApplier];
  advanceStep(arg0: number, arg1: j_net_minecraft_core.BlockPos): void;
  apply(arg0: InsideBlockEffectType): void;
  applyAndClear(arg0: Entity): void;
  runAfter(arg0: InsideBlockEffectType, arg1: JavaConsumer<Entity>): void;
  runBefore(arg0: InsideBlockEffectType, arg1: JavaConsumer<Entity>): void;
}
export type InsideBlockEffectApplier_StepBasedCollector = InsideBlockEffectApplier_StepBasedCollectorMembers & InsideBlockEffectApplier;
export interface InsideBlockEffectApplier_StepBasedCollectorStatics {
  new(): InsideBlockEffectApplier_StepBasedCollector;
}

/** Live JVM enum net.minecraft.world.entity.InsideBlockEffectType; constants are host handles, not strings. */
export type InsideBlockEffectType = JavaEnum<"net.minecraft.world.entity.InsideBlockEffectType", "EXTINGUISH" | "FIRE_IGNITE" | "FREEZE" | "LAVA_IGNITE"> & InsideBlockEffectTypeMembers;
export interface InsideBlockEffectTypeMembers {
  effect(): InsideBlockEffectType_Applier;
}
export interface InsideBlockEffectTypeStatics {
  readonly EXTINGUISH: InsideBlockEffectType;
  readonly FIRE_IGNITE: InsideBlockEffectType;
  readonly FREEZE: InsideBlockEffectType;
  readonly LAVA_IGNITE: InsideBlockEffectType;
  valueOf(arg0: string): InsideBlockEffectType;
  values(): Array<InsideBlockEffectType>;
}

/** JVM interface net.minecraft.world.entity.InsideBlockEffectType$Applier. */
export interface InsideBlockEffectType_ApplierMembers {
  affect(arg0: Entity, arg1: j_net_minecraft_core.BlockPos): void;
}
export type InsideBlockEffectType_Applier = InsideBlockEffectType_ApplierMembers;
export interface InsideBlockEffectType_ApplierStatics {
}

/** JVM class net.minecraft.world.entity.Interaction. */
export interface InteractionMembers {
  readonly __javaSupertypes?: readonly [Entity, Attackable, Targeting];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  attack: Interaction_PlayerAction | null;
  canBeHitByProjectile(): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getDimensions(arg0: Pose): EntityDimensions;
  getHeight(): number;
  getLastAttacker(): LivingEntity | null;
  getPistonPushReaction(): j_net_minecraft_world_level_material.PushReaction;
  getResponse(): boolean;
  getTarget(): LivingEntity | null;
  getWidth(): number;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  interact(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  interaction: Interaction_PlayerAction | null;
  isIgnoringBlockTriggers(): boolean;
  isPickable(): boolean;
  makeBoundingBox(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.AABB;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setHeight(arg0: number): void;
  setResponse(arg0: boolean): void;
  setWidth(arg0: number): void;
  skipAttackInteraction(arg0: Entity): boolean;
  tick(): void;
}
export type Interaction = InteractionMembers & Entity & Attackable & Targeting;
export interface InteractionStatics {
  new(arg0: EntityType<object>, arg1: j_net_minecraft_world_level.Level): Interaction;
}

/** JVM record net.minecraft.world.entity.Interaction$PlayerAction. */
export interface Interaction_PlayerActionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  player(): JavaOpaque<"java.util.UUID">;
  timestamp(): bigint;
  toString(): string;
}
export type Interaction_PlayerAction = Interaction_PlayerActionMembers & JavaOpaque<"java.lang.Record">;
export interface Interaction_PlayerActionStatics {
  new(arg0: JavaOpaque<"java.util.UUID">, arg1: bigint): Interaction_PlayerAction;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Interaction_PlayerAction]>;
}

/** JVM class net.minecraft.world.entity.InterpolationHandler. */
export interface InterpolationHandlerMembers {
  cancel(): void;
  hasActiveInterpolation(): boolean;
  interpolate(): void;
  interpolateTo(arg0: j_net_minecraft_world_phys.Vec3, arg1: number, arg2: number): void;
  position(): j_net_minecraft_world_phys.Vec3;
  setInterpolationLength(arg0: number): void;
  xRot(): number;
  yRot(): number;
}
export type InterpolationHandler = InterpolationHandlerMembers;
export interface InterpolationHandlerStatics {
  new(arg0: Entity): InterpolationHandler;
  new(arg0: Entity, arg1: number): InterpolationHandler;
  new(arg0: Entity, arg1: number, arg2: JavaConsumer<InterpolationHandler> | null): InterpolationHandler;
  new(arg0: Entity, arg1: JavaConsumer<InterpolationHandler> | null): InterpolationHandler;
  readonly DEFAULT_INTERPOLATION_STEPS: 3;
}

/** JVM class net.minecraft.world.entity.ItemBasedSteering. */
export interface ItemBasedSteeringMembers {
  boost(arg0: j_net_minecraft_util.RandomSource): boolean;
  boostFactor(): number;
  boostTime: number;
  boostTimeTotal(): number;
  boosting: boolean;
  onSynced(): void;
  setBoostTicks(arg0: number): void;
  tickBoost(): void;
}
export type ItemBasedSteering = ItemBasedSteeringMembers;
export interface ItemBasedSteeringStatics {
  new(arg0: j_net_minecraft_network_syncher.SynchedEntityData, arg1: j_net_minecraft_network_syncher.EntityDataAccessor<number>): ItemBasedSteering;
}

/** JVM interface net.minecraft.world.entity.ItemSteerable. */
export interface ItemSteerableMembers {
  boost(): boolean;
}
export type ItemSteerable = ItemSteerableMembers;
export interface ItemSteerableStatics {
}

/** JVM interface net.minecraft.world.entity.Leashable. */
export interface LeashableMembers {
  canBeLeashed(): boolean;
  canHaveALeashAttachedTo(arg0: Entity): boolean;
  checkElasticInteractions(arg0: Entity, arg1: Leashable_LeashData): boolean;
  closeRangeLeashBehaviour(arg0: Entity): void;
  dropLeash(): void;
  getLeashData(): Leashable_LeashData | null;
  getLeashHolder(): Entity | null;
  getLeashOffset(): j_net_minecraft_world_phys.Vec3;
  getLeashOffset(arg0: number): j_net_minecraft_world_phys.Vec3;
  getQuadLeashOffsets(): Array<j_net_minecraft_world_phys.Vec3>;
  isLeashed(): boolean;
  leashDistanceTo(arg0: Entity): number;
  leashElasticDistance(): number;
  leashSnapDistance(): number;
  leashSnapDistanceOrConfig(): number;
  leashTooFarBehaviour(): void;
  mayBeLeashed(): boolean;
  onElasticLeashPull(): void;
  onLeashRemoved(): void;
  readLeashData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  removeLeash(): void;
  setDelayedLeashHolderId(arg0: number): void;
  setLeashData(arg0: Leashable_LeashData | null): void | null;
  setLeashedTo(arg0: Entity, arg1: boolean): void;
  supportQuadLeash(): boolean;
  whenLeashedTo(arg0: Entity): void;
  writeLeashData(arg0: j_net_minecraft_world_level_storage.ValueOutput, arg1: Leashable_LeashData | null): void | null;
}
export type Leashable = LeashableMembers;
export interface LeashableStatics {
  readonly AXIS_SPECIFIC_ELASTICITY: j_net_minecraft_world_phys.Vec3;
  readonly ENTITY_ATTACHMENT_POINT: JavaList<j_net_minecraft_world_phys.Vec3>;
  readonly LEASHER_ATTACHMENT_POINT: JavaList<j_net_minecraft_world_phys.Vec3>;
  readonly LEASH_ELASTIC_DIST: 6;
  readonly LEASH_TAG: "leash";
  readonly LEASH_TOO_FAR_DIST: 12;
  readonly MAXIMUM_ALLOWED_LEASHED_DIST: 16;
  readonly SHARED_QUAD_ATTACHMENT_POINTS: JavaList<j_net_minecraft_world_phys.Vec3>;
  readonly SPRING_DAMPENING: 0.7;
  readonly STIFFNESS: 0.11;
  readonly TORSIONAL_ELASTICITY: 10;
  angularFriction<E /* extends Leashable */>(arg0: E): number;
  createQuadLeashOffsets(arg0: Entity, arg1: number, arg2: number, arg3: number, arg4: number): Array<j_net_minecraft_world_phys.Vec3>;
  leashableInArea(arg0: Entity, arg1: JavaPredicate<Leashable>): JavaList<Leashable>;
  leashableInArea(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_phys.Vec3, arg2: JavaPredicate<Leashable>): JavaList<Leashable>;
  leashableLeashedTo(arg0: Entity): JavaList<Leashable>;
  tickLeash<E /* extends Leashable */>(arg0: j_net_minecraft_server_level.ServerLevel, arg1: E): void;
}

/** JVM class net.minecraft.world.entity.Leashable$LeashData. */
export interface Leashable_LeashDataMembers {
  angularMomentum: number;
  delayedLeashInfo: JavaOpaque<"com.mojang.datafixers.util.Either", [JavaOpaque<"java.util.UUID">, j_net_minecraft_core.BlockPos]> | null;
  leashHolder: Entity | null;
  setLeashHolder(arg0: Entity): void;
}
export type Leashable_LeashData = Leashable_LeashDataMembers;
export interface Leashable_LeashDataStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [Leashable_LeashData]>;
}

/** JVM record net.minecraft.world.entity.Leashable$Wrench. */
export interface Leashable_WrenchMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  force(): j_net_minecraft_world_phys.Vec3;
  hashCode(): number;
  scale(arg0: number): Leashable_Wrench;
  toString(): string;
  torque(): number;
}
export type Leashable_Wrench = Leashable_WrenchMembers & JavaOpaque<"java.lang.Record">;
export interface Leashable_WrenchStatics {
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: number): Leashable_Wrench;
}

/** JVM class net.minecraft.world.entity.LightningBolt. */
export interface LightningBoltMembers {
  readonly __javaSupertypes?: readonly [Entity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  flashes: number;
  getBlocksSetOnFire(): number;
  getCause(): j_net_minecraft_server_level.ServerPlayer | null;
  getHitEntities(): JavaOpaque<"java.util.stream.Stream", [Entity]>;
  getSoundSource(): j_net_minecraft_sounds.SoundSource;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isEffect: boolean;
  life: number;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  seed: bigint;
  setCause(arg0: j_net_minecraft_server_level.ServerPlayer | null): void | null;
  setVisualOnly(arg0: boolean): void;
  shouldRenderAtSqrDistance(arg0: number): boolean;
  tick(): void;
  visualOnly: boolean;
}
export type LightningBolt = LightningBoltMembers & Entity;
export interface LightningBoltStatics {
  new(arg0: EntityType<LightningBolt>, arg1: j_net_minecraft_world_level.Level): LightningBolt;
}

/** JVM abstract net.minecraft.world.entity.LivingEntity. */
export interface LivingEntityMembers {
  readonly __javaSupertypes?: readonly [Entity, Attackable, j_net_minecraft_world_waypoints.WaypointTransmitter];
  readonly activeEffects: JavaMap<j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, j_net_minecraft_world_effect.MobEffectInstance>;
  activeLocationDependentEnchantments(arg0: EquipmentSlot): JavaMap<j_net_minecraft_world_item_enchantment.Enchantment, JavaSet<j_net_minecraft_world_item_enchantment_effects.EnchantmentLocationBasedEffect>>;
  actuallyHurt(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number, arg3: JavaOpaque<"org.bukkit.event.entity.EntityDamageEvent">): boolean;
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  addEffect(arg0: j_net_minecraft_world_effect.MobEffectInstance): boolean;
  addEffect(arg0: j_net_minecraft_world_effect.MobEffectInstance, arg1: Entity | null): boolean | null;
  addEffect(arg0: j_net_minecraft_world_effect.MobEffectInstance, arg1: Entity | null, arg2: JavaOpaque<"org.bukkit.event.entity.EntityPotionEffectEvent$Cause">): boolean | null;
  addEffect(arg0: j_net_minecraft_world_effect.MobEffectInstance, arg1: Entity | null, arg2: JavaOpaque<"org.bukkit.event.entity.EntityPotionEffectEvent$Cause">, arg3: boolean): boolean | null;
  addEffect(arg0: j_net_minecraft_world_effect.MobEffectInstance, arg1: JavaOpaque<"org.bukkit.event.entity.EntityPotionEffectEvent$Cause">): boolean;
  aiStep(): void;
  animateHurt(arg0: number): void;
  applyInput(): void;
  applyItemBlocking(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): number;
  applyItemBlocking(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number, arg3: boolean): number;
  attackAnim: number;
  attackStrengthTicker: number;
  attackable(): boolean;
  autoSpinAttackDmg: number;
  autoSpinAttackItemStack: j_net_minecraft_world_item.ItemStack | null;
  autoSpinAttackTicks: number;
  baseTick(): void;
  blockUsingItem(arg0: j_net_minecraft_server_level.ServerLevel, arg1: LivingEntity): void;
  blockedByItem(arg0: LivingEntity): void;
  blockingItemEffects(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): void;
  brain: j_net_minecraft_world_entity_ai.Brain<object>;
  brainProvider(): j_net_minecraft_world_entity_ai.Brain_Provider<object>;
  bukkitPickUpLoot: boolean;
  calculateEntityAnimation(arg0: boolean): void;
  calculateFallDamage(arg0: number, arg1: number): number;
  canAttack(arg0: LivingEntity): boolean;
  canAttackType(arg0: EntityType<object>): boolean;
  canBeAffected(arg0: j_net_minecraft_world_effect.MobEffectInstance): boolean;
  canBeSeenAsEnemy(): boolean;
  canBeSeenByAnyone(): boolean;
  canBlockAttack(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): boolean;
  canBreatheUnderwater(): boolean;
  canCollideWithBukkit(arg0: Entity): boolean;
  canDispenserEquipIntoSlot(arg0: EquipmentSlot): boolean;
  canEquipWithDispenser(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  canFreeze(): boolean;
  canGlide(): boolean;
  canPickUpLoot(): boolean;
  canStandOnFluid(arg0: j_net_minecraft_world_level_material.FluidState): boolean;
  canUsePortal(arg0: boolean): boolean;
  canUseSlot(arg0: EquipmentSlot): boolean;
  causeFallDamage(arg0: number, arg1: number, arg2: j_net_minecraft_world_damagesource.DamageSource): boolean;
  checkAutoSpinAttack(arg0: j_net_minecraft_world_phys.AABB, arg1: j_net_minecraft_world_phys.AABB): void;
  checkFallDamage(arg0: number, arg1: boolean, arg2: j_net_minecraft_world_level_block_state.BlockState, arg3: j_net_minecraft_core.BlockPos): void;
  clearEquipmentSlots: boolean;
  clearSleepingPos(): void;
  clearedEquipmentSlots: JavaSet<EquipmentSlot>;
  collidableExemptions: JavaSet<JavaOpaque<"java.util.UUID">>;
  collides: boolean;
  combatTracker: j_net_minecraft_world_damagesource.CombatTracker;
  completeUsingItem(): void;
  readonly craftAttributes: j_org_bukkit_craftbukkit_attribute.CraftAttributeMap;
  createEquipment(): EntityEquipment;
  createWitherRose(arg0: LivingEntity | null): void | null;
  dead: boolean;
  deathTime: number;
  decreaseAirSupply(arg0: number): number;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  detectEquipmentUpdates(): void;
  die(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  doAutoAttackOnTouch(arg0: LivingEntity): void;
  doHurtEquipment(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number, ...arg2: Array<EquipmentSlot>): void;
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Entity): boolean;
  doPush(arg0: Entity): void;
  doesEmitEquipEvent(arg0: EquipmentSlot): boolean;
  drop(arg0: j_net_minecraft_world_item.ItemStack, arg1: boolean, arg2: boolean): j_net_minecraft_world_entity_item.ItemEntity | null;
  drop(arg0: j_net_minecraft_world_item.ItemStack, arg1: boolean, arg2: boolean, arg3: boolean, arg4: JavaConsumer<JavaOpaque<"org.bukkit.entity.Item">> | null): j_net_minecraft_world_entity_item.ItemEntity | null;
  dropAllDeathLoot(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource): JavaOpaque<"org.bukkit.event.entity.EntityDeathEvent">;
  dropCustomDeathLoot(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: boolean): void;
  dropEquipment(arg0: j_net_minecraft_server_level.ServerLevel): void;
  dropExperience(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Entity | null): void | null;
  dropFromGiftLootTable(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg2: JavaBiConsumer<j_net_minecraft_server_level.ServerLevel, j_net_minecraft_world_item.ItemStack>): boolean;
  dropFromLootTable(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg2: JavaFunction<j_net_minecraft_world_level_storage_loot.LootParams_Builder, j_net_minecraft_world_level_storage_loot.LootParams>, arg3: JavaBiConsumer<j_net_minecraft_server_level.ServerLevel, j_net_minecraft_world_item.ItemStack>): boolean;
  dropFromLootTable(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: boolean): void;
  dropFromShearingLootTable(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaBiConsumer<j_net_minecraft_server_level.ServerLevel, j_net_minecraft_world_item.ItemStack>): void;
  drops: JavaList<Entity_DefaultDrop>;
  eatStartTime: bigint;
  effectsDirty: boolean;
  readonly elytraAnimationState: ElytraAnimationState;
  readonly equipment: EntityEquipment;
  equipmentHasChanged(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  expToDrop: number;
  fallFlyTicks: number;
  forceAddEffect(arg0: j_net_minecraft_world_effect.MobEffectInstance, arg1: Entity | null): void | null;
  frictionState: JavaOpaque<"net.kyori.adventure.util.TriState">;
  getAbsorptionAmount(): number;
  getActiveEffects(): JavaCollection<j_net_minecraft_world_effect.MobEffectInstance>;
  getActiveEffectsMap(): JavaMap<j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, j_net_minecraft_world_effect.MobEffectInstance>;
  getAgeScale(): number;
  getArmorCoverPercentage(): number;
  getArmorValue(): number;
  getArrowCount(): number;
  getAttackAnim(arg0: number): number;
  getAttribute(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>): j_net_minecraft_world_entity_ai_attributes.AttributeInstance | null;
  getAttributeBaseValue(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>): number;
  getAttributeValue(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>): number;
  getAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeMap;
  getBaseExperienceReward(arg0: j_net_minecraft_server_level.ServerLevel): number;
  getBedOrientation(): j_net_minecraft_core.Direction | null;
  getBlockSpeedFactor(): number;
  getBrain(): j_net_minecraft_world_entity_ai.Brain<object>;
  getBukkitLivingEntity(): j_org_bukkit_craftbukkit_entity.CraftLivingEntity;
  getBukkitYaw(): number;
  getCombatTracker(): j_net_minecraft_world_damagesource.CombatTracker;
  getComfortableFallDistance(arg0: number): number;
  getDamageAfterArmorAbsorb(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): number;
  getDamageAfterMagicAbsorb(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): number;
  getDeathSound(): j_net_minecraft_sounds.SoundEvent | null;
  getDefaultDimensions(arg0: Pose): EntityDimensions;
  getDefaultGravity(): number;
  getDimensions(arg0: Pose): EntityDimensions;
  getDismountPoses(): JavaOpaque<"com.google.common.collect.ImmutableList", [Pose]>;
  getEffect(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>): j_net_minecraft_world_effect.MobEffectInstance | null;
  getEffectBlendFactor(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, arg1: number): number;
  getEffectiveGravity(): number;
  getEquipSound(arg0: EquipmentSlot, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_item_equipment.Equippable): j_net_minecraft_core.Holder<j_net_minecraft_sounds.SoundEvent>;
  getEquipmentSlotForItem(arg0: j_net_minecraft_world_item.ItemStack): EquipmentSlot;
  getExpReward(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Entity | null): number | null;
  getExperienceReward(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Entity | null): number | null;
  getFallDamageSound(arg0: number): j_net_minecraft_sounds.SoundEvent;
  getFallFlyingTicks(): number;
  getFallSounds(): LivingEntity_Fallsounds;
  getFluidFallingAdjustedMovement(arg0: number, arg1: boolean, arg2: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  getFlyingSpeed(): number;
  getHealth(): number;
  getHitbox(): j_net_minecraft_world_phys.AABB;
  getHurtDir(): number;
  getHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_sounds.SoundEvent | null;
  getInterpolation(): InterpolationHandler;
  getItemBlockingWith(): j_net_minecraft_world_item.ItemStack | null;
  getItemBySlot(arg0: EquipmentSlot): j_net_minecraft_world_item.ItemStack;
  getItemHeldByArm(arg0: HumanoidArm): j_net_minecraft_world_item.ItemStack;
  getItemInHand(arg0: j_net_minecraft_world.InteractionHand): j_net_minecraft_world_item.ItemStack;
  getJumpBoostPower(): number;
  getJumpPower(): number;
  getJumpPower(arg0: number): number;
  getKillCredit(): LivingEntity | null;
  getKnockback(arg0: Entity, arg1: j_net_minecraft_world_damagesource.DamageSource): number;
  getLastAttacker(): LivingEntity;
  getLastClimbablePos(): JavaOptional<j_net_minecraft_core.BlockPos>;
  getLastDamageSource(): j_net_minecraft_world_damagesource.DamageSource | null;
  getLastHurtByMob(): LivingEntity | null;
  getLastHurtByMobTimestamp(): number;
  getLastHurtByPlayer(): j_net_minecraft_world_entity_player.Player | null;
  getLastHurtByPlayerMemoryTime(): number;
  getLastHurtMob(): LivingEntity | null;
  getLastHurtMobTimestamp(): number;
  getLocalBoundsForPose(arg0: Pose): j_net_minecraft_world_phys.AABB;
  getLootTableSeed(): bigint;
  getLuck(): number;
  getMainArm(): HumanoidArm;
  getMainHandItem(): j_net_minecraft_world_item.ItemStack;
  getMaxAbsorption(): number;
  getMaxFallDistance(): number;
  getMaxHeadRotationRelativeToBody(): number;
  getMaxHealth(): number;
  getNoActionTime(): number;
  getOffhandItem(): j_net_minecraft_world_item.ItemStack;
  getPassengerRidingPosition(arg0: Entity): j_net_minecraft_world_phys.Vec3;
  getPreciseBodyRotation(arg0: number): number;
  getProjectile(arg0: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  getRayTrace(arg0: number, arg1: j_net_minecraft_world_level.ClipContext_Fluid): j_net_minecraft_world_phys.HitResult;
  getRelativePortalPosition(arg0: j_net_minecraft_core.Direction_Axis, arg1: j_net_minecraft.BlockUtil_FoundRectangle): j_net_minecraft_world_phys.Vec3;
  getRiddenInput(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  getRiddenSpeed(arg0: j_net_minecraft_world_entity_player.Player): number;
  getScale(): number;
  getSecondsToDisableBlocking(): number;
  getSleepingPos(): JavaOptional<j_net_minecraft_core.BlockPos>;
  getSlot(arg0: number): SlotAccess;
  getSoundVolume(): number;
  getSpeed(): number;
  getStingerCount(): number;
  getSwimAmount(arg0: number): number;
  getTargetEntity(arg0: number): j_net_minecraft_world_phys.EntityHitResult | null;
  getTicksUsingItem(): number;
  getUseItem(): j_net_minecraft_world_item.ItemStack;
  getUseItemRemainingTicks(): number;
  getUsedItemHand(): j_net_minecraft_world.InteractionHand;
  getViewYRot(arg0: number): number;
  getVisibilityPercent(arg0: Entity | null): number | null;
  getVisualRotationYInDegrees(): number;
  getVoicePitch(): number;
  getWaterSlowDown(): number;
  getWeaponItem(): j_net_minecraft_world_item.ItemStack;
  getYHeadRot(): number;
  goDownInWater(): void;
  handleDamageEvent(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  handleEntityEvent(arg0: number): void;
  handleExtraItemsCreatedOnUse(arg0: j_net_minecraft_world_item.ItemStack): void;
  hasEffect(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>): boolean;
  hasInfiniteMaterials(): boolean;
  hasItemInSlot(arg0: EquipmentSlot): boolean;
  hasLandedInLiquid(): boolean;
  hasLineOfSight(arg0: Entity): boolean;
  hasLineOfSight(arg0: Entity, arg1: j_net_minecraft_world_level.ClipContext_Block, arg2: j_net_minecraft_world_level.ClipContext_Fluid, arg3: number): boolean;
  heal(arg0: number): void;
  heal(arg0: number, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRegainHealthEvent$RegainReason">): void;
  heal(arg0: number, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRegainHealthEvent$RegainReason">, arg2: boolean): void;
  hurtArmor(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): void;
  hurtDuration: number;
  hurtHelmet(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): void;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  hurtTime: number;
  igniteForTicks(arg0: number): void;
  inactiveTick(): void;
  increaseAirSupply(arg0: number): number;
  indicateDamage(arg0: number, arg1: number): void;
  internalSetAbsorptionAmount(arg0: number): void;
  interpolation: InterpolationHandler;
  invulnerableDuration: number;
  isAffectedByFluids(): boolean;
  isAffectedByPotions(): boolean;
  isAlive(): boolean;
  isAlwaysExperienceDropper(): boolean;
  isAutoSpinAttack(): boolean;
  isBaby(): boolean;
  isBlocking(): boolean;
  isCollidable(arg0: boolean): boolean;
  isCurrentlyGlowing(): boolean;
  isDeadOrDying(): boolean;
  isEquippableInSlot(arg0: j_net_minecraft_world_item.ItemStack, arg1: EquipmentSlot): boolean;
  isFallFlying(): boolean;
  isHolding(arg0: JavaPredicate<j_net_minecraft_world_item.ItemStack>): boolean;
  isHolding(arg0: j_net_minecraft_world_item.Item): boolean;
  isImmobile(): boolean;
  isInWall(): boolean;
  isInvertedHealAndHarm(): boolean;
  isInvulnerableTo(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource): boolean;
  isJumping(): boolean;
  isLookingAtMe(arg0: LivingEntity, arg1: number, arg2: boolean, arg3: boolean, ...arg4: Array<number>): boolean;
  isPickable(): boolean;
  isPushable(): boolean;
  isSensitiveToWater(): boolean;
  isSleeping(): boolean;
  isSuppressingSlidingDownLadder(): boolean;
  isTransmittingWaypoint(): boolean;
  isUsingItem(): boolean;
  isVisuallySwimming(): boolean;
  jumpFromGround(): void;
  jumpInLiquid(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_material.Fluid>): void;
  jumping: boolean;
  kill(arg0: j_net_minecraft_server_level.ServerLevel): void;
  knockback(arg0: number, arg1: number, arg2: number): void;
  knockback(arg0: number, arg1: number, arg2: number, arg3: Entity | null, arg4: JavaOpaque<"io.papermc.paper.event.entity.EntityKnockbackEvent$Cause">): void | null;
  lastHurt: number;
  lastHurtByMob: EntityReference<LivingEntity> | null;
  lastHurtByMobTimestamp: number;
  lastHurtByPlayer: EntityReference<j_net_minecraft_world_entity_player.Player> | null;
  lastHurtByPlayerMemoryTime: number;
  lastJumpTime: bigint;
  lerpHeadRotationStep(arg0: number, arg1: number): void;
  lerpHeadSteps: number;
  lerpHeadTo(arg0: number, arg1: number): void;
  lerpYHeadRot: number;
  lookAt(arg0: j_net_minecraft_commands_arguments.EntityAnchorArgument_Anchor, arg1: j_net_minecraft_world_phys.Vec3): void;
  makeBrain(arg0: JavaOpaque<"com.mojang.serialization.Dynamic", [object]>): j_net_minecraft_world_entity_ai.Brain<object>;
  makePoofParticles(): void;
  makeSound(arg0: j_net_minecraft_sounds.SoundEvent | null): void | null;
  makeWaypointConnectionWith(arg0: j_net_minecraft_server_level.ServerPlayer): JavaOptional<j_net_minecraft_world_waypoints.WaypointTransmitter_Connection>;
  maxUpStep(): number;
  noActionTime: number;
  oAttackAnim: number;
  onAttributeUpdated(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>): void;
  onBelowWorld(): void;
  onChangedBlock(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_core.BlockPos): void;
  onClimbable(): boolean;
  onEffectAdded(arg0: j_net_minecraft_world_effect.MobEffectInstance, arg1: Entity | null): void | null;
  onEffectUpdated(arg0: j_net_minecraft_world_effect.MobEffectInstance, arg1: boolean, arg2: Entity | null): void | null;
  onEffectsRemoved(arg0: JavaCollection<j_net_minecraft_world_effect.MobEffectInstance>): void;
  onEnterCombat(): void;
  onEquipItem(arg0: EquipmentSlot, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_item.ItemStack): void;
  onEquipItem(arg0: EquipmentSlot, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_item.ItemStack, arg3: boolean): void;
  onEquippedItemBroken(arg0: j_net_minecraft_world_item.Item, arg1: EquipmentSlot): void;
  onItemPickup(arg0: j_net_minecraft_world_entity_item.ItemEntity): void;
  onLeaveCombat(): void;
  onRemoval(arg0: Entity_RemovalReason): void;
  onSyncedDataUpdated(arg0: j_net_minecraft_network_syncher.EntityDataAccessor<object>): void;
  playBlockFallSound(): void;
  playHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  playSecondaryHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  postDeathDropItems(arg0: JavaOpaque<"org.bukkit.event.entity.EntityDeathEvent">): void;
  push(arg0: Entity): void;
  pushEntities(): void;
  randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean): boolean;
  randomTeleport(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: JavaOpaque<"org.bukkit.event.player.PlayerTeleportEvent$TeleportCause">): JavaOptional<boolean>;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  recreateFromPacket(arg0: j_net_minecraft_network_protocol_game.ClientboundAddEntityPacket): void;
  releaseUsingItem(): void;
  remove(arg0: Entity_RemovalReason, arg1: JavaOpaque<"org.bukkit.event.entity.EntityRemoveEvent$Cause"> | null): void | null;
  removeAllEffects(): boolean;
  removeAllEffects(arg0: JavaOpaque<"org.bukkit.event.entity.EntityPotionEffectEvent$Cause">): boolean;
  removeArrowTime: number;
  removeEffect(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>): boolean;
  removeEffect(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, arg1: JavaOpaque<"org.bukkit.event.entity.EntityPotionEffectEvent$Cause">): boolean;
  removeEffectNoUpdate(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>): j_net_minecraft_world_effect.MobEffectInstance | null;
  removeEffectNoUpdate(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, arg1: JavaOpaque<"org.bukkit.event.entity.EntityPotionEffectEvent$Cause">): j_net_minecraft_world_effect.MobEffectInstance | null;
  removeEffectParticles(): void;
  removeFrost(): void;
  removeStingerTime: number;
  resolveBlockedDamage(arg0: j_net_minecraft_world_damagesource.DamageSource, arg1: number): number;
  resolveMobResponsibleForDamage(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  resolvePlayerResponsibleForDamage(arg0: j_net_minecraft_world_damagesource.DamageSource): j_net_minecraft_world_entity_player.Player | null;
  resyncUsingItem(arg0: j_net_minecraft_server_level.ServerPlayer): void;
  rideTick(): void;
  sanitizeScale(arg0: number): number;
  sendEffectToPassengers(arg0: j_net_minecraft_world_effect.MobEffectInstance): void;
  serverAiStep(): void;
  setAbsorptionAmount(arg0: number): void;
  setArrowCount(arg0: number): void;
  setArrowCount(arg0: number, arg1: boolean): void;
  setDiscardFriction(arg0: boolean): void;
  setHealth(arg0: number): void;
  setItemInHand(arg0: j_net_minecraft_world.InteractionHand, arg1: j_net_minecraft_world_item.ItemStack): void;
  setItemSlot(arg0: EquipmentSlot, arg1: j_net_minecraft_world_item.ItemStack): void;
  setItemSlot(arg0: EquipmentSlot, arg1: j_net_minecraft_world_item.ItemStack, arg2: boolean): void;
  setJumping(arg0: boolean): void;
  setLastHurtByMob(arg0: LivingEntity | null): void | null;
  setLastHurtByPlayer(arg0: JavaOpaque<"java.util.UUID">, arg1: number): void;
  setLastHurtByPlayer(arg0: j_net_minecraft_world_entity_player.Player, arg1: number): void;
  setLastHurtMob(arg0: Entity): void;
  setLivingEntityFlag(arg0: number, arg1: boolean): void;
  setNoActionTime(arg0: number): void;
  setRecordPlayingNearby(arg0: j_net_minecraft_core.BlockPos, arg1: boolean): void;
  setSleepingPos(arg0: j_net_minecraft_core.BlockPos): void;
  setSpeed(arg0: number): void;
  setSprinting(arg0: boolean): void;
  setStingerCount(arg0: number): void;
  setYBodyRot(arg0: number): void;
  setYHeadRot(arg0: number): void;
  shieldBlockingDelay: number;
  shouldDiscardFriction(): boolean;
  shouldDropExperience(): boolean;
  shouldDropLoot(): boolean;
  shouldShowName(): boolean;
  silentDeath: boolean;
  skipDropExperience: (boolean) & { (): void };
  spawnItemParticles(arg0: j_net_minecraft_world_item.ItemStack, arg1: number): void;
  startSleeping(arg0: j_net_minecraft_core.BlockPos): void;
  startUsingItem(arg0: j_net_minecraft_world.InteractionHand): void;
  startUsingItem(arg0: j_net_minecraft_world.InteractionHand, arg1: boolean): void;
  stopFallFlying(): void;
  stopRiding(): void;
  stopRiding(arg0: boolean): void;
  stopSleeping(): void;
  stopUsingItem(): void;
  swing(arg0: j_net_minecraft_world.InteractionHand): void;
  swing(arg0: j_net_minecraft_world.InteractionHand, arg1: boolean): void;
  swingTime: number;
  swinging: boolean;
  swingingArm: j_net_minecraft_world.InteractionHand;
  take(arg0: Entity, arg1: number): void;
  tick(): void;
  tickDeath(): void;
  tickEffects(): void;
  tickHeadTurn(arg0: number): void;
  tickRidden(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_phys.Vec3): void;
  totalEatTimeTicks: number;
  travel(arg0: j_net_minecraft_world_phys.Vec3): void;
  travelFlying(arg0: j_net_minecraft_world_phys.Vec3, arg1: number): void;
  travelFlying(arg0: j_net_minecraft_world_phys.Vec3, arg1: number, arg2: number, arg3: number): void;
  triggerOnDeathMobEffects(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Entity_RemovalReason): void;
  tryAddFrost(): void;
  updateEffectVisibility(): void;
  updateFallFlying(): void;
  updateInvisibilityStatus(): void;
  updateSwingTime(): void;
  updateUsingItem(arg0: j_net_minecraft_world_item.ItemStack): void;
  updateWalkAnimation(arg0: number): void;
  useItem: j_net_minecraft_world_item.ItemStack;
  useItemRemaining: number;
  readonly walkAnimation: WalkAnimationState;
  wasExperienceConsumed(): boolean;
  waypointIcon(): j_net_minecraft_world_waypoints.Waypoint_Icon;
  wouldNotSuffocateAtTargetPose(arg0: Pose): boolean;
  xxa: number;
  yBodyRot: number;
  yBodyRotO: number;
  yHeadRot: number;
  yHeadRotO: number;
  yya: number;
  zza: number;
}
export type LivingEntity = LivingEntityMembers & Entity & Attackable & j_net_minecraft_world_waypoints.WaypointTransmitter;
export interface LivingEntityStatics {
  new(arg0: EntityType<LivingEntity>, arg1: j_net_minecraft_world_level.Level): LivingEntity;
  readonly ARMOR_SLOT_OFFSET: 100;
  readonly BASE_JUMP_POWER: 0.42;
  readonly BODY_ARMOR_OFFSET: 105;
  readonly DATA_ARROW_COUNT_ID: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly DATA_HEALTH_ID: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly DATA_LIVING_ENTITY_FLAGS: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly DEATH_DURATION: 20;
  readonly DEFAULT_BABY_SCALE: 0.5;
  readonly DEFAULT_BASE_GRAVITY: 0.08;
  readonly EQUIPMENT_SLOT_OFFSET: 98;
  readonly EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: 0.5;
  readonly INPUT_FRICTION: 0.98;
  readonly LIVING_ENTITY_FLAG_IS_USING: 1;
  readonly LIVING_ENTITY_FLAG_OFF_HAND: 2;
  readonly LIVING_ENTITY_FLAG_SPIN_ATTACK: 4;
  readonly MIN_MOVEMENT_DISTANCE: 0.003;
  readonly PLAYER_HURT_EXPERIENCE_TIME: 100;
  readonly PLAYER_NOT_WEARING_DISGUISE_ITEM: JavaPredicate<LivingEntity>;
  readonly SADDLE_OFFSET: 106;
  readonly SLEEPING_DIMENSIONS: EntityDimensions;
  readonly SWING_DURATION: 6;
  readonly TAG_ATTRIBUTES: "attributes";
  readonly TAG_BRAIN: "Brain";
  readonly TAG_DEATH_TIME: "DeathTime";
  readonly TAG_EQUIPMENT: "equipment";
  readonly TAG_FALL_FLYING: "FallFlying";
  readonly TAG_HEALTH: "Health";
  readonly TAG_HURT_BY_TIMESTAMP: "HurtByTimestamp";
  readonly TAG_HURT_TIME: "HurtTime";
  readonly TAG_SLEEPING_POS: "sleeping_pos";
  areAllEffectsAmbient(arg0: JavaCollection<j_net_minecraft_world_effect.MobEffectInstance>): boolean;
  canGlideUsing(arg0: j_net_minecraft_world_item.ItemStack, arg1: EquipmentSlot): boolean;
  createLivingAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  entityEventForEquipmentBreak(arg0: EquipmentSlot): number;
  getSlotForHand(arg0: j_net_minecraft_world.InteractionHand): EquipmentSlot;
  resetForwardDirectionOfRelativePortalPosition(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
}

/** JVM record net.minecraft.world.entity.LivingEntity$Fallsounds. */
export interface LivingEntity_FallsoundsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  big(): j_net_minecraft_sounds.SoundEvent;
  equals(arg0: object): boolean;
  hashCode(): number;
  small(): j_net_minecraft_sounds.SoundEvent;
  toString(): string;
}
export type LivingEntity_Fallsounds = LivingEntity_FallsoundsMembers & JavaOpaque<"java.lang.Record">;
export interface LivingEntity_FallsoundsStatics {
  new(arg0: j_net_minecraft_sounds.SoundEvent, arg1: j_net_minecraft_sounds.SoundEvent): LivingEntity_Fallsounds;
}

/** JVM class net.minecraft.world.entity.Marker. */
export interface MarkerMembers {
  readonly __javaSupertypes?: readonly [Entity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  addPassenger(arg0: Entity): void;
  canAddPassenger(arg0: Entity): boolean;
  couldAcceptPassenger(): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getAddEntityPacket(arg0: j_net_minecraft_server_level.ServerEntity): j_net_minecraft_network_protocol.Packet<j_net_minecraft_network_protocol_game.ClientGamePacketListener>;
  getPistonPushReaction(): j_net_minecraft_world_level_material.PushReaction;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isIgnoringBlockTriggers(): boolean;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  tick(): void;
}
export type Marker = MarkerMembers & Entity;
export interface MarkerStatics {
  new(arg0: EntityType<object>, arg1: j_net_minecraft_world_level.Level): Marker;
}

/** JVM abstract net.minecraft.world.entity.Mob. */
export interface MobMembers {
  readonly __javaSupertypes?: readonly [LivingEntity, EquipmentUser, Leashable, Targeting];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  aiStep(): void;
  ambientSoundTime: number;
  ate(): void;
  aware: boolean;
  baseTick(): void;
  canAttackType(arg0: EntityType<object>): boolean;
  canBeLeashed(): boolean;
  canDispenserEquipIntoSlot(arg0: EquipmentSlot): boolean;
  canFireProjectileWeapon(arg0: j_net_minecraft_world_item.ProjectileWeaponItem): boolean;
  canHoldItem(arg0: j_net_minecraft_world_item.ItemStack): boolean;
  canPickUpLoot(): boolean;
  canReplaceCurrentItem(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack, arg2: EquipmentSlot): boolean;
  canReplaceEqualItem(arg0: j_net_minecraft_world_item.ItemStack, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  canShearEquipment(arg0: j_net_minecraft_world_entity_player.Player): boolean;
  checkDespawn(): void;
  checkSpawnObstruction(arg0: j_net_minecraft_world_level.LevelReader): boolean;
  checkSpawnRules(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: EntitySpawnReason): boolean;
  clampHeadRotationToBody(): void;
  clearHome(): void;
  convertTo<T /* extends Mob */>(arg0: EntityType<T>, arg1: ConversionParams, arg2: ConversionParams_AfterConversion<T>): T | null;
  convertTo<T /* extends Mob */>(arg0: EntityType<T>, arg1: ConversionParams, arg2: ConversionParams_AfterConversion<T>, arg3: JavaOpaque<"org.bukkit.event.entity.EntityTransformEvent$TransformReason"> | null, arg4: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason"> | null): T | null;
  convertTo<T /* extends Mob */>(arg0: EntityType<T>, arg1: ConversionParams, arg2: ConversionParams_CancellingAfterConversion<T>, arg3: JavaOpaque<"org.bukkit.event.entity.EntityTransformEvent$TransformReason"> | null, arg4: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason"> | null): T | null;
  convertTo<T /* extends Mob */>(arg0: EntityType<T>, arg1: ConversionParams, arg2: EntitySpawnReason, arg3: ConversionParams_AfterConversion<T>): T | null;
  convertTo<T /* extends Mob */>(arg0: EntityType<T>, arg1: ConversionParams, arg2: EntitySpawnReason, arg3: ConversionParams_AfterConversion<T>, arg4: JavaOpaque<"org.bukkit.event.entity.EntityTransformEvent$TransformReason"> | null, arg5: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason"> | null): T | null;
  convertTo<T /* extends Mob */>(arg0: EntityType<T>, arg1: ConversionParams, arg2: EntitySpawnReason, arg3: ConversionParams_CancellingAfterConversion<T>, arg4: JavaOpaque<"org.bukkit.event.entity.EntityTransformEvent$TransformReason"> | null, arg5: JavaOpaque<"org.bukkit.event.entity.CreatureSpawnEvent$SpawnReason"> | null): T | null;
  createBodyControl(): j_net_minecraft_world_entity_ai_control.BodyRotationControl;
  createEquipmentSlotContainer(arg0: EquipmentSlot): j_net_minecraft_world.Container;
  createNavigation(arg0: j_net_minecraft_world_level.Level): j_net_minecraft_world_entity_ai_navigation.PathNavigation;
  customServerAiStep(arg0: j_net_minecraft_server_level.ServerLevel): void;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  despawnInPeacefulOverride: JavaOpaque<"net.kyori.adventure.util.TriState">;
  doHurtTarget(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Entity): boolean;
  dropCustomDeathLoot(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: boolean): void;
  dropFromLootTable(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: boolean): void;
  dropPreservedEquipment(arg0: j_net_minecraft_server_level.ServerLevel): void;
  dropPreservedEquipment(arg0: j_net_minecraft_server_level.ServerLevel, arg1: JavaPredicate<j_net_minecraft_world_item.ItemStack>): JavaSet<EquipmentSlot>;
  enchantSpawnedArmor(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: EquipmentSlot, arg3: j_net_minecraft_world.DifficultyInstance): void;
  enchantSpawnedWeapon(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world.DifficultyInstance): void;
  equip(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>, arg1: JavaMap<EquipmentSlot, number>): void;
  equip(arg0: EquipmentTable): void;
  equipItemIfPossible(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): j_net_minecraft_world_item.ItemStack;
  equipItemIfPossible(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_world_entity_item.ItemEntity | null): j_net_minecraft_world_item.ItemStack | null;
  finalizeSpawn(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_world.DifficultyInstance, arg2: EntitySpawnReason, arg3: SpawnGroupData | null): SpawnGroupData | null;
  getAmbientSound(): j_net_minecraft_sounds.SoundEvent | null;
  getAmbientSoundInterval(): number;
  getAttackBoundingBox(): j_net_minecraft_world_phys.AABB;
  getBaseExperienceReward(arg0: j_net_minecraft_server_level.ServerLevel): number;
  getBodyArmorItem(): j_net_minecraft_world_item.ItemStack;
  getControllingPassenger(): LivingEntity | null;
  getDropChances(): DropChances;
  getHeadRotSpeed(): number;
  getHomePosition(): j_net_minecraft_core.BlockPos;
  getHomeRadius(): number;
  getJumpControl(): j_net_minecraft_world_entity_ai_control.JumpControl;
  getLeashData(): Leashable_LeashData | null;
  getLookControl(): j_net_minecraft_world_entity_ai_control.LookControl;
  getLootTable(): JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>;
  getLootTableSeed(): bigint;
  getMainArm(): HumanoidArm;
  getMaxFallDistance(): number;
  getMaxHeadXRot(): number;
  getMaxHeadYRot(): number;
  getMaxSpawnClusterSize(): number;
  getMoveControl(): j_net_minecraft_world_entity_ai_control.MoveControl;
  getNavigation(): j_net_minecraft_world_entity_ai_navigation.PathNavigation;
  getPathfindingMalus(arg0: j_net_minecraft_world_level_pathfinder.PathType): number;
  getPickResult(): j_net_minecraft_world_item.ItemStack | null;
  getPickupReach(): j_net_minecraft_core.Vec3i;
  getPreferredWeaponType(): j_net_minecraft_tags.TagKey<j_net_minecraft_world_item.Item> | null;
  getSensing(): j_net_minecraft_world_entity_ai_sensing.Sensing;
  getTarget(): LivingEntity | null;
  getTargetFromBrain(): LivingEntity | null;
  goalFloat: j_net_minecraft_world_entity_ai_goal.FloatGoal | null;
  goalSelector: j_net_minecraft_world_entity_ai_goal.GoalSelector;
  handleEntityEvent(arg0: number): void;
  hasHome(): boolean;
  inactiveTick(): void;
  interact(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  isAggressive(): boolean;
  isEffectiveAi(): boolean;
  isLeftHanded(): boolean;
  isMaxGroupSizeReached(arg0: number): boolean;
  isNoAi(): boolean;
  isPersistenceRequired(): boolean;
  isSaddled(): boolean;
  isSunBurnTick(): boolean;
  isWearingBodyArmor(): boolean;
  isWithinHome(): boolean;
  isWithinHome(arg0: j_net_minecraft_core.BlockPos): boolean;
  isWithinHome(arg0: j_net_minecraft_world_phys.Vec3): boolean;
  isWithinMeleeAttackRange(arg0: LivingEntity): boolean;
  jumpControl: j_net_minecraft_world_entity_ai_control.JumpControl;
  jumpInLiquid(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_material.Fluid>): void;
  leashTooFarBehaviour(): void;
  lookAt(arg0: Entity, arg1: number, arg2: number): void;
  lookControl: j_net_minecraft_world_entity_ai_control.LookControl;
  lootTable: JavaOptional<j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_storage_loot.LootTable>>;
  lootTableSeed: bigint;
  mobInteract(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world.InteractionHand): j_net_minecraft_world.InteractionResult;
  moveControl: j_net_minecraft_world_entity_ai_control.MoveControl;
  navigation: j_net_minecraft_world_entity_ai_navigation.PathNavigation;
  onAttributeUpdated(arg0: j_net_minecraft_core.Holder<j_net_minecraft_world_entity_ai_attributes.Attribute>): void;
  onLeashRemoved(): void;
  onOffspringSpawnedFromEgg(arg0: j_net_minecraft_world_entity_player.Player, arg1: Mob): void;
  onPathfindingDone(): void;
  onPathfindingStart(): void;
  pickUpItem(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_item.ItemEntity): void;
  playAmbientSound(): void;
  playAttackSound(): void;
  playHurtSound(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  populateDefaultEquipmentEnchantments(arg0: j_net_minecraft_world_level.ServerLevelAccessor, arg1: j_net_minecraft_util.RandomSource, arg2: j_net_minecraft_world.DifficultyInstance): void;
  populateDefaultEquipmentSlots(arg0: j_net_minecraft_util.RandomSource, arg1: j_net_minecraft_world.DifficultyInstance): void;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  registerGoals(): void;
  removeAfterChangingDimensions(): void;
  removeAllGoals(arg0: JavaPredicate<j_net_minecraft_world_entity_ai_goal.Goal>): void;
  removeFreeWill(): void;
  removeWhenFarAway(arg0: number): boolean;
  requiresCustomPersistence(): boolean;
  sendDebugPackets(): void;
  serverAiStep(): void;
  setAggressive(arg0: boolean): void;
  setBaby(arg0: boolean): void;
  setBodyArmorItem(arg0: j_net_minecraft_world_item.ItemStack): void;
  setCanPickUpLoot(arg0: boolean): void;
  setDropChance(arg0: EquipmentSlot, arg1: number): void;
  setGuaranteedDrop(arg0: EquipmentSlot): void;
  setHomeTo(arg0: j_net_minecraft_core.BlockPos, arg1: number): void;
  setItemSlotAndDropWhenKilled(arg0: EquipmentSlot, arg1: j_net_minecraft_world_item.ItemStack): void;
  setLeashData(arg0: Leashable_LeashData | null): void | null;
  setLeftHanded(arg0: boolean): void;
  setNoAi(arg0: boolean): void;
  setPathfindingMalus(arg0: j_net_minecraft_world_level_pathfinder.PathType, arg1: number): void;
  setPersistenceRequired(): void;
  setPersistenceRequired(arg0: boolean): void;
  setSpeed(arg0: number): void;
  setTarget(arg0: LivingEntity | null): void | null;
  setTarget(arg0: LivingEntity | null, arg1: JavaOpaque<"org.bukkit.event.entity.EntityTargetEvent$TargetReason"> | null): boolean | null;
  setXxa(arg0: number): void;
  setYya(arg0: number): void;
  setZza(arg0: number): void;
  shouldActuallyDespawnInPeaceful(): boolean;
  shouldDespawnInPeaceful(): boolean;
  shouldPassengersInheritMalus(): boolean;
  shouldSkipLoot(arg0: EquipmentSlot): boolean;
  spawnAnim(): void;
  startRiding(arg0: Entity, arg1: boolean): boolean;
  stopInPlace(): void;
  targetSelector: j_net_minecraft_world_entity_ai_goal.GoalSelector;
  tick(): void;
  tickHeadTurn(arg0: number): void;
  updateControlFlags(): void;
  wantsToPickUp(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): boolean;
  xpReward: number;
}
export type Mob = MobMembers & LivingEntity & EquipmentUser & Leashable & Targeting;
export interface MobStatics {
  new(arg0: EntityType<Mob>, arg1: j_net_minecraft_world_level.Level): Mob;
  readonly MAX_ENCHANTED_ARMOR_CHANCE: 0.5;
  readonly MAX_ENCHANTED_WEAPON_CHANCE: 0.25;
  readonly MAX_PICKUP_LOOT_CHANCE: 0.55;
  readonly MAX_WEARING_ARMOR_CHANCE: 0.15;
  readonly PICKUP_REACH: 1;
  readonly RANDOM_SPAWN_BONUS_ID: j_net_minecraft_resources.ResourceLocation;
  readonly TAG_CAN_PICK_UP_LOOT: "CanPickUpLoot";
  readonly TAG_DROP_CHANCES: "drop_chances";
  readonly TAG_LEFT_HANDED: "LeftHanded";
  readonly TAG_NO_AI: "NoAI";
  readonly UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: 2;
  checkMobSpawnRules(arg0: EntityType<Mob>, arg1: j_net_minecraft_world_level.LevelAccessor, arg2: EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  createMobAttributes(): j_net_minecraft_world_entity_ai_attributes.AttributeSupplier_Builder;
  getEquipmentForSlot(arg0: EquipmentSlot, arg1: number): j_net_minecraft_world_item.Item | null;
}

/** Live JVM enum net.minecraft.world.entity.MobCategory; constants are host handles, not strings. */
export type MobCategory = JavaEnum<"net.minecraft.world.entity.MobCategory", "AMBIENT" | "AXOLOTLS" | "CREATURE" | "MISC" | "MONSTER" | "UNDERGROUND_WATER_CREATURE" | "WATER_AMBIENT" | "WATER_CREATURE"> & MobCategoryMembers;
export interface MobCategoryMembers {
  getDespawnDistance(): number;
  getMaxInstancesPerChunk(): number;
  getName(): string;
  getNoDespawnDistance(): number;
  getSerializedName(): string;
  isFriendly(): boolean;
  isPersistent(): boolean;
}
export interface MobCategoryStatics {
  readonly AMBIENT: MobCategory;
  readonly AXOLOTLS: MobCategory;
  readonly CREATURE: MobCategory;
  readonly MISC: MobCategory;
  readonly MONSTER: MobCategory;
  readonly UNDERGROUND_WATER_CREATURE: MobCategory;
  readonly WATER_AMBIENT: MobCategory;
  readonly WATER_CREATURE: MobCategory;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [MobCategory]>;
  valueOf(arg0: string): MobCategory;
  values(): Array<MobCategory>;
}

/** Live JVM enum net.minecraft.world.entity.MoverType; constants are host handles, not strings. */
export type MoverType = JavaEnum<"net.minecraft.world.entity.MoverType", "PISTON" | "PLAYER" | "SELF" | "SHULKER" | "SHULKER_BOX"> & MoverTypeMembers;
export interface MoverTypeMembers {
}
export interface MoverTypeStatics {
  readonly PISTON: MoverType;
  readonly PLAYER: MoverType;
  readonly SELF: MoverType;
  readonly SHULKER: MoverType;
  readonly SHULKER_BOX: MoverType;
  valueOf(arg0: string): MoverType;
  values(): Array<MoverType>;
}

/** JVM interface net.minecraft.world.entity.NeutralMob. */
export interface NeutralMobMembers {
  addPersistentAngerSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  canAttack(arg0: LivingEntity): boolean;
  forgetCurrentTargetAndRefreshUniversalAnger(): void;
  getLastHurtByMob(): LivingEntity | null;
  getPersistentAngerTarget(): JavaOpaque<"java.util.UUID"> | null;
  getRemainingPersistentAngerTime(): number;
  getTarget(): LivingEntity | null;
  isAngry(): boolean;
  isAngryAt(arg0: LivingEntity, arg1: j_net_minecraft_server_level.ServerLevel): boolean;
  isAngryAtAllPlayers(arg0: j_net_minecraft_server_level.ServerLevel): boolean;
  playerDied(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_entity_player.Player): void;
  readPersistentAngerSaveData(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_level_storage.ValueInput): void;
  setLastHurtByMob(arg0: LivingEntity | null): void | null;
  setPersistentAngerTarget(arg0: JavaOpaque<"java.util.UUID"> | null): void | null;
  setRemainingPersistentAngerTime(arg0: number): void;
  setTarget(arg0: LivingEntity | null): void | null;
  setTarget(arg0: LivingEntity | null, arg1: JavaOpaque<"org.bukkit.event.entity.EntityTargetEvent$TargetReason"> | null): boolean | null;
  startPersistentAngerTimer(): void;
  stopBeingAngry(): void;
  tickInitialPersistentAnger(arg0: j_net_minecraft_world_level.Level): void;
  updatePersistentAnger(arg0: j_net_minecraft_server_level.ServerLevel, arg1: boolean): void;
}
export type NeutralMob = NeutralMobMembers;
export interface NeutralMobStatics {
  readonly TAG_ANGER_TIME: "AngerTime";
  readonly TAG_ANGRY_AT: "AngryAt";
}

/** JVM class net.minecraft.world.entity.OminousItemSpawner. */
export interface OminousItemSpawnerMembers {
  readonly __javaSupertypes?: readonly [Entity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  addParticles(): void;
  addPassenger(arg0: Entity): void;
  canAddPassenger(arg0: Entity): boolean;
  couldAcceptPassenger(): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  getItem(): j_net_minecraft_world_item.ItemStack;
  getPistonPushReaction(): j_net_minecraft_world_level_material.PushReaction;
  hurtServer(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): boolean;
  isIgnoringBlockTriggers(): boolean;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setItem(arg0: j_net_minecraft_world_item.ItemStack): void;
  spawnItemAfterTicks: bigint;
  tick(): void;
}
export type OminousItemSpawner = OminousItemSpawnerMembers & Entity;
export interface OminousItemSpawnerStatics {
  new(arg0: EntityType<OminousItemSpawner>, arg1: j_net_minecraft_world_level.Level): OminousItemSpawner;
  readonly TICKS_BEFORE_ABOUT_TO_SPAWN_SOUND: 36;
  create(arg0: j_net_minecraft_world_level.Level, arg1: j_net_minecraft_world_item.ItemStack): OminousItemSpawner;
}

/** JVM interface net.minecraft.world.entity.OwnableEntity. */
export interface OwnableEntityMembers {
  getOwner(): LivingEntity | null;
  getOwnerReference(): EntityReference<LivingEntity> | null;
  getRootOwner(): LivingEntity | null;
  level(): j_net_minecraft_world_level.Level;
}
export type OwnableEntity = OwnableEntityMembers;
export interface OwnableEntityStatics {
}

/** JVM abstract net.minecraft.world.entity.PathfinderMob. */
export interface PathfinderMobMembers {
  readonly __javaSupertypes?: readonly [Mob];
  checkSpawnRules(arg0: j_net_minecraft_world_level.LevelAccessor, arg1: EntitySpawnReason): boolean;
  closeRangeLeashBehaviour(arg0: Entity): void;
  followLeashSpeed(): number;
  getMovingTarget(): j_net_minecraft_core.BlockPos;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos): number;
  getWalkTargetValue(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level.LevelReader): number;
  isPanicking(): boolean;
  isPathFinding(): boolean;
  movingTarget: j_net_minecraft_core.BlockPos;
  shouldStayCloseToLeashHolder(): boolean;
  whenLeashedTo(arg0: Entity): void;
}
export type PathfinderMob = PathfinderMobMembers & Mob;
export interface PathfinderMobStatics {
  new(arg0: EntityType<PathfinderMob>, arg1: j_net_minecraft_world_level.Level): PathfinderMob;
  readonly DEFAULT_WALK_TARGET_VALUE: 0;
}

/** JVM interface net.minecraft.world.entity.PlayerRideable. */
export interface PlayerRideableMembers {
}
export type PlayerRideable = PlayerRideableMembers;
export interface PlayerRideableStatics {
}

/** JVM interface net.minecraft.world.entity.PlayerRideableJumping. */
export interface PlayerRideableJumpingMembers {
  readonly __javaSupertypes?: readonly [PlayerRideable];
  canJump(): boolean;
  getJumpCooldown(): number;
  handleStartJump(arg0: number): void;
  handleStopJump(): void;
  onPlayerJump(arg0: number): void;
}
export type PlayerRideableJumping = PlayerRideableJumpingMembers & PlayerRideable;
export interface PlayerRideableJumpingStatics {
}

/** JVM class net.minecraft.world.entity.PortalProcessor. */
export interface PortalProcessorMembers {
  getEntryPosition(): j_net_minecraft_core.BlockPos;
  getPortalDestination(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Entity): j_net_minecraft_world_level_portal.TeleportTransition | null;
  getPortalLocalTransition(): j_net_minecraft_world_level_block.Portal_Transition;
  getPortalTime(): number;
  hasExpired(): boolean;
  isInsidePortalThisTick(): boolean;
  isSamePortal(arg0: j_net_minecraft_world_level_block.Portal): boolean;
  processPortalTeleportation(arg0: j_net_minecraft_server_level.ServerLevel, arg1: Entity, arg2: boolean): boolean;
  setAsInsidePortalThisTick(arg0: boolean): void;
  updateEntryPosition(arg0: j_net_minecraft_core.BlockPos): void;
}
export type PortalProcessor = PortalProcessorMembers;
export interface PortalProcessorStatics {
  new(arg0: j_net_minecraft_world_level_block.Portal, arg1: j_net_minecraft_core.BlockPos): PortalProcessor;
}

/** Live JVM enum net.minecraft.world.entity.Pose; constants are host handles, not strings. */
export type Pose = JavaEnum<"net.minecraft.world.entity.Pose", "CROAKING" | "CROUCHING" | "DIGGING" | "DYING" | "EMERGING" | "FALL_FLYING" | "INHALING" | "LONG_JUMPING" | "ROARING" | "SHOOTING" | "SITTING" | "SLEEPING" | "SLIDING" | "SNIFFING" | "SPIN_ATTACK" | "STANDING" | "SWIMMING" | "USING_TONGUE"> & PoseMembers;
export interface PoseMembers {
  id(): number;
}
export interface PoseStatics {
  readonly CROAKING: Pose;
  readonly CROUCHING: Pose;
  readonly DIGGING: Pose;
  readonly DYING: Pose;
  readonly EMERGING: Pose;
  readonly FALL_FLYING: Pose;
  readonly INHALING: Pose;
  readonly LONG_JUMPING: Pose;
  readonly ROARING: Pose;
  readonly SHOOTING: Pose;
  readonly SITTING: Pose;
  readonly SLEEPING: Pose;
  readonly SLIDING: Pose;
  readonly SNIFFING: Pose;
  readonly SPIN_ATTACK: Pose;
  readonly STANDING: Pose;
  readonly SWIMMING: Pose;
  readonly USING_TONGUE: Pose;
  readonly BY_ID: JavaOpaque<"java.util.function.IntFunction", [Pose]>;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, Pose>;
  valueOf(arg0: string): Pose;
  values(): Array<Pose>;
}

/** JVM record net.minecraft.world.entity.PositionMoveRotation. */
export interface PositionMoveRotationMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  deltaMovement(): j_net_minecraft_world_phys.Vec3;
  equals(arg0: object): boolean;
  hashCode(): number;
  position(): j_net_minecraft_world_phys.Vec3;
  toString(): string;
  xRot(): number;
  yRot(): number;
}
export type PositionMoveRotation = PositionMoveRotationMembers & JavaOpaque<"java.lang.Record">;
export interface PositionMoveRotationStatics {
  new(arg0: j_net_minecraft_world_phys.Vec3, arg1: j_net_minecraft_world_phys.Vec3, arg2: number, arg3: number): PositionMoveRotation;
  readonly STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<j_net_minecraft_network.FriendlyByteBuf, PositionMoveRotation>;
  calculateAbsolute(arg0: PositionMoveRotation, arg1: PositionMoveRotation, arg2: JavaSet<Relative>): PositionMoveRotation;
  of(arg0: Entity): PositionMoveRotation;
  of(arg0: j_net_minecraft_world_level_portal.TeleportTransition): PositionMoveRotation;
}

/** Live JVM enum net.minecraft.world.entity.Relative; constants are host handles, not strings. */
export type Relative = JavaEnum<"net.minecraft.world.entity.Relative", "DELTA_X" | "DELTA_Y" | "DELTA_Z" | "ROTATE_DELTA" | "X" | "X_ROT" | "Y" | "Y_ROT" | "Z"> & RelativeMembers;
export interface RelativeMembers {
}
export interface RelativeStatics {
  readonly DELTA_X: Relative;
  readonly DELTA_Y: Relative;
  readonly DELTA_Z: Relative;
  readonly ROTATE_DELTA: Relative;
  readonly X: Relative;
  readonly X_ROT: Relative;
  readonly Y: Relative;
  readonly Y_ROT: Relative;
  readonly Z: Relative;
  readonly ALL: JavaSet<Relative>;
  readonly DELTA: JavaSet<Relative>;
  readonly ROTATION: JavaSet<Relative>;
  readonly SET_STREAM_CODEC: j_net_minecraft_network_codec.StreamCodec<JavaOpaque<"io.netty.buffer.ByteBuf">, JavaSet<Relative>>;
  pack(arg0: JavaSet<Relative>): number;
  union(...arg0: Array<JavaSet<Relative>>): JavaSet<Relative>;
  unpack(arg0: number): JavaSet<Relative>;
  valueOf(arg0: string): Relative;
  values(): Array<Relative>;
}

/** JVM interface net.minecraft.world.entity.ReputationEventHandler. */
export interface ReputationEventHandlerMembers {
  onReputationEventFrom(arg0: j_net_minecraft_world_entity_ai_village.ReputationEventType, arg1: Entity): void;
}
export type ReputationEventHandler = ReputationEventHandlerMembers;
export interface ReputationEventHandlerStatics {
}

/** JVM interface net.minecraft.world.entity.Shearable. */
export interface ShearableMembers {
  generateDefaultDrops(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_world_item.ItemStack): JavaList<j_net_minecraft_world_item.ItemStack>;
  level(): j_net_minecraft_world_level.Level;
  readyForShearing(): boolean;
  shear(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_sounds.SoundSource, arg2: j_net_minecraft_world_item.ItemStack): void;
  shear(arg0: j_net_minecraft_server_level.ServerLevel, arg1: j_net_minecraft_sounds.SoundSource, arg2: j_net_minecraft_world_item.ItemStack, arg3: JavaList<j_net_minecraft_world_item.ItemStack>): void;
}
export type Shearable = ShearableMembers;
export interface ShearableStatics {
}

/** JVM interface net.minecraft.world.entity.SlotAccess. */
export interface SlotAccessMembers {
  get(): j_net_minecraft_world_item.ItemStack;
  set(arg0: j_net_minecraft_world_item.ItemStack): boolean;
}
export type SlotAccess = SlotAccessMembers;
export interface SlotAccessStatics {
  readonly NULL: SlotAccess;
  forContainer(arg0: j_net_minecraft_world.Container, arg1: number): SlotAccess;
  forContainer(arg0: j_net_minecraft_world.Container, arg1: number, arg2: JavaPredicate<j_net_minecraft_world_item.ItemStack>): SlotAccess;
  forEquipmentSlot(arg0: LivingEntity, arg1: EquipmentSlot): SlotAccess;
  forEquipmentSlot(arg0: LivingEntity, arg1: EquipmentSlot, arg2: JavaPredicate<j_net_minecraft_world_item.ItemStack>): SlotAccess;
  of(arg0: JavaSupplier<j_net_minecraft_world_item.ItemStack>, arg1: JavaConsumer<j_net_minecraft_world_item.ItemStack>): SlotAccess;
}

/** JVM interface net.minecraft.world.entity.SpawnGroupData. */
export interface SpawnGroupDataMembers {
}
export type SpawnGroupData = SpawnGroupDataMembers;
export interface SpawnGroupDataStatics {
}

/** JVM class net.minecraft.world.entity.SpawnPlacements. */
export interface SpawnPlacementsMembers {
}
export type SpawnPlacements = SpawnPlacementsMembers;
export interface SpawnPlacementsStatics {
  new(): SpawnPlacements;
  checkSpawnRules<T /* extends Entity */>(arg0: EntityType<T>, arg1: j_net_minecraft_world_level.ServerLevelAccessor, arg2: EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
  getHeightmapType(arg0: EntityType<object> | null): j_net_minecraft_world_level_levelgen.Heightmap_Types | null;
  getPlacementType(arg0: EntityType<object>): SpawnPlacementType;
  isSpawnPositionOk(arg0: EntityType<object>, arg1: j_net_minecraft_world_level.LevelReader, arg2: j_net_minecraft_core.BlockPos): boolean;
}

/** JVM interface net.minecraft.world.entity.SpawnPlacements$SpawnPredicate. */
export interface SpawnPlacements_SpawnPredicateMembers<T /* extends Entity */ = unknown> {
  test(arg0: EntityType<T>, arg1: j_net_minecraft_world_level.ServerLevelAccessor, arg2: EntitySpawnReason, arg3: j_net_minecraft_core.BlockPos, arg4: j_net_minecraft_util.RandomSource): boolean;
}
export type SpawnPlacements_SpawnPredicate<T /* extends Entity */ = unknown> = SpawnPlacements_SpawnPredicateMembers<T>;
export interface SpawnPlacements_SpawnPredicateStatics {
}

/** JVM interface net.minecraft.world.entity.SpawnPlacementType. */
export interface SpawnPlacementTypeMembers {
  adjustSpawnPosition(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  isSpawnPositionOk(arg0: j_net_minecraft_world_level.LevelReader, arg1: j_net_minecraft_core.BlockPos, arg2: EntityType<object> | null): boolean | null;
}
export type SpawnPlacementType = SpawnPlacementTypeMembers;
export interface SpawnPlacementTypeStatics {
}

/** JVM interface net.minecraft.world.entity.SpawnPlacementTypes. */
export interface SpawnPlacementTypesMembers {
}
export type SpawnPlacementTypes = SpawnPlacementTypesMembers;
export interface SpawnPlacementTypesStatics {
  readonly IN_LAVA: SpawnPlacementType;
  readonly IN_WATER: SpawnPlacementType;
  readonly NO_RESTRICTIONS: SpawnPlacementType;
  readonly ON_GROUND: SpawnPlacementType;
}

/** JVM abstract net.minecraft.world.entity.TamableAnimal. */
export interface TamableAnimalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_animal.Animal, OwnableEntity];
  addAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueOutput): void;
  applyTamingSideEffects(): void;
  canAttack(arg0: LivingEntity): boolean;
  canBeLeashed(): boolean;
  canFlyToOwner(): boolean;
  considersEntityAsAlly(arg0: Entity): boolean;
  defineSynchedData(arg0: j_net_minecraft_network_syncher.SynchedEntityData_Builder): void;
  die(arg0: j_net_minecraft_world_damagesource.DamageSource): void;
  getOwnerReference(): EntityReference<LivingEntity> | null;
  getTeam(): j_net_minecraft_world_scores.PlayerTeam | null;
  handleEntityEvent(arg0: number): void;
  isInSittingPose(): boolean;
  isOrderedToSit(): boolean;
  isOwnedBy(arg0: LivingEntity): boolean;
  isTame(): boolean;
  readAdditionalSaveData(arg0: j_net_minecraft_world_level_storage.ValueInput): void;
  setInSittingPose(arg0: boolean): void;
  setInSittingPose(arg0: boolean, arg1: boolean): void;
  setOrderedToSit(arg0: boolean): void;
  setOwner(arg0: LivingEntity | null): void | null;
  setOwnerReference(arg0: EntityReference<LivingEntity> | null): void | null;
  setTame(arg0: boolean, arg1: boolean): void;
  shouldTryTeleportToOwner(): boolean;
  spawnTamingParticles(arg0: boolean): void;
  tame(arg0: j_net_minecraft_world_entity_player.Player): void;
  tryToTeleportToOwner(): void;
  unableToMoveToOwner(): boolean;
  wantsToAttack(arg0: LivingEntity, arg1: LivingEntity): boolean;
}
export type TamableAnimal = TamableAnimalMembers & j_net_minecraft_world_entity_animal.Animal & OwnableEntity;
export interface TamableAnimalStatics {
  new(arg0: EntityType<TamableAnimal>, arg1: j_net_minecraft_world_level.Level): TamableAnimal;
  readonly DATA_FLAGS_ID: j_net_minecraft_network_syncher.EntityDataAccessor<number>;
  readonly DATA_OWNERUUID_ID: j_net_minecraft_network_syncher.EntityDataAccessor<JavaOptional<EntityReference<LivingEntity>>>;
  readonly TELEPORT_WHEN_DISTANCE_IS_SQ: 144;
}

/** JVM class net.minecraft.world.entity.TamableAnimal$TamableAnimalPanicGoal. */
export interface TamableAnimal_TamableAnimalPanicGoalMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_world_entity_ai_goal.PanicGoal];
  tick(): void;
}
export type TamableAnimal_TamableAnimalPanicGoal = TamableAnimal_TamableAnimalPanicGoalMembers & j_net_minecraft_world_entity_ai_goal.PanicGoal;
export interface TamableAnimal_TamableAnimalPanicGoalStatics {
  new(arg0: TamableAnimal, arg1: number): TamableAnimal_TamableAnimalPanicGoal;
  new(arg0: TamableAnimal, arg1: number, arg2: j_net_minecraft_tags.TagKey<j_net_minecraft_world_damagesource.DamageType>): TamableAnimal_TamableAnimalPanicGoal;
}

/** JVM interface net.minecraft.world.entity.Targeting. */
export interface TargetingMembers {
  getTarget(): LivingEntity | null;
}
export type Targeting = TargetingMembers;
export interface TargetingStatics {
}

/** JVM interface net.minecraft.world.entity.TraceableEntity. */
export interface TraceableEntityMembers {
  getOwner(): Entity | null;
}
export type TraceableEntity = TraceableEntityMembers;
export interface TraceableEntityStatics {
}

/** JVM class net.minecraft.world.entity.WalkAnimationState. */
export interface WalkAnimationStateMembers {
  isMoving(): boolean;
  position(): number;
  position(arg0: number): number;
  setSpeed(arg0: number): void;
  speed(): number;
  speed(arg0: number): number;
  stop(): void;
  update(arg0: number, arg1: number, arg2: number): void;
}
export type WalkAnimationState = WalkAnimationStateMembers;
export interface WalkAnimationStateStatics {
  new(): WalkAnimationState;
}
