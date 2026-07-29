## Generated API Reference for "@shamoo/velocity-raw"

Canonical velocity 3.4.0; 358 declarations.

### BrigadierCommand

- Java: `com.velocitypowered.api.command.BrigadierCommand`
- Kind: `class`
- Constructor: `(arg0: com.mojang.brigadier.builder.LiteralArgumentBuilder<com.velocitypowered.api.command.CommandSource>)`
- Constructor: `(arg0: com.mojang.brigadier.tree.LiteralCommandNode<com.velocitypowered.api.command.CommandSource>)`
- Field: `FORWARD: int`
- Method: `getNode(): com.mojang.brigadier.tree.LiteralCommandNode<com.velocitypowered.api.command.CommandSource>`
- Method: `literalArgumentBuilder(arg0: java.lang.String): com.mojang.brigadier.builder.LiteralArgumentBuilder<com.velocitypowered.api.command.CommandSource>`
- Method: `requiredArgumentBuilder(arg0: java.lang.String, arg1: com.mojang.brigadier.arguments.ArgumentType<T>): com.mojang.brigadier.builder.RequiredArgumentBuilder<com.velocitypowered.api.command.CommandSource, T>`

### Command

- Java: `com.velocitypowered.api.command.Command`
- Kind: `interface`

### CommandInvocation

- Java: `com.velocitypowered.api.command.CommandInvocation`
- Kind: `interface`
- Method: `arguments(): T`
- Method: `source(): com.velocitypowered.api.command.CommandSource`

### CommandManager

- Java: `com.velocitypowered.api.command.CommandManager`
- Kind: `interface`
- Method: `executeAsync(arg0: com.velocitypowered.api.command.CommandSource, arg1: java.lang.String): java.util.concurrent.CompletableFuture<java.lang.Boolean>`
- Method: `executeImmediatelyAsync(arg0: com.velocitypowered.api.command.CommandSource, arg1: java.lang.String): java.util.concurrent.CompletableFuture<java.lang.Boolean>`
- Method: `getAliases(): java.util.Collection<java.lang.String>`
- Method: `getCommandMeta(arg0: java.lang.String): com.velocitypowered.api.command.CommandMeta`
- Method: `hasCommand(arg0: java.lang.String): boolean`
- Method: `hasCommand(arg0: java.lang.String, arg1: com.velocitypowered.api.command.CommandSource): boolean`
- Method: `metaBuilder(arg0: com.velocitypowered.api.command.BrigadierCommand): com.velocitypowered.api.command.CommandMeta$Builder`
- Method: `metaBuilder(arg0: java.lang.String): com.velocitypowered.api.command.CommandMeta$Builder`
- Method: `offerBrigadierSuggestions(arg0: com.velocitypowered.api.command.CommandSource, arg1: java.lang.String): java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>`
- Method: `offerSuggestions(arg0: com.velocitypowered.api.command.CommandSource, arg1: java.lang.String): java.util.concurrent.CompletableFuture<java.util.List<java.lang.String>>`
- Method: `register(arg0: com.velocitypowered.api.command.BrigadierCommand): void`
- Method: `register(arg0: com.velocitypowered.api.command.CommandMeta, arg1: com.velocitypowered.api.command.Command): void`
- Method: `register(arg0: java.lang.String, arg1: com.velocitypowered.api.command.Command, arg2: java.lang.String): void`
- Method: `unregister(arg0: com.velocitypowered.api.command.CommandMeta): void`
- Method: `unregister(arg0: java.lang.String): void`

### CommandMeta

- Java: `com.velocitypowered.api.command.CommandMeta`
- Kind: `interface`
- Method: `getAliases(): java.util.Collection<java.lang.String>`
- Method: `getHints(): java.util.Collection<com.mojang.brigadier.tree.CommandNode<com.velocitypowered.api.command.CommandSource>>`
- Method: `getPlugin(): java.lang.Object`

### CommandMeta_Builder

- Java: `com.velocitypowered.api.command.CommandMeta$Builder`
- Kind: `interface`
- Method: `aliases(arg0: java.lang.String): com.velocitypowered.api.command.CommandMeta$Builder`
- Method: `build(): com.velocitypowered.api.command.CommandMeta`
- Method: `hint(arg0: com.mojang.brigadier.tree.CommandNode<com.velocitypowered.api.command.CommandSource>): com.velocitypowered.api.command.CommandMeta$Builder`
- Method: `plugin(arg0: java.lang.Object): com.velocitypowered.api.command.CommandMeta$Builder`

### CommandResult

- Java: `com.velocitypowered.api.command.CommandResult`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.command.CommandResult`
- Method: `values(): com.velocitypowered.api.command.CommandResult[]`
- Enum: `EXCEPTION`
- Enum: `EXECUTED`
- Enum: `FORWARDED`
- Enum: `SYNTAX_ERROR`

### CommandSource

- Java: `com.velocitypowered.api.command.CommandSource`
- Kind: `interface`
- Method: `sendPlainMessage(arg0: java.lang.String): void`
- Method: `sendRichMessage(arg0: java.lang.String): void`
- Method: `sendRichMessage(arg0: java.lang.String, arg1: net.kyori.adventure.text.minimessage.tag.resolver.TagResolver): void`

### InvocableCommand

- Java: `com.velocitypowered.api.command.InvocableCommand`
- Kind: `interface`
- Method: `execute(arg0: I): void`
- Method: `hasPermission(arg0: I): boolean`
- Method: `suggest(arg0: I): java.util.List<java.lang.String>`
- Method: `suggestAsync(arg0: I): java.util.concurrent.CompletableFuture<java.util.List<java.lang.String>>`

### RawCommand

- Java: `com.velocitypowered.api.command.RawCommand`
- Kind: `interface`

### RawCommand_Invocation

- Java: `com.velocitypowered.api.command.RawCommand$Invocation`
- Kind: `interface`
- Method: `alias(): java.lang.String`

### SimpleCommand

- Java: `com.velocitypowered.api.command.SimpleCommand`
- Kind: `interface`

### SimpleCommand_Invocation

- Java: `com.velocitypowered.api.command.SimpleCommand$Invocation`
- Kind: `interface`
- Method: `alias(): java.lang.String`

### VelocityBrigadierMessage

- Java: `com.velocitypowered.api.command.VelocityBrigadierMessage`
- Kind: `class`
- Method: `asComponent(): net.kyori.adventure.text.Component`
- Method: `getString(): java.lang.String`
- Method: `tooltip(arg0: net.kyori.adventure.text.Component): com.velocitypowered.api.command.VelocityBrigadierMessage`

### AwaitingEventExecutor

- Java: `com.velocitypowered.api.event.AwaitingEventExecutor`
- Kind: `interface`
- Method: `execute(arg0: E): void`
- Method: `executeAsync(arg0: E): com.velocitypowered.api.event.EventTask`

### Continuation

- Java: `com.velocitypowered.api.event.Continuation`
- Kind: `interface`
- Method: `resume(): void`
- Method: `resumeWithException(arg0: java.lang.Throwable): void`

### EventHandler

- Java: `com.velocitypowered.api.event.EventHandler`
- Kind: `interface`
- Method: `execute(arg0: E): void`
- Method: `executeAsync(arg0: E): com.velocitypowered.api.event.EventTask`

### EventManager

- Java: `com.velocitypowered.api.event.EventManager`
- Kind: `interface`
- Method: `fire(arg0: E): java.util.concurrent.CompletableFuture<E>`
- Method: `fireAndForget(arg0: java.lang.Object): void`
- Method: `register(arg0: java.lang.Object, arg1: java.lang.Class<E>, arg2: com.velocitypowered.api.event.EventHandler<E>): void`
- Method: `register(arg0: java.lang.Object, arg1: java.lang.Class<E>, arg2: com.velocitypowered.api.event.PostOrder, arg3: com.velocitypowered.api.event.EventHandler<E>): void`
- Method: `register(arg0: java.lang.Object, arg1: java.lang.Class<E>, arg2: short, arg3: com.velocitypowered.api.event.EventHandler<E>): void`
- Method: `register(arg0: java.lang.Object, arg1: java.lang.Object): void`
- Method: `unregister(arg0: java.lang.Object, arg1: com.velocitypowered.api.event.EventHandler<E>): void`
- Method: `unregisterListener(arg0: java.lang.Object, arg1: java.lang.Object): void`
- Method: `unregisterListeners(arg0: java.lang.Object): void`

### EventTask

- Java: `com.velocitypowered.api.event.EventTask`
- Kind: `interface`
- Method: `async(arg0: java.lang.Runnable): com.velocitypowered.api.event.EventTask`
- Method: `execute(arg0: com.velocitypowered.api.event.Continuation): void`
- Method: `requiresAsync(): boolean`
- Method: `resumeWhenComplete(arg0: java.util.concurrent.CompletableFuture<?>): com.velocitypowered.api.event.EventTask`
- Method: `withContinuation(arg0: java.util.function.Consumer<com.velocitypowered.api.event.Continuation>): com.velocitypowered.api.event.EventTask`

### PostOrder

- Java: `com.velocitypowered.api.event.PostOrder`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.event.PostOrder`
- Method: `values(): com.velocitypowered.api.event.PostOrder[]`
- Enum: `CUSTOM`
- Enum: `EARLY`
- Enum: `FIRST`
- Enum: `LAST`
- Enum: `LATE`
- Enum: `NORMAL`

### ResultedEvent

- Java: `com.velocitypowered.api.event.ResultedEvent`
- Kind: `interface`
- Method: `getResult(): R`
- Method: `setResult(arg0: R): void`

### ResultedEvent_ComponentResult

- Java: `com.velocitypowered.api.event.ResultedEvent$ComponentResult`
- Kind: `class`
- Method: `allowed(): com.velocitypowered.api.event.ResultedEvent$ComponentResult`
- Method: `denied(arg0: net.kyori.adventure.text.Component): com.velocitypowered.api.event.ResultedEvent$ComponentResult`
- Method: `getReasonComponent(): java.util.Optional<net.kyori.adventure.text.Component>`
- Method: `isAllowed(): boolean`
- Method: `toString(): java.lang.String`

### ResultedEvent_GenericResult

- Java: `com.velocitypowered.api.event.ResultedEvent$GenericResult`
- Kind: `class`
- Method: `allowed(): com.velocitypowered.api.event.ResultedEvent$GenericResult`
- Method: `denied(): com.velocitypowered.api.event.ResultedEvent$GenericResult`
- Method: `isAllowed(): boolean`
- Method: `toString(): java.lang.String`

### ResultedEvent_Result

- Java: `com.velocitypowered.api.event.ResultedEvent$Result`
- Kind: `interface`
- Method: `isAllowed(): boolean`

### Subscribe

- Java: `com.velocitypowered.api.event.Subscribe`
- Kind: `interface`
- Method: `async(): boolean`
- Method: `order(): com.velocitypowered.api.event.PostOrder`
- Method: `priority(): short`

### AwaitingEvent

- Java: `com.velocitypowered.api.event.annotation.AwaitingEvent`
- Kind: `interface`

### CommandExecuteEvent

- Java: `com.velocitypowered.api.event.command.CommandExecuteEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.command.CommandSource, arg1: java.lang.String)`
- Constructor: `(arg0: com.velocitypowered.api.command.CommandSource, arg1: java.lang.String, arg2: com.velocitypowered.api.event.command.CommandExecuteEvent$InvocationInfo)`
- Method: `getCommand(): java.lang.String`
- Method: `getCommandSource(): com.velocitypowered.api.command.CommandSource`
- Method: `getInvocationInfo(): com.velocitypowered.api.event.command.CommandExecuteEvent$InvocationInfo`
- Method: `getResult(): com.velocitypowered.api.event.command.CommandExecuteEvent$CommandResult`
- Method: `setResult(arg0: com.velocitypowered.api.event.command.CommandExecuteEvent$CommandResult): void`
- Method: `toString(): java.lang.String`

### CommandExecuteEvent_CommandResult

- Java: `com.velocitypowered.api.event.command.CommandExecuteEvent$CommandResult`
- Kind: `class`
- Method: `allowed(): com.velocitypowered.api.event.command.CommandExecuteEvent$CommandResult`
- Method: `command(arg0: java.lang.String): com.velocitypowered.api.event.command.CommandExecuteEvent$CommandResult`
- Method: `denied(): com.velocitypowered.api.event.command.CommandExecuteEvent$CommandResult`
- Method: `forwardToServer(): com.velocitypowered.api.event.command.CommandExecuteEvent$CommandResult`
- Method: `forwardToServer(arg0: java.lang.String): com.velocitypowered.api.event.command.CommandExecuteEvent$CommandResult`
- Method: `getCommand(): java.util.Optional<java.lang.String>`
- Method: `isAllowed(): boolean`
- Method: `isForwardToServer(): boolean`
- Method: `toString(): java.lang.String`

### CommandExecuteEvent_InvocationInfo

- Java: `com.velocitypowered.api.event.command.CommandExecuteEvent$InvocationInfo`
- Kind: `record`
- Constructor: `(arg0: com.velocitypowered.api.event.command.CommandExecuteEvent$SignedState, arg1: com.velocitypowered.api.event.command.CommandExecuteEvent$Source)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `hashCode(): int`
- Method: `signedState(): com.velocitypowered.api.event.command.CommandExecuteEvent$SignedState`
- Method: `source(): com.velocitypowered.api.event.command.CommandExecuteEvent$Source`
- Method: `toString(): java.lang.String`

### CommandExecuteEvent_SignedState

- Java: `com.velocitypowered.api.event.command.CommandExecuteEvent$SignedState`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.event.command.CommandExecuteEvent$SignedState`
- Method: `values(): com.velocitypowered.api.event.command.CommandExecuteEvent$SignedState[]`
- Enum: `SIGNED_WITHOUT_ARGS`
- Enum: `SIGNED_WITH_ARGS`
- Enum: `UNSIGNED`
- Enum: `UNSUPPORTED`

### CommandExecuteEvent_Source

- Java: `com.velocitypowered.api.event.command.CommandExecuteEvent$Source`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.event.command.CommandExecuteEvent$Source`
- Method: `values(): com.velocitypowered.api.event.command.CommandExecuteEvent$Source[]`
- Enum: `API`
- Enum: `PLAYER`

### PlayerAvailableCommandsEvent

- Java: `com.velocitypowered.api.event.command.PlayerAvailableCommandsEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.mojang.brigadier.tree.RootCommandNode<?>)`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getRootNode(): com.mojang.brigadier.tree.RootCommandNode<?>`

### PostCommandInvocationEvent

- Java: `com.velocitypowered.api.event.command.PostCommandInvocationEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.command.CommandSource, arg1: java.lang.String, arg2: com.velocitypowered.api.command.CommandResult)`
- Method: `getCommand(): java.lang.String`
- Method: `getCommandSource(): com.velocitypowered.api.command.CommandSource`
- Method: `getResult(): com.velocitypowered.api.command.CommandResult`
- Method: `toString(): java.lang.String`

### ConnectionHandshakeEvent

- Java: `com.velocitypowered.api.event.connection.ConnectionHandshakeEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.InboundConnection)`
- Constructor: `(arg0: com.velocitypowered.api.proxy.InboundConnection, arg1: com.velocitypowered.api.network.HandshakeIntent)`
- Method: `getConnection(): com.velocitypowered.api.proxy.InboundConnection`
- Method: `getIntent(): com.velocitypowered.api.network.HandshakeIntent`
- Method: `toString(): java.lang.String`

### DisconnectEvent

- Java: `com.velocitypowered.api.event.connection.DisconnectEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.event.connection.DisconnectEvent$LoginStatus)`
- Method: `getLoginStatus(): com.velocitypowered.api.event.connection.DisconnectEvent$LoginStatus`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `toString(): java.lang.String`

### DisconnectEvent_LoginStatus

- Java: `com.velocitypowered.api.event.connection.DisconnectEvent$LoginStatus`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.event.connection.DisconnectEvent$LoginStatus`
- Method: `values(): com.velocitypowered.api.event.connection.DisconnectEvent$LoginStatus[]`
- Enum: `CANCELLED_BY_PROXY`
- Enum: `CANCELLED_BY_USER`
- Enum: `CANCELLED_BY_USER_BEFORE_COMPLETE`
- Enum: `CONFLICTING_LOGIN`
- Enum: `PRE_SERVER_JOIN`
- Enum: `SUCCESSFUL_LOGIN`

### LoginEvent

- Java: `com.velocitypowered.api.event.connection.LoginEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player)`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getResult(): com.velocitypowered.api.event.ResultedEvent$ComponentResult`
- Method: `setResult(arg0: com.velocitypowered.api.event.ResultedEvent$ComponentResult): void`
- Method: `toString(): java.lang.String`

### PluginMessageEvent

- Java: `com.velocitypowered.api.event.connection.PluginMessageEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.messages.ChannelMessageSource, arg1: com.velocitypowered.api.proxy.messages.ChannelMessageSink, arg2: com.velocitypowered.api.proxy.messages.ChannelIdentifier, arg3: byte[])`
- Method: `dataAsDataStream(): com.google.common.io.ByteArrayDataInput`
- Method: `dataAsInputStream(): java.io.ByteArrayInputStream`
- Method: `getData(): byte[]`
- Method: `getIdentifier(): com.velocitypowered.api.proxy.messages.ChannelIdentifier`
- Method: `getResult(): com.velocitypowered.api.event.connection.PluginMessageEvent$ForwardResult`
- Method: `getSource(): com.velocitypowered.api.proxy.messages.ChannelMessageSource`
- Method: `getTarget(): com.velocitypowered.api.proxy.messages.ChannelMessageSink`
- Method: `setResult(arg0: com.velocitypowered.api.event.connection.PluginMessageEvent$ForwardResult): void`
- Method: `toString(): java.lang.String`

### PluginMessageEvent_ForwardResult

- Java: `com.velocitypowered.api.event.connection.PluginMessageEvent$ForwardResult`
- Kind: `class`
- Method: `forward(): com.velocitypowered.api.event.connection.PluginMessageEvent$ForwardResult`
- Method: `handled(): com.velocitypowered.api.event.connection.PluginMessageEvent$ForwardResult`
- Method: `isAllowed(): boolean`
- Method: `toString(): java.lang.String`

### PostLoginEvent

- Java: `com.velocitypowered.api.event.connection.PostLoginEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player)`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `toString(): java.lang.String`

### PreLoginEvent

- Java: `com.velocitypowered.api.event.connection.PreLoginEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.InboundConnection, arg1: java.lang.String)`
- Constructor: `(arg0: com.velocitypowered.api.proxy.InboundConnection, arg1: java.lang.String, arg2: java.util.UUID)`
- Method: `getConnection(): com.velocitypowered.api.proxy.InboundConnection`
- Method: `getResult(): com.velocitypowered.api.event.connection.PreLoginEvent$PreLoginComponentResult`
- Method: `getUniqueId(): java.util.UUID`
- Method: `getUsername(): java.lang.String`
- Method: `setResult(arg0: com.velocitypowered.api.event.connection.PreLoginEvent$PreLoginComponentResult): void`
- Method: `toString(): java.lang.String`

### PreLoginEvent_PreLoginComponentResult

- Java: `com.velocitypowered.api.event.connection.PreLoginEvent$PreLoginComponentResult`
- Kind: `class`
- Method: `allowed(): com.velocitypowered.api.event.connection.PreLoginEvent$PreLoginComponentResult`
- Method: `denied(arg0: net.kyori.adventure.text.Component): com.velocitypowered.api.event.connection.PreLoginEvent$PreLoginComponentResult`
- Method: `forceOfflineMode(): com.velocitypowered.api.event.connection.PreLoginEvent$PreLoginComponentResult`
- Method: `forceOnlineMode(): com.velocitypowered.api.event.connection.PreLoginEvent$PreLoginComponentResult`
- Method: `getReasonComponent(): java.util.Optional<net.kyori.adventure.text.Component>`
- Method: `isAllowed(): boolean`
- Method: `isForceOfflineMode(): boolean`
- Method: `isOnlineModeAllowed(): boolean`
- Method: `toString(): java.lang.String`

### PreTransferEvent

- Java: `com.velocitypowered.api.event.connection.PreTransferEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: java.net.InetSocketAddress)`
- Method: `getResult(): com.velocitypowered.api.event.connection.PreTransferEvent$TransferResult`
- Method: `originalAddress(): java.net.InetSocketAddress`
- Method: `player(): com.velocitypowered.api.proxy.Player`
- Method: `setResult(arg0: com.velocitypowered.api.event.connection.PreTransferEvent$TransferResult): void`

### PreTransferEvent_TransferResult

- Java: `com.velocitypowered.api.event.connection.PreTransferEvent$TransferResult`
- Kind: `class`
- Method: `address(): java.net.InetSocketAddress`
- Method: `allowed(): com.velocitypowered.api.event.connection.PreTransferEvent$TransferResult`
- Method: `denied(): com.velocitypowered.api.event.connection.PreTransferEvent$TransferResult`
- Method: `isAllowed(): boolean`
- Method: `transferTo(arg0: java.net.InetSocketAddress): com.velocitypowered.api.event.connection.PreTransferEvent$TransferResult`

### PermissionsSetupEvent

- Java: `com.velocitypowered.api.event.permission.PermissionsSetupEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.permission.PermissionSubject, arg1: com.velocitypowered.api.permission.PermissionProvider)`
- Method: `createFunction(arg0: com.velocitypowered.api.permission.PermissionSubject): com.velocitypowered.api.permission.PermissionFunction`
- Method: `getProvider(): com.velocitypowered.api.permission.PermissionProvider`
- Method: `getSubject(): com.velocitypowered.api.permission.PermissionSubject`
- Method: `setProvider(arg0: com.velocitypowered.api.permission.PermissionProvider): void`
- Method: `toString(): java.lang.String`

### CookieReceiveEvent

- Java: `com.velocitypowered.api.event.player.CookieReceiveEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: net.kyori.adventure.key.Key, arg2: byte[])`
- Method: `getOriginalData(): byte[]`
- Method: `getOriginalKey(): net.kyori.adventure.key.Key`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getResult(): com.velocitypowered.api.event.player.CookieReceiveEvent$ForwardResult`
- Method: `setResult(arg0: com.velocitypowered.api.event.player.CookieReceiveEvent$ForwardResult): void`
- Method: `toString(): java.lang.String`

### CookieReceiveEvent_ForwardResult

- Java: `com.velocitypowered.api.event.player.CookieReceiveEvent$ForwardResult`
- Kind: `class`
- Method: `data(arg0: byte[]): com.velocitypowered.api.event.player.CookieReceiveEvent$ForwardResult`
- Method: `forward(): com.velocitypowered.api.event.player.CookieReceiveEvent$ForwardResult`
- Method: `getData(): byte[]`
- Method: `getKey(): net.kyori.adventure.key.Key`
- Method: `handled(): com.velocitypowered.api.event.player.CookieReceiveEvent$ForwardResult`
- Method: `isAllowed(): boolean`
- Method: `key(arg0: net.kyori.adventure.key.Key): com.velocitypowered.api.event.player.CookieReceiveEvent$ForwardResult`
- Method: `toString(): java.lang.String`

### CookieRequestEvent

- Java: `com.velocitypowered.api.event.player.CookieRequestEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: net.kyori.adventure.key.Key)`
- Method: `getOriginalKey(): net.kyori.adventure.key.Key`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getResult(): com.velocitypowered.api.event.player.CookieRequestEvent$ForwardResult`
- Method: `setResult(arg0: com.velocitypowered.api.event.player.CookieRequestEvent$ForwardResult): void`
- Method: `toString(): java.lang.String`

### CookieRequestEvent_ForwardResult

- Java: `com.velocitypowered.api.event.player.CookieRequestEvent$ForwardResult`
- Kind: `class`
- Method: `forward(): com.velocitypowered.api.event.player.CookieRequestEvent$ForwardResult`
- Method: `getKey(): net.kyori.adventure.key.Key`
- Method: `handled(): com.velocitypowered.api.event.player.CookieRequestEvent$ForwardResult`
- Method: `isAllowed(): boolean`
- Method: `key(arg0: net.kyori.adventure.key.Key): com.velocitypowered.api.event.player.CookieRequestEvent$ForwardResult`
- Method: `toString(): java.lang.String`

### CookieStoreEvent

- Java: `com.velocitypowered.api.event.player.CookieStoreEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: net.kyori.adventure.key.Key, arg2: byte[])`
- Method: `getOriginalData(): byte[]`
- Method: `getOriginalKey(): net.kyori.adventure.key.Key`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getResult(): com.velocitypowered.api.event.player.CookieStoreEvent$ForwardResult`
- Method: `setResult(arg0: com.velocitypowered.api.event.player.CookieStoreEvent$ForwardResult): void`
- Method: `toString(): java.lang.String`

### CookieStoreEvent_ForwardResult

- Java: `com.velocitypowered.api.event.player.CookieStoreEvent$ForwardResult`
- Kind: `class`
- Method: `data(arg0: byte[]): com.velocitypowered.api.event.player.CookieStoreEvent$ForwardResult`
- Method: `forward(): com.velocitypowered.api.event.player.CookieStoreEvent$ForwardResult`
- Method: `getData(): byte[]`
- Method: `getKey(): net.kyori.adventure.key.Key`
- Method: `handled(): com.velocitypowered.api.event.player.CookieStoreEvent$ForwardResult`
- Method: `isAllowed(): boolean`
- Method: `key(arg0: net.kyori.adventure.key.Key): com.velocitypowered.api.event.player.CookieStoreEvent$ForwardResult`
- Method: `toString(): java.lang.String`

### GameProfileRequestEvent

- Java: `com.velocitypowered.api.event.player.GameProfileRequestEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.InboundConnection, arg1: com.velocitypowered.api.util.GameProfile, arg2: boolean)`
- Method: `getConnection(): com.velocitypowered.api.proxy.InboundConnection`
- Method: `getGameProfile(): com.velocitypowered.api.util.GameProfile`
- Method: `getOriginalProfile(): com.velocitypowered.api.util.GameProfile`
- Method: `getUsername(): java.lang.String`
- Method: `isOnlineMode(): boolean`
- Method: `setGameProfile(arg0: com.velocitypowered.api.util.GameProfile): void`
- Method: `toString(): java.lang.String`

### KickedFromServerEvent

- Java: `com.velocitypowered.api.event.player.KickedFromServerEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.proxy.server.RegisteredServer, arg2: net.kyori.adventure.text.Component, arg3: boolean, arg4: com.velocitypowered.api.event.player.KickedFromServerEvent$ServerKickResult)`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getResult(): com.velocitypowered.api.event.player.KickedFromServerEvent$ServerKickResult`
- Method: `getServer(): com.velocitypowered.api.proxy.server.RegisteredServer`
- Method: `getServerKickReason(): java.util.Optional<net.kyori.adventure.text.Component>`
- Method: `kickedDuringLogin(): boolean`
- Method: `kickedDuringServerConnect(): boolean`
- Method: `setResult(arg0: com.velocitypowered.api.event.player.KickedFromServerEvent$ServerKickResult): void`

### KickedFromServerEvent_DisconnectPlayer

- Java: `com.velocitypowered.api.event.player.KickedFromServerEvent$DisconnectPlayer`
- Kind: `class`
- Method: `create(arg0: net.kyori.adventure.text.Component): com.velocitypowered.api.event.player.KickedFromServerEvent$DisconnectPlayer`
- Method: `getReasonComponent(): net.kyori.adventure.text.Component`
- Method: `isAllowed(): boolean`
- Method: `toString(): java.lang.String`

### KickedFromServerEvent_Notify

- Java: `com.velocitypowered.api.event.player.KickedFromServerEvent$Notify`
- Kind: `class`
- Method: `create(arg0: net.kyori.adventure.text.Component): com.velocitypowered.api.event.player.KickedFromServerEvent$Notify`
- Method: `getMessageComponent(): net.kyori.adventure.text.Component`
- Method: `isAllowed(): boolean`
- Method: `toString(): java.lang.String`

### KickedFromServerEvent_RedirectPlayer

- Java: `com.velocitypowered.api.event.player.KickedFromServerEvent$RedirectPlayer`
- Kind: `class`
- Method: `create(arg0: com.velocitypowered.api.proxy.server.RegisteredServer): com.velocitypowered.api.event.player.KickedFromServerEvent$ServerKickResult`
- Method: `create(arg0: com.velocitypowered.api.proxy.server.RegisteredServer, arg1: net.kyori.adventure.text.Component): com.velocitypowered.api.event.player.KickedFromServerEvent$RedirectPlayer`
- Method: `getMessageComponent(): net.kyori.adventure.text.Component`
- Method: `getServer(): com.velocitypowered.api.proxy.server.RegisteredServer`
- Method: `isAllowed(): boolean`
- Method: `toString(): java.lang.String`

### KickedFromServerEvent_ServerKickResult

- Java: `com.velocitypowered.api.event.player.KickedFromServerEvent$ServerKickResult`
- Kind: `interface`

### PlayerChannelRegisterEvent

- Java: `com.velocitypowered.api.event.player.PlayerChannelRegisterEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: java.util.List<com.velocitypowered.api.proxy.messages.ChannelIdentifier>)`
- Method: `getChannels(): java.util.List<com.velocitypowered.api.proxy.messages.ChannelIdentifier>`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `toString(): java.lang.String`

### PlayerChannelUnregisterEvent

- Java: `com.velocitypowered.api.event.player.PlayerChannelUnregisterEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: java.util.List<com.velocitypowered.api.proxy.messages.ChannelIdentifier>)`
- Method: `getChannels(): java.util.List<com.velocitypowered.api.proxy.messages.ChannelIdentifier>`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `toString(): java.lang.String`

### PlayerChatEvent

- Java: `com.velocitypowered.api.event.player.PlayerChatEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: java.lang.String)`
- Method: `getMessage(): java.lang.String`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getResult(): com.velocitypowered.api.event.player.PlayerChatEvent$ChatResult`
- Method: `setResult(arg0: com.velocitypowered.api.event.player.PlayerChatEvent$ChatResult): void`
- Method: `toString(): java.lang.String`

### PlayerChatEvent_ChatResult

- Java: `com.velocitypowered.api.event.player.PlayerChatEvent$ChatResult`
- Kind: `class`
- Method: `allowed(): com.velocitypowered.api.event.player.PlayerChatEvent$ChatResult`
- Method: `denied(): com.velocitypowered.api.event.player.PlayerChatEvent$ChatResult`
- Method: `getMessage(): java.util.Optional<java.lang.String>`
- Method: `isAllowed(): boolean`
- Method: `message(arg0: java.lang.String): com.velocitypowered.api.event.player.PlayerChatEvent$ChatResult`
- Method: `toString(): java.lang.String`

### PlayerChooseInitialServerEvent

- Java: `com.velocitypowered.api.event.player.PlayerChooseInitialServerEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.proxy.server.RegisteredServer)`
- Method: `getInitialServer(): java.util.Optional<com.velocitypowered.api.proxy.server.RegisteredServer>`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `setInitialServer(arg0: com.velocitypowered.api.proxy.server.RegisteredServer): void`
- Method: `toString(): java.lang.String`

### PlayerClientBrandEvent

- Java: `com.velocitypowered.api.event.player.PlayerClientBrandEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: java.lang.String)`
- Method: `getBrand(): java.lang.String`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `toString(): java.lang.String`

### PlayerModInfoEvent

- Java: `com.velocitypowered.api.event.player.PlayerModInfoEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.util.ModInfo)`
- Method: `getModInfo(): com.velocitypowered.api.util.ModInfo`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `toString(): java.lang.String`

### PlayerResourcePackStatusEvent

- Java: `com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent$Status)`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent$Status, arg2: com.velocitypowered.api.proxy.player.ResourcePackInfo)`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: java.util.UUID, arg2: com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent$Status, arg3: com.velocitypowered.api.proxy.player.ResourcePackInfo)`
- Method: `getPackId(): java.util.UUID`
- Method: `getPackInfo(): com.velocitypowered.api.proxy.player.ResourcePackInfo`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getStatus(): com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent$Status`
- Method: `isOverwriteKick(): boolean`
- Method: `setOverwriteKick(arg0: boolean): void`
- Method: `toString(): java.lang.String`

### PlayerResourcePackStatusEvent_Status

