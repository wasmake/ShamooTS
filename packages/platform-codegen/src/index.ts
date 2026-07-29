/** Deterministic TypeScript generation from the JVM scanner intermediate model. @packageDocumentation */
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import * as ts from 'typescript';

export const JVM_API_MODEL_VERSION = 2 as const;
export type ModelPlatform = 'paper' | 'velocity' | 'paper-nms' | 'paper-packets';
export type DeclarationKind = 'class' | 'interface' | 'abstract' | 'record' | 'enum' | 'opaque';
export interface JvmTypeParameter {
  readonly name: string;
  readonly bound?: string;
}
export interface JvmParameter {
  readonly name: string;
  readonly type: string;
  readonly nullable?: boolean;
  readonly varargs?: boolean;
}
export interface JvmCallable {
  readonly id?: string;
  readonly descriptor?: string;
  readonly name: string;
  readonly parameters: readonly JvmParameter[];
  readonly returns: string;
  readonly nullable?: boolean;
  readonly static?: boolean;
  readonly default?: boolean;
  readonly deprecated?: string;
  readonly typeParameters?: readonly JvmTypeParameter[];
  readonly throws?: readonly string[];
}
export interface JvmField {
  readonly id?: string;
  readonly descriptor?: string;
  readonly name: string;
  readonly type: string;
  readonly static?: boolean;
  readonly readonly?: boolean;
  readonly constant?: string | number | boolean;
  readonly nullable?: boolean;
  readonly deprecated?: string;
}
export interface JvmDeclaration {
  readonly id: string;
  readonly javaName: string;
  readonly name: string;
  readonly kind: DeclarationKind;
  readonly nestedIn?: string;
  readonly deprecated?: string;
  readonly typeParameters?: readonly JvmTypeParameter[];
  readonly extends?: readonly string[];
  readonly implements?: readonly string[];
  readonly constructors?: readonly Omit<JvmCallable, 'name' | 'returns'>[];
  readonly methods?: readonly JvmCallable[];
  readonly fields?: readonly JvmField[];
  readonly enumConstants?: readonly string[];
  readonly functionalMethod?: string;
}
export interface JvmEvent {
  readonly type: string;
  readonly javaName: string;
  readonly cancellable: boolean;
}
export type PacketDirection = 'serverbound' | 'clientbound';
export type ProtocolPhase = 'common' | 'handshake' | 'status' | 'login' | 'configuration' | 'play';
export interface JvmPacketRegistration {
  readonly phase: ProtocolPhase;
  readonly direction: PacketDirection;
  readonly id?: number;
}
export interface JvmPacket {
  readonly type: string;
  readonly javaName: string;
  readonly registrations: readonly JvmPacketRegistration[];
}
export interface JvmApiModel {
  readonly schemaVersion: 2;
  readonly platform: ModelPlatform;
  readonly apiVersion: string;
  readonly mapping?: string;
  readonly generatedBy: string;
  readonly declarations: readonly JvmDeclaration[];
  readonly events?: readonly JvmEvent[];
  readonly packets?: readonly JvmPacket[];
}
export interface CoverageCount {
  readonly expected: number;
  readonly emitted: number;
  readonly percent: number;
}
export interface OpaqueMapping {
  readonly javaName: string;
  readonly occurrences: number;
  readonly reason: 'not-in-scanner-model' | 'unparseable-signature';
}
export interface PlatformCoverage {
  readonly platform: ModelPlatform;
  readonly apiVersion: string;
  readonly declarations: CoverageCount;
  readonly members: CoverageCount;
  readonly events: CoverageCount;
  readonly exceptions: CoverageCount;
  readonly packets: CoverageCount;
  readonly packetRegistrations: CoverageCount;
  readonly packetRegistrationIds: CoverageCount;
  readonly declarationIndex: CoverageCount;
  readonly opaqueMappings: readonly OpaqueMapping[];
  readonly exclusions: readonly CoverageExclusion[];
}
export interface CoverageExclusion {
  readonly package: string;
  readonly reason: string;
  readonly stability: string;
  readonly alternative: string;
  readonly approval: string;
}
export interface GeneratedPlatform {
  /** Barrel containing every package shard. */
  readonly declarations: string;
  readonly declarationShards: Readonly<Record<string, string>>;
  /** Barrel and registry for generated events. */
  readonly events: string;
  readonly eventShards: Readonly<Record<string, string>>;
  readonly packets: string;
  readonly coverage: PlatformCoverage;
}
export type GeneratedPlatformSources = Omit<GeneratedPlatform, 'coverage'>;
export interface GenerationDiff {
  readonly changed: boolean;
  readonly expected: string;
  readonly actual?: string;
}

function record(value: unknown, path: string): Record<string, unknown> {
  if (value === null || typeof value !== 'object' || Array.isArray(value))
    throw new TypeError(`${path} must be an object.`);
  return value as Record<string, unknown>;
}
function text(value: unknown, path: string): string {
  if (typeof value !== 'string' || value.trim() === '')
    throw new TypeError(`${path} must be a non-empty string.`);
  return value;
}
function list(value: unknown, path: string): readonly unknown[] {
  if (!Array.isArray(value)) throw new TypeError(`${path} must be an array.`);
  return value;
}
function optionalTexts(value: unknown, path: string): readonly string[] | undefined {
  return value === undefined
    ? undefined
    : list(value, path).map((item, index) => text(item, `${path}[${index}]`));
}
function optionalBoolean(value: unknown, path: string): boolean | undefined {
  if (value === undefined) return undefined;
  if (typeof value !== 'boolean') throw new TypeError(`${path} must be boolean.`);
  return value;
}
function parseParameters(value: unknown, path: string): readonly JvmParameter[] {
  const parameters = list(value, path).map((item, index) => {
    const source = record(item, `${path}[${index}]`);
    return {
      name: text(source.name, `${path}[${index}].name`),
      type: text(source.type, `${path}[${index}].type`),
      ...(optionalBoolean(source.nullable, `${path}[${index}].nullable`) === undefined
        ? {}
        : { nullable: source.nullable as boolean }),
      ...(optionalBoolean(source.varargs, `${path}[${index}].varargs`) === undefined
        ? {}
        : { varargs: source.varargs as boolean }),
    };
  });
  const invalidVarargs = parameters.findIndex(
    (parameter, index) => parameter.varargs === true && index !== parameters.length - 1,
  );
  if (invalidVarargs >= 0)
    throw new TypeError(
      `${path}[${invalidVarargs}].varargs may only be true for the last parameter.`,
    );
  return parameters;
}
function parseTypeParameters(
  value: unknown,
  path: string,
): readonly JvmTypeParameter[] | undefined {
  if (value === undefined) return undefined;
  return list(value, path).map((item, index) => {
    const source = record(item, `${path}[${index}]`);
    return {
      name: text(source.name, `${path}[${index}].name`),
      ...(source.bound === undefined
        ? {}
        : { bound: text(source.bound, `${path}[${index}].bound`) }),
    };
  });
}
function parseCallable(value: unknown, path: string): JvmCallable {
  const source = record(value, path);
  const parsedTypeParameters = parseTypeParameters(source.typeParameters, `${path}.typeParameters`);
  const parsedThrows = optionalTexts(source.throws, `${path}.throws`);
  return {
    ...(source.id === undefined ? {} : { id: text(source.id, `${path}.id`) }),
    ...(source.descriptor === undefined
      ? {}
      : { descriptor: text(source.descriptor, `${path}.descriptor`) }),
    name: text(source.name, `${path}.name`),
    parameters: parseParameters(source.parameters, `${path}.parameters`),
    returns: text(source.returns, `${path}.returns`),
    ...(optionalBoolean(source.nullable, `${path}.nullable`) === undefined
      ? {}
      : { nullable: source.nullable as boolean }),
    ...(optionalBoolean(source.static, `${path}.static`) === undefined
      ? {}
      : { static: source.static as boolean }),
    ...(optionalBoolean(source.default, `${path}.default`) === undefined
      ? {}
      : { default: source.default as boolean }),
    ...(source.deprecated === undefined
      ? {}
      : { deprecated: text(source.deprecated, `${path}.deprecated`) }),
    ...(parsedTypeParameters === undefined ? {} : { typeParameters: parsedTypeParameters }),
    ...(parsedThrows === undefined ? {} : { throws: parsedThrows }),
  };
}

const platforms = new Set<ModelPlatform>(['paper', 'velocity', 'paper-nms', 'paper-packets']);
const declarationKinds = new Set<DeclarationKind>([
  'class',
  'interface',
  'abstract',
  'record',
  'enum',
  'opaque',
]);
const phases = new Set<ProtocolPhase>([
  'common',
  'handshake',
  'status',
  'login',
  'configuration',
  'play',
]);
const directions = new Set<PacketDirection>(['serverbound', 'clientbound']);

