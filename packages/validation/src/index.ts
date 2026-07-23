/** Compiler-discovered validation rules. @packageDocumentation */
export { Validate } from '@shamoo/decorators';
export interface ValidationIssue {
  readonly path: readonly (string | number)[];
  readonly message: string;
}
export interface Validator<T = unknown> {
  validate(value: T): readonly ValidationIssue[] | Promise<readonly ValidationIssue[]>;
}
