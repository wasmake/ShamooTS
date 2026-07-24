import {
  Command,
  Context,
  OnDisable,
  OnDrain,
  OnEnable,
  OnLoad,
  OnReady,
  OnUnload,
  Plugin,
} from '@shamoo/decorators';
import {
  OnDisconnectEvent,
  OnPostLoginEvent,
  type DisconnectEvent,
  type PostLoginEvent,
} from '@shamoo/velocity-raw';

export type PluginPhase =
  'created' | 'loaded' | 'enabled' | 'ready' | 'draining' | 'disabled' | 'unloaded';

@Plugin({ name: 'complete-velocity-plugin' })
export class CompleteVelocityPlugin {
  readonly #onlinePlayers = new Set<string>();
  #phase: PluginPhase = 'created';

  public get phase(): PluginPhase {
    return this.#phase;
  }

  public get onlinePlayers(): readonly string[] {
    return Object.freeze([...this.#onlinePlayers].sort());
  }

  @OnLoad()
  public load(): void {
    this.#phase = 'loaded';
  }

  @OnEnable()
  public enable(): void {
    this.#phase = 'enabled';
  }

  @OnReady()
  public ready(): void {
    this.#phase = 'ready';
  }

  @OnDrain()
  public drain(): void {
    this.#phase = 'draining';
  }

  @OnDisable()
  public disable(): void {
    this.#phase = 'disabled';
    this.#onlinePlayers.clear();
  }

  @OnUnload()
  public unload(): void {
    this.#phase = 'unloaded';
  }

  @OnPostLoginEvent()
  public playerJoined(@Context() event: PostLoginEvent): void {
    this.#onlinePlayers.add(event.getPlayer().getUsername());
  }

  @OnDisconnectEvent()
  public playerDisconnected(@Context() event: DisconnectEvent): void {
    this.#onlinePlayers.delete(event.getPlayer().getUsername());
  }

  @Command('velocity-status')
  public status(): number {
    return this.#onlinePlayers.size;
  }
}
