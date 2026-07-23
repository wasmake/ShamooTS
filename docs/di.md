# Dependency injection

`@shamoo/di` provides a runtime container and deterministic module graph. Every `Container` is one plugin root: registrations, global modules, caches, overrides, and singleton-like values are never shared with another root.

## Tokens and providers

Tokens can be classes, strings, symbols, or typed values returned by `createToken<T>`. Providers support `useClass`, `useValue`, `useFactory`, `useAsyncFactory`, `useExisting`, and `useDynamic`. Repeated `multi` providers resolve in ascending `order` and registration order. A single lookup with multiple candidates requires exactly one `primary`; `resolveAll` always returns all visible candidates.

Class providers accept `ClassMetadata` explicitly. `parameters` describes constructor positions, `properties` describes assignments, and `lifecycle` names initialize/dispose methods. Factories use the same `Dependency` records through `inject`. No runtime source parsing, decorator discovery, or emitted TypeScript metadata is used.

Dependencies support optional, lazy, all, named, qualified, `forwardRef`, and explicit circular proxy lookup. Lazy dependencies defer resolution. Circular proxies are practical object-property proxies and are not identity-preserving substitutes for primitives, private fields, or eager constructor work.

## Scopes

The available scopes are Singleton, Plugin, Module, Transient, Event, Command, Task, Player, World, Region, and Proxy. Singleton and Plugin caches are intentionally local to one plugin root. Module values cache per plugin/module registration. Transient values are recreated and are still tracked for disposal.

Invocation scopes are created explicitly with `container.child(scope, context)`. Context values are inherited by descendants. Resolving an invocation-scoped provider outside a matching child fails, as does capturing a narrower provider in a longer-lived provider. Disposing a scope runs explicit lifecycle disposal, `Symbol.asyncDispose`, or `Symbol.dispose` in reverse creation order and prevents later resolution.

## Modules

`defineModule` accepts an id, imports, providers, exports, and a `global` flag. Providers are visible only in their declaring module, through direct or chained module re-exports, or through an exported global module in the same plugin container. Exports are validated during graph construction. Cycles include their complete path and require an explicit `forwardRef` edge.

`defineDynamicModule` represents a computed definition. `defineAsyncModule` runs during `Container.create`; its injected dependencies come from plugin-root providers. `initialize` resolves eager providers asynchronously. The synchronous `resolve` method rejects unresolved async factories and asynchronous lifecycle initialization.

Overrides are local to the container or child where they are installed. `inspect` reports provider form, owner module, scope, cache state and selection flags. `trace` records synchronous resolution, dependency, creation, cache and error events.

Compiler metadata now supplies constructor, property, and lifecycle declarations.
Automatic invocation-scope creation, cross-plugin provider registries, runtime
interception/dispatch, parameter-name inference, and transparent primitive
circular proxies remain outside the DI runtime. Module exports are provider
tokens rather than module re-export declarations.
