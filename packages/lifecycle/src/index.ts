/**
 * Compiler-discovered lifecycle declarations.
 */
export { OnDisable, OnEnable, OnLoad, OnReload } from '@shamoo/decorators';
export type LifecycleStage = 'load' | 'enable' | 'reload' | 'disable';
