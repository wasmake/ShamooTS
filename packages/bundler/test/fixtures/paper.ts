const evaluations = (globalThis as { shamooEvaluations?: string[] }).shamooEvaluations ?? [];
(globalThis as { shamooEvaluations?: string[] }).shamooEvaluations = evaluations;
evaluations.push('paper-root');