/** Parses the canonical schema-v2 scanner model. */
export function parseJvmApiModel(input: unknown): JvmApiModel {
  const root = record(typeof input === 'string' ? JSON.parse(input) : input, 'model');
  if (root.schemaVersion !== JVM_API_MODEL_VERSION)
    throw new TypeError(`model.schemaVersion must be ${JVM_API_MODEL_VERSION}.`);
  const platform = text(root.platform, 'model.platform') as ModelPlatform;
  if (!platforms.has(platform)) throw new TypeError(`Unsupported model.platform '${platform}'.`);
  const declarations = list(root.declarations, 'model.declarations').map(
    (item, index): JvmDeclaration => {
      const path = `model.declarations[${index}]`;
      const source = record(item, path);
      const kind = text(source.kind, `${path}.kind`) as DeclarationKind;
      if (!declarationKinds.has(kind)) throw new TypeError(`Unsupported ${path}.kind '${kind}'.`);
      const constructors =
        source.constructors === undefined
          ? undefined
          : list(source.constructors, `${path}.constructors`).map((item, constructorIndex) => {
              const value = record(item, `${path}.constructors[${constructorIndex}]`);
              const typeParameters = parseTypeParameters(
                value.typeParameters,
                `${path}.constructors[${constructorIndex}].typeParameters`,
              );
              const throws = optionalTexts(
                value.throws,
                `${path}.constructors[${constructorIndex}].throws`,
              );
              const constructorNullable = optionalBoolean(
                value.nullable,
                `${path}.constructors[${constructorIndex}].nullable`,
              );
              const constructorStatic = optionalBoolean(
                value.static,
                `${path}.constructors[${constructorIndex}].static`,
              );
              const constructorDefault = optionalBoolean(
                value.default,
                `${path}.constructors[${constructorIndex}].default`,
              );
              return {
                ...(value.id === undefined
                  ? {}
                  : { id: text(value.id, `${path}.constructors[${constructorIndex}].id`) }),
                ...(value.descriptor === undefined
                  ? {}
                  : {
                      descriptor: text(
                        value.descriptor,
                        `${path}.constructors[${constructorIndex}].descriptor`,
                      ),
                    }),
                parameters: parseParameters(
                  value.parameters,
                  `${path}.constructors[${constructorIndex}].parameters`,
                ),
                ...(value.deprecated === undefined
                  ? {}
                  : {
                      deprecated: text(
                        value.deprecated,
                        `${path}.constructors[${constructorIndex}].deprecated`,
                      ),
                    }),
                ...(typeParameters === undefined ? {} : { typeParameters }),
                ...(throws === undefined ? {} : { throws }),
                ...(constructorNullable === undefined ? {} : { nullable: constructorNullable }),
                ...(constructorStatic === undefined ? {} : { static: constructorStatic }),
                ...(constructorDefault === undefined ? {} : { default: constructorDefault }),
              };
            });
      const fields =
        source.fields === undefined
          ? undefined
          : list(source.fields, `${path}.fields`).map((item, fieldIndex): JvmField => {
              const value = record(item, `${path}.fields[${fieldIndex}]`);
              const constant = value.constant;
              if (
                constant !== undefined &&
                typeof constant !== 'string' &&
                typeof constant !== 'number' &&
                typeof constant !== 'boolean'
              )
                throw new TypeError(
                  `${path}.fields[${fieldIndex}].constant must be string, number, or boolean.`,
                );
              return {
                ...(value.id === undefined
                  ? {}
                  : { id: text(value.id, `${path}.fields[${fieldIndex}].id`) }),
                ...(value.descriptor === undefined
                  ? {}
                  : {
                      descriptor: text(
                        value.descriptor,
                        `${path}.fields[${fieldIndex}].descriptor`,
                      ),
                    }),
                name: text(value.name, `${path}.fields[${fieldIndex}].name`),
                type: text(value.type, `${path}.fields[${fieldIndex}].type`),
                ...(optionalBoolean(value.static, `${path}.fields[${fieldIndex}].static`) ===
                undefined
                  ? {}
                  : { static: value.static as boolean }),
                ...(optionalBoolean(value.readonly, `${path}.fields[${fieldIndex}].readonly`) ===
                undefined
                  ? {}
                  : { readonly: value.readonly as boolean }),
                ...(constant === undefined ? {} : { constant }),
                ...(optionalBoolean(value.nullable, `${path}.fields[${fieldIndex}].nullable`) ===
                undefined
                  ? {}
                  : { nullable: value.nullable as boolean }),
                ...(value.deprecated === undefined
                  ? {}
                  : {
                      deprecated: text(
                        value.deprecated,
                        `${path}.fields[${fieldIndex}].deprecated`,
                      ),
                    }),
              };
            });
      const typeParameters = parseTypeParameters(source.typeParameters, `${path}.typeParameters`);
      const declarationExtends = optionalTexts(source.extends, `${path}.extends`);
      const declarationImplements = optionalTexts(source.implements, `${path}.implements`);
      const enumConstants = optionalTexts(source.enumConstants, `${path}.enumConstants`);
      return {
        id: text(source.id, `${path}.id`),
        javaName: text(source.javaName, `${path}.javaName`),
        name: text(source.name, `${path}.name`),
        kind,
        ...(source.nestedIn === undefined
          ? {}
          : { nestedIn: text(source.nestedIn, `${path}.nestedIn`) }),
        ...(source.deprecated === undefined
          ? {}
          : { deprecated: text(source.deprecated, `${path}.deprecated`) }),
        ...(typeParameters === undefined ? {} : { typeParameters }),
        ...(declarationExtends === undefined ? {} : { extends: declarationExtends }),
        ...(declarationImplements === undefined ? {} : { implements: declarationImplements }),
        ...(constructors === undefined ? {} : { constructors }),
        ...(source.methods === undefined
          ? {}
          : {
              methods: list(source.methods, `${path}.methods`).map((method, methodIndex) =>
                parseCallable(method, `${path}.methods[${methodIndex}]`),
              ),
            }),
        ...(fields === undefined ? {} : { fields }),
        ...(enumConstants === undefined ? {} : { enumConstants }),
        ...(source.functionalMethod === undefined
          ? {}
          : { functionalMethod: text(source.functionalMethod, `${path}.functionalMethod`) }),
      };
    },
  );
  const events =
    root.events === undefined
      ? undefined
      : list(root.events, 'model.events').map((item, index): JvmEvent => {
          const source = record(item, `model.events[${index}]`);
          if (typeof source.cancellable !== 'boolean')
            throw new TypeError(`model.events[${index}].cancellable must be boolean.`);
          return {
            type: text(source.type, `model.events[${index}].type`),
            javaName: text(source.javaName, `model.events[${index}].javaName`),
            cancellable: source.cancellable,
          };
        });
  const packets =
    root.packets === undefined
      ? undefined
      : list(root.packets, 'model.packets').map((item, index): JvmPacket => {
          const path = `model.packets[${index}]`;
          const source = record(item, path);
          const rawRegistrations = list(source.registrations, `${path}.registrations`).map(
            (value, registrationIndex) =>
              record(value, `${path}.registrations[${registrationIndex}]`),
          );
          const registrations = rawRegistrations.map((value, registrationIndex) => {
            const registrationPath = `${path}.registrations[${registrationIndex}]`;
            const phase = text(value.phase, `${registrationPath}.phase`) as ProtocolPhase;
            const direction = text(
              value.direction,
              `${registrationPath}.direction`,
            ) as PacketDirection;
            if (!phases.has(phase) || !directions.has(direction))
              throw new TypeError(`Invalid packet phase or direction at ${registrationPath}.`);
            if (value.id !== undefined && (!Number.isInteger(value.id) || Number(value.id) < 0))
              throw new TypeError(`${registrationPath}.id must be a non-negative integer.`);
            return {
              phase,
              direction,
              ...(value.id === undefined ? {} : { id: Number(value.id) }),
            };
          });
          if (registrations.length === 0)
            throw new TypeError(`${path}.registrations must not be empty.`);
          return {
            type: text(source.type, `${path}.type`),
            javaName: text(source.javaName, `${path}.javaName`),
            registrations: [...registrations].sort((left, right) =>
              `${left.phase}:${left.direction}:${String(left.id ?? -1)}`.localeCompare(
                `${right.phase}:${right.direction}:${String(right.id ?? -1)}`,
              ),
            ),
          };
        });
  for (const [label, values] of [
    ['declaration id', declarations.map((item) => item.id)],
    ['event type', (events ?? []).map((item) => item.type)],
    ['packet type', (packets ?? []).map((item) => item.type)],
  ] as const)
    if (new Set(values).size !== values.length) throw new TypeError(`Duplicate ${label} in model.`);
  return {
    schemaVersion: 2,
    platform,
    apiVersion: text(root.apiVersion, 'model.apiVersion'),
    ...(root.mapping === undefined ? {} : { mapping: text(root.mapping, 'model.mapping') }),
    generatedBy: text(root.generatedBy, 'model.generatedBy'),
    declarations: [...declarations].sort((left, right) => left.id.localeCompare(right.id)),
    ...(events === undefined
      ? {}
      : { events: [...events].sort((left, right) => left.javaName.localeCompare(right.javaName)) }),
    ...(packets === undefined
      ? {}
      : {
          packets: [...packets].sort((left, right) => left.javaName.localeCompare(right.javaName)),
        }),
  };
}

