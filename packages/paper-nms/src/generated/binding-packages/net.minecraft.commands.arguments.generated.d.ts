// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft from './net.minecraft.generated.js';
import type * as j_net_minecraft_advancements from './net.minecraft.advancements.generated.js';
import type * as j_net_minecraft_advancements_critereon from './net.minecraft.advancements.critereon.generated.js';
import type * as j_net_minecraft_commands from './net.minecraft.commands.generated.js';
import type * as j_net_minecraft_commands_arguments_selector from './net.minecraft.commands.arguments.selector.generated.js';
import type * as j_net_minecraft_commands_synchronization from './net.minecraft.commands.synchronization.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_core_particles from './net.minecraft.core.particles.generated.js';
import type * as j_net_minecraft_nbt from './net.minecraft.nbt.generated.js';
import type * as j_net_minecraft_network from './net.minecraft.network.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_resources from './net.minecraft.resources.generated.js';
import type * as j_net_minecraft_server_dialog from './net.minecraft.server.dialog.generated.js';
import type * as j_net_minecraft_server_level from './net.minecraft.server.level.generated.js';
import type * as j_net_minecraft_stats from './net.minecraft.stats.generated.js';
import type * as j_net_minecraft_tags from './net.minecraft.tags.generated.js';
import type * as j_net_minecraft_util from './net.minecraft.util.generated.js';
import type * as j_net_minecraft_util_parsing_packrat_commands from './net.minecraft.util.parsing.packrat.commands.generated.js';
import type * as j_net_minecraft_world_effect from './net.minecraft.world.effect.generated.js';
import type * as j_net_minecraft_world_entity from './net.minecraft.world.entity.generated.js';
import type * as j_net_minecraft_world_entity_ai_attributes from './net.minecraft.world.entity.ai.attributes.generated.js';
import type * as j_net_minecraft_world_inventory from './net.minecraft.world.inventory.generated.js';
import type * as j_net_minecraft_world_item_crafting from './net.minecraft.world.item.crafting.generated.js';
import type * as j_net_minecraft_world_item_enchantment from './net.minecraft.world.item.enchantment.generated.js';
import type * as j_net_minecraft_world_level from './net.minecraft.world.level.generated.js';
import type * as j_net_minecraft_world_level_block from './net.minecraft.world.level.block.generated.js';
import type * as j_net_minecraft_world_level_levelgen from './net.minecraft.world.level.levelgen.generated.js';
import type * as j_net_minecraft_world_level_levelgen_feature from './net.minecraft.world.level.levelgen.feature.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure from './net.minecraft.world.level.levelgen.structure.generated.js';
import type * as j_net_minecraft_world_level_levelgen_structure_pools from './net.minecraft.world.level.levelgen.structure.pools.generated.js';
import type * as j_net_minecraft_world_level_storage_loot from './net.minecraft.world.level.storage.loot.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_functions from './net.minecraft.world.level.storage.loot.functions.generated.js';
import type * as j_net_minecraft_world_level_storage_loot_predicates from './net.minecraft.world.level.storage.loot.predicates.generated.js';
import type * as j_net_minecraft_world_phys from './net.minecraft.world.phys.generated.js';
import type * as j_net_minecraft_world_scores from './net.minecraft.world.scores.generated.js';
import type * as j_net_minecraft_world_scores_criteria from './net.minecraft.world.scores.criteria.generated.js';
import type * as j_net_minecraft_world_waypoints from './net.minecraft.world.waypoints.generated.js';

/** JVM class net.minecraft.commands.arguments.AngleArgument. */
export interface AngleArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [AngleArgument_SingleAngle]>];
  getExamples(): JavaCollection<string>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): AngleArgument_SingleAngle;
}
export type AngleArgument = AngleArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [AngleArgument_SingleAngle]>;
export interface AngleArgumentStatics {
  new(): AngleArgument;
  readonly ERROR_INVALID_ANGLE: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_NOT_COMPLETE: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  angle(): AngleArgument;
  getAngle(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): number;
}

/** JVM class net.minecraft.commands.arguments.AngleArgument$SingleAngle. */
export interface AngleArgument_SingleAngleMembers {
  getAngle(arg0: j_net_minecraft_commands.CommandSourceStack): number;
}
export type AngleArgument_SingleAngle = AngleArgument_SingleAngleMembers;
export interface AngleArgument_SingleAngleStatics {
}

/** JVM record net.minecraft.commands.arguments.ArgumentSignatures. */
export interface ArgumentSignaturesMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  entries(): JavaList<ArgumentSignatures_Entry>;
  equals(arg0: object): boolean;
  hashCode(): number;
  toString(): string;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type ArgumentSignatures = ArgumentSignaturesMembers & JavaOpaque<"java.lang.Record">;
export interface ArgumentSignaturesStatics {
  new(arg0: JavaList<ArgumentSignatures_Entry>): ArgumentSignatures;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): ArgumentSignatures;
  readonly EMPTY: ArgumentSignatures;
  signCommand(arg0: j_net_minecraft_network_chat.SignableCommand<object>, arg1: ArgumentSignatures_Signer): ArgumentSignatures;
}

/** JVM record net.minecraft.commands.arguments.ArgumentSignatures$Entry. */
export interface ArgumentSignatures_EntryMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  name(): string;
  signature(): j_net_minecraft_network_chat.MessageSignature;
  toString(): string;
  write(arg0: j_net_minecraft_network.FriendlyByteBuf): void;
}
export type ArgumentSignatures_Entry = ArgumentSignatures_EntryMembers & JavaOpaque<"java.lang.Record">;
export interface ArgumentSignatures_EntryStatics {
  new(arg0: string, arg1: j_net_minecraft_network_chat.MessageSignature): ArgumentSignatures_Entry;
  new(arg0: j_net_minecraft_network.FriendlyByteBuf): ArgumentSignatures_Entry;
}

/** JVM interface net.minecraft.commands.arguments.ArgumentSignatures$Signer. */
export interface ArgumentSignatures_SignerMembers {
  sign(arg0: string): j_net_minecraft_network_chat.MessageSignature | null;
}
export type ArgumentSignatures_Signer = ArgumentSignatures_SignerMembers;
export interface ArgumentSignatures_SignerStatics {
}

/** JVM class net.minecraft.commands.arguments.ColorArgument. */
export interface ColorArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft.ChatFormatting]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft.ChatFormatting;
}
export type ColorArgument = ColorArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft.ChatFormatting]>;
export interface ColorArgumentStatics {
  readonly ERROR_INVALID_VALUE: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  color(): ColorArgument;
  getColor(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft.ChatFormatting;
}

/** JVM class net.minecraft.commands.arguments.ComponentArgument. */
export interface ComponentArgumentMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat_commands.ParserBasedArgument<j_net_minecraft_network_chat.Component>];
  getExamples(): JavaCollection<string>;
}
export type ComponentArgument = ComponentArgumentMembers & j_net_minecraft_util_parsing_packrat_commands.ParserBasedArgument<j_net_minecraft_network_chat.Component>;
export interface ComponentArgumentStatics {
  readonly ERROR_INVALID_COMPONENT: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  getRawComponent(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_network_chat.Component;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getResolvedComponent(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_network_chat.Component;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getResolvedComponent(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string, arg2: j_net_minecraft_world_entity.Entity | null): j_net_minecraft_network_chat.Component;
  textComponent(arg0: j_net_minecraft_commands.CommandBuildContext): ComponentArgument;
}

/** JVM class net.minecraft.commands.arguments.CompoundTagArgument. */
export interface CompoundTagArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_nbt.CompoundTag]>];
  getExamples(): JavaCollection<string>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_nbt.CompoundTag;
}
export type CompoundTagArgument = CompoundTagArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_nbt.CompoundTag]>;
export interface CompoundTagArgumentStatics {
  compoundTag(): CompoundTagArgument;
  getCompoundTag<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: string): j_net_minecraft_nbt.CompoundTag;
}

