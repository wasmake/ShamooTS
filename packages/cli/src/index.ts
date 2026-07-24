/** Production command orchestration and developer tooling for Shamoo plugins. @packageDocumentation */
import {
  access,
  copyFile,
  mkdir,
  readFile,
  readdir,
  realpath,
  stat,
  writeFile,
} from 'node:fs/promises';
import { constants, watch as watchFiles, type FSWatcher } from 'node:fs';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';

import { bundlePlugin, type BundleArtifact } from '@shamoo/bundler';
import { compilePlugin, type CompilerDiagnostic } from '@shamoo/compiler';
import { packageName, PlatformKind } from '@shamoo/core';
import { defaultPluginName, scaffoldPlugin } from '@shamoo/create-plugin';
import {
  canonicalMetadataJson,
  type CommunicationMetadata,
  type CompilerManifest,
} from '@shamoo/metadata';
import { diffPaperBindings, syncPaperBindings } from '@shamoo/paper-codegen';
import { diffVelocityBindings, syncVelocityBindings } from '@shamoo/velocity-codegen';
import {
  MANIFEST_VERSION,
  parseCommonDescriptor,
  type CommonDescriptor,
} from '@shamoo/runtime-protocol';

export const CLI_VERSION = '0.1.0-rc.1' as const;
export type CliCommand =
  | 'build'
  | 'create'
  | 'deploy'
  | 'dev'
  | 'doctor'
  | 'help'
  | 'migrate'
  | 'paper'
  | 'velocity'
  | 'version';
export type CodegenAction = 'generate' | 'sync' | 'diff';
export interface PlatformCodegenInvocation {
  readonly platform: 'paper' | 'velocity';
  readonly action: CodegenAction;
  readonly surface?: 'paper' | 'paper-nms' | 'paper-packets';
  readonly model?: string;
  readonly outputDirectory?: string;
}

export interface ShamooProjectConfig {
  readonly name: string;
  readonly platforms: readonly ('paper' | 'velocity')[];
  readonly entrypoint: string;
  readonly paperEntrypoint?: string;
  readonly velocityEntrypoint?: string;
  readonly tsconfig?: string;
  readonly outDir?: string;
  readonly displayName?: string;
  readonly version?: string;
  readonly permissions?: {
    readonly builtins: readonly string[];
    readonly filesystem: { readonly read: readonly string[]; readonly write: readonly string[] };
    readonly network: boolean;
    readonly workers: boolean;
    readonly childProcess: boolean;
    readonly nativeAddons: boolean;
    readonly nms?: boolean;
    readonly packets?: boolean;
  };
  readonly communication?: CommunicationMetadata;
  readonly compatibility?: {
    readonly api?: string;
    readonly runtime?: string;
    readonly minecraft?: string;
    readonly paperApi?: string;
    readonly velocityApi?: string;
  };
  readonly deploy?: {
    readonly paper?: string;
    readonly velocity?: string;
  };
}
export interface ProjectBuildResult {
  readonly root: string;
  readonly config: ShamooProjectConfig;
  readonly artifacts: readonly BundleArtifact[];
  readonly metadata: string;
  readonly manifest: NonNullable<Awaited<ReturnType<typeof compilePlugin>>['manifest']>;
}
export interface RuntimeDiagnostic {
  readonly status: 'ok' | 'warning' | 'error';
  readonly check: string;
  readonly message: string;
}
export interface WinterMigrationFinding {
  readonly file: string;
  readonly line: number;
  readonly winter: string;
  readonly shamoo: string;
  readonly note: string;
}
export interface WinterMigrationReport {
  readonly root: string;
  readonly files: number;
  readonly findings: readonly WinterMigrationFinding[];
}
export interface CliIo {
  readonly stdout: (value: string) => void;
  readonly stderr: (value: string) => void;
}
export interface RunCliOptions {
  readonly cwd?: string;
  readonly io?: CliIo;
  readonly watchSignal?: AbortSignal;
}

export function parseCliCommand(argument: string | undefined): CliCommand {
  if (argument === undefined || argument === '--help' || argument === '-h' || argument === 'help')
    return 'help';
  if (argument === '--version' || argument === '-v' || argument === 'version') return 'version';
  if (
    argument === 'build' ||
    argument === 'create' ||
    argument === 'deploy' ||
    argument === 'dev' ||
    argument === 'doctor' ||
    argument === 'migrate' ||
    argument === 'paper' ||
    argument === 'velocity'
  )
    return argument;
  throw new TypeError(`Unknown Shamoo command: ${argument}`);
}