- Java: `com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent$Status`
- Kind: `enum`
- Method: `isIntermediate(): boolean`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent$Status`
- Method: `values(): com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent$Status[]`
- Enum: `ACCEPTED`
- Enum: `DECLINED`
- Enum: `DISCARDED`
- Enum: `DOWNLOADED`
- Enum: `FAILED_DOWNLOAD`
- Enum: `FAILED_RELOAD`
- Enum: `INVALID_URL`
- Enum: `SUCCESSFUL`

### PlayerSettingsChangedEvent

- Java: `com.velocitypowered.api.event.player.PlayerSettingsChangedEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.proxy.player.PlayerSettings)`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getPlayerSettings(): com.velocitypowered.api.proxy.player.PlayerSettings`
- Method: `toString(): java.lang.String`

### ServerConnectedEvent

- Java: `com.velocitypowered.api.event.player.ServerConnectedEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.proxy.server.RegisteredServer, arg2: com.velocitypowered.api.proxy.server.RegisteredServer)`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getPreviousServer(): java.util.Optional<com.velocitypowered.api.proxy.server.RegisteredServer>`
- Method: `getServer(): com.velocitypowered.api.proxy.server.RegisteredServer`
- Method: `toString(): java.lang.String`

### ServerLoginPluginMessageEvent

- Java: `com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.ServerConnection, arg1: com.velocitypowered.api.proxy.messages.ChannelIdentifier, arg2: byte[], arg3: int)`
- Method: `contentsAsDataStream(): com.google.common.io.ByteArrayDataInput`
- Method: `contentsAsInputStream(): java.io.ByteArrayInputStream`
- Method: `getConnection(): com.velocitypowered.api.proxy.ServerConnection`
- Method: `getContents(): byte[]`
- Method: `getIdentifier(): com.velocitypowered.api.proxy.messages.ChannelIdentifier`
- Method: `getResult(): com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent$ResponseResult`
- Method: `getSequenceId(): int`
- Method: `setResult(arg0: com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent$ResponseResult): void`
- Method: `toString(): java.lang.String`

### ServerLoginPluginMessageEvent_ResponseResult

- Java: `com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent$ResponseResult`
- Kind: `class`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getResponse(): byte[]`
- Method: `hashCode(): int`
- Method: `isAllowed(): boolean`
- Method: `reply(arg0: byte[]): com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent$ResponseResult`
- Method: `toString(): java.lang.String`
- Method: `unknown(): com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent$ResponseResult`

### ServerPostConnectEvent

- Java: `com.velocitypowered.api.event.player.ServerPostConnectEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.proxy.server.RegisteredServer)`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getPreviousServer(): com.velocitypowered.api.proxy.server.RegisteredServer`
- Method: `toString(): java.lang.String`

### ServerPreConnectEvent

- Java: `com.velocitypowered.api.event.player.ServerPreConnectEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.proxy.server.RegisteredServer)`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.proxy.server.RegisteredServer, arg2: com.velocitypowered.api.proxy.server.RegisteredServer)`
- Method: `getOriginalServer(): com.velocitypowered.api.proxy.server.RegisteredServer`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getPreviousServer(): com.velocitypowered.api.proxy.server.RegisteredServer`
- Method: `getResult(): com.velocitypowered.api.event.player.ServerPreConnectEvent$ServerResult`
- Method: `setResult(arg0: com.velocitypowered.api.event.player.ServerPreConnectEvent$ServerResult): void`
- Method: `toString(): java.lang.String`

### ServerPreConnectEvent_ServerResult

- Java: `com.velocitypowered.api.event.player.ServerPreConnectEvent$ServerResult`
- Kind: `class`
- Method: `allowed(arg0: com.velocitypowered.api.proxy.server.RegisteredServer): com.velocitypowered.api.event.player.ServerPreConnectEvent$ServerResult`
- Method: `denied(): com.velocitypowered.api.event.player.ServerPreConnectEvent$ServerResult`
- Method: `getServer(): java.util.Optional<com.velocitypowered.api.proxy.server.RegisteredServer>`
- Method: `isAllowed(): boolean`
- Method: `toString(): java.lang.String`

### ServerResourcePackRemoveEvent

- Java: `com.velocitypowered.api.event.player.ServerResourcePackRemoveEvent`
- Kind: `class`
- Constructor: `(arg0: java.util.UUID, arg1: com.velocitypowered.api.proxy.ServerConnection)`
- Method: `getPackId(): java.util.UUID`
- Method: `getResult(): com.velocitypowered.api.event.ResultedEvent$GenericResult`
- Method: `getServerConnection(): com.velocitypowered.api.proxy.ServerConnection`
- Method: `setResult(arg0: com.velocitypowered.api.event.ResultedEvent$GenericResult): void`

### ServerResourcePackSendEvent

- Java: `com.velocitypowered.api.event.player.ServerResourcePackSendEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.player.ResourcePackInfo, arg1: com.velocitypowered.api.proxy.ServerConnection)`
- Method: `getProvidedResourcePack(): com.velocitypowered.api.proxy.player.ResourcePackInfo`
- Method: `getReceivedResourcePack(): com.velocitypowered.api.proxy.player.ResourcePackInfo`
- Method: `getResult(): com.velocitypowered.api.event.ResultedEvent$GenericResult`
- Method: `getServerConnection(): com.velocitypowered.api.proxy.ServerConnection`
- Method: `setProvidedResourcePack(arg0: com.velocitypowered.api.proxy.player.ResourcePackInfo): void`
- Method: `setResult(arg0: com.velocitypowered.api.event.ResultedEvent$GenericResult): void`

### TabCompleteEvent

- Java: `com.velocitypowered.api.event.player.TabCompleteEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: java.lang.String, arg2: java.util.List<java.lang.String>)`
- Method: `getPartialMessage(): java.lang.String`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getSuggestions(): java.util.List<java.lang.String>`
- Method: `toString(): java.lang.String`

### PlayerConfigurationEvent

- Java: `com.velocitypowered.api.event.player.configuration.PlayerConfigurationEvent`
- Kind: `record`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.proxy.ServerConnection)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `hashCode(): int`
- Method: `player(): com.velocitypowered.api.proxy.Player`
- Method: `server(): com.velocitypowered.api.proxy.ServerConnection`
- Method: `toString(): java.lang.String`

### PlayerEnterConfigurationEvent

- Java: `com.velocitypowered.api.event.player.configuration.PlayerEnterConfigurationEvent`
- Kind: `record`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.proxy.ServerConnection)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `hashCode(): int`
- Method: `player(): com.velocitypowered.api.proxy.Player`
- Method: `server(): com.velocitypowered.api.proxy.ServerConnection`
- Method: `toString(): java.lang.String`

### PlayerEnteredConfigurationEvent

- Java: `com.velocitypowered.api.event.player.configuration.PlayerEnteredConfigurationEvent`
- Kind: `record`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.proxy.ServerConnection)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `hashCode(): int`
- Method: `player(): com.velocitypowered.api.proxy.Player`
- Method: `server(): com.velocitypowered.api.proxy.ServerConnection`
- Method: `toString(): java.lang.String`

### PlayerFinishConfigurationEvent

- Java: `com.velocitypowered.api.event.player.configuration.PlayerFinishConfigurationEvent`
- Kind: `record`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.proxy.ServerConnection)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `hashCode(): int`
- Method: `player(): com.velocitypowered.api.proxy.Player`
- Method: `server(): com.velocitypowered.api.proxy.ServerConnection`
- Method: `toString(): java.lang.String`

### PlayerFinishedConfigurationEvent

- Java: `com.velocitypowered.api.event.player.configuration.PlayerFinishedConfigurationEvent`
- Kind: `record`
- Constructor: `(arg0: com.velocitypowered.api.proxy.Player, arg1: com.velocitypowered.api.proxy.ServerConnection)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `hashCode(): int`
- Method: `player(): com.velocitypowered.api.proxy.Player`
- Method: `server(): com.velocitypowered.api.proxy.ServerConnection`
- Method: `toString(): java.lang.String`

### ListenerBoundEvent

- Java: `com.velocitypowered.api.event.proxy.ListenerBoundEvent`
- Kind: `class`
- Constructor: `(arg0: java.net.InetSocketAddress, arg1: com.velocitypowered.api.network.ListenerType)`
- Method: `getAddress(): java.net.InetSocketAddress`
- Method: `getListenerType(): com.velocitypowered.api.network.ListenerType`
- Method: `toString(): java.lang.String`

### ListenerCloseEvent

- Java: `com.velocitypowered.api.event.proxy.ListenerCloseEvent`
- Kind: `class`
- Constructor: `(arg0: java.net.InetSocketAddress, arg1: com.velocitypowered.api.network.ListenerType)`
- Method: `getAddress(): java.net.InetSocketAddress`
- Method: `getListenerType(): com.velocitypowered.api.network.ListenerType`
- Method: `toString(): java.lang.String`

### ProxyInitializeEvent

- Java: `com.velocitypowered.api.event.proxy.ProxyInitializeEvent`
- Kind: `class`
- Constructor: `()`
- Method: `toString(): java.lang.String`

### ProxyPingEvent

- Java: `com.velocitypowered.api.event.proxy.ProxyPingEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.InboundConnection, arg1: com.velocitypowered.api.proxy.server.ServerPing)`
- Method: `getConnection(): com.velocitypowered.api.proxy.InboundConnection`
- Method: `getPing(): com.velocitypowered.api.proxy.server.ServerPing`
- Method: `getResult(): com.velocitypowered.api.event.ResultedEvent$GenericResult`
- Method: `setPing(arg0: com.velocitypowered.api.proxy.server.ServerPing): void`
- Method: `setResult(arg0: com.velocitypowered.api.event.ResultedEvent$GenericResult): void`
- Method: `toString(): java.lang.String`

### ProxyPreShutdownEvent

- Java: `com.velocitypowered.api.event.proxy.ProxyPreShutdownEvent`
- Kind: `class`
- Constructor: `()`
- Method: `toString(): java.lang.String`

### ProxyReloadEvent

- Java: `com.velocitypowered.api.event.proxy.ProxyReloadEvent`
- Kind: `class`
- Constructor: `()`
- Method: `toString(): java.lang.String`

### ProxyShutdownEvent

- Java: `com.velocitypowered.api.event.proxy.ProxyShutdownEvent`
- Kind: `class`
- Constructor: `()`
- Method: `toString(): java.lang.String`

### ServerRegisteredEvent

- Java: `com.velocitypowered.api.event.proxy.server.ServerRegisteredEvent`
- Kind: `record`
- Constructor: `(arg0: com.velocitypowered.api.proxy.server.RegisteredServer)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `hashCode(): int`
- Method: `registeredServer(): com.velocitypowered.api.proxy.server.RegisteredServer`
- Method: `toString(): java.lang.String`

### ServerUnregisteredEvent

- Java: `com.velocitypowered.api.event.proxy.server.ServerUnregisteredEvent`
- Kind: `record`
- Constructor: `(arg0: com.velocitypowered.api.proxy.server.RegisteredServer)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`
- Method: `unregisteredServer(): com.velocitypowered.api.proxy.server.RegisteredServer`

### ProxyQueryEvent

- Java: `com.velocitypowered.api.event.query.ProxyQueryEvent`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.event.query.ProxyQueryEvent$QueryType, arg1: java.net.InetAddress, arg2: com.velocitypowered.api.proxy.server.QueryResponse)`
- Method: `getQuerierAddress(): java.net.InetAddress`
- Method: `getQueryType(): com.velocitypowered.api.event.query.ProxyQueryEvent$QueryType`
- Method: `getResponse(): com.velocitypowered.api.proxy.server.QueryResponse`
- Method: `setResponse(arg0: com.velocitypowered.api.proxy.server.QueryResponse): void`
- Method: `toString(): java.lang.String`

### ProxyQueryEvent_QueryType

- Java: `com.velocitypowered.api.event.query.ProxyQueryEvent$QueryType`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.event.query.ProxyQueryEvent$QueryType`
- Method: `values(): com.velocitypowered.api.event.query.ProxyQueryEvent$QueryType[]`
- Enum: `BASIC`
- Enum: `FULL`

### HandshakeIntent

- Java: `com.velocitypowered.api.network.HandshakeIntent`
- Kind: `enum`
- Method: `getById(arg0: int): com.velocitypowered.api.network.HandshakeIntent`
- Method: `id(): int`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.network.HandshakeIntent`
- Method: `values(): com.velocitypowered.api.network.HandshakeIntent[]`
- Enum: `LOGIN`
- Enum: `STATUS`
- Enum: `TRANSFER`

### ListenerType

- Java: `com.velocitypowered.api.network.ListenerType`
- Kind: `enum`
- Method: `toString(): java.lang.String`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.network.ListenerType`
- Method: `values(): com.velocitypowered.api.network.ListenerType[]`
- Enum: `MINECRAFT`
- Enum: `QUERY`

### ProtocolState

- Java: `com.velocitypowered.api.network.ProtocolState`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.network.ProtocolState`
- Method: `values(): com.velocitypowered.api.network.ProtocolState[]`
- Enum: `CONFIGURATION`
- Enum: `HANDSHAKE`
- Enum: `LOGIN`
- Enum: `PLAY`
- Enum: `STATUS`

### ProtocolVersion

- Java: `com.velocitypowered.api.network.ProtocolVersion`
- Kind: `enum`
- Field: `ID_TO_PROTOCOL_CONSTANT: com.google.common.collect.ImmutableMap<java.lang.Integer, com.velocitypowered.api.network.ProtocolVersion>`
- Field: `MAXIMUM_VERSION: com.velocitypowered.api.network.ProtocolVersion`
- Field: `MINIMUM_VERSION: com.velocitypowered.api.network.ProtocolVersion`
- Field: `SUPPORTED_VERSIONS: java.util.Set<com.velocitypowered.api.network.ProtocolVersion>`
- Field: `SUPPORTED_VERSION_STRING: java.lang.String`
- Method: `getMostRecentSupportedVersion(): java.lang.String`
- Method: `getName(): java.lang.String`
- Method: `getProtocol(): int`
- Method: `getProtocolVersion(arg0: int): com.velocitypowered.api.network.ProtocolVersion`
- Method: `getVersionIntroducedIn(): java.lang.String`
- Method: `getVersionsSupportedBy(): java.util.List<java.lang.String>`
- Method: `isLegacy(): boolean`
- Method: `isSupported(): boolean`
- Method: `isSupported(arg0: int): boolean`
- Method: `isSupported(arg0: com.velocitypowered.api.network.ProtocolVersion): boolean`
- Method: `isUnknown(): boolean`
- Method: `toString(): java.lang.String`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.network.ProtocolVersion`
- Method: `values(): com.velocitypowered.api.network.ProtocolVersion[]`
- Enum: `LEGACY`
- Enum: `MINECRAFT_1_10`
- Enum: `MINECRAFT_1_11`
- Enum: `MINECRAFT_1_11_1`
- Enum: `MINECRAFT_1_12`
- Enum: `MINECRAFT_1_12_1`
- Enum: `MINECRAFT_1_12_2`
- Enum: `MINECRAFT_1_13`
- Enum: `MINECRAFT_1_13_1`
- Enum: `MINECRAFT_1_13_2`
- Enum: `MINECRAFT_1_14`
- Enum: `MINECRAFT_1_14_1`
- Enum: `MINECRAFT_1_14_2`
- Enum: `MINECRAFT_1_14_3`
- Enum: `MINECRAFT_1_14_4`
- Enum: `MINECRAFT_1_15`
- Enum: `MINECRAFT_1_15_1`
- Enum: `MINECRAFT_1_15_2`
- Enum: `MINECRAFT_1_16`
- Enum: `MINECRAFT_1_16_1`
- Enum: `MINECRAFT_1_16_2`
- Enum: `MINECRAFT_1_16_3`
- Enum: `MINECRAFT_1_16_4`
- Enum: `MINECRAFT_1_17`
- Enum: `MINECRAFT_1_17_1`
- Enum: `MINECRAFT_1_18`
- Enum: `MINECRAFT_1_18_2`
- Enum: `MINECRAFT_1_19`
- Enum: `MINECRAFT_1_19_1`
- Enum: `MINECRAFT_1_19_3`
- Enum: `MINECRAFT_1_19_4`
- Enum: `MINECRAFT_1_20`
- Enum: `MINECRAFT_1_20_2`
- Enum: `MINECRAFT_1_20_3`
- Enum: `MINECRAFT_1_20_5`
- Enum: `MINECRAFT_1_21`
- Enum: `MINECRAFT_1_21_11`
- Enum: `MINECRAFT_1_21_2`
- Enum: `MINECRAFT_1_21_4`
- Enum: `MINECRAFT_1_21_5`
- Enum: `MINECRAFT_1_21_6`
- Enum: `MINECRAFT_1_21_7`
- Enum: `MINECRAFT_1_21_9`
- Enum: `MINECRAFT_1_7_2`
- Enum: `MINECRAFT_1_7_6`
- Enum: `MINECRAFT_1_8`
- Enum: `MINECRAFT_1_9`
- Enum: `MINECRAFT_1_9_1`
- Enum: `MINECRAFT_1_9_2`
- Enum: `MINECRAFT_1_9_4`
- Enum: `UNKNOWN`

### PermissionFunction

- Java: `com.velocitypowered.api.permission.PermissionFunction`
- Kind: `interface`
- Field: `ALWAYS_FALSE: com.velocitypowered.api.permission.PermissionFunction`
- Field: `ALWAYS_TRUE: com.velocitypowered.api.permission.PermissionFunction`
- Field: `ALWAYS_UNDEFINED: com.velocitypowered.api.permission.PermissionFunction`
- Method: `getPermissionValue(arg0: java.lang.String): com.velocitypowered.api.permission.Tristate`

### PermissionProvider

- Java: `com.velocitypowered.api.permission.PermissionProvider`
- Kind: `interface`
- Method: `createFunction(arg0: com.velocitypowered.api.permission.PermissionSubject): com.velocitypowered.api.permission.PermissionFunction`

### PermissionSubject

- Java: `com.velocitypowered.api.permission.PermissionSubject`
- Kind: `interface`
- Method: `getPermissionChecker(): net.kyori.adventure.permission.PermissionChecker`
- Method: `getPermissionValue(arg0: java.lang.String): com.velocitypowered.api.permission.Tristate`
- Method: `hasPermission(arg0: java.lang.String): boolean`

### Tristate

- Java: `com.velocitypowered.api.permission.Tristate`
- Kind: `enum`
- Method: `asBoolean(): boolean`
- Method: `fromBoolean(arg0: boolean): com.velocitypowered.api.permission.Tristate`
- Method: `fromNullableBoolean(arg0: java.lang.Boolean): com.velocitypowered.api.permission.Tristate`
- Method: `fromOptionalBoolean(arg0: java.util.Optional<java.lang.Boolean>): com.velocitypowered.api.permission.Tristate`
- Method: `toAdventureTriState(): net.kyori.adventure.util.TriState`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.permission.Tristate`
- Method: `values(): com.velocitypowered.api.permission.Tristate[]`
- Enum: `FALSE`
- Enum: `TRUE`
- Enum: `UNDEFINED`

### Dependency

- Java: `com.velocitypowered.api.plugin.Dependency`
- Kind: `interface`
- Method: `id(): java.lang.String`
- Method: `optional(): boolean`

### InvalidPluginException

- Java: `com.velocitypowered.api.plugin.InvalidPluginException`
- Kind: `class`
- Constructor: `()`
- Constructor: `(arg0: java.lang.String)`
- Constructor: `(arg0: java.lang.String, arg1: java.lang.Throwable)`
- Constructor: `(arg0: java.lang.Throwable)`

### Plugin

- Java: `com.velocitypowered.api.plugin.Plugin`
- Kind: `interface`
- Method: `authors(): java.lang.String[]`
- Method: `dependencies(): com.velocitypowered.api.plugin.Dependency[]`
- Method: `description(): java.lang.String`
- Method: `id(): java.lang.String`
- Method: `name(): java.lang.String`
- Method: `url(): java.lang.String`
- Method: `version(): java.lang.String`

### PluginContainer

- Java: `com.velocitypowered.api.plugin.PluginContainer`
- Kind: `interface`
- Method: `getDescription(): com.velocitypowered.api.plugin.PluginDescription`
- Method: `getExecutorService(): java.util.concurrent.ExecutorService`
- Method: `getInstance(): java.util.Optional<?>`

### PluginDescription

- Java: `com.velocitypowered.api.plugin.PluginDescription`
- Kind: `interface`
- Field: `ID_PATTERN: java.util.regex.Pattern`
- Method: `getAuthors(): java.util.List<java.lang.String>`
- Method: `getDependencies(): java.util.Collection<com.velocitypowered.api.plugin.meta.PluginDependency>`
- Method: `getDependency(arg0: java.lang.String): java.util.Optional<com.velocitypowered.api.plugin.meta.PluginDependency>`
- Method: `getDescription(): java.util.Optional<java.lang.String>`
- Method: `getId(): java.lang.String`
- Method: `getName(): java.util.Optional<java.lang.String>`
- Method: `getSource(): java.util.Optional<java.nio.file.Path>`
- Method: `getUrl(): java.util.Optional<java.lang.String>`
- Method: `getVersion(): java.util.Optional<java.lang.String>`

### PluginManager

- Java: `com.velocitypowered.api.plugin.PluginManager`
- Kind: `interface`
- Method: `addToClasspath(arg0: java.lang.Object, arg1: java.nio.file.Path): void`
- Method: `ensurePluginContainer(arg0: java.lang.Object): com.velocitypowered.api.plugin.PluginContainer`
- Method: `fromInstance(arg0: java.lang.Object): java.util.Optional<com.velocitypowered.api.plugin.PluginContainer>`
- Method: `getPlugin(arg0: java.lang.String): java.util.Optional<com.velocitypowered.api.plugin.PluginContainer>`
- Method: `getPlugins(): java.util.Collection<com.velocitypowered.api.plugin.PluginContainer>`
- Method: `isLoaded(arg0: java.lang.String): boolean`

### DataDirectory

- Java: `com.velocitypowered.api.plugin.annotation.DataDirectory`
- Kind: `interface`

### PluginAnnotationProcessor

- Java: `com.velocitypowered.api.plugin.ap.PluginAnnotationProcessor`
- Kind: `class`
- Constructor: `()`
- Method: `getSupportedSourceVersion(): javax.lang.model.SourceVersion`
- Method: `init(arg0: javax.annotation.processing.ProcessingEnvironment): void`
- Method: `process(arg0: java.util.Set<? extends javax.lang.model.element.TypeElement>, arg1: javax.annotation.processing.RoundEnvironment): boolean`

### SerializedPluginDescription

- Java: `com.velocitypowered.api.plugin.ap.SerializedPluginDescription`
- Kind: `class`
- Field: `ID_PATTERN: java.util.regex.Pattern`
- Field: `ID_PATTERN_STRING: java.lang.String`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getAuthors(): java.util.List<java.lang.String>`
- Method: `getDependencies(): java.util.List<com.velocitypowered.api.plugin.ap.SerializedPluginDescription$Dependency>`
- Method: `getDescription(): java.lang.String`
- Method: `getId(): java.lang.String`
- Method: `getMain(): java.lang.String`
- Method: `getName(): java.lang.String`
- Method: `getUrl(): java.lang.String`
- Method: `getVersion(): java.lang.String`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`

### SerializedPluginDescription_Dependency

- Java: `com.velocitypowered.api.plugin.ap.SerializedPluginDescription$Dependency`
- Kind: `class`
- Constructor: `(arg0: java.lang.String, arg1: boolean)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getId(): java.lang.String`
- Method: `hashCode(): int`
- Method: `isOptional(): boolean`
- Method: `toString(): java.lang.String`

### PluginDependency

- Java: `com.velocitypowered.api.plugin.meta.PluginDependency`
- Kind: `class`
- Constructor: `(arg0: java.lang.String, arg1: java.lang.String, arg2: boolean)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getId(): java.lang.String`
- Method: `getVersion(): java.util.Optional<java.lang.String>`
- Method: `hashCode(): int`
- Method: `isOptional(): boolean`
- Method: `toString(): java.lang.String`

### ConnectionRequestBuilder

- Java: `com.velocitypowered.api.proxy.ConnectionRequestBuilder`
- Kind: `interface`
- Method: `connect(): java.util.concurrent.CompletableFuture<com.velocitypowered.api.proxy.ConnectionRequestBuilder$Result>`
- Method: `connectWithIndication(): java.util.concurrent.CompletableFuture<java.lang.Boolean>`
- Method: `fireAndForget(): void`
- Method: `getServer(): com.velocitypowered.api.proxy.server.RegisteredServer`

### ConnectionRequestBuilder_Result

- Java: `com.velocitypowered.api.proxy.ConnectionRequestBuilder$Result`
- Kind: `interface`
- Method: `getAttemptedConnection(): com.velocitypowered.api.proxy.server.RegisteredServer`
- Method: `getReasonComponent(): java.util.Optional<net.kyori.adventure.text.Component>`
- Method: `getStatus(): com.velocitypowered.api.proxy.ConnectionRequestBuilder$Status`
- Method: `isSuccessful(): boolean`

### ConnectionRequestBuilder_Status

- Java: `com.velocitypowered.api.proxy.ConnectionRequestBuilder$Status`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.proxy.ConnectionRequestBuilder$Status`
- Method: `values(): com.velocitypowered.api.proxy.ConnectionRequestBuilder$Status[]`
- Enum: `ALREADY_CONNECTED`
- Enum: `CONNECTION_CANCELLED`
- Enum: `CONNECTION_IN_PROGRESS`
- Enum: `SERVER_DISCONNECTED`
- Enum: `SUCCESS`

### ConsoleCommandSource

- Java: `com.velocitypowered.api.proxy.ConsoleCommandSource`
- Kind: `interface`

### InboundConnection

- Java: `com.velocitypowered.api.proxy.InboundConnection`
- Kind: `interface`
- Method: `getHandshakeIntent(): com.velocitypowered.api.network.HandshakeIntent`
- Method: `getProtocolState(): com.velocitypowered.api.network.ProtocolState`
- Method: `getProtocolVersion(): com.velocitypowered.api.network.ProtocolVersion`
- Method: `getRawVirtualHost(): java.util.Optional<java.lang.String>`
- Method: `getRemoteAddress(): java.net.InetSocketAddress`
- Method: `getVirtualHost(): java.util.Optional<java.net.InetSocketAddress>`
- Method: `isActive(): boolean`

### LoginPhaseConnection

- Java: `com.velocitypowered.api.proxy.LoginPhaseConnection`
- Kind: `interface`
- Method: `sendLoginPluginMessage(arg0: com.velocitypowered.api.proxy.messages.ChannelIdentifier, arg1: byte[], arg2: com.velocitypowered.api.proxy.LoginPhaseConnection$MessageConsumer): void`

### LoginPhaseConnection_MessageConsumer

- Java: `com.velocitypowered.api.proxy.LoginPhaseConnection$MessageConsumer`
- Kind: `interface`
- Method: `onMessageResponse(arg0: byte[]): void`

### Player

- Java: `com.velocitypowered.api.proxy.Player`
- Kind: `interface`
- Method: `addCustomChatCompletions(arg0: java.util.Collection<java.lang.String>): void`
- Method: `asHoverEvent(arg0: java.util.function.UnaryOperator<net.kyori.adventure.text.event.HoverEvent$ShowEntity>): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.event.HoverEvent$ShowEntity>`
- Method: `clearHeaderAndFooter(): void`
- Method: `clearPlayerListHeaderAndFooter(): void`
- Method: `closeDialog(): void`
- Method: `createConnectionRequest(arg0: com.velocitypowered.api.proxy.server.RegisteredServer): com.velocitypowered.api.proxy.ConnectionRequestBuilder`
- Method: `disconnect(arg0: net.kyori.adventure.text.Component): void`
- Method: `getAppliedResourcePack(): com.velocitypowered.api.proxy.player.ResourcePackInfo`
- Method: `getAppliedResourcePacks(): java.util.Collection<com.velocitypowered.api.proxy.player.ResourcePackInfo>`
- Method: `getClientBrand(): java.lang.String`
- Method: `getCurrentServer(): java.util.Optional<com.velocitypowered.api.proxy.ServerConnection>`
- Method: `getEffectiveLocale(): java.util.Locale`
- Method: `getGameProfile(): com.velocitypowered.api.util.GameProfile`
- Method: `getGameProfileProperties(): java.util.List<com.velocitypowered.api.util.GameProfile$Property>`
- Method: `getModInfo(): java.util.Optional<com.velocitypowered.api.util.ModInfo>`
- Method: `getPendingResourcePack(): com.velocitypowered.api.proxy.player.ResourcePackInfo`
- Method: `getPendingResourcePacks(): java.util.Collection<com.velocitypowered.api.proxy.player.ResourcePackInfo>`
- Method: `getPing(): long`
- Method: `getPlayerListFooter(): net.kyori.adventure.text.Component`
- Method: `getPlayerListHeader(): net.kyori.adventure.text.Component`
- Method: `getPlayerSettings(): com.velocitypowered.api.proxy.player.PlayerSettings`
- Method: `getTabList(): com.velocitypowered.api.proxy.player.TabList`
- Method: `getUniqueId(): java.util.UUID`
- Method: `getUsername(): java.lang.String`
- Method: `hasSentPlayerSettings(): boolean`
- Method: `isOnlineMode(): boolean`
- Method: `key(): net.kyori.adventure.key.Key`
- Method: `openBook(arg0: net.kyori.adventure.inventory.Book): void`
- Method: `playSound(arg0: net.kyori.adventure.sound.Sound): void`
- Method: `playSound(arg0: net.kyori.adventure.sound.Sound, arg1: double, arg2: double, arg3: double): void`
- Method: `playSound(arg0: net.kyori.adventure.sound.Sound, arg1: net.kyori.adventure.sound.Sound$Emitter): void`
- Method: `removeCustomChatCompletions(arg0: java.util.Collection<java.lang.String>): void`
- Method: `requestCookie(arg0: net.kyori.adventure.key.Key): void`
- Method: `sendPluginMessage(arg0: com.velocitypowered.api.proxy.messages.ChannelIdentifier, arg1: com.velocitypowered.api.proxy.messages.PluginMessageEncoder): boolean`
- Method: `sendPluginMessage(arg0: com.velocitypowered.api.proxy.messages.ChannelIdentifier, arg1: byte[]): boolean`
- Method: `sendResourcePack(arg0: java.lang.String): void`
- Method: `sendResourcePack(arg0: java.lang.String, arg1: byte[]): void`
- Method: `sendResourcePackOffer(arg0: com.velocitypowered.api.proxy.player.ResourcePackInfo): void`
- Method: `setCustomChatCompletions(arg0: java.util.Collection<java.lang.String>): void`
- Method: `setEffectiveLocale(arg0: java.util.Locale): void`
- Method: `setGameProfileProperties(arg0: java.util.List<com.velocitypowered.api.util.GameProfile$Property>): void`
- Method: `setServerLinks(arg0: java.util.List<com.velocitypowered.api.util.ServerLink>): void`
- Method: `showDialog(arg0: net.kyori.adventure.dialog.DialogLike): void`
- Method: `spoofChatInput(arg0: java.lang.String): void`
- Method: `stopSound(arg0: net.kyori.adventure.sound.SoundStop): void`
- Method: `storeCookie(arg0: net.kyori.adventure.key.Key, arg1: byte[]): void`
- Method: `transferToHost(arg0: java.net.InetSocketAddress): void`

### ProxyServer

