/** Exact-version Paper NMS declarations. No cross-version compatibility is promised. */
export * from './generated/bindings.generated.js';

export const PAPER_NMS_COMPATIBILITY = 'paper-1.21.8+paper.55+mache.2' as const;
declare const liveNmsHandle: unique symbol;
export interface LiveNmsHandle<T> {
  readonly value: T;
  readonly compatibility: typeof PAPER_NMS_COMPATIBILITY;
  readonly [liveNmsHandle]: true;
}
