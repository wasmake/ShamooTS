/**
 * Invocation interceptor declarations.
 */
export { UseInterceptors } from '@shamoo/decorators';
export interface InvocationContext {
  readonly target: object;
  readonly method: string | symbol;
  readonly arguments: readonly unknown[];
  proceed(): unknown;
}
export interface Interceptor {
  intercept(context: InvocationContext): unknown;
}
