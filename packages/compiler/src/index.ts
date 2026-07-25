/** TypeScript Compiler API discovery and canonical Shamoo metadata generation. @packageDocumentation */
import { builtinModules } from 'node:module';
import { dirname, relative, resolve, sep } from 'node:path';

import { InvalidDeclarationError } from '@shamoo/common';
import type { PlatformKind } from '@shamoo/core';
import {
  parseCompilerMetadata,
  type CanonicalValue,
  type CompilerMetadata,
  type ComponentMetadata,
  type CommunicationMetadata,
  type DecoratorMetadata,
  type DependencyMetadata,
  type MetadataPlatform,
  type ModuleImportMetadata,
  type ModuleMetadata,
  type SourceLocation,
  type TokenMetadata,
} from '@shamoo/metadata';
import * as ts from 'typescript';

export const SHAMOO_COMPILER_VERSION = '0.1.0-rc.1';
export type CompilerDiagnosticCode =
  | 'TYPESCRIPT'
  | 'DECORATOR_USAGE'
  | 'DECORATOR_CONFLICT'
  | 'EXECUTABLE_CLASS_EXPORT'
  | 'INJECTION_TOKEN_REQUIRED'
  | 'MODULE_CYCLE'
  | 'COMMUNICATION_CONTRACT'
  | 'METADATA_VALIDATION'
  | 'PLATFORM_LEAK'
  | 'UNSUPPORTED_IMPORT'
  | 'PERMISSION_REQUIRED';
export interface CompilerDiagnostic {
  readonly code: CompilerDiagnosticCode;
  readonly message: string;
  readonly location?: SourceLocation;
  readonly dependencyPath?: readonly string[];
  readonly suggestion?: string;
}
export interface CompilerPermissions {
  readonly builtins?: readonly string[];
  readonly filesystem?: {
    readonly read: readonly string[];
    readonly write: readonly string[];
  };
  readonly network?: boolean;
  readonly workers?: boolean;
  readonly childProcess?: boolean;
  readonly nativeAddons?: boolean;
  readonly nms?: boolean;
  readonly packets?: boolean;
}
export interface PluginCompilationRequest {
  readonly tsconfig?: string;
  readonly entrypoint: string;
  readonly platforms: readonly PlatformKind[];
  readonly paperEntrypoint?: string;
  readonly velocityEntrypoint?: string;
  readonly permissions?: CompilerPermissions;
  readonly communication?: CommunicationMetadata;
}
export interface CompilationResult {
  readonly metadata?: CompilerMetadata;
  readonly diagnostics: readonly CompilerDiagnostic[];
}

const classDecorators = new Map<string, ComponentMetadata['kind']>([
  ['Plugin', 'plugin'],
  ['Module', 'module'],
  ['Component', 'component'],
  ['Injectable', 'component'],
  ['Service', 'service'],
] as const);
const methodOnly = new Set([
  'OnLoad',
  'OnEnable',
  'OnReady',
  'OnDrain',
  'OnDisable',
  'OnUnload',
  'EventHandler',
  'Command',
  'Subcommand',
  'Scheduled',
  'Interval',
  'Timeout',
  'PacketHandler',
  'OnPacketReceive',
  'OnPacketSend',
]);
const memberOnly = new Set([
  'Inject',
  'Optional',
  'InjectAll',
  'Lazy',
  'Named',
  'Qualifier',
  'ConfigValue',
  'Argument',
  'Option',
  'Sender',
  'Context',
  'Validate',
]);
const repeatable = new Set([
  'Requires',
  'Validate',
  'UseInterceptors',
  'UseGuards',
  'UsePipes',
  'Catch',
]);
const decoratorTargets = new Map<string, readonly string[]>([
  ...[...classDecorators.keys(), 'Global', 'Primary'].map((name) => [name, ['class']] as const),
  ...[...methodOnly].map((name) => [name, ['method']] as const),
  ...[...memberOnly].map((name) => [name, ['parameter', 'property']] as const),
  ...['Requires', 'RequiresExpression', 'UseInterceptors', 'UseGuards', 'UsePipes', 'Catch'].map(
    (name) => [name, ['class', 'method']] as const,
  ),
]);
const platformPackages: Readonly<Record<'paper' | 'velocity', readonly string[]>> = {
  paper: [
    '@shamoo/paper',
    '@shamoo/paper-raw',
    '@shamoo/paper-nms',
    '@shamoo/paper-packets',
    'org.bukkit',
    'io.papermc',
    'net.minecraft',
  ],
  velocity: ['@shamoo/velocity', '@shamoo/velocity-raw', 'com.velocitypowered'],
};
const lifecycleStages: ReadonlyMap<
  string,
  'load' | 'enable' | 'ready' | 'drain' | 'disable' | 'unload'
