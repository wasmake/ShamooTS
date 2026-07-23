import {
  ConfigValue,
  Inject,
  OnDisable,
  OnEnable,
  Optional,
  Plugin,
  Service,
} from '@shamoo/decorators';

@Plugin()
@Service()
@OnEnable()
export class BadDecorators {
  public constructor(@Inject('one') @ConfigValue('two') value: string) {
    void value;
  }

  @OnEnable()
  @OnEnable()
  @OnDisable()
  public lifecycle(): void {
    return;
  }

  public readonly invalid = true;

  @Optional()
  public missingToken!: string;
}
