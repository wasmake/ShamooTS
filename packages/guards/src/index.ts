/** Invocation guard declarations. @packageDocumentation */
import type { InvocationContext } from '@shamoo/interceptors';
export { UseGuards } from '@shamoo/decorators';
export interface Guard {
  canActivate(context: InvocationContext): boolean | Promise<boolean>;
}
