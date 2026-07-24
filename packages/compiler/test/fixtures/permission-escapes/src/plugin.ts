import 'node:fs';
// eslint-disable-next-line import-x/no-unresolved -- Deliberate native-addon capability fixture.
import binding from './binding.node';

export * from './network.js';

const workerModule = 'node:worker_threads';
void import(workerModule);

const load = require;
const loadAlias = load;
void loadAlias('node:child_process');
void binding;
