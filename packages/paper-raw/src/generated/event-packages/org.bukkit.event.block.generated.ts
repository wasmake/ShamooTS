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
/** Handles org.bukkit.event.block.BellResonateEvent. */
export const OnBellResonateEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBellResonateEvent', "org.bukkit.event.block.BellResonateEvent");
/** Handles org.bukkit.event.block.BellRingEvent. */
export const OnBellRingEvent_2 = (): GeneratedEventDecorator => generatedEventDecorator('OnBellRingEvent_2', "org.bukkit.event.block.BellRingEvent");
/** Handles org.bukkit.event.block.BlockBreakEvent. */
export const OnBlockBreakEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockBreakEvent', "org.bukkit.event.block.BlockBreakEvent");
/** Handles org.bukkit.event.block.BlockBurnEvent. */
export const OnBlockBurnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockBurnEvent', "org.bukkit.event.block.BlockBurnEvent");
/** Handles org.bukkit.event.block.BlockCanBuildEvent. */
export const OnBlockCanBuildEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockCanBuildEvent', "org.bukkit.event.block.BlockCanBuildEvent");
/** Handles org.bukkit.event.block.BlockCookEvent. */
export const OnBlockCookEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockCookEvent', "org.bukkit.event.block.BlockCookEvent");
/** Handles org.bukkit.event.block.BlockDamageAbortEvent. */
export const OnBlockDamageAbortEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockDamageAbortEvent', "org.bukkit.event.block.BlockDamageAbortEvent");
/** Handles org.bukkit.event.block.BlockDamageEvent. */
export const OnBlockDamageEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockDamageEvent', "org.bukkit.event.block.BlockDamageEvent");
/** Handles org.bukkit.event.block.BlockDispenseArmorEvent. */
export const OnBlockDispenseArmorEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockDispenseArmorEvent', "org.bukkit.event.block.BlockDispenseArmorEvent");
/** Handles org.bukkit.event.block.BlockDispenseEvent. */
export const OnBlockDispenseEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockDispenseEvent', "org.bukkit.event.block.BlockDispenseEvent");
/** Handles org.bukkit.event.block.BlockDispenseLootEvent. */
export const OnBlockDispenseLootEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockDispenseLootEvent', "org.bukkit.event.block.BlockDispenseLootEvent");
/** Handles org.bukkit.event.block.BlockDropItemEvent. */
export const OnBlockDropItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockDropItemEvent', "org.bukkit.event.block.BlockDropItemEvent");
/** Handles org.bukkit.event.block.BlockExpEvent. */
export const OnBlockExpEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockExpEvent', "org.bukkit.event.block.BlockExpEvent");
/** Handles org.bukkit.event.block.BlockExplodeEvent. */
export const OnBlockExplodeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockExplodeEvent', "org.bukkit.event.block.BlockExplodeEvent");
/** Handles org.bukkit.event.block.BlockFadeEvent. */
export const OnBlockFadeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockFadeEvent', "org.bukkit.event.block.BlockFadeEvent");
/** Handles org.bukkit.event.block.BlockFertilizeEvent. */
export const OnBlockFertilizeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockFertilizeEvent', "org.bukkit.event.block.BlockFertilizeEvent");
/** Handles org.bukkit.event.block.BlockFormEvent. */
export const OnBlockFormEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockFormEvent', "org.bukkit.event.block.BlockFormEvent");
/** Handles org.bukkit.event.block.BlockFromToEvent. */
export const OnBlockFromToEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockFromToEvent', "org.bukkit.event.block.BlockFromToEvent");
/** Handles org.bukkit.event.block.BlockGrowEvent. */
export const OnBlockGrowEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockGrowEvent', "org.bukkit.event.block.BlockGrowEvent");
/** Handles org.bukkit.event.block.BlockIgniteEvent. */
export const OnBlockIgniteEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockIgniteEvent', "org.bukkit.event.block.BlockIgniteEvent");
/** Handles org.bukkit.event.block.BlockMultiPlaceEvent. */
export const OnBlockMultiPlaceEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockMultiPlaceEvent', "org.bukkit.event.block.BlockMultiPlaceEvent");
/** Handles org.bukkit.event.block.BlockPhysicsEvent. */
export const OnBlockPhysicsEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockPhysicsEvent', "org.bukkit.event.block.BlockPhysicsEvent");
/** Handles org.bukkit.event.block.BlockPistonExtendEvent. */
export const OnBlockPistonExtendEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockPistonExtendEvent', "org.bukkit.event.block.BlockPistonExtendEvent");
/** Handles org.bukkit.event.block.BlockPistonRetractEvent. */
export const OnBlockPistonRetractEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockPistonRetractEvent', "org.bukkit.event.block.BlockPistonRetractEvent");
/** Handles org.bukkit.event.block.BlockPlaceEvent. */
export const OnBlockPlaceEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockPlaceEvent', "org.bukkit.event.block.BlockPlaceEvent");
/** Handles org.bukkit.event.block.BlockReceiveGameEvent. */
export const OnBlockReceiveGameEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockReceiveGameEvent', "org.bukkit.event.block.BlockReceiveGameEvent");
/** Handles org.bukkit.event.block.BlockRedstoneEvent. */
export const OnBlockRedstoneEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockRedstoneEvent', "org.bukkit.event.block.BlockRedstoneEvent");
/** Handles org.bukkit.event.block.BlockShearEntityEvent. */
export const OnBlockShearEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockShearEntityEvent', "org.bukkit.event.block.BlockShearEntityEvent");
/** Handles org.bukkit.event.block.BlockSpreadEvent. */
export const OnBlockSpreadEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBlockSpreadEvent', "org.bukkit.event.block.BlockSpreadEvent");
/** Handles org.bukkit.event.block.BrewingStartEvent. */
export const OnBrewingStartEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnBrewingStartEvent', "org.bukkit.event.block.BrewingStartEvent");
/** Handles org.bukkit.event.block.CampfireStartEvent. */
export const OnCampfireStartEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnCampfireStartEvent', "org.bukkit.event.block.CampfireStartEvent");
/** Handles org.bukkit.event.block.CauldronLevelChangeEvent. */
export const OnCauldronLevelChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnCauldronLevelChangeEvent', "org.bukkit.event.block.CauldronLevelChangeEvent");
/** Handles org.bukkit.event.block.CrafterCraftEvent. */
export const OnCrafterCraftEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnCrafterCraftEvent', "org.bukkit.event.block.CrafterCraftEvent");
/** Handles org.bukkit.event.block.EntityBlockFormEvent. */
export const OnEntityBlockFormEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntityBlockFormEvent', "org.bukkit.event.block.EntityBlockFormEvent");
/** Handles org.bukkit.event.block.FluidLevelChangeEvent. */
export const OnFluidLevelChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnFluidLevelChangeEvent', "org.bukkit.event.block.FluidLevelChangeEvent");
/** Handles org.bukkit.event.block.InventoryBlockStartEvent. */
export const OnInventoryBlockStartEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnInventoryBlockStartEvent', "org.bukkit.event.block.InventoryBlockStartEvent");
/** Handles org.bukkit.event.block.LeavesDecayEvent. */
export const OnLeavesDecayEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnLeavesDecayEvent', "org.bukkit.event.block.LeavesDecayEvent");
/** Handles org.bukkit.event.block.MoistureChangeEvent. */
export const OnMoistureChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnMoistureChangeEvent', "org.bukkit.event.block.MoistureChangeEvent");
/** Handles org.bukkit.event.block.NotePlayEvent. */
export const OnNotePlayEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnNotePlayEvent', "org.bukkit.event.block.NotePlayEvent");
/** Handles org.bukkit.event.block.SculkBloomEvent. */
export const OnSculkBloomEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSculkBloomEvent', "org.bukkit.event.block.SculkBloomEvent");
/** Handles org.bukkit.event.block.SignChangeEvent. */
export const OnSignChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSignChangeEvent', "org.bukkit.event.block.SignChangeEvent");
/** Handles org.bukkit.event.block.SpongeAbsorbEvent. */
export const OnSpongeAbsorbEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSpongeAbsorbEvent', "org.bukkit.event.block.SpongeAbsorbEvent");
/** Handles org.bukkit.event.block.TNTPrimeEvent. */
export const OnTNTPrimeEvent_2 = (): GeneratedEventDecorator => generatedEventDecorator('OnTNTPrimeEvent_2', "org.bukkit.event.block.TNTPrimeEvent");
/** Handles org.bukkit.event.block.VaultDisplayItemEvent. */
export const OnVaultDisplayItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnVaultDisplayItemEvent', "org.bukkit.event.block.VaultDisplayItemEvent");
