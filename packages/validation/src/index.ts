/**
 * Compiler-discovered validation rules.
 */
export { Validate } from '@shamoo/decorators';
export interface ValidationIssue {
  readonly path: readonly (string | number)[];
  readonly message: string;
}
export interface Validator<T = unknown> {
  validate(value: T): readonly ValidationIssue[] | Promise<readonly ValidationIssue[]>;
}