/** Migrates a legacy schema-v1 fixture to the canonical schema-v2 model. */
export function migrateJvmApiModelV1(input: unknown): JvmApiModel {
  const root = record(typeof input === 'string' ? JSON.parse(input) : input, 'model');
  if (root.schemaVersion !== 1) throw new TypeError('model.schemaVersion must be 1.');
  return parseJvmApiModel({
    ...root,
    schemaVersion: JVM_API_MODEL_VERSION,
    ...(root.packets === undefined
      ? {}
      : {
          packets: list(root.packets, 'model.packets').map((item, index) => {
            const packet = record(item, `model.packets[${index}]`);
            return {
              type: packet.type,
              javaName: packet.javaName,
              registrations: [
                {
                  phase: packet.phase,
                  direction: packet.direction,
                  ...(packet.id === undefined ? {} : { id: packet.id }),
                },
              ],
            };
          }),
        }),
  });
}

function javaPackage(javaName: string): string {
  const classStart = javaName.search(/(?:^|\.)(?=[A-Z])/);
  if (classStart >= 0) return javaName.slice(0, classStart);
  const lastDot = javaName.lastIndexOf('.');
  return lastDot < 0 ? '_root' : javaName.slice(0, lastDot);
}
function shardName(packageName: string): string {
  return `${packageName.replaceAll(/[^A-Za-z0-9._-]/g, '_')}.generated.ts`;
}
function declarationShardName(packageName: string): string {
  return `${packageName.replaceAll(/[^A-Za-z0-9._-]/g, '_')}.generated.d.ts`;
}
function declarationModule(packageName: string): string {
  return declarationShardName(packageName).replace(/\.d\.ts$/, '.js');
}
function identifier(value: string): string {
  const result = value.replaceAll(/[^A-Za-z0-9_$]/g, '_');
  return /^[A-Za-z_$]/.test(result) ? result : `_${result}`;
}
function memberName(value: string): string {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value) ? value : JSON.stringify(value);
}
function splitTopLevel(value: string, separator: string): readonly string[] {
  const output: string[] = [];
  let depth = 0;
  let start = 0;
  for (let index = 0; index < value.length; index += 1) {
    const character = value[index];
    if (character === '<') depth += 1;
    else if (character === '>') depth -= 1;
    else if (character === separator && depth === 0) {
      output.push(value.slice(start, index).trim());
      start = index + 1;
    }
  }
  output.push(value.slice(start).trim());
  return output;
}

const primitiveDescriptors: Readonly<Record<string, string>> = {
  V: 'void',
  Z: 'boolean',
  B: 'number',
  C: 'string',
  S: 'number',
  I: 'number',
  J: 'bigint',
  F: 'number',
  D: 'number',
};
const primitives: Readonly<Record<string, string>> = {
  void: 'void',
  boolean: 'boolean',
  byte: 'number',
  char: 'string',
  short: 'number',
  int: 'number',
  long: 'bigint',
  float: 'number',
  double: 'number',
  'java.lang.Boolean': 'boolean',
  'java.lang.Byte': 'number',
  'java.lang.Character': 'string',
  'java.lang.Short': 'number',
  'java.lang.Integer': 'number',
  'java.lang.Long': 'bigint',
  'java.lang.Float': 'number',
  'java.lang.Double': 'number',
  'java.lang.Number': 'number',
  'java.lang.String': 'string',
  'java.lang.CharSequence': 'string',
  'java.lang.Void': 'void',
  'java.lang.Object': 'object',
};
const genericBuiltins: Readonly<Record<string, string>> = {
  'java.lang.Class': 'JavaClass',
  'java.lang.Iterable': 'Iterable',
  'java.util.Collection': 'JavaCollection',
  'java.util.List': 'JavaList',
  'java.util.Set': 'JavaSet',
  'java.util.Map': 'JavaMap',
  'java.util.Map$Entry': 'JavaMapEntry',
  'java.util.Optional': 'JavaOptional',
  'java.util.OptionalInt': 'JavaOptionalNumber',
  'java.util.OptionalLong': 'JavaOptionalBigInt',
  'java.util.OptionalDouble': 'JavaOptionalNumber',
  'java.util.concurrent.Future': 'PromiseLike',
  'java.util.concurrent.CompletionStage': 'PromiseLike',
  'java.util.concurrent.CompletableFuture': 'PromiseLike',
};