export function parsePlatformCodegenInvocation(
  arguments_: readonly string[],
): PlatformCodegenInvocation {
  const platform = parseCliCommand(arguments_[0]);
  if (platform !== 'paper' && platform !== 'velocity')
    throw new TypeError('Platform code generation requires paper or velocity.');
  const action = arguments_[1] ?? 'generate';
  if (action !== 'generate' && action !== 'sync' && action !== 'diff')
    throw new TypeError(`Unknown code generation action: ${action}`);
  if (platform === 'velocity')
    return {
      platform,
      action,
      ...(arguments_[2] === undefined || arguments_[2] === '-' ? {} : { model: arguments_[2] }),
      ...(arguments_[3] === undefined ? {} : { outputDirectory: arguments_[3] }),
    };
  const surface = arguments_[2] ?? 'paper';
  if (surface !== 'paper' && surface !== 'paper-nms' && surface !== 'paper-packets')
    throw new TypeError(`Unknown Paper code generation surface: ${surface}`);
  return {
    platform,
    action,
    surface,
    ...(arguments_[3] === undefined || arguments_[3] === '-' ? {} : { model: arguments_[3] }),
    ...(arguments_[4] === undefined ? {} : { outputDirectory: arguments_[4] }),
  };
}

function option(arguments_: readonly string[], name: string): string | undefined {
  const index = arguments_.indexOf(name);
  if (index < 0) return undefined;
  const value = arguments_[index + 1];
  if (value === undefined || value.startsWith('--'))
    throw new TypeError(`${name} requires a value.`);
  return value;
}

function within(root: string, value: string, label: string): string {
  if (value.trim().length === 0 || isAbsolute(value))
    throw new TypeError(`${label} must be a non-empty path relative to the project root.`);
  const target = resolve(root, value);
  const path = relative(root, target);
  if (path === '..' || path.startsWith(`..${sep}`) || isAbsolute(path))
    throw new TypeError(`${label} escapes the project root: ${value}`);
  return target;
}

async function assertNoSymlinkEscape(root: string, target: string, label: string): Promise<void> {
  const realRoot = await realpath(root);
  let existing = target;
  for (;;) {
    try {
      existing = await realpath(existing);
      break;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
      const parent = dirname(existing);
      if (parent === existing) throw error;
      existing = parent;
    }
  }
  const path = relative(realRoot, existing);
  if (path === '..' || path.startsWith(`..${sep}`) || isAbsolute(path))
    throw new TypeError(`${label} resolves outside the project root.`);
}

function stringProperty(value: Record<string, unknown>, key: string, required: true): string;
function stringProperty(
  value: Record<string, unknown>,
  key: string,
  required?: false,
): string | undefined;
function stringProperty(
  value: Record<string, unknown>,
  key: string,
  required = false,
): string | undefined {
  const item = value[key];
  if (item === undefined && !required) return undefined;
  if (typeof item !== 'string' || item.trim().length === 0)
    throw new TypeError(`shamoo.config.json '${key}' must be a non-empty string.`);
  return item;
}

function projectPermissions(value: unknown): ShamooProjectConfig['permissions'] {
  if (value === undefined) return undefined;
  if (value === null || typeof value !== 'object' || Array.isArray(value))
    throw new TypeError("shamoo.config.json 'permissions' must be an object.");
  const permissions = value as Record<string, unknown>;
  const filesystem = permissions.filesystem;
  if (filesystem === null || typeof filesystem !== 'object' || Array.isArray(filesystem))
    throw new TypeError("shamoo.config.json 'permissions.filesystem' must be an object.");
  const paths = filesystem as Record<string, unknown>;
  const strings = (input: unknown, label: string): readonly string[] => {
    if (!Array.isArray(input) || input.some((item) => typeof item !== 'string'))
      throw new TypeError(`shamoo.config.json '${label}' must be a string array.`);
    return input.map((item) => item as string);
  };
  const boolean = (key: string): boolean => {
    if (typeof permissions[key] !== 'boolean')
      throw new TypeError(`shamoo.config.json 'permissions.${key}' must be boolean.`);
    return permissions[key];
  };
  return {
    builtins: strings(permissions.builtins, 'permissions.builtins'),
    filesystem: {
      read: strings(paths.read, 'permissions.filesystem.read'),
      write: strings(paths.write, 'permissions.filesystem.write'),
    },
    network: boolean('network'),
    workers: boolean('workers'),
    childProcess: boolean('childProcess'),
    nativeAddons: boolean('nativeAddons'),
    ...(permissions.nms === true ? { nms: true } : {}),
    ...(permissions.packets === true ? { packets: true } : {}),
  };
}

