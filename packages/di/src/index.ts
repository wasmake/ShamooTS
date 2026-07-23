import type { Constructor } from '@shamoo/common';

declare const tokenBrand: unique symbol;
export interface InjectionToken<T> {
  readonly description: string;
  readonly [tokenBrand]: T;
}
export type ServiceIdentifier<T> = Constructor<T> | InjectionToken<T>;

export function createToken<T>(description: string): InjectionToken<T> {
  if (description.trim().length === 0) throw new TypeError('Token description must not be empty.');
  return Object.freeze({ description: description.trim() }) as InjectionToken<T>;
}
