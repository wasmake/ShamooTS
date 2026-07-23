## Generated API Reference for "@shamoo/paper-packets"

Canonical paper-packets 1.21.8+paper.55+mache.2; 219 declarations.

### ClientboundClearDialogPacket

- Java: `net.minecraft.network.protocol.common.ClientboundClearDialogPacket`
- Kind: `class`
- Field: `INSTANCE: net.minecraft.network.protocol.common.ClientboundClearDialogPacket`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.common.ClientboundClearDialogPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ClientCommonPacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ClientboundClearDialogPacket>`

### ClientboundCustomPayloadPacket

- Java: `net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.protocol.common.custom.CustomPacketPayload)`
- Field: `CONFIG_STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket>`
- Field: `GAMEPLAY_STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ClientCommonPacketListener): void`
- Method: `hashCode(): int`
- Method: `payload(): net.minecraft.network.protocol.common.custom.CustomPacketPayload`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket>`

### ClientboundCustomReportDetailsPacket

- Java: `net.minecraft.network.protocol.common.ClientboundCustomReportDetailsPacket`
- Kind: `record`
- Constructor: `(arg0: java.util.Map<java.lang.String, java.lang.String>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.common.ClientboundCustomReportDetailsPacket>`
- Method: `details(): java.util.Map<java.lang.String, java.lang.String>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ClientCommonPacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ClientboundCustomReportDetailsPacket>`

### ClientboundDisconnectPacket

- Java: `net.minecraft.network.protocol.common.ClientboundDisconnectPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.chat.Component)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.common.ClientboundDisconnectPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ClientCommonPacketListener): void`
- Method: `hashCode(): int`
- Method: `reason(): net.minecraft.network.chat.Component`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ClientboundDisconnectPacket>`

### ClientboundKeepAlivePacket

- Java: `net.minecraft.network.protocol.common.ClientboundKeepAlivePacket`
- Kind: `class`
- Constructor: `(arg0: long)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.common.ClientboundKeepAlivePacket>`
- Method: `getId(): long`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ClientCommonPacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ClientboundKeepAlivePacket>`

### ClientboundPingPacket

- Java: `net.minecraft.network.protocol.common.ClientboundPingPacket`
- Kind: `class`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.common.ClientboundPingPacket>`
- Method: `getId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ClientCommonPacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ClientboundPingPacket>`

### ClientboundResourcePackPopPacket

- Java: `net.minecraft.network.protocol.common.ClientboundResourcePackPopPacket`
- Kind: `record`
- Constructor: `(arg0: java.util.Optional<java.util.UUID>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.common.ClientboundResourcePackPopPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ClientCommonPacketListener): void`
- Method: `hashCode(): int`
- Method: `id(): java.util.Optional<java.util.UUID>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ClientboundResourcePackPopPacket>`

### ClientboundResourcePackPushPacket

- Java: `net.minecraft.network.protocol.common.ClientboundResourcePackPushPacket`
- Kind: `record`
- Constructor: `(arg0: java.util.UUID, arg1: java.lang.String, arg2: java.lang.String, arg3: boolean, arg4: java.util.Optional<net.minecraft.network.chat.Component>)`
- Field: `MAX_HASH_LENGTH: int`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.common.ClientboundResourcePackPushPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ClientCommonPacketListener): void`
- Method: `hash(): java.lang.String`
- Method: `hashCode(): int`
- Method: `id(): java.util.UUID`
- Method: `prompt(): java.util.Optional<net.minecraft.network.chat.Component>`
- Method: `required(): boolean`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ClientboundResourcePackPushPacket>`
- Method: `url(): java.lang.String`

### ClientboundServerLinksPacket

- Java: `net.minecraft.network.protocol.common.ClientboundServerLinksPacket`
- Kind: `record`
- Constructor: `(arg0: java.util.List<net.minecraft.server.ServerLinks$UntrustedEntry>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.common.ClientboundServerLinksPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ClientCommonPacketListener): void`
- Method: `hashCode(): int`
- Method: `links(): java.util.List<net.minecraft.server.ServerLinks$UntrustedEntry>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ClientboundServerLinksPacket>`

### ClientboundShowDialogPacket

- Java: `net.minecraft.network.protocol.common.ClientboundShowDialogPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.core.Holder<net.minecraft.server.dialog.Dialog>)`
- Field: `CONTEXT_FREE_STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.common.ClientboundShowDialogPacket>`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.common.ClientboundShowDialogPacket>`
- Method: `dialog(): net.minecraft.core.Holder<net.minecraft.server.dialog.Dialog>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ClientCommonPacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ClientboundShowDialogPacket>`

### ClientboundStoreCookiePacket

- Java: `net.minecraft.network.protocol.common.ClientboundStoreCookiePacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.resources.ResourceLocation, arg1: byte[])`
- Field: `PAYLOAD_STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, byte[]>`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.common.ClientboundStoreCookiePacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ClientCommonPacketListener): void`
- Method: `hashCode(): int`
- Method: `key(): net.minecraft.resources.ResourceLocation`
- Method: `payload(): byte[]`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ClientboundStoreCookiePacket>`

### ClientboundTransferPacket

- Java: `net.minecraft.network.protocol.common.ClientboundTransferPacket`
- Kind: `record`
- Constructor: `(arg0: java.lang.String, arg1: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.common.ClientboundTransferPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ClientCommonPacketListener): void`
- Method: `hashCode(): int`
- Method: `host(): java.lang.String`
- Method: `port(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ClientboundTransferPacket>`

### ClientboundUpdateTagsPacket

- Java: `net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket`
- Kind: `class`
- Constructor: `(arg0: java.util.Map<net.minecraft.resources.ResourceKey<? extends net.minecraft.core.Registry<?>>, net.minecraft.tags.TagNetworkSerialization$NetworkPayload>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket>`
- Method: `getTags(): java.util.Map<net.minecraft.resources.ResourceKey<? extends net.minecraft.core.Registry<?>>, net.minecraft.tags.TagNetworkSerialization$NetworkPayload>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ClientCommonPacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket>`

### ServerboundClientInformationPacket

- Java: `net.minecraft.network.protocol.common.ServerboundClientInformationPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.server.level.ClientInformation)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.common.ServerboundClientInformationPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ServerCommonPacketListener): void`
- Method: `hashCode(): int`
- Method: `information(): net.minecraft.server.level.ClientInformation`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ServerboundClientInformationPacket>`

### ServerboundCustomClickActionPacket

- Java: `net.minecraft.network.protocol.common.ServerboundCustomClickActionPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.resources.ResourceLocation, arg1: java.util.Optional<net.minecraft.nbt.Tag>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.common.ServerboundCustomClickActionPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ServerCommonPacketListener): void`
- Method: `hashCode(): int`
- Method: `id(): net.minecraft.resources.ResourceLocation`
- Method: `payload(): java.util.Optional<net.minecraft.nbt.Tag>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ServerboundCustomClickActionPacket>`

### ServerboundCustomPayloadPacket

- Java: `net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.protocol.common.custom.CustomPacketPayload)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ServerCommonPacketListener): void`
- Method: `hashCode(): int`
- Method: `payload(): net.minecraft.network.protocol.common.custom.CustomPacketPayload`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket>`

### ServerboundKeepAlivePacket

- Java: `net.minecraft.network.protocol.common.ServerboundKeepAlivePacket`
- Kind: `class`
- Constructor: `(arg0: long)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.common.ServerboundKeepAlivePacket>`
- Method: `getId(): long`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ServerCommonPacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ServerboundKeepAlivePacket>`

### ServerboundPongPacket

- Java: `net.minecraft.network.protocol.common.ServerboundPongPacket`
- Kind: `class`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.common.ServerboundPongPacket>`
- Method: `getId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ServerCommonPacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ServerboundPongPacket>`

### ServerboundResourcePackPacket

- Java: `net.minecraft.network.protocol.common.ServerboundResourcePackPacket`
- Kind: `record`
- Constructor: `(arg0: java.util.UUID, arg1: net.minecraft.network.protocol.common.ServerboundResourcePackPacket$Action)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.common.ServerboundResourcePackPacket>`
- Method: `action(): net.minecraft.network.protocol.common.ServerboundResourcePackPacket$Action`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.common.ServerCommonPacketListener): void`
- Method: `hashCode(): int`
- Method: `id(): java.util.UUID`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.common.ServerboundResourcePackPacket>`

### ClientboundFinishConfigurationPacket

- Java: `net.minecraft.network.protocol.configuration.ClientboundFinishConfigurationPacket`
- Kind: `class`
- Field: `INSTANCE: net.minecraft.network.protocol.configuration.ClientboundFinishConfigurationPacket`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.configuration.ClientboundFinishConfigurationPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener): void`
- Method: `isTerminal(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.configuration.ClientboundFinishConfigurationPacket>`

### ClientboundRegistryDataPacket

- Java: `net.minecraft.network.protocol.configuration.ClientboundRegistryDataPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.resources.ResourceKey<? extends net.minecraft.core.Registry<?>>, arg1: java.util.List<net.minecraft.core.RegistrySynchronization$PackedRegistryEntry>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.configuration.ClientboundRegistryDataPacket>`
- Method: `entries(): java.util.List<net.minecraft.core.RegistrySynchronization$PackedRegistryEntry>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener): void`
- Method: `hashCode(): int`
- Method: `registry(): net.minecraft.resources.ResourceKey<? extends net.minecraft.core.Registry<?>>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.configuration.ClientboundRegistryDataPacket>`

### ClientboundResetChatPacket

- Java: `net.minecraft.network.protocol.configuration.ClientboundResetChatPacket`
- Kind: `class`
- Field: `INSTANCE: net.minecraft.network.protocol.configuration.ClientboundResetChatPacket`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.configuration.ClientboundResetChatPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.configuration.ClientboundResetChatPacket>`

### ClientboundSelectKnownPacks

- Java: `net.minecraft.network.protocol.configuration.ClientboundSelectKnownPacks`
- Kind: `record`
- Constructor: `(arg0: java.util.List<net.minecraft.server.packs.repository.KnownPack>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.configuration.ClientboundSelectKnownPacks>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener): void`
- Method: `hashCode(): int`
- Method: `knownPacks(): java.util.List<net.minecraft.server.packs.repository.KnownPack>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.configuration.ClientboundSelectKnownPacks>`

### ClientboundUpdateEnabledFeaturesPacket

- Java: `net.minecraft.network.protocol.configuration.ClientboundUpdateEnabledFeaturesPacket`
- Kind: `record`
- Constructor: `(arg0: java.util.Set<net.minecraft.resources.ResourceLocation>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.configuration.ClientboundUpdateEnabledFeaturesPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `features(): java.util.Set<net.minecraft.resources.ResourceLocation>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.configuration.ClientboundUpdateEnabledFeaturesPacket>`

### ServerboundFinishConfigurationPacket

- Java: `net.minecraft.network.protocol.configuration.ServerboundFinishConfigurationPacket`
- Kind: `class`
- Field: `INSTANCE: net.minecraft.network.protocol.configuration.ServerboundFinishConfigurationPacket`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.configuration.ServerboundFinishConfigurationPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener): void`
- Method: `isTerminal(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.configuration.ServerboundFinishConfigurationPacket>`

### ServerboundSelectKnownPacks

- Java: `net.minecraft.network.protocol.configuration.ServerboundSelectKnownPacks`
- Kind: `record`
- Constructor: `(arg0: java.util.List<net.minecraft.server.packs.repository.KnownPack>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.configuration.ServerboundSelectKnownPacks>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.configuration.ServerConfigurationPacketListener): void`
- Method: `hashCode(): int`
- Method: `knownPacks(): java.util.List<net.minecraft.server.packs.repository.KnownPack>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.configuration.ServerboundSelectKnownPacks>`

### ClientboundCookieRequestPacket