/** JVM class net.minecraft.commands.arguments.DimensionArgument. */
export interface DimensionArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_resources.ResourceLocation]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_resources.ResourceLocation;
}
export type DimensionArgument = DimensionArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_resources.ResourceLocation]>;
export interface DimensionArgumentStatics {
  new(): DimensionArgument;
  readonly ERROR_INVALID_VALUE: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  dimension(): DimensionArgument;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getDimension(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_server_level.ServerLevel;
}

/** JVM class net.minecraft.commands.arguments.EntityAnchorArgument. */
export interface EntityAnchorArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [EntityAnchorArgument_Anchor]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): EntityAnchorArgument_Anchor;
}
export type EntityAnchorArgument = EntityAnchorArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [EntityAnchorArgument_Anchor]>;
export interface EntityAnchorArgumentStatics {
  new(): EntityAnchorArgument;
  anchor(): EntityAnchorArgument;
  getAnchor(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): EntityAnchorArgument_Anchor;
}

/** Live JVM enum net.minecraft.commands.arguments.EntityAnchorArgument$Anchor; constants are host handles, not strings. */
export type EntityAnchorArgument_Anchor = JavaEnum<"net.minecraft.commands.arguments.EntityAnchorArgument$Anchor", "EYES" | "FEET"> & EntityAnchorArgument_AnchorMembers;
export interface EntityAnchorArgument_AnchorMembers {
  apply(arg0: j_net_minecraft_commands.CommandSourceStack): j_net_minecraft_world_phys.Vec3;
  apply(arg0: j_net_minecraft_world_entity.Entity): j_net_minecraft_world_phys.Vec3;
}
export interface EntityAnchorArgument_AnchorStatics {
  readonly EYES: EntityAnchorArgument_Anchor;
  readonly FEET: EntityAnchorArgument_Anchor;
  getByName(arg0: string): EntityAnchorArgument_Anchor | null;
  valueOf(arg0: string): EntityAnchorArgument_Anchor;
  values(): Array<EntityAnchorArgument_Anchor>;
}

/** JVM class net.minecraft.commands.arguments.EntityArgument. */
export interface EntityArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_commands_arguments_selector.EntitySelector]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_commands_arguments_selector.EntitySelector;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse<S>(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: S): j_net_minecraft_commands_arguments_selector.EntitySelector;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: boolean, arg2: boolean): j_net_minecraft_commands_arguments_selector.EntitySelector;
}
export type EntityArgument = EntityArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_commands_arguments_selector.EntitySelector]>;
export interface EntityArgumentStatics {
  readonly ERROR_NOT_SINGLE_ENTITY: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_NOT_SINGLE_PLAYER: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_ONLY_PLAYERS_ALLOWED: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_SELECTORS_NOT_ALLOWED: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly NO_ENTITIES_FOUND: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly NO_PLAYERS_FOUND: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  entities(): EntityArgument;
  entity(): EntityArgument;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getEntities(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaCollection<j_net_minecraft_world_entity.Entity>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getEntity(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_entity.Entity;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getOptionalEntities(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaCollection<j_net_minecraft_world_entity.Entity>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getOptionalPlayers(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaCollection<j_net_minecraft_server_level.ServerPlayer>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getPlayer(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_server_level.ServerPlayer;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getPlayers(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaCollection<j_net_minecraft_server_level.ServerPlayer>;
  player(): EntityArgument;
  players(): EntityArgument;
}

/** JVM class net.minecraft.commands.arguments.EntityArgument$Info. */
export interface EntityArgument_InfoMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo<EntityArgument, EntityArgument_Info_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): EntityArgument_Info_Template;
  serializeToJson(arg0: EntityArgument_Info_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: EntityArgument_Info_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: EntityArgument): EntityArgument_Info_Template;
}
export type EntityArgument_Info = EntityArgument_InfoMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo<EntityArgument, EntityArgument_Info_Template>;
export interface EntityArgument_InfoStatics {
  new(): EntityArgument_Info;
}

/** JVM class net.minecraft.commands.arguments.EntityArgument$Info$Template. */
export interface EntityArgument_Info_TemplateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<EntityArgument>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): EntityArgument;
  type(): j_net_minecraft_commands_synchronization.ArgumentTypeInfo<EntityArgument, object>;
}
export type EntityArgument_Info_Template = EntityArgument_Info_TemplateMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<EntityArgument>;
export interface EntityArgument_Info_TemplateStatics {
}

/** JVM class net.minecraft.commands.arguments.GameModeArgument. */
export interface GameModeArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_world_level.GameType]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_world_level.GameType;
}
export type GameModeArgument = GameModeArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_world_level.GameType]>;
export interface GameModeArgumentStatics {
  new(): GameModeArgument;
  gameMode(): GameModeArgument;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getGameMode(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_level.GameType;
}

/** JVM class net.minecraft.commands.arguments.GameProfileArgument. */
export interface GameProfileArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [GameProfileArgument_Result]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): GameProfileArgument_Result;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse<S>(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: S): GameProfileArgument_Result;
}
export type GameProfileArgument = GameProfileArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [GameProfileArgument_Result]>;
export interface GameProfileArgumentStatics {
  new(): GameProfileArgument;
  readonly ERROR_UNKNOWN_PLAYER: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  gameProfile(): GameProfileArgument;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getGameProfiles(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaCollection<JavaOpaque<"com.mojang.authlib.GameProfile">>;
}

/** JVM interface net.minecraft.commands.arguments.GameProfileArgument$Result. */
export interface GameProfileArgument_ResultMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getNames(arg0: j_net_minecraft_commands.CommandSourceStack): JavaCollection<JavaOpaque<"com.mojang.authlib.GameProfile">>;
}
export type GameProfileArgument_Result = GameProfileArgument_ResultMembers;
export interface GameProfileArgument_ResultStatics {
}

/** JVM class net.minecraft.commands.arguments.GameProfileArgument$SelectorResult. */
export interface GameProfileArgument_SelectorResultMembers {
  readonly __javaSupertypes?: readonly [GameProfileArgument_Result];
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getNames(arg0: j_net_minecraft_commands.CommandSourceStack): JavaCollection<JavaOpaque<"com.mojang.authlib.GameProfile">>;
}
export type GameProfileArgument_SelectorResult = GameProfileArgument_SelectorResultMembers & GameProfileArgument_Result;
export interface GameProfileArgument_SelectorResultStatics {
  new(arg0: j_net_minecraft_commands_arguments_selector.EntitySelector): GameProfileArgument_SelectorResult;
}

