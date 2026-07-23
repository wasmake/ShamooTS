/** Compiler-discovered lifecycle declarations. @packageDocumentation */
export { OnDisable, OnEnable, OnLoad, OnReload } from '@shamoo/decorators';
export type LifecycleStage = 'load' | 'enable' | 'reload' | 'disable';
