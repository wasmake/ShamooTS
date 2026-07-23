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

@Module({ imports: [FourthModule] })
export class ThirdModule {
  public readonly id = 'third';
}

@Module({ imports: [ThirdModule] })
export class FourthModule {
  public readonly id = 'fourth';
}
