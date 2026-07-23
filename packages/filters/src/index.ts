/**
 * Exception filter declarations.
 */
import type { InvocationContext } from '@shamoo/interceptors';
export { Catch } from '@shamoo/decorators';
export interface ExceptionFilter<T = unknown> {
  catch(error: T, context: InvocationContext): unknown;
}
