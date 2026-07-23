import { Component } from '@shamoo/decorators';
import { createPaperPlatform } from '@shamoo/paper';

@Component()
export class PaperComponent {
  public readonly platform = createPaperPlatform;
}
