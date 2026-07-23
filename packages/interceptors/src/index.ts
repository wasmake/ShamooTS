/**
 * Invocation interceptor declarations.
 */
export { UseInterceptors } from '@shamoo/decorators';
export type InvocationKind = 'event' | 'command' | 'task' | 'service';
export interface InvocationContext<Result = unknown> {
  readonly id: string;
  readonly correlationId: string;
  readonly kind: InvocationKind;
  readonly target: object;
  readonly method: string | symbol;
  readonly arguments: readonly unknown[];
  readonly signal: AbortSignal;
  readonly attributes: ReadonlyMap<string, unknown>;
  proceed(): Promise<Result>;
}
export interface Interceptor<Result = unknown> {
  intercept(context: InvocationContext<Result>): Result | Promise<Result>;
}

/** Composes interceptors in declaration order; completion and errors unwind in reverse order. */
export function composeInterceptors<Result>(
  context: Omit<InvocationContext<Result>, 'proceed'>,
  interceptors: readonly Interceptor<Result>[],
  handler: () => Result | Promise<Result>,
): Promise<Result> {
  const dispatch = (index: number): Promise<Result> => {
    const interceptor = interceptors[index];
    if (interceptor === undefined) return Promise.resolve(handler());
    let proceeded = false;
    return Promise.resolve(
      interceptor.intercept({
        ...context,
        proceed: () => {
          if (proceeded)
            return Promise.reject(new Error('Interceptor proceed() called more than once.'));
          proceeded = true;
          return dispatch(index + 1);
        },
      }),
    );
  };
  return dispatch(0);
}
