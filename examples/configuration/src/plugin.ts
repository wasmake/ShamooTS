import { readConfig } from '@shamoo/config';
import { OnDisable, OnEnable, OnLoad, Plugin } from '@shamoo/decorators';

import { MemoryConfigSource, exampleConfigDecoder, type ExampleConfig } from './config.js';

const source = new MemoryConfigSource({
  greeting: 'Configuration loaded successfully',
  announceOnEnable: true,
  maximumGreetingLength: 64,
});

@Plugin({ name: 'configuration' })
export class ConfigurationPlugin {
  private config: ExampleConfig | undefined;

  @OnLoad()
  public async loadConfiguration(): Promise<void> {
    const config = await readConfig(source, exampleConfigDecoder);
    this.config = config;
    console.info(
      `[configuration] Loaded validated config from ${source.name}; maximum length=${String(config.maximumGreetingLength)}.`,
    );
  }

  @OnEnable()
  public enabled(): void {
    if (this.config === undefined) throw new Error('Configuration was not loaded before enable.');
    if (this.config.announceOnEnable) console.info(`[configuration] ${this.config.greeting}.`);
  }

  @OnDisable()
  public disabled(): void {
    console.info('[configuration] Releasing the loaded configuration snapshot.');
    this.config = undefined;
  }
}

export { MemoryConfigSource, exampleConfigDecoder, type ExampleConfig } from './config.js';