interface RenderContext {
  readonly modelTypes: ReadonlyMap<string, JvmDeclaration>;
  readonly currentPackage: string;
  readonly imports: Map<string, string>;
  readonly opaque: Map<string, OpaqueMapping>;
  readonly typeVariables: ReadonlySet<string>;
}
interface EmissionCounts {
  declarations: number;
  members: number;
  exceptions: number;
}
function opaqueType(
  javaName: string,
  arguments_: readonly string[],
  context: RenderContext,
): string {
  const current = context.opaque.get(javaName);
  context.opaque.set(javaName, {
    javaName,
    occurrences: (current?.occurrences ?? 0) + 1,
    reason: javaName.startsWith('<unparseable:') ? 'unparseable-signature' : 'not-in-scanner-model',
  });
  return `JavaOpaque<${JSON.stringify(javaName)}${arguments_.length === 0 ? '' : `, [${arguments_.join(', ')}]`}>`;
}
function mapJavaType(source: string, context: RenderContext): string {
  let value = source.trim();
  if (value.startsWith('[')) {
    let dimensions = 0;
    while (value[dimensions] === '[') dimensions += 1;
    const descriptor = value.slice(dimensions);
    const component =
      primitiveDescriptors[descriptor] ??
      (descriptor.startsWith('L') && descriptor.endsWith(';')
        ? mapJavaType(descriptor.slice(1, -1).replaceAll('/', '.'), context)
        : mapJavaType(descriptor, context));
    return `${'Array<'.repeat(dimensions)}${component}${'>'.repeat(dimensions)}`;
  }
  let dimensions = 0;
  while (value.endsWith('[]')) {
    dimensions += 1;
    value = value.slice(0, -2).trim();
  }
  if (value.endsWith('...')) {
    dimensions += 1;
    value = value.slice(0, -3).trim();
  }
  const ownerGenericStart = value.indexOf('<');
  if (ownerGenericStart >= 0) {
    let depth = 0;
    let ownerGenericEnd = -1;
    for (let index = ownerGenericStart; index < value.length; index += 1) {
      if (value[index] === '<') depth += 1;
      else if (value[index] === '>') {
        depth -= 1;
        if (depth === 0) {
          ownerGenericEnd = index;
          break;
        }
      }
    }
    if (ownerGenericEnd < 0) return opaqueType(`<unparseable:${source}>`, [], context);
    if (value[ownerGenericEnd + 1] === '$')
      value = `${value.slice(0, ownerGenericStart)}${value.slice(ownerGenericEnd + 1)}`;
  }
  let mapped: string;
  if (value === '?') mapped = 'object';
  else if (value.startsWith('? extends ')) mapped = mapJavaType(value.slice(10), context);
  else if (value.startsWith('? super ')) mapped = mapJavaType(value.slice(8), context);
  else {
    const intersections = splitTopLevel(value, '&');
    if (intersections.length > 1)
      mapped = intersections.map((item) => mapJavaType(item, context)).join(' & ');
    else {
      const genericStart = value.indexOf('<');
      const base = genericStart < 0 ? value : value.slice(0, genericStart).trim();
      const argumentSource = genericStart < 0 ? '' : value.slice(genericStart + 1, -1);
      const arguments_ =
        argumentSource === ''
          ? []
          : splitTopLevel(argumentSource, ',').map((item) => mapJavaType(item, context));
      if (context.typeVariables.has(base)) mapped = identifier(base);
      else if (primitives[base] !== undefined) mapped = primitives[base];
      else if (primitiveDescriptors[base] !== undefined) mapped = primitiveDescriptors[base];
      else if (base === 'java.util.function.Consumer')
        mapped = `JavaConsumer<${arguments_[0] ?? 'object'}>`;
      else if (base === 'java.util.function.BiConsumer')
        mapped = `JavaBiConsumer<${arguments_[0] ?? 'object'}, ${arguments_[1] ?? 'object'}>`;
      else if (base === 'java.util.function.Supplier')
        mapped = `JavaSupplier<${arguments_[0] ?? 'object'}>`;
      else if (base === 'java.util.function.Function')
        mapped = `JavaFunction<${arguments_[0] ?? 'object'}, ${arguments_[1] ?? 'object'}>`;
      else if (base === 'java.util.function.BiFunction')
        mapped = `JavaBiFunction<${arguments_[0] ?? 'object'}, ${arguments_[1] ?? 'object'}, ${arguments_[2] ?? 'object'}>`;
      else if (base === 'java.util.function.Predicate')
        mapped = `JavaPredicate<${arguments_[0] ?? 'object'}>`;
      else if (base === 'java.lang.Runnable') mapped = 'JavaRunnable';
      else if (genericBuiltins[base] !== undefined)
        mapped = ['JavaOptionalNumber', 'JavaOptionalBigInt'].includes(genericBuiltins[base])
          ? genericBuiltins[base]
          : `${genericBuiltins[base]}<${arguments_.join(', ') || 'object'}>`;
      else {
        const declaration = context.modelTypes.get(base);
        if (declaration === undefined) mapped = opaqueType(base, arguments_, context);
        else {
          const packageName = javaPackage(declaration.javaName);
          if (packageName === context.currentPackage) mapped = declaration.name;
          else {
            let alias = context.imports.get(packageName);
            if (alias === undefined) {
              alias = `j_${identifier(packageName.replaceAll('.', '_'))}`;
              context.imports.set(packageName, alias);
            }
            mapped = `${alias}.${declaration.name}`;
          }
          if (arguments_.length > 0) mapped += `<${arguments_.join(', ')}>`;
        }
      }
    }
  }
  return `${'Array<'.repeat(dimensions)}${mapped}${'>'.repeat(dimensions)}`;
}
function nullable(type: string, value: { readonly nullable?: boolean }): string {
  return `${type}${value.nullable === true ? ' | null' : ''}`;
}
function docs(deprecated: string | undefined, exceptions: readonly string[] = []): string {
  if (deprecated === undefined && exceptions.length === 0) return '';
  return `  /**${deprecated === undefined ? '' : ` @deprecated ${deprecated}`}${exceptions.map((item) => ` @throws ${item}`).join('')} */\n`;
}
function renderTypeParameters(
  values: readonly JvmTypeParameter[] | undefined,
  context: RenderContext,
  defaults = false,
): string {
  if (values === undefined || values.length === 0) return '';
  const variables = new Set([...context.typeVariables, ...values.map((item) => item.name)]);
  const nested = { ...context, typeVariables: variables };
  return `<${values
    .map(
      (item) =>
        `${identifier(item.name)}${item.bound === undefined ? '' : ` /* extends ${mapJavaType(item.bound, nested)} */`}${defaults ? ' = unknown' : ''}`,
    )
    .join(', ')}>`;
}
function renderParameters(values: readonly JvmParameter[], context: RenderContext): string {
  return values
    .map((item) => {
      const type = nullable(mapJavaType(item.type, context), item);
      return `${item.varargs === true ? '...' : ''}${identifier(item.name)}: ${item.varargs === true ? `Array<${type}>` : type}`;
    })
    .join(', ');
}
function callableType(method: JvmCallable, context: RenderContext): string {
  const variables = new Set([
    ...context.typeVariables,
    ...(method.typeParameters?.map((item) => item.name) ?? []),
  ]);
  const methodContext = { ...context, typeVariables: variables };
  return `${renderTypeParameters(method.typeParameters, methodContext)}(${renderParameters(method.parameters, methodContext)}): ${nullable(mapJavaType(method.returns, methodContext), method)}`;
}
function renderMembers(
  fields: readonly JvmField[],
  methods: readonly JvmCallable[],
  context: RenderContext,
): readonly string[] {
  const names = new Set([...fields.map((item) => item.name), ...methods.map((item) => item.name)]);
  const lines: string[] = [];
  for (const name of [...names].sort()) {
    const matchingFields = fields.filter((item) => item.name === name);
    const matchingMethods = methods.filter((item) => item.name === name);
    const fieldTypes = matchingFields.map((field) =>
      field.constant === undefined
        ? nullable(mapJavaType(field.type, context), field)
        : JSON.stringify(field.constant),
    );
    const methodTypes = matchingMethods.map((method) => callableType(method, context));
    const documentation = docs(
      matchingFields[0]?.deprecated ?? matchingMethods[0]?.deprecated,
      matchingMethods.flatMap((item) => item.throws ?? []),
    );
    if (fieldTypes.length > 0 && methodTypes.length > 0) {
      lines.push(
        `${documentation}  ${matchingFields.every((item) => item.readonly === true) ? 'readonly ' : ''}${memberName(name)}: (${fieldTypes.join(' | ')}) & { ${methodTypes.join('; ')} };`,
      );
    } else if (fieldTypes.length > 0) {
      lines.push(
        `${documentation}  ${matchingFields.every((item) => item.readonly === true) ? 'readonly ' : ''}${memberName(name)}: ${fieldTypes.join(' | ')};`,
      );
    } else {
      for (const method of matchingMethods)
        lines.push(
          `${docs(method.deprecated, method.throws)}  ${memberName(name)}${callableType(method, context)};`,
        );
    }
  }
  return lines;
}
function callableIdentity(value: JvmCallable): string {
  return `${value.name}<${(value.typeParameters ?? []).map((item) => `${item.name}:${item.bound ?? ''}`).join(',')}>(${value.parameters.map((item) => `${item.type}:${item.nullable === true ? '?' : ''}:${item.varargs === true ? '...' : ''}`).join(',')}):${value.returns}:${value.nullable === true ? '?' : ''}:${value.static === true ? 'static' : 'instance'}`;
}

function deduplicateMembers<T>(values: readonly T[], identity: (value: T) => string): readonly T[] {
  const output = new Map<string, T>();
  for (const value of values) output.set(identity(value), value);
  return [...output.values()];
}

function genericType(value: string): {
  readonly base: string;
  readonly arguments: readonly string[];
} {
  const start = value.indexOf('<');
  if (start < 0 || !value.endsWith('>')) return { base: value.trim(), arguments: [] };
  return {
    base: value.slice(0, start).trim(),
    arguments: splitTopLevel(value.slice(start + 1, -1), ','),
  };
}

function substituteType(value: string, substitutions: ReadonlyMap<string, string>): string {
  let output = value;
  for (const [name, replacement] of substitutions)
    output = output.replace(
      new RegExp(
        `(?<![A-Za-z0-9_$])${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![A-Za-z0-9_$])`,
        'g',
      ),
      replacement,
    );
  return output;
}

function transitiveMembers(
  value: JvmDeclaration,
  modelTypes: ReadonlyMap<string, JvmDeclaration>,
): { readonly fields: readonly JvmField[]; readonly methods: readonly JvmCallable[] } {
  const fields: JvmField[] = [];
  const methods: JvmCallable[] = [];
  const visit = (
    declaration: JvmDeclaration,
    substitutions: ReadonlyMap<string, string>,
    path: ReadonlySet<string>,
  ): void => {
    if (path.has(declaration.javaName)) return;
    const nestedPath = new Set(path).add(declaration.javaName);
    for (const parentType of [...(declaration.extends ?? []), ...(declaration.implements ?? [])]) {
      const parsed = genericType(substituteType(parentType, substitutions));
      const parent = modelTypes.get(parsed.base);
      if (parent === undefined) continue;
      const parentSubstitutions = new Map<string, string>();
      for (const [index, parameter] of (parent.typeParameters ?? []).entries())
        parentSubstitutions.set(parameter.name, parsed.arguments[index] ?? 'unknown');
      visit(parent, parentSubstitutions, nestedPath);
    }
    fields.push(
      ...(declaration.fields ?? [])
        .filter((item) => item.static !== true)
        .map((item) => ({ ...item, type: substituteType(item.type, substitutions) })),
    );
    methods.push(
      ...(declaration.methods ?? [])
        .filter((item) => item.static !== true)
        .map((item) => {
          const methodSubstitutions = new Map(substitutions);
          for (const parameter of item.typeParameters ?? [])
            methodSubstitutions.delete(parameter.name);
          return {
            ...item,
            parameters: item.parameters.map((parameter) => ({
              ...parameter,
              type: substituteType(parameter.type, methodSubstitutions),
            })),
            returns: substituteType(item.returns, methodSubstitutions),
            ...(item.typeParameters === undefined
              ? {}
              : {
                  typeParameters: item.typeParameters.map((parameter) => ({
                    ...parameter,
                    ...(parameter.bound === undefined
                      ? {}
                      : { bound: substituteType(parameter.bound, methodSubstitutions) }),
                  })),
                }),
          };
        }),
    );
  };
  visit(value, new Map(), new Set());
  return {
    fields: deduplicateMembers(fields, (item) => item.name),
    methods: deduplicateMembers(methods, callableIdentity),
  };
}