/** JVM class net.minecraft.commands.arguments.HeightmapTypeArgument. */
export interface HeightmapTypeArgumentMembers {
  readonly __javaSupertypes?: readonly [StringRepresentableArgument<j_net_minecraft_world_level_levelgen.Heightmap_Types>];
}
export type HeightmapTypeArgument = HeightmapTypeArgumentMembers & StringRepresentableArgument<j_net_minecraft_world_level_levelgen.Heightmap_Types>;
export interface HeightmapTypeArgumentStatics {
  getHeightmap(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_level_levelgen.Heightmap_Types;
  heightmap(): HeightmapTypeArgument;
}

/** JVM class net.minecraft.commands.arguments.HexColorArgument. */
export interface HexColorArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [number]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): number;
}
export type HexColorArgument = HexColorArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [number]>;
export interface HexColorArgumentStatics {
  readonly ERROR_INVALID_HEX: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  getHexColor(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): number;
  hexColor(): HexColorArgument;
}

/** JVM class net.minecraft.commands.arguments.MessageArgument. */
export interface MessageArgumentMembers {
  readonly __javaSupertypes?: readonly [SignedArgument<MessageArgument_Message>];
  getExamples(): JavaCollection<string>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): MessageArgument_Message;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse<S>(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: S | null): MessageArgument_Message;
}
export type MessageArgument = MessageArgumentMembers & SignedArgument<MessageArgument_Message>;
export interface MessageArgumentStatics {
  new(): MessageArgument;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getMessage(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_network_chat.Component;
  message(): MessageArgument;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  resolveChatMessage(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string, arg2: JavaConsumer<j_net_minecraft_network_chat.PlayerChatMessage>): void;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  resolveChatMessage(arg0: MessageArgument_Message, arg1: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg2: string, arg3: JavaConsumer<j_net_minecraft_network_chat.PlayerChatMessage>): void;
}

/** JVM record net.minecraft.commands.arguments.MessageArgument$Message. */
export interface MessageArgument_MessageMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  equals(arg0: object): boolean;
  hashCode(): number;
  parts(): Array<MessageArgument_Part>;
  text(): string;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  toComponent(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: boolean): j_net_minecraft_network_chat.Component;
  toString(): string;
}
export type MessageArgument_Message = MessageArgument_MessageMembers & JavaOpaque<"java.lang.Record">;
export interface MessageArgument_MessageStatics {
  new(arg0: string, arg1: Array<MessageArgument_Part>): MessageArgument_Message;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parseText(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: boolean): MessageArgument_Message;
}

/** JVM record net.minecraft.commands.arguments.MessageArgument$Part. */
export interface MessageArgument_PartMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">];
  end(): number;
  equals(arg0: object): boolean;
  hashCode(): number;
  selector(): j_net_minecraft_commands_arguments_selector.EntitySelector;
  start(): number;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  toComponent(arg0: j_net_minecraft_commands.CommandSourceStack): j_net_minecraft_network_chat.Component;
  toString(): string;
}
export type MessageArgument_Part = MessageArgument_PartMembers & JavaOpaque<"java.lang.Record">;
export interface MessageArgument_PartStatics {
  new(arg0: number, arg1: number, arg2: j_net_minecraft_commands_arguments_selector.EntitySelector): MessageArgument_Part;
}

/** JVM class net.minecraft.commands.arguments.NbtPathArgument. */
export interface NbtPathArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [NbtPathArgument_NbtPath]>];
  getExamples(): JavaCollection<string>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): NbtPathArgument_NbtPath;
}
export type NbtPathArgument = NbtPathArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [NbtPathArgument_NbtPath]>;
export interface NbtPathArgumentStatics {
  new(): NbtPathArgument;
  readonly ERROR_DATA_TOO_DEEP: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_INVALID_NODE: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  readonly ERROR_NOTHING_FOUND: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  getPath(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): NbtPathArgument_NbtPath;
  nbtPath(): NbtPathArgument;
}

/** JVM class net.minecraft.commands.arguments.NbtPathArgument$NbtPath. */
export interface NbtPathArgument_NbtPathMembers {
  asString(): string;
  countMatching(arg0: j_net_minecraft_nbt.Tag): number;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  get(arg0: j_net_minecraft_nbt.Tag): JavaList<j_net_minecraft_nbt.Tag>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getOrCreate(arg0: j_net_minecraft_nbt.Tag, arg1: JavaSupplier<j_net_minecraft_nbt.Tag>): JavaList<j_net_minecraft_nbt.Tag>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  insert(arg0: number, arg1: j_net_minecraft_nbt.CompoundTag, arg2: JavaList<j_net_minecraft_nbt.Tag>): number;
  remove(arg0: j_net_minecraft_nbt.Tag): number;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  set(arg0: j_net_minecraft_nbt.Tag, arg1: j_net_minecraft_nbt.Tag): number;
  toString(): string;
}
export type NbtPathArgument_NbtPath = NbtPathArgument_NbtPathMembers;
export interface NbtPathArgument_NbtPathStatics {
  new(arg0: string, arg1: Array<JavaOpaque<"net.minecraft.commands.arguments.NbtPathArgument$Node">>, arg2: JavaOpaque<"it.unimi.dsi.fastutil.objects.Object2IntMap", [JavaOpaque<"net.minecraft.commands.arguments.NbtPathArgument$Node">]>): NbtPathArgument_NbtPath;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [NbtPathArgument_NbtPath]>;
  isTooDeep(arg0: j_net_minecraft_nbt.Tag, arg1: number): boolean;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  of(arg0: string): NbtPathArgument_NbtPath;
}

/** JVM class net.minecraft.commands.arguments.NbtTagArgument. */
export interface NbtTagArgumentMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat_commands.ParserBasedArgument<j_net_minecraft_nbt.Tag>];
  getExamples(): JavaCollection<string>;
}
export type NbtTagArgument = NbtTagArgumentMembers & j_net_minecraft_util_parsing_packrat_commands.ParserBasedArgument<j_net_minecraft_nbt.Tag>;
export interface NbtTagArgumentStatics {
  getNbtTag<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: string): j_net_minecraft_nbt.Tag;
  nbtTag(): NbtTagArgument;
}

/** JVM class net.minecraft.commands.arguments.ObjectiveArgument. */
export interface ObjectiveArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [string]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): string;
}
export type ObjectiveArgument = ObjectiveArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [string]>;
export interface ObjectiveArgumentStatics {
  new(): ObjectiveArgument;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getObjective(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_scores.Objective;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getWritableObjective(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_scores.Objective;
  objective(): ObjectiveArgument;
}

/** JVM class net.minecraft.commands.arguments.ObjectiveCriteriaArgument. */
export interface ObjectiveCriteriaArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_world_scores_criteria.ObjectiveCriteria]>];
  getExamples(): JavaCollection<string>;
  getName<T>(arg0: j_net_minecraft_stats.StatType<T>, arg1: object): string;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_world_scores_criteria.ObjectiveCriteria;
}
export type ObjectiveCriteriaArgument = ObjectiveCriteriaArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_world_scores_criteria.ObjectiveCriteria]>;
export interface ObjectiveCriteriaArgumentStatics {
  readonly ERROR_INVALID_VALUE: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  criteria(): ObjectiveCriteriaArgument;
  getCriteria(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_scores_criteria.ObjectiveCriteria;
}

/** JVM class net.minecraft.commands.arguments.OperationArgument. */
export interface OperationArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [OperationArgument_Operation]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): OperationArgument_Operation;
}
export type OperationArgument = OperationArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [OperationArgument_Operation]>;
export interface OperationArgumentStatics {
  new(): OperationArgument;
  getOperation(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): OperationArgument_Operation;
  operation(): OperationArgument;
}

