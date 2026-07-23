/* eslint-disable import-x/no-cycle */
import { Module } from '@shamoo/decorators';
import { Shared as LeftShared } from './left.js';

@Module({ imports: [LeftShared] })
export class Shared {
  public readonly side = 'right';
}
