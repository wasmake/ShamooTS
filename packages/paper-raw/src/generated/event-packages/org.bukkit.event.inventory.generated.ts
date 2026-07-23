// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
type GeneratedEventDecorator = {
  (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor): void;
  <This, Arguments extends unknown[], Return>(value: (this: This, ...arguments_: Arguments) => Return, context: ClassMethodDecoratorContext<This, (this: This, ...arguments_: Arguments) => Return>): void;
};
function generatedEventDecorator(name: string, javaName: string): GeneratedEventDecorator {
  return (...invocation: Array<object | string | symbol>) => {
    const context = invocation[1] as { readonly kind?: string; readonly name?: string | symbol; readonly metadata?: Record<PropertyKey, object> } | undefined;
    const key = Symbol.for('shamoo.decorator.declarations');
    const legacyMember = typeof invocation[1] === 'string' || typeof invocation[1] === 'symbol' ? invocation[1] : undefined;
    if (context?.kind !== 'method' && legacyMember === undefined) throw new TypeError('@' + name + ' can only decorate a method.');
    const carrier = context?.metadata ?? (invocation[0] as { constructor: Record<PropertyKey, object> }).constructor;
    const declarations = carrier[key] as object[] | undefined;
    const value = { name, target: 'method', arguments: [javaName], member: context?.name ?? legacyMember };
    if (declarations === undefined) Object.defineProperty(carrier, key, { configurable: true, value: [value] });
    else declarations.push(value);
  };
}
/** Handles org.bukkit.event.inventory.BrewEvent. */
export const OnBrewEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBrewEvent', "org.bukkit.event.inventory.BrewEvent");
/** Handles org.bukkit.event.inventory.BrewingStandFuelEvent. */
export const OnBrewingStandFuelEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBrewingStandFuelEvent', "org.bukkit.event.inventory.BrewingStandFuelEvent");
/** Handles org.bukkit.event.inventory.CraftItemEvent. */
export const OnCraftItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnCraftItemEvent', "org.bukkit.event.inventory.CraftItemEvent");
/** Handles org.bukkit.event.inventory.FurnaceBurnEvent. */
export const OnFurnaceBurnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnFurnaceBurnEvent', "org.bukkit.event.inventory.FurnaceBurnEvent");
/** Handles org.bukkit.event.inventory.FurnaceExtractEvent. */
export const OnFurnaceExtractEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnFurnaceExtractEvent', "org.bukkit.event.inventory.FurnaceExtractEvent");
/** Handles org.bukkit.event.inventory.FurnaceSmeltEvent. */
export const OnFurnaceSmeltEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnFurnaceSmeltEvent', "org.bukkit.event.inventory.FurnaceSmeltEvent");
/** Handles org.bukkit.event.inventory.FurnaceStartSmeltEvent. */
export const OnFurnaceStartSmeltEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnFurnaceStartSmeltEvent', "org.bukkit.event.inventory.FurnaceStartSmeltEvent");
/** Handles org.bukkit.event.inventory.HopperInventorySearchEvent. */
export const OnHopperInventorySearchEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnHopperInventorySearchEvent', "org.bukkit.event.inventory.HopperInventorySearchEvent");
/** Handles org.bukkit.event.inventory.InventoryClickEvent. */
export const OnInventoryClickEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnInventoryClickEvent', "org.bukkit.event.inventory.InventoryClickEvent");
/** Handles org.bukkit.event.inventory.InventoryCloseEvent. */
export const OnInventoryCloseEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnInventoryCloseEvent', "org.bukkit.event.inventory.InventoryCloseEvent");
/** Handles org.bukkit.event.inventory.InventoryCreativeEvent. */
export const OnInventoryCreativeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnInventoryCreativeEvent', "org.bukkit.event.inventory.InventoryCreativeEvent");
/** Handles org.bukkit.event.inventory.InventoryDragEvent. */
export const OnInventoryDragEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnInventoryDragEvent', "org.bukkit.event.inventory.InventoryDragEvent");
/** Handles org.bukkit.event.inventory.InventoryEvent. */
export const OnInventoryEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnInventoryEvent', "org.bukkit.event.inventory.InventoryEvent");
/** Handles org.bukkit.event.inventory.InventoryMoveItemEvent. */
export const OnInventoryMoveItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnInventoryMoveItemEvent', "org.bukkit.event.inventory.InventoryMoveItemEvent");
/** Handles org.bukkit.event.inventory.InventoryOpenEvent. */
export const OnInventoryOpenEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnInventoryOpenEvent', "org.bukkit.event.inventory.InventoryOpenEvent");
/** Handles org.bukkit.event.inventory.InventoryPickupItemEvent. */
export const OnInventoryPickupItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnInventoryPickupItemEvent', "org.bukkit.event.inventory.InventoryPickupItemEvent");
/** Handles org.bukkit.event.inventory.PrepareAnvilEvent. */
export const OnPrepareAnvilEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPrepareAnvilEvent', "org.bukkit.event.inventory.PrepareAnvilEvent");
/** Handles org.bukkit.event.inventory.PrepareGrindstoneEvent. */
export const OnPrepareGrindstoneEvent_2 = (): GeneratedEventDecorator => generatedEventDecorator('OnPrepareGrindstoneEvent_2', "org.bukkit.event.inventory.PrepareGrindstoneEvent");
/** Handles org.bukkit.event.inventory.PrepareInventoryResultEvent. */
export const OnPrepareInventoryResultEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPrepareInventoryResultEvent', "org.bukkit.event.inventory.PrepareInventoryResultEvent");
/** Handles org.bukkit.event.inventory.PrepareItemCraftEvent. */
export const OnPrepareItemCraftEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPrepareItemCraftEvent', "org.bukkit.event.inventory.PrepareItemCraftEvent");
/** Handles org.bukkit.event.inventory.PrepareSmithingEvent. */
export const OnPrepareSmithingEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPrepareSmithingEvent', "org.bukkit.event.inventory.PrepareSmithingEvent");
/** Handles org.bukkit.event.inventory.SmithItemEvent. */
export const OnSmithItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSmithItemEvent', "org.bukkit.event.inventory.SmithItemEvent");
/** Handles org.bukkit.event.inventory.TradeSelectEvent. */
export const OnTradeSelectEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnTradeSelectEvent', "org.bukkit.event.inventory.TradeSelectEvent");