/** JVM interface net.minecraft.commands.arguments.OperationArgument$Operation. */
export interface OperationArgument_OperationMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  apply(arg0: j_net_minecraft_world_scores.ScoreAccess, arg1: j_net_minecraft_world_scores.ScoreAccess): void;
}
export type OperationArgument_Operation = OperationArgument_OperationMembers;
export interface OperationArgument_OperationStatics {
}

/** JVM class net.minecraft.commands.arguments.ParticleArgument. */
export interface ParticleArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_core_particles.ParticleOptions]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_core_particles.ParticleOptions;
}
export type ParticleArgument = ParticleArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_core_particles.ParticleOptions]>;
export interface ParticleArgumentStatics {
  new(arg0: j_net_minecraft_commands.CommandBuildContext): ParticleArgument;
  readonly ERROR_INVALID_OPTIONS: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readonly ERROR_UNKNOWN_PARTICLE: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  getParticle(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core_particles.ParticleOptions;
  particle(arg0: j_net_minecraft_commands.CommandBuildContext): ParticleArgument;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  readParticle(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: j_net_minecraft_core.HolderLookup_Provider): j_net_minecraft_core_particles.ParticleOptions;
}

/** JVM interface net.minecraft.commands.arguments.RangeArgument. */
export interface RangeArgumentMembers<T /* extends j_net_minecraft_advancements_critereon.MinMaxBounds<object> */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>];
}
export type RangeArgument<T /* extends j_net_minecraft_advancements_critereon.MinMaxBounds<object> */ = unknown> = RangeArgumentMembers<T> & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>;
export interface RangeArgumentStatics {
  floatRange(): RangeArgument_Floats;
  intRange(): RangeArgument_Ints;
}

/** JVM class net.minecraft.commands.arguments.RangeArgument$Floats. */
export interface RangeArgument_FloatsMembers {
  readonly __javaSupertypes?: readonly [RangeArgument<j_net_minecraft_advancements_critereon.MinMaxBounds_Doubles>];
  getExamples(): JavaCollection<string>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_advancements_critereon.MinMaxBounds_Doubles;
}
export type RangeArgument_Floats = RangeArgument_FloatsMembers & RangeArgument<j_net_minecraft_advancements_critereon.MinMaxBounds_Doubles>;
export interface RangeArgument_FloatsStatics {
  new(): RangeArgument_Floats;
  getRange(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_advancements_critereon.MinMaxBounds_Doubles;
}

/** JVM class net.minecraft.commands.arguments.RangeArgument$Ints. */
export interface RangeArgument_IntsMembers {
  readonly __javaSupertypes?: readonly [RangeArgument<j_net_minecraft_advancements_critereon.MinMaxBounds_Ints>];
  getExamples(): JavaCollection<string>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_advancements_critereon.MinMaxBounds_Ints;
}
export type RangeArgument_Ints = RangeArgument_IntsMembers & RangeArgument<j_net_minecraft_advancements_critereon.MinMaxBounds_Ints>;
export interface RangeArgument_IntsStatics {
  new(): RangeArgument_Ints;
  getRange(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_advancements_critereon.MinMaxBounds_Ints;
}

/** JVM class net.minecraft.commands.arguments.ResourceArgument. */
export interface ResourceArgumentMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_core.Holder_Reference<T>]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_core.Holder_Reference<T>;
}
export type ResourceArgument<T = unknown> = ResourceArgumentMembers<T> & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_core.Holder_Reference<T>]>;
export interface ResourceArgumentStatics {
  new<T>(arg0: j_net_minecraft_commands.CommandBuildContext, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): ResourceArgument<T>;
  readonly ERROR_INVALID_RESOURCE_TYPE: JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic3CommandExceptionType">;
  readonly ERROR_UNKNOWN_RESOURCE: JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getAttribute(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_entity_ai_attributes.Attribute>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getConfiguredFeature(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getEnchantment(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_item_enchantment.Enchantment>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getEntityType(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_entity.EntityType<object>>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getMobEffect(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_effect.MobEffect>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getResource<T>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string, arg2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): j_net_minecraft_core.Holder_Reference<T>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getStructure(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_level_levelgen_structure.Structure>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getSummonableEntityType(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_entity.EntityType<object>>;
  resource<T>(arg0: j_net_minecraft_commands.CommandBuildContext, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): ResourceArgument<T>;
}

/** JVM class net.minecraft.commands.arguments.ResourceArgument$Info. */
export interface ResourceArgument_InfoMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo<ResourceArgument<T>, ResourceArgument_Info_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): ResourceArgument_Info_Template;
  serializeToJson(arg0: ResourceArgument_Info_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: ResourceArgument_Info_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: ResourceArgument<ResourceArgument_Info_Template>): ResourceArgument_Info_Template;
  unpack(arg0: ResourceArgument<T>): ResourceArgument_Info_Template;
}
export type ResourceArgument_Info<T = unknown> = ResourceArgument_InfoMembers<T>;
export interface ResourceArgument_InfoStatics {
  new<T>(): ResourceArgument_Info<T>;
}

/** JVM class net.minecraft.commands.arguments.ResourceArgument$Info$Template. */
export interface ResourceArgument_Info_TemplateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<ResourceArgument<JavaOpaque<"T">>>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): ResourceArgument<JavaOpaque<"T">>;
  type(): j_net_minecraft_commands_synchronization.ArgumentTypeInfo<ResourceArgument<JavaOpaque<"T">>, object>;
}
export type ResourceArgument_Info_Template = ResourceArgument_Info_TemplateMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<ResourceArgument<JavaOpaque<"T">>>;
export interface ResourceArgument_Info_TemplateStatics {
}

/** JVM class net.minecraft.commands.arguments.ResourceKeyArgument. */
export interface ResourceKeyArgumentMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_resources.ResourceKey<T>]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_resources.ResourceKey<T>;
}
export type ResourceKeyArgument<T = unknown> = ResourceKeyArgumentMembers<T> & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_resources.ResourceKey<T>]>;
export interface ResourceKeyArgumentStatics {
  new<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): ResourceKeyArgument<T>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getAdvancement(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_advancements.AdvancementHolder;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getConfiguredFeature(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_level_levelgen_feature.ConfiguredFeature<object, object>>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getRecipe(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_item_crafting.RecipeHolder<object>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getRegistryKey<T>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string, arg2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>, arg3: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">): j_net_minecraft_resources.ResourceKey<T>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getStructure(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_level_levelgen_structure.Structure>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getStructureTemplatePool(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder_Reference<j_net_minecraft_world_level_levelgen_structure_pools.StructureTemplatePool>;
  key<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): ResourceKeyArgument<T>;
}

/** JVM class net.minecraft.commands.arguments.ResourceKeyArgument$Info. */
export interface ResourceKeyArgument_InfoMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo<ResourceKeyArgument<T>, ResourceKeyArgument_Info_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): ResourceKeyArgument_Info_Template;
  serializeToJson(arg0: ResourceKeyArgument_Info_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: ResourceKeyArgument_Info_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: ResourceKeyArgument<ResourceKeyArgument_Info_Template>): ResourceKeyArgument_Info_Template;
  unpack(arg0: ResourceKeyArgument<T>): ResourceKeyArgument_Info_Template;
}
export type ResourceKeyArgument_Info<T = unknown> = ResourceKeyArgument_InfoMembers<T>;
export interface ResourceKeyArgument_InfoStatics {
  new<T>(): ResourceKeyArgument_Info<T>;
}

