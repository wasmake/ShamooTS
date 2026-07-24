/**
 * Input transformation declarations.
 */
export { UsePipes } from '@shamoo/decorators';
export interface PipeContext {
  readonly kind: 'event' | 'command' | 'task' | 'packet' | 'service';
  readonly index: number;
  readonly parameter?: string;
  readonly signal: AbortSignal;
}
export interface Pipe<Input = unknown, Output = unknown> {
  transform(value: Input, context: PipeContext): Output | Promise<Output>;
}

export async function applyPipes(
  value: unknown,
  pipes: readonly Pipe[],
  context: PipeContext,
): Promise<unknown> {
  let transformed = value;
  for (const pipe of pipes) transformed = await pipe.transform(transformed, context);
  return transformed;
}
