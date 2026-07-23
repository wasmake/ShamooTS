// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_data_worldgen from './net.minecraft.data.worldgen.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server from './net.minecraft.server.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_server_packs_repository from './net.minecraft.server.packs.repository.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_debugchart from './net.minecraft.util.debugchart.generated.js';
import type * as j_net_minecraft_world_damagesource from './net.minecraft.world.damagesource.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_item from './net.minecraft.world.entity.item.generated.js';
import type * as j_net_minecraft_world_entity_npc from './net.minecraft.world.entity.npc.generated.js';
import type * as j_net_minecraft_world_entity_player from './net.minecraft.world.entity.player.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_biome from './net.minecraft.world.level.biome.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_block_entity from './net.minecraft.world.level.block.entity.generated.js';
import type * as j_net_minecraft_world_level_block_state from './net.minecraft.world.level.block.state.generated.js';
import type * as j_net_minecraft_world_level_block_state_properties from './net.minecraft.world.level.block.state.properties.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_storage from './net.minecraft.world.level.storage.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';

/** JVM class net.minecraft.gametest.framework.BlockBasedTestInstance. */
export interface BlockBasedTestInstanceMembers {
  readonly __javaSupertypes?: readonly [GameTestInstance];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [BlockBasedTestInstance]>;
  run(arg0: GameTestHelper): void;
  typeDescription(): j_net_minecraft_network_chat.MutableComponent;
}
export type BlockBasedTestInstance = BlockBasedTestInstanceMembers & GameTestInstance;
export interface BlockBasedTestInstanceStatics {
  new(arg0: TestData<j_net_minecraft_core.Holder<TestEnvironmentDefinition>>): BlockBasedTestInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [BlockBasedTestInstance]>;
}

/** JVM class net.minecraft.gametest.framework.BuiltinTestFunctions. */
export interface BuiltinTestFunctionsMembers {
  readonly __javaSupertypes?: readonly [TestFunctionLoader];
  load(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<JavaConsumer<GameTestHelper>>, JavaConsumer<GameTestHelper>>): void;
}
export type BuiltinTestFunctions = BuiltinTestFunctionsMembers & TestFunctionLoader;
export interface BuiltinTestFunctionsStatics {
  new(): BuiltinTestFunctions;
  readonly ALWAYS_PASS: j_net_minecraft_resources.ResourceKey<JavaConsumer<GameTestHelper>>;
  readonly ALWAYS_PASS_INSTANCE: JavaConsumer<GameTestHelper>;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaConsumer<GameTestHelper>>): JavaConsumer<GameTestHelper>;
}

/** JVM class net.minecraft.gametest.framework.FailedTestTracker. */
export interface FailedTestTrackerMembers {
}
export type FailedTestTracker = FailedTestTrackerMembers;
export interface FailedTestTrackerStatics {
  new(): FailedTestTracker;
  forgetFailedTests(): void;
  getLastFailedTests(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder_Reference<GameTestInstance>]>;
  rememberFailedTest(arg0: j_net_minecraft_core.Holder_Reference<GameTestInstance>): void;
}

/** JVM class net.minecraft.gametest.framework.FunctionGameTestInstance. */
export interface FunctionGameTestInstanceMembers {
  readonly __javaSupertypes?: readonly [GameTestInstance];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [FunctionGameTestInstance]>;
  describe(): j_net_minecraft_network_chat.Component;
  run(arg0: GameTestHelper): void;
  typeDescription(): j_net_minecraft_network_chat.MutableComponent;
}
export type FunctionGameTestInstance = FunctionGameTestInstanceMembers & GameTestInstance;
export interface FunctionGameTestInstanceStatics {
  new(arg0: j_net_minecraft_resources.ResourceKey<JavaConsumer<GameTestHelper>>, arg1: TestData<j_net_minecraft_core.Holder<TestEnvironmentDefinition>>): FunctionGameTestInstance;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [FunctionGameTestInstance]>;
}

/** JVM class net.minecraft.gametest.framework.GameTestAssertException. */
export interface GameTestAssertExceptionMembers {
  readonly __javaSupertypes?: readonly [GameTestException];
  getDescription(): j_net_minecraft_network_chat.Component;
  getMessage(): string;
  readonly message: j_net_minecraft_network_chat.Component;
  readonly tick: number;
}
export type GameTestAssertException = GameTestAssertExceptionMembers & GameTestException;
export interface GameTestAssertExceptionStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: number): GameTestAssertException;
}

/** JVM class net.minecraft.gametest.framework.GameTestAssertPosException. */
export interface GameTestAssertPosExceptionMembers {
  readonly __javaSupertypes?: readonly [GameTestAssertException];
  getAbsolutePos(): j_net_minecraft_core.BlockPos | null;
  getDescription(): j_net_minecraft_network_chat.Component;
  getMessageToShowAtBlock(): string | null;
  getRelativePos(): j_net_minecraft_core.BlockPos | null;
}
export type GameTestAssertPosException = GameTestAssertPosExceptionMembers & GameTestAssertException;
export interface GameTestAssertPosExceptionStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.BlockPos, arg3: number): GameTestAssertPosException;
}

/** JVM record net.minecraft.gametest.framework.GameTestBatch. */
export interface GameTestBatchMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  environment(): j_net_minecraft_core.Holder<TestEnvironmentDefinition>;
  equals(arg0: object): boolean;
  gameTestInfos(): JavaCollection<GameTestInfo>;
  hashCode(): number;
  index(): number;
  toString(): string;
}
export type GameTestBatch = GameTestBatchMembers & JavaOpaque<"java.lang.Record">;
export interface GameTestBatchStatics {
  new(arg0: number, arg1: JavaCollection<GameTestInfo>, arg2: j_net_minecraft_core.Holder<TestEnvironmentDefinition>): GameTestBatch;
}

/** JVM class net.minecraft.gametest.framework.GameTestBatchFactory. */
export interface GameTestBatchFactoryMembers {
}
export type GameTestBatchFactory = GameTestBatchFactoryMembers;
export interface GameTestBatchFactoryStatics {
  new(): GameTestBatchFactory;
  readonly DIRECT: GameTestBatchFactory_TestDecorator;
  divideIntoBatches(arg0: JavaCollection<j_net_minecraft_core.Holder_Reference<GameTestInstance>>, arg1: GameTestBatchFactory_TestDecorator, arg2: j_net_minecraft_server_level.ServerLevel): JavaList<GameTestBatch>;
  fromGameTestInfo(): GameTestRunner_GameTestBatcher;
  fromGameTestInfo(arg0: number): GameTestRunner_GameTestBatcher;
  toGameTestBatch(arg0: JavaCollection<GameTestInfo>, arg1: j_net_minecraft_core.Holder<TestEnvironmentDefinition>, arg2: number): GameTestBatch;
}

/** JVM interface net.minecraft.gametest.framework.GameTestBatchFactory$TestDecorator. */
export interface GameTestBatchFactory_TestDecoratorMembers {
  decorate(arg0: j_net_minecraft_core.Holder_Reference<GameTestInstance>, arg1: j_net_minecraft_server_level.ServerLevel): JavaOpaque<"java.util.stream.Stream", [GameTestInfo]>;
}
export type GameTestBatchFactory_TestDecorator = GameTestBatchFactory_TestDecoratorMembers;
export interface GameTestBatchFactory_TestDecoratorStatics {
}

