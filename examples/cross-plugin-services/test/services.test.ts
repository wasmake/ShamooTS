import { ServiceRegistry, ServiceUnavailableError } from '@shamoo/communication';
import { describe, expect, it } from 'vitest';

import { GREETING_SERVICE, GreetingProvider, runServiceReplacementDemo } from '../src/index.js';

describe('cross-plugin service contracts', () => {
  it('keeps a stable consumer proxy across provider replacement', () => {
    expect(runServiceReplacementDemo()).toEqual({
      beforeReplacement: 'Hello, Alex!',
      afterReplacement: 'Welcome, Alex!',
      stableProxy: true,
      finalAvailability: { available: false, reason: 'missing' },
    });
  });

  it('does not let an old registration close a replacement', () => {
    const registry = new ServiceRegistry();
    const old = registry.register(GREETING_SERVICE, new GreetingProvider('Old'));
    const consumer = registry.service(GREETING_SERVICE);
    const current = registry.register(GREETING_SERVICE, new GreetingProvider('Current'));

    old.close();
    expect(consumer.greet('Sam')).toBe('Current, Sam!');

    current.close();
    expect(() => consumer.greet('Sam')).toThrow(ServiceUnavailableError);
  });
});
