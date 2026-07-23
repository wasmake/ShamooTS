# ADR 0005: Pinned scanner models for platform bindings

## Status

Accepted.

## Decision

Platform declarations are generated only from validated, versioned JVM scanner JSON. Paper, Velocity, NMS, and packets have independent models and coverage reports. Raw declarations preserve Java identities and signatures; idiomatic layers are additive. NMS and packet packages are Paper-only, permission-gated, and exact-version.

## Consequences

Generation is reproducible without downloading a server during TypeScript builds. Coverage is objectively measured against each committed model. A fixture cannot substantiate completeness beyond its own contents, so documentation and reports identify the pinned model and avoid broader claims. Upstream upgrades require a new scanner artifact and reviewed generated diff.
