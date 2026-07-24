# @shamoo/paper

Idiomatic Paper entrypoints plus typed event, command, messaging, and server/global/region/entity scheduler contracts. `createPaperHostApi` exposes ShamooRuntime's data-only event, command, task, packet, service, and contract-event operations. `paperHostCommunicationProviders` injects the optional host Paper-Velocity transport; standalone operation remains explicit and sends nothing. One-to-one generated Java declarations remain available from `@shamoo/paper-raw`.
