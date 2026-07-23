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

export class ValidationError extends Error {
  public readonly code = 'SHAMOO_VALIDATION';
  public constructor(public readonly issues: readonly ValidationIssue[]) {
    super(`Validation failed with ${String(issues.length)} issue(s).`);
    this.name = 'ValidationError';
  }
}

export async function validateValue(
  value: unknown,
  validators: readonly Validator[],
): Promise<void> {
  const issues = (
    await Promise.all(validators.map((validator) => Promise.resolve(validator.validate(value))))
  ).flat();
  if (issues.length > 0) throw new ValidationError(issues);
}
