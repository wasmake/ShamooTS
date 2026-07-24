import 'node:fs';
import 'node:https';
// eslint-disable-next-line import-x/no-unresolved -- Deliberate native-addon capability fixture.
import binding from './binding.node';

export * from 'node:child_process';

const workers = 'node:worker_threads';
void import(workers);
const load = require;
const loadAlias = load;
void loadAlias('node:child_process');
void binding;
