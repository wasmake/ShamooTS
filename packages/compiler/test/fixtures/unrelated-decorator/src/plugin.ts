import { OnEnable, Plugin } from '@shamoo/decorators';

function Unrelated(): ClassDecorator & MethodDecorator {
  return () => undefined;
}

@Unrelated()
@Plugin()
export class DecoratedPlugin {
  @Unrelated()
  public ignored(): void {
    return;
  }

  @Unrelated()
  @OnEnable()
  public enabled(): void {
    return;
  }
}