> = new Map([
  ['OnLoad', 'load'],
  ['OnEnable', 'enable'],
  ['OnReady', 'ready'],
  ['OnDrain', 'drain'],
  ['OnDisable', 'disable'],
  ['OnUnload', 'unload'],
] as const);
const invocationKinds: ReadonlyMap<string, 'event' | 'command' | 'task' | 'packet'> = new Map([
  ['EventHandler', 'event'],
  ['Command', 'command'],
  ['Subcommand', 'command'],
  ['Scheduled', 'task'],
  ['Interval', 'task'],
  ['Timeout', 'task'],
  ['PacketHandler', 'packet'],
  ['OnPacketReceive', 'packet'],
  ['OnPacketSend', 'packet'],
] as const);
const unsupportedBuiltins = new Set(['node:module', 'node:repl', 'node:vm']);
const capabilityBuiltins = new Map<string, keyof CompilerPermissions>([
  ['node:fs', 'filesystem'],
  ['node:fs/promises', 'filesystem'],
  ['node:http', 'network'],
  ['node:https', 'network'],
  ['node:http2', 'network'],
  ['node:net', 'network'],
  ['node:tls', 'network'],
  ['node:dgram', 'network'],
  ['node:dns', 'network'],
  ['node:dns/promises', 'network'],
  ['node:worker_threads', 'workers'],
  ['node:child_process', 'childProcess'],
]);
function hasPermission(
  permissions: CompilerPermissions | undefined,
  capability: keyof CompilerPermissions,
): boolean {
  return capability === 'filesystem'
    ? permissions?.filesystem !== undefined
    : permissions?.[capability] === true;
}
const nodeBuiltins = new Set(
  builtinModules.map((name) => (name.startsWith('node:') ? name.slice(5) : name)),
);
const decoratorPackages = new Set([
  '@shamoo/decorators',
  '@shamoo/lifecycle',
  '@shamoo/conditions',
  '@shamoo/events',
  '@shamoo/commands',
  '@shamoo/scheduler',
  '@shamoo/interceptors',
  '@shamoo/guards',
  '@shamoo/pipes',
  '@shamoo/filters',
  '@shamoo/validation',
  '@shamoo/paper-packets',
  '@shamoo/paper-raw',
  '@shamoo/velocity-raw',
]);

export class CompilationError extends Error {
  public readonly code = 'SHAMOO_COMPILATION';
  public constructor(public readonly diagnostics: readonly CompilerDiagnostic[]) {
    super(diagnostics.map((item) => `${item.code}: ${item.message}`).join('\n'));
    this.name = 'CompilationError';
  }
}

export function validateCompilationRequest(request: PluginCompilationRequest): void {
  if (request.entrypoint.trim().length === 0)
    throw new InvalidDeclarationError('Compiler entrypoint must not be empty.');
  if (request.platforms.length === 0)
    throw new InvalidDeclarationError('At least one target platform is required.');
  if (new Set(request.platforms).size !== request.platforms.length)
    throw new InvalidDeclarationError('Target platforms must be unique.');
}