- Java: `com.velocitypowered.api.proxy.ProxyServer`
- Kind: `interface`
- Method: `closeListeners(): void`
- Method: `createRawRegisteredServer(arg0: com.velocitypowered.api.proxy.server.ServerInfo): com.velocitypowered.api.proxy.server.RegisteredServer`
- Method: `createResourcePackBuilder(arg0: java.lang.String): com.velocitypowered.api.proxy.player.ResourcePackInfo$Builder`
- Method: `getAllPlayers(): java.util.Collection<com.velocitypowered.api.proxy.Player>`
- Method: `getAllServers(): java.util.Collection<com.velocitypowered.api.proxy.server.RegisteredServer>`
- Method: `getBoundAddress(): java.net.InetSocketAddress`
- Method: `getChannelRegistrar(): com.velocitypowered.api.proxy.messages.ChannelRegistrar`
- Method: `getCommandManager(): com.velocitypowered.api.command.CommandManager`
- Method: `getConfiguration(): com.velocitypowered.api.proxy.config.ProxyConfig`
- Method: `getConsoleCommandSource(): com.velocitypowered.api.proxy.ConsoleCommandSource`
- Method: `getEventManager(): com.velocitypowered.api.event.EventManager`
- Method: `getPlayer(arg0: java.lang.String): java.util.Optional<com.velocitypowered.api.proxy.Player>`
- Method: `getPlayer(arg0: java.util.UUID): java.util.Optional<com.velocitypowered.api.proxy.Player>`
- Method: `getPlayerCount(): int`
- Method: `getPluginManager(): com.velocitypowered.api.plugin.PluginManager`
- Method: `getScheduler(): com.velocitypowered.api.scheduler.Scheduler`
- Method: `getServer(arg0: java.lang.String): java.util.Optional<com.velocitypowered.api.proxy.server.RegisteredServer>`
- Method: `getVersion(): com.velocitypowered.api.util.ProxyVersion`
- Method: `isShuttingDown(): boolean`
- Method: `matchPlayer(arg0: java.lang.String): java.util.Collection<com.velocitypowered.api.proxy.Player>`
- Method: `matchServer(arg0: java.lang.String): java.util.Collection<com.velocitypowered.api.proxy.server.RegisteredServer>`
- Method: `registerServer(arg0: com.velocitypowered.api.proxy.server.ServerInfo): com.velocitypowered.api.proxy.server.RegisteredServer`
- Method: `shutdown(): void`
- Method: `shutdown(arg0: net.kyori.adventure.text.Component): void`
- Method: `unregisterServer(arg0: com.velocitypowered.api.proxy.server.ServerInfo): void`

### ServerConnection

- Java: `com.velocitypowered.api.proxy.ServerConnection`
- Kind: `interface`
- Method: `getPlayer(): com.velocitypowered.api.proxy.Player`
- Method: `getPreviousServer(): java.util.Optional<com.velocitypowered.api.proxy.server.RegisteredServer>`
- Method: `getServer(): com.velocitypowered.api.proxy.server.RegisteredServer`
- Method: `getServerInfo(): com.velocitypowered.api.proxy.server.ServerInfo`

### ProxyConfig

- Java: `com.velocitypowered.api.proxy.config.ProxyConfig`
- Kind: `interface`
- Method: `getAttemptConnectionOrder(): java.util.List<java.lang.String>`
- Method: `getCommandRatelimit(): int`
- Method: `getCompressionLevel(): int`
- Method: `getCompressionThreshold(): int`
- Method: `getConnectTimeout(): int`
- Method: `getFavicon(): java.util.Optional<com.velocitypowered.api.util.Favicon>`
- Method: `getForcedHosts(): java.util.Map<java.lang.String, java.util.List<java.lang.String>>`
- Method: `getKickAfterRateLimitedCommands(): int`
- Method: `getKickAfterRateLimitedTabCompletes(): int`
- Method: `getLoginRatelimit(): int`
- Method: `getMotd(): net.kyori.adventure.text.Component`
- Method: `getQueryMap(): java.lang.String`
- Method: `getQueryPort(): int`
- Method: `getReadTimeout(): int`
- Method: `getServers(): java.util.Map<java.lang.String, java.lang.String>`
- Method: `getShowMaxPlayers(): int`
- Method: `getTabCompleteRatelimit(): int`
- Method: `isAnnounceForge(): boolean`
- Method: `isForwardCommandsIfRateLimited(): boolean`
- Method: `isKickOnCommandRateLimit(): boolean`
- Method: `isKickOnTabCompleteRateLimit(): boolean`
- Method: `isOnlineMode(): boolean`
- Method: `isQueryEnabled(): boolean`
- Method: `shouldPreventClientProxyConnections(): boolean`
- Method: `shouldQueryShowPlugins(): boolean`

### IdentifiedKey

- Java: `com.velocitypowered.api.proxy.crypto.IdentifiedKey`
- Kind: `interface`
- Method: `getKeyRevision(): com.velocitypowered.api.proxy.crypto.IdentifiedKey$Revision`
- Method: `getSignatureHolder(): java.util.UUID`
- Method: `getSignedPublicKey(): java.security.PublicKey`
- Method: `verifyDataSignature(arg0: byte[], arg1: byte[]): boolean`

### IdentifiedKey_Revision

- Java: `com.velocitypowered.api.proxy.crypto.IdentifiedKey$Revision`
- Kind: `enum`
- Method: `getApplicableTo(): java.util.Set<com.velocitypowered.api.network.ProtocolVersion>`
- Method: `getBackwardsCompatibleTo(): java.util.Set<com.velocitypowered.api.proxy.crypto.IdentifiedKey$Revision>`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.proxy.crypto.IdentifiedKey$Revision`
- Method: `values(): com.velocitypowered.api.proxy.crypto.IdentifiedKey$Revision[]`
- Enum: `GENERIC_V1`
- Enum: `LINKED_V2`

### KeyIdentifiable

- Java: `com.velocitypowered.api.proxy.crypto.KeyIdentifiable`
- Kind: `interface`
- Method: `getIdentifiedKey(): com.velocitypowered.api.proxy.crypto.IdentifiedKey`

### KeySigned

- Java: `com.velocitypowered.api.proxy.crypto.KeySigned`
- Kind: `interface`
- Method: `getExpiryTemporal(): java.time.Instant`
- Method: `getSalt(): byte[]`
- Method: `getSignature(): byte[]`
- Method: `getSigner(): java.security.PublicKey`
- Method: `hasExpired(): boolean`
- Method: `isSignatureValid(): boolean`

### SignedMessage

- Java: `com.velocitypowered.api.proxy.crypto.SignedMessage`
- Kind: `interface`
- Method: `getMessage(): java.lang.String`
- Method: `getSignerUuid(): java.util.UUID`
- Method: `isPreviewSigned(): boolean`

### ChannelIdentifier

- Java: `com.velocitypowered.api.proxy.messages.ChannelIdentifier`
- Kind: `interface`
- Method: `getId(): java.lang.String`

### ChannelMessageSink

- Java: `com.velocitypowered.api.proxy.messages.ChannelMessageSink`
- Kind: `interface`
- Method: `sendPluginMessage(arg0: com.velocitypowered.api.proxy.messages.ChannelIdentifier, arg1: com.velocitypowered.api.proxy.messages.PluginMessageEncoder): boolean`
- Method: `sendPluginMessage(arg0: com.velocitypowered.api.proxy.messages.ChannelIdentifier, arg1: byte[]): boolean`

### ChannelMessageSource

- Java: `com.velocitypowered.api.proxy.messages.ChannelMessageSource`
- Kind: `interface`

### ChannelRegistrar

- Java: `com.velocitypowered.api.proxy.messages.ChannelRegistrar`
- Kind: `interface`
- Method: `register(arg0: com.velocitypowered.api.proxy.messages.ChannelIdentifier): void`
- Method: `unregister(arg0: com.velocitypowered.api.proxy.messages.ChannelIdentifier): void`

### LegacyChannelIdentifier

- Java: `com.velocitypowered.api.proxy.messages.LegacyChannelIdentifier`
- Kind: `class`
- Constructor: `(arg0: java.lang.String)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getId(): java.lang.String`
- Method: `getName(): java.lang.String`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`

### MinecraftChannelIdentifier

- Java: `com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier`
- Kind: `class`
- Method: `asKey(): net.kyori.adventure.key.Key`
- Method: `create(arg0: java.lang.String, arg1: java.lang.String): com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `forDefaultNamespace(arg0: java.lang.String): com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier`
- Method: `from(arg0: java.lang.String): com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier`
- Method: `from(arg0: net.kyori.adventure.key.Key): com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier`
- Method: `getId(): java.lang.String`
- Method: `getName(): java.lang.String`
- Method: `getNamespace(): java.lang.String`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`

### PluginMessageEncoder

- Java: `com.velocitypowered.api.proxy.messages.PluginMessageEncoder`
- Kind: `interface`
- Method: `encode(arg0: com.google.common.io.ByteArrayDataOutput): void`

### ChatSession

- Java: `com.velocitypowered.api.proxy.player.ChatSession`
- Kind: `interface`
- Method: `getSessionId(): java.util.UUID`

### PlayerSettings

- Java: `com.velocitypowered.api.proxy.player.PlayerSettings`
- Kind: `interface`
- Method: `getChatMode(): com.velocitypowered.api.proxy.player.PlayerSettings$ChatMode`
- Method: `getLocale(): java.util.Locale`
- Method: `getMainHand(): com.velocitypowered.api.proxy.player.PlayerSettings$MainHand`
- Method: `getParticleStatus(): com.velocitypowered.api.proxy.player.PlayerSettings$ParticleStatus`
- Method: `getSkinParts(): com.velocitypowered.api.proxy.player.SkinParts`
- Method: `getViewDistance(): byte`
- Method: `hasChatColors(): boolean`
- Method: `isClientListingAllowed(): boolean`
- Method: `isTextFilteringEnabled(): boolean`

### PlayerSettings_ChatMode

- Java: `com.velocitypowered.api.proxy.player.PlayerSettings$ChatMode`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.proxy.player.PlayerSettings$ChatMode`
- Method: `values(): com.velocitypowered.api.proxy.player.PlayerSettings$ChatMode[]`
- Enum: `COMMANDS_ONLY`
- Enum: `HIDDEN`
- Enum: `SHOWN`

### PlayerSettings_MainHand

- Java: `com.velocitypowered.api.proxy.player.PlayerSettings$MainHand`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.proxy.player.PlayerSettings$MainHand`
- Method: `values(): com.velocitypowered.api.proxy.player.PlayerSettings$MainHand[]`
- Enum: `LEFT`
- Enum: `RIGHT`

### PlayerSettings_ParticleStatus

- Java: `com.velocitypowered.api.proxy.player.PlayerSettings$ParticleStatus`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.proxy.player.PlayerSettings$ParticleStatus`
- Method: `values(): com.velocitypowered.api.proxy.player.PlayerSettings$ParticleStatus[]`
- Enum: `ALL`
- Enum: `DECREASED`
- Enum: `MINIMAL`

### ResourcePackInfo

- Java: `com.velocitypowered.api.proxy.player.ResourcePackInfo`
- Kind: `interface`
- Method: `asBuilder(): com.velocitypowered.api.proxy.player.ResourcePackInfo$Builder`
- Method: `asBuilder(arg0: java.lang.String): com.velocitypowered.api.proxy.player.ResourcePackInfo$Builder`
- Method: `getHash(): byte[]`
- Method: `getId(): java.util.UUID`
- Method: `getOrigin(): com.velocitypowered.api.proxy.player.ResourcePackInfo$Origin`
- Method: `getOriginalOrigin(): com.velocitypowered.api.proxy.player.ResourcePackInfo$Origin`
- Method: `getPrompt(): net.kyori.adventure.text.Component`
- Method: `getShouldForce(): boolean`
- Method: `getUrl(): java.lang.String`

### ResourcePackInfo_Builder

- Java: `com.velocitypowered.api.proxy.player.ResourcePackInfo$Builder`
- Kind: `interface`
- Method: `build(): com.velocitypowered.api.proxy.player.ResourcePackInfo`
- Method: `setHash(arg0: byte[]): com.velocitypowered.api.proxy.player.ResourcePackInfo$Builder`
- Method: `setId(arg0: java.util.UUID): com.velocitypowered.api.proxy.player.ResourcePackInfo$Builder`
- Method: `setPrompt(arg0: net.kyori.adventure.text.Component): com.velocitypowered.api.proxy.player.ResourcePackInfo$Builder`
- Method: `setShouldForce(arg0: boolean): com.velocitypowered.api.proxy.player.ResourcePackInfo$Builder`

### ResourcePackInfo_Origin

- Java: `com.velocitypowered.api.proxy.player.ResourcePackInfo$Origin`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.proxy.player.ResourcePackInfo$Origin`
- Method: `values(): com.velocitypowered.api.proxy.player.ResourcePackInfo$Origin[]`
- Enum: `DOWNSTREAM_SERVER`
- Enum: `PLUGIN_ON_PROXY`

### SkinParts

- Java: `com.velocitypowered.api.proxy.player.SkinParts`
- Kind: `class`
- Constructor: `(arg0: byte)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `hasCape(): boolean`
- Method: `hasHat(): boolean`
- Method: `hasJacket(): boolean`
- Method: `hasLeftPants(): boolean`
- Method: `hasLeftSleeve(): boolean`
- Method: `hasRightPants(): boolean`
- Method: `hasRightSleeve(): boolean`
- Method: `hashCode(): int`

### TabList

- Java: `com.velocitypowered.api.proxy.player.TabList`
- Kind: `interface`
- Method: `addEntries(arg0: java.lang.Iterable<com.velocitypowered.api.proxy.player.TabListEntry>): void`
- Method: `addEntries(arg0: com.velocitypowered.api.proxy.player.TabListEntry): void`
- Method: `addEntry(arg0: com.velocitypowered.api.proxy.player.TabListEntry): void`
- Method: `buildEntry(arg0: com.velocitypowered.api.util.GameProfile, arg1: net.kyori.adventure.text.Component, arg2: int, arg3: int): com.velocitypowered.api.proxy.player.TabListEntry`
- Method: `buildEntry(arg0: com.velocitypowered.api.util.GameProfile, arg1: net.kyori.adventure.text.Component, arg2: int, arg3: int, arg4: com.velocitypowered.api.proxy.crypto.IdentifiedKey): com.velocitypowered.api.proxy.player.TabListEntry`
- Method: `buildEntry(arg0: com.velocitypowered.api.util.GameProfile, arg1: net.kyori.adventure.text.Component, arg2: int, arg3: int, arg4: com.velocitypowered.api.proxy.player.ChatSession): com.velocitypowered.api.proxy.player.TabListEntry`
- Method: `buildEntry(arg0: com.velocitypowered.api.util.GameProfile, arg1: net.kyori.adventure.text.Component, arg2: int, arg3: int, arg4: com.velocitypowered.api.proxy.player.ChatSession, arg5: boolean): com.velocitypowered.api.proxy.player.TabListEntry`
- Method: `buildEntry(arg0: com.velocitypowered.api.util.GameProfile, arg1: net.kyori.adventure.text.Component, arg2: int, arg3: int, arg4: com.velocitypowered.api.proxy.player.ChatSession, arg5: boolean, arg6: int): com.velocitypowered.api.proxy.player.TabListEntry`
- Method: `buildEntry(arg0: com.velocitypowered.api.util.GameProfile, arg1: net.kyori.adventure.text.Component, arg2: int, arg3: int, arg4: com.velocitypowered.api.proxy.player.ChatSession, arg5: boolean, arg6: int, arg7: boolean): com.velocitypowered.api.proxy.player.TabListEntry`
- Method: `clearAll(): void`
- Method: `clearHeaderAndFooter(): void`
- Method: `containsEntry(arg0: java.util.UUID): boolean`
- Method: `getEntries(): java.util.Collection<com.velocitypowered.api.proxy.player.TabListEntry>`
- Method: `getEntry(arg0: java.util.UUID): java.util.Optional<com.velocitypowered.api.proxy.player.TabListEntry>`
- Method: `removeEntry(arg0: java.util.UUID): java.util.Optional<com.velocitypowered.api.proxy.player.TabListEntry>`
- Method: `setHeaderAndFooter(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.text.Component): void`

### TabListEntry

- Java: `com.velocitypowered.api.proxy.player.TabListEntry`
- Kind: `interface`
- Method: `builder(): com.velocitypowered.api.proxy.player.TabListEntry$Builder`
- Method: `getChatSession(): com.velocitypowered.api.proxy.player.ChatSession`
- Method: `getDisplayNameComponent(): java.util.Optional<net.kyori.adventure.text.Component>`
- Method: `getGameMode(): int`
- Method: `getIdentifiedKey(): com.velocitypowered.api.proxy.crypto.IdentifiedKey`
- Method: `getLatency(): int`
- Method: `getListOrder(): int`
- Method: `getProfile(): com.velocitypowered.api.util.GameProfile`
- Method: `getTabList(): com.velocitypowered.api.proxy.player.TabList`
- Method: `isListed(): boolean`
- Method: `isShowHat(): boolean`
- Method: `setDisplayName(arg0: net.kyori.adventure.text.Component): com.velocitypowered.api.proxy.player.TabListEntry`
- Method: `setGameMode(arg0: int): com.velocitypowered.api.proxy.player.TabListEntry`
- Method: `setLatency(arg0: int): com.velocitypowered.api.proxy.player.TabListEntry`
- Method: `setListOrder(arg0: int): com.velocitypowered.api.proxy.player.TabListEntry`
- Method: `setListed(arg0: boolean): com.velocitypowered.api.proxy.player.TabListEntry`
- Method: `setShowHat(arg0: boolean): com.velocitypowered.api.proxy.player.TabListEntry`

### TabListEntry_Builder

- Java: `com.velocitypowered.api.proxy.player.TabListEntry$Builder`
- Kind: `class`
- Method: `build(): com.velocitypowered.api.proxy.player.TabListEntry`
- Method: `chatSession(arg0: com.velocitypowered.api.proxy.player.ChatSession): com.velocitypowered.api.proxy.player.TabListEntry$Builder`
- Method: `displayName(arg0: net.kyori.adventure.text.Component): com.velocitypowered.api.proxy.player.TabListEntry$Builder`
- Method: `gameMode(arg0: int): com.velocitypowered.api.proxy.player.TabListEntry$Builder`
- Method: `latency(arg0: int): com.velocitypowered.api.proxy.player.TabListEntry$Builder`
- Method: `listOrder(arg0: int): com.velocitypowered.api.proxy.player.TabListEntry$Builder`
- Method: `listed(arg0: boolean): com.velocitypowered.api.proxy.player.TabListEntry$Builder`
- Method: `profile(arg0: com.velocitypowered.api.util.GameProfile): com.velocitypowered.api.proxy.player.TabListEntry$Builder`
- Method: `showHat(arg0: boolean): com.velocitypowered.api.proxy.player.TabListEntry$Builder`
- Method: `tabList(arg0: com.velocitypowered.api.proxy.player.TabList): com.velocitypowered.api.proxy.player.TabListEntry$Builder`

### PingOptions

- Java: `com.velocitypowered.api.proxy.server.PingOptions`
- Kind: `class`
- Field: `DEFAULT: com.velocitypowered.api.proxy.server.PingOptions`
- Method: `builder(): com.velocitypowered.api.proxy.server.PingOptions$Builder`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getProtocolVersion(): com.velocitypowered.api.network.ProtocolVersion`
- Method: `getTimeout(): long`
- Method: `getVirtualHost(): java.lang.String`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`

### PingOptions_Builder

- Java: `com.velocitypowered.api.proxy.server.PingOptions$Builder`
- Kind: `class`
- Method: `build(): com.velocitypowered.api.proxy.server.PingOptions`
- Method: `timeout(arg0: long, arg1: java.util.concurrent.TimeUnit): com.velocitypowered.api.proxy.server.PingOptions$Builder`
- Method: `timeout(arg0: java.time.Duration): com.velocitypowered.api.proxy.server.PingOptions$Builder`
- Method: `version(arg0: com.velocitypowered.api.network.ProtocolVersion): com.velocitypowered.api.proxy.server.PingOptions$Builder`
- Method: `virtualHost(arg0: java.lang.String): com.velocitypowered.api.proxy.server.PingOptions$Builder`

### QueryResponse

- Java: `com.velocitypowered.api.proxy.server.QueryResponse`
- Kind: `class`
- Method: `builder(): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getCurrentPlayers(): int`
- Method: `getGameVersion(): java.lang.String`
- Method: `getHostname(): java.lang.String`
- Method: `getMap(): java.lang.String`
- Method: `getMaxPlayers(): int`
- Method: `getPlayers(): java.util.Collection<java.lang.String>`
- Method: `getPlugins(): java.util.Collection<com.velocitypowered.api.proxy.server.QueryResponse$PluginInformation>`
- Method: `getProxyHost(): java.lang.String`
- Method: `getProxyPort(): int`
- Method: `getProxyVersion(): java.lang.String`
- Method: `hashCode(): int`
- Method: `toBuilder(): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `toString(): java.lang.String`

### QueryResponse_Builder

- Java: `com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Kind: `class`
- Method: `build(): com.velocitypowered.api.proxy.server.QueryResponse`
- Method: `clearPlayers(): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `clearPlugins(): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `currentPlayers(arg0: int): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `gameVersion(arg0: java.lang.String): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `hostname(arg0: java.lang.String): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `map(arg0: java.lang.String): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `maxPlayers(arg0: int): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `players(arg0: java.util.Collection<java.lang.String>): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `players(arg0: java.lang.String): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `plugins(arg0: java.util.Collection<com.velocitypowered.api.proxy.server.QueryResponse$PluginInformation>): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `plugins(arg0: com.velocitypowered.api.proxy.server.QueryResponse$PluginInformation): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `proxyHost(arg0: java.lang.String): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `proxyPort(arg0: int): com.velocitypowered.api.proxy.server.QueryResponse$Builder`
- Method: `proxyVersion(arg0: java.lang.String): com.velocitypowered.api.proxy.server.QueryResponse$Builder`

### QueryResponse_PluginInformation

- Java: `com.velocitypowered.api.proxy.server.QueryResponse$PluginInformation`
- Kind: `class`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getName(): java.lang.String`
- Method: `getVersion(): java.util.Optional<java.lang.String>`
- Method: `hashCode(): int`
- Method: `of(arg0: java.lang.String, arg1: java.lang.String): com.velocitypowered.api.proxy.server.QueryResponse$PluginInformation`
- Method: `toString(): java.lang.String`

### RegisteredServer

- Java: `com.velocitypowered.api.proxy.server.RegisteredServer`
- Kind: `interface`
- Method: `getPlayersConnected(): java.util.Collection<com.velocitypowered.api.proxy.Player>`
- Method: `getServerInfo(): com.velocitypowered.api.proxy.server.ServerInfo`
- Method: `ping(): java.util.concurrent.CompletableFuture<com.velocitypowered.api.proxy.server.ServerPing>`
- Method: `ping(arg0: com.velocitypowered.api.proxy.server.PingOptions): java.util.concurrent.CompletableFuture<com.velocitypowered.api.proxy.server.ServerPing>`

### ServerInfo

- Java: `com.velocitypowered.api.proxy.server.ServerInfo`
- Kind: `class`
- Constructor: `(arg0: java.lang.String, arg1: java.net.InetSocketAddress)`
- Method: `compareTo(arg0: com.velocitypowered.api.proxy.server.ServerInfo): int`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getAddress(): java.net.InetSocketAddress`
- Method: `getName(): java.lang.String`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`

### ServerPing

- Java: `com.velocitypowered.api.proxy.server.ServerPing`
- Kind: `class`
- Constructor: `(arg0: com.velocitypowered.api.proxy.server.ServerPing$Version, arg1: com.velocitypowered.api.proxy.server.ServerPing$Players, arg2: net.kyori.adventure.text.Component, arg3: com.velocitypowered.api.util.Favicon)`
- Constructor: `(arg0: com.velocitypowered.api.proxy.server.ServerPing$Version, arg1: com.velocitypowered.api.proxy.server.ServerPing$Players, arg2: net.kyori.adventure.text.Component, arg3: com.velocitypowered.api.util.Favicon, arg4: com.velocitypowered.api.util.ModInfo)`
- Method: `asBuilder(): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `builder(): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getDescriptionComponent(): net.kyori.adventure.text.Component`
- Method: `getFavicon(): java.util.Optional<com.velocitypowered.api.util.Favicon>`
- Method: `getModinfo(): java.util.Optional<com.velocitypowered.api.util.ModInfo>`
- Method: `getPlayers(): java.util.Optional<com.velocitypowered.api.proxy.server.ServerPing$Players>`
- Method: `getVersion(): com.velocitypowered.api.proxy.server.ServerPing$Version`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`

### ServerPing_Builder

- Java: `com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Kind: `class`
- Method: `build(): com.velocitypowered.api.proxy.server.ServerPing`
- Method: `clearFavicon(): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `clearMods(): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `clearSamplePlayers(): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `description(arg0: net.kyori.adventure.text.Component): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `favicon(arg0: com.velocitypowered.api.util.Favicon): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `getDescriptionComponent(): java.util.Optional<net.kyori.adventure.text.Component>`
- Method: `getFavicon(): java.util.Optional<com.velocitypowered.api.util.Favicon>`
- Method: `getMaximumPlayers(): int`
- Method: `getModType(): java.lang.String`
- Method: `getMods(): java.util.List<com.velocitypowered.api.util.ModInfo$Mod>`
- Method: `getOnlinePlayers(): int`
- Method: `getSamplePlayers(): java.util.List<com.velocitypowered.api.proxy.server.ServerPing$SamplePlayer>`
- Method: `getVersion(): com.velocitypowered.api.proxy.server.ServerPing$Version`
- Method: `maximumPlayers(arg0: int): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `modType(arg0: java.lang.String): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `mods(arg0: com.velocitypowered.api.util.ModInfo): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `mods(arg0: com.velocitypowered.api.util.ModInfo$Mod): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `notModCompatible(): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `nullPlayers(): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `onlinePlayers(arg0: int): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `samplePlayers(arg0: java.util.Collection<com.velocitypowered.api.proxy.server.ServerPing$SamplePlayer>): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `samplePlayers(arg0: com.velocitypowered.api.proxy.server.ServerPing$SamplePlayer): com.velocitypowered.api.proxy.server.ServerPing$Builder`
- Method: `toString(): java.lang.String`
- Method: `version(arg0: com.velocitypowered.api.proxy.server.ServerPing$Version): com.velocitypowered.api.proxy.server.ServerPing$Builder`

### ServerPing_Players

- Java: `com.velocitypowered.api.proxy.server.ServerPing$Players`
- Kind: `class`
- Constructor: `(arg0: int, arg1: int, arg2: java.util.List<com.velocitypowered.api.proxy.server.ServerPing$SamplePlayer>)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getMax(): int`
- Method: `getOnline(): int`
- Method: `getSample(): java.util.List<com.velocitypowered.api.proxy.server.ServerPing$SamplePlayer>`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`

### ServerPing_SamplePlayer

- Java: `com.velocitypowered.api.proxy.server.ServerPing$SamplePlayer`
- Kind: `class`
- Constructor: `(arg0: java.lang.String, arg1: java.util.UUID)`
- Field: `ANONYMOUS: com.velocitypowered.api.proxy.server.ServerPing$SamplePlayer`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getId(): java.util.UUID`
- Method: `getName(): java.lang.String`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`

### ServerPing_Version

- Java: `com.velocitypowered.api.proxy.server.ServerPing$Version`
- Kind: `class`
- Constructor: `(arg0: int, arg1: java.lang.String)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getName(): java.lang.String`
- Method: `getProtocol(): int`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`

### ScheduledTask

- Java: `com.velocitypowered.api.scheduler.ScheduledTask`
- Kind: `interface`
- Method: `cancel(): void`
- Method: `plugin(): java.lang.Object`
- Method: `status(): com.velocitypowered.api.scheduler.TaskStatus`

### Scheduler

- Java: `com.velocitypowered.api.scheduler.Scheduler`
- Kind: `interface`
- Method: `buildTask(arg0: java.lang.Object, arg1: java.lang.Runnable): com.velocitypowered.api.scheduler.Scheduler$TaskBuilder`
- Method: `buildTask(arg0: java.lang.Object, arg1: java.util.function.Consumer<com.velocitypowered.api.scheduler.ScheduledTask>): com.velocitypowered.api.scheduler.Scheduler$TaskBuilder`
- Method: `tasksByPlugin(arg0: java.lang.Object): java.util.Collection<com.velocitypowered.api.scheduler.ScheduledTask>`

### Scheduler_TaskBuilder

- Java: `com.velocitypowered.api.scheduler.Scheduler$TaskBuilder`
- Kind: `interface`
- Method: `clearDelay(): com.velocitypowered.api.scheduler.Scheduler$TaskBuilder`
- Method: `clearRepeat(): com.velocitypowered.api.scheduler.Scheduler$TaskBuilder`
- Method: `delay(arg0: long, arg1: java.util.concurrent.TimeUnit): com.velocitypowered.api.scheduler.Scheduler$TaskBuilder`
- Method: `delay(arg0: java.time.Duration): com.velocitypowered.api.scheduler.Scheduler$TaskBuilder`
- Method: `repeat(arg0: long, arg1: java.util.concurrent.TimeUnit): com.velocitypowered.api.scheduler.Scheduler$TaskBuilder`
- Method: `repeat(arg0: java.time.Duration): com.velocitypowered.api.scheduler.Scheduler$TaskBuilder`
- Method: `schedule(): com.velocitypowered.api.scheduler.ScheduledTask`

### TaskStatus

- Java: `com.velocitypowered.api.scheduler.TaskStatus`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.scheduler.TaskStatus`
- Method: `values(): com.velocitypowered.api.scheduler.TaskStatus[]`
- Enum: `CANCELLED`
- Enum: `FINISHED`
- Enum: `SCHEDULED`

### Favicon

- Java: `com.velocitypowered.api.util.Favicon`
- Kind: `class`
- Constructor: `(arg0: java.lang.String)`
- Method: `create(arg0: java.awt.image.BufferedImage): com.velocitypowered.api.util.Favicon`
- Method: `create(arg0: java.nio.file.Path): com.velocitypowered.api.util.Favicon`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getBase64Url(): java.lang.String`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`

### GameProfile

- Java: `com.velocitypowered.api.util.GameProfile`
- Kind: `class`
- Constructor: `(arg0: java.lang.String, arg1: java.lang.String, arg2: java.util.List<com.velocitypowered.api.util.GameProfile$Property>)`
- Constructor: `(arg0: java.util.UUID, arg1: java.lang.String, arg2: java.util.List<com.velocitypowered.api.util.GameProfile$Property>)`
- Method: `addProperties(arg0: java.lang.Iterable<com.velocitypowered.api.util.GameProfile$Property>): com.velocitypowered.api.util.GameProfile`
- Method: `addProperty(arg0: com.velocitypowered.api.util.GameProfile$Property): com.velocitypowered.api.util.GameProfile`
- Method: `forOfflinePlayer(arg0: java.lang.String): com.velocitypowered.api.util.GameProfile`
- Method: `getId(): java.util.UUID`
- Method: `getName(): java.lang.String`
- Method: `getProperties(): java.util.List<com.velocitypowered.api.util.GameProfile$Property>`
- Method: `getUndashedId(): java.lang.String`
- Method: `toString(): java.lang.String`
- Method: `withId(arg0: java.util.UUID): com.velocitypowered.api.util.GameProfile`
- Method: `withName(arg0: java.lang.String): com.velocitypowered.api.util.GameProfile`
- Method: `withProperties(arg0: java.util.List<com.velocitypowered.api.util.GameProfile$Property>): com.velocitypowered.api.util.GameProfile`
- Method: `withUndashedId(arg0: java.lang.String): com.velocitypowered.api.util.GameProfile`

### GameProfile_Property

- Java: `com.velocitypowered.api.util.GameProfile$Property`
- Kind: `class`
- Constructor: `(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String)`
- Method: `getName(): java.lang.String`
- Method: `getSignature(): java.lang.String`
- Method: `getValue(): java.lang.String`
- Method: `toString(): java.lang.String`

### MessagePosition

- Java: `com.velocitypowered.api.util.MessagePosition`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.util.MessagePosition`
- Method: `values(): com.velocitypowered.api.util.MessagePosition[]`
- Enum: `ACTION_BAR`
- Enum: `CHAT`
- Enum: `SYSTEM`

### ModInfo

- Java: `com.velocitypowered.api.util.ModInfo`
- Kind: `class`
- Constructor: `(arg0: java.lang.String, arg1: java.util.List<com.velocitypowered.api.util.ModInfo$Mod>)`
- Field: `DEFAULT: com.velocitypowered.api.util.ModInfo`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getMods(): java.util.List<com.velocitypowered.api.util.ModInfo$Mod>`
- Method: `getType(): java.lang.String`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`

