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
  'paper',
  'paper-raw',
  'velocity',
  'velocity-raw',
  'runtime-protocol',
  'compiler',
  'cli',
  'create-shamoo-plugin',
];

await mkdir(join(root, 'docs/api-reports'), { recursive: true });

for (const directory of packageDirectories) {
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

process.stdout.write(`Extracted ${packageDirectories.length} public API reports.\n`);