function normalized(root: string, file: string): string {
  return relative(root, file).split(sep).join('/');
}
function location(root: string, node: ts.Node): SourceLocation {
  const source = node.getSourceFile();
  const point = source.getLineAndCharacterOfPosition(node.getStart(source));
  return {
    file: normalized(root, source.fileName),
    line: point.line + 1,
    column: point.character + 1,
  };
}
function locationAt(root: string, source: ts.SourceFile, position: number): SourceLocation {
  const point = source.getLineAndCharacterOfPosition(position);
  return {
    file: normalized(root, source.fileName),
    line: point.line + 1,
    column: point.character + 1,
  };
}
function importSourceForSymbol(symbol: ts.Symbol): string | undefined {
  for (const declaration of symbol.declarations ?? []) {
    let current: ts.Node = declaration;
    while (!ts.isImportDeclaration(current) && !ts.isSourceFile(current)) {
      current = current.parent;
    }
    if (ts.isImportDeclaration(current) && ts.isStringLiteral(current.moduleSpecifier)) {
      return current.moduleSpecifier.text;
    }
  }
  return undefined;
}
function decoratorName(checker: ts.TypeChecker, node: ts.Decorator): string | undefined {
  const expression = ts.isCallExpression(node.expression)
    ? node.expression.expression
    : node.expression;
  const lookup = ts.isPropertyAccessExpression(expression) ? expression.name : expression;
  const symbol = checker.getSymbolAtLocation(lookup);
  if (symbol === undefined) return undefined;
  const namespaceSymbol = ts.isPropertyAccessExpression(expression)
    ? checker.getSymbolAtLocation(expression.expression)
    : undefined;
  const importSource =
    importSourceForSymbol(symbol) ??
    (namespaceSymbol === undefined ? undefined : importSourceForSymbol(namespaceSymbol));
  if (importSource === undefined || !decoratorPackages.has(importSource)) return undefined;
  const resolved = symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;
  return resolved.getName();
}
function decorators(node: ts.Node): readonly ts.Decorator[] {
  return ts.canHaveDecorators(node) ? (ts.getDecorators(node) ?? []) : [];
}
function canonicalExpression(expression: ts.Expression): CanonicalValue {
  if (ts.isStringLiteralLike(expression)) return expression.text;
  if (ts.isNumericLiteral(expression)) return Number(expression.text);
  if (expression.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (expression.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (expression.kind === ts.SyntaxKind.NullKeyword) return null;
  if (ts.isIdentifier(expression) || ts.isPropertyAccessExpression(expression))
    return expression.getText();
  if (ts.isArrayLiteralExpression(expression)) return expression.elements.map(canonicalExpression);
  if (ts.isObjectLiteralExpression(expression)) {
    const entries: [string, CanonicalValue][] = [];
    for (const property of expression.properties) {
      if (!ts.isPropertyAssignment(property)) continue;
      const name =
        ts.isIdentifier(property.name) || ts.isStringLiteralLike(property.name)
          ? property.name.text
          : property.name.getText();
      entries.push([name, canonicalExpression(property.initializer)]);
    }
    return Object.fromEntries(entries.sort(([left], [right]) => left.localeCompare(right)));
  }
  return expression.getText();
}
function decoratorMetadata(
  root: string,
  checker: ts.TypeChecker,
  node: ts.Decorator,
): DecoratorMetadata {
  const call = ts.isCallExpression(node.expression) ? node.expression : undefined;
  return {
    name: decoratorName(checker, node) ?? '<unknown>',
    arguments: call?.arguments.map(canonicalExpression) ?? [],
    location: location(root, node),
  };
}
function resolvedSymbol(checker: ts.TypeChecker, expression: ts.Expression): ts.Symbol | undefined {
  const lookup = ts.isPropertyAccessExpression(expression) ? expression.name : expression;
  const symbol = checker.getSymbolAtLocation(lookup);
  if (symbol === undefined) return undefined;
  return symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;
}
function tokenFromInject(checker: ts.TypeChecker, node: ts.Node): TokenMetadata | undefined {
  const binding = decorators(node).find((item) =>
    ['Inject', 'ConfigValue', 'Argument', 'Option', 'Sender', 'Context'].includes(
      decoratorName(checker, item) ?? '',
    ),
  );
  if (binding === undefined) return undefined;
  const name = decoratorName(checker, binding) ?? 'Inject';
  const argument = ts.isCallExpression(binding.expression)
    ? binding.expression.arguments[0]
    : undefined;
  if (name === 'Inject' && argument === undefined) return undefined;
  if (name === 'Inject' && argument !== undefined) {
    if (
      ts.isStringLiteralLike(argument) ||
      ts.isNumericLiteral(argument) ||
      argument.kind === ts.SyntaxKind.TrueKeyword ||
      argument.kind === ts.SyntaxKind.FalseKeyword ||
      argument.kind === ts.SyntaxKind.NullKeyword
    ) {
      return { kind: 'token', value: canonicalExpression(argument) };
    }
    const symbol = resolvedSymbol(checker, argument);
    const declaration = symbol?.valueDeclaration ?? symbol?.declarations?.[0];
    if (symbol !== undefined && declaration !== undefined) {
      return ts.isClassDeclaration(declaration)
        ? {
            kind: 'class',
            name: symbol.getName(),
            module: declaration.getSourceFile().fileName,
          }
        : {
            kind: 'token',
            name: symbol.getName(),
            module: declaration.getSourceFile().fileName,
          };
    }
  }
  if (['Argument', 'Option', 'Sender', 'Context'].includes(name)) {
    const arguments_ = ts.isCallExpression(binding.expression)
      ? binding.expression.arguments.map(canonicalExpression)
      : [];
    return {
      kind: 'token',
      value: { binding: name, arguments: arguments_ },
    };
  }
  const value = argument === undefined ? 'value' : canonicalExpression(argument);
  return {
    kind: 'token',
    value: name === 'Inject' ? value : { binding: name, value },
  };
}
function inferredToken(
  checker: ts.TypeChecker,
  node: ts.ParameterDeclaration | ts.PropertyDeclaration,
): TokenMetadata | undefined {
  const explicit = tokenFromInject(checker, node);
  if (explicit !== undefined) return explicit;
  if (node.type === undefined) return undefined;
  const typeSymbol = ts.isTypeReferenceNode(node.type)
    ? checker.getSymbolAtLocation(node.type.typeName)
    : undefined;
  if (
    typeSymbol?.declarations?.some(
      (declaration) =>
        (ts.isImportSpecifier(declaration) &&
          (declaration.isTypeOnly || declaration.parent.parent.isTypeOnly)) ||
        (ts.isNamespaceImport(declaration) && declaration.parent.isTypeOnly),
    ) === true
  )
    return undefined;
  const type = checker.getTypeAtLocation(node.type);
  const symbol = type.aliasSymbol ?? type.getSymbol();
  const declaration = symbol?.declarations?.[0];
  if (symbol === undefined || declaration === undefined || !ts.isClassDeclaration(declaration))
    return undefined;
  return { kind: 'class', name: symbol.getName(), module: declaration.getSourceFile().fileName };
}
function decoratorArgument(
  checker: ts.TypeChecker,
  node: ts.Node,
  name: string,
): string | undefined {
  const decorator = decorators(node).find((item) => decoratorName(checker, item) === name);
  if (decorator === undefined || !ts.isCallExpression(decorator.expression)) return undefined;
  const argument = decorator.expression.arguments[0];
  return argument === undefined
    ? undefined
    : ts.isStringLiteralLike(argument)
      ? argument.text
      : argument.getText();
}
function dependency(
  root: string,
  checker: ts.TypeChecker,
  node: ts.ParameterDeclaration | ts.PropertyDeclaration,
  index?: number,
): DependencyMetadata | undefined {
  const token = inferredToken(checker, node);
  if (token === undefined) return undefined;
  const names = new Set(decorators(node).map((item) => decoratorName(checker, item)));
  const named = decoratorArgument(checker, node, 'Named');
  const qualifier = decoratorArgument(checker, node, 'Qualifier');
  return {
    ...(index === undefined ? { property: node.name.getText() } : { index }),
    token: {
      ...token,
      ...('module' in token ? { module: normalized(root, token.module) } : {}),
    },
    ...(names.has('Optional') ? { optional: true } : {}),
    ...(names.has('InjectAll') ? { all: true } : {}),
    ...(names.has('Lazy') ? { lazy: true } : {}),
    ...(named === undefined ? {} : { name: named }),
    ...(qualifier === undefined ? {} : { qualifier }),
    location: location(root, node),
  };
}

function declarationId(root: string, checker: ts.TypeChecker, expression: ts.Expression): string {
  let target = expression;
  if (
    ts.isCallExpression(target) &&
    isForwardRef(checker, target) &&
    target.arguments[0] !== undefined &&
    (ts.isArrowFunction(target.arguments[0]) || ts.isFunctionExpression(target.arguments[0]))
  ) {
    const body = target.arguments[0].body;
    if (ts.isExpression(body)) target = body;
  }
  const symbol = resolvedSymbol(checker, target);
  const declaration = symbol?.valueDeclaration ?? symbol?.declarations?.[0];
  if (symbol === undefined || declaration === undefined) return target.getText();
  return `${normalized(root, declaration.getSourceFile().fileName)}#${symbol.getName()}`;
}
function isForwardRef(checker: ts.TypeChecker, expression: ts.CallExpression): boolean {
  const lookup = ts.isPropertyAccessExpression(expression.expression)
    ? expression.expression.name
    : expression.expression;
  const symbol = checker.getSymbolAtLocation(lookup);
  if (symbol === undefined) return false;
  const namespaceSymbol = ts.isPropertyAccessExpression(expression.expression)
    ? checker.getSymbolAtLocation(expression.expression.expression)
    : undefined;
  const importSource =
    importSourceForSymbol(symbol) ??
    (namespaceSymbol === undefined ? undefined : importSourceForSymbol(namespaceSymbol));
  if (importSource !== '@shamoo/di') return false;
  const resolved = symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;
  return resolved.getName() === 'forwardRef';
}
function moduleOptionNames(
  root: string,
  checker: ts.TypeChecker,
  node: ts.ClassDeclaration,
  option: string,
): readonly string[] {
  const decorator = decorators(node).find((item) => decoratorName(checker, item) === 'Module');
  if (decorator === undefined || !ts.isCallExpression(decorator.expression)) return [];
  const object = decorator.expression.arguments[0];
  if (object === undefined || !ts.isObjectLiteralExpression(object)) return [];
  const property = object.properties.find(
    (item): item is ts.PropertyAssignment =>
      ts.isPropertyAssignment(item) && item.name.getText() === option,
  );
  if (property === undefined || !ts.isArrayLiteralExpression(property.initializer)) return [];
  return property.initializer.elements.map((item) => declarationId(root, checker, item)).sort();
}
function moduleImports(
  root: string,
  checker: ts.TypeChecker,
  node: ts.ClassDeclaration,
): readonly ModuleImportMetadata[] {
  const decorator = decorators(node).find((item) => decoratorName(checker, item) === 'Module');
  if (decorator === undefined || !ts.isCallExpression(decorator.expression)) return [];
  const object = decorator.expression.arguments[0];
  if (object === undefined || !ts.isObjectLiteralExpression(object)) return [];
  const property = object.properties.find(
    (item): item is ts.PropertyAssignment =>
      ts.isPropertyAssignment(item) && item.name.getText() === 'imports',
  );
  if (property === undefined || !ts.isArrayLiteralExpression(property.initializer)) return [];
  return property.initializer.elements
    .map((item) => ({
      id: declarationId(root, checker, item),
      forwardRef: ts.isCallExpression(item) && isForwardRef(checker, item),
    }))
    .sort((left, right) => left.id.localeCompare(right.id));
}
interface ImportReference {
  readonly specifier?: string;
  readonly node: ts.Node;
  readonly dynamic: boolean;
}
function importReferences(source: ts.SourceFile): readonly ImportReference[] {
  const references: ImportReference[] = [];
  const constants = new Map<string, string>();
  const requireAliases = new Set(['require']);
  for (const statement of source.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.initializer === undefined) continue;
      if (ts.isStringLiteralLike(declaration.initializer))
        constants.set(declaration.name.text, declaration.initializer.text);
      else if (
        ts.isIdentifier(declaration.initializer) &&
        requireAliases.has(declaration.initializer.text)
      )
        requireAliases.add(declaration.name.text);
    }
  }
  const staticSpecifier = (expression: ts.Expression): string | undefined =>
    ts.isStringLiteralLike(expression)
      ? expression.text
      : ts.isIdentifier(expression)
        ? constants.get(expression.text)
        : undefined;
  const visit = (node: ts.Node): void => {
    if (
      (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) &&
      node.moduleSpecifier !== undefined
    ) {
      references.push({
        ...(ts.isStringLiteralLike(node.moduleSpecifier)
          ? { specifier: node.moduleSpecifier.text }
          : {}),
        node: node.moduleSpecifier,
        dynamic: false,
      });
      return;
    }
    if (ts.isImportEqualsDeclaration(node) && ts.isExternalModuleReference(node.moduleReference)) {
      const expression = node.moduleReference.expression;
      references.push({
        ...(ts.isStringLiteralLike(expression) ? { specifier: expression.text } : {}),
        node: expression,
        dynamic: false,
      });
      return;
    }
    if (
      ts.isCallExpression(node) &&
      (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
        (ts.isIdentifier(node.expression) && requireAliases.has(node.expression.text)))
    ) {
      const argument = node.arguments[0];
      if (argument !== undefined) {
        const specifier = staticSpecifier(argument);
        references.push({
          ...(specifier === undefined ? {} : { specifier }),
          node: argument,
          dynamic: true,
        });
      }
      return;
    }
    ts.forEachChild(node, visit);
  };
  visit(source);
  return references;
}
function platformForFile(source: ts.SourceFile): MetadataPlatform {
  for (const reference of importReferences(source)) {
    const specifier = reference.specifier;
    if (specifier === undefined) continue;
    if (platformPackages.paper.some((prefix) => specifier.startsWith(prefix))) return 'paper';
    if (platformPackages.velocity.some((prefix) => specifier.startsWith(prefix))) return 'velocity';
  }
  return 'common';
}