/** JVM class net.minecraft.commands.arguments.ResourceKeyArgument$Info$Template. */
export interface ResourceKeyArgument_Info_TemplateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<ResourceKeyArgument<JavaOpaque<"T">>>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): ResourceKeyArgument<JavaOpaque<"T">>;
  type(): j_net_minecraft_commands_synchronization.ArgumentTypeInfo<ResourceKeyArgument<JavaOpaque<"T">>, object>;
}
export type ResourceKeyArgument_Info_Template = ResourceKeyArgument_Info_TemplateMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<ResourceKeyArgument<JavaOpaque<"T">>>;
export interface ResourceKeyArgument_Info_TemplateStatics {
}

/** JVM class net.minecraft.commands.arguments.ResourceLocationArgument. */
export interface ResourceLocationArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_resources.ResourceLocation]>];
  getExamples(): JavaCollection<string>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_resources.ResourceLocation;
}
export type ResourceLocationArgument = ResourceLocationArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_resources.ResourceLocation]>;
export interface ResourceLocationArgumentStatics {
  new(): ResourceLocationArgument;
  getId(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_resources.ResourceLocation;
  id(): ResourceLocationArgument;
}

/** JVM class net.minecraft.commands.arguments.ResourceOrIdArgument. */
export interface ResourceOrIdArgumentMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_core.Holder<T>]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_core.Holder<T> | null;
}
export type ResourceOrIdArgument<T = unknown> = ResourceOrIdArgumentMembers<T> & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_core.Holder<T>]>;
export interface ResourceOrIdArgumentStatics {
  readonly ERROR_FAILED_TO_PARSE: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  readonly ERROR_NO_SUCH_ELEMENT: JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  readonly OPS: JavaOpaque<"com.mojang.serialization.DynamicOps", [j_net_minecraft_nbt.Tag]>;
  createGrammar<T, O>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>, arg1: JavaOpaque<"com.mojang.serialization.DynamicOps", [O]>): j_net_minecraft_util_parsing_packrat_commands.Grammar<ResourceOrIdArgument_Result<T, O>>;
  dialog(arg0: j_net_minecraft_commands.CommandBuildContext): ResourceOrIdArgument_DialogArgument;
  getDialog(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder<j_net_minecraft_server_dialog.Dialog>;
  getLootModifier(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder<j_net_minecraft_world_level_storage_loot_functions.LootItemFunction>;
  getLootPredicate(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getLootTable(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_core.Holder<j_net_minecraft_world_level_storage_loot.LootTable>;
  lootModifier(arg0: j_net_minecraft_commands.CommandBuildContext): ResourceOrIdArgument_LootModifierArgument;
  lootPredicate(arg0: j_net_minecraft_commands.CommandBuildContext): ResourceOrIdArgument_LootPredicateArgument;
  lootTable(arg0: j_net_minecraft_commands.CommandBuildContext): ResourceOrIdArgument_LootTableArgument;
}

/** JVM class net.minecraft.commands.arguments.ResourceOrIdArgument$DialogArgument. */
export interface ResourceOrIdArgument_DialogArgumentMembers {
  readonly __javaSupertypes?: readonly [ResourceOrIdArgument<j_net_minecraft_server_dialog.Dialog>];
}
export type ResourceOrIdArgument_DialogArgument = ResourceOrIdArgument_DialogArgumentMembers & ResourceOrIdArgument<j_net_minecraft_server_dialog.Dialog>;
export interface ResourceOrIdArgument_DialogArgumentStatics {
}

/** JVM record net.minecraft.commands.arguments.ResourceOrIdArgument$InlineResult. */
export interface ResourceOrIdArgument_InlineResultMembers<T = unknown, O = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ResourceOrIdArgument_Result<T, O>];
  equals(arg0: object): boolean;
  hashCode(): number;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.ImmutableStringReader">, arg1: j_net_minecraft_core.HolderLookup_Provider, arg2: JavaOpaque<"com.mojang.serialization.DynamicOps", [O]>, arg3: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg4: j_net_minecraft_core.HolderLookup_RegistryLookup<T>): j_net_minecraft_core.Holder<T>;
  toString(): string;
  value(): O;
}
export type ResourceOrIdArgument_InlineResult<T = unknown, O = unknown> = ResourceOrIdArgument_InlineResultMembers<T, O> & JavaOpaque<"java.lang.Record"> & ResourceOrIdArgument_Result<T, O>;
export interface ResourceOrIdArgument_InlineResultStatics {
  new<T, O>(arg0: O): ResourceOrIdArgument_InlineResult<T, O>;
}

/** JVM class net.minecraft.commands.arguments.ResourceOrIdArgument$LootModifierArgument. */
export interface ResourceOrIdArgument_LootModifierArgumentMembers {
  readonly __javaSupertypes?: readonly [ResourceOrIdArgument<j_net_minecraft_world_level_storage_loot_functions.LootItemFunction>];
}
export type ResourceOrIdArgument_LootModifierArgument = ResourceOrIdArgument_LootModifierArgumentMembers & ResourceOrIdArgument<j_net_minecraft_world_level_storage_loot_functions.LootItemFunction>;
export interface ResourceOrIdArgument_LootModifierArgumentStatics {
}

/** JVM class net.minecraft.commands.arguments.ResourceOrIdArgument$LootPredicateArgument. */
export interface ResourceOrIdArgument_LootPredicateArgumentMembers {
  readonly __javaSupertypes?: readonly [ResourceOrIdArgument<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>];
}
export type ResourceOrIdArgument_LootPredicateArgument = ResourceOrIdArgument_LootPredicateArgumentMembers & ResourceOrIdArgument<j_net_minecraft_world_level_storage_loot_predicates.LootItemCondition>;
export interface ResourceOrIdArgument_LootPredicateArgumentStatics {
}

/** JVM class net.minecraft.commands.arguments.ResourceOrIdArgument$LootTableArgument. */
export interface ResourceOrIdArgument_LootTableArgumentMembers {
  readonly __javaSupertypes?: readonly [ResourceOrIdArgument<j_net_minecraft_world_level_storage_loot.LootTable>];
}
export type ResourceOrIdArgument_LootTableArgument = ResourceOrIdArgument_LootTableArgumentMembers & ResourceOrIdArgument<j_net_minecraft_world_level_storage_loot.LootTable>;
export interface ResourceOrIdArgument_LootTableArgumentStatics {
}

/** JVM record net.minecraft.commands.arguments.ResourceOrIdArgument$ReferenceResult. */
export interface ResourceOrIdArgument_ReferenceResultMembers<T = unknown, O = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, ResourceOrIdArgument_Result<T, O>];
  equals(arg0: object): boolean;
  hashCode(): number;
  key(): j_net_minecraft_resources.ResourceKey<T>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.ImmutableStringReader">, arg1: j_net_minecraft_core.HolderLookup_Provider, arg2: JavaOpaque<"com.mojang.serialization.DynamicOps", [O]>, arg3: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg4: j_net_minecraft_core.HolderLookup_RegistryLookup<T>): j_net_minecraft_core.Holder<T>;
  toString(): string;
}
export type ResourceOrIdArgument_ReferenceResult<T = unknown, O = unknown> = ResourceOrIdArgument_ReferenceResultMembers<T, O> & JavaOpaque<"java.lang.Record"> & ResourceOrIdArgument_Result<T, O>;
export interface ResourceOrIdArgument_ReferenceResultStatics {
  new<T, O>(arg0: j_net_minecraft_resources.ResourceKey<T>): ResourceOrIdArgument_ReferenceResult<T, O>;
}

