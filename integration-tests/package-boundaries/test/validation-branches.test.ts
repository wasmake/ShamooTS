import { parseCliCommand } from '@shamoo/cli';
import { InvalidDeclarationError } from '@shamoo/common';
import { validateCompilationRequest } from '@shamoo/compiler';
import { packageName, PlatformCapability, PlatformKind, platformName } from '@shamoo/core';
import {
  assertCapabilities,
  definePlatform,
  MissingCapabilitiesError,
  supportsCapabilities,
} from '@shamoo/platform';
import { isRuntimeHandshake, RUNTIME_PROTOCOL_VERSION } from '@shamoo/runtime-protocol';
import { describe, expect, it } from 'vitest';

describe('foundation validation branches', () => {
  it.each([
    [undefined, 'help'],
    ['--help', 'help'],
    ['-h', 'help'],
    ['--version', 'version'],
    ['-v', 'version'],
    ['build', 'build'],
  ] as const)('parses CLI argument %s', (argument, expected) => {
    expect(parseCliCommand(argument)).toBe(expected);
  });

  it('rejects unknown CLI arguments', () => {
    expect(() => parseCliCommand('fabric')).toThrow('Unknown Shamoo command: fabric');
  });

  it('validates every compiler request requirement', () => {
    expect(() => {
      validateCompilationRequest({ entrypoint: 'src/index.ts', platforms: [] });
    }).toThrow(InvalidDeclarationError);
    expect(() => {
      validateCompilationRequest({
        entrypoint: 'src/index.ts',
        platforms: [PlatformKind.PAPER],
      });
    }).not.toThrow();
  });

  it('rejects invalid branded names', () => {
    expect(() => packageName('Upper Case')).toThrow('Invalid package name');
    expect(() => platformName('  ')).toThrow('Platform name must not be empty');
  });

  it('validates and asserts platform capabilities', () => {
    const platform = definePlatform({
      kind: PlatformKind.PAPER,
      name: 'Paper',
      capabilities: [PlatformCapability.EVENTS],
    });

    expect(supportsCapabilities(platform, [PlatformCapability.EVENTS])).toBe(true);
    expect(supportsCapabilities(platform, [PlatformCapability.COMMANDS])).toBe(false);
    expect(() => {
      assertCapabilities(platform, [PlatformCapability.EVENTS]);
    }).not.toThrow();
    expect(() => {
      assertCapabilities(platform, [PlatformCapability.COMMANDS, PlatformCapability.COMMANDS]);
    }).toThrow(MissingCapabilitiesError);
    expect(() =>
      definePlatform({
        kind: PlatformKind.PAPER,
        name: 'Paper',
        capabilities: ['unknown' as PlatformCapability],
      }),
    ).toThrow('Unknown platform capability: unknown');
  });

  it.each([
    null,
    'handshake',
    {},
    { protocolVersion: RUNTIME_PROTOCOL_VERSION, packageName: '@example/plugin' },
    {
      protocolVersion: RUNTIME_PROTOCOL_VERSION + 1,
      packageName: '@example/plugin',
      platform: PlatformKind.PAPER,
    },
    {
      protocolVersion: RUNTIME_PROTOCOL_VERSION,
      packageName: 42,
      platform: PlatformKind.PAPER,
    },
    {
      protocolVersion: RUNTIME_PROTOCOL_VERSION,
      packageName: '@example/plugin',
      platform: 'fabric',
    },
  ])('rejects invalid runtime handshake %#', (value) => {
    expect(isRuntimeHandshake(value)).toBe(false);
  });
});
