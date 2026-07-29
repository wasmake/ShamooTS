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
/** Handles org.bukkit.event.block.BellResonateEvent. */
export const OnBellResonateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBellResonateEvent', "org.bukkit.event.block.BellResonateEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BellRingEvent. */
export const OnBellRingEvent_2 = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBellRingEvent_2', "org.bukkit.event.block.BellRingEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockBreakEvent. */
export const OnBlockBreakEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockBreakEvent', "org.bukkit.event.block.BlockBreakEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockBurnEvent. */
export const OnBlockBurnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockBurnEvent', "org.bukkit.event.block.BlockBurnEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockCanBuildEvent. */
export const OnBlockCanBuildEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockCanBuildEvent', "org.bukkit.event.block.BlockCanBuildEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockCookEvent. */
export const OnBlockCookEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockCookEvent', "org.bukkit.event.block.BlockCookEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockDamageAbortEvent. */
export const OnBlockDamageAbortEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockDamageAbortEvent', "org.bukkit.event.block.BlockDamageAbortEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockDamageEvent. */
export const OnBlockDamageEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockDamageEvent', "org.bukkit.event.block.BlockDamageEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockDispenseArmorEvent. */
export const OnBlockDispenseArmorEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockDispenseArmorEvent', "org.bukkit.event.block.BlockDispenseArmorEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockDispenseEvent. */
export const OnBlockDispenseEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockDispenseEvent', "org.bukkit.event.block.BlockDispenseEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockDispenseLootEvent. */
export const OnBlockDispenseLootEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockDispenseLootEvent', "org.bukkit.event.block.BlockDispenseLootEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockDropItemEvent. */
export const OnBlockDropItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockDropItemEvent', "org.bukkit.event.block.BlockDropItemEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockExpEvent. */
export const OnBlockExpEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockExpEvent', "org.bukkit.event.block.BlockExpEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockExplodeEvent. */
export const OnBlockExplodeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockExplodeEvent', "org.bukkit.event.block.BlockExplodeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockFadeEvent. */
export const OnBlockFadeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockFadeEvent', "org.bukkit.event.block.BlockFadeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockFertilizeEvent. */
export const OnBlockFertilizeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockFertilizeEvent', "org.bukkit.event.block.BlockFertilizeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockFormEvent. */
export const OnBlockFormEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockFormEvent', "org.bukkit.event.block.BlockFormEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockFromToEvent. */
export const OnBlockFromToEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockFromToEvent', "org.bukkit.event.block.BlockFromToEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockGrowEvent. */
export const OnBlockGrowEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockGrowEvent', "org.bukkit.event.block.BlockGrowEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockIgniteEvent. */
export const OnBlockIgniteEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockIgniteEvent', "org.bukkit.event.block.BlockIgniteEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockMultiPlaceEvent. */
export const OnBlockMultiPlaceEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockMultiPlaceEvent', "org.bukkit.event.block.BlockMultiPlaceEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockPhysicsEvent. */
export const OnBlockPhysicsEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockPhysicsEvent', "org.bukkit.event.block.BlockPhysicsEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockPistonExtendEvent. */
export const OnBlockPistonExtendEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockPistonExtendEvent', "org.bukkit.event.block.BlockPistonExtendEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockPistonRetractEvent. */
export const OnBlockPistonRetractEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockPistonRetractEvent', "org.bukkit.event.block.BlockPistonRetractEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockPlaceEvent. */
export const OnBlockPlaceEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockPlaceEvent', "org.bukkit.event.block.BlockPlaceEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockReceiveGameEvent. */
export const OnBlockReceiveGameEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockReceiveGameEvent', "org.bukkit.event.block.BlockReceiveGameEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockRedstoneEvent. */
export const OnBlockRedstoneEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockRedstoneEvent', "org.bukkit.event.block.BlockRedstoneEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockShearEntityEvent. */
export const OnBlockShearEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockShearEntityEvent', "org.bukkit.event.block.BlockShearEntityEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BlockSpreadEvent. */
export const OnBlockSpreadEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBlockSpreadEvent', "org.bukkit.event.block.BlockSpreadEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.BrewingStartEvent. */
export const OnBrewingStartEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnBrewingStartEvent', "org.bukkit.event.block.BrewingStartEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.CampfireStartEvent. */
export const OnCampfireStartEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnCampfireStartEvent', "org.bukkit.event.block.CampfireStartEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.CauldronLevelChangeEvent. */
export const OnCauldronLevelChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnCauldronLevelChangeEvent', "org.bukkit.event.block.CauldronLevelChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.CrafterCraftEvent. */
export const OnCrafterCraftEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnCrafterCraftEvent', "org.bukkit.event.block.CrafterCraftEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.EntityBlockFormEvent. */
export const OnEntityBlockFormEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntityBlockFormEvent', "org.bukkit.event.block.EntityBlockFormEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.FluidLevelChangeEvent. */
export const OnFluidLevelChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnFluidLevelChangeEvent', "org.bukkit.event.block.FluidLevelChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.InventoryBlockStartEvent. */
export const OnInventoryBlockStartEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnInventoryBlockStartEvent', "org.bukkit.event.block.InventoryBlockStartEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.LeavesDecayEvent. */
export const OnLeavesDecayEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnLeavesDecayEvent', "org.bukkit.event.block.LeavesDecayEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.MoistureChangeEvent. */
export const OnMoistureChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnMoistureChangeEvent', "org.bukkit.event.block.MoistureChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.NotePlayEvent. */
export const OnNotePlayEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnNotePlayEvent', "org.bukkit.event.block.NotePlayEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.SculkBloomEvent. */
export const OnSculkBloomEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSculkBloomEvent', "org.bukkit.event.block.SculkBloomEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.SignChangeEvent. */
export const OnSignChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSignChangeEvent', "org.bukkit.event.block.SignChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.SpongeAbsorbEvent. */
export const OnSpongeAbsorbEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSpongeAbsorbEvent', "org.bukkit.event.block.SpongeAbsorbEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.TNTPrimeEvent. */
export const OnTNTPrimeEvent_2 = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnTNTPrimeEvent_2', "org.bukkit.event.block.TNTPrimeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.block.VaultDisplayItemEvent. */
export const OnVaultDisplayItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVaultDisplayItemEvent', "org.bukkit.event.block.VaultDisplayItemEvent", priority, receiveCancelled);
