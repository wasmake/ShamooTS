# Runtime deployment

Deploy the complete `dist/` directory to `<paper-server>/plugins/ShamooRuntime/plugins`. The Paper
adapter registers each compiled route, performs argument and option parsing, enforces permissions and
sender restrictions, and binds decorated method parameters before invoking the plugin.

The protected inventory, item actions, and chat callback require a runtime release that implements
the `PaperCommandContext` rich text/UI operations documented in
[`docs/paper-rich-text-ui.md`](../../docs/paper-rich-text-ui.md). Those operations return promises
because the runtime marshals them to the owning Paper or Folia scheduler; command and action callbacks
await every operation before settling. Decorated command return values are ignored; replies and UI
effects must be explicit.
