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
/** Handles org.bukkit.event.world.AsyncStructureGenerateEvent. */
export const OnAsyncStructureGenerateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnAsyncStructureGenerateEvent', "org.bukkit.event.world.AsyncStructureGenerateEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.AsyncStructureSpawnEvent. */
export const OnAsyncStructureSpawnEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnAsyncStructureSpawnEvent', "org.bukkit.event.world.AsyncStructureSpawnEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.ChunkLoadEvent. */
export const OnChunkLoadEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnChunkLoadEvent', "org.bukkit.event.world.ChunkLoadEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.ChunkPopulateEvent. */
export const OnChunkPopulateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnChunkPopulateEvent', "org.bukkit.event.world.ChunkPopulateEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.ChunkUnloadEvent. */
export const OnChunkUnloadEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnChunkUnloadEvent', "org.bukkit.event.world.ChunkUnloadEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.EntitiesLoadEvent. */
export const OnEntitiesLoadEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntitiesLoadEvent', "org.bukkit.event.world.EntitiesLoadEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.EntitiesUnloadEvent. */
export const OnEntitiesUnloadEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnEntitiesUnloadEvent', "org.bukkit.event.world.EntitiesUnloadEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.GenericGameEvent. */
export const OnGenericGameEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnGenericGameEvent', "org.bukkit.event.world.GenericGameEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.LootGenerateEvent. */
export const OnLootGenerateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnLootGenerateEvent', "org.bukkit.event.world.LootGenerateEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.PortalCreateEvent. */
export const OnPortalCreateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPortalCreateEvent', "org.bukkit.event.world.PortalCreateEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.SpawnChangeEvent. */
export const OnSpawnChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnSpawnChangeEvent', "org.bukkit.event.world.SpawnChangeEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.StructureGrowEvent. */
export const OnStructureGrowEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnStructureGrowEvent', "org.bukkit.event.world.StructureGrowEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.TimeSkipEvent. */
export const OnTimeSkipEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnTimeSkipEvent', "org.bukkit.event.world.TimeSkipEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.WorldInitEvent. */
export const OnWorldInitEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnWorldInitEvent', "org.bukkit.event.world.WorldInitEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.WorldLoadEvent. */
export const OnWorldLoadEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnWorldLoadEvent', "org.bukkit.event.world.WorldLoadEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.WorldSaveEvent. */
export const OnWorldSaveEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnWorldSaveEvent', "org.bukkit.event.world.WorldSaveEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.world.WorldUnloadEvent. */
export const OnWorldUnloadEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnWorldUnloadEvent', "org.bukkit.event.world.WorldUnloadEvent", priority, receiveCancelled);
