import { ServiceRegistry, type ServiceAvailability } from '@shamoo/communication';

import { GREETING_SERVICE, type GreetingService } from './contract.js';

export { GREETING_SERVICE, type GreetingService } from './contract.js';

export class GreetingProvider implements GreetingService {
  public constructor(private readonly prefix: string) {}

  public greet(name: string): string {
    return `${this.prefix}, ${name}!`;
  }
}

export interface ServiceReplacementResult {
  readonly beforeReplacement: string;
  readonly afterReplacement: string;
  readonly stableProxy: boolean;
  readonly finalAvailability: ServiceAvailability;
}

export function runServiceReplacementDemo(): ServiceReplacementResult {
  const registry = new ServiceRegistry();
  const oldRegistration = registry.register(GREETING_SERVICE, new GreetingProvider('Hello'));
  const consumer = registry.service(GREETING_SERVICE, '^1.0.0');
  const beforeReplacement = consumer.greet('Alex');

  const replacement = registry.register(GREETING_SERVICE, new GreetingProvider('Welcome'));
  oldRegistration.close();

  const stableProxy = registry.service(GREETING_SERVICE, '^1.0.0') === consumer;
  const afterReplacement = consumer.greet('Alex');
  replacement.close();

  return {
    beforeReplacement,
    afterReplacement,
    stableProxy,
    finalAvailability: registry.availability(GREETING_SERVICE, '^1.0.0'),
  };
}
