/**
 * Exception filter declarations.
 */
import type { InvocationContext } from '@shamoo/interceptors';
export { Catch } from '@shamoo/decorators';
export interface ExceptionFilter<T = unknown> {
  catch(error: T, context: InvocationContext): unknown;
}

export async function applyExceptionFilters(
  error: unknown,
  filters: readonly ExceptionFilter[],
  context: InvocationContext,
): Promise<unknown> {
  let current = error;
  for (const filter of filters) {
    try {
      return await filter.catch(current, context);
    } catch (next) {
      current = next;
    }
  }
  throw current;
}
