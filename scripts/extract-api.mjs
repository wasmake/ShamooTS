import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { Extractor, ExtractorConfig } from '@microsoft/api-extractor';

const root = fileURLToPath(new URL('..', import.meta.url));
const packageDirectories = [
  'core',
  'common',
  'di',
  'config',
  'testing',
  'platform',
  'paper-codegen',
  'velocity-codegen',
  'platform-codegen',
  'runtime-protocol',
  'compiler',
  'cli',
  'create-shamoo-plugin',
  'metadata',
  'decorators',
  'lifecycle',
  'conditions',
  'events',
  'commands',
  'scheduler',
  'interceptors',
  'guards',
  'pipes',
  'filters',
  'validation',
  'reflection',
  'bundler',
];
const generatedReferences = {
  'paper-raw': 'packages/paper-codegen/models/paper.model.json',
  'paper-nms': 'packages/paper-codegen/models/paper-nms.model.json',
  'paper-packets': 'packages/paper-codegen/models/paper-packets.model.json',
  'velocity-raw': 'packages/velocity-codegen/models/velocity.model.json',
};
const bindingReports = [];

await mkdir(join(root, 'docs/api-reports'), { recursive: true });

for (const [directory, modelPath] of Object.entries(generatedReferences)) {
  process.stdout.write(`Indexing complete ${directory} generated API.\n`);
  const model = JSON.parse(await readFile(join(root, modelPath), 'utf8'));
  const coverage = JSON.parse(
    await readFile(
      join(root, 'packages', directory, 'src/generated/coverage.generated.json'),
      'utf8',
    ),
  );
  bindingReports.push({ directory, model, coverage });
  const lines = [
    `## Generated API Reference for "@shamoo/${directory}"`,
    '',
    `Canonical ${model.platform} ${model.apiVersion}; ${model.declarations.length.toLocaleString('en-US')} declarations.`,
    '',
  ];
  for (const declaration of model.declarations) {
    lines.push(`### ${declaration.name}`, '');
    lines.push(`- Java: \`${declaration.javaName}\``);
    lines.push(`- Kind: \`${declaration.kind}\``);
    for (const constructor of declaration.constructors ?? [])
      lines.push(
        `- Constructor: \`(${constructor.parameters.map((parameter) => `${parameter.name}: ${parameter.type}`).join(', ')})\``,
      );
    for (const field of declaration.fields ?? [])
      lines.push(`- Field: \`${field.name}: ${field.type}\``);
    for (const method of declaration.methods ?? [])
      lines.push(
        `- Method: \`${method.name}(${method.parameters.map((parameter) => `${parameter.name}: ${parameter.type}`).join(', ')}): ${method.returns}\``,
      );
    for (const constant of declaration.enumConstants ?? []) lines.push(`- Enum: \`${constant}\``);
    lines.push('');
  }
  if ((model.events ?? []).length > 0) {
    lines.push('## Events', '');
    for (const event of model.events)
      lines.push(`- \`${event.type}\`: \`${event.javaName}\` (cancellable: ${event.cancellable})`);
    lines.push('');
  }
  if ((model.packets ?? []).length > 0) {
    lines.push('## Packet Registrations', '');
    for (const packet of model.packets) {
      const registrations = packet.registrations ?? [packet];
      for (const registration of registrations)
        lines.push(
          `- \`${packet.type}\`: \`${packet.javaName}\`, ${registration.phase}/${registration.direction}${registration.id === undefined ? '' : `, ID ${registration.id}`}`,
        );
    }
    lines.push('');
  }
  await writeFile(
    join(root, 'docs/api-reports', `${directory}.api.md`),
    `${lines.join('\n').trimEnd()}\n`,
    'utf8',
  );
}

const reportLines = ['# Generated platform binding report', ''];
for (const { directory, model, coverage } of bindingReports) {
  const opaqueOccurrences = coverage.opaqueMappings.reduce(
    (total, item) => total + item.occurrences,
    0,
  );
  reportLines.push(
    `- \`@shamoo/${directory}\`: \`${model.apiVersion}\`; ${coverage.declarations.emitted.toLocaleString('en-US')} declarations, ${coverage.members.emitted.toLocaleString('en-US')} members, ${coverage.events.emitted.toLocaleString('en-US')} events, ${coverage.packets.emitted.toLocaleString('en-US')} packets, ${coverage.opaqueMappings.length.toLocaleString('en-US')} opaque names across ${opaqueOccurrences.toLocaleString('en-US')} signature occurrences.`,
  );
}
reportLines.push(
  '',
  'Generated from canonical models and coverage reports by `pnpm api:check`.',
  '',
);
await writeFile(join(root, 'docs/platform-bindings.generated.md'), reportLines.join('\n'), 'utf8');

for (const directory of packageDirectories) {
  process.stdout.write(`Extracting ${directory} API.\n`);
  const packageRoot = join(root, 'packages', directory);
  const config = ExtractorConfig.prepare({
    configObject: {
      projectFolder: packageRoot,
      mainEntryPointFilePath: '<projectFolder>/dist/index.d.ts',
      compiler: { tsconfigFilePath: '<projectFolder>/../../tsconfig.json' },
      apiReport: {
        enabled: true,
        reportFileName: `${directory}.api.md`,
        reportFolder: '<projectFolder>/../../docs/api-reports',
        reportTempFolder: '<projectFolder>/../../.api-extractor',
      },
      docModel: { enabled: false },
      dtsRollup: { enabled: false },
      tsdocMetadata: { enabled: false },
      messages: {
        compilerMessageReporting: { default: { logLevel: 'warning' } },
        extractorMessageReporting: {
          default: { logLevel: 'warning' },
          'ae-forgotten-export': { logLevel: 'none' },
          'ae-missing-release-tag': { logLevel: 'none' },
          'ae-undocumented': { logLevel: 'none' },
          'ae-wrong-input-file-type': { logLevel: 'none' },
        },
        tsdocMessageReporting: { default: { logLevel: 'warning' } },
      },
    },
    configObjectFullPath: join(packageRoot, 'api-extractor.json'),
    packageJsonFullPath: join(packageRoot, 'package.json'),
  });
  const result = Extractor.invoke(config, { localBuild: true, showVerboseMessages: false });
  if (!result.succeeded) throw new Error(`API extraction failed for ${directory}`);
  const reportPath = join(root, 'docs', 'api-reports', `${directory}.api.md`);
  const report = await readFile(reportPath, 'utf8');
  await writeFile(reportPath, report.replaceAll('\r\n', '\n'), 'utf8');
}

process.stdout.write(
  `Extracted ${packageDirectories.length} semantic reports and ${Object.keys(generatedReferences).length} complete generated reference indices.\n`,
);
