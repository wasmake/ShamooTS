import { Component } from '@shamoo/decorators';
import { createVelocityPlatform } from '@shamoo/velocity';

@Component()
export class VelocityComponent {
  public readonly platform = createVelocityPlatform;
}
