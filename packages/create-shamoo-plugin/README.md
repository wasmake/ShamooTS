# @shamoo/create-plugin

Safe, deterministic project scaffolding used by `shamoo create`. Existing paths are
never merged or overwritten, and package installation is deliberately left to the
developer.

```ts
import { scaffoldPlugin } from '@shamoo/create-plugin';

await scaffoldPlugin({
  directory: './my-plugin',
  name: '@example/my-plugin',
  platforms: ['paper', 'velocity'],
});
```
