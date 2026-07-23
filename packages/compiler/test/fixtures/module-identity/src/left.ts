/* eslint-disable import-x/no-cycle */
import { Module } from '@shamoo/decorators';
import * as right from './right.js';

@Module({ imports: [right.Shared] })
export class Shared {
  public readonly side = 'left';
}