function communicationConfig(value: unknown): CommunicationMetadata | undefined {
  if (value === undefined) return undefined;
  if (value === null || typeof value !== 'object' || Array.isArray(value))
    throw new TypeError("shamoo.config.json 'communication' must be an object.");
  const record = value as Record<string, unknown>;
  const array = (key: string): readonly Record<string, unknown>[] => {
    const values = record[key];
    if (
      !Array.isArray(values) ||
      values.some((item) => item === null || typeof item !== 'object' || Array.isArray(item))
    )
      throw new TypeError(`shamoo.config.json 'communication.${key}' must be an object array.`);
    return values as Record<string, unknown>[];
  };
  const text = (item: Record<string, unknown>, key: string, path: string): string => {
    const result = item[key];
    if (typeof result !== 'string' || result.trim().length === 0)
      throw new TypeError(`shamoo.config.json '${path}.${key}' must be a non-empty string.`);
    return result;
  };
  return {
    services: array('services').map((item, index) => {
      if (!Array.isArray(item.methods) || item.methods.some((method) => typeof method !== 'string'))
        throw new TypeError(
          `shamoo.config.json 'communication.services.${String(index)}.methods' must be a string array.`,
        );
      return {
        id: text(item, 'id', `communication.services.${String(index)}`),
        version: text(item, 'version', `communication.services.${String(index)}`),
        componentId: text(item, 'componentId', `communication.services.${String(index)}`),
        methods: item.methods as string[],
      };
    }),
    events: array('events').map((item, index) => ({
      id: text(item, 'id', `communication.events.${String(index)}`),
      version: text(item, 'version', `communication.events.${String(index)}`),
    })),
    consumers: array('consumers').map((item, index) => {
      const dependentReload = item.dependentReload;
      if (dependentReload !== 'keep-running' && dependentReload !== 'reload')
        throw new TypeError(
          `shamoo.config.json 'communication.consumers.${String(index)}.dependentReload' is invalid.`,
        );
      return {
        id: text(item, 'id', `communication.consumers.${String(index)}`),
        versionRange: text(item, 'versionRange', `communication.consumers.${String(index)}`),
        dependentReload,
      };
    }),
  };
}

function compatibilityConfig(value: unknown): ShamooProjectConfig['compatibility'] {
  if (value === undefined) return undefined;
  if (value === null || typeof value !== 'object' || Array.isArray(value))
    throw new TypeError("shamoo.config.json 'compatibility' must be an object.");
  const record = value as Record<string, unknown>;
  const result: Record<string, string> = {};
  for (const key of ['api', 'runtime', 'minecraft', 'paperApi', 'velocityApi']) {
    const item = record[key];
    if (item === undefined) continue;
    if (typeof item !== 'string' || item.trim().length === 0)
      throw new TypeError(`shamoo.config.json 'compatibility.${key}' must be a non-empty string.`);
    result[key] = item;
  }
  return result;
}

