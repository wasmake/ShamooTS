import { readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const generatedNames = new Set(['.tsbuild', 'coverage', 'dist']);

async function clean(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (generatedNames.has(entry.name) || entry.name.endsWith('.tsbuildinfo')) {
        await rm(path, { force: true, recursive: true });
      } else if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== '.git') {
        await clean(path);
      }
    }),
  );
}

await clean(root);
