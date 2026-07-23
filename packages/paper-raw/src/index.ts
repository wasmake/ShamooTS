declare const paperPluginBrand: unique symbol;
declare const paperServerBrand: unique symbol;
export type PaperPlugin = object & { readonly [paperPluginBrand]: true };
export type PaperServer = object & { readonly [paperServerBrand]: true };
export interface PaperEntrypointContext {
  readonly plugin: PaperPlugin;
  readonly server: PaperServer;
}
