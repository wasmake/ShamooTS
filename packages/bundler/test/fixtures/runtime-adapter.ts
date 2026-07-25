export const calls: string[] = [];
const runtimeCalls = (globalThis as { shamooRuntimeCalls?: string[] }).shamooRuntimeCalls ?? [];
(globalThis as { shamooRuntimeCalls?: string[] }).shamooRuntimeCalls = runtimeCalls;

export class AdapterPlugin {
  public enabled(): void {
    calls.push('compiled-enable');
    runtimeCalls.push('compiled-enable');
  }

  public joined(value: unknown): unknown {
    calls.push('joined');
    return value;
  }

  public commanded(value: unknown): unknown {
    calls.push('commanded');
    return value;
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