export async function readProjectConfig(projectRoot: string): Promise<ShamooProjectConfig> {
  const root = resolve(projectRoot);
  const configPath = resolve(root, 'shamoo.config.json');
  const raw: unknown = JSON.parse(await readFile(configPath, 'utf8'));
  if (raw === null || typeof raw !== 'object' || Array.isArray(raw))
    throw new TypeError('shamoo.config.json must contain an object.');
  const value = raw as Record<string, unknown>;
  const name = stringProperty(value, 'name', true);
  packageName(name);
  if (
    !Array.isArray(value.platforms) ||
    value.platforms.length === 0 ||
    value.platforms.some((item) => item !== 'paper' && item !== 'velocity') ||
    new Set(value.platforms).size !== value.platforms.length
  )
    throw new TypeError(
      "shamoo.config.json 'platforms' must contain unique paper/velocity values.",
    );
  const deployValue = value.deploy;
  if (
    deployValue !== undefined &&
    (deployValue === null || typeof deployValue !== 'object' || Array.isArray(deployValue))
  )
    throw new TypeError("shamoo.config.json 'deploy' must be an object.");
  const deploy = deployValue as Record<string, unknown> | undefined;
  const paperEntrypoint = stringProperty(value, 'paperEntrypoint');
  const velocityEntrypoint = stringProperty(value, 'velocityEntrypoint');
  const tsconfig = stringProperty(value, 'tsconfig');
  const outDir = stringProperty(value, 'outDir');
  const displayName = stringProperty(value, 'displayName');
  const version = stringProperty(value, 'version');
  const permissions = projectPermissions(value.permissions);
  const communication = communicationConfig(value.communication);
  const compatibility = compatibilityConfig(value.compatibility);
  const paperDeploy = deploy === undefined ? undefined : stringProperty(deploy, 'paper');
  const velocityDeploy = deploy === undefined ? undefined : stringProperty(deploy, 'velocity');
  const config: ShamooProjectConfig = {
    name,
    platforms: value.platforms as ('paper' | 'velocity')[],
    entrypoint: stringProperty(value, 'entrypoint', true),
    ...(paperEntrypoint === undefined ? {} : { paperEntrypoint }),
    ...(velocityEntrypoint === undefined ? {} : { velocityEntrypoint }),
    ...(tsconfig === undefined ? {} : { tsconfig }),
    ...(outDir === undefined ? {} : { outDir }),
    ...(displayName === undefined ? {} : { displayName }),
    ...(version === undefined ? {} : { version }),
    ...(permissions === undefined ? {} : { permissions }),
    ...(communication === undefined ? {} : { communication }),
    ...(compatibility === undefined ? {} : { compatibility }),
    ...(deploy === undefined
      ? {}
      : {
          deploy: {
            ...(paperDeploy === undefined ? {} : { paper: paperDeploy }),
            ...(velocityDeploy === undefined ? {} : { velocity: velocityDeploy }),
          },
        }),
  };
  for (const [label, path] of [
    ['entrypoint', config.entrypoint],
    ['paperEntrypoint', config.paperEntrypoint],
    ['velocityEntrypoint', config.velocityEntrypoint],
    ['tsconfig', config.tsconfig ?? 'tsconfig.json'],
    ['outDir', config.outDir ?? 'dist'],
  ] as const) {
    if (path !== undefined) {
      const target = within(root, path, label);
      await assertNoSymlinkEscape(root, target, label);
    }
  }
  return config;
}

function formatCompilerDiagnostic(diagnostic: CompilerDiagnostic): string {
  const location = diagnostic.location;
  return `${diagnostic.code}${location === undefined ? '' : ` ${location.file}:${String(location.line)}:${String(location.column)}`}: ${diagnostic.message}`;
}

export async function buildProject(projectRoot: string): Promise<ProjectBuildResult> {
  const root = resolve(projectRoot);
  const config = await readProjectConfig(root);
  const outputDirectory = within(root, config.outDir ?? 'dist', 'outDir');
  const metadata = resolve(outputDirectory, 'shamoo.metadata.json');
  const compilation = await compilePlugin({
    tsconfig: within(root, config.tsconfig ?? 'tsconfig.json', 'tsconfig'),
    entrypoint: config.entrypoint,
    packageName: packageName(config.name),
    platforms: config.platforms.map((platform) =>
      platform === 'paper' ? PlatformKind.PAPER : PlatformKind.VELOCITY,
    ),
    ...(config.paperEntrypoint === undefined ? {} : { paperEntrypoint: config.paperEntrypoint }),
    ...(config.velocityEntrypoint === undefined
      ? {}
      : { velocityEntrypoint: config.velocityEntrypoint }),
    output: relative(
      dirname(within(root, config.tsconfig ?? 'tsconfig.json', 'tsconfig')),
      metadata,
    ),
    ...(config.permissions === undefined ? {} : { permissions: config.permissions }),
    ...(config.communication === undefined ? {} : { communication: config.communication }),
  });
  if (compilation.manifest === undefined)
    throw new Error(compilation.diagnostics.map(formatCompilerDiagnostic).join('\n'));
  const artifacts = await bundlePlugin({
    manifest: compilation.manifest,
    projectRoot: root,
    outputDirectory,
  });
  const manifest: CompilerManifest = {
    ...compilation.manifest,
    sourceMaps: artifacts.map((artifact) => ({
      generated: relative(outputDirectory, artifact.path).split(sep).join('/'),
      map: relative(outputDirectory, artifact.map).split(sep).join('/'),
      format: 'source-map-v3' as const,
    })),
  };
  await writeFile(metadata, canonicalMetadataJson(manifest), 'utf8');
  return { root, config, artifacts, metadata, manifest };
}

