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
/** Handles io.papermc.paper.event.player.AsyncChatCommandDecorateEvent. */
export const OnAsyncChatCommandDecorateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnAsyncChatCommandDecorateEvent', "io.papermc.paper.event.player.AsyncChatCommandDecorateEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.AsyncChatDecorateEvent. */
export const OnAsyncChatDecorateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnAsyncChatDecorateEvent', "io.papermc.paper.event.player.AsyncChatDecorateEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.AsyncChatEvent. */
export const OnAsyncChatEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnAsyncChatEvent', "io.papermc.paper.event.player.AsyncChatEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.CartographyItemEvent. */
export const OnCartographyItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnCartographyItemEvent', "io.papermc.paper.event.player.CartographyItemEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.ChatEvent. */
export const OnChatEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnChatEvent', "io.papermc.paper.event.player.ChatEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerArmSwingEvent. */
export const OnPlayerArmSwingEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerArmSwingEvent', "io.papermc.paper.event.player.PlayerArmSwingEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerBedFailEnterEvent. */
export const OnPlayerBedFailEnterEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBedFailEnterEvent', "io.papermc.paper.event.player.PlayerBedFailEnterEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerChangeBeaconEffectEvent. */
export const OnPlayerChangeBeaconEffectEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChangeBeaconEffectEvent', "io.papermc.paper.event.player.PlayerChangeBeaconEffectEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerClientLoadedWorldEvent. */
export const OnPlayerClientLoadedWorldEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerClientLoadedWorldEvent', "io.papermc.paper.event.player.PlayerClientLoadedWorldEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerDeepSleepEvent. */
export const OnPlayerDeepSleepEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerDeepSleepEvent', "io.papermc.paper.event.player.PlayerDeepSleepEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerFailMoveEvent. */
export const OnPlayerFailMoveEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerFailMoveEvent', "io.papermc.paper.event.player.PlayerFailMoveEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerFlowerPotManipulateEvent. */
export const OnPlayerFlowerPotManipulateEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerFlowerPotManipulateEvent', "io.papermc.paper.event.player.PlayerFlowerPotManipulateEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerInsertLecternBookEvent. */
export const OnPlayerInsertLecternBookEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerInsertLecternBookEvent', "io.papermc.paper.event.player.PlayerInsertLecternBookEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerInventorySlotChangeEvent. */
export const OnPlayerInventorySlotChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerInventorySlotChangeEvent', "io.papermc.paper.event.player.PlayerInventorySlotChangeEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerItemCooldownEvent. */
export const OnPlayerItemCooldownEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemCooldownEvent', "io.papermc.paper.event.player.PlayerItemCooldownEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerItemFrameChangeEvent. */
export const OnPlayerItemFrameChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemFrameChangeEvent', "io.papermc.paper.event.player.PlayerItemFrameChangeEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerItemGroupCooldownEvent. */
export const OnPlayerItemGroupCooldownEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemGroupCooldownEvent', "io.papermc.paper.event.player.PlayerItemGroupCooldownEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerLecternPageChangeEvent. */
export const OnPlayerLecternPageChangeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLecternPageChangeEvent', "io.papermc.paper.event.player.PlayerLecternPageChangeEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerLoomPatternSelectEvent. */
export const OnPlayerLoomPatternSelectEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLoomPatternSelectEvent', "io.papermc.paper.event.player.PlayerLoomPatternSelectEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerMapFilledEvent. */
export const OnPlayerMapFilledEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerMapFilledEvent', "io.papermc.paper.event.player.PlayerMapFilledEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerNameEntityEvent. */
export const OnPlayerNameEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerNameEntityEvent', "io.papermc.paper.event.player.PlayerNameEntityEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerOpenSignEvent. */
export const OnPlayerOpenSignEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerOpenSignEvent', "io.papermc.paper.event.player.PlayerOpenSignEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerPickBlockEvent. */
export const OnPlayerPickBlockEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPickBlockEvent', "io.papermc.paper.event.player.PlayerPickBlockEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerPickEntityEvent. */
export const OnPlayerPickEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPickEntityEvent', "io.papermc.paper.event.player.PlayerPickEntityEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerPurchaseEvent. */
export const OnPlayerPurchaseEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPurchaseEvent', "io.papermc.paper.event.player.PlayerPurchaseEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerServerFullCheckEvent. */
export const OnPlayerServerFullCheckEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerServerFullCheckEvent', "io.papermc.paper.event.player.PlayerServerFullCheckEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerShieldDisableEvent. */
export const OnPlayerShieldDisableEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerShieldDisableEvent', "io.papermc.paper.event.player.PlayerShieldDisableEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerSignCommandPreprocessEvent. */
export const OnPlayerSignCommandPreprocessEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerSignCommandPreprocessEvent', "io.papermc.paper.event.player.PlayerSignCommandPreprocessEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerStonecutterRecipeSelectEvent. */
export const OnPlayerStonecutterRecipeSelectEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerStonecutterRecipeSelectEvent', "io.papermc.paper.event.player.PlayerStonecutterRecipeSelectEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerStopUsingItemEvent. */
export const OnPlayerStopUsingItemEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerStopUsingItemEvent', "io.papermc.paper.event.player.PlayerStopUsingItemEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerTrackEntityEvent. */
export const OnPlayerTrackEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerTrackEntityEvent', "io.papermc.paper.event.player.PlayerTrackEntityEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerTradeEvent. */
export const OnPlayerTradeEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerTradeEvent', "io.papermc.paper.event.player.PlayerTradeEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PlayerUntrackEntityEvent. */
export const OnPlayerUntrackEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPlayerUntrackEntityEvent', "io.papermc.paper.event.player.PlayerUntrackEntityEvent", priority, receiveCancelled);
/** Handles io.papermc.paper.event.player.PrePlayerAttackEntityEvent. */
export const OnPrePlayerAttackEntityEvent = (priority: GeneratedEventPriority = 'NORMAL', receiveCancelled = false): GeneratedEventDecorator => generatedEventDecorator('OnPrePlayerAttackEntityEvent', "io.papermc.paper.event.player.PrePlayerAttackEntityEvent", priority, receiveCancelled);
