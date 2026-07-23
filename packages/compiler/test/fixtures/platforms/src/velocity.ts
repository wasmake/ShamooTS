import { Plugin } from '@shamoo/decorators';
import { createVelocityPlatform } from '@shamoo/velocity';

@Plugin()
export class VelocityPlugin {
  public readonly platformFactory = createVelocityPlatform;
}
