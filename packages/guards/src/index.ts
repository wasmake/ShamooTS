/**
 * Invocation guard declarations.
 */
import type { InvocationContext } from '@shamoo/interceptors';
export { UseGuards } from '@shamoo/decorators';
export interface Guard {
  canActivate(context: InvocationContext): boolean | Promise<boolean>;
}

export class GuardRejectedError extends Error {
  public readonly code = 'SHAMOO_GUARD_REJECTED';
  public constructor(public readonly guardIndex: number) {
    super(`Invocation rejected by guard ${String(guardIndex)}.`);
    this.name = 'GuardRejectedError';
  }
}

export async function runGuards(
  guards: readonly Guard[],
  context: InvocationContext,
): Promise<void> {
  for (const [index, guard] of guards.entries()) {
    if (!(await guard.canActivate(context))) throw new GuardRejectedError(index);
  }
}
