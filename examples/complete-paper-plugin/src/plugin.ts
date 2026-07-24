import { Command } from '@shamoo/commands';
import { Context, Plugin } from '@shamoo/decorators';
import { OnDisable, OnDrain, OnEnable, OnLoad, OnReady } from '@shamoo/lifecycle';
import { OnPlayerJoinEvent, type PlayerJoinEvent } from '@shamoo/paper-raw';
import { Scheduled } from '@shamoo/scheduler';

@Plugin({ name: 'complete-paper-plugin' })
export class CompletePaperPlugin {
  private joins = 0;
  private heartbeats = 0;
  private ready = false;

  @OnLoad()
  public loaded(): void {
    console.info('[complete-paper-plugin] Component metadata loaded.');
  }

  @OnEnable()
  public enabled(): void {
    console.info('[complete-paper-plugin] Plugin enabled.');
  }

  @OnReady()
  public becameReady(): void {
    this.ready = true;
    console.info('[complete-paper-plugin] Ready to receive events and commands.');
  }

  @OnPlayerJoinEvent()
  public playerJoined(@Context() event: PlayerJoinEvent): void {
    this.joins += 1;
    event.getPlayer().sendRawMessage('Welcome from the complete Shamoo example.');
    console.info(`[complete-paper-plugin] Observed ${String(this.joins)} player join(s).`);
  }

  @Command('shamoo-status')
  public status(): boolean {
    console.info(
      `[complete-paper-plugin] ready=${String(this.ready)} joins=${String(this.joins)} heartbeats=${String(this.heartbeats)}`,
    );
    return true;
  }

  @Scheduled({ delay: 20, unit: 'ticks' })
  public heartbeat(): void {
    this.heartbeats += 1;
    console.info(`[complete-paper-plugin] Heartbeat ${String(this.heartbeats)}.`);
  }

  @OnDrain()
  public draining(): void {
    this.ready = false;
    console.info('[complete-paper-plugin] Draining new work.');
  }

  @OnDisable()
  public disabled(): void {
    console.info(
      `[complete-paper-plugin] Disabled after ${String(this.joins)} join(s) and ${String(this.heartbeats)} heartbeat(s).`,
    );
  }
}
