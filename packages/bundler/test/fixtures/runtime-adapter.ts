export const calls: string[] = [];
const runtimeCalls = (globalThis as { shamooRuntimeCalls?: string[] }).shamooRuntimeCalls ?? [];
(globalThis as { shamooRuntimeCalls?: string[] }).shamooRuntimeCalls = runtimeCalls;
const commandInvocations =
  (globalThis as { shamooCommandInvocations?: (readonly unknown[])[] }).shamooCommandInvocations ??
  [];
(globalThis as { shamooCommandInvocations?: (readonly unknown[])[] }).shamooCommandInvocations =
  commandInvocations;

export class AdapterPlugin {
  public enabled(): void {
    calls.push('compiled-enable');
    runtimeCalls.push('compiled-enable');
  }

  public joined(value: unknown): unknown {
    calls.push('joined');
    return value;
  }

  public commanded(...values: readonly unknown[]): Promise<void> {
    calls.push('commanded');
    commandInvocations.push(values);
    return Promise.resolve();
  }

  public legacyCommanded(value: unknown): Promise<void> {
    calls.push('legacy-commanded');
    commandInvocations.push([value]);
    return Promise.resolve();
  }

  public serviceMethod(value: unknown): unknown {
    return value;
  }
}

export default {
  enable(): void {
    calls.push('entry-enable');
    runtimeCalls.push('entry-enable');
  },
};