/** JVM interface net.minecraft.gametest.framework.GameTestBatchListener. */
export interface GameTestBatchListenerMembers {
  testBatchFinished(arg0: GameTestBatch): void;
  testBatchStarting(arg0: GameTestBatch): void;
}
export type GameTestBatchListener = GameTestBatchListenerMembers;
export interface GameTestBatchListenerStatics {
}

/** JVM interface net.minecraft.gametest.framework.GameTestEnvironments. */
export interface GameTestEnvironmentsMembers {
}
export type GameTestEnvironments = GameTestEnvironmentsMembers;
export interface GameTestEnvironmentsStatics {
  readonly DEFAULT: "default";
  readonly DEFAULT_KEY: j_net_minecraft_resources.ResourceKey<TestEnvironmentDefinition>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<TestEnvironmentDefinition>): void;
}

/** JVM abstract net.minecraft.gametest.framework.GameTestException. */
export interface GameTestExceptionMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.RuntimeException">];
  getDescription(): j_net_minecraft_network_chat.Component;
}
export type GameTestException = GameTestExceptionMembers & JavaOpaque<"java.lang.RuntimeException">;
export interface GameTestExceptionStatics {
  new(arg0: string): GameTestException;
}

/** JVM class net.minecraft.gametest.framework.GameTestHelper. */
export interface GameTestHelperMembers {
  absoluteAABB(arg0: j_net_minecraft_world_phys.AABB): j_net_minecraft_world_phys.AABB;
  absolutePos(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  absoluteVec(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  assertAtTickTimeContainerContains(arg0: bigint, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_world_item.Item): void;
  assertAtTickTimeContainerEmpty(arg0: bigint, arg1: j_net_minecraft_core.BlockPos): void;
  assertBlock(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_block.Block>, arg2: JavaFunction<j_net_minecraft_world_level_block.Block, j_net_minecraft_network_chat.Component>): void;
  assertBlockEntityData<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_core.BlockPos, arg1: JavaClass<T>, arg2: JavaPredicate<T>, arg3: JavaSupplier<j_net_minecraft_network_chat.Component>): void;
  assertBlockNotPresent(arg0: j_net_minecraft_world_level_block.Block, arg1: number, arg2: number, arg3: number): void;
  assertBlockNotPresent(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_core.BlockPos): void;
  assertBlockPresent(arg0: j_net_minecraft_world_level_block.Block, arg1: number, arg2: number, arg3: number): void;
  assertBlockPresent(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_core.BlockPos): void;
  assertBlockProperty<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state_properties.Property<T>, arg2: T): void;
  assertBlockProperty<T /* extends JavaOpaque<"java.lang.Comparable", [T]> */>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state_properties.Property<T>, arg2: JavaPredicate<T>, arg3: j_net_minecraft_network_chat.Component): void;
  assertBlockState(arg0: j_net_minecraft_core.BlockPos, arg1: JavaPredicate<j_net_minecraft_world_level_block_state.BlockState>, arg2: JavaFunction<j_net_minecraft_world_level_block_state.BlockState, j_net_minecraft_network_chat.Component>): void;
  assertBlockState(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  assertBlockTag(arg0: j_net_minecraft_tags.TagKey<j_net_minecraft_world_level_block.Block>, arg1: j_net_minecraft_core.BlockPos): void;
  assertContainerContains(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_item.Item): void;
  assertContainerContainsSingle(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_item.Item): void;
  assertContainerEmpty(arg0: j_net_minecraft_core.BlockPos): void;
  assertEntitiesPresent(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: number): void;
  assertEntitiesPresent(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: number): void;
  assertEntityData<E /* extends j_net_minecraft_world_entity.Entity */, T>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity.EntityType<E>, arg2: JavaFunction<E, T>, arg3: T | null): void | null;
  assertEntityData<E /* extends j_net_minecraft_world_entity.Entity */, T>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity.EntityType<E>, arg2: JavaPredicate<E>): void;
  assertEntityInstancePresent(arg0: j_net_minecraft_world_entity.Entity, arg1: number, arg2: number, arg3: number): void;
  assertEntityInstancePresent(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_core.BlockPos): void;
  assertEntityInventoryContains<E /* extends j_net_minecraft_world_entity_npc.InventoryCarrier */>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity.EntityType<E>, arg2: j_net_minecraft_world_item.Item): void;
  assertEntityIsHolding<E /* extends j_net_minecraft_world_entity.LivingEntity */>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity.EntityType<E>, arg2: j_net_minecraft_world_item.Item): void;
  assertEntityNotPresent(arg0: j_net_minecraft_world_entity.EntityType<object>): void;
  assertEntityNotPresent(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: number, arg2: number, arg3: number): void;
  assertEntityNotPresent(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_core.BlockPos): void;
  assertEntityNotPresent(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_world_phys.AABB): void;
  assertEntityNotTouching(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: number, arg2: number, arg3: number): void;
  assertEntityPosition(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_phys.AABB, arg2: j_net_minecraft_network_chat.Component): void;
  assertEntityPresent(arg0: j_net_minecraft_world_entity.EntityType<object>): void;
  assertEntityPresent(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: number, arg2: number, arg3: number): void;
  assertEntityPresent(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_core.BlockPos): void;
  assertEntityPresent(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  assertEntityPresent(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_world_phys.AABB): void;
  assertEntityProperty<E /* extends j_net_minecraft_world_entity.Entity */, T>(arg0: E, arg1: JavaFunction<E, T>, arg2: T, arg3: j_net_minecraft_network_chat.Component): void;
  assertEntityProperty<E /* extends j_net_minecraft_world_entity.Entity */>(arg0: E, arg1: JavaPredicate<E>, arg2: j_net_minecraft_network_chat.Component): void;
  assertEntityTouching(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: number, arg2: number, arg3: number): void;
  assertFalse(arg0: boolean, arg1: j_net_minecraft_network_chat.Component): void;
  assertItemEntityCountIs(arg0: j_net_minecraft_world_item.Item, arg1: j_net_minecraft_core.BlockPos, arg2: number, arg3: number): void;
  assertItemEntityNotPresent(arg0: j_net_minecraft_world_item.Item): void;
  assertItemEntityNotPresent(arg0: j_net_minecraft_world_item.Item, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  assertItemEntityPresent(arg0: j_net_minecraft_world_item.Item): void;
  assertItemEntityPresent(arg0: j_net_minecraft_world_item.Item, arg1: j_net_minecraft_core.BlockPos, arg2: number): void;
  assertLivingEntityHasMobEffect(arg0: j_net_minecraft_world_entity.LivingEntity, arg1: j_net_minecraft_core.Holder<j_net_minecraft_world_effect.MobEffect>, arg2: number): void;
  assertRedstoneSignal(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Direction, arg2: JavaOpaque<"java.util.function.IntPredicate">, arg3: JavaSupplier<j_net_minecraft_network_chat.Component>): void;
  assertSameBlockState(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.BlockPos): void;
  assertSameBlockStates(arg0: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg1: j_net_minecraft_core.BlockPos): void;
  assertTrue(arg0: boolean, arg1: j_net_minecraft_network_chat.Component): void;
  assertValueEqual<N>(arg0: N, arg1: N, arg2: j_net_minecraft_network_chat.Component): void;
  assertionException(arg0: string, ...arg1: Array<object>): GameTestAssertException;
  assertionException(arg0: j_net_minecraft_core.BlockPos, arg1: string, ...arg2: Array<object>): GameTestAssertPosException;
  assertionException(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_network_chat.Component): GameTestAssertPosException;
  assertionException(arg0: j_net_minecraft_network_chat.Component): GameTestAssertException;
  destroyBlock(arg0: j_net_minecraft_core.BlockPos): void;
  fail(arg0: j_net_minecraft_network_chat.Component): void;
  fail(arg0: j_net_minecraft_network_chat.Component, arg1: j_net_minecraft_core.BlockPos): void;
  fail(arg0: j_net_minecraft_network_chat.Component, arg1: j_net_minecraft_world_entity.Entity): void;
  failIf(arg0: JavaRunnable): void;
  failIfEver(arg0: JavaRunnable): void;
  findClosestEntity<E /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_entity.EntityType<E>, arg1: number, arg2: number, arg3: number, arg4: number): E;
  findEntities<E /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_entity.EntityType<E>, arg1: number, arg2: number, arg3: number, arg4: number): JavaList<E>;
  findEntities<E /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_entity.EntityType<E>, arg1: j_net_minecraft_world_phys.Vec3, arg2: number): JavaList<E>;
  findOneEntity<E /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_entity.EntityType<E>): E;
  forEveryBlockInStructure(arg0: JavaConsumer<j_net_minecraft_core.BlockPos>): void;
  getBlockEntity<T /* extends j_net_minecraft_world_level_block_entity.BlockEntity */>(arg0: j_net_minecraft_core.BlockPos, arg1: JavaClass<T>): T;
  getBlockState(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_world_level_block_state.BlockState;
  getBounds(): j_net_minecraft_world_phys.AABB;
  getEntities<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_entity.EntityType<T>): JavaList<T>;
  getEntities<T /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_entity.EntityType<T>, arg1: j_net_minecraft_core.BlockPos, arg2: number): JavaList<T>;
  getHeight(arg0: j_net_minecraft_world_level_levelgen.Heightmap_Types, arg1: number, arg2: number): number;
  getLevel(): j_net_minecraft_server_level.ServerLevel;
  getTestRotation(): j_net_minecraft_world_level_block.Rotation;
  getTick(): bigint;
  hurt(arg0: j_net_minecraft_world_entity.Entity, arg1: j_net_minecraft_world_damagesource.DamageSource, arg2: number): void;
  kill(arg0: j_net_minecraft_world_entity.Entity): void;
  killAllEntities(): void;
  killAllEntitiesOfClass(arg0: JavaClass<j_net_minecraft_world_entity.Entity>): void;
  makeAboutToDrown(arg0: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_entity.LivingEntity;
  makeMockPlayer(arg0: j_net_minecraft_world_level.GameType): j_net_minecraft_world_entity_player.Player;
  makeMockServerPlayerInLevel(): j_net_minecraft_server_level.ServerPlayer;
  moveTo(arg0: j_net_minecraft_world_entity.Mob, arg1: number, arg2: number, arg3: number): void;
  onEachTick(arg0: JavaRunnable): void;
  placeAt(arg0: j_net_minecraft_world_entity_player.Player, arg1: j_net_minecraft_world_item.ItemStack, arg2: j_net_minecraft_core.BlockPos, arg3: j_net_minecraft_core.Direction): void;
  pressButton(arg0: number, arg1: number, arg2: number): void;
  pressButton(arg0: j_net_minecraft_core.BlockPos): void;
  pullLever(arg0: number, arg1: number, arg2: number): void;
  pullLever(arg0: j_net_minecraft_core.BlockPos): void;
  pulseRedstone(arg0: j_net_minecraft_core.BlockPos, arg1: bigint): void;
  randomTick(arg0: j_net_minecraft_core.BlockPos): void;
  relativeAABB(arg0: j_net_minecraft_world_phys.AABB): j_net_minecraft_world_phys.AABB;
  relativePos(arg0: j_net_minecraft_core.BlockPos): j_net_minecraft_core.BlockPos;
  relativeVec(arg0: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_phys.Vec3;
  runAfterDelay(arg0: bigint, arg1: JavaRunnable): void;
  runAtTickTime(arg0: bigint, arg1: JavaRunnable): void;
  setBiome(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_world_level_biome.Biome>): void;
  setBlock(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_level_block.Block): void;
  setBlock(arg0: number, arg1: number, arg2: number, arg3: j_net_minecraft_world_level_block_state.BlockState): void;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block.Block): void;
  setBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_level_block_state.BlockState): void;
  setDayTime(arg0: number): void;
  setNight(): void;
  spawn<E /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_entity.EntityType<E>, arg1: number, arg2: number, arg3: number): E;
  spawn<E /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_entity.EntityType<E>, arg1: number, arg2: number, arg3: number): E;
  spawn<E /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_entity.EntityType<E>, arg1: j_net_minecraft_core.BlockPos): E;
  spawn<E /* extends j_net_minecraft_world_entity.Entity */>(arg0: j_net_minecraft_world_entity.EntityType<E>, arg1: j_net_minecraft_world_phys.Vec3): E;
  spawnItem(arg0: j_net_minecraft_world_item.Item, arg1: number, arg2: number, arg3: number): j_net_minecraft_world_entity_item.ItemEntity;
  spawnItem(arg0: j_net_minecraft_world_item.Item, arg1: j_net_minecraft_core.BlockPos): j_net_minecraft_world_entity_item.ItemEntity;
  spawnItem(arg0: j_net_minecraft_world_item.Item, arg1: j_net_minecraft_world_phys.Vec3): j_net_minecraft_world_entity_item.ItemEntity;
  spawnWithNoFreeWill<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: j_net_minecraft_world_entity.EntityType<E>, arg1: number, arg2: number, arg3: number): E;
  spawnWithNoFreeWill<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: j_net_minecraft_world_entity.EntityType<E>, arg1: number, arg2: number, arg3: number): E;
  spawnWithNoFreeWill<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: j_net_minecraft_world_entity.EntityType<E>, arg1: j_net_minecraft_core.BlockPos): E;
  spawnWithNoFreeWill<E /* extends j_net_minecraft_world_entity.Mob */>(arg0: j_net_minecraft_world_entity.EntityType<E>, arg1: j_net_minecraft_world_phys.Vec3): E;
  startSequence(): GameTestSequence;
  succeed(): void;
  succeedIf(arg0: JavaRunnable): void;
  succeedOnTickWhen(arg0: number, arg1: JavaRunnable): void;
  succeedWhen(arg0: JavaRunnable): void;
  succeedWhenBlockPresent(arg0: j_net_minecraft_world_level_block.Block, arg1: number, arg2: number, arg3: number): void;
  succeedWhenBlockPresent(arg0: j_net_minecraft_world_level_block.Block, arg1: j_net_minecraft_core.BlockPos): void;
  succeedWhenEntityData<E /* extends j_net_minecraft_world_entity.Entity */, T>(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity.EntityType<E>, arg2: JavaFunction<E, T>, arg3: T): void;
  succeedWhenEntityNotPresent(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: number, arg2: number, arg3: number): void;
  succeedWhenEntityNotPresent(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_core.BlockPos): void;
  succeedWhenEntityPresent(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: number, arg2: number, arg3: number): void;
  succeedWhenEntityPresent(arg0: j_net_minecraft_world_entity.EntityType<object>, arg1: j_net_minecraft_core.BlockPos): void;
  tickBlock(arg0: j_net_minecraft_core.BlockPos): void;
  tickPrecipitation(): void;
  tickPrecipitation(arg0: j_net_minecraft_core.BlockPos): void;
  useBlock(arg0: j_net_minecraft_core.BlockPos): void;
  useBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity_player.Player): void;
  useBlock(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity_player.Player, arg2: j_net_minecraft_world_phys.BlockHitResult): void;
  walkTo(arg0: j_net_minecraft_world_entity.Mob, arg1: j_net_minecraft_core.BlockPos, arg2: number): GameTestSequence;
  withLowHealth(arg0: j_net_minecraft_world_entity.LivingEntity): j_net_minecraft_world_entity.LivingEntity;
}
export type GameTestHelper = GameTestHelperMembers;
export interface GameTestHelperStatics {
  new(arg0: GameTestInfo): GameTestHelper;
}

