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
function paperCommandContext(host, component, method2, value) {
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
      call(host, "paper", component, method2, "paperCommandReply", token, message),
      "reply result"
    ),
    findPlayer: (playerName) => commandPlayer(
      call(host, "paper", component, method2, "paperCommandFindPlayer", token, playerName)
    ),
    mainHand: () => commandItem(call(host, "paper", component, method2, "paperCommandMainHand", token)),
    takeMainHand: (material, amount) => commandBoolean(
      call(host, "paper", component, method2, "paperCommandTakeMainHand", token, material, amount),
      "take-main-hand result"
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
function register(host, name, callback) {
  if (host !== void 0 && !host.registerCallback(name, callback))
    throw new Error(`Runtime rejected callback registration: ${name}`);
  return name;
}
function installRuntimeAdapter(metadata, platform, constructors) {
  const host = runtimeHost();
  const instances = /* @__PURE__ */ new Map();
  const lifecycle2 = /* @__PURE__ */ new Map();
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
      const callbackName = callbackId(component.id, method2.name);
      const commandInvoke = (...values) => {
        if (values.length !== 1) throw new TypeError("Invalid Paper command callback arguments.");
        if (host === void 0) throw new TypeError("Runtime host is unavailable.");
        return invoke(paperCommandContext(host, component, method2, values[0]));
      };
      const callback = register(
        host,
        callbackName,
        platform === "paper" && method2.invocation === "command" && host !== void 0 ? commandInvoke : invoke
      );
      if (host === void 0) continue;
      const declaration2 = decorator(method2);
      if (method2.invocation === "event") {
        const event = declaration2?.name.startsWith("On") === true && declaration2.name.endsWith("Event") ? declaration2.name.slice(2) : firstString(method2, method2.name);
        if (platform === "paper")
          call(
            host,
            platform,
            component,
            method2,
            "paperSubscribeEvent",
            event,
            "NORMAL",
            false,
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
      } else if (method2.invocation === "command") {
        const command = firstString(method2, method2.name);
        call(
          host,
          platform,
          component,
          method2,
          platform === "paper" ? "paperRegisterCommand" : "velocityRegisterCommand",
          command,
          [],
          callbackMarker(callback)
        );
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
      operation(host, "shamooProvideService")(service.id, service.version, callback);
    }
  }
  const run = async (stage) => {
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
