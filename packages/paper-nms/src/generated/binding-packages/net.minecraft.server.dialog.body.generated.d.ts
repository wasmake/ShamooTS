// Generated from paper-nms 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_minecraft_core from './net.minecraft.core.generated.js';
import type * as j_net_minecraft_network_chat from './net.minecraft.network.chat.generated.js';
import type * as j_net_minecraft_world_item from './net.minecraft.world.item.generated.js';

/** JVM interface net.minecraft.server.dialog.body.DialogBody. */
export interface DialogBodyMembers {
  mapCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [DialogBody]>;
}
export type DialogBody = DialogBodyMembers;
export interface DialogBodyStatics {
  readonly COMPACT_LIST_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [JavaList<DialogBody>]>;
  readonly DIALOG_BODY_CODEC: JavaOpaque<"com.mojang.serialization.Codec", [DialogBody]>;
}

/** JVM class net.minecraft.server.dialog.body.DialogBodyTypes. */
export interface DialogBodyTypesMembers {
}
export type DialogBodyTypes = DialogBodyTypesMembers;
export interface DialogBodyTypesStatics {
  new(): DialogBodyTypes;
  bootstrap(arg0: j_net_minecraft_core.Registry<JavaOpaque<"com.mojang.serialization.MapCodec", [DialogBody]>>): JavaOpaque<"com.mojang.serialization.MapCodec", [DialogBody]>;
}

/** JVM record net.minecraft.server.dialog.body.ItemBody. */
export interface ItemBodyMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, DialogBody];
  description(): JavaOptional<PlainMessage>;
  equals(arg0: object): boolean;
  hashCode(): number;
  height(): number;
  item(): j_net_minecraft_world_item.ItemStack;
  mapCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [ItemBody]>;
  showDecorations(): boolean;
  showTooltip(): boolean;
  toString(): string;
  width(): number;
}
export type ItemBody = ItemBodyMembers & JavaOpaque<"java.lang.Record"> & DialogBody;
export interface ItemBodyStatics {
  new(arg0: j_net_minecraft_world_item.ItemStack, arg1: JavaOptional<PlainMessage>, arg2: boolean, arg3: boolean, arg4: number, arg5: number): ItemBody;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [ItemBody]>;
}

/** JVM record net.minecraft.server.dialog.body.PlainMessage. */
export interface PlainMessageMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.Record">, DialogBody];
  contents(): j_net_minecraft_network_chat.Component;
  equals(arg0: object): boolean;
  hashCode(): number;
  mapCodec(): JavaOpaque<"com.mojang.serialization.MapCodec", [PlainMessage]>;
  toString(): string;
  width(): number;
}
export type PlainMessage = PlainMessageMembers & JavaOpaque<"java.lang.Record"> & DialogBody;
export interface PlainMessageStatics {
  new(arg0: j_net_minecraft_network_chat.Component, arg1: number): PlainMessage;
  readonly CODEC: JavaOpaque<"com.mojang.serialization.Codec", [PlainMessage]>;
  readonly DEFAULT_WIDTH: 200;
  readonly MAP_CODEC: JavaOpaque<"com.mojang.serialization.MapCodec", [PlainMessage]>;
}