/** JVM class net.minecraft.gametest.framework.GameTestInfo. */
export interface GameTestInfoMembers {
  addListener(arg0: GameTestListener): void;
  copyReset(): GameTestInfo;
  fail(arg0: GameTestException): void;
  fail(arg0: j_net_minecraft_network_chat.Component): void;
  getError(): GameTestException | null;
  getLevel(): j_net_minecraft_server_level.ServerLevel;
  getListeners(): JavaOpaque<"java.util.stream.Stream", [GameTestListener]>;
  getRotation(): j_net_minecraft_world_level_block.Rotation;
  getRunTime(): bigint;
  getStructure(): j_net_minecraft_resources.ResourceLocation;
  getStructureBounds(): j_net_minecraft_world_phys.AABB;
  getTest(): GameTestInstance;
  getTestBlockPos(): j_net_minecraft_core.BlockPos | null;
  getTestHolder(): j_net_minecraft_core.Holder_Reference<GameTestInstance>;
  getTestInstanceBlockEntity(): j_net_minecraft_world_level_block_entity.TestInstanceBlockEntity;
  getTestOrigin(): j_net_minecraft_core.BlockPos;
  getTimeoutTicks(): number;
  hasFailed(): boolean;
  hasStarted(): boolean;
  hasSucceeded(): boolean;
  id(): j_net_minecraft_resources.ResourceLocation;
  isDone(): boolean;
  isFlaky(): boolean;
  isOptional(): boolean;
  isRequired(): boolean;
  maxAttempts(): number;
  placeStructure(): void;
  prepareTestStructure(): GameTestInfo | null;
  requiredSuccesses(): number;
  retryOptions(): RetryOptions;
  setRunAtTickTime(arg0: bigint, arg1: JavaRunnable): void;
  setTestBlockPos(arg0: j_net_minecraft_core.BlockPos | null): void | null;
  startExecution(arg0: number): GameTestInfo;
  succeed(): void;
  tick(arg0: GameTestRunner): void;
  toString(): string;
}
export type GameTestInfo = GameTestInfoMembers;
export interface GameTestInfoStatics {
  new(arg0: j_net_minecraft_core.Holder_Reference<GameTestInstance>, arg1: j_net_minecraft_world_level_block.Rotation, arg2: j_net_minecraft_server_level.ServerLevel, arg3: RetryOptions): GameTestInfo;
}

