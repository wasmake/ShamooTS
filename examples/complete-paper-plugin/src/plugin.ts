import { Command, Context } from '@shamoo/commands';
import { Plugin } from '@shamoo/decorators';
import { OnDisable, OnDrain, OnEnable, OnLoad, OnReady } from '@shamoo/lifecycle';
import type { PaperCommandContext } from '@shamoo/paper';
import { OnPlayerJoinEvent } from '@shamoo/paper-raw';
import { Scheduled } from '@shamoo/scheduler';

export interface PaperRuntimeEvent {
  readonly type: string;
  readonly asynchronous: boolean;
}

@Plugin({ name: 'complete-paper-plugin' })
export class CompletePaperPlugin {
  private joins = 0;
  private scheduledRuns = 0;
  private ready = false;

  public get state(): Readonly<{ ready: boolean; joins: number; scheduledRuns: number }> {
    return Object.freeze({
      ready: this.ready,
      joins: this.joins,
      scheduledRuns: this.scheduledRuns,
    });
  }

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
  public playerJoined(@Context() event: PaperRuntimeEvent): void {
    this.joins += 1;
    console.info(
      `[complete-paper-plugin] Observed ${String(this.joins)} ${event.type} callback(s); asynchronous=${String(event.asynchronous)}.`,
    );
  }

  @Command('shamoo-status')
  public async status(@Context() context: PaperCommandContext): Promise<void> {
    await context.reply(
      `ready=${String(this.ready)} joins=${String(this.joins)} scheduledRuns=${String(this.scheduledRuns)}`,
    );
  }

  @Scheduled()
  public runImmediateTask(): void {
    this.scheduledRuns += 1;
    console.info('[complete-paper-plugin] Immediate global task ran.');
  }

  @OnDrain()
  public draining(): void {
    this.ready = false;
    console.info('[complete-paper-plugin] Draining new work.');
  }

  @OnDisable()
  public disabled(): void {
    console.info(
      `[complete-paper-plugin] Disabled after ${String(this.joins)} join callback(s) and ${String(this.scheduledRuns)} scheduled run(s).`,
    );
  }
}
