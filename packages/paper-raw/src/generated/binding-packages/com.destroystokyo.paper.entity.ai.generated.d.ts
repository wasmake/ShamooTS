// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_destroystokyo_paper_entity from './com.destroystokyo.paper.entity.generated.js';
import type * as j_io_papermc_paper_entity from './io.papermc.paper.entity.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_entity from './org.bukkit.entity.generated.js';

/** JVM interface com.destroystokyo.paper.entity.ai.Goal. */
export interface GoalMembers<T /* extends j_org_bukkit_entity.Mob */ = unknown> {
  getKey(): GoalKey<T>;
  getTypes(): JavaOpaque<"java.util.EnumSet", [GoalType]>;
  shouldActivate(): boolean;
  shouldStayActive(): boolean;
  start(): void;
  stop(): void;
  tick(): void;
}
export type Goal<T /* extends j_org_bukkit_entity.Mob */ = unknown> = GoalMembers<T>;
export interface GoalStatics {
}

/** JVM class com.destroystokyo.paper.entity.ai.GoalKey. */
export interface GoalKeyMembers<T /* extends j_org_bukkit_entity.Mob */ = unknown> {
  equals(arg0: object): boolean | null;
  getEntityClass(): JavaClass<T>;
  getNamespacedKey(): j_org_bukkit.NamespacedKey;
  hashCode(): number;
  toString(): string;
}
export type GoalKey<T /* extends j_org_bukkit_entity.Mob */ = unknown> = GoalKeyMembers<T>;
export interface GoalKeyStatics {
  of<A /* extends j_org_bukkit_entity.Mob */>(arg0: JavaClass<A>, arg1: j_org_bukkit.NamespacedKey): GoalKey<A>;
}

/** Live JVM enum com.destroystokyo.paper.entity.ai.GoalType; constants are host handles, not strings. */
export type GoalType = JavaEnum<"com.destroystokyo.paper.entity.ai.GoalType", "JUMP" | "LOOK" | "MOVE" | "TARGET" | "UNKNOWN_BEHAVIOR"> & GoalTypeMembers;
export interface GoalTypeMembers {
}
export interface GoalTypeStatics {
  readonly JUMP: GoalType;
  readonly LOOK: GoalType;
  readonly MOVE: GoalType;
  readonly TARGET: GoalType;
  readonly UNKNOWN_BEHAVIOR: GoalType;
  valueOf(arg0: string): GoalType;
  values(): Array<GoalType>;
}

/** JVM interface com.destroystokyo.paper.entity.ai.MobGoals. */
export interface MobGoalsMembers {
  addGoal<T /* extends j_org_bukkit_entity.Mob */>(arg0: T, arg1: number, arg2: Goal<T>): void;
  getAllGoals<T /* extends j_org_bukkit_entity.Mob */>(arg0: T): JavaCollection<Goal<T>>;
  getAllGoals<T /* extends j_org_bukkit_entity.Mob */>(arg0: T, arg1: GoalType): JavaCollection<Goal<T>>;
  getAllGoalsWithout<T /* extends j_org_bukkit_entity.Mob */>(arg0: T, arg1: GoalType): JavaCollection<Goal<T>>;
  getGoal<T /* extends j_org_bukkit_entity.Mob */>(arg0: T, arg1: GoalKey<T>): Goal<T> | null;
  getGoals<T /* extends j_org_bukkit_entity.Mob */>(arg0: T, arg1: GoalKey<T>): JavaCollection<Goal<T>>;
  getRunningGoals<T /* extends j_org_bukkit_entity.Mob */>(arg0: T): JavaCollection<Goal<T>>;
  getRunningGoals<T /* extends j_org_bukkit_entity.Mob */>(arg0: T, arg1: GoalType): JavaCollection<Goal<T>>;
  getRunningGoalsWithout<T /* extends j_org_bukkit_entity.Mob */>(arg0: T, arg1: GoalType): JavaCollection<Goal<T>>;
  hasGoal<T /* extends j_org_bukkit_entity.Mob */>(arg0: T, arg1: GoalKey<T>): boolean;
  removeAllGoals<T /* extends j_org_bukkit_entity.Mob */>(arg0: T): void;
  removeAllGoals<T /* extends j_org_bukkit_entity.Mob */>(arg0: T, arg1: GoalType): void;
  removeGoal<T /* extends j_org_bukkit_entity.Mob */>(arg0: T, arg1: Goal<T>): void;
  removeGoal<T /* extends j_org_bukkit_entity.Mob */>(arg0: T, arg1: GoalKey<T>): void;
}
export type MobGoals = MobGoalsMembers;
export interface MobGoalsStatics {
}