async function safeDeploymentDirectory(path: string): Promise<string> {
  const target = resolve(path);
  await mkdir(target, { recursive: true });
  const information = await stat(target);
  if (!information.isDirectory())
    throw new TypeError(`Deployment target is not a directory: ${target}`);
  await access(target, constants.W_OK);
  return realpath(target);
}

function installationName(packageValue: string): string {
  const unscoped = packageValue.split('/').at(-1) ?? packageValue;
  const safe = unscoped.replace(/[^a-zA-Z0-9._-]/gu, '-');
  return safe;
}

function descriptorFor(build: ProjectBuildResult, artifact: BundleArtifact): CommonDescriptor {
  const permissions = build.config.permissions;
  const platform = artifact.platform;
  return parseCommonDescriptor({
    name: installationName(build.config.name).toLowerCase(),
    displayName: build.config.displayName ?? installationName(build.config.name),
    version: build.config.version ?? '0.1.0',
    shamoo: {
      api: build.config.compatibility?.api ?? '^0.1.0',
      runtime: build.config.compatibility?.runtime ?? '^0.1.0',
      manifest: MANIFEST_VERSION,
    },
    platforms: {
      paper:
        platform === 'paper'
          ? {
              enabled: true,
              entrypoint: 'paper/index.js',
              minecraft: build.config.compatibility?.minecraft ?? '*',
              paperApi: build.config.compatibility?.paperApi ?? '*',
            }
          : { enabled: false },
      velocity:
        platform === 'velocity'
          ? {
              enabled: true,
              entrypoint: 'velocity/index.js',
              velocityApi: build.config.compatibility?.velocityApi ?? '*',
            }
          : { enabled: false },
    },
    dependencies: { required: {}, optional: {}, loadBefore: [], loadAfter: [] },
    node: {
      builtins: permissions?.builtins ?? [],
      filesystem: permissions?.filesystem ?? { read: [], write: [] },
      network: permissions?.network ?? false,
      workers: permissions?.workers ?? false,
      childProcess: permissions?.childProcess ?? false,
      nativeAddons: permissions?.nativeAddons ?? false,
    },
    reload: { watch: true, debounceMs: 150, preserveState: false },
  });
}

export async function deployProject(
  build: ProjectBuildResult,
  overrides: Readonly<Partial<Record<'paper' | 'velocity', string>>> = {},
): Promise<readonly string[]> {
  const deployed: string[] = [];
  for (const artifact of build.artifacts) {
    const configured = overrides[artifact.platform] ?? build.config.deploy?.[artifact.platform];
    if (configured === undefined)
      throw new TypeError(`No ${artifact.platform} deployment target configured.`);
    const target = await safeDeploymentDirectory(
      isAbsolute(configured) ? configured : resolve(build.root, configured),
    );
    const installation = resolve(target, installationName(build.config.name));
    await mkdir(resolve(installation, artifact.platform), { recursive: true });
    for (const [source, relativeOutput] of [
      [artifact.path, `${artifact.platform}/index.js`],
      [artifact.map, `${artifact.platform}/index.js.map`],
      [build.metadata, 'shamoo.metadata.json'],
    ] as const) {
      const output = resolve(installation, relativeOutput);
      const targetRelative = relative(target, output);
      if (targetRelative.startsWith(`..${sep}`) || isAbsolute(targetRelative))
        throw new Error(`Unsafe deployment output: ${output}`);
      await copyFile(source, output);
      deployed.push(output);
    }
    const descriptor = resolve(installation, 'shamoo-plugin.json');
    await writeFile(
      descriptor,
      `${JSON.stringify(descriptorFor(build, artifact), undefined, 2)}\n`,
      'utf8',
    );
    deployed.push(descriptor);
  }
  return deployed;
}

