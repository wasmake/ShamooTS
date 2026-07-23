import { Module } from '@shamoo/decorators';
import { forwardRef } from '@shamoo/di';

@Module({ imports: [forwardRef(() => SecondModule)] })
export class FirstModule {
  public readonly id = 'first';
}

@Module({ imports: [FirstModule] })
export class SecondModule {
  public readonly id = 'second';
}
