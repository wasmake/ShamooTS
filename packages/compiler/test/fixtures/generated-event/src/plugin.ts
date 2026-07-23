import { Context, Plugin } from '@shamoo/decorators';
import { OnPlayerJoinEvent, type PlayerJoinEvent } from '@shamoo/paper-raw';

@Plugin()
export class GeneratedEventPlugin {
  @OnPlayerJoinEvent()
  public joined(@Context() event: PlayerJoinEvent): void {
    void event.getPlayer();
  }
}
