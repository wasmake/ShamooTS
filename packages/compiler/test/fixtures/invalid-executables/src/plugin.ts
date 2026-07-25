import { Command, EventHandler, OnEnable, Plugin, Scheduled } from '@shamoo/decorators';

const computedName = 'computedName';

@Plugin()
export class InvalidExecutables {
  @Scheduled()
  @Scheduled()
  public repeated(): void {
    return;
  }

  @Command('invalid')
  @EventHandler()
  public callbackConflict(): void {
    return;
  }

  @OnEnable()
  @Command('invalid-lifecycle')
  public lifecycleConflict(): void {
    return;
  }

  @OnEnable()
  public 'string-name'(): void {
    return;
  }

  @OnEnable()
  public 1(): void {
    return;
  }

  @OnEnable()
  public [computedName](): void {
    return;
  }

  // @ts-expect-error Legacy TypeScript decorators cannot target private methods.
  @OnEnable()
  #privateName(): void {
    return;
  }

  public usePrivateNameForFixture(): void {
    this.#privateName();
  }
}