function reachesDeclaration(
  from: JvmDeclaration,
  target: string,
  modelTypes: ReadonlyMap<string, JvmDeclaration>,
  visited = new Set<string>(),
): boolean {
  if (from.javaName === target) return true;
  if (visited.has(from.javaName)) return false;
  visited.add(from.javaName);
  return [...(from.extends ?? []), ...(from.implements ?? [])].some((type) =>
    typeReferencesDeclaration(type, target, modelTypes, visited),
  );
}

function typeReferencesDeclaration(
  type: string,
  target: string,
  modelTypes: ReadonlyMap<string, JvmDeclaration>,
  visited = new Set<string>(),
): boolean {
  return (type.match(/[A-Za-z_$][A-Za-z0-9_$.]*/g) ?? []).some((name) => {
    if (name === target) return true;
    const declaration = modelTypes.get(name);
    return (
      declaration !== undefined && reachesDeclaration(declaration, target, modelTypes, visited)
    );
  });
}
function renderDeclaration(
  value: JvmDeclaration,
  baseContext: RenderContext,
  emitted: EmissionCounts,
): string {
  emitted.declarations += 1;
  emitted.members +=
    (value.constructors?.length ?? 0) +
    (value.methods?.length ?? 0) +
    (value.fields?.length ?? 0) +
    (value.enumConstants?.length ?? 0);
  emitted.exceptions += [...(value.constructors ?? []), ...(value.methods ?? [])].reduce(
    (sum, item) => sum + (item.throws?.length ?? 0),
    0,
  );
  const variables = new Set(value.typeParameters?.map((item) => item.name) ?? []);
  const context = { ...baseContext, typeVariables: variables };
  const generic = renderTypeParameters(value.typeParameters, context, true);
  const parentTypes = [...(value.extends ?? []), ...(value.implements ?? [])];
  const inherited = parentTypes.map((item) => mapJavaType(item, context));
  if (value.kind === 'opaque')
    return `/** JVM type ${value.javaName}. */\nexport type ${value.name}${generic} = JavaOpaque<${JSON.stringify(value.javaName)}, never, readonly [${inherited.join(', ')}]>;\nexport interface ${value.name}Statics {}\n`;
  if (value.kind === 'enum') {
    const constants = value.enumConstants ?? [];
    const flattened = transitiveMembers(value, baseContext.modelTypes);
    const lines = [
      `/** Live JVM enum ${value.javaName}; constants are host handles, not strings. */`,
      `export type ${value.name} = JavaEnum<${JSON.stringify(value.javaName)}, ${constants.map((item) => JSON.stringify(item)).join(' | ') || 'never'}> & ${value.name}Members;`,
      `export interface ${value.name}Members {`,
      ...renderMembers(flattened.fields, flattened.methods, context),
      '}',
      `export interface ${value.name}Statics {`,
      ...constants.map((item) => `  readonly ${memberName(item)}: ${value.name};`),
      ...renderMembers(
        (value.fields ?? [])
          .filter((item) => item.static === true)
          .map((item) => ({ ...item, readonly: true })),
        (value.methods ?? []).filter((item) => item.static === true),
        { ...context, typeVariables: new Set<string>() },
      ),
      '}',
    ];
    return `${lines.join('\n')}\n`;
  }
  const cyclicParents = new Set(
    parentTypes.filter((type) =>
      typeReferencesDeclaration(type, value.javaName, baseContext.modelTypes),
    ),
  );
  const ownGenericArguments = value.typeParameters?.length
    ? `<${value.typeParameters.map((item) => identifier(item.name)).join(', ')}>`
    : '';
  const heritage = parentTypes
    .filter((item) => !cyclicParents.has(item))
    .map((item) => mapJavaType(item, context));
  const lines = [
    `/** JVM ${value.kind} ${value.javaName}.${value.deprecated === undefined ? '' : ` @deprecated ${value.deprecated}`} */`,
    `export interface ${value.name}Members${generic} {`,
  ];
  if (inherited.length > 0)
    lines.push(`  readonly __javaSupertypes?: readonly [${inherited.join(', ')}];`);
  const instanceMembers =
    cyclicParents.size === 0
      ? {
          fields: (value.fields ?? []).filter((item) => item.static !== true),
          methods: (value.methods ?? []).filter((item) => item.static !== true),
        }
      : transitiveMembers(value, baseContext.modelTypes);
  lines.push(...renderMembers(instanceMembers.fields, instanceMembers.methods, context));
  lines.push('}');
  lines.push(
    `export type ${value.name}${generic} = ${value.name}Members${ownGenericArguments}${heritage.length === 0 ? '' : ` & ${heritage.join(' & ')}`};`,
  );
  const constructors = value.constructors ?? [];
  const staticFields = (value.fields ?? []).filter((item) => item.static === true);
  const staticMethods = (value.methods ?? []).filter((item) => item.static === true);
  lines.push(`export interface ${value.name}Statics {`);
  const staticContext = { ...context, typeVariables: new Set<string>() };
  for (const constructor of constructors) {
    const constructorVariables = [
      ...(value.typeParameters ?? []),
      ...(constructor.typeParameters ?? []),
    ];
    const constructorContext = {
      ...context,
      typeVariables: new Set(constructorVariables.map((item) => item.name)),
    };
    lines.push(
      `${docs(constructor.deprecated, constructor.throws)}  new${renderTypeParameters(constructorVariables, constructorContext)}(${renderParameters(constructor.parameters, constructorContext)}): ${value.name}${value.typeParameters?.length ? `<${value.typeParameters.map((item) => identifier(item.name)).join(', ')}>` : ''};`,
    );
  }
  lines.push(
    ...renderMembers(
      staticFields.map((item) => ({ ...item, readonly: true })),
      staticMethods,
      staticContext,
    ),
  );
  lines.push('}');
  return `${lines.join('\n')}\n`;
}

function count(model: JvmApiModel): {
  members: number;
  exceptions: number;
  registrations: number;
  registrationIds: number;
} {
  let members = 0;
  let exceptions = 0;
  for (const declaration of model.declarations) {
    members +=
      (declaration.constructors?.length ?? 0) +
      (declaration.methods?.length ?? 0) +
      (declaration.fields?.length ?? 0) +
      (declaration.enumConstants?.length ?? 0);
    exceptions += [...(declaration.constructors ?? []), ...(declaration.methods ?? [])].reduce(
      (sum, item) => sum + (item.throws?.length ?? 0),
      0,
    );
  }
  return {
    members,
    exceptions,
    registrations: (model.packets ?? []).reduce((sum, item) => sum + item.registrations.length, 0),
    registrationIds: (model.packets ?? []).reduce(
      (sum, item) =>
        sum + item.registrations.filter((registration) => registration.id !== undefined).length,
      0,
    ),
  };
}
function generatedHeader(model: JvmApiModel): string {
  return `// Generated from ${model.platform} ${model.apiVersion}${model.mapping === undefined ? '' : ` (${model.mapping})`}. Do not edit.\n`;
}

function generatedProgram(files: Readonly<Record<string, string>>): ts.Program {
  const virtual = new Map(
    Object.entries(files).map(([path, contents]) => [resolve('/generated', path), contents]),
  );
  const options: ts.CompilerOptions = {
    strict: true,
    noEmit: true,
    skipLibCheck: false,
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
  };
  const host = ts.createCompilerHost(options, true);
  const systemFileExists = host.fileExists.bind(host);
  const systemReadFile = host.readFile.bind(host);
  const systemDirectoryExists = host.directoryExists?.bind(host);
  host.fileExists = (path) => virtual.has(resolve(path)) || systemFileExists(path);
  host.readFile = (path) => virtual.get(resolve(path)) ?? systemReadFile(path);
  host.directoryExists = (path) => {
    const directory = `${resolve(path)}/`;
    return (
      [...virtual.keys()].some((file) => file.startsWith(directory)) ||
      systemDirectoryExists?.(path) === true
    );
  };
  host.getSourceFile = (path, languageVersion) => {
    const contents = host.readFile(path);
    return contents === undefined
      ? undefined
      : ts.createSourceFile(path, contents, languageVersion, true);
  };
  return ts.createProgram({ rootNames: [...virtual.keys()], options, host });
}

function exported(
  checker: ts.TypeChecker,
  source: ts.SourceFile,
  name: string,
): ts.Symbol | undefined {
  const module = checker.getSymbolAtLocation(source);
  return module === undefined
    ? undefined
    : checker.getExportsOfModule(module).find((item) => item.name === name);
}

