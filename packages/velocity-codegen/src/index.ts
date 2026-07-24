/** Velocity binding generation configured over the shared JVM model. @packageDocumentation */
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

export interface VelocityGenerationRequest {
  readonly model?: string | JvmApiModel;
  readonly outputDirectory: string;
}
export interface VelocityGenerationDiff {
  readonly declarations: GenerationDiff;
  readonly events: GenerationDiff;
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
export const VELOCITY_CODEGEN_PACKAGE_DIRECTORY =
  typeof __dirname === 'string'
    ? resolve(__dirname, '..')
    : fileURLToPath(new URL('../', import.meta.url));
export const PINNED_VELOCITY_MODEL = join(
  VELOCITY_CODEGEN_PACKAGE_DIRECTORY,
  'models/velocity.model.json',
);
const PINNED_VELOCITY_CHECKSUM = '3cb1a94fa7a0a73ad73466132b1ba2d4217bf9be537e5441932a8dc648a56490';
async function generate(request: VelocityGenerationRequest): Promise<GeneratedPlatform> {
  if (request.model === undefined)
    await verifyModelChecksum(PINNED_VELOCITY_MODEL, PINNED_VELOCITY_CHECKSUM);
  const input = request.model ?? PINNED_VELOCITY_MODEL;
  const model = parseJvmApiModel(
    typeof input === 'string' ? await readFile(resolve(input), 'utf8') : input,
  );
  if (model.platform !== 'velocity')
    throw new TypeError(`Expected velocity model, received ${model.platform}.`);
  const generated = generatePlatform(model);
  for (const [name, coverage] of Object.entries({
    declarations: generated.coverage.declarations,
    members: generated.coverage.members,
    events: generated.coverage.events,
  }))
    if (coverage.percent !== 100 || coverage.emitted !== coverage.expected)
      throw new TypeError(`Velocity ${name} coverage must be independently 100%.`);
  return generated;
}
export async function generateVelocityBindings(
  request: VelocityGenerationRequest,
): Promise<GeneratedPlatform> {
  return generate(request);
}
export async function diffVelocityBindings(
  request: VelocityGenerationRequest,
): Promise<VelocityGenerationDiff> {
  const output = await generate(request);
  const tree = await diffGeneratedTree(request.outputDirectory, {
    'bindings.generated.ts': output.declarations,
    'events.generated.ts': output.events,
    'coverage.generated.json': canonicalCoverageJson(output.coverage),
    ...output.declarationShards,
    ...output.eventShards,
  });
  const shards: Readonly<Record<string, GenerationDiff>> = Object.fromEntries(
    Object.entries(tree).filter(
      ([path]) =>
        !['bindings.generated.ts', 'events.generated.ts', 'coverage.generated.json'].includes(path),
    ),
  );
  return {
    declarations: requiredDifference(tree, 'bindings.generated.ts'),
    events: requiredDifference(tree, 'events.generated.ts'),
    coverage: requiredDifference(tree, 'coverage.generated.json'),
    shards,
  };
}
export async function syncVelocityBindings(
  request: VelocityGenerationRequest,
): Promise<readonly string[]> {
  const output = await generate(request);
  return syncGeneratedTree(request.outputDirectory, {
    'bindings.generated.ts': output.declarations,
    'events.generated.ts': output.events,
    'coverage.generated.json': canonicalCoverageJson(output.coverage),
    ...output.declarationShards,
    ...output.eventShards,
  });
}
