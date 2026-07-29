/** Production command orchestration and developer tooling for Shamoo plugins. @packageDocumentation */
import {
  access,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  realpath,
  rename,
  rm,
  stat,
  writeFile,
} from 'node:fs/promises';
import { constants, watch as watchFiles, type FSWatcher } from 'node:fs';
import { basename, dirname, isAbsolute, relative, resolve, sep } from 'node:path';

import { bundlePlugin, type BundleArtifact } from '@shamoo/bundler';
import { compilePlugin, type CompilerDiagnostic } from '@shamoo/compiler';
import { packageName, PlatformKind } from '@shamoo/core';
import { defaultPluginName, scaffoldPlugin } from '@shamoo/create-plugin';
import type { CommunicationMetadata } from '@shamoo/metadata';
import { diffPaperBindings, syncPaperBindings } from '@shamoo/paper-codegen';
import { diffVelocityBindings, syncVelocityBindings } from '@shamoo/velocity-codegen';
import { MANIFEST_VERSION, parseCommonDescriptor } from '@shamoo/runtime-protocol';

export const CLI_VERSION = '0.1.0-rc.2' as const;
export type CliCommand =
  'build' | 'create' | 'dev' | 'doctor' | 'help' | 'migrate' | 'paper' | 'velocity' | 'version';
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
}
export interface ProjectBuildResult {
  readonly root: string;
  readonly config: ShamooProjectConfig;
  readonly artifact: BundleArtifact;
  readonly manifestPath: string;
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

function rejectUnknownOptions(arguments_: readonly string[], allowed: readonly string[]): void {
  const unknown = arguments_.find(
    (argument) => argument.startsWith('--') && !allowed.includes(argument),
  );
  if (unknown !== undefined) throw new TypeError(`Unknown option: ${unknown}`);
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

function containsPath(directory: string, target: string): boolean {
  const path = relative(directory, target);
  return path === '' || (!path.startsWith(`..${sep}`) && path !== '..' && !isAbsolute(path));
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
  for (const key of ['nms', 'packets']) {
    if (permissions[key] !== undefined && typeof permissions[key] !== 'boolean')
      throw new TypeError(`shamoo.config.json 'permissions.${key}' must be boolean.`);
  }
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
  const allowed = new Set([
    'name',
    'platforms',
    'entrypoint',
    'paperEntrypoint',
    'velocityEntrypoint',
    'tsconfig',
    'outDir',
    'displayName',
    'version',
    'permissions',
    'communication',
    'compatibility',
  ]);
  const unknown = Object.keys(value).find((key) => !allowed.has(key));
  if (unknown !== undefined)
    throw new TypeError(`shamoo.config.json contains unsupported field '${unknown}'.`);
  const paperEntrypoint = stringProperty(value, 'paperEntrypoint');
  const velocityEntrypoint = stringProperty(value, 'velocityEntrypoint');
  const tsconfig = stringProperty(value, 'tsconfig');
  const outDir = stringProperty(value, 'outDir');
  const displayName = stringProperty(value, 'displayName');
  const version = stringProperty(value, 'version');
  const permissions = projectPermissions(value.permissions);
  const communication = communicationConfig(value.communication);
  const compatibility = compatibilityConfig(value.compatibility);
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
      if (label === 'outDir' && target === root)
        throw new TypeError('outDir must not be the project root.');
      await assertNoSymlinkEscape(root, target, label);
    }
  }
  const outputDirectory = within(root, config.outDir ?? 'dist', 'outDir');
  const protectedInputs = [
    ['project config', 'shamoo.config.json'],
    ['tsconfig', config.tsconfig ?? 'tsconfig.json'],
    ['entrypoint', config.entrypoint],
    ...(config.paperEntrypoint === undefined
      ? []
      : ([['paperEntrypoint', config.paperEntrypoint]] as const)),
    ...(config.velocityEntrypoint === undefined
      ? []
      : ([['velocityEntrypoint', config.velocityEntrypoint]] as const)),
  ] as const;
  const contained = protectedInputs.find(([, path]) =>
    containsPath(outputDirectory, within(root, path, 'input')),
  );
  if (contained !== undefined)
    throw new TypeError(
      `outDir must not contain the configured ${contained[0]} '${contained[1]}'.`,
    );
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
  const compilation = await compilePlugin({
    tsconfig: within(root, config.tsconfig ?? 'tsconfig.json', 'tsconfig'),
    entrypoint: config.entrypoint,
    platforms: config.platforms.map((platform) =>
      platform === 'paper' ? PlatformKind.PAPER : PlatformKind.VELOCITY,
    ),
    ...(config.paperEntrypoint === undefined ? {} : { paperEntrypoint: config.paperEntrypoint }),
    ...(config.velocityEntrypoint === undefined
      ? {}
      : { velocityEntrypoint: config.velocityEntrypoint }),
    ...(config.permissions === undefined ? {} : { permissions: config.permissions }),
    ...(config.communication === undefined ? {} : { communication: config.communication }),
  });
  if (compilation.metadata === undefined)
    throw new Error(compilation.diagnostics.map(formatCompilerDiagnostic).join('\n'));
  const permissions = config.permissions;
  const manifest = parseCommonDescriptor({
    name: pluginIdentity(config.name),
    displayName: config.displayName ?? pluginIdentity(config.name),
    version: config.version ?? '0.1.0',
    shamoo: {
      api: config.compatibility?.api ?? '^0.1.0',
      runtime: config.compatibility?.runtime ?? '^0.1.0',
      manifest: MANIFEST_VERSION,
    },
    platforms: {
      paper: config.platforms.includes('paper')
        ? {
            enabled: true,
            minecraft: config.compatibility?.minecraft ?? '*',
            paperApi: config.compatibility?.paperApi ?? '*',
            nms: permissions?.nms ?? false,
            packets: permissions?.packets ?? false,
          }
        : { enabled: false },
      velocity: config.platforms.includes('velocity')
        ? {
            enabled: true,
            velocityApi: config.compatibility?.velocityApi ?? '*',
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
    compiler: compilation.metadata,
  });
  const manifestJson = `${JSON.stringify(manifest, undefined, 2)}\n`;
  const manifestBytes = new TextEncoder().encode(manifestJson).byteLength;
  const maximumManifestBytes = 1_048_576;
  if (manifestBytes > maximumManifestBytes)
    throw new RangeError(
      `shamoo-plugin.json exceeds the Runtime limit of ${maximumManifestBytes.toLocaleString('en-US')} UTF-8 bytes.`,
    );

  const outputParent = dirname(outputDirectory);
  await mkdir(outputParent, { recursive: true });
  const temporaryDirectory = await mkdtemp(
    resolve(outputParent, `.${basename(outputDirectory)}-build-`),
  );
  const previousOutput = `${temporaryDirectory}-previous`;
  let installed = false;
  let previousMoved = false;
  try {
    const temporaryArtifact = await bundlePlugin({
      metadata: compilation.metadata,
      entrypoints: Object.fromEntries(
        config.platforms.map((platform) => [
          platform,
          platform === 'paper'
            ? (config.paperEntrypoint ?? config.entrypoint)
            : (config.velocityEntrypoint ?? config.entrypoint),
        ]),
      ),
      projectRoot: root,
      outputDirectory: temporaryDirectory,
    });
    await writeFile(resolve(temporaryDirectory, 'shamoo-plugin.json'), manifestJson, 'utf8');

    try {
      await rename(outputDirectory, previousOutput);
      previousMoved = true;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
    }
    try {
      await rename(temporaryDirectory, outputDirectory);
      installed = true;
    } catch (error) {
      if (previousMoved) {
        try {
          await rename(previousOutput, outputDirectory);
          previousMoved = false;
        } catch (rollbackError) {
          throw new AggregateError(
            [error, rollbackError],
            `Could not install new output or restore previous output; preserved previous files at ${previousOutput}.`,
          );
        }
      }
      throw error;
    }
    if (previousMoved) {
      await rm(previousOutput, { recursive: true, force: true }).catch(() => undefined);
      previousMoved = false;
    }
    const artifact: BundleArtifact = {
      path: resolve(outputDirectory, basename(temporaryArtifact.path)),
      map: resolve(outputDirectory, basename(temporaryArtifact.map)),
      bytes: temporaryArtifact.bytes,
    };
    return {
      root,
      config,
      artifact,
      manifestPath: resolve(outputDirectory, 'shamoo-plugin.json'),
    };
  } finally {
    if (!installed) await rm(temporaryDirectory, { recursive: true, force: true });
  }
}

function pluginIdentity(packageValue: string): string {
  const unscoped = packageValue.split('/').at(-1) ?? packageValue;
  return unscoped.replace(/[^a-zA-Z0-9._-]/gu, '-').toLowerCase();
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
  return diagnostics;
}

const winterMappings: Readonly<Record<string, readonly [string, string]>> = {
  ModuleComponent: ['@Module', 'Convert depends/order declarations to explicit module imports.'],
  Service: ['@Service', 'Use explicit tokens for interface-typed constructor dependencies.'],
  OnEnable: ['@OnEnable', 'Shamoo lifecycle methods may be asynchronous.'],
  OnDisable: ['@OnDisable', 'Use drain before disable when work must finish.'],
  OnReload: [
    'no direct equivalent',
    'Shamoo intentionally uses rebuild and reinstall instead of hot reload.',
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
  dev [--project <directory>]
  paper [sync|diff] [paper|paper-nms|paper-packets] [model|-] [output]
  velocity [sync|diff] [model|-] [output]
  doctor [--project <directory>] [--json]
  migrate winter <source-directory> [--json]
  version

dev performs an initial build, then watches source and configuration files.
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
      await buildProject(root);
      io.stdout('Built development plugin artifact.\n');
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
  rejectUnknownOptions(rest, command === 'doctor' ? ['--project', '--json'] : ['--project']);
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
  if (command === 'dev') return watchDevelopment(root, io, options.watchSignal);
  const build = await buildProject(root);
  io.stdout(`Built plugin artifact in ${dirname(build.artifact.path)}.\n`);
  return 0;
}