interface Reachability {
  readonly paper: ReadonlyMap<string, readonly string[]>;
  readonly velocity: ReadonlyMap<string, readonly string[]>;
}

function metadataPlatform(
  source: ts.SourceFile,
  reachability: Reachability,
  dualPlatform: boolean,
): MetadataPlatform {
  if (!dualPlatform) return platformForFile(source);
  const file = resolve(source.fileName);
  const paper = reachability.paper.has(file);
  const velocity = reachability.velocity.has(file);
  return paper && velocity ? 'common' : paper ? 'paper' : 'velocity';
}

function isNamedExportedTopLevelClass(checker: ts.TypeChecker, node: ts.ClassDeclaration): boolean {
  if (node.name === undefined || !ts.isSourceFile(node.parent)) return false;
  const module = checker.getSymbolAtLocation(node.parent);
  if (module === undefined) return false;
  return checker.getExportsOfModule(module).some((item) => {
    if (item.name !== node.name?.text) return false;
    const resolved = item.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(item) : item;
    return resolved.declarations?.includes(node) === true;
  });
}

function executableDecorator(name: string): boolean {
  return (
    lifecycleStages.has(name) ||
    invocationKinds.has(name) ||
    (name.startsWith('On') && name.endsWith('Event'))
  );
}

function discover(
  root: string,
  program: ts.Program,
  includedFiles: ReadonlyMap<string, readonly string[]>,
  reachability: Reachability,
  dualPlatform: boolean,
  diagnostics: CompilerDiagnostic[],
): { components: ComponentMetadata[]; modules: ModuleMetadata[] } {
  const checker = program.getTypeChecker();
  const components: ComponentMetadata[] = [];
  const modules: ModuleMetadata[] = [];
  for (const source of program
    .getSourceFiles()
    .filter((item) => includedFiles.has(resolve(item.fileName)))) {
    const visit = (node: ts.Node): void => {
      const nodeDecorators = decorators(node).filter(
        (item) => decoratorName(checker, item) !== undefined,
      );
      const names = nodeDecorators.flatMap((item) => {
        const name = decoratorName(checker, item);
        return name === undefined ? [] : [name];
      });
      const target = ts.isClassDeclaration(node)
        ? 'class'
        : ts.isMethodDeclaration(node)
          ? 'method'
          : ts.isParameter(node)
            ? 'parameter'
            : ts.isPropertyDeclaration(node)
              ? 'property'
              : 'unsupported';
      for (const name of names) {
        const allowedTargets = decoratorTargets.get(name);
        if (allowedTargets !== undefined && !allowedTargets.includes(target))
          diagnostics.push({
            code: 'DECORATOR_USAGE',
            message: `@${name} cannot decorate a ${target}; expected ${allowedTargets.join(' or ')}.`,
            location: location(root, node),
          });
      }
      const duplicates = names.find(
        (name, index) => !repeatable.has(name) && names.indexOf(name) !== index,
      );
      if (duplicates !== undefined)
        diagnostics.push({
          code: 'DECORATOR_CONFLICT',
          message: `@${duplicates} may only be declared once on this target.`,
          location: location(root, node),
        });
      const executableNames = names.filter(executableDecorator);
      const conflictGroups = [
        [...new Set(executableNames)],
        names.filter((name) =>
          ['Inject', 'ConfigValue', 'Argument', 'Option', 'Sender', 'Context'].includes(name),
        ),
      ];
      const conflict = conflictGroups.find((group) => new Set(group).size > 1);
      if (conflict !== undefined)
        diagnostics.push({
          code: 'DECORATOR_CONFLICT',
          message: `Decorators ${conflict.map((name) => `@${name}`).join(', ')} are mutually exclusive on one target.`,
          location: location(root, node),
        });
      if (ts.isClassDeclaration(node)) {
        const exported = isNamedExportedTopLevelClass(checker, node);
        if (nodeDecorators.length > 0 && !exported)
          diagnostics.push({
            code: 'EXECUTABLE_CLASS_EXPORT',
            message:
              'Decorated classes must be named top-level classes exported by name from their defining source file.',
            location: location(root, node),
          });
        const kinds = names.filter((name) => classDecorators.has(name));
        if (kinds.length > 1)
          diagnostics.push({
            code: 'DECORATOR_CONFLICT',
            message: `Class declarations conflict: ${kinds.map((name) => `@${name}`).join(', ')}.`,
            location: location(root, node),
          });
        const selected = kinds[0];
        if (selected !== undefined && node.name !== undefined && exported) {
          const constructor = node.members.find(ts.isConstructorDeclaration);
          const parameters: DependencyMetadata[] = [];
          constructor?.parameters.forEach((parameter, index) => {
            const value = dependency(root, checker, parameter, index);
            if (value === undefined && parameter.type !== undefined)
              diagnostics.push({
                code: 'INJECTION_TOKEN_REQUIRED',
                message: `Cannot represent constructor dependency '${parameter.name.getText()}' on ${node.name?.text ?? 'class'} at runtime. Interfaces, type aliases, primitives, and type-only values require @Inject(TOKEN).`,
                location: location(root, parameter),
                suggestion:
                  'Create a token with createToken<T>(description) and annotate the dependency with @Inject(token).',
              });
            else if (value !== undefined) parameters.push(value);
          });
          const properties: DependencyMetadata[] = [];
          const methods = node.members.filter(ts.isMethodDeclaration).flatMap((member) => {
            const metadata = decorators(member)
              .filter((item) => decoratorName(checker, item) !== undefined)
              .map((item) => decoratorMetadata(root, checker, item));
            if (metadata.length === 0) return [];
            if (!ts.isIdentifier(member.name)) {
              diagnostics.push({
                code: 'DECORATOR_USAGE',
                message:
                  'Decorated methods must use a normal identifier name; string, numeric, computed, and private names are unsupported.',
                location: location(root, member.name),
              });
              return [];
            }
            const methodParameters: DependencyMetadata[] = [];
            member.parameters.forEach((parameter, index) => {
              const value = dependency(root, checker, parameter, index);
              const commandBinding = decorators(parameter).some((item) =>
                ['Argument', 'Option', 'Sender', 'Context'].includes(
                  decoratorName(checker, item) ?? '',
                ),
              );
              if (value === undefined && parameter.type !== undefined && !commandBinding)
                diagnostics.push({
                  code: 'INJECTION_TOKEN_REQUIRED',
                  message: `Cannot represent method dependency '${parameter.name.getText()}' on ${node.name?.text ?? 'class'}.${member.name.getText()} at runtime. Interfaces, type aliases, primitives, and type-only values require @Inject(TOKEN).`,
                  location: location(root, parameter),
                  suggestion:
                    'Create a token with createToken<T>(description) and annotate the dependency with @Inject(token).',
                });
              else if (value !== undefined) methodParameters.push(value);
            });
            return [
              {
                name: member.name.text,
                ...(() => {
                  const lifecycle = metadata
                    .map((item) => lifecycleStages.get(item.name))
                    .find((item) => item !== undefined);
                  const invocation =
                    metadata
                      .map((item) => invocationKinds.get(item.name))
                      .find((item) => item !== undefined) ??
                    (metadata.some(
                      (item) => item.name.startsWith('On') && item.name.endsWith('Event'),
                    )
                      ? 'event'
                      : undefined);
                  return {
                    ...(lifecycle === undefined ? {} : { lifecycle }),
                    ...(invocation === undefined ? {} : { invocation }),
                  };
                })(),
                decorators: metadata,
                parameters: methodParameters,
                location: location(root, member),
              },
            ];
          });
          const callbackMethods = methods.filter((method) => method.invocation !== undefined);
          const duplicateCallback = callbackMethods.find(
            (method, index) =>
              callbackMethods.findIndex((candidate) => candidate.name === method.name) !== index,
          );
          if (duplicateCallback !== undefined)
            diagnostics.push({
              code: 'DECORATOR_CONFLICT',
              message: `Callback-producing method '${duplicateCallback.name}' is declared more than once on ${node.name.text}.`,
              location: duplicateCallback.location,
            });
          for (const property of node.members.filter(ts.isPropertyDeclaration)) {
            if (
              decorators(property).some((item) =>
                memberOnly.has(decoratorName(checker, item) ?? ''),
              )
            ) {
              const value = dependency(root, checker, property);
              if (value === undefined)
                diagnostics.push({
                  code: 'INJECTION_TOKEN_REQUIRED',
                  message: `Property '${property.name.getText()}' requires @Inject(TOKEN) because its type has no runtime class value.`,
                  location: location(root, property),
                });
              else properties.push(value);
            }
          }
          const classKind = classDecorators.get(selected);
          if (classKind === 'module') {
            modules.push({
              id: `${normalized(root, source.fileName)}#${node.name.text}`,
              name: node.name.text,
              imports: moduleImports(root, checker, node),
              declarations: moduleOptionNames(root, checker, node, 'providers'),
              exports: moduleOptionNames(root, checker, node, 'exports'),
              global: names.includes('Global'),
              location: location(root, node),
            });
          }
          components.push({
            id: `${normalized(root, source.fileName)}#${node.name.text}`,
            kind: classKind ?? 'component',
            name: node.name.text,
            file: normalized(root, source.fileName),
            platform: metadataPlatform(source, reachability, dualPlatform),
            decorators: nodeDecorators.map((item) => decoratorMetadata(root, checker, item)),
            constructor: parameters,
            properties,
            methods,
            location: location(root, node),
          });
        }
      }
      ts.forEachChild(node, visit);
    };
    visit(source);
  }
  return { components, modules };
}

