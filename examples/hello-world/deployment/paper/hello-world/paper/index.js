var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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

// src/paper.ts
var paper_exports = {};
__export(paper_exports, {
  HelloWorldPlugin: () => HelloWorldPlugin,
  default: () => paper_default
});

// ../../packages/decorators/src/index.ts
var SHAMOO_DECLARATIONS = /* @__PURE__ */ Symbol.for("shamoo.decorator.declarations");
var symbolWithMetadata = Symbol;
var STANDARD_METADATA = symbolWithMetadata.metadata ?? /* @__PURE__ */ Symbol.for("Symbol.metadata");
if (symbolWithMetadata.metadata === void 0) {
  Object.defineProperty(symbolWithMetadata, "metadata", {
    value: STANDARD_METADATA
  });
}
var runtimeDeclarations = /* @__PURE__ */ new WeakMap();
var repeatableDeclarations = /* @__PURE__ */ new Set([
  "Requires",
  "Validate",
  "Scheduled",
  "UseInterceptors",
  "UseGuards",
  "UsePipes",
  "Catch"
]);
var conflictGroups = [
  ["Plugin", "Module", "Component", "Injectable", "Service"],
  ["OnLoad", "OnEnable", "OnReady", "OnDrain", "OnDisable", "OnUnload"],
  ["EventHandler", "Command", "Subcommand", "Scheduled", "Interval", "Timeout"],
  ["Inject", "ConfigValue", "Argument", "Option", "Sender", "Context"]
];
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
var Plugin = namedClass("Plugin");
var Module = namedClass("Module");
var Component = namedClass("Component");
var Injectable = namedClass("Injectable");
var Optional = member("Optional");
var InjectAll = member("InjectAll");
var Lazy = member("Lazy");
var Named = member("Named");
var Qualifier = member("Qualifier");
var ConfigValue = member("ConfigValue");
var Context = member("Context");
var OnLoad = method("OnLoad");
var OnEnable = method("OnEnable");
var OnReady = method("OnReady");
var OnDrain = method("OnDrain");
var OnDisable = method("OnDisable");
var OnUnload = method("OnUnload");
var EventHandler = method("EventHandler");
var Command = method("Command");
var Subcommand = method("Subcommand");
var Argument = member("Argument");
var Option = member("Option");
var Sender = member("Sender");
var Scheduled = method("Scheduled");
var Interval = method("Interval");
var Timeout = method("Timeout");

