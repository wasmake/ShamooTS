# @shamoo/runtime-protocol

Strict protocol `1.0` contracts shared by TypeScript plugins and Java hosts. The package validates canonical manifest v2 descriptors, including embedded compiler metadata, exports a draft 2020-12 JSON schema, negotiates the separately versioned runtime protocol against one selected host platform, and encodes bounded binary communication wire protocol `1` request/response envelopes.

```ts
import { negotiateCompatibility, parseCommonDescriptor } from '@shamoo/runtime-protocol';

const descriptor = parseCommonDescriptor(JSON.parse(source));
const result = negotiateCompatibility(descriptor, host);
```

See [`docs/protocol.md`](../../docs/protocol.md) and the cross-runtime golden fixture under `test/fixtures`.
