import type * as Paper from '@shamoo/paper-raw';
import type * as Nms from '@shamoo/paper-nms';
import type * as Packets from '@shamoo/paper-packets';
import type * as Velocity from '@shamoo/velocity-raw';

export type CompleteGeneratedSurfaces = readonly [
  typeof Paper,
  typeof Velocity,
  typeof Nms,
  typeof Packets,
];
