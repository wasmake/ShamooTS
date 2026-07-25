const evaluations = (globalThis as { shamooEvaluations?: string[] }).shamooEvaluations ?? [];
(globalThis as { shamooEvaluations?: string[] }).shamooEvaluations = evaluations;
evaluations.push('velocity-component');

export class SharedPlugin {
  public enable(): void {
    evaluations.push('velocity-enable');
  }
}
