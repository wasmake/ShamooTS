import { Command, OnDisable, OnEnable, Plugin } from '@shamoo/decorators';

@Plugin({ name: 'dual-platform-plugin' })
export class DualPlatformPlugin {
  #enabled = false;
  #statusChecks = 0;

  public get enabled(): boolean {
    return this.#enabled;
  }

  @OnEnable()
  public enable(): void {
    this.#enabled = true;
  }

  @OnDisable()
  public disable(): void {
    this.#enabled = false;
  }

  @Command('shamoo-status')
  public status(): number {
    this.#statusChecks += 1;
    return this.#enabled ? this.#statusChecks : 0;
  }
}
