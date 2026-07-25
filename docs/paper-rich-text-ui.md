# Paper rich text and UI

`@shamoo/paper` represents text, items, and inventories as strict data-only descriptors. The runtime
validates these values and creates native Adventure and Paper objects on the JVM side. Plugin code
does not receive or retain native objects.

## Text values

`TextLike` accepts a plain `string` or the result of `text`, `miniMessage`, or `legacyText`.

### Component text

`text(content, options)` creates a component descriptor without parsing markup.

| Option          | Type                    | Meaning                                          |
| --------------- | ----------------------- | ------------------------------------------------ |
| `color`         | `string`                | Adventure named color or `#rrggbb` RGB color.    |
| `font`          | `string`                | Adventure namespaced font key.                   |
| `bold`          | `boolean`               | Explicit bold decoration state.                  |
| `italic`        | `boolean`               | Explicit italic decoration state.                |
| `underlined`    | `boolean`               | Explicit underline decoration state.             |
| `strikethrough` | `boolean`               | Explicit strikethrough decoration state.         |
| `obfuscated`    | `boolean`               | Explicit obfuscated decoration state.            |
| `insertion`     | `string`                | Text inserted by the client on shift-click.      |
| `children`      | `readonly TextLike[]`   | Components appended in order.                    |
| `click`         | `ClickActionDescriptor` | Client click event or a bounded server callback. |

Supported value click actions are `open-url`, `run-command`, `suggest-command`, and
`copy-to-clipboard` with a nonblank string `value` of at most 32,767 UTF-16 code units, plus
`change-page` with an exact signed 32-bit integer value.

```ts
await context.reply(
  text('Documentation', {
    color: 'aqua',
    underlined: true,
    click: { action: 'open-url', value: 'https://docs.papermc.io/adventure/minimessage/' },
  }),
);
```

### Bounded callbacks

A `callback` click runs TypeScript with a fresh `PaperActionContext` for the clicking audience:

```ts
await context.reply(
  text('Click twice within a minute', {
    click: {
      action: 'callback',
      uses: 2,
      lifetimeSeconds: 60,
      callback: async (action) => {
        const replied = await action.reply('Callback received.');
        return replied;
      },
    },
  }),
);
```

`uses` defaults to `1` and must be from `1` through `1000`. `lifetimeSeconds` defaults to `600` and
must be from `1` through `3600`. Adventure invalidates the callback after either bound is exhausted.
The action context contains immutable `sender` data, `action: 'click'`, and asynchronous `reply`. It
has its own callback-scoped token; await the reply before the callback promise settles. Retaining the
context does not extend its lifetime.

### MiniMessage

`miniMessage(content, options)` deserializes a trusted MiniMessage template for the current audience.
See Paper's [MiniMessage documentation](https://docs.papermc.io/adventure/minimessage/) for format
syntax.

Never interpolate untrusted text into `content`. Pass it through `placeholders`:

```ts
const displayName = '<click:run_command:/op @s>not markup</click>';

await context.reply(
  miniMessage('<gold>Hello <player>!</gold>', {
    placeholders: { player: displayName },
  }),
);
```

String placeholders use Adventure's unparsed placeholder resolver, so tags in a string value remain
literal text. A non-string `TextLike` placeholder is rendered as a component placeholder, allowing
intentional formatting without reparsing its content as MiniMessage.

