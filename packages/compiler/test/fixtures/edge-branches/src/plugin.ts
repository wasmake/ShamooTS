import * as Declarations from '@shamoo/decorators';

import { Dependency } from './dependency.js';

const computed = 'computed';

@Declarations.Plugin({
  method() {
    return 'ignored';
  },
  [computed]: undefined,
  expression: 1 + 2,
  nested: { z: 1, a: 2 },
})
export class EdgePlugin {
  public constructor(value = 1) {
    void value;
  }

  @Declarations.ConfigValue()
  public config!: unknown;

  @Declarations.Inject((1 + 2) as unknown as string)
  public iterator!: unknown;

  @Declarations.Optional()
  public dependency!: Dependency;

  // @ts-expect-error The fixture verifies compiler recovery when @Inject omits its required token.
  @Declarations.Inject()
  public inferredAfterEmptyInject!: Dependency;

  @Declarations.Requires({ enabled: true })
  public execute(dependency: Dependency, count = 1): void {
    void dependency;
    void count;
  }
}

@Declarations.Module({
  providers: Dependency as unknown as [],
  exports: 'invalid' as unknown as [],
})
export class EdgeModule {
  public readonly kind = 'edge';
}

@Declarations.Module()
export class EmptyModule {
  public readonly kind = 'empty';
}