/** JVM abstract net.minecraft.gametest.framework.GameTestInstance. */
export interface GameTestInstanceMembers {
  batch(): j_net_minecraft_core.Holder<TestEnvironmentDefinition>;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [GameTestInstance]>;
  describe(): j_net_minecraft_network_chat.Component;
  describeInfo(): j_net_minecraft_network_chat.Component;
  describeType(): j_net_minecraft_network_chat.MutableComponent;
  descriptionRow(arg0: string, arg1: string): j_net_minecraft_network_chat.MutableComponent;
  descriptionRow(arg0: string, arg1: j_net_minecraft_network_chat.MutableComponent): j_net_minecraft_network_chat.MutableComponent;
  info(): TestData<j_net_minecraft_core.Holder<TestEnvironmentDefinition>>;
  manualOnly(): boolean;
  maxAttempts(): number;
  maxTicks(): number;
  required(): boolean;
  requiredSuccesses(): number;
  rotation(): j_net_minecraft_world_level_block.Rotation;
  run(arg0: GameTestHelper): void;
  setupTicks(): number;
  skyAccess(): boolean;
  structure(): j_net_minecraft_resources.ResourceLocation;
  typeDescription(): j_net_minecraft_network_chat.MutableComponent;
}
export type GameTestInstance = GameTestInstanceMembers;
export interface GameTestInstanceStatics {
  new(arg0: TestData<j_net_minecraft_core.Holder<TestEnvironmentDefinition>>): GameTestInstance;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [GameTestInstance]>;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [GameTestInstance]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [GameTestInstance]>;
}

/** JVM interface net.minecraft.gametest.framework.GameTestInstances. */
export interface GameTestInstancesMembers {
}
export type GameTestInstances = GameTestInstancesMembers;
export interface GameTestInstancesStatics {
  readonly ALWAYS_PASS: j_net_minecraft_resources.ResourceKey<GameTestInstance>;
  bootstrap(arg0: j_net_minecraft_data_worldgen.BootstrapContext<GameTestInstance>): void;
}

/** JVM interface net.minecraft.gametest.framework.GameTestListener. */
export interface GameTestListenerMembers {
  testAddedForRerun(arg0: GameTestInfo, arg1: GameTestInfo, arg2: GameTestRunner): void;
  testFailed(arg0: GameTestInfo, arg1: GameTestRunner): void;
  testPassed(arg0: GameTestInfo, arg1: GameTestRunner): void;
  testStructureLoaded(arg0: GameTestInfo): void;
}
export type GameTestListener = GameTestListenerMembers;
export interface GameTestListenerStatics {
}

/** JVM class net.minecraft.gametest.framework.GameTestMainUtil. */
export interface GameTestMainUtilMembers {
}
export type GameTestMainUtil = GameTestMainUtilMembers;
export interface GameTestMainUtilStatics {
  new(): GameTestMainUtil;
  /** @throws java.lang.Exception */
  runGameTestServer(arg0: Array<string>, arg1: JavaConsumer<string>): void;
}

/** JVM class net.minecraft.gametest.framework.GameTestRunner. */
export interface GameTestRunnerMembers {
  addListener(arg0: GameTestBatchListener): void;
  getTestInfos(): JavaList<GameTestInfo>;
  rerunTest(arg0: GameTestInfo): void;
  start(): void;
  stop(): void;
}
export type GameTestRunner = GameTestRunnerMembers;
export interface GameTestRunnerStatics {
  new(arg0: GameTestRunner_GameTestBatcher, arg1: JavaCollection<GameTestBatch>, arg2: j_net_minecraft_server_level.ServerLevel, arg3: GameTestTicker, arg4: GameTestRunner_StructureSpawner, arg5: GameTestRunner_StructureSpawner, arg6: boolean): GameTestRunner;
  readonly DEFAULT_TESTS_PER_ROW: 8;
  clearMarkers(arg0: j_net_minecraft_server_level.ServerLevel): void;
}

