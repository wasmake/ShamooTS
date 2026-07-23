import type { LiveNmsHandle } from '@shamoo/paper-nms';
import type { PacketContext } from '@shamoo/paper-packets';

export type InternalBindings = LiveNmsHandle<object> | PacketContext<object>;
