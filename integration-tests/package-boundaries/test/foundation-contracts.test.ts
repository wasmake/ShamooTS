import { parseCliCommand } from '@shamoo/cli';
import { InvalidDeclarationError } from '@shamoo/common';
import { validateCompilationRequest } from '@shamoo/compiler';
import { readConfig } from '@shamoo/config';
import { packageName, PlatformCapability, PlatformKind } from '@shamoo/core';
import { definePluginProject } from '@shamoo/create-plugin';
import { createToken } from '@shamoo/di';
import { definePaperEntrypoint } from '@shamoo/paper';
import type { PaperEntrypointContext } from '@shamoo/paper-raw';
import { isRuntimeHandshake, RUNTIME_PROTOCOL_VERSION } from '@shamoo/runtime-protocol';
import { createTestPlatform } from '@shamoo/testing';
import { createVelocityPlatform, defineVelocityEntrypoint } from '@shamoo/velocity';
import type { VelocityEntrypointContext } from '@shamoo/velocity-raw';
import { describe, expect, it } from 'vitest';

describe('Phase 1 foundation contracts', () => {
  it('validates declarations without executing later framework features', async () => {
    const name = packageName('@example/plugin');
    const project = definePluginProject(name, PlatformKind.PAPER);
    const token = createToken<string>('message');
    const config = await readConfig(
      { name: 'memory', load: () => ({ enabled: true }) },
      { decode: (input) => input as { enabled: boolean } },
    );

    expect(project.name).toBe(name);
    expect(token.description).toBe('message');
    expect(config.enabled).toBe(true);
    expect(parseCliCommand('--version')).toBe('version');
    expect(
      isRuntimeHandshake({
        packageName: name,
        platform: PlatformKind.PAPER,
        protocolVersion: RUNTIME_PROTOCOL_VERSION,
      }),
    ).toBe(true);
  });

  it('exercises platform and compiler boundaries', () => {
    const platform = createVelocityPlatform([PlatformCapability.MESSAGING]);
    const testPlatform = createTestPlatform([PlatformCapability.EVENTS]);
    const paper = definePaperEntrypoint({
      enable: (context: PaperEntrypointContext) => {
        void context;
      },
    });
    const velocity = defineVelocityEntrypoint({
      start: (context: VelocityEntrypointContext) => {
        void context;
      },
    });

    expect(platform.capabilities.has(PlatformCapability.MESSAGING)).toBe(true);
    expect(testPlatform.kind).toBe(PlatformKind.PAPER);
    expect(Object.isFrozen(paper)).toBe(true);
    expect(Object.isFrozen(velocity)).toBe(true);
    expect(() => {
      validateCompilationRequest({
        entrypoint: '',
        packageName: packageName('@example/plugin'),
        platforms: [PlatformKind.PAPER],
      });
    }).toThrow(InvalidDeclarationError);
  });
});