function ownDeclarations(
  symbol: ts.Symbol | undefined,
  source: ts.SourceFile,
): readonly ts.Declaration[] {
  return (symbol?.declarations ?? []).filter((item) => item.getSourceFile() === source);
}

function heritageBase(type: string): string {
  const genericStart = type.indexOf('<');
  return (genericStart < 0 ? type : type.slice(0, genericStart)).trim();
}

function literalProperty(
  checker: ts.TypeChecker,
  type: ts.Type | undefined,
  name: string,
): string | number | boolean | undefined {
  const property = type?.getProperty(name);
  if (property === undefined) return undefined;
  const value = checker.getTypeOfSymbol(property);
  if (value.isStringLiteral() || value.isNumberLiteral()) return value.value;
  const rendered = checker.typeToString(value);
  if (rendered === 'true') return true;
  if (rendered === 'false') return false;
  return undefined;
}

/** Validates strict generated output and derives coverage from checker-visible identities. */
export function analyzePlatformCoverage(
  modelInput: unknown,
  generated: GeneratedPlatformSources,
  exclusions: readonly CoverageExclusion[] = [],
): PlatformCoverage {
  const model = parseJvmApiModel(modelInput);
  const files: Record<string, string> = {
    'bindings.generated.ts': generated.declarations,
    'events.generated.ts': generated.events,
    'packets.generated.ts': generated.packets,
    ...generated.declarationShards,
    ...generated.eventShards,
  };
  const program = generatedProgram(files);
  const checker = program.getTypeChecker();
  const diagnostics = ts.getPreEmitDiagnostics(program);
  if (diagnostics.length > 0)
    throw new TypeError(
      `Generated declarations failed strict TypeScript validation:\n${ts.formatDiagnostics(
        diagnostics,
        {
          getCanonicalFileName: (path) => path,
          getCurrentDirectory: () => '/generated',
          getNewLine: () => '\n',
        },
      )}`,
    );

  const modelTypes = new Map(model.declarations.map((item) => [item.javaName, item]));
  const declarationSymbols = new Map<string, ts.Symbol>();
  let emittedMembers = 0;
  const missing: string[] = [];
  const sourceFor = (declaration: JvmDeclaration): ts.SourceFile | undefined =>
    program.getSourceFile(
      resolve(
        '/generated',
        `binding-packages/${declarationShardName(javaPackage(declaration.javaName))}`,
      ),
    );
  for (const declaration of model.declarations) {
    const source = sourceFor(declaration);
    const symbol = source === undefined ? undefined : exported(checker, source, declaration.name);
    if (source === undefined || symbol === undefined) {
      missing.push(`declaration ${declaration.javaName}`);
      continue;
    }
    declarationSymbols.set(declaration.javaName, symbol);
    if (declaration.kind === 'enum') {
      const statics = exported(checker, source, `${declaration.name}Statics`);
      const staticType =
        statics === undefined ? undefined : checker.getDeclaredTypeOfSymbol(statics);
      for (const constant of declaration.enumConstants ?? []) {
        if (staticType?.getProperty(constant) === undefined)
          missing.push(`enum constant ${declaration.javaName}#${constant}`);
        else emittedMembers += 1;
      }
    }
    if (declaration.kind === 'opaque') continue;
    const instanceType = checker.getDeclaredTypeOfSymbol(symbol);
    const statics = exported(checker, source, `${declaration.name}Statics`);
    const staticType = statics === undefined ? undefined : checker.getDeclaredTypeOfSymbol(statics);
    for (const field of declaration.fields ?? []) {
      const owner = field.static === true ? staticType : instanceType;
      const property = owner?.getProperty(field.name);
      if (ownDeclarations(property, source).length === 0)
        missing.push(`field ${declaration.javaName}#${field.name}`);
      else emittedMembers += 1;
    }
    for (const [isStatic, owner] of [
      [false, instanceType],
      [true, staticType],
    ] as const) {
      const methods = (declaration.methods ?? []).filter((item) =>
        isStatic ? item.static === true : item.static !== true,
      );
      const methodsByName = new Map<string, JvmCallable[]>();
      for (const method of methods) {
        const values = methodsByName.get(method.name) ?? [];
        values.push(method);
        methodsByName.set(method.name, values);
      }
      for (const [name, values] of methodsByName) {
        const property = owner?.getProperty(name);
        const declarations = ownDeclarations(property, source);
        const signatures =
          property === undefined
            ? []
            : checker.getSignaturesOfType(checker.getTypeOfSymbol(property), ts.SignatureKind.Call);
        if (
          declarations.length === 0 ||
          Math.max(declarations.length, signatures.length) < values.length
        )
          missing.push(`method ${declaration.javaName}#${name} (${values.length} overloads)`);
        else emittedMembers += values.length;
      }
    }
    const constructorCount = staticType?.getConstructSignatures().length ?? 0;
    const expectedConstructors = declaration.constructors?.length ?? 0;
    if (constructorCount < expectedConstructors)
      missing.push(`constructors ${declaration.javaName} (${expectedConstructors})`);
    else emittedMembers += expectedConstructors;

    const visited = new Set<string>();
    const visit = (name: string): void => {
      if (visited.has(name)) return;
      visited.add(name);
      const parent = modelTypes.get(name);
      if (parent === undefined) return;
      for (const member of [
        ...(parent.fields ?? []).filter((item) => item.static !== true),
        ...(parent.methods ?? []).filter((item) => item.static !== true),
      ])
        if (instanceType.getProperty(member.name) === undefined)
          missing.push(`inherited member ${declaration.javaName} <- ${name}#${member.name}`);
      for (const ancestor of [...(parent.extends ?? []), ...(parent.implements ?? [])])
        visit(heritageBase(ancestor));
    };
    for (const parent of [...(declaration.extends ?? []), ...(declaration.implements ?? [])])
      visit(heritageBase(parent));
  }

  const bindings = program.getSourceFile('/generated/bindings.generated.ts');
  const typeMap =
    bindings === undefined ? undefined : exported(checker, bindings, 'GeneratedJavaTypeMap');
  const indexed = typeMap === undefined ? undefined : checker.getDeclaredTypeOfSymbol(typeMap);
  let declarationIndex = 0;
  for (const declaration of model.declarations) {
    const property = indexed?.getProperty(declaration.javaName);
    const propertyDeclaration = property?.declarations?.find(ts.isPropertySignature);
    const indexedType = propertyDeclaration?.type;
    const actualName =
      indexedType !== undefined && ts.isImportTypeNode(indexedType)
        ? indexedType.qualifier?.getText()
        : undefined;
    if (actualName !== declaration.name) missing.push(`declaration index ${declaration.javaName}`);
    else declarationIndex += 1;
  }

  const registryIdentities = (
    file: string,
    registry: string,
    map: string,
    values: readonly { readonly javaName: string; readonly type: string }[],
  ): number => {
    const source = program.getSourceFile(`/generated/${file}`);
    const registrySymbol = source === undefined ? undefined : exported(checker, source, registry);
    const mapSymbol = source === undefined ? undefined : exported(checker, source, map);
    const registryType =
      registrySymbol === undefined ? undefined : checker.getTypeOfSymbol(registrySymbol);
    const mapType =
      mapSymbol === undefined ? undefined : checker.getDeclaredTypeOfSymbol(mapSymbol);
    let emitted = 0;
    for (const value of values)
      if (
        registryType?.getProperty(value.javaName) === undefined ||
        mapType?.getProperty(value.javaName) === undefined
      )
        missing.push(`${registry} ${value.javaName}`);
      else emitted += 1;
    return emitted;
  };
  const emittedEvents = registryIdentities(
    'events.generated.ts',
    'EVENT_TYPES',
    'GeneratedEventMap',
    model.events ?? [],
  );
  const eventSource = program.getSourceFile('/generated/events.generated.ts');
  const eventRegistry =
    eventSource === undefined ? undefined : exported(checker, eventSource, 'EVENT_TYPES');
  const eventRegistryType =
    eventRegistry === undefined ? undefined : checker.getTypeOfSymbol(eventRegistry);
  for (const event of model.events ?? []) {
    const property = eventRegistryType?.getProperty(event.javaName);
    const eventType = property === undefined ? undefined : checker.getTypeOfSymbol(property);
    if (
      literalProperty(checker, eventType, 'type') !== event.type ||
      literalProperty(checker, eventType, 'cancellable') !== event.cancellable
    )
      missing.push(`event identity ${event.javaName}`);
    const source = program.getSourceFile(
      resolve('/generated', `event-packages/${shardName(javaPackage(event.javaName))}`),
    );
    if (source === undefined || exported(checker, source, `On${event.type}`) === undefined)
      missing.push(`event decorator ${event.javaName}`);
  }
  const emittedPackets = registryIdentities(
    'packets.generated.ts',
    'PACKET_TYPES',
    'GeneratedPacketMap',
    model.packets ?? [],
  );
  let emittedRegistrations = 0;
  let emittedRegistrationIds = 0;
  const packetSource = program.getSourceFile('/generated/packets.generated.ts');
  const packetRegistry =
    packetSource === undefined ? undefined : exported(checker, packetSource, 'PACKET_TYPES');
  const packetRegistryType =
    packetRegistry === undefined ? undefined : checker.getTypeOfSymbol(packetRegistry);
  for (const packet of model.packets ?? []) {
    const packetProperty = packetRegistryType?.getProperty(packet.javaName);
    const packetType =
      packetProperty === undefined ? undefined : checker.getTypeOfSymbol(packetProperty);
    if (literalProperty(checker, packetType, 'type') !== packet.type)
      missing.push(`packet identity ${packet.javaName}`);
    const registrations = packetType?.getProperty('registrations');
    const registrationType =
      registrations === undefined ? undefined : checker.getTypeOfSymbol(registrations);
    const actual =
      registrationType === undefined
        ? []
        : checker.getTypeArguments(registrationType as ts.TypeReference);
    if (
      actual.length !== packet.registrations.length ||
      actual.some((registration, index) => {
        const expected = packet.registrations[index];
        return (
          expected === undefined ||
          literalProperty(checker, registration, 'phase') !== expected.phase ||
          literalProperty(checker, registration, 'direction') !== expected.direction ||
          literalProperty(checker, registration, 'id') !== expected.id
        );
      })
    )
      missing.push(`packet registrations ${packet.javaName}`);
    else {
      emittedRegistrations += actual.length;
      emittedRegistrationIds += actual.filter(
        (item) => item.getProperty('id') !== undefined,
      ).length;
    }
  }

  const expectedExceptions = new Map<string, number>();
  for (const declaration of model.declarations)
    for (const callable of [...(declaration.constructors ?? []), ...(declaration.methods ?? [])])
      for (const exception of callable.throws ?? [])
        expectedExceptions.set(exception, (expectedExceptions.get(exception) ?? 0) + 1);
  let emittedExceptions = 0;
  const declarationText = Object.entries(generated.declarationShards)
    .filter(([path]) => path.endsWith('.d.ts'))
    .map(([, contents]) => contents)
    .join('\n');
  for (const [exception, expected] of expectedExceptions) {
    const actual = declarationText.split(`@throws ${exception}`).length - 1;
    if (actual < expected) missing.push(`exceptions ${exception} (${expected}, emitted ${actual})`);
    else emittedExceptions += expected;
  }
  if (missing.length > 0)
    throw new TypeError(`Generated output is incomplete or invalid:\n${missing.join('\n')}`);

  const totals = count(model);
  return {
    platform: model.platform,
    apiVersion: model.apiVersion,
    declarations: coverage(model.declarations.length, declarationSymbols.size),
    members: coverage(totals.members, emittedMembers),
    events: coverage(model.events?.length ?? 0, emittedEvents),
    exceptions: coverage(totals.exceptions, emittedExceptions),
    packets: coverage(model.packets?.length ?? 0, emittedPackets),
    packetRegistrations: coverage(totals.registrations, emittedRegistrations),
    packetRegistrationIds: coverage(totals.registrationIds, emittedRegistrationIds),
    declarationIndex: coverage(model.declarations.length, declarationIndex),
    opaqueMappings: [],
    exclusions,
  };
}
const javaSupport = `/** A JVM type referenced by a signature but absent from this scanner model. */
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
`;

