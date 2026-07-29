import { Context, Plugin } from '@shamoo/decorators';
import {
  OnPlayerJoinEvent,
  OnPlayerRecipeBookClickEvent_2,
  type PaperHandle,
  type PlayerJoinEvent,
} from '@shamoo/paper-raw';

@Plugin()
export class GeneratedEventPlugin {
  @OnPlayerJoinEvent()
  @OnPlayerRecipeBookClickEvent_2('HIGHEST', true)
  public joined(@Context() event: PaperHandle<PlayerJoinEvent>): void {
    void event.$invoke('getPlayer', '()Lorg/bukkit/entity/Player;');
  }
}
