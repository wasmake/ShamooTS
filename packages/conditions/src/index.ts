/** Compiler-discovered component conditions. @packageDocumentation */
export { Requires, RequiresExpression } from '@shamoo/decorators';
export interface ConditionContext {
  readonly platform: 'paper' | 'velocity';
  readonly environment: Readonly<Record<string, string | undefined>>;
}
export interface Condition {
  evaluate(context: ConditionContext): boolean | Promise<boolean>;
}