### ModInfo_Mod

- Java: `com.velocitypowered.api.util.ModInfo$Mod`
- Kind: `class`
- Constructor: `(arg0: java.lang.String, arg1: java.lang.String)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getId(): java.lang.String`
- Method: `getVersion(): java.lang.String`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`

### Ordered

- Java: `com.velocitypowered.api.util.Ordered`
- Kind: `interface`
- Method: `greaterThan(arg0: T): boolean`
- Method: `lessThan(arg0: T): boolean`
- Method: `noGreaterOrLessThan(arg0: T): boolean`
- Method: `noGreaterThan(arg0: T): boolean`
- Method: `noLessThan(arg0: T): boolean`

### ProxyVersion

- Java: `com.velocitypowered.api.util.ProxyVersion`
- Kind: `class`
- Constructor: `(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String)`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `getName(): java.lang.String`
- Method: `getVendor(): java.lang.String`
- Method: `getVersion(): java.lang.String`
- Method: `hashCode(): int`
- Method: `toString(): java.lang.String`

### ServerLink

- Java: `com.velocitypowered.api.util.ServerLink`
- Kind: `class`
- Method: `getBuiltInType(): java.util.Optional<com.velocitypowered.api.util.ServerLink$Type>`
- Method: `getCustomLabel(): java.util.Optional<net.kyori.adventure.text.Component>`
- Method: `getUrl(): java.net.URI`
- Method: `serverLink(arg0: com.velocitypowered.api.util.ServerLink$Type, arg1: java.lang.String): com.velocitypowered.api.util.ServerLink`
- Method: `serverLink(arg0: net.kyori.adventure.text.Component, arg1: java.lang.String): com.velocitypowered.api.util.ServerLink`

### ServerLink_Type

- Java: `com.velocitypowered.api.util.ServerLink$Type`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): com.velocitypowered.api.util.ServerLink$Type`
- Method: `values(): com.velocitypowered.api.util.ServerLink$Type[]`
- Enum: `ANNOUNCEMENTS`
- Enum: `BUG_REPORT`
- Enum: `COMMUNITY`
- Enum: `COMMUNITY_GUIDELINES`
- Enum: `FEEDBACK`
- Enum: `FORUMS`
- Enum: `NEWS`
- Enum: `STATUS`
- Enum: `SUPPORT`
- Enum: `WEBSITE`

### UuidUtils

- Java: `com.velocitypowered.api.util.UuidUtils`
- Kind: `class`
- Method: `fromUndashed(arg0: java.lang.String): java.util.UUID`
- Method: `generateOfflinePlayerUuid(arg0: java.lang.String): java.util.UUID`
- Method: `toUndashed(arg0: java.util.UUID): java.lang.String`

### Adventure

- Java: `net.kyori.adventure.Adventure`
- Kind: `class`
- Field: `NAMESPACE: java.lang.String`

### Audience

- Java: `net.kyori.adventure.audience.Audience`
- Kind: `interface`
- Method: `audience(arg0: java.lang.Iterable<? extends net.kyori.adventure.audience.Audience>): net.kyori.adventure.audience.ForwardingAudience`
- Method: `audience(arg0: net.kyori.adventure.audience.Audience): net.kyori.adventure.audience.Audience`
- Method: `clearResourcePacks(): void`
- Method: `clearTitle(): void`
- Method: `closeDialog(): void`
- Method: `deleteMessage(arg0: net.kyori.adventure.chat.SignedMessage$Signature): void`
- Method: `deleteMessage(arg0: net.kyori.adventure.chat.SignedMessage): void`
- Method: `empty(): net.kyori.adventure.audience.Audience`
- Method: `filterAudience(arg0: java.util.function.Predicate<? super net.kyori.adventure.audience.Audience>): net.kyori.adventure.audience.Audience`
- Method: `forEachAudience(arg0: java.util.function.Consumer<? super net.kyori.adventure.audience.Audience>): void`
- Method: `hideBossBar(arg0: net.kyori.adventure.bossbar.BossBar): void`
- Method: `openBook(arg0: net.kyori.adventure.inventory.Book$Builder): void`
- Method: `openBook(arg0: net.kyori.adventure.inventory.Book): void`
- Method: `playSound(arg0: net.kyori.adventure.sound.Sound): void`
- Method: `playSound(arg0: net.kyori.adventure.sound.Sound, arg1: double, arg2: double, arg3: double): void`
- Method: `playSound(arg0: net.kyori.adventure.sound.Sound, arg1: net.kyori.adventure.sound.Sound$Emitter): void`
- Method: `removeResourcePacks(arg0: java.lang.Iterable<java.util.UUID>): void`
- Method: `removeResourcePacks(arg0: java.util.UUID, arg1: java.util.UUID): void`
- Method: `removeResourcePacks(arg0: net.kyori.adventure.resource.ResourcePackInfoLike, arg1: net.kyori.adventure.resource.ResourcePackInfoLike): void`
- Method: `removeResourcePacks(arg0: net.kyori.adventure.resource.ResourcePackRequest): void`
- Method: `removeResourcePacks(arg0: net.kyori.adventure.resource.ResourcePackRequestLike): void`
- Method: `resetTitle(): void`
- Method: `sendActionBar(arg0: net.kyori.adventure.text.Component): void`
- Method: `sendActionBar(arg0: net.kyori.adventure.text.ComponentLike): void`
- Method: `sendMessage(arg0: net.kyori.adventure.chat.SignedMessage, arg1: net.kyori.adventure.chat.ChatType$Bound): void`
- Method: `sendMessage(arg0: net.kyori.adventure.identity.Identified, arg1: net.kyori.adventure.text.Component): void`
- Method: `sendMessage(arg0: net.kyori.adventure.identity.Identified, arg1: net.kyori.adventure.text.Component, arg2: net.kyori.adventure.audience.MessageType): void`
- Method: `sendMessage(arg0: net.kyori.adventure.identity.Identified, arg1: net.kyori.adventure.text.ComponentLike): void`
- Method: `sendMessage(arg0: net.kyori.adventure.identity.Identified, arg1: net.kyori.adventure.text.ComponentLike, arg2: net.kyori.adventure.audience.MessageType): void`
- Method: `sendMessage(arg0: net.kyori.adventure.identity.Identity, arg1: net.kyori.adventure.text.Component): void`
- Method: `sendMessage(arg0: net.kyori.adventure.identity.Identity, arg1: net.kyori.adventure.text.Component, arg2: net.kyori.adventure.audience.MessageType): void`
- Method: `sendMessage(arg0: net.kyori.adventure.identity.Identity, arg1: net.kyori.adventure.text.ComponentLike): void`
- Method: `sendMessage(arg0: net.kyori.adventure.identity.Identity, arg1: net.kyori.adventure.text.ComponentLike, arg2: net.kyori.adventure.audience.MessageType): void`
- Method: `sendMessage(arg0: net.kyori.adventure.text.Component): void`
- Method: `sendMessage(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.audience.MessageType): void`
- Method: `sendMessage(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.chat.ChatType$Bound): void`
- Method: `sendMessage(arg0: net.kyori.adventure.text.ComponentLike): void`
- Method: `sendMessage(arg0: net.kyori.adventure.text.ComponentLike, arg1: net.kyori.adventure.audience.MessageType): void`
- Method: `sendMessage(arg0: net.kyori.adventure.text.ComponentLike, arg1: net.kyori.adventure.chat.ChatType$Bound): void`
- Method: `sendPlayerListFooter(arg0: net.kyori.adventure.text.Component): void`
- Method: `sendPlayerListFooter(arg0: net.kyori.adventure.text.ComponentLike): void`
- Method: `sendPlayerListHeader(arg0: net.kyori.adventure.text.Component): void`
- Method: `sendPlayerListHeader(arg0: net.kyori.adventure.text.ComponentLike): void`
- Method: `sendPlayerListHeaderAndFooter(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.text.Component): void`
- Method: `sendPlayerListHeaderAndFooter(arg0: net.kyori.adventure.text.ComponentLike, arg1: net.kyori.adventure.text.ComponentLike): void`
- Method: `sendResourcePacks(arg0: net.kyori.adventure.resource.ResourcePackInfoLike, arg1: net.kyori.adventure.resource.ResourcePackInfoLike): void`
- Method: `sendResourcePacks(arg0: net.kyori.adventure.resource.ResourcePackRequest): void`
- Method: `sendResourcePacks(arg0: net.kyori.adventure.resource.ResourcePackRequestLike): void`
- Method: `sendTitlePart(arg0: net.kyori.adventure.title.TitlePart<T>, arg1: T): void`
- Method: `showBossBar(arg0: net.kyori.adventure.bossbar.BossBar): void`
- Method: `showDialog(arg0: net.kyori.adventure.dialog.DialogLike): void`
- Method: `showTitle(arg0: net.kyori.adventure.title.Title): void`
- Method: `stopSound(arg0: net.kyori.adventure.sound.Sound): void`
- Method: `stopSound(arg0: net.kyori.adventure.sound.SoundStop): void`
- Method: `toAudience(): java.util.stream.Collector<? super net.kyori.adventure.audience.Audience, ?, net.kyori.adventure.audience.ForwardingAudience>`

### Audiences

- Java: `net.kyori.adventure.audience.Audiences`
- Kind: `class`
- Method: `sendingMessage(arg0: net.kyori.adventure.text.ComponentLike): java.util.function.Consumer<? super net.kyori.adventure.audience.Audience>`

### ForwardingAudience

- Java: `net.kyori.adventure.audience.ForwardingAudience`
- Kind: `interface`
- Method: `audiences(): java.lang.Iterable<? extends net.kyori.adventure.audience.Audience>`
- Method: `clearResourcePacks(): void`
- Method: `clearTitle(): void`
- Method: `closeDialog(): void`
- Method: `deleteMessage(arg0: net.kyori.adventure.chat.SignedMessage$Signature): void`
- Method: `filterAudience(arg0: java.util.function.Predicate<? super net.kyori.adventure.audience.Audience>): net.kyori.adventure.audience.Audience`
- Method: `forEachAudience(arg0: java.util.function.Consumer<? super net.kyori.adventure.audience.Audience>): void`
- Method: `hideBossBar(arg0: net.kyori.adventure.bossbar.BossBar): void`
- Method: `openBook(arg0: net.kyori.adventure.inventory.Book): void`
- Method: `playSound(arg0: net.kyori.adventure.sound.Sound): void`
- Method: `playSound(arg0: net.kyori.adventure.sound.Sound, arg1: double, arg2: double, arg3: double): void`
- Method: `playSound(arg0: net.kyori.adventure.sound.Sound, arg1: net.kyori.adventure.sound.Sound$Emitter): void`
- Method: `pointers(): net.kyori.adventure.pointer.Pointers`
- Method: `removeResourcePacks(arg0: java.lang.Iterable<java.util.UUID>): void`
- Method: `removeResourcePacks(arg0: java.util.UUID, arg1: java.util.UUID): void`
- Method: `resetTitle(): void`
- Method: `sendActionBar(arg0: net.kyori.adventure.text.Component): void`
- Method: `sendMessage(arg0: net.kyori.adventure.chat.SignedMessage, arg1: net.kyori.adventure.chat.ChatType$Bound): void`
- Method: `sendMessage(arg0: net.kyori.adventure.identity.Identified, arg1: net.kyori.adventure.text.Component, arg2: net.kyori.adventure.audience.MessageType): void`
- Method: `sendMessage(arg0: net.kyori.adventure.identity.Identity, arg1: net.kyori.adventure.text.Component, arg2: net.kyori.adventure.audience.MessageType): void`
- Method: `sendMessage(arg0: net.kyori.adventure.text.Component): void`
- Method: `sendMessage(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.chat.ChatType$Bound): void`
- Method: `sendPlayerListFooter(arg0: net.kyori.adventure.text.Component): void`
- Method: `sendPlayerListHeader(arg0: net.kyori.adventure.text.Component): void`
- Method: `sendPlayerListHeaderAndFooter(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.text.Component): void`
- Method: `sendResourcePacks(arg0: net.kyori.adventure.resource.ResourcePackRequest): void`
- Method: `sendTitlePart(arg0: net.kyori.adventure.title.TitlePart<T>, arg1: T): void`
- Method: `showBossBar(arg0: net.kyori.adventure.bossbar.BossBar): void`
- Method: `showDialog(arg0: net.kyori.adventure.dialog.DialogLike): void`
- Method: `stopSound(arg0: net.kyori.adventure.sound.SoundStop): void`

### ForwardingAudience_Single

- Java: `net.kyori.adventure.audience.ForwardingAudience$Single`
- Kind: `interface`
- Method: `audience(): net.kyori.adventure.audience.Audience`
- Method: `audiences(): java.lang.Iterable<? extends net.kyori.adventure.audience.Audience>`
- Method: `clearResourcePacks(): void`
- Method: `clearTitle(): void`
- Method: `closeDialog(): void`
- Method: `deleteMessage(arg0: net.kyori.adventure.chat.SignedMessage$Signature): void`
- Method: `filterAudience(arg0: java.util.function.Predicate<? super net.kyori.adventure.audience.Audience>): net.kyori.adventure.audience.Audience`
- Method: `forEachAudience(arg0: java.util.function.Consumer<? super net.kyori.adventure.audience.Audience>): void`
- Method: `get(arg0: net.kyori.adventure.pointer.Pointer<T>): java.util.Optional<T>`
- Method: `getOrDefault(arg0: net.kyori.adventure.pointer.Pointer<T>, arg1: T): T`
- Method: `getOrDefaultFrom(arg0: net.kyori.adventure.pointer.Pointer<T>, arg1: java.util.function.Supplier<? extends T>): T`
- Method: `hideBossBar(arg0: net.kyori.adventure.bossbar.BossBar): void`
- Method: `openBook(arg0: net.kyori.adventure.inventory.Book): void`
- Method: `playSound(arg0: net.kyori.adventure.sound.Sound): void`
- Method: `playSound(arg0: net.kyori.adventure.sound.Sound, arg1: double, arg2: double, arg3: double): void`
- Method: `playSound(arg0: net.kyori.adventure.sound.Sound, arg1: net.kyori.adventure.sound.Sound$Emitter): void`
- Method: `pointers(): net.kyori.adventure.pointer.Pointers`
- Method: `removeResourcePacks(arg0: java.lang.Iterable<java.util.UUID>): void`
- Method: `removeResourcePacks(arg0: java.util.UUID, arg1: java.util.UUID): void`
- Method: `resetTitle(): void`
- Method: `sendActionBar(arg0: net.kyori.adventure.text.Component): void`
- Method: `sendMessage(arg0: net.kyori.adventure.chat.SignedMessage, arg1: net.kyori.adventure.chat.ChatType$Bound): void`
- Method: `sendMessage(arg0: net.kyori.adventure.identity.Identified, arg1: net.kyori.adventure.text.Component, arg2: net.kyori.adventure.audience.MessageType): void`
- Method: `sendMessage(arg0: net.kyori.adventure.identity.Identity, arg1: net.kyori.adventure.text.Component, arg2: net.kyori.adventure.audience.MessageType): void`
- Method: `sendMessage(arg0: net.kyori.adventure.text.Component): void`
- Method: `sendMessage(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.chat.ChatType$Bound): void`
- Method: `sendPlayerListFooter(arg0: net.kyori.adventure.text.Component): void`
- Method: `sendPlayerListHeader(arg0: net.kyori.adventure.text.Component): void`
- Method: `sendPlayerListHeaderAndFooter(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.text.Component): void`
- Method: `sendResourcePacks(arg0: net.kyori.adventure.resource.ResourcePackRequest): void`
- Method: `sendTitlePart(arg0: net.kyori.adventure.title.TitlePart<T>, arg1: T): void`
- Method: `showBossBar(arg0: net.kyori.adventure.bossbar.BossBar): void`
- Method: `showDialog(arg0: net.kyori.adventure.dialog.DialogLike): void`
- Method: `stopSound(arg0: net.kyori.adventure.sound.SoundStop): void`

### MessageType