function checkModuleCycles(
  modules: readonly ModuleMetadata[],
  diagnostics: CompilerDiagnostic[],
): void {
  const byId = new Map(modules.map((item) => [item.id, item]));
  const visit = (id: string, path: readonly string[]): void => {
    const index = path.indexOf(id);
    if (index >= 0) {
      const cycle = [...path.slice(index), id];
      if (
        !diagnostics.some(
          (item) => item.code === 'MODULE_CYCLE' && item.message.includes(cycle.join(' -> ')),
        )
      ) {
        const cycleLocation = byId.get(id)?.location;
        diagnostics.push({
          code: 'MODULE_CYCLE',
          message: `Module cycle: ${cycle.join(' -> ')}. Use forwardRef only when the cycle is intentional.`,
          ...(cycleLocation === undefined ? {} : { location: cycleLocation }),
          dependencyPath: cycle,
        });
      }
      return;
    }
    for (const imported of byId.get(id)?.imports ?? []) {
      if (!imported.forwardRef) visit(imported.id, [...path, id]);
    }
  };
  for (const id of [...byId.keys()].sort()) visit(id, []);
}

function reachableFrom(
  root: string,
  program: ts.Program,
  entrypoint: string | undefined,
): ReadonlyMap<string, readonly string[]> {
  if (entrypoint === undefined) return new Map();
  const entry = resolve(root, entrypoint);
  const queue = [
    {
      file: entry,
      path: [normalized(root, entry)] as readonly string[],
    },
  ];
  const reached = new Map<string, readonly string[]>();
  while (queue.length > 0) {
    const next = queue.shift();
    if (next === undefined) continue;
    const file = resolve(next.file);
    if (reached.has(file)) continue;
    reached.set(file, next.path);
    if (
      file.includes(`${sep}src${sep}generated${sep}`) ||
      file.includes(`${sep}@shamoo${sep}paper-nms${sep}`) ||
      file.includes(`${sep}@shamoo${sep}paper-packets${sep}`) ||
      file.includes(`${sep}packages${sep}paper-nms${sep}`) ||
      file.includes(`${sep}packages${sep}paper-packets${sep}`)
    )
      continue;
    const source =
      program.getSourceFile(file) ??
      (() => {
        const contents = ts.sys.readFile(file);
        return contents === undefined
          ? undefined
          : ts.createSourceFile(file, contents, ts.ScriptTarget.Latest, true);
      })();
    if (source === undefined) continue;
    for (const reference of importReferences(source)) {
      if (reference.specifier === undefined) continue;
      const imported = ts.resolveModuleName(
        reference.specifier,
        file,
        program.getCompilerOptions(),
        ts.sys,
      ).resolvedModule?.resolvedFileName;
      if (imported !== undefined) {
        queue.push({
          file: imported,
          path: [...next.path, normalized(root, imported)],
        });
      }
    }
  }
  return reached;
}

