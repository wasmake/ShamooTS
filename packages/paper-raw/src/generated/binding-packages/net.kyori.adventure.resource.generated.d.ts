// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_net_kyori_adventure_audience from './net.kyori.adventure.audience.generated.js';
import type * as j_net_kyori_adventure_builder from './net.kyori.adventure.builder.generated.js';
import type * as j_net_kyori_adventure_text from './net.kyori.adventure.text.generated.js';

/** JVM interface net.kyori.adventure.resource.ResourcePackCallback. */
export interface ResourcePackCallbackMembers {
  packEventReceived(arg0: JavaOpaque<"java.util.UUID">, arg1: ResourcePackStatus, arg2: j_net_kyori_adventure_audience.Audience): void;
}
export type ResourcePackCallback = ResourcePackCallbackMembers;
export interface ResourcePackCallbackStatics {
  noOp(): ResourcePackCallback;
  onTerminal(arg0: JavaBiConsumer<JavaOpaque<"java.util.UUID">, j_net_kyori_adventure_audience.Audience>, arg1: JavaBiConsumer<JavaOpaque<"java.util.UUID">, j_net_kyori_adventure_audience.Audience>): ResourcePackCallback;
}

/** JVM interface net.kyori.adventure.resource.ResourcePackInfo. */
export interface ResourcePackInfoMembers {
  readonly __javaSupertypes?: readonly [ResourcePackInfoLike, JavaOpaque<"net.kyori.examination.Examinable">];
  asResourcePackInfo(): ResourcePackInfo;
  hash(): string;
  id(): JavaOpaque<"java.util.UUID">;
  uri(): JavaOpaque<"java.net.URI">;
}
export type ResourcePackInfo = ResourcePackInfoMembers & ResourcePackInfoLike & JavaOpaque<"net.kyori.examination.Examinable">;
export interface ResourcePackInfoStatics {
  resourcePackInfo(): ResourcePackInfo_Builder;
  resourcePackInfo(arg0: JavaOpaque<"java.util.UUID">, arg1: JavaOpaque<"java.net.URI">, arg2: string): ResourcePackInfo;
}

/** JVM interface net.kyori.adventure.resource.ResourcePackInfo$Builder. */
export interface ResourcePackInfo_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<ResourcePackInfo>, ResourcePackInfoLike];
  asResourcePackInfo(): ResourcePackInfo;
  build(): object;
  build(): ResourcePackInfo;
  computeHashAndBuild(): PromiseLike<ResourcePackInfo>;
  computeHashAndBuild(arg0: JavaOpaque<"java.util.concurrent.Executor">): PromiseLike<ResourcePackInfo>;
  hash(arg0: string): ResourcePackInfo_Builder;
  id(arg0: JavaOpaque<"java.util.UUID">): ResourcePackInfo_Builder;
  uri(arg0: JavaOpaque<"java.net.URI">): ResourcePackInfo_Builder;
}
export type ResourcePackInfo_Builder = ResourcePackInfo_BuilderMembers & j_net_kyori_adventure_builder.AbstractBuilder<ResourcePackInfo> & ResourcePackInfoLike;
export interface ResourcePackInfo_BuilderStatics {
}

/** JVM interface net.kyori.adventure.resource.ResourcePackInfoLike. */
export interface ResourcePackInfoLikeMembers {
  asResourcePackInfo(): ResourcePackInfo;
}
export type ResourcePackInfoLike = ResourcePackInfoLikeMembers;
export interface ResourcePackInfoLikeStatics {
}

/** JVM interface net.kyori.adventure.resource.ResourcePackRequest. */
export interface ResourcePackRequestMembers {
  readonly __javaSupertypes?: readonly [ResourcePackRequestLike, JavaOpaque<"net.kyori.examination.Examinable">];
  asResourcePackRequest(): ResourcePackRequest;
  callback(): ResourcePackCallback;
  callback(arg0: ResourcePackCallback): ResourcePackRequest;
  packs(): JavaList<ResourcePackInfo>;
  packs(arg0: Iterable<ResourcePackInfoLike>): ResourcePackRequest;
  prompt(): j_net_kyori_adventure_text.Component | null;
  replace(): boolean;
  replace(arg0: boolean): ResourcePackRequest;
  required(): boolean;
}
export type ResourcePackRequest = ResourcePackRequestMembers & ResourcePackRequestLike & JavaOpaque<"net.kyori.examination.Examinable">;
export interface ResourcePackRequestStatics {
  addingRequest(arg0: ResourcePackInfoLike, ...arg1: Array<ResourcePackInfoLike>): ResourcePackRequest;
  resourcePackRequest(): ResourcePackRequest_Builder;
  resourcePackRequest(arg0: ResourcePackRequest): ResourcePackRequest_Builder;
}

/** JVM interface net.kyori.adventure.resource.ResourcePackRequest$Builder. */
export interface ResourcePackRequest_BuilderMembers {
  readonly __javaSupertypes?: readonly [j_net_kyori_adventure_builder.AbstractBuilder<ResourcePackRequest>, ResourcePackRequestLike];
  asResourcePackRequest(): ResourcePackRequest;
  callback(arg0: ResourcePackCallback): ResourcePackRequest_Builder;
  packs(arg0: Iterable<ResourcePackInfoLike>): ResourcePackRequest_Builder;
  packs(arg0: ResourcePackInfoLike, ...arg1: Array<ResourcePackInfoLike>): ResourcePackRequest_Builder;
  prompt(arg0: j_net_kyori_adventure_text.Component | null): ResourcePackRequest_Builder | null;
  replace(arg0: boolean): ResourcePackRequest_Builder;
  required(arg0: boolean): ResourcePackRequest_Builder;
}
export type ResourcePackRequest_Builder = ResourcePackRequest_BuilderMembers & j_net_kyori_adventure_builder.AbstractBuilder<ResourcePackRequest> & ResourcePackRequestLike;
export interface ResourcePackRequest_BuilderStatics {
}

/** JVM interface net.kyori.adventure.resource.ResourcePackRequestLike. */
export interface ResourcePackRequestLikeMembers {
  asResourcePackRequest(): ResourcePackRequest;
}
export type ResourcePackRequestLike = ResourcePackRequestLikeMembers;
export interface ResourcePackRequestLikeStatics {
}

/** Live JVM enum net.kyori.adventure.resource.ResourcePackStatus; constants are host handles, not strings. */
export type ResourcePackStatus = JavaEnum<"net.kyori.adventure.resource.ResourcePackStatus", "ACCEPTED" | "DECLINED" | "DISCARDED" | "DOWNLOADED" | "FAILED_DOWNLOAD" | "FAILED_RELOAD" | "INVALID_URL" | "SUCCESSFULLY_LOADED"> & ResourcePackStatusMembers;
export interface ResourcePackStatusMembers {
  intermediate(): boolean;
}
export interface ResourcePackStatusStatics {
  readonly ACCEPTED: ResourcePackStatus;
  readonly DECLINED: ResourcePackStatus;
  readonly DISCARDED: ResourcePackStatus;
  readonly DOWNLOADED: ResourcePackStatus;
  readonly FAILED_DOWNLOAD: ResourcePackStatus;
  readonly FAILED_RELOAD: ResourcePackStatus;
  readonly INVALID_URL: ResourcePackStatus;
  readonly SUCCESSFULLY_LOADED: ResourcePackStatus;
  valueOf(arg0: string): ResourcePackStatus;
  values(): Array<ResourcePackStatus>;
}
