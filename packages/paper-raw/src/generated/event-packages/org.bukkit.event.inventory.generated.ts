// Generated from paper 1.21.8-R0.1-20250906.215025-55 (paper-api+adventure). Do not edit.
type GeneratedEventDecorator = {
  (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor): void;
  <This, Arguments extends unknown[], Return>(value: (this: This, ...arguments_: Arguments) => Return, context: ClassMethodDecoratorContext<This, (this: This, ...arguments_: Arguments) => Return>): void;
};
type GeneratedEventPriority = 'LOWEST' | 'LOW' | 'NORMAL' | 'HIGH' | 'HIGHEST' | 'MONITOR';
function generatedEventDecorator(name: string, javaName: string, priority: GeneratedEventPriority, receiveCancelled: boolean): GeneratedEventDecorator {
  return (...invocation: Array<object | string | symbol>) => {
    const context = invocation[1] as { readonly kind?: string; readonly name?: string | symbol; readonly metadata?: Record<PropertyKey, object> } | undefined;
    const key = Symbol.for('shamoo.decorator.declarations');
    const legacyMember = typeof invocation[1] === 'string' || typeof invocation[1] === 'symbol' ? invocation[1] : undefined;
    if (context?.kind !== 'method' && legacyMember === undefined) throw new TypeError('@' + name + ' can only decorate a method.');
    const carrier = context?.metadata ?? (invocation[0] as { constructor: Record<PropertyKey, object> }).constructor;
    const declarations = carrier[key] as object[] | undefined;
    const value = { name, target: 'method', arguments: [javaName, priority, receiveCancelled], member: context?.name ?? legacyMember };
    if (declarations === undefined) Object.defineProperty(carrier, key, { configurable: true, value: [value] });
    else declarations.push(value);
  };
}
/** Handles org.bukkit.event.inventory.BrewEvent. */
export const OnBrewEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBrewEvent', "org.bukkit.event.inventory.BrewEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.BrewingStandFuelEvent. */
export const OnBrewingStandFuelEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBrewingStandFuelEvent', "org.bukkit.event.inventory.BrewingStandFuelEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.CraftItemEvent. */
export const OnCraftItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnCraftItemEvent', "org.bukkit.event.inventory.CraftItemEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.FurnaceBurnEvent. */
export const OnFurnaceBurnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnFurnaceBurnEvent', "org.bukkit.event.inventory.FurnaceBurnEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.FurnaceExtractEvent. */
export const OnFurnaceExtractEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnFurnaceExtractEvent', "org.bukkit.event.inventory.FurnaceExtractEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.FurnaceSmeltEvent. */
export const OnFurnaceSmeltEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnFurnaceSmeltEvent', "org.bukkit.event.inventory.FurnaceSmeltEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.FurnaceStartSmeltEvent. */
export const OnFurnaceStartSmeltEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnFurnaceStartSmeltEvent', "org.bukkit.event.inventory.FurnaceStartSmeltEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.HopperInventorySearchEvent. */
export const OnHopperInventorySearchEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnHopperInventorySearchEvent', "org.bukkit.event.inventory.HopperInventorySearchEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.InventoryClickEvent. */
export const OnInventoryClickEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnInventoryClickEvent', "org.bukkit.event.inventory.InventoryClickEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.InventoryCloseEvent. */
export const OnInventoryCloseEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnInventoryCloseEvent', "org.bukkit.event.inventory.InventoryCloseEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.InventoryCreativeEvent. */
export const OnInventoryCreativeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnInventoryCreativeEvent', "org.bukkit.event.inventory.InventoryCreativeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.InventoryDragEvent. */
export const OnInventoryDragEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnInventoryDragEvent', "org.bukkit.event.inventory.InventoryDragEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.InventoryEvent. */
export const OnInventoryEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnInventoryEvent', "org.bukkit.event.inventory.InventoryEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.InventoryMoveItemEvent. */
export const OnInventoryMoveItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnInventoryMoveItemEvent', "org.bukkit.event.inventory.InventoryMoveItemEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.InventoryOpenEvent. */
export const OnInventoryOpenEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnInventoryOpenEvent', "org.bukkit.event.inventory.InventoryOpenEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.InventoryPickupItemEvent. */
export const OnInventoryPickupItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnInventoryPickupItemEvent', "org.bukkit.event.inventory.InventoryPickupItemEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.PrepareAnvilEvent. */
export const OnPrepareAnvilEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPrepareAnvilEvent', "org.bukkit.event.inventory.PrepareAnvilEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.PrepareGrindstoneEvent. */
export const OnPrepareGrindstoneEvent_2 = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPrepareGrindstoneEvent_2', "org.bukkit.event.inventory.PrepareGrindstoneEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.PrepareInventoryResultEvent. */
export const OnPrepareInventoryResultEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPrepareInventoryResultEvent', "org.bukkit.event.inventory.PrepareInventoryResultEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.PrepareItemCraftEvent. */
export const OnPrepareItemCraftEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPrepareItemCraftEvent', "org.bukkit.event.inventory.PrepareItemCraftEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.PrepareSmithingEvent. */
export const OnPrepareSmithingEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPrepareSmithingEvent', "org.bukkit.event.inventory.PrepareSmithingEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.SmithItemEvent. */
export const OnSmithItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSmithItemEvent', "org.bukkit.event.inventory.SmithItemEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.inventory.TradeSelectEvent. */
export const OnTradeSelectEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnTradeSelectEvent', "org.bukkit.event.inventory.TradeSelectEvent", priority, receiveCancelled);
