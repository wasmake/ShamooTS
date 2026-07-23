/**
 * Input transformation declarations.
 */
export { UsePipes } from '@shamoo/decorators';
export interface PipeContext {
  readonly kind: 'event' | 'command' | 'task';
  readonly parameter?: string;
}
export interface Pipe<Input = unknown, Output = unknown> {
  transform(value: Input, context: PipeContext): Output | Promise<Output>;
}