/** JVM class net.minecraft.gametest.framework.GameTestRunner$Builder. */
export interface GameTestRunner_BuilderMembers {
  batcher(arg0: GameTestRunner_GameTestBatcher): GameTestRunner_Builder;
  build(): GameTestRunner;
  existingStructureSpawner(arg0: StructureGridSpawner): GameTestRunner_Builder;
  haltOnError(arg0: boolean): GameTestRunner_Builder;
  newStructureSpawner(arg0: GameTestRunner_StructureSpawner): GameTestRunner_Builder;
}
export type GameTestRunner_Builder = GameTestRunner_BuilderMembers;
export interface GameTestRunner_BuilderStatics {
  fromBatches(arg0: JavaCollection<GameTestBatch>, arg1: j_net_minecraft_server_level.ServerLevel): GameTestRunner_Builder;
  fromInfo(arg0: JavaCollection<GameTestInfo>, arg1: j_net_minecraft_server_level.ServerLevel): GameTestRunner_Builder;
}

/** JVM interface net.minecraft.gametest.framework.GameTestRunner$GameTestBatcher. */
export interface GameTestRunner_GameTestBatcherMembers {
  batch(arg0: JavaCollection<GameTestInfo>): JavaCollection<GameTestBatch>;
}
export type GameTestRunner_GameTestBatcher = GameTestRunner_GameTestBatcherMembers;
export interface GameTestRunner_GameTestBatcherStatics {
}

/** JVM interface net.minecraft.gametest.framework.GameTestRunner$StructureSpawner. */
export interface GameTestRunner_StructureSpawnerMembers {
  onBatchStart(arg0: j_net_minecraft_server_level.ServerLevel): void;
  spawnStructure(arg0: GameTestInfo): JavaOptional<GameTestInfo>;
}
export type GameTestRunner_StructureSpawner = GameTestRunner_StructureSpawnerMembers;
export interface GameTestRunner_StructureSpawnerStatics {
  readonly IN_PLACE: GameTestRunner_StructureSpawner;
  readonly NOT_SET: GameTestRunner_StructureSpawner;
}

/** JVM class net.minecraft.gametest.framework.GameTestSequence. */
export interface GameTestSequenceMembers {
  thenExecute(arg0: JavaRunnable): GameTestSequence;
  thenExecuteAfter(arg0: number, arg1: JavaRunnable): GameTestSequence;
  thenExecuteFor(arg0: number, arg1: JavaRunnable): GameTestSequence;
  thenFail(arg0: JavaSupplier<GameTestException>): void;
  thenIdle(arg0: number): GameTestSequence;
  thenSucceed(): void;
  thenTrigger(): GameTestSequence_Condition;
  thenWaitUntil(arg0: bigint, arg1: JavaRunnable): GameTestSequence;
  thenWaitUntil(arg0: JavaRunnable): GameTestSequence;
  tickAndContinue(arg0: number): void;
  tickAndFailIfNotComplete(arg0: number): void;
}
export type GameTestSequence = GameTestSequenceMembers;
export interface GameTestSequenceStatics {
}

/** JVM class net.minecraft.gametest.framework.GameTestSequence$Condition. */
export interface GameTestSequence_ConditionMembers {
  assertTriggeredThisTick(): void;
}
export type GameTestSequence_Condition = GameTestSequence_ConditionMembers;
export interface GameTestSequence_ConditionStatics {
  new(arg0: GameTestSequence): GameTestSequence_Condition;
}

/** JVM class net.minecraft.gametest.framework.GameTestServer. */
export interface GameTestServerMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_server.MinecraftServer];
  fillServerSystemReport(arg0: j_net_minecraft.SystemReport): j_net_minecraft.SystemReport;
  getBukkitSender(arg0: j_net_minecraft_commands.CommandSourceStack): JavaOpaque<"org.bukkit.command.CommandSender">;
  getFunctionCompilationLevel(): number;
  getOperatorUserPermissionLevel(): number;
  getRateLimitPacketsPerSecond(): number;
  getTickTimeLogger(): j_net_minecraft_util_debugchart.SampleLogger;
  initServer(): boolean;
  isCommandBlockEnabled(): boolean;
  isDedicatedServer(): boolean;
  isEpollEnabled(): boolean;
  isHardcore(): boolean;
  isPublished(): boolean;
  isSingleplayerOwner(arg0: JavaOpaque<"com.mojang.authlib.GameProfile">): boolean;
  isTickTimeLoggingEnabled(): boolean;
  onServerCrash(arg0: j_net_minecraft.CrashReport): void;
  onServerExit(): void;
  shouldInformAdmins(): boolean;
  shouldRconBroadcast(): boolean;
  tickServer(arg0: JavaOpaque<"java.util.function.BooleanSupplier">): void;
  waitUntilNextTick(): void;
}
export type GameTestServer = GameTestServerMembers & j_net_minecraft_server.MinecraftServer;
export interface GameTestServerStatics {
  create(arg0: JavaOpaque<"java.lang.Thread">, arg1: j_net_minecraft_world_level_storage.LevelStorageSource_LevelStorageAccess, arg2: j_net_minecraft_server_packs_repository.PackRepository, arg3: JavaOptional<string>, arg4: boolean): GameTestServer;
  getTestsForSelection(arg0: j_net_minecraft_core.RegistryAccess, arg1: string): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder_Reference<GameTestInstance>]>;
}

/** JVM class net.minecraft.gametest.framework.GameTestTicker. */
export interface GameTestTickerMembers {
  add(arg0: GameTestInfo): void;
  clear(): void;
  setRunner(arg0: GameTestRunner): void;
  startTicking(): void;
  tick(): void;
}
export type GameTestTicker = GameTestTickerMembers;
export interface GameTestTickerStatics {
  readonly SINGLETON: GameTestTicker;
}

/** JVM class net.minecraft.gametest.framework.GameTestTimeoutException. */
export interface GameTestTimeoutExceptionMembers {
  readonly __javaSupertypes?: readonly [GameTestException];
  getDescription(): j_net_minecraft_network_chat.Component;
  readonly message: j_net_minecraft_network_chat.Component;
}
export type GameTestTimeoutException = GameTestTimeoutExceptionMembers & GameTestException;
export interface GameTestTimeoutExceptionStatics {
  new(arg0: j_net_minecraft_network_chat.Component): GameTestTimeoutException;
}

/** JVM record net.minecraft.gametest.framework.GeneratedTest. */
export interface GeneratedTestMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  function(): JavaConsumer<GameTestHelper>;
  functionKey(): j_net_minecraft_resources.ResourceKey<JavaConsumer<GameTestHelper>>;
  hashCode(): number;
  tests(): JavaMap<j_net_minecraft_resources.ResourceLocation, TestData<j_net_minecraft_resources.ResourceKey<TestEnvironmentDefinition>>>;
  toString(): string;
}
export type GeneratedTest = GeneratedTestMembers & JavaOpaque<"java.lang.Record">;
export interface GeneratedTestStatics {
  new(arg0: JavaMap<j_net_minecraft_resources.ResourceLocation, TestData<j_net_minecraft_resources.ResourceKey<TestEnvironmentDefinition>>>, arg1: j_net_minecraft_resources.ResourceKey<JavaConsumer<GameTestHelper>>, arg2: JavaConsumer<GameTestHelper>): GeneratedTest;
  new(arg0: JavaMap<j_net_minecraft_resources.ResourceLocation, TestData<j_net_minecraft_resources.ResourceKey<TestEnvironmentDefinition>>>, arg1: j_net_minecraft_resources.ResourceLocation, arg2: JavaConsumer<GameTestHelper>): GeneratedTest;
  new(arg0: j_net_minecraft_resources.ResourceLocation, arg1: TestData<j_net_minecraft_resources.ResourceKey<TestEnvironmentDefinition>>, arg2: JavaConsumer<GameTestHelper>): GeneratedTest;
}

