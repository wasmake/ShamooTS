// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
export * from './event-packages/com.velocitypowered.api.event.command.generated.js';
export * from './event-packages/com.velocitypowered.api.event.connection.generated.js';
export * from './event-packages/com.velocitypowered.api.event.permission.generated.js';
export * from './event-packages/com.velocitypowered.api.event.player.generated.js';
export * from './event-packages/com.velocitypowered.api.event.player.configuration.generated.js';
export * from './event-packages/com.velocitypowered.api.event.proxy.generated.js';
export * from './event-packages/com.velocitypowered.api.event.proxy.server.generated.js';
export * from './event-packages/com.velocitypowered.api.event.query.generated.js';
export const EVENT_TYPES = {
  "com.velocitypowered.api.event.command.CommandExecuteEvent": {
    "type": "CommandExecuteEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.command.PlayerAvailableCommandsEvent": {
    "type": "PlayerAvailableCommandsEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.command.PostCommandInvocationEvent": {
    "type": "PostCommandInvocationEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.connection.ConnectionHandshakeEvent": {
    "type": "ConnectionHandshakeEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.connection.DisconnectEvent": {
    "type": "DisconnectEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.connection.LoginEvent": {
    "type": "LoginEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.connection.PluginMessageEvent": {
    "type": "PluginMessageEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.connection.PostLoginEvent": {
    "type": "PostLoginEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.connection.PreLoginEvent": {
    "type": "PreLoginEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.connection.PreTransferEvent": {
    "type": "PreTransferEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.permission.PermissionsSetupEvent": {
    "type": "PermissionsSetupEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.configuration.PlayerConfigurationEvent": {
    "type": "PlayerConfigurationEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.configuration.PlayerEnterConfigurationEvent": {
    "type": "PlayerEnterConfigurationEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.configuration.PlayerEnteredConfigurationEvent": {
    "type": "PlayerEnteredConfigurationEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.configuration.PlayerFinishConfigurationEvent": {
    "type": "PlayerFinishConfigurationEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.configuration.PlayerFinishedConfigurationEvent": {
    "type": "PlayerFinishedConfigurationEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.CookieReceiveEvent": {
    "type": "CookieReceiveEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.CookieRequestEvent": {
    "type": "CookieRequestEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.CookieStoreEvent": {
    "type": "CookieStoreEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.GameProfileRequestEvent": {
    "type": "GameProfileRequestEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.KickedFromServerEvent": {
    "type": "KickedFromServerEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.PlayerChannelRegisterEvent": {
    "type": "PlayerChannelRegisterEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.PlayerChannelUnregisterEvent": {
    "type": "PlayerChannelUnregisterEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.PlayerChatEvent": {
    "type": "PlayerChatEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.PlayerChooseInitialServerEvent": {
    "type": "PlayerChooseInitialServerEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.PlayerClientBrandEvent": {
    "type": "PlayerClientBrandEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.PlayerModInfoEvent": {
    "type": "PlayerModInfoEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent": {
    "type": "PlayerResourcePackStatusEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.PlayerSettingsChangedEvent": {
    "type": "PlayerSettingsChangedEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.ServerConnectedEvent": {
    "type": "ServerConnectedEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent": {
    "type": "ServerLoginPluginMessageEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.ServerPostConnectEvent": {
    "type": "ServerPostConnectEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.ServerPreConnectEvent": {
    "type": "ServerPreConnectEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.ServerResourcePackRemoveEvent": {
    "type": "ServerResourcePackRemoveEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.ServerResourcePackSendEvent": {
    "type": "ServerResourcePackSendEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.player.TabCompleteEvent": {
    "type": "TabCompleteEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.proxy.ListenerBoundEvent": {
    "type": "ListenerBoundEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.proxy.ListenerCloseEvent": {
    "type": "ListenerCloseEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.proxy.ProxyInitializeEvent": {
    "type": "ProxyInitializeEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.proxy.ProxyPingEvent": {
    "type": "ProxyPingEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.proxy.ProxyPreShutdownEvent": {
    "type": "ProxyPreShutdownEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.proxy.ProxyReloadEvent": {
    "type": "ProxyReloadEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.proxy.ProxyShutdownEvent": {
    "type": "ProxyShutdownEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.proxy.server.ServerRegisteredEvent": {
    "type": "ServerRegisteredEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.proxy.server.ServerUnregisteredEvent": {
    "type": "ServerUnregisteredEvent",
    "cancellable": false
  },
  "com.velocitypowered.api.event.query.ProxyQueryEvent": {
    "type": "ProxyQueryEvent",
    "cancellable": false
  }
} as const;
export type GeneratedEventType = typeof EVENT_TYPES[keyof typeof EVENT_TYPES]['type'];
export type GeneratedEventCancellabilityMap = { readonly [Name in keyof typeof EVENT_TYPES]: (typeof EVENT_TYPES)[Name]['cancellable'] };
export interface GeneratedEventMap {
  readonly "com.velocitypowered.api.event.command.CommandExecuteEvent": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').CommandExecuteEvent;
  readonly "com.velocitypowered.api.event.command.PlayerAvailableCommandsEvent": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').PlayerAvailableCommandsEvent;
  readonly "com.velocitypowered.api.event.command.PostCommandInvocationEvent": import('./binding-packages/com.velocitypowered.api.event.command.generated.js').PostCommandInvocationEvent;
  readonly "com.velocitypowered.api.event.connection.ConnectionHandshakeEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').ConnectionHandshakeEvent;
  readonly "com.velocitypowered.api.event.connection.DisconnectEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').DisconnectEvent;
  readonly "com.velocitypowered.api.event.connection.LoginEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').LoginEvent;
  readonly "com.velocitypowered.api.event.connection.PluginMessageEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PluginMessageEvent;
  readonly "com.velocitypowered.api.event.connection.PostLoginEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PostLoginEvent;
  readonly "com.velocitypowered.api.event.connection.PreLoginEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PreLoginEvent;
  readonly "com.velocitypowered.api.event.connection.PreTransferEvent": import('./binding-packages/com.velocitypowered.api.event.connection.generated.js').PreTransferEvent;
  readonly "com.velocitypowered.api.event.permission.PermissionsSetupEvent": import('./binding-packages/com.velocitypowered.api.event.permission.generated.js').PermissionsSetupEvent;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerConfigurationEvent;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerEnterConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerEnterConfigurationEvent;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerEnteredConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerEnteredConfigurationEvent;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerFinishConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerFinishConfigurationEvent;
  readonly "com.velocitypowered.api.event.player.configuration.PlayerFinishedConfigurationEvent": import('./binding-packages/com.velocitypowered.api.event.player.configuration.generated.js').PlayerFinishedConfigurationEvent;
  readonly "com.velocitypowered.api.event.player.CookieReceiveEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieReceiveEvent;
  readonly "com.velocitypowered.api.event.player.CookieRequestEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieRequestEvent;
  readonly "com.velocitypowered.api.event.player.CookieStoreEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').CookieStoreEvent;
  readonly "com.velocitypowered.api.event.player.GameProfileRequestEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').GameProfileRequestEvent;
  readonly "com.velocitypowered.api.event.player.KickedFromServerEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').KickedFromServerEvent;
  readonly "com.velocitypowered.api.event.player.PlayerChannelRegisterEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChannelRegisterEvent;
  readonly "com.velocitypowered.api.event.player.PlayerChannelUnregisterEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChannelUnregisterEvent;
  readonly "com.velocitypowered.api.event.player.PlayerChatEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChatEvent;
  readonly "com.velocitypowered.api.event.player.PlayerChooseInitialServerEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerChooseInitialServerEvent;
  readonly "com.velocitypowered.api.event.player.PlayerClientBrandEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerClientBrandEvent;
  readonly "com.velocitypowered.api.event.player.PlayerModInfoEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerModInfoEvent;
  readonly "com.velocitypowered.api.event.player.PlayerResourcePackStatusEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerResourcePackStatusEvent;
  readonly "com.velocitypowered.api.event.player.PlayerSettingsChangedEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').PlayerSettingsChangedEvent;
  readonly "com.velocitypowered.api.event.player.ServerConnectedEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerConnectedEvent;
  readonly "com.velocitypowered.api.event.player.ServerLoginPluginMessageEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerLoginPluginMessageEvent;
  readonly "com.velocitypowered.api.event.player.ServerPostConnectEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerPostConnectEvent;
  readonly "com.velocitypowered.api.event.player.ServerPreConnectEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerPreConnectEvent;
  readonly "com.velocitypowered.api.event.player.ServerResourcePackRemoveEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerResourcePackRemoveEvent;
  readonly "com.velocitypowered.api.event.player.ServerResourcePackSendEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').ServerResourcePackSendEvent;
  readonly "com.velocitypowered.api.event.player.TabCompleteEvent": import('./binding-packages/com.velocitypowered.api.event.player.generated.js').TabCompleteEvent;
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
}
