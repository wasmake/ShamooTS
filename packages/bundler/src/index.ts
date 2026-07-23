/** Controlled platform-specific plugin bundling. @packageDocumentation */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

import type { CompilerManifest } from '@shamoo/metadata';
import { build, type BuildResult, type OnResolveArgs, type OutputFile, type Plugin } from 'esbuild';

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

function leakageGuard(
  platform: 'paper' | 'velocity',
  permissions: CompilerManifest['permissions'],
): Plugin {
  const opposite = platform === 'paper' ? 'velocity' : 'paper';
  return {
    name: 'shamoo-platform-boundary',
    setup(buildApi) {
      buildApi.onResolve({ filter: /.*/ }, (args: OnResolveArgs) => {
        if (prefixes[opposite].some((prefix) => args.path.startsWith(prefix))) {
          throw new PlatformLeakageError(platform, args.path, args.importer || '<entrypoint>');
        }
        if (
          platform === 'paper' &&
          ((args.path.startsWith('@shamoo/paper-nms') && permissions?.nms !== true) ||
            (args.path.startsWith('@shamoo/paper-packets') && permissions?.packets !== true))
        )
          throw new Error(
            `paper bundle import '${args.path}' from ${args.importer || '<entrypoint>'} is not allowed by manifest permissions.`,
          );
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
    for (const imported of input.imports) {
      if (
        platform === 'paper' &&
        ((imported.path.startsWith('@shamoo/paper-nms') && permissions?.nms !== true) ||
          (imported.path.startsWith('@shamoo/paper-packets') && permissions?.packets !== true))
      )
        throw new Error(
          `paper bundle import '${imported.path}' from ${importer} is not allowed by manifest permissions.`,
        );
      const opposite = platform === 'paper' ? 'velocity' : 'paper';
      if (prefixes[opposite].some((prefix) => imported.path.startsWith(prefix)))
        throw new PlatformLeakageError(platform, imported.path, importer);
    }
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
      entryPoints: [resolve(request.projectRoot, entrypoint.source)],
      outfile: output,
      bundle: true,
      charset: 'utf8',
      external: [...(request.external ?? [])],
      format: 'esm',
      legalComments: 'none',
      metafile: true,
      platform: 'node',
      plugins: [leakageGuard(platform, request.manifest.permissions)],
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