function reachableFiles(
  root: string,
  program: ts.Program,
  request: PluginCompilationRequest,
): Reachability {
  const platforms = new Set(request.platforms as readonly string[]);
  return {
    paper: reachableFrom(
      root,
      program,
      platforms.has('paper') ? (request.paperEntrypoint ?? request.entrypoint) : undefined,
    ),
    velocity: reachableFrom(
      root,
      program,
      platforms.has('velocity') ? (request.velocityEntrypoint ?? request.entrypoint) : undefined,
    ),
  };
}

function combinedReachability(reachability: Reachability): ReadonlyMap<string, readonly string[]> {
  return new Map([...reachability.velocity, ...reachability.paper]);
}

function typescriptDiagnostic(root: string, item: ts.Diagnostic): CompilerDiagnostic {
  return {
    code: 'TYPESCRIPT',
    message: ts.flattenDiagnosticMessageText(item.messageText, '\n'),
    ...(item.file === undefined || item.start === undefined
      ? {}
      : { location: locationAt(root, item.file, item.start) }),
  };
}

function validateEntrypoints(
  root: string,
  program: ts.Program,
  request: PluginCompilationRequest,
  diagnostics: CompilerDiagnostic[],
): void {
  const platforms = new Set(request.platforms as readonly string[]);
  const configured = [
    ...(platforms.has('paper')
      ? [['paper', request.paperEntrypoint ?? request.entrypoint] as const]
      : []),
    ...(platforms.has('velocity')
      ? [['velocity', request.velocityEntrypoint ?? request.entrypoint] as const]
      : []),
  ];
  const sourceFiles = new Map(
    program.getSourceFiles().map((source) => [resolve(source.fileName), source] as const),
  );
  for (const [platform, entrypoint] of configured) {
    const absolute = resolve(root, entrypoint);
    const source = sourceFiles.get(absolute);
    if (source !== undefined && !source.isDeclarationFile) continue;
    diagnostics.push({
      code: 'TYPESCRIPT',
      message: `Configured ${platform} entrypoint '${entrypoint}' is not a TypeScript source file in the program for '${normalized(root, resolve(root, request.tsconfig ?? 'tsconfig.json'))}'.`,
      suggestion:
        'Check the entrypoint spelling and ensure the file is included by the tsconfig files/include settings.',
    });
  }
}

