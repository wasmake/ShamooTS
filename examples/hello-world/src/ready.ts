import { Component, OnReady } from '@shamoo/decorators';

@Component()
export class ReadyMessageComponent {
  @OnReady()
  public ready(): void {
    console.info('[hello-world] All discovered components are ready.');
  }
}
