# @shamoo/paper-codegen

Generates package-sharded Paper raw declarations, all event decorators, Mojang-mapped NMS declarations, packet registrations, and independent coverage reports from canonical checked-in scanner JSON.

`shamoo-paper-codegen generate`, `sync`, and `diff` default to checksum-verified models under `models/` and the repository package locations. Pass a model path and output directory to operate on another scanner artifact. Files under `fixtures/` are unit fixtures only.
