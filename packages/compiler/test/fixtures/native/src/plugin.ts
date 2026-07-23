import 'node:fs';
import 'node:vm';
// eslint-disable-next-line import-x/no-unresolved -- intentionally unsupported compiler fixture
import binding from './binding.node';
import { Plugin } from '@shamoo/decorators';

@Plugin()
export class NativePlugin {
  public readonly binding = binding;
}