- Java: `net.kyori.adventure.audience.MessageType`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.audience.MessageType`
- Method: `values(): net.kyori.adventure.audience.MessageType[]`
- Enum: `CHAT`
- Enum: `SYSTEM`

### BossBar

- Java: `net.kyori.adventure.bossbar.BossBar`
- Kind: `interface`
- Field: `MAX_PERCENT: float`
- Field: `MAX_PROGRESS: float`
- Field: `MIN_PERCENT: float`
- Field: `MIN_PROGRESS: float`
- Method: `addFlag(arg0: net.kyori.adventure.bossbar.BossBar$Flag): net.kyori.adventure.bossbar.BossBar`
- Method: `addFlags(arg0: java.lang.Iterable<net.kyori.adventure.bossbar.BossBar$Flag>): net.kyori.adventure.bossbar.BossBar`
- Method: `addFlags(arg0: net.kyori.adventure.bossbar.BossBar$Flag): net.kyori.adventure.bossbar.BossBar`
- Method: `addListener(arg0: net.kyori.adventure.bossbar.BossBar$Listener): net.kyori.adventure.bossbar.BossBar`
- Method: `addViewer(arg0: net.kyori.adventure.audience.Audience): net.kyori.adventure.bossbar.BossBar`
- Method: `bossBar(arg0: net.kyori.adventure.text.Component, arg1: float, arg2: net.kyori.adventure.bossbar.BossBar$Color, arg3: net.kyori.adventure.bossbar.BossBar$Overlay): net.kyori.adventure.bossbar.BossBar`
- Method: `bossBar(arg0: net.kyori.adventure.text.Component, arg1: float, arg2: net.kyori.adventure.bossbar.BossBar$Color, arg3: net.kyori.adventure.bossbar.BossBar$Overlay, arg4: java.util.Set<net.kyori.adventure.bossbar.BossBar$Flag>): net.kyori.adventure.bossbar.BossBar`
- Method: `bossBar(arg0: net.kyori.adventure.text.ComponentLike, arg1: float, arg2: net.kyori.adventure.bossbar.BossBar$Color, arg3: net.kyori.adventure.bossbar.BossBar$Overlay): net.kyori.adventure.bossbar.BossBar`
- Method: `bossBar(arg0: net.kyori.adventure.text.ComponentLike, arg1: float, arg2: net.kyori.adventure.bossbar.BossBar$Color, arg3: net.kyori.adventure.bossbar.BossBar$Overlay, arg4: java.util.Set<net.kyori.adventure.bossbar.BossBar$Flag>): net.kyori.adventure.bossbar.BossBar`
- Method: `color(): net.kyori.adventure.bossbar.BossBar$Color`
- Method: `color(arg0: net.kyori.adventure.bossbar.BossBar$Color): net.kyori.adventure.bossbar.BossBar`
- Method: `flags(): java.util.Set<net.kyori.adventure.bossbar.BossBar$Flag>`
- Method: `flags(arg0: java.util.Set<net.kyori.adventure.bossbar.BossBar$Flag>): net.kyori.adventure.bossbar.BossBar`
- Method: `hasFlag(arg0: net.kyori.adventure.bossbar.BossBar$Flag): boolean`
- Method: `name(): net.kyori.adventure.text.Component`
- Method: `name(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.bossbar.BossBar`
- Method: `name(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.bossbar.BossBar`
- Method: `overlay(): net.kyori.adventure.bossbar.BossBar$Overlay`
- Method: `overlay(arg0: net.kyori.adventure.bossbar.BossBar$Overlay): net.kyori.adventure.bossbar.BossBar`
- Method: `percent(): float`
- Method: `percent(arg0: float): net.kyori.adventure.bossbar.BossBar`
- Method: `progress(): float`
- Method: `progress(arg0: float): net.kyori.adventure.bossbar.BossBar`
- Method: `removeFlag(arg0: net.kyori.adventure.bossbar.BossBar$Flag): net.kyori.adventure.bossbar.BossBar`
- Method: `removeFlags(arg0: java.lang.Iterable<net.kyori.adventure.bossbar.BossBar$Flag>): net.kyori.adventure.bossbar.BossBar`
- Method: `removeFlags(arg0: net.kyori.adventure.bossbar.BossBar$Flag): net.kyori.adventure.bossbar.BossBar`
- Method: `removeListener(arg0: net.kyori.adventure.bossbar.BossBar$Listener): net.kyori.adventure.bossbar.BossBar`
- Method: `removeViewer(arg0: net.kyori.adventure.audience.Audience): net.kyori.adventure.bossbar.BossBar`
- Method: `viewers(): java.lang.Iterable<? extends net.kyori.adventure.bossbar.BossBarViewer>`

### BossBar_Color

- Java: `net.kyori.adventure.bossbar.BossBar$Color`
- Kind: `enum`
- Field: `NAMES: net.kyori.adventure.util.Index<java.lang.String, net.kyori.adventure.bossbar.BossBar$Color>`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.bossbar.BossBar$Color`
- Method: `values(): net.kyori.adventure.bossbar.BossBar$Color[]`
- Enum: `BLUE`
- Enum: `GREEN`
- Enum: `PINK`
- Enum: `PURPLE`
- Enum: `RED`
- Enum: `WHITE`
- Enum: `YELLOW`

### BossBar_Flag

- Java: `net.kyori.adventure.bossbar.BossBar$Flag`
- Kind: `enum`
- Field: `NAMES: net.kyori.adventure.util.Index<java.lang.String, net.kyori.adventure.bossbar.BossBar$Flag>`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.bossbar.BossBar$Flag`
- Method: `values(): net.kyori.adventure.bossbar.BossBar$Flag[]`
- Enum: `CREATE_WORLD_FOG`
- Enum: `DARKEN_SCREEN`
- Enum: `PLAY_BOSS_MUSIC`

### BossBar_Listener

- Java: `net.kyori.adventure.bossbar.BossBar$Listener`
- Kind: `interface`
- Method: `bossBarColorChanged(arg0: net.kyori.adventure.bossbar.BossBar, arg1: net.kyori.adventure.bossbar.BossBar$Color, arg2: net.kyori.adventure.bossbar.BossBar$Color): void`
- Method: `bossBarFlagsChanged(arg0: net.kyori.adventure.bossbar.BossBar, arg1: java.util.Set<net.kyori.adventure.bossbar.BossBar$Flag>, arg2: java.util.Set<net.kyori.adventure.bossbar.BossBar$Flag>): void`
- Method: `bossBarNameChanged(arg0: net.kyori.adventure.bossbar.BossBar, arg1: net.kyori.adventure.text.Component, arg2: net.kyori.adventure.text.Component): void`
- Method: `bossBarOverlayChanged(arg0: net.kyori.adventure.bossbar.BossBar, arg1: net.kyori.adventure.bossbar.BossBar$Overlay, arg2: net.kyori.adventure.bossbar.BossBar$Overlay): void`
- Method: `bossBarPercentChanged(arg0: net.kyori.adventure.bossbar.BossBar, arg1: float, arg2: float): void`
- Method: `bossBarProgressChanged(arg0: net.kyori.adventure.bossbar.BossBar, arg1: float, arg2: float): void`

### BossBar_Overlay

- Java: `net.kyori.adventure.bossbar.BossBar$Overlay`
- Kind: `enum`
- Field: `NAMES: net.kyori.adventure.util.Index<java.lang.String, net.kyori.adventure.bossbar.BossBar$Overlay>`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.bossbar.BossBar$Overlay`
- Method: `values(): net.kyori.adventure.bossbar.BossBar$Overlay[]`
- Enum: `NOTCHED_10`
- Enum: `NOTCHED_12`
- Enum: `NOTCHED_20`
- Enum: `NOTCHED_6`
- Enum: `PROGRESS`

### BossBarImplementation

- Java: `net.kyori.adventure.bossbar.BossBarImplementation`
- Kind: `interface`
- Method: `get(arg0: net.kyori.adventure.bossbar.BossBar, arg1: java.lang.Class<I>): I`
- Method: `viewers(): java.lang.Iterable<? extends net.kyori.adventure.bossbar.BossBarViewer>`

### BossBarImplementation_Provider

- Java: `net.kyori.adventure.bossbar.BossBarImplementation$Provider`
- Kind: `interface`
- Method: `create(arg0: net.kyori.adventure.bossbar.BossBar): net.kyori.adventure.bossbar.BossBarImplementation`

### BossBarViewer

- Java: `net.kyori.adventure.bossbar.BossBarViewer`
- Kind: `interface`
- Method: `activeBossBars(): java.lang.Iterable<? extends net.kyori.adventure.bossbar.BossBar>`

### AbstractBuilder

- Java: `net.kyori.adventure.builder.AbstractBuilder`
- Kind: `interface`
- Method: `build(): R`
- Method: `configureAndBuild(arg0: B, arg1: java.util.function.Consumer<? super B>): R`

### ChatType

- Java: `net.kyori.adventure.chat.ChatType`
- Kind: `interface`
- Field: `CHAT: net.kyori.adventure.chat.ChatType`
- Field: `EMOTE_COMMAND: net.kyori.adventure.chat.ChatType`
- Field: `MSG_COMMAND_INCOMING: net.kyori.adventure.chat.ChatType`
- Field: `MSG_COMMAND_OUTGOING: net.kyori.adventure.chat.ChatType`
- Field: `SAY_COMMAND: net.kyori.adventure.chat.ChatType`
- Field: `TEAM_MSG_COMMAND_INCOMING: net.kyori.adventure.chat.ChatType`
- Field: `TEAM_MSG_COMMAND_OUTGOING: net.kyori.adventure.chat.ChatType`
- Method: `bind(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.chat.ChatType$Bound`
- Method: `bind(arg0: net.kyori.adventure.text.ComponentLike, arg1: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.chat.ChatType$Bound`
- Method: `chatType(arg0: net.kyori.adventure.key.Keyed): net.kyori.adventure.chat.ChatType`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `key(): net.kyori.adventure.key.Key`

### ChatType_Bound

- Java: `net.kyori.adventure.chat.ChatType$Bound`
- Kind: `interface`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `name(): net.kyori.adventure.text.Component`
- Method: `target(): net.kyori.adventure.text.Component`
- Method: `type(): net.kyori.adventure.chat.ChatType`

### SignedMessage_2

- Java: `net.kyori.adventure.chat.SignedMessage`
- Kind: `interface`
- Method: `canDelete(): boolean`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `isSystem(): boolean`
- Method: `message(): java.lang.String`
- Method: `salt(): long`
- Method: `signature(): net.kyori.adventure.chat.SignedMessage$Signature`
- Method: `signature(arg0: byte[]): net.kyori.adventure.chat.SignedMessage$Signature`
- Method: `system(arg0: java.lang.String, arg1: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.chat.SignedMessage`
- Method: `timestamp(): java.time.Instant`
- Method: `unsignedContent(): net.kyori.adventure.text.Component`

### SignedMessage_Signature

- Java: `net.kyori.adventure.chat.SignedMessage$Signature`
- Kind: `interface`
- Method: `bytes(): byte[]`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`

### DialogLike

- Java: `net.kyori.adventure.dialog.DialogLike`
- Kind: `interface`

### Identified

- Java: `net.kyori.adventure.identity.Identified`
- Kind: `interface`
- Method: `identity(): net.kyori.adventure.identity.Identity`

### Identity

- Java: `net.kyori.adventure.identity.Identity`
- Kind: `interface`
- Field: `DISPLAY_NAME: net.kyori.adventure.pointer.Pointer<net.kyori.adventure.text.Component>`
- Field: `LOCALE: net.kyori.adventure.pointer.Pointer<java.util.Locale>`
- Field: `NAME: net.kyori.adventure.pointer.Pointer<java.lang.String>`
- Field: `UUID: net.kyori.adventure.pointer.Pointer<java.util.UUID>`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `identity(): net.kyori.adventure.identity.Identity`
- Method: `identity(arg0: java.util.UUID): net.kyori.adventure.identity.Identity`
- Method: `nil(): net.kyori.adventure.identity.Identity`
- Method: `uuid(): java.util.UUID`

### Internals

- Java: `net.kyori.adventure.internal.Internals`
- Kind: `class`
- Method: `toString(arg0: net.kyori.examination.Examinable): java.lang.String`

### AdventureProperties

- Java: `net.kyori.adventure.internal.properties.AdventureProperties`
- Kind: `class`
- Field: `DEBUG: net.kyori.adventure.internal.properties.AdventureProperties$Property<java.lang.Boolean>`
- Field: `DEFAULT_FLATTENER_NESTING_LIMIT: net.kyori.adventure.internal.properties.AdventureProperties$Property<java.lang.Integer>`
- Field: `DEFAULT_TRANSLATION_LOCALE: net.kyori.adventure.internal.properties.AdventureProperties$Property<java.lang.String>`
- Field: `SERVICE_LOAD_FAILURES_ARE_FATAL: net.kyori.adventure.internal.properties.AdventureProperties$Property<java.lang.Boolean>`
- Field: `TEXT_WARN_WHEN_LEGACY_FORMATTING_DETECTED: net.kyori.adventure.internal.properties.AdventureProperties$Property<java.lang.Boolean>`
- Method: `property(arg0: java.lang.String, arg1: java.util.function.Function<java.lang.String, T>, arg2: T): net.kyori.adventure.internal.properties.AdventureProperties$Property<T>`
- Method: `property(arg0: java.lang.String, arg1: java.util.function.Function<java.lang.String, T>, arg2: T, arg3: boolean): net.kyori.adventure.internal.properties.AdventureProperties$Property<T>`

### AdventureProperties_DefaultOverrideProvider

- Java: `net.kyori.adventure.internal.properties.AdventureProperties$DefaultOverrideProvider`
- Kind: `interface`
- Method: `overrideDefault(arg0: net.kyori.adventure.internal.properties.AdventureProperties$Property<T>, arg1: T): T`

### AdventureProperties_Property

- Java: `net.kyori.adventure.internal.properties.AdventureProperties$Property`
- Kind: `interface`
- Method: `value(): T`
- Method: `valueOr(arg0: T): T`

### Book

- Java: `net.kyori.adventure.inventory.Book`
- Kind: `interface`
- Method: `author(): net.kyori.adventure.text.Component`
- Method: `author(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.inventory.Book`
- Method: `book(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.text.Component, arg2: java.util.Collection<net.kyori.adventure.text.Component>): net.kyori.adventure.inventory.Book`
- Method: `book(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.text.Component, arg2: net.kyori.adventure.text.Component): net.kyori.adventure.inventory.Book`
- Method: `builder(): net.kyori.adventure.inventory.Book$Builder`
- Method: `pages(): java.util.List<net.kyori.adventure.text.Component>`
- Method: `pages(arg0: java.util.List<net.kyori.adventure.text.Component>): net.kyori.adventure.inventory.Book`
- Method: `pages(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.inventory.Book`
- Method: `title(): net.kyori.adventure.text.Component`
- Method: `title(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.inventory.Book`
- Method: `toBuilder(): net.kyori.adventure.inventory.Book$Builder`

### Book_Builder

- Java: `net.kyori.adventure.inventory.Book$Builder`
- Kind: `interface`
- Method: `addPage(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.inventory.Book$Builder`
- Method: `author(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.inventory.Book$Builder`
- Method: `build(): net.kyori.adventure.inventory.Book`
- Method: `pages(arg0: java.util.Collection<net.kyori.adventure.text.Component>): net.kyori.adventure.inventory.Book$Builder`
- Method: `pages(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.inventory.Book$Builder`
- Method: `title(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.inventory.Book$Builder`

### BinaryTagHolder

- Java: `net.kyori.adventure.nbt.api.BinaryTagHolder`
- Kind: `interface`
- Method: `asBinaryTag(): net.kyori.adventure.nbt.api.BinaryTagHolder`
- Method: `binaryTagHolder(arg0: java.lang.String): net.kyori.adventure.nbt.api.BinaryTagHolder`
- Method: `encode(arg0: T, arg1: net.kyori.adventure.util.Codec<? super T, java.lang.String, ?, EX>): net.kyori.adventure.nbt.api.BinaryTagHolder`
- Method: `get(arg0: net.kyori.adventure.util.Codec<T, java.lang.String, DX, ?>): T`
- Method: `of(arg0: java.lang.String): net.kyori.adventure.nbt.api.BinaryTagHolder`
- Method: `string(): java.lang.String`

### PermissionChecker

- Java: `net.kyori.adventure.permission.PermissionChecker`
- Kind: `interface`
- Field: `POINTER: net.kyori.adventure.pointer.Pointer<net.kyori.adventure.permission.PermissionChecker>`
- Method: `always(arg0: net.kyori.adventure.util.TriState): net.kyori.adventure.permission.PermissionChecker`
- Method: `test(arg0: java.lang.String): boolean`
- Method: `value(arg0: java.lang.String): net.kyori.adventure.util.TriState`

### Pointer

- Java: `net.kyori.adventure.pointer.Pointer`
- Kind: `interface`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `key(): net.kyori.adventure.key.Key`
- Method: `pointer(arg0: java.lang.Class<V>, arg1: net.kyori.adventure.key.Key): net.kyori.adventure.pointer.Pointer<V>`
- Method: `type(): java.lang.Class<V>`

### Pointered

- Java: `net.kyori.adventure.pointer.Pointered`
- Kind: `interface`
- Method: `get(arg0: net.kyori.adventure.pointer.Pointer<T>): java.util.Optional<T>`
- Method: `getOrDefault(arg0: net.kyori.adventure.pointer.Pointer<T>, arg1: T): T`
- Method: `getOrDefaultFrom(arg0: net.kyori.adventure.pointer.Pointer<T>, arg1: java.util.function.Supplier<? extends T>): T`
- Method: `pointers(): net.kyori.adventure.pointer.Pointers`

### Pointers

- Java: `net.kyori.adventure.pointer.Pointers`
- Kind: `interface`
- Method: `builder(): net.kyori.adventure.pointer.Pointers$Builder`
- Method: `empty(): net.kyori.adventure.pointer.Pointers`
- Method: `get(arg0: net.kyori.adventure.pointer.Pointer<T>): java.util.Optional<T>`
- Method: `getOrDefault(arg0: net.kyori.adventure.pointer.Pointer<T>, arg1: T): T`
- Method: `getOrDefaultFrom(arg0: net.kyori.adventure.pointer.Pointer<T>, arg1: java.util.function.Supplier<? extends T>): T`
- Method: `supports(arg0: net.kyori.adventure.pointer.Pointer<T>): boolean`

### Pointers_Builder

- Java: `net.kyori.adventure.pointer.Pointers$Builder`
- Kind: `interface`
- Method: `withDynamic(arg0: net.kyori.adventure.pointer.Pointer<T>, arg1: java.util.function.Supplier<T>): net.kyori.adventure.pointer.Pointers$Builder`
- Method: `withStatic(arg0: net.kyori.adventure.pointer.Pointer<T>, arg1: T): net.kyori.adventure.pointer.Pointers$Builder`

### PointersSupplier

- Java: `net.kyori.adventure.pointer.PointersSupplier`
- Kind: `interface`
- Method: `builder(): net.kyori.adventure.pointer.PointersSupplier$Builder<T>`
- Method: `resolver(arg0: net.kyori.adventure.pointer.Pointer<P>): java.util.function.Function<? super T, P>`
- Method: `supports(arg0: net.kyori.adventure.pointer.Pointer<P>): boolean`
- Method: `view(arg0: T): net.kyori.adventure.pointer.Pointers`

### PointersSupplier_Builder

- Java: `net.kyori.adventure.pointer.PointersSupplier$Builder`
- Kind: `interface`
- Method: `parent(arg0: net.kyori.adventure.pointer.PointersSupplier<? super T>): net.kyori.adventure.pointer.PointersSupplier$Builder<T>`
- Method: `resolving(arg0: net.kyori.adventure.pointer.Pointer<P>, arg1: java.util.function.Function<T, P>): net.kyori.adventure.pointer.PointersSupplier$Builder<T>`

### ResourcePackCallback

- Java: `net.kyori.adventure.resource.ResourcePackCallback`
- Kind: `interface`
- Method: `noOp(): net.kyori.adventure.resource.ResourcePackCallback`
- Method: `onTerminal(arg0: java.util.function.BiConsumer<java.util.UUID, net.kyori.adventure.audience.Audience>, arg1: java.util.function.BiConsumer<java.util.UUID, net.kyori.adventure.audience.Audience>): net.kyori.adventure.resource.ResourcePackCallback`
- Method: `packEventReceived(arg0: java.util.UUID, arg1: net.kyori.adventure.resource.ResourcePackStatus, arg2: net.kyori.adventure.audience.Audience): void`

### ResourcePackInfo_2

- Java: `net.kyori.adventure.resource.ResourcePackInfo`
- Kind: `interface`
- Method: `asResourcePackInfo(): net.kyori.adventure.resource.ResourcePackInfo`
- Method: `hash(): java.lang.String`
- Method: `id(): java.util.UUID`
- Method: `resourcePackInfo(): net.kyori.adventure.resource.ResourcePackInfo$Builder`
- Method: `resourcePackInfo(arg0: java.util.UUID, arg1: java.net.URI, arg2: java.lang.String): net.kyori.adventure.resource.ResourcePackInfo`
- Method: `uri(): java.net.URI`

### ResourcePackInfo_Builder_2

- Java: `net.kyori.adventure.resource.ResourcePackInfo$Builder`
- Kind: `interface`
- Method: `asResourcePackInfo(): net.kyori.adventure.resource.ResourcePackInfo`
- Method: `build(): net.kyori.adventure.resource.ResourcePackInfo`
- Method: `computeHashAndBuild(): java.util.concurrent.CompletableFuture<net.kyori.adventure.resource.ResourcePackInfo>`
- Method: `computeHashAndBuild(arg0: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<net.kyori.adventure.resource.ResourcePackInfo>`
- Method: `hash(arg0: java.lang.String): net.kyori.adventure.resource.ResourcePackInfo$Builder`
- Method: `id(arg0: java.util.UUID): net.kyori.adventure.resource.ResourcePackInfo$Builder`
- Method: `uri(arg0: java.net.URI): net.kyori.adventure.resource.ResourcePackInfo$Builder`

### ResourcePackInfoLike

- Java: `net.kyori.adventure.resource.ResourcePackInfoLike`
- Kind: `interface`
- Method: `asResourcePackInfo(): net.kyori.adventure.resource.ResourcePackInfo`

### ResourcePackRequest

- Java: `net.kyori.adventure.resource.ResourcePackRequest`
- Kind: `interface`
- Method: `addingRequest(arg0: net.kyori.adventure.resource.ResourcePackInfoLike, arg1: net.kyori.adventure.resource.ResourcePackInfoLike): net.kyori.adventure.resource.ResourcePackRequest`
- Method: `asResourcePackRequest(): net.kyori.adventure.resource.ResourcePackRequest`
- Method: `callback(): net.kyori.adventure.resource.ResourcePackCallback`
- Method: `callback(arg0: net.kyori.adventure.resource.ResourcePackCallback): net.kyori.adventure.resource.ResourcePackRequest`
- Method: `packs(): java.util.List<net.kyori.adventure.resource.ResourcePackInfo>`
- Method: `packs(arg0: java.lang.Iterable<? extends net.kyori.adventure.resource.ResourcePackInfoLike>): net.kyori.adventure.resource.ResourcePackRequest`
- Method: `prompt(): net.kyori.adventure.text.Component`
- Method: `replace(): boolean`
- Method: `replace(arg0: boolean): net.kyori.adventure.resource.ResourcePackRequest`
- Method: `required(): boolean`
- Method: `resourcePackRequest(): net.kyori.adventure.resource.ResourcePackRequest$Builder`
- Method: `resourcePackRequest(arg0: net.kyori.adventure.resource.ResourcePackRequest): net.kyori.adventure.resource.ResourcePackRequest$Builder`

### ResourcePackRequest_Builder

- Java: `net.kyori.adventure.resource.ResourcePackRequest$Builder`
- Kind: `interface`
- Method: `asResourcePackRequest(): net.kyori.adventure.resource.ResourcePackRequest`
- Method: `callback(arg0: net.kyori.adventure.resource.ResourcePackCallback): net.kyori.adventure.resource.ResourcePackRequest$Builder`
- Method: `packs(arg0: java.lang.Iterable<? extends net.kyori.adventure.resource.ResourcePackInfoLike>): net.kyori.adventure.resource.ResourcePackRequest$Builder`
- Method: `packs(arg0: net.kyori.adventure.resource.ResourcePackInfoLike, arg1: net.kyori.adventure.resource.ResourcePackInfoLike): net.kyori.adventure.resource.ResourcePackRequest$Builder`
- Method: `prompt(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.resource.ResourcePackRequest$Builder`
- Method: `replace(arg0: boolean): net.kyori.adventure.resource.ResourcePackRequest$Builder`
- Method: `required(arg0: boolean): net.kyori.adventure.resource.ResourcePackRequest$Builder`

### ResourcePackRequestLike

- Java: `net.kyori.adventure.resource.ResourcePackRequestLike`
- Kind: `interface`
- Method: `asResourcePackRequest(): net.kyori.adventure.resource.ResourcePackRequest`

### ResourcePackStatus

- Java: `net.kyori.adventure.resource.ResourcePackStatus`
- Kind: `enum`
- Method: `intermediate(): boolean`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.resource.ResourcePackStatus`
- Method: `values(): net.kyori.adventure.resource.ResourcePackStatus[]`
- Enum: `ACCEPTED`
- Enum: `DECLINED`
- Enum: `DISCARDED`
- Enum: `DOWNLOADED`
- Enum: `FAILED_DOWNLOAD`
- Enum: `FAILED_RELOAD`
- Enum: `INVALID_URL`
- Enum: `SUCCESSFULLY_LOADED`

### Sound

- Java: `net.kyori.adventure.sound.Sound`
- Kind: `interface`
- Method: `asStop(): net.kyori.adventure.sound.SoundStop`
- Method: `name(): net.kyori.adventure.key.Key`
- Method: `pitch(): float`
- Method: `seed(): java.util.OptionalLong`
- Method: `sound(): net.kyori.adventure.sound.Sound$Builder`
- Method: `sound(arg0: java.util.function.Consumer<net.kyori.adventure.sound.Sound$Builder>): net.kyori.adventure.sound.Sound`
- Method: `sound(arg0: java.util.function.Supplier<? extends net.kyori.adventure.sound.Sound$Type>, arg1: net.kyori.adventure.sound.Sound$Source$Provider, arg2: float, arg3: float): net.kyori.adventure.sound.Sound`
- Method: `sound(arg0: java.util.function.Supplier<? extends net.kyori.adventure.sound.Sound$Type>, arg1: net.kyori.adventure.sound.Sound$Source, arg2: float, arg3: float): net.kyori.adventure.sound.Sound`
- Method: `sound(arg0: net.kyori.adventure.key.Key, arg1: net.kyori.adventure.sound.Sound$Source$Provider, arg2: float, arg3: float): net.kyori.adventure.sound.Sound`
- Method: `sound(arg0: net.kyori.adventure.key.Key, arg1: net.kyori.adventure.sound.Sound$Source, arg2: float, arg3: float): net.kyori.adventure.sound.Sound`
- Method: `sound(arg0: net.kyori.adventure.sound.Sound$Type, arg1: net.kyori.adventure.sound.Sound$Source$Provider, arg2: float, arg3: float): net.kyori.adventure.sound.Sound`
- Method: `sound(arg0: net.kyori.adventure.sound.Sound$Type, arg1: net.kyori.adventure.sound.Sound$Source, arg2: float, arg3: float): net.kyori.adventure.sound.Sound`
- Method: `sound(arg0: net.kyori.adventure.sound.Sound): net.kyori.adventure.sound.Sound$Builder`
- Method: `source(): net.kyori.adventure.sound.Sound$Source`
- Method: `volume(): float`

### Sound_Builder

- Java: `net.kyori.adventure.sound.Sound$Builder`
- Kind: `interface`
- Method: `pitch(arg0: float): net.kyori.adventure.sound.Sound$Builder`
- Method: `seed(arg0: long): net.kyori.adventure.sound.Sound$Builder`
- Method: `seed(arg0: java.util.OptionalLong): net.kyori.adventure.sound.Sound$Builder`
- Method: `source(arg0: net.kyori.adventure.sound.Sound$Source$Provider): net.kyori.adventure.sound.Sound$Builder`
- Method: `source(arg0: net.kyori.adventure.sound.Sound$Source): net.kyori.adventure.sound.Sound$Builder`
- Method: `type(arg0: java.util.function.Supplier<? extends net.kyori.adventure.sound.Sound$Type>): net.kyori.adventure.sound.Sound$Builder`
- Method: `type(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.sound.Sound$Builder`
- Method: `type(arg0: net.kyori.adventure.sound.Sound$Type): net.kyori.adventure.sound.Sound$Builder`
- Method: `volume(arg0: float): net.kyori.adventure.sound.Sound$Builder`

### Sound_Emitter

- Java: `net.kyori.adventure.sound.Sound$Emitter`
- Kind: `interface`
- Method: `self(): net.kyori.adventure.sound.Sound$Emitter`

### Sound_Source

- Java: `net.kyori.adventure.sound.Sound$Source`
- Kind: `enum`
- Field: `NAMES: net.kyori.adventure.util.Index<java.lang.String, net.kyori.adventure.sound.Sound$Source>`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.sound.Sound$Source`
- Method: `values(): net.kyori.adventure.sound.Sound$Source[]`
- Enum: `AMBIENT`
- Enum: `BLOCK`
- Enum: `HOSTILE`
- Enum: `MASTER`
- Enum: `MUSIC`
- Enum: `NEUTRAL`
- Enum: `PLAYER`
- Enum: `RECORD`
- Enum: `UI`
- Enum: `VOICE`
- Enum: `WEATHER`

### Sound_Source_Provider

- Java: `net.kyori.adventure.sound.Sound$Source$Provider`
- Kind: `interface`
- Method: `soundSource(): net.kyori.adventure.sound.Sound$Source`

### Sound_Type

- Java: `net.kyori.adventure.sound.Sound$Type`
- Kind: `interface`
- Method: `key(): net.kyori.adventure.key.Key`

### SoundStop

- Java: `net.kyori.adventure.sound.SoundStop`
- Kind: `interface`
- Method: `all(): net.kyori.adventure.sound.SoundStop`
- Method: `named(arg0: java.util.function.Supplier<? extends net.kyori.adventure.sound.Sound$Type>): net.kyori.adventure.sound.SoundStop`
- Method: `named(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.sound.SoundStop`
- Method: `named(arg0: net.kyori.adventure.sound.Sound$Type): net.kyori.adventure.sound.SoundStop`
- Method: `namedOnSource(arg0: java.util.function.Supplier<? extends net.kyori.adventure.sound.Sound$Type>, arg1: net.kyori.adventure.sound.Sound$Source): net.kyori.adventure.sound.SoundStop`
- Method: `namedOnSource(arg0: net.kyori.adventure.key.Key, arg1: net.kyori.adventure.sound.Sound$Source): net.kyori.adventure.sound.SoundStop`
- Method: `namedOnSource(arg0: net.kyori.adventure.sound.Sound$Type, arg1: net.kyori.adventure.sound.Sound$Source): net.kyori.adventure.sound.SoundStop`
- Method: `sound(): net.kyori.adventure.key.Key`
- Method: `source(): net.kyori.adventure.sound.Sound$Source`
- Method: `source(arg0: net.kyori.adventure.sound.Sound$Source): net.kyori.adventure.sound.SoundStop`

### AbstractComponent

- Java: `net.kyori.adventure.text.AbstractComponent`
- Kind: `abstract`
- Method: `children(): java.util.List<net.kyori.adventure.text.Component>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `hashCode(): int`
- Method: `style(): net.kyori.adventure.text.format.Style`
- Method: `toBuilder(): net.kyori.adventure.text.ComponentBuilder<?, ?>`
- Method: `toString(): java.lang.String`

### BlockNBTComponent

- Java: `net.kyori.adventure.text.BlockNBTComponent`
- Kind: `interface`
- Method: `absoluteWorldPos(arg0: int, arg1: int, arg2: int): net.kyori.adventure.text.BlockNBTComponent`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `localPos(arg0: double, arg1: double, arg2: double): net.kyori.adventure.text.BlockNBTComponent`
- Method: `pos(): net.kyori.adventure.text.BlockNBTComponent$Pos`
- Method: `pos(arg0: net.kyori.adventure.text.BlockNBTComponent$Pos): net.kyori.adventure.text.BlockNBTComponent`
- Method: `relativeWorldPos(arg0: int, arg1: int, arg2: int): net.kyori.adventure.text.BlockNBTComponent`
- Method: `worldPos(arg0: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate, arg1: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate, arg2: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate): net.kyori.adventure.text.BlockNBTComponent`

### BlockNBTComponent_Builder

- Java: `net.kyori.adventure.text.BlockNBTComponent$Builder`
- Kind: `interface`
- Method: `absoluteWorldPos(arg0: int, arg1: int, arg2: int): net.kyori.adventure.text.BlockNBTComponent$Builder`
- Method: `localPos(arg0: double, arg1: double, arg2: double): net.kyori.adventure.text.BlockNBTComponent$Builder`
- Method: `pos(arg0: net.kyori.adventure.text.BlockNBTComponent$Pos): net.kyori.adventure.text.BlockNBTComponent$Builder`
- Method: `relativeWorldPos(arg0: int, arg1: int, arg2: int): net.kyori.adventure.text.BlockNBTComponent$Builder`
- Method: `worldPos(arg0: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate, arg1: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate, arg2: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate): net.kyori.adventure.text.BlockNBTComponent$Builder`

### BlockNBTComponent_LocalPos

- Java: `net.kyori.adventure.text.BlockNBTComponent$LocalPos`
- Kind: `interface`
- Method: `forwards(): double`
- Method: `left(): double`
- Method: `localPos(arg0: double, arg1: double, arg2: double): net.kyori.adventure.text.BlockNBTComponent$LocalPos`
- Method: `of(arg0: double, arg1: double, arg2: double): net.kyori.adventure.text.BlockNBTComponent$LocalPos`
- Method: `up(): double`

### BlockNBTComponent_Pos

- Java: `net.kyori.adventure.text.BlockNBTComponent$Pos`
- Kind: `interface`
- Method: `asString(): java.lang.String`
- Method: `fromString(arg0: java.lang.String): net.kyori.adventure.text.BlockNBTComponent$Pos`

### BlockNBTComponent_WorldPos

- Java: `net.kyori.adventure.text.BlockNBTComponent$WorldPos`
- Kind: `interface`
- Method: `of(arg0: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate, arg1: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate, arg2: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate): net.kyori.adventure.text.BlockNBTComponent$WorldPos`
- Method: `worldPos(arg0: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate, arg1: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate, arg2: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate): net.kyori.adventure.text.BlockNBTComponent$WorldPos`
- Method: `x(): net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate`
- Method: `y(): net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate`
- Method: `z(): net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate`

### BlockNBTComponent_WorldPos_Coordinate

- Java: `net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate`
- Kind: `interface`
- Method: `absolute(arg0: int): net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate`
- Method: `coordinate(arg0: int, arg1: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate$Type): net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate`
- Method: `of(arg0: int, arg1: net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate$Type): net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate`
- Method: `relative(arg0: int): net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate`
- Method: `type(): net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate$Type`
- Method: `value(): int`

### BlockNBTComponent_WorldPos_Coordinate_Type

- Java: `net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate$Type`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate$Type`
- Method: `values(): net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate$Type[]`
- Enum: `ABSOLUTE`
- Enum: `RELATIVE`

### BuildableComponent

- Java: `net.kyori.adventure.text.BuildableComponent`
- Kind: `interface`
- Method: `toBuilder(): B`

### Component

- Java: `net.kyori.adventure.text.Component`
- Kind: `interface`
- Field: `EQUALS: java.util.function.BiPredicate<? super net.kyori.adventure.text.Component, ? super net.kyori.adventure.text.Component>`
- Field: `EQUALS_IDENTITY: java.util.function.BiPredicate<? super net.kyori.adventure.text.Component, ? super net.kyori.adventure.text.Component>`
- Field: `IS_NOT_EMPTY: java.util.function.Predicate<? super net.kyori.adventure.text.Component>`
- Method: `append(arg0: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.Component`
- Method: `append(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.text.Component`
- Method: `append(arg0: net.kyori.adventure.text.ComponentBuilder<?, ?>): net.kyori.adventure.text.Component`
- Method: `append(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.Component`
- Method: `append(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.Component`
- Method: `appendNewline(): net.kyori.adventure.text.Component`
- Method: `appendSpace(): net.kyori.adventure.text.Component`
- Method: `applyFallbackStyle(arg0: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.Component`
- Method: `applyFallbackStyle(arg0: net.kyori.adventure.text.format.StyleBuilderApplicable): net.kyori.adventure.text.Component`
- Method: `asComponent(): net.kyori.adventure.text.Component`
- Method: `asHoverEvent(arg0: java.util.function.UnaryOperator<net.kyori.adventure.text.Component>): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.Component>`
- Method: `blockNBT(): net.kyori.adventure.text.BlockNBTComponent$Builder`
- Method: `blockNBT(arg0: java.lang.String, arg1: net.kyori.adventure.text.BlockNBTComponent$Pos): net.kyori.adventure.text.BlockNBTComponent`
- Method: `blockNBT(arg0: java.lang.String, arg1: boolean, arg2: net.kyori.adventure.text.BlockNBTComponent$Pos): net.kyori.adventure.text.BlockNBTComponent`
- Method: `blockNBT(arg0: java.lang.String, arg1: boolean, arg2: net.kyori.adventure.text.ComponentLike, arg3: net.kyori.adventure.text.BlockNBTComponent$Pos): net.kyori.adventure.text.BlockNBTComponent`
- Method: `blockNBT(arg0: java.util.function.Consumer<? super net.kyori.adventure.text.BlockNBTComponent$Builder>): net.kyori.adventure.text.BlockNBTComponent`
- Method: `children(): java.util.List<net.kyori.adventure.text.Component>`
- Method: `children(arg0: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.Component`
- Method: `clickEvent(): net.kyori.adventure.text.event.ClickEvent`
- Method: `clickEvent(arg0: net.kyori.adventure.text.event.ClickEvent): net.kyori.adventure.text.Component`
- Method: `color(): net.kyori.adventure.text.format.TextColor`
- Method: `color(arg0: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.Component`
- Method: `colorIfAbsent(arg0: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.Component`
- Method: `compact(): net.kyori.adventure.text.Component`
- Method: `compact(arg0: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.Component`
- Method: `componentBuilderApply(arg0: net.kyori.adventure.text.ComponentBuilder<?, ?>): void`
- Method: `contains(arg0: net.kyori.adventure.text.Component): boolean`
- Method: `contains(arg0: net.kyori.adventure.text.Component, arg1: java.util.function.BiPredicate<? super net.kyori.adventure.text.Component, ? super net.kyori.adventure.text.Component>): boolean`
- Method: `decorate(arg0: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.Component`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.format.TextDecoration$State`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: net.kyori.adventure.text.format.TextDecoration$State): net.kyori.adventure.text.Component`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: boolean): net.kyori.adventure.text.Component`
- Method: `decorationIfAbsent(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: net.kyori.adventure.text.format.TextDecoration$State): net.kyori.adventure.text.Component`
- Method: `decorations(): java.util.Map<net.kyori.adventure.text.format.TextDecoration, net.kyori.adventure.text.format.TextDecoration$State>`
- Method: `decorations(arg0: java.util.Map<net.kyori.adventure.text.format.TextDecoration, net.kyori.adventure.text.format.TextDecoration$State>): net.kyori.adventure.text.Component`
- Method: `detectCycle(arg0: net.kyori.adventure.text.Component): void`
- Method: `empty(): net.kyori.adventure.text.TextComponent`
- Method: `entityNBT(): net.kyori.adventure.text.EntityNBTComponent$Builder`
- Method: `entityNBT(arg0: java.lang.String, arg1: java.lang.String): net.kyori.adventure.text.EntityNBTComponent`
- Method: `entityNBT(arg0: java.util.function.Consumer<? super net.kyori.adventure.text.EntityNBTComponent$Builder>): net.kyori.adventure.text.EntityNBTComponent`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `font(): net.kyori.adventure.key.Key`
- Method: `font(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.text.Component`
- Method: `hasDecoration(arg0: net.kyori.adventure.text.format.TextDecoration): boolean`
- Method: `hasStyling(): boolean`
- Method: `hoverEvent(): net.kyori.adventure.text.event.HoverEvent<?>`
- Method: `hoverEvent(arg0: net.kyori.adventure.text.event.HoverEventSource<?>): net.kyori.adventure.text.Component`
- Method: `insertion(): java.lang.String`
- Method: `insertion(arg0: java.lang.String): net.kyori.adventure.text.Component`
- Method: `iterable(arg0: net.kyori.adventure.text.ComponentIteratorType, arg1: java.util.Set<net.kyori.adventure.text.ComponentIteratorFlag>): java.lang.Iterable<net.kyori.adventure.text.Component>`
- Method: `iterable(arg0: net.kyori.adventure.text.ComponentIteratorType, arg1: net.kyori.adventure.text.ComponentIteratorFlag): java.lang.Iterable<net.kyori.adventure.text.Component>`
- Method: `iterator(arg0: net.kyori.adventure.text.ComponentIteratorType, arg1: java.util.Set<net.kyori.adventure.text.ComponentIteratorFlag>): java.util.Iterator<net.kyori.adventure.text.Component>`
- Method: `iterator(arg0: net.kyori.adventure.text.ComponentIteratorType, arg1: net.kyori.adventure.text.ComponentIteratorFlag): java.util.Iterator<net.kyori.adventure.text.Component>`
- Method: `join(arg0: net.kyori.adventure.text.ComponentLike, arg1: java.lang.Iterable<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TextComponent`
- Method: `join(arg0: net.kyori.adventure.text.ComponentLike, arg1: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TextComponent`
- Method: `join(arg0: net.kyori.adventure.text.JoinConfiguration$Builder, arg1: java.lang.Iterable<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.Component`
- Method: `join(arg0: net.kyori.adventure.text.JoinConfiguration$Builder, arg1: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.Component`
- Method: `join(arg0: net.kyori.adventure.text.JoinConfiguration, arg1: java.lang.Iterable<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.Component`
- Method: `join(arg0: net.kyori.adventure.text.JoinConfiguration, arg1: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.Component`
- Method: `keybind(): net.kyori.adventure.text.KeybindComponent$Builder`
- Method: `keybind(arg0: java.lang.String): net.kyori.adventure.text.KeybindComponent`
- Method: `keybind(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.KeybindComponent`
- Method: `keybind(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.KeybindComponent`
- Method: `keybind(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>): net.kyori.adventure.text.KeybindComponent`
- Method: `keybind(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.TextColor, arg2: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.KeybindComponent`
- Method: `keybind(arg0: java.util.function.Consumer<? super net.kyori.adventure.text.KeybindComponent$Builder>): net.kyori.adventure.text.KeybindComponent`
- Method: `keybind(arg0: net.kyori.adventure.text.KeybindComponent$KeybindLike): net.kyori.adventure.text.KeybindComponent`
- Method: `keybind(arg0: net.kyori.adventure.text.KeybindComponent$KeybindLike, arg1: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.KeybindComponent`
- Method: `keybind(arg0: net.kyori.adventure.text.KeybindComponent$KeybindLike, arg1: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.KeybindComponent`
- Method: `keybind(arg0: net.kyori.adventure.text.KeybindComponent$KeybindLike, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>): net.kyori.adventure.text.KeybindComponent`
- Method: `keybind(arg0: net.kyori.adventure.text.KeybindComponent$KeybindLike, arg1: net.kyori.adventure.text.format.TextColor, arg2: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.KeybindComponent`
- Method: `mergeStyle(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.text.Component`
- Method: `mergeStyle(arg0: net.kyori.adventure.text.Component, arg1: java.util.Set<net.kyori.adventure.text.format.Style$Merge>): net.kyori.adventure.text.Component`
- Method: `mergeStyle(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.text.format.Style$Merge): net.kyori.adventure.text.Component`
- Method: `newline(): net.kyori.adventure.text.TextComponent`
- Method: `object(): net.kyori.adventure.text.ObjectComponent$Builder`
- Method: `object(arg0: java.util.function.Consumer<? super net.kyori.adventure.text.ObjectComponent$Builder>): net.kyori.adventure.text.ObjectComponent`
- Method: `object(arg0: net.kyori.adventure.text.object.ObjectContents): net.kyori.adventure.text.ObjectComponent`
- Method: `replaceFirstText(arg0: java.lang.String, arg1: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.Component`
- Method: `replaceFirstText(arg0: java.util.regex.Pattern, arg1: java.util.function.Function<net.kyori.adventure.text.TextComponent$Builder, net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.Component`
- Method: `replaceText(arg0: java.lang.String, arg1: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.Component`
- Method: `replaceText(arg0: java.lang.String, arg1: net.kyori.adventure.text.ComponentLike, arg2: int): net.kyori.adventure.text.Component`
- Method: `replaceText(arg0: java.lang.String, arg1: net.kyori.adventure.text.ComponentLike, arg2: net.kyori.adventure.util.IntFunction2<net.kyori.adventure.text.PatternReplacementResult>): net.kyori.adventure.text.Component`
- Method: `replaceText(arg0: java.util.function.Consumer<net.kyori.adventure.text.TextReplacementConfig$Builder>): net.kyori.adventure.text.Component`
- Method: `replaceText(arg0: java.util.regex.Pattern, arg1: java.util.function.Function<net.kyori.adventure.text.TextComponent$Builder, net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.Component`
- Method: `replaceText(arg0: java.util.regex.Pattern, arg1: java.util.function.Function<net.kyori.adventure.text.TextComponent$Builder, net.kyori.adventure.text.ComponentLike>, arg2: int): net.kyori.adventure.text.Component`
- Method: `replaceText(arg0: java.util.regex.Pattern, arg1: java.util.function.Function<net.kyori.adventure.text.TextComponent$Builder, net.kyori.adventure.text.ComponentLike>, arg2: net.kyori.adventure.util.IntFunction2<net.kyori.adventure.text.PatternReplacementResult>): net.kyori.adventure.text.Component`
- Method: `replaceText(arg0: net.kyori.adventure.text.TextReplacementConfig): net.kyori.adventure.text.Component`
- Method: `score(): net.kyori.adventure.text.ScoreComponent$Builder`
- Method: `score(arg0: java.lang.String, arg1: java.lang.String): net.kyori.adventure.text.ScoreComponent`
- Method: `score(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): net.kyori.adventure.text.ScoreComponent`
- Method: `score(arg0: java.util.function.Consumer<? super net.kyori.adventure.text.ScoreComponent$Builder>): net.kyori.adventure.text.ScoreComponent`
- Method: `selector(): net.kyori.adventure.text.SelectorComponent$Builder`
- Method: `selector(arg0: java.lang.String): net.kyori.adventure.text.SelectorComponent`
- Method: `selector(arg0: java.lang.String, arg1: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.SelectorComponent`
- Method: `selector(arg0: java.util.function.Consumer<? super net.kyori.adventure.text.SelectorComponent$Builder>): net.kyori.adventure.text.SelectorComponent`
- Method: `shadowColor(): net.kyori.adventure.text.format.ShadowColor`
- Method: `shadowColor(arg0: net.kyori.adventure.util.ARGBLike): net.kyori.adventure.text.Component`
- Method: `shadowColorIfAbsent(arg0: net.kyori.adventure.util.ARGBLike): net.kyori.adventure.text.Component`
- Method: `space(): net.kyori.adventure.text.TextComponent`
- Method: `spliterator(arg0: net.kyori.adventure.text.ComponentIteratorType, arg1: java.util.Set<net.kyori.adventure.text.ComponentIteratorFlag>): java.util.Spliterator<net.kyori.adventure.text.Component>`
- Method: `spliterator(arg0: net.kyori.adventure.text.ComponentIteratorType, arg1: net.kyori.adventure.text.ComponentIteratorFlag): java.util.Spliterator<net.kyori.adventure.text.Component>`
- Method: `storageNBT(): net.kyori.adventure.text.StorageNBTComponent$Builder`
- Method: `storageNBT(arg0: java.lang.String, arg1: net.kyori.adventure.key.Key): net.kyori.adventure.text.StorageNBTComponent`
- Method: `storageNBT(arg0: java.lang.String, arg1: boolean, arg2: net.kyori.adventure.key.Key): net.kyori.adventure.text.StorageNBTComponent`
- Method: `storageNBT(arg0: java.lang.String, arg1: boolean, arg2: net.kyori.adventure.text.ComponentLike, arg3: net.kyori.adventure.key.Key): net.kyori.adventure.text.StorageNBTComponent`
- Method: `storageNBT(arg0: java.util.function.Consumer<? super net.kyori.adventure.text.StorageNBTComponent$Builder>): net.kyori.adventure.text.StorageNBTComponent`
- Method: `style(): net.kyori.adventure.text.format.Style`
- Method: `style(arg0: java.util.function.Consumer<net.kyori.adventure.text.format.Style$Builder>): net.kyori.adventure.text.Component`
- Method: `style(arg0: java.util.function.Consumer<net.kyori.adventure.text.format.Style$Builder>, arg1: net.kyori.adventure.text.format.Style$Merge$Strategy): net.kyori.adventure.text.Component`
- Method: `style(arg0: net.kyori.adventure.text.format.Style$Builder): net.kyori.adventure.text.Component`
- Method: `style(arg0: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.Component`
- Method: `text(): net.kyori.adventure.text.TextComponent$Builder`
- Method: `text(arg0: char): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: char, arg1: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: char, arg1: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: char, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: char, arg1: net.kyori.adventure.text.format.TextColor, arg2: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: double): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: double, arg1: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: double, arg1: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: double, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: double, arg1: net.kyori.adventure.text.format.TextColor, arg2: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: float): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: float, arg1: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: float, arg1: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: float, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: float, arg1: net.kyori.adventure.text.format.TextColor, arg2: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: int): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: int, arg1: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: int, arg1: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: int, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: int, arg1: net.kyori.adventure.text.format.TextColor, arg2: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: long): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: long, arg1: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: long, arg1: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: long, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: long, arg1: net.kyori.adventure.text.format.TextColor, arg2: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: java.lang.String): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.TextColor, arg2: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: java.util.function.Consumer<? super net.kyori.adventure.text.TextComponent$Builder>): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: boolean): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: boolean, arg1: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: boolean, arg1: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: boolean, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>): net.kyori.adventure.text.TextComponent`
- Method: `text(arg0: boolean, arg1: net.kyori.adventure.text.format.TextColor, arg2: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.TextComponent`
- Method: `textOfChildren(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TextComponent`
- Method: `toBuilder(): net.kyori.adventure.text.ComponentBuilder<?, ?>`
- Method: `toComponent(): java.util.stream.Collector<net.kyori.adventure.text.Component, ? extends net.kyori.adventure.text.ComponentBuilder<?, ?>, net.kyori.adventure.text.Component>`
- Method: `toComponent(arg0: net.kyori.adventure.text.Component): java.util.stream.Collector<net.kyori.adventure.text.Component, ? extends net.kyori.adventure.text.ComponentBuilder<?, ?>, net.kyori.adventure.text.Component>`
- Method: `translatable(): net.kyori.adventure.text.TranslatableComponent$Builder`
- Method: `translatable(arg0: java.lang.String): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: java.lang.String): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: java.lang.String, arg2: java.util.List<? extends net.kyori.adventure.text.ComponentLike>, arg3: java.lang.Iterable<net.kyori.adventure.text.format.StyleBuilderApplicable>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: java.lang.String, arg2: java.util.List<? extends net.kyori.adventure.text.ComponentLike>, arg3: net.kyori.adventure.text.format.StyleBuilderApplicable): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: java.lang.String, arg2: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: java.lang.String, arg2: net.kyori.adventure.text.format.Style, arg3: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: java.lang.String, arg2: net.kyori.adventure.text.format.Style, arg3: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: java.lang.String, arg2: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: java.lang.String, arg2: net.kyori.adventure.text.format.StyleBuilderApplicable): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.Style, arg2: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.Style, arg2: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>, arg3: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>, arg3: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.TextColor, arg2: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: net.kyori.adventure.text.format.TextColor, arg2: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.lang.String, arg1: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: java.util.function.Consumer<? super net.kyori.adventure.text.TranslatableComponent$Builder>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: java.lang.String): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: java.lang.String, arg2: java.lang.Iterable<net.kyori.adventure.text.format.StyleBuilderApplicable>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: java.lang.String, arg2: java.util.List<? extends net.kyori.adventure.text.ComponentLike>, arg3: java.lang.Iterable<net.kyori.adventure.text.format.StyleBuilderApplicable>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: java.lang.String, arg2: java.util.List<? extends net.kyori.adventure.text.ComponentLike>, arg3: net.kyori.adventure.text.format.StyleBuilderApplicable): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: java.lang.String, arg2: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: java.lang.String, arg2: net.kyori.adventure.text.format.Style, arg3: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: java.lang.String, arg2: net.kyori.adventure.text.format.Style, arg3: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: java.lang.String, arg2: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: net.kyori.adventure.text.format.Style, arg2: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: net.kyori.adventure.text.format.Style, arg2: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>, arg3: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: net.kyori.adventure.text.format.TextColor, arg2: java.util.Set<net.kyori.adventure.text.format.TextDecoration>, arg3: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: net.kyori.adventure.text.format.TextColor, arg2: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: net.kyori.adventure.text.format.TextColor, arg2: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.TranslatableComponent`
- Method: `translatable(arg0: net.kyori.adventure.translation.Translatable, arg1: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `virtual(arg0: java.lang.Class<C>, arg1: net.kyori.adventure.text.VirtualComponentRenderer<C>): net.kyori.adventure.text.VirtualComponent`
- Method: `virtual(arg0: java.lang.Class<C>, arg1: net.kyori.adventure.text.VirtualComponentRenderer<C>, arg2: java.lang.Iterable<net.kyori.adventure.text.format.StyleBuilderApplicable>): net.kyori.adventure.text.VirtualComponent`
- Method: `virtual(arg0: java.lang.Class<C>, arg1: net.kyori.adventure.text.VirtualComponentRenderer<C>, arg2: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.VirtualComponent`
- Method: `virtual(arg0: java.lang.Class<C>, arg1: net.kyori.adventure.text.VirtualComponentRenderer<C>, arg2: net.kyori.adventure.text.format.StyleBuilderApplicable): net.kyori.adventure.text.VirtualComponent`

### ComponentApplicable

- Java: `net.kyori.adventure.text.ComponentApplicable`
- Kind: `interface`
- Method: `componentApply(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.text.Component`

### ComponentBuilder

- Java: `net.kyori.adventure.text.ComponentBuilder`
- Kind: `interface`
- Method: `append(arg0: java.lang.Iterable<? extends net.kyori.adventure.text.ComponentLike>): B`
- Method: `append(arg0: net.kyori.adventure.text.Component): B`
- Method: `append(arg0: net.kyori.adventure.text.ComponentBuilder<?, ?>): B`
- Method: `append(arg0: net.kyori.adventure.text.ComponentLike): B`
- Method: `append(arg0: net.kyori.adventure.text.Component): B`
- Method: `append(arg0: net.kyori.adventure.text.ComponentLike): B`
- Method: `appendNewline(): B`
- Method: `appendSpace(): B`
- Method: `applicableApply(arg0: net.kyori.adventure.text.ComponentBuilderApplicable): B`
- Method: `apply(arg0: java.util.function.Consumer<? super net.kyori.adventure.text.ComponentBuilder<?, ?>>): B`
- Method: `applyDeep(arg0: java.util.function.Consumer<? super net.kyori.adventure.text.ComponentBuilder<?, ?>>): B`
- Method: `asComponent(): net.kyori.adventure.text.Component`
- Method: `build(): C`
- Method: `children(): java.util.List<net.kyori.adventure.text.Component>`
- Method: `clickEvent(arg0: net.kyori.adventure.text.event.ClickEvent): B`
- Method: `color(arg0: net.kyori.adventure.text.format.TextColor): B`
- Method: `colorIfAbsent(arg0: net.kyori.adventure.text.format.TextColor): B`
- Method: `componentBuilderApply(arg0: net.kyori.adventure.text.ComponentBuilder<?, ?>): void`
- Method: `decorate(arg0: net.kyori.adventure.text.format.TextDecoration): B`
- Method: `decorate(arg0: net.kyori.adventure.text.format.TextDecoration): B`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: net.kyori.adventure.text.format.TextDecoration$State): B`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: boolean): B`
- Method: `decorationIfAbsent(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: net.kyori.adventure.text.format.TextDecoration$State): B`
- Method: `decorations(arg0: java.util.Map<net.kyori.adventure.text.format.TextDecoration, net.kyori.adventure.text.format.TextDecoration$State>): B`
- Method: `decorations(arg0: java.util.Set<net.kyori.adventure.text.format.TextDecoration>, arg1: boolean): B`
- Method: `font(arg0: net.kyori.adventure.key.Key): B`
- Method: `hoverEvent(arg0: net.kyori.adventure.text.event.HoverEventSource<?>): B`
- Method: `insertion(arg0: java.lang.String): B`
- Method: `mapChildren(arg0: java.util.function.Function<net.kyori.adventure.text.BuildableComponent<?, ?>, ? extends net.kyori.adventure.text.BuildableComponent<?, ?>>): B`
- Method: `mapChildrenDeep(arg0: java.util.function.Function<net.kyori.adventure.text.BuildableComponent<?, ?>, ? extends net.kyori.adventure.text.BuildableComponent<?, ?>>): B`
- Method: `mergeStyle(arg0: net.kyori.adventure.text.Component): B`
- Method: `mergeStyle(arg0: net.kyori.adventure.text.Component, arg1: java.util.Set<net.kyori.adventure.text.format.Style$Merge>): B`
- Method: `mergeStyle(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.text.format.Style$Merge): B`
- Method: `resetStyle(): B`
- Method: `style(arg0: java.util.function.Consumer<net.kyori.adventure.text.format.Style$Builder>): B`
- Method: `style(arg0: net.kyori.adventure.text.format.Style): B`

### ComponentBuilderApplicable

- Java: `net.kyori.adventure.text.ComponentBuilderApplicable`
- Kind: `interface`
- Method: `componentBuilderApply(arg0: net.kyori.adventure.text.ComponentBuilder<?, ?>): void`

### ComponentIteratorFlag

- Java: `net.kyori.adventure.text.ComponentIteratorFlag`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.text.ComponentIteratorFlag`
- Method: `values(): net.kyori.adventure.text.ComponentIteratorFlag[]`
- Enum: `INCLUDE_HOVER_SHOW_ENTITY_NAME`
- Enum: `INCLUDE_HOVER_SHOW_TEXT_COMPONENT`
- Enum: `INCLUDE_TRANSLATABLE_COMPONENT_ARGUMENTS`

### ComponentIteratorType

- Java: `net.kyori.adventure.text.ComponentIteratorType`
- Kind: `interface`
- Field: `BREADTH_FIRST: net.kyori.adventure.text.ComponentIteratorType`
- Field: `DEPTH_FIRST: net.kyori.adventure.text.ComponentIteratorType`
- Method: `populate(arg0: net.kyori.adventure.text.Component, arg1: java.util.Deque<net.kyori.adventure.text.Component>, arg2: java.util.Set<net.kyori.adventure.text.ComponentIteratorFlag>): void`

### ComponentLike

- Java: `net.kyori.adventure.text.ComponentLike`
- Kind: `interface`
- Method: `asComponent(): net.kyori.adventure.text.Component`
- Method: `asComponents(arg0: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): java.util.List<net.kyori.adventure.text.Component>`
- Method: `asComponents(arg0: java.util.List<? extends net.kyori.adventure.text.ComponentLike>, arg1: java.util.function.Predicate<? super net.kyori.adventure.text.Component>): java.util.List<net.kyori.adventure.text.Component>`
- Method: `unbox(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.Component`

### EntityNBTComponent

- Java: `net.kyori.adventure.text.EntityNBTComponent`
- Kind: `interface`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `selector(): java.lang.String`
- Method: `selector(arg0: java.lang.String): net.kyori.adventure.text.EntityNBTComponent`

### EntityNBTComponent_Builder

- Java: `net.kyori.adventure.text.EntityNBTComponent$Builder`
- Kind: `interface`
- Method: `selector(arg0: java.lang.String): net.kyori.adventure.text.EntityNBTComponent$Builder`

### JoinConfiguration

- Java: `net.kyori.adventure.text.JoinConfiguration`
- Kind: `interface`
- Method: `arrayLike(): net.kyori.adventure.text.JoinConfiguration`
- Method: `builder(): net.kyori.adventure.text.JoinConfiguration$Builder`
- Method: `commas(arg0: boolean): net.kyori.adventure.text.JoinConfiguration`
- Method: `convertor(): java.util.function.Function<net.kyori.adventure.text.ComponentLike, net.kyori.adventure.text.Component>`
- Method: `lastSeparator(): net.kyori.adventure.text.Component`
- Method: `lastSeparatorIfSerial(): net.kyori.adventure.text.Component`
- Method: `newlines(): net.kyori.adventure.text.JoinConfiguration`
- Method: `noSeparators(): net.kyori.adventure.text.JoinConfiguration`
- Method: `parentStyle(): net.kyori.adventure.text.format.Style`
- Method: `predicate(): java.util.function.Predicate<net.kyori.adventure.text.ComponentLike>`
- Method: `prefix(): net.kyori.adventure.text.Component`
- Method: `separator(): net.kyori.adventure.text.Component`
- Method: `separator(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.JoinConfiguration`
- Method: `separators(arg0: net.kyori.adventure.text.ComponentLike, arg1: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.JoinConfiguration`
- Method: `spaces(): net.kyori.adventure.text.JoinConfiguration`
- Method: `suffix(): net.kyori.adventure.text.Component`

### JoinConfiguration_Builder

- Java: `net.kyori.adventure.text.JoinConfiguration$Builder`
- Kind: `interface`
- Method: `convertor(arg0: java.util.function.Function<net.kyori.adventure.text.ComponentLike, net.kyori.adventure.text.Component>): net.kyori.adventure.text.JoinConfiguration$Builder`
- Method: `lastSeparator(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.JoinConfiguration$Builder`
- Method: `lastSeparatorIfSerial(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.JoinConfiguration$Builder`
- Method: `parentStyle(arg0: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.JoinConfiguration$Builder`
- Method: `predicate(arg0: java.util.function.Predicate<net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.JoinConfiguration$Builder`
- Method: `prefix(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.JoinConfiguration$Builder`
- Method: `separator(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.JoinConfiguration$Builder`
- Method: `suffix(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.JoinConfiguration$Builder`

### KeybindComponent

- Java: `net.kyori.adventure.text.KeybindComponent`
- Kind: `interface`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `keybind(): java.lang.String`
- Method: `keybind(arg0: java.lang.String): net.kyori.adventure.text.KeybindComponent`
- Method: `keybind(arg0: net.kyori.adventure.text.KeybindComponent$KeybindLike): net.kyori.adventure.text.KeybindComponent`

### KeybindComponent_Builder

- Java: `net.kyori.adventure.text.KeybindComponent$Builder`
- Kind: `interface`
- Method: `keybind(arg0: java.lang.String): net.kyori.adventure.text.KeybindComponent$Builder`
- Method: `keybind(arg0: net.kyori.adventure.text.KeybindComponent$KeybindLike): net.kyori.adventure.text.KeybindComponent$Builder`

### KeybindComponent_KeybindLike

- Java: `net.kyori.adventure.text.KeybindComponent$KeybindLike`
- Kind: `interface`
- Method: `asKeybind(): java.lang.String`

### LinearComponents

- Java: `net.kyori.adventure.text.LinearComponents`
- Kind: `class`
- Method: `linear(arg0: net.kyori.adventure.text.ComponentBuilderApplicable): net.kyori.adventure.text.Component`

### NBTComponent

- Java: `net.kyori.adventure.text.NBTComponent`
- Kind: `interface`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `interpret(): boolean`
- Method: `interpret(arg0: boolean): C`
- Method: `nbtPath(): java.lang.String`
- Method: `nbtPath(arg0: java.lang.String): C`
- Method: `separator(): net.kyori.adventure.text.Component`
- Method: `separator(arg0: net.kyori.adventure.text.ComponentLike): C`

### NBTComponentBuilder

- Java: `net.kyori.adventure.text.NBTComponentBuilder`
- Kind: `interface`
- Method: `interpret(arg0: boolean): B`
- Method: `nbtPath(arg0: java.lang.String): B`
- Method: `separator(arg0: net.kyori.adventure.text.ComponentLike): B`

### ObjectComponent

- Java: `net.kyori.adventure.text.ObjectComponent`
- Kind: `interface`
- Method: `contents(): net.kyori.adventure.text.object.ObjectContents`
- Method: `contents(arg0: net.kyori.adventure.text.object.ObjectContents): net.kyori.adventure.text.ObjectComponent`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`

### ObjectComponent_Builder

- Java: `net.kyori.adventure.text.ObjectComponent$Builder`
- Kind: `interface`
- Method: `contents(arg0: net.kyori.adventure.text.object.ObjectContents): net.kyori.adventure.text.ObjectComponent$Builder`

### PatternReplacementResult

- Java: `net.kyori.adventure.text.PatternReplacementResult`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.text.PatternReplacementResult`
- Method: `values(): net.kyori.adventure.text.PatternReplacementResult[]`
- Enum: `CONTINUE`
- Enum: `REPLACE`
- Enum: `STOP`

### ScopedComponent

- Java: `net.kyori.adventure.text.ScopedComponent`
- Kind: `interface`
- Method: `append(arg0: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): C`
- Method: `append(arg0: net.kyori.adventure.text.Component): C`
- Method: `append(arg0: net.kyori.adventure.text.ComponentBuilder<?, ?>): C`
- Method: `append(arg0: net.kyori.adventure.text.ComponentLike): C`
- Method: `append(arg0: net.kyori.adventure.text.ComponentLike): C`
- Method: `appendNewline(): C`
- Method: `appendSpace(): C`
- Method: `applyFallbackStyle(arg0: net.kyori.adventure.text.format.Style): C`
- Method: `applyFallbackStyle(arg0: net.kyori.adventure.text.format.StyleBuilderApplicable): C`
- Method: `asComponent(): C`
- Method: `children(arg0: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): C`
- Method: `clickEvent(arg0: net.kyori.adventure.text.event.ClickEvent): C`
- Method: `color(arg0: net.kyori.adventure.text.format.TextColor): C`
- Method: `colorIfAbsent(arg0: net.kyori.adventure.text.format.TextColor): C`
- Method: `decorate(arg0: net.kyori.adventure.text.format.TextDecoration): C`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: net.kyori.adventure.text.format.TextDecoration$State): C`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: boolean): C`
- Method: `decorationIfAbsent(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: net.kyori.adventure.text.format.TextDecoration$State): C`
- Method: `decorations(arg0: java.util.Map<net.kyori.adventure.text.format.TextDecoration, net.kyori.adventure.text.format.TextDecoration$State>): C`
- Method: `font(arg0: net.kyori.adventure.key.Key): C`
- Method: `hoverEvent(arg0: net.kyori.adventure.text.event.HoverEventSource<?>): C`
- Method: `insertion(arg0: java.lang.String): C`
- Method: `mergeStyle(arg0: net.kyori.adventure.text.Component): C`
- Method: `mergeStyle(arg0: net.kyori.adventure.text.Component, arg1: java.util.Set<net.kyori.adventure.text.format.Style$Merge>): C`
- Method: `mergeStyle(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.text.format.Style$Merge): C`
- Method: `shadowColor(arg0: net.kyori.adventure.util.ARGBLike): C`
- Method: `shadowColorIfAbsent(arg0: net.kyori.adventure.util.ARGBLike): C`
- Method: `style(arg0: java.util.function.Consumer<net.kyori.adventure.text.format.Style$Builder>): C`
- Method: `style(arg0: java.util.function.Consumer<net.kyori.adventure.text.format.Style$Builder>, arg1: net.kyori.adventure.text.format.Style$Merge$Strategy): C`
- Method: `style(arg0: net.kyori.adventure.text.format.Style$Builder): C`
- Method: `style(arg0: net.kyori.adventure.text.format.Style): C`

### ScoreComponent

- Java: `net.kyori.adventure.text.ScoreComponent`
- Kind: `interface`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `name(): java.lang.String`
- Method: `name(arg0: java.lang.String): net.kyori.adventure.text.ScoreComponent`
- Method: `objective(): java.lang.String`
- Method: `objective(arg0: java.lang.String): net.kyori.adventure.text.ScoreComponent`
- Method: `value(): java.lang.String`
- Method: `value(arg0: java.lang.String): net.kyori.adventure.text.ScoreComponent`

### ScoreComponent_Builder

- Java: `net.kyori.adventure.text.ScoreComponent$Builder`
- Kind: `interface`
- Method: `name(arg0: java.lang.String): net.kyori.adventure.text.ScoreComponent$Builder`
- Method: `objective(arg0: java.lang.String): net.kyori.adventure.text.ScoreComponent$Builder`
- Method: `value(arg0: java.lang.String): net.kyori.adventure.text.ScoreComponent$Builder`

### SelectorComponent

- Java: `net.kyori.adventure.text.SelectorComponent`
- Kind: `interface`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `pattern(): java.lang.String`
- Method: `pattern(arg0: java.lang.String): net.kyori.adventure.text.SelectorComponent`
- Method: `separator(): net.kyori.adventure.text.Component`
- Method: `separator(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.SelectorComponent`

### SelectorComponent_Builder

- Java: `net.kyori.adventure.text.SelectorComponent$Builder`
- Kind: `interface`
- Method: `pattern(arg0: java.lang.String): net.kyori.adventure.text.SelectorComponent$Builder`
- Method: `separator(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.SelectorComponent$Builder`

### StorageNBTComponent

- Java: `net.kyori.adventure.text.StorageNBTComponent`
- Kind: `interface`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `storage(): net.kyori.adventure.key.Key`
- Method: `storage(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.text.StorageNBTComponent`

### StorageNBTComponent_Builder

- Java: `net.kyori.adventure.text.StorageNBTComponent$Builder`
- Kind: `interface`
- Method: `storage(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.text.StorageNBTComponent$Builder`

### TextComponent

- Java: `net.kyori.adventure.text.TextComponent`
- Kind: `interface`
- Method: `content(): java.lang.String`
- Method: `content(arg0: java.lang.String): net.kyori.adventure.text.TextComponent`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `ofChildren(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TextComponent`

### TextComponent_Builder

- Java: `net.kyori.adventure.text.TextComponent$Builder`
- Kind: `interface`
- Method: `content(): java.lang.String`
- Method: `content(arg0: java.lang.String): net.kyori.adventure.text.TextComponent$Builder`

### TextReplacementConfig

- Java: `net.kyori.adventure.text.TextReplacementConfig`
- Kind: `interface`
- Method: `builder(): net.kyori.adventure.text.TextReplacementConfig$Builder`
- Method: `matchPattern(): java.util.regex.Pattern`

### TextReplacementConfig_Builder

- Java: `net.kyori.adventure.text.TextReplacementConfig$Builder`
- Kind: `interface`
- Method: `condition(arg0: net.kyori.adventure.text.TextReplacementConfig$Condition): net.kyori.adventure.text.TextReplacementConfig$Builder`
- Method: `condition(arg0: net.kyori.adventure.util.IntFunction2<net.kyori.adventure.text.PatternReplacementResult>): net.kyori.adventure.text.TextReplacementConfig$Builder`
- Method: `match(arg0: java.lang.String): net.kyori.adventure.text.TextReplacementConfig$Builder`
- Method: `match(arg0: java.util.regex.Pattern): net.kyori.adventure.text.TextReplacementConfig$Builder`
- Method: `matchLiteral(arg0: java.lang.String): net.kyori.adventure.text.TextReplacementConfig$Builder`
- Method: `once(): net.kyori.adventure.text.TextReplacementConfig$Builder`
- Method: `replaceInsideHoverEvents(arg0: boolean): net.kyori.adventure.text.TextReplacementConfig$Builder`
- Method: `replacement(arg0: java.lang.String): net.kyori.adventure.text.TextReplacementConfig$Builder`
- Method: `replacement(arg0: java.util.function.BiFunction<java.util.regex.MatchResult, net.kyori.adventure.text.TextComponent$Builder, net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TextReplacementConfig$Builder`
- Method: `replacement(arg0: java.util.function.Function<net.kyori.adventure.text.TextComponent$Builder, net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TextReplacementConfig$Builder`
- Method: `replacement(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TextReplacementConfig$Builder`
- Method: `times(arg0: int): net.kyori.adventure.text.TextReplacementConfig$Builder`

### TextReplacementConfig_Condition

- Java: `net.kyori.adventure.text.TextReplacementConfig$Condition`
- Kind: `interface`
- Method: `shouldReplace(arg0: java.util.regex.MatchResult, arg1: int, arg2: int): net.kyori.adventure.text.PatternReplacementResult`

### TranslatableComponent

- Java: `net.kyori.adventure.text.TranslatableComponent`
- Kind: `interface`
- Method: `args(): java.util.List<net.kyori.adventure.text.Component>`
- Method: `args(arg0: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent`
- Method: `args(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `arguments(): java.util.List<net.kyori.adventure.text.TranslationArgument>`
- Method: `arguments(arg0: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent`
- Method: `arguments(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `fallback(): java.lang.String`
- Method: `fallback(arg0: java.lang.String): net.kyori.adventure.text.TranslatableComponent`
- Method: `key(): java.lang.String`
- Method: `key(arg0: java.lang.String): net.kyori.adventure.text.TranslatableComponent`
- Method: `key(arg0: net.kyori.adventure.translation.Translatable): net.kyori.adventure.text.TranslatableComponent`

### TranslatableComponent_Builder

- Java: `net.kyori.adventure.text.TranslatableComponent$Builder`
- Kind: `interface`
- Method: `args(arg0: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent$Builder`
- Method: `args(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.text.TranslatableComponent$Builder`
- Method: `args(arg0: net.kyori.adventure.text.ComponentBuilder<?, ?>): net.kyori.adventure.text.TranslatableComponent$Builder`
- Method: `args(arg0: net.kyori.adventure.text.ComponentBuilder<?, ?>): net.kyori.adventure.text.TranslatableComponent$Builder`
- Method: `args(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent$Builder`
- Method: `arguments(arg0: java.util.List<? extends net.kyori.adventure.text.ComponentLike>): net.kyori.adventure.text.TranslatableComponent$Builder`
- Method: `arguments(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslatableComponent$Builder`
- Method: `fallback(arg0: java.lang.String): net.kyori.adventure.text.TranslatableComponent$Builder`
- Method: `key(arg0: java.lang.String): net.kyori.adventure.text.TranslatableComponent$Builder`
- Method: `key(arg0: net.kyori.adventure.translation.Translatable): net.kyori.adventure.text.TranslatableComponent$Builder`

### TranslationArgument

- Java: `net.kyori.adventure.text.TranslationArgument`
- Kind: `interface`
- Method: `asTranslationArgument(): net.kyori.adventure.text.TranslationArgument`
- Method: `bool(arg0: boolean): net.kyori.adventure.text.TranslationArgument`
- Method: `component(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.TranslationArgument`
- Method: `numeric(arg0: java.lang.Number): net.kyori.adventure.text.TranslationArgument`
- Method: `value(): java.lang.Object`

### TranslationArgumentLike

- Java: `net.kyori.adventure.text.TranslationArgumentLike`
- Kind: `interface`
- Method: `asComponent(): net.kyori.adventure.text.Component`
- Method: `asTranslationArgument(): net.kyori.adventure.text.TranslationArgument`

### VirtualComponent

- Java: `net.kyori.adventure.text.VirtualComponent`
- Kind: `interface`
- Method: `contextType(): java.lang.Class<?>`
- Method: `renderer(): net.kyori.adventure.text.VirtualComponentRenderer<?>`

### VirtualComponentRenderer

- Java: `net.kyori.adventure.text.VirtualComponentRenderer`
- Kind: `interface`
- Method: `apply(arg0: C): net.kyori.adventure.text.ComponentLike`
- Method: `fallbackString(): java.lang.String`

### ClickCallback

- Java: `net.kyori.adventure.text.event.ClickCallback`
- Kind: `interface`
- Field: `DEFAULT_LIFETIME: java.time.Duration`
- Field: `UNLIMITED_USES: int`
- Method: `accept(arg0: T): void`
- Method: `filter(arg0: java.util.function.Predicate<T>): net.kyori.adventure.text.event.ClickCallback<T>`
- Method: `filter(arg0: java.util.function.Predicate<T>, arg1: java.util.function.Consumer<? super net.kyori.adventure.audience.Audience>): net.kyori.adventure.text.event.ClickCallback<T>`
- Method: `requiringPermission(arg0: java.lang.String): net.kyori.adventure.text.event.ClickCallback<T>`
- Method: `requiringPermission(arg0: java.lang.String, arg1: java.util.function.Consumer<? super net.kyori.adventure.audience.Audience>): net.kyori.adventure.text.event.ClickCallback<T>`
- Method: `widen(arg0: net.kyori.adventure.text.event.ClickCallback<N>, arg1: java.lang.Class<N>): net.kyori.adventure.text.event.ClickCallback<W>`
- Method: `widen(arg0: net.kyori.adventure.text.event.ClickCallback<N>, arg1: java.lang.Class<N>, arg2: java.util.function.Consumer<? super net.kyori.adventure.audience.Audience>): net.kyori.adventure.text.event.ClickCallback<W>`

### ClickCallback_Options

- Java: `net.kyori.adventure.text.event.ClickCallback$Options`
- Kind: `interface`
- Method: `builder(): net.kyori.adventure.text.event.ClickCallback$Options$Builder`
- Method: `builder(arg0: net.kyori.adventure.text.event.ClickCallback$Options): net.kyori.adventure.text.event.ClickCallback$Options$Builder`
- Method: `lifetime(): java.time.Duration`
- Method: `uses(): int`

### ClickCallback_Options_Builder

- Java: `net.kyori.adventure.text.event.ClickCallback$Options$Builder`
- Kind: `interface`
- Method: `lifetime(arg0: java.time.temporal.TemporalAmount): net.kyori.adventure.text.event.ClickCallback$Options$Builder`
- Method: `uses(arg0: int): net.kyori.adventure.text.event.ClickCallback$Options$Builder`

### ClickCallback_Provider

- Java: `net.kyori.adventure.text.event.ClickCallback$Provider`
- Kind: `interface`
- Method: `create(arg0: net.kyori.adventure.text.event.ClickCallback<net.kyori.adventure.audience.Audience>, arg1: net.kyori.adventure.text.event.ClickCallback$Options): net.kyori.adventure.text.event.ClickEvent`

### ClickEvent

- Java: `net.kyori.adventure.text.event.ClickEvent`
- Kind: `class`
- Method: `action(): net.kyori.adventure.text.event.ClickEvent$Action`
- Method: `callback(arg0: net.kyori.adventure.text.event.ClickCallback<net.kyori.adventure.audience.Audience>): net.kyori.adventure.text.event.ClickEvent`
- Method: `callback(arg0: net.kyori.adventure.text.event.ClickCallback<net.kyori.adventure.audience.Audience>, arg1: java.util.function.Consumer<net.kyori.adventure.text.event.ClickCallback$Options$Builder>): net.kyori.adventure.text.event.ClickEvent`
- Method: `callback(arg0: net.kyori.adventure.text.event.ClickCallback<net.kyori.adventure.audience.Audience>, arg1: net.kyori.adventure.text.event.ClickCallback$Options): net.kyori.adventure.text.event.ClickEvent`
- Method: `changePage(arg0: int): net.kyori.adventure.text.event.ClickEvent`
- Method: `changePage(arg0: java.lang.String): net.kyori.adventure.text.event.ClickEvent`
- Method: `clickEvent(arg0: net.kyori.adventure.text.event.ClickEvent$Action, arg1: java.lang.String): net.kyori.adventure.text.event.ClickEvent`
- Method: `clickEvent(arg0: net.kyori.adventure.text.event.ClickEvent$Action, arg1: net.kyori.adventure.text.event.ClickEvent$Payload): net.kyori.adventure.text.event.ClickEvent`
- Method: `copyToClipboard(arg0: java.lang.String): net.kyori.adventure.text.event.ClickEvent`
- Method: `custom(arg0: net.kyori.adventure.key.Key, arg1: java.lang.String): net.kyori.adventure.text.event.ClickEvent`
- Method: `custom(arg0: net.kyori.adventure.key.Key, arg1: net.kyori.adventure.nbt.api.BinaryTagHolder): net.kyori.adventure.text.event.ClickEvent`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `hashCode(): int`
- Method: `openFile(arg0: java.lang.String): net.kyori.adventure.text.event.ClickEvent`
- Method: `openUrl(arg0: java.lang.String): net.kyori.adventure.text.event.ClickEvent`
- Method: `openUrl(arg0: java.net.URL): net.kyori.adventure.text.event.ClickEvent`
- Method: `payload(): net.kyori.adventure.text.event.ClickEvent$Payload`
- Method: `runCommand(arg0: java.lang.String): net.kyori.adventure.text.event.ClickEvent`
- Method: `showDialog(arg0: net.kyori.adventure.dialog.DialogLike): net.kyori.adventure.text.event.ClickEvent`
- Method: `styleApply(arg0: net.kyori.adventure.text.format.Style$Builder): void`
- Method: `suggestCommand(arg0: java.lang.String): net.kyori.adventure.text.event.ClickEvent`
- Method: `toString(): java.lang.String`
- Method: `value(): java.lang.String`

### ClickEvent_Action

- Java: `net.kyori.adventure.text.event.ClickEvent$Action`
- Kind: `enum`
- Field: `NAMES: net.kyori.adventure.util.Index<java.lang.String, net.kyori.adventure.text.event.ClickEvent$Action>`
- Method: `payloadType(): java.lang.Class<? extends net.kyori.adventure.text.event.ClickEvent$Payload>`
- Method: `readable(): boolean`
- Method: `supports(arg0: net.kyori.adventure.text.event.ClickEvent$Payload): boolean`
- Method: `toString(): java.lang.String`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.text.event.ClickEvent$Action`
- Method: `values(): net.kyori.adventure.text.event.ClickEvent$Action[]`
- Enum: `CHANGE_PAGE`
- Enum: `COPY_TO_CLIPBOARD`
- Enum: `CUSTOM`
- Enum: `OPEN_FILE`
- Enum: `OPEN_URL`
- Enum: `RUN_COMMAND`
- Enum: `SHOW_DIALOG`
- Enum: `SUGGEST_COMMAND`

### ClickEvent_Payload

- Java: `net.kyori.adventure.text.event.ClickEvent$Payload`
- Kind: `interface`
- Method: `custom(arg0: net.kyori.adventure.key.Key, arg1: java.lang.String): net.kyori.adventure.text.event.ClickEvent$Payload$Custom`
- Method: `custom(arg0: net.kyori.adventure.key.Key, arg1: net.kyori.adventure.nbt.api.BinaryTagHolder): net.kyori.adventure.text.event.ClickEvent$Payload$Custom`
- Method: `dialog(arg0: net.kyori.adventure.dialog.DialogLike): net.kyori.adventure.text.event.ClickEvent$Payload$Dialog`
- Method: `integer(arg0: int): net.kyori.adventure.text.event.ClickEvent$Payload$Int`
- Method: `string(arg0: java.lang.String): net.kyori.adventure.text.event.ClickEvent$Payload$Text`

### ClickEvent_Payload_Custom

- Java: `net.kyori.adventure.text.event.ClickEvent$Payload$Custom`
- Kind: `interface`
- Method: `data(): java.lang.String`
- Method: `nbt(): net.kyori.adventure.nbt.api.BinaryTagHolder`

### ClickEvent_Payload_Dialog

- Java: `net.kyori.adventure.text.event.ClickEvent$Payload$Dialog`
- Kind: `interface`
- Method: `dialog(): net.kyori.adventure.dialog.DialogLike`

### ClickEvent_Payload_Int

- Java: `net.kyori.adventure.text.event.ClickEvent$Payload$Int`
- Kind: `interface`
- Method: `integer(): int`

### ClickEvent_Payload_Text

- Java: `net.kyori.adventure.text.event.ClickEvent$Payload$Text`
- Kind: `interface`
- Method: `value(): java.lang.String`

### DataComponentValue

- Java: `net.kyori.adventure.text.event.DataComponentValue`
- Kind: `interface`
- Method: `removed(): net.kyori.adventure.text.event.DataComponentValue$Removed`

### DataComponentValue_Removed

- Java: `net.kyori.adventure.text.event.DataComponentValue$Removed`
- Kind: `interface`

### DataComponentValue_TagSerializable

- Java: `net.kyori.adventure.text.event.DataComponentValue$TagSerializable`
- Kind: `interface`
- Method: `asBinaryTag(): net.kyori.adventure.nbt.api.BinaryTagHolder`

### DataComponentValueConverterRegistry

- Java: `net.kyori.adventure.text.event.DataComponentValueConverterRegistry`
- Kind: `class`
- Method: `convert(arg0: java.lang.Class<O>, arg1: net.kyori.adventure.key.Key, arg2: net.kyori.adventure.text.event.DataComponentValue): O`
- Method: `knownProviders(): java.util.Set<net.kyori.adventure.key.Key>`

### DataComponentValueConverterRegistry_Conversion

- Java: `net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Conversion`
- Kind: `interface`
- Method: `convert(arg0: java.lang.Class<I1>, arg1: java.lang.Class<O1>, arg2: java.util.function.BiFunction<net.kyori.adventure.key.Key, I1, O1>): net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Conversion<I1, O1>`
- Method: `convert(arg0: net.kyori.adventure.key.Key, arg1: I): O`
- Method: `destination(): java.lang.Class<O>`
- Method: `source(): java.lang.Class<I>`

### DataComponentValueConverterRegistry_Provider

- Java: `net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Provider`
- Kind: `interface`
- Method: `conversions(): java.lang.Iterable<net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Conversion<?, ?>>`
- Method: `id(): net.kyori.adventure.key.Key`

### HoverEvent

- Java: `net.kyori.adventure.text.event.HoverEvent`
- Kind: `class`
- Method: `action(): net.kyori.adventure.text.event.HoverEvent$Action<V>`
- Method: `asHoverEvent(): net.kyori.adventure.text.event.HoverEvent<V>`
- Method: `asHoverEvent(arg0: java.util.function.UnaryOperator<V>): net.kyori.adventure.text.event.HoverEvent<V>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `hashCode(): int`
- Method: `hoverEvent(arg0: net.kyori.adventure.text.event.HoverEvent$Action<V>, arg1: V): net.kyori.adventure.text.event.HoverEvent<V>`
- Method: `showAchievement(arg0: java.lang.String): net.kyori.adventure.text.event.HoverEvent<java.lang.String>`
- Method: `showEntity(arg0: net.kyori.adventure.key.Key, arg1: java.util.UUID): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.event.HoverEvent$ShowEntity>`
- Method: `showEntity(arg0: net.kyori.adventure.key.Key, arg1: java.util.UUID, arg2: net.kyori.adventure.text.Component): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.event.HoverEvent$ShowEntity>`
- Method: `showEntity(arg0: net.kyori.adventure.key.Keyed, arg1: java.util.UUID): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.event.HoverEvent$ShowEntity>`
- Method: `showEntity(arg0: net.kyori.adventure.key.Keyed, arg1: java.util.UUID, arg2: net.kyori.adventure.text.Component): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.event.HoverEvent$ShowEntity>`
- Method: `showEntity(arg0: net.kyori.adventure.text.event.HoverEvent$ShowEntity): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.event.HoverEvent$ShowEntity>`
- Method: `showItem(arg0: net.kyori.adventure.key.Key, arg1: int): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.event.HoverEvent$ShowItem>`
- Method: `showItem(arg0: net.kyori.adventure.key.Key, arg1: int, arg2: net.kyori.adventure.nbt.api.BinaryTagHolder): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.event.HoverEvent$ShowItem>`
- Method: `showItem(arg0: net.kyori.adventure.key.Keyed, arg1: int): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.event.HoverEvent$ShowItem>`
- Method: `showItem(arg0: net.kyori.adventure.key.Keyed, arg1: int, arg2: java.util.Map<net.kyori.adventure.key.Key, ? extends net.kyori.adventure.text.event.DataComponentValue>): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.event.HoverEvent$ShowItem>`
- Method: `showItem(arg0: net.kyori.adventure.key.Keyed, arg1: int, arg2: net.kyori.adventure.nbt.api.BinaryTagHolder): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.event.HoverEvent$ShowItem>`
- Method: `showItem(arg0: net.kyori.adventure.text.event.HoverEvent$ShowItem): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.event.HoverEvent$ShowItem>`
- Method: `showText(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.Component>`
- Method: `showText(arg0: net.kyori.adventure.text.ComponentLike): net.kyori.adventure.text.event.HoverEvent<net.kyori.adventure.text.Component>`
- Method: `styleApply(arg0: net.kyori.adventure.text.format.Style$Builder): void`
- Method: `toString(): java.lang.String`
- Method: `value(): V`
- Method: `value(arg0: V): net.kyori.adventure.text.event.HoverEvent<V>`
- Method: `withRenderedValue(arg0: net.kyori.adventure.text.renderer.ComponentRenderer<C>, arg1: C): net.kyori.adventure.text.event.HoverEvent<V>`

### HoverEvent_Action

- Java: `net.kyori.adventure.text.event.HoverEvent$Action`
- Kind: `class`
- Field: `NAMES: net.kyori.adventure.util.Index<java.lang.String, net.kyori.adventure.text.event.HoverEvent$Action<?>>`
- Field: `SHOW_ACHIEVEMENT: net.kyori.adventure.text.event.HoverEvent$Action<java.lang.String>`
- Field: `SHOW_ENTITY: net.kyori.adventure.text.event.HoverEvent$Action<net.kyori.adventure.text.event.HoverEvent$ShowEntity>`
- Field: `SHOW_ITEM: net.kyori.adventure.text.event.HoverEvent$Action<net.kyori.adventure.text.event.HoverEvent$ShowItem>`
- Field: `SHOW_TEXT: net.kyori.adventure.text.event.HoverEvent$Action<net.kyori.adventure.text.Component>`
- Method: `readable(): boolean`
- Method: `toString(): java.lang.String`
- Method: `type(): java.lang.Class<V>`

### HoverEvent_ShowEntity

- Java: `net.kyori.adventure.text.event.HoverEvent$ShowEntity`
- Kind: `class`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `hashCode(): int`
- Method: `id(): java.util.UUID`
- Method: `id(arg0: java.util.UUID): net.kyori.adventure.text.event.HoverEvent$ShowEntity`
- Method: `name(): net.kyori.adventure.text.Component`
- Method: `name(arg0: net.kyori.adventure.text.Component): net.kyori.adventure.text.event.HoverEvent$ShowEntity`
- Method: `of(arg0: net.kyori.adventure.key.Key, arg1: java.util.UUID): net.kyori.adventure.text.event.HoverEvent$ShowEntity`
- Method: `of(arg0: net.kyori.adventure.key.Key, arg1: java.util.UUID, arg2: net.kyori.adventure.text.Component): net.kyori.adventure.text.event.HoverEvent$ShowEntity`
- Method: `of(arg0: net.kyori.adventure.key.Keyed, arg1: java.util.UUID): net.kyori.adventure.text.event.HoverEvent$ShowEntity`
- Method: `of(arg0: net.kyori.adventure.key.Keyed, arg1: java.util.UUID, arg2: net.kyori.adventure.text.Component): net.kyori.adventure.text.event.HoverEvent$ShowEntity`
- Method: `showEntity(arg0: net.kyori.adventure.key.Key, arg1: java.util.UUID): net.kyori.adventure.text.event.HoverEvent$ShowEntity`
- Method: `showEntity(arg0: net.kyori.adventure.key.Key, arg1: java.util.UUID, arg2: net.kyori.adventure.text.Component): net.kyori.adventure.text.event.HoverEvent$ShowEntity`
- Method: `showEntity(arg0: net.kyori.adventure.key.Keyed, arg1: java.util.UUID): net.kyori.adventure.text.event.HoverEvent$ShowEntity`
- Method: `showEntity(arg0: net.kyori.adventure.key.Keyed, arg1: java.util.UUID, arg2: net.kyori.adventure.text.Component): net.kyori.adventure.text.event.HoverEvent$ShowEntity`
- Method: `toString(): java.lang.String`
- Method: `type(): net.kyori.adventure.key.Key`
- Method: `type(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.text.event.HoverEvent$ShowEntity`
- Method: `type(arg0: net.kyori.adventure.key.Keyed): net.kyori.adventure.text.event.HoverEvent$ShowEntity`

### HoverEvent_ShowItem

- Java: `net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Kind: `class`
- Method: `count(): int`
- Method: `count(arg0: int): net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Method: `dataComponents(): java.util.Map<net.kyori.adventure.key.Key, net.kyori.adventure.text.event.DataComponentValue>`
- Method: `dataComponents(arg0: java.util.Map<net.kyori.adventure.key.Key, net.kyori.adventure.text.event.DataComponentValue>): net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Method: `dataComponentsAs(arg0: java.lang.Class<V>): java.util.Map<net.kyori.adventure.key.Key, V>`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `hashCode(): int`
- Method: `item(): net.kyori.adventure.key.Key`
- Method: `item(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Method: `nbt(): net.kyori.adventure.nbt.api.BinaryTagHolder`
- Method: `nbt(arg0: net.kyori.adventure.nbt.api.BinaryTagHolder): net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Method: `of(arg0: net.kyori.adventure.key.Key, arg1: int): net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Method: `of(arg0: net.kyori.adventure.key.Key, arg1: int, arg2: net.kyori.adventure.nbt.api.BinaryTagHolder): net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Method: `of(arg0: net.kyori.adventure.key.Keyed, arg1: int): net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Method: `of(arg0: net.kyori.adventure.key.Keyed, arg1: int, arg2: net.kyori.adventure.nbt.api.BinaryTagHolder): net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Method: `showItem(arg0: net.kyori.adventure.key.Key, arg1: int): net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Method: `showItem(arg0: net.kyori.adventure.key.Key, arg1: int, arg2: net.kyori.adventure.nbt.api.BinaryTagHolder): net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Method: `showItem(arg0: net.kyori.adventure.key.Keyed, arg1: int): net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Method: `showItem(arg0: net.kyori.adventure.key.Keyed, arg1: int, arg2: java.util.Map<net.kyori.adventure.key.Key, ? extends net.kyori.adventure.text.event.DataComponentValue>): net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Method: `showItem(arg0: net.kyori.adventure.key.Keyed, arg1: int, arg2: net.kyori.adventure.nbt.api.BinaryTagHolder): net.kyori.adventure.text.event.HoverEvent$ShowItem`
- Method: `toString(): java.lang.String`

### HoverEventSource

- Java: `net.kyori.adventure.text.event.HoverEventSource`
- Kind: `interface`
- Method: `asHoverEvent(): net.kyori.adventure.text.event.HoverEvent<V>`
- Method: `asHoverEvent(arg0: java.util.function.UnaryOperator<V>): net.kyori.adventure.text.event.HoverEvent<V>`
- Method: `unbox(arg0: net.kyori.adventure.text.event.HoverEventSource<V>): net.kyori.adventure.text.event.HoverEvent<V>`

### ComponentFlattener

- Java: `net.kyori.adventure.text.flattener.ComponentFlattener`
- Kind: `interface`
- Field: `NO_NESTING_LIMIT: int`
- Method: `basic(): net.kyori.adventure.text.flattener.ComponentFlattener`
- Method: `builder(): net.kyori.adventure.text.flattener.ComponentFlattener$Builder`
- Method: `flatten(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.text.flattener.FlattenerListener): void`
- Method: `textOnly(): net.kyori.adventure.text.flattener.ComponentFlattener`

### ComponentFlattener_Builder

- Java: `net.kyori.adventure.text.flattener.ComponentFlattener$Builder`
- Kind: `interface`
- Method: `complexMapper(arg0: java.lang.Class<T>, arg1: java.util.function.BiConsumer<T, java.util.function.Consumer<net.kyori.adventure.text.Component>>): net.kyori.adventure.text.flattener.ComponentFlattener$Builder`
- Method: `mapper(arg0: java.lang.Class<T>, arg1: java.util.function.Function<T, java.lang.String>): net.kyori.adventure.text.flattener.ComponentFlattener$Builder`
- Method: `nestingLimit(arg0: int): net.kyori.adventure.text.flattener.ComponentFlattener$Builder`
- Method: `unknownMapper(arg0: java.util.function.Function<net.kyori.adventure.text.Component, java.lang.String>): net.kyori.adventure.text.flattener.ComponentFlattener$Builder`

### FlattenerListener

- Java: `net.kyori.adventure.text.flattener.FlattenerListener`
- Kind: `interface`
- Method: `component(arg0: java.lang.String): void`
- Method: `popStyle(arg0: net.kyori.adventure.text.format.Style): void`
- Method: `pushStyle(arg0: net.kyori.adventure.text.format.Style): void`
- Method: `shouldContinue(): boolean`

### MutableStyleSetter

- Java: `net.kyori.adventure.text.format.MutableStyleSetter`
- Kind: `interface`
- Method: `decorate(arg0: net.kyori.adventure.text.format.TextDecoration): T`
- Method: `decorations(arg0: java.util.Map<net.kyori.adventure.text.format.TextDecoration, net.kyori.adventure.text.format.TextDecoration$State>): T`
- Method: `decorations(arg0: java.util.Set<net.kyori.adventure.text.format.TextDecoration>, arg1: boolean): T`

### NamedTextColor

- Java: `net.kyori.adventure.text.format.NamedTextColor`
- Kind: `class`
- Field: `AQUA: net.kyori.adventure.text.format.NamedTextColor`
- Field: `BLACK: net.kyori.adventure.text.format.NamedTextColor`
- Field: `BLUE: net.kyori.adventure.text.format.NamedTextColor`
- Field: `DARK_AQUA: net.kyori.adventure.text.format.NamedTextColor`
- Field: `DARK_BLUE: net.kyori.adventure.text.format.NamedTextColor`
- Field: `DARK_GRAY: net.kyori.adventure.text.format.NamedTextColor`
- Field: `DARK_GREEN: net.kyori.adventure.text.format.NamedTextColor`
- Field: `DARK_PURPLE: net.kyori.adventure.text.format.NamedTextColor`
- Field: `DARK_RED: net.kyori.adventure.text.format.NamedTextColor`
- Field: `GOLD: net.kyori.adventure.text.format.NamedTextColor`
- Field: `GRAY: net.kyori.adventure.text.format.NamedTextColor`
- Field: `GREEN: net.kyori.adventure.text.format.NamedTextColor`
- Field: `LIGHT_PURPLE: net.kyori.adventure.text.format.NamedTextColor`
- Field: `NAMES: net.kyori.adventure.util.Index<java.lang.String, net.kyori.adventure.text.format.NamedTextColor>`
- Field: `RED: net.kyori.adventure.text.format.NamedTextColor`
- Field: `WHITE: net.kyori.adventure.text.format.NamedTextColor`
- Field: `YELLOW: net.kyori.adventure.text.format.NamedTextColor`
- Method: `asHSV(): net.kyori.adventure.util.HSVLike`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `namedColor(arg0: int): net.kyori.adventure.text.format.NamedTextColor`
- Method: `nearestTo(arg0: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.format.NamedTextColor`
- Method: `ofExact(arg0: int): net.kyori.adventure.text.format.NamedTextColor`
- Method: `toString(): java.lang.String`
- Method: `value(): int`

### ShadowColor

- Java: `net.kyori.adventure.text.format.ShadowColor`
- Kind: `interface`
- Method: `alpha(): int`
- Method: `asHexString(): java.lang.String`
- Method: `blue(): int`
- Method: `fromHexString(arg0: java.lang.String): net.kyori.adventure.text.format.ShadowColor`
- Method: `green(): int`
- Method: `lerp(arg0: float, arg1: net.kyori.adventure.util.ARGBLike, arg2: net.kyori.adventure.util.ARGBLike): net.kyori.adventure.text.format.ShadowColor`
- Method: `none(): net.kyori.adventure.text.format.ShadowColor`
- Method: `red(): int`
- Method: `shadowColor(arg0: int): net.kyori.adventure.text.format.ShadowColor`
- Method: `shadowColor(arg0: int, arg1: int, arg2: int, arg3: int): net.kyori.adventure.text.format.ShadowColor`
- Method: `shadowColor(arg0: net.kyori.adventure.util.ARGBLike): net.kyori.adventure.text.format.ShadowColor`
- Method: `shadowColor(arg0: net.kyori.adventure.util.RGBLike, arg1: int): net.kyori.adventure.text.format.ShadowColor`
- Method: `styleApply(arg0: net.kyori.adventure.text.format.Style$Builder): void`
- Method: `value(): int`

### Style

- Java: `net.kyori.adventure.text.format.Style`
- Kind: `interface`
- Field: `DEFAULT_FONT: net.kyori.adventure.key.Key`
- Method: `clickEvent(): net.kyori.adventure.text.event.ClickEvent`
- Method: `clickEvent(arg0: net.kyori.adventure.text.event.ClickEvent): net.kyori.adventure.text.format.Style`
- Method: `color(): net.kyori.adventure.text.format.TextColor`
- Method: `color(arg0: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.format.Style`
- Method: `colorIfAbsent(arg0: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.format.Style`
- Method: `decorate(arg0: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.format.Style`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.format.TextDecoration$State`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: net.kyori.adventure.text.format.TextDecoration$State): net.kyori.adventure.text.format.Style`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: boolean): net.kyori.adventure.text.format.Style`
- Method: `decorationIfAbsent(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: net.kyori.adventure.text.format.TextDecoration$State): net.kyori.adventure.text.format.Style`
- Method: `decorations(): java.util.Map<net.kyori.adventure.text.format.TextDecoration, net.kyori.adventure.text.format.TextDecoration$State>`
- Method: `decorations(arg0: java.util.Map<net.kyori.adventure.text.format.TextDecoration, net.kyori.adventure.text.format.TextDecoration$State>): net.kyori.adventure.text.format.Style`
- Method: `edit(arg0: java.util.function.Consumer<net.kyori.adventure.text.format.Style$Builder>): net.kyori.adventure.text.format.Style`
- Method: `edit(arg0: java.util.function.Consumer<net.kyori.adventure.text.format.Style$Builder>, arg1: net.kyori.adventure.text.format.Style$Merge$Strategy): net.kyori.adventure.text.format.Style`
- Method: `empty(): net.kyori.adventure.text.format.Style`
- Method: `font(): net.kyori.adventure.key.Key`
- Method: `font(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.text.format.Style`
- Method: `hasDecoration(arg0: net.kyori.adventure.text.format.TextDecoration): boolean`
- Method: `hoverEvent(): net.kyori.adventure.text.event.HoverEvent<?>`
- Method: `hoverEvent(arg0: net.kyori.adventure.text.event.HoverEventSource<?>): net.kyori.adventure.text.format.Style`
- Method: `insertion(): java.lang.String`
- Method: `insertion(arg0: java.lang.String): net.kyori.adventure.text.format.Style`
- Method: `isEmpty(): boolean`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.format.Style`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style, arg1: java.util.Set<net.kyori.adventure.text.format.Style$Merge>): net.kyori.adventure.text.format.Style`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style, arg1: net.kyori.adventure.text.format.Style$Merge$Strategy): net.kyori.adventure.text.format.Style`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style, arg1: net.kyori.adventure.text.format.Style$Merge$Strategy, arg2: java.util.Set<net.kyori.adventure.text.format.Style$Merge>): net.kyori.adventure.text.format.Style`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style, arg1: net.kyori.adventure.text.format.Style$Merge$Strategy, arg2: net.kyori.adventure.text.format.Style$Merge): net.kyori.adventure.text.format.Style`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style, arg1: net.kyori.adventure.text.format.Style$Merge$Strategy, arg2: net.kyori.adventure.text.format.Style$Merge): net.kyori.adventure.text.format.Style`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style, arg1: net.kyori.adventure.text.format.Style$Merge): net.kyori.adventure.text.format.Style`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style, arg1: net.kyori.adventure.text.format.Style$Merge): net.kyori.adventure.text.format.Style`
- Method: `style(): net.kyori.adventure.text.format.Style$Builder`
- Method: `style(arg0: java.lang.Iterable<? extends net.kyori.adventure.text.format.StyleBuilderApplicable>): net.kyori.adventure.text.format.Style`
- Method: `style(arg0: java.util.function.Consumer<net.kyori.adventure.text.format.Style$Builder>): net.kyori.adventure.text.format.Style`
- Method: `style(arg0: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.format.Style`
- Method: `style(arg0: net.kyori.adventure.text.format.TextColor, arg1: java.util.Set<net.kyori.adventure.text.format.TextDecoration>): net.kyori.adventure.text.format.Style`
- Method: `style(arg0: net.kyori.adventure.text.format.TextColor, arg1: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.format.Style`
- Method: `style(arg0: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.format.Style`
- Method: `style(arg0: net.kyori.adventure.text.format.StyleBuilderApplicable): net.kyori.adventure.text.format.Style`
- Method: `toBuilder(): net.kyori.adventure.text.format.Style$Builder`
- Method: `unmerge(arg0: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.format.Style`

### Style_Builder

- Java: `net.kyori.adventure.text.format.Style$Builder`
- Kind: `interface`
- Method: `apply(arg0: net.kyori.adventure.text.format.StyleBuilderApplicable): net.kyori.adventure.text.format.Style$Builder`
- Method: `build(): net.kyori.adventure.text.format.Style`
- Method: `clickEvent(arg0: net.kyori.adventure.text.event.ClickEvent): net.kyori.adventure.text.format.Style$Builder`
- Method: `color(arg0: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.format.Style$Builder`
- Method: `colorIfAbsent(arg0: net.kyori.adventure.text.format.TextColor): net.kyori.adventure.text.format.Style$Builder`
- Method: `decorate(arg0: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.format.Style$Builder`
- Method: `decorate(arg0: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.format.Style$Builder`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: net.kyori.adventure.text.format.TextDecoration$State): net.kyori.adventure.text.format.Style$Builder`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: boolean): net.kyori.adventure.text.format.Style$Builder`
- Method: `decorationIfAbsent(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: net.kyori.adventure.text.format.TextDecoration$State): net.kyori.adventure.text.format.Style$Builder`
- Method: `decorations(arg0: java.util.Map<net.kyori.adventure.text.format.TextDecoration, net.kyori.adventure.text.format.TextDecoration$State>): net.kyori.adventure.text.format.Style$Builder`
- Method: `font(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.text.format.Style$Builder`
- Method: `hoverEvent(arg0: net.kyori.adventure.text.event.HoverEventSource<?>): net.kyori.adventure.text.format.Style$Builder`
- Method: `insertion(arg0: java.lang.String): net.kyori.adventure.text.format.Style$Builder`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style): net.kyori.adventure.text.format.Style$Builder`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style, arg1: java.util.Set<net.kyori.adventure.text.format.Style$Merge>): net.kyori.adventure.text.format.Style$Builder`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style, arg1: net.kyori.adventure.text.format.Style$Merge$Strategy): net.kyori.adventure.text.format.Style$Builder`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style, arg1: net.kyori.adventure.text.format.Style$Merge$Strategy, arg2: java.util.Set<net.kyori.adventure.text.format.Style$Merge>): net.kyori.adventure.text.format.Style$Builder`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style, arg1: net.kyori.adventure.text.format.Style$Merge$Strategy, arg2: net.kyori.adventure.text.format.Style$Merge): net.kyori.adventure.text.format.Style$Builder`
- Method: `merge(arg0: net.kyori.adventure.text.format.Style, arg1: net.kyori.adventure.text.format.Style$Merge): net.kyori.adventure.text.format.Style$Builder`

### Style_Merge

- Java: `net.kyori.adventure.text.format.Style$Merge`
- Kind: `enum`
- Method: `all(): java.util.Set<net.kyori.adventure.text.format.Style$Merge>`
- Method: `colorAndDecorations(): java.util.Set<net.kyori.adventure.text.format.Style$Merge>`
- Method: `merges(arg0: net.kyori.adventure.text.format.Style$Merge): java.util.Set<net.kyori.adventure.text.format.Style$Merge>`
- Method: `of(arg0: net.kyori.adventure.text.format.Style$Merge): java.util.Set<net.kyori.adventure.text.format.Style$Merge>`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.text.format.Style$Merge`
- Method: `values(): net.kyori.adventure.text.format.Style$Merge[]`
- Enum: `COLOR`
- Enum: `DECORATIONS`
- Enum: `EVENTS`
- Enum: `FONT`
- Enum: `INSERTION`
- Enum: `SHADOW_COLOR`

### Style_Merge_Strategy

- Java: `net.kyori.adventure.text.format.Style$Merge$Strategy`
- Kind: `enum`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.text.format.Style$Merge$Strategy`
- Method: `values(): net.kyori.adventure.text.format.Style$Merge$Strategy[]`
- Enum: `ALWAYS`
- Enum: `IF_ABSENT_ON_TARGET`
- Enum: `NEVER`

### StyleBuilderApplicable

- Java: `net.kyori.adventure.text.format.StyleBuilderApplicable`
- Kind: `interface`
- Method: `componentBuilderApply(arg0: net.kyori.adventure.text.ComponentBuilder<?, ?>): void`
- Method: `styleApply(arg0: net.kyori.adventure.text.format.Style$Builder): void`

### StyleGetter

- Java: `net.kyori.adventure.text.format.StyleGetter`
- Kind: `interface`
- Method: `clickEvent(): net.kyori.adventure.text.event.ClickEvent`
- Method: `color(): net.kyori.adventure.text.format.TextColor`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration): net.kyori.adventure.text.format.TextDecoration$State`
- Method: `decorations(): java.util.Map<net.kyori.adventure.text.format.TextDecoration, net.kyori.adventure.text.format.TextDecoration$State>`
- Method: `font(): net.kyori.adventure.key.Key`
- Method: `hasDecoration(arg0: net.kyori.adventure.text.format.TextDecoration): boolean`
- Method: `hoverEvent(): net.kyori.adventure.text.event.HoverEvent<?>`
- Method: `insertion(): java.lang.String`
- Method: `shadowColor(): net.kyori.adventure.text.format.ShadowColor`

### StyleSetter

- Java: `net.kyori.adventure.text.format.StyleSetter`
- Kind: `interface`
- Method: `clickEvent(arg0: net.kyori.adventure.text.event.ClickEvent): T`
- Method: `color(arg0: net.kyori.adventure.text.format.TextColor): T`
- Method: `colorIfAbsent(arg0: net.kyori.adventure.text.format.TextColor): T`
- Method: `decorate(arg0: net.kyori.adventure.text.format.TextDecoration): T`
- Method: `decorate(arg0: net.kyori.adventure.text.format.TextDecoration): T`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: net.kyori.adventure.text.format.TextDecoration$State): T`
- Method: `decoration(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: boolean): T`
- Method: `decorationIfAbsent(arg0: net.kyori.adventure.text.format.TextDecoration, arg1: net.kyori.adventure.text.format.TextDecoration$State): T`
- Method: `decorations(arg0: java.util.Map<net.kyori.adventure.text.format.TextDecoration, net.kyori.adventure.text.format.TextDecoration$State>): T`
- Method: `decorations(arg0: java.util.Set<net.kyori.adventure.text.format.TextDecoration>, arg1: boolean): T`
- Method: `font(arg0: net.kyori.adventure.key.Key): T`
- Method: `hoverEvent(arg0: net.kyori.adventure.text.event.HoverEventSource<?>): T`
- Method: `insertion(arg0: java.lang.String): T`
- Method: `shadowColor(arg0: net.kyori.adventure.util.ARGBLike): T`
- Method: `shadowColorIfAbsent(arg0: net.kyori.adventure.util.ARGBLike): T`

### TextColor

- Java: `net.kyori.adventure.text.format.TextColor`
- Kind: `interface`
- Field: `HEX_CHARACTER: char`
- Field: `HEX_PREFIX: java.lang.String`
- Method: `asHexString(): java.lang.String`
- Method: `blue(): int`
- Method: `color(arg0: float, arg1: float, arg2: float): net.kyori.adventure.text.format.TextColor`
- Method: `color(arg0: int): net.kyori.adventure.text.format.TextColor`
- Method: `color(arg0: int, arg1: int, arg2: int): net.kyori.adventure.text.format.TextColor`
- Method: `color(arg0: net.kyori.adventure.util.HSVLike): net.kyori.adventure.text.format.TextColor`
- Method: `color(arg0: net.kyori.adventure.util.RGBLike): net.kyori.adventure.text.format.TextColor`
- Method: `compareTo(arg0: net.kyori.adventure.text.format.TextColor): int`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `fromCSSHexString(arg0: java.lang.String): net.kyori.adventure.text.format.TextColor`
- Method: `fromHexString(arg0: java.lang.String): net.kyori.adventure.text.format.TextColor`
- Method: `green(): int`
- Method: `lerp(arg0: float, arg1: net.kyori.adventure.util.RGBLike, arg2: net.kyori.adventure.util.RGBLike): net.kyori.adventure.text.format.TextColor`
- Method: `nearestColorTo(arg0: java.util.List<C>, arg1: net.kyori.adventure.text.format.TextColor): C`
- Method: `red(): int`
- Method: `styleApply(arg0: net.kyori.adventure.text.format.Style$Builder): void`
- Method: `value(): int`

### TextDecoration

- Java: `net.kyori.adventure.text.format.TextDecoration`
- Kind: `enum`
- Field: `NAMES: net.kyori.adventure.util.Index<java.lang.String, net.kyori.adventure.text.format.TextDecoration>`
- Method: `as(arg0: net.kyori.adventure.text.format.TextDecoration$State): net.kyori.adventure.text.format.TextDecorationAndState`
- Method: `as(arg0: boolean): net.kyori.adventure.text.format.TextDecorationAndState`
- Method: `styleApply(arg0: net.kyori.adventure.text.format.Style$Builder): void`
- Method: `toString(): java.lang.String`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.text.format.TextDecoration`
- Method: `values(): net.kyori.adventure.text.format.TextDecoration[]`
- Method: `withState(arg0: net.kyori.adventure.text.format.TextDecoration$State): net.kyori.adventure.text.format.TextDecorationAndState`
- Method: `withState(arg0: net.kyori.adventure.util.TriState): net.kyori.adventure.text.format.TextDecorationAndState`
- Method: `withState(arg0: boolean): net.kyori.adventure.text.format.TextDecorationAndState`
- Enum: `BOLD`
- Enum: `ITALIC`
- Enum: `OBFUSCATED`
- Enum: `STRIKETHROUGH`
- Enum: `UNDERLINED`

### TextDecoration_State

- Java: `net.kyori.adventure.text.format.TextDecoration$State`
- Kind: `enum`
- Method: `byBoolean(arg0: java.lang.Boolean): net.kyori.adventure.text.format.TextDecoration$State`
- Method: `byBoolean(arg0: boolean): net.kyori.adventure.text.format.TextDecoration$State`
- Method: `byTriState(arg0: net.kyori.adventure.util.TriState): net.kyori.adventure.text.format.TextDecoration$State`
- Method: `toString(): java.lang.String`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.text.format.TextDecoration$State`
- Method: `values(): net.kyori.adventure.text.format.TextDecoration$State[]`
- Enum: `FALSE`
- Enum: `NOT_SET`
- Enum: `TRUE`

### TextDecorationAndState

- Java: `net.kyori.adventure.text.format.TextDecorationAndState`
- Kind: `interface`
- Method: `decoration(): net.kyori.adventure.text.format.TextDecoration`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `state(): net.kyori.adventure.text.format.TextDecoration$State`
- Method: `styleApply(arg0: net.kyori.adventure.text.format.Style$Builder): void`

### TextFormat

- Java: `net.kyori.adventure.text.format.TextFormat`
- Kind: `interface`

### ObjectContents

- Java: `net.kyori.adventure.text.object.ObjectContents`
- Kind: `interface`
- Method: `playerHead(): net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder`
- Method: `playerHead(arg0: java.lang.String): net.kyori.adventure.text.object.PlayerHeadObjectContents`
- Method: `playerHead(arg0: java.util.UUID): net.kyori.adventure.text.object.PlayerHeadObjectContents`
- Method: `playerHead(arg0: net.kyori.adventure.text.object.PlayerHeadObjectContents$SkinSource): net.kyori.adventure.text.object.PlayerHeadObjectContents`
- Method: `sprite(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.text.object.SpriteObjectContents`
- Method: `sprite(arg0: net.kyori.adventure.key.Key, arg1: net.kyori.adventure.key.Key): net.kyori.adventure.text.object.SpriteObjectContents`

### PlayerHeadObjectContents

- Java: `net.kyori.adventure.text.object.PlayerHeadObjectContents`
- Kind: `interface`
- Field: `DEFAULT_HAT: boolean`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `hat(): boolean`
- Method: `id(): java.util.UUID`
- Method: `name(): java.lang.String`
- Method: `profileProperties(): java.util.List<net.kyori.adventure.text.object.PlayerHeadObjectContents$ProfileProperty>`
- Method: `property(arg0: java.lang.String, arg1: java.lang.String): net.kyori.adventure.text.object.PlayerHeadObjectContents$ProfileProperty`
- Method: `property(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): net.kyori.adventure.text.object.PlayerHeadObjectContents$ProfileProperty`
- Method: `texture(): net.kyori.adventure.key.Key`
- Method: `toBuilder(): net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder`

### PlayerHeadObjectContents_Builder

- Java: `net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder`
- Kind: `interface`
- Method: `build(): net.kyori.adventure.text.object.PlayerHeadObjectContents`
- Method: `hat(arg0: boolean): net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder`
- Method: `id(arg0: java.util.UUID): net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder`
- Method: `name(arg0: java.lang.String): net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder`
- Method: `profileProperties(arg0: java.util.Collection<net.kyori.adventure.text.object.PlayerHeadObjectContents$ProfileProperty>): net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder`
- Method: `profileProperty(arg0: net.kyori.adventure.text.object.PlayerHeadObjectContents$ProfileProperty): net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder`
- Method: `skin(arg0: net.kyori.adventure.text.object.PlayerHeadObjectContents$SkinSource): net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder`
- Method: `texture(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder`

### PlayerHeadObjectContents_ProfileProperty

- Java: `net.kyori.adventure.text.object.PlayerHeadObjectContents$ProfileProperty`
- Kind: `interface`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `name(): java.lang.String`
- Method: `signature(): java.lang.String`
- Method: `value(): java.lang.String`

### PlayerHeadObjectContents_SkinSource

- Java: `net.kyori.adventure.text.object.PlayerHeadObjectContents$SkinSource`
- Kind: `interface`
- Method: `applySkinToPlayerHeadContents(arg0: net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder): void`

### SpriteObjectContents

- Java: `net.kyori.adventure.text.object.SpriteObjectContents`
- Kind: `interface`
- Field: `DEFAULT_ATLAS: net.kyori.adventure.key.Key`
- Method: `atlas(): net.kyori.adventure.key.Key`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `sprite(): net.kyori.adventure.key.Key`

### AbstractComponentRenderer

- Java: `net.kyori.adventure.text.renderer.AbstractComponentRenderer`
- Kind: `abstract`
- Method: `render(arg0: net.kyori.adventure.text.Component, arg1: C): net.kyori.adventure.text.Component`

### ComponentRenderer

- Java: `net.kyori.adventure.text.renderer.ComponentRenderer`
- Kind: `interface`
- Method: `mapContext(arg0: java.util.function.Function<T, C>): net.kyori.adventure.text.renderer.ComponentRenderer<T>`
- Method: `render(arg0: net.kyori.adventure.text.Component, arg1: C): net.kyori.adventure.text.Component`

### TranslatableComponentRenderer

- Java: `net.kyori.adventure.text.renderer.TranslatableComponentRenderer`
- Kind: `abstract`
- Method: `usingTranslationSource(arg0: net.kyori.adventure.translation.Translator): net.kyori.adventure.text.renderer.TranslatableComponentRenderer<java.util.Locale>`

### ComponentDecoder

- Java: `net.kyori.adventure.text.serializer.ComponentDecoder`
- Kind: `interface`
- Method: `deserialize(arg0: S): O`
- Method: `deserializeOr(arg0: S, arg1: O): O`
- Method: `deserializeOrNull(arg0: S): O`

### ComponentEncoder

- Java: `net.kyori.adventure.text.serializer.ComponentEncoder`
- Kind: `interface`
- Method: `serialize(arg0: I): R`
- Method: `serializeOr(arg0: I, arg1: R): R`
- Method: `serializeOrNull(arg0: I): R`

### ComponentSerializer

- Java: `net.kyori.adventure.text.serializer.ComponentSerializer`
- Kind: `interface`
- Method: `deseializeOrNull(arg0: R): O`
- Method: `deserialize(arg0: R): O`
- Method: `deserializeOr(arg0: R, arg1: O): O`
- Method: `deserializeOrNull(arg0: R): O`
- Method: `serialize(arg0: I): R`
- Method: `serializeOr(arg0: I, arg1: R): R`
- Method: `serializeOrNull(arg0: I): R`

### Title

- Java: `net.kyori.adventure.title.Title`
- Kind: `interface`
- Field: `DEFAULT_TIMES: net.kyori.adventure.title.Title$Times`
- Method: `part(arg0: net.kyori.adventure.title.TitlePart<T>): T`
- Method: `subtitle(): net.kyori.adventure.text.Component`
- Method: `times(): net.kyori.adventure.title.Title$Times`
- Method: `title(): net.kyori.adventure.text.Component`
- Method: `title(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.text.Component): net.kyori.adventure.title.Title`
- Method: `title(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.text.Component, arg2: int, arg3: int, arg4: int): net.kyori.adventure.title.Title`
- Method: `title(arg0: net.kyori.adventure.text.Component, arg1: net.kyori.adventure.text.Component, arg2: net.kyori.adventure.title.Title$Times): net.kyori.adventure.title.Title`

### Title_Times

- Java: `net.kyori.adventure.title.Title$Times`
- Kind: `interface`
- Method: `fadeIn(): java.time.Duration`
- Method: `fadeOut(): java.time.Duration`
- Method: `of(arg0: java.time.Duration, arg1: java.time.Duration, arg2: java.time.Duration): net.kyori.adventure.title.Title$Times`
- Method: `stay(): java.time.Duration`
- Method: `times(arg0: java.time.Duration, arg1: java.time.Duration, arg2: java.time.Duration): net.kyori.adventure.title.Title$Times`

### TitlePart

- Java: `net.kyori.adventure.title.TitlePart`
- Kind: `interface`
- Field: `SUBTITLE: net.kyori.adventure.title.TitlePart<net.kyori.adventure.text.Component>`
- Field: `TIMES: net.kyori.adventure.title.TitlePart<net.kyori.adventure.title.Title$Times>`
- Field: `TITLE: net.kyori.adventure.title.TitlePart<net.kyori.adventure.text.Component>`

### AbstractTranslationStore

- Java: `net.kyori.adventure.translation.AbstractTranslationStore`
- Kind: `abstract`
- Method: `canTranslate(arg0: java.lang.String, arg1: java.util.Locale): boolean`
- Method: `contains(arg0: java.lang.String): boolean`
- Method: `contains(arg0: java.lang.String, arg1: java.util.Locale): boolean`
- Method: `defaultLocale(arg0: java.util.Locale): void`
- Method: `equals(arg0: java.lang.Object): boolean`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `hasAnyTranslations(): net.kyori.adventure.util.TriState`
- Method: `hashCode(): int`
- Method: `name(): net.kyori.adventure.key.Key`
- Method: `register(arg0: java.lang.String, arg1: java.util.Locale, arg2: T): void`
- Method: `registerAll(arg0: java.util.Locale, arg1: java.util.Map<java.lang.String, T>): void`
- Method: `registerAll(arg0: java.util.Locale, arg1: java.util.Set<java.lang.String>, arg2: java.util.function.Function<java.lang.String, T>): void`
- Method: `toString(): java.lang.String`
- Method: `unregister(arg0: java.lang.String): void`

### AbstractTranslationStore_StringBased

- Java: `net.kyori.adventure.translation.AbstractTranslationStore$StringBased`
- Kind: `abstract`
- Method: `registerAll(arg0: java.util.Locale, arg1: java.nio.file.Path, arg2: boolean): void`
- Method: `registerAll(arg0: java.util.Locale, arg1: java.util.ResourceBundle, arg2: boolean): void`

### GlobalTranslator

- Java: `net.kyori.adventure.translation.GlobalTranslator`
- Kind: `interface`
- Method: `addSource(arg0: net.kyori.adventure.translation.Translator): boolean`
- Method: `get(): net.kyori.adventure.translation.GlobalTranslator`
- Method: `removeSource(arg0: net.kyori.adventure.translation.Translator): boolean`
- Method: `render(arg0: net.kyori.adventure.text.Component, arg1: java.util.Locale): net.kyori.adventure.text.Component`
- Method: `renderer(): net.kyori.adventure.text.renderer.TranslatableComponentRenderer<java.util.Locale>`
- Method: `sources(): java.lang.Iterable<? extends net.kyori.adventure.translation.Translator>`
- Method: `translator(): net.kyori.adventure.translation.GlobalTranslator`

### Translatable

- Java: `net.kyori.adventure.translation.Translatable`
- Kind: `interface`
- Method: `translationKey(): java.lang.String`

### TranslationRegistry

- Java: `net.kyori.adventure.translation.TranslationRegistry`
- Kind: `interface`
- Field: `SINGLE_QUOTE_PATTERN: java.util.regex.Pattern`
- Method: `contains(arg0: java.lang.String): boolean`
- Method: `create(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.translation.TranslationRegistry`
- Method: `defaultLocale(arg0: java.util.Locale): void`
- Method: `register(arg0: java.lang.String, arg1: java.util.Locale, arg2: java.text.MessageFormat): void`
- Method: `registerAll(arg0: java.util.Locale, arg1: java.nio.file.Path, arg2: boolean): void`
- Method: `registerAll(arg0: java.util.Locale, arg1: java.util.Map<java.lang.String, java.text.MessageFormat>): void`
- Method: `registerAll(arg0: java.util.Locale, arg1: java.util.ResourceBundle, arg2: boolean): void`
- Method: `registerAll(arg0: java.util.Locale, arg1: java.util.Set<java.lang.String>, arg2: java.util.function.Function<java.lang.String, java.text.MessageFormat>): void`
- Method: `translate(arg0: java.lang.String, arg1: java.util.Locale): java.text.MessageFormat`
- Method: `unregister(arg0: java.lang.String): void`

### TranslationStore

- Java: `net.kyori.adventure.translation.TranslationStore`
- Kind: `interface`
- Method: `canTranslate(arg0: java.lang.String, arg1: java.util.Locale): boolean`
- Method: `component(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.translation.TranslationStore<net.kyori.adventure.text.Component>`
- Method: `contains(arg0: java.lang.String): boolean`
- Method: `contains(arg0: java.lang.String, arg1: java.util.Locale): boolean`
- Method: `defaultLocale(arg0: java.util.Locale): void`
- Method: `messageFormat(arg0: net.kyori.adventure.key.Key): net.kyori.adventure.translation.TranslationStore$StringBased<java.text.MessageFormat>`
- Method: `register(arg0: java.lang.String, arg1: java.util.Locale, arg2: T): void`
- Method: `registerAll(arg0: java.util.Locale, arg1: java.util.Map<java.lang.String, T>): void`
- Method: `registerAll(arg0: java.util.Locale, arg1: java.util.Set<java.lang.String>, arg2: java.util.function.Function<java.lang.String, T>): void`
- Method: `unregister(arg0: java.lang.String): void`

### TranslationStore_StringBased

- Java: `net.kyori.adventure.translation.TranslationStore$StringBased`
- Kind: `interface`
- Method: `registerAll(arg0: java.util.Locale, arg1: java.nio.file.Path, arg2: boolean): void`
- Method: `registerAll(arg0: java.util.Locale, arg1: java.util.ResourceBundle, arg2: boolean): void`

### Translator

- Java: `net.kyori.adventure.translation.Translator`
- Kind: `interface`
- Method: `canTranslate(arg0: java.lang.String, arg1: java.util.Locale): boolean`
- Method: `hasAnyTranslations(): net.kyori.adventure.util.TriState`
- Method: `name(): net.kyori.adventure.key.Key`
- Method: `parseLocale(arg0: java.lang.String): java.util.Locale`
- Method: `translate(arg0: java.lang.String, arg1: java.util.Locale): java.text.MessageFormat`
- Method: `translate(arg0: net.kyori.adventure.text.TranslatableComponent, arg1: java.util.Locale): net.kyori.adventure.text.Component`

### ARGBLike

- Java: `net.kyori.adventure.util.ARGBLike`
- Kind: `interface`
- Method: `alpha(): int`

### Buildable

- Java: `net.kyori.adventure.util.Buildable`
- Kind: `interface`
- Method: `configureAndBuild(arg0: B, arg1: java.util.function.Consumer<? super B>): R`
- Method: `toBuilder(): B`

### Buildable_Builder

- Java: `net.kyori.adventure.util.Buildable$Builder`
- Kind: `interface`
- Method: `build(): R`

### Codec

- Java: `net.kyori.adventure.util.Codec`
- Kind: `interface`
- Method: `codec(arg0: net.kyori.adventure.util.Codec$Decoder<D, E, DX>, arg1: net.kyori.adventure.util.Codec$Encoder<D, E, EX>): net.kyori.adventure.util.Codec<D, E, DX, EX>`
- Method: `decode(arg0: E): D`
- Method: `encode(arg0: D): E`
- Method: `of(arg0: net.kyori.adventure.util.Codec$Decoder<D, E, DX>, arg1: net.kyori.adventure.util.Codec$Encoder<D, E, EX>): net.kyori.adventure.util.Codec<D, E, DX, EX>`

### Codec_Decoder

- Java: `net.kyori.adventure.util.Codec$Decoder`
- Kind: `interface`
- Method: `decode(arg0: E): D`

### Codec_Encoder

- Java: `net.kyori.adventure.util.Codec$Encoder`
- Kind: `interface`
- Method: `encode(arg0: D): E`

### ComponentMessageThrowable

- Java: `net.kyori.adventure.util.ComponentMessageThrowable`
- Kind: `interface`
- Method: `componentMessage(): net.kyori.adventure.text.Component`
- Method: `getMessage(arg0: java.lang.Throwable): net.kyori.adventure.text.Component`
- Method: `getOrConvertMessage(arg0: java.lang.Throwable): net.kyori.adventure.text.Component`

### ForwardingIterator

- Java: `net.kyori.adventure.util.ForwardingIterator`
- Kind: `class`
- Constructor: `(arg0: java.util.function.Supplier<java.util.Iterator<T>>, arg1: java.util.function.Supplier<java.util.Spliterator<T>>)`
- Method: `iterator(): java.util.Iterator<T>`
- Method: `spliterator(): java.util.Spliterator<T>`

### HSVLike

- Java: `net.kyori.adventure.util.HSVLike`
- Kind: `interface`
- Method: `examinableProperties(): java.util.stream.Stream<? extends net.kyori.examination.ExaminableProperty>`
- Method: `fromRGB(arg0: int, arg1: int, arg2: int): net.kyori.adventure.util.HSVLike`
- Method: `h(): float`
- Method: `hsvLike(arg0: float, arg1: float, arg2: float): net.kyori.adventure.util.HSVLike`
- Method: `of(arg0: float, arg1: float, arg2: float): net.kyori.adventure.util.HSVLike`
- Method: `s(): float`
- Method: `v(): float`

### Index

- Java: `net.kyori.adventure.util.Index`
- Kind: `class`
- Method: `create(arg0: java.lang.Class<V>, arg1: java.util.function.Function<? super V, ? extends K>): net.kyori.adventure.util.Index<K, V>`
- Method: `create(arg0: java.lang.Class<V>, arg1: java.util.function.Function<? super V, ? extends K>, arg2: V): net.kyori.adventure.util.Index<K, V>`
- Method: `create(arg0: java.util.function.Function<? super V, ? extends K>, arg1: java.util.List<V>): net.kyori.adventure.util.Index<K, V>`
- Method: `create(arg0: java.util.function.Function<? super V, ? extends K>, arg1: V): net.kyori.adventure.util.Index<K, V>`
- Method: `key(arg0: V): K`
- Method: `keyOr(arg0: V, arg1: K): K`
- Method: `keyOrThrow(arg0: V): K`
- Method: `keyToValue(): java.util.Map<K, V>`
- Method: `keys(): java.util.Set<K>`
- Method: `value(arg0: K): V`
- Method: `valueOr(arg0: K, arg1: V): V`
- Method: `valueOrThrow(arg0: K): V`
- Method: `valueToKey(): java.util.Map<V, K>`
- Method: `values(): java.util.Set<V>`

### InheritanceAwareMap

- Java: `net.kyori.adventure.util.InheritanceAwareMap`
- Kind: `interface`
- Method: `builder(): net.kyori.adventure.util.InheritanceAwareMap$Builder<K, E>`
- Method: `builder(arg0: net.kyori.adventure.util.InheritanceAwareMap<? extends K, ? extends E>): net.kyori.adventure.util.InheritanceAwareMap$Builder<K, E>`
- Method: `containsKey(arg0: java.lang.Class<? extends C>): boolean`
- Method: `empty(): net.kyori.adventure.util.InheritanceAwareMap<K, E>`
- Method: `get(arg0: java.lang.Class<? extends C>): V`
- Method: `with(arg0: java.lang.Class<? extends C>, arg1: V): net.kyori.adventure.util.InheritanceAwareMap<C, V>`
- Method: `without(arg0: java.lang.Class<? extends C>): net.kyori.adventure.util.InheritanceAwareMap<C, V>`

### InheritanceAwareMap_Builder

- Java: `net.kyori.adventure.util.InheritanceAwareMap$Builder`
- Kind: `interface`
- Method: `put(arg0: java.lang.Class<? extends C>, arg1: V): net.kyori.adventure.util.InheritanceAwareMap$Builder<C, V>`
- Method: `putAll(arg0: net.kyori.adventure.util.InheritanceAwareMap<? extends C, ? extends V>): net.kyori.adventure.util.InheritanceAwareMap$Builder<C, V>`
- Method: `remove(arg0: java.lang.Class<? extends C>): net.kyori.adventure.util.InheritanceAwareMap$Builder<C, V>`
- Method: `strict(arg0: boolean): net.kyori.adventure.util.InheritanceAwareMap$Builder<C, V>`

### IntFunction2

- Java: `net.kyori.adventure.util.IntFunction2`
- Kind: `interface`
- Method: `apply(arg0: int, arg1: int): R`

### Listenable

- Java: `net.kyori.adventure.util.Listenable`
- Kind: `abstract`

### MonkeyBars

- Java: `net.kyori.adventure.util.MonkeyBars`
- Kind: `class`
- Method: `addOne(arg0: java.util.List<T>, arg1: T): java.util.List<T>`
- Method: `enumSet(arg0: java.lang.Class<E>, arg1: E): java.util.Set<E>`
- Method: `nonEmptyArrayToList(arg0: java.util.function.Function<I, O>, arg1: I, arg2: I): java.util.List<O>`
- Method: `toUnmodifiableList(arg0: java.util.function.Function<I, O>, arg1: java.lang.Iterable<? extends I>): java.util.List<O>`

### Nag

- Java: `net.kyori.adventure.util.Nag`
- Kind: `abstract`
- Method: `print(arg0: net.kyori.adventure.util.Nag): void`

### PlatformAPI

- Java: `net.kyori.adventure.util.PlatformAPI`
- Kind: `interface`

### RGBLike

- Java: `net.kyori.adventure.util.RGBLike`
- Kind: `interface`
- Method: `asHSV(): net.kyori.adventure.util.HSVLike`
- Method: `blue(): int`
- Method: `green(): int`
- Method: `red(): int`

### Services

- Java: `net.kyori.adventure.util.Services`
- Kind: `class`
- Method: `service(arg0: java.lang.Class<P>): java.util.Optional<P>`
- Method: `serviceWithFallback(arg0: java.lang.Class<P>): java.util.Optional<P>`
- Method: `services(arg0: java.lang.Class<? extends P>): java.util.Set<P>`

### Services_Fallback

- Java: `net.kyori.adventure.util.Services$Fallback`
- Kind: `interface`

### ShadyPines

- Java: `net.kyori.adventure.util.ShadyPines`
- Kind: `class`
- Method: `enumSet(arg0: java.lang.Class<E>, arg1: E): java.util.Set<E>`
- Method: `equals(arg0: double, arg1: double): boolean`
- Method: `equals(arg0: float, arg1: float): boolean`

### Ticks

- Java: `net.kyori.adventure.util.Ticks`
- Kind: `interface`
- Field: `SINGLE_TICK_DURATION_MS: long`
- Field: `TICKS_PER_SECOND: int`
- Method: `duration(arg0: long): java.time.Duration`

### TriState

- Java: `net.kyori.adventure.util.TriState`
- Kind: `enum`
- Method: `byBoolean(arg0: java.lang.Boolean): net.kyori.adventure.util.TriState`
- Method: `byBoolean(arg0: boolean): net.kyori.adventure.util.TriState`
- Method: `toBoolean(): java.lang.Boolean`
- Method: `toBooleanOrElse(arg0: boolean): boolean`
- Method: `toBooleanOrElseGet(arg0: java.util.function.BooleanSupplier): boolean`
- Method: `valueOf(arg0: java.lang.String): net.kyori.adventure.util.TriState`
- Method: `values(): net.kyori.adventure.util.TriState[]`
- Enum: `FALSE`
- Enum: `NOT_SET`
- Enum: `TRUE`

### UTF8ResourceBundleControl

- Java: `net.kyori.adventure.util.UTF8ResourceBundleControl`
- Kind: `class`
- Constructor: `()`
- Method: `get(): java.util.ResourceBundle$Control`
- Method: `newBundle(arg0: java.lang.String, arg1: java.util.Locale, arg2: java.lang.String, arg3: java.lang.ClassLoader, arg4: boolean): java.util.ResourceBundle`
- Method: `utf8ResourceBundleControl(): java.util.ResourceBundle$Control`

## Events

- `CommandExecuteEvent`: `com.velocitypowered.api.event.command.CommandExecuteEvent` (cancellable: false)
- `PlayerAvailableCommandsEvent`: `com.velocitypowered.api.event.command.PlayerAvailableCommandsEvent` (cancellable: false)
- `PostCommandInvocationEvent`: `com.velocitypowered.api.event.command.PostCommandInvocationEvent` (cancellable: false)
- `ConnectionHandshakeEvent`: `com.velocitypowered.api.event.connection.ConnectionHandshakeEvent` (cancellable: false)
- `DisconnectEvent`: `com.velocitypowered.api.event.connection.DisconnectEvent` (cancellable: false)
- `LoginEvent`: `com.velocitypowered.api.event.connection.LoginEvent` (cancellable: false)
- `PluginMessageEvent`: `com.velocitypowered.api.event.connection.PluginMessageEvent` (cancellable: false)
- `PostLoginEvent`: `com.velocitypowered.api.event.connection.PostLoginEvent` (cancellable: false)
- `PreLoginEvent`: `com.velocitypowered.api.event.connection.PreLoginEvent` (cancellable: false)
- `PreTransferEvent`: `com.velocitypowered.api.event.connection.PreTransferEvent` (cancellable: false)
- `PermissionsSetupEvent`: `com.velocitypowered.api.event.permission.PermissionsSetupEvent` (cancellable: false)
- `CookieReceiveEvent`: `com.velocitypowered.api.event.player.CookieReceiveEvent` (cancellable: false)
- `CookieRequestEvent`: `com.velocitypowered.api.event.player.CookieRequestEvent` (cancellable: false)
- `CookieStoreEvent`: `com.velocitypowered.api.event.player.CookieStoreEvent` (cancellable: false)
- `GameProfileRequestEvent`: `com.velocitypowered.api.event.player.GameProfileRequestEvent` (cancellable: false)
- `KickedFromServerEvent`: `com.velocitypowered.api.event.player.KickedFromServerEvent` (cancellable: false)
- `PlayerChannelRegisterEvent`: `com.velocitypowered.api.event.player.PlayerChannelRegisterEvent` (cancellable: false)
- `PlayerChannelUnregisterEvent`: `com.velocitypowered.api.event.player.PlayerChannelUnregisterEvent` (cancellable: false)
- `PlayerChatEvent`: `com.velocitypowered.api.event.player.PlayerChatEvent` (cancellable: false)
- `PlayerChooseInitialServerEvent`: `com.velocitypowered.api.event.player.PlayerChooseInitialServerEvent` (cancellable: false)
- `PlayerClientBrandEvent`: `com.velocitypowered.api.event.player.PlayerClientBrandEvent` (cancellable: false)
- `PlayerModInfoEvent`: `com.velocitypowered.api.event.player.PlayerModInfoEvent` (cancellable: false)
- `PlayerResourcePackStatusEvent`: `com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent` (cancellable: false)
- `PlayerSettingsChangedEvent`: `com.velocitypowered.api.event.player.PlayerSettingsChangedEvent` (cancellable: false)
- `ServerConnectedEvent`: `com.velocitypowered.api.event.player.ServerConnectedEvent` (cancellable: false)
- `ServerLoginPluginMessageEvent`: `com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent` (cancellable: false)
- `ServerPostConnectEvent`: `com.velocitypowered.api.event.player.ServerPostConnectEvent` (cancellable: false)
- `ServerPreConnectEvent`: `com.velocitypowered.api.event.player.ServerPreConnectEvent` (cancellable: false)
- `ServerResourcePackRemoveEvent`: `com.velocitypowered.api.event.player.ServerResourcePackRemoveEvent` (cancellable: false)
- `ServerResourcePackSendEvent`: `com.velocitypowered.api.event.player.ServerResourcePackSendEvent` (cancellable: false)
- `TabCompleteEvent`: `com.velocitypowered.api.event.player.TabCompleteEvent` (cancellable: false)
- `PlayerConfigurationEvent`: `com.velocitypowered.api.event.player.configuration.PlayerConfigurationEvent` (cancellable: false)
- `PlayerEnterConfigurationEvent`: `com.velocitypowered.api.event.player.configuration.PlayerEnterConfigurationEvent` (cancellable: false)
- `PlayerEnteredConfigurationEvent`: `com.velocitypowered.api.event.player.configuration.PlayerEnteredConfigurationEvent` (cancellable: false)
- `PlayerFinishConfigurationEvent`: `com.velocitypowered.api.event.player.configuration.PlayerFinishConfigurationEvent` (cancellable: false)
- `PlayerFinishedConfigurationEvent`: `com.velocitypowered.api.event.player.configuration.PlayerFinishedConfigurationEvent` (cancellable: false)
- `ListenerBoundEvent`: `com.velocitypowered.api.event.proxy.ListenerBoundEvent` (cancellable: false)
- `ListenerCloseEvent`: `com.velocitypowered.api.event.proxy.ListenerCloseEvent` (cancellable: false)
- `ProxyInitializeEvent`: `com.velocitypowered.api.event.proxy.ProxyInitializeEvent` (cancellable: false)
- `ProxyPingEvent`: `com.velocitypowered.api.event.proxy.ProxyPingEvent` (cancellable: false)
- `ProxyPreShutdownEvent`: `com.velocitypowered.api.event.proxy.ProxyPreShutdownEvent` (cancellable: false)
- `ProxyReloadEvent`: `com.velocitypowered.api.event.proxy.ProxyReloadEvent` (cancellable: false)
- `ProxyShutdownEvent`: `com.velocitypowered.api.event.proxy.ProxyShutdownEvent` (cancellable: false)
- `ServerRegisteredEvent`: `com.velocitypowered.api.event.proxy.server.ServerRegisteredEvent` (cancellable: false)
- `ServerUnregisteredEvent`: `com.velocitypowered.api.event.proxy.server.ServerUnregisteredEvent` (cancellable: false)
- `ProxyQueryEvent`: `com.velocitypowered.api.event.query.ProxyQueryEvent` (cancellable: false)
