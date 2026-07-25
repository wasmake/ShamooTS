import { Component, Plugin } from '@shamoo/decorators';

@Plugin()
class PrivatePlugin {
  public readonly value = 'private';
}
void PrivatePlugin;

export function createComponent(): object {
  @Component()
  class NestedComponent {
    public readonly value = 'nested';
  }
  return new NestedComponent();
}

@Component()
export default class DefaultComponent {
  public readonly value = 'default';
}