// src/plugin.ts
var HelloWorldPlugin = class {
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

// ../../packages/di/src/types.ts
function createToken(description) {
  const normalized = description.trim();
  if (normalized.length === 0) throw new TypeError("Token description must not be empty.");
  return Object.freeze({ description: normalized });
}

// ../../packages/paper/src/index.ts
function definePaperEntrypoint(entrypoint) {
  return Object.freeze(entrypoint);
}
var PAPER_VELOCITY_MESSAGE_BRIDGE = createToken(
  "ShamooRuntime Paper Velocity message bridge"
);
var PAPER_VELOCITY_TRANSPORT = createToken(
  "Paper Velocity request transport"
);

// src/paper.ts
var paper_default = definePaperEntrypoint({
  enable() {
    console.info("[hello-world] Paper entrypoint enabled.");
  },
  disable() {
    console.info("[hello-world] Paper entrypoint disabled.");
  }
});

// ../../packages/bundler/dist/runtime-adapter.js
var PLATFORM_BINDING_PROTOCOL_MAJOR = 1;
var PLATFORM_BINDING_PROTOCOL_MINOR = 0;
var callbackMarker = (name) => ({ $callback: name });
function runtimeHost() {
  const value = Reflect.get(globalThis, "host");
  if (value === void 0) return void 0;
  if (value === null || typeof value !== "object")
    throw new TypeError("Runtime host must be an object.");
  const registerCallback = Reflect.get(value, "registerCallback");
  if (typeof registerCallback !== "function")
    throw new TypeError("Runtime host must provide registerCallback.");
  return value;
}
function operation(host, name) {
  const value = Reflect.get(host, name);
  if (typeof value !== "function")
    throw new TypeError(`Runtime host operation is unavailable: ${name}`);
  return value.bind(host);
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
function paperCommandContext(host, metadata, value) {
  const raw = commandRecord(value, "context");
  commandKeys(raw, ["token", "sender", "alias", "arguments"], "context");
  const token = commandString(raw.token, "token");
  const rawSender = commandRecord(raw.sender, "sender");
  const senderKeys = Object.hasOwn(rawSender, "id") ? ["name", "kind", "id"] : ["name", "kind"];
  commandKeys(rawSender, senderKeys, "sender");
  const kind = rawSender.kind;
  if (kind !== "player" && kind !== "other")
    throw new TypeError("Invalid Paper command sender kind.");
  const name = commandString(rawSender.name, "sender name");
  const sender = Object.hasOwn(rawSender, "id") ? Object.freeze({ name, kind, id: commandString(rawSender.id, "sender id") }) : Object.freeze({ name, kind });
  if (!Array.isArray(raw.arguments) || !raw.arguments.every((argument) => typeof argument === "string"))
    throw new TypeError("Invalid Paper command arguments.");
  const arguments_ = Object.freeze([...raw.arguments]);
  return Object.freeze({
    sender,
    alias: commandString(raw.alias, "alias"),
    arguments: arguments_,
    reply: (message) => commandBoolean(
      operation(host, "paperCommandReply")(metadata, token, message),
      "reply result"
    ),
    findPlayer: (playerName) => commandPlayer(operation(host, "paperCommandFindPlayer")(metadata, token, playerName)),
    mainHand: () => commandItem(operation(host, "paperCommandMainHand")(metadata, token)),
    takeMainHand: (material, amount) => commandBoolean(
      operation(host, "paperCommandTakeMainHand")(metadata, token, material, amount),
      "take-main-hand result"
    )
  });
}
function executable(component, exports) {
  const constructor = exports[component.name];
  if (typeof constructor !== "function") return void 0;
  if (component.constructor.length > 0)
    throw new TypeError(
      `Runtime adapter cannot construct ${component.id} without generated providers.`
    );
  return Reflect.construct(constructor, []);
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
    ].includes(item.name) || item.name.startsWith("On") && item.name.endsWith("Event")
  );
}
function firstString(method2, fallback) {
  const value = decorator(method2)?.arguments[0];
  return typeof value === "string" ? value : fallback;
}
function installRuntimeAdapter(manifest, platform, exports) {
  const host = runtimeHost();
  const instances = /* @__PURE__ */ new Map();
  const lifecycle2 = /* @__PURE__ */ new Map();
  const callbacks = /* @__PURE__ */ new Set();
  const register = (name, callback) => {
    if (host === void 0) return name;
    if (callbacks.has(name)) return name;
    host.registerCallback(name, callback);
    callbacks.add(name);
    return name;
  };
  const call = (name, metadata, ...arguments_) => host === void 0 ? void 0 : operation(host, name)(
    {
      ...metadata,
      namespace: platform,
      typeName: name,
      protocolMajor: PLATFORM_BINDING_PROTOCOL_MAJOR,
      protocolMinor: PLATFORM_BINDING_PROTOCOL_MINOR
    },
    ...arguments_
  );
  for (const component of manifest.components) {
    if (component.platform !== "common" && component.platform !== platform) continue;
    const target = executable(component, exports);
    if (target === void 0) continue;
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
      const metadata = {
        componentId: component.id,
        method: method2.name,
        decorators: method2.decorators
      };
      const commandInvoke = (...values) => {
        if (values.length !== 1) throw new TypeError("Invalid Paper command callback arguments.");
        if (host === void 0) throw new TypeError("Runtime host is unavailable.");
        return invoke(paperCommandContext(host, metadata, values[0]));
      };
      const callback = register(
        `compiled.${component.id}.${method2.name}`,
        platform === "paper" && method2.invocation === "command" && host !== void 0 ? commandInvoke : invoke
      );
      const declaration2 = decorator(method2);
      if (method2.invocation === "event") {
        const event = declaration2?.name.startsWith("On") === true && declaration2.name.endsWith("Event") ? declaration2.name.slice(2) : firstString(method2, method2.name);
        if (platform === "paper")
          call("paperSubscribeEvent", metadata, event, "NORMAL", false, callbackMarker(callback));
        else call("velocitySubscribeEvent", metadata, event, 0, callbackMarker(callback));
      } else if (method2.invocation === "command") {
        const command = firstString(method2, method2.name);
        if (platform === "paper")
          call("paperRegisterCommand", metadata, command, [], callbackMarker(callback));
        else call("velocityRegisterCommand", metadata, command, [], callbackMarker(callback));
      } else if (method2.invocation === "task") {
        if (platform === "paper") call("paperScheduleGlobal", metadata, callbackMarker(callback));
        else call("velocitySchedule", metadata, 0, callbackMarker(callback));
      } else if (platform === "paper") {
        call("paperSubscribePacket", metadata, callbackMarker(callback));
      }
    }
  }
  if (host !== void 0) {
    for (const service of manifest.communication?.services ?? []) {
      const target = instances.get(service.componentId);
      if (target === void 0) continue;
      const callback = register(`service.${service.id}`, (operationName, values) => {
        if (typeof operationName !== "string" || !Array.isArray(values) || !service.methods.includes(operationName))
          throw new TypeError(`Invalid service operation for ${service.id}.`);
        const method2 = Reflect.get(target, operationName);
        if (typeof method2 !== "function")
          throw new TypeError(`Missing service method ${operationName}.`);
        return Reflect.apply(method2, target, values);
      });
      operation(host, "shamooProvideService")(service.id, service.version, callback);
    }
  }
  const defaultExport = exports.default;
  const entrypoint = defaultExport !== null && typeof defaultExport === "object" ? defaultExport : exports;
  const aliases = {
    load: ["load", "onLoad"],
    enable: platform === "velocity" ? ["start", "enable", "onEnable"] : ["enable", "onEnable"],
    ready: ["ready", "onReady"],
    drain: ["drain", "onDrain"],
    disable: platform === "velocity" ? ["stop", "disable", "onDisable"] : ["disable", "onDisable"],
    unload: ["unload", "onUnload"]
  };
  return Object.freeze(
    Object.fromEntries(
      Object.entries(aliases).map(([stage, names]) => [
        stage,
        async () => {
          const hook = names.map((name) => entrypoint[name]).find((value) => typeof value === "function");
          if (typeof hook === "function") await Reflect.apply(hook, defaultExport ?? exports, []);
          for (const method2 of lifecycle2.get(stage) ?? []) await method2();
        }
      ])
    )
  );
}

