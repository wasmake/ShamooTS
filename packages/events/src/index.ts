/**
 * Platform-neutral event declarations.
 */
export { EventHandler } from '@shamoo/decorators';
export type EventPriority = 'lowest' | 'low' | 'normal' | 'high' | 'highest' | 'monitor';
export interface EventContext<T = unknown> {
  readonly event: T;
  readonly cancelled: boolean;
}