- Java: `net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.resources.ResourceLocation)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.cookie.ClientCookiePacketListener): void`
- Method: `hashCode(): int`
- Method: `key(): net.minecraft.resources.ResourceLocation`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket>`

### ServerboundCookieResponsePacket

- Java: `net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.resources.ResourceLocation, arg1: byte[])`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.cookie.ServerCookiePacketListener): void`
- Method: `hashCode(): int`
- Method: `key(): net.minecraft.resources.ResourceLocation`
- Method: `payload(): byte[]`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket>`

### ClientboundAddEntityPacket

- Java: `net.minecraft.network.protocol.game.ClientboundAddEntityPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: java.util.UUID, arg2: double, arg3: double, arg4: double, arg5: float, arg6: float, arg7: net.minecraft.world.entity.EntityType<?>, arg8: int, arg9: net.minecraft.world.phys.Vec3, arg10: double)`
- Constructor: `(arg0: net.minecraft.world.entity.Entity, arg1: int, arg2: net.minecraft.core.BlockPos)`
- Constructor: `(arg0: net.minecraft.world.entity.Entity, arg1: net.minecraft.server.level.ServerEntity)`
- Constructor: `(arg0: net.minecraft.world.entity.Entity, arg1: net.minecraft.server.level.ServerEntity, arg2: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundAddEntityPacket>`
- Method: `getData(): int`
- Method: `getId(): int`
- Method: `getType(): net.minecraft.world.entity.EntityType<?>`
- Method: `getUUID(): java.util.UUID`
- Method: `getX(): double`
- Method: `getXRot(): float`
- Method: `getXa(): double`
- Method: `getY(): double`
- Method: `getYHeadRot(): float`
- Method: `getYRot(): float`
- Method: `getYa(): double`
- Method: `getZ(): double`
- Method: `getZa(): double`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundAddEntityPacket>`

### ClientboundAnimatePacket

- Java: `net.minecraft.network.protocol.game.ClientboundAnimatePacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.entity.Entity, arg1: int)`
- Field: `CRITICAL_HIT: int`
- Field: `MAGIC_CRITICAL_HIT: int`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundAnimatePacket>`
- Field: `SWING_MAIN_HAND: int`
- Field: `SWING_OFF_HAND: int`
- Field: `WAKE_UP: int`
- Method: `getAction(): int`
- Method: `getId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundAnimatePacket>`

### ClientboundAwardStatsPacket

- Java: `net.minecraft.network.protocol.game.ClientboundAwardStatsPacket`
- Kind: `record`
- Constructor: `(arg0: it.unimi.dsi.fastutil.objects.Object2IntMap<net.minecraft.stats.Stat<?>>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundAwardStatsPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `stats(): it.unimi.dsi.fastutil.objects.Object2IntMap<net.minecraft.stats.Stat<?>>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundAwardStatsPacket>`

### ClientboundBlockChangedAckPacket

- Java: `net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket`
- Kind: `record`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `sequence(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket>`

### ClientboundBlockDestructionPacket

- Java: `net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: net.minecraft.core.BlockPos, arg2: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket>`
- Method: `getId(): int`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `getProgress(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket>`

### ClientboundBlockEntityDataPacket

- Java: `net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: net.minecraft.world.level.block.entity.BlockEntityType<?>, arg2: net.minecraft.nbt.CompoundTag)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket>`
- Method: `create(arg0: net.minecraft.world.level.block.entity.BlockEntity): net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket`
- Method: `create(arg0: net.minecraft.world.level.block.entity.BlockEntity, arg1: java.util.function.BiFunction<net.minecraft.world.level.block.entity.BlockEntity, net.minecraft.core.RegistryAccess, net.minecraft.nbt.CompoundTag>): net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `getTag(): net.minecraft.nbt.CompoundTag`
- Method: `getType(): net.minecraft.world.level.block.entity.BlockEntityType<?>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket>`

### ClientboundBlockEventPacket

- Java: `net.minecraft.network.protocol.game.ClientboundBlockEventPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: net.minecraft.world.level.block.Block, arg2: int, arg3: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundBlockEventPacket>`
- Method: `getB0(): int`
- Method: `getB1(): int`
- Method: `getBlock(): net.minecraft.world.level.block.Block`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundBlockEventPacket>`

### ClientboundBlockUpdatePacket

- Java: `net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: net.minecraft.world.level.block.state.BlockState)`
- Constructor: `(arg0: net.minecraft.world.level.BlockGetter, arg1: net.minecraft.core.BlockPos)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket>`
- Field: `blockState: net.minecraft.world.level.block.state.BlockState`
- Method: `getBlockState(): net.minecraft.world.level.block.state.BlockState`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket>`

### ClientboundBossEventPacket

- Java: `net.minecraft.network.protocol.game.ClientboundBossEventPacket`
- Kind: `class`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundBossEventPacket>`
- Method: `createAddPacket(arg0: net.minecraft.world.BossEvent): net.minecraft.network.protocol.game.ClientboundBossEventPacket`
- Method: `createRemovePacket(arg0: java.util.UUID): net.minecraft.network.protocol.game.ClientboundBossEventPacket`
- Method: `createUpdateNamePacket(arg0: net.minecraft.world.BossEvent): net.minecraft.network.protocol.game.ClientboundBossEventPacket`
- Method: `createUpdateProgressPacket(arg0: net.minecraft.world.BossEvent): net.minecraft.network.protocol.game.ClientboundBossEventPacket`
- Method: `createUpdatePropertiesPacket(arg0: net.minecraft.world.BossEvent): net.minecraft.network.protocol.game.ClientboundBossEventPacket`
- Method: `createUpdateStylePacket(arg0: net.minecraft.world.BossEvent): net.minecraft.network.protocol.game.ClientboundBossEventPacket`
- Method: `dispatch(arg0: net.minecraft.network.protocol.game.ClientboundBossEventPacket$Handler): void`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundBossEventPacket>`

### ClientboundBundleDelimiterPacket

- Java: `net.minecraft.network.protocol.game.ClientboundBundleDelimiterPacket`
- Kind: `class`
- Constructor: `()`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundBundleDelimiterPacket>`

### ClientboundChangeDifficultyPacket

- Java: `net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.world.Difficulty, arg1: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket>`
- Method: `difficulty(): net.minecraft.world.Difficulty`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `locked(): boolean`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket>`

### ClientboundChunkBatchFinishedPacket

- Java: `net.minecraft.network.protocol.game.ClientboundChunkBatchFinishedPacket`
- Kind: `record`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundChunkBatchFinishedPacket>`
- Method: `batchSize(): int`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundChunkBatchFinishedPacket>`

### ClientboundChunkBatchStartPacket

- Java: `net.minecraft.network.protocol.game.ClientboundChunkBatchStartPacket`
- Kind: `class`
- Field: `INSTANCE: net.minecraft.network.protocol.game.ClientboundChunkBatchStartPacket`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ClientboundChunkBatchStartPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundChunkBatchStartPacket>`

### ClientboundChunksBiomesPacket

- Java: `net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket`
- Kind: `record`
- Constructor: `(arg0: java.util.List<net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket$ChunkBiomeData>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket>`
- Method: `chunkBiomeData(): java.util.List<net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket$ChunkBiomeData>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `forChunks(arg0: java.util.List<net.minecraft.world.level.chunk.LevelChunk>): net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket>`

### ClientboundClearTitlesPacket

- Java: `net.minecraft.network.protocol.game.ClientboundClearTitlesPacket`
- Kind: `class`
- Constructor: `(arg0: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundClearTitlesPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `shouldResetTimes(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundClearTitlesPacket>`

### ClientboundCommandSuggestionsPacket

- Java: `net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: int, arg2: int, arg3: java.util.List<net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket$Entry>)`
- Constructor: `(arg0: int, arg1: com.mojang.brigadier.suggestion.Suggestions)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `id(): int`
- Method: `length(): int`
- Method: `start(): int`
- Method: `suggestions(): java.util.List<net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket$Entry>`
- Method: `toString(): java.lang.String`
- Method: `toSuggestions(): com.mojang.brigadier.suggestion.Suggestions`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket>`

### ClientboundCommandsPacket

- Java: `net.minecraft.network.protocol.game.ClientboundCommandsPacket`
- Kind: `class`
- Constructor: `(arg0: com.mojang.brigadier.tree.RootCommandNode<S>, arg1: net.minecraft.network.protocol.game.ClientboundCommandsPacket$NodeInspector<S>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundCommandsPacket>`
- Method: `getRoot(arg0: net.minecraft.commands.CommandBuildContext, arg1: net.minecraft.network.protocol.game.ClientboundCommandsPacket$NodeBuilder<S>): com.mojang.brigadier.tree.RootCommandNode<S>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundCommandsPacket>`

### ClientboundContainerClosePacket

- Java: `net.minecraft.network.protocol.game.ClientboundContainerClosePacket`
- Kind: `class`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundContainerClosePacket>`
- Method: `getContainerId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundContainerClosePacket>`

### ClientboundContainerSetContentPacket

- Java: `net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: int, arg2: java.util.List<net.minecraft.world.item.ItemStack>, arg3: net.minecraft.world.item.ItemStack)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket>`
- Method: `carriedItem(): net.minecraft.world.item.ItemStack`
- Method: `containerId(): int`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hasLargePacketFallback(): boolean`
- Method: `hashCode(): int`
- Method: `items(): java.util.List<net.minecraft.world.item.ItemStack>`
- Method: `packetTooLarge(arg0: net.minecraft.network.Connection): boolean`
- Method: `stateId(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket>`

### ClientboundContainerSetDataPacket

- Java: `net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: int, arg2: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket>`
- Method: `getContainerId(): int`
- Method: `getId(): int`
- Method: `getValue(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket>`

### ClientboundContainerSetSlotPacket

- Java: `net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: int, arg2: int, arg3: net.minecraft.world.item.ItemStack)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket>`
- Method: `getContainerId(): int`
- Method: `getItem(): net.minecraft.world.item.ItemStack`
- Method: `getSlot(): int`
- Method: `getStateId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket>`

### ClientboundCooldownPacket

- Java: `net.minecraft.network.protocol.game.ClientboundCooldownPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.resources.ResourceLocation, arg1: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundCooldownPacket>`
- Method: `cooldownGroup(): net.minecraft.resources.ResourceLocation`
- Method: `duration(): int`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundCooldownPacket>`

### ClientboundCustomChatCompletionsPacket

- Java: `net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket$Action, arg1: java.util.List<java.lang.String>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket>`
- Method: `action(): net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket$Action`
- Method: `entries(): java.util.List<java.lang.String>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket>`

### ClientboundDamageEventPacket

- Java: `net.minecraft.network.protocol.game.ClientboundDamageEventPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: net.minecraft.core.Holder<net.minecraft.world.damagesource.DamageType>, arg2: int, arg3: int, arg4: java.util.Optional<net.minecraft.world.phys.Vec3>)`
- Constructor: `(arg0: net.minecraft.world.entity.Entity, arg1: net.minecraft.world.damagesource.DamageSource)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundDamageEventPacket>`
- Method: `entityId(): int`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getSource(arg0: net.minecraft.world.level.Level): net.minecraft.world.damagesource.DamageSource`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `sourceCauseId(): int`
- Method: `sourceDirectId(): int`
- Method: `sourcePosition(): java.util.Optional<net.minecraft.world.phys.Vec3>`
- Method: `sourceType(): net.minecraft.core.Holder<net.minecraft.world.damagesource.DamageType>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundDamageEventPacket>`

### ClientboundDebugSamplePacket

- Java: `net.minecraft.network.protocol.game.ClientboundDebugSamplePacket`
- Kind: `record`
- Constructor: `(arg0: long[], arg1: net.minecraft.util.debugchart.RemoteDebugSampleType)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundDebugSamplePacket>`
- Method: `debugSampleType(): net.minecraft.util.debugchart.RemoteDebugSampleType`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `sample(): long[]`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundDebugSamplePacket>`

### ClientboundDeleteChatPacket

- Java: `net.minecraft.network.protocol.game.ClientboundDeleteChatPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.chat.MessageSignature$Packed)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundDeleteChatPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `messageSignature(): net.minecraft.network.chat.MessageSignature$Packed`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundDeleteChatPacket>`

### ClientboundDisguisedChatPacket

- Java: `net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.chat.Component, arg1: net.minecraft.network.chat.ChatType$Bound)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket>`
- Method: `chatType(): net.minecraft.network.chat.ChatType$Bound`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `isSkippable(): boolean`
- Method: `message(): net.minecraft.network.chat.Component`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket>`

### ClientboundEntityEventPacket

- Java: `net.minecraft.network.protocol.game.ClientboundEntityEventPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.entity.Entity, arg1: byte)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundEntityEventPacket>`
- Method: `getEntity(arg0: net.minecraft.world.level.Level): net.minecraft.world.entity.Entity`
- Method: `getEventId(): byte`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundEntityEventPacket>`

### ClientboundEntityPositionSyncPacket

- Java: `net.minecraft.network.protocol.game.ClientboundEntityPositionSyncPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: net.minecraft.world.entity.PositionMoveRotation, arg2: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundEntityPositionSyncPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `id(): int`
- Method: `of(arg0: net.minecraft.world.entity.Entity): net.minecraft.network.protocol.game.ClientboundEntityPositionSyncPacket`
- Method: `onGround(): boolean`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundEntityPositionSyncPacket>`
- Method: `values(): net.minecraft.world.entity.PositionMoveRotation`

### ClientboundExplodePacket

- Java: `net.minecraft.network.protocol.game.ClientboundExplodePacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.world.phys.Vec3, arg1: java.util.Optional<net.minecraft.world.phys.Vec3>, arg2: net.minecraft.core.particles.ParticleOptions, arg3: net.minecraft.core.Holder<net.minecraft.sounds.SoundEvent>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundExplodePacket>`
- Method: `center(): net.minecraft.world.phys.Vec3`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `explosionParticle(): net.minecraft.core.particles.ParticleOptions`
- Method: `explosionSound(): net.minecraft.core.Holder<net.minecraft.sounds.SoundEvent>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `playerKnockback(): java.util.Optional<net.minecraft.world.phys.Vec3>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundExplodePacket>`

### ClientboundForgetLevelChunkPacket

- Java: `net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.world.level.ChunkPos)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `pos(): net.minecraft.world.level.ChunkPos`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket>`

### ClientboundGameEventPacket

- Java: `net.minecraft.network.protocol.game.ClientboundGameEventPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type, arg1: float)`
- Field: `CHANGE_GAME_MODE: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Field: `DEMO_EVENT: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Field: `DEMO_PARAM_HINT_1: int`
- Field: `DEMO_PARAM_HINT_2: int`
- Field: `DEMO_PARAM_HINT_3: int`
- Field: `DEMO_PARAM_HINT_4: int`
- Field: `DEMO_PARAM_INTRO: int`
- Field: `GUARDIAN_ELDER_EFFECT: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Field: `IMMEDIATE_RESPAWN: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Field: `LEVEL_CHUNKS_LOAD_START: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Field: `LIMITED_CRAFTING: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Field: `NO_RESPAWN_BLOCK_AVAILABLE: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Field: `PLAY_ARROW_HIT_SOUND: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Field: `PUFFER_FISH_STING: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Field: `RAIN_LEVEL_CHANGE: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Field: `START_RAINING: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Field: `STOP_RAINING: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundGameEventPacket>`
- Field: `THUNDER_LEVEL_CHANGE: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Field: `WIN_GAME: net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Method: `getEvent(): net.minecraft.network.protocol.game.ClientboundGameEventPacket$Type`
- Method: `getParam(): float`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundGameEventPacket>`

### ClientboundHorseScreenOpenPacket

- Java: `net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: int, arg2: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket>`
- Method: `getContainerId(): int`
- Method: `getEntityId(): int`
- Method: `getInventoryColumns(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket>`

### ClientboundHurtAnimationPacket

