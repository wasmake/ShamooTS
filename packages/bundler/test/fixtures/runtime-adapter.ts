export const calls: string[] = [];

export class AdapterPlugin {
  public enabled(): void {
    calls.push('compiled-enable');
  }

  public joined(value: unknown): unknown {
    calls.push('joined');
    return value;
  }

  public commanded(value: unknown): unknown {
    calls.push('commanded');
    return value;
  }
}

export default {
  enable(): void {
    calls.push('entry-enable');
  },
};
