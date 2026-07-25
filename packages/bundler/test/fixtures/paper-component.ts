const evaluations = (globalThis as { shamooEvaluations?: string[] }).shamooEvaluations ?? [];
(globalThis as { shamooEvaluations?: string[] }).shamooEvaluations = evaluations;
evaluations.push('paper-component');

export class SharedPlugin {
  public enable(): void {
    evaluations.push('paper-enable');
  }
}
