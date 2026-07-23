# Decorators

Shamoo decorators are deterministic declarations for compiler discovery. They
also expose explicit runtime declarations through `@shamoo/reflection`; they do
not infer types at runtime.

| Target                        | Decorators                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------- |
| Class                         | `Plugin`, `Module`, `Component`, `Injectable`, `Service`, `Global`, `Primary`         |
| Injection parameter/property  | `Inject`, `Optional`, `InjectAll`, `Lazy`, `Named`, `Qualifier`, `ConfigValue`        |
| Lifecycle method              | `OnLoad`, `OnEnable`, `OnDisable`, `OnReload`                                         |
| Event/command method          | `EventHandler`, `Command`, `Subcommand`                                               |
| Command parameter             | `Argument`, `Option`, `Sender`                                                        |
| Task method                   | `Scheduled`, `Interval`, `Timeout`                                                    |
| Class/method pipeline         | `Requires`, `RequiresExpression`, `UseInterceptors`, `UseGuards`, `UsePipes`, `Catch` |
| Parameter/property validation | `Validate`                                                                            |

Class declaration decorators are mutually exclusive. Lifecycle stages and
event/command/task handlers cannot be stacked on one method, and one parameter
cannot declare competing binding sources. Non-repeatable duplicates and wrong
targets are errors. Decorator aliases imported from the documented Shamoo
packages are resolved to their exported name; an unrelated local function named
`Service` is not framework metadata.

TypeScript's current standard decorator proposal has no parameter decorators.
Projects using parameter declarations therefore enable `experimentalDecorators`;
`shamooc` still uses the TypeScript 5 unified decorator AST and never relies on
legacy emitted design types. Projects using only class, method, and property
declarations may use standard decorator mode.
