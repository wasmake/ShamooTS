// Generated from velocity 3.4.0-20260121.190037-118 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM interface com.velocitypowered.api.event.AwaitingEventExecutor. */
export interface AwaitingEventExecutorMembers<E = unknown> {
  readonly __javaSupertypes?: readonly [EventHandler<E>];
  execute(arg0: E): void;
  executeAsync(arg0: E): EventTask | null;
}
export type AwaitingEventExecutor<E = unknown> = AwaitingEventExecutorMembers<E> & EventHandler<E>;
export interface AwaitingEventExecutorStatics {
}

/** JVM interface com.velocitypowered.api.event.Continuation. */
export interface ContinuationMembers {
  resume(): void;
  resumeWithException(arg0: JavaOpaque<"java.lang.Throwable">): void;
}
export type Continuation = ContinuationMembers;
export interface ContinuationStatics {
}

/** JVM interface com.velocitypowered.api.event.EventHandler. */
export interface EventHandlerMembers<E = unknown> {
  execute(arg0: E): void;
  executeAsync(arg0: E): EventTask | null;
}
export type EventHandler<E = unknown> = EventHandlerMembers<E>;
export interface EventHandlerStatics {
}

/** JVM interface com.velocitypowered.api.event.EventManager. */
export interface EventManagerMembers {
  fire<E>(arg0: E): PromiseLike<E>;
  fireAndForget(arg0: object): void;
  register<E>(arg0: object, arg1: JavaClass<E>, arg2: EventHandler<E>): void;
  register<E>(arg0: object, arg1: JavaClass<E>, arg2: PostOrder, arg3: EventHandler<E>): void;
  register<E>(arg0: object, arg1: JavaClass<E>, arg2: number, arg3: EventHandler<E>): void;
  register(arg0: object, arg1: object): void;
  unregister<E>(arg0: object, arg1: EventHandler<E>): void;
  unregisterListener(arg0: object, arg1: object): void;
  unregisterListeners(arg0: object): void;
}
export type EventManager = EventManagerMembers;
export interface EventManagerStatics {
}

/** JVM interface com.velocitypowered.api.event.EventTask. */
export interface EventTaskMembers {
  execute(arg0: Continuation): void;
  requiresAsync(): boolean;
}
export type EventTask = EventTaskMembers;
export interface EventTaskStatics {
  async(arg0: JavaRunnable): EventTask;
  resumeWhenComplete(arg0: PromiseLike<object>): EventTask;
  withContinuation(arg0: JavaConsumer<Continuation>): EventTask;
}

/** Live JVM enum com.velocitypowered.api.event.PostOrder; constants are host handles, not strings. */
export type PostOrder = JavaEnum<"com.velocitypowered.api.event.PostOrder", "CUSTOM" | "EARLY" | "FIRST" | "LAST" | "LATE" | "NORMAL"> & PostOrderMembers;
export interface PostOrderMembers {
}
export interface PostOrderStatics {
  readonly CUSTOM: PostOrder;
  readonly EARLY: PostOrder;
  readonly FIRST: PostOrder;
  readonly LAST: PostOrder;
  readonly LATE: PostOrder;
  readonly NORMAL: PostOrder;
  valueOf(arg0: string): PostOrder;
  values(): Array<PostOrder>;
}

/** JVM interface com.velocitypowered.api.event.ResultedEvent. */
export interface ResultedEventMembers<R /* extends ResultedEvent_Result */ = unknown> {
  getResult(): R;
  setResult(arg0: R): void;
}
export type ResultedEvent<R /* extends ResultedEvent_Result */ = unknown> = ResultedEventMembers<R>;
export interface ResultedEventStatics {
}

/** JVM class com.velocitypowered.api.event.ResultedEvent$ComponentResult. */
export interface ResultedEvent_ComponentResultMembers {
  readonly __javaSupertypes?: readonly [ResultedEvent_Result];
  getReasonComponent(): JavaOptional<j_net_kyori_adventure_text.Component>;
  isAllowed(): boolean;
  toString(): string;
}
export type ResultedEvent_ComponentResult = ResultedEvent_ComponentResultMembers & ResultedEvent_Result;
export interface ResultedEvent_ComponentResultStatics {
  new(arg0: boolean, arg1: j_net_kyori_adventure_text.Component): ResultedEvent_ComponentResult;
  allowed(): ResultedEvent_ComponentResult;
  denied(arg0: j_net_kyori_adventure_text.Component): ResultedEvent_ComponentResult;
}

/** JVM class com.velocitypowered.api.event.ResultedEvent$GenericResult. */
export interface ResultedEvent_GenericResultMembers {
  readonly __javaSupertypes?: readonly [ResultedEvent_Result];
  isAllowed(): boolean;
  toString(): string;
}
export type ResultedEvent_GenericResult = ResultedEvent_GenericResultMembers & ResultedEvent_Result;
export interface ResultedEvent_GenericResultStatics {
  allowed(): ResultedEvent_GenericResult;
  denied(): ResultedEvent_GenericResult;
}

/** JVM interface com.velocitypowered.api.event.ResultedEvent$Result. */
export interface ResultedEvent_ResultMembers {
  isAllowed(): boolean;
}
export type ResultedEvent_Result = ResultedEvent_ResultMembers;
export interface ResultedEvent_ResultStatics {
}

/** JVM interface com.velocitypowered.api.event.Subscribe. */
export interface SubscribeMembers {
  readonly __javaSupertypes?: readonly [JavaOpaque<"java.lang.annotation.Annotation">];
  async(): boolean;
  order(): PostOrder;
  priority(): number;
}
export type Subscribe = SubscribeMembers & JavaOpaque<"java.lang.annotation.Annotation">;
export interface SubscribeStatics {
}
