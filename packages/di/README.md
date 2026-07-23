# @shamoo/di

Plugin-isolated dependency injection and module composition using explicit generated metadata. It supports class, value, factory, async, existing, dynamic, multi and override providers without decorators or source parsing.

```ts
import { Container, createToken } from '@shamoo/di';

const message = createToken<string>('message');
const container = new Container({ providers: [{ provide: message, useValue: 'hello' }] });
container.resolve(message);
```

See [`docs/di.md`](../../docs/di.md) for scopes, modules, asynchronous initialization, and current boundaries.
