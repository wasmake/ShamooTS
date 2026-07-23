// Generated from paper-packets 1.21.8+paper.55+mache.2 (mojang+paperweight). Do not edit.
export const PACKET_TYPES = {
  "net.minecraft.network.protocol.common.ClientboundClearDialogPacket": {
    "type": "ClientboundClearDialogPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 17
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 132
      }
    ]
  },
  "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket": {
    "type": "ClientboundCustomPayloadPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 1
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 24
      }
    ]
  },
  "net.minecraft.network.protocol.common.ClientboundCustomReportDetailsPacket": {
    "type": "ClientboundCustomReportDetailsPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 15
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 129
      }
    ]
  },
  "net.minecraft.network.protocol.common.ClientboundDisconnectPacket": {
    "type": "ClientboundDisconnectPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 2
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 28
      }
    ]
  },
  "net.minecraft.network.protocol.common.ClientboundKeepAlivePacket": {
    "type": "ClientboundKeepAlivePacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 4
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 38
      }
    ]
  },
  "net.minecraft.network.protocol.common.ClientboundPingPacket": {
    "type": "ClientboundPingPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 5
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 54
      }
    ]
  },
  "net.minecraft.network.protocol.common.ClientboundResourcePackPopPacket": {
    "type": "ClientboundResourcePackPopPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 8
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 73
      }
    ]
  },
  "net.minecraft.network.protocol.common.ClientboundResourcePackPushPacket": {
    "type": "ClientboundResourcePackPushPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 9
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 74
      }
    ]
  },
  "net.minecraft.network.protocol.common.ClientboundServerLinksPacket": {
    "type": "ClientboundServerLinksPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 16
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 130
      }
    ]
  },
  "net.minecraft.network.protocol.common.ClientboundShowDialogPacket": {
    "type": "ClientboundShowDialogPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 18
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 133
      }
    ]
  },
  "net.minecraft.network.protocol.common.ClientboundStoreCookiePacket": {
    "type": "ClientboundStoreCookiePacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 10
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 113
      }
    ]
  },
  "net.minecraft.network.protocol.common.ClientboundTransferPacket": {
    "type": "ClientboundTransferPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 11
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 122
      }
    ]
  },
  "net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket": {
    "type": "ClientboundUpdateTagsPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 13
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 127
      }
    ]
  },
  "net.minecraft.network.protocol.common.ServerboundClientInformationPacket": {
    "type": "ServerboundClientInformationPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "serverbound",
        "id": 0
      },
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 13
      }
    ]
  },
  "net.minecraft.network.protocol.common.ServerboundCustomClickActionPacket": {
    "type": "ServerboundCustomClickActionPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "serverbound",
        "id": 8
      },
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 65
      }
    ]
  },
  "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket": {
    "type": "ServerboundCustomPayloadPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "serverbound",
        "id": 2
      },
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 21
      }
    ]
  },
  "net.minecraft.network.protocol.common.ServerboundKeepAlivePacket": {
    "type": "ServerboundKeepAlivePacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "serverbound",
        "id": 4
      },
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 27
      }
    ]
  },
  "net.minecraft.network.protocol.common.ServerboundPongPacket": {
    "type": "ServerboundPongPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "serverbound",
        "id": 5
      },
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 44
      }
    ]
  },
  "net.minecraft.network.protocol.common.ServerboundResourcePackPacket": {
    "type": "ServerboundResourcePackPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "serverbound",
        "id": 6
      },
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 48
      }
    ]
  },
  "net.minecraft.network.protocol.configuration.ClientboundFinishConfigurationPacket": {
    "type": "ClientboundFinishConfigurationPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 3
      }
    ]
  },
  "net.minecraft.network.protocol.configuration.ClientboundRegistryDataPacket": {
    "type": "ClientboundRegistryDataPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 7
      }
    ]
  },
  "net.minecraft.network.protocol.configuration.ClientboundResetChatPacket": {
    "type": "ClientboundResetChatPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 6
      }
    ]
  },
  "net.minecraft.network.protocol.configuration.ClientboundSelectKnownPacks": {
    "type": "ClientboundSelectKnownPacks",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 14
      }
    ]
  },
  "net.minecraft.network.protocol.configuration.ClientboundUpdateEnabledFeaturesPacket": {
    "type": "ClientboundUpdateEnabledFeaturesPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 12
      }
    ]
  },
  "net.minecraft.network.protocol.configuration.ServerboundFinishConfigurationPacket": {
    "type": "ServerboundFinishConfigurationPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "serverbound",
        "id": 3
      }
    ]
  },
  "net.minecraft.network.protocol.configuration.ServerboundSelectKnownPacks": {
    "type": "ServerboundSelectKnownPacks",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "serverbound",
        "id": 7
      }
    ]
  },
  "net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket": {
    "type": "ClientboundCookieRequestPacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "clientbound",
        "id": 0
      },
      {
        "phase": "login",
        "direction": "clientbound",
        "id": 5
      },
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 21
      }
    ]
  },
  "net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket": {
    "type": "ServerboundCookieResponsePacket",
    "registrations": [
      {
        "phase": "configuration",
        "direction": "serverbound",
        "id": 1
      },
      {
        "phase": "login",
        "direction": "serverbound",
        "id": 4
      },
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 20
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundAddEntityPacket": {
    "type": "ClientboundAddEntityPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 1
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundAnimatePacket": {
    "type": "ClientboundAnimatePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 2
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundAwardStatsPacket": {
    "type": "ClientboundAwardStatsPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 3
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket": {
    "type": "ClientboundBlockChangedAckPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 4
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket": {
    "type": "ClientboundBlockDestructionPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 5
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket": {
    "type": "ClientboundBlockEntityDataPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 6
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundBlockEventPacket": {
    "type": "ClientboundBlockEventPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 7
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket": {
    "type": "ClientboundBlockUpdatePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 8
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundBossEventPacket": {
    "type": "ClientboundBossEventPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 9
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundBundleDelimiterPacket": {
    "type": "ClientboundBundleDelimiterPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 0
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket": {
    "type": "ClientboundChangeDifficultyPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 10
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundChunkBatchFinishedPacket": {
    "type": "ClientboundChunkBatchFinishedPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 11
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundChunkBatchStartPacket": {
    "type": "ClientboundChunkBatchStartPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 12
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket": {
    "type": "ClientboundChunksBiomesPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 13
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundClearTitlesPacket": {
    "type": "ClientboundClearTitlesPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 14
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundCommandsPacket": {
    "type": "ClientboundCommandsPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 16
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket": {
    "type": "ClientboundCommandSuggestionsPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 15
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundContainerClosePacket": {
    "type": "ClientboundContainerClosePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 17
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket": {
    "type": "ClientboundContainerSetContentPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 18
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket": {
    "type": "ClientboundContainerSetDataPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 19
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket": {
    "type": "ClientboundContainerSetSlotPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 20
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundCooldownPacket": {
    "type": "ClientboundCooldownPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 22
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket": {
    "type": "ClientboundCustomChatCompletionsPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 23
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundDamageEventPacket": {
    "type": "ClientboundDamageEventPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 25
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundDebugSamplePacket": {
    "type": "ClientboundDebugSamplePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 26
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundDeleteChatPacket": {
    "type": "ClientboundDeleteChatPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 27
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket": {
    "type": "ClientboundDisguisedChatPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 29
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundEntityEventPacket": {
    "type": "ClientboundEntityEventPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 30
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundEntityPositionSyncPacket": {
    "type": "ClientboundEntityPositionSyncPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 31
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundExplodePacket": {
    "type": "ClientboundExplodePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 32
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket": {
    "type": "ClientboundForgetLevelChunkPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 33
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundGameEventPacket": {
    "type": "ClientboundGameEventPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 34
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket": {
    "type": "ClientboundHorseScreenOpenPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 35
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket": {
    "type": "ClientboundHurtAnimationPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 36
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket": {
    "type": "ClientboundInitializeBorderPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 37
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket": {
    "type": "ClientboundLevelChunkWithLightPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 39
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundLevelEventPacket": {
    "type": "ClientboundLevelEventPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 40
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket": {
    "type": "ClientboundLevelParticlesPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 41
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundLightUpdatePacket": {
    "type": "ClientboundLightUpdatePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 42
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundLoginPacket": {
    "type": "ClientboundLoginPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 43
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundMapItemDataPacket": {
    "type": "ClientboundMapItemDataPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 44
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket": {
    "type": "ClientboundMerchantOffersPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 45
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Pos": {
    "type": "ClientboundMoveEntityPacket_Pos",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 46
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$PosRot": {
    "type": "ClientboundMoveEntityPacket_PosRot",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 47
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Rot": {
    "type": "ClientboundMoveEntityPacket_Rot",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 49
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundMoveMinecartPacket": {
    "type": "ClientboundMoveMinecartPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 48
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket": {
    "type": "ClientboundMoveVehiclePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 50
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundOpenBookPacket": {
    "type": "ClientboundOpenBookPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 51
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundOpenScreenPacket": {
    "type": "ClientboundOpenScreenPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 52
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket": {
    "type": "ClientboundOpenSignEditorPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 53
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket": {
    "type": "ClientboundPlaceGhostRecipePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 56
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket": {
    "type": "ClientboundPlayerAbilitiesPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 57
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundPlayerChatPacket": {
    "type": "ClientboundPlayerChatPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 58
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket": {
    "type": "ClientboundPlayerCombatEndPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 59
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket": {
    "type": "ClientboundPlayerCombatEnterPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 60
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket": {
    "type": "ClientboundPlayerCombatKillPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 61
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket": {
    "type": "ClientboundPlayerInfoRemovePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 62
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket": {
    "type": "ClientboundPlayerInfoUpdatePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 63
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket": {
    "type": "ClientboundPlayerLookAtPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 64
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket": {
    "type": "ClientboundPlayerPositionPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 65
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundPlayerRotationPacket": {
    "type": "ClientboundPlayerRotationPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 66
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundProjectilePowerPacket": {
    "type": "ClientboundProjectilePowerPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 128
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundRecipeBookAddPacket": {
    "type": "ClientboundRecipeBookAddPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 67
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundRecipeBookRemovePacket": {
    "type": "ClientboundRecipeBookRemovePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 68
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundRecipeBookSettingsPacket": {
    "type": "ClientboundRecipeBookSettingsPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 69
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket": {
    "type": "ClientboundRemoveEntitiesPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 70
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket": {
    "type": "ClientboundRemoveMobEffectPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 71
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundResetScorePacket": {
    "type": "ClientboundResetScorePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 72
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundRespawnPacket": {
    "type": "ClientboundRespawnPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 75
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundRotateHeadPacket": {
    "type": "ClientboundRotateHeadPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 76
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket": {
    "type": "ClientboundSectionBlocksUpdatePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 77
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket": {
    "type": "ClientboundSelectAdvancementsTabPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 78
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundServerDataPacket": {
    "type": "ClientboundServerDataPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 79
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket": {
    "type": "ClientboundSetActionBarTextPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 80
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket": {
    "type": "ClientboundSetBorderCenterPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 81
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket": {
    "type": "ClientboundSetBorderLerpSizePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 82
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket": {
    "type": "ClientboundSetBorderSizePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 83
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket": {
    "type": "ClientboundSetBorderWarningDelayPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 84
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket": {
    "type": "ClientboundSetBorderWarningDistancePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 85
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetCameraPacket": {
    "type": "ClientboundSetCameraPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 86
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket": {
    "type": "ClientboundSetChunkCacheCenterPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 87
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket": {
    "type": "ClientboundSetChunkCacheRadiusPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 88
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetCursorItemPacket": {
    "type": "ClientboundSetCursorItemPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 89
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket": {
    "type": "ClientboundSetDefaultSpawnPositionPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 90
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket": {
    "type": "ClientboundSetDisplayObjectivePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 91
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket": {
    "type": "ClientboundSetEntityDataPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 92
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket": {
    "type": "ClientboundSetEntityLinkPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 93
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket": {
    "type": "ClientboundSetEntityMotionPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 94
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket": {
    "type": "ClientboundSetEquipmentPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 95
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetExperiencePacket": {
    "type": "ClientboundSetExperiencePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 96
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetHealthPacket": {
    "type": "ClientboundSetHealthPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 97
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetHeldSlotPacket": {
    "type": "ClientboundSetHeldSlotPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 98
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetObjectivePacket": {
    "type": "ClientboundSetObjectivePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 99
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetPassengersPacket": {
    "type": "ClientboundSetPassengersPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 100
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetPlayerInventoryPacket": {
    "type": "ClientboundSetPlayerInventoryPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 101
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket": {
    "type": "ClientboundSetPlayerTeamPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 102
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetScorePacket": {
    "type": "ClientboundSetScorePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 103
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket": {
    "type": "ClientboundSetSimulationDistancePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 104
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket": {
    "type": "ClientboundSetSubtitleTextPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 105
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetTimePacket": {
    "type": "ClientboundSetTimePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 106
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket": {
    "type": "ClientboundSetTitlesAnimationPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 108
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket": {
    "type": "ClientboundSetTitleTextPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 107
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSoundEntityPacket": {
    "type": "ClientboundSoundEntityPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 109
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSoundPacket": {
    "type": "ClientboundSoundPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 110
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundStartConfigurationPacket": {
    "type": "ClientboundStartConfigurationPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 111
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundStopSoundPacket": {
    "type": "ClientboundStopSoundPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 112
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundSystemChatPacket": {
    "type": "ClientboundSystemChatPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 114
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundTabListPacket": {
    "type": "ClientboundTabListPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 115
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundTagQueryPacket": {
    "type": "ClientboundTagQueryPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 116
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket": {
    "type": "ClientboundTakeItemEntityPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 117
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket": {
    "type": "ClientboundTeleportEntityPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 118
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundTestInstanceBlockStatus": {
    "type": "ClientboundTestInstanceBlockStatus",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 119
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundTickingStatePacket": {
    "type": "ClientboundTickingStatePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 120
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundTickingStepPacket": {
    "type": "ClientboundTickingStepPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 121
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket": {
    "type": "ClientboundTrackedWaypointPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 131
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket": {
    "type": "ClientboundUpdateAdvancementsPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 123
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket": {
    "type": "ClientboundUpdateAttributesPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 124
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket": {
    "type": "ClientboundUpdateMobEffectPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 125
      }
    ]
  },
  "net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket": {
    "type": "ClientboundUpdateRecipesPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 126
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket": {
    "type": "ServerboundAcceptTeleportationPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 0
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundBlockEntityTagQueryPacket": {
    "type": "ServerboundBlockEntityTagQueryPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 1
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket": {
    "type": "ServerboundChangeDifficultyPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 3
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundChangeGameModePacket": {
    "type": "ServerboundChangeGameModePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 4
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundChatAckPacket": {
    "type": "ServerboundChatAckPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 5
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundChatCommandPacket": {
    "type": "ServerboundChatCommandPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 6
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundChatCommandSignedPacket": {
    "type": "ServerboundChatCommandSignedPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 7
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundChatPacket": {
    "type": "ServerboundChatPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 8
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket": {
    "type": "ServerboundChatSessionUpdatePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 9
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundChunkBatchReceivedPacket": {
    "type": "ServerboundChunkBatchReceivedPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 10
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundClientCommandPacket": {
    "type": "ServerboundClientCommandPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 11
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundClientTickEndPacket": {
    "type": "ServerboundClientTickEndPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 12
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket": {
    "type": "ServerboundCommandSuggestionPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 14
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundConfigurationAcknowledgedPacket": {
    "type": "ServerboundConfigurationAcknowledgedPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 15
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket": {
    "type": "ServerboundContainerButtonClickPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 16
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundContainerClickPacket": {
    "type": "ServerboundContainerClickPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 17
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundContainerClosePacket": {
    "type": "ServerboundContainerClosePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 18
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundContainerSlotStateChangedPacket": {
    "type": "ServerboundContainerSlotStateChangedPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 19
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundDebugSampleSubscriptionPacket": {
    "type": "ServerboundDebugSampleSubscriptionPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 22
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundEditBookPacket": {
    "type": "ServerboundEditBookPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 23
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundEntityTagQueryPacket": {
    "type": "ServerboundEntityTagQueryPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 24
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundInteractPacket": {
    "type": "ServerboundInteractPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 25
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket": {
    "type": "ServerboundJigsawGeneratePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 26
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket": {
    "type": "ServerboundLockDifficultyPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 28
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Pos": {
    "type": "ServerboundMovePlayerPacket_Pos",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 29
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$PosRot": {
    "type": "ServerboundMovePlayerPacket_PosRot",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 30
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Rot": {
    "type": "ServerboundMovePlayerPacket_Rot",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 31
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$StatusOnly": {
    "type": "ServerboundMovePlayerPacket_StatusOnly",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 32
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket": {
    "type": "ServerboundMoveVehiclePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 33
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket": {
    "type": "ServerboundPaddleBoatPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 34
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundPickItemFromBlockPacket": {
    "type": "ServerboundPickItemFromBlockPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 35
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundPickItemFromEntityPacket": {
    "type": "ServerboundPickItemFromEntityPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 36
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket": {
    "type": "ServerboundPlaceRecipePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 38
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket": {
    "type": "ServerboundPlayerAbilitiesPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 39
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket": {
    "type": "ServerboundPlayerActionPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 40
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket": {
    "type": "ServerboundPlayerCommandPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 41
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundPlayerInputPacket": {
    "type": "ServerboundPlayerInputPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 42
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundPlayerLoadedPacket": {
    "type": "ServerboundPlayerLoadedPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 43
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket": {
    "type": "ServerboundRecipeBookChangeSettingsPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 45
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket": {
    "type": "ServerboundRecipeBookSeenRecipePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 46
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundRenameItemPacket": {
    "type": "ServerboundRenameItemPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 47
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket": {
    "type": "ServerboundSeenAdvancementsPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 49
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundSelectBundleItemPacket": {
    "type": "ServerboundSelectBundleItemPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 2
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundSelectTradePacket": {
    "type": "ServerboundSelectTradePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 50
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundSetBeaconPacket": {
    "type": "ServerboundSetBeaconPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 51
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket": {
    "type": "ServerboundSetCarriedItemPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 52
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket": {
    "type": "ServerboundSetCommandBlockPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 53
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket": {
    "type": "ServerboundSetCommandMinecartPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 54
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket": {
    "type": "ServerboundSetCreativeModeSlotPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 55
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket": {
    "type": "ServerboundSetJigsawBlockPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 56
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket": {
    "type": "ServerboundSetStructureBlockPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 57
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundSetTestBlockPacket": {
    "type": "ServerboundSetTestBlockPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 58
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundSignUpdatePacket": {
    "type": "ServerboundSignUpdatePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 59
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundSwingPacket": {
    "type": "ServerboundSwingPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 60
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket": {
    "type": "ServerboundTeleportToEntityPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 61
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket": {
    "type": "ServerboundTestInstanceBlockActionPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 62
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundUseItemOnPacket": {
    "type": "ServerboundUseItemOnPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 63
      }
    ]
  },
  "net.minecraft.network.protocol.game.ServerboundUseItemPacket": {
    "type": "ServerboundUseItemPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 64
      }
    ]
  },
  "net.minecraft.network.protocol.handshake.ClientIntentionPacket": {
    "type": "ClientIntentionPacket",
    "registrations": [
      {
        "phase": "handshake",
        "direction": "serverbound",
        "id": 0
      }
    ]
  },
  "net.minecraft.network.protocol.login.ClientboundCustomQueryPacket": {
    "type": "ClientboundCustomQueryPacket",
    "registrations": [
      {
        "phase": "login",
        "direction": "clientbound",
        "id": 4
      }
    ]
  },
  "net.minecraft.network.protocol.login.ClientboundHelloPacket": {
    "type": "ClientboundHelloPacket",
    "registrations": [
      {
        "phase": "login",
        "direction": "clientbound",
        "id": 1
      }
    ]
  },
  "net.minecraft.network.protocol.login.ClientboundLoginCompressionPacket": {
    "type": "ClientboundLoginCompressionPacket",
    "registrations": [
      {
        "phase": "login",
        "direction": "clientbound",
        "id": 3
      }
    ]
  },
  "net.minecraft.network.protocol.login.ClientboundLoginDisconnectPacket": {
    "type": "ClientboundLoginDisconnectPacket",
    "registrations": [
      {
        "phase": "login",
        "direction": "clientbound",
        "id": 0
      }
    ]
  },
  "net.minecraft.network.protocol.login.ClientboundLoginFinishedPacket": {
    "type": "ClientboundLoginFinishedPacket",
    "registrations": [
      {
        "phase": "login",
        "direction": "clientbound",
        "id": 2
      }
    ]
  },
  "net.minecraft.network.protocol.login.ServerboundCustomQueryAnswerPacket": {
    "type": "ServerboundCustomQueryAnswerPacket",
    "registrations": [
      {
        "phase": "login",
        "direction": "serverbound",
        "id": 2
      }
    ]
  },
  "net.minecraft.network.protocol.login.ServerboundHelloPacket": {
    "type": "ServerboundHelloPacket",
    "registrations": [
      {
        "phase": "login",
        "direction": "serverbound",
        "id": 0
      }
    ]
  },
  "net.minecraft.network.protocol.login.ServerboundKeyPacket": {
    "type": "ServerboundKeyPacket",
    "registrations": [
      {
        "phase": "login",
        "direction": "serverbound",
        "id": 1
      }
    ]
  },
  "net.minecraft.network.protocol.login.ServerboundLoginAcknowledgedPacket": {
    "type": "ServerboundLoginAcknowledgedPacket",
    "registrations": [
      {
        "phase": "login",
        "direction": "serverbound",
        "id": 3
      }
    ]
  },
  "net.minecraft.network.protocol.ping.ClientboundPongResponsePacket": {
    "type": "ClientboundPongResponsePacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "clientbound",
        "id": 55
      },
      {
        "phase": "status",
        "direction": "clientbound",
        "id": 1
      }
    ]
  },
  "net.minecraft.network.protocol.ping.ServerboundPingRequestPacket": {
    "type": "ServerboundPingRequestPacket",
    "registrations": [
      {
        "phase": "play",
        "direction": "serverbound",
        "id": 37
      },
      {
        "phase": "status",
        "direction": "serverbound",
        "id": 1
      }
    ]
  },
  "net.minecraft.network.protocol.status.ClientboundStatusResponsePacket": {
    "type": "ClientboundStatusResponsePacket",
    "registrations": [
      {
        "phase": "status",
        "direction": "clientbound",
        "id": 0
      }
    ]
  },
  "net.minecraft.network.protocol.status.ServerboundStatusRequestPacket": {
    "type": "ServerboundStatusRequestPacket",
    "registrations": [
      {
        "phase": "status",
        "direction": "serverbound",
        "id": 0
      }
    ]
  }
} as const;
export interface GeneratedPacketMap {
  readonly "net.minecraft.network.protocol.common.ClientboundClearDialogPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ClientboundClearDialogPacket;
  readonly "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ClientboundCustomPayloadPacket;
  readonly "net.minecraft.network.protocol.common.ClientboundCustomReportDetailsPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ClientboundCustomReportDetailsPacket;
  readonly "net.minecraft.network.protocol.common.ClientboundDisconnectPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ClientboundDisconnectPacket;
  readonly "net.minecraft.network.protocol.common.ClientboundKeepAlivePacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ClientboundKeepAlivePacket;
  readonly "net.minecraft.network.protocol.common.ClientboundPingPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ClientboundPingPacket;
  readonly "net.minecraft.network.protocol.common.ClientboundResourcePackPopPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ClientboundResourcePackPopPacket;
  readonly "net.minecraft.network.protocol.common.ClientboundResourcePackPushPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ClientboundResourcePackPushPacket;
  readonly "net.minecraft.network.protocol.common.ClientboundServerLinksPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ClientboundServerLinksPacket;
  readonly "net.minecraft.network.protocol.common.ClientboundShowDialogPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ClientboundShowDialogPacket;
  readonly "net.minecraft.network.protocol.common.ClientboundStoreCookiePacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ClientboundStoreCookiePacket;
  readonly "net.minecraft.network.protocol.common.ClientboundTransferPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ClientboundTransferPacket;
  readonly "net.minecraft.network.protocol.common.ClientboundUpdateTagsPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ClientboundUpdateTagsPacket;
  readonly "net.minecraft.network.protocol.common.ServerboundClientInformationPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ServerboundClientInformationPacket;
  readonly "net.minecraft.network.protocol.common.ServerboundCustomClickActionPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ServerboundCustomClickActionPacket;
  readonly "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ServerboundCustomPayloadPacket;
  readonly "net.minecraft.network.protocol.common.ServerboundKeepAlivePacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ServerboundKeepAlivePacket;
  readonly "net.minecraft.network.protocol.common.ServerboundPongPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ServerboundPongPacket;
  readonly "net.minecraft.network.protocol.common.ServerboundResourcePackPacket": import('./binding-packages/net.minecraft.network.protocol.common.generated.js').ServerboundResourcePackPacket;
  readonly "net.minecraft.network.protocol.configuration.ClientboundFinishConfigurationPacket": import('./binding-packages/net.minecraft.network.protocol.configuration.generated.js').ClientboundFinishConfigurationPacket;
  readonly "net.minecraft.network.protocol.configuration.ClientboundRegistryDataPacket": import('./binding-packages/net.minecraft.network.protocol.configuration.generated.js').ClientboundRegistryDataPacket;
  readonly "net.minecraft.network.protocol.configuration.ClientboundResetChatPacket": import('./binding-packages/net.minecraft.network.protocol.configuration.generated.js').ClientboundResetChatPacket;
  readonly "net.minecraft.network.protocol.configuration.ClientboundSelectKnownPacks": import('./binding-packages/net.minecraft.network.protocol.configuration.generated.js').ClientboundSelectKnownPacks;
  readonly "net.minecraft.network.protocol.configuration.ClientboundUpdateEnabledFeaturesPacket": import('./binding-packages/net.minecraft.network.protocol.configuration.generated.js').ClientboundUpdateEnabledFeaturesPacket;
  readonly "net.minecraft.network.protocol.configuration.ServerboundFinishConfigurationPacket": import('./binding-packages/net.minecraft.network.protocol.configuration.generated.js').ServerboundFinishConfigurationPacket;
  readonly "net.minecraft.network.protocol.configuration.ServerboundSelectKnownPacks": import('./binding-packages/net.minecraft.network.protocol.configuration.generated.js').ServerboundSelectKnownPacks;
  readonly "net.minecraft.network.protocol.cookie.ClientboundCookieRequestPacket": import('./binding-packages/net.minecraft.network.protocol.cookie.generated.js').ClientboundCookieRequestPacket;
  readonly "net.minecraft.network.protocol.cookie.ServerboundCookieResponsePacket": import('./binding-packages/net.minecraft.network.protocol.cookie.generated.js').ServerboundCookieResponsePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundAddEntityPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundAddEntityPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundAnimatePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundAnimatePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundAwardStatsPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundAwardStatsPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundBlockChangedAckPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundBlockDestructionPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundBlockEntityDataPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundBlockEventPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundBlockEventPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundBlockUpdatePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundBossEventPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundBossEventPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundBundleDelimiterPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundBundleDelimiterPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundChangeDifficultyPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundChunkBatchFinishedPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundChunkBatchFinishedPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundChunkBatchStartPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundChunkBatchStartPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundChunksBiomesPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundClearTitlesPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundClearTitlesPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundCommandsPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundCommandsPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundCommandSuggestionsPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundContainerClosePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundContainerClosePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundContainerSetContentPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundContainerSetDataPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundContainerSetSlotPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundCooldownPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundCooldownPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundCustomChatCompletionsPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundDamageEventPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundDamageEventPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundDebugSamplePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundDebugSamplePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundDeleteChatPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundDeleteChatPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundDisguisedChatPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundEntityEventPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundEntityEventPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundEntityPositionSyncPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundEntityPositionSyncPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundExplodePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundExplodePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundForgetLevelChunkPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundGameEventPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundGameEventPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundHorseScreenOpenPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundHurtAnimationPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundInitializeBorderPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundLevelChunkWithLightPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundLevelEventPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundLevelEventPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundLevelParticlesPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundLightUpdatePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundLightUpdatePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundLoginPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundLoginPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundMapItemDataPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundMapItemDataPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundMerchantOffersPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Pos": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundMoveEntityPacket_Pos;
  readonly "net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$PosRot": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundMoveEntityPacket_PosRot;
  readonly "net.minecraft.network.protocol.game.ClientboundMoveEntityPacket$Rot": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundMoveEntityPacket_Rot;
  readonly "net.minecraft.network.protocol.game.ClientboundMoveMinecartPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundMoveMinecartPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundMoveVehiclePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundOpenBookPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundOpenBookPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundOpenScreenPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundOpenScreenPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundOpenSignEditorPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundPlaceGhostRecipePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundPlayerAbilitiesPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundPlayerChatPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundPlayerChatPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundPlayerCombatEndPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundPlayerCombatEnterPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundPlayerCombatKillPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundPlayerInfoRemovePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundPlayerInfoUpdatePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundPlayerLookAtPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundPlayerPositionPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundPlayerRotationPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundPlayerRotationPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundProjectilePowerPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundProjectilePowerPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundRecipeBookAddPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundRecipeBookAddPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundRecipeBookRemovePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundRecipeBookRemovePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundRecipeBookSettingsPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundRecipeBookSettingsPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundRemoveEntitiesPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundRemoveMobEffectPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundResetScorePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundResetScorePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundRespawnPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundRespawnPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundRotateHeadPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundRotateHeadPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSectionBlocksUpdatePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSelectAdvancementsTabPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundServerDataPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundServerDataPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetActionBarTextPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetBorderCenterPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetBorderLerpSizePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetBorderSizePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetBorderWarningDelayPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetBorderWarningDistancePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetCameraPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetCameraPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetChunkCacheCenterPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetChunkCacheRadiusPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetCursorItemPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetCursorItemPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetDefaultSpawnPositionPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetDisplayObjectivePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetEntityDataPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetEntityLinkPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetEntityMotionPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetEquipmentPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetExperiencePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetExperiencePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetHealthPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetHealthPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetHeldSlotPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetHeldSlotPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetObjectivePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetObjectivePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetPassengersPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetPassengersPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetPlayerInventoryPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetPlayerInventoryPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetPlayerTeamPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetScorePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetScorePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetSimulationDistancePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetSubtitleTextPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetTimePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetTimePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetTitlesAnimationPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSetTitleTextPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSoundEntityPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSoundEntityPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSoundPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSoundPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundStartConfigurationPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundStartConfigurationPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundStopSoundPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundStopSoundPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundSystemChatPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundSystemChatPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundTabListPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundTabListPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundTagQueryPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundTagQueryPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundTakeItemEntityPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundTeleportEntityPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundTestInstanceBlockStatus": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundTestInstanceBlockStatus;
  readonly "net.minecraft.network.protocol.game.ClientboundTickingStatePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundTickingStatePacket;
  readonly "net.minecraft.network.protocol.game.ClientboundTickingStepPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundTickingStepPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundTrackedWaypointPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundTrackedWaypointPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundUpdateAdvancementsPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundUpdateAttributesPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundUpdateMobEffectPacket;
  readonly "net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ClientboundUpdateRecipesPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundAcceptTeleportationPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundBlockEntityTagQueryPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundBlockEntityTagQueryPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundChangeDifficultyPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundChangeGameModePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundChangeGameModePacket;
  readonly "net.minecraft.network.protocol.game.ServerboundChatAckPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundChatAckPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundChatCommandPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundChatCommandPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundChatCommandSignedPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundChatCommandSignedPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundChatPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundChatPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundChatSessionUpdatePacket;
  readonly "net.minecraft.network.protocol.game.ServerboundChunkBatchReceivedPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundChunkBatchReceivedPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundClientCommandPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundClientCommandPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundClientTickEndPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundClientTickEndPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundCommandSuggestionPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundConfigurationAcknowledgedPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundConfigurationAcknowledgedPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundContainerButtonClickPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundContainerClickPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundContainerClickPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundContainerClosePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundContainerClosePacket;
  readonly "net.minecraft.network.protocol.game.ServerboundContainerSlotStateChangedPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundContainerSlotStateChangedPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundDebugSampleSubscriptionPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundDebugSampleSubscriptionPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundEditBookPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundEditBookPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundEntityTagQueryPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundEntityTagQueryPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundInteractPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundInteractPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundJigsawGeneratePacket;
  readonly "net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundLockDifficultyPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Pos": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundMovePlayerPacket_Pos;
  readonly "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$PosRot": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundMovePlayerPacket_PosRot;
  readonly "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$Rot": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundMovePlayerPacket_Rot;
  readonly "net.minecraft.network.protocol.game.ServerboundMovePlayerPacket$StatusOnly": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundMovePlayerPacket_StatusOnly;
  readonly "net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundMoveVehiclePacket;
  readonly "net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundPaddleBoatPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundPickItemFromBlockPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundPickItemFromBlockPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundPickItemFromEntityPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundPickItemFromEntityPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundPlaceRecipePacket;
  readonly "net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundPlayerAbilitiesPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundPlayerActionPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundPlayerActionPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundPlayerCommandPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundPlayerInputPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundPlayerInputPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundPlayerLoadedPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundPlayerLoadedPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundRecipeBookChangeSettingsPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundRecipeBookSeenRecipePacket;
  readonly "net.minecraft.network.protocol.game.ServerboundRenameItemPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundRenameItemPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundSeenAdvancementsPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundSelectBundleItemPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundSelectBundleItemPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundSelectTradePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundSelectTradePacket;
  readonly "net.minecraft.network.protocol.game.ServerboundSetBeaconPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundSetBeaconPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundSetCarriedItemPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundSetCommandBlockPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundSetCommandMinecartPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundSetCreativeModeSlotPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundSetJigsawBlockPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundSetStructureBlockPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundSetTestBlockPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundSetTestBlockPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundSignUpdatePacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundSignUpdatePacket;
  readonly "net.minecraft.network.protocol.game.ServerboundSwingPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundSwingPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundTeleportToEntityPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundTestInstanceBlockActionPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundTestInstanceBlockActionPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundUseItemOnPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundUseItemOnPacket;
  readonly "net.minecraft.network.protocol.game.ServerboundUseItemPacket": import('./binding-packages/net.minecraft.network.protocol.game.generated.js').ServerboundUseItemPacket;
  readonly "net.minecraft.network.protocol.handshake.ClientIntentionPacket": import('./binding-packages/net.minecraft.network.protocol.handshake.generated.js').ClientIntentionPacket;
  readonly "net.minecraft.network.protocol.login.ClientboundCustomQueryPacket": import('./binding-packages/net.minecraft.network.protocol.login.generated.js').ClientboundCustomQueryPacket;
  readonly "net.minecraft.network.protocol.login.ClientboundHelloPacket": import('./binding-packages/net.minecraft.network.protocol.login.generated.js').ClientboundHelloPacket;
  readonly "net.minecraft.network.protocol.login.ClientboundLoginCompressionPacket": import('./binding-packages/net.minecraft.network.protocol.login.generated.js').ClientboundLoginCompressionPacket;
  readonly "net.minecraft.network.protocol.login.ClientboundLoginDisconnectPacket": import('./binding-packages/net.minecraft.network.protocol.login.generated.js').ClientboundLoginDisconnectPacket;
  readonly "net.minecraft.network.protocol.login.ClientboundLoginFinishedPacket": import('./binding-packages/net.minecraft.network.protocol.login.generated.js').ClientboundLoginFinishedPacket;
  readonly "net.minecraft.network.protocol.login.ServerboundCustomQueryAnswerPacket": import('./binding-packages/net.minecraft.network.protocol.login.generated.js').ServerboundCustomQueryAnswerPacket;
  readonly "net.minecraft.network.protocol.login.ServerboundHelloPacket": import('./binding-packages/net.minecraft.network.protocol.login.generated.js').ServerboundHelloPacket;
  readonly "net.minecraft.network.protocol.login.ServerboundKeyPacket": import('./binding-packages/net.minecraft.network.protocol.login.generated.js').ServerboundKeyPacket;
  readonly "net.minecraft.network.protocol.login.ServerboundLoginAcknowledgedPacket": import('./binding-packages/net.minecraft.network.protocol.login.generated.js').ServerboundLoginAcknowledgedPacket;
  readonly "net.minecraft.network.protocol.ping.ClientboundPongResponsePacket": import('./binding-packages/net.minecraft.network.protocol.ping.generated.js').ClientboundPongResponsePacket;
  readonly "net.minecraft.network.protocol.ping.ServerboundPingRequestPacket": import('./binding-packages/net.minecraft.network.protocol.ping.generated.js').ServerboundPingRequestPacket;
  readonly "net.minecraft.network.protocol.status.ClientboundStatusResponsePacket": import('./binding-packages/net.minecraft.network.protocol.status.generated.js').ClientboundStatusResponsePacket;
  readonly "net.minecraft.network.protocol.status.ServerboundStatusRequestPacket": import('./binding-packages/net.minecraft.network.protocol.status.generated.js').ServerboundStatusRequestPacket;
}