export async function diagnoseRuntime(projectRoot: string): Promise<readonly RuntimeDiagnostic[]> {
  const diagnostics: RuntimeDiagnostic[] = [];
  const major = Number(process.versions.node.split('.')[0]);
  diagnostics.push({
    status: major >= 22 ? 'ok' : 'error',
    check: 'node',
    message: `Node ${process.versions.node}${major >= 22 ? '' : ' is unsupported; Node 22 or newer is required'}`,
  });
  let config: ShamooProjectConfig;
  try {
    config = await readProjectConfig(projectRoot);
    diagnostics.push({ status: 'ok', check: 'config', message: 'shamoo.config.json is valid' });
  } catch (error) {
    diagnostics.push({
      status: 'error',
      check: 'config',
      message: error instanceof Error ? error.message : String(error),
    });
    return diagnostics;
  }
  const root = resolve(projectRoot);
  for (const [check, path] of [
    ['tsconfig', within(root, config.tsconfig ?? 'tsconfig.json', 'tsconfig')],
    ['entrypoint', within(root, config.entrypoint, 'entrypoint')],
  ] as const) {
    const readable = await access(path, constants.R_OK).then(
      () => true,
      () => false,
    );
    diagnostics.push({
      status: readable ? 'ok' : 'error',
      check,
      message: readable ? `${path} is readable` : `${path} is missing or unreadable`,
    });
  }
  for (const platform of config.platforms) {
    const path = config.deploy?.[platform];
    if (path !== undefined) {
      const target = isAbsolute(path) ? path : resolve(root, path);
      const issue = await stat(target).then(
        async (information) => {
          if (!information.isDirectory()) return 'is not a directory';
          return access(target, constants.W_OK).then(
            () => undefined,
            () => 'is not writable',
          );
        },
        () => 'does not exist',
      );
      diagnostics.push({
        status: issue === undefined ? 'ok' : 'error',
        check: `deploy:${platform}`,
        message: issue === undefined ? `${target} is writable` : `${target} ${issue}`,
      });
      continue;
    }
    diagnostics.push({
      status: 'warning',
      check: `deploy:${platform}`,
      message: `No ${platform} development deployment target configured`,
    });
  }
  return diagnostics;
}

const winterMappings: Readonly<Record<string, readonly [string, string]>> = {
  ModuleComponent: ['@Module', 'Convert depends/order declarations to explicit module imports.'],
  Service: ['@Service', 'Use explicit tokens for interface-typed constructor dependencies.'],
  OnEnable: ['@OnEnable', 'Shamoo lifecycle methods may be asynchronous.'],
  OnDisable: ['@OnDisable', 'Use drain before disable when work must finish.'],
  OnReload: [
    'no direct equivalent',
    'Shamoo intentionally uses rebuild/redeploy instead of hot reload.',
  ],
  RequiresExpr: [
    '@RequiresExpression',
    'Rewrite JEXL expressions to the constrained Shamoo expression grammar.',
  ],
  RequiresPlugin: ['@Requires', 'Declare the host plugin dependency explicitly.'],
  RepeatingTask: ['@Interval', 'Use Shamoo canonical duration units.'],
  ScheduledAt: ['@Scheduled', 'Verify scheduling ownership and cancellation semantics.'],
  ListenerComponent: [
    '@Component plus event decorators',
    'Choose Paper or Velocity event bindings.',
  ],
  ProviderComponent: ['DI provider declaration', 'Register an explicit typed provider.'],
  Primary: ['@Primary', 'Shamoo rejects ambiguous primary providers.'],
  Expose: ['explicit typed facade', 'Generated Winter expose APIs are not source-compatible.'],
};

async function javaFiles(root: string, directory = root): Promise<readonly string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries.sort((left, right) => left.name.localeCompare(right.name))) {
    const path = resolve(directory, entry.name);
    const relativePath = relative(root, path);
    if (relativePath.startsWith(`..${sep}`) || isAbsolute(relativePath)) continue;
    if (entry.isSymbolicLink()) continue;
    if (entry.isDirectory()) files.push(...(await javaFiles(root, path)));
    else if (entry.isFile() && entry.name.endsWith('.java')) files.push(path);
  }
  return files;
}

