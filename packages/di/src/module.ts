import { InvalidModuleError } from './errors.js';
import type { AsyncModuleDefinition, DynamicModuleDefinition, ModuleDefinition } from './types.js';

const moduleId = /^[a-z][a-z0-9]*(?:[._-][a-z0-9]+)*$/;

export function defineModule(definition: ModuleDefinition): ModuleDefinition {
  if (!moduleId.test(definition.id))
    throw new InvalidModuleError(`Invalid module id: ${definition.id}.`);
  return Object.freeze({ ...definition });
}

export function defineDynamicModule(definition: DynamicModuleDefinition): DynamicModuleDefinition {
  return defineModule(definition);
}

export function defineAsyncModule(definition: AsyncModuleDefinition): AsyncModuleDefinition {
  if (!moduleId.test(definition.id) || typeof definition.useFactory !== 'function') {
    throw new InvalidModuleError(`Invalid async module: ${definition.id}.`);
  }
  return Object.freeze({ ...definition });
}
