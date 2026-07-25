/** Universal, source-mapped Shamoo plugin bundling. @packageDocumentation */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { CompilerMetadata, MetadataPlatform } from '@shamoo/metadata';
import { build, type OutputFile, type Plugin } from 'esbuild';

export interface BundleRequest {
  readonly metadata: CompilerMetadata;
  readonly entrypoints: Readonly<Partial<Record<'paper' | 'velocity', string>>>;
  readonly projectRoot: string;
  readonly outputDirectory: string;
  readonly external?: readonly string[];
}
export interface BundleArtifact {
  readonly path: string;
  readonly map: string;
  readonly bytes: number;
}

const modulePath =
  typeof __dirname === 'string' ? resolve(__dirname, 'index.cjs') : fileURLToPath(import.meta.url);
const adapterPath = resolve(
  dirname(modulePath),
  `runtime-adapter.${extname(modulePath) === '.ts' ? 'ts' : 'js'}`,
);

function platformRegistry(
  request: BundleRequest,
  platform: Exclude<MetadataPlatform, 'common'>,
): string {
  const source = request.entrypoints[platform];
  if (source === undefined) throw new TypeError(`No ${platform} source entrypoint is configured.`);
  const components = request.metadata.components.filter(
    (component) => component.platform === 'common' || component.platform === platform,
  );
  const imports = components.map(
    (component, index) =>
      `import { ${component.name} as component${String(index)} } from ${JSON.stringify(resolve(request.projectRoot, component.file))};`,
  );
  const registry = components.map(
    (component, index) => `${JSON.stringify(component.id)}: component${String(index)}`,
  );
  return [
    `import ${JSON.stringify(resolve(request.projectRoot, source))};`,
    ...imports,
    `export const components = Object.freeze({${registry.join(',')}});`,
  ].join('\n');
}

function universalRuntime(request: BundleRequest): Plugin {
  return {
    name: 'shamoo-universal-runtime',
    setup(buildApi) {
      buildApi.onResolve({ filter: /^shamoo:runtime-entry$/ }, () => ({
        path: 'runtime-entry',
        namespace: 'shamoo-runtime',
      }));
      buildApi.onResolve({ filter: /^shamoo:platform-(?:paper|velocity)$/ }, (args) => ({
        path: args.path.slice('shamoo:platform-'.length),
        namespace: 'shamoo-platform',
      }));
      buildApi.onLoad({ filter: /^runtime-entry$/, namespace: 'shamoo-runtime' }, () => {
        const loaders = (['paper', 'velocity'] as const).flatMap((platform) =>
          request.entrypoints[platform] === undefined
            ? []
            : [`${platform}: () => import(${JSON.stringify(`shamoo:platform-${platform}`)})`],
        );
        return {
          loader: 'ts',
          resolveDir: request.projectRoot,
          contents: `
            import { createRuntimeLifecycle } from ${JSON.stringify(adapterPath)};
            const lifecycle = createRuntimeLifecycle({${loaders.join(',')}});
            export const load = lifecycle.load;
            export const enable = lifecycle.enable;
            export const ready = lifecycle.ready;
            export const drain = lifecycle.drain;
            export const disable = lifecycle.disable;
            export const unload = lifecycle.unload;
          `,
        };
      });
      buildApi.onLoad({ filter: /^(?:paper|velocity)$/, namespace: 'shamoo-platform' }, (args) => ({
        loader: 'ts',
        resolveDir: request.projectRoot,
        contents: platformRegistry(request, args.path as 'paper' | 'velocity'),
      }));
    },
  };
}

async function emit(files: readonly OutputFile[]): Promise<void> {
  for (const file of [...files].sort((left, right) => left.path.localeCompare(right.path))) {
    await mkdir(dirname(file.path), { recursive: true });
    await writeFile(file.path, file.contents);
  }
}

/** Emits one self-contained ESM module whose platform source graph is selected lazily. */
export async function bundlePlugin(request: BundleRequest): Promise<BundleArtifact> {
  const output = resolve(request.outputDirectory, 'index.js');
  const result = await build({
    absWorkingDir: resolve(request.projectRoot),
    entryPoints: ['shamoo:runtime-entry'],
    outfile: output,
    bundle: true,
    charset: 'utf8',
    external: [...(request.external ?? [])],
    format: 'esm',
    ignoreAnnotations: true,
    legalComments: 'none',
    platform: 'node',
    plugins: [universalRuntime(request)],
    sourcemap: 'external',
    sourcesContent: true,
    splitting: false,
    target: 'node22',
    treeShaking: true,
    write: false,
  });
  const outputFiles = result.outputFiles;
  await emit(outputFiles);
  const code = outputFiles.find((file) => file.path === output);
  if (code === undefined) throw new Error(`esbuild did not emit ${output}.`);
  return { path: output, map: `${output}.map`, bytes: code.contents.byteLength };
}