function builtinName(specifier: string): string | undefined {
  const bare = specifier.startsWith('node:') ? specifier.slice(5) : specifier;
  return nodeBuiltins.has(bare) ? `node:${bare}` : undefined;
}

function checkImports(
  root: string,
  program: ts.Program,
  reachability: Reachability,
  request: PluginCompilationRequest,
  diagnostics: CompilerDiagnostic[],
): void {
  const allowed = new Set(
    (request.permissions?.builtins ?? []).map((value) => builtinName(value) ?? value),
  );
  const reported = new Set<string>();
  for (const platform of ['paper', 'velocity'] as const) {
    const files = reachability[platform];
    const opposite = platform === 'paper' ? 'velocity' : 'paper';
    for (const source of program
      .getSourceFiles()
      .filter((item) => files.has(resolve(item.fileName)))) {
      for (const reference of importReferences(source)) {
        const sourceLocation = location(root, reference.node);
        if (reference.specifier === undefined) {
          if (reference.dynamic) {
            const key = `dynamic:${source.fileName}:${String(reference.node.pos)}`;
            if (reported.has(key)) continue;
            reported.add(key);
            diagnostics.push({
              code: 'UNSUPPORTED_IMPORT',
              message: `Dynamic import path '${reference.node.getText()}' is not statically resolvable.`,
              location: sourceLocation,
              suggestion:
                'Use a string literal import path so the compiler can validate platform and host compatibility.',
            });
          }
          continue;
        }
        const value = reference.specifier;
        if (
          platform === 'paper' &&
          value.startsWith('@shamoo/paper-nms') &&
          request.permissions?.nms !== true
        ) {
          const key = `nms-permission:${source.fileName}:${String(reference.node.pos)}`;
          if (!reported.has(key)) {
            reported.add(key);
            diagnostics.push({
              code: 'PERMISSION_REQUIRED',
              message: `Paper NMS import '${value}' requires the compiler nms permission.`,
              location: sourceLocation,
              suggestion: 'Set permissions.nms to true for this exact-version Paper module.',
            });
          }
        }
        if (
          platform === 'paper' &&
          value.startsWith('@shamoo/paper-packets') &&
          request.permissions?.packets !== true
        ) {
          const key = `packet-permission:${source.fileName}:${String(reference.node.pos)}`;
          if (!reported.has(key)) {
            reported.add(key);
            diagnostics.push({
              code: 'PERMISSION_REQUIRED',
              message: `Paper packet import '${value}' requires the compiler packets permission.`,
              location: sourceLocation,
              suggestion: 'Set permissions.packets to true for this exact-version Paper module.',
            });
          }
        }
        if (platformPackages[opposite].some((prefix) => value.startsWith(prefix))) {
          const key = `platform:${platform}:${source.fileName}:${String(reference.node.pos)}`;
          if (!reported.has(key)) {
            reported.add(key);
            diagnostics.push({
              code: 'PLATFORM_LEAK',
              message: `${platform} entrypoint cannot reach ${opposite} import '${value}'.`,
              location: sourceLocation,
              dependencyPath: [...(files.get(resolve(source.fileName)) ?? []), value],
              suggestion: `Move this import behind the ${opposite}-specific entrypoint.`,
            });
          }
        }
        if (value.endsWith('.node') && request.permissions?.nativeAddons !== true) {
          const key = `native:${source.fileName}:${String(reference.node.pos)}`;
          if (!reported.has(key)) {
            reported.add(key);
            diagnostics.push({
              code: 'PERMISSION_REQUIRED',
              message: `Native addon import '${value}' is not declared in compiler permissions.`,
              location: sourceLocation,
              suggestion:
                'Set permissions.nativeAddons to true only for a trusted compatible host.',
            });
          }
        }
        const builtin = builtinName(value);
        if (builtin !== undefined && unsupportedBuiltins.has(builtin)) {
          const key = `unsupported:${source.fileName}:${String(reference.node.pos)}`;
          if (reported.has(key)) continue;
          reported.add(key);
          diagnostics.push({
            code: 'UNSUPPORTED_IMPORT',
            message: `Node import '${builtin}' cannot run in a Shamoo host.`,
            location: sourceLocation,
          });
        } else if (builtin !== undefined && !allowed.has(builtin)) {
          const key = `permission:${source.fileName}:${String(reference.node.pos)}`;
          if (reported.has(key)) continue;
          reported.add(key);
          diagnostics.push({
            code: 'PERMISSION_REQUIRED',
            message: `Node builtin '${builtin}' is not declared in compiler permissions.`,
            location: sourceLocation,
            suggestion: `Add '${builtin}' to permissions.builtins if the host supports it.`,
          });
        } else if (builtin !== undefined) {
          const capability = capabilityBuiltins.get(builtin);
          if (capability !== undefined && !hasPermission(request.permissions, capability)) {
            const key = `capability:${source.fileName}:${String(reference.node.pos)}`;
            if (reported.has(key)) continue;
            reported.add(key);
            diagnostics.push({
              code: 'PERMISSION_REQUIRED',
              message: `Node builtin '${builtin}' requires the '${capability}' compiler capability.`,
              location: sourceLocation,
              suggestion: `Set permissions.${capability} to true if the host grants that capability.`,
            });
          }
        }
      }
    }
  }
}