/** JVM interface net.minecraft.commands.arguments.ResourceOrIdArgument$Result. */
export interface ResourceOrIdArgument_ResultMembers<T = unknown, O = unknown> {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.ImmutableStringReader">, arg1: j_net_minecraft_core.HolderLookup_Provider, arg2: JavaOpaque<"com.mojang.serialization.DynamicOps", [O]>, arg3: JavaOpaque<"com.mojang.serialization.Codec", [T]>, arg4: j_net_minecraft_core.HolderLookup_RegistryLookup<T>): j_net_minecraft_core.Holder<T>;
}
export type ResourceOrIdArgument_Result<T = unknown, O = unknown> = ResourceOrIdArgument_ResultMembers<T, O>;
export interface ResourceOrIdArgument_ResultStatics {
}

/** JVM class net.minecraft.commands.arguments.ResourceOrTagArgument. */
export interface ResourceOrTagArgumentMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [ResourceOrTagArgument_Result<T>]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): ResourceOrTagArgument_Result<T>;
}
export type ResourceOrTagArgument<T = unknown> = ResourceOrTagArgumentMembers<T> & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [ResourceOrTagArgument_Result<T>]>;
export interface ResourceOrTagArgumentStatics {
  new<T>(arg0: j_net_minecraft_commands.CommandBuildContext, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): ResourceOrTagArgument<T>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getResourceOrTag<T>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string, arg2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): ResourceOrTagArgument_Result<T>;
  resourceOrTag<T>(arg0: j_net_minecraft_commands.CommandBuildContext, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): ResourceOrTagArgument<T>;
}

/** JVM class net.minecraft.commands.arguments.ResourceOrTagArgument$Info. */
export interface ResourceOrTagArgument_InfoMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo<ResourceOrTagArgument<T>, ResourceOrTagArgument_Info_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): ResourceOrTagArgument_Info_Template;
  serializeToJson(arg0: ResourceOrTagArgument_Info_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: ResourceOrTagArgument_Info_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: ResourceOrTagArgument<ResourceOrTagArgument_Info_Template>): ResourceOrTagArgument_Info_Template;
  unpack(arg0: ResourceOrTagArgument<T>): ResourceOrTagArgument_Info_Template;
}
export type ResourceOrTagArgument_Info<T = unknown> = ResourceOrTagArgument_InfoMembers<T>;
export interface ResourceOrTagArgument_InfoStatics {
  new<T>(): ResourceOrTagArgument_Info<T>;
}

/** JVM class net.minecraft.commands.arguments.ResourceOrTagArgument$Info$Template. */
export interface ResourceOrTagArgument_Info_TemplateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<ResourceOrTagArgument<JavaOpaque<"T">>>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): ResourceOrTagArgument<JavaOpaque<"T">>;
  type(): j_net_minecraft_commands_synchronization.ArgumentTypeInfo<ResourceOrTagArgument<JavaOpaque<"T">>, object>;
}
export type ResourceOrTagArgument_Info_Template = ResourceOrTagArgument_Info_TemplateMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<ResourceOrTagArgument<JavaOpaque<"T">>>;
export interface ResourceOrTagArgument_Info_TemplateStatics {
}

/** JVM interface net.minecraft.commands.arguments.ResourceOrTagArgument$Result. */
export interface ResourceOrTagArgument_ResultMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaPredicate<j_net_minecraft_core.Holder<T>>];
  asPrintable(): string;
  cast<E>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<E>>): JavaOptional<ResourceOrTagArgument_Result<E>>;
  unwrap(): JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_core.Holder_Reference<T>, j_net_minecraft_core.HolderSet_Named<T>]>;
}
export type ResourceOrTagArgument_Result<T = unknown> = ResourceOrTagArgument_ResultMembers<T> & JavaPredicate<j_net_minecraft_core.Holder<T>>;
export interface ResourceOrTagArgument_ResultStatics {
}

/** JVM class net.minecraft.commands.arguments.ResourceOrTagKeyArgument. */
export interface ResourceOrTagKeyArgumentMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [ResourceOrTagKeyArgument_Result<T>]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): ResourceOrTagKeyArgument_Result<T>;
}
export type ResourceOrTagKeyArgument<T = unknown> = ResourceOrTagKeyArgumentMembers<T> & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [ResourceOrTagKeyArgument_Result<T>]>;
export interface ResourceOrTagKeyArgumentStatics {
  new<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): ResourceOrTagKeyArgument<T>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getResourceOrTagKey<T>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string, arg2: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>, arg3: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">): ResourceOrTagKeyArgument_Result<T>;
  resourceOrTagKey<T>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): ResourceOrTagKeyArgument<T>;
}

/** JVM class net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Info. */
export interface ResourceOrTagKeyArgument_InfoMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo<ResourceOrTagKeyArgument<T>, ResourceOrTagKeyArgument_Info_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): ResourceOrTagKeyArgument_Info_Template;
  serializeToJson(arg0: ResourceOrTagKeyArgument_Info_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: ResourceOrTagKeyArgument_Info_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: ResourceOrTagKeyArgument<ResourceOrTagKeyArgument_Info_Template>): ResourceOrTagKeyArgument_Info_Template;
  unpack(arg0: ResourceOrTagKeyArgument<T>): ResourceOrTagKeyArgument_Info_Template;
}
export type ResourceOrTagKeyArgument_Info<T = unknown> = ResourceOrTagKeyArgument_InfoMembers<T>;
export interface ResourceOrTagKeyArgument_InfoStatics {
  new<T>(): ResourceOrTagKeyArgument_Info<T>;
}

/** JVM class net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Info$Template. */
export interface ResourceOrTagKeyArgument_Info_TemplateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<ResourceOrTagKeyArgument<JavaOpaque<"T">>>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): ResourceOrTagKeyArgument<JavaOpaque<"T">>;
  type(): j_net_minecraft_commands_synchronization.ArgumentTypeInfo<ResourceOrTagKeyArgument<JavaOpaque<"T">>, object>;
}
export type ResourceOrTagKeyArgument_Info_Template = ResourceOrTagKeyArgument_Info_TemplateMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<ResourceOrTagKeyArgument<JavaOpaque<"T">>>;
export interface ResourceOrTagKeyArgument_Info_TemplateStatics {
}

/** JVM interface net.minecraft.commands.arguments.ResourceOrTagKeyArgument$Result. */
export interface ResourceOrTagKeyArgument_ResultMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaPredicate<j_net_minecraft_core.Holder<T>>];
  asPrintable(): string;
  cast<E>(arg0: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<E>>): JavaOptional<ResourceOrTagKeyArgument_Result<E>>;
  unwrap(): JavaOpaque<"com.mojang.datafixers.util.Either", [j_net_minecraft_resources.ResourceKey<T>, j_net_minecraft_tags.TagKey<T>]>;
}
export type ResourceOrTagKeyArgument_Result<T = unknown> = ResourceOrTagKeyArgument_ResultMembers<T> & JavaPredicate<j_net_minecraft_core.Holder<T>>;
export interface ResourceOrTagKeyArgument_ResultStatics {
}