/** Performs a source-only Winter audit; it never executes or compiles migration input. */
export async function analyzeWinterMigration(sourceRoot: string): Promise<WinterMigrationReport> {
  const root = await realpath(resolve(sourceRoot));
  if (!(await stat(root)).isDirectory())
    throw new TypeError(`Winter source is not a directory: ${root}`);
  const files = await javaFiles(root);
  const findings: WinterMigrationFinding[] = [];
  for (const file of files) {
    const source = await readFile(file, 'utf8');
    // Preserve newlines while removing comments, strings, and character literals so imports,
    // examples, and comments cannot masquerade as Java annotation usage.
    const syntax = source.replace(
      /\/\*[\s\S]*?\*\/|\/\/[^\r\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/gu,
      (match) => match.replace(/[^\r\n]/gu, ' '),
    );
    for (const [winter, [shamoo, note]] of Object.entries(winterMappings)) {
      const expression = new RegExp(
        `@(?:[A-Za-z_$][\\w$]*\\.)*${winter}\\b|\\.${winter}\\s*\\(`,
        'gu',
      );
      for (const match of syntax.matchAll(expression))
        findings.push({
          file: relative(root, file).split(sep).join('/'),
          line: syntax.slice(0, match.index).split(/\r?\n/u).length,
          winter,
          shamoo,
          note,
        });
    }
  }
  findings.sort((left, right) =>
    `${left.file}:${String(left.line).padStart(9, '0')}:${left.winter}`.localeCompare(
      `${right.file}:${String(right.line).padStart(9, '0')}:${right.winter}`,
    ),
  );
  return { root, files: files.length, findings };
}

const commandReference = `Usage: shamoo <command> [options]

Commands:
  create <directory> [--name <package>] [--platform paper,velocity]
  build [--project <directory>]
  deploy [--project <directory>] [--paper <directory>] [--velocity <directory>]
  dev [--project <directory>] [--paper <directory>] [--velocity <directory>]
  paper [sync|diff] [paper|paper-nms|paper-packets] [model|-] [output]
  velocity [sync|diff] [model|-] [output]
  doctor [--project <directory>] [--json]
  migrate winter <source-directory> [--json]
  version

dev performs an initial build/deploy, then watches source and configuration files.
All project paths in shamoo.config.json are confined to the project root.
`;

async function runCodegen(arguments_: readonly string[], cwd: string, io: CliIo): Promise<number> {
  const invocation = parsePlatformCodegenInvocation(arguments_);
  const outputDirectory = resolve(cwd, invocation.outputDirectory ?? 'src/generated');
  if (invocation.platform === 'paper') {
    if (invocation.surface === undefined) throw new Error('Paper surface was not parsed.');
    const request = {
      surface: invocation.surface,
      ...(invocation.model === undefined ? {} : { model: resolve(cwd, invocation.model) }),
      outputDirectory,
    };
    if (invocation.action === 'diff') {
      const difference = await diffPaperBindings(request);
      const stale = [
        difference.declarations,
        difference.metadata,
        difference.coverage,
        ...Object.values(difference.shards),
      ].some((item) => item.changed);
      io[stale ? 'stderr' : 'stdout'](
        `${stale ? 'Stale' : 'Current'} ${request.surface} bindings.\n`,
      );
      return stale ? 1 : 0;
    }
    const changed = await syncPaperBindings(request);
    io.stdout(`Synchronized ${request.surface} bindings (${String(changed.length)} changed).\n`);
    return 0;
  }
  const request = {
    ...(invocation.model === undefined ? {} : { model: resolve(cwd, invocation.model) }),
    outputDirectory,
  };
  if (invocation.action === 'diff') {
    const difference = await diffVelocityBindings(request);
    const stale = [
      difference.declarations,
      difference.events,
      difference.coverage,
      ...Object.values(difference.shards),
    ].some((item) => item.changed);
    io[stale ? 'stderr' : 'stdout'](`${stale ? 'Stale' : 'Current'} velocity bindings.\n`);
    return stale ? 1 : 0;
  }
  const changed = await syncVelocityBindings(request);
  io.stdout(`Synchronized velocity bindings (${String(changed.length)} changed).\n`);
  return 0;
}

async function watchDevelopment(
  root: string,
  overrides: Readonly<Partial<Record<'paper' | 'velocity', string>>>,
  io: CliIo,
  signal: AbortSignal | undefined,
): Promise<number> {
  let running = false;
  let pending = false;
  let timer: NodeJS.Timeout | undefined;
  const rebuild = async (): Promise<void> => {
    if (running) {
      pending = true;
      return;
    }
    running = true;
    try {
      const build = await buildProject(root);
      const deployed = await deployProject(build, overrides);
      io.stdout(`Deployed ${String(deployed.length)} development files.\n`);
    } catch (error) {
      io.stderr(`${error instanceof Error ? error.message : String(error)}\n`);
    } finally {
      running = false;
      if (pending) {
        pending = false;
        await rebuild();
      }
    }
  };
  await rebuild();
  if (signal?.aborted === true) return 0;
  const watchers: FSWatcher[] = [];
  for (const path of [resolve(root, 'src'), resolve(root, 'shamoo.config.json')]) {
    const exists = await stat(path).then(
      () => true,
      () => false,
    );
    if (!exists) continue;
    watchers.push(
      watchFiles(path, { recursive: true }, () => {
        clearTimeout(timer);
        timer = setTimeout(() => void rebuild(), 150);
      }),
    );
  }
  await new Promise<void>((done) => {
    const stop = (): void => {
      clearTimeout(timer);
      for (const watcher of watchers) watcher.close();
      done();
    };
    signal?.addEventListener('abort', stop, { once: true });
    if (signal === undefined) {
      process.once('SIGINT', stop);
      process.once('SIGTERM', stop);
    }
  });
  return 0;
}

export async function runCli(
  arguments_: readonly string[],
  options: RunCliOptions = {},
): Promise<number> {
  const cwd = resolve(options.cwd ?? process.cwd());
  const io =
    options.io ??
    ({
      stdout: (value: string) => process.stdout.write(value),
      stderr: (value: string) => process.stderr.write(value),
    } satisfies CliIo);
  const command = parseCliCommand(arguments_[0]);
  const rest = arguments_.slice(1);
  if (command === 'help') {
    io.stdout(commandReference);
    return 0;
  }
  if (command === 'version') {
    io.stdout(`${CLI_VERSION}\n`);
    return 0;
  }
  if (command === 'create') {
    const directoryArgument = rest[0];
    if (directoryArgument === undefined || directoryArgument.startsWith('-'))
      throw new TypeError('create requires a target directory before its options.');
    const directory = resolve(cwd, directoryArgument);
    const selected = option(rest, '--platform') ?? 'paper';
    const platforms = selected.split(',').map((platform) => {
      if (platform === 'paper') return PlatformKind.PAPER;
      if (platform === 'velocity') return PlatformKind.VELOCITY;
      throw new TypeError(`Unsupported platform: ${platform}.`);
    });
    const result = await scaffoldPlugin({
      directory,
      name: option(rest, '--name') ?? defaultPluginName(directory),
      platforms,
    });
    io.stdout(`Created ${String(result.files.length)} files in ${result.directory}.\n`);
    return 0;
  }
  if (command === 'paper' || command === 'velocity') return runCodegen(arguments_, cwd, io);
  if (command === 'migrate') {
    if (rest[0] !== 'winter' || rest[1] === undefined)
      throw new TypeError('Usage: shamoo migrate winter <source-directory> [--json]');
    const report = await analyzeWinterMigration(resolve(cwd, rest[1]));
    if (rest.includes('--json')) io.stdout(`${JSON.stringify(report, undefined, 2)}\n`);
    else {
      io.stdout(
        `Scanned ${String(report.files)} Java files; found ${String(report.findings.length)} migration items.\n`,
      );
      for (const finding of report.findings)
        io.stdout(
          `${finding.file}:${String(finding.line)} ${finding.winter} -> ${finding.shamoo}: ${finding.note}\n`,
        );
    }
    return 0;
  }
  const root = resolve(cwd, option(rest, '--project') ?? '.');
  if (command === 'doctor') {
    const diagnostics = await diagnoseRuntime(root);
    if (rest.includes('--json')) io.stdout(`${JSON.stringify(diagnostics, undefined, 2)}\n`);
    else
      for (const diagnostic of diagnostics)
        io[diagnostic.status === 'error' ? 'stderr' : 'stdout'](
          `${diagnostic.status.toUpperCase()} ${diagnostic.check}: ${diagnostic.message}\n`,
        );
    return diagnostics.some((item) => item.status === 'error') ? 1 : 0;
  }
  const paperOverride = option(rest, '--paper');
  const velocityOverride = option(rest, '--velocity');
  const overrides: Readonly<Partial<Record<'paper' | 'velocity', string>>> = {
    ...(paperOverride === undefined ? {} : { paper: paperOverride }),
    ...(velocityOverride === undefined ? {} : { velocity: velocityOverride }),
  };
  if (command === 'dev') return watchDevelopment(root, overrides, io, options.watchSignal);
  const build = await buildProject(root);
  io.stdout(
    `Built ${String(build.artifacts.length)} platform bundle(s) in ${dirname(build.metadata)}.\n`,
  );
  if (command === 'deploy') {
    const deployed = await deployProject(build, overrides);
    io.stdout(`Deployed ${String(deployed.length)} development files.\n`);
  }
  return 0;
}
