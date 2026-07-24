import { OnDisable, OnEnable, Plugin } from '@shamoo/decorators';

@Plugin({ name: 'folia' })
export class FoliaPlugin {
  @OnEnable()
  public enabled(): void {
    console.info('[folia] Region/entity scheduling helpers are ready for platform integration.');
  }

  @OnDisable()
  public disabled(): void {
    console.info('[folia] Platform integrations must cancel any retained owned-work handles.');
  }
}

export { scheduleOwnedWork, type OwnedWorkHandles, type OwnedWorkRequest } from './folia.js';
