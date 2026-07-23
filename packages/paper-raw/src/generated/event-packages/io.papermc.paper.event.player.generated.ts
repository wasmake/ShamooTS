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
/** Handles io.papermc.paper.event.player.AsyncChatCommandDecorateEvent. */
export const OnAsyncChatCommandDecorateEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnAsyncChatCommandDecorateEvent', "io.papermc.paper.event.player.AsyncChatCommandDecorateEvent");
/** Handles io.papermc.paper.event.player.AsyncChatDecorateEvent. */
export const OnAsyncChatDecorateEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnAsyncChatDecorateEvent', "io.papermc.paper.event.player.AsyncChatDecorateEvent");
/** Handles io.papermc.paper.event.player.AsyncChatEvent. */
export const OnAsyncChatEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnAsyncChatEvent', "io.papermc.paper.event.player.AsyncChatEvent");
/** Handles io.papermc.paper.event.player.CartographyItemEvent. */
export const OnCartographyItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnCartographyItemEvent', "io.papermc.paper.event.player.CartographyItemEvent");
/** Handles io.papermc.paper.event.player.ChatEvent. */
export const OnChatEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnChatEvent', "io.papermc.paper.event.player.ChatEvent");
/** Handles io.papermc.paper.event.player.PlayerArmSwingEvent. */
export const OnPlayerArmSwingEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerArmSwingEvent', "io.papermc.paper.event.player.PlayerArmSwingEvent");
/** Handles io.papermc.paper.event.player.PlayerBedFailEnterEvent. */
export const OnPlayerBedFailEnterEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerBedFailEnterEvent', "io.papermc.paper.event.player.PlayerBedFailEnterEvent");
/** Handles io.papermc.paper.event.player.PlayerChangeBeaconEffectEvent. */
export const OnPlayerChangeBeaconEffectEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerChangeBeaconEffectEvent', "io.papermc.paper.event.player.PlayerChangeBeaconEffectEvent");
/** Handles io.papermc.paper.event.player.PlayerClientLoadedWorldEvent. */
export const OnPlayerClientLoadedWorldEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerClientLoadedWorldEvent', "io.papermc.paper.event.player.PlayerClientLoadedWorldEvent");
/** Handles io.papermc.paper.event.player.PlayerDeepSleepEvent. */
export const OnPlayerDeepSleepEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerDeepSleepEvent', "io.papermc.paper.event.player.PlayerDeepSleepEvent");
/** Handles io.papermc.paper.event.player.PlayerFailMoveEvent. */
export const OnPlayerFailMoveEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerFailMoveEvent', "io.papermc.paper.event.player.PlayerFailMoveEvent");
/** Handles io.papermc.paper.event.player.PlayerFlowerPotManipulateEvent. */
export const OnPlayerFlowerPotManipulateEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerFlowerPotManipulateEvent', "io.papermc.paper.event.player.PlayerFlowerPotManipulateEvent");
/** Handles io.papermc.paper.event.player.PlayerInsertLecternBookEvent. */
export const OnPlayerInsertLecternBookEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerInsertLecternBookEvent', "io.papermc.paper.event.player.PlayerInsertLecternBookEvent");
/** Handles io.papermc.paper.event.player.PlayerInventorySlotChangeEvent. */
export const OnPlayerInventorySlotChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerInventorySlotChangeEvent', "io.papermc.paper.event.player.PlayerInventorySlotChangeEvent");
/** Handles io.papermc.paper.event.player.PlayerItemCooldownEvent. */
export const OnPlayerItemCooldownEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemCooldownEvent', "io.papermc.paper.event.player.PlayerItemCooldownEvent");
/** Handles io.papermc.paper.event.player.PlayerItemFrameChangeEvent. */
export const OnPlayerItemFrameChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemFrameChangeEvent', "io.papermc.paper.event.player.PlayerItemFrameChangeEvent");
/** Handles io.papermc.paper.event.player.PlayerItemGroupCooldownEvent. */
export const OnPlayerItemGroupCooldownEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerItemGroupCooldownEvent', "io.papermc.paper.event.player.PlayerItemGroupCooldownEvent");
/** Handles io.papermc.paper.event.player.PlayerLecternPageChangeEvent. */
export const OnPlayerLecternPageChangeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLecternPageChangeEvent', "io.papermc.paper.event.player.PlayerLecternPageChangeEvent");
/** Handles io.papermc.paper.event.player.PlayerLoomPatternSelectEvent. */
export const OnPlayerLoomPatternSelectEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerLoomPatternSelectEvent', "io.papermc.paper.event.player.PlayerLoomPatternSelectEvent");
/** Handles io.papermc.paper.event.player.PlayerMapFilledEvent. */
export const OnPlayerMapFilledEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerMapFilledEvent', "io.papermc.paper.event.player.PlayerMapFilledEvent");
/** Handles io.papermc.paper.event.player.PlayerNameEntityEvent. */
export const OnPlayerNameEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerNameEntityEvent', "io.papermc.paper.event.player.PlayerNameEntityEvent");
/** Handles io.papermc.paper.event.player.PlayerOpenSignEvent. */
export const OnPlayerOpenSignEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerOpenSignEvent', "io.papermc.paper.event.player.PlayerOpenSignEvent");
/** Handles io.papermc.paper.event.player.PlayerPickBlockEvent. */
export const OnPlayerPickBlockEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPickBlockEvent', "io.papermc.paper.event.player.PlayerPickBlockEvent");
/** Handles io.papermc.paper.event.player.PlayerPickEntityEvent. */
export const OnPlayerPickEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPickEntityEvent', "io.papermc.paper.event.player.PlayerPickEntityEvent");
/** Handles io.papermc.paper.event.player.PlayerPurchaseEvent. */
export const OnPlayerPurchaseEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerPurchaseEvent', "io.papermc.paper.event.player.PlayerPurchaseEvent");
/** Handles io.papermc.paper.event.player.PlayerServerFullCheckEvent. */
export const OnPlayerServerFullCheckEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerServerFullCheckEvent', "io.papermc.paper.event.player.PlayerServerFullCheckEvent");
/** Handles io.papermc.paper.event.player.PlayerShieldDisableEvent. */
export const OnPlayerShieldDisableEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerShieldDisableEvent', "io.papermc.paper.event.player.PlayerShieldDisableEvent");
/** Handles io.papermc.paper.event.player.PlayerSignCommandPreprocessEvent. */
export const OnPlayerSignCommandPreprocessEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerSignCommandPreprocessEvent', "io.papermc.paper.event.player.PlayerSignCommandPreprocessEvent");
/** Handles io.papermc.paper.event.player.PlayerStonecutterRecipeSelectEvent. */
export const OnPlayerStonecutterRecipeSelectEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerStonecutterRecipeSelectEvent', "io.papermc.paper.event.player.PlayerStonecutterRecipeSelectEvent");
/** Handles io.papermc.paper.event.player.PlayerStopUsingItemEvent. */
export const OnPlayerStopUsingItemEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerStopUsingItemEvent', "io.papermc.paper.event.player.PlayerStopUsingItemEvent");
/** Handles io.papermc.paper.event.player.PlayerTrackEntityEvent. */
export const OnPlayerTrackEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerTrackEntityEvent', "io.papermc.paper.event.player.PlayerTrackEntityEvent");
/** Handles io.papermc.paper.event.player.PlayerTradeEvent. */
export const OnPlayerTradeEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerTradeEvent', "io.papermc.paper.event.player.PlayerTradeEvent");
/** Handles io.papermc.paper.event.player.PlayerUntrackEntityEvent. */
export const OnPlayerUntrackEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPlayerUntrackEntityEvent', "io.papermc.paper.event.player.PlayerUntrackEntityEvent");
/** Handles io.papermc.paper.event.player.PrePlayerAttackEntityEvent. */
export const OnPrePlayerAttackEntityEvent = (): GeneratedEventDecorator => generatedEventDecorator('OnPrePlayerAttackEntityEvent', "io.papermc.paper.event.player.PrePlayerAttackEntityEvent");
