import { ConfigValue, Inject, OnDisable, OnEnable, Plugin, Service } from '@shamoo/decorators';

@Plugin()
@Service()
@OnEnable()
export class BadDecorators {
  public constructor(@Inject('one') @ConfigValue('two') value: string) {
    void value;
  }

  @OnEnable()
  @OnDisable()
  public lifecycle(): void {
    return;
  }

  public readonly invalid = true;
}
