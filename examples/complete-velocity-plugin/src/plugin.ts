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
import { OnDisconnectEvent, OnPostLoginEvent } from '@shamoo/velocity-raw';

export type PluginPhase =
  'created' | 'loaded' | 'enabled' | 'ready' | 'draining' | 'disabled' | 'unloaded';
export interface VelocityRuntimeEvent {
  readonly type: string;
}

@Plugin({ name: 'complete-velocity-plugin' })
export class CompleteVelocityPlugin {
  #observedPlayers = 0;
  #loginEvents = 0;
  #disconnectEvents = 0;
  #phase: PluginPhase = 'created';

  public get phase(): PluginPhase {
    return this.#phase;
  }

  public get eventState(): Readonly<{
    observedPlayers: number;
    loginEvents: number;
    disconnectEvents: number;
  }> {
    return Object.freeze({
      observedPlayers: this.#observedPlayers,
      loginEvents: this.#loginEvents,
      disconnectEvents: this.#disconnectEvents,
    });
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
    this.#observedPlayers = 0;
  }

  @OnUnload()
  public unload(): void {
    this.#phase = 'unloaded';
  }

  @OnPostLoginEvent()
  public playerJoined(@Context() event: VelocityRuntimeEvent): void {
    this.#loginEvents += 1;
    this.#observedPlayers += 1;
    console.info(`[complete-velocity-plugin] Received ${event.type}.`);
  }

  @OnDisconnectEvent()
  public playerDisconnected(@Context() event: VelocityRuntimeEvent): void {
    this.#disconnectEvents += 1;
    this.#observedPlayers = Math.max(0, this.#observedPlayers - 1);
    console.info(`[complete-velocity-plugin] Received ${event.type}.`);
  }

  @Command('velocity-status')
  public status(): number {
    return this.#observedPlayers;
  }
}
