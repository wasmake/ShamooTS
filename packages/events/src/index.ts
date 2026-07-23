/** Platform-neutral event declarations. @packageDocumentation */
export { EventHandler } from '@shamoo/decorators';
export type EventPriority = 'lowest' | 'low' | 'normal' | 'high' | 'highest' | 'monitor';
export interface EventContext<T = unknown> {
  readonly event: T;
  readonly cancelled: boolean;
}