export function generatePlatform(
  modelInput: unknown,
  exclusions: readonly CoverageExclusion[] = [],
): GeneratedPlatform {
  const model = parseJvmApiModel(modelInput);
  const modelTypes = new Map(model.declarations.map((item) => [item.javaName, item]));
  const byPackage = new Map<string, JvmDeclaration[]>();
  for (const declaration of model.declarations) {
    const packageName = javaPackage(declaration.javaName);
    const values = byPackage.get(packageName) ?? [];
    values.push(declaration);
    byPackage.set(packageName, values);
  }
  const opaque = new Map<string, OpaqueMapping>();
  const emitted: EmissionCounts = { declarations: 0, members: 0, exceptions: 0 };
  const declarationShards: Record<string, string> = {};
  for (const [packageName, values] of [...byPackage].sort(([left], [right]) =>
    left.localeCompare(right),
  )) {
    const imports = new Map<string, string>();
    const context: RenderContext = {
      modelTypes,
      currentPackage: packageName,
      imports,
      opaque,
      typeVariables: new Set(),
    };
    const body = values.map((item) => renderDeclaration(item, context, emitted)).join('\n');
    const importLines = [
      `import type { JavaBiConsumer, JavaBiFunction, JavaClass, JavaCollection, JavaConsumer, JavaEnum, JavaFunction, JavaList, JavaMap, JavaMapEntry, JavaOpaque, JavaOptional, JavaOptionalBigInt, JavaOptionalNumber, JavaPredicate, JavaRunnable, JavaSet, JavaSupplier } from '../java-support.generated.js';`,
      ...[...imports]
        .sort(([left], [right]) => left.localeCompare(right))
        .map(
          ([importPackage, alias]) =>
            `import type * as ${alias} from './${declarationModule(importPackage)}';`,
        ),
    ].join('\n');
    declarationShards[`binding-packages/${declarationShardName(packageName)}`] =
      `${generatedHeader(model)}${importLines}\n\n${body}`;
  }
  declarationShards['java-support.generated.d.ts'] = `${generatedHeader(model)}${javaSupport}`;
  const exportedNameCounts = new Map<string, number>();
  for (const declaration of model.declarations)
    exportedNameCounts.set(declaration.name, (exportedNameCounts.get(declaration.name) ?? 0) + 1);
  const declarationExports = [...byPackage]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([packageName, values]) => {
      const names = values.flatMap((declaration) => {
        const alias =
          exportedNameCounts.get(declaration.name) === 1
            ? declaration.name
            : `${identifier(packageName.replaceAll('.', '_'))}_${declaration.name}`;
        return [
          alias === declaration.name ? declaration.name : `${declaration.name} as ${alias}`,
          alias === declaration.name
            ? `${declaration.name}Statics`
            : `${declaration.name}Statics as ${alias}Statics`,
        ];
      });
      return `export type { ${names.join(', ')} } from './binding-packages/${declarationModule(packageName)}';`;
    })
    .join('\n');
  const descriptorEntries = model.declarations
    .map(
      (item) =>
        `  ${JSON.stringify(item.javaName)}: { javaName: ${JSON.stringify(item.javaName)}, kind: ${JSON.stringify(item.kind)} },`,
    )
    .join('\n');
  const typeMap = model.declarations
    .map(
      (item) =>
        `  readonly ${JSON.stringify(item.javaName)}: import('./binding-packages/${declarationModule(javaPackage(item.javaName))}').${item.name};`,
    )
    .join('\n');
  const staticMap = model.declarations
    .map(
      (item) =>
        `  readonly ${JSON.stringify(item.javaName)}: import('./binding-packages/${declarationModule(javaPackage(item.javaName))}').${item.name}Statics;`,
    )
    .join('\n');
  const declarations = `${generatedHeader(model)}export const API_VERSION = ${JSON.stringify(model.apiVersion)} as const;
/** Runtime descriptors accepted by a host Java bridge. Raw Java classes are type-only. */
export const JAVA_TYPES = {
${descriptorEntries}
} as const;
export interface GeneratedJavaTypeMap {
${typeMap}
}
export interface GeneratedJavaStaticsMap {
${staticMap}
}
export interface JavaBridge { resolve<Name extends keyof GeneratedJavaTypeMap>(descriptor: (typeof JAVA_TYPES)[Name]): GeneratedJavaStaticsMap[Name] }
export type * from './java-support.generated.js';
${declarationExports}
`;

  const eventsByPackage = new Map<string, JvmEvent[]>();
  for (const event of model.events ?? []) {
    const packageName = javaPackage(event.javaName);
    const values = eventsByPackage.get(packageName) ?? [];
    values.push(event);
    eventsByPackage.set(packageName, values);
  }
  const eventShards: Record<string, string> = {};
  for (const [packageName, values] of [...eventsByPackage].sort(([left], [right]) =>
    left.localeCompare(right),
  )) {
    eventShards[`event-packages/${shardName(packageName)}`] =
      `${generatedHeader(model)}type GeneratedEventDecorator = {
  (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor): void;
  <This, Arguments extends unknown[], Return>(value: (this: This, ...arguments_: Arguments) => Return, context: ClassMethodDecoratorContext<This, (this: This, ...arguments_: Arguments) => Return>): void;
};
type GeneratedEventPriority = 'LOWEST' | 'LOW' | 'NORMAL' | 'HIGH' | 'HIGHEST' | 'MONITOR';
function generatedEventDecorator(name: string, javaName: string, priority: GeneratedEventPriority, receiveCancelled: boolean): GeneratedEventDecorator {
  return (...invocation: Array<object | string | symbol>) => {
    const context = invocation[1] as { readonly kind?: string; readonly name?: string | symbol; readonly metadata?: Record<PropertyKey, object> } | undefined;
    const key = Symbol.for('shamoo.decorator.declarations');
    const legacyMember = typeof invocation[1] === 'string' || typeof invocation[1] === 'symbol' ? invocation[1] : undefined;
    if (context?.kind !== 'method' && legacyMember === undefined) throw new TypeError('@' + name + ' can only decorate a method.');
    const carrier = context?.metadata ?? (invocation[0] as { constructor: Record<PropertyKey, object> }).constructor;
    const declarations = carrier[key] as object[] | undefined;
    const value = { name, target: 'method', arguments: [javaName, priority, receiveCancelled], member: context?.name ?? legacyMember };
    if (declarations === undefined) Object.defineProperty(carrier, key, { configurable: true, value: [value] });
    else declarations.push(value);
  };
}
${values.map((event) => `/** Handles ${event.javaName}. */\nexport const On${event.type} = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('On${event.type}', ${JSON.stringify(event.javaName)}, priority, receiveCancelled);`).join('\n')}
`;
  }
  const eventExports = [...eventsByPackage.keys()]
    .sort()
    .map(
      (packageName) =>
        `export * from './event-packages/${shardName(packageName).replace(/\.ts$/, '.js')}';`,
    )
    .join('\n');
  const eventReference = (event: JvmEvent): string => {
    const declaration = modelTypes.get(event.javaName);
    const arguments_ = declaration?.typeParameters?.map(() => 'never').join(', ');
    return `${event.type}${arguments_ === undefined || arguments_ === '' ? '' : `<${arguments_}>`}`;
  };
  const events = `${generatedHeader(model)}${eventExports}\nexport const EVENT_TYPES = ${JSON.stringify(Object.fromEntries((model.events ?? []).map((event) => [event.javaName, { type: event.type, cancellable: event.cancellable }])), undefined, 2)} as const;
export type GeneratedEventType = typeof EVENT_TYPES[keyof typeof EVENT_TYPES]['type'];
export type GeneratedEventCancellabilityMap = { readonly [Name in keyof typeof EVENT_TYPES]: (typeof EVENT_TYPES)[Name]['cancellable'] };
export interface GeneratedEventMap {
${(model.events ?? []).map((event) => `  readonly ${JSON.stringify(event.javaName)}: import('./binding-packages/${declarationModule(javaPackage(event.javaName))}').${eventReference(event)};`).join('\n')}
}
`;
  const packets = `${generatedHeader(model)}export const PACKET_TYPES = ${JSON.stringify(Object.fromEntries((model.packets ?? []).map((packet) => [packet.javaName, { type: packet.type, registrations: packet.registrations }])), undefined, 2)} as const;
export interface GeneratedPacketMap {
${(model.packets ?? []).map((packet) => `  readonly ${JSON.stringify(packet.javaName)}: import('./binding-packages/${declarationModule(javaPackage(packet.javaName))}').${packet.type};`).join('\n')}
}
`;
  const analyzedOpaque = new Map<string, OpaqueMapping>();
  for (const declaration of model.declarations) {
    const typeVariables = new Set(declaration.typeParameters?.map((item) => item.name) ?? []);
    const context: RenderContext = {
      modelTypes,
      currentPackage: javaPackage(declaration.javaName),
      imports: new Map(),
      opaque: analyzedOpaque,
      typeVariables,
    };
    for (const type of [...(declaration.extends ?? []), ...(declaration.implements ?? [])])
      mapJavaType(type, context);
    for (const parameter of declaration.typeParameters ?? [])
      if (parameter.bound !== undefined) mapJavaType(parameter.bound, context);
    for (const field of declaration.fields ?? []) mapJavaType(field.type, context);
    for (const callable of [...(declaration.constructors ?? []), ...(declaration.methods ?? [])]) {
      const callableContext = {
        ...context,
        typeVariables: new Set([
          ...typeVariables,
          ...(callable.typeParameters?.map((item) => item.name) ?? []),
        ]),
      };
      for (const parameter of callable.typeParameters ?? [])
        if (parameter.bound !== undefined) mapJavaType(parameter.bound, callableContext);
      for (const parameter of callable.parameters) mapJavaType(parameter.type, callableContext);
      if ('returns' in callable && typeof callable.returns === 'string')
        mapJavaType(callable.returns, callableContext);
    }
  }
  const opaqueMappings = [...analyzedOpaque.values()].sort((left, right) =>
    left.javaName.localeCompare(right.javaName),
  );
  const output = {
    declarations,
    declarationShards,
    events,
    eventShards,
    packets,
  };
  const analyzedCoverage = analyzePlatformCoverage(model, output, exclusions);
  return {
    ...output,
    coverage: {
      ...analyzedCoverage,
      opaqueMappings,
    },
  };
}

