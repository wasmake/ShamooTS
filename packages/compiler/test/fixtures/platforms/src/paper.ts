import { Plugin } from '@shamoo/decorators';
import { createPaperPlatform } from '@shamoo/paper';

@Plugin()
export class PaperPlugin {
  public readonly platformFactory = createPaperPlatform;
}
