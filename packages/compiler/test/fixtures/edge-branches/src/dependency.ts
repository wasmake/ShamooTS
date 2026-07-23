import { Service } from '@shamoo/decorators';

@Service()
export class Dependency {
  public readonly kind = 'dependency';
}
