export class ShamooError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
    this.name = new.target.name;
  }
}

export class InvalidDeclarationError extends ShamooError {}
export class UnsupportedPlatformError extends ShamooError {}
export type Awaitable<T> = T | PromiseLike<T>;
export type Constructor<T = object> = abstract new (...args: never[]) => T;