// shamoo-runtime:runtime-entry
var lifecycle = installRuntimeAdapter({ "formatVersion": 2, "compilerVersion": "0.1.0-rc.1", "packageName": "@shamoo-examples/hello-world", "components": [{ "id": "src/plugin.ts#HelloWorldPlugin", "kind": "plugin", "name": "HelloWorldPlugin", "file": "src/plugin.ts", "platform": "common", "decorators": [{ "name": "Plugin", "arguments": [{ "name": "hello-world" }], "location": { "file": "src/plugin.ts", "line": 3, "column": 1 } }], "constructor": [], "properties": [], "methods": [{ "name": "enabled", "lifecycle": "enable", "decorators": [{ "name": "OnEnable", "arguments": [], "location": { "file": "src/plugin.ts", "line": 7, "column": 3 } }], "parameters": [], "location": { "file": "src/plugin.ts", "line": 7, "column": 3 } }, { "name": "disabled", "lifecycle": "disable", "decorators": [{ "name": "OnDisable", "arguments": [], "location": { "file": "src/plugin.ts", "line": 13, "column": 3 } }], "parameters": [], "location": { "file": "src/plugin.ts", "line": 13, "column": 3 } }], "location": { "file": "src/plugin.ts", "line": 3, "column": 1 } }], "modules": [], "communication": { "services": [], "events": [], "consumers": [] }, "permissions": { "builtins": [], "filesystem": { "read": [], "write": [] } }, "entrypoints": { "paper": { "source": "src/paper.ts", "output": "paper/index.js" } } }, "paper", paper_exports);
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
