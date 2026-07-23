import * as decorators from '@shamoo/decorators';
import { createToken } from '@shamoo/di';

import { IMPORTED_TOKEN as RenamedToken } from './tokens.js';

const LOCAL_TOKEN = createToken<string>('local');

@decorators.Plugin()
export class TokenPlugin {
  public constructor(
    @decorators.Inject('literal') public readonly literal: string,
    @decorators.Inject(RenamedToken) public readonly imported: string,
    @decorators.Inject(LOCAL_TOKEN) public readonly local: string,
  ) {}
}

const Plugin = (): ClassDecorator => () => undefined;

@Plugin()
export class ShadowedPlugin {
  public readonly shadowed = true;
}
