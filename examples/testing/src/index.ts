import { PlatformCapability, PlatformKind, type Platform } from '@shamoo/core';
import { Container, createToken } from '@shamoo/di';
import { LifecycleExecutor, type LifecycleMethod } from '@shamoo/lifecycle';
import { createTestPlatform } from '@shamoo/testing';

const STARTUP_MESSAGE = createToken<string>('testing example startup message');

export interface TestingExample {
  readonly platform: Platform;
  readonly calls: readonly string[];
  readonly executor: LifecycleExecutor;
}

export function createTestingExample(): TestingExample {
  const platform = createTestPlatform(
    [PlatformCapability.EVENTS, PlatformCapability.COMMANDS],
    PlatformKind.PAPER,
  );
  const calls: string[] = [];
  const target = {
    load(message: string): void {
      calls.push(`load:${message}`);
    },
    enable(): void {
      calls.push('enable');
    },
    ready(): void {
      calls.push('ready');
    },
    drain(): void {
      calls.push('drain');
    },
    disable(): void {
      calls.push('disable');
    },
    unload(): void {
      calls.push('unload');
    },
  };
  const methods: readonly LifecycleMethod[] = [
    {
      componentId: 'testing-example',
      target,
      method: 'load',
      stage: 'load',
      parameters: [{ index: 0, dependency: { token: STARTUP_MESSAGE } }],
    },
    { componentId: 'testing-example', target, method: 'enable', stage: 'enable' },
    { componentId: 'testing-example', target, method: 'ready', stage: 'ready' },
    { componentId: 'testing-example', target, method: 'drain', stage: 'drain' },
    { componentId: 'testing-example', target, method: 'disable', stage: 'disable' },
    { componentId: 'testing-example', target, method: 'unload', stage: 'unload' },
  ];
  const container = new Container({
    providers: [{ provide: STARTUP_MESSAGE, useValue: 'hello from DI' }],
  });

  return {
    platform,
    calls,
    executor: new LifecycleExecutor(container, methods),
  };
}

export async function runTestingExample(): Promise<TestingExample> {
  const example = createTestingExample();
  for (const stage of ['load', 'enable', 'ready', 'drain', 'disable', 'unload'] as const)
    await example.executor.execute(stage);
  return example;
}
