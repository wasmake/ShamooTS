// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
/** A JVM type referenced by a signature but absent from this scanner model. */
declare const javaOpaqueBrand: unique symbol;
export type JavaOpaque<JavaName extends string, Arguments = never, Supertypes extends readonly unknown[] = readonly []> = object & { readonly [javaOpaqueBrand]: string; readonly __javaName?: JavaName; readonly __arguments?: Arguments; readonly __supertypes?: Supertypes };
export type JavaEnum<JavaName extends string, Constant extends string> = JavaOpaque<JavaName> & { readonly name: Constant };
export interface JavaClass<T = object> { readonly name: string; readonly __instance?: T }
export interface JavaRunnable { (): void }
export interface JavaConsumer<T> { (value: T): void }
export interface JavaBiConsumer<T, U> { (first: T, second: U): void }
export interface JavaSupplier<T> { (): T }
export interface JavaFunction<T, R> { (value: T): R }
export interface JavaBiFunction<T, U, R> { (first: T, second: U): R }
export interface JavaPredicate<T> { (value: T): boolean }
export interface JavaCollection<T = object> extends Iterable<T> { readonly size: number }
export interface JavaList<T = object> extends JavaCollection<T> { get(index: number): T }
export interface JavaSet<T = object> extends JavaCollection<T> { has(value: T): boolean }
export interface JavaMapEntry<K = object, V = object> { readonly key: K; readonly value: V }
export interface JavaMap<K = object, V = object> extends Iterable<JavaMapEntry<K, V>> { get(key: K): V | null; has(key: K): boolean; readonly size: number }
export type JavaOptional<T = object> = { readonly present: false } | { readonly present: true; readonly value: T };
export type JavaOptionalNumber = JavaOptional<number>;
export type JavaOptionalBigInt = JavaOptional<bigint>;