/** JVM class net.minecraft.gametest.framework.GlobalTestReporter. */
export interface GlobalTestReporterMembers {
}
export type GlobalTestReporter = GlobalTestReporterMembers;
export interface GlobalTestReporterStatics {
  new(): GlobalTestReporter;
  finish(): void;
  onTestFailed(arg0: GameTestInfo): void;
  onTestSuccess(arg0: GameTestInfo): void;
  replaceWith(arg0: TestReporter): void;
}

/** JVM class net.minecraft.gametest.framework.JUnitLikeTestReporter. */
export interface JUnitLikeTestReporterMembers {
  readonly __javaSupertypes?: readonly [TestReporter];
  finish(): void;
  onTestFailed(arg0: GameTestInfo): void;
  onTestSuccess(arg0: GameTestInfo): void;
  /** @throws javax.xml.transform.TransformerException */
  save(arg0: JavaOpaque<"java.io.File">): void;
}
export type JUnitLikeTestReporter = JUnitLikeTestReporterMembers & TestReporter;
export interface JUnitLikeTestReporterStatics {
  /** @throws javax.xml.parsers.ParserConfigurationException */
  new(arg0: JavaOpaque<"java.io.File">): JUnitLikeTestReporter;
}

/** JVM class net.minecraft.gametest.framework.LogTestReporter. */
export interface LogTestReporterMembers {
  readonly __javaSupertypes?: readonly [TestReporter];
  onTestFailed(arg0: GameTestInfo): void;
  onTestSuccess(arg0: GameTestInfo): void;
}
export type LogTestReporter = LogTestReporterMembers & TestReporter;
export interface LogTestReporterStatics {
  new(): LogTestReporter;
}

/** JVM class net.minecraft.gametest.framework.MultipleTestTracker. */
export interface MultipleTestTrackerMembers {
  addFailureListener(arg0: JavaConsumer<GameTestInfo>): void;
  addListener(arg0: GameTestListener): void;
  addTestToTrack(arg0: GameTestInfo): void;
  getDoneCount(): number;
  getFailedOptional(): JavaCollection<GameTestInfo>;
  getFailedOptionalCount(): number;
  getFailedRequired(): JavaCollection<GameTestInfo>;
  getFailedRequiredCount(): number;
  getProgressBar(): string;
  getTotalCount(): number;
  hasFailedOptional(): boolean;
  hasFailedRequired(): boolean;
  isDone(): boolean;
  remove(arg0: GameTestInfo): void;
  toString(): string;
}
export type MultipleTestTracker = MultipleTestTrackerMembers;
export interface MultipleTestTrackerStatics {
  new(): MultipleTestTracker;
  new(arg0: JavaCollection<GameTestInfo>): MultipleTestTracker;
}

/** JVM record net.minecraft.gametest.framework.RetryOptions. */
export interface RetryOptionsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  haltOnFailure(): boolean;
  hasRetries(): boolean;
  hasTriesLeft(arg0: number, arg1: number): boolean;
  hashCode(): number;
  numberOfTries(): number;
  toString(): string;
  unlimitedTries(): boolean;
}
export type RetryOptions = RetryOptionsMembers & JavaOpaque<"java.lang.Record">;
export interface RetryOptionsStatics {
  new(arg0: number, arg1: boolean): RetryOptions;
  noRetries(): RetryOptions;
}

/** JVM class net.minecraft.gametest.framework.StructureGridSpawner. */
export interface StructureGridSpawnerMembers {
  readonly __javaSupertypes?: readonly [GameTestRunner_StructureSpawner];
  onBatchStart(arg0: j_net_minecraft_server_level.ServerLevel): void;
  spawnStructure(arg0: GameTestInfo): JavaOptional<GameTestInfo>;
}
export type StructureGridSpawner = StructureGridSpawnerMembers & GameTestRunner_StructureSpawner;
export interface StructureGridSpawnerStatics {
  new(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: boolean): StructureGridSpawner;
}

/** JVM class net.minecraft.gametest.framework.StructureUtils. */
export interface StructureUtilsMembers {
}
export type StructureUtils = StructureUtilsMembers;
export interface StructureUtilsStatics {
  new(): StructureUtils;
  readonly DEFAULT_TEST_STRUCTURES_DIR: "Minecraft.Server/src/test/convertables/data";
  readonly DEFAULT_Y_SEARCH_RADIUS: 10;
  clearSpaceForStructure(arg0: j_net_minecraft_world_level_levelgen_structure.BoundingBox, arg1: j_net_minecraft_server_level.ServerLevel): void;
  createNewEmptyTest(arg0: j_net_minecraft_resources.ResourceLocation, arg1: j_net_minecraft_core.BlockPos, arg2: j_net_minecraft_core.Vec3i, arg3: j_net_minecraft_world_level_block.Rotation, arg4: j_net_minecraft_server_level.ServerLevel): j_net_minecraft_world_level_block_entity.TestInstanceBlockEntity;
  findNearestTest(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: j_net_minecraft_server_level.ServerLevel): JavaOptional<j_net_minecraft_core.BlockPos>;
  findTestBlocks(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: j_net_minecraft_server_level.ServerLevel): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  findTestContainingPos(arg0: j_net_minecraft_core.BlockPos, arg1: number, arg2: j_net_minecraft_server_level.ServerLevel): JavaOptional<j_net_minecraft_core.BlockPos>;
  getRotationForRotationSteps(arg0: number): j_net_minecraft_world_level_block.Rotation;
  getRotationStepsForRotation(arg0: j_net_minecraft_world_level_block.Rotation): number;
  getStructureBoundingBox(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Vec3i, arg2: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_world_level_levelgen_structure.BoundingBox;
  getTransformedFarCorner(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_core.Vec3i, arg2: j_net_minecraft_world_level_block.Rotation): j_net_minecraft_core.BlockPos;
  lookedAtTestPos(arg0: j_net_minecraft_core.BlockPos, arg1: j_net_minecraft_world_entity.Entity, arg2: j_net_minecraft_server_level.ServerLevel): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  readonly testStructuresDir: JavaOpaque<"java.nio.file.Path">;
}

/** JVM class net.minecraft.gametest.framework.TestCommand. */
export interface TestCommandMembers {
}
export type TestCommand = TestCommandMembers;
export interface TestCommandStatics {
  new(): TestCommand;
  readonly TEST_FULL_SEARCH_RADIUS: 200;
  readonly TEST_NEARBY_SEARCH_RADIUS: 15;
  readonly VERIFY_TEST_BATCH_SIZE: 100;
  readonly VERIFY_TEST_GRID_AXIS_SIZE: 10;
  register(arg0: JavaOpaque<"com.mojang.brigadier.CommandDispatcher", [j_net_minecraft_commands.CommandSourceStack]>, arg1: j_net_minecraft_commands.CommandBuildContext): void;
  suggestTestFunction(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  trackAndStartRunner(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: GameTestRunner): number;
}

/** JVM record net.minecraft.gametest.framework.TestCommand$TestSummaryDisplayer. */
export interface TestCommand_TestSummaryDisplayerMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, GameTestListener];
  equals(arg0: object): boolean;
  hashCode(): number;
  source(): j_net_minecraft_commands.CommandSourceStack;
  testAddedForRerun(arg0: GameTestInfo, arg1: GameTestInfo, arg2: GameTestRunner): void;
  testFailed(arg0: GameTestInfo, arg1: GameTestRunner): void;
  testPassed(arg0: GameTestInfo, arg1: GameTestRunner): void;
  testStructureLoaded(arg0: GameTestInfo): void;
  toString(): string;
  tracker(): MultipleTestTracker;
}
export type TestCommand_TestSummaryDisplayer = TestCommand_TestSummaryDisplayerMembers & JavaOpaque<"java.lang.Record"> & GameTestListener;
export interface TestCommand_TestSummaryDisplayerStatics {
  new(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: MultipleTestTracker): TestCommand_TestSummaryDisplayer;
}

