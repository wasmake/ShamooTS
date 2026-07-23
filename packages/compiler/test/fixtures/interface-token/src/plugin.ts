import { Inject, OnEnable, Plugin } from '@shamoo/decorators';
import { createToken } from '@shamoo/di';

import type { TypeOnlyDependency } from './type-only.js';

interface MissingToken {
  run(): void;
}

type MissingAlias = string;
const STRING = createToken<string>('string');

@Plugin()
export class BadPlugin {
  public constructor(public readonly missing: MissingToken) {}

  @OnEnable()
  public enable(
    primitive: string,
    contract: MissingToken,
    alias: MissingAlias,
    typeOnly: TypeOnlyDependency,
    @Inject(STRING) explicit: string,
  ): void {
    void [primitive, contract, alias, typeOnly, explicit];
  }
}