Set `miniPlaceholders: true` to opt into audience and global tags from
[MiniPlaceholders](https://github.com/MiniPlaceholders/MiniPlaceholders):

```ts
miniMessage('<gray>Server: <server_name></gray>', { miniPlaceholders: true });
```

The integration is optional. When the plugin is not installed or its resolver cannot be loaded,
Shamoo renders with the explicit placeholders only and does not fail. It is disabled unless the
boolean is exactly `true`; merely installing MiniPlaceholders does not enable its tags. Treat enabled
third-party tags as part of the trusted template surface.

### Legacy translation

`legacyText(content, character = '&')` translates legacy color and decoration codes into an Adventure
component with `LegacyComponentSerializer`. The only accepted control characters are `&` and the
section-sign character (`'\u00a7'`).

```ts
legacyText('&6Gold &lheading');
legacyText('\u00a7aImported section-sign text', '\u00a7');
```

Legacy text is provided for migration and existing configuration values. Prefer `text` for explicit
component styling or MiniMessage for new markup; legacy translation does not make interpolated input
safe or add MiniMessage features.

## Command context

`PaperCommandContext` extends the data-only command `Context` with bounded asynchronous host
operations. ShamooRuntime marshals them to the owning Paper or Folia scheduler and returns a promise;
always await the result before the command or action callback finishes.

| Method                           | Promise result               | Behavior                                                                      |
| -------------------------------- | ---------------------------- | ----------------------------------------------------------------------------- |
| `reply(message)`                 | `boolean`                    | Renders a `TextLike` value to the active command sender.                      |
| `openInventory(descriptor)`      | `boolean`                    | Opens a script-created inventory; requires an active player command.          |
| `giveItem(descriptor)`           | `boolean`                    | Adds a script-created item; requires an active player command.                |
| `findPlayer(name)`               | `PaperCommandPlayer \| null` | Returns exact online or cached player data, otherwise `null`.                 |
| `mainHand()`                     | `PaperCommandItem \| null`   | Returns the active player's non-air material and amount, otherwise `null`.    |
| `takeMainHand(material, amount)` | `boolean`                    | Atomically removes the whole stack only when material and amount still match. |

Use `sender: 'player'` on commands that call `openInventory`, `giveItem`, `mainHand`, or
`takeMainHand`. `takeMainHand` is compare-and-remove, not a partial stack decrement; preflight all
ledger or capacity checks before removing an item. The economy example uses this ordering to avoid
crediting a failed or raced sale.

## Items

`item(material, options)` constructs an immutable item descriptor.

| Option    | Type                   | Default | Meaning                                                       |
| --------- | ---------------------- | ------- | ------------------------------------------------------------- |
| `amount`  | `number`               | `1`     | Positive integer; the Paper runtime accepts `1` through `99`. |
| `name`    | `TextLike`             | none    | Rendered Adventure display name.                              |
| `lore`    | `readonly TextLike[]`  | `[]`    | Rendered lore lines; the runtime accepts at most 256.         |
| `actions` | `ItemActionDescriptor` | none    | Optional left/right callbacks and event prevention.           |

The material is normalized by Paper and must be a valid non-air item material. The host also rejects
metadata a material cannot accept.

Item actions use one object, not an action array:

```ts
const token = item('EMERALD', {
  name: miniMessage('<green>Interactive token</green>'),
  lore: [legacyText('&7Try both mouse buttons.')],
  actions: {
    left: async (action) => {
      const replied = await action.reply('Left click.');
      return replied;
    },
    right: async (action) => {
      const replied = await action.reply(`Right click with ${action.item?.material ?? 'an item'}.`);
      return replied;
    },
    preventDefault: true,
  },
});

await context.giveItem(token);
```

`left` and `right` receive a fresh `PaperActionContext`. Item actions report `action`, immutable
`sender`, `item`, and, for inventory actions, `slot`. `preventDefault` defaults to `true`; set it to
`false` only when the underlying inventory or interaction behavior should continue. A granted
actionable item carries an opaque runtime ID in its persistent data. The ID grants no native object
access.

Unlike text click callbacks, item actions do not have per-action `uses` or `lifetimeSeconds` options.
They remain registered while their plugin-owned resource is active. They become inert when that
resource or plugin closes, even if the item stack remains in a player's inventory.

## Inventories

`inventory(rows, title, options)` creates a chest-style inventory descriptor. `rows` must be an
integer from `1` through `6`. Slots are zero-based, must be within `0..rows * 9 - 1`, and cannot be
duplicated.

```ts
await context.openInventory(
  inventory(1, miniMessage('<gold>Menu</gold>'), {
    slots: [{ slot: 4, item: token }],
  }),
);
```

Inventories are protected by default (`protected: true`). While a protected inventory is open, the
runtime cancels inventory clicks and drags so players cannot move its contents or transfer other
items through the view. For an unprotected inventory, an item action still cancels its triggering
event when that action's `preventDefault` is true. Set `protected: false` only for a UI intentionally
designed around native item movement.

Inventory callbacks are attached only to declared top-inventory slots. Closing the plugin-owned
inventory registration closes its viewers and disables its actions.

## Data and lifecycle guarantees

The builders are side-effect-free and freeze their returned descriptors and owned arrays. They reject
item amounts outside `1..99`, lore beyond 256 lines, duplicate or out-of-range inventory slots, blank
MiniMessage placeholder keys, and non-integer or out-of-range callback bounds. Material existence,
air/material suitability, display-name metadata compatibility, colors, fonts, and other
server-specific properties remain JVM validation. Host effects occur only through an active context
method. The TypeScript adapter serializes plain data and fresh explicit callback markers for every
function occurrence; it rejects unsupported prototypes, symbol keys, `undefined`, non-finite numbers,
cycles, and descriptor nesting beyond 32 levels. The Paper host then validates exact keys, types, and
server-specific properties before creating native objects.

Descriptor encoding is transactional. The adapter validates the complete graph before callback
registration and unregisters every callback created by an operation if registration or synchronous
host acceptance fails. Once the host accepts the descriptor, its Java-owned resource controls
callback cleanup.

Command and action contexts contain copied, frozen sender/item/value data. Their opaque host tokens
are deliberately hidden and valid only until the corresponding callback promise settles. After
expiry, asynchronous host operations resolve to `false`/`null` where specified or reject operations
that require an active player. Do not store contexts or expect callbacks to survive plugin unload.

Current descriptors do not expose arbitrary Adventure components, hover events, translatable
components, item metadata/NBT, enchantments, inventory mutation, or dynamic slot updates. Build those
features through future data-only APIs rather than passing native Java values across the boundary.
