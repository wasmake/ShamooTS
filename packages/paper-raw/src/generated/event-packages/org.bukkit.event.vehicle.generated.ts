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
/** Handles org.bukkit.event.vehicle.VehicleBlockCollisionEvent. */
export const OnVehicleBlockCollisionEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVehicleBlockCollisionEvent', "org.bukkit.event.vehicle.VehicleBlockCollisionEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.vehicle.VehicleCreateEvent. */
export const OnVehicleCreateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVehicleCreateEvent', "org.bukkit.event.vehicle.VehicleCreateEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.vehicle.VehicleDamageEvent. */
export const OnVehicleDamageEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVehicleDamageEvent', "org.bukkit.event.vehicle.VehicleDamageEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.vehicle.VehicleDestroyEvent. */
export const OnVehicleDestroyEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVehicleDestroyEvent', "org.bukkit.event.vehicle.VehicleDestroyEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.vehicle.VehicleEnterEvent. */
export const OnVehicleEnterEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVehicleEnterEvent', "org.bukkit.event.vehicle.VehicleEnterEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.vehicle.VehicleEntityCollisionEvent. */
export const OnVehicleEntityCollisionEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVehicleEntityCollisionEvent', "org.bukkit.event.vehicle.VehicleEntityCollisionEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.vehicle.VehicleExitEvent. */
export const OnVehicleExitEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVehicleExitEvent', "org.bukkit.event.vehicle.VehicleExitEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.vehicle.VehicleMoveEvent. */
export const OnVehicleMoveEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVehicleMoveEvent', "org.bukkit.event.vehicle.VehicleMoveEvent", priority, receiveCancelled);
/** Handles org.bukkit.event.vehicle.VehicleUpdateEvent. */
export const OnVehicleUpdateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnVehicleUpdateEvent', "org.bukkit.event.vehicle.VehicleUpdateEvent", priority, receiveCancelled);
