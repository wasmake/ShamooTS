/** Paper binding generation configured over the shared JVM model. @packageDocumentation */
import { readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  canonicalCoverageJson,
  diffGeneratedTree,
  generatePlatform,
  parseJvmApiModel,
  syncGeneratedTree,
  verifyModelChecksum,
  type GeneratedPlatform,
  type GenerationDiff,
  type JvmApiModel,
} from '@shamoo/platform-codegen';

export interface PaperGenerationRequest {
  readonly model?: string | JvmApiModel;
  readonly outputDirectory: string;
  readonly surface: 'paper' | 'paper-nms' | 'paper-packets';
}
export interface PaperGenerationFiles {
  readonly declarations: string;
  readonly metadata: string;
  readonly coverage: string;
}
export interface PaperGenerationDiff {
  readonly declarations: GenerationDiff;
  readonly metadata: GenerationDiff;
  readonly coverage: GenerationDiff;
  readonly shards: Readonly<Record<string, GenerationDiff>>;
}
function requiredDifference(
  tree: Readonly<Record<string, GenerationDiff>>,
  path: string,
): GenerationDiff {
  const difference = tree[path];
  if (difference === undefined) throw new Error(`Missing generated tree entry '${path}'.`);
  return difference;
}
export const PAPER_CODEGEN_PACKAGE_DIRECTORY =
  typeof __dirname === 'string'
    ? resolve(__dirname, '..')
    : fileURLToPath(new URL('../', import.meta.url));
const modelDirectory = join(PAPER_CODEGEN_PACKAGE_DIRECTORY, 'models');
export const PINNED_PAPER_MODELS = {
  paper: join(modelDirectory, 'paper.model.json'),
  'paper-nms': join(modelDirectory, 'paper-nms.model.json'),
  'paper-packets': join(modelDirectory, 'paper-packets.model.json'),
} as const;
const pinnedChecksums = {
  paper: 'c060c1ccff10fdfeecef7ca1985a4a2d41a261a7bc755df060dd0a1f9e9f7661',
  'paper-nms': '4c637abd6fc3ecdb23ba975580894e8265568bddb7056f542a251e3e3c49c6d4',
  'paper-packets': '695238525bdaccdff3aaee4136787fcbe53387a96a5b3b921f0f602b75cac0e6',
} as const;
async function model(value: string | JvmApiModel): Promise<JvmApiModel> {
  return typeof value === 'string'
    ? parseJvmApiModel(await readFile(resolve(value), 'utf8'))
    : parseJvmApiModel(value);
}
export async function generatePaperBindings(
  request: PaperGenerationRequest,
): Promise<GeneratedPlatform> {
  if (request.model === undefined)
    await verifyModelChecksum(
      PINNED_PAPER_MODELS[request.surface],
      pinnedChecksums[request.surface],
    );
  const value = await model(request.model ?? PINNED_PAPER_MODELS[request.surface]);
  if (value.platform !== request.surface)
    throw new TypeError(`Expected ${request.surface} model, received ${value.platform}.`);
  const generated = generatePlatform(value);
  for (const [name, coverage] of Object.entries({
    declarations: generated.coverage.declarations,
    members: generated.coverage.members,
    events: generated.coverage.events,
  }))
    if (coverage.percent !== 100 || coverage.emitted !== coverage.expected)
      throw new TypeError(`Paper ${name} coverage must be independently 100%.`);
  return generated;
}
export async function diffPaperBindings(
  request: PaperGenerationRequest,
): Promise<PaperGenerationDiff> {
  const generated = await generatePaperBindings(request);
  const metadata =
    request.surface === 'paper'
      ? generated.events
      : request.surface === 'paper-packets'
        ? generated.packets
        : `// Generated metadata is represented by bindings.generated.ts.\n`;
  const expected = {
    'bindings.generated.ts': generated.declarations,
    [request.surface === 'paper'
      ? 'events.generated.ts'
      : request.surface === 'paper-packets'
        ? 'packets.generated.ts'
        : 'metadata.generated.ts']: metadata,
    'coverage.generated.json': canonicalCoverageJson(generated.coverage),
    ...generated.declarationShards,
    ...generated.eventShards,
  };
  const tree = await diffGeneratedTree(request.outputDirectory, expected);
  const metadataName =
    request.surface === 'paper'
      ? 'events.generated.ts'
      : request.surface === 'paper-packets'
        ? 'packets.generated.ts'
        : 'metadata.generated.ts';
  const shards: Readonly<Record<string, GenerationDiff>> = Object.fromEntries(
    Object.entries(tree).filter(
      ([path]) =>
        !['bindings.generated.ts', metadataName, 'coverage.generated.json'].includes(path),
    ),
  );
  return {
    declarations: requiredDifference(tree, 'bindings.generated.ts'),
    metadata: requiredDifference(tree, metadataName),
    coverage: requiredDifference(tree, 'coverage.generated.json'),
    shards,
  };
}
export async function syncPaperBindings(
  request: PaperGenerationRequest,
): Promise<readonly string[]> {
  const generated = await generatePaperBindings(request);
  const metadata =
    request.surface === 'paper'
      ? generated.events
      : request.surface === 'paper-packets'
        ? generated.packets
        : `// Generated metadata is represented by bindings.generated.ts.\n`;
  return syncGeneratedTree(request.outputDirectory, {
    'bindings.generated.ts': generated.declarations,
    [request.surface === 'paper'
      ? 'events.generated.ts'
      : request.surface === 'paper-packets'
        ? 'packets.generated.ts'
        : 'metadata.generated.ts']: metadata,
    'coverage.generated.json': canonicalCoverageJson(generated.coverage),
    ...generated.declarationShards,
    ...generated.eventShards,
  });
}
