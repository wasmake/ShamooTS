import {
  defineServiceContract,
  type ServiceRegistry,
  type ServiceRegistration,
} from '@shamoo/communication';
import { Container } from '@shamoo/di';
import { InvocationRuntime } from '@shamoo/lifecycle';

export interface GenerationService {
  generation(): string;
}

export const GENERATION_SERVICE = defineServiceContract<GenerationService>({
  id: 'example.generation',
  version: '1.0.0',
  methods: ['generation'],
});

export class PluginGeneration implements GenerationService {
  readonly #container = new Container();
  readonly #runtime = new InvocationRuntime(this.#container);
  readonly #registration: ServiceRegistration;
  #shutdown: Promise<void> | undefined;
  #disposed = false;

  public constructor(
    private readonly name: string,
    registry: ServiceRegistry,
  ) {
    this.#registration = registry.register(GENERATION_SERVICE, this);
  }

  public generation(): string {
    return this.name;
  }

  public get activeCount(): number {
    return this.#runtime.activeCount;
  }

  public get draining(): boolean {
    return this.#runtime.draining;
  }

  public get disposed(): boolean {
    return this.#disposed;
  }

  public runTask<T>(task: (signal: AbortSignal) => T | Promise<T>): Promise<T> {
    const target = { run: task };
    return this.#runtime.invoke({
      kind: 'task',
      target,
      method: 'run',
      parameters: [{ index: 0, contextKey: 'abortSignal' }],
    }) as Promise<T>;
  }

  public stop(timeout = 1_000): Promise<void> {
    return (this.#shutdown ??= this.#stop(timeout));
  }

  async #stop(timeout: number): Promise<void> {
    await this.#runtime.drain(timeout);
    this.#registration.close();
    await this.#runtime.dispose(timeout);
    await this.#container.dispose();
    this.#disposed = true;
  }
}
