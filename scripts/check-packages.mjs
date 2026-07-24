import { access, readFile } from 'node:fs/promises';
import ts from 'typescript';

const packages = [
  ['core', '@shamoo/core'],
  ['common', '@shamoo/common'],
  ['communication', '@shamoo/communication'],
  ['di', '@shamoo/di'],
  ['config', '@shamoo/config'],
  ['testing', '@shamoo/testing'],
  ['platform', '@shamoo/platform'],
  ['paper', '@shamoo/paper'],
  ['paper-raw', '@shamoo/paper-raw'],
  ['paper-nms', '@shamoo/paper-nms'],
  ['paper-packets', '@shamoo/paper-packets'],
  ['paper-codegen', '@shamoo/paper-codegen'],
  ['velocity', '@shamoo/velocity'],
  ['velocity-raw', '@shamoo/velocity-raw'],
  ['velocity-codegen', '@shamoo/velocity-codegen'],
  ['platform-codegen', '@shamoo/platform-codegen'],
  ['runtime-protocol', '@shamoo/runtime-protocol'],
  ['compiler', '@shamoo/compiler'],
  ['cli', '@shamoo/cli'],
  ['create-shamoo-plugin', '@shamoo/create-plugin'],
  ['metadata', '@shamoo/metadata'],
  ['decorators', '@shamoo/decorators'],
  ['lifecycle', '@shamoo/lifecycle'],
  ['conditions', '@shamoo/conditions'],
  ['events', '@shamoo/events'],
  ['commands', '@shamoo/commands'],
  ['scheduler', '@shamoo/scheduler'],
  ['interceptors', '@shamoo/interceptors'],
  ['guards', '@shamoo/guards'],
  ['pipes', '@shamoo/pipes'],
  ['filters', '@shamoo/filters'],
  ['validation', '@shamoo/validation'],
  ['reflection', '@shamoo/reflection'],
  ['bundler', '@shamoo/bundler'],
];

let releaseVersion;
for (const [directory, expectedName] of packages) {
  const root = new URL(`../packages/${directory}/`, import.meta.url);
  const manifest = JSON.parse(await readFile(new URL('package.json', root), 'utf8'));
  if (releaseVersion === undefined) {
    if (typeof manifest.version !== 'string' || manifest.version.length === 0)
      throw new Error(`Invalid public package version: ${expectedName}`);
    releaseVersion = manifest.version;
  }
  if (
    manifest.name !== expectedName ||
    manifest.version !== releaseVersion ||
    manifest.private === true ||
    !manifest.exports?.['.'] ||
    !manifest.files?.includes('dist') ||
    JSON.stringify(manifest.exports).includes('/src/')
  ) {
    throw new Error(`Invalid public package manifest: ${expectedName}`);
  }
  await access(new URL('dist/index.js', root));
  await access(new URL('dist/index.d.ts', root));
  const declarationPath = new URL('dist/index.d.ts', root);
  const program = ts.createProgram([declarationPath.pathname], {
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
    skipLibCheck: false,
    target: ts.ScriptTarget.ES2022,
  });
  const source = program.getSourceFile(declarationPath.pathname);
  const checker = program.getTypeChecker();
  const moduleSymbol = source === undefined ? undefined : checker.getSymbolAtLocation(source);
  if (source === undefined || moduleSymbol === undefined)
    throw new Error(`Cannot inspect type exports: ${expectedName}`);
  const typeValues = checker
    .getExportsOfModule(moduleSymbol)
    .filter((symbol) => {
      const target =
        symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;
      return (target.flags & ts.SymbolFlags.Value) !== 0;
    })
    .map((symbol) => symbol.name)
    .sort();
  const runtimeValues = Object.keys(await import(new URL('dist/index.js', root).href)).sort();
  if (JSON.stringify(typeValues) !== JSON.stringify(runtimeValues))
    throw new Error(
      `Runtime/type export mismatch for ${expectedName}: types=${typeValues.join(',')} runtime=${runtimeValues.join(',')}`,
    );
}

process.stdout.write(
  `Validated ${packages.length} public packages at ${releaseVersion}, declarations, and runtime/type export parity.\n`,
);
