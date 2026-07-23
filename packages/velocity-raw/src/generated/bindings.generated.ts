// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
export const API_VERSION = "3.4.0-20260121.190037-118" as const;
/** Runtime descriptors accepted by a host Java bridge. Raw Java classes are type-only. */
export const JAVA_TYPES = {
  "com.velocitypowered.api.command.BrigadierCommand": { javaName: "com.velocitypowered.api.command.BrigadierCommand", kind: "class" },
  "com.velocitypowered.api.command.Command": { javaName: "com.velocitypowered.api.command.Command", kind: "interface" },
  "com.velocitypowered.api.command.CommandInvocation": { javaName: "com.velocitypowered.api.command.CommandInvocation", kind: "interface" },
  "com.velocitypowered.api.command.CommandManager": { javaName: "com.velocitypowered.api.command.CommandManager", kind: "interface" },
  "com.velocitypowered.api.command.CommandMeta": { javaName: "com.velocitypowered.api.command.CommandMeta", kind: "interface" },
  "com.velocitypowered.api.command.CommandMeta$Builder": { javaName: "com.velocitypowered.api.command.CommandMeta$Builder", kind: "interface" },
  "com.velocitypowered.api.command.CommandResult": { javaName: "com.velocitypowered.api.command.CommandResult", kind: "enum" },
  "com.velocitypowered.api.command.CommandSource": { javaName: "com.velocitypowered.api.command.CommandSource", kind: "interface" },
  "com.velocitypowered.api.command.InvocableCommand": { javaName: "com.velocitypowered.api.command.InvocableCommand", kind: "interface" },
  "com.velocitypowered.api.command.RawCommand": { javaName: "com.velocitypowered.api.command.RawCommand", kind: "interface" },
  "com.velocitypowered.api.command.RawCommand$Invocation": { javaName: "com.velocitypowered.api.command.RawCommand$Invocation", kind: "interface" },
  "com.velocitypowered.api.command.SimpleCommand": { javaName: "com.velocitypowered.api.command.SimpleCommand", kind: "interface" },
  "com.velocitypowered.api.command.SimpleCommand$Invocation": { javaName: "com.velocitypowered.api.command.SimpleCommand$Invocation", kind: "interface" },
  "com.velocitypowered.api.command.VelocityBrigadierMessage": { javaName: "com.velocitypowered.api.command.VelocityBrigadierMessage", kind: "class" },
  "com.velocitypowered.api.event.annotation.AwaitingEvent": { javaName: "com.velocitypowered.api.event.annotation.AwaitingEvent", kind: "interface" },
  "com.velocitypowered.api.event.AwaitingEventExecutor": { javaName: "com.velocitypowered.api.event.AwaitingEventExecutor", kind: "interface" },
  "com.velocitypowered.api.event.command.CommandExecuteEvent": { javaName: "com.velocitypowered.api.event.command.CommandExecuteEvent", kind: "class" },
  "com.velocitypowered.api.event.command.CommandExecuteEvent$CommandResult": { javaName: "com.velocitypowered.api.event.command.CommandExecuteEvent$CommandResult", kind: "class" },
  "com.velocitypowered.api.event.command.CommandExecuteEvent$InvocationInfo": { javaName: "com.velocitypowered.api.event.command.CommandExecuteEvent$InvocationInfo", kind: "record" },
  "com.velocitypowered.api.event.command.CommandExecuteEvent$SignedState": { javaName: "com.velocitypowered.api.event.command.CommandExecuteEvent$SignedState", kind: "enum" },
  "com.velocitypowered.api.event.command.CommandExecuteEvent$Source": { javaName: "com.velocitypowered.api.event.command.CommandExecuteEvent$Source", kind: "enum" },
  "com.velocitypowered.api.event.command.PlayerAvailableCommandsEvent": { javaName: "com.velocitypowered.api.event.command.PlayerAvailableCommandsEvent", kind: "class" },
  "com.velocitypowered.api.event.command.PostCommandInvocationEvent": { javaName: "com.velocitypowered.api.event.command.PostCommandInvocationEvent", kind: "class" },
  "com.velocitypowered.api.event.connection.ConnectionHandshakeEvent": { javaName: "com.velocitypowered.api.event.connection.ConnectionHandshakeEvent", kind: "class" },
  "com.velocitypowered.api.event.connection.DisconnectEvent": { javaName: "com.velocitypowered.api.event.connection.DisconnectEvent", kind: "class" },
  "com.velocitypowered.api.event.connection.DisconnectEvent$LoginStatus": { javaName: "com.velocitypowered.api.event.connection.DisconnectEvent$LoginStatus", kind: "enum" },
  "com.velocitypowered.api.event.connection.LoginEvent": { javaName: "com.velocitypowered.api.event.connection.LoginEvent", kind: "class" },
  "com.velocitypowered.api.event.connection.PluginMessageEvent": { javaName: "com.velocitypowered.api.event.connection.PluginMessageEvent", kind: "class" },
  "com.velocitypowered.api.event.connection.PluginMessageEvent$ForwardResult": { javaName: "com.velocitypowered.api.event.connection.PluginMessageEvent$ForwardResult", kind: "class" },
  "com.velocitypowered.api.event.connection.PostLoginEvent": { javaName: "com.velocitypowered.api.event.connection.PostLoginEvent", kind: "class" },
  "com.velocitypowered.api.event.connection.PreLoginEvent": { javaName: "com.velocitypowered.api.event.connection.PreLoginEvent", kind: "class" },
  "com.velocitypowered.api.event.connection.PreLoginEvent$PreLoginComponentResult": { javaName: "com.velocitypowered.api.event.connection.PreLoginEvent$PreLoginComponentResult", kind: "class" },
  "com.velocitypowered.api.event.connection.PreTransferEvent": { javaName: "com.velocitypowered.api.event.connection.PreTransferEvent", kind: "class" },
  "com.velocitypowered.api.event.connection.PreTransferEvent$TransferResult": { javaName: "com.velocitypowered.api.event.connection.PreTransferEvent$TransferResult", kind: "class" },
  "com.velocitypowered.api.event.Continuation": { javaName: "com.velocitypowered.api.event.Continuation", kind: "interface" },
  "com.velocitypowered.api.event.EventHandler": { javaName: "com.velocitypowered.api.event.EventHandler", kind: "interface" },
  "com.velocitypowered.api.event.EventManager": { javaName: "com.velocitypowered.api.event.EventManager", kind: "interface" },
  "com.velocitypowered.api.event.EventTask": { javaName: "com.velocitypowered.api.event.EventTask", kind: "interface" },
  "com.velocitypowered.api.event.permission.PermissionsSetupEvent": { javaName: "com.velocitypowered.api.event.permission.PermissionsSetupEvent", kind: "class" },
  "com.velocitypowered.api.event.player.configuration.PlayerConfigurationEvent": { javaName: "com.velocitypowered.api.event.player.configuration.PlayerConfigurationEvent", kind: "record" },
  "com.velocitypowered.api.event.player.configuration.PlayerEnterConfigurationEvent": { javaName: "com.velocitypowered.api.event.player.configuration.PlayerEnterConfigurationEvent", kind: "record" },
  "com.velocitypowered.api.event.player.configuration.PlayerEnteredConfigurationEvent": { javaName: "com.velocitypowered.api.event.player.configuration.PlayerEnteredConfigurationEvent", kind: "record" },
  "com.velocitypowered.api.event.player.configuration.PlayerFinishConfigurationEvent": { javaName: "com.velocitypowered.api.event.player.configuration.PlayerFinishConfigurationEvent", kind: "record" },
  "com.velocitypowered.api.event.player.configuration.PlayerFinishedConfigurationEvent": { javaName: "com.velocitypowered.api.event.player.configuration.PlayerFinishedConfigurationEvent", kind: "record" },
  "com.velocitypowered.api.event.player.CookieReceiveEvent": { javaName: "com.velocitypowered.api.event.player.CookieReceiveEvent", kind: "class" },
  "com.velocitypowered.api.event.player.CookieReceiveEvent$ForwardResult": { javaName: "com.velocitypowered.api.event.player.CookieReceiveEvent$ForwardResult", kind: "class" },
  "com.velocitypowered.api.event.player.CookieRequestEvent": { javaName: "com.velocitypowered.api.event.player.CookieRequestEvent", kind: "class" },
  "com.velocitypowered.api.event.player.CookieRequestEvent$ForwardResult": { javaName: "com.velocitypowered.api.event.player.CookieRequestEvent$ForwardResult", kind: "class" },
  "com.velocitypowered.api.event.player.CookieStoreEvent": { javaName: "com.velocitypowered.api.event.player.CookieStoreEvent", kind: "class" },
  "com.velocitypowered.api.event.player.CookieStoreEvent$ForwardResult": { javaName: "com.velocitypowered.api.event.player.CookieStoreEvent$ForwardResult", kind: "class" },
  "com.velocitypowered.api.event.player.GameProfileRequestEvent": { javaName: "com.velocitypowered.api.event.player.GameProfileRequestEvent", kind: "class" },
  "com.velocitypowered.api.event.player.KickedFromServerEvent": { javaName: "com.velocitypowered.api.event.player.KickedFromServerEvent", kind: "class" },
  "com.velocitypowered.api.event.player.KickedFromServerEvent$DisconnectPlayer": { javaName: "com.velocitypowered.api.event.player.KickedFromServerEvent$DisconnectPlayer", kind: "class" },
  "com.velocitypowered.api.event.player.KickedFromServerEvent$Notify": { javaName: "com.velocitypowered.api.event.player.KickedFromServerEvent$Notify", kind: "class" },
  "com.velocitypowered.api.event.player.KickedFromServerEvent$RedirectPlayer": { javaName: "com.velocitypowered.api.event.player.KickedFromServerEvent$RedirectPlayer", kind: "class" },
  "com.velocitypowered.api.event.player.KickedFromServerEvent$ServerKickResult": { javaName: "com.velocitypowered.api.event.player.KickedFromServerEvent$ServerKickResult", kind: "interface" },
  "com.velocitypowered.api.event.player.PlayerChannelRegisterEvent": { javaName: "com.velocitypowered.api.event.player.PlayerChannelRegisterEvent", kind: "class" },
  "com.velocitypowered.api.event.player.PlayerChannelUnregisterEvent": { javaName: "com.velocitypowered.api.event.player.PlayerChannelUnregisterEvent", kind: "class" },
  "com.velocitypowered.api.event.player.PlayerChatEvent": { javaName: "com.velocitypowered.api.event.player.PlayerChatEvent", kind: "class" },
  "com.velocitypowered.api.event.player.PlayerChatEvent$ChatResult": { javaName: "com.velocitypowered.api.event.player.PlayerChatEvent$ChatResult", kind: "class" },
  "com.velocitypowered.api.event.player.PlayerChooseInitialServerEvent": { javaName: "com.velocitypowered.api.event.player.PlayerChooseInitialServerEvent", kind: "class" },
  "com.velocitypowered.api.event.player.PlayerClientBrandEvent": { javaName: "com.velocitypowered.api.event.player.PlayerClientBrandEvent", kind: "class" },
  "com.velocitypowered.api.event.player.PlayerModInfoEvent": { javaName: "com.velocitypowered.api.event.player.PlayerModInfoEvent", kind: "class" },
  "com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent": { javaName: "com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent", kind: "class" },
  "com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent$Status": { javaName: "com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent$Status", kind: "enum" },
  "com.velocitypowered.api.event.player.PlayerSettingsChangedEvent": { javaName: "com.velocitypowered.api.event.player.PlayerSettingsChangedEvent", kind: "class" },
  "com.velocitypowered.api.event.player.ServerConnectedEvent": { javaName: "com.velocitypowered.api.event.player.ServerConnectedEvent", kind: "class" },
  "com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent": { javaName: "com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent", kind: "class" },
  "com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent$ResponseResult": { javaName: "com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent$ResponseResult", kind: "class" },
  "com.velocitypowered.api.event.player.ServerPostConnectEvent": { javaName: "com.velocitypowered.api.event.player.ServerPostConnectEvent", kind: "class" },
  "com.velocitypowered.api.event.player.ServerPreConnectEvent": { javaName: "com.velocitypowered.api.event.player.ServerPreConnectEvent", kind: "class" },
  "com.velocitypowered.api.event.player.ServerPreConnectEvent$ServerResult": { javaName: "com.velocitypowered.api.event.player.ServerPreConnectEvent$ServerResult", kind: "class" },
  "com.velocitypowered.api.event.player.ServerResourcePackRemoveEvent": { javaName: "com.velocitypowered.api.event.player.ServerResourcePackRemoveEvent", kind: "class" },
  "com.velocitypowered.api.event.player.ServerResourcePackSendEvent": { javaName: "com.velocitypowered.api.event.player.ServerResourcePackSendEvent", kind: "class" },
  "com.velocitypowered.api.event.player.TabCompleteEvent": { javaName: "com.velocitypowered.api.event.player.TabCompleteEvent", kind: "class" },
  "com.velocitypowered.api.event.PostOrder": { javaName: "com.velocitypowered.api.event.PostOrder", kind: "enum" },
  "com.velocitypowered.api.event.proxy.ListenerBoundEvent": { javaName: "com.velocitypowered.api.event.proxy.ListenerBoundEvent", kind: "class" },
  "com.velocitypowered.api.event.proxy.ListenerCloseEvent": { javaName: "com.velocitypowered.api.event.proxy.ListenerCloseEvent", kind: "class" },
  "com.velocitypowered.api.event.proxy.ProxyInitializeEvent": { javaName: "com.velocitypowered.api.event.proxy.ProxyInitializeEvent", kind: "class" },
  "com.velocitypowered.api.event.proxy.ProxyPingEvent": { javaName: "com.velocitypowered.api.event.proxy.ProxyPingEvent", kind: "class" },
  "com.velocitypowered.api.event.proxy.ProxyPreShutdownEvent": { javaName: "com.velocitypowered.api.event.proxy.ProxyPreShutdownEvent", kind: "class" },
  "com.velocitypowered.api.event.proxy.ProxyReloadEvent": { javaName: "com.velocitypowered.api.event.proxy.ProxyReloadEvent", kind: "class" },
  "com.velocitypowered.api.event.proxy.ProxyShutdownEvent": { javaName: "com.velocitypowered.api.event.proxy.ProxyShutdownEvent", kind: "class" },
  "com.velocitypowered.api.event.proxy.server.ServerRegisteredEvent": { javaName: "com.velocitypowered.api.event.proxy.server.ServerRegisteredEvent", kind: "record" },
  "com.velocitypowered.api.event.proxy.server.ServerUnregisteredEvent": { javaName: "com.velocitypowered.api.event.proxy.server.ServerUnregisteredEvent", kind: "record" },
  "com.velocitypowered.api.event.query.ProxyQueryEvent": { javaName: "com.velocitypowered.api.event.query.ProxyQueryEvent", kind: "class" },
  "com.velocitypowered.api.event.query.ProxyQueryEvent$QueryType": { javaName: "com.velocitypowered.api.event.query.ProxyQueryEvent$QueryType", kind: "enum" },
  "com.velocitypowered.api.event.ResultedEvent": { javaName: "com.velocitypowered.api.event.ResultedEvent", kind: "interface" },
  "com.velocitypowered.api.event.ResultedEvent$ComponentResult": { javaName: "com.velocitypowered.api.event.ResultedEvent$ComponentResult", kind: "class" },
  "com.velocitypowered.api.event.ResultedEvent$GenericResult": { javaName: "com.velocitypowered.api.event.ResultedEvent$GenericResult", kind: "class" },
  "com.velocitypowered.api.event.ResultedEvent$Result": { javaName: "com.velocitypowered.api.event.ResultedEvent$Result", kind: "interface" },
  "com.velocitypowered.api.event.Subscribe": { javaName: "com.velocitypowered.api.event.Subscribe", kind: "interface" },
  "com.velocitypowered.api.network.HandshakeIntent": { javaName: "com.velocitypowered.api.network.HandshakeIntent", kind: "enum" },
  "com.velocitypowered.api.network.ListenerType": { javaName: "com.velocitypowered.api.network.ListenerType", kind: "enum" },
  "com.velocitypowered.api.network.ProtocolState": { javaName: "com.velocitypowered.api.network.ProtocolState", kind: "enum" },
  "com.velocitypowered.api.network.ProtocolVersion": { javaName: "com.velocitypowered.api.network.ProtocolVersion", kind: "enum" },
  "com.velocitypowered.api.permission.PermissionFunction": { javaName: "com.velocitypowered.api.permission.PermissionFunction", kind: "interface" },
  "com.velocitypowered.api.permission.PermissionProvider": { javaName: "com.velocitypowered.api.permission.PermissionProvider", kind: "interface" },
  "com.velocitypowered.api.permission.PermissionSubject": { javaName: "com.velocitypowered.api.permission.PermissionSubject", kind: "interface" },
  "com.velocitypowered.api.permission.Tristate": { javaName: "com.velocitypowered.api.permission.Tristate", kind: "enum" },
  "com.velocitypowered.api.plugin.annotation.DataDirectory": { javaName: "com.velocitypowered.api.plugin.annotation.DataDirectory", kind: "interface" },
  "com.velocitypowered.api.plugin.ap.PluginAnnotationProcessor": { javaName: "com.velocitypowered.api.plugin.ap.PluginAnnotationProcessor", kind: "class" },
  "com.velocitypowered.api.plugin.ap.SerializedPluginDescription": { javaName: "com.velocitypowered.api.plugin.ap.SerializedPluginDescription", kind: "class" },
  "com.velocitypowered.api.plugin.ap.SerializedPluginDescription$Dependency": { javaName: "com.velocitypowered.api.plugin.ap.SerializedPluginDescription$Dependency", kind: "class" },
  "com.velocitypowered.api.plugin.Dependency": { javaName: "com.velocitypowered.api.plugin.Dependency", kind: "interface" },
  "com.velocitypowered.api.plugin.InvalidPluginException": { javaName: "com.velocitypowered.api.plugin.InvalidPluginException", kind: "class" },
  "com.velocitypowered.api.plugin.meta.PluginDependency": { javaName: "com.velocitypowered.api.plugin.meta.PluginDependency", kind: "class" },
  "com.velocitypowered.api.plugin.Plugin": { javaName: "com.velocitypowered.api.plugin.Plugin", kind: "interface" },
  "com.velocitypowered.api.plugin.PluginContainer": { javaName: "com.velocitypowered.api.plugin.PluginContainer", kind: "interface" },
  "com.velocitypowered.api.plugin.PluginDescription": { javaName: "com.velocitypowered.api.plugin.PluginDescription", kind: "interface" },
  "com.velocitypowered.api.plugin.PluginManager": { javaName: "com.velocitypowered.api.plugin.PluginManager", kind: "interface" },
  "com.velocitypowered.api.proxy.config.ProxyConfig": { javaName: "com.velocitypowered.api.proxy.config.ProxyConfig", kind: "interface" },
  "com.velocitypowered.api.proxy.ConnectionRequestBuilder": { javaName: "com.velocitypowered.api.proxy.ConnectionRequestBuilder", kind: "interface" },
  "com.velocitypowered.api.proxy.ConnectionRequestBuilder$Result": { javaName: "com.velocitypowered.api.proxy.ConnectionRequestBuilder$Result", kind: "interface" },
  "com.velocitypowered.api.proxy.ConnectionRequestBuilder$Status": { javaName: "com.velocitypowered.api.proxy.ConnectionRequestBuilder$Status", kind: "enum" },
  "com.velocitypowered.api.proxy.ConsoleCommandSource": { javaName: "com.velocitypowered.api.proxy.ConsoleCommandSource", kind: "interface" },
  "com.velocitypowered.api.proxy.crypto.IdentifiedKey": { javaName: "com.velocitypowered.api.proxy.crypto.IdentifiedKey", kind: "interface" },
  "com.velocitypowered.api.proxy.crypto.IdentifiedKey$Revision": { javaName: "com.velocitypowered.api.proxy.crypto.IdentifiedKey$Revision", kind: "enum" },
  "com.velocitypowered.api.proxy.crypto.KeyIdentifiable": { javaName: "com.velocitypowered.api.proxy.crypto.KeyIdentifiable", kind: "interface" },
  "com.velocitypowered.api.proxy.crypto.KeySigned": { javaName: "com.velocitypowered.api.proxy.crypto.KeySigned", kind: "interface" },
  "com.velocitypowered.api.proxy.crypto.SignedMessage": { javaName: "com.velocitypowered.api.proxy.crypto.SignedMessage", kind: "interface" },
  "com.velocitypowered.api.proxy.InboundConnection": { javaName: "com.velocitypowered.api.proxy.InboundConnection", kind: "interface" },
  "com.velocitypowered.api.proxy.LoginPhaseConnection": { javaName: "com.velocitypowered.api.proxy.LoginPhaseConnection", kind: "interface" },
  "com.velocitypowered.api.proxy.LoginPhaseConnection$MessageConsumer": { javaName: "com.velocitypowered.api.proxy.LoginPhaseConnection$MessageConsumer", kind: "interface" },
  "com.velocitypowered.api.proxy.messages.ChannelIdentifier": { javaName: "com.velocitypowered.api.proxy.messages.ChannelIdentifier", kind: "interface" },
  "com.velocitypowered.api.proxy.messages.ChannelMessageSink": { javaName: "com.velocitypowered.api.proxy.messages.ChannelMessageSink", kind: "interface" },
  "com.velocitypowered.api.proxy.messages.ChannelMessageSource": { javaName: "com.velocitypowered.api.proxy.messages.ChannelMessageSource", kind: "interface" },
  "com.velocitypowered.api.proxy.messages.ChannelRegistrar": { javaName: "com.velocitypowered.api.proxy.messages.ChannelRegistrar", kind: "interface" },
  "com.velocitypowered.api.proxy.messages.LegacyChannelIdentifier": { javaName: "com.velocitypowered.api.proxy.messages.LegacyChannelIdentifier", kind: "class" },
  "com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier": { javaName: "com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier", kind: "class" },
  "com.velocitypowered.api.proxy.messages.PluginMessageEncoder": { javaName: "com.velocitypowered.api.proxy.messages.PluginMessageEncoder", kind: "interface" },
  "com.velocitypowered.api.proxy.Player": { javaName: "com.velocitypowered.api.proxy.Player", kind: "interface" },
  "com.velocitypowered.api.proxy.player.ChatSession": { javaName: "com.velocitypowered.api.proxy.player.ChatSession", kind: "interface" },
  "com.velocitypowered.api.proxy.player.PlayerSettings": { javaName: "com.velocitypowered.api.proxy.player.PlayerSettings", kind: "interface" },
  "com.velocitypowered.api.proxy.player.PlayerSettings$ChatMode": { javaName: "com.velocitypowered.api.proxy.player.PlayerSettings$ChatMode", kind: "enum" },
  "com.velocitypowered.api.proxy.player.PlayerSettings$MainHand": { javaName: "com.velocitypowered.api.proxy.player.PlayerSettings$MainHand", kind: "enum" },
  "com.velocitypowered.api.proxy.player.PlayerSettings$ParticleStatus": { javaName: "com.velocitypowered.api.proxy.player.PlayerSettings$ParticleStatus", kind: "enum" },
  "com.velocitypowered.api.proxy.player.ResourcePackInfo": { javaName: "com.velocitypowered.api.proxy.player.ResourcePackInfo", kind: "interface" },
  "com.velocitypowered.api.proxy.player.ResourcePackInfo$Builder": { javaName: "com.velocitypowered.api.proxy.player.ResourcePackInfo$Builder", kind: "interface" },
  "com.velocitypowered.api.proxy.player.ResourcePackInfo$Origin": { javaName: "com.velocitypowered.api.proxy.player.ResourcePackInfo$Origin", kind: "enum" },
  "com.velocitypowered.api.proxy.player.SkinParts": { javaName: "com.velocitypowered.api.proxy.player.SkinParts", kind: "class" },
  "com.velocitypowered.api.proxy.player.TabList": { javaName: "com.velocitypowered.api.proxy.player.TabList", kind: "interface" },
  "com.velocitypowered.api.proxy.player.TabListEntry": { javaName: "com.velocitypowered.api.proxy.player.TabListEntry", kind: "interface" },
  "com.velocitypowered.api.proxy.player.TabListEntry$Builder": { javaName: "com.velocitypowered.api.proxy.player.TabListEntry$Builder", kind: "class" },
  "com.velocitypowered.api.proxy.ProxyServer": { javaName: "com.velocitypowered.api.proxy.ProxyServer", kind: "interface" },
  "com.velocitypowered.api.proxy.server.PingOptions": { javaName: "com.velocitypowered.api.proxy.server.PingOptions", kind: "class" },
  "com.velocitypowered.api.proxy.server.PingOptions$Builder": { javaName: "com.velocitypowered.api.proxy.server.PingOptions$Builder", kind: "class" },
  "com.velocitypowered.api.proxy.server.QueryResponse": { javaName: "com.velocitypowered.api.proxy.server.QueryResponse", kind: "class" },
  "com.velocitypowered.api.proxy.server.QueryResponse$Builder": { javaName: "com.velocitypowered.api.proxy.server.QueryResponse$Builder", kind: "class" },
  "com.velocitypowered.api.proxy.server.QueryResponse$PluginInformation": { javaName: "com.velocitypowered.api.proxy.server.QueryResponse$PluginInformation", kind: "class" },
  "com.velocitypowered.api.proxy.server.RegisteredServer": { javaName: "com.velocitypowered.api.proxy.server.RegisteredServer", kind: "interface" },
  "com.velocitypowered.api.proxy.server.ServerInfo": { javaName: "com.velocitypowered.api.proxy.server.ServerInfo", kind: "class" },
  "com.velocitypowered.api.proxy.server.ServerPing": { javaName: "com.velocitypowered.api.proxy.server.ServerPing", kind: "class" },
  "com.velocitypowered.api.proxy.server.ServerPing$Builder": { javaName: "com.velocitypowered.api.proxy.server.ServerPing$Builder", kind: "class" },
  "com.velocitypowered.api.proxy.server.ServerPing$Players": { javaName: "com.velocitypowered.api.proxy.server.ServerPing$Players", kind: "class" },
  "com.velocitypowered.api.proxy.server.ServerPing$SamplePlayer": { javaName: "com.velocitypowered.api.proxy.server.ServerPing$SamplePlayer", kind: "class" },
  "com.velocitypowered.api.proxy.server.ServerPing$Version": { javaName: "com.velocitypowered.api.proxy.server.ServerPing$Version", kind: "class" },
  "com.velocitypowered.api.proxy.ServerConnection": { javaName: "com.velocitypowered.api.proxy.ServerConnection", kind: "interface" },
  "com.velocitypowered.api.scheduler.ScheduledTask": { javaName: "com.velocitypowered.api.scheduler.ScheduledTask", kind: "interface" },
  "com.velocitypowered.api.scheduler.Scheduler": { javaName: "com.velocitypowered.api.scheduler.Scheduler", kind: "interface" },
  "com.velocitypowered.api.scheduler.Scheduler$TaskBuilder": { javaName: "com.velocitypowered.api.scheduler.Scheduler$TaskBuilder", kind: "interface" },
  "com.velocitypowered.api.scheduler.TaskStatus": { javaName: "com.velocitypowered.api.scheduler.TaskStatus", kind: "enum" },
  "com.velocitypowered.api.util.Favicon": { javaName: "com.velocitypowered.api.util.Favicon", kind: "class" },
  "com.velocitypowered.api.util.GameProfile": { javaName: "com.velocitypowered.api.util.GameProfile", kind: "class" },
  "com.velocitypowered.api.util.GameProfile$Property": { javaName: "com.velocitypowered.api.util.GameProfile$Property", kind: "class" },
  "com.velocitypowered.api.util.MessagePosition": { javaName: "com.velocitypowered.api.util.MessagePosition", kind: "enum" },
  "com.velocitypowered.api.util.ModInfo": { javaName: "com.velocitypowered.api.util.ModInfo", kind: "class" },
  "com.velocitypowered.api.util.ModInfo$Mod": { javaName: "com.velocitypowered.api.util.ModInfo$Mod", kind: "class" },
  "com.velocitypowered.api.util.Ordered": { javaName: "com.velocitypowered.api.util.Ordered", kind: "interface" },
  "com.velocitypowered.api.util.ProxyVersion": { javaName: "com.velocitypowered.api.util.ProxyVersion", kind: "class" },
  "com.velocitypowered.api.util.ServerLink": { javaName: "com.velocitypowered.api.util.ServerLink", kind: "class" },
  "com.velocitypowered.api.util.ServerLink$Type": { javaName: "com.velocitypowered.api.util.ServerLink$Type", kind: "enum" },
  "com.velocitypowered.api.util.UuidUtils": { javaName: "com.velocitypowered.api.util.UuidUtils", kind: "class" },
  "net.kyori.adventure.Adventure": { javaName: "net.kyori.adventure.Adventure", kind: "class" },
  "net.kyori.adventure.audience.Audience": { javaName: "net.kyori.adventure.audience.Audience", kind: "interface" },
  "net.kyori.adventure.audience.Audiences": { javaName: "net.kyori.adventure.audience.Audiences", kind: "class" },
  "net.kyori.adventure.audience.ForwardingAudience": { javaName: "net.kyori.adventure.audience.ForwardingAudience", kind: "interface" },
  "net.kyori.adventure.audience.ForwardingAudience$Single": { javaName: "net.kyori.adventure.audience.ForwardingAudience$Single", kind: "interface" },
  "net.kyori.adventure.audience.MessageType": { javaName: "net.kyori.adventure.audience.MessageType", kind: "enum" },
  "net.kyori.adventure.bossbar.BossBar": { javaName: "net.kyori.adventure.bossbar.BossBar", kind: "interface" },
  "net.kyori.adventure.bossbar.BossBar$Color": { javaName: "net.kyori.adventure.bossbar.BossBar$Color", kind: "enum" },
  "net.kyori.adventure.bossbar.BossBar$Flag": { javaName: "net.kyori.adventure.bossbar.BossBar$Flag", kind: "enum" },
  "net.kyori.adventure.bossbar.BossBar$Listener": { javaName: "net.kyori.adventure.bossbar.BossBar$Listener", kind: "interface" },
  "net.kyori.adventure.bossbar.BossBar$Overlay": { javaName: "net.kyori.adventure.bossbar.BossBar$Overlay", kind: "enum" },
  "net.kyori.adventure.bossbar.BossBarImplementation": { javaName: "net.kyori.adventure.bossbar.BossBarImplementation", kind: "interface" },
  "net.kyori.adventure.bossbar.BossBarImplementation$Provider": { javaName: "net.kyori.adventure.bossbar.BossBarImplementation$Provider", kind: "interface" },
  "net.kyori.adventure.bossbar.BossBarViewer": { javaName: "net.kyori.adventure.bossbar.BossBarViewer", kind: "interface" },
  "net.kyori.adventure.builder.AbstractBuilder": { javaName: "net.kyori.adventure.builder.AbstractBuilder", kind: "interface" },
  "net.kyori.adventure.chat.ChatType": { javaName: "net.kyori.adventure.chat.ChatType", kind: "interface" },
  "net.kyori.adventure.chat.ChatType$Bound": { javaName: "net.kyori.adventure.chat.ChatType$Bound", kind: "interface" },
  "net.kyori.adventure.chat.SignedMessage": { javaName: "net.kyori.adventure.chat.SignedMessage", kind: "interface" },
  "net.kyori.adventure.chat.SignedMessage$Signature": { javaName: "net.kyori.adventure.chat.SignedMessage$Signature", kind: "interface" },
  "net.kyori.adventure.dialog.DialogLike": { javaName: "net.kyori.adventure.dialog.DialogLike", kind: "interface" },
  "net.kyori.adventure.identity.Identified": { javaName: "net.kyori.adventure.identity.Identified", kind: "interface" },
  "net.kyori.adventure.identity.Identity": { javaName: "net.kyori.adventure.identity.Identity", kind: "interface" },
  "net.kyori.adventure.internal.Internals": { javaName: "net.kyori.adventure.internal.Internals", kind: "class" },
  "net.kyori.adventure.internal.properties.AdventureProperties": { javaName: "net.kyori.adventure.internal.properties.AdventureProperties", kind: "class" },
  "net.kyori.adventure.internal.properties.AdventureProperties$DefaultOverrideProvider": { javaName: "net.kyori.adventure.internal.properties.AdventureProperties$DefaultOverrideProvider", kind: "interface" },
  "net.kyori.adventure.internal.properties.AdventureProperties$Property": { javaName: "net.kyori.adventure.internal.properties.AdventureProperties$Property", kind: "interface" },
  "net.kyori.adventure.inventory.Book": { javaName: "net.kyori.adventure.inventory.Book", kind: "interface" },
  "net.kyori.adventure.inventory.Book$Builder": { javaName: "net.kyori.adventure.inventory.Book$Builder", kind: "interface" },
  "net.kyori.adventure.nbt.api.BinaryTagHolder": { javaName: "net.kyori.adventure.nbt.api.BinaryTagHolder", kind: "interface" },
  "net.kyori.adventure.permission.PermissionChecker": { javaName: "net.kyori.adventure.permission.PermissionChecker", kind: "interface" },
  "net.kyori.adventure.pointer.Pointer": { javaName: "net.kyori.adventure.pointer.Pointer", kind: "interface" },
  "net.kyori.adventure.pointer.Pointered": { javaName: "net.kyori.adventure.pointer.Pointered", kind: "interface" },
  "net.kyori.adventure.pointer.Pointers": { javaName: "net.kyori.adventure.pointer.Pointers", kind: "interface" },
  "net.kyori.adventure.pointer.Pointers$Builder": { javaName: "net.kyori.adventure.pointer.Pointers$Builder", kind: "interface" },
  "net.kyori.adventure.pointer.PointersSupplier": { javaName: "net.kyori.adventure.pointer.PointersSupplier", kind: "interface" },
  "net.kyori.adventure.pointer.PointersSupplier$Builder": { javaName: "net.kyori.adventure.pointer.PointersSupplier$Builder", kind: "interface" },
  "net.kyori.adventure.resource.ResourcePackCallback": { javaName: "net.kyori.adventure.resource.ResourcePackCallback", kind: "interface" },
  "net.kyori.adventure.resource.ResourcePackInfo": { javaName: "net.kyori.adventure.resource.ResourcePackInfo", kind: "interface" },
  "net.kyori.adventure.resource.ResourcePackInfo$Builder": { javaName: "net.kyori.adventure.resource.ResourcePackInfo$Builder", kind: "interface" },
  "net.kyori.adventure.resource.ResourcePackInfoLike": { javaName: "net.kyori.adventure.resource.ResourcePackInfoLike", kind: "interface" },
  "net.kyori.adventure.resource.ResourcePackRequest": { javaName: "net.kyori.adventure.resource.ResourcePackRequest", kind: "interface" },
  "net.kyori.adventure.resource.ResourcePackRequest$Builder": { javaName: "net.kyori.adventure.resource.ResourcePackRequest$Builder", kind: "interface" },
  "net.kyori.adventure.resource.ResourcePackRequestLike": { javaName: "net.kyori.adventure.resource.ResourcePackRequestLike", kind: "interface" },
  "net.kyori.adventure.resource.ResourcePackStatus": { javaName: "net.kyori.adventure.resource.ResourcePackStatus", kind: "enum" },
  "net.kyori.adventure.sound.Sound": { javaName: "net.kyori.adventure.sound.Sound", kind: "interface" },
  "net.kyori.adventure.sound.Sound$Builder": { javaName: "net.kyori.adventure.sound.Sound$Builder", kind: "interface" },
  "net.kyori.adventure.sound.Sound$Emitter": { javaName: "net.kyori.adventure.sound.Sound$Emitter", kind: "interface" },
  "net.kyori.adventure.sound.Sound$Source": { javaName: "net.kyori.adventure.sound.Sound$Source", kind: "enum" },
  "net.kyori.adventure.sound.Sound$Source$Provider": { javaName: "net.kyori.adventure.sound.Sound$Source$Provider", kind: "interface" },
  "net.kyori.adventure.sound.Sound$Type": { javaName: "net.kyori.adventure.sound.Sound$Type", kind: "interface" },
  "net.kyori.adventure.sound.SoundStop": { javaName: "net.kyori.adventure.sound.SoundStop", kind: "interface" },
  "net.kyori.adventure.text.AbstractComponent": { javaName: "net.kyori.adventure.text.AbstractComponent", kind: "abstract" },
  "net.kyori.adventure.text.BlockNBTComponent": { javaName: "net.kyori.adventure.text.BlockNBTComponent", kind: "interface" },
  "net.kyori.adventure.text.BlockNBTComponent$Builder": { javaName: "net.kyori.adventure.text.BlockNBTComponent$Builder", kind: "interface" },
  "net.kyori.adventure.text.BlockNBTComponent$LocalPos": { javaName: "net.kyori.adventure.text.BlockNBTComponent$LocalPos", kind: "interface" },
  "net.kyori.adventure.text.BlockNBTComponent$Pos": { javaName: "net.kyori.adventure.text.BlockNBTComponent$Pos", kind: "interface" },
  "net.kyori.adventure.text.BlockNBTComponent$WorldPos": { javaName: "net.kyori.adventure.text.BlockNBTComponent$WorldPos", kind: "interface" },
  "net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate": { javaName: "net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate", kind: "interface" },
  "net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate$Type": { javaName: "net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate$Type", kind: "enum" },
  "net.kyori.adventure.text.BuildableComponent": { javaName: "net.kyori.adventure.text.BuildableComponent", kind: "interface" },
  "net.kyori.adventure.text.Component": { javaName: "net.kyori.adventure.text.Component", kind: "interface" },
  "net.kyori.adventure.text.ComponentApplicable": { javaName: "net.kyori.adventure.text.ComponentApplicable", kind: "interface" },
  "net.kyori.adventure.text.ComponentBuilder": { javaName: "net.kyori.adventure.text.ComponentBuilder", kind: "interface" },
  "net.kyori.adventure.text.ComponentBuilderApplicable": { javaName: "net.kyori.adventure.text.ComponentBuilderApplicable", kind: "interface" },
  "net.kyori.adventure.text.ComponentIteratorFlag": { javaName: "net.kyori.adventure.text.ComponentIteratorFlag", kind: "enum" },
  "net.kyori.adventure.text.ComponentIteratorType": { javaName: "net.kyori.adventure.text.ComponentIteratorType", kind: "interface" },
  "net.kyori.adventure.text.ComponentLike": { javaName: "net.kyori.adventure.text.ComponentLike", kind: "interface" },
  "net.kyori.adventure.text.EntityNBTComponent": { javaName: "net.kyori.adventure.text.EntityNBTComponent", kind: "interface" },
  "net.kyori.adventure.text.EntityNBTComponent$Builder": { javaName: "net.kyori.adventure.text.EntityNBTComponent$Builder", kind: "interface" },
  "net.kyori.adventure.text.event.ClickCallback": { javaName: "net.kyori.adventure.text.event.ClickCallback", kind: "interface" },
  "net.kyori.adventure.text.event.ClickCallback$Options": { javaName: "net.kyori.adventure.text.event.ClickCallback$Options", kind: "interface" },
  "net.kyori.adventure.text.event.ClickCallback$Options$Builder": { javaName: "net.kyori.adventure.text.event.ClickCallback$Options$Builder", kind: "interface" },
  "net.kyori.adventure.text.event.ClickCallback$Provider": { javaName: "net.kyori.adventure.text.event.ClickCallback$Provider", kind: "interface" },
  "net.kyori.adventure.text.event.ClickEvent": { javaName: "net.kyori.adventure.text.event.ClickEvent", kind: "class" },
  "net.kyori.adventure.text.event.ClickEvent$Action": { javaName: "net.kyori.adventure.text.event.ClickEvent$Action", kind: "enum" },
  "net.kyori.adventure.text.event.ClickEvent$Payload": { javaName: "net.kyori.adventure.text.event.ClickEvent$Payload", kind: "interface" },
  "net.kyori.adventure.text.event.ClickEvent$Payload$Custom": { javaName: "net.kyori.adventure.text.event.ClickEvent$Payload$Custom", kind: "interface" },
  "net.kyori.adventure.text.event.ClickEvent$Payload$Dialog": { javaName: "net.kyori.adventure.text.event.ClickEvent$Payload$Dialog", kind: "interface" },
  "net.kyori.adventure.text.event.ClickEvent$Payload$Int": { javaName: "net.kyori.adventure.text.event.ClickEvent$Payload$Int", kind: "interface" },
  "net.kyori.adventure.text.event.ClickEvent$Payload$Text": { javaName: "net.kyori.adventure.text.event.ClickEvent$Payload$Text", kind: "interface" },
  "net.kyori.adventure.text.event.DataComponentValue": { javaName: "net.kyori.adventure.text.event.DataComponentValue", kind: "interface" },
  "net.kyori.adventure.text.event.DataComponentValue$Removed": { javaName: "net.kyori.adventure.text.event.DataComponentValue$Removed", kind: "interface" },
  "net.kyori.adventure.text.event.DataComponentValue$TagSerializable": { javaName: "net.kyori.adventure.text.event.DataComponentValue$TagSerializable", kind: "interface" },
  "net.kyori.adventure.text.event.DataComponentValueConverterRegistry": { javaName: "net.kyori.adventure.text.event.DataComponentValueConverterRegistry", kind: "class" },
  "net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Conversion": { javaName: "net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Conversion", kind: "interface" },
  "net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Provider": { javaName: "net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Provider", kind: "interface" },
  "net.kyori.adventure.text.event.HoverEvent": { javaName: "net.kyori.adventure.text.event.HoverEvent", kind: "class" },
  "net.kyori.adventure.text.event.HoverEvent$Action": { javaName: "net.kyori.adventure.text.event.HoverEvent$Action", kind: "class" },
  "net.kyori.adventure.text.event.HoverEvent$ShowEntity": { javaName: "net.kyori.adventure.text.event.HoverEvent$ShowEntity", kind: "class" },
  "net.kyori.adventure.text.event.HoverEvent$ShowItem": { javaName: "net.kyori.adventure.text.event.HoverEvent$ShowItem", kind: "class" },
  "net.kyori.adventure.text.event.HoverEventSource": { javaName: "net.kyori.adventure.text.event.HoverEventSource", kind: "interface" },
  "net.kyori.adventure.text.flattener.ComponentFlattener": { javaName: "net.kyori.adventure.text.flattener.ComponentFlattener", kind: "interface" },
  "net.kyori.adventure.text.flattener.ComponentFlattener$Builder": { javaName: "net.kyori.adventure.text.flattener.ComponentFlattener$Builder", kind: "interface" },
  "net.kyori.adventure.text.flattener.FlattenerListener": { javaName: "net.kyori.adventure.text.flattener.FlattenerListener", kind: "interface" },
  "net.kyori.adventure.text.format.MutableStyleSetter": { javaName: "net.kyori.adventure.text.format.MutableStyleSetter", kind: "interface" },
  "net.kyori.adventure.text.format.NamedTextColor": { javaName: "net.kyori.adventure.text.format.NamedTextColor", kind: "class" },
  "net.kyori.adventure.text.format.ShadowColor": { javaName: "net.kyori.adventure.text.format.ShadowColor", kind: "interface" },
  "net.kyori.adventure.text.format.Style": { javaName: "net.kyori.adventure.text.format.Style", kind: "interface" },
  "net.kyori.adventure.text.format.Style$Builder": { javaName: "net.kyori.adventure.text.format.Style$Builder", kind: "interface" },
  "net.kyori.adventure.text.format.Style$Merge": { javaName: "net.kyori.adventure.text.format.Style$Merge", kind: "enum" },
  "net.kyori.adventure.text.format.Style$Merge$Strategy": { javaName: "net.kyori.adventure.text.format.Style$Merge$Strategy", kind: "enum" },
  "net.kyori.adventure.text.format.StyleBuilderApplicable": { javaName: "net.kyori.adventure.text.format.StyleBuilderApplicable", kind: "interface" },
  "net.kyori.adventure.text.format.StyleGetter": { javaName: "net.kyori.adventure.text.format.StyleGetter", kind: "interface" },
  "net.kyori.adventure.text.format.StyleSetter": { javaName: "net.kyori.adventure.text.format.StyleSetter", kind: "interface" },
  "net.kyori.adventure.text.format.TextColor": { javaName: "net.kyori.adventure.text.format.TextColor", kind: "interface" },
  "net.kyori.adventure.text.format.TextDecoration": { javaName: "net.kyori.adventure.text.format.TextDecoration", kind: "enum" },
  "net.kyori.adventure.text.format.TextDecoration$State": { javaName: "net.kyori.adventure.text.format.TextDecoration$State", kind: "enum" },
  "net.kyori.adventure.text.format.TextDecorationAndState": { javaName: "net.kyori.adventure.text.format.TextDecorationAndState", kind: "interface" },
  "net.kyori.adventure.text.format.TextFormat": { javaName: "net.kyori.adventure.text.format.TextFormat", kind: "interface" },
  "net.kyori.adventure.text.JoinConfiguration": { javaName: "net.kyori.adventure.text.JoinConfiguration", kind: "interface" },
  "net.kyori.adventure.text.JoinConfiguration$Builder": { javaName: "net.kyori.adventure.text.JoinConfiguration$Builder", kind: "interface" },
  "net.kyori.adventure.text.KeybindComponent": { javaName: "net.kyori.adventure.text.KeybindComponent", kind: "interface" },
  "net.kyori.adventure.text.KeybindComponent$Builder": { javaName: "net.kyori.adventure.text.KeybindComponent$Builder", kind: "interface" },
  "net.kyori.adventure.text.KeybindComponent$KeybindLike": { javaName: "net.kyori.adventure.text.KeybindComponent$KeybindLike", kind: "interface" },
  "net.kyori.adventure.text.LinearComponents": { javaName: "net.kyori.adventure.text.LinearComponents", kind: "class" },
  "net.kyori.adventure.text.NBTComponent": { javaName: "net.kyori.adventure.text.NBTComponent", kind: "interface" },
  "net.kyori.adventure.text.NBTComponentBuilder": { javaName: "net.kyori.adventure.text.NBTComponentBuilder", kind: "interface" },
  "net.kyori.adventure.text.object.ObjectContents": { javaName: "net.kyori.adventure.text.object.ObjectContents", kind: "interface" },
  "net.kyori.adventure.text.object.PlayerHeadObjectContents": { javaName: "net.kyori.adventure.text.object.PlayerHeadObjectContents", kind: "interface" },
  "net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder": { javaName: "net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder", kind: "interface" },
  "net.kyori.adventure.text.object.PlayerHeadObjectContents$ProfileProperty": { javaName: "net.kyori.adventure.text.object.PlayerHeadObjectContents$ProfileProperty", kind: "interface" },
  "net.kyori.adventure.text.object.PlayerHeadObjectContents$SkinSource": { javaName: "net.kyori.adventure.text.object.PlayerHeadObjectContents$SkinSource", kind: "interface" },
  "net.kyori.adventure.text.object.SpriteObjectContents": { javaName: "net.kyori.adventure.text.object.SpriteObjectContents", kind: "interface" },
  "net.kyori.adventure.text.ObjectComponent": { javaName: "net.kyori.adventure.text.ObjectComponent", kind: "interface" },
  "net.kyori.adventure.text.ObjectComponent$Builder": { javaName: "net.kyori.adventure.text.ObjectComponent$Builder", kind: "interface" },
  "net.kyori.adventure.text.PatternReplacementResult": { javaName: "net.kyori.adventure.text.PatternReplacementResult", kind: "enum" },
  "net.kyori.adventure.text.renderer.AbstractComponentRenderer": { javaName: "net.kyori.adventure.text.renderer.AbstractComponentRenderer", kind: "abstract" },
  "net.kyori.adventure.text.renderer.ComponentRenderer": { javaName: "net.kyori.adventure.text.renderer.ComponentRenderer", kind: "interface" },
  "net.kyori.adventure.text.renderer.TranslatableComponentRenderer": { javaName: "net.kyori.adventure.text.renderer.TranslatableComponentRenderer", kind: "abstract" },
  "net.kyori.adventure.text.ScopedComponent": { javaName: "net.kyori.adventure.text.ScopedComponent", kind: "interface" },
  "net.kyori.adventure.text.ScoreComponent": { javaName: "net.kyori.adventure.text.ScoreComponent", kind: "interface" },
  "net.kyori.adventure.text.ScoreComponent$Builder": { javaName: "net.kyori.adventure.text.ScoreComponent$Builder", kind: "interface" },
  "net.kyori.adventure.text.SelectorComponent": { javaName: "net.kyori.adventure.text.SelectorComponent", kind: "interface" },
  "net.kyori.adventure.text.SelectorComponent$Builder": { javaName: "net.kyori.adventure.text.SelectorComponent$Builder", kind: "interface" },
  "net.kyori.adventure.text.serializer.ComponentDecoder": { javaName: "net.kyori.adventure.text.serializer.ComponentDecoder", kind: "interface" },
  "net.kyori.adventure.text.serializer.ComponentEncoder": { javaName: "net.kyori.adventure.text.serializer.ComponentEncoder", kind: "interface" },
  "net.kyori.adventure.text.serializer.ComponentSerializer": { javaName: "net.kyori.adventure.text.serializer.ComponentSerializer", kind: "interface" },
  "net.kyori.adventure.text.StorageNBTComponent": { javaName: "net.kyori.adventure.text.StorageNBTComponent", kind: "interface" },
  "net.kyori.adventure.text.StorageNBTComponent$Builder": { javaName: "net.kyori.adventure.text.StorageNBTComponent$Builder", kind: "interface" },
  "net.kyori.adventure.text.TextComponent": { javaName: "net.kyori.adventure.text.TextComponent", kind: "interface" },
  "net.kyori.adventure.text.TextComponent$Builder": { javaName: "net.kyori.adventure.text.TextComponent$Builder", kind: "interface" },
  "net.kyori.adventure.text.TextReplacementConfig": { javaName: "net.kyori.adventure.text.TextReplacementConfig", kind: "interface" },
  "net.kyori.adventure.text.TextReplacementConfig$Builder": { javaName: "net.kyori.adventure.text.TextReplacementConfig$Builder", kind: "interface" },
  "net.kyori.adventure.text.TextReplacementConfig$Condition": { javaName: "net.kyori.adventure.text.TextReplacementConfig$Condition", kind: "interface" },
  "net.kyori.adventure.text.TranslatableComponent": { javaName: "net.kyori.adventure.text.TranslatableComponent", kind: "interface" },
  "net.kyori.adventure.text.TranslatableComponent$Builder": { javaName: "net.kyori.adventure.text.TranslatableComponent$Builder", kind: "interface" },
  "net.kyori.adventure.text.TranslationArgument": { javaName: "net.kyori.adventure.text.TranslationArgument", kind: "interface" },
  "net.kyori.adventure.text.TranslationArgumentLike": { javaName: "net.kyori.adventure.text.TranslationArgumentLike", kind: "interface" },
  "net.kyori.adventure.text.VirtualComponent": { javaName: "net.kyori.adventure.text.VirtualComponent", kind: "interface" },
  "net.kyori.adventure.text.VirtualComponentRenderer": { javaName: "net.kyori.adventure.text.VirtualComponentRenderer", kind: "interface" },
  "net.kyori.adventure.title.Title": { javaName: "net.kyori.adventure.title.Title", kind: "interface" },
  "net.kyori.adventure.title.Title$Times": { javaName: "net.kyori.adventure.title.Title$Times", kind: "interface" },
  "net.kyori.adventure.title.TitlePart": { javaName: "net.kyori.adventure.title.TitlePart", kind: "interface" },
  "net.kyori.adventure.translation.AbstractTranslationStore": { javaName: "net.kyori.adventure.translation.AbstractTranslationStore", kind: "abstract" },
  "net.kyori.adventure.translation.AbstractTranslationStore$StringBased": { javaName: "net.kyori.adventure.translation.AbstractTranslationStore$StringBased", kind: "abstract" },
  "net.kyori.adventure.translation.GlobalTranslator": { javaName: "net.kyori.adventure.translation.GlobalTranslator", kind: "interface" },
  "net.kyori.adventure.translation.Translatable": { javaName: "net.kyori.adventure.translation.Translatable", kind: "interface" },
  "net.kyori.adventure.translation.TranslationRegistry": { javaName: "net.kyori.adventure.translation.TranslationRegistry", kind: "interface" },
  "net.kyori.adventure.translation.TranslationStore": { javaName: "net.kyori.adventure.translation.TranslationStore", kind: "interface" },
  "net.kyori.adventure.translation.TranslationStore$StringBased": { javaName: "net.kyori.adventure.translation.TranslationStore$StringBased", kind: "interface" },
  "net.kyori.adventure.translation.Translator": { javaName: "net.kyori.adventure.translation.Translator", kind: "interface" },
  "net.kyori.adventure.util.ARGBLike": { javaName: "net.kyori.adventure.util.ARGBLike", kind: "interface" },
  "net.kyori.adventure.util.Buildable": { javaName: "net.kyori.adventure.util.Buildable", kind: "interface" },
  "net.kyori.adventure.util.Buildable$Builder": { javaName: "net.kyori.adventure.util.Buildable$Builder", kind: "interface" },
  "net.kyori.adventure.util.Codec": { javaName: "net.kyori.adventure.util.Codec", kind: "interface" },
  "net.kyori.adventure.util.Codec$Decoder": { javaName: "net.kyori.adventure.util.Codec$Decoder", kind: "interface" },
  "net.kyori.adventure.util.Codec$Encoder": { javaName: "net.kyori.adventure.util.Codec$Encoder", kind: "interface" },
  "net.kyori.adventure.util.ComponentMessageThrowable": { javaName: "net.kyori.adventure.util.ComponentMessageThrowable", kind: "interface" },
  "net.kyori.adventure.util.ForwardingIterator": { javaName: "net.kyori.adventure.util.ForwardingIterator", kind: "class" },
  "net.kyori.adventure.util.HSVLike": { javaName: "net.kyori.adventure.util.HSVLike", kind: "interface" },
  "net.kyori.adventure.util.Index": { javaName: "net.kyori.adventure.util.Index", kind: "class" },
  "net.kyori.adventure.util.InheritanceAwareMap": { javaName: "net.kyori.adventure.util.InheritanceAwareMap", kind: "interface" },
  "net.kyori.adventure.util.InheritanceAwareMap$Builder": { javaName: "net.kyori.adventure.util.InheritanceAwareMap$Builder", kind: "interface" },
  "net.kyori.adventure.util.IntFunction2": { javaName: "net.kyori.adventure.util.IntFunction2", kind: "interface" },
  "net.kyori.adventure.util.Listenable": { javaName: "net.kyori.adventure.util.Listenable", kind: "abstract" },
  "net.kyori.adventure.util.MonkeyBars": { javaName: "net.kyori.adventure.util.MonkeyBars", kind: "class" },
  "net.kyori.adventure.util.Nag": { javaName: "net.kyori.adventure.util.Nag", kind: "abstract" },
  "net.kyori.adventure.util.PlatformAPI": { javaName: "net.kyori.adventure.util.PlatformAPI", kind: "interface" },
  "net.kyori.adventure.util.RGBLike": { javaName: "net.kyori.adventure.util.RGBLike", kind: "interface" },
  "net.kyori.adventure.util.Services": { javaName: "net.kyori.adventure.util.Services", kind: "class" },
  "net.kyori.adventure.util.Services$Fallback": { javaName: "net.kyori.adventure.util.Services$Fallback", kind: "interface" },
  "net.kyori.adventure.util.ShadyPines": { javaName: "net.kyori.adventure.util.ShadyPines", kind: "class" },
  "net.kyori.adventure.util.Ticks": { javaName: "net.kyori.adventure.util.Ticks", kind: "interface" },
  "net.kyori.adventure.util.TriState": { javaName: "net.kyori.adventure.util.TriState", kind: "enum" },
  "net.kyori.adventure.util.UTF8ResourceBundleControl": { javaName: "net.kyori.adventure.util.UTF8ResourceBundleControl", kind: "class" },
} as const;
export interface GeneratedJavaTypeMap {
  readonly "com.velocitypowered.api.command.BrigadierCommand": import('./binding-packages/com.velocitypowered.api.command.generated.js').BrigadierCommand;
  readonly "com.velocitypowered.api.command.Command": import('./binding-packages/com.velocitypowered.api.command.generated.js').Command;
  readonly "com.velocitypowered.api.command.CommandInvocation": import('./binding-packages/com.velocitypowered.api.command.generated.js').CommandInvocation;
  readonly "com.velocitypowered.api.command.CommandManager": import('./binding-packages/com.velocitypowered.api.command.generated.js').CommandManager;
  readonly "com.velocitypowered.api.command.CommandMeta": import('./binding-packages/com.velocitypowered.api.command.generated.js').CommandMeta;
  readonly "com.velocitypowered.api.command.CommandMeta$Builder": import('./binding-packages/com.velocitypowered.api.command.generated.js').CommandMeta_Builder;
  readonly "com.velocitypowered.api.command.CommandResult": import('./binding-packages/com.velocitypowered.api.command.generated.js').CommandResult;
  readonly "com.velocitypowered.api.command.CommandSource": import('./binding-packages/com.velocitypowered.api.command.generated.js').CommandSource;
  readonly "com.velocitypowered.api.command.InvocableCommand": import('./binding-packages/com.velocitypowered.api.command.generated.js').InvocableCommand;
  readonly "com.velocitypowered.api.command.RawCommand": import('./binding-packages/com.velocitypowered.api.command.generated.js').RawCommand;
  readonly "com.velocitypowered.api.command.RawCommand$Invocation": import('./binding-packages/com.velocitypowered.api.command.generated.js').RawCommand_Invocation;
  readonly "com.velocitypowered.api.command.SimpleCommand": import('./binding-packages/com.velocitypowered.api.command.generated.js').SimpleCommand;
  readonly "com.velocitypowered.api.command.SimpleCommand$Invocation": import('./binding-packages/com.velocitypowered.api.command.generated.js').SimpleCommand_Invocation;
  readonly "com.velocitypowered.api.command.VelocityBrigadierMessage": import('./binding-packages/com.velocitypowered.api.command.generated.js').VelocityBrigadierMessage;
  readonly "com.velocitypowered.api.event.annotation.AwaitingEvent": import('./binding-packages/com.velocitypowered.api.event.annotation.generated.js').AwaitingEvent;
  readonly "com.velocitypowered.api.event.AwaitingEventExecutor": import('./binding-packages/com.velocitypowered.api.event.generated.js').AwaitingEventExecutor;
  readonly "com.velocitypowered.api.event.command.CommandExecuteEvent": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').CommandExecuteEvent;
  readonly "com.velocitypowered.api.event.command.CommandExecuteEvent$CommandResult": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').CommandExecuteEvent_CommandResult;
  readonly "com.velocitypowered.api.event.command.CommandExecuteEvent$InvocationInfo": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').CommandExecuteEvent_InvocationInfo;
  readonly "com.velocitypowered.api.event.command.CommandExecuteEvent$SignedState": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').CommandExecuteEvent_SignedState;
  readonly "com.velocitypowered.api.event.command.CommandExecuteEvent$Source": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').CommandExecuteEvent_Source;
  readonly "com.velocitypowered.api.event.command.PlayerAvailableCommandsEvent": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').PlayerAvailableCommandsEvent;
  readonly "com.velocitypowered.api.event.command.PostCommandInvocationEvent": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').PostCommandInvocationEvent;
  readonly "com.velocitypowered.api.event.connection.ConnectionHandshakeEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').ConnectionHandshakeEvent;
  readonly "com.velocitypowered.api.event.connection.DisconnectEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').DisconnectEvent;
  readonly "com.velocitypowered.api.event.connection.DisconnectEvent$LoginStatus": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').DisconnectEvent_LoginStatus;
  readonly "com.velocitypowered.api.event.connection.LoginEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').LoginEvent;
  readonly "com.velocitypowered.api.event.connection.PluginMessageEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PluginMessageEvent;
  readonly "com.velocitypowered.api.event.connection.PluginMessageEvent$ForwardResult": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PluginMessageEvent_ForwardResult;
  readonly "com.velocitypowered.api.event.connection.PostLoginEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PostLoginEvent;
  readonly "com.velocitypowered.api.event.connection.PreLoginEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PreLoginEvent;
  readonly "com.velocitypowered.api.event.connection.PreLoginEvent$PreLoginComponentResult": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PreLoginEvent_PreLoginComponentResult;
  readonly "com.velocitypowered.api.event.connection.PreTransferEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PreTransferEvent;
  readonly "com.velocitypowered.api.event.connection.PreTransferEvent$TransferResult": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PreTransferEvent_TransferResult;
  readonly "com.velocitypowered.api.event.Continuation": import('./binding-packages/com.velocitypowered.api.event.generated.js').Continuation;
  readonly "com.velocitypowered.api.event.EventHandler": import('./binding-packages/com.velocitypowered.api.event.generated.js').EventHandler;
  readonly "com.velocitypowered.api.event.EventManager": import('./binding-packages/com.velocitypowered.api.event.generated.js').EventManager;
  readonly "com.velocitypowered.api.event.EventTask": import('./binding-packages/com.velocitypowered.api.event.generated.js').EventTask;
  readonly "com.velocitypowered.api.event.permission.PermissionsSetupEvent": import('./binding-packages/com.velocitypowered.api.event.permission.generated.js').PermissionsSetupEvent;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerConfigurationEvent;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerEnterConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerEnterConfigurationEvent;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerEnteredConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerEnteredConfigurationEvent;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerFinishConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerFinishConfigurationEvent;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerFinishedConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerFinishedConfigurationEvent;
  readonly "com.velocitypowered.api.event.player.CookieReceiveEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieReceiveEvent;
  readonly "com.velocitypowered.api.event.player.CookieReceiveEvent$ForwardResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieReceiveEvent_ForwardResult;
  readonly "com.velocitypowered.api.event.player.CookieRequestEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieRequestEvent;
  readonly "com.velocitypowered.api.event.player.CookieRequestEvent$ForwardResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieRequestEvent_ForwardResult;
  readonly "com.velocitypowered.api.event.player.CookieStoreEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieStoreEvent;
  readonly "com.velocitypowered.api.event.player.CookieStoreEvent$ForwardResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieStoreEvent_ForwardResult;
  readonly "com.velocitypowered.api.event.player.GameProfileRequestEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').GameProfileRequestEvent;
  readonly "com.velocitypowered.api.event.player.KickedFromServerEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').KickedFromServerEvent;
  readonly "com.velocitypowered.api.event.player.KickedFromServerEvent$DisconnectPlayer": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').KickedFromServerEvent_DisconnectPlayer;
  readonly "com.velocitypowered.api.event.player.KickedFromServerEvent$Notify": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').KickedFromServerEvent_Notify;
  readonly "com.velocitypowered.api.event.player.KickedFromServerEvent$RedirectPlayer": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').KickedFromServerEvent_RedirectPlayer;
  readonly "com.velocitypowered.api.event.player.KickedFromServerEvent$ServerKickResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').KickedFromServerEvent_ServerKickResult;
  readonly "com.velocitypowered.api.event.player.PlayerChannelRegisterEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChannelRegisterEvent;
  readonly "com.velocitypowered.api.event.player.PlayerChannelUnregisterEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChannelUnregisterEvent;
  readonly "com.velocitypowered.api.event.player.PlayerChatEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChatEvent;
  readonly "com.velocitypowered.api.event.player.PlayerChatEvent$ChatResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChatEvent_ChatResult;
  readonly "com.velocitypowered.api.event.player.PlayerChooseInitialServerEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChooseInitialServerEvent;
  readonly "com.velocitypowered.api.event.player.PlayerClientBrandEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerClientBrandEvent;
  readonly "com.velocitypowered.api.event.player.PlayerModInfoEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerModInfoEvent;
  readonly "com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerResourcePackStatusEvent;
  readonly "com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent$Status": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerResourcePackStatusEvent_Status;
  readonly "com.velocitypowered.api.event.player.PlayerSettingsChangedEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerSettingsChangedEvent;
  readonly "com.velocitypowered.api.event.player.ServerConnectedEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerConnectedEvent;
  readonly "com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerLoginPluginMessageEvent;
  readonly "com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent$ResponseResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerLoginPluginMessageEvent_ResponseResult;
  readonly "com.velocitypowered.api.event.player.ServerPostConnectEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerPostConnectEvent;
  readonly "com.velocitypowered.api.event.player.ServerPreConnectEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerPreConnectEvent;
  readonly "com.velocitypowered.api.event.player.ServerPreConnectEvent$ServerResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerPreConnectEvent_ServerResult;
  readonly "com.velocitypowered.api.event.player.ServerResourcePackRemoveEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerResourcePackRemoveEvent;
  readonly "com.velocitypowered.api.event.player.ServerResourcePackSendEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerResourcePackSendEvent;
  readonly "com.velocitypowered.api.event.player.TabCompleteEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').TabCompleteEvent;
  readonly "com.velocitypowered.api.event.PostOrder": import('./binding-packages/com.velocitypowered.api.event.generated.js').PostOrder;
  readonly "com.velocitypowered.api.event.proxy.ListenerBoundEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ListenerBoundEvent;
  readonly "com.velocitypowered.api.event.proxy.ListenerCloseEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ListenerCloseEvent;
  readonly "com.velocitypowered.api.event.proxy.ProxyInitializeEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ProxyInitializeEvent;
  readonly "com.velocitypowered.api.event.proxy.ProxyPingEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ProxyPingEvent;
  readonly "com.velocitypowered.api.event.proxy.ProxyPreShutdownEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ProxyPreShutdownEvent;
  readonly "com.velocitypowered.api.event.proxy.ProxyReloadEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ProxyReloadEvent;
  readonly "com.velocitypowered.api.event.proxy.ProxyShutdownEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ProxyShutdownEvent;
  readonly "com.velocitypowered.api.event.proxy.server.ServerRegisteredEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.server.generated.js').ServerRegisteredEvent;
  readonly "com.velocitypowered.api.event.proxy.server.ServerUnregisteredEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.server.generated.js').ServerUnregisteredEvent;
  readonly "com.velocitypowered.api.event.query.ProxyQueryEvent": import('./binding-packages/com.velocitypowered.api.event.query.generated.js').ProxyQueryEvent;
  readonly "com.velocitypowered.api.event.query.ProxyQueryEvent$QueryType": import('./binding-packages/com.velocitypowered.api.event.query.generated.js').ProxyQueryEvent_QueryType;
  readonly "com.velocitypowered.api.event.ResultedEvent": import('./binding-packages/com.velocitypowered.api.event.generated.js').ResultedEvent;
  readonly "com.velocitypowered.api.event.ResultedEvent$ComponentResult": import('./binding-packages/com.velocitypowered.api.event.generated.js').ResultedEvent_ComponentResult;
  readonly "com.velocitypowered.api.event.ResultedEvent$GenericResult": import('./binding-packages/com.velocitypowered.api.event.generated.js').ResultedEvent_GenericResult;
  readonly "com.velocitypowered.api.event.ResultedEvent$Result": import('./binding-packages/com.velocitypowered.api.event.generated.js').ResultedEvent_Result;
  readonly "com.velocitypowered.api.event.Subscribe": import('./binding-packages/com.velocitypowered.api.event.generated.js').Subscribe;
  readonly "com.velocitypowered.api.network.HandshakeIntent": import('./binding-packages/com.velocitypowered.api.network.generated.js').HandshakeIntent;
  readonly "com.velocitypowered.api.network.ListenerType": import('./binding-packages/com.velocitypowered.api.network.generated.js').ListenerType;
  readonly "com.velocitypowered.api.network.ProtocolState": import('./binding-packages/com.velocitypowered.api.network.generated.js').ProtocolState;
  readonly "com.velocitypowered.api.network.ProtocolVersion": import('./binding-packages/com.velocitypowered.api.network.generated.js').ProtocolVersion;
  readonly "com.velocitypowered.api.permission.PermissionFunction": import('./binding-packages/com.velocitypowered.api.permission.generated.js').PermissionFunction;
  readonly "com.velocitypowered.api.permission.PermissionProvider": import('./binding-packages/com.velocitypowered.api.permission.generated.js').PermissionProvider;
  readonly "com.velocitypowered.api.permission.PermissionSubject": import('./binding-packages/com.velocitypowered.api.permission.generated.js').PermissionSubject;
  readonly "com.velocitypowered.api.permission.Tristate": import('./binding-packages/com.velocitypowered.api.permission.generated.js').Tristate;
  readonly "com.velocitypowered.api.plugin.annotation.DataDirectory": import('./binding-packages/com.velocitypowered.api.plugin.annotation.generated.js').DataDirectory;
  readonly "com.velocitypowered.api.plugin.ap.PluginAnnotationProcessor": import('./binding-packages/com.velocitypowered.api.plugin.ap.generated.js').PluginAnnotationProcessor;
  readonly "com.velocitypowered.api.plugin.ap.SerializedPluginDescription": import('./binding-packages/com.velocitypowered.api.plugin.ap.generated.js').SerializedPluginDescription;
  readonly "com.velocitypowered.api.plugin.ap.SerializedPluginDescription$Dependency": import('./binding-packages/com.velocitypowered.api.plugin.ap.generated.js').SerializedPluginDescription_Dependency;
  readonly "com.velocitypowered.api.plugin.Dependency": import('./binding-packages/com.velocitypowered.api.plugin.generated.js').Dependency;
  readonly "com.velocitypowered.api.plugin.InvalidPluginException": import('./binding-packages/com.velocitypowered.api.plugin.generated.js').InvalidPluginException;
  readonly "com.velocitypowered.api.plugin.meta.PluginDependency": import('./binding-packages/com.velocitypowered.api.plugin.meta.generated.js').PluginDependency;
  readonly "com.velocitypowered.api.plugin.Plugin": import('./binding-packages/com.velocitypowered.api.plugin.generated.js').Plugin;
  readonly "com.velocitypowered.api.plugin.PluginContainer": import('./binding-packages/com.velocitypowered.api.plugin.generated.js').PluginContainer;
  readonly "com.velocitypowered.api.plugin.PluginDescription": import('./binding-packages/com.velocitypowered.api.plugin.generated.js').PluginDescription;
  readonly "com.velocitypowered.api.plugin.PluginManager": import('./binding-packages/com.velocitypowered.api.plugin.generated.js').PluginManager;
  readonly "com.velocitypowered.api.proxy.config.ProxyConfig": import('./binding-packages/com.velocitypowered.api.proxy.config.generated.js').ProxyConfig;
  readonly "com.velocitypowered.api.proxy.ConnectionRequestBuilder": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').ConnectionRequestBuilder;
  readonly "com.velocitypowered.api.proxy.ConnectionRequestBuilder$Result": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').ConnectionRequestBuilder_Result;
  readonly "com.velocitypowered.api.proxy.ConnectionRequestBuilder$Status": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').ConnectionRequestBuilder_Status;
  readonly "com.velocitypowered.api.proxy.ConsoleCommandSource": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').ConsoleCommandSource;
  readonly "com.velocitypowered.api.proxy.crypto.IdentifiedKey": import('./binding-packages/com.velocitypowered.api.proxy.crypto.generated.js').IdentifiedKey;
  readonly "com.velocitypowered.api.proxy.crypto.IdentifiedKey$Revision": import('./binding-packages/com.velocitypowered.api.proxy.crypto.generated.js').IdentifiedKey_Revision;
  readonly "com.velocitypowered.api.proxy.crypto.KeyIdentifiable": import('./binding-packages/com.velocitypowered.api.proxy.crypto.generated.js').KeyIdentifiable;
  readonly "com.velocitypowered.api.proxy.crypto.KeySigned": import('./binding-packages/com.velocitypowered.api.proxy.crypto.generated.js').KeySigned;
  readonly "com.velocitypowered.api.proxy.crypto.SignedMessage": import('./binding-packages/com.velocitypowered.api.proxy.crypto.generated.js').SignedMessage;
  readonly "com.velocitypowered.api.proxy.InboundConnection": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').InboundConnection;
  readonly "com.velocitypowered.api.proxy.LoginPhaseConnection": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').LoginPhaseConnection;
  readonly "com.velocitypowered.api.proxy.LoginPhaseConnection$MessageConsumer": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').LoginPhaseConnection_MessageConsumer;
  readonly "com.velocitypowered.api.proxy.messages.ChannelIdentifier": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').ChannelIdentifier;
  readonly "com.velocitypowered.api.proxy.messages.ChannelMessageSink": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').ChannelMessageSink;
  readonly "com.velocitypowered.api.proxy.messages.ChannelMessageSource": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').ChannelMessageSource;
  readonly "com.velocitypowered.api.proxy.messages.ChannelRegistrar": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').ChannelRegistrar;
  readonly "com.velocitypowered.api.proxy.messages.LegacyChannelIdentifier": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').LegacyChannelIdentifier;
  readonly "com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').MinecraftChannelIdentifier;
  readonly "com.velocitypowered.api.proxy.messages.PluginMessageEncoder": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').PluginMessageEncoder;
  readonly "com.velocitypowered.api.proxy.Player": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').Player;
  readonly "com.velocitypowered.api.proxy.player.ChatSession": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').ChatSession;
  readonly "com.velocitypowered.api.proxy.player.PlayerSettings": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').PlayerSettings;
  readonly "com.velocitypowered.api.proxy.player.PlayerSettings$ChatMode": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').PlayerSettings_ChatMode;
  readonly "com.velocitypowered.api.proxy.player.PlayerSettings$MainHand": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').PlayerSettings_MainHand;
  readonly "com.velocitypowered.api.proxy.player.PlayerSettings$ParticleStatus": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').PlayerSettings_ParticleStatus;
  readonly "com.velocitypowered.api.proxy.player.ResourcePackInfo": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').ResourcePackInfo;
  readonly "com.velocitypowered.api.proxy.player.ResourcePackInfo$Builder": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').ResourcePackInfo_Builder;
  readonly "com.velocitypowered.api.proxy.player.ResourcePackInfo$Origin": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').ResourcePackInfo_Origin;
  readonly "com.velocitypowered.api.proxy.player.SkinParts": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').SkinParts;
  readonly "com.velocitypowered.api.proxy.player.TabList": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').TabList;
  readonly "com.velocitypowered.api.proxy.player.TabListEntry": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').TabListEntry;
  readonly "com.velocitypowered.api.proxy.player.TabListEntry$Builder": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').TabListEntry_Builder;
  readonly "com.velocitypowered.api.proxy.ProxyServer": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').ProxyServer;
  readonly "com.velocitypowered.api.proxy.server.PingOptions": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').PingOptions;
  readonly "com.velocitypowered.api.proxy.server.PingOptions$Builder": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').PingOptions_Builder;
  readonly "com.velocitypowered.api.proxy.server.QueryResponse": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').QueryResponse;
  readonly "com.velocitypowered.api.proxy.server.QueryResponse$Builder": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').QueryResponse_Builder;
  readonly "com.velocitypowered.api.proxy.server.QueryResponse$PluginInformation": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').QueryResponse_PluginInformation;
  readonly "com.velocitypowered.api.proxy.server.RegisteredServer": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').RegisteredServer;
  readonly "com.velocitypowered.api.proxy.server.ServerInfo": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').ServerInfo;
  readonly "com.velocitypowered.api.proxy.server.ServerPing": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').ServerPing;
  readonly "com.velocitypowered.api.proxy.server.ServerPing$Builder": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').ServerPing_Builder;
  readonly "com.velocitypowered.api.proxy.server.ServerPing$Players": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').ServerPing_Players;
  readonly "com.velocitypowered.api.proxy.server.ServerPing$SamplePlayer": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').ServerPing_SamplePlayer;
  readonly "com.velocitypowered.api.proxy.server.ServerPing$Version": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').ServerPing_Version;
  readonly "com.velocitypowered.api.proxy.ServerConnection": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').ServerConnection;
  readonly "com.velocitypowered.api.scheduler.ScheduledTask": import('./binding-packages/com.velocitypowered.api.scheduler.generated.js').ScheduledTask;
  readonly "com.velocitypowered.api.scheduler.Scheduler": import('./binding-packages/com.velocitypowered.api.scheduler.generated.js').Scheduler;
  readonly "com.velocitypowered.api.scheduler.Scheduler$TaskBuilder": import('./binding-packages/com.velocitypowered.api.scheduler.generated.js').Scheduler_TaskBuilder;
  readonly "com.velocitypowered.api.scheduler.TaskStatus": import('./binding-packages/com.velocitypowered.api.scheduler.generated.js').TaskStatus;
  readonly "com.velocitypowered.api.util.Favicon": import('./binding-packages/com.velocitypowered.api.util.generated.js').Favicon;
  readonly "com.velocitypowered.api.util.GameProfile": import('./binding-packages/com.velocitypowered.api.util.generated.js').GameProfile;
  readonly "com.velocitypowered.api.util.GameProfile$Property": import('./binding-packages/com.velocitypowered.api.util.generated.js').GameProfile_Property;
  readonly "com.velocitypowered.api.util.MessagePosition": import('./binding-packages/com.velocitypowered.api.util.generated.js').MessagePosition;
  readonly "com.velocitypowered.api.util.ModInfo": import('./binding-packages/com.velocitypowered.api.util.generated.js').ModInfo;
  readonly "com.velocitypowered.api.util.ModInfo$Mod": import('./binding-packages/com.velocitypowered.api.util.generated.js').ModInfo_Mod;
  readonly "com.velocitypowered.api.util.Ordered": import('./binding-packages/com.velocitypowered.api.util.generated.js').Ordered;
  readonly "com.velocitypowered.api.util.ProxyVersion": import('./binding-packages/com.velocitypowered.api.util.generated.js').ProxyVersion;
  readonly "com.velocitypowered.api.util.ServerLink": import('./binding-packages/com.velocitypowered.api.util.generated.js').ServerLink;
  readonly "com.velocitypowered.api.util.ServerLink$Type": import('./binding-packages/com.velocitypowered.api.util.generated.js').ServerLink_Type;
  readonly "com.velocitypowered.api.util.UuidUtils": import('./binding-packages/com.velocitypowered.api.util.generated.js').UuidUtils;
  readonly "net.kyori.adventure.Adventure": import('./binding-packages/net.kyori.adventure.generated.js').Adventure;
  readonly "net.kyori.adventure.audience.Audience": import('./binding-packages/net.kyori.adventure.audience.generated.js').Audience;
  readonly "net.kyori.adventure.audience.Audiences": import('./binding-packages/net.kyori.adventure.audience.generated.js').Audiences;
  readonly "net.kyori.adventure.audience.ForwardingAudience": import('./binding-packages/net.kyori.adventure.audience.generated.js').ForwardingAudience;
  readonly "net.kyori.adventure.audience.ForwardingAudience$Single": import('./binding-packages/net.kyori.adventure.audience.generated.js').ForwardingAudience_Single;
  readonly "net.kyori.adventure.audience.MessageType": import('./binding-packages/net.kyori.adventure.audience.generated.js').MessageType;
  readonly "net.kyori.adventure.bossbar.BossBar": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBar;
  readonly "net.kyori.adventure.bossbar.BossBar$Color": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBar_Color;
  readonly "net.kyori.adventure.bossbar.BossBar$Flag": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBar_Flag;
  readonly "net.kyori.adventure.bossbar.BossBar$Listener": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBar_Listener;
  readonly "net.kyori.adventure.bossbar.BossBar$Overlay": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBar_Overlay;
  readonly "net.kyori.adventure.bossbar.BossBarImplementation": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBarImplementation;
  readonly "net.kyori.adventure.bossbar.BossBarImplementation$Provider": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBarImplementation_Provider;
  readonly "net.kyori.adventure.bossbar.BossBarViewer": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBarViewer;
  readonly "net.kyori.adventure.builder.AbstractBuilder": import('./binding-packages/net.kyori.adventure.builder.generated.js').AbstractBuilder;
  readonly "net.kyori.adventure.chat.ChatType": import('./binding-packages/net.kyori.adventure.chat.generated.js').ChatType;
  readonly "net.kyori.adventure.chat.ChatType$Bound": import('./binding-packages/net.kyori.adventure.chat.generated.js').ChatType_Bound;
  readonly "net.kyori.adventure.chat.SignedMessage": import('./binding-packages/net.kyori.adventure.chat.generated.js').SignedMessage_2;
  readonly "net.kyori.adventure.chat.SignedMessage$Signature": import('./binding-packages/net.kyori.adventure.chat.generated.js').SignedMessage_Signature;
  readonly "net.kyori.adventure.dialog.DialogLike": import('./binding-packages/net.kyori.adventure.dialog.generated.js').DialogLike;
  readonly "net.kyori.adventure.identity.Identified": import('./binding-packages/net.kyori.adventure.identity.generated.js').Identified;
  readonly "net.kyori.adventure.identity.Identity": import('./binding-packages/net.kyori.adventure.identity.generated.js').Identity;
  readonly "net.kyori.adventure.internal.Internals": import('./binding-packages/net.kyori.adventure.internal.generated.js').Internals;
  readonly "net.kyori.adventure.internal.properties.AdventureProperties": import('./binding-packages/net.kyori.adventure.internal.properties.generated.js').AdventureProperties;
  readonly "net.kyori.adventure.internal.properties.AdventureProperties$DefaultOverrideProvider": import('./binding-packages/net.kyori.adventure.internal.properties.generated.js').AdventureProperties_DefaultOverrideProvider;
  readonly "net.kyori.adventure.internal.properties.AdventureProperties$Property": import('./binding-packages/net.kyori.adventure.internal.properties.generated.js').AdventureProperties_Property;
  readonly "net.kyori.adventure.inventory.Book": import('./binding-packages/net.kyori.adventure.inventory.generated.js').Book;
  readonly "net.kyori.adventure.inventory.Book$Builder": import('./binding-packages/net.kyori.adventure.inventory.generated.js').Book_Builder;
  readonly "net.kyori.adventure.nbt.api.BinaryTagHolder": import('./binding-packages/net.kyori.adventure.nbt.api.generated.js').BinaryTagHolder;
  readonly "net.kyori.adventure.permission.PermissionChecker": import('./binding-packages/net.kyori.adventure.permission.generated.js').PermissionChecker;
  readonly "net.kyori.adventure.pointer.Pointer": import('./binding-packages/net.kyori.adventure.pointer.generated.js').Pointer;
  readonly "net.kyori.adventure.pointer.Pointered": import('./binding-packages/net.kyori.adventure.pointer.generated.js').Pointered;
  readonly "net.kyori.adventure.pointer.Pointers": import('./binding-packages/net.kyori.adventure.pointer.generated.js').Pointers;
  readonly "net.kyori.adventure.pointer.Pointers$Builder": import('./binding-packages/net.kyori.adventure.pointer.generated.js').Pointers_Builder;
  readonly "net.kyori.adventure.pointer.PointersSupplier": import('./binding-packages/net.kyori.adventure.pointer.generated.js').PointersSupplier;
  readonly "net.kyori.adventure.pointer.PointersSupplier$Builder": import('./binding-packages/net.kyori.adventure.pointer.generated.js').PointersSupplier_Builder;
  readonly "net.kyori.adventure.resource.ResourcePackCallback": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackCallback;
  readonly "net.kyori.adventure.resource.ResourcePackInfo": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackInfo_2;
  readonly "net.kyori.adventure.resource.ResourcePackInfo$Builder": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackInfo_Builder_2;
  readonly "net.kyori.adventure.resource.ResourcePackInfoLike": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackInfoLike;
  readonly "net.kyori.adventure.resource.ResourcePackRequest": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackRequest;
  readonly "net.kyori.adventure.resource.ResourcePackRequest$Builder": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackRequest_Builder;
  readonly "net.kyori.adventure.resource.ResourcePackRequestLike": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackRequestLike;
  readonly "net.kyori.adventure.resource.ResourcePackStatus": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackStatus;
  readonly "net.kyori.adventure.sound.Sound": import('./binding-packages/net.kyori.adventure.sound.generated.js').Sound;
  readonly "net.kyori.adventure.sound.Sound$Builder": import('./binding-packages/net.kyori.adventure.sound.generated.js').Sound_Builder;
  readonly "net.kyori.adventure.sound.Sound$Emitter": import('./binding-packages/net.kyori.adventure.sound.generated.js').Sound_Emitter;
  readonly "net.kyori.adventure.sound.Sound$Source": import('./binding-packages/net.kyori.adventure.sound.generated.js').Sound_Source;
  readonly "net.kyori.adventure.sound.Sound$Source$Provider": import('./binding-packages/net.kyori.adventure.sound.generated.js').Sound_Source_Provider;
  readonly "net.kyori.adventure.sound.Sound$Type": import('./binding-packages/net.kyori.adventure.sound.generated.js').Sound_Type;
  readonly "net.kyori.adventure.sound.SoundStop": import('./binding-packages/net.kyori.adventure.sound.generated.js').SoundStop;
  readonly "net.kyori.adventure.text.AbstractComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').AbstractComponent;
  readonly "net.kyori.adventure.text.BlockNBTComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponent;
  readonly "net.kyori.adventure.text.BlockNBTComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponent_Builder;
  readonly "net.kyori.adventure.text.BlockNBTComponent$LocalPos": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponent_LocalPos;
  readonly "net.kyori.adventure.text.BlockNBTComponent$Pos": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponent_Pos;
  readonly "net.kyori.adventure.text.BlockNBTComponent$WorldPos": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponent_WorldPos;
  readonly "net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponent_WorldPos_Coordinate;
  readonly "net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate$Type": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponent_WorldPos_Coordinate_Type;
  readonly "net.kyori.adventure.text.BuildableComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').BuildableComponent;
  readonly "net.kyori.adventure.text.Component": import('./binding-packages/net.kyori.adventure.text.generated.js').Component;
  readonly "net.kyori.adventure.text.ComponentApplicable": import('./binding-packages/net.kyori.adventure.text.generated.js').ComponentApplicable;
  readonly "net.kyori.adventure.text.ComponentBuilder": import('./binding-packages/net.kyori.adventure.text.generated.js').ComponentBuilder;
  readonly "net.kyori.adventure.text.ComponentBuilderApplicable": import('./binding-packages/net.kyori.adventure.text.generated.js').ComponentBuilderApplicable;
  readonly "net.kyori.adventure.text.ComponentIteratorFlag": import('./binding-packages/net.kyori.adventure.text.generated.js').ComponentIteratorFlag;
  readonly "net.kyori.adventure.text.ComponentIteratorType": import('./binding-packages/net.kyori.adventure.text.generated.js').ComponentIteratorType;
  readonly "net.kyori.adventure.text.ComponentLike": import('./binding-packages/net.kyori.adventure.text.generated.js').ComponentLike;
  readonly "net.kyori.adventure.text.EntityNBTComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').EntityNBTComponent;
  readonly "net.kyori.adventure.text.EntityNBTComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').EntityNBTComponent_Builder;
  readonly "net.kyori.adventure.text.event.ClickCallback": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickCallback;
  readonly "net.kyori.adventure.text.event.ClickCallback$Options": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickCallback_Options;
  readonly "net.kyori.adventure.text.event.ClickCallback$Options$Builder": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickCallback_Options_Builder;
  readonly "net.kyori.adventure.text.event.ClickCallback$Provider": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickCallback_Provider;
  readonly "net.kyori.adventure.text.event.ClickEvent": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEvent;
  readonly "net.kyori.adventure.text.event.ClickEvent$Action": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEvent_Action;
  readonly "net.kyori.adventure.text.event.ClickEvent$Payload": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEvent_Payload;
  readonly "net.kyori.adventure.text.event.ClickEvent$Payload$Custom": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEvent_Payload_Custom;
  readonly "net.kyori.adventure.text.event.ClickEvent$Payload$Dialog": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEvent_Payload_Dialog;
  readonly "net.kyori.adventure.text.event.ClickEvent$Payload$Int": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEvent_Payload_Int;
  readonly "net.kyori.adventure.text.event.ClickEvent$Payload$Text": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEvent_Payload_Text;
  readonly "net.kyori.adventure.text.event.DataComponentValue": import('./binding-packages/net.kyori.adventure.text.event.generated.js').DataComponentValue;
  readonly "net.kyori.adventure.text.event.DataComponentValue$Removed": import('./binding-packages/net.kyori.adventure.text.event.generated.js').DataComponentValue_Removed;
  readonly "net.kyori.adventure.text.event.DataComponentValue$TagSerializable": import('./binding-packages/net.kyori.adventure.text.event.generated.js').DataComponentValue_TagSerializable;
  readonly "net.kyori.adventure.text.event.DataComponentValueConverterRegistry": import('./binding-packages/net.kyori.adventure.text.event.generated.js').DataComponentValueConverterRegistry;
  readonly "net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Conversion": import('./binding-packages/net.kyori.adventure.text.event.generated.js').DataComponentValueConverterRegistry_Conversion;
  readonly "net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Provider": import('./binding-packages/net.kyori.adventure.text.event.generated.js').DataComponentValueConverterRegistry_Provider;
  readonly "net.kyori.adventure.text.event.HoverEvent": import('./binding-packages/net.kyori.adventure.text.event.generated.js').HoverEvent;
  readonly "net.kyori.adventure.text.event.HoverEvent$Action": import('./binding-packages/net.kyori.adventure.text.event.generated.js').HoverEvent_Action;
  readonly "net.kyori.adventure.text.event.HoverEvent$ShowEntity": import('./binding-packages/net.kyori.adventure.text.event.generated.js').HoverEvent_ShowEntity;
  readonly "net.kyori.adventure.text.event.HoverEvent$ShowItem": import('./binding-packages/net.kyori.adventure.text.event.generated.js').HoverEvent_ShowItem;
  readonly "net.kyori.adventure.text.event.HoverEventSource": import('./binding-packages/net.kyori.adventure.text.event.generated.js').HoverEventSource;
  readonly "net.kyori.adventure.text.flattener.ComponentFlattener": import('./binding-packages/net.kyori.adventure.text.flattener.generated.js').ComponentFlattener;
  readonly "net.kyori.adventure.text.flattener.ComponentFlattener$Builder": import('./binding-packages/net.kyori.adventure.text.flattener.generated.js').ComponentFlattener_Builder;
  readonly "net.kyori.adventure.text.flattener.FlattenerListener": import('./binding-packages/net.kyori.adventure.text.flattener.generated.js').FlattenerListener;
  readonly "net.kyori.adventure.text.format.MutableStyleSetter": import('./binding-packages/net.kyori.adventure.text.format.generated.js').MutableStyleSetter;
  readonly "net.kyori.adventure.text.format.NamedTextColor": import('./binding-packages/net.kyori.adventure.text.format.generated.js').NamedTextColor;
  readonly "net.kyori.adventure.text.format.ShadowColor": import('./binding-packages/net.kyori.adventure.text.format.generated.js').ShadowColor;
  readonly "net.kyori.adventure.text.format.Style": import('./binding-packages/net.kyori.adventure.text.format.generated.js').Style;
  readonly "net.kyori.adventure.text.format.Style$Builder": import('./binding-packages/net.kyori.adventure.text.format.generated.js').Style_Builder;
  readonly "net.kyori.adventure.text.format.Style$Merge": import('./binding-packages/net.kyori.adventure.text.format.generated.js').Style_Merge;
  readonly "net.kyori.adventure.text.format.Style$Merge$Strategy": import('./binding-packages/net.kyori.adventure.text.format.generated.js').Style_Merge_Strategy;
  readonly "net.kyori.adventure.text.format.StyleBuilderApplicable": import('./binding-packages/net.kyori.adventure.text.format.generated.js').StyleBuilderApplicable;
  readonly "net.kyori.adventure.text.format.StyleGetter": import('./binding-packages/net.kyori.adventure.text.format.generated.js').StyleGetter;
  readonly "net.kyori.adventure.text.format.StyleSetter": import('./binding-packages/net.kyori.adventure.text.format.generated.js').StyleSetter;
  readonly "net.kyori.adventure.text.format.TextColor": import('./binding-packages/net.kyori.adventure.text.format.generated.js').TextColor;
  readonly "net.kyori.adventure.text.format.TextDecoration": import('./binding-packages/net.kyori.adventure.text.format.generated.js').TextDecoration;
  readonly "net.kyori.adventure.text.format.TextDecoration$State": import('./binding-packages/net.kyori.adventure.text.format.generated.js').TextDecoration_State;
  readonly "net.kyori.adventure.text.format.TextDecorationAndState": import('./binding-packages/net.kyori.adventure.text.format.generated.js').TextDecorationAndState;
  readonly "net.kyori.adventure.text.format.TextFormat": import('./binding-packages/net.kyori.adventure.text.format.generated.js').TextFormat;
  readonly "net.kyori.adventure.text.JoinConfiguration": import('./binding-packages/net.kyori.adventure.text.generated.js').JoinConfiguration;
  readonly "net.kyori.adventure.text.JoinConfiguration$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').JoinConfiguration_Builder;
  readonly "net.kyori.adventure.text.KeybindComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').KeybindComponent;
  readonly "net.kyori.adventure.text.KeybindComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').KeybindComponent_Builder;
  readonly "net.kyori.adventure.text.KeybindComponent$KeybindLike": import('./binding-packages/net.kyori.adventure.text.generated.js').KeybindComponent_KeybindLike;
  readonly "net.kyori.adventure.text.LinearComponents": import('./binding-packages/net.kyori.adventure.text.generated.js').LinearComponents;
  readonly "net.kyori.adventure.text.NBTComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').NBTComponent;
  readonly "net.kyori.adventure.text.NBTComponentBuilder": import('./binding-packages/net.kyori.adventure.text.generated.js').NBTComponentBuilder;
  readonly "net.kyori.adventure.text.object.ObjectContents": import('./binding-packages/net.kyori.adventure.text.object.generated.js').ObjectContents;
  readonly "net.kyori.adventure.text.object.PlayerHeadObjectContents": import('./binding-packages/net.kyori.adventure.text.object.generated.js').PlayerHeadObjectContents;
  readonly "net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder": import('./binding-packages/net.kyori.adventure.text.object.generated.js').PlayerHeadObjectContents_Builder;
  readonly "net.kyori.adventure.text.object.PlayerHeadObjectContents$ProfileProperty": import('./binding-packages/net.kyori.adventure.text.object.generated.js').PlayerHeadObjectContents_ProfileProperty;
  readonly "net.kyori.adventure.text.object.PlayerHeadObjectContents$SkinSource": import('./binding-packages/net.kyori.adventure.text.object.generated.js').PlayerHeadObjectContents_SkinSource;
  readonly "net.kyori.adventure.text.object.SpriteObjectContents": import('./binding-packages/net.kyori.adventure.text.object.generated.js').SpriteObjectContents;
  readonly "net.kyori.adventure.text.ObjectComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').ObjectComponent;
  readonly "net.kyori.adventure.text.ObjectComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').ObjectComponent_Builder;
  readonly "net.kyori.adventure.text.PatternReplacementResult": import('./binding-packages/net.kyori.adventure.text.generated.js').PatternReplacementResult;
  readonly "net.kyori.adventure.text.renderer.AbstractComponentRenderer": import('./binding-packages/net.kyori.adventure.text.renderer.generated.js').AbstractComponentRenderer;
  readonly "net.kyori.adventure.text.renderer.ComponentRenderer": import('./binding-packages/net.kyori.adventure.text.renderer.generated.js').ComponentRenderer;
  readonly "net.kyori.adventure.text.renderer.TranslatableComponentRenderer": import('./binding-packages/net.kyori.adventure.text.renderer.generated.js').TranslatableComponentRenderer;
  readonly "net.kyori.adventure.text.ScopedComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').ScopedComponent;
  readonly "net.kyori.adventure.text.ScoreComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').ScoreComponent;
  readonly "net.kyori.adventure.text.ScoreComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').ScoreComponent_Builder;
  readonly "net.kyori.adventure.text.SelectorComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').SelectorComponent;
  readonly "net.kyori.adventure.text.SelectorComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').SelectorComponent_Builder;
  readonly "net.kyori.adventure.text.serializer.ComponentDecoder": import('./binding-packages/net.kyori.adventure.text.serializer.generated.js').ComponentDecoder;
  readonly "net.kyori.adventure.text.serializer.ComponentEncoder": import('./binding-packages/net.kyori.adventure.text.serializer.generated.js').ComponentEncoder;
  readonly "net.kyori.adventure.text.serializer.ComponentSerializer": import('./binding-packages/net.kyori.adventure.text.serializer.generated.js').ComponentSerializer;
  readonly "net.kyori.adventure.text.StorageNBTComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').StorageNBTComponent;
  readonly "net.kyori.adventure.text.StorageNBTComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').StorageNBTComponent_Builder;
  readonly "net.kyori.adventure.text.TextComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').TextComponent;
  readonly "net.kyori.adventure.text.TextComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').TextComponent_Builder;
  readonly "net.kyori.adventure.text.TextReplacementConfig": import('./binding-packages/net.kyori.adventure.text.generated.js').TextReplacementConfig;
  readonly "net.kyori.adventure.text.TextReplacementConfig$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').TextReplacementConfig_Builder;
  readonly "net.kyori.adventure.text.TextReplacementConfig$Condition": import('./binding-packages/net.kyori.adventure.text.generated.js').TextReplacementConfig_Condition;
  readonly "net.kyori.adventure.text.TranslatableComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').TranslatableComponent;
  readonly "net.kyori.adventure.text.TranslatableComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').TranslatableComponent_Builder;
  readonly "net.kyori.adventure.text.TranslationArgument": import('./binding-packages/net.kyori.adventure.text.generated.js').TranslationArgument;
  readonly "net.kyori.adventure.text.TranslationArgumentLike": import('./binding-packages/net.kyori.adventure.text.generated.js').TranslationArgumentLike;
  readonly "net.kyori.adventure.text.VirtualComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').VirtualComponent;
  readonly "net.kyori.adventure.text.VirtualComponentRenderer": import('./binding-packages/net.kyori.adventure.text.generated.js').VirtualComponentRenderer;
  readonly "net.kyori.adventure.title.Title": import('./binding-packages/net.kyori.adventure.title.generated.js').Title;
  readonly "net.kyori.adventure.title.Title$Times": import('./binding-packages/net.kyori.adventure.title.generated.js').Title_Times;
  readonly "net.kyori.adventure.title.TitlePart": import('./binding-packages/net.kyori.adventure.title.generated.js').TitlePart;
  readonly "net.kyori.adventure.translation.AbstractTranslationStore": import('./binding-packages/net.kyori.adventure.translation.generated.js').AbstractTranslationStore;
  readonly "net.kyori.adventure.translation.AbstractTranslationStore$StringBased": import('./binding-packages/net.kyori.adventure.translation.generated.js').AbstractTranslationStore_StringBased;
  readonly "net.kyori.adventure.translation.GlobalTranslator": import('./binding-packages/net.kyori.adventure.translation.generated.js').GlobalTranslator;
  readonly "net.kyori.adventure.translation.Translatable": import('./binding-packages/net.kyori.adventure.translation.generated.js').Translatable;
  readonly "net.kyori.adventure.translation.TranslationRegistry": import('./binding-packages/net.kyori.adventure.translation.generated.js').TranslationRegistry;
  readonly "net.kyori.adventure.translation.TranslationStore": import('./binding-packages/net.kyori.adventure.translation.generated.js').TranslationStore;
  readonly "net.kyori.adventure.translation.TranslationStore$StringBased": import('./binding-packages/net.kyori.adventure.translation.generated.js').TranslationStore_StringBased;
  readonly "net.kyori.adventure.translation.Translator": import('./binding-packages/net.kyori.adventure.translation.generated.js').Translator;
  readonly "net.kyori.adventure.util.ARGBLike": import('./binding-packages/net.kyori.adventure.util.generated.js').ARGBLike;
  readonly "net.kyori.adventure.util.Buildable": import('./binding-packages/net.kyori.adventure.util.generated.js').Buildable;
  readonly "net.kyori.adventure.util.Buildable$Builder": import('./binding-packages/net.kyori.adventure.util.generated.js').Buildable_Builder;
  readonly "net.kyori.adventure.util.Codec": import('./binding-packages/net.kyori.adventure.util.generated.js').Codec;
  readonly "net.kyori.adventure.util.Codec$Decoder": import('./binding-packages/net.kyori.adventure.util.generated.js').Codec_Decoder;
  readonly "net.kyori.adventure.util.Codec$Encoder": import('./binding-packages/net.kyori.adventure.util.generated.js').Codec_Encoder;
  readonly "net.kyori.adventure.util.ComponentMessageThrowable": import('./binding-packages/net.kyori.adventure.util.generated.js').ComponentMessageThrowable;
  readonly "net.kyori.adventure.util.ForwardingIterator": import('./binding-packages/net.kyori.adventure.util.generated.js').ForwardingIterator;
  readonly "net.kyori.adventure.util.HSVLike": import('./binding-packages/net.kyori.adventure.util.generated.js').HSVLike;
  readonly "net.kyori.adventure.util.Index": import('./binding-packages/net.kyori.adventure.util.generated.js').Index;
  readonly "net.kyori.adventure.util.InheritanceAwareMap": import('./binding-packages/net.kyori.adventure.util.generated.js').InheritanceAwareMap;
  readonly "net.kyori.adventure.util.InheritanceAwareMap$Builder": import('./binding-packages/net.kyori.adventure.util.generated.js').InheritanceAwareMap_Builder;
  readonly "net.kyori.adventure.util.IntFunction2": import('./binding-packages/net.kyori.adventure.util.generated.js').IntFunction2;
  readonly "net.kyori.adventure.util.Listenable": import('./binding-packages/net.kyori.adventure.util.generated.js').Listenable;
  readonly "net.kyori.adventure.util.MonkeyBars": import('./binding-packages/net.kyori.adventure.util.generated.js').MonkeyBars;
  readonly "net.kyori.adventure.util.Nag": import('./binding-packages/net.kyori.adventure.util.generated.js').Nag;
  readonly "net.kyori.adventure.util.PlatformAPI": import('./binding-packages/net.kyori.adventure.util.generated.js').PlatformAPI;
  readonly "net.kyori.adventure.util.RGBLike": import('./binding-packages/net.kyori.adventure.util.generated.js').RGBLike;
  readonly "net.kyori.adventure.util.Services": import('./binding-packages/net.kyori.adventure.util.generated.js').Services;
  readonly "net.kyori.adventure.util.Services$Fallback": import('./binding-packages/net.kyori.adventure.util.generated.js').Services_Fallback;
  readonly "net.kyori.adventure.util.ShadyPines": import('./binding-packages/net.kyori.adventure.util.generated.js').ShadyPines;
  readonly "net.kyori.adventure.util.Ticks": import('./binding-packages/net.kyori.adventure.util.generated.js').Ticks;
  readonly "net.kyori.adventure.util.TriState": import('./binding-packages/net.kyori.adventure.util.generated.js').TriState;
  readonly "net.kyori.adventure.util.UTF8ResourceBundleControl": import('./binding-packages/net.kyori.adventure.util.generated.js').UTF8ResourceBundleControl;
}
export interface GeneratedJavaStaticsMap {
  readonly "com.velocitypowered.api.command.BrigadierCommand": import('./binding-packages/com.velocitypowered.api.command.generated.js').BrigadierCommandStatics;
  readonly "com.velocitypowered.api.command.Command": import('./binding-packages/com.velocitypowered.api.command.generated.js').CommandStatics;
  readonly "com.velocitypowered.api.command.CommandInvocation": import('./binding-packages/com.velocitypowered.api.command.generated.js').CommandInvocationStatics;
  readonly "com.velocitypowered.api.command.CommandManager": import('./binding-packages/com.velocitypowered.api.command.generated.js').CommandManagerStatics;
  readonly "com.velocitypowered.api.command.CommandMeta": import('./binding-packages/com.velocitypowered.api.command.generated.js').CommandMetaStatics;
  readonly "com.velocitypowered.api.command.CommandMeta$Builder": import('./binding-packages/com.velocitypowered.api.command.generated.js').CommandMeta_BuilderStatics;
  readonly "com.velocitypowered.api.command.CommandResult": import('./binding-packages/com.velocitypowered.api.command.generated.js').CommandResultStatics;
  readonly "com.velocitypowered.api.command.CommandSource": import('./binding-packages/com.velocitypowered.api.command.generated.js').CommandSourceStatics;
  readonly "com.velocitypowered.api.command.InvocableCommand": import('./binding-packages/com.velocitypowered.api.command.generated.js').InvocableCommandStatics;
  readonly "com.velocitypowered.api.command.RawCommand": import('./binding-packages/com.velocitypowered.api.command.generated.js').RawCommandStatics;
  readonly "com.velocitypowered.api.command.RawCommand$Invocation": import('./binding-packages/com.velocitypowered.api.command.generated.js').RawCommand_InvocationStatics;
  readonly "com.velocitypowered.api.command.SimpleCommand": import('./binding-packages/com.velocitypowered.api.command.generated.js').SimpleCommandStatics;
  readonly "com.velocitypowered.api.command.SimpleCommand$Invocation": import('./binding-packages/com.velocitypowered.api.command.generated.js').SimpleCommand_InvocationStatics;
  readonly "com.velocitypowered.api.command.VelocityBrigadierMessage": import('./binding-packages/com.velocitypowered.api.command.generated.js').VelocityBrigadierMessageStatics;
  readonly "com.velocitypowered.api.event.annotation.AwaitingEvent": import('./binding-packages/com.velocitypowered.api.event.annotation.generated.js').AwaitingEventStatics;
  readonly "com.velocitypowered.api.event.AwaitingEventExecutor": import('./binding-packages/com.velocitypowered.api.event.generated.js').AwaitingEventExecutorStatics;
  readonly "com.velocitypowered.api.event.command.CommandExecuteEvent": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').CommandExecuteEventStatics;
  readonly "com.velocitypowered.api.event.command.CommandExecuteEvent$CommandResult": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').CommandExecuteEvent_CommandResultStatics;
  readonly "com.velocitypowered.api.event.command.CommandExecuteEvent$InvocationInfo": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').CommandExecuteEvent_InvocationInfoStatics;
  readonly "com.velocitypowered.api.event.command.CommandExecuteEvent$SignedState": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').CommandExecuteEvent_SignedStateStatics;
  readonly "com.velocitypowered.api.event.command.CommandExecuteEvent$Source": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').CommandExecuteEvent_SourceStatics;
  readonly "com.velocitypowered.api.event.command.PlayerAvailableCommandsEvent": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').PlayerAvailableCommandsEventStatics;
  readonly "com.velocitypowered.api.event.command.PostCommandInvocationEvent": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').PostCommandInvocationEventStatics;
  readonly "com.velocitypowered.api.event.connection.ConnectionHandshakeEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').ConnectionHandshakeEventStatics;
  readonly "com.velocitypowered.api.event.connection.DisconnectEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').DisconnectEventStatics;
  readonly "com.velocitypowered.api.event.connection.DisconnectEvent$LoginStatus": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').DisconnectEvent_LoginStatusStatics;
  readonly "com.velocitypowered.api.event.connection.LoginEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').LoginEventStatics;
  readonly "com.velocitypowered.api.event.connection.PluginMessageEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PluginMessageEventStatics;
  readonly "com.velocitypowered.api.event.connection.PluginMessageEvent$ForwardResult": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PluginMessageEvent_ForwardResultStatics;
  readonly "com.velocitypowered.api.event.connection.PostLoginEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PostLoginEventStatics;
  readonly "com.velocitypowered.api.event.connection.PreLoginEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PreLoginEventStatics;
  readonly "com.velocitypowered.api.event.connection.PreLoginEvent$PreLoginComponentResult": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PreLoginEvent_PreLoginComponentResultStatics;
  readonly "com.velocitypowered.api.event.connection.PreTransferEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PreTransferEventStatics;
  readonly "com.velocitypowered.api.event.connection.PreTransferEvent$TransferResult": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PreTransferEvent_TransferResultStatics;
  readonly "com.velocitypowered.api.event.Continuation": import('./binding-packages/com.velocitypowered.api.event.generated.js').ContinuationStatics;
  readonly "com.velocitypowered.api.event.EventHandler": import('./binding-packages/com.velocitypowered.api.event.generated.js').EventHandlerStatics;
  readonly "com.velocitypowered.api.event.EventManager": import('./binding-packages/com.velocitypowered.api.event.generated.js').EventManagerStatics;
  readonly "com.velocitypowered.api.event.EventTask": import('./binding-packages/com.velocitypowered.api.event.generated.js').EventTaskStatics;
  readonly "com.velocitypowered.api.event.permission.PermissionsSetupEvent": import('./binding-packages/com.velocitypowered.api.event.permission.generated.js').PermissionsSetupEventStatics;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerConfigurationEventStatics;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerEnterConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerEnterConfigurationEventStatics;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerEnteredConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerEnteredConfigurationEventStatics;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerFinishConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerFinishConfigurationEventStatics;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerFinishedConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerFinishedConfigurationEventStatics;
  readonly "com.velocitypowered.api.event.player.CookieReceiveEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieReceiveEventStatics;
  readonly "com.velocitypowered.api.event.player.CookieReceiveEvent$ForwardResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieReceiveEvent_ForwardResultStatics;
  readonly "com.velocitypowered.api.event.player.CookieRequestEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieRequestEventStatics;
  readonly "com.velocitypowered.api.event.player.CookieRequestEvent$ForwardResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieRequestEvent_ForwardResultStatics;
  readonly "com.velocitypowered.api.event.player.CookieStoreEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieStoreEventStatics;
  readonly "com.velocitypowered.api.event.player.CookieStoreEvent$ForwardResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieStoreEvent_ForwardResultStatics;
  readonly "com.velocitypowered.api.event.player.GameProfileRequestEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').GameProfileRequestEventStatics;
  readonly "com.velocitypowered.api.event.player.KickedFromServerEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').KickedFromServerEventStatics;
  readonly "com.velocitypowered.api.event.player.KickedFromServerEvent$DisconnectPlayer": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').KickedFromServerEvent_DisconnectPlayerStatics;
  readonly "com.velocitypowered.api.event.player.KickedFromServerEvent$Notify": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').KickedFromServerEvent_NotifyStatics;
  readonly "com.velocitypowered.api.event.player.KickedFromServerEvent$RedirectPlayer": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').KickedFromServerEvent_RedirectPlayerStatics;
  readonly "com.velocitypowered.api.event.player.KickedFromServerEvent$ServerKickResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').KickedFromServerEvent_ServerKickResultStatics;
  readonly "com.velocitypowered.api.event.player.PlayerChannelRegisterEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChannelRegisterEventStatics;
  readonly "com.velocitypowered.api.event.player.PlayerChannelUnregisterEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChannelUnregisterEventStatics;
  readonly "com.velocitypowered.api.event.player.PlayerChatEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChatEventStatics;
  readonly "com.velocitypowered.api.event.player.PlayerChatEvent$ChatResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChatEvent_ChatResultStatics;
  readonly "com.velocitypowered.api.event.player.PlayerChooseInitialServerEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChooseInitialServerEventStatics;
  readonly "com.velocitypowered.api.event.player.PlayerClientBrandEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerClientBrandEventStatics;
  readonly "com.velocitypowered.api.event.player.PlayerModInfoEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerModInfoEventStatics;
  readonly "com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerResourcePackStatusEventStatics;
  readonly "com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent$Status": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerResourcePackStatusEvent_StatusStatics;
  readonly "com.velocitypowered.api.event.player.PlayerSettingsChangedEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerSettingsChangedEventStatics;
  readonly "com.velocitypowered.api.event.player.ServerConnectedEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerConnectedEventStatics;
  readonly "com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerLoginPluginMessageEventStatics;
  readonly "com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent$ResponseResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerLoginPluginMessageEvent_ResponseResultStatics;
  readonly "com.velocitypowered.api.event.player.ServerPostConnectEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerPostConnectEventStatics;
  readonly "com.velocitypowered.api.event.player.ServerPreConnectEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerPreConnectEventStatics;
  readonly "com.velocitypowered.api.event.player.ServerPreConnectEvent$ServerResult": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerPreConnectEvent_ServerResultStatics;
  readonly "com.velocitypowered.api.event.player.ServerResourcePackRemoveEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerResourcePackRemoveEventStatics;
  readonly "com.velocitypowered.api.event.player.ServerResourcePackSendEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerResourcePackSendEventStatics;
  readonly "com.velocitypowered.api.event.player.TabCompleteEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').TabCompleteEventStatics;
  readonly "com.velocitypowered.api.event.PostOrder": import('./binding-packages/com.velocitypowered.api.event.generated.js').PostOrderStatics;
  readonly "com.velocitypowered.api.event.proxy.ListenerBoundEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ListenerBoundEventStatics;
  readonly "com.velocitypowered.api.event.proxy.ListenerCloseEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ListenerCloseEventStatics;
  readonly "com.velocitypowered.api.event.proxy.ProxyInitializeEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ProxyInitializeEventStatics;
  readonly "com.velocitypowered.api.event.proxy.ProxyPingEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ProxyPingEventStatics;
  readonly "com.velocitypowered.api.event.proxy.ProxyPreShutdownEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ProxyPreShutdownEventStatics;
  readonly "com.velocitypowered.api.event.proxy.ProxyReloadEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ProxyReloadEventStatics;
  readonly "com.velocitypowered.api.event.proxy.ProxyShutdownEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.generated.js').ProxyShutdownEventStatics;
  readonly "com.velocitypowered.api.event.proxy.server.ServerRegisteredEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.server.generated.js').ServerRegisteredEventStatics;
  readonly "com.velocitypowered.api.event.proxy.server.ServerUnregisteredEvent": import('./binding-packages/com.velocitypowered.api.event.proxy.server.generated.js').ServerUnregisteredEventStatics;
  readonly "com.velocitypowered.api.event.query.ProxyQueryEvent": import('./binding-packages/com.velocitypowered.api.event.query.generated.js').ProxyQueryEventStatics;
  readonly "com.velocitypowered.api.event.query.ProxyQueryEvent$QueryType": import('./binding-packages/com.velocitypowered.api.event.query.generated.js').ProxyQueryEvent_QueryTypeStatics;
  readonly "com.velocitypowered.api.event.ResultedEvent": import('./binding-packages/com.velocitypowered.api.event.generated.js').ResultedEventStatics;
  readonly "com.velocitypowered.api.event.ResultedEvent$ComponentResult": import('./binding-packages/com.velocitypowered.api.event.generated.js').ResultedEvent_ComponentResultStatics;
  readonly "com.velocitypowered.api.event.ResultedEvent$GenericResult": import('./binding-packages/com.velocitypowered.api.event.generated.js').ResultedEvent_GenericResultStatics;
  readonly "com.velocitypowered.api.event.ResultedEvent$Result": import('./binding-packages/com.velocitypowered.api.event.generated.js').ResultedEvent_ResultStatics;
  readonly "com.velocitypowered.api.event.Subscribe": import('./binding-packages/com.velocitypowered.api.event.generated.js').SubscribeStatics;
  readonly "com.velocitypowered.api.network.HandshakeIntent": import('./binding-packages/com.velocitypowered.api.network.generated.js').HandshakeIntentStatics;
  readonly "com.velocitypowered.api.network.ListenerType": import('./binding-packages/com.velocitypowered.api.network.generated.js').ListenerTypeStatics;
  readonly "com.velocitypowered.api.network.ProtocolState": import('./binding-packages/com.velocitypowered.api.network.generated.js').ProtocolStateStatics;
  readonly "com.velocitypowered.api.network.ProtocolVersion": import('./binding-packages/com.velocitypowered.api.network.generated.js').ProtocolVersionStatics;
  readonly "com.velocitypowered.api.permission.PermissionFunction": import('./binding-packages/com.velocitypowered.api.permission.generated.js').PermissionFunctionStatics;
  readonly "com.velocitypowered.api.permission.PermissionProvider": import('./binding-packages/com.velocitypowered.api.permission.generated.js').PermissionProviderStatics;
  readonly "com.velocitypowered.api.permission.PermissionSubject": import('./binding-packages/com.velocitypowered.api.permission.generated.js').PermissionSubjectStatics;
  readonly "com.velocitypowered.api.permission.Tristate": import('./binding-packages/com.velocitypowered.api.permission.generated.js').TristateStatics;
  readonly "com.velocitypowered.api.plugin.annotation.DataDirectory": import('./binding-packages/com.velocitypowered.api.plugin.annotation.generated.js').DataDirectoryStatics;
  readonly "com.velocitypowered.api.plugin.ap.PluginAnnotationProcessor": import('./binding-packages/com.velocitypowered.api.plugin.ap.generated.js').PluginAnnotationProcessorStatics;
  readonly "com.velocitypowered.api.plugin.ap.SerializedPluginDescription": import('./binding-packages/com.velocitypowered.api.plugin.ap.generated.js').SerializedPluginDescriptionStatics;
  readonly "com.velocitypowered.api.plugin.ap.SerializedPluginDescription$Dependency": import('./binding-packages/com.velocitypowered.api.plugin.ap.generated.js').SerializedPluginDescription_DependencyStatics;
  readonly "com.velocitypowered.api.plugin.Dependency": import('./binding-packages/com.velocitypowered.api.plugin.generated.js').DependencyStatics;
  readonly "com.velocitypowered.api.plugin.InvalidPluginException": import('./binding-packages/com.velocitypowered.api.plugin.generated.js').InvalidPluginExceptionStatics;
  readonly "com.velocitypowered.api.plugin.meta.PluginDependency": import('./binding-packages/com.velocitypowered.api.plugin.meta.generated.js').PluginDependencyStatics;
  readonly "com.velocitypowered.api.plugin.Plugin": import('./binding-packages/com.velocitypowered.api.plugin.generated.js').PluginStatics;
  readonly "com.velocitypowered.api.plugin.PluginContainer": import('./binding-packages/com.velocitypowered.api.plugin.generated.js').PluginContainerStatics;
  readonly "com.velocitypowered.api.plugin.PluginDescription": import('./binding-packages/com.velocitypowered.api.plugin.generated.js').PluginDescriptionStatics;
  readonly "com.velocitypowered.api.plugin.PluginManager": import('./binding-packages/com.velocitypowered.api.plugin.generated.js').PluginManagerStatics;
  readonly "com.velocitypowered.api.proxy.config.ProxyConfig": import('./binding-packages/com.velocitypowered.api.proxy.config.generated.js').ProxyConfigStatics;
  readonly "com.velocitypowered.api.proxy.ConnectionRequestBuilder": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').ConnectionRequestBuilderStatics;
  readonly "com.velocitypowered.api.proxy.ConnectionRequestBuilder$Result": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').ConnectionRequestBuilder_ResultStatics;
  readonly "com.velocitypowered.api.proxy.ConnectionRequestBuilder$Status": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').ConnectionRequestBuilder_StatusStatics;
  readonly "com.velocitypowered.api.proxy.ConsoleCommandSource": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').ConsoleCommandSourceStatics;
  readonly "com.velocitypowered.api.proxy.crypto.IdentifiedKey": import('./binding-packages/com.velocitypowered.api.proxy.crypto.generated.js').IdentifiedKeyStatics;
  readonly "com.velocitypowered.api.proxy.crypto.IdentifiedKey$Revision": import('./binding-packages/com.velocitypowered.api.proxy.crypto.generated.js').IdentifiedKey_RevisionStatics;
  readonly "com.velocitypowered.api.proxy.crypto.KeyIdentifiable": import('./binding-packages/com.velocitypowered.api.proxy.crypto.generated.js').KeyIdentifiableStatics;
  readonly "com.velocitypowered.api.proxy.crypto.KeySigned": import('./binding-packages/com.velocitypowered.api.proxy.crypto.generated.js').KeySignedStatics;
  readonly "com.velocitypowered.api.proxy.crypto.SignedMessage": import('./binding-packages/com.velocitypowered.api.proxy.crypto.generated.js').SignedMessageStatics;
  readonly "com.velocitypowered.api.proxy.InboundConnection": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').InboundConnectionStatics;
  readonly "com.velocitypowered.api.proxy.LoginPhaseConnection": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').LoginPhaseConnectionStatics;
  readonly "com.velocitypowered.api.proxy.LoginPhaseConnection$MessageConsumer": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').LoginPhaseConnection_MessageConsumerStatics;
  readonly "com.velocitypowered.api.proxy.messages.ChannelIdentifier": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').ChannelIdentifierStatics;
  readonly "com.velocitypowered.api.proxy.messages.ChannelMessageSink": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').ChannelMessageSinkStatics;
  readonly "com.velocitypowered.api.proxy.messages.ChannelMessageSource": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').ChannelMessageSourceStatics;
  readonly "com.velocitypowered.api.proxy.messages.ChannelRegistrar": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').ChannelRegistrarStatics;
  readonly "com.velocitypowered.api.proxy.messages.LegacyChannelIdentifier": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').LegacyChannelIdentifierStatics;
  readonly "com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').MinecraftChannelIdentifierStatics;
  readonly "com.velocitypowered.api.proxy.messages.PluginMessageEncoder": import('./binding-packages/com.velocitypowered.api.proxy.messages.generated.js').PluginMessageEncoderStatics;
  readonly "com.velocitypowered.api.proxy.Player": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').PlayerStatics;
  readonly "com.velocitypowered.api.proxy.player.ChatSession": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').ChatSessionStatics;
  readonly "com.velocitypowered.api.proxy.player.PlayerSettings": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').PlayerSettingsStatics;
  readonly "com.velocitypowered.api.proxy.player.PlayerSettings$ChatMode": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').PlayerSettings_ChatModeStatics;
  readonly "com.velocitypowered.api.proxy.player.PlayerSettings$MainHand": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').PlayerSettings_MainHandStatics;
  readonly "com.velocitypowered.api.proxy.player.PlayerSettings$ParticleStatus": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').PlayerSettings_ParticleStatusStatics;
  readonly "com.velocitypowered.api.proxy.player.ResourcePackInfo": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').ResourcePackInfoStatics;
  readonly "com.velocitypowered.api.proxy.player.ResourcePackInfo$Builder": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').ResourcePackInfo_BuilderStatics;
  readonly "com.velocitypowered.api.proxy.player.ResourcePackInfo$Origin": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').ResourcePackInfo_OriginStatics;
  readonly "com.velocitypowered.api.proxy.player.SkinParts": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').SkinPartsStatics;
  readonly "com.velocitypowered.api.proxy.player.TabList": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').TabListStatics;
  readonly "com.velocitypowered.api.proxy.player.TabListEntry": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').TabListEntryStatics;
  readonly "com.velocitypowered.api.proxy.player.TabListEntry$Builder": import('./binding-packages/com.velocitypowered.api.proxy.player.generated.js').TabListEntry_BuilderStatics;
  readonly "com.velocitypowered.api.proxy.ProxyServer": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').ProxyServerStatics;
  readonly "com.velocitypowered.api.proxy.server.PingOptions": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').PingOptionsStatics;
  readonly "com.velocitypowered.api.proxy.server.PingOptions$Builder": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').PingOptions_BuilderStatics;
  readonly "com.velocitypowered.api.proxy.server.QueryResponse": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').QueryResponseStatics;
  readonly "com.velocitypowered.api.proxy.server.QueryResponse$Builder": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').QueryResponse_BuilderStatics;
  readonly "com.velocitypowered.api.proxy.server.QueryResponse$PluginInformation": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').QueryResponse_PluginInformationStatics;
  readonly "com.velocitypowered.api.proxy.server.RegisteredServer": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').RegisteredServerStatics;
  readonly "com.velocitypowered.api.proxy.server.ServerInfo": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').ServerInfoStatics;
  readonly "com.velocitypowered.api.proxy.server.ServerPing": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').ServerPingStatics;
  readonly "com.velocitypowered.api.proxy.server.ServerPing$Builder": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').ServerPing_BuilderStatics;
  readonly "com.velocitypowered.api.proxy.server.ServerPing$Players": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').ServerPing_PlayersStatics;
  readonly "com.velocitypowered.api.proxy.server.ServerPing$SamplePlayer": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').ServerPing_SamplePlayerStatics;
  readonly "com.velocitypowered.api.proxy.server.ServerPing$Version": import('./binding-packages/com.velocitypowered.api.proxy.server.generated.js').ServerPing_VersionStatics;
  readonly "com.velocitypowered.api.proxy.ServerConnection": import('./binding-packages/com.velocitypowered.api.proxy.generated.js').ServerConnectionStatics;
  readonly "com.velocitypowered.api.scheduler.ScheduledTask": import('./binding-packages/com.velocitypowered.api.scheduler.generated.js').ScheduledTaskStatics;
  readonly "com.velocitypowered.api.scheduler.Scheduler": import('./binding-packages/com.velocitypowered.api.scheduler.generated.js').SchedulerStatics;
  readonly "com.velocitypowered.api.scheduler.Scheduler$TaskBuilder": import('./binding-packages/com.velocitypowered.api.scheduler.generated.js').Scheduler_TaskBuilderStatics;
  readonly "com.velocitypowered.api.scheduler.TaskStatus": import('./binding-packages/com.velocitypowered.api.scheduler.generated.js').TaskStatusStatics;
  readonly "com.velocitypowered.api.util.Favicon": import('./binding-packages/com.velocitypowered.api.util.generated.js').FaviconStatics;
  readonly "com.velocitypowered.api.util.GameProfile": import('./binding-packages/com.velocitypowered.api.util.generated.js').GameProfileStatics;
  readonly "com.velocitypowered.api.util.GameProfile$Property": import('./binding-packages/com.velocitypowered.api.util.generated.js').GameProfile_PropertyStatics;
  readonly "com.velocitypowered.api.util.MessagePosition": import('./binding-packages/com.velocitypowered.api.util.generated.js').MessagePositionStatics;
  readonly "com.velocitypowered.api.util.ModInfo": import('./binding-packages/com.velocitypowered.api.util.generated.js').ModInfoStatics;
  readonly "com.velocitypowered.api.util.ModInfo$Mod": import('./binding-packages/com.velocitypowered.api.util.generated.js').ModInfo_ModStatics;
  readonly "com.velocitypowered.api.util.Ordered": import('./binding-packages/com.velocitypowered.api.util.generated.js').OrderedStatics;
  readonly "com.velocitypowered.api.util.ProxyVersion": import('./binding-packages/com.velocitypowered.api.util.generated.js').ProxyVersionStatics;
  readonly "com.velocitypowered.api.util.ServerLink": import('./binding-packages/com.velocitypowered.api.util.generated.js').ServerLinkStatics;
  readonly "com.velocitypowered.api.util.ServerLink$Type": import('./binding-packages/com.velocitypowered.api.util.generated.js').ServerLink_TypeStatics;
  readonly "com.velocitypowered.api.util.UuidUtils": import('./binding-packages/com.velocitypowered.api.util.generated.js').UuidUtilsStatics;
  readonly "net.kyori.adventure.Adventure": import('./binding-packages/net.kyori.adventure.generated.js').AdventureStatics;
  readonly "net.kyori.adventure.audience.Audience": import('./binding-packages/net.kyori.adventure.audience.generated.js').AudienceStatics;
  readonly "net.kyori.adventure.audience.Audiences": import('./binding-packages/net.kyori.adventure.audience.generated.js').AudiencesStatics;
  readonly "net.kyori.adventure.audience.ForwardingAudience": import('./binding-packages/net.kyori.adventure.audience.generated.js').ForwardingAudienceStatics;
  readonly "net.kyori.adventure.audience.ForwardingAudience$Single": import('./binding-packages/net.kyori.adventure.audience.generated.js').ForwardingAudience_SingleStatics;
  readonly "net.kyori.adventure.audience.MessageType": import('./binding-packages/net.kyori.adventure.audience.generated.js').MessageTypeStatics;
  readonly "net.kyori.adventure.bossbar.BossBar": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBarStatics;
  readonly "net.kyori.adventure.bossbar.BossBar$Color": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBar_ColorStatics;
  readonly "net.kyori.adventure.bossbar.BossBar$Flag": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBar_FlagStatics;
  readonly "net.kyori.adventure.bossbar.BossBar$Listener": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBar_ListenerStatics;
  readonly "net.kyori.adventure.bossbar.BossBar$Overlay": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBar_OverlayStatics;
  readonly "net.kyori.adventure.bossbar.BossBarImplementation": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBarImplementationStatics;
  readonly "net.kyori.adventure.bossbar.BossBarImplementation$Provider": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBarImplementation_ProviderStatics;
  readonly "net.kyori.adventure.bossbar.BossBarViewer": import('./binding-packages/net.kyori.adventure.bossbar.generated.js').BossBarViewerStatics;
  readonly "net.kyori.adventure.builder.AbstractBuilder": import('./binding-packages/net.kyori.adventure.builder.generated.js').AbstractBuilderStatics;
  readonly "net.kyori.adventure.chat.ChatType": import('./binding-packages/net.kyori.adventure.chat.generated.js').ChatTypeStatics;
  readonly "net.kyori.adventure.chat.ChatType$Bound": import('./binding-packages/net.kyori.adventure.chat.generated.js').ChatType_BoundStatics;
  readonly "net.kyori.adventure.chat.SignedMessage": import('./binding-packages/net.kyori.adventure.chat.generated.js').SignedMessage_2Statics;
  readonly "net.kyori.adventure.chat.SignedMessage$Signature": import('./binding-packages/net.kyori.adventure.chat.generated.js').SignedMessage_SignatureStatics;
  readonly "net.kyori.adventure.dialog.DialogLike": import('./binding-packages/net.kyori.adventure.dialog.generated.js').DialogLikeStatics;
  readonly "net.kyori.adventure.identity.Identified": import('./binding-packages/net.kyori.adventure.identity.generated.js').IdentifiedStatics;
  readonly "net.kyori.adventure.identity.Identity": import('./binding-packages/net.kyori.adventure.identity.generated.js').IdentityStatics;
  readonly "net.kyori.adventure.internal.Internals": import('./binding-packages/net.kyori.adventure.internal.generated.js').InternalsStatics;
  readonly "net.kyori.adventure.internal.properties.AdventureProperties": import('./binding-packages/net.kyori.adventure.internal.properties.generated.js').AdventurePropertiesStatics;
  readonly "net.kyori.adventure.internal.properties.AdventureProperties$DefaultOverrideProvider": import('./binding-packages/net.kyori.adventure.internal.properties.generated.js').AdventureProperties_DefaultOverrideProviderStatics;
  readonly "net.kyori.adventure.internal.properties.AdventureProperties$Property": import('./binding-packages/net.kyori.adventure.internal.properties.generated.js').AdventureProperties_PropertyStatics;
  readonly "net.kyori.adventure.inventory.Book": import('./binding-packages/net.kyori.adventure.inventory.generated.js').BookStatics;
  readonly "net.kyori.adventure.inventory.Book$Builder": import('./binding-packages/net.kyori.adventure.inventory.generated.js').Book_BuilderStatics;
  readonly "net.kyori.adventure.nbt.api.BinaryTagHolder": import('./binding-packages/net.kyori.adventure.nbt.api.generated.js').BinaryTagHolderStatics;
  readonly "net.kyori.adventure.permission.PermissionChecker": import('./binding-packages/net.kyori.adventure.permission.generated.js').PermissionCheckerStatics;
  readonly "net.kyori.adventure.pointer.Pointer": import('./binding-packages/net.kyori.adventure.pointer.generated.js').PointerStatics;
  readonly "net.kyori.adventure.pointer.Pointered": import('./binding-packages/net.kyori.adventure.pointer.generated.js').PointeredStatics;
  readonly "net.kyori.adventure.pointer.Pointers": import('./binding-packages/net.kyori.adventure.pointer.generated.js').PointersStatics;
  readonly "net.kyori.adventure.pointer.Pointers$Builder": import('./binding-packages/net.kyori.adventure.pointer.generated.js').Pointers_BuilderStatics;
  readonly "net.kyori.adventure.pointer.PointersSupplier": import('./binding-packages/net.kyori.adventure.pointer.generated.js').PointersSupplierStatics;
  readonly "net.kyori.adventure.pointer.PointersSupplier$Builder": import('./binding-packages/net.kyori.adventure.pointer.generated.js').PointersSupplier_BuilderStatics;
  readonly "net.kyori.adventure.resource.ResourcePackCallback": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackCallbackStatics;
  readonly "net.kyori.adventure.resource.ResourcePackInfo": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackInfo_2Statics;
  readonly "net.kyori.adventure.resource.ResourcePackInfo$Builder": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackInfo_Builder_2Statics;
  readonly "net.kyori.adventure.resource.ResourcePackInfoLike": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackInfoLikeStatics;
  readonly "net.kyori.adventure.resource.ResourcePackRequest": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackRequestStatics;
  readonly "net.kyori.adventure.resource.ResourcePackRequest$Builder": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackRequest_BuilderStatics;
  readonly "net.kyori.adventure.resource.ResourcePackRequestLike": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackRequestLikeStatics;
  readonly "net.kyori.adventure.resource.ResourcePackStatus": import('./binding-packages/net.kyori.adventure.resource.generated.js').ResourcePackStatusStatics;
  readonly "net.kyori.adventure.sound.Sound": import('./binding-packages/net.kyori.adventure.sound.generated.js').SoundStatics;
  readonly "net.kyori.adventure.sound.Sound$Builder": import('./binding-packages/net.kyori.adventure.sound.generated.js').Sound_BuilderStatics;
  readonly "net.kyori.adventure.sound.Sound$Emitter": import('./binding-packages/net.kyori.adventure.sound.generated.js').Sound_EmitterStatics;
  readonly "net.kyori.adventure.sound.Sound$Source": import('./binding-packages/net.kyori.adventure.sound.generated.js').Sound_SourceStatics;
  readonly "net.kyori.adventure.sound.Sound$Source$Provider": import('./binding-packages/net.kyori.adventure.sound.generated.js').Sound_Source_ProviderStatics;
  readonly "net.kyori.adventure.sound.Sound$Type": import('./binding-packages/net.kyori.adventure.sound.generated.js').Sound_TypeStatics;
  readonly "net.kyori.adventure.sound.SoundStop": import('./binding-packages/net.kyori.adventure.sound.generated.js').SoundStopStatics;
  readonly "net.kyori.adventure.text.AbstractComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').AbstractComponentStatics;
  readonly "net.kyori.adventure.text.BlockNBTComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponentStatics;
  readonly "net.kyori.adventure.text.BlockNBTComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponent_BuilderStatics;
  readonly "net.kyori.adventure.text.BlockNBTComponent$LocalPos": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponent_LocalPosStatics;
  readonly "net.kyori.adventure.text.BlockNBTComponent$Pos": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponent_PosStatics;
  readonly "net.kyori.adventure.text.BlockNBTComponent$WorldPos": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponent_WorldPosStatics;
  readonly "net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponent_WorldPos_CoordinateStatics;
  readonly "net.kyori.adventure.text.BlockNBTComponent$WorldPos$Coordinate$Type": import('./binding-packages/net.kyori.adventure.text.generated.js').BlockNBTComponent_WorldPos_Coordinate_TypeStatics;
  readonly "net.kyori.adventure.text.BuildableComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').BuildableComponentStatics;
  readonly "net.kyori.adventure.text.Component": import('./binding-packages/net.kyori.adventure.text.generated.js').ComponentStatics;
  readonly "net.kyori.adventure.text.ComponentApplicable": import('./binding-packages/net.kyori.adventure.text.generated.js').ComponentApplicableStatics;
  readonly "net.kyori.adventure.text.ComponentBuilder": import('./binding-packages/net.kyori.adventure.text.generated.js').ComponentBuilderStatics;
  readonly "net.kyori.adventure.text.ComponentBuilderApplicable": import('./binding-packages/net.kyori.adventure.text.generated.js').ComponentBuilderApplicableStatics;
  readonly "net.kyori.adventure.text.ComponentIteratorFlag": import('./binding-packages/net.kyori.adventure.text.generated.js').ComponentIteratorFlagStatics;
  readonly "net.kyori.adventure.text.ComponentIteratorType": import('./binding-packages/net.kyori.adventure.text.generated.js').ComponentIteratorTypeStatics;
  readonly "net.kyori.adventure.text.ComponentLike": import('./binding-packages/net.kyori.adventure.text.generated.js').ComponentLikeStatics;
  readonly "net.kyori.adventure.text.EntityNBTComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').EntityNBTComponentStatics;
  readonly "net.kyori.adventure.text.EntityNBTComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').EntityNBTComponent_BuilderStatics;
  readonly "net.kyori.adventure.text.event.ClickCallback": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickCallbackStatics;
  readonly "net.kyori.adventure.text.event.ClickCallback$Options": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickCallback_OptionsStatics;
  readonly "net.kyori.adventure.text.event.ClickCallback$Options$Builder": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickCallback_Options_BuilderStatics;
  readonly "net.kyori.adventure.text.event.ClickCallback$Provider": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickCallback_ProviderStatics;
  readonly "net.kyori.adventure.text.event.ClickEvent": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEventStatics;
  readonly "net.kyori.adventure.text.event.ClickEvent$Action": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEvent_ActionStatics;
  readonly "net.kyori.adventure.text.event.ClickEvent$Payload": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEvent_PayloadStatics;
  readonly "net.kyori.adventure.text.event.ClickEvent$Payload$Custom": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEvent_Payload_CustomStatics;
  readonly "net.kyori.adventure.text.event.ClickEvent$Payload$Dialog": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEvent_Payload_DialogStatics;
  readonly "net.kyori.adventure.text.event.ClickEvent$Payload$Int": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEvent_Payload_IntStatics;
  readonly "net.kyori.adventure.text.event.ClickEvent$Payload$Text": import('./binding-packages/net.kyori.adventure.text.event.generated.js').ClickEvent_Payload_TextStatics;
  readonly "net.kyori.adventure.text.event.DataComponentValue": import('./binding-packages/net.kyori.adventure.text.event.generated.js').DataComponentValueStatics;
  readonly "net.kyori.adventure.text.event.DataComponentValue$Removed": import('./binding-packages/net.kyori.adventure.text.event.generated.js').DataComponentValue_RemovedStatics;
  readonly "net.kyori.adventure.text.event.DataComponentValue$TagSerializable": import('./binding-packages/net.kyori.adventure.text.event.generated.js').DataComponentValue_TagSerializableStatics;
  readonly "net.kyori.adventure.text.event.DataComponentValueConverterRegistry": import('./binding-packages/net.kyori.adventure.text.event.generated.js').DataComponentValueConverterRegistryStatics;
  readonly "net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Conversion": import('./binding-packages/net.kyori.adventure.text.event.generated.js').DataComponentValueConverterRegistry_ConversionStatics;
  readonly "net.kyori.adventure.text.event.DataComponentValueConverterRegistry$Provider": import('./binding-packages/net.kyori.adventure.text.event.generated.js').DataComponentValueConverterRegistry_ProviderStatics;
  readonly "net.kyori.adventure.text.event.HoverEvent": import('./binding-packages/net.kyori.adventure.text.event.generated.js').HoverEventStatics;
  readonly "net.kyori.adventure.text.event.HoverEvent$Action": import('./binding-packages/net.kyori.adventure.text.event.generated.js').HoverEvent_ActionStatics;
  readonly "net.kyori.adventure.text.event.HoverEvent$ShowEntity": import('./binding-packages/net.kyori.adventure.text.event.generated.js').HoverEvent_ShowEntityStatics;
  readonly "net.kyori.adventure.text.event.HoverEvent$ShowItem": import('./binding-packages/net.kyori.adventure.text.event.generated.js').HoverEvent_ShowItemStatics;
  readonly "net.kyori.adventure.text.event.HoverEventSource": import('./binding-packages/net.kyori.adventure.text.event.generated.js').HoverEventSourceStatics;
  readonly "net.kyori.adventure.text.flattener.ComponentFlattener": import('./binding-packages/net.kyori.adventure.text.flattener.generated.js').ComponentFlattenerStatics;
  readonly "net.kyori.adventure.text.flattener.ComponentFlattener$Builder": import('./binding-packages/net.kyori.adventure.text.flattener.generated.js').ComponentFlattener_BuilderStatics;
  readonly "net.kyori.adventure.text.flattener.FlattenerListener": import('./binding-packages/net.kyori.adventure.text.flattener.generated.js').FlattenerListenerStatics;
  readonly "net.kyori.adventure.text.format.MutableStyleSetter": import('./binding-packages/net.kyori.adventure.text.format.generated.js').MutableStyleSetterStatics;
  readonly "net.kyori.adventure.text.format.NamedTextColor": import('./binding-packages/net.kyori.adventure.text.format.generated.js').NamedTextColorStatics;
  readonly "net.kyori.adventure.text.format.ShadowColor": import('./binding-packages/net.kyori.adventure.text.format.generated.js').ShadowColorStatics;
  readonly "net.kyori.adventure.text.format.Style": import('./binding-packages/net.kyori.adventure.text.format.generated.js').StyleStatics;
  readonly "net.kyori.adventure.text.format.Style$Builder": import('./binding-packages/net.kyori.adventure.text.format.generated.js').Style_BuilderStatics;
  readonly "net.kyori.adventure.text.format.Style$Merge": import('./binding-packages/net.kyori.adventure.text.format.generated.js').Style_MergeStatics;
  readonly "net.kyori.adventure.text.format.Style$Merge$Strategy": import('./binding-packages/net.kyori.adventure.text.format.generated.js').Style_Merge_StrategyStatics;
  readonly "net.kyori.adventure.text.format.StyleBuilderApplicable": import('./binding-packages/net.kyori.adventure.text.format.generated.js').StyleBuilderApplicableStatics;
  readonly "net.kyori.adventure.text.format.StyleGetter": import('./binding-packages/net.kyori.adventure.text.format.generated.js').StyleGetterStatics;
  readonly "net.kyori.adventure.text.format.StyleSetter": import('./binding-packages/net.kyori.adventure.text.format.generated.js').StyleSetterStatics;
  readonly "net.kyori.adventure.text.format.TextColor": import('./binding-packages/net.kyori.adventure.text.format.generated.js').TextColorStatics;
  readonly "net.kyori.adventure.text.format.TextDecoration": import('./binding-packages/net.kyori.adventure.text.format.generated.js').TextDecorationStatics;
  readonly "net.kyori.adventure.text.format.TextDecoration$State": import('./binding-packages/net.kyori.adventure.text.format.generated.js').TextDecoration_StateStatics;
  readonly "net.kyori.adventure.text.format.TextDecorationAndState": import('./binding-packages/net.kyori.adventure.text.format.generated.js').TextDecorationAndStateStatics;
  readonly "net.kyori.adventure.text.format.TextFormat": import('./binding-packages/net.kyori.adventure.text.format.generated.js').TextFormatStatics;
  readonly "net.kyori.adventure.text.JoinConfiguration": import('./binding-packages/net.kyori.adventure.text.generated.js').JoinConfigurationStatics;
  readonly "net.kyori.adventure.text.JoinConfiguration$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').JoinConfiguration_BuilderStatics;
  readonly "net.kyori.adventure.text.KeybindComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').KeybindComponentStatics;
  readonly "net.kyori.adventure.text.KeybindComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').KeybindComponent_BuilderStatics;
  readonly "net.kyori.adventure.text.KeybindComponent$KeybindLike": import('./binding-packages/net.kyori.adventure.text.generated.js').KeybindComponent_KeybindLikeStatics;
  readonly "net.kyori.adventure.text.LinearComponents": import('./binding-packages/net.kyori.adventure.text.generated.js').LinearComponentsStatics;
  readonly "net.kyori.adventure.text.NBTComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').NBTComponentStatics;
  readonly "net.kyori.adventure.text.NBTComponentBuilder": import('./binding-packages/net.kyori.adventure.text.generated.js').NBTComponentBuilderStatics;
  readonly "net.kyori.adventure.text.object.ObjectContents": import('./binding-packages/net.kyori.adventure.text.object.generated.js').ObjectContentsStatics;
  readonly "net.kyori.adventure.text.object.PlayerHeadObjectContents": import('./binding-packages/net.kyori.adventure.text.object.generated.js').PlayerHeadObjectContentsStatics;
  readonly "net.kyori.adventure.text.object.PlayerHeadObjectContents$Builder": import('./binding-packages/net.kyori.adventure.text.object.generated.js').PlayerHeadObjectContents_BuilderStatics;
  readonly "net.kyori.adventure.text.object.PlayerHeadObjectContents$ProfileProperty": import('./binding-packages/net.kyori.adventure.text.object.generated.js').PlayerHeadObjectContents_ProfilePropertyStatics;
  readonly "net.kyori.adventure.text.object.PlayerHeadObjectContents$SkinSource": import('./binding-packages/net.kyori.adventure.text.object.generated.js').PlayerHeadObjectContents_SkinSourceStatics;
  readonly "net.kyori.adventure.text.object.SpriteObjectContents": import('./binding-packages/net.kyori.adventure.text.object.generated.js').SpriteObjectContentsStatics;
  readonly "net.kyori.adventure.text.ObjectComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').ObjectComponentStatics;
  readonly "net.kyori.adventure.text.ObjectComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').ObjectComponent_BuilderStatics;
  readonly "net.kyori.adventure.text.PatternReplacementResult": import('./binding-packages/net.kyori.adventure.text.generated.js').PatternReplacementResultStatics;
  readonly "net.kyori.adventure.text.renderer.AbstractComponentRenderer": import('./binding-packages/net.kyori.adventure.text.renderer.generated.js').AbstractComponentRendererStatics;
  readonly "net.kyori.adventure.text.renderer.ComponentRenderer": import('./binding-packages/net.kyori.adventure.text.renderer.generated.js').ComponentRendererStatics;
  readonly "net.kyori.adventure.text.renderer.TranslatableComponentRenderer": import('./binding-packages/net.kyori.adventure.text.renderer.generated.js').TranslatableComponentRendererStatics;
  readonly "net.kyori.adventure.text.ScopedComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').ScopedComponentStatics;
  readonly "net.kyori.adventure.text.ScoreComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').ScoreComponentStatics;
  readonly "net.kyori.adventure.text.ScoreComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').ScoreComponent_BuilderStatics;
  readonly "net.kyori.adventure.text.SelectorComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').SelectorComponentStatics;
  readonly "net.kyori.adventure.text.SelectorComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').SelectorComponent_BuilderStatics;
  readonly "net.kyori.adventure.text.serializer.ComponentDecoder": import('./binding-packages/net.kyori.adventure.text.serializer.generated.js').ComponentDecoderStatics;
  readonly "net.kyori.adventure.text.serializer.ComponentEncoder": import('./binding-packages/net.kyori.adventure.text.serializer.generated.js').ComponentEncoderStatics;
  readonly "net.kyori.adventure.text.serializer.ComponentSerializer": import('./binding-packages/net.kyori.adventure.text.serializer.generated.js').ComponentSerializerStatics;
  readonly "net.kyori.adventure.text.StorageNBTComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').StorageNBTComponentStatics;
  readonly "net.kyori.adventure.text.StorageNBTComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').StorageNBTComponent_BuilderStatics;
  readonly "net.kyori.adventure.text.TextComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').TextComponentStatics;
  readonly "net.kyori.adventure.text.TextComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').TextComponent_BuilderStatics;
  readonly "net.kyori.adventure.text.TextReplacementConfig": import('./binding-packages/net.kyori.adventure.text.generated.js').TextReplacementConfigStatics;
  readonly "net.kyori.adventure.text.TextReplacementConfig$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').TextReplacementConfig_BuilderStatics;
  readonly "net.kyori.adventure.text.TextReplacementConfig$Condition": import('./binding-packages/net.kyori.adventure.text.generated.js').TextReplacementConfig_ConditionStatics;
  readonly "net.kyori.adventure.text.TranslatableComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').TranslatableComponentStatics;
  readonly "net.kyori.adventure.text.TranslatableComponent$Builder": import('./binding-packages/net.kyori.adventure.text.generated.js').TranslatableComponent_BuilderStatics;
  readonly "net.kyori.adventure.text.TranslationArgument": import('./binding-packages/net.kyori.adventure.text.generated.js').TranslationArgumentStatics;
  readonly "net.kyori.adventure.text.TranslationArgumentLike": import('./binding-packages/net.kyori.adventure.text.generated.js').TranslationArgumentLikeStatics;
  readonly "net.kyori.adventure.text.VirtualComponent": import('./binding-packages/net.kyori.adventure.text.generated.js').VirtualComponentStatics;
  readonly "net.kyori.adventure.text.VirtualComponentRenderer": import('./binding-packages/net.kyori.adventure.text.generated.js').VirtualComponentRendererStatics;
  readonly "net.kyori.adventure.title.Title": import('./binding-packages/net.kyori.adventure.title.generated.js').TitleStatics;
  readonly "net.kyori.adventure.title.Title$Times": import('./binding-packages/net.kyori.adventure.title.generated.js').Title_TimesStatics;
  readonly "net.kyori.adventure.title.TitlePart": import('./binding-packages/net.kyori.adventure.title.generated.js').TitlePartStatics;
  readonly "net.kyori.adventure.translation.AbstractTranslationStore": import('./binding-packages/net.kyori.adventure.translation.generated.js').AbstractTranslationStoreStatics;
  readonly "net.kyori.adventure.translation.AbstractTranslationStore$StringBased": import('./binding-packages/net.kyori.adventure.translation.generated.js').AbstractTranslationStore_StringBasedStatics;
  readonly "net.kyori.adventure.translation.GlobalTranslator": import('./binding-packages/net.kyori.adventure.translation.generated.js').GlobalTranslatorStatics;
  readonly "net.kyori.adventure.translation.Translatable": import('./binding-packages/net.kyori.adventure.translation.generated.js').TranslatableStatics;
  readonly "net.kyori.adventure.translation.TranslationRegistry": import('./binding-packages/net.kyori.adventure.translation.generated.js').TranslationRegistryStatics;
  readonly "net.kyori.adventure.translation.TranslationStore": import('./binding-packages/net.kyori.adventure.translation.generated.js').TranslationStoreStatics;
  readonly "net.kyori.adventure.translation.TranslationStore$StringBased": import('./binding-packages/net.kyori.adventure.translation.generated.js').TranslationStore_StringBasedStatics;
  readonly "net.kyori.adventure.translation.Translator": import('./binding-packages/net.kyori.adventure.translation.generated.js').TranslatorStatics;
  readonly "net.kyori.adventure.util.ARGBLike": import('./binding-packages/net.kyori.adventure.util.generated.js').ARGBLikeStatics;
  readonly "net.kyori.adventure.util.Buildable": import('./binding-packages/net.kyori.adventure.util.generated.js').BuildableStatics;
  readonly "net.kyori.adventure.util.Buildable$Builder": import('./binding-packages/net.kyori.adventure.util.generated.js').Buildable_BuilderStatics;
  readonly "net.kyori.adventure.util.Codec": import('./binding-packages/net.kyori.adventure.util.generated.js').CodecStatics;
  readonly "net.kyori.adventure.util.Codec$Decoder": import('./binding-packages/net.kyori.adventure.util.generated.js').Codec_DecoderStatics;
  readonly "net.kyori.adventure.util.Codec$Encoder": import('./binding-packages/net.kyori.adventure.util.generated.js').Codec_EncoderStatics;
  readonly "net.kyori.adventure.util.ComponentMessageThrowable": import('./binding-packages/net.kyori.adventure.util.generated.js').ComponentMessageThrowableStatics;
  readonly "net.kyori.adventure.util.ForwardingIterator": import('./binding-packages/net.kyori.adventure.util.generated.js').ForwardingIteratorStatics;
  readonly "net.kyori.adventure.util.HSVLike": import('./binding-packages/net.kyori.adventure.util.generated.js').HSVLikeStatics;
  readonly "net.kyori.adventure.util.Index": import('./binding-packages/net.kyori.adventure.util.generated.js').IndexStatics;
  readonly "net.kyori.adventure.util.InheritanceAwareMap": import('./binding-packages/net.kyori.adventure.util.generated.js').InheritanceAwareMapStatics;
  readonly "net.kyori.adventure.util.InheritanceAwareMap$Builder": import('./binding-packages/net.kyori.adventure.util.generated.js').InheritanceAwareMap_BuilderStatics;
  readonly "net.kyori.adventure.util.IntFunction2": import('./binding-packages/net.kyori.adventure.util.generated.js').IntFunction2Statics;
  readonly "net.kyori.adventure.util.Listenable": import('./binding-packages/net.kyori.adventure.util.generated.js').ListenableStatics;
  readonly "net.kyori.adventure.util.MonkeyBars": import('./binding-packages/net.kyori.adventure.util.generated.js').MonkeyBarsStatics;
  readonly "net.kyori.adventure.util.Nag": import('./binding-packages/net.kyori.adventure.util.generated.js').NagStatics;
  readonly "net.kyori.adventure.util.PlatformAPI": import('./binding-packages/net.kyori.adventure.util.generated.js').PlatformAPIStatics;
  readonly "net.kyori.adventure.util.RGBLike": import('./binding-packages/net.kyori.adventure.util.generated.js').RGBLikeStatics;
  readonly "net.kyori.adventure.util.Services": import('./binding-packages/net.kyori.adventure.util.generated.js').ServicesStatics;
  readonly "net.kyori.adventure.util.Services$Fallback": import('./binding-packages/net.kyori.adventure.util.generated.js').Services_FallbackStatics;
  readonly "net.kyori.adventure.util.ShadyPines": import('./binding-packages/net.kyori.adventure.util.generated.js').ShadyPinesStatics;
  readonly "net.kyori.adventure.util.Ticks": import('./binding-packages/net.kyori.adventure.util.generated.js').TicksStatics;
  readonly "net.kyori.adventure.util.TriState": import('./binding-packages/net.kyori.adventure.util.generated.js').TriStateStatics;
  readonly "net.kyori.adventure.util.UTF8ResourceBundleControl": import('./binding-packages/net.kyori.adventure.util.generated.js').UTF8ResourceBundleControlStatics;
}
export interface JavaBridge { resolve<Name extends keyof GeneratedJavaTypeMap>(descriptor: (typeof JAVA_TYPES)[Name]): GeneratedJavaStaticsMap[Name] }
export type * from './java-support.generated.js';
export type { BrigadierCommand, BrigadierCommandStatics, Command, CommandStatics, CommandInvocation, CommandInvocationStatics, CommandManager, CommandManagerStatics, CommandMeta, CommandMetaStatics, CommandMeta_Builder, CommandMeta_BuilderStatics, CommandResult, CommandResultStatics, CommandSource, CommandSourceStatics, InvocableCommand, InvocableCommandStatics, RawCommand, RawCommandStatics, RawCommand_Invocation, RawCommand_InvocationStatics, SimpleCommand, SimpleCommandStatics, SimpleCommand_Invocation, SimpleCommand_InvocationStatics, VelocityBrigadierMessage, VelocityBrigadierMessageStatics } from './binding-packages/com.velocitypowered.api.command.generated.js';
export type { AwaitingEventExecutor, AwaitingEventExecutorStatics, Continuation, ContinuationStatics, EventHandler, EventHandlerStatics, EventManager, EventManagerStatics, EventTask, EventTaskStatics, PostOrder, PostOrderStatics, ResultedEvent, ResultedEventStatics, ResultedEvent_ComponentResult, ResultedEvent_ComponentResultStatics, ResultedEvent_GenericResult, ResultedEvent_GenericResultStatics, ResultedEvent_Result, ResultedEvent_ResultStatics, Subscribe, SubscribeStatics } from './binding-packages/com.velocitypowered.api.event.generated.js';
export type { AwaitingEvent, AwaitingEventStatics } from './binding-packages/com.velocitypowered.api.event.annotation.generated.js';
export type { CommandExecuteEvent, CommandExecuteEventStatics, CommandExecuteEvent_CommandResult, CommandExecuteEvent_CommandResultStatics, CommandExecuteEvent_InvocationInfo, CommandExecuteEvent_InvocationInfoStatics, CommandExecuteEvent_SignedState, CommandExecuteEvent_SignedStateStatics, CommandExecuteEvent_Source, CommandExecuteEvent_SourceStatics, PlayerAvailableCommandsEvent, PlayerAvailableCommandsEventStatics, PostCommandInvocationEvent, PostCommandInvocationEventStatics } from './binding-packages/com.velocitypowered.api.event.command.generated.js';
export type { ConnectionHandshakeEvent, ConnectionHandshakeEventStatics, DisconnectEvent, DisconnectEventStatics, DisconnectEvent_LoginStatus, DisconnectEvent_LoginStatusStatics, LoginEvent, LoginEventStatics, PluginMessageEvent, PluginMessageEventStatics, PluginMessageEvent_ForwardResult, PluginMessageEvent_ForwardResultStatics, PostLoginEvent, PostLoginEventStatics, PreLoginEvent, PreLoginEventStatics, PreLoginEvent_PreLoginComponentResult, PreLoginEvent_PreLoginComponentResultStatics, PreTransferEvent, PreTransferEventStatics, PreTransferEvent_TransferResult, PreTransferEvent_TransferResultStatics } from './binding-packages/com.velocitypowered.api.event.connection.generated.js';
export type { PermissionsSetupEvent, PermissionsSetupEventStatics } from './binding-packages/com.velocitypowered.api.event.permission.generated.js';
export type { CookieReceiveEvent, CookieReceiveEventStatics, CookieReceiveEvent_ForwardResult, CookieReceiveEvent_ForwardResultStatics, CookieRequestEvent, CookieRequestEventStatics, CookieRequestEvent_ForwardResult, CookieRequestEvent_ForwardResultStatics, CookieStoreEvent, CookieStoreEventStatics, CookieStoreEvent_ForwardResult, CookieStoreEvent_ForwardResultStatics, GameProfileRequestEvent, GameProfileRequestEventStatics, KickedFromServerEvent, KickedFromServerEventStatics, KickedFromServerEvent_DisconnectPlayer, KickedFromServerEvent_DisconnectPlayerStatics, KickedFromServerEvent_Notify, KickedFromServerEvent_NotifyStatics, KickedFromServerEvent_RedirectPlayer, KickedFromServerEvent_RedirectPlayerStatics, KickedFromServerEvent_ServerKickResult, KickedFromServerEvent_ServerKickResultStatics, PlayerChannelRegisterEvent, PlayerChannelRegisterEventStatics, PlayerChannelUnregisterEvent, PlayerChannelUnregisterEventStatics, PlayerChatEvent, PlayerChatEventStatics, PlayerChatEvent_ChatResult, PlayerChatEvent_ChatResultStatics, PlayerChooseInitialServerEvent, PlayerChooseInitialServerEventStatics, PlayerClientBrandEvent, PlayerClientBrandEventStatics, PlayerModInfoEvent, PlayerModInfoEventStatics, PlayerResourcePackStatusEvent, PlayerResourcePackStatusEventStatics, PlayerResourcePackStatusEvent_Status, PlayerResourcePackStatusEvent_StatusStatics, PlayerSettingsChangedEvent, PlayerSettingsChangedEventStatics, ServerConnectedEvent, ServerConnectedEventStatics, ServerLoginPluginMessageEvent, ServerLoginPluginMessageEventStatics, ServerLoginPluginMessageEvent_ResponseResult, ServerLoginPluginMessageEvent_ResponseResultStatics, ServerPostConnectEvent, ServerPostConnectEventStatics, ServerPreConnectEvent, ServerPreConnectEventStatics, ServerPreConnectEvent_ServerResult, ServerPreConnectEvent_ServerResultStatics, ServerResourcePackRemoveEvent, ServerResourcePackRemoveEventStatics, ServerResourcePackSendEvent, ServerResourcePackSendEventStatics, TabCompleteEvent, TabCompleteEventStatics } from './binding-packages/com.velocitypowered.api.event.player.generated.js';
export type { PlayerConfigurationEvent, PlayerConfigurationEventStatics, PlayerEnterConfigurationEvent, PlayerEnterConfigurationEventStatics, PlayerEnteredConfigurationEvent, PlayerEnteredConfigurationEventStatics, PlayerFinishConfigurationEvent, PlayerFinishConfigurationEventStatics, PlayerFinishedConfigurationEvent, PlayerFinishedConfigurationEventStatics } from './binding-packages/com.velocitypowered.api.event.player.configuration.generated.js';
export type { ListenerBoundEvent, ListenerBoundEventStatics, ListenerCloseEvent, ListenerCloseEventStatics, ProxyInitializeEvent, ProxyInitializeEventStatics, ProxyPingEvent, ProxyPingEventStatics, ProxyPreShutdownEvent, ProxyPreShutdownEventStatics, ProxyReloadEvent, ProxyReloadEventStatics, ProxyShutdownEvent, ProxyShutdownEventStatics } from './binding-packages/com.velocitypowered.api.event.proxy.generated.js';
export type { ServerRegisteredEvent, ServerRegisteredEventStatics, ServerUnregisteredEvent, ServerUnregisteredEventStatics } from './binding-packages/com.velocitypowered.api.event.proxy.server.generated.js';
export type { ProxyQueryEvent, ProxyQueryEventStatics, ProxyQueryEvent_QueryType, ProxyQueryEvent_QueryTypeStatics } from './binding-packages/com.velocitypowered.api.event.query.generated.js';
export type { HandshakeIntent, HandshakeIntentStatics, ListenerType, ListenerTypeStatics, ProtocolState, ProtocolStateStatics, ProtocolVersion, ProtocolVersionStatics } from './binding-packages/com.velocitypowered.api.network.generated.js';
export type { PermissionFunction, PermissionFunctionStatics, PermissionProvider, PermissionProviderStatics, PermissionSubject, PermissionSubjectStatics, Tristate, TristateStatics } from './binding-packages/com.velocitypowered.api.permission.generated.js';
export type { Dependency, DependencyStatics, InvalidPluginException, InvalidPluginExceptionStatics, Plugin, PluginStatics, PluginContainer, PluginContainerStatics, PluginDescription, PluginDescriptionStatics, PluginManager, PluginManagerStatics } from './binding-packages/com.velocitypowered.api.plugin.generated.js';
export type { DataDirectory, DataDirectoryStatics } from './binding-packages/com.velocitypowered.api.plugin.annotation.generated.js';
export type { PluginAnnotationProcessor, PluginAnnotationProcessorStatics, SerializedPluginDescription, SerializedPluginDescriptionStatics, SerializedPluginDescription_Dependency, SerializedPluginDescription_DependencyStatics } from './binding-packages/com.velocitypowered.api.plugin.ap.generated.js';
export type { PluginDependency, PluginDependencyStatics } from './binding-packages/com.velocitypowered.api.plugin.meta.generated.js';
export type { ConnectionRequestBuilder, ConnectionRequestBuilderStatics, ConnectionRequestBuilder_Result, ConnectionRequestBuilder_ResultStatics, ConnectionRequestBuilder_Status, ConnectionRequestBuilder_StatusStatics, ConsoleCommandSource, ConsoleCommandSourceStatics, InboundConnection, InboundConnectionStatics, LoginPhaseConnection, LoginPhaseConnectionStatics, LoginPhaseConnection_MessageConsumer, LoginPhaseConnection_MessageConsumerStatics, Player, PlayerStatics, ProxyServer, ProxyServerStatics, ServerConnection, ServerConnectionStatics } from './binding-packages/com.velocitypowered.api.proxy.generated.js';
export type { ProxyConfig, ProxyConfigStatics } from './binding-packages/com.velocitypowered.api.proxy.config.generated.js';
export type { IdentifiedKey, IdentifiedKeyStatics, IdentifiedKey_Revision, IdentifiedKey_RevisionStatics, KeyIdentifiable, KeyIdentifiableStatics, KeySigned, KeySignedStatics, SignedMessage, SignedMessageStatics } from './binding-packages/com.velocitypowered.api.proxy.crypto.generated.js';
export type { ChannelIdentifier, ChannelIdentifierStatics, ChannelMessageSink, ChannelMessageSinkStatics, ChannelMessageSource, ChannelMessageSourceStatics, ChannelRegistrar, ChannelRegistrarStatics, LegacyChannelIdentifier, LegacyChannelIdentifierStatics, MinecraftChannelIdentifier, MinecraftChannelIdentifierStatics, PluginMessageEncoder, PluginMessageEncoderStatics } from './binding-packages/com.velocitypowered.api.proxy.messages.generated.js';
export type { ChatSession, ChatSessionStatics, PlayerSettings, PlayerSettingsStatics, PlayerSettings_ChatMode, PlayerSettings_ChatModeStatics, PlayerSettings_MainHand, PlayerSettings_MainHandStatics, PlayerSettings_ParticleStatus, PlayerSettings_ParticleStatusStatics, ResourcePackInfo, ResourcePackInfoStatics, ResourcePackInfo_Builder, ResourcePackInfo_BuilderStatics, ResourcePackInfo_Origin, ResourcePackInfo_OriginStatics, SkinParts, SkinPartsStatics, TabList, TabListStatics, TabListEntry, TabListEntryStatics, TabListEntry_Builder, TabListEntry_BuilderStatics } from './binding-packages/com.velocitypowered.api.proxy.player.generated.js';
export type { PingOptions, PingOptionsStatics, PingOptions_Builder, PingOptions_BuilderStatics, QueryResponse, QueryResponseStatics, QueryResponse_Builder, QueryResponse_BuilderStatics, QueryResponse_PluginInformation, QueryResponse_PluginInformationStatics, RegisteredServer, RegisteredServerStatics, ServerInfo, ServerInfoStatics, ServerPing, ServerPingStatics, ServerPing_Builder, ServerPing_BuilderStatics, ServerPing_Players, ServerPing_PlayersStatics, ServerPing_SamplePlayer, ServerPing_SamplePlayerStatics, ServerPing_Version, ServerPing_VersionStatics } from './binding-packages/com.velocitypowered.api.proxy.server.generated.js';
export type { ScheduledTask, ScheduledTaskStatics, Scheduler, SchedulerStatics, Scheduler_TaskBuilder, Scheduler_TaskBuilderStatics, TaskStatus, TaskStatusStatics } from './binding-packages/com.velocitypowered.api.scheduler.generated.js';
export type { Favicon, FaviconStatics, GameProfile, GameProfileStatics, GameProfile_Property, GameProfile_PropertyStatics, MessagePosition, MessagePositionStatics, ModInfo, ModInfoStatics, ModInfo_Mod, ModInfo_ModStatics, Ordered, OrderedStatics, ProxyVersion, ProxyVersionStatics, ServerLink, ServerLinkStatics, ServerLink_Type, ServerLink_TypeStatics, UuidUtils, UuidUtilsStatics } from './binding-packages/com.velocitypowered.api.util.generated.js';
export type { Adventure, AdventureStatics } from './binding-packages/net.kyori.adventure.generated.js';
export type { Audience, AudienceStatics, Audiences, AudiencesStatics, ForwardingAudience, ForwardingAudienceStatics, ForwardingAudience_Single, ForwardingAudience_SingleStatics, MessageType, MessageTypeStatics } from './binding-packages/net.kyori.adventure.audience.generated.js';
export type { BossBar, BossBarStatics, BossBar_Color, BossBar_ColorStatics, BossBar_Flag, BossBar_FlagStatics, BossBar_Listener, BossBar_ListenerStatics, BossBar_Overlay, BossBar_OverlayStatics, BossBarImplementation, BossBarImplementationStatics, BossBarImplementation_Provider, BossBarImplementation_ProviderStatics, BossBarViewer, BossBarViewerStatics } from './binding-packages/net.kyori.adventure.bossbar.generated.js';
export type { AbstractBuilder, AbstractBuilderStatics } from './binding-packages/net.kyori.adventure.builder.generated.js';
export type { ChatType, ChatTypeStatics, ChatType_Bound, ChatType_BoundStatics, SignedMessage_2, SignedMessage_2Statics, SignedMessage_Signature, SignedMessage_SignatureStatics } from './binding-packages/net.kyori.adventure.chat.generated.js';
export type { DialogLike, DialogLikeStatics } from './binding-packages/net.kyori.adventure.dialog.generated.js';
export type { Identified, IdentifiedStatics, Identity, IdentityStatics } from './binding-packages/net.kyori.adventure.identity.generated.js';
export type { Internals, InternalsStatics } from './binding-packages/net.kyori.adventure.internal.generated.js';
export type { AdventureProperties, AdventurePropertiesStatics, AdventureProperties_DefaultOverrideProvider, AdventureProperties_DefaultOverrideProviderStatics, AdventureProperties_Property, AdventureProperties_PropertyStatics } from './binding-packages/net.kyori.adventure.internal.properties.generated.js';
export type { Book, BookStatics, Book_Builder, Book_BuilderStatics } from './binding-packages/net.kyori.adventure.inventory.generated.js';
export type { BinaryTagHolder, BinaryTagHolderStatics } from './binding-packages/net.kyori.adventure.nbt.api.generated.js';
export type { PermissionChecker, PermissionCheckerStatics } from './binding-packages/net.kyori.adventure.permission.generated.js';
export type { Pointer, PointerStatics, Pointered, PointeredStatics, Pointers, PointersStatics, Pointers_Builder, Pointers_BuilderStatics, PointersSupplier, PointersSupplierStatics, PointersSupplier_Builder, PointersSupplier_BuilderStatics } from './binding-packages/net.kyori.adventure.pointer.generated.js';
export type { ResourcePackCallback, ResourcePackCallbackStatics, ResourcePackInfo_2, ResourcePackInfo_2Statics, ResourcePackInfo_Builder_2, ResourcePackInfo_Builder_2Statics, ResourcePackInfoLike, ResourcePackInfoLikeStatics, ResourcePackRequest, ResourcePackRequestStatics, ResourcePackRequest_Builder, ResourcePackRequest_BuilderStatics, ResourcePackRequestLike, ResourcePackRequestLikeStatics, ResourcePackStatus, ResourcePackStatusStatics } from './binding-packages/net.kyori.adventure.resource.generated.js';
export type { Sound, SoundStatics, Sound_Builder, Sound_BuilderStatics, Sound_Emitter, Sound_EmitterStatics, Sound_Source, Sound_SourceStatics, Sound_Source_Provider, Sound_Source_ProviderStatics, Sound_Type, Sound_TypeStatics, SoundStop, SoundStopStatics } from './binding-packages/net.kyori.adventure.sound.generated.js';
export type { AbstractComponent, AbstractComponentStatics, BlockNBTComponent, BlockNBTComponentStatics, BlockNBTComponent_Builder, BlockNBTComponent_BuilderStatics, BlockNBTComponent_LocalPos, BlockNBTComponent_LocalPosStatics, BlockNBTComponent_Pos, BlockNBTComponent_PosStatics, BlockNBTComponent_WorldPos, BlockNBTComponent_WorldPosStatics, BlockNBTComponent_WorldPos_Coordinate, BlockNBTComponent_WorldPos_CoordinateStatics, BlockNBTComponent_WorldPos_Coordinate_Type, BlockNBTComponent_WorldPos_Coordinate_TypeStatics, BuildableComponent, BuildableComponentStatics, Component, ComponentStatics, ComponentApplicable, ComponentApplicableStatics, ComponentBuilder, ComponentBuilderStatics, ComponentBuilderApplicable, ComponentBuilderApplicableStatics, ComponentIteratorFlag, ComponentIteratorFlagStatics, ComponentIteratorType, ComponentIteratorTypeStatics, ComponentLike, ComponentLikeStatics, EntityNBTComponent, EntityNBTComponentStatics, EntityNBTComponent_Builder, EntityNBTComponent_BuilderStatics, JoinConfiguration, JoinConfigurationStatics, JoinConfiguration_Builder, JoinConfiguration_BuilderStatics, KeybindComponent, KeybindComponentStatics, KeybindComponent_Builder, KeybindComponent_BuilderStatics, KeybindComponent_KeybindLike, KeybindComponent_KeybindLikeStatics, LinearComponents, LinearComponentsStatics, NBTComponent, NBTComponentStatics, NBTComponentBuilder, NBTComponentBuilderStatics, ObjectComponent, ObjectComponentStatics, ObjectComponent_Builder, ObjectComponent_BuilderStatics, PatternReplacementResult, PatternReplacementResultStatics, ScopedComponent, ScopedComponentStatics, ScoreComponent, ScoreComponentStatics, ScoreComponent_Builder, ScoreComponent_BuilderStatics, SelectorComponent, SelectorComponentStatics, SelectorComponent_Builder, SelectorComponent_BuilderStatics, StorageNBTComponent, StorageNBTComponentStatics, StorageNBTComponent_Builder, StorageNBTComponent_BuilderStatics, TextComponent, TextComponentStatics, TextComponent_Builder, TextComponent_BuilderStatics, TextReplacementConfig, TextReplacementConfigStatics, TextReplacementConfig_Builder, TextReplacementConfig_BuilderStatics, TextReplacementConfig_Condition, TextReplacementConfig_ConditionStatics, TranslatableComponent, TranslatableComponentStatics, TranslatableComponent_Builder, TranslatableComponent_BuilderStatics, TranslationArgument, TranslationArgumentStatics, TranslationArgumentLike, TranslationArgumentLikeStatics, VirtualComponent, VirtualComponentStatics, VirtualComponentRenderer, VirtualComponentRendererStatics } from './binding-packages/net.kyori.adventure.text.generated.js';
export type { ClickCallback, ClickCallbackStatics, ClickCallback_Options, ClickCallback_OptionsStatics, ClickCallback_Options_Builder, ClickCallback_Options_BuilderStatics, ClickCallback_Provider, ClickCallback_ProviderStatics, ClickEvent, ClickEventStatics, ClickEvent_Action, ClickEvent_ActionStatics, ClickEvent_Payload, ClickEvent_PayloadStatics, ClickEvent_Payload_Custom, ClickEvent_Payload_CustomStatics, ClickEvent_Payload_Dialog, ClickEvent_Payload_DialogStatics, ClickEvent_Payload_Int, ClickEvent_Payload_IntStatics, ClickEvent_Payload_Text, ClickEvent_Payload_TextStatics, DataComponentValue, DataComponentValueStatics, DataComponentValue_Removed, DataComponentValue_RemovedStatics, DataComponentValue_TagSerializable, DataComponentValue_TagSerializableStatics, DataComponentValueConverterRegistry, DataComponentValueConverterRegistryStatics, DataComponentValueConverterRegistry_Conversion, DataComponentValueConverterRegistry_ConversionStatics, DataComponentValueConverterRegistry_Provider, DataComponentValueConverterRegistry_ProviderStatics, HoverEvent, HoverEventStatics, HoverEvent_Action, HoverEvent_ActionStatics, HoverEvent_ShowEntity, HoverEvent_ShowEntityStatics, HoverEvent_ShowItem, HoverEvent_ShowItemStatics, HoverEventSource, HoverEventSourceStatics } from './binding-packages/net.kyori.adventure.text.event.generated.js';
export type { ComponentFlattener, ComponentFlattenerStatics, ComponentFlattener_Builder, ComponentFlattener_BuilderStatics, FlattenerListener, FlattenerListenerStatics } from './binding-packages/net.kyori.adventure.text.flattener.generated.js';
export type { MutableStyleSetter, MutableStyleSetterStatics, NamedTextColor, NamedTextColorStatics, ShadowColor, ShadowColorStatics, Style, StyleStatics, Style_Builder, Style_BuilderStatics, Style_Merge, Style_MergeStatics, Style_Merge_Strategy, Style_Merge_StrategyStatics, StyleBuilderApplicable, StyleBuilderApplicableStatics, StyleGetter, StyleGetterStatics, StyleSetter, StyleSetterStatics, TextColor, TextColorStatics, TextDecoration, TextDecorationStatics, TextDecoration_State, TextDecoration_StateStatics, TextDecorationAndState, TextDecorationAndStateStatics, TextFormat, TextFormatStatics } from './binding-packages/net.kyori.adventure.text.format.generated.js';
export type { ObjectContents, ObjectContentsStatics, PlayerHeadObjectContents, PlayerHeadObjectContentsStatics, PlayerHeadObjectContents_Builder, PlayerHeadObjectContents_BuilderStatics, PlayerHeadObjectContents_ProfileProperty, PlayerHeadObjectContents_ProfilePropertyStatics, PlayerHeadObjectContents_SkinSource, PlayerHeadObjectContents_SkinSourceStatics, SpriteObjectContents, SpriteObjectContentsStatics } from './binding-packages/net.kyori.adventure.text.object.generated.js';
export type { AbstractComponentRenderer, AbstractComponentRendererStatics, ComponentRenderer, ComponentRendererStatics, TranslatableComponentRenderer, TranslatableComponentRendererStatics } from './binding-packages/net.kyori.adventure.text.renderer.generated.js';
export type { ComponentDecoder, ComponentDecoderStatics, ComponentEncoder, ComponentEncoderStatics, ComponentSerializer, ComponentSerializerStatics } from './binding-packages/net.kyori.adventure.text.serializer.generated.js';
export type { Title, TitleStatics, Title_Times, Title_TimesStatics, TitlePart, TitlePartStatics } from './binding-packages/net.kyori.adventure.title.generated.js';
export type { AbstractTranslationStore, AbstractTranslationStoreStatics, AbstractTranslationStore_StringBased, AbstractTranslationStore_StringBasedStatics, GlobalTranslator, GlobalTranslatorStatics, Translatable, TranslatableStatics, TranslationRegistry, TranslationRegistryStatics, TranslationStore, TranslationStoreStatics, TranslationStore_StringBased, TranslationStore_StringBasedStatics, Translator, TranslatorStatics } from './binding-packages/net.kyori.adventure.translation.generated.js';
export type { ARGBLike, ARGBLikeStatics, Buildable, BuildableStatics, Buildable_Builder, Buildable_BuilderStatics, Codec, CodecStatics, Codec_Decoder, Codec_DecoderStatics, Codec_Encoder, Codec_EncoderStatics, ComponentMessageThrowable, ComponentMessageThrowableStatics, ForwardingIterator, ForwardingIteratorStatics, HSVLike, HSVLikeStatics, Index, IndexStatics, InheritanceAwareMap, InheritanceAwareMapStatics, InheritanceAwareMap_Builder, InheritanceAwareMap_BuilderStatics, IntFunction2, IntFunction2Statics, Listenable, ListenableStatics, MonkeyBars, MonkeyBarsStatics, Nag, NagStatics, PlatformAPI, PlatformAPIStatics, RGBLike, RGBLikeStatics, Services, ServicesStatics, Services_Fallback, Services_FallbackStatics, ShadyPines, ShadyPinesStatics, Ticks, TicksStatics, TriState, TriStateStatics, UTF8ResourceBundleControl, UTF8ResourceBundleControlStatics } from './binding-packages/net.kyori.adventure.util.generated.js';