- Java: `net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: float)`
- Constructor: `(arg0: net.minecraft.world.entity.LivingEntity)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `id(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket>`
- Method: `yaw(): float`

### ClientboundInitializeBorderPacket

- Java: `net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.level.border.WorldBorder)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket>`
- Method: `getLerpTime(): long`
- Method: `getNewAbsoluteMaxSize(): int`
- Method: `getNewCenterX(): double`
- Method: `getNewCenterZ(): double`
- Method: `getNewSize(): double`
- Method: `getOldSize(): double`
- Method: `getWarningBlocks(): int`
- Method: `getWarningTime(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket>`

### ClientboundLevelChunkWithLightPacket

- Java: `net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.level.chunk.LevelChunk, arg1: net.minecraft.world.level.lighting.LevelLightEngine, arg2: java.util.BitSet, arg3: java.util.BitSet)`
- Constructor: `(arg0: net.minecraft.world.level.chunk.LevelChunk, arg1: net.minecraft.world.level.lighting.LevelLightEngine, arg2: java.util.BitSet, arg3: java.util.BitSet, arg4: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket>`
- Method: `getChunkData(): net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData`
- Method: `getExtraPackets(): java.util.List<net.minecraft.network.protocol.Packet<?>>`
- Method: `getLightData(): net.minecraft.network.protocol.game.ClientboundLightUpdatePacketData`
- Method: `getX(): int`
- Method: `getZ(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `isReady(): boolean`
- Method: `setReady(arg0: boolean): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket>`

### ClientboundLevelEventPacket

- Java: `net.minecraft.network.protocol.game.ClientboundLevelEventPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: net.minecraft.core.BlockPos, arg2: int, arg3: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundLevelEventPacket>`
- Method: `getData(): int`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `getType(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `isGlobalEvent(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundLevelEventPacket>`

### ClientboundLevelParticlesPacket

- Java: `net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket`
- Kind: `class`
- Constructor: `(arg0: T, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: float, arg7: float, arg8: float, arg9: float, arg10: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket>`
- Method: `alwaysShow(): boolean`
- Method: `getCount(): int`
- Method: `getMaxSpeed(): float`
- Method: `getParticle(): net.minecraft.core.particles.ParticleOptions`
- Method: `getX(): double`
- Method: `getXDist(): float`
- Method: `getY(): double`
- Method: `getYDist(): float`
- Method: `getZ(): double`
- Method: `getZDist(): float`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `isOverrideLimiter(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket>`

### ClientboundLightUpdatePacket

- Java: `net.minecraft.network.protocol.game.ClientboundLightUpdatePacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.level.ChunkPos, arg1: net.minecraft.world.level.lighting.LevelLightEngine, arg2: java.util.BitSet, arg3: java.util.BitSet)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundLightUpdatePacket>`
- Method: `getLightData(): net.minecraft.network.protocol.game.ClientboundLightUpdatePacketData`
- Method: `getX(): int`
- Method: `getZ(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundLightUpdatePacket>`

### ClientboundLoginPacket

- Java: `net.minecraft.network.protocol.game.ClientboundLoginPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: boolean, arg2: java.util.Set<net.minecraft.resources.ResourceKey<net.minecraft.world.level.Level>>, arg3: int, arg4: int, arg5: int, arg6: boolean, arg7: boolean, arg8: boolean, arg9: net.minecraft.network.protocol.game.CommonPlayerSpawnInfo, arg10: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundLoginPacket>`
- Method: `chunkRadius(): int`
- Method: `commonPlayerSpawnInfo(): net.minecraft.network.protocol.game.CommonPlayerSpawnInfo`
- Method: `doLimitedCrafting(): boolean`
- Method: `enforcesSecureChat(): boolean`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hardcore(): boolean`
- Method: `hashCode(): int`
- Method: `levels(): java.util.Set<net.minecraft.resources.ResourceKey<net.minecraft.world.level.Level>>`
- Method: `maxPlayers(): int`
- Method: `playerId(): int`
- Method: `reducedDebugInfo(): boolean`
- Method: `showDeathScreen(): boolean`
- Method: `simulationDistance(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundLoginPacket>`

### ClientboundMapItemDataPacket

- Java: `net.minecraft.network.protocol.game.ClientboundMapItemDataPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.world.level.saveddata.maps.MapId, arg1: byte, arg2: boolean, arg3: java.util.Collection<net.minecraft.world.level.saveddata.maps.MapDecoration>, arg4: net.minecraft.world.level.saveddata.maps.MapItemSavedData$MapPatch)`
- Constructor: `(arg0: net.minecraft.world.level.saveddata.maps.MapId, arg1: byte, arg2: boolean, arg3: java.util.Optional<java.util.List<net.minecraft.world.level.saveddata.maps.MapDecoration>>, arg4: java.util.Optional<net.minecraft.world.level.saveddata.maps.MapItemSavedData$MapPatch>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundMapItemDataPacket>`
- Method: `applyToMap(arg0: net.minecraft.world.level.saveddata.maps.MapItemSavedData): void`
- Method: `colorPatch(): java.util.Optional<net.minecraft.world.level.saveddata.maps.MapItemSavedData$MapPatch>`
- Method: `decorations(): java.util.Optional<java.util.List<net.minecraft.world.level.saveddata.maps.MapDecoration>>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `locked(): boolean`
- Method: `mapId(): net.minecraft.world.level.saveddata.maps.MapId`
- Method: `scale(): byte`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundMapItemDataPacket>`

### ClientboundMerchantOffersPacket

- Java: `net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: net.minecraft.world.item.trading.MerchantOffers, arg2: int, arg3: int, arg4: boolean, arg5: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket>`
- Method: `canRestock(): boolean`
- Method: `getContainerId(): int`
- Method: `getOffers(): net.minecraft.world.item.trading.MerchantOffers`
- Method: `getVillagerLevel(): int`
- Method: `getVillagerXp(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `showProgress(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket>`

### ClientboundMoveEntityPacket_Pos

- Java: `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Pos`
- Kind: `class`
- Constructor: `(arg0: int, arg1: short, arg2: short, arg3: short, arg4: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Pos>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Pos>`

### ClientboundMoveEntityPacket_PosRot

- Java: `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$PosRot`
- Kind: `class`
- Constructor: `(arg0: int, arg1: short, arg2: short, arg3: short, arg4: byte, arg5: byte, arg6: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$PosRot>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$PosRot>`

### ClientboundMoveEntityPacket_Rot

- Java: `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Rot`
- Kind: `class`
- Constructor: `(arg0: int, arg1: byte, arg2: byte, arg3: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Rot>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Rot>`

### ClientboundMoveMinecartPacket

- Java: `net.minecraft.network.protocol.game.ClientboundMoveMinecartPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: java.util.List<net.minecraft.world.entity.vehicle.NewMinecartBehavior$MinecartStep>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundMoveMinecartPacket>`
- Method: `entityId(): int`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getEntity(arg0: net.minecraft.world.level.Level): net.minecraft.world.entity.Entity`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `lerpSteps(): java.util.List<net.minecraft.world.entity.vehicle.NewMinecartBehavior$MinecartStep>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundMoveMinecartPacket>`

### ClientboundMoveVehiclePacket

- Java: `net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.world.phys.Vec3, arg1: float, arg2: float)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `fromEntity(arg0: net.minecraft.world.entity.Entity): net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `position(): net.minecraft.world.phys.Vec3`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket>`
- Method: `xRot(): float`
- Method: `yRot(): float`

### ClientboundOpenBookPacket

- Java: `net.minecraft.network.protocol.game.ClientboundOpenBookPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.InteractionHand)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundOpenBookPacket>`
- Method: `getHand(): net.minecraft.world.InteractionHand`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundOpenBookPacket>`

### ClientboundOpenScreenPacket

- Java: `net.minecraft.network.protocol.game.ClientboundOpenScreenPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: net.minecraft.world.inventory.MenuType<?>, arg2: net.minecraft.network.chat.Component)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundOpenScreenPacket>`
- Method: `getContainerId(): int`
- Method: `getTitle(): net.minecraft.network.chat.Component`
- Method: `getType(): net.minecraft.world.inventory.MenuType<?>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundOpenScreenPacket>`

### ClientboundOpenSignEditorPacket

- Java: `net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket>`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `isFrontText(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket>`

### ClientboundPlaceGhostRecipePacket

- Java: `net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: net.minecraft.world.item.crafting.display.RecipeDisplay)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket>`
- Method: `containerId(): int`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `recipeDisplay(): net.minecraft.world.item.crafting.display.RecipeDisplay`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket>`

### ClientboundPlayerAbilitiesPacket

- Java: `net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.entity.player.Abilities)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket>`
- Method: `canFly(): boolean`
- Method: `canInstabuild(): boolean`
- Method: `getFlyingSpeed(): float`
- Method: `getWalkingSpeed(): float`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `isFlying(): boolean`
- Method: `isInvulnerable(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket>`

### ClientboundPlayerChatPacket

- Java: `net.minecraft.network.protocol.game.ClientboundPlayerChatPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: java.util.UUID, arg2: int, arg3: net.minecraft.network.chat.MessageSignature, arg4: net.minecraft.network.chat.SignedMessageBody$Packed, arg5: net.minecraft.network.chat.Component, arg6: net.minecraft.network.chat.FilterMask, arg7: net.minecraft.network.chat.ChatType$Bound)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundPlayerChatPacket>`
- Method: `body(): net.minecraft.network.chat.SignedMessageBody$Packed`
- Method: `chatType(): net.minecraft.network.chat.ChatType$Bound`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `filterMask(): net.minecraft.network.chat.FilterMask`
- Method: `globalIndex(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `index(): int`
- Method: `isSkippable(): boolean`
- Method: `sender(): java.util.UUID`
- Method: `signature(): net.minecraft.network.chat.MessageSignature`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundPlayerChatPacket>`
- Method: `unsignedContent(): net.minecraft.network.chat.Component`

### ClientboundPlayerCombatEndPacket

- Java: `net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket`
- Kind: `class`
- Constructor: `(arg0: int)`
- Constructor: `(arg0: net.minecraft.world.damagesource.CombatTracker)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket>`

### ClientboundPlayerCombatEnterPacket

- Java: `net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket`
- Kind: `class`
- Field: `INSTANCE: net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket>`

### ClientboundPlayerCombatKillPacket

- Java: `net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: net.minecraft.network.chat.Component)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `isSkippable(): boolean`
- Method: `message(): net.minecraft.network.chat.Component`
- Method: `playerId(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket>`

### ClientboundPlayerInfoRemovePacket

- Java: `net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket`
- Kind: `record`
- Constructor: `(arg0: java.util.List<java.util.UUID>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `profileIds(): java.util.List<java.util.UUID>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket>`

### ClientboundPlayerInfoUpdatePacket

- Java: `net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket`
- Kind: `class`
- Constructor: `(arg0: java.util.EnumSet<net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action>, arg1: java.util.Collection<net.minecraft.server.level.ServerPlayer>)`
- Constructor: `(arg0: java.util.EnumSet<net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action>, arg1: java.util.List<net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry>)`
- Constructor: `(arg0: java.util.EnumSet<net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action>, arg1: net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry)`
- Constructor: `(arg0: net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action, arg1: net.minecraft.server.level.ServerPlayer)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket>`
- Method: `actions(): java.util.EnumSet<net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Action>`
- Method: `createPlayerInitializing(arg0: java.util.Collection<net.minecraft.server.level.ServerPlayer>): net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket`
- Method: `createPlayerInitializing(arg0: java.util.Collection<net.minecraft.server.level.ServerPlayer>, arg1: net.minecraft.server.level.ServerPlayer): net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket`
- Method: `createSinglePlayerInitializing(arg0: net.minecraft.server.level.ServerPlayer, arg1: boolean): net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket`
- Method: `entries(): java.util.List<net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `newEntries(): java.util.List<net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket$Entry>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket>`
- Method: `updateListed(arg0: java.util.UUID, arg1: boolean): net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket`

### ClientboundPlayerLookAtPacket

- Java: `net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.commands.arguments.EntityAnchorArgument$Anchor, arg1: double, arg2: double, arg3: double)`
- Constructor: `(arg0: net.minecraft.commands.arguments.EntityAnchorArgument$Anchor, arg1: net.minecraft.world.entity.Entity, arg2: net.minecraft.commands.arguments.EntityAnchorArgument$Anchor)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket>`
- Method: `getFromAnchor(): net.minecraft.commands.arguments.EntityAnchorArgument$Anchor`
- Method: `getPosition(arg0: net.minecraft.world.level.Level): net.minecraft.world.phys.Vec3`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket>`

### ClientboundPlayerPositionPacket

- Java: `net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: net.minecraft.world.entity.PositionMoveRotation, arg2: java.util.Set<net.minecraft.world.entity.Relative>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket>`
- Method: `change(): net.minecraft.world.entity.PositionMoveRotation`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `id(): int`
- Method: `of(arg0: int, arg1: net.minecraft.world.entity.PositionMoveRotation, arg2: java.util.Set<net.minecraft.world.entity.Relative>): net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket`
- Method: `relatives(): java.util.Set<net.minecraft.world.entity.Relative>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket>`

### ClientboundPlayerRotationPacket

- Java: `net.minecraft.network.protocol.game.ClientboundPlayerRotationPacket`
- Kind: `record`
- Constructor: `(arg0: float, arg1: float)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundPlayerRotationPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundPlayerRotationPacket>`
- Method: `xRot(): float`
- Method: `yRot(): float`

### ClientboundProjectilePowerPacket

- Java: `net.minecraft.network.protocol.game.ClientboundProjectilePowerPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: double)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundProjectilePowerPacket>`
- Method: `getAccelerationPower(): double`
- Method: `getId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundProjectilePowerPacket>`

### ClientboundRecipeBookAddPacket

- Java: `net.minecraft.network.protocol.game.ClientboundRecipeBookAddPacket`
- Kind: `record`
- Constructor: `(arg0: java.util.List<net.minecraft.network.protocol.game.ClientboundRecipeBookAddPacket$Entry>, arg1: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundRecipeBookAddPacket>`
- Method: `entries(): java.util.List<net.minecraft.network.protocol.game.ClientboundRecipeBookAddPacket$Entry>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `replace(): boolean`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundRecipeBookAddPacket>`

### ClientboundRecipeBookRemovePacket

- Java: `net.minecraft.network.protocol.game.ClientboundRecipeBookRemovePacket`
- Kind: `record`
- Constructor: `(arg0: java.util.List<net.minecraft.world.item.crafting.display.RecipeDisplayId>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ClientboundRecipeBookRemovePacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `recipes(): java.util.List<net.minecraft.world.item.crafting.display.RecipeDisplayId>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundRecipeBookRemovePacket>`

### ClientboundRecipeBookSettingsPacket

- Java: `net.minecraft.network.protocol.game.ClientboundRecipeBookSettingsPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.stats.RecipeBookSettings)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundRecipeBookSettingsPacket>`
- Method: `bookSettings(): net.minecraft.stats.RecipeBookSettings`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundRecipeBookSettingsPacket>`

### ClientboundRemoveEntitiesPacket

- Java: `net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket`
- Kind: `class`
- Constructor: `(arg0: it.unimi.dsi.fastutil.ints.IntList)`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket>`
- Method: `getEntityIds(): it.unimi.dsi.fastutil.ints.IntList`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket>`

### ClientboundRemoveMobEffectPacket

- Java: `net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: net.minecraft.core.Holder<net.minecraft.world.effect.MobEffect>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket>`
- Method: `effect(): net.minecraft.core.Holder<net.minecraft.world.effect.MobEffect>`
- Method: `entityId(): int`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getEntity(arg0: net.minecraft.world.level.Level): net.minecraft.world.entity.Entity`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket>`

### ClientboundResetScorePacket

- Java: `net.minecraft.network.protocol.game.ClientboundResetScorePacket`
- Kind: `record`
- Constructor: `(arg0: java.lang.String, arg1: java.lang.String)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundResetScorePacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `objectiveName(): java.lang.String`
- Method: `owner(): java.lang.String`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundResetScorePacket>`

### ClientboundRespawnPacket

- Java: `net.minecraft.network.protocol.game.ClientboundRespawnPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.protocol.game.CommonPlayerSpawnInfo, arg1: byte)`
- Field: `KEEP_ALL_DATA: byte`
- Field: `KEEP_ATTRIBUTE_MODIFIERS: byte`
- Field: `KEEP_ENTITY_DATA: byte`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundRespawnPacket>`
- Method: `commonPlayerSpawnInfo(): net.minecraft.network.protocol.game.CommonPlayerSpawnInfo`
- Method: `dataToKeep(): byte`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `shouldKeep(arg0: byte): boolean`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundRespawnPacket>`

### ClientboundRotateHeadPacket

- Java: `net.minecraft.network.protocol.game.ClientboundRotateHeadPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.entity.Entity, arg1: byte)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundRotateHeadPacket>`
- Method: `getEntity(arg0: net.minecraft.world.level.Level): net.minecraft.world.entity.Entity`
- Method: `getYHeadRot(): float`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundRotateHeadPacket>`

### ClientboundSectionBlocksUpdatePacket

- Java: `net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.core.SectionPos, arg1: it.unimi.dsi.fastutil.shorts.Short2ObjectMap<net.minecraft.world.level.block.state.BlockState>)`
- Constructor: `(arg0: net.minecraft.core.SectionPos, arg1: it.unimi.dsi.fastutil.shorts.ShortSet, arg2: net.minecraft.world.level.chunk.LevelChunkSection)`
- Constructor: `(arg0: net.minecraft.core.SectionPos, arg1: it.unimi.dsi.fastutil.shorts.ShortSet, arg2: net.minecraft.world.level.block.state.BlockState[])`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `runUpdates(arg0: java.util.function.BiConsumer<net.minecraft.core.BlockPos, net.minecraft.world.level.block.state.BlockState>): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket>`

### ClientboundSelectAdvancementsTabPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.resources.ResourceLocation)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket>`
- Method: `getTab(): net.minecraft.resources.ResourceLocation`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket>`

### ClientboundServerDataPacket

- Java: `net.minecraft.network.protocol.game.ClientboundServerDataPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.chat.Component, arg1: java.util.Optional<byte[]>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ClientboundServerDataPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `iconBytes(): java.util.Optional<byte[]>`
- Method: `motd(): net.minecraft.network.chat.Component`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundServerDataPacket>`

### ClientboundSetActionBarTextPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.chat.Component)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `text(): net.minecraft.network.chat.Component`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket>`

### ClientboundSetBorderCenterPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.level.border.WorldBorder)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket>`
- Method: `getNewCenterX(): double`
- Method: `getNewCenterZ(): double`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket>`

### ClientboundSetBorderLerpSizePacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.level.border.WorldBorder)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket>`
- Method: `getLerpTime(): long`
- Method: `getNewSize(): double`
- Method: `getOldSize(): double`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket>`

### ClientboundSetBorderSizePacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.level.border.WorldBorder)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket>`
- Method: `getSize(): double`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket>`

### ClientboundSetBorderWarningDelayPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.level.border.WorldBorder)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket>`
- Method: `getWarningDelay(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket>`

### ClientboundSetBorderWarningDistancePacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.level.border.WorldBorder)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket>`
- Method: `getWarningBlocks(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket>`

### ClientboundSetCameraPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetCameraPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.entity.Entity)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetCameraPacket>`
- Method: `getEntity(arg0: net.minecraft.world.level.Level): net.minecraft.world.entity.Entity`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetCameraPacket>`

### ClientboundSetChunkCacheCenterPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket>`
- Method: `getX(): int`
- Method: `getZ(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket>`

### ClientboundSetChunkCacheRadiusPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket`
- Kind: `class`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket>`
- Method: `getRadius(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket>`

### ClientboundSetCursorItemPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetCursorItemPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.world.item.ItemStack)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetCursorItemPacket>`
- Method: `contents(): net.minecraft.world.item.ItemStack`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetCursorItemPacket>`

### ClientboundSetDefaultSpawnPositionPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: float)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket>`
- Field: `pos: net.minecraft.core.BlockPos`
- Method: `getAngle(): float`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket>`

### ClientboundSetDisplayObjectivePacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.scores.DisplaySlot, arg1: net.minecraft.world.scores.Objective)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket>`
- Method: `getObjectiveName(): java.lang.String`
- Method: `getSlot(): net.minecraft.world.scores.DisplaySlot`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket>`

### ClientboundSetEntityDataPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: java.util.List<net.minecraft.network.syncher.SynchedEntityData$DataValue<?>>)`
- Field: `EOF_MARKER: int`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `id(): int`
- Method: `packedItems(): java.util.List<net.minecraft.network.syncher.SynchedEntityData$DataValue<?>>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket>`

### ClientboundSetEntityLinkPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.entity.Entity, arg1: net.minecraft.world.entity.Entity)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket>`
- Method: `getDestId(): int`
- Method: `getSourceId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket>`

### ClientboundSetEntityMotionPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: net.minecraft.world.phys.Vec3)`
- Constructor: `(arg0: net.minecraft.world.entity.Entity)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket>`
- Method: `getId(): int`
- Method: `getXa(): double`
- Method: `getYa(): double`
- Method: `getZa(): double`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket>`

### ClientboundSetEquipmentPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: java.util.List<com.mojang.datafixers.util.Pair<net.minecraft.world.entity.EquipmentSlot, net.minecraft.world.item.ItemStack>>)`
- Constructor: `(arg0: int, arg1: java.util.List<com.mojang.datafixers.util.Pair<net.minecraft.world.entity.EquipmentSlot, net.minecraft.world.item.ItemStack>>, arg2: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket>`
- Method: `getEntity(): int`
- Method: `getSlots(): java.util.List<com.mojang.datafixers.util.Pair<net.minecraft.world.entity.EquipmentSlot, net.minecraft.world.item.ItemStack>>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket>`

### ClientboundSetExperiencePacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetExperiencePacket`
- Kind: `class`
- Constructor: `(arg0: float, arg1: int, arg2: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetExperiencePacket>`
- Method: `getExperienceLevel(): int`
- Method: `getExperienceProgress(): float`
- Method: `getTotalExperience(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetExperiencePacket>`

### ClientboundSetHealthPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetHealthPacket`
- Kind: `class`
- Constructor: `(arg0: float, arg1: int, arg2: float)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetHealthPacket>`
- Method: `getFood(): int`
- Method: `getHealth(): float`
- Method: `getSaturation(): float`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetHealthPacket>`

### ClientboundSetHeldSlotPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetHeldSlotPacket`
- Kind: `record`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ClientboundSetHeldSlotPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `slot(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetHeldSlotPacket>`

### ClientboundSetObjectivePacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetObjectivePacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.scores.Objective, arg1: int)`
- Field: `METHOD_ADD: int`
- Field: `METHOD_CHANGE: int`
- Field: `METHOD_REMOVE: int`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetObjectivePacket>`
- Method: `getDisplayName(): net.minecraft.network.chat.Component`
- Method: `getMethod(): int`
- Method: `getNumberFormat(): java.util.Optional<net.minecraft.network.chat.numbers.NumberFormat>`
- Method: `getObjectiveName(): java.lang.String`
- Method: `getRenderType(): net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetObjectivePacket>`

### ClientboundSetPassengersPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetPassengersPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.entity.Entity)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetPassengersPacket>`
- Method: `getPassengers(): int[]`
- Method: `getVehicle(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetPassengersPacket>`

### ClientboundSetPlayerInventoryPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetPlayerInventoryPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: net.minecraft.world.item.ItemStack)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetPlayerInventoryPacket>`
- Method: `contents(): net.minecraft.world.item.ItemStack`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `slot(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetPlayerInventoryPacket>`

### ClientboundSetPlayerTeamPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket`
- Kind: `class`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket>`
- Method: `createAddOrModifyPacket(arg0: net.minecraft.world.scores.PlayerTeam, arg1: boolean): net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket`
- Method: `createMultiplePlayerPacket(arg0: net.minecraft.world.scores.PlayerTeam, arg1: java.util.Collection<java.lang.String>, arg2: net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action): net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket`
- Method: `createPlayerPacket(arg0: net.minecraft.world.scores.PlayerTeam, arg1: java.lang.String, arg2: net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action): net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket`
- Method: `createRemovePacket(arg0: net.minecraft.world.scores.PlayerTeam): net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket`
- Method: `getName(): java.lang.String`
- Method: `getParameters(): java.util.Optional<net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Parameters>`
- Method: `getPlayerAction(): net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action`
- Method: `getPlayers(): java.util.Collection<java.lang.String>`
- Method: `getTeamAction(): net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket$Action`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket>`

### ClientboundSetScorePacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetScorePacket`
- Kind: `record`
- Constructor: `(arg0: java.lang.String, arg1: java.lang.String, arg2: int, arg3: java.util.Optional<net.minecraft.network.chat.Component>, arg4: java.util.Optional<net.minecraft.network.chat.numbers.NumberFormat>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetScorePacket>`
- Method: `display(): java.util.Optional<net.minecraft.network.chat.Component>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `numberFormat(): java.util.Optional<net.minecraft.network.chat.numbers.NumberFormat>`
- Method: `objectiveName(): java.lang.String`
- Method: `owner(): java.lang.String`
- Method: `score(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetScorePacket>`

### ClientboundSetSimulationDistancePacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket`
- Kind: `record`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `simulationDistance(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket>`

### ClientboundSetSubtitleTextPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.chat.Component)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `text(): net.minecraft.network.chat.Component`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket>`

### ClientboundSetTimePacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetTimePacket`
- Kind: `record`
- Constructor: `(arg0: long, arg1: long, arg2: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetTimePacket>`
- Method: `dayTime(): long`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `gameTime(): long`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `tickDayTime(): boolean`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetTimePacket>`

### ClientboundSetTitleTextPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.chat.Component)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `text(): net.minecraft.network.chat.Component`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket>`

### ClientboundSetTitlesAnimationPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: int, arg2: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket>`
- Method: `getFadeIn(): int`
- Method: `getFadeOut(): int`
- Method: `getStay(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket>`

### ClientboundSoundEntityPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSoundEntityPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.core.Holder<net.minecraft.sounds.SoundEvent>, arg1: net.minecraft.sounds.SoundSource, arg2: net.minecraft.world.entity.Entity, arg3: float, arg4: float, arg5: long)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSoundEntityPacket>`
- Method: `getId(): int`
- Method: `getPitch(): float`
- Method: `getSeed(): long`
- Method: `getSound(): net.minecraft.core.Holder<net.minecraft.sounds.SoundEvent>`
- Method: `getSource(): net.minecraft.sounds.SoundSource`
- Method: `getVolume(): float`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSoundEntityPacket>`

### ClientboundSoundPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSoundPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.core.Holder<net.minecraft.sounds.SoundEvent>, arg1: net.minecraft.sounds.SoundSource, arg2: double, arg3: double, arg4: double, arg5: float, arg6: float, arg7: long)`
- Field: `LOCATION_ACCURACY: float`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSoundPacket>`
- Method: `getPitch(): float`
- Method: `getSeed(): long`
- Method: `getSound(): net.minecraft.core.Holder<net.minecraft.sounds.SoundEvent>`
- Method: `getSource(): net.minecraft.sounds.SoundSource`
- Method: `getVolume(): float`
- Method: `getX(): double`
- Method: `getY(): double`
- Method: `getZ(): double`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSoundPacket>`

### ClientboundStartConfigurationPacket

- Java: `net.minecraft.network.protocol.game.ClientboundStartConfigurationPacket`
- Kind: `class`
- Field: `INSTANCE: net.minecraft.network.protocol.game.ClientboundStartConfigurationPacket`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ClientboundStartConfigurationPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `isTerminal(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundStartConfigurationPacket>`

### ClientboundStopSoundPacket

- Java: `net.minecraft.network.protocol.game.ClientboundStopSoundPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.resources.ResourceLocation, arg1: net.minecraft.sounds.SoundSource)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundStopSoundPacket>`
- Method: `getName(): net.minecraft.resources.ResourceLocation`
- Method: `getSource(): net.minecraft.sounds.SoundSource`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundStopSoundPacket>`

### ClientboundSystemChatPacket

- Java: `net.minecraft.network.protocol.game.ClientboundSystemChatPacket`
- Kind: `record`
- Constructor: `(arg0: net.kyori.adventure.text.Component, arg1: boolean)`
- Constructor: `(arg0: net.minecraft.network.chat.Component, arg1: boolean)`
- Constructor: `(arg0: net.md_5.bungee.api.chat.BaseComponent[], arg1: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundSystemChatPacket>`
- Method: `content(): net.minecraft.network.chat.Component`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `isSkippable(): boolean`
- Method: `overlay(): boolean`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundSystemChatPacket>`

### ClientboundTabListPacket

- Java: `net.minecraft.network.protocol.game.ClientboundTabListPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.chat.Component, arg1: net.minecraft.network.chat.Component)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundTabListPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `footer(): net.minecraft.network.chat.Component`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `header(): net.minecraft.network.chat.Component`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundTabListPacket>`

### ClientboundTagQueryPacket

- Java: `net.minecraft.network.protocol.game.ClientboundTagQueryPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: net.minecraft.nbt.CompoundTag)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundTagQueryPacket>`
- Method: `getTag(): net.minecraft.nbt.CompoundTag`
- Method: `getTransactionId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `isSkippable(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundTagQueryPacket>`

### ClientboundTakeItemEntityPacket

- Java: `net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: int, arg2: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket>`
- Method: `getAmount(): int`
- Method: `getItemId(): int`
- Method: `getPlayerId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket>`

### ClientboundTeleportEntityPacket

- Java: `net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: net.minecraft.world.entity.PositionMoveRotation, arg2: java.util.Set<net.minecraft.world.entity.Relative>, arg3: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket>`
- Method: `change(): net.minecraft.world.entity.PositionMoveRotation`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `id(): int`
- Method: `onGround(): boolean`
- Method: `relatives(): java.util.Set<net.minecraft.world.entity.Relative>`
- Method: `teleport(arg0: int, arg1: net.minecraft.world.entity.PositionMoveRotation, arg2: java.util.Set<net.minecraft.world.entity.Relative>, arg3: boolean): net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket>`

### ClientboundTestInstanceBlockStatus

- Java: `net.minecraft.network.protocol.game.ClientboundTestInstanceBlockStatus`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.chat.Component, arg1: java.util.Optional<net.minecraft.core.Vec3i>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundTestInstanceBlockStatus>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `size(): java.util.Optional<net.minecraft.core.Vec3i>`
- Method: `status(): net.minecraft.network.chat.Component`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundTestInstanceBlockStatus>`

### ClientboundTickingStatePacket

- Java: `net.minecraft.network.protocol.game.ClientboundTickingStatePacket`
- Kind: `record`
- Constructor: `(arg0: float, arg1: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundTickingStatePacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `from(arg0: net.minecraft.world.TickRateManager): net.minecraft.network.protocol.game.ClientboundTickingStatePacket`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `isFrozen(): boolean`
- Method: `tickRate(): float`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundTickingStatePacket>`

### ClientboundTickingStepPacket

- Java: `net.minecraft.network.protocol.game.ClientboundTickingStepPacket`
- Kind: `record`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundTickingStepPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `from(arg0: net.minecraft.world.TickRateManager): net.minecraft.network.protocol.game.ClientboundTickingStepPacket`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `tickSteps(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundTickingStepPacket>`

### ClientboundTrackedWaypointPacket

- Java: `net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket$Operation, arg1: net.minecraft.world.waypoints.TrackedWaypoint)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket>`
- Method: `addWaypointAzimuth(arg0: java.util.UUID, arg1: net.minecraft.world.waypoints.Waypoint$Icon, arg2: float): net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket`
- Method: `addWaypointChunk(arg0: java.util.UUID, arg1: net.minecraft.world.waypoints.Waypoint$Icon, arg2: net.minecraft.world.level.ChunkPos): net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket`
- Method: `addWaypointPosition(arg0: java.util.UUID, arg1: net.minecraft.world.waypoints.Waypoint$Icon, arg2: net.minecraft.core.Vec3i): net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket`
- Method: `apply(arg0: net.minecraft.world.waypoints.TrackedWaypointManager): void`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `operation(): net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket$Operation`
- Method: `removeWaypoint(arg0: java.util.UUID): net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket>`
- Method: `updateWaypointAzimuth(arg0: java.util.UUID, arg1: net.minecraft.world.waypoints.Waypoint$Icon, arg2: float): net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket`
- Method: `updateWaypointChunk(arg0: java.util.UUID, arg1: net.minecraft.world.waypoints.Waypoint$Icon, arg2: net.minecraft.world.level.ChunkPos): net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket`
- Method: `updateWaypointPosition(arg0: java.util.UUID, arg1: net.minecraft.world.waypoints.Waypoint$Icon, arg2: net.minecraft.core.Vec3i): net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket`
- Method: `waypoint(): net.minecraft.world.waypoints.TrackedWaypoint`

### ClientboundUpdateAdvancementsPacket

- Java: `net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket`
- Kind: `class`
- Constructor: `(arg0: boolean, arg1: java.util.Collection<net.minecraft.advancements.AdvancementHolder>, arg2: java.util.Set<net.minecraft.resources.ResourceLocation>, arg3: java.util.Map<net.minecraft.resources.ResourceLocation, net.minecraft.advancements.AdvancementProgress>, arg4: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket>`
- Method: `getAdded(): java.util.List<net.minecraft.advancements.AdvancementHolder>`
- Method: `getProgress(): java.util.Map<net.minecraft.resources.ResourceLocation, net.minecraft.advancements.AdvancementProgress>`
- Method: `getRemoved(): java.util.Set<net.minecraft.resources.ResourceLocation>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `shouldReset(): boolean`
- Method: `shouldShowAdvancements(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket>`

### ClientboundUpdateAttributesPacket

- Java: `net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: java.util.Collection<net.minecraft.world.entity.ai.attributes.AttributeInstance>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket>`
- Method: `getEntityId(): int`
- Method: `getValues(): java.util.List<net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket$AttributeSnapshot>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket>`

### ClientboundUpdateMobEffectPacket

- Java: `net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: net.minecraft.world.effect.MobEffectInstance, arg2: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket>`
- Method: `effectShowsIcon(): boolean`
- Method: `getEffect(): net.minecraft.core.Holder<net.minecraft.world.effect.MobEffect>`
- Method: `getEffectAmplifier(): int`
- Method: `getEffectDurationTicks(): int`
- Method: `getEntityId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `isEffectAmbient(): boolean`
- Method: `isEffectVisible(): boolean`
- Method: `shouldBlend(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket>`

### ClientboundUpdateRecipesPacket

- Java: `net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket`
- Kind: `record`
- Constructor: `(arg0: java.util.Map<net.minecraft.resources.ResourceKey<net.minecraft.world.item.crafting.RecipePropertySet>, net.minecraft.world.item.crafting.RecipePropertySet>, arg1: net.minecraft.world.item.crafting.SelectableRecipe$SingleInputSet<net.minecraft.world.item.crafting.StonecutterRecipe>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ClientGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `itemSets(): java.util.Map<net.minecraft.resources.ResourceKey<net.minecraft.world.item.crafting.RecipePropertySet>, net.minecraft.world.item.crafting.RecipePropertySet>`
- Method: `stonecutterRecipes(): net.minecraft.world.item.crafting.SelectableRecipe$SingleInputSet<net.minecraft.world.item.crafting.StonecutterRecipe>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket>`

### ServerboundAcceptTeleportationPacket

- Java: `net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket`
- Kind: `class`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket>`
- Method: `getId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket>`

### ServerboundBlockEntityTagQueryPacket

- Java: `net.minecraft.network.protocol.game.ServerboundBlockEntityTagQueryPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: net.minecraft.core.BlockPos)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundBlockEntityTagQueryPacket>`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `getTransactionId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundBlockEntityTagQueryPacket>`

### ServerboundChangeDifficultyPacket

- Java: `net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.world.Difficulty)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket>`
- Method: `difficulty(): net.minecraft.world.Difficulty`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket>`

### ServerboundChangeGameModePacket

- Java: `net.minecraft.network.protocol.game.ServerboundChangeGameModePacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.world.level.GameType)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ServerboundChangeGameModePacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `mode(): net.minecraft.world.level.GameType`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundChangeGameModePacket>`

### ServerboundChatAckPacket

- Java: `net.minecraft.network.protocol.game.ServerboundChatAckPacket`
- Kind: `record`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundChatAckPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `offset(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundChatAckPacket>`

### ServerboundChatCommandPacket

- Java: `net.minecraft.network.protocol.game.ServerboundChatCommandPacket`
- Kind: `record`
- Constructor: `(arg0: java.lang.String)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundChatCommandPacket>`
- Method: `command(): java.lang.String`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundChatCommandPacket>`

### ServerboundChatCommandSignedPacket

- Java: `net.minecraft.network.protocol.game.ServerboundChatCommandSignedPacket`
- Kind: `record`
- Constructor: `(arg0: java.lang.String, arg1: java.time.Instant, arg2: long, arg3: net.minecraft.commands.arguments.ArgumentSignatures, arg4: net.minecraft.network.chat.LastSeenMessages$Update)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundChatCommandSignedPacket>`
- Method: `argumentSignatures(): net.minecraft.commands.arguments.ArgumentSignatures`
- Method: `command(): java.lang.String`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `lastSeenMessages(): net.minecraft.network.chat.LastSeenMessages$Update`
- Method: `salt(): long`
- Method: `timeStamp(): java.time.Instant`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundChatCommandSignedPacket>`

### ServerboundChatPacket

- Java: `net.minecraft.network.protocol.game.ServerboundChatPacket`
- Kind: `record`
- Constructor: `(arg0: java.lang.String, arg1: java.time.Instant, arg2: long, arg3: net.minecraft.network.chat.MessageSignature, arg4: net.minecraft.network.chat.LastSeenMessages$Update)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundChatPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `lastSeenMessages(): net.minecraft.network.chat.LastSeenMessages$Update`
- Method: `message(): java.lang.String`
- Method: `salt(): long`
- Method: `signature(): net.minecraft.network.chat.MessageSignature`
- Method: `timeStamp(): java.time.Instant`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundChatPacket>`

### ServerboundChatSessionUpdatePacket

- Java: `net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.chat.RemoteChatSession$Data)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket>`
- Method: `chatSession(): net.minecraft.network.chat.RemoteChatSession$Data`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket>`

### ServerboundChunkBatchReceivedPacket

- Java: `net.minecraft.network.protocol.game.ServerboundChunkBatchReceivedPacket`
- Kind: `record`
- Constructor: `(arg0: float)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundChunkBatchReceivedPacket>`
- Method: `desiredChunksPerTick(): float`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundChunkBatchReceivedPacket>`

### ServerboundClientCommandPacket

- Java: `net.minecraft.network.protocol.game.ServerboundClientCommandPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.network.protocol.game.ServerboundClientCommandPacket$Action)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundClientCommandPacket>`
- Method: `getAction(): net.minecraft.network.protocol.game.ServerboundClientCommandPacket$Action`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundClientCommandPacket>`

### ServerboundClientTickEndPacket

- Java: `net.minecraft.network.protocol.game.ServerboundClientTickEndPacket`
- Kind: `record`
- Constructor: `()`
- Field: `INSTANCE: net.minecraft.network.protocol.game.ServerboundClientTickEndPacket`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ServerboundClientTickEndPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundClientTickEndPacket>`

### ServerboundCommandSuggestionPacket

- Java: `net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: java.lang.String)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket>`
- Method: `getCommand(): java.lang.String`
- Method: `getId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket>`

### ServerboundConfigurationAcknowledgedPacket

- Java: `net.minecraft.network.protocol.game.ServerboundConfigurationAcknowledgedPacket`
- Kind: `class`
- Field: `INSTANCE: net.minecraft.network.protocol.game.ServerboundConfigurationAcknowledgedPacket`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ServerboundConfigurationAcknowledgedPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `isTerminal(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundConfigurationAcknowledgedPacket>`

### ServerboundContainerButtonClickPacket

- Java: `net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket>`
- Method: `buttonId(): int`
- Method: `containerId(): int`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket>`

### ServerboundContainerClickPacket

- Java: `net.minecraft.network.protocol.game.ServerboundContainerClickPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: int, arg2: short, arg3: byte, arg4: net.minecraft.world.inventory.ClickType, arg5: it.unimi.dsi.fastutil.ints.Int2ObjectMap<net.minecraft.network.HashedStack>, arg6: net.minecraft.network.HashedStack)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundContainerClickPacket>`
- Method: `buttonNum(): byte`
- Method: `carriedItem(): net.minecraft.network.HashedStack`
- Method: `changedSlots(): it.unimi.dsi.fastutil.ints.Int2ObjectMap<net.minecraft.network.HashedStack>`
- Method: `clickType(): net.minecraft.world.inventory.ClickType`
- Method: `containerId(): int`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `slotNum(): short`
- Method: `stateId(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundContainerClickPacket>`

### ServerboundContainerClosePacket

- Java: `net.minecraft.network.protocol.game.ServerboundContainerClosePacket`
- Kind: `class`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundContainerClosePacket>`
- Method: `getContainerId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundContainerClosePacket>`

### ServerboundContainerSlotStateChangedPacket

- Java: `net.minecraft.network.protocol.game.ServerboundContainerSlotStateChangedPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: int, arg2: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundContainerSlotStateChangedPacket>`
- Method: `containerId(): int`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `newState(): boolean`
- Method: `slotId(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundContainerSlotStateChangedPacket>`

### ServerboundDebugSampleSubscriptionPacket

- Java: `net.minecraft.network.protocol.game.ServerboundDebugSampleSubscriptionPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.util.debugchart.RemoteDebugSampleType)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundDebugSampleSubscriptionPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `sampleType(): net.minecraft.util.debugchart.RemoteDebugSampleType`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundDebugSampleSubscriptionPacket>`

### ServerboundEditBookPacket

- Java: `net.minecraft.network.protocol.game.ServerboundEditBookPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: java.util.List<java.lang.String>, arg2: java.util.Optional<java.lang.String>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundEditBookPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `pages(): java.util.List<java.lang.String>`
- Method: `slot(): int`
- Method: `title(): java.util.Optional<java.lang.String>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundEditBookPacket>`

### ServerboundEntityTagQueryPacket

- Java: `net.minecraft.network.protocol.game.ServerboundEntityTagQueryPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundEntityTagQueryPacket>`
- Method: `getEntityId(): int`
- Method: `getTransactionId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundEntityTagQueryPacket>`

### ServerboundInteractPacket

- Java: `net.minecraft.network.protocol.game.ServerboundInteractPacket`
- Kind: `class`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundInteractPacket>`
- Method: `createAttackPacket(arg0: net.minecraft.world.entity.Entity, arg1: boolean): net.minecraft.network.protocol.game.ServerboundInteractPacket`
- Method: `createInteractionPacket(arg0: net.minecraft.world.entity.Entity, arg1: boolean, arg2: net.minecraft.world.InteractionHand): net.minecraft.network.protocol.game.ServerboundInteractPacket`
- Method: `createInteractionPacket(arg0: net.minecraft.world.entity.Entity, arg1: boolean, arg2: net.minecraft.world.InteractionHand, arg3: net.minecraft.world.phys.Vec3): net.minecraft.network.protocol.game.ServerboundInteractPacket`
- Method: `dispatch(arg0: net.minecraft.network.protocol.game.ServerboundInteractPacket$Handler): void`
- Method: `getEntityId(): int`
- Method: `getTarget(arg0: net.minecraft.server.level.ServerLevel): net.minecraft.world.entity.Entity`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `isAttack(): boolean`
- Method: `isUsingSecondaryAction(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundInteractPacket>`

### ServerboundJigsawGeneratePacket

- Java: `net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: int, arg2: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket>`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `keepJigsaws(): boolean`
- Method: `levels(): int`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket>`

### ServerboundLockDifficultyPacket

- Java: `net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket`
- Kind: `class`
- Constructor: `(arg0: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `isLocked(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket>`

### ServerboundMovePlayerPacket_Pos

- Java: `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Pos`
- Kind: `class`
- Constructor: `(arg0: double, arg1: double, arg2: double, arg3: boolean, arg4: boolean)`
- Constructor: `(arg0: net.minecraft.world.phys.Vec3, arg1: boolean, arg2: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Pos>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Pos>`

### ServerboundMovePlayerPacket_PosRot

- Java: `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$PosRot`
- Kind: `class`
- Constructor: `(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float, arg5: boolean, arg6: boolean)`
- Constructor: `(arg0: net.minecraft.world.phys.Vec3, arg1: float, arg2: float, arg3: boolean, arg4: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$PosRot>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$PosRot>`

### ServerboundMovePlayerPacket_Rot

- Java: `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Rot`
- Kind: `class`
- Constructor: `(arg0: float, arg1: float, arg2: boolean, arg3: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Rot>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Rot>`

### ServerboundMovePlayerPacket_StatusOnly

- Java: `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$StatusOnly`
- Kind: `class`
- Constructor: `(arg0: boolean, arg1: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$StatusOnly>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$StatusOnly>`

### ServerboundMoveVehiclePacket

- Java: `net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.world.phys.Vec3, arg1: float, arg2: float, arg3: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `fromEntity(arg0: net.minecraft.world.entity.Entity): net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `onGround(): boolean`
- Method: `position(): net.minecraft.world.phys.Vec3`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket>`
- Method: `xRot(): float`
- Method: `yRot(): float`

### ServerboundPaddleBoatPacket

- Java: `net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket`
- Kind: `class`
- Constructor: `(arg0: boolean, arg1: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket>`
- Method: `getLeft(): boolean`
- Method: `getRight(): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket>`

### ServerboundPickItemFromBlockPacket

- Java: `net.minecraft.network.protocol.game.ServerboundPickItemFromBlockPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ServerboundPickItemFromBlockPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `includeData(): boolean`
- Method: `pos(): net.minecraft.core.BlockPos`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundPickItemFromBlockPacket>`

### ServerboundPickItemFromEntityPacket

- Java: `net.minecraft.network.protocol.game.ServerboundPickItemFromEntityPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ServerboundPickItemFromEntityPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `id(): int`
- Method: `includeData(): boolean`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundPickItemFromEntityPacket>`

### ServerboundPlaceRecipePacket

- Java: `net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: net.minecraft.world.item.crafting.display.RecipeDisplayId, arg2: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket>`
- Method: `containerId(): int`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `recipe(): net.minecraft.world.item.crafting.display.RecipeDisplayId`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket>`
- Method: `useMaxItems(): boolean`

### ServerboundPlayerAbilitiesPacket

- Java: `net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.entity.player.Abilities)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `isFlying(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket>`

### ServerboundPlayerActionPacket

- Java: `net.minecraft.network.protocol.game.ServerboundPlayerActionPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action, arg1: net.minecraft.core.BlockPos, arg2: net.minecraft.core.Direction)`
- Constructor: `(arg0: net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action, arg1: net.minecraft.core.BlockPos, arg2: net.minecraft.core.Direction, arg3: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundPlayerActionPacket>`
- Method: `getAction(): net.minecraft.network.protocol.game.ServerboundPlayerActionPacket$Action`
- Method: `getDirection(): net.minecraft.core.Direction`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `getSequence(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundPlayerActionPacket>`

### ServerboundPlayerCommandPacket

- Java: `net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.entity.Entity, arg1: net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket$Action)`
- Constructor: `(arg0: net.minecraft.world.entity.Entity, arg1: net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket$Action, arg2: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket>`
- Method: `getAction(): net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket$Action`
- Method: `getData(): int`
- Method: `getId(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket>`

### ServerboundPlayerInputPacket

- Java: `net.minecraft.network.protocol.game.ServerboundPlayerInputPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.world.entity.player.Input)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundPlayerInputPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `input(): net.minecraft.world.entity.player.Input`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundPlayerInputPacket>`

### ServerboundPlayerLoadedPacket

- Java: `net.minecraft.network.protocol.game.ServerboundPlayerLoadedPacket`
- Kind: `record`
- Constructor: `()`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.game.ServerboundPlayerLoadedPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundPlayerLoadedPacket>`

### ServerboundRecipeBookChangeSettingsPacket

- Java: `net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.inventory.RecipeBookType, arg1: boolean, arg2: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket>`
- Method: `getBookType(): net.minecraft.world.inventory.RecipeBookType`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `isFiltering(): boolean`
- Method: `isOpen(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket>`

### ServerboundRecipeBookSeenRecipePacket

- Java: `net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.world.item.crafting.display.RecipeDisplayId)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `recipe(): net.minecraft.world.item.crafting.display.RecipeDisplayId`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket>`

### ServerboundRenameItemPacket

- Java: `net.minecraft.network.protocol.game.ServerboundRenameItemPacket`
- Kind: `class`
- Constructor: `(arg0: java.lang.String)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundRenameItemPacket>`
- Method: `getName(): java.lang.String`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundRenameItemPacket>`

### ServerboundSeenAdvancementsPacket

- Java: `net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket$Action, arg1: net.minecraft.resources.ResourceLocation)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket>`
- Method: `closedScreen(): net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket`
- Method: `getAction(): net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket$Action`
- Method: `getTab(): net.minecraft.resources.ResourceLocation`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `openedTab(arg0: net.minecraft.advancements.AdvancementHolder): net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket>`

### ServerboundSelectBundleItemPacket

- Java: `net.minecraft.network.protocol.game.ServerboundSelectBundleItemPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundSelectBundleItemPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `selectedItemIndex(): int`
- Method: `slotId(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundSelectBundleItemPacket>`

### ServerboundSelectTradePacket

- Java: `net.minecraft.network.protocol.game.ServerboundSelectTradePacket`
- Kind: `class`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundSelectTradePacket>`
- Method: `getItem(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundSelectTradePacket>`

### ServerboundSetBeaconPacket

- Java: `net.minecraft.network.protocol.game.ServerboundSetBeaconPacket`
- Kind: `record`
- Constructor: `(arg0: java.util.Optional<net.minecraft.core.Holder<net.minecraft.world.effect.MobEffect>>, arg1: java.util.Optional<net.minecraft.core.Holder<net.minecraft.world.effect.MobEffect>>)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundSetBeaconPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `primary(): java.util.Optional<net.minecraft.core.Holder<net.minecraft.world.effect.MobEffect>>`
- Method: `secondary(): java.util.Optional<net.minecraft.core.Holder<net.minecraft.world.effect.MobEffect>>`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundSetBeaconPacket>`

### ServerboundSetCarriedItemPacket

- Java: `net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket`
- Kind: `class`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket>`
- Method: `getSlot(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket>`

### ServerboundSetCommandBlockPacket

- Java: `net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: java.lang.String, arg2: net.minecraft.world.level.block.entity.CommandBlockEntity$Mode, arg3: boolean, arg4: boolean, arg5: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket>`
- Method: `getCommand(): java.lang.String`
- Method: `getMode(): net.minecraft.world.level.block.entity.CommandBlockEntity$Mode`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `isAutomatic(): boolean`
- Method: `isConditional(): boolean`
- Method: `isTrackOutput(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket>`

### ServerboundSetCommandMinecartPacket

- Java: `net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket`
- Kind: `class`
- Constructor: `(arg0: int, arg1: java.lang.String, arg2: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket>`
- Method: `getCommand(): java.lang.String`
- Method: `getCommandBlock(arg0: net.minecraft.world.level.Level): net.minecraft.world.level.BaseCommandBlock`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `isTrackOutput(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket>`

### ServerboundSetCreativeModeSlotPacket

- Java: `net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: net.minecraft.world.item.ItemStack)`
- Constructor: `(arg0: short, arg1: net.minecraft.world.item.ItemStack)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `itemStack(): net.minecraft.world.item.ItemStack`
- Method: `slotNum(): short`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket>`

### ServerboundSetJigsawBlockPacket

- Java: `net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: net.minecraft.resources.ResourceLocation, arg2: net.minecraft.resources.ResourceLocation, arg3: net.minecraft.resources.ResourceLocation, arg4: java.lang.String, arg5: net.minecraft.world.level.block.entity.JigsawBlockEntity$JointType, arg6: int, arg7: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket>`
- Method: `getFinalState(): java.lang.String`
- Method: `getJoint(): net.minecraft.world.level.block.entity.JigsawBlockEntity$JointType`
- Method: `getName(): net.minecraft.resources.ResourceLocation`
- Method: `getPlacementPriority(): int`
- Method: `getPool(): net.minecraft.resources.ResourceLocation`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `getSelectionPriority(): int`
- Method: `getTarget(): net.minecraft.resources.ResourceLocation`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket>`

### ServerboundSetStructureBlockPacket

- Java: `net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: net.minecraft.world.level.block.entity.StructureBlockEntity$UpdateType, arg2: net.minecraft.world.level.block.state.properties.StructureMode, arg3: java.lang.String, arg4: net.minecraft.core.BlockPos, arg5: net.minecraft.core.Vec3i, arg6: net.minecraft.world.level.block.Mirror, arg7: net.minecraft.world.level.block.Rotation, arg8: java.lang.String, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: float, arg14: long)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket>`
- Method: `getData(): java.lang.String`
- Method: `getIntegrity(): float`
- Method: `getMirror(): net.minecraft.world.level.block.Mirror`
- Method: `getMode(): net.minecraft.world.level.block.state.properties.StructureMode`
- Method: `getName(): java.lang.String`
- Method: `getOffset(): net.minecraft.core.BlockPos`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `getRotation(): net.minecraft.world.level.block.Rotation`
- Method: `getSeed(): long`
- Method: `getSize(): net.minecraft.core.Vec3i`
- Method: `getUpdateType(): net.minecraft.world.level.block.entity.StructureBlockEntity$UpdateType`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `isIgnoreEntities(): boolean`
- Method: `isShowAir(): boolean`
- Method: `isShowBoundingBox(): boolean`
- Method: `isStrict(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket>`

### ServerboundSetTestBlockPacket

- Java: `net.minecraft.network.protocol.game.ServerboundSetTestBlockPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: net.minecraft.world.level.block.state.properties.TestBlockMode, arg2: java.lang.String)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundSetTestBlockPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `message(): java.lang.String`
- Method: `mode(): net.minecraft.world.level.block.state.properties.TestBlockMode`
- Method: `position(): net.minecraft.core.BlockPos`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundSetTestBlockPacket>`

### ServerboundSignUpdatePacket

- Java: `net.minecraft.network.protocol.game.ServerboundSignUpdatePacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: boolean, arg2: java.lang.String, arg3: java.lang.String, arg4: java.lang.String, arg5: java.lang.String)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundSignUpdatePacket>`
- Method: `getLines(): java.lang.String[]`
- Method: `getPos(): net.minecraft.core.BlockPos`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `isFrontText(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundSignUpdatePacket>`

### ServerboundSwingPacket

- Java: `net.minecraft.network.protocol.game.ServerboundSwingPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.InteractionHand)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundSwingPacket>`
- Method: `getHand(): net.minecraft.world.InteractionHand`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundSwingPacket>`

### ServerboundTeleportToEntityPacket

- Java: `net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket`
- Kind: `class`
- Constructor: `(arg0: java.util.UUID)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket>`
- Method: `getEntity(arg0: net.minecraft.server.level.ServerLevel): net.minecraft.world.entity.Entity`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket>`

### ServerboundTestInstanceBlockActionPacket

- Java: `net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket$Action, arg2: java.util.Optional<net.minecraft.resources.ResourceKey<net.minecraft.gametest.framework.GameTestInstance>>, arg3: net.minecraft.core.Vec3i, arg4: net.minecraft.world.level.block.Rotation, arg5: boolean)`
- Constructor: `(arg0: net.minecraft.core.BlockPos, arg1: net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket$Action, arg2: net.minecraft.world.level.block.entity.TestInstanceBlockEntity$Data)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.RegistryFriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket>`
- Method: `action(): net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket$Action`
- Method: `data(): net.minecraft.world.level.block.entity.TestInstanceBlockEntity$Data`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `hashCode(): int`
- Method: `pos(): net.minecraft.core.BlockPos`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket>`

### ServerboundUseItemOnPacket

- Java: `net.minecraft.network.protocol.game.ServerboundUseItemOnPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.InteractionHand, arg1: net.minecraft.world.phys.BlockHitResult, arg2: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundUseItemOnPacket>`
- Field: `timestamp: long`
- Method: `getHand(): net.minecraft.world.InteractionHand`
- Method: `getHitResult(): net.minecraft.world.phys.BlockHitResult`
- Method: `getSequence(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundUseItemOnPacket>`

### ServerboundUseItemPacket

- Java: `net.minecraft.network.protocol.game.ServerboundUseItemPacket`
- Kind: `class`
- Constructor: `(arg0: net.minecraft.world.InteractionHand, arg1: int, arg2: float, arg3: float)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.game.ServerboundUseItemPacket>`
- Field: `timestamp: long`
- Method: `getHand(): net.minecraft.world.InteractionHand`
- Method: `getSequence(): int`
- Method: `getXRot(): float`
- Method: `getYRot(): float`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.game.ServerGamePacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.game.ServerboundUseItemPacket>`

### ClientIntentionPacket

- Java: `net.minecraft.network.protocol.handshake.ClientIntentionPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: java.lang.String, arg2: int, arg3: net.minecraft.network.protocol.handshake.ClientIntent)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.handshake.ClientIntentionPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.handshake.ServerHandshakePacketListener): void`
- Method: `hashCode(): int`
- Method: `hostName(): java.lang.String`
- Method: `intention(): net.minecraft.network.protocol.handshake.ClientIntent`
- Method: `isTerminal(): boolean`
- Method: `port(): int`
- Method: `protocolVersion(): int`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.handshake.ClientIntentionPacket>`

### ClientboundCustomQueryPacket

- Java: `net.minecraft.network.protocol.login.ClientboundCustomQueryPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: net.minecraft.network.protocol.login.custom.CustomQueryPayload)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.login.ClientboundCustomQueryPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.login.ClientLoginPacketListener): void`
- Method: `hashCode(): int`
- Method: `payload(): net.minecraft.network.protocol.login.custom.CustomQueryPayload`
- Method: `toString(): java.lang.String`
- Method: `transactionId(): int`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.login.ClientboundCustomQueryPacket>`

### ClientboundHelloPacket

- Java: `net.minecraft.network.protocol.login.ClientboundHelloPacket`
- Kind: `class`
- Constructor: `(arg0: java.lang.String, arg1: byte[], arg2: byte[], arg3: boolean)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.login.ClientboundHelloPacket>`
- Method: `getChallenge(): byte[]`
- Method: `getPublicKey(): java.security.PublicKey`
- Method: `getServerId(): java.lang.String`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.login.ClientLoginPacketListener): void`
- Method: `shouldAuthenticate(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.login.ClientboundHelloPacket>`

### ClientboundLoginCompressionPacket

- Java: `net.minecraft.network.protocol.login.ClientboundLoginCompressionPacket`
- Kind: `class`
- Constructor: `(arg0: int)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.login.ClientboundLoginCompressionPacket>`
- Method: `getCompressionThreshold(): int`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.login.ClientLoginPacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.login.ClientboundLoginCompressionPacket>`

### ClientboundLoginDisconnectPacket

- Java: `net.minecraft.network.protocol.login.ClientboundLoginDisconnectPacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.chat.Component)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.login.ClientboundLoginDisconnectPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.login.ClientLoginPacketListener): void`
- Method: `hashCode(): int`
- Method: `reason(): net.minecraft.network.chat.Component`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.login.ClientboundLoginDisconnectPacket>`

### ClientboundLoginFinishedPacket

- Java: `net.minecraft.network.protocol.login.ClientboundLoginFinishedPacket`
- Kind: `record`
- Constructor: `(arg0: com.mojang.authlib.GameProfile)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.login.ClientboundLoginFinishedPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `gameProfile(): com.mojang.authlib.GameProfile`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.login.ClientLoginPacketListener): void`
- Method: `hashCode(): int`
- Method: `isTerminal(): boolean`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.login.ClientboundLoginFinishedPacket>`

### ServerboundCustomQueryAnswerPacket

- Java: `net.minecraft.network.protocol.login.ServerboundCustomQueryAnswerPacket`
- Kind: `record`
- Constructor: `(arg0: int, arg1: net.minecraft.network.protocol.login.custom.CustomQueryAnswerPayload)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.login.ServerboundCustomQueryAnswerPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.login.ServerLoginPacketListener): void`
- Method: `hashCode(): int`
- Method: `payload(): net.minecraft.network.protocol.login.custom.CustomQueryAnswerPayload`
- Method: `toString(): java.lang.String`
- Method: `transactionId(): int`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.login.ServerboundCustomQueryAnswerPacket>`

### ServerboundHelloPacket

- Java: `net.minecraft.network.protocol.login.ServerboundHelloPacket`
- Kind: `record`
- Constructor: `(arg0: java.lang.String, arg1: java.util.UUID)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.login.ServerboundHelloPacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.login.ServerLoginPacketListener): void`
- Method: `hashCode(): int`
- Method: `name(): java.lang.String`
- Method: `profileId(): java.util.UUID`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.login.ServerboundHelloPacket>`

### ServerboundKeyPacket

- Java: `net.minecraft.network.protocol.login.ServerboundKeyPacket`
- Kind: `class`
- Constructor: `(arg0: javax.crypto.SecretKey, arg1: java.security.PublicKey, arg2: byte[])`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.login.ServerboundKeyPacket>`
- Method: `getSecretKey(arg0: java.security.PrivateKey): javax.crypto.SecretKey`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.login.ServerLoginPacketListener): void`
- Method: `isChallengeValid(arg0: byte[], arg1: java.security.PrivateKey): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.login.ServerboundKeyPacket>`

### ServerboundLoginAcknowledgedPacket

- Java: `net.minecraft.network.protocol.login.ServerboundLoginAcknowledgedPacket`
- Kind: `class`
- Field: `INSTANCE: net.minecraft.network.protocol.login.ServerboundLoginAcknowledgedPacket`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.login.ServerboundLoginAcknowledgedPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.login.ServerLoginPacketListener): void`
- Method: `isTerminal(): boolean`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.login.ServerboundLoginAcknowledgedPacket>`

### ClientboundPongResponsePacket

- Java: `net.minecraft.network.protocol.ping.ClientboundPongResponsePacket`
- Kind: `record`
- Constructor: `(arg0: long)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<net.minecraft.network.FriendlyByteBuf, net.minecraft.network.protocol.ping.ClientboundPongResponsePacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.ping.ClientPongPacketListener): void`
- Method: `hashCode(): int`
- Method: `time(): long`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.ping.ClientboundPongResponsePacket>`

### ServerboundPingRequestPacket

- Java: `net.minecraft.network.protocol.ping.ServerboundPingRequestPacket`
- Kind: `class`
- Constructor: `(arg0: long)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.ping.ServerboundPingRequestPacket>`
- Method: `getTime(): long`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.ping.ServerPingPacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.ping.ServerboundPingRequestPacket>`

### ClientboundStatusResponsePacket

- Java: `net.minecraft.network.protocol.status.ClientboundStatusResponsePacket`
- Kind: `record`
- Constructor: `(arg0: net.minecraft.network.protocol.status.ServerStatus)`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.status.ClientboundStatusResponsePacket>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.status.ClientStatusPacketListener): void`
- Method: `hashCode(): int`
- Method: `status(): net.minecraft.network.protocol.status.ServerStatus`
- Method: `toString(): java.lang.String`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.status.ClientboundStatusResponsePacket>`

### ServerboundStatusRequestPacket

- Java: `net.minecraft.network.protocol.status.ServerboundStatusRequestPacket`
- Kind: `class`
- Field: `INSTANCE: net.minecraft.network.protocol.status.ServerboundStatusRequestPacket`
- Field: `STREAM_CODEC: net.minecraft.network.codec.StreamCodec<io.netty.buffer.ByteBuf, net.minecraft.network.protocol.status.ServerboundStatusRequestPacket>`
- Method: `handle(arg0: net.minecraft.network.PacketListener): void`
- Method: `handle(arg0: net.minecraft.network.protocol.status.ServerStatusPacketListener): void`
- Method: `type(): net.minecraft.network.protocol.PacketType<net.minecraft.network.protocol.status.ServerboundStatusRequestPacket>`

## Packet Registrations

- `ClientboundClearDialogPacket`: `net.minecraft.network.protocol.common.ClientboundClearDialogPacket`, configuration/clientbound, ID 17
- `ClientboundClearDialogPacket`: `net.minecraft.network.protocol.common.ClientboundClearDialogPacket`, play/clientbound, ID 132
- `ClientboundCustomPayloadPacket`: `net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket`, configuration/clientbound, ID 1
- `ClientboundCustomPayloadPacket`: `net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket`, play/clientbound, ID 24
- `ClientboundCustomReportDetailsPacket`: `net.minecraft.network.protocol.common.ClientboundCustomReportDetailsPacket`, configuration/clientbound, ID 15
- `ClientboundCustomReportDetailsPacket`: `net.minecraft.network.protocol.common.ClientboundCustomReportDetailsPacket`, play/clientbound, ID 129
- `ClientboundDisconnectPacket`: `net.minecraft.network.protocol.common.ClientboundDisconnectPacket`, configuration/clientbound, ID 2
- `ClientboundDisconnectPacket`: `net.minecraft.network.protocol.common.ClientboundDisconnectPacket`, play/clientbound, ID 28
- `ClientboundKeepAlivePacket`: `net.minecraft.network.protocol.common.ClientboundKeepAlivePacket`, configuration/clientbound, ID 4
- `ClientboundKeepAlivePacket`: `net.minecraft.network.protocol.common.ClientboundKeepAlivePacket`, play/clientbound, ID 38
- `ClientboundPingPacket`: `net.minecraft.network.protocol.common.ClientboundPingPacket`, configuration/clientbound, ID 5
- `ClientboundPingPacket`: `net.minecraft.network.protocol.common.ClientboundPingPacket`, play/clientbound, ID 54
- `ClientboundResourcePackPopPacket`: `net.minecraft.network.protocol.common.ClientboundResourcePackPopPacket`, configuration/clientbound, ID 8
- `ClientboundResourcePackPopPacket`: `net.minecraft.network.protocol.common.ClientboundResourcePackPopPacket`, play/clientbound, ID 73
- `ClientboundResourcePackPushPacket`: `net.minecraft.network.protocol.common.ClientboundResourcePackPushPacket`, configuration/clientbound, ID 9
- `ClientboundResourcePackPushPacket`: `net.minecraft.network.protocol.common.ClientboundResourcePackPushPacket`, play/clientbound, ID 74
- `ClientboundServerLinksPacket`: `net.minecraft.network.protocol.common.ClientboundServerLinksPacket`, configuration/clientbound, ID 16
- `ClientboundServerLinksPacket`: `net.minecraft.network.protocol.common.ClientboundServerLinksPacket`, play/clientbound, ID 130
- `ClientboundShowDialogPacket`: `net.minecraft.network.protocol.common.ClientboundShowDialogPacket`, configuration/clientbound, ID 18
- `ClientboundShowDialogPacket`: `net.minecraft.network.protocol.common.ClientboundShowDialogPacket`, play/clientbound, ID 133
- `ClientboundStoreCookiePacket`: `net.minecraft.network.protocol.common.ClientboundStoreCookiePacket`, configuration/clientbound, ID 10
- `ClientboundStoreCookiePacket`: `net.minecraft.network.protocol.common.ClientboundStoreCookiePacket`, play/clientbound, ID 113
- `ClientboundTransferPacket`: `net.minecraft.network.protocol.common.ClientboundTransferPacket`, configuration/clientbound, ID 11
- `ClientboundTransferPacket`: `net.minecraft.network.protocol.common.ClientboundTransferPacket`, play/clientbound, ID 122
- `ClientboundUpdateTagsPacket`: `net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket`, configuration/clientbound, ID 13
- `ClientboundUpdateTagsPacket`: `net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket`, play/clientbound, ID 127
- `ServerboundClientInformationPacket`: `net.minecraft.network.protocol.common.ServerboundClientInformationPacket`, configuration/serverbound, ID 0
- `ServerboundClientInformationPacket`: `net.minecraft.network.protocol.common.ServerboundClientInformationPacket`, play/serverbound, ID 13
- `ServerboundCustomClickActionPacket`: `net.minecraft.network.protocol.common.ServerboundCustomClickActionPacket`, configuration/serverbound, ID 8
- `ServerboundCustomClickActionPacket`: `net.minecraft.network.protocol.common.ServerboundCustomClickActionPacket`, play/serverbound, ID 65
- `ServerboundCustomPayloadPacket`: `net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket`, configuration/serverbound, ID 2
- `ServerboundCustomPayloadPacket`: `net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket`, play/serverbound, ID 21
- `ServerboundKeepAlivePacket`: `net.minecraft.network.protocol.common.ServerboundKeepAlivePacket`, configuration/serverbound, ID 4
- `ServerboundKeepAlivePacket`: `net.minecraft.network.protocol.common.ServerboundKeepAlivePacket`, play/serverbound, ID 27
- `ServerboundPongPacket`: `net.minecraft.network.protocol.common.ServerboundPongPacket`, configuration/serverbound, ID 5
- `ServerboundPongPacket`: `net.minecraft.network.protocol.common.ServerboundPongPacket`, play/serverbound, ID 44
- `ServerboundResourcePackPacket`: `net.minecraft.network.protocol.common.ServerboundResourcePackPacket`, configuration/serverbound, ID 6
- `ServerboundResourcePackPacket`: `net.minecraft.network.protocol.common.ServerboundResourcePackPacket`, play/serverbound, ID 48
- `ClientboundFinishConfigurationPacket`: `net.minecraft.network.protocol.configuration.ClientboundFinishConfigurationPacket`, configuration/clientbound, ID 3
- `ClientboundRegistryDataPacket`: `net.minecraft.network.protocol.configuration.ClientboundRegistryDataPacket`, configuration/clientbound, ID 7
- `ClientboundResetChatPacket`: `net.minecraft.network.protocol.configuration.ClientboundResetChatPacket`, configuration/clientbound, ID 6
- `ClientboundSelectKnownPacks`: `net.minecraft.network.protocol.configuration.ClientboundSelectKnownPacks`, configuration/clientbound, ID 14
- `ClientboundUpdateEnabledFeaturesPacket`: `net.minecraft.network.protocol.configuration.ClientboundUpdateEnabledFeaturesPacket`, configuration/clientbound, ID 12
- `ServerboundFinishConfigurationPacket`: `net.minecraft.network.protocol.configuration.ServerboundFinishConfigurationPacket`, configuration/serverbound, ID 3
- `ServerboundSelectKnownPacks`: `net.minecraft.network.protocol.configuration.ServerboundSelectKnownPacks`, configuration/serverbound, ID 7
- `ClientboundCookieRequestPacket`: `net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket`, configuration/clientbound, ID 0
- `ClientboundCookieRequestPacket`: `net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket`, login/clientbound, ID 5
- `ClientboundCookieRequestPacket`: `net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket`, play/clientbound, ID 21
- `ServerboundCookieResponsePacket`: `net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket`, configuration/serverbound, ID 1
- `ServerboundCookieResponsePacket`: `net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket`, login/serverbound, ID 4
- `ServerboundCookieResponsePacket`: `net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket`, play/serverbound, ID 20
- `ClientboundAddEntityPacket`: `net.minecraft.network.protocol.game.ClientboundAddEntityPacket`, play/clientbound, ID 1
- `ClientboundAnimatePacket`: `net.minecraft.network.protocol.game.ClientboundAnimatePacket`, play/clientbound, ID 2
- `ClientboundAwardStatsPacket`: `net.minecraft.network.protocol.game.ClientboundAwardStatsPacket`, play/clientbound, ID 3
- `ClientboundBlockChangedAckPacket`: `net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket`, play/clientbound, ID 4
- `ClientboundBlockDestructionPacket`: `net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket`, play/clientbound, ID 5
- `ClientboundBlockEntityDataPacket`: `net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket`, play/clientbound, ID 6
- `ClientboundBlockEventPacket`: `net.minecraft.network.protocol.game.ClientboundBlockEventPacket`, play/clientbound, ID 7
- `ClientboundBlockUpdatePacket`: `net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket`, play/clientbound, ID 8
- `ClientboundBossEventPacket`: `net.minecraft.network.protocol.game.ClientboundBossEventPacket`, play/clientbound, ID 9
- `ClientboundBundleDelimiterPacket`: `net.minecraft.network.protocol.game.ClientboundBundleDelimiterPacket`, play/clientbound, ID 0
- `ClientboundChangeDifficultyPacket`: `net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket`, play/clientbound, ID 10
- `ClientboundChunkBatchFinishedPacket`: `net.minecraft.network.protocol.game.ClientboundChunkBatchFinishedPacket`, play/clientbound, ID 11
- `ClientboundChunkBatchStartPacket`: `net.minecraft.network.protocol.game.ClientboundChunkBatchStartPacket`, play/clientbound, ID 12
- `ClientboundChunksBiomesPacket`: `net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket`, play/clientbound, ID 13
- `ClientboundClearTitlesPacket`: `net.minecraft.network.protocol.game.ClientboundClearTitlesPacket`, play/clientbound, ID 14
- `ClientboundCommandSuggestionsPacket`: `net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket`, play/clientbound, ID 15
- `ClientboundCommandsPacket`: `net.minecraft.network.protocol.game.ClientboundCommandsPacket`, play/clientbound, ID 16
- `ClientboundContainerClosePacket`: `net.minecraft.network.protocol.game.ClientboundContainerClosePacket`, play/clientbound, ID 17
- `ClientboundContainerSetContentPacket`: `net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket`, play/clientbound, ID 18
- `ClientboundContainerSetDataPacket`: `net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket`, play/clientbound, ID 19
- `ClientboundContainerSetSlotPacket`: `net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket`, play/clientbound, ID 20
- `ClientboundCooldownPacket`: `net.minecraft.network.protocol.game.ClientboundCooldownPacket`, play/clientbound, ID 22
- `ClientboundCustomChatCompletionsPacket`: `net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket`, play/clientbound, ID 23
- `ClientboundDamageEventPacket`: `net.minecraft.network.protocol.game.ClientboundDamageEventPacket`, play/clientbound, ID 25
- `ClientboundDebugSamplePacket`: `net.minecraft.network.protocol.game.ClientboundDebugSamplePacket`, play/clientbound, ID 26
- `ClientboundDeleteChatPacket`: `net.minecraft.network.protocol.game.ClientboundDeleteChatPacket`, play/clientbound, ID 27
- `ClientboundDisguisedChatPacket`: `net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket`, play/clientbound, ID 29
- `ClientboundEntityEventPacket`: `net.minecraft.network.protocol.game.ClientboundEntityEventPacket`, play/clientbound, ID 30
- `ClientboundEntityPositionSyncPacket`: `net.minecraft.network.protocol.game.ClientboundEntityPositionSyncPacket`, play/clientbound, ID 31
- `ClientboundExplodePacket`: `net.minecraft.network.protocol.game.ClientboundExplodePacket`, play/clientbound, ID 32
- `ClientboundForgetLevelChunkPacket`: `net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket`, play/clientbound, ID 33
- `ClientboundGameEventPacket`: `net.minecraft.network.protocol.game.ClientboundGameEventPacket`, play/clientbound, ID 34
- `ClientboundHorseScreenOpenPacket`: `net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket`, play/clientbound, ID 35
- `ClientboundHurtAnimationPacket`: `net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket`, play/clientbound, ID 36
- `ClientboundInitializeBorderPacket`: `net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket`, play/clientbound, ID 37
- `ClientboundLevelChunkWithLightPacket`: `net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket`, play/clientbound, ID 39
- `ClientboundLevelEventPacket`: `net.minecraft.network.protocol.game.ClientboundLevelEventPacket`, play/clientbound, ID 40
- `ClientboundLevelParticlesPacket`: `net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket`, play/clientbound, ID 41
- `ClientboundLightUpdatePacket`: `net.minecraft.network.protocol.game.ClientboundLightUpdatePacket`, play/clientbound, ID 42
- `ClientboundLoginPacket`: `net.minecraft.network.protocol.game.ClientboundLoginPacket`, play/clientbound, ID 43
- `ClientboundMapItemDataPacket`: `net.minecraft.network.protocol.game.ClientboundMapItemDataPacket`, play/clientbound, ID 44
- `ClientboundMerchantOffersPacket`: `net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket`, play/clientbound, ID 45
- `ClientboundMoveEntityPacket_Pos`: `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Pos`, play/clientbound, ID 46
- `ClientboundMoveEntityPacket_PosRot`: `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$PosRot`, play/clientbound, ID 47
- `ClientboundMoveEntityPacket_Rot`: `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Rot`, play/clientbound, ID 49
- `ClientboundMoveMinecartPacket`: `net.minecraft.network.protocol.game.ClientboundMoveMinecartPacket`, play/clientbound, ID 48
- `ClientboundMoveVehiclePacket`: `net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket`, play/clientbound, ID 50
- `ClientboundOpenBookPacket`: `net.minecraft.network.protocol.game.ClientboundOpenBookPacket`, play/clientbound, ID 51
- `ClientboundOpenScreenPacket`: `net.minecraft.network.protocol.game.ClientboundOpenScreenPacket`, play/clientbound, ID 52
- `ClientboundOpenSignEditorPacket`: `net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket`, play/clientbound, ID 53
- `ClientboundPlaceGhostRecipePacket`: `net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket`, play/clientbound, ID 56
- `ClientboundPlayerAbilitiesPacket`: `net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket`, play/clientbound, ID 57
- `ClientboundPlayerChatPacket`: `net.minecraft.network.protocol.game.ClientboundPlayerChatPacket`, play/clientbound, ID 58
- `ClientboundPlayerCombatEndPacket`: `net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket`, play/clientbound, ID 59
- `ClientboundPlayerCombatEnterPacket`: `net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket`, play/clientbound, ID 60
- `ClientboundPlayerCombatKillPacket`: `net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket`, play/clientbound, ID 61
- `ClientboundPlayerInfoRemovePacket`: `net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket`, play/clientbound, ID 62
- `ClientboundPlayerInfoUpdatePacket`: `net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket`, play/clientbound, ID 63
- `ClientboundPlayerLookAtPacket`: `net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket`, play/clientbound, ID 64
- `ClientboundPlayerPositionPacket`: `net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket`, play/clientbound, ID 65
- `ClientboundPlayerRotationPacket`: `net.minecraft.network.protocol.game.ClientboundPlayerRotationPacket`, play/clientbound, ID 66
- `ClientboundProjectilePowerPacket`: `net.minecraft.network.protocol.game.ClientboundProjectilePowerPacket`, play/clientbound, ID 128
- `ClientboundRecipeBookAddPacket`: `net.minecraft.network.protocol.game.ClientboundRecipeBookAddPacket`, play/clientbound, ID 67
- `ClientboundRecipeBookRemovePacket`: `net.minecraft.network.protocol.game.ClientboundRecipeBookRemovePacket`, play/clientbound, ID 68
- `ClientboundRecipeBookSettingsPacket`: `net.minecraft.network.protocol.game.ClientboundRecipeBookSettingsPacket`, play/clientbound, ID 69
- `ClientboundRemoveEntitiesPacket`: `net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket`, play/clientbound, ID 70
- `ClientboundRemoveMobEffectPacket`: `net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket`, play/clientbound, ID 71
- `ClientboundResetScorePacket`: `net.minecraft.network.protocol.game.ClientboundResetScorePacket`, play/clientbound, ID 72
- `ClientboundRespawnPacket`: `net.minecraft.network.protocol.game.ClientboundRespawnPacket`, play/clientbound, ID 75
- `ClientboundRotateHeadPacket`: `net.minecraft.network.protocol.game.ClientboundRotateHeadPacket`, play/clientbound, ID 76
- `ClientboundSectionBlocksUpdatePacket`: `net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket`, play/clientbound, ID 77
- `ClientboundSelectAdvancementsTabPacket`: `net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket`, play/clientbound, ID 78
- `ClientboundServerDataPacket`: `net.minecraft.network.protocol.game.ClientboundServerDataPacket`, play/clientbound, ID 79
- `ClientboundSetActionBarTextPacket`: `net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket`, play/clientbound, ID 80
- `ClientboundSetBorderCenterPacket`: `net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket`, play/clientbound, ID 81
- `ClientboundSetBorderLerpSizePacket`: `net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket`, play/clientbound, ID 82
- `ClientboundSetBorderSizePacket`: `net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket`, play/clientbound, ID 83
- `ClientboundSetBorderWarningDelayPacket`: `net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket`, play/clientbound, ID 84
- `ClientboundSetBorderWarningDistancePacket`: `net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket`, play/clientbound, ID 85
- `ClientboundSetCameraPacket`: `net.minecraft.network.protocol.game.ClientboundSetCameraPacket`, play/clientbound, ID 86
- `ClientboundSetChunkCacheCenterPacket`: `net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket`, play/clientbound, ID 87
- `ClientboundSetChunkCacheRadiusPacket`: `net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket`, play/clientbound, ID 88
- `ClientboundSetCursorItemPacket`: `net.minecraft.network.protocol.game.ClientboundSetCursorItemPacket`, play/clientbound, ID 89
- `ClientboundSetDefaultSpawnPositionPacket`: `net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket`, play/clientbound, ID 90
- `ClientboundSetDisplayObjectivePacket`: `net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket`, play/clientbound, ID 91
- `ClientboundSetEntityDataPacket`: `net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket`, play/clientbound, ID 92
- `ClientboundSetEntityLinkPacket`: `net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket`, play/clientbound, ID 93
- `ClientboundSetEntityMotionPacket`: `net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket`, play/clientbound, ID 94
- `ClientboundSetEquipmentPacket`: `net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket`, play/clientbound, ID 95
- `ClientboundSetExperiencePacket`: `net.minecraft.network.protocol.game.ClientboundSetExperiencePacket`, play/clientbound, ID 96
- `ClientboundSetHealthPacket`: `net.minecraft.network.protocol.game.ClientboundSetHealthPacket`, play/clientbound, ID 97
- `ClientboundSetHeldSlotPacket`: `net.minecraft.network.protocol.game.ClientboundSetHeldSlotPacket`, play/clientbound, ID 98
- `ClientboundSetObjectivePacket`: `net.minecraft.network.protocol.game.ClientboundSetObjectivePacket`, play/clientbound, ID 99
- `ClientboundSetPassengersPacket`: `net.minecraft.network.protocol.game.ClientboundSetPassengersPacket`, play/clientbound, ID 100
- `ClientboundSetPlayerInventoryPacket`: `net.minecraft.network.protocol.game.ClientboundSetPlayerInventoryPacket`, play/clientbound, ID 101
- `ClientboundSetPlayerTeamPacket`: `net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket`, play/clientbound, ID 102
- `ClientboundSetScorePacket`: `net.minecraft.network.protocol.game.ClientboundSetScorePacket`, play/clientbound, ID 103
- `ClientboundSetSimulationDistancePacket`: `net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket`, play/clientbound, ID 104
- `ClientboundSetSubtitleTextPacket`: `net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket`, play/clientbound, ID 105
- `ClientboundSetTimePacket`: `net.minecraft.network.protocol.game.ClientboundSetTimePacket`, play/clientbound, ID 106
- `ClientboundSetTitleTextPacket`: `net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket`, play/clientbound, ID 107
- `ClientboundSetTitlesAnimationPacket`: `net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket`, play/clientbound, ID 108
- `ClientboundSoundEntityPacket`: `net.minecraft.network.protocol.game.ClientboundSoundEntityPacket`, play/clientbound, ID 109
- `ClientboundSoundPacket`: `net.minecraft.network.protocol.game.ClientboundSoundPacket`, play/clientbound, ID 110
- `ClientboundStartConfigurationPacket`: `net.minecraft.network.protocol.game.ClientboundStartConfigurationPacket`, play/clientbound, ID 111
- `ClientboundStopSoundPacket`: `net.minecraft.network.protocol.game.ClientboundStopSoundPacket`, play/clientbound, ID 112
- `ClientboundSystemChatPacket`: `net.minecraft.network.protocol.game.ClientboundSystemChatPacket`, play/clientbound, ID 114
- `ClientboundTabListPacket`: `net.minecraft.network.protocol.game.ClientboundTabListPacket`, play/clientbound, ID 115
- `ClientboundTagQueryPacket`: `net.minecraft.network.protocol.game.ClientboundTagQueryPacket`, play/clientbound, ID 116
- `ClientboundTakeItemEntityPacket`: `net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket`, play/clientbound, ID 117
- `ClientboundTeleportEntityPacket`: `net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket`, play/clientbound, ID 118
- `ClientboundTestInstanceBlockStatus`: `net.minecraft.network.protocol.game.ClientboundTestInstanceBlockStatus`, play/clientbound, ID 119
- `ClientboundTickingStatePacket`: `net.minecraft.network.protocol.game.ClientboundTickingStatePacket`, play/clientbound, ID 120
- `ClientboundTickingStepPacket`: `net.minecraft.network.protocol.game.ClientboundTickingStepPacket`, play/clientbound, ID 121
- `ClientboundTrackedWaypointPacket`: `net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket`, play/clientbound, ID 131
- `ClientboundUpdateAdvancementsPacket`: `net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket`, play/clientbound, ID 123
- `ClientboundUpdateAttributesPacket`: `net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket`, play/clientbound, ID 124
- `ClientboundUpdateMobEffectPacket`: `net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket`, play/clientbound, ID 125
- `ClientboundUpdateRecipesPacket`: `net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket`, play/clientbound, ID 126
- `ServerboundAcceptTeleportationPacket`: `net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket`, play/serverbound, ID 0
- `ServerboundBlockEntityTagQueryPacket`: `net.minecraft.network.protocol.game.ServerboundBlockEntityTagQueryPacket`, play/serverbound, ID 1
- `ServerboundChangeDifficultyPacket`: `net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket`, play/serverbound, ID 3
- `ServerboundChangeGameModePacket`: `net.minecraft.network.protocol.game.ServerboundChangeGameModePacket`, play/serverbound, ID 4
- `ServerboundChatAckPacket`: `net.minecraft.network.protocol.game.ServerboundChatAckPacket`, play/serverbound, ID 5
- `ServerboundChatCommandPacket`: `net.minecraft.network.protocol.game.ServerboundChatCommandPacket`, play/serverbound, ID 6
- `ServerboundChatCommandSignedPacket`: `net.minecraft.network.protocol.game.ServerboundChatCommandSignedPacket`, play/serverbound, ID 7
- `ServerboundChatPacket`: `net.minecraft.network.protocol.game.ServerboundChatPacket`, play/serverbound, ID 8
- `ServerboundChatSessionUpdatePacket`: `net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket`, play/serverbound, ID 9
- `ServerboundChunkBatchReceivedPacket`: `net.minecraft.network.protocol.game.ServerboundChunkBatchReceivedPacket`, play/serverbound, ID 10
- `ServerboundClientCommandPacket`: `net.minecraft.network.protocol.game.ServerboundClientCommandPacket`, play/serverbound, ID 11
- `ServerboundClientTickEndPacket`: `net.minecraft.network.protocol.game.ServerboundClientTickEndPacket`, play/serverbound, ID 12
- `ServerboundCommandSuggestionPacket`: `net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket`, play/serverbound, ID 14
- `ServerboundConfigurationAcknowledgedPacket`: `net.minecraft.network.protocol.game.ServerboundConfigurationAcknowledgedPacket`, play/serverbound, ID 15
- `ServerboundContainerButtonClickPacket`: `net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket`, play/serverbound, ID 16
- `ServerboundContainerClickPacket`: `net.minecraft.network.protocol.game.ServerboundContainerClickPacket`, play/serverbound, ID 17
- `ServerboundContainerClosePacket`: `net.minecraft.network.protocol.game.ServerboundContainerClosePacket`, play/serverbound, ID 18
- `ServerboundContainerSlotStateChangedPacket`: `net.minecraft.network.protocol.game.ServerboundContainerSlotStateChangedPacket`, play/serverbound, ID 19
- `ServerboundDebugSampleSubscriptionPacket`: `net.minecraft.network.protocol.game.ServerboundDebugSampleSubscriptionPacket`, play/serverbound, ID 22
- `ServerboundEditBookPacket`: `net.minecraft.network.protocol.game.ServerboundEditBookPacket`, play/serverbound, ID 23
- `ServerboundEntityTagQueryPacket`: `net.minecraft.network.protocol.game.ServerboundEntityTagQueryPacket`, play/serverbound, ID 24
- `ServerboundInteractPacket`: `net.minecraft.network.protocol.game.ServerboundInteractPacket`, play/serverbound, ID 25
- `ServerboundJigsawGeneratePacket`: `net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket`, play/serverbound, ID 26
- `ServerboundLockDifficultyPacket`: `net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket`, play/serverbound, ID 28
- `ServerboundMovePlayerPacket_Pos`: `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Pos`, play/serverbound, ID 29
- `ServerboundMovePlayerPacket_PosRot`: `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$PosRot`, play/serverbound, ID 30
- `ServerboundMovePlayerPacket_Rot`: `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Rot`, play/serverbound, ID 31
- `ServerboundMovePlayerPacket_StatusOnly`: `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$StatusOnly`, play/serverbound, ID 32
- `ServerboundMoveVehiclePacket`: `net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket`, play/serverbound, ID 33
- `ServerboundPaddleBoatPacket`: `net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket`, play/serverbound, ID 34
- `ServerboundPickItemFromBlockPacket`: `net.minecraft.network.protocol.game.ServerboundPickItemFromBlockPacket`, play/serverbound, ID 35
- `ServerboundPickItemFromEntityPacket`: `net.minecraft.network.protocol.game.ServerboundPickItemFromEntityPacket`, play/serverbound, ID 36
- `ServerboundPlaceRecipePacket`: `net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket`, play/serverbound, ID 38
- `ServerboundPlayerAbilitiesPacket`: `net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket`, play/serverbound, ID 39
- `ServerboundPlayerActionPacket`: `net.minecraft.network.protocol.game.ServerboundPlayerActionPacket`, play/serverbound, ID 40
- `ServerboundPlayerCommandPacket`: `net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket`, play/serverbound, ID 41
- `ServerboundPlayerInputPacket`: `net.minecraft.network.protocol.game.ServerboundPlayerInputPacket`, play/serverbound, ID 42
- `ServerboundPlayerLoadedPacket`: `net.minecraft.network.protocol.game.ServerboundPlayerLoadedPacket`, play/serverbound, ID 43
- `ServerboundRecipeBookChangeSettingsPacket`: `net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket`, play/serverbound, ID 45
- `ServerboundRecipeBookSeenRecipePacket`: `net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket`, play/serverbound, ID 46
- `ServerboundRenameItemPacket`: `net.minecraft.network.protocol.game.ServerboundRenameItemPacket`, play/serverbound, ID 47
- `ServerboundSeenAdvancementsPacket`: `net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket`, play/serverbound, ID 49
- `ServerboundSelectBundleItemPacket`: `net.minecraft.network.protocol.game.ServerboundSelectBundleItemPacket`, play/serverbound, ID 2
- `ServerboundSelectTradePacket`: `net.minecraft.network.protocol.game.ServerboundSelectTradePacket`, play/serverbound, ID 50
- `ServerboundSetBeaconPacket`: `net.minecraft.network.protocol.game.ServerboundSetBeaconPacket`, play/serverbound, ID 51
- `ServerboundSetCarriedItemPacket`: `net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket`, play/serverbound, ID 52
- `ServerboundSetCommandBlockPacket`: `net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket`, play/serverbound, ID 53
- `ServerboundSetCommandMinecartPacket`: `net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket`, play/serverbound, ID 54
- `ServerboundSetCreativeModeSlotPacket`: `net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket`, play/serverbound, ID 55
- `ServerboundSetJigsawBlockPacket`: `net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket`, play/serverbound, ID 56
- `ServerboundSetStructureBlockPacket`: `net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket`, play/serverbound, ID 57
- `ServerboundSetTestBlockPacket`: `net.minecraft.network.protocol.game.ServerboundSetTestBlockPacket`, play/serverbound, ID 58
- `ServerboundSignUpdatePacket`: `net.minecraft.network.protocol.game.ServerboundSignUpdatePacket`, play/serverbound, ID 59
- `ServerboundSwingPacket`: `net.minecraft.network.protocol.game.ServerboundSwingPacket`, play/serverbound, ID 60
- `ServerboundTeleportToEntityPacket`: `net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket`, play/serverbound, ID 61
- `ServerboundTestInstanceBlockActionPacket`: `net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket`, play/serverbound, ID 62
- `ServerboundUseItemOnPacket`: `net.minecraft.network.protocol.game.ServerboundUseItemOnPacket`, play/serverbound, ID 63
- `ServerboundUseItemPacket`: `net.minecraft.network.protocol.game.ServerboundUseItemPacket`, play/serverbound, ID 64
- `ClientIntentionPacket`: `net.minecraft.network.protocol.handshake.ClientIntentionPacket`, handshake/serverbound, ID 0
- `ClientboundCustomQueryPacket`: `net.minecraft.network.protocol.login.ClientboundCustomQueryPacket`, login/clientbound, ID 4
- `ClientboundHelloPacket`: `net.minecraft.network.protocol.login.ClientboundHelloPacket`, login/clientbound, ID 1
- `ClientboundLoginCompressionPacket`: `net.minecraft.network.protocol.login.ClientboundLoginCompressionPacket`, login/clientbound, ID 3
- `ClientboundLoginDisconnectPacket`: `net.minecraft.network.protocol.login.ClientboundLoginDisconnectPacket`, login/clientbound, ID 0
- `ClientboundLoginFinishedPacket`: `net.minecraft.network.protocol.login.ClientboundLoginFinishedPacket`, login/clientbound, ID 2
- `ServerboundCustomQueryAnswerPacket`: `net.minecraft.network.protocol.login.ServerboundCustomQueryAnswerPacket`, login/serverbound, ID 2
- `ServerboundHelloPacket`: `net.minecraft.network.protocol.login.ServerboundHelloPacket`, login/serverbound, ID 0
- `ServerboundKeyPacket`: `net.minecraft.network.protocol.login.ServerboundKeyPacket`, login/serverbound, ID 1
- `ServerboundLoginAcknowledgedPacket`: `net.minecraft.network.protocol.login.ServerboundLoginAcknowledgedPacket`, login/serverbound, ID 3
- `ClientboundPongResponsePacket`: `net.minecraft.network.protocol.ping.ClientboundPongResponsePacket`, play/clientbound, ID 55
- `ClientboundPongResponsePacket`: `net.minecraft.network.protocol.ping.ClientboundPongResponsePacket`, status/clientbound, ID 1
- `ServerboundPingRequestPacket`: `net.minecraft.network.protocol.ping.ServerboundPingRequestPacket`, play/serverbound, ID 37
- `ServerboundPingRequestPacket`: `net.minecraft.network.protocol.ping.ServerboundPingRequestPacket`, status/serverbound, ID 1
- `ClientboundStatusResponsePacket`: `net.minecraft.network.protocol.status.ClientboundStatusResponsePacket`, status/clientbound, ID 0
- `ServerboundStatusRequestPacket`: `net.minecraft.network.protocol.status.ServerboundStatusRequestPacket`, status/serverbound, ID 0