function coverage(expected: number, emitted: number): CoverageCount {
  return { expected, emitted, percent: expected === 0 ? 100 : (emitted / expected) * 100 };
}

export function canonicalCoverageJson(coverage: PlatformCoverage): string {
  return `${JSON.stringify(coverage, undefined, 2)}\n`;
}
export async function readJvmApiModel(path: string): Promise<JvmApiModel> {
  return parseJvmApiModel(await readFile(path, 'utf8'));
}
/** Fails generation when a pinned scanner artifact differs from its reviewed checksum. */
export async function verifyModelChecksum(path: string, expectedSha256: string): Promise<void> {
  const actual = createHash('sha256')
    .update(await readFile(path))
    .digest('hex');
  if (actual !== expectedSha256)
    throw new Error(
      `Pinned model checksum drift at ${path}: expected ${expectedSha256}, received ${actual}.`,
    );
}
export async function diffGeneratedFile(path: string, expected: string): Promise<GenerationDiff> {
  try {
    const actual = await readFile(resolve(path), 'utf8');
    return { changed: actual !== expected, expected, actual };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return { changed: true, expected };
    throw error;
  }
}
export async function syncGeneratedFile(path: string, contents: string): Promise<boolean> {
  const difference = await diffGeneratedFile(path, contents);
  if (!difference.changed) return false;
  const output = resolve(path);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, contents, 'utf8');
  return true;
}

const generatedFilePattern =
  /(?:^|\/)(?:bindings|events|packets|metadata|coverage|java-support|[^/]+)\.generated\.(?:ts|d\.ts|json)$/;

async function generatedFiles(directory: string, relative = ''): Promise<readonly string[]> {
  const output: string[] = [];
  try {
    for (const entry of await readdir(join(directory, relative), { withFileTypes: true })) {
      const path = relative === '' ? entry.name : `${relative}/${entry.name}`;
      if (entry.isDirectory()) output.push(...(await generatedFiles(directory, path)));
      else if (entry.isFile() && generatedFilePattern.test(path)) output.push(path);
    }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
  }
  return output.sort();
}

function safeGeneratedPath(directory: string, relative: string): string {
  const root = resolve(directory);
  const output = resolve(root, relative);
  if (output === root || !output.startsWith(`${root}/`) || !generatedFilePattern.test(relative))
    throw new TypeError(`Unsafe generated output path '${relative}'.`);
  return output;
}

/** Compares an exact generated tree, including files that are no longer generated. */
export async function diffGeneratedTree(
  directory: string,
  expected: Readonly<Record<string, string>>,
): Promise<Readonly<Record<string, GenerationDiff>>> {
  const differences: Record<string, GenerationDiff> = {};
  for (const [path, contents] of Object.entries(expected).sort(([left], [right]) =>
    left.localeCompare(right),
  ))
    differences[path] = await diffGeneratedFile(safeGeneratedPath(directory, path), contents);
  for (const path of await generatedFiles(resolve(directory)))
    if (expected[path] === undefined)
      differences[path] = {
        changed: true,
        expected: '',
        actual: await readFile(safeGeneratedPath(directory, path), 'utf8'),
      };
  return differences;
}

/** Synchronizes an exact generated tree and safely removes stale generated files only. */
export async function syncGeneratedTree(
  directory: string,
  expected: Readonly<Record<string, string>>,
): Promise<readonly string[]> {
  const changed: string[] = [];
  for (const [path, contents] of Object.entries(expected).sort(([left], [right]) =>
    left.localeCompare(right),
  )) {
    const output = safeGeneratedPath(directory, path);
    if (await syncGeneratedFile(output, contents)) changed.push(output);
  }
  for (const path of await generatedFiles(resolve(directory))) {
    if (expected[path] !== undefined) continue;
    const output = safeGeneratedPath(directory, path);
    await rm(output);
    changed.push(output);
  }
  return changed;
}