/** JVM record net.minecraft.gametest.framework.TestData. */
export interface TestDataMembers<EnvironmentType = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  environment(): EnvironmentType;
  equals(arg0: object): boolean;
  hashCode(): number;
  manualOnly(): boolean;
  map<T>(arg0: JavaFunction<EnvironmentType, T>): TestData<T>;
  maxAttempts(): number;
  maxTicks(): number;
  required(): boolean;
  requiredSuccesses(): number;
  rotation(): j_net_minecraft_world_level_block.Rotation;
  setupTicks(): number;
  skyAccess(): boolean;
  structure(): j_net_minecraft_resources.ResourceLocation;
  toString(): string;
}
export type TestData<EnvironmentType = unknown> = TestDataMembers<EnvironmentType> & JavaOpaque<"java.lang.Record">;
export interface TestDataStatics {
  new<EnvironmentType>(arg0: EnvironmentType, arg1: j_net_minecraft_resources.ResourceLocation, arg2: number, arg3: number, arg4: boolean): TestData<EnvironmentType>;
  new<EnvironmentType>(arg0: EnvironmentType, arg1: j_net_minecraft_resources.ResourceLocation, arg2: number, arg3: number, arg4: boolean, arg5: j_net_minecraft_world_level_block.Rotation): TestData<EnvironmentType>;
  new<EnvironmentType>(arg0: EnvironmentType, arg1: j_net_minecraft_resources.ResourceLocation, arg2: number, arg3: number, arg4: boolean, arg5: j_net_minecraft_world_level_block.Rotation, arg6: boolean, arg7: number, arg8: number, arg9: boolean): TestData<EnvironmentType>;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TestData<j_net_minecraft_core.Holder<TestEnvironmentDefinition>>]>;
}

/** JVM interface net.minecraft.gametest.framework.TestEnvironmentDefinition. */
export interface TestEnvironmentDefinitionMembers {
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TestEnvironmentDefinition]>;
  setup(arg0: j_net_minecraft_server_level.ServerLevel): void;
  teardown(arg0: j_net_minecraft_server_level.ServerLevel): void;
}
export type TestEnvironmentDefinition = TestEnvironmentDefinitionMembers;
export interface TestEnvironmentDefinitionStatics {
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [j_net_minecraft_core.Holder<TestEnvironmentDefinition>]>;
  readonly DIRECT_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TestEnvironmentDefinition]>;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [TestEnvironmentDefinition]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [TestEnvironmentDefinition]>;
}

/** JVM record net.minecraft.gametest.framework.TestEnvironmentDefinition$AllOf. */
export interface TestEnvironmentDefinition_AllOfMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TestEnvironmentDefinition];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TestEnvironmentDefinition_AllOf]>;
  definitions(): JavaList<j_net_minecraft_core.Holder<TestEnvironmentDefinition>>;
  equals(arg0: object): boolean;
  hashCode(): number;
  setup(arg0: j_net_minecraft_server_level.ServerLevel): void;
  teardown(arg0: j_net_minecraft_server_level.ServerLevel): void;
  toString(): string;
}
export type TestEnvironmentDefinition_AllOf = TestEnvironmentDefinition_AllOfMembers & JavaOpaque<"java.lang.Record"> & TestEnvironmentDefinition;
export interface TestEnvironmentDefinition_AllOfStatics {
  new(arg0: JavaList<j_net_minecraft_core.Holder<TestEnvironmentDefinition>>): TestEnvironmentDefinition_AllOf;
  new(...arg0: Array<TestEnvironmentDefinition>): TestEnvironmentDefinition_AllOf;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TestEnvironmentDefinition_AllOf]>;
}

/** JVM record net.minecraft.gametest.framework.TestEnvironmentDefinition$Functions. */
export interface TestEnvironmentDefinition_FunctionsMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TestEnvironmentDefinition];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TestEnvironmentDefinition_Functions]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  setup(arg0: j_net_minecraft_server_level.ServerLevel): void;
  setupFunction(): JavaOptional<j_net_minecraft_resources.ResourceLocation>;
  teardown(arg0: j_net_minecraft_server_level.ServerLevel): void;
  teardownFunction(): JavaOptional<j_net_minecraft_resources.ResourceLocation>;
  toString(): string;
}
export type TestEnvironmentDefinition_Functions = TestEnvironmentDefinition_FunctionsMembers & JavaOpaque<"java.lang.Record"> & TestEnvironmentDefinition;
export interface TestEnvironmentDefinition_FunctionsStatics {
  new(arg0: JavaOptional<j_net_minecraft_resources.ResourceLocation>, arg1: JavaOptional<j_net_minecraft_resources.ResourceLocation>): TestEnvironmentDefinition_Functions;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TestEnvironmentDefinition_Functions]>;
}

/** JVM record net.minecraft.gametest.framework.TestEnvironmentDefinition$SetGameRules. */
export interface TestEnvironmentDefinition_SetGameRulesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TestEnvironmentDefinition];
  boolRules(): JavaList<TestEnvironmentDefinition_SetGameRules_Entry<boolean, j_net_minecraft_world_level.GameRules_BooleanValue>>;
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TestEnvironmentDefinition_SetGameRules]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  intRules(): JavaList<TestEnvironmentDefinition_SetGameRules_Entry<number, j_net_minecraft_world_level.GameRules_IntegerValue>>;
  setup(arg0: j_net_minecraft_server_level.ServerLevel): void;
  teardown(arg0: j_net_minecraft_server_level.ServerLevel): void;
  toString(): string;
}
export type TestEnvironmentDefinition_SetGameRules = TestEnvironmentDefinition_SetGameRulesMembers & JavaOpaque<"java.lang.Record"> & TestEnvironmentDefinition;
export interface TestEnvironmentDefinition_SetGameRulesStatics {
  new(arg0: JavaList<TestEnvironmentDefinition_SetGameRules_Entry<boolean, j_net_minecraft_world_level.GameRules_BooleanValue>>, arg1: JavaList<TestEnvironmentDefinition_SetGameRules_Entry<number, j_net_minecraft_world_level.GameRules_IntegerValue>>): TestEnvironmentDefinition_SetGameRules;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TestEnvironmentDefinition_SetGameRules]>;
  entry<S, T /* extends j_net_minecraft_world_level.GameRules_Value<T> */>(arg0: j_net_minecraft_world_level.GameRules_Key<T>, arg1: S): TestEnvironmentDefinition_SetGameRules_Entry<S, T>;
}

