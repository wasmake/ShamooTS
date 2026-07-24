import { OnDisable, OnEnable, Plugin } from '@shamoo/decorators';

@Plugin({ name: 'hello-world' })
export class HelloWorldPlugin {
  private enabledAt: number | undefined;

  @OnEnable()
  public enabled(): void {
    this.enabledAt = Date.now();
    console.info('[hello-world] Hello from a compiler-discovered Shamoo plugin.');
  }

  @OnDisable()
  public disabled(): void {
    const elapsed = this.enabledAt === undefined ? 0 : Date.now() - this.enabledAt;
    console.info(`[hello-world] Goodbye after ${String(elapsed)}ms.`);
  }
}