/** JVM class net.minecraft.commands.arguments.ResourceSelectorArgument. */
export interface ResourceSelectorArgumentMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [JavaCollection<j_net_minecraft_core.Holder_Reference<T>>]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): JavaCollection<j_net_minecraft_core.Holder_Reference<T>>;
}
export type ResourceSelectorArgument<T = unknown> = ResourceSelectorArgumentMembers<T> & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [JavaCollection<j_net_minecraft_core.Holder_Reference<T>>]>;
export interface ResourceSelectorArgumentStatics {
  readonly ERROR_NO_MATCHES: JavaOpaque<"com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType">;
  getSelectedResources<T>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaCollection<j_net_minecraft_core.Holder_Reference<T>>;
  parse<T>(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: j_net_minecraft_core.HolderLookup<T>): JavaCollection<j_net_minecraft_core.Holder_Reference<T>>;
  resourceSelector<T>(arg0: j_net_minecraft_commands.CommandBuildContext, arg1: j_net_minecraft_resources.ResourceKey<j_net_minecraft_core.Registry<T>>): ResourceSelectorArgument<T>;
}

/** JVM class net.minecraft.commands.arguments.ResourceSelectorArgument$Info. */
export interface ResourceSelectorArgument_InfoMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo<ResourceSelectorArgument<T>, ResourceSelectorArgument_Info_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): ResourceSelectorArgument_Info_Template;
  serializeToJson(arg0: ResourceSelectorArgument_Info_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: ResourceSelectorArgument_Info_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: ResourceSelectorArgument<ResourceSelectorArgument_Info_Template>): ResourceSelectorArgument_Info_Template;
  unpack(arg0: ResourceSelectorArgument<T>): ResourceSelectorArgument_Info_Template;
}
export type ResourceSelectorArgument_Info<T = unknown> = ResourceSelectorArgument_InfoMembers<T>;
export interface ResourceSelectorArgument_InfoStatics {
  new<T>(): ResourceSelectorArgument_Info<T>;
}

/** JVM class net.minecraft.commands.arguments.ResourceSelectorArgument$Info$Template. */
export interface ResourceSelectorArgument_Info_TemplateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<ResourceSelectorArgument<JavaOpaque<"T">>>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): ResourceSelectorArgument<JavaOpaque<"T">>;
  type(): j_net_minecraft_commands_synchronization.ArgumentTypeInfo<ResourceSelectorArgument<JavaOpaque<"T">>, object>;
}
export type ResourceSelectorArgument_Info_Template = ResourceSelectorArgument_Info_TemplateMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<ResourceSelectorArgument<JavaOpaque<"T">>>;
export interface ResourceSelectorArgument_Info_TemplateStatics {
}

/** JVM class net.minecraft.commands.arguments.ScoreboardSlotArgument. */
export interface ScoreboardSlotArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_world_scores.DisplaySlot]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_world_scores.DisplaySlot;
}
export type ScoreboardSlotArgument = ScoreboardSlotArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_world_scores.DisplaySlot]>;
export interface ScoreboardSlotArgumentStatics {
  readonly ERROR_INVALID_VALUE: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  displaySlot(): ScoreboardSlotArgument;
  getDisplaySlot(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_scores.DisplaySlot;
}

/** JVM class net.minecraft.commands.arguments.ScoreHolderArgument. */
export interface ScoreHolderArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [ScoreHolderArgument_Result]>];
  getExamples(): JavaCollection<string>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): ScoreHolderArgument_Result;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse<S>(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">, arg1: S): ScoreHolderArgument_Result;
}
export type ScoreHolderArgument = ScoreHolderArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [ScoreHolderArgument_Result]>;
export interface ScoreHolderArgumentStatics {
  new(arg0: boolean): ScoreHolderArgument;
  readonly SUGGEST_SCORE_HOLDERS: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionProvider", [j_net_minecraft_commands.CommandSourceStack]>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getName(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_scores.ScoreHolder;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getNames(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaCollection<j_net_minecraft_world_scores.ScoreHolder>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getNames(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string, arg2: JavaSupplier<JavaCollection<j_net_minecraft_world_scores.ScoreHolder>>): JavaCollection<j_net_minecraft_world_scores.ScoreHolder>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getNamesWithDefaultWildcard(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaCollection<j_net_minecraft_world_scores.ScoreHolder>;
  scoreHolder(): ScoreHolderArgument;
  scoreHolders(): ScoreHolderArgument;
}

/** JVM class net.minecraft.commands.arguments.ScoreHolderArgument$Info. */
export interface ScoreHolderArgument_InfoMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo<ScoreHolderArgument, ScoreHolderArgument_Info_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): ScoreHolderArgument_Info_Template;
  serializeToJson(arg0: ScoreHolderArgument_Info_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: ScoreHolderArgument_Info_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: ScoreHolderArgument): ScoreHolderArgument_Info_Template;
}
export type ScoreHolderArgument_Info = ScoreHolderArgument_InfoMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo<ScoreHolderArgument, ScoreHolderArgument_Info_Template>;
export interface ScoreHolderArgument_InfoStatics {
  new(): ScoreHolderArgument_Info;
}

/** JVM class net.minecraft.commands.arguments.ScoreHolderArgument$Info$Template. */
export interface ScoreHolderArgument_Info_TemplateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<ScoreHolderArgument>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): ScoreHolderArgument;
  type(): j_net_minecraft_commands_synchronization.ArgumentTypeInfo<ScoreHolderArgument, object>;
}
export type ScoreHolderArgument_Info_Template = ScoreHolderArgument_Info_TemplateMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<ScoreHolderArgument>;
export interface ScoreHolderArgument_Info_TemplateStatics {
}

/** JVM interface net.minecraft.commands.arguments.ScoreHolderArgument$Result. */
export interface ScoreHolderArgument_ResultMembers {
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getNames(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: JavaSupplier<JavaCollection<j_net_minecraft_world_scores.ScoreHolder>>): JavaCollection<j_net_minecraft_world_scores.ScoreHolder>;
}
export type ScoreHolderArgument_Result = ScoreHolderArgument_ResultMembers;
export interface ScoreHolderArgument_ResultStatics {
}

/** JVM class net.minecraft.commands.arguments.ScoreHolderArgument$SelectorResult. */
export interface ScoreHolderArgument_SelectorResultMembers {
  readonly __javaSupertypes?: readonly [ScoreHolderArgument_Result];
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getNames(arg0: j_net_minecraft_commands.CommandSourceStack, arg1: JavaSupplier<JavaCollection<j_net_minecraft_world_scores.ScoreHolder>>): JavaCollection<j_net_minecraft_world_scores.ScoreHolder>;
}
export type ScoreHolderArgument_SelectorResult = ScoreHolderArgument_SelectorResultMembers & ScoreHolderArgument_Result;
export interface ScoreHolderArgument_SelectorResultStatics {
  new(arg0: j_net_minecraft_commands_arguments_selector.EntitySelector): ScoreHolderArgument_SelectorResult;
}

