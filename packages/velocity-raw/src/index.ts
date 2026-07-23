declare const velocityPluginBrand: unique symbol;
declare const velocityProxyBrand: unique symbol;
export type VelocityPlugin = object & { readonly [velocityPluginBrand]: true };
export type VelocityProxy = object & { readonly [velocityProxyBrand]: true };
export interface VelocityEntrypointContext {
  readonly plugin: VelocityPlugin;
  readonly proxy: VelocityProxy;
}
