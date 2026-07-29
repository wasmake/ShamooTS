/** Safe, deterministic Shamoo plugin project scaffolding. @packageDocumentation */
import { lstat, mkdir, writeFile } from 'node:fs/promises';
import { basename, dirname, isAbsolute, join, resolve } from 'node:path';

import { packageName, PlatformKind, type PackageName } from '@shamoo/core';

export interface PluginProjectDeclaration {
  readonly name: PackageName;
  readonly platform: PlatformKind;
}
export function definePluginProject(
  name: string,
  platform: PlatformKind,
): PluginProjectDeclaration {
  return Object.freeze({ name: packageName(name), platform });
}

export interface ScaffoldPluginOptions {
  readonly directory: string;
  readonly name: string;
  readonly platforms?: readonly PlatformKind[];
  readonly packageManager?: 'npm' | 'pnpm' | 'yarn';
}
export interface ScaffoldPluginResult {
  readonly directory: string;
  readonly files: readonly string[];
}

function projectDirectory(path: string): string {
  if (path.trim().length === 0) throw new TypeError('Plugin directory must not be empty.');
  const target = resolve(path);
  if (target === resolve(dirname(target)))
    throw new TypeError('Refusing to scaffold at a filesystem root.');
  return target;
}

function selectedPlatforms(
  platforms: readonly PlatformKind[] | undefined,
): readonly PlatformKind[] {
  const selected = platforms ?? [PlatformKind.PAPER];
  if (selected.length === 0) throw new TypeError('At least one plugin platform is required.');
  if (selected.some((value) => !Object.values(PlatformKind).includes(value)))
    throw new TypeError('Plugin platforms must be paper or velocity.');
  if (new Set(selected).size !== selected.length)
    throw new TypeError('Plugin platforms must be unique.');
  return selected;
}

function packageJson(
  name: PackageName,
  platforms: readonly PlatformKind[],
  packageManager: NonNullable<ScaffoldPluginOptions['packageManager']>,
): string {
  const dependencies: Record<string, string> = {
    '@shamoo/decorators': '^0.1.0-rc.2',
    ...(platforms.includes(PlatformKind.PAPER) ? { '@shamoo/paper': '^0.1.0-rc.2' } : {}),
    ...(platforms.includes(PlatformKind.VELOCITY) ? { '@shamoo/velocity': '^0.1.0-rc.2' } : {}),
  };
  return `${JSON.stringify(
    {
      name,
      version: '0.1.0',
      private: true,
      type: 'module',
      scripts: {
        build: 'shamoo build',
        dev: 'shamoo dev',
        doctor: 'shamoo doctor',
      },
      dependencies,
      devDependencies: {
        '@shamoo/cli': '^0.1.0-rc.2',
        typescript: '^5.8.3',
      },
      packageManager: `${packageManager}@${packageManager === 'pnpm' ? '10.0.0' : packageManager === 'npm' ? '10.0.0' : '1.22.22'}`,
    },
    undefined,
    2,
  )}\n`;
}

/** Creates a new project and never merges into or overwrites an existing path. */
export async function scaffoldPlugin(
  options: ScaffoldPluginOptions,
): Promise<ScaffoldPluginResult> {
  const directory = projectDirectory(options.directory);
  const name = packageName(options.name);
  const platforms = selectedPlatforms(options.platforms);
  const existing = await lstat(directory).catch((error: unknown) => {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return undefined;
    throw error;
  });
  if (existing !== undefined) throw new Error(`Scaffold target already exists: ${directory}`);

  const files: Record<string, string> = {
    '.gitignore': 'dist/\nnode_modules/\n',
    'RUNTIME.md': `# Runtime artifact\n\n\`pnpm build\` writes exactly \`dist/index.js\`, \`dist/index.js.map\`, and \`dist/shamoo-plugin.json\`. Install that three-file directory in the ShamooRuntime watched plugin root using your server's artifact-management workflow.\n`,
    'package.json': packageJson(name, platforms, options.packageManager ?? 'pnpm'),
    'shamoo.config.json': `${JSON.stringify(
      {
        name,
        platforms,
        entrypoint: 'src/plugin.ts',
        ...(platforms.includes(PlatformKind.PAPER) ? { paperEntrypoint: 'src/paper.ts' } : {}),
        ...(platforms.includes(PlatformKind.VELOCITY)
          ? { velocityEntrypoint: 'src/velocity.ts' }
          : {}),
        tsconfig: 'tsconfig.json',
        outDir: 'dist',
        permissions: {
          builtins: [],
          filesystem: { read: [], write: [] },
          network: false,
          workers: false,
          childProcess: false,
          nativeAddons: false,
        },
        communication: { services: [], events: [], consumers: [] },
      },
      undefined,
      2,
    )}\n`,
    'src/plugin.ts':
      "import { Plugin } from '@shamoo/decorators';\n\n@Plugin()\nexport class ShamooPlugin {}\n",
    'tsconfig.json': `${JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2022',
          module: 'NodeNext',
          moduleResolution: 'NodeNext',
          strict: true,
          noEmit: true,
          experimentalDecorators: true,
          skipLibCheck: true,
        },
        include: ['src/**/*.ts'],
      },
      undefined,
      2,
    )}\n`,
  };
  if (platforms.includes(PlatformKind.PAPER)) files['src/paper.ts'] = "import './plugin.js';\n";
  if (platforms.includes(PlatformKind.VELOCITY))
    files['src/velocity.ts'] = "import './plugin.js';\n";

  await mkdir(directory, { recursive: false });
  for (const [relativePath, contents] of Object.entries(files).sort(([left], [right]) =>
    left.localeCompare(right),
  )) {
    if (isAbsolute(relativePath) || relativePath.split(/[\\/]/u).includes('..'))
      throw new Error(`Unsafe scaffold path: ${relativePath}`);
    const output = join(directory, relativePath);
    await mkdir(dirname(output), { recursive: true });
    await writeFile(output, contents, { encoding: 'utf8', flag: 'wx' });
  }
  return { directory, files: Object.keys(files).sort() };
}

export function defaultPluginName(directory: string): string {
  return basename(resolve(directory))
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/gu, '-');
}