/** JVM interface net.minecraft.commands.arguments.SignedArgument. */
export interface SignedArgumentMembers<T = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>];
}
export type SignedArgument<T = unknown> = SignedArgumentMembers<T> & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>;
export interface SignedArgumentStatics {
}

/** JVM class net.minecraft.commands.arguments.SlotArgument. */
export interface SlotArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [number]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): number;
}
export type SlotArgument = SlotArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [number]>;
export interface SlotArgumentStatics {
  new(): SlotArgument;
  getSlot(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): number;
  slot(): SlotArgument;
}

/** JVM class net.minecraft.commands.arguments.SlotsArgument. */
export interface SlotsArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_world_inventory.SlotRange]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): j_net_minecraft_world_inventory.SlotRange;
}
export type SlotsArgument = SlotsArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [j_net_minecraft_world_inventory.SlotRange]>;
export interface SlotsArgumentStatics {
  new(): SlotsArgument;
  getSlots(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_inventory.SlotRange;
  slots(): SlotsArgument;
}

/** JVM class net.minecraft.commands.arguments.StringRepresentableArgument. */
export interface StringRepresentableArgumentMembers<T /* extends j_net_minecraft_util.StringRepresentable */ = unknown> {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): T;
}
export type StringRepresentableArgument<T /* extends j_net_minecraft_util.StringRepresentable */ = unknown> = StringRepresentableArgumentMembers<T> & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [T]>;
export interface StringRepresentableArgumentStatics {
}

/** JVM class net.minecraft.commands.arguments.StyleArgument. */
export interface StyleArgumentMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_util_parsing_packrat_commands.ParserBasedArgument<j_net_minecraft_network_chat.Style>];
  getExamples(): JavaCollection<string>;
}
export type StyleArgument = StyleArgumentMembers & j_net_minecraft_util_parsing_packrat_commands.ParserBasedArgument<j_net_minecraft_network_chat.Style>;
export interface StyleArgumentStatics {
  readonly ERROR_INVALID_STYLE: JavaOpaque<"com.mojang.brigadier.exceptions.DynamicCommandExceptionType">;
  getStyle(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_network_chat.Style;
  style(arg0: j_net_minecraft_commands.CommandBuildContext): StyleArgument;
}

/** JVM class net.minecraft.commands.arguments.TeamArgument. */
export interface TeamArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [string]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): string;
}
export type TeamArgument = TeamArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [string]>;
export interface TeamArgumentStatics {
  new(): TeamArgument;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getTeam(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_scores.PlayerTeam;
  team(): TeamArgument;
}

/** JVM class net.minecraft.commands.arguments.TemplateMirrorArgument. */
export interface TemplateMirrorArgumentMembers {
  readonly __javaSupertypes?: readonly [StringRepresentableArgument<j_net_minecraft_world_level_block.Mirror>];
}
export type TemplateMirrorArgument = TemplateMirrorArgumentMembers & StringRepresentableArgument<j_net_minecraft_world_level_block.Mirror>;
export interface TemplateMirrorArgumentStatics {
  getMirror(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_level_block.Mirror;
  templateMirror(): StringRepresentableArgument<j_net_minecraft_world_level_block.Mirror>;
}

/** JVM class net.minecraft.commands.arguments.TemplateRotationArgument. */
export interface TemplateRotationArgumentMembers {
  readonly __javaSupertypes?: readonly [StringRepresentableArgument<j_net_minecraft_world_level_block.Rotation>];
}
export type TemplateRotationArgument = TemplateRotationArgumentMembers & StringRepresentableArgument<j_net_minecraft_world_level_block.Rotation>;
export interface TemplateRotationArgumentStatics {
  getRotation(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_level_block.Rotation;
  templateRotation(): TemplateRotationArgument;
}

/** JVM class net.minecraft.commands.arguments.TimeArgument. */
export interface TimeArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [number]>];
  getExamples(): JavaCollection<string>;
  listSuggestions<S>(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [S]>, arg1: JavaOpaque<"com.mojang.brigadier.suggestion.SuggestionsBuilder">): PromiseLike<JavaOpaque<"com.mojang.brigadier.suggestion.Suggestions">>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): number;
}
export type TimeArgument = TimeArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [number]>;
export interface TimeArgumentStatics {
  time(): TimeArgument;
  time(arg0: number): TimeArgument;
}

/** JVM class net.minecraft.commands.arguments.TimeArgument$Info. */
export interface TimeArgument_InfoMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo<TimeArgument, TimeArgument_Info_Template>];
  deserializeFromNetwork(arg0: j_net_minecraft_network.FriendlyByteBuf): TimeArgument_Info_Template;
  serializeToJson(arg0: TimeArgument_Info_Template, arg1: JavaOpaque<"com.google.gson.JsonObject">): void;
  serializeToNetwork(arg0: TimeArgument_Info_Template, arg1: j_net_minecraft_network.FriendlyByteBuf): void;
  unpack(arg0: TimeArgument): TimeArgument_Info_Template;
}
export type TimeArgument_Info = TimeArgument_InfoMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo<TimeArgument, TimeArgument_Info_Template>;
export interface TimeArgument_InfoStatics {
  new(): TimeArgument_Info;
}

/** JVM class net.minecraft.commands.arguments.TimeArgument$Info$Template. */
export interface TimeArgument_Info_TemplateMembers {
  readonly __javaSupertypes?: readonly [j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<TimeArgument>];
  instantiate(arg0: j_net_minecraft_commands.CommandBuildContext): TimeArgument;
  type(): j_net_minecraft_commands_synchronization.ArgumentTypeInfo<TimeArgument, object>;
}
export type TimeArgument_Info_Template = TimeArgument_Info_TemplateMembers & j_net_minecraft_commands_synchronization.ArgumentTypeInfo_Template<TimeArgument>;
export interface TimeArgument_Info_TemplateStatics {
}

/** JVM class net.minecraft.commands.arguments.UuidArgument. */
export interface UuidArgumentMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [JavaOpaque<"java.util.UUID">]>];
  getExamples(): JavaCollection<string>;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  parse(arg0: JavaOpaque<"com.mojang.brigadier.StringReader">): JavaOpaque<"java.util.UUID">;
}
export type UuidArgument = UuidArgumentMembers & JavaOpaque<"com.mojang.brigadier.arguments.ArgumentType", [JavaOpaque<"java.util.UUID">]>;
export interface UuidArgumentStatics {
  new(): UuidArgument;
  readonly ERROR_INVALID_UUID: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  getUuid(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): JavaOpaque<"java.util.UUID">;
  uuid(): UuidArgument;
}

/** JVM class net.minecraft.commands.arguments.WaypointArgument. */
export interface WaypointArgumentMembers {
}
export type WaypointArgument = WaypointArgumentMembers;
export interface WaypointArgumentStatics {
  new(): WaypointArgument;
  readonly ERROR_NOT_A_WAYPOINT: JavaOpaque<"com.mojang.brigadier.exceptions.SimpleCommandExceptionType">;
  /** @throws com.mojang.brigadier.exceptions.CommandSyntaxException */
  getWaypoint(arg0: JavaOpaque<"com.mojang.brigadier.context.CommandContext", [j_net_minecraft_commands.CommandSourceStack]>, arg1: string): j_net_minecraft_world_waypoints.WaypointTransmitter;
}