function checkCommunication(
  communication: CommunicationMetadata | undefined,
  components: readonly ComponentMetadata[],
  dualPlatform: boolean,
  diagnostics: CompilerDiagnostic[],
): void {
  if (communication === undefined) return;
  const byId = new Map(components.map((component) => [component.id, component]));
  for (const service of communication.services) {
    const component = byId.get(service.componentId);
    if (component === undefined) {
      diagnostics.push({
        code: 'COMMUNICATION_CONTRACT',
        message: `Service '${service.id}' names undiscovered component '${service.componentId}'.`,
        suggestion: 'Use the compiler component id of an exported decorated provider class.',
      });
    } else if (dualPlatform && component.platform !== 'common') {
      diagnostics.push({
        code: 'COMMUNICATION_CONTRACT',
        message: `Dual-platform service '${service.id}' must use a common provider; '${service.componentId}' is ${component.platform}-specific.`,
        suggestion: 'Move the provider into the source graph shared by both platform entrypoints.',
      });
    }
  }
}

function compilePluginSync(request: PluginCompilationRequest): CompilationResult {
  validateCompilationRequest(request);
  const configPath = resolve(request.tsconfig ?? 'tsconfig.json');
  const root = dirname(configPath);
  const configFile = ts.readConfigFile(configPath, (path) => ts.sys.readFile(path));
  if (configFile.error !== undefined)
    return {
      diagnostics: [
        {
          code: 'TYPESCRIPT',
          message: ts.flattenDiagnosticMessageText(configFile.error.messageText, '\n'),
        },
      ],
    };
  const config = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    root,
    { noEmit: true },
    configPath,
  );
  const program = ts.createProgram({
    rootNames: config.fileNames,
    options: config.options,
    ...(config.projectReferences === undefined
      ? {}
      : { projectReferences: config.projectReferences }),
  });
  const diagnostics: CompilerDiagnostic[] = [
    ...config.errors.map((item) => typescriptDiagnostic(root, item)),
    ...ts.getPreEmitDiagnostics(program).map((item) => typescriptDiagnostic(root, item)),
  ];
  validateEntrypoints(root, program, request, diagnostics);
  const reachability = reachableFiles(root, program, request);
  const includedFiles = combinedReachability(reachability);
  const discovered = discover(
    root,
    program,
    includedFiles,
    reachability,
    request.platforms.length > 1,
    diagnostics,
  );
  checkModuleCycles(discovered.modules, diagnostics);
  checkImports(root, program, reachability, request, diagnostics);
  checkCommunication(
    request.communication,
    discovered.components,
    request.platforms.length > 1,
    diagnostics,
  );
  diagnostics.sort((left, right) =>
    `${left.location?.file ?? ''}:${String(left.location?.line ?? 0)}:${left.code}`.localeCompare(
      `${right.location?.file ?? ''}:${String(right.location?.line ?? 0)}:${right.code}`,
    ),
  );
  if (diagnostics.length > 0) return { diagnostics };
  let metadata: CompilerMetadata;
  try {
    metadata = parseCompilerMetadata({
      version: SHAMOO_COMPILER_VERSION,
      components: discovered.components.sort((left, right) => left.id.localeCompare(right.id)),
      modules: discovered.modules.sort((left, right) => left.id.localeCompare(right.id)),
      communication: request.communication ?? { services: [], events: [], consumers: [] },
    });
  } catch (error) {
    return {
      diagnostics: [
        {
          code: 'METADATA_VALIDATION',
          message: `Generated compiler metadata is invalid: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
    };
  }
  return { metadata, diagnostics: [] };
}

export function compilePlugin(request: PluginCompilationRequest): Promise<CompilationResult> {
  return Promise.resolve().then(() => compilePluginSync(request));
}

export async function compilePluginOrThrow(
  request: PluginCompilationRequest,
): Promise<CompilerMetadata> {
  const result = await compilePlugin(request);
  if (result.metadata === undefined) throw new CompilationError(result.diagnostics);
  return result.metadata;
}
