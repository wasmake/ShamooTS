import { defineServiceContract } from '@shamoo/communication';

export interface GreetingService {
  greet(name: string): string;
}

export const GREETING_SERVICE = defineServiceContract<GreetingService>({
  id: 'example/greeting',
  version: '1.0.0',
  methods: ['greet'],
});
