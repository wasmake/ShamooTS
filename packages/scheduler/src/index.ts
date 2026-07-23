/** Compiler-discovered task declarations. @packageDocumentation */
export { Interval, Scheduled, Timeout } from '@shamoo/decorators';
export type TimeUnit = 'milliseconds' | 'seconds' | 'minutes' | 'hours' | 'ticks';
export interface Schedule {
  readonly delay: number;
  readonly unit: TimeUnit;
  readonly repeat?: number;
}