/** JVM interface com.destroystokyo.paper.entity.ai.VanillaGoal. */
export interface VanillaGoalMembers<T /* extends j_org_bukkit_entity.Mob */ = unknown> {
  readonly __javaSupertypes?: readonly [Goal<T>];
}
export type VanillaGoal<T /* extends j_org_bukkit_entity.Mob */ = unknown> = VanillaGoalMembers<T> & Goal<T>;
export interface VanillaGoalStatics {
  readonly AVOID_ENTITY: GoalKey<j_org_bukkit_entity.Creature>;
  readonly BEE_ATTACK: GoalKey<j_org_bukkit_entity.Bee>;
  readonly BEE_BECOME_ANGRY: GoalKey<j_org_bukkit_entity.Bee>;
  readonly BEE_ENTER_HIVE: GoalKey<j_org_bukkit_entity.Bee>;
  readonly BEE_GO_TO_HIVE: GoalKey<j_org_bukkit_entity.Bee>;
  readonly BEE_GO_TO_KNOWN_FLOWER: GoalKey<j_org_bukkit_entity.Bee>;
  readonly BEE_GROW_CROP: GoalKey<j_org_bukkit_entity.Bee>;
  readonly BEE_HURT_BY_OTHER: GoalKey<j_org_bukkit_entity.Bee>;
  readonly BEE_LOCATE_HIVE: GoalKey<j_org_bukkit_entity.Bee>;
  readonly BEE_POLLINATE: GoalKey<j_org_bukkit_entity.Bee>;
  readonly BEE_VALIDATE_FLOWER: GoalKey<j_org_bukkit_entity.Bee>;
  readonly BEE_VALIDATE_HIVE: GoalKey<j_org_bukkit_entity.Bee>;
  readonly BEE_WANDER: GoalKey<j_org_bukkit_entity.Bee>;
  readonly BLAZE_ATTACK: GoalKey<j_org_bukkit_entity.Blaze>;
  readonly BREAK_DOOR: GoalKey<j_org_bukkit_entity.Mob>;
  readonly BREATH_AIR: GoalKey<j_org_bukkit_entity.Creature>;
  readonly BREED: GoalKey<j_org_bukkit_entity.Animals>;
  readonly CAT_AVOID_ENTITY: GoalKey<j_org_bukkit_entity.Cat>;
  readonly CAT_LIE_ON_BED: GoalKey<j_org_bukkit_entity.Cat>;
  readonly CAT_RELAX_ON_OWNER: GoalKey<j_org_bukkit_entity.Cat>;
  readonly CAT_SIT_ON_BLOCK: GoalKey<j_org_bukkit_entity.Cat>;
  readonly CAT_TEMPT: GoalKey<j_org_bukkit_entity.Cat>;
  readonly CLIMB_ON_TOP_OF_POWDER_SNOW: GoalKey<j_org_bukkit_entity.Mob>;
  readonly CREEPER_SWELL: GoalKey<j_org_bukkit_entity.Creeper>;
  readonly DOLPHIN_JUMP: GoalKey<j_org_bukkit_entity.Dolphin>;
  readonly DOLPHIN_PLAY_WITH_ITEMS: GoalKey<j_org_bukkit_entity.Dolphin>;
  readonly DOLPHIN_SWIM_TO_TREASURE: GoalKey<j_org_bukkit_entity.Dolphin>;
  readonly DOLPHIN_SWIM_WITH_PLAYER: GoalKey<j_org_bukkit_entity.Dolphin>;
  readonly DROWNED_ATTACK: GoalKey<j_org_bukkit_entity.Drowned>;
  readonly DROWNED_GO_TO_BEACH: GoalKey<j_org_bukkit_entity.Drowned>;
  readonly DROWNED_GO_TO_WATER: GoalKey<j_org_bukkit_entity.Creature>;
  readonly DROWNED_SWIM_UP: GoalKey<j_org_bukkit_entity.Drowned>;
  readonly DROWNED_TRIDENT_ATTACK: GoalKey<j_com_destroystokyo_paper_entity.RangedEntity>;
  readonly EAT_BLOCK: GoalKey<j_org_bukkit_entity.Mob>;
  readonly ENDERMAN_FREEZE_WHEN_LOOKED_AT: GoalKey<j_org_bukkit_entity.Enderman>;
  readonly ENDERMAN_LEAVE_BLOCK: GoalKey<j_org_bukkit_entity.Enderman>;
  readonly ENDERMAN_LOOK_FOR_PLAYER: GoalKey<j_org_bukkit_entity.Enderman>;
  readonly ENDERMAN_TAKE_BLOCK: GoalKey<j_org_bukkit_entity.Enderman>;
  readonly EVOKER_ATTACK_SPELL: GoalKey<j_org_bukkit_entity.Evoker>;
  readonly EVOKER_CASTING_SPELL: GoalKey<j_org_bukkit_entity.Evoker>;
  readonly EVOKER_SUMMON_SPELL: GoalKey<j_org_bukkit_entity.Evoker>;
  readonly EVOKER_WOLOLO_SPELL: GoalKey<j_org_bukkit_entity.Evoker>;
  readonly FISH_SWIM: GoalKey<j_org_bukkit_entity.Fish>;
  readonly FLEE_SUN: GoalKey<j_org_bukkit_entity.Creature>;
  readonly FLOAT: GoalKey<j_org_bukkit_entity.Mob>;
  readonly FOLLOW_BOAT: GoalKey<j_org_bukkit_entity.Creature>;
  readonly FOLLOW_MOB: GoalKey<j_org_bukkit_entity.Mob>;
  readonly FOLLOW_OWNER: GoalKey<j_org_bukkit_entity.Tameable>;
  readonly FOLLOW_PARENT: GoalKey<j_org_bukkit_entity.Animals>;
  readonly FOX_BREED: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_DEFEND_TRUSTED: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_EAT_BERRIES: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_FACEPLANT: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_FLOAT: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_FOLLOW_PARENT: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_LOOK_AT_PLAYER: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_MELEE_ATTACK: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_PANIC: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_PERCH_AND_SEARCH: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_POUNCE: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_SEARCH_FOR_ITEMS: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_SEEK_SHELTER: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_SLEEP: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_STALK_PREY: GoalKey<j_org_bukkit_entity.Fox>;
  readonly FOX_STROLL_THROUGH_VILLAGE: GoalKey<j_org_bukkit_entity.Fox>;
  readonly GHAST_LOOK: GoalKey<j_org_bukkit_entity.Mob>;
  readonly GHAST_SHOOT_FIREBALL: GoalKey<j_org_bukkit_entity.Ghast>;
  readonly GOLEM_RANDOM_STROLL_IN_VILLAGE: GoalKey<j_org_bukkit_entity.Creature>;
  readonly GUARDIAN_ATTACK: GoalKey<j_org_bukkit_entity.Guardian>;
  readonly HAPPY_GHAST_FLOAT: GoalKey<j_org_bukkit_entity.HappyGhast>;
  readonly HORSE_RANDOM_STAND: GoalKey<j_org_bukkit_entity.AbstractHorse>;
  readonly HORSE_RUN_AROUND_LIKE_CRAZY: GoalKey<j_org_bukkit_entity.AbstractHorse>;
  readonly HURT_BY: GoalKey<j_org_bukkit_entity.Creature>;
  readonly ILLAGER_HOLD_GROUND_ATTACK: GoalKey<j_org_bukkit_entity.Illager>;
  readonly ILLUSIONER_BLINDNESS_SPELL: GoalKey<j_org_bukkit_entity.Illusioner>;
  readonly ILLUSIONER_MIRROR_SPELL: GoalKey<j_org_bukkit_entity.Illusioner>;
  readonly INTERACT: GoalKey<j_org_bukkit_entity.Mob>;
  readonly IRON_GOLEM_DEFEND_VILLAGE: GoalKey<j_org_bukkit_entity.IronGolem>;
  readonly IRON_GOLEM_OFFER_FLOWER: GoalKey<j_org_bukkit_entity.IronGolem>;
  readonly LEAP_AT: GoalKey<j_org_bukkit_entity.Mob>;
  readonly LLAMA_ATTACK_WOLF: GoalKey<j_org_bukkit_entity.Llama>;
  readonly LLAMA_FOLLOW_CARAVAN: GoalKey<j_org_bukkit_entity.Llama>;
  readonly LLAMA_HURT_BY: GoalKey<j_org_bukkit_entity.Llama>;
  readonly LOOK_AT_PLAYER: GoalKey<j_org_bukkit_entity.Mob>;
  readonly MELEE_ATTACK: GoalKey<j_org_bukkit_entity.Creature>;
  readonly MOVE_BACK_TO_VILLAGE: GoalKey<j_org_bukkit_entity.Creature>;
  readonly MOVE_THROUGH_VILLAGE: GoalKey<j_org_bukkit_entity.Creature>;
  readonly MOVE_TOWARDS: GoalKey<j_org_bukkit_entity.Creature>;
  readonly MOVE_TOWARDS_RESTRICTION: GoalKey<j_org_bukkit_entity.Creature>;
  readonly NEAREST_ATTACKABLE: GoalKey<j_org_bukkit_entity.Mob>;
  readonly NON_TAME_RANDOM: GoalKey<j_org_bukkit_entity.Tameable>;
  readonly OCELOT_ATTACK: GoalKey<j_org_bukkit_entity.Mob>;
  readonly OCELOT_AVOID_ENTITY: GoalKey<j_org_bukkit_entity.Ocelot>;
  readonly OCELOT_TEMPT: GoalKey<j_org_bukkit_entity.Ocelot>;
  readonly OPEN_DOOR: GoalKey<j_org_bukkit_entity.Mob>;
  readonly OWNER_HURT: GoalKey<j_org_bukkit_entity.Tameable>;
  readonly OWNER_HURT_BY: GoalKey<j_org_bukkit_entity.Tameable>;
  readonly PANDA_ATTACK: GoalKey<j_org_bukkit_entity.Panda>;
  readonly PANDA_AVOID: GoalKey<j_org_bukkit_entity.Panda>;
  readonly PANDA_BREED: GoalKey<j_org_bukkit_entity.Panda>;
  readonly PANDA_HURT_BY: GoalKey<j_org_bukkit_entity.Panda>;
  readonly PANDA_LIE_ON_BACK: GoalKey<j_org_bukkit_entity.Panda>;
  readonly PANDA_LOOK_AT_PLAYER: GoalKey<j_org_bukkit_entity.Panda>;
  readonly PANDA_PANIC: GoalKey<j_org_bukkit_entity.Panda>;
  readonly PANDA_ROLL: GoalKey<j_org_bukkit_entity.Panda>;
  readonly PANDA_SIT: GoalKey<j_org_bukkit_entity.Panda>;
  readonly PANDA_SNEEZE: GoalKey<j_org_bukkit_entity.Panda>;
  readonly PANIC: GoalKey<j_org_bukkit_entity.Creature>;
  readonly PARROT_LAND_ON_OWNERS_SHOULDER: GoalKey<j_org_bukkit_entity.Parrot>;
  readonly PARROT_WANDER: GoalKey<j_org_bukkit_entity.Creature>;
  readonly PHANTOM_ATTACK_PLAYER: GoalKey<j_org_bukkit_entity.Phantom>;
  readonly PHANTOM_ATTACK_STRATEGY: GoalKey<j_org_bukkit_entity.Phantom>;
  readonly PHANTOM_CIRCLE_AROUND_ANCHOR: GoalKey<j_org_bukkit_entity.Phantom>;
  readonly PHANTOM_SWEEP_ATTACK: GoalKey<j_org_bukkit_entity.Phantom>;
  readonly POLAR_BEAR_ATTACK_PLAYERS: GoalKey<j_org_bukkit_entity.PolarBear>;
  readonly POLAR_BEAR_HURT_BY: GoalKey<j_org_bukkit_entity.PolarBear>;
  readonly POLAR_BEAR_MELEE_ATTACK: GoalKey<j_org_bukkit_entity.PolarBear>;
  readonly PUFFERFISH_PUFF: GoalKey<j_org_bukkit_entity.PufferFish>;
  readonly RABBIT_AVOID_ENTITY: GoalKey<j_org_bukkit_entity.Rabbit>;
  readonly RABBIT_PANIC: GoalKey<j_org_bukkit_entity.Rabbit>;
  readonly RABBIT_RAID_GARDEN: GoalKey<j_org_bukkit_entity.Rabbit>;
  readonly RAIDER_CELEBRATION: GoalKey<j_org_bukkit_entity.Raider>;
  readonly RAIDER_LONG_DISTANCE_PATROL: GoalKey<j_org_bukkit_entity.Raider>;
  readonly RAIDER_MOVE_THROUGH_VILLAGE: GoalKey<j_org_bukkit_entity.Raider>;
  readonly RAIDER_NEAREST_ATTACKABLE_WITCH: GoalKey<j_org_bukkit_entity.Raider>;
  readonly RAIDER_NEAREST_HEALABLE_RAIDER: GoalKey<j_org_bukkit_entity.Raider>;
  readonly RAIDER_OBTAIN_RAID_LEADER_BANNER: GoalKey<j_org_bukkit_entity.Raider>;
  readonly RAIDER_OPEN_DOOR: GoalKey<j_org_bukkit_entity.Illager>;
  readonly RAIDER_PATHFIND_TO_RAID: GoalKey<j_org_bukkit_entity.Raider>;
  readonly RANDOM_FLOAT_AROUND: GoalKey<j_org_bukkit_entity.Mob>;
  readonly RANDOM_LOOK_AROUND: GoalKey<j_org_bukkit_entity.Mob>;
  readonly RANDOM_STROLL: GoalKey<j_org_bukkit_entity.Creature>;
  readonly RANDOM_SWIMMING: GoalKey<j_org_bukkit_entity.Creature>;
  readonly RANGED_ATTACK: GoalKey<j_com_destroystokyo_paper_entity.RangedEntity>;
  readonly RANGED_BOW_ATTACK: GoalKey<j_org_bukkit_entity.Monster>;
  readonly RANGED_CROSSBOW_ATTACK: GoalKey<j_org_bukkit_entity.Monster>;
  readonly REMOVE_BLOCK: GoalKey<j_org_bukkit_entity.Creature>;
  readonly RESET_UNIVERSAL_ANGER: GoalKey<j_org_bukkit_entity.Mob>;
  readonly RESTRICT_SUN: GoalKey<j_org_bukkit_entity.Creature>;
  readonly SCHOOLABLE_FISH_FOLLOW_FLOCK_LEADER: GoalKey<j_io_papermc_paper_entity.SchoolableFish>;
  readonly SHULKER_ATTACK: GoalKey<j_org_bukkit_entity.Shulker>;
  readonly SHULKER_DEFENSE_ATTACK: GoalKey<j_org_bukkit_entity.Shulker>;
  readonly SHULKER_NEAREST_ATTACK: GoalKey<j_org_bukkit_entity.Shulker>;
  readonly SHULKER_PEEK: GoalKey<j_org_bukkit_entity.Shulker>;
  readonly SILVERFISH_MERGE_WITH_STONE: GoalKey<j_org_bukkit_entity.Silverfish>;
  readonly SILVERFISH_WAKE_UP_FRIENDS: GoalKey<j_org_bukkit_entity.Silverfish>;
  readonly SIT_WHEN_ORDERED_TO: GoalKey<j_org_bukkit_entity.Tameable>;
  readonly SKELETON_HORSE_SKELETON_TRAP: GoalKey<j_org_bukkit_entity.SkeletonHorse>;
  readonly SKELETON_MELEE: GoalKey<j_org_bukkit_entity.AbstractSkeleton>;
  readonly SLIME_ATTACK: GoalKey<j_org_bukkit_entity.Slime>;
  readonly SLIME_FLOAT: GoalKey<j_org_bukkit_entity.Slime>;
  readonly SLIME_KEEP_ON_JUMPING: GoalKey<j_org_bukkit_entity.Slime>;
  readonly SLIME_RANDOM_DIRECTION: GoalKey<j_org_bukkit_entity.Slime>;
  readonly SPELLCASTER_CASTING_SPELL: GoalKey<j_org_bukkit_entity.Spellcaster>;
  readonly SPIDER: GoalKey<j_org_bukkit_entity.Spider>;
  readonly SPIDER_ATTACK: GoalKey<j_org_bukkit_entity.Spider>;
  readonly SQUID_FLEE: GoalKey<j_org_bukkit_entity.Squid>;
  readonly SQUID_RANDOM_MOVEMENT: GoalKey<j_org_bukkit_entity.Squid>;
  readonly STRIDER_GO_TO_LAVA: GoalKey<j_org_bukkit_entity.Strider>;
  readonly STROLL_THROUGH_VILLAGE: GoalKey<j_org_bukkit_entity.Creature>;
  readonly TAMABLE_ANIMAL_PANIC: GoalKey<j_org_bukkit_entity.Tameable>;
  readonly TEMPT: GoalKey<j_org_bukkit_entity.Creature>;
  readonly TEMPT_FOR_NON_PATHFINDERS: GoalKey<j_org_bukkit_entity.Mob>;
  readonly TRADER_LLAMA_DEFEND_WANDERING_TRADER: GoalKey<j_org_bukkit_entity.Llama>;
  readonly TRY_FIND_WATER: GoalKey<j_org_bukkit_entity.Creature>;
  readonly TURTLE_BREED: GoalKey<j_org_bukkit_entity.Turtle>;
  readonly TURTLE_GO_HOME: GoalKey<j_org_bukkit_entity.Turtle>;
  readonly TURTLE_GO_TO_WATER: GoalKey<j_org_bukkit_entity.Turtle>;
  readonly TURTLE_LAY_EGG: GoalKey<j_org_bukkit_entity.Turtle>;
  readonly TURTLE_PANIC: GoalKey<j_org_bukkit_entity.Turtle>;
  readonly TURTLE_RANDOM_STROLL: GoalKey<j_org_bukkit_entity.Turtle>;
  readonly TURTLE_TRAVEL: GoalKey<j_org_bukkit_entity.Turtle>;
  readonly USE_ITEM: GoalKey<j_org_bukkit_entity.Mob>;
  readonly VEX_CHARGE_ATTACK: GoalKey<j_org_bukkit_entity.Vex>;
  readonly VEX_COPY_OWNER: GoalKey<j_org_bukkit_entity.Vex>;
  readonly VEX_RANDOM_MOVE: GoalKey<j_org_bukkit_entity.Vex>;
  readonly VILLAGER_LOOK_AT_TRADING_PLAYER: GoalKey<j_org_bukkit_entity.AbstractVillager>;
  readonly VILLAGER_TRADE_WITH_PLAYER: GoalKey<j_org_bukkit_entity.AbstractVillager>;
  readonly VINDICATOR_BREAK_DOOR: GoalKey<j_org_bukkit_entity.Mob>;
  readonly VINDICATOR_JOHNNY_ATTACK: GoalKey<j_org_bukkit_entity.Vindicator>;
  readonly WANDERING_TRADER_WANDER_TO_POSITION: GoalKey<j_org_bukkit_entity.WanderingTrader>;
  readonly WATER_AVOIDING_RANDOM_FLYING: GoalKey<j_org_bukkit_entity.Creature>;
  readonly WATER_AVOIDING_RANDOM_STROLL: GoalKey<j_org_bukkit_entity.Creature>;
  readonly WITHER_DO_NOTHING: GoalKey<j_org_bukkit_entity.Wither>;
  readonly WOLF_AVOID_ENTITY: GoalKey<j_org_bukkit_entity.Wolf>;
  readonly WOLF_BEG: GoalKey<j_org_bukkit_entity.Wolf>;
  readonly ZOMBIE_ATTACK: GoalKey<j_org_bukkit_entity.Zombie>;
  readonly ZOMBIE_ATTACK_TURTLE_EGG: GoalKey<j_org_bukkit_entity.Zombie>;
}
