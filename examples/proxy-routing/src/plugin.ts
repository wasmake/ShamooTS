import { OnDisable, OnEnable, Plugin } from '@shamoo/decorators';

@Plugin({ name: 'proxy-routing' })
export class ProxyRoutingPlugin {
  #enabled = false;

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
}
