/** Controlled platform-specific plugin bundling. @packageDocumentation */
import { builtinModules } from 'node:module';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { CompilerManifest } from '@shamoo/metadata';
import { build, type BuildResult, type OnResolveArgs, type OutputFile, type Plugin } from 'esbuild';
import * as ts from 'typescript';

export interface BundleRequest {
  readonly manifest: CompilerManifest;
  readonly projectRoot: string;
  readonly outputDirectory: string;
  readonly external?: readonly string[];
}
export interface BundleArtifact {
  readonly platform: 'paper' | 'velocity';
  readonly path: string;
  readonly map: string;
  readonly bytes: number;
}
export class PlatformLeakageError extends Error {
  public readonly code = 'PLATFORM_LEAK';
  public constructor(platform: string, importPath: string, importer: string) {
    super(
      `${platform} bundle cannot import '${importPath}' from ${importer}. Move the import behind a platform-specific entrypoint.`,
    );
    this.name = 'PlatformLeakageError';
  }
}
export class CapabilityError extends Error {
  public readonly code = 'CAPABILITY_REQUIRED';
  public constructor(importPath: string, importer: string, capability: string) {
    super(
      `Bundle import '${importPath}' from ${importer} is not allowed by manifest capability '${capability}'.`,
    );
    this.name = 'CapabilityError';
  }
}

