// Generated from velocity 3.4.0 (velocity-api+adventure). Do not edit.
import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';
import type * as j_com_velocitypowered_api_proxy_server from './com.velocitypowered.api.proxy.server.generated.js';

/** JVM class com.velocitypowered.api.event.query.ProxyQueryEvent. */
export interface ProxyQueryEventMembers {
  getQuerierAddress(): JavaOpaque<"java.net.InetAddress">;
  getQueryType(): ProxyQueryEvent_QueryType;
  getResponse(): j_com_velocitypowered_api_proxy_server.QueryResponse;
  setResponse(arg0: j_com_velocitypowered_api_proxy_server.QueryResponse): void;
  toString(): string;
}
export type ProxyQueryEvent = ProxyQueryEventMembers;
export interface ProxyQueryEventStatics {
  new(arg0: ProxyQueryEvent_QueryType, arg1: JavaOpaque<"java.net.InetAddress">, arg2: j_com_velocitypowered_api_proxy_server.QueryResponse): ProxyQueryEvent;
}

/** Live JVM enum com.velocitypowered.api.event.query.ProxyQueryEvent$QueryType; constants are host handles, not strings. */
export type ProxyQueryEvent_QueryType = JavaEnum<"com.velocitypowered.api.event.query.ProxyQueryEvent$QueryType", "BASIC" | "FULL"> & ProxyQueryEvent_QueryTypeMembers;
export interface ProxyQueryEvent_QueryTypeMembers {
}
export interface ProxyQueryEvent_QueryTypeStatics {
  readonly BASIC: ProxyQueryEvent_QueryType;
  readonly FULL: ProxyQueryEvent_QueryType;
  valueOf(arg0: string): ProxyQueryEvent_QueryType;
  values(): Array<ProxyQueryEvent_QueryType>;
}
