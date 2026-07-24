import { describe, expect, it } from 'vitest';

import { parseCliCommand, parsePlatformCodegenInvocation } from '../src/index.js';

describe('CLI parsing', () => {
  it('recognizes aliases, commands, and unknown input', () => {
    expect([undefined, '--help', '-h'].map(parseCliCommand)).toEqual(['help', 'help', 'help']);
    expect(['--version', '-v'].map(parseCliCommand)).toEqual(['version', 'version']);
    expect(
      ['build', 'create', 'deploy', 'dev', 'doctor', 'migrate', 'paper', 'velocity'].map(
        parseCliCommand,
      ),
    ).toEqual(['build', 'create', 'deploy', 'dev', 'doctor', 'migrate', 'paper', 'velocity']);
    expect(() => parseCliCommand('wat')).toThrow('Unknown Shamoo command');
  });

  it('parses Paper and Velocity generation arguments and defaults', () => {
    expect(parsePlatformCodegenInvocation(['paper'])).toEqual({
      platform: 'paper',
      action: 'generate',
      surface: 'paper',
    });
    expect(
      parsePlatformCodegenInvocation(['paper', 'sync', 'paper-packets', 'model.json', 'out']),
    ).toEqual({
      platform: 'paper',
      action: 'sync',
      surface: 'paper-packets',
      model: 'model.json',
      outputDirectory: 'out',
    });
    expect(parsePlatformCodegenInvocation(['velocity', 'diff', 'model.json', 'out'])).toEqual({
      platform: 'velocity',
      action: 'diff',
      model: 'model.json',
      outputDirectory: 'out',
    });
  });

  it('rejects non-platform commands, actions, and Paper surfaces', () => {
    expect(() => parsePlatformCodegenInvocation(['build'])).toThrow('requires paper or velocity');
    expect(() => parsePlatformCodegenInvocation(['velocity', 'watch'])).toThrow(
      'Unknown code generation action',
    );
    expect(() => parsePlatformCodegenInvocation(['paper', 'diff', 'folia'])).toThrow(
      'Unknown Paper code generation surface',
    );
  });
});
