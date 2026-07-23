# ADR-0001: Capability-driven Minecraft platforms

- Status: Accepted
- Date: 2026-07-23

## Decision

Represent the supported Minecraft host families with `PlatformKind.PAPER` and `PlatformKind.VELOCITY`. Keep host-independent identities and capabilities in `@shamoo/core`, validation policy in `@shamoo/platform`, and host declarations in `@shamoo/paper` and `@shamoo/velocity`.

Platform capabilities are explicit because Paper and Velocity overlap without being interchangeable. Raw JVM values are opaque branded types until generated bridges can establish their identity. Importing a platform package performs no registration or host work.

## Consequences

- Shared code can state requirements without importing a concrete host.
- Host adapters must deliberately declare every capability.
- Phase 1 descriptors do not imply that commands, events, configuration, messaging, or scheduling are implemented.
- New platform kinds or capabilities are public API changes.
