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
/** Handles org.bukkit.event.world.AsyncStructureGenerateEvent. */
export const OnAsyncStructureGenerateEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnAsyncStructureGenerateEvent', "org.bukkit.event.world.AsyncStructureGenerateEvent");
/** Handles org.bukkit.event.world.AsyncStructureSpawnEvent. */
export const OnAsyncStructureSpawnEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnAsyncStructureSpawnEvent', "org.bukkit.event.world.AsyncStructureSpawnEvent");
/** Handles org.bukkit.event.world.ChunkLoadEvent. */
export const OnChunkLoadEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnChunkLoadEvent', "org.bukkit.event.world.ChunkLoadEvent");
/** Handles org.bukkit.event.world.ChunkPopulateEvent. */
export const OnChunkPopulateEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnChunkPopulateEvent', "org.bukkit.event.world.ChunkPopulateEvent");
/** Handles org.bukkit.event.world.ChunkUnloadEvent. */
export const OnChunkUnloadEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnChunkUnloadEvent', "org.bukkit.event.world.ChunkUnloadEvent");
/** Handles org.bukkit.event.world.EntitiesLoadEvent. */
export const OnEntitiesLoadEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntitiesLoadEvent', "org.bukkit.event.world.EntitiesLoadEvent");
/** Handles org.bukkit.event.world.EntitiesUnloadEvent. */
export const OnEntitiesUnloadEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnEntitiesUnloadEvent', "org.bukkit.event.world.EntitiesUnloadEvent");
/** Handles org.bukkit.event.world.GenericGameEvent. */
export const OnGenericGameEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnGenericGameEvent', "org.bukkit.event.world.GenericGameEvent");
/** Handles org.bukkit.event.world.LootGenerateEvent. */
export const OnLootGenerateEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnLootGenerateEvent', "org.bukkit.event.world.LootGenerateEvent");
/** Handles org.bukkit.event.world.PortalCreateEvent. */
export const OnPortalCreateEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPortalCreateEvent', "org.bukkit.event.world.PortalCreateEvent");
/** Handles org.bukkit.event.world.SpawnChangeEvent. */
export const OnSpawnChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnSpawnChangeEvent', "org.bukkit.event.world.SpawnChangeEvent");
/** Handles org.bukkit.event.world.StructureGrowEvent. */
export const OnStructureGrowEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnStructureGrowEvent', "org.bukkit.event.world.StructureGrowEvent");
/** Handles org.bukkit.event.world.TimeSkipEvent. */
export const OnTimeSkipEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnTimeSkipEvent', "org.bukkit.event.world.TimeSkipEvent");
/** Handles org.bukkit.event.world.WorldInitEvent. */
export const OnWorldInitEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnWorldInitEvent', "org.bukkit.event.world.WorldInitEvent");
/** Handles org.bukkit.event.world.WorldLoadEvent. */
export const OnWorldLoadEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnWorldLoadEvent', "org.bukkit.event.world.WorldLoadEvent");
/** Handles org.bukkit.event.world.WorldSaveEvent. */
export const OnWorldSaveEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnWorldSaveEvent', "org.bukkit.event.world.WorldSaveEvent");
/** Handles org.bukkit.event.world.WorldUnloadEvent. */
export const OnWorldUnloadEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnWorldUnloadEvent', "org.bukkit.event.world.WorldUnloadEvent");
