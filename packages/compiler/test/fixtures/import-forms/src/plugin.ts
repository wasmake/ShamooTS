// eslint-disable-next-line @typescript-eslint/no-require-imports
import fs = require('fs');

export * from './transitive';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const path: unknown = require('node:path');
const dynamicPath = (): string => './unknown';
void import('vm');
void import(dynamicPath());
void fs;
void path;
