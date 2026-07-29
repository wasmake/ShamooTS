var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator2; i >= 0; i--)
    if (decorator2 = decorators[i])
      result = (kind ? decorator2(target, key, result) : decorator2(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// ../../packages/decorators/src/index.ts
function declarationsForMetadata(metadata) {
  if (!Object.prototype.hasOwnProperty.call(metadata, SHAMOO_DECLARATIONS)) {
    Object.defineProperty(metadata, SHAMOO_DECLARATIONS, {
      configurable: true,
      enumerable: false,
      value: [],
      writable: true
    });
  }
  return metadata[SHAMOO_DECLARATIONS] ?? [];
}
function assertCompatible(declarations, declarationValue) {
  const sameTarget = declarations.filter(
    (item) => item.target === declarationValue.target && item.member === declarationValue.member && item.parameterIndex === declarationValue.parameterIndex
  );
  if (!repeatableDeclarations.has(declarationValue.name) && sameTarget.some((item) => item.name === declarationValue.name)) {
    throw new TypeError(
      `@${declarationValue.name} is duplicated on ${String(declarationValue.member ?? "class")}.`
    );
  }
  const conflict = conflictGroups.find(
    (group) => group.includes(declarationValue.name) && sameTarget.some((item) => group.includes(item.name))
  );
  if (conflict !== void 0) {
    const existing = sameTarget.find((item) => conflict.includes(item.name));
    throw new TypeError(
      `@${declarationValue.name} conflicts with @${existing?.name ?? "unknown"} on ${String(declarationValue.member ?? "class")}.`
    );
  }
}
function declaration(name, targets, args) {
  return (...invocation) => {
    const value = invocation[0];
    const possibleContext = invocation[1];
    const standard = typeof possibleContext === "object" && possibleContext !== null && "kind" in possibleContext;
    const context = standard ? possibleContext : void 0;
    const parameterIndex = typeof invocation[2] === "number" ? invocation[2] : void 0;
    const member2 = context?.name ?? (typeof possibleContext === "string" || typeof possibleContext === "symbol" ? possibleContext : void 0);
    const target = context?.kind === "field" ? "property" : parameterIndex !== void 0 ? "parameter" : context?.kind ?? (member2 === void 0 ? "class" : invocation.length >= 3 ? "method" : "property");
    if (!targets.includes(target)) {
      throw new TypeError(`@${name} cannot decorate a ${target}.`);
    }
    const declarationValue = Object.freeze({
      name,
      target,
      arguments: args,
      ...member2 === void 0 ? {} : { member: member2 },
      ...parameterIndex === void 0 ? {} : { parameterIndex }
    });
    const owner = standard ? typeof value === "function" ? value : void 0 : typeof value === "function" ? value : value.constructor;
    const declarations = context?.metadata === void 0 ? runtimeDeclarations.get(owner) ?? [] : declarationsForMetadata(context.metadata);
    assertCompatible(declarations, declarationValue);
    declarations.push(declarationValue);
    if (owner !== void 0 && (!standard || target === "class")) {
      runtimeDeclarations.set(owner, declarations);
    }
  };
}
function namedClass(name) {
  return (options = {}) => declaration(name, ["class"], [options]);
}
function method(name) {
  return (...args) => declaration(name, ["method"], args);
}
function member(name) {
  return (...args) => declaration(name, ["parameter", "property"], args);
}
var SHAMOO_DECLARATIONS, symbolWithMetadata, STANDARD_METADATA, runtimeDeclarations, repeatableDeclarations, conflictGroups, Plugin, Module, Component, Injectable, Optional, InjectAll, Lazy, Named, Qualifier, ConfigValue, Context, OnLoad, OnEnable, OnReady, OnDrain, OnDisable, OnUnload, EventHandler, Command, Subcommand, Argument, Option, Sender, Scheduled, Interval, Timeout;
var init_src = __esm({
  "../../packages/decorators/src/index.ts"() {
    "use strict";
    SHAMOO_DECLARATIONS = /* @__PURE__ */ Symbol.for("shamoo.decorator.declarations");
    symbolWithMetadata = Symbol;
    STANDARD_METADATA = symbolWithMetadata.metadata ?? /* @__PURE__ */ Symbol.for("Symbol.metadata");
    if (symbolWithMetadata.metadata === void 0) {
      Object.defineProperty(symbolWithMetadata, "metadata", {
        value: STANDARD_METADATA
      });
    }
    runtimeDeclarations = /* @__PURE__ */ new WeakMap();
    repeatableDeclarations = /* @__PURE__ */ new Set([
      "Requires",
      "Validate",
      "UseInterceptors",
      "UseGuards",
      "UsePipes",
      "Catch"
    ]);
    conflictGroups = [
      ["Plugin", "Module", "Component", "Injectable", "Service"],
      ["OnLoad", "OnEnable", "OnReady", "OnDrain", "OnDisable", "OnUnload"],
      ["EventHandler", "Command", "Subcommand", "Scheduled", "Interval", "Timeout"],
      ["Inject", "ConfigValue", "Argument", "Option", "Sender", "Context"]
    ];
    Plugin = namedClass("Plugin");
    Module = namedClass("Module");
    Component = namedClass("Component");
    Injectable = namedClass("Injectable");
    Optional = member("Optional");
    InjectAll = member("InjectAll");
    Lazy = member("Lazy");
    Named = member("Named");
    Qualifier = member("Qualifier");
    ConfigValue = member("ConfigValue");
    Context = member("Context");
    OnLoad = method("OnLoad");
    OnEnable = method("OnEnable");
    OnReady = method("OnReady");
    OnDrain = method("OnDrain");
    OnDisable = method("OnDisable");
    OnUnload = method("OnUnload");
    EventHandler = method("EventHandler");
    Command = method("Command");
    Subcommand = method("Subcommand");
    Argument = member("Argument");
    Option = member("Option");
    Sender = member("Sender");
    Scheduled = method("Scheduled");
    Interval = method("Interval");
    Timeout = method("Timeout");
  }
});

// src/plugin.ts
var HelloWorldPlugin;
var init_plugin = __esm({
  "src/plugin.ts"() {
    "use strict";
    init_src();
    HelloWorldPlugin = class {
      enabledAt;
      enabled() {
        this.enabledAt = Date.now();
        console.info("[hello-world] Hello from a compiler-discovered Shamoo plugin.");
      }
      disabled() {
        const elapsed = this.enabledAt === void 0 ? 0 : Date.now() - this.enabledAt;
        console.info(`[hello-world] Goodbye after ${String(elapsed)}ms.`);
      }
    };
    __decorateClass([
      OnEnable()
    ], HelloWorldPlugin.prototype, "enabled", 1);
    __decorateClass([
      OnDisable()
    ], HelloWorldPlugin.prototype, "disabled", 1);
    HelloWorldPlugin = __decorateClass([
      Plugin({ name: "hello-world" })
    ], HelloWorldPlugin);
  }
});

// src/ready.ts
var ReadyMessageComponent;
var init_ready = __esm({
  "src/ready.ts"() {
    "use strict";
    init_src();
    ReadyMessageComponent = class {
      ready() {
        console.info("[hello-world] All discovered components are ready.");
      }
    };
    __decorateClass([
      OnReady()
    ], ReadyMessageComponent.prototype, "ready", 1);
    ReadyMessageComponent = __decorateClass([
      Component()
    ], ReadyMessageComponent);
  }
});

// src/paper.ts
var init_paper = __esm({
  "src/paper.ts"() {
    "use strict";
    init_plugin();
    init_ready();
  }
});

// shamoo-platform:paper
var paper_exports = {};
__export(paper_exports, {
  components: () => components
});
var components;
var init_paper2 = __esm({
  "shamoo-platform:paper"() {
    init_paper();
    init_plugin();
    init_ready();
    components = Object.freeze({ "src/plugin.ts#HelloWorldPlugin": HelloWorldPlugin, "src/ready.ts#ReadyMessageComponent": ReadyMessageComponent });
  }
});

// ../../packages/bundler/dist/runtime-adapter.js
var callbackMarker = (name) => ({ $callback: name });
var callbackEncoder = new TextEncoder();
var paperCallbackHook = /* @__PURE__ */ Symbol.for("shamoo.paper.callback");
function callbackId(componentId, method2) {
  const encoded = [...callbackEncoder.encode(`${componentId}\0${method2}`)].map((value) => value.toString(16).padStart(2, "0")).join("");
  return `compiled.${encoded}`;
}
function runtimeHost() {
  const value = Reflect.get(globalThis, "host");
  if (value === void 0) return void 0;
  if (value === null || typeof value !== "object")
    throw new TypeError("Runtime host must be an object.");
  const registerCallback = Reflect.get(value, "registerCallback");
  if (typeof registerCallback !== "function")
    throw new TypeError("Runtime host must provide registerCallback.");
  const unregisterCallback = Reflect.get(value, "unregisterCallback");
  if (typeof unregisterCallback !== "function")
    throw new TypeError("Runtime host must provide unregisterCallback.");
  return value;
}
function operation(host, name) {
  const value = Reflect.get(host, name);
  if (typeof value !== "function")
    throw new TypeError(`Runtime host operation is unavailable: ${name}`);
  return value.bind(host);
}
function operationMetadata(platform, typeName, component, method2) {
  return {
    namespace: platform,
    typeName,
    protocolMajor: 1,
    protocolMinor: 0,
    componentId: component.id,
    method: method2.name,
    decorators: method2.decorators
  };
}
function call(host, platform, component, method2, name, ...arguments_) {
  return operation(host, name)(operationMetadata(platform, name, component, method2), ...arguments_);
}
function commandRecord(value, label) {
  if (value === null || typeof value !== "object" || Array.isArray(value))
    throw new TypeError(`Invalid Paper command ${label}.`);
  return value;
}
function commandKeys(value, expected, label) {
  const keys = Reflect.ownKeys(value);
  if (keys.length !== expected.length || keys.some((key) => typeof key !== "string" || !expected.includes(key)))
    throw new TypeError(`Invalid Paper command ${label}.`);
}
function commandString(value, label) {
  if (typeof value !== "string") throw new TypeError(`Invalid Paper command ${label}.`);
  return value;
}
function commandBoolean(value, label) {
  if (typeof value !== "boolean") throw new TypeError(`Invalid Paper command ${label}.`);
  return value;
}
function commandPromise(value, label, validate) {
  if (!(value instanceof Promise)) throw new TypeError(`Invalid Paper command ${label} promise.`);
  return value.then(validate);
}
function commandNumber(value, label) {
  if (typeof value !== "number" || !Number.isSafeInteger(value))
    throw new TypeError(`Invalid Paper command ${label}.`);
  return value;
}
function commandData(value, label, depth = 0) {
  if (depth > 32) throw new TypeError(`Invalid Paper command ${label}.`);
  if (value === null || typeof value === "string" || typeof value === "boolean" || typeof value === "number" && Number.isFinite(value))
    return value;
  if (Array.isArray(value))
    return Object.freeze(value.map((item) => commandData(item, label, depth + 1)));
  if (typeof value !== "object" || Reflect.ownKeys(value).some((key) => typeof key !== "string"))
    throw new TypeError(`Invalid Paper command ${label}.`);
  const source = value;
  return Object.freeze(
    Object.fromEntries(
      Object.keys(source).map((key) => [key, commandData(source[key], label, depth + 1)])
    )
  );
}
function commandValues(value, label) {
  const record = commandRecord(value, label);
  return commandData(record, label);
}
function commandSender(value) {
  const rawSender = commandRecord(value, "sender");
  const senderKeys = Object.hasOwn(rawSender, "id") ? ["name", "kind", "id"] : ["name", "kind"];
  commandKeys(rawSender, senderKeys, "sender");
  const kind = rawSender.kind;
  if (kind !== "player" && kind !== "console" && kind !== "other")
    throw new TypeError("Invalid Paper command sender kind.");
  const name = commandString(rawSender.name, "sender name");
  return Object.hasOwn(rawSender, "id") ? Object.freeze({ name, kind, id: commandString(rawSender.id, "sender id") }) : Object.freeze({ name, kind });
}
function commandPlayer(value) {
  if (value === null) return null;
  const player = commandRecord(value, "player result");
  commandKeys(player, ["id", "name", "online"], "player result");
  return Object.freeze({
    id: commandString(player.id, "player id"),
    name: commandString(player.name, "player name"),
    online: commandBoolean(player.online, "player online state")
  });
}
function commandItem(value) {
  if (value === null) return null;
  const item = commandRecord(value, "item result");
  commandKeys(item, ["material", "amount"], "item result");
  if (typeof item.amount !== "number" || !Number.isInteger(item.amount))
    throw new TypeError("Invalid Paper command item amount.");
  return Object.freeze({
    material: commandString(item.material, "item material"),
    amount: item.amount
  });
}
function validateDescriptor(value, depth = 0, ancestors = /* @__PURE__ */ new Set()) {
  if (depth > 32) throw new TypeError("Paper descriptor nesting exceeds 32.");
  if (value === null || typeof value === "string" || typeof value === "boolean" || typeof value === "number" && Number.isFinite(value))
    return value;
  if (typeof value === "function") return value;
  if (typeof value !== "object" || value instanceof Uint8Array)
    throw new TypeError("Unsupported Paper descriptor value.");
  if (ancestors.has(value)) throw new TypeError("Paper descriptors cannot contain cycles.");
  const keys = Reflect.ownKeys(value);
  if (keys.some((key) => typeof key !== "string"))
    throw new TypeError("Paper descriptors require string keys.");
  const nextAncestors = new Set(ancestors);
  nextAncestors.add(value);
  if (Array.isArray(value))
    return value.map((item) => validateDescriptor(item, depth + 1, nextAncestors));
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== Object.prototype && prototype !== null)
    throw new TypeError("Unsupported Paper descriptor object.");
  const record = value;
  return Object.fromEntries(
    keys.map((key) => {
      const item = record[key];
      if (item === void 0) throw new TypeError("Paper descriptors cannot contain undefined.");
      return [key, validateDescriptor(item, depth + 1, nextAncestors)];
    })
  );
}
function rollbackCallbacks(host, names) {
  for (const name of names) {
    try {
      host.unregisterCallback(name);
    } catch {
    }
  }
}
function encodeDescriptor(host, component, method2, callbacks, registered, value) {
  if (typeof value === "function") {
    const name = `${callbackId(component.id, method2.name)}.${String(callbacks.sequence++)}`;
    register(host, name, (...values) => {
      if (values.length !== 1) throw new TypeError("Invalid Paper action callback arguments.");
      return Reflect.apply(value, void 0, [
        paperActionContext(host, component, method2, callbacks, values[0])
      ]);
    });
    registered.push(name);
    return callbackMarker(name);
  }
  if (value === null || typeof value !== "object") return value;
  if (Array.isArray(value)) {
    const entries = value;
    return entries.map(
      (item) => encodeDescriptor(host, component, method2, callbacks, registered, item)
    );
  }
  const record = value;
  return Object.fromEntries(
    Object.entries(record).map(([key, item]) => [
      key,
      encodeDescriptor(host, component, method2, callbacks, registered, item)
    ])
  );
}
function descriptorCommandPromise(host, component, method2, callbacks, value, operation_, label, validate) {
  const descriptor = validateDescriptor(value);
  const registered = [];
  try {
    return commandPromise(
      operation_(encodeDescriptor(host, component, method2, callbacks, registered, descriptor)),
      label,
      validate
    );
  } catch (failure) {
    rollbackCallbacks(host, registered);
    throw failure;
  }
}
function paperActionContext(host, component, method2, callbacks, value) {
  const raw = commandRecord(value, "action context");
  const expected = [
    "token",
    "sender",
    "action",
    ...Object.hasOwn(raw, "slot") ? ["slot"] : [],
    ...Object.hasOwn(raw, "item") ? ["item"] : []
  ];
  commandKeys(raw, expected, "action context");
  const token = commandString(raw.token, "action token");
  const action = raw.action;
  if (action !== "click" && action !== "left" && action !== "right")
    throw new TypeError("Invalid Paper command action.");
  const item = Object.hasOwn(raw, "item") ? commandItem(raw.item) : void 0;
  if (item === null) throw new TypeError("Invalid Paper command action item.");
  return Object.freeze({
    sender: commandSender(raw.sender),
    action,
    ...Object.hasOwn(raw, "slot") ? { slot: commandNumber(raw.slot, "action slot") } : {},
    ...item === void 0 ? {} : { item },
    reply: (message) => descriptorCommandPromise(
      host,
      component,
      method2,
      callbacks,
      message,
      (descriptor) => call(host, "paper", component, method2, "paperCommandReply", token, descriptor),
      "reply result",
      (result) => commandBoolean(result, "reply result")
    )
  });
}
function paperCommandContext(host, component, method2, callbacks, value) {
  const raw = commandRecord(value, "context");
  commandKeys(raw, ["token", "sender", "alias", "input", "arguments", "options"], "context");
  const token = commandString(raw.token, "token");
  return Object.freeze({
    sender: commandSender(raw.sender),
    alias: commandString(raw.alias, "alias"),
    input: commandString(raw.input, "input"),
    arguments: commandValues(raw.arguments, "arguments"),
    options: commandValues(raw.options, "options"),
    reply: (message) => descriptorCommandPromise(
      host,
      component,
      method2,
      callbacks,
      message,
      (descriptor) => call(host, "paper", component, method2, "paperCommandReply", token, descriptor),
      "reply result",
      (result) => commandBoolean(result, "reply result")
    ),
    openInventory: (inventory) => descriptorCommandPromise(
      host,
      component,
      method2,
      callbacks,
      inventory,
      (descriptor) => call(host, "paper", component, method2, "paperCommandOpenInventory", token, descriptor),
      "open-inventory result",
      (result) => commandBoolean(result, "open-inventory result")
    ),
    giveItem: (item) => descriptorCommandPromise(
      host,
      component,
      method2,
      callbacks,
      item,
      (descriptor) => call(host, "paper", component, method2, "paperCommandGiveItem", token, descriptor),
      "give-item result",
      (result) => commandBoolean(result, "give-item result")
    ),
    findPlayer: (playerName) => commandPromise(
      call(host, "paper", component, method2, "paperCommandFindPlayer", token, playerName),
      "find-player result",
      commandPlayer
    ),
    mainHand: () => commandPromise(
      call(host, "paper", component, method2, "paperCommandMainHand", token),
      "main-hand result",
      commandItem
    ),
    takeMainHand: (material, amount) => commandPromise(
      call(host, "paper", component, method2, "paperCommandTakeMainHand", token, material, amount),
      "take-main-hand result",
      (result) => commandBoolean(result, "take-main-hand result")
    )
  });
}
function executable(component, constructors) {
  const constructor = constructors[component.id];
  if (typeof constructor !== "function")
    throw new TypeError(`Compiler component constructor is unavailable: ${component.id}`);
  if (component.constructor.length > 0)
    throw new TypeError(
      `Runtime adapter cannot construct ${component.id} without generated providers.`
    );
  return Reflect.construct(constructor, []);
}
function generatedEventName(decoratorName) {
  return /^On(.+Event(?:_\d+)?)$/.exec(decoratorName)?.[1];
}
function decorator(method2) {
  return method2.decorators.find(
    (item) => [
      "EventHandler",
      "Command",
      "Subcommand",
      "Scheduled",
      "Interval",
      "Timeout",
      "PacketHandler",
      "OnPacketReceive",
      "OnPacketSend"
    ].includes(item.name) || generatedEventName(item.name) !== void 0
  );
}
function eventDecorators(method2) {
  return method2.decorators.filter(
    (item) => item.name === "EventHandler" || generatedEventName(item.name) !== void 0
  );
}
function firstString(method2, fallback) {
  const value = decorator(method2)?.arguments[0];
  return typeof value === "string" ? value : fallback;
}
function metadataRecord(value, label) {
  if (value === null || typeof value !== "object" || Array.isArray(value))
    throw new TypeError(`Invalid command ${label}.`);
  return value;
}
function metadataStrings(value, label) {
  if (!Array.isArray(value) || !value.every((item) => typeof item === "string"))
    throw new TypeError(`Invalid command ${label}.`);
  return [...value];
}
function metadataString(value, fallback, label) {
  if (value === void 0) return fallback;
  if (typeof value !== "string") throw new TypeError(`Invalid command ${label}.`);
  return value;
}
function metadataBoolean(value, fallback, label) {
  if (value === void 0) return fallback;
  if (typeof value !== "boolean") throw new TypeError(`Invalid command ${label}.`);
  return value;
}
var commandParsers = /* @__PURE__ */ new Set(["string", "integer", "number", "boolean", "player", "material"]);
function commandParser(value, fallback) {
  const parser = metadataString(value, fallback, "parser");
  if (!commandParsers.has(parser)) throw new TypeError(`Invalid command parser: ${parser}`);
  return parser;
}
function commandBindings(method2) {
  return method2.parameters.flatMap((parameter) => {
    if (parameter.index === void 0 || parameter.token.kind !== "token" || !("value" in parameter.token))
      return [];
    const value = parameter.token.value;
    if (value === null || typeof value !== "object" || Array.isArray(value)) return [];
    const record = value;
    const binding = record.binding;
    const arguments_ = record.arguments;
    if (binding !== "Argument" && binding !== "Option" && binding !== "Sender" && binding !== "Context" || !Array.isArray(arguments_))
      return [];
    const commandBinding = binding;
    return [{ binding: commandBinding, arguments: arguments_, index: parameter.index }];
  }).sort((left, right) => left.index - right.index);
}
function commandBindingName(binding) {
  const name = binding.arguments[0];
  if (typeof name !== "string" || !/^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(name))
    throw new TypeError(`Invalid @${binding.binding} command binding name.`);
  return name;
}
function commandSuggestions(value, label) {
  const suggestions = metadataStrings(value, label);
  if (suggestions.some((suggestion) => suggestion.trim().length === 0) || new Set(suggestions).size !== suggestions.length)
    throw new TypeError(`Invalid command ${label}: suggestions must be unique and nonblank.`);
  return suggestions;
}
function commandOptionAliases(value, occupied) {
  const aliases = metadataStrings(value, "Option aliases").map(
    (value2) => value2.startsWith("-") ? value2.slice(1) : value2
  );
  for (const alias of aliases) {
    if (!/^[A-Za-z0-9]$/.test(alias))
      throw new TypeError("Invalid command option alias: expected one alphanumeric character.");
    if (occupied.has(alias)) throw new TypeError(`Duplicate command option alias: ${alias}`);
    occupied.add(alias);
  }
  return aliases;
}
function commandParameterDescriptors(method2) {
  const arguments_ = [];
  const options = [];
  const argumentNames = /* @__PURE__ */ new Set();
  const optionNames = /* @__PURE__ */ new Set();
  const optionAliases = /* @__PURE__ */ new Set();
  for (const binding of commandBindings(method2)) {
    if (binding.binding !== "Argument" && binding.binding !== "Option") continue;
    const name = commandBindingName(binding);
    const rawOptions = binding.arguments[1] === void 0 ? {} : metadataRecord(binding.arguments[1], `${binding.binding} options`);
    const suggestions = rawOptions.suggestions === void 0 ? [] : commandSuggestions(rawOptions.suggestions, `${binding.binding} suggestions`);
    if (binding.binding === "Argument") {
      if (argumentNames.has(name)) throw new TypeError(`Duplicate command argument name: ${name}`);
      argumentNames.add(name);
      arguments_.push({ name, parser: commandParser(rawOptions.parser, "string"), suggestions });
    } else {
      if (optionNames.has(name)) throw new TypeError(`Duplicate command option name: ${name}`);
      optionNames.add(name);
      options.push({
        name,
        parser: commandParser(rawOptions.parser, "boolean"),
        aliases: rawOptions.aliases === void 0 ? [] : commandOptionAliases(rawOptions.aliases, optionAliases),
        suggestions,
        required: metadataBoolean(rawOptions.required, false, "Option required state")
      });
    }
  }
  return { arguments: arguments_, options };
}
function commandRoot(value) {
  const root = value.trim().toLowerCase();
  if (!/^[a-z0-9][a-z0-9_-]{0,63}$/.test(root))
    throw new TypeError("Command syntax must begin with a valid literal root.");
  return root;
}
function commandAliases(value) {
  const aliases = metadataStrings(value, "command aliases").map((alias) => {
    const normalized = alias.toLowerCase();
    if (!/^[a-z0-9][a-z0-9_-]{0,63}$/.test(normalized))
      throw new TypeError(`Invalid command alias: ${alias}`);
    return normalized;
  });
  if (new Set(aliases).size !== aliases.length)
    throw new TypeError("Invalid command aliases: aliases must be unique.");
  return aliases;
}
function fullCommandSyntax(value) {
  const match = /^\s*(\S+)(?:\s+([\s\S]*?))?\s*$/.exec(value);
  if (match?.[1] === void 0) throw new TypeError("Command syntax must not be empty.");
  return { root: commandRoot(match[1]), syntax: match[2] ?? "" };
}
function validateCommandSyntax(syntax, arguments_) {
  if (syntax.length === 0) {
    if (arguments_.length > 0)
      throw new TypeError("Command arguments contain names absent from syntax.");
    return;
  }
  const argumentsByName = new Map(arguments_.map((argument) => [argument.name, argument]));
  const used = /* @__PURE__ */ new Set();
  let optional = false;
  const tokens = syntax.split(/\s+/u);
  for (const [index, token] of tokens.entries()) {
    const required = token.startsWith("<") && token.endsWith(">");
    const optionalToken = token.startsWith("[") && token.endsWith("]");
    if (!required && !optionalToken) {
      if (/[<>[\]]/u.test(token))
        throw new TypeError(`Command syntax has malformed token: ${token}`);
      if (optional) throw new TypeError("Command syntax literal follows an optional argument.");
      continue;
    }
    let argumentName = token.slice(1, -1);
    const greedy = argumentName.endsWith("...");
    if (greedy) argumentName = argumentName.slice(0, -3);
    const argument = argumentsByName.get(argumentName);
    if (argument === void 0 || used.has(argumentName))
      throw new TypeError(
        `Command syntax references an unknown or duplicate argument: ${argumentName}`
      );
    used.add(argumentName);
    if (optional && required)
      throw new TypeError("Command syntax required argument follows an optional one.");
    if (greedy && index !== tokens.length - 1)
      throw new TypeError("Command syntax greedy argument must be last.");
    if (greedy && argument.parser !== "string")
      throw new TypeError("Command syntax greedy argument must use string parser.");
    optional ||= optionalToken;
  }
  if (used.size !== argumentsByName.size)
    throw new TypeError("Command arguments contain names absent from syntax.");
}
function commandRoute(method2) {
  const declaration2 = method2.decorators.find(
    (item) => item.name === "Command" || item.name === "Subcommand"
  );
  if (declaration2 === void 0)
    throw new TypeError(`Command declaration is missing for ${method2.name}.`);
  const first = declaration2.arguments[0];
  if (typeof first !== "string") throw new TypeError("Command syntax must be a string.");
  const explicitSubcommand = declaration2.name === "Subcommand" && typeof declaration2.arguments[1] === "string";
  const parsed = explicitSubcommand ? {
    root: commandRoot(first),
    syntax: declaration2.arguments[1].trim()
  } : fullCommandSyntax(first);
  const rawOptions = explicitSubcommand ? declaration2.arguments[2] : declaration2.arguments[1];
  const options = rawOptions === void 0 ? {} : metadataRecord(rawOptions, `${declaration2.name} options`);
  const parameters = commandParameterDescriptors(method2);
  validateCommandSyntax(parsed.syntax, parameters.arguments);
  const sender = metadataString(options.sender, "any", "sender restriction");
  if (sender !== "any" && sender !== "player" && sender !== "console")
    throw new TypeError(`Invalid command sender restriction: ${sender}`);
  return {
    root: parsed.root,
    aliases: options.aliases === void 0 ? [] : commandAliases(options.aliases),
    descriptor: {
      syntax: parsed.syntax,
      description: metadataString(options.description, "", "description"),
      permission: metadataString(options.permission, "", "permission"),
      sender,
      arguments: parameters.arguments,
      options: parameters.options
    }
  };
}
function commandInvocationValues(method2, context) {
  const bindings = commandBindings(method2);
  if (bindings.length === 0) return [context];
  const values = Array.from({ length: (bindings.at(-1)?.index ?? -1) + 1 });
  for (const binding of bindings) {
    if (binding.binding === "Argument")
      values[binding.index] = context.arguments[commandBindingName(binding)];
    else if (binding.binding === "Option")
      values[binding.index] = context.options[commandBindingName(binding)];
    else if (binding.binding === "Sender") values[binding.index] = context.sender;
    else values[binding.index] = context;
  }
  return values;
}
function register(host, name, callback) {
  if (host !== void 0 && !host.registerCallback(name, callback))
    throw new Error(`Runtime rejected callback registration: ${name}`);
  return name;
}
function installRuntimeAdapter(metadata, platform, constructors) {
  const paperRoutes = /* @__PURE__ */ new Map();
  if (platform === "paper") {
    const aliasesByRoot = /* @__PURE__ */ new Map();
    for (const component of metadata.components) {
      if (component.platform !== "common" && component.platform !== platform) continue;
      for (const method2 of component.methods) {
        if (method2.invocation !== "command") continue;
        const route = commandRoute(method2);
        const aliases = aliasesByRoot.get(route.root);
        if (aliases !== void 0 && (aliases.length !== route.aliases.length || aliases.some((alias, index) => alias !== route.aliases[index])))
          throw new TypeError(`Command aliases must agree for shared command root ${route.root}.`);
        aliasesByRoot.set(route.root, route.aliases);
        paperRoutes.set(method2, route);
      }
    }
  }
  const host = runtimeHost();
  const instances = /* @__PURE__ */ new Map();
  const lifecycle2 = /* @__PURE__ */ new Map();
  const registrations = [];
  for (const component of metadata.components) {
    if (component.platform !== "common" && component.platform !== platform) continue;
    const target = executable(component, constructors);
    instances.set(component.id, target);
    for (const method2 of component.methods) {
      const implementation = Reflect.get(target, method2.name);
      if (typeof implementation !== "function")
        throw new TypeError(`Compiler executable is missing: ${component.id}.${method2.name}`);
      const invoke = (...values) => Reflect.apply(implementation, target, values);
      if (method2.lifecycle !== void 0) {
        const methods = lifecycle2.get(method2.lifecycle) ?? [];
        methods.push(() => invoke());
        lifecycle2.set(method2.lifecycle, methods);
      }
      if (method2.invocation === void 0) continue;
      const route = paperRoutes.get(method2);
      const callbackName = callbackId(component.id, method2.name);
      const descriptorCallbacks = { sequence: 0 };
      const commandInvoke = (...values) => {
        if (values.length !== 1) throw new TypeError("Invalid Paper command callback arguments.");
        if (host === void 0) throw new TypeError("Runtime host is unavailable.");
        const context = paperCommandContext(
          host,
          component,
          method2,
          descriptorCallbacks,
          values[0]
        );
        return invoke(...commandInvocationValues(method2, context));
      };
      const eventInvoke = (...values) => {
        const hook = Reflect.get(globalThis, paperCallbackHook);
        return typeof hook === "function" ? Reflect.apply(hook, void 0, [invoke, values]) : invoke(...values);
      };
      const callback = register(
        host,
        callbackName,
        platform === "paper" && method2.invocation === "command" && host !== void 0 ? commandInvoke : platform === "paper" && method2.invocation === "event" ? eventInvoke : invoke
      );
      if (host === void 0) continue;
      try {
        if (method2.invocation === "event") {
          for (const eventDeclaration of eventDecorators(method2)) {
            const generated = generatedEventName(eventDeclaration.name);
            const event = generated ?? (typeof eventDeclaration.arguments[0] === "string" ? eventDeclaration.arguments[0] : method2.name);
            const priorityValue = eventDeclaration.arguments[generated === void 0 ? 1 : 0];
            const receiveCancelledValue = eventDeclaration.arguments[generated === void 0 ? 2 : 1];
            const priority = typeof priorityValue === "string" ? priorityValue : "NORMAL";
            const receiveCancelled = typeof receiveCancelledValue === "boolean" ? receiveCancelledValue : false;
            if (platform === "paper")
              call(
                host,
                platform,
                component,
                method2,
                "paperSubscribeEvent",
                event,
                priority,
                receiveCancelled,
                callbackMarker(callback)
              );
            else
              call(
                host,
                platform,
                component,
                method2,
                "velocitySubscribeEvent",
                event,
                0,
                callbackMarker(callback)
              );
          }
        } else if (method2.invocation === "command") {
          if (platform === "paper") {
            if (route === void 0) throw new TypeError("Paper command route is unavailable.");
            const registration = call(
              host,
              platform,
              component,
              method2,
              "paperRegisterCommand",
              route.root,
              route.aliases,
              route.descriptor,
              callbackMarker(callback)
            );
            if (!(registration instanceof Promise))
              throw new TypeError("Invalid Paper command registration promise.");
            registrations.push(
              registration.catch((failure) => {
                rollbackCallbacks(host, [callback]);
                throw failure;
              })
            );
          } else {
            call(
              host,
              platform,
              component,
              method2,
              "velocityRegisterCommand",
              fullCommandSyntax(firstString(method2, method2.name)).root,
              [],
              callbackMarker(callback)
            );
          }
        } else if (method2.invocation === "task") {
          call(
            host,
            platform,
            component,
            method2,
            platform === "paper" ? "paperScheduleGlobal" : "velocitySchedule",
            ...platform === "paper" ? [callbackMarker(callback)] : [0, callbackMarker(callback)]
          );
        } else if (platform === "paper") {
          call(host, platform, component, method2, "paperSubscribePacket", callbackMarker(callback));
        }
      } catch (failure) {
        rollbackCallbacks(host, [callback]);
        throw failure;
      }
    }
  }
  if (host !== void 0) {
    for (const service of metadata.communication.services) {
      const target = instances.get(service.componentId);
      if (target === void 0) continue;
      const callback = register(host, `service.${service.id}`, (operationName, values) => {
        if (typeof operationName !== "string" || !Array.isArray(values) || !service.methods.includes(operationName))
          throw new TypeError(`Invalid service operation for ${service.id}.`);
        const method2 = Reflect.get(target, operationName);
        if (typeof method2 !== "function")
          throw new TypeError(`Missing service method ${operationName}.`);
        return Reflect.apply(method2, target, values);
      });
      try {
        operation(host, "shamooProvideService")(service.id, service.version, callback);
      } catch (failure) {
        rollbackCallbacks(host, [callback]);
        throw failure;
      }
    }
  }
  const run = async (stage) => {
    await Promise.all(registrations);
    for (const method2 of lifecycle2.get(stage) ?? []) await method2();
  };
  return Object.freeze({
    load: () => run("load"),
    enable: () => run("enable"),
    ready: () => run("ready"),
    drain: () => run("drain"),
    disable: () => run("disable"),
    unload: () => run("unload")
  });
}
function lifecycleContext(value) {
  if (value === null || typeof value !== "object")
    throw new TypeError("Runtime lifecycle context must be an object.");
  const context = value;
  if (typeof context.plugin !== "string" || context.platform !== "paper" && context.platform !== "velocity" || context.metadata === null || typeof context.metadata !== "object")
    throw new TypeError("Runtime lifecycle context is invalid.");
  return {
    plugin: context.plugin,
    platform: context.platform,
    metadata: context.metadata
  };
}
function createRuntimeLifecycle(loaders) {
  let initialized;
  const initialize = (rawContext) => {
    const context = lifecycleContext(rawContext);
    if (initialized !== void 0) {
      if (initialized.plugin !== context.plugin || initialized.platform !== context.platform)
        throw new TypeError("Runtime lifecycle context changed after adapter initialization.");
      return initialized.adapter;
    }
    const loader = loaders[context.platform];
    if (loader === void 0)
      throw new TypeError(`Plugin does not target the ${context.platform} platform.`);
    const adapter = loader().then(
      (registry) => installRuntimeAdapter(context.metadata, context.platform, registry.components)
    );
    initialized = { plugin: context.plugin, platform: context.platform, adapter };
    return adapter;
  };
  const run = async (stage, context) => {
    const installed = await initialize(context);
    await installed[stage](context);
  };
  return Object.freeze({
    load: (context) => run("load", context),
    enable: (context) => run("enable", context),
    ready: (context) => run("ready", context),
    drain: (context) => run("drain", context),
    disable: (context) => run("disable", context),
    unload: (context) => run("unload", context)
  });
}

// shamoo-runtime:runtime-entry
var lifecycle = createRuntimeLifecycle({ paper: () => Promise.resolve().then(() => (init_paper2(), paper_exports)) });
var load = lifecycle.load;
var enable = lifecycle.enable;
var ready = lifecycle.ready;
var drain = lifecycle.drain;
var disable = lifecycle.disable;
var unload = lifecycle.unload;
export {
  disable,
  drain,
  enable,
  load,
  ready,
  unload
};