const prefixes = {
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
} as const;
const nodeBuiltins = new Set(
  builtinModules.map((name) => (name.startsWith('node:') ? name.slice(5) : name)),
);
const builtinCapabilities = new Map<string, keyof NonNullable<CompilerManifest['permissions']>>([
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
const unsupportedBuiltins = new Set(['node:module', 'node:repl', 'node:vm']);
const modulePath =
  typeof __dirname === 'string' ? resolve(__dirname, 'index.cjs') : fileURLToPath(import.meta.url);
const adapterPath = resolve(
  dirname(modulePath),
  `runtime-adapter.${extname(modulePath) === '.ts' ? 'ts' : 'js'}`,
);

function runtimeAdapter(
  platform: 'paper' | 'velocity',
  source: string,
  manifest: CompilerManifest,
): Plugin {
  return {
    name: 'shamoo-runtime-adapter',
    setup(buildApi) {
      buildApi.onResolve({ filter: /^shamoo:runtime-entry$/ }, () => ({
        path: 'runtime-entry',
        namespace: 'shamoo-runtime',
      }));
      buildApi.onLoad({ filter: /.*/, namespace: 'shamoo-runtime' }, () => ({
        loader: 'ts',
        resolveDir: requestRoot(source),
        contents: `
          import * as plugin from ${JSON.stringify(source)};
          import { installRuntimeAdapter } from ${JSON.stringify(adapterPath)};
          const lifecycle = installRuntimeAdapter(${JSON.stringify(manifest)}, ${JSON.stringify(platform)}, plugin);
          export const load = lifecycle.load;
          export const enable = lifecycle.enable;
          export const ready = lifecycle.ready;
          export const drain = lifecycle.drain;
          export const disable = lifecycle.disable;
          export const unload = lifecycle.unload;
        `,
      }));
    },
  };
}

function requestRoot(source: string): string {
  return dirname(source);
}

function builtinName(specifier: string): string | undefined {
  const bare = specifier.startsWith('node:') ? specifier.slice(5) : specifier;
  return nodeBuiltins.has(bare) ? `node:${bare}` : undefined;
}

function enforceCapability(
  path: string,
  importer: string,
  permissions: CompilerManifest['permissions'],
): void {
  if (path.endsWith('.node')) {
    if (permissions?.nativeAddons !== true)
      throw new CapabilityError(path, importer, 'nativeAddons');
    return;
  }
  const builtin = builtinName(path);
  if (builtin === undefined) return;
  if (unsupportedBuiltins.has(builtin)) throw new CapabilityError(path, importer, 'unsupported');
  if (!permissions?.builtins?.includes(builtin))
    throw new CapabilityError(path, importer, `builtins:${builtin}`);
  const capability = builtinCapabilities.get(builtin);
  if (
    capability !== undefined &&
    (capability === 'filesystem'
      ? permissions.filesystem === undefined
      : permissions[capability] !== true)
  )
    throw new CapabilityError(path, importer, capability);
}

function enforcePlatform(
  platform: 'paper' | 'velocity',
  path: string,
  importer: string,
  permissions: CompilerManifest['permissions'],
): void {
  enforceCapability(path, importer, permissions);
  const opposite = platform === 'paper' ? 'velocity' : 'paper';
  if (prefixes[opposite].some((prefix) => path.startsWith(prefix)))
    throw new PlatformLeakageError(platform, path, importer);
  if (
    platform === 'paper' &&
    ((path.startsWith('@shamoo/paper-nms') && permissions?.nms !== true) ||
      (path.startsWith('@shamoo/paper-packets') && permissions?.packets !== true))
  )
    throw new CapabilityError(
      path,
      importer,
      path.startsWith('@shamoo/paper-nms') ? 'nms' : 'packets',
    );
}

function sourceGuard(
  platform: 'paper' | 'velocity',
  permissions: CompilerManifest['permissions'],
): Plugin {
  return {
    name: 'shamoo-dynamic-import-boundary',
    setup(buildApi) {
      buildApi.onLoad({ filter: /\.[cm]?[jt]sx?$/, namespace: 'file' }, async (args) => {
        const source = await readFile(args.path, 'utf8');
        const constants = new Map<string, string>();
        const requireAliases = new Set(['require']);
        const file = ts.createSourceFile(
          args.path,
          source,
          ts.ScriptTarget.Latest,
          true,
          ['.tsx', '.jsx'].includes(extname(args.path)) ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
        );
        for (const statement of file.statements) {
          if (!ts.isVariableStatement(statement)) continue;
          for (const declaration of statement.declarationList.declarations) {
            if (!ts.isIdentifier(declaration.name) || declaration.initializer === undefined)
              continue;
            if (ts.isStringLiteralLike(declaration.initializer))
              constants.set(declaration.name.text, declaration.initializer.text);
            else if (
              ts.isIdentifier(declaration.initializer) &&
              requireAliases.has(declaration.initializer.text)
            )
              requireAliases.add(declaration.name.text);
          }
        }
        const visit = (node: ts.Node): void => {
          if (
            ts.isCallExpression(node) &&
            (node.expression.kind === ts.SyntaxKind.ImportKeyword ||
              (ts.isIdentifier(node.expression) && requireAliases.has(node.expression.text)))
          ) {
            const argument = node.arguments[0];
            const specifier =
              argument === undefined
                ? undefined
                : ts.isStringLiteralLike(argument)
                  ? argument.text
                  : ts.isIdentifier(argument)
                    ? constants.get(argument.text)
                    : undefined;
            if (specifier === undefined)
              throw new CapabilityError(node.getText(file), args.path, 'staticImportPath');
            enforcePlatform(platform, specifier, args.path, permissions);
          }
          ts.forEachChild(node, visit);
        };
        visit(file);
        return undefined;
      });
    },
  };
}

function leakageGuard(
  platform: 'paper' | 'velocity',
  permissions: CompilerManifest['permissions'],
): Plugin {
  return {
    name: 'shamoo-platform-boundary',
    setup(buildApi) {
      buildApi.onResolve({ filter: /.*/ }, (args: OnResolveArgs) => {
        enforcePlatform(platform, args.path, args.importer || '<entrypoint>', permissions);
        return undefined;
      });
    },
  };
}

function enforceMetafile(
  platform: 'paper' | 'velocity',
  permissions: CompilerManifest['permissions'],
  result: BuildResult,
): void {
  for (const [importer, input] of Object.entries(result.metafile?.inputs ?? {})) {
    for (const imported of input.imports)
      enforcePlatform(platform, imported.path, importer, permissions);
  }
}

async function emit(files: readonly OutputFile[]): Promise<void> {
  for (const file of [...files].sort((left, right) => left.path.localeCompare(right.path))) {
    await mkdir(dirname(file.path), { recursive: true });
    await writeFile(file.path, file.contents);
  }
}

/** Emits one real ESM bundle per enabled platform and never reuses output between targets. */
export async function bundlePlugin(request: BundleRequest): Promise<readonly BundleArtifact[]> {
  const artifacts: BundleArtifact[] = [];
  for (const platform of ['paper', 'velocity'] as const) {
    const entrypoint = request.manifest.entrypoints[platform];
    if (entrypoint === undefined) continue;
    const output = resolve(request.outputDirectory, entrypoint.output);
    const result = await build({
      absWorkingDir: resolve(request.projectRoot),
      entryPoints: ['shamoo:runtime-entry'],
      outfile: output,
      bundle: true,
      charset: 'utf8',
      external: [...(request.external ?? [])],
      format: 'esm',
      legalComments: 'none',
      metafile: true,
      platform: 'node',
      plugins: [
        runtimeAdapter(platform, resolve(request.projectRoot, entrypoint.source), request.manifest),
        sourceGuard(platform, request.manifest.permissions),
        leakageGuard(platform, request.manifest.permissions),
      ],
      sourcemap: 'external',
      sourcesContent: true,
      target: 'node22',
      treeShaking: true,
      write: false,
    });
    enforceMetafile(platform, request.manifest.permissions, result);
    const outputFiles = result.outputFiles;
    await emit(outputFiles);
    const code = outputFiles.find((file) => file.path === output);
    if (code === undefined) throw new Error(`esbuild did not emit ${output}.`);
    artifacts.push({
      platform,
      path: output,
      map: `${output}.map`,
      bytes: code.contents.byteLength,
    });
  }
  return artifacts;
}
