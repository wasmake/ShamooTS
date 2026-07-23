// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_io_papermc_paper_command_brigadier from './io.papermc.paper.command.brigadier.generated.js';
import type * as j_io_papermc_paper_command_brigadier_argument_predicate from './io.papermc.paper.command.brigadier.argument.predicate.generated.js';
import type * as j_io_papermc_paper_command_brigadier_argument_range from './io.papermc.paper.command.brigadier.argument.range.generated.js';
import type * as j_io_papermc_paper_command_brigadier_argument_resolvers from './io.papermc.paper.command.brigadier.argument.resolvers.generated.js';
import type * as j_io_papermc_paper_command_brigadier_argument_resolvers_selector from './io.papermc.paper.command.brigadier.argument.resolvers.selector.generated.js';
import type * as j_io_papermc_paper_entity from './io.papermc.paper.entity.generated.js';
import type * as j_io_papermc_paper_registry from './io.papermc.paper.registry.generated.js';
import type * as j_net_kyori_adventure_chat from './net.kyori.adventure.chat.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';
import type * as j_net_kyori_adventure_text_format from './net.kyori.adventure.text.format.generated.js';
import type * as j_org_bukkit from './org.bukkit.generated.js';
import type * as j_org_bukkit_block from './org.bukkit.block.generated.js';
import type * as j_org_bukkit_block_structure from './org.bukkit.block.structure.generated.js';
import type * as j_org_bukkit_inventory from './org.bukkit.inventory.generated.js';
import type * as j_org_bukkit_scoreboard from './org.bukkit.scoreboard.generated.js';

/** JVM class io.papermc.paper.command.brigadier.argument.ArgumentTypes. */
export interface ArgumentTypesMembers {
}
export type ArgumentTypes = ArgumentTypesMembers;
export interface ArgumentTypesStatics {
  angle(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_resolvers.AngleResolver]>;
  axes(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [AxisSet]>;
  blockInWorldPredicate(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_predicate.BlockInWorldPredicate]>;
  blockPosition(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_resolvers.BlockPositionResolver]>;
  blockState(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_org_bukkit_block.BlockState]>;
  columnBlockPosition(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_resolvers.ColumnBlockPositionResolver]>;
  columnFinePosition(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_resolvers.ColumnFinePositionResolver]>;
  columnFinePosition(arg0: boolean): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_resolvers.ColumnFinePositionResolver]>;
  component(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_kyori_adventure_text.Component]>;
  doubleRange(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_range.DoubleRangeProvider]>;
  entities(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_resolvers_selector.EntitySelectorArgumentResolver]>;
  entity(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_resolvers_selector.EntitySelectorArgumentResolver]>;
  entityAnchor(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_entity.LookAnchor]>;
  finePosition(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_resolvers.FinePositionResolver]>;
  finePosition(arg0: boolean): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_resolvers.FinePositionResolver]>;
  gameMode(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_org_bukkit.GameMode]>;
  heightMap(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_org_bukkit.HeightMap]>;
  hexColor(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_kyori_adventure_text_format.TextColor]>;
  integerRange(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_range.IntegerRangeProvider]>;
  itemPredicate(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_predicate.ItemStackPredicate]>;
  itemStack(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_org_bukkit_inventory.ItemStack]>;
  key(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [JavaOpaque<"net.kyori.adventure.key.Key">]>;
  namedColor(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_kyori_adventure_text_format.NamedTextColor]>;
  namespacedKey(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_org_bukkit.NamespacedKey]>;
  objectiveCriteria(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_org_bukkit_scoreboard.Criteria]>;
  player(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_resolvers_selector.PlayerSelectorArgumentResolver]>;
  playerProfiles(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_resolvers.PlayerProfileListResolver]>;
  players(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_resolvers_selector.PlayerSelectorArgumentResolver]>;
  resource<T>(arg0: j_io_papermc_paper_registry.RegistryKey<T>): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>;
  resourceKey<T>(arg0: j_io_papermc_paper_registry.RegistryKey<T>): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_registry.TypedKey<T>]>;
  rotation(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_io_papermc_paper_command_brigadier_argument_resolvers.RotationResolver]>;
  scoreboardDisplaySlot(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_org_bukkit_scoreboard.DisplaySlot]>;
  signedMessage(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [SignedMessageResolver]>;
  style(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_kyori_adventure_text_format.Style]>;
  templateMirror(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_org_bukkit_block_structure.Mirror]>;
  templateRotation(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_org_bukkit_block_structure.StructureRotation]>;
  time(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [number]>;
  time(arg0: number): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [number]>;
  uuid(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [JavaOpaque<"java.util.UUID">]>;
  world(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_org_bukkit.World]>;
}

/** JVM interface io.papermc.paper.command.brigadier.argument.AxisSet. */
export interface AxisSetMembers {
  readonly __javaSupertypes?: readonly [JavaSet<j_org_bukkit.Axis>];
}
export type AxisSet = AxisSetMembers & JavaSet<j_org_bukkit.Axis>;
export interface AxisSetStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.CustomArgumentType. */
export interface CustomArgumentTypeMembers<T = unknown, N = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>];
  getExamples(): JavaCollection<string>;
  getNativeType(): JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [N]>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): T;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse<S>(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: S): T;
}
export type CustomArgumentType<T = unknown, N = unknown> = CustomArgumentTypeMembers<T, N> & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>;
export interface CustomArgumentTypeStatics {
}

/** JVM interface io.papermc.paper.command.brigadier.argument.CustomArgumentType$Converted. */
export interface CustomArgumentType_ConvertedMembers<T = unknown, N = unknown> {
  readonly __javaSupertypes?: readonly [CustomArgumentType<T, N>];
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  convert(arg0: N): T;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  convert<S>(arg0: N, arg1: S): T;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): T;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse<S>(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: S): T;
}
export type CustomArgumentType_Converted<T = unknown, N = unknown> = CustomArgumentType_ConvertedMembers<T, N> & CustomArgumentType<T, N>;
export interface CustomArgumentType_ConvertedStatics {
}

/** JVM class io.papermc.paper.command.brigadier.argument.RegistryArgumentExtractor. */
export interface RegistryArgumentExtractorMembers {
}
export type RegistryArgumentExtractor = RegistryArgumentExtractorMembers;
export interface RegistryArgumentExtractorStatics {
  getTypedKey<T, S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: j_io_papermc_paper_registry.RegistryKey<T>, arg2: string): j_io_papermc_paper_registry.TypedKey<T>;
}

/** JVM interface io.papermc.paper.command.brigadier.argument.SignedMessageResolver. */
export interface SignedMessageResolverMembers {
  content(): string;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  resolveSignedMessage(arg0: string, arg1: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_io_papermc_paper_command_brigadier.CommandSourceStack]>): PromiseLike<j_net_kyori_adventure_chat.SignedMessage>;
}
export type SignedMessageResolver = SignedMessageResolverMembers;
export interface SignedMessageResolverStatics {
}
