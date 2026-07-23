export type DiErrorCode =
  | 'PROVIDER_MISSING'
  | 'PROVIDER_AMBIGUITY'
  | 'PROVIDER_CONFLICT'
  | 'INVALID_PROVIDER'
  | 'INVALID_MODULE'
  | 'INVALID_EXPORT'
  | 'CIRCULAR_DEPENDENCY'
  | 'MODULE_CYCLE'
  | 'SCOPE_VIOLATION'
  | 'DISPOSED_SCOPE'
  | 'DEPENDENCY_RESOLUTION'
  | 'ASYNC_PROVIDER';

export class DiError extends Error {
  public constructor(
    public readonly code: DiErrorCode,
    message: string,
    public readonly details: Readonly<Record<string, unknown>> = {},
  ) {
    super(message);
    this.name = 'DiError';
  }
}

export class ProviderMissingError extends DiError {
  public constructor(token: string) {
    super('PROVIDER_MISSING', `No visible provider for ${token}.`, { token });
  }
}
export class ProviderAmbiguityError extends DiError {
  public constructor(token: string) {
    super(
      'PROVIDER_AMBIGUITY',
      `Multiple providers for ${token}; mark exactly one primary or resolve all.`,
      { token },
    );
  }
}
export class ProviderConflictError extends DiError {
  public constructor(token: string) {
    super('PROVIDER_CONFLICT', `Conflicting single and multi providers for ${token}.`, { token });
  }
}
export class InvalidProviderError extends DiError {
  public constructor(message: string) {
    super('INVALID_PROVIDER', message);
  }
}
export class InvalidModuleError extends DiError {
  public constructor(message: string) {
    super('INVALID_MODULE', message);
  }
}
export class InvalidExportError extends DiError {
  public constructor(module: string, token: string) {
    super('INVALID_EXPORT', `Module ${module} cannot export unavailable provider ${token}.`, {
      module,
      token,
    });
  }
}
export class CircularDependencyError extends DiError {
  public constructor(path: readonly string[]) {
    super('CIRCULAR_DEPENDENCY', `Circular dependency: ${path.join(' -> ')}.`, { path });
  }
}
export class ModuleCycleError extends DiError {
  public constructor(path: readonly string[]) {
    super(
      'MODULE_CYCLE',
      `Module cycle: ${path.join(' -> ')}. Use forwardRef for an intentional cycle.`,
      { path },
    );
  }
}
export class ScopeViolationError extends DiError {
  public constructor(message: string) {
    super('SCOPE_VIOLATION', message);
  }
}
export class DisposedScopeError extends DiError {
  public constructor() {
    super('DISPOSED_SCOPE', 'The dependency scope has been disposed.');
  }
}
export class DependencyResolutionError extends DiError {
  public constructor(token: string, cause: unknown) {
    super('DEPENDENCY_RESOLUTION', `Failed to resolve a dependency of ${token}.`, { token, cause });
  }
}
export class AsyncProviderError extends DiError {
  public constructor(token: string) {
    super('ASYNC_PROVIDER', `${token} requires asynchronous resolution.`, { token });
  }
}