/** JVM record net.minecraft.gametest.framework.TestEnvironmentDefinition$SetGameRules$Entry. */
export interface TestEnvironmentDefinition_SetGameRules_EntryMembers<S = unknown, T /* extends j_net_minecraft_world_level.GameRules_Value<T> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  key(): j_net_minecraft_world_level.GameRules_Key<T>;
  toString(): string;
  value(): S;
}
export type TestEnvironmentDefinition_SetGameRules_Entry<S = unknown, T /* extends j_net_minecraft_world_level.GameRules_Value<T> */ = unknown> = TestEnvironmentDefinition_SetGameRules_EntryMembers<S, T> & JavaOpaque<"java.lang.Record">;
export interface TestEnvironmentDefinition_SetGameRules_EntryStatics {
  new<S, T /* extends j_net_minecraft_world_level.GameRules_Value<T> */>(arg0: j_net_minecraft_world_level.GameRules_Key<T>, arg1: S): TestEnvironmentDefinition_SetGameRules_Entry<S, T>;
  codec<S, T /* extends j_net_minecraft_world_level.GameRules_Value<T> */>(arg0: JavaClass<T>, arg1: JavaOpaque<"com.mojang.serialization.Codec", [S]>): JavaOpaque<"com.mojang.serialization.Codec", [TestEnvironmentDefinition_SetGameRules_Entry<S, T>]>;
}

/** JVM record net.minecraft.gametest.framework.TestEnvironmentDefinition$TimeOfDay. */
export interface TestEnvironmentDefinition_TimeOfDayMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TestEnvironmentDefinition];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TestEnvironmentDefinition_TimeOfDay]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  setup(arg0: j_net_minecraft_server_level.ServerLevel): void;
  time(): number;
  toString(): string;
}
export type TestEnvironmentDefinition_TimeOfDay = TestEnvironmentDefinition_TimeOfDayMembers & JavaOpaque<"java.lang.Record"> & TestEnvironmentDefinition;
export interface TestEnvironmentDefinition_TimeOfDayStatics {
  new(arg0: number): TestEnvironmentDefinition_TimeOfDay;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TestEnvironmentDefinition_TimeOfDay]>;
}

/** JVM record net.minecraft.gametest.framework.TestEnvironmentDefinition$Weather. */
export interface TestEnvironmentDefinition_WeatherMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, TestEnvironmentDefinition];
  codec(): JavaOpaque<"com.mojang.serialization.MapCodec", [TestEnvironmentDefinition_Weather]>;
  equals(arg0: object): boolean;
  hashCode(): number;
  setup(arg0: j_net_minecraft_server_level.ServerLevel): void;
  teardown(arg0: j_net_minecraft_server_level.ServerLevel): void;
  toString(): string;
  weather(): TestEnvironmentDefinition_Weather_Type;
}
export type TestEnvironmentDefinition_Weather = TestEnvironmentDefinition_WeatherMembers & JavaOpaque<"java.lang.Record"> & TestEnvironmentDefinition;
export interface TestEnvironmentDefinition_WeatherStatics {
  new(arg0: TestEnvironmentDefinition_Weather_Type): TestEnvironmentDefinition_Weather;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [TestEnvironmentDefinition_Weather]>;
}

/** Live JVM enum net.minecraft.gametest.framework.TestEnvironmentDefinition$Weather$Type; constants are host handles, not strings. */
export type TestEnvironmentDefinition_Weather_Type = JavaEnum<"net.minecraft.gametest.framework.TestEnvironmentDefinition$Weather$Type", "CLEAR" | "RAIN" | "THUNDER"> & TestEnvironmentDefinition_Weather_TypeMembers;
export interface TestEnvironmentDefinition_Weather_TypeMembers {
  getSerializedName(): string;
}
export interface TestEnvironmentDefinition_Weather_TypeStatics {
  readonly CLEAR: TestEnvironmentDefinition_Weather_Type;
  readonly RAIN: TestEnvironmentDefinition_Weather_Type;
  readonly THUNDER: TestEnvironmentDefinition_Weather_Type;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [TestEnvironmentDefinition_Weather_Type]>;
  valueOf(arg0: string): TestEnvironmentDefinition_Weather_Type;
  values(): Array<TestEnvironmentDefinition_Weather_Type>;
}

/** JVM class net.minecraft.gametest.framework.TestFinder. */
export interface TestFinderMembers {
  readonly __javaSupertypes?: readonly [TestInstanceFinder, TestPosFinder];
  findTestPos(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
  findTests(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder_Reference<GameTestInstance>]>;
  source(): j_net_minecraft_commands.CommandSourceStack;
}
export type TestFinder = TestFinderMembers & TestInstanceFinder & TestPosFinder;
export interface TestFinderStatics {
  builder(): TestFinder_Builder;
}

/** JVM class net.minecraft.gametest.framework.TestFinder$Builder. */
export interface TestFinder_BuilderMembers {
  allNearby(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>): TestFinder;
  byResourceSelection(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: JavaCollection<j_net_minecraft_core.Holder_Reference<GameTestInstance>>): TestFinder;
  createMultipleCopies(arg0: number): TestFinder_Builder;
  failedTests(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>): TestFinder;
  failedTests(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: boolean): TestFinder;
  lookedAt(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>): TestFinder;
  nearest(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>): TestFinder;
  radius(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: number): TestFinder;
}
export type TestFinder_Builder = TestFinder_BuilderMembers;
export interface TestFinder_BuilderStatics {
  new(): TestFinder_Builder;
}

/** JVM abstract net.minecraft.gametest.framework.TestFunctionLoader. */
export interface TestFunctionLoaderMembers {
  load(arg0: JavaBiConsumer<j_net_minecraft_resources.ResourceKey<JavaConsumer<GameTestHelper>>, JavaConsumer<GameTestHelper>>): void;
}
export type TestFunctionLoader = TestFunctionLoaderMembers;
export interface TestFunctionLoaderStatics {
  new(): TestFunctionLoader;
  registerLoader(arg0: TestFunctionLoader): void;
  runLoaders(arg0: j_net_minecraft_core.Registry<JavaConsumer<GameTestHelper>>): void;
}

/** JVM interface net.minecraft.gametest.framework.TestInstanceFinder. */
export interface TestInstanceFinderMembers {
  findTests(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.Holder_Reference<GameTestInstance>]>;
}
export type TestInstanceFinder = TestInstanceFinderMembers;
export interface TestInstanceFinderStatics {
}

/** JVM interface net.minecraft.gametest.framework.TestPosFinder. */
export interface TestPosFinderMembers {
  findTestPos(): JavaOpaque<"java.util.stream.Stream", [j_net_minecraft_core.BlockPos]>;
}
export type TestPosFinder = TestPosFinderMembers;
export interface TestPosFinderStatics {
}

/** JVM interface net.minecraft.gametest.framework.TestReporter. */
export interface TestReporterMembers {
  finish(): void;
  onTestFailed(arg0: GameTestInfo): void;
  onTestSuccess(arg0: GameTestInfo): void;
}
export type TestReporter = TestReporterMembers;
export interface TestReporterStatics {
}

/** JVM class net.minecraft.gametest.framework.UnknownGameTestException. */
export interface UnknownGameTestExceptionMembers {
  readonly __javaSupertypes?: readonly [GameTestException];
  getDescription(): j_net_minecraft_network_chat.Component;
}
export type UnknownGameTestException = UnknownGameTestExceptionMembers & GameTestException;
export interface UnknownGameTestExceptionStatics {
  new(arg0: JavaOpaque<"java.lang.Throwable">): UnknownGameTestException;
}
