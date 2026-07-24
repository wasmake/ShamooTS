var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator2; i >= 0; i--)
    if (decorator2 = decorators[i])
      result = (kind ? decorator2(target, key, result) : decorator2(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
var __decorateParam = (index, decorator2) => (target, key) => decorator2(target, key, index);

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/constants.js"(exports, module) {
    "use strict";
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
    9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    var MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
    var RELEASE_TYPES = [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ];
    module.exports = {
      MAX_LENGTH,
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_SAFE_INTEGER,
      RELEASE_TYPES,
      SEMVER_SPEC_VERSION,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2
    };
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/debug.js"(exports, module) {
    "use strict";
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module.exports = debug;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/re.js
var require_re = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/re.js"(exports, module) {
    "use strict";
    var {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = require_constants();
    var debug = require_debug();
    exports = module.exports = {};
    var re = exports.re = [];
    var safeRe = exports.safeRe = [];
    var src = exports.src = [];
    var safeSrc = exports.safeSrc = [];
    var t = exports.t = {};
    var R = 0;
    var LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    var safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    var makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    var createToken2 = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken2("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken2("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken2("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken2("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken2("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken2("PRERELEASEIDENTIFIER", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
    createToken2("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken2("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken2("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken2("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken2("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken2("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken2("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken2("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken2("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken2("GTLT", "((?:<|>)?=?)");
    createToken2("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken2("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken2("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken2("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken2("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken2("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken2("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken2("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken2("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken2("COERCERTL", src[t.COERCE], true);
    createToken2("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken2("LONETILDE", "(?:~>?)");
    createToken2("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken2("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken2("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken2("LONECARET", "(?:\\^)");
    createToken2("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken2("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken2("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken2("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken2("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken2("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken2("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken2("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken2("STAR", "(<|>)?=?\\s*\\*");
    createToken2("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken2("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/parse-options.js"(exports, module) {
    "use strict";
    var looseOption = Object.freeze({ loose: true });
    var emptyOpts = Object.freeze({});
    var parseOptions = (options) => {
      if (!options) {
        return emptyOpts;
      }
      if (typeof options !== "object") {
        return looseOption;
      }
      return options;
    };
    module.exports = parseOptions;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/identifiers.js"(exports, module) {
    "use strict";
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/classes/semver.js"(exports, module) {
    "use strict";
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { safeRe: re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class _SemVer {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof _SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof _SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new _SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof _SemVer)) {
          other = new _SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("build compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.
      inc(release, identifier, identifierBase) {
        if (release.startsWith("pre")) {
          if (!identifier && identifierBase === false) {
            throw new Error("invalid increment argument: identifier is empty");
          }
          if (identifier) {
            const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
            if (!match || match[1] !== identifier) {
              throw new Error(`invalid identifier: ${identifier}`);
            }
          }
        }
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier, identifierBase);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier, identifierBase);
            this.inc("pre", identifier, identifierBase);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier, identifierBase);
            }
            this.inc("pre", identifier, identifierBase);
            break;
          case "release":
            if (this.prerelease.length === 0) {
              throw new Error(`version ${this.raw} is not a prerelease`);
            }
            this.prerelease.length = 0;
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
          case "pre": {
            const base = Number(identifierBase) ? 1 : 0;
            if (this.prerelease.length === 0) {
              this.prerelease = [base];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                if (identifier === this.prerelease.join(".") && identifierBase === false) {
                  throw new Error("invalid increment argument: identifier already exists");
                }
                this.prerelease.push(base);
              }
            }
            if (identifier) {
              let prerelease = [identifier, base];
              if (identifierBase === false) {
                prerelease = [identifier];
              }
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = prerelease;
                }
              } else {
                this.prerelease = prerelease;
              }
            }
            break;
          }
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
          this.raw += `+${this.build.join(".")}`;
        }
        return this;
      }
    };
    module.exports = SemVer;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/parse.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var parse = (version, options, throwErrors = false) => {
      if (version instanceof SemVer) {
        return version;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        if (!throwErrors) {
          return null;
        }
        throw er;
      }
    };
    module.exports = parse;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/valid.js"(exports, module) {
    "use strict";
    var parse = require_parse();
    var valid2 = (version, options) => {
      const v = parse(version, options);
      return v ? v.version : null;
    };
    module.exports = valid2;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/clean.js"(exports, module) {
    "use strict";
    var parse = require_parse();
    var clean = (version, options) => {
      const s = parse(version.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    };
    module.exports = clean;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/inc.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var inc = (version, release, options, identifier, identifierBase) => {
      if (typeof options === "string") {
        identifierBase = identifier;
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version instanceof SemVer ? version.version : version,
          options
        ).inc(release, identifier, identifierBase).version;
      } catch (er) {
        return null;
      }
    };
    module.exports = inc;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/diff.js"(exports, module) {
    "use strict";
    var parse = require_parse();
    var diff = (version1, version2) => {
      const v1 = parse(version1, null, true);
      const v2 = parse(version2, null, true);
      const comparison = v1.compare(v2);
      if (comparison === 0) {
        return null;
      }
      const v1Higher = comparison > 0;
      const highVersion = v1Higher ? v1 : v2;
      const lowVersion = v1Higher ? v2 : v1;
      const highHasPre = !!highVersion.prerelease.length;
      const lowHasPre = !!lowVersion.prerelease.length;
      if (lowHasPre && !highHasPre) {
        if (!lowVersion.patch && !lowVersion.minor) {
          return "major";
        }
        if (lowVersion.compareMain(highVersion) === 0) {
          if (lowVersion.minor && !lowVersion.patch) {
            return "minor";
          }
          return "patch";
        }
      }
      const prefix = highHasPre ? "pre" : "";
      if (v1.major !== v2.major) {
        return prefix + "major";
      }
      if (v1.minor !== v2.minor) {
        return prefix + "minor";
      }
      if (v1.patch !== v2.patch) {
        return prefix + "patch";
      }
      return "prerelease";
    };
    module.exports = diff;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/major.js
var require_major = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/major.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var major = (a, loose) => new SemVer(a, loose).major;
    module.exports = major;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/minor.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var minor = (a, loose) => new SemVer(a, loose).minor;
    module.exports = minor;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/patch.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var patch = (a, loose) => new SemVer(a, loose).patch;
    module.exports = patch;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/prerelease.js"(exports, module) {
    "use strict";
    var parse = require_parse();
    var prerelease = (version, options) => {
      const parsed = parse(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module.exports = prerelease;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/compare.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module.exports = compare;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/rcompare.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var rcompare = (a, b, loose) => compare(b, a, loose);
    module.exports = rcompare;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/compare-loose.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var compareLoose = (a, b) => compare(a, b, true);
    module.exports = compareLoose;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/compare-build.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var compareBuild = (a, b, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module.exports = compareBuild;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/sort.js"(exports, module) {
    "use strict";
    var compareBuild = require_compare_build();
    var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
    module.exports = sort;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/rsort.js"(exports, module) {
    "use strict";
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
    module.exports = rsort;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/gt.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var gt = (a, b, loose) => compare(a, b, loose) > 0;
    module.exports = gt;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/lt.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var lt = (a, b, loose) => compare(a, b, loose) < 0;
    module.exports = lt;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/eq.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var eq = (a, b, loose) => compare(a, b, loose) === 0;
    module.exports = eq;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/neq.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var neq = (a, b, loose) => compare(a, b, loose) !== 0;
    module.exports = neq;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/gte.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var gte = (a, b, loose) => compare(a, b, loose) >= 0;
    module.exports = gte;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/lte.js"(exports, module) {
    "use strict";
    var compare = require_compare();
    var lte = (a, b, loose) => compare(a, b, loose) <= 0;
    module.exports = lte;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/cmp.js"(exports, module) {
    "use strict";
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module.exports = cmp;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/coerce.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var parse = require_parse();
    var { safeRe: re, t } = require_re();
    var coerce = (version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
      } else {
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        coerceRtlRegex.lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      const major = match[2];
      const minor = match[3] || "0";
      const patch = match[4] || "0";
      const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
      const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
      return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
    };
    module.exports = coerce;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/lrucache.js
var require_lrucache = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/internal/lrucache.js"(exports, module) {
    "use strict";
    var LRUCache = class {
      constructor() {
        this.max = 1e3;
        this.map = /* @__PURE__ */ new Map();
      }
      get(key) {
        const value = this.map.get(key);
        if (value === void 0) {
          return void 0;
        } else {
          this.map.delete(key);
          this.map.set(key, value);
          return value;
        }
      }
      delete(key) {
        return this.map.delete(key);
      }
      set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== void 0) {
          if (this.map.size >= this.max) {
            const firstKey = this.map.keys().next().value;
            this.delete(firstKey);
          }
          this.map.set(key, value);
        }
        return this;
      }
    };
    module.exports = LRUCache;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/classes/range.js
var require_range = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/classes/range.js"(exports, module) {
    "use strict";
    var SPACE_CHARACTERS = /\s+/g;
    var Range = class _Range {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof _Range) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new _Range(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.formatted = void 0;
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range.trim().replace(SPACE_CHARACTERS, " ");
        this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.formatted = void 0;
      }
      get range() {
        if (this.formatted === void 0) {
          this.formatted = "";
          for (let i = 0; i < this.set.length; i++) {
            if (i > 0) {
              this.formatted += "||";
            }
            const comps = this.set[i];
            for (let k = 0; k < comps.length; k++) {
              if (k > 0) {
                this.formatted += " ";
              }
              this.formatted += comps[k].toString().trim();
            }
          }
        }
        return this.formatted;
      }
      format() {
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ":" + range;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug("tilde trim", range);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug("caret trim", range);
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof _Range)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      // if ANY of the sets match ALL of its comparators, then pass
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module.exports = Range;
    var LRU = require_lrucache();
    var cache = new LRU();
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      safeRe: re,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = require_constants();
    var isNullSet = (c) => c.value === "<0.0.0-0";
    var isAny = (c) => c.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var replaceTildes = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
    };
    var replaceTilde = (comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => {
      return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
    };
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/classes/comparator.js"(exports, module) {
    "use strict";
    var ANY = /* @__PURE__ */ Symbol("SemVer ANY");
    var Comparator = class _Comparator {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof _Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        comp = comp.trim().split(/\s+/).join(" ");
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof _Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
          return false;
        }
        if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
          return false;
        }
        if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
          return true;
        }
        if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
          return true;
        }
        if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
          return true;
        }
        if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
          return true;
        }
        if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
          return true;
        }
        return false;
      }
    };
    module.exports = Comparator;
    var parseOptions = require_parse_options();
    var { safeRe: re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range = require_range();
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/functions/satisfies.js"(exports, module) {
    "use strict";
    var Range = require_range();
    var satisfies2 = (version, range, options) => {
      try {
        range = new Range(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module.exports = satisfies2;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/to-comparators.js"(exports, module) {
    "use strict";
    var Range = require_range();
    var toComparators = (range, options) => new Range(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
    module.exports = toComparators;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/max-satisfying.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var maxSatisfying = (versions, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    };
    module.exports = maxSatisfying;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/min-satisfying.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var minSatisfying = (versions, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    };
    module.exports = minSatisfying;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/min-version.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var Range = require_range();
    var gt = require_gt();
    var minVersion = (range, loose) => {
      range = new Range(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            /* fallthrough */
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            /* istanbul ignore next */
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module.exports = minVersion;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/valid.js"(exports, module) {
    "use strict";
    var Range = require_range();
    var validRange2 = (range, options) => {
      try {
        return new Range(range, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    module.exports = validRange2;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/outside.js"(exports, module) {
    "use strict";
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range = require_range();
    var satisfies2 = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte = require_gte();
    var outside = (version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies2(version, range, options)) {
        return false;
      }
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module.exports = outside;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/gtr.js"(exports, module) {
    "use strict";
    var outside = require_outside();
    var gtr = (version, range, options) => outside(version, range, ">", options);
    module.exports = gtr;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/ltr.js"(exports, module) {
    "use strict";
    var outside = require_outside();
    var ltr = (version, range, options) => outside(version, range, "<", options);
    module.exports = ltr;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/intersects.js"(exports, module) {
    "use strict";
    var Range = require_range();
    var intersects = (r1, r2, options) => {
      r1 = new Range(r1, options);
      r2 = new Range(r2, options);
      return r1.intersects(r2, options);
    };
    module.exports = intersects;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/simplify.js"(exports, module) {
    "use strict";
    var satisfies2 = require_satisfies();
    var compare = require_compare();
    module.exports = (versions, range, options) => {
      const set = [];
      let first = null;
      let prev = null;
      const v = versions.sort((a, b) => compare(a, b, options));
      for (const version of v) {
        const included = satisfies2(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/ranges/subset.js"(exports, module) {
    "use strict";
    var Range = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies2 = require_satisfies();
    var compare = require_compare();
    var subset = (sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range(sub, options);
      dom = new Range(dom, options);
      let sawNonNull = false;
      OUTER: for (const simpleSub of sub.set) {
        for (const simpleDom of dom.set) {
          const isSub = simpleSubset(simpleSub, simpleDom, options);
          sawNonNull = sawNonNull || isSub !== null;
          if (isSub) {
            continue OUTER;
          }
        }
        if (sawNonNull) {
          return false;
        }
      }
      return true;
    };
    var minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
    var minimumVersion = [new Comparator(">=0.0.0")];
    var simpleSubset = (sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = minimumVersionWithPreRelease;
        } else {
          sub = minimumVersion;
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = minimumVersion;
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c of sub) {
        if (c.operator === ">" || c.operator === ">=") {
          gt = higherGT(gt, c, options);
        } else if (c.operator === "<" || c.operator === "<=") {
          lt = lowerLT(lt, c, options);
        } else {
          eqSet.add(c.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt && !satisfies2(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies2(eq, String(lt), options)) {
          return null;
        }
        for (const c of dom) {
          if (!satisfies2(eq, String(c), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c of dom) {
        hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
        hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c.operator === ">" || c.operator === ">=") {
            higher = higherGT(gt, c, options);
            if (higher === c && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !satisfies2(gt.semver, String(c), options)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c.operator === "<" || c.operator === "<=") {
            lower = lowerLT(lt, c, options);
            if (lower === c && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !satisfies2(lt.semver, String(c), options)) {
            return false;
          }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
    };
    var lowerLT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
    };
    module.exports = subset;
  }
});

// ../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/index.js
var require_semver2 = __commonJS({
  "../../node_modules/.pnpm/semver@7.7.2/node_modules/semver/index.js"(exports, module) {
    "use strict";
    var internalRe = require_re();
    var constants = require_constants();
    var SemVer = require_semver();
    var identifiers = require_identifiers();
    var parse = require_parse();
    var valid2 = require_valid();
    var clean = require_clean();
    var inc = require_inc();
    var diff = require_diff();
    var major = require_major();
    var minor = require_minor();
    var patch = require_patch();
    var prerelease = require_prerelease();
    var compare = require_compare();
    var rcompare = require_rcompare();
    var compareLoose = require_compare_loose();
    var compareBuild = require_compare_build();
    var sort = require_sort();
    var rsort = require_rsort();
    var gt = require_gt();
    var lt = require_lt();
    var eq = require_eq();
    var neq = require_neq();
    var gte = require_gte();
    var lte = require_lte();
    var cmp = require_cmp();
    var coerce = require_coerce();
    var Comparator = require_comparator();
    var Range = require_range();
    var satisfies2 = require_satisfies();
    var toComparators = require_to_comparators();
    var maxSatisfying = require_max_satisfying();
    var minSatisfying = require_min_satisfying();
    var minVersion = require_min_version();
    var validRange2 = require_valid2();
    var outside = require_outside();
    var gtr = require_gtr();
    var ltr = require_ltr();
    var intersects = require_intersects();
    var simplifyRange = require_simplify();
    var subset = require_subset();
    module.exports = {
      parse,
      valid: valid2,
      clean,
      inc,
      diff,
      major,
      minor,
      patch,
      prerelease,
      compare,
      rcompare,
      compareLoose,
      compareBuild,
      sort,
      rsort,
      gt,
      lt,
      eq,
      neq,
      gte,
      lte,
      cmp,
      coerce,
      Comparator,
      Range,
      satisfies: satisfies2,
      toComparators,
      maxSatisfying,
      minSatisfying,
      minVersion,
      validRange: validRange2,
      outside,
      gtr,
      ltr,
      intersects,
      simplifyRange,
      subset,
      SemVer,
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: constants.RELEASE_TYPES,
      compareIdentifiers: identifiers.compareIdentifiers,
      rcompareIdentifiers: identifiers.rcompareIdentifiers
    };
  }
});

// src/paper.ts
var paper_exports = {};
__export(paper_exports, {
  ECONOMY_SERVICE: () => ECONOMY_SERVICE,
  EconomyPlugin: () => EconomyPlugin,
  EconomyValidationError: () => EconomyValidationError,
  InMemoryEconomy: () => InMemoryEconomy,
  InsufficientFundsError: () => InsufficientFundsError,
  MATERIAL_PRICES: () => MATERIAL_PRICES,
  default: () => paper_default,
  formatMoney: () => formatMoney,
  parseMoney: () => parseMoney
});

// ../../packages/communication/src/index.ts
var import_semver = __toESM(require_semver2(), 1);
var contractIdPattern = /^[a-z][a-z0-9]*(?:[._/-][a-z0-9]+)*$/;
function assertContract(id, version) {
  if (id.length > 128 || !contractIdPattern.test(id))
    throw new TypeError(`Invalid communication contract id: ${id}`);
  if ((0, import_semver.valid)(version) === null)
    throw new TypeError(`Contract version must be exact semver: ${version}`);
}
function defineServiceContract(options) {
  assertContract(options.id, options.version);
  if (options.methods.length === 0 || new Set(options.methods).size !== options.methods.length)
    throw new TypeError("A service contract requires unique method names.");
  return Object.freeze({ ...options, methods: Object.freeze([...options.methods]) });
}

// src/index.ts
var ECONOMY_SERVICE = defineServiceContract({
  id: "example/economy",
  version: "1.0.0",
  methods: ["balance", "deposit", "withdraw", "transfer"]
});
var EconomyValidationError = class extends Error {
  code = "ECONOMY_VALIDATION";
  constructor(message) {
    super(message);
    this.name = "EconomyValidationError";
  }
};
var InsufficientFundsError = class extends Error {
  constructor(accountId2, balance, requested) {
    super(`Account ${accountId2} has ${String(balance)} but ${String(requested)} was requested.`);
    this.accountId = accountId2;
    this.balance = balance;
    this.requested = requested;
    this.name = "InsufficientFundsError";
  }
  accountId;
  balance;
  requested;
  code = "INSUFFICIENT_FUNDS";
};
var DECIMAL_AMOUNT = /^(\d+)(?:\.(\d{1,2}))?$/u;
function parseMoney(value) {
  const match = DECIMAL_AMOUNT.exec(value.trim());
  if (match === null)
    throw new EconomyValidationError(
      "Amount must be a positive decimal with at most two digits after the decimal point."
    );
  const major = match[1];
  if (major === void 0) throw new EconomyValidationError("Amount is missing.");
  const fraction = (match[2] ?? "").padEnd(2, "0");
  const amount = BigInt(major) * 100n + BigInt(fraction || "0");
  if (amount <= 0n || amount > BigInt(Number.MAX_SAFE_INTEGER))
    throw new EconomyValidationError("Amount must be positive and within the safe integer range.");
  return Number(amount);
}
function formatMoney(amount) {
  if (!Number.isSafeInteger(amount) || amount < 0)
    throw new EconomyValidationError("Money values must be non-negative safe integers.");
  const major = Math.floor(amount / 100);
  const fraction = String(amount % 100).padStart(2, "0");
  return `$${String(major)}.${fraction}`;
}
function accountId(value) {
  const normalized = value.trim();
  if (!/^[a-z0-9][a-z0-9._-]{0,63}$/i.test(normalized))
    throw new EconomyValidationError(
      "Account IDs must be 1-64 letters, digits, dots, underscores, or hyphens."
    );
  return normalized;
}
function positiveAmount(value) {
  if (!Number.isSafeInteger(value) || value <= 0)
    throw new EconomyValidationError("Amounts must be positive safe integers.");
  return value;
}
var InMemoryEconomy = class {
  #balances = /* @__PURE__ */ new Map();
  balance(rawAccountId) {
    return this.#balances.get(accountId(rawAccountId)) ?? 0;
  }
  deposit(rawAccountId, rawAmount) {
    const id = accountId(rawAccountId);
    const amount = positiveAmount(rawAmount);
    const next = (this.#balances.get(id) ?? 0) + amount;
    if (!Number.isSafeInteger(next))
      throw new EconomyValidationError("The resulting balance exceeds the safe integer range.");
    this.#balances.set(id, next);
    return next;
  }
  withdraw(rawAccountId, rawAmount) {
    const id = accountId(rawAccountId);
    const amount = positiveAmount(rawAmount);
    const current = this.#balances.get(id) ?? 0;
    if (current < amount) throw new InsufficientFundsError(id, current, amount);
    const next = current - amount;
    this.#balances.set(id, next);
    return next;
  }
  transfer(rawFromAccountId, rawToAccountId, rawAmount) {
    const from = accountId(rawFromAccountId);
    const to = accountId(rawToAccountId);
    const amount = positiveAmount(rawAmount);
    if (from === to) throw new EconomyValidationError("Transfer accounts must be different.");
    const sourceBalance = this.#balances.get(from) ?? 0;
    if (sourceBalance < amount) throw new InsufficientFundsError(from, sourceBalance, amount);
    const destinationBalance = (this.#balances.get(to) ?? 0) + amount;
    if (!Number.isSafeInteger(destinationBalance))
      throw new EconomyValidationError("The resulting balance exceeds the safe integer range.");
    this.#balances.set(from, sourceBalance - amount);
    this.#balances.set(to, destinationBalance);
  }
};

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
var MATERIAL_PRICES = Object.freeze({
  COBBLESTONE: 1,
  COAL: 25,
  COPPER_INGOT: 50,
  IRON_INGOT: 100,
  GOLD_INGOT: 250,
  EMERALD: 750,
  DIAMOND: 1e3
});
var CommandInputError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "CommandInputError";
  }
};
function playerSender(context) {
  const { sender } = context;
  if (sender.kind !== "player" || typeof sender.id !== "string" || sender.id.length === 0)
    throw new CommandInputError("Only players can use this command.");
  return { id: sender.id, name: sender.name };
}
function playerNamed(context, name) {
  const player = context.findPlayer(name);
  if (player === null)
    throw new CommandInputError(`No exact or cached player named "${name}" was found.`);
  return player;
}
function usage(context, syntax) {
  return new CommandInputError(`Usage: /${context.alias} ${syntax}`.trimEnd());
}
function handleExpectedError(context, error) {
  if (error instanceof InsufficientFundsError) {
    context.reply(`Insufficient funds. Your balance is ${formatMoney(error.balance)}.`);
    return true;
  }
  if (error instanceof CommandInputError || error instanceof EconomyValidationError) {
    context.reply(error.message);
    return true;
  }
  throw error;
}
var EconomyPlugin = class {
  economy = new InMemoryEconomy();
  pay(context) {
    try {
      const sender = playerSender(context);
      if (context.arguments.length !== 2) throw usage(context, "<player> <amount>");
      const targetName = context.arguments[0];
      const rawAmount = context.arguments[1];
      if (targetName === void 0 || rawAmount === void 0)
        throw usage(context, "<player> <amount>");
      const target = playerNamed(context, targetName);
      if (target.id === sender.id) throw new CommandInputError("You cannot pay yourself.");
      const amount = parseMoney(rawAmount);
      this.economy.transfer(sender.id, target.id, amount);
      context.reply(
        `Paid ${target.name} ${formatMoney(amount)}. Your balance is ${formatMoney(this.economy.balance(sender.id))}.`
      );
    } catch (error) {
      return handleExpectedError(context, error);
    }
    return true;
  }
  balance(context) {
    try {
      if (context.arguments.length > 1) throw usage(context, "[player]");
      const requestedName = context.arguments[0];
      const player = requestedName === void 0 ? playerSender(context) : playerNamed(context, requestedName);
      context.reply(`${player.name}'s balance is ${formatMoney(this.economy.balance(player.id))}.`);
    } catch (error) {
      return handleExpectedError(context, error);
    }
    return true;
  }
  sell(context) {
    try {
      const sender = playerSender(context);
      if (context.arguments.length !== 0) throw usage(context, "");
      const item = context.mainHand();
      if (item === null) throw new CommandInputError("Hold an item in your main hand to sell.");
      const material = item.material.trim().toUpperCase();
      if (material === "AIR" || material === "CAVE_AIR" || material === "VOID_AIR")
        throw new CommandInputError("Hold an item in your main hand to sell.");
      if (!Number.isSafeInteger(item.amount) || item.amount <= 0)
        throw new CommandInputError("The held item stack is invalid.");
      const unitPrice = MATERIAL_PRICES[material];
      if (unitPrice === void 0)
        throw new CommandInputError(`${material} does not have a sell price.`);
      const proceeds = unitPrice * item.amount;
      const currentBalance = this.economy.balance(sender.id);
      if (!Number.isSafeInteger(proceeds) || !Number.isSafeInteger(currentBalance + proceeds))
        throw new EconomyValidationError("The sale would exceed the safe balance limit.");
      if (!context.takeMainHand(item.material, item.amount))
        throw new CommandInputError("Your held item changed before it could be sold. Try again.");
      const nextBalance = this.economy.deposit(sender.id, proceeds);
      context.reply(
        `Sold ${String(item.amount)} ${material} for ${formatMoney(proceeds)}. Your balance is ${formatMoney(nextBalance)}.`
      );
    } catch (error) {
      return handleExpectedError(context, error);
    }
    return true;
  }
};
__decorateClass([
  Command("pay"),
  __decorateParam(0, Context())
], EconomyPlugin.prototype, "pay", 1);
__decorateClass([
  Command("bal"),
  __decorateParam(0, Context())
], EconomyPlugin.prototype, "balance", 1);
__decorateClass([
  Command("sell"),
  __decorateParam(0, Context())
], EconomyPlugin.prototype, "sell", 1);
EconomyPlugin = __decorateClass([
  Plugin({ name: "economy" })
], EconomyPlugin);

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
    console.info("[economy] Paper economy enabled.");
  },
  disable() {
    console.info("[economy] Paper economy disabled; in-memory balances were discarded.");
  }
});

// ../../packages/bundler/dist/runtime-adapter.js
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
  const call = (name, metadata, ...arguments_) => host === void 0 ? void 0 : operation(host, name)(metadata, ...arguments_);
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
var lifecycle = installRuntimeAdapter({ "formatVersion": 2, "compilerVersion": "0.1.0-rc.1", "packageName": "@shamoo-examples/economy", "components": [{ "id": "src/plugin.ts#EconomyPlugin", "kind": "plugin", "name": "EconomyPlugin", "file": "src/plugin.ts", "platform": "paper", "decorators": [{ "name": "Plugin", "arguments": [{ "name": "economy" }], "location": { "file": "src/plugin.ts", "line": 65, "column": 1 } }], "constructor": [], "properties": [], "methods": [{ "name": "pay", "invocation": "command", "decorators": [{ "name": "Command", "arguments": ["pay"], "location": { "file": "src/plugin.ts", "line": 69, "column": 3 } }], "parameters": [{ "index": 0, "token": { "kind": "token", "value": { "binding": "Context", "value": "value" } }, "location": { "file": "src/plugin.ts", "line": 70, "column": 14 } }], "location": { "file": "src/plugin.ts", "line": 69, "column": 3 } }, { "name": "balance", "invocation": "command", "decorators": [{ "name": "Command", "arguments": ["bal"], "location": { "file": "src/plugin.ts", "line": 93, "column": 3 } }], "parameters": [{ "index": 0, "token": { "kind": "token", "value": { "binding": "Context", "value": "value" } }, "location": { "file": "src/plugin.ts", "line": 94, "column": 18 } }], "location": { "file": "src/plugin.ts", "line": 93, "column": 3 } }, { "name": "sell", "invocation": "command", "decorators": [{ "name": "Command", "arguments": ["sell"], "location": { "file": "src/plugin.ts", "line": 107, "column": 3 } }], "parameters": [{ "index": 0, "token": { "kind": "token", "value": { "binding": "Context", "value": "value" } }, "location": { "file": "src/plugin.ts", "line": 108, "column": 15 } }], "location": { "file": "src/plugin.ts", "line": 107, "column": 3 } }], "location": { "file": "src/plugin.ts", "line": 65, "column": 1 } }], "modules": [], "communication": { "services": [], "events": [], "consumers": [] }, "permissions": { "builtins": [], "filesystem": { "read": [], "write": [] } }, "entrypoints": { "paper": { "source": "src/paper.ts", "output": "paper/index.js" } } }, "paper", paper_exports);
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
