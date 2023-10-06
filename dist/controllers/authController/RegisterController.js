"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// prisma/databases/auth/runtime/library.js
var require_library = __commonJS({
  "prisma/databases/auth/runtime/library.js"(exports, module) {
    "use strict";
    var Qa = Object.create;
    var Gt = Object.defineProperty;
    var Ja = Object.getOwnPropertyDescriptor;
    var Ga = Object.getOwnPropertyNames;
    var Wa = Object.getPrototypeOf;
    var Ha = Object.prototype.hasOwnProperty;
    var L = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var xt = (e, t) => {
      for (var r in t)
        Gt(e, r, { get: t[r], enumerable: true });
    };
    var pi = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of Ga(t))
          !Ha.call(e, i) && i !== r && Gt(e, i, { get: () => t[i], enumerable: !(n = Ja(t, i)) || n.enumerable });
      return e;
    };
    var A = (e, t, r) => (r = e != null ? Qa(Wa(e)) : {}, pi(t || !e || !e.__esModule ? Gt(r, "default", { value: e, enumerable: true }) : r, e));
    var za = (e) => pi(Gt({}, "__esModule", { value: true }), e);
    var Ei = L((pd, Pi) => {
      var ze = 1e3, Ye = ze * 60, Ze = Ye * 60, Ve = Ze * 24, Ya = Ve * 7, Za = Ve * 365.25;
      Pi.exports = function(e, t) {
        t = t || {};
        var r = typeof e;
        if (r === "string" && e.length > 0)
          return Xa(e);
        if (r === "number" && isFinite(e))
          return t.long ? tl(e) : el(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
      };
      function Xa(e) {
        if (e = String(e), !(e.length > 100)) {
          var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
          if (!!t) {
            var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
            switch (n) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return r * Za;
              case "weeks":
              case "week":
              case "w":
                return r * Ya;
              case "days":
              case "day":
              case "d":
                return r * Ve;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return r * Ze;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return r * Ye;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return r * ze;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return r;
              default:
                return;
            }
          }
        }
      }
      function el(e) {
        var t = Math.abs(e);
        return t >= Ve ? Math.round(e / Ve) + "d" : t >= Ze ? Math.round(e / Ze) + "h" : t >= Ye ? Math.round(e / Ye) + "m" : t >= ze ? Math.round(e / ze) + "s" : e + "ms";
      }
      function tl(e) {
        var t = Math.abs(e);
        return t >= Ve ? Yt(e, t, Ve, "day") : t >= Ze ? Yt(e, t, Ze, "hour") : t >= Ye ? Yt(e, t, Ye, "minute") : t >= ze ? Yt(e, t, ze, "second") : e + " ms";
      }
      function Yt(e, t, r, n) {
        var i = t >= r * 1.5;
        return Math.round(e / r) + " " + n + (i ? "s" : "");
      }
    });
    var en = L((dd, Ti) => {
      function rl(e) {
        r.debug = r, r.default = r, r.coerce = l, r.disable = o, r.enable = i, r.enabled = s, r.humanize = Ei(), r.destroy = u, Object.keys(e).forEach((c) => {
          r[c] = e[c];
        }), r.names = [], r.skips = [], r.formatters = {};
        function t(c) {
          let p = 0;
          for (let d = 0; d < c.length; d++)
            p = (p << 5) - p + c.charCodeAt(d), p |= 0;
          return r.colors[Math.abs(p) % r.colors.length];
        }
        r.selectColor = t;
        function r(c) {
          let p, d = null, g, y;
          function f(...b) {
            if (!f.enabled)
              return;
            let E = f, v = Number(/* @__PURE__ */ new Date()), x = v - (p || v);
            E.diff = x, E.prev = p, E.curr = v, p = v, b[0] = r.coerce(b[0]), typeof b[0] != "string" && b.unshift("%O");
            let M = 0;
            b[0] = b[0].replace(/%([a-zA-Z%])/g, (K, Ke) => {
              if (K === "%%")
                return "%";
              M++;
              let I = r.formatters[Ke];
              if (typeof I == "function") {
                let J = b[M];
                K = I.call(E, J), b.splice(M, 1), M--;
              }
              return K;
            }), r.formatArgs.call(E, b), (E.log || r.log).apply(E, b);
          }
          return f.namespace = c, f.useColors = r.useColors(), f.color = r.selectColor(c), f.extend = n, f.destroy = r.destroy, Object.defineProperty(f, "enabled", { enumerable: true, configurable: false, get: () => d !== null ? d : (g !== r.namespaces && (g = r.namespaces, y = r.enabled(c)), y), set: (b) => {
            d = b;
          } }), typeof r.init == "function" && r.init(f), f;
        }
        function n(c, p) {
          let d = r(this.namespace + (typeof p > "u" ? ":" : p) + c);
          return d.log = this.log, d;
        }
        function i(c) {
          r.save(c), r.namespaces = c, r.names = [], r.skips = [];
          let p, d = (typeof c == "string" ? c : "").split(/[\s,]+/), g = d.length;
          for (p = 0; p < g; p++)
            !d[p] || (c = d[p].replace(/\*/g, ".*?"), c[0] === "-" ? r.skips.push(new RegExp("^" + c.slice(1) + "$")) : r.names.push(new RegExp("^" + c + "$")));
        }
        function o() {
          let c = [...r.names.map(a), ...r.skips.map(a).map((p) => "-" + p)].join(",");
          return r.enable(""), c;
        }
        function s(c) {
          if (c[c.length - 1] === "*")
            return true;
          let p, d;
          for (p = 0, d = r.skips.length; p < d; p++)
            if (r.skips[p].test(c))
              return false;
          for (p = 0, d = r.names.length; p < d; p++)
            if (r.names[p].test(c))
              return true;
          return false;
        }
        function a(c) {
          return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*");
        }
        function l(c) {
          return c instanceof Error ? c.stack || c.message : c;
        }
        function u() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        return r.enable(r.load()), r;
      }
      Ti.exports = rl;
    });
    var vi = L((se, Zt) => {
      se.formatArgs = il;
      se.save = ol;
      se.load = sl;
      se.useColors = nl;
      se.storage = al();
      se.destroy = (() => {
        let e = false;
        return () => {
          e || (e = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
      })();
      se.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
      function nl() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? true : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? false : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function il(e) {
        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + Zt.exports.humanize(this.diff), !this.useColors)
          return;
        let t = "color: " + this.color;
        e.splice(1, 0, t, "color: inherit");
        let r = 0, n = 0;
        e[0].replace(/%[a-zA-Z%]/g, (i) => {
          i !== "%%" && (r++, i === "%c" && (n = r));
        }), e.splice(n, 0, t);
      }
      se.log = console.debug || console.log || (() => {
      });
      function ol(e) {
        try {
          e ? se.storage.setItem("debug", e) : se.storage.removeItem("debug");
        } catch (e2) {
        }
      }
      function sl() {
        let e;
        try {
          e = se.storage.getItem("debug");
        } catch (e2) {
        }
        return !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG), e;
      }
      function al() {
        try {
          return localStorage;
        } catch (e) {
        }
      }
      Zt.exports = en()(se);
      var { formatters: ll } = Zt.exports;
      ll.j = function(e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      };
    });
    var tn = L((md, Ci) => {
      "use strict";
      Ci.exports = (e, t = process.argv) => {
        let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
      };
    });
    var on = L((fd, Ai) => {
      "use strict";
      var ul = require("os"), Mi = require("tty"), ce = tn(), { env: q } = process, Fe;
      ce("no-color") || ce("no-colors") || ce("color=false") || ce("color=never") ? Fe = 0 : (ce("color") || ce("colors") || ce("color=true") || ce("color=always")) && (Fe = 1);
      "FORCE_COLOR" in q && (q.FORCE_COLOR === "true" ? Fe = 1 : q.FORCE_COLOR === "false" ? Fe = 0 : Fe = q.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(q.FORCE_COLOR, 10), 3));
      function rn(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      function nn(e, t) {
        if (Fe === 0)
          return 0;
        if (ce("color=16m") || ce("color=full") || ce("color=truecolor"))
          return 3;
        if (ce("color=256"))
          return 2;
        if (e && !t && Fe === void 0)
          return 0;
        let r = Fe || 0;
        if (q.TERM === "dumb")
          return r;
        if (process.platform === "win32") {
          let n = ul.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in q)
          return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in q) || q.CI_NAME === "codeship" ? 1 : r;
        if ("TEAMCITY_VERSION" in q)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(q.TEAMCITY_VERSION) ? 1 : 0;
        if (q.COLORTERM === "truecolor")
          return 3;
        if ("TERM_PROGRAM" in q) {
          let n = parseInt((q.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (q.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(q.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(q.TERM) || "COLORTERM" in q ? 1 : r;
      }
      function cl(e) {
        let t = nn(e, e && e.isTTY);
        return rn(t);
      }
      Ai.exports = { supportsColor: cl, stdout: rn(nn(true, Mi.isatty(1))), stderr: rn(nn(true, Mi.isatty(2))) };
    });
    var Ri = L((V, er) => {
      var pl = require("tty"), Xt = require("util");
      V.init = xl;
      V.log = gl;
      V.formatArgs = ml;
      V.save = yl;
      V.load = hl;
      V.useColors = dl;
      V.destroy = Xt.deprecate(() => {
      }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      V.colors = [6, 2, 3, 4, 5, 1];
      try {
        let e = on();
        e && (e.stderr || e).level >= 2 && (V.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
      } catch (e) {
      }
      V.inspectOpts = Object.keys(process.env).filter((e) => /^debug_/i.test(e)).reduce((e, t) => {
        let r = t.substring(6).toLowerCase().replace(/_([a-z])/g, (i, o) => o.toUpperCase()), n = process.env[t];
        return /^(yes|on|true|enabled)$/i.test(n) ? n = true : /^(no|off|false|disabled)$/i.test(n) ? n = false : n === "null" ? n = null : n = Number(n), e[r] = n, e;
      }, {});
      function dl() {
        return "colors" in V.inspectOpts ? Boolean(V.inspectOpts.colors) : pl.isatty(process.stderr.fd);
      }
      function ml(e) {
        let { namespace: t, useColors: r } = this;
        if (r) {
          let n = this.color, i = "\x1B[3" + (n < 8 ? n : "8;5;" + n), o = `  ${i};1m${t} \x1B[0m`;
          e[0] = o + e[0].split(`
`).join(`
` + o), e.push(i + "m+" + er.exports.humanize(this.diff) + "\x1B[0m");
        } else
          e[0] = fl() + t + " " + e[0];
      }
      function fl() {
        return V.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
      }
      function gl(...e) {
        return process.stderr.write(Xt.format(...e) + `
`);
      }
      function yl(e) {
        e ? process.env.DEBUG = e : delete process.env.DEBUG;
      }
      function hl() {
        return process.env.DEBUG;
      }
      function xl(e) {
        e.inspectOpts = {};
        let t = Object.keys(V.inspectOpts);
        for (let r = 0; r < t.length; r++)
          e.inspectOpts[t[r]] = V.inspectOpts[t[r]];
      }
      er.exports = en()(V);
      var { formatters: Si } = er.exports;
      Si.o = function(e) {
        return this.inspectOpts.colors = this.useColors, Xt.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(" ");
      };
      Si.O = function(e) {
        return this.inspectOpts.colors = this.useColors, Xt.inspect(e, this.inspectOpts);
      };
    });
    var Fi = L((gd, sn) => {
      typeof process > "u" || process.type === "renderer" || process.browser === true || process.__nwjs ? sn.exports = vi() : sn.exports = Ri();
    });
    var Bi = L((Gd, dn) => {
      "use strict";
      var C = dn.exports;
      dn.exports.default = C;
      var S = "\x1B[", Pt = "\x1B]", tt = "\x07", or = ";", ji = process.env.TERM_PROGRAM === "Apple_Terminal";
      C.cursorTo = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        return typeof t != "number" ? S + (e + 1) + "G" : S + (t + 1) + ";" + (e + 1) + "H";
      };
      C.cursorMove = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        let r = "";
        return e < 0 ? r += S + -e + "D" : e > 0 && (r += S + e + "C"), t < 0 ? r += S + -t + "A" : t > 0 && (r += S + t + "B"), r;
      };
      C.cursorUp = (e = 1) => S + e + "A";
      C.cursorDown = (e = 1) => S + e + "B";
      C.cursorForward = (e = 1) => S + e + "C";
      C.cursorBackward = (e = 1) => S + e + "D";
      C.cursorLeft = S + "G";
      C.cursorSavePosition = ji ? "\x1B7" : S + "s";
      C.cursorRestorePosition = ji ? "\x1B8" : S + "u";
      C.cursorGetPosition = S + "6n";
      C.cursorNextLine = S + "E";
      C.cursorPrevLine = S + "F";
      C.cursorHide = S + "?25l";
      C.cursorShow = S + "?25h";
      C.eraseLines = (e) => {
        let t = "";
        for (let r = 0; r < e; r++)
          t += C.eraseLine + (r < e - 1 ? C.cursorUp() : "");
        return e && (t += C.cursorLeft), t;
      };
      C.eraseEndLine = S + "K";
      C.eraseStartLine = S + "1K";
      C.eraseLine = S + "2K";
      C.eraseDown = S + "J";
      C.eraseUp = S + "1J";
      C.eraseScreen = S + "2J";
      C.scrollUp = S + "S";
      C.scrollDown = S + "T";
      C.clearScreen = "\x1Bc";
      C.clearTerminal = process.platform === "win32" ? `${C.eraseScreen}${S}0f` : `${C.eraseScreen}${S}3J${S}H`;
      C.beep = tt;
      C.link = (e, t) => [Pt, "8", or, or, t, tt, e, Pt, "8", or, or, tt].join("");
      C.image = (e, t = {}) => {
        let r = `${Pt}1337;File=inline=1`;
        return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + tt;
      };
      C.iTerm = { setCwd: (e = process.cwd()) => `${Pt}50;CurrentDir=${e}${tt}`, annotation: (e, t = {}) => {
        let r = `${Pt}1337;`, n = typeof t.x < "u", i = typeof t.y < "u";
        if ((n || i) && !(n && i && typeof t.length < "u"))
          throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return e = e.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : r += e, r + tt;
      } };
    });
    var Ui = L((Wd, Vi) => {
      "use strict";
      var vl = on(), rt = tn();
      function Ki(e) {
        if (/^\d{3,4}$/.test(e)) {
          let r = /(\d{1,2})(\d{2})/.exec(e);
          return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
        }
        let t = (e || "").split(".").map((r) => parseInt(r, 10));
        return { major: t[0], minor: t[1], patch: t[2] };
      }
      function mn(e) {
        let { env: t } = process;
        if ("FORCE_HYPERLINK" in t)
          return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
        if (rt("no-hyperlink") || rt("no-hyperlinks") || rt("hyperlink=false") || rt("hyperlink=never"))
          return false;
        if (rt("hyperlink=true") || rt("hyperlink=always") || "NETLIFY" in t)
          return true;
        if (!vl.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t)
          return false;
        if ("TERM_PROGRAM" in t) {
          let r = Ki(t.TERM_PROGRAM_VERSION);
          switch (t.TERM_PROGRAM) {
            case "iTerm.app":
              return r.major === 3 ? r.minor >= 1 : r.major > 3;
            case "WezTerm":
              return r.major >= 20200620;
            case "vscode":
              return r.major > 1 || r.major === 1 && r.minor >= 72;
          }
        }
        if ("VTE_VERSION" in t) {
          if (t.VTE_VERSION === "0.50.0")
            return false;
          let r = Ki(t.VTE_VERSION);
          return r.major > 0 || r.minor >= 50;
        }
        return false;
      }
      Vi.exports = { supportsHyperlink: mn, stdout: mn(process.stdout), stderr: mn(process.stderr) };
    });
    var Ji = L((Hd, Et) => {
      "use strict";
      var Cl = Bi(), fn = Ui(), Qi = (e, t, _a4 = {}) => {
        var _b2 = _a4, { target: r = "stdout" } = _b2, n = __objRest(_b2, ["target"]);
        return fn[r] ? Cl.link(e, t) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
      };
      Et.exports = (e, t, r = {}) => Qi(e, t, r);
      Et.exports.stderr = (e, t, r = {}) => Qi(e, t, __spreadValues({ target: "stderr" }, r));
      Et.exports.isSupported = fn.stdout;
      Et.exports.stderr.isSupported = fn.stderr;
    });
    var ro = L((mm, jl) => {
      jl.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
    });
    var io = L((fm, cr) => {
      var Bl = require("fs"), no = require("path"), Kl = require("os"), Vl = ro(), Ul = Vl.version, Ql = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
      function Jl(e) {
        let t = {}, r = e.toString();
        r = r.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = Ql.exec(r)) != null; ) {
          let i = n[1], o = n[2] || "";
          o = o.trim();
          let s = o[0];
          o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
        }
        return t;
      }
      function xn(e) {
        console.log(`[dotenv@${Ul}][DEBUG] ${e}`);
      }
      function Gl(e) {
        return e[0] === "~" ? no.join(Kl.homedir(), e.slice(1)) : e;
      }
      function Wl(e) {
        let t = no.resolve(process.cwd(), ".env"), r = "utf8", n = Boolean(e && e.debug), i = Boolean(e && e.override);
        e && (e.path != null && (t = Gl(e.path)), e.encoding != null && (r = e.encoding));
        try {
          let o = ur.parse(Bl.readFileSync(t, { encoding: r }));
          return Object.keys(o).forEach(function(s) {
            Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && xn(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
          }), { parsed: o };
        } catch (o) {
          return n && xn(`Failed to load ${t} ${o.message}`), { error: o };
        }
      }
      var ur = { config: Wl, parse: Jl };
      cr.exports.config = ur.config;
      cr.exports.parse = ur.parse;
      cr.exports = ur;
    });
    var co = L((Pm, uo) => {
      "use strict";
      uo.exports = (e) => {
        let t = e.match(/^[ \t]*(?=\S)/gm);
        return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
      };
    });
    var mo = L((Em, po) => {
      "use strict";
      var Zl = co();
      po.exports = (e) => {
        let t = Zl(e);
        if (t === 0)
          return e;
        let r = new RegExp(`^[ \\t]{${t}}`, "gm");
        return e.replace(r, "");
      };
    });
    var fo = L((Tm, Xl) => {
      Xl.exports = { name: "@prisma/engines-version", version: "5.1.1-1.6a3747c37ff169c90047725a05a6ef02e32ac97e", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "6a3747c37ff169c90047725a05a6ef02e32ac97e" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.17.1", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var En = L((dr) => {
      "use strict";
      Object.defineProperty(dr, "__esModule", { value: true });
      dr.enginesVersion = void 0;
      dr.enginesVersion = fo().prisma.enginesVersion;
    });
    var An = L((Nm, ho) => {
      "use strict";
      ho.exports = (e, t = 1, r) => {
        if (r = __spreadValues({ indent: " ", includeEmptyLines: false }, r), typeof e != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0)
          return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Po = L((qm, wo) => {
      "use strict";
      wo.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var On = L((jm, Eo) => {
      "use strict";
      var uu = Po();
      Eo.exports = (e) => typeof e == "string" ? e.replace(uu(), "") : e;
    });
    var To = L((Km, mr) => {
      "use strict";
      mr.exports = (e = {}) => {
        let t;
        if (e.repoUrl)
          t = e.repoUrl;
        else if (e.user && e.repo)
          t = `https://github.com/${e.user}/${e.repo}`;
        else
          throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o))
                throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            r.searchParams.set(i, o);
          }
        }
        return r.toString();
      };
      mr.exports.default = mr.exports;
    });
    var ni = L((jx, Hs) => {
      "use strict";
      Hs.exports = function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        return function(t, r) {
          if (t === r)
            return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
            i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); )
            s++;
          if (i -= s, o -= s, i === 0 || o < 3)
            return o;
          var a = 0, l, u, c, p, d, g, y, f, b, E, v, x, M = [];
          for (l = 0; l < i; l++)
            M.push(l + 1), M.push(t.charCodeAt(s + l));
          for (var le = M.length - 1; a < o - 3; )
            for (b = r.charCodeAt(s + (u = a)), E = r.charCodeAt(s + (c = a + 1)), v = r.charCodeAt(s + (p = a + 2)), x = r.charCodeAt(s + (d = a + 3)), g = a += 4, l = 0; l < le; l += 2)
              y = M[l], f = M[l + 1], u = e(y, u, c, b, f), c = e(u, c, p, E, f), p = e(c, p, d, v, f), g = e(p, d, g, x, f), M[l] = g, d = p, p = c, c = u, u = y;
          for (; a < o; )
            for (b = r.charCodeAt(s + (u = a)), g = ++a, l = 0; l < le; l += 2)
              y = M[l], M[l] = g = e(y, u, g, b, M[l + 1]), u = y;
          return g;
        };
      }();
    });
    var Yp = {};
    xt(Yp, { DMMF: () => ue, DMMFClass: () => bt, Debug: () => an, Decimal: () => we, Extensions: () => Yr, MetricsClient: () => st, NotFoundError: () => Ce, PrismaClientInitializationError: () => _, PrismaClientKnownRequestError: () => H, PrismaClientRustPanicError: () => ae, PrismaClientUnknownRequestError: () => z, PrismaClientValidationError: () => te, Public: () => Zr, Sql: () => U, Types: () => Xr, defineDmmfProperty: () => Co, empty: () => Ao, getPrismaClient: () => Ka, join: () => Mo, makeStrictEnum: () => Va, objectEnumValues: () => Pr, raw: () => Ln, sqltag: () => $n, warnEnvConflicts: () => Ua, warnOnce: () => In });
    module.exports = za(Yp);
    var Yr = {};
    xt(Yr, { defineExtension: () => di, getExtensionContext: () => mi });
    function di(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    function mi(e) {
      return e;
    }
    var Zr = {};
    xt(Zr, { validator: () => fi });
    function fi(...e) {
      return (t) => t;
    }
    var Xr = {};
    xt(Xr, { Extensions: () => gi, Public: () => yi, Result: () => hi, Utils: () => xi });
    var gi = {};
    var yi = {};
    var hi = {};
    var xi = {};
    function bi(e, t) {
      var _a4;
      for (let r of t)
        for (let n of Object.getOwnPropertyNames(r.prototype))
          Object.defineProperty(e.prototype, n, (_a4 = Object.getOwnPropertyDescriptor(r.prototype, n)) != null ? _a4 : /* @__PURE__ */ Object.create(null));
    }
    var Z = (e, t) => {
      let r = {};
      for (let n of e) {
        let i = n[t];
        r[i] = n;
      }
      return r;
    };
    function wi(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    var Wt = class {
      constructor({ datamodel: t }) {
        this.datamodel = t, this.datamodelEnumMap = this.getDatamodelEnumMap(), this.modelMap = this.getModelMap(), this.typeMap = this.getTypeMap(), this.typeAndModelMap = this.getTypeModelMap();
      }
      getDatamodelEnumMap() {
        return Z(this.datamodel.enums, "name");
      }
      getModelMap() {
        return __spreadValues({}, Z(this.datamodel.models, "name"));
      }
      getTypeMap() {
        return __spreadValues({}, Z(this.datamodel.types, "name"));
      }
      getTypeModelMap() {
        return __spreadValues(__spreadValues({}, this.getTypeMap()), this.getModelMap());
      }
    };
    var Ht = class {
      constructor({ mappings: t }) {
        this.mappings = t, this.mappingsMap = this.getMappingsMap();
      }
      getMappingsMap() {
        return Z(this.mappings.modelOperations, "model");
      }
      getOtherOperationNames() {
        return [Object.values(this.mappings.otherOperations.write), Object.values(this.mappings.otherOperations.read)].flat();
      }
    };
    var zt = class {
      constructor({ schema: t }) {
        this.outputTypeToMergedOutputType = (t2) => __spreadProps(__spreadValues({}, t2), { fields: t2.fields });
        this.schema = t, this.enumMap = this.getEnumMap(), this.outputTypes = this.getOutputTypes(), this.outputTypeMap = this.getMergedOutputTypeMap(), this.resolveOutputTypes(), this.inputObjectTypes = this.schema.inputObjectTypes, this.inputTypeMap = this.getInputTypeMap(), this.resolveInputTypes(), this.resolveFieldArgumentTypes(), this.queryType = this.outputTypeMap.prisma.Query, this.mutationType = this.outputTypeMap.prisma.Mutation, this.rootFieldMap = this.getRootFieldMap();
      }
      get [Symbol.toStringTag]() {
        return "DMMFClass";
      }
      resolveOutputTypes() {
        this.resolveOutputTypesInNamespace("prisma"), this.resolveOutputTypesInNamespace("model");
      }
      resolveOutputTypesInNamespace(t) {
        var _a4;
        for (let r of this.outputTypes[t]) {
          for (let n of r.fields) {
            if (typeof n.outputType.type != "string" || n.outputType.location === "scalar")
              continue;
            let i = (_a4 = n.outputType.namespace) != null ? _a4 : "model";
            n.outputType.location === "outputObjectTypes" ? n.outputType.type = this.outputTypeMap[i][n.outputType.type] : n.outputType.location === "enumTypes" && (n.outputType.type = this.enumMap[i][n.outputType.type]);
          }
          r.fieldMap = Z(r.fields, "name");
        }
      }
      resolveInputTypes() {
        this.resolveNamespaceInputTypes("model"), this.resolveNamespaceInputTypes("prisma");
      }
      resolveNamespaceInputTypes(t) {
        var _a4, _b2;
        let r = (_a4 = this.inputObjectTypes[t]) != null ? _a4 : [];
        for (let n of r) {
          for (let i of n.fields)
            for (let o of i.inputTypes) {
              if (typeof o.type != "string")
                continue;
              let s = o.type;
              if (o.location === "scalar")
                continue;
              let a = (_b2 = o.namespace) != null ? _b2 : "model";
              o.location === "inputObjectTypes" && (o.type = this.inputTypeMap[a][s]), o.location === "enumTypes" && (o.type = this.enumMap[a][s]);
            }
          n.fieldMap = Z(n.fields, "name");
        }
      }
      resolveFieldArgumentTypes() {
        this.resolveFieldArgumentTypesInNamespace("model"), this.resolveFieldArgumentTypesInNamespace("prisma");
      }
      resolveFieldArgumentTypesInNamespace(t) {
        var _a4, _b2;
        let r = (_a4 = this.outputTypes[t]) != null ? _a4 : [];
        for (let n of r)
          for (let i of n.fields)
            for (let o of i.args)
              for (let s of o.inputTypes) {
                let a = s.type;
                if (typeof a != "string" || s.location === "scalar")
                  continue;
                let l = (_b2 = s.namespace) != null ? _b2 : "model";
                s.location === "inputObjectTypes" && (s.type = this.inputTypeMap[l][a]), s.location === "enumTypes" && (s.type = this.enumMap[l][a]);
              }
      }
      getOutputTypes() {
        return { model: this.schema.outputObjectTypes.model.map(this.outputTypeToMergedOutputType), prisma: this.schema.outputObjectTypes.prisma.map(this.outputTypeToMergedOutputType) };
      }
      getEnumMap() {
        return { prisma: Z(this.schema.enumTypes.prisma, "name"), model: this.schema.enumTypes.model ? Z(this.schema.enumTypes.model, "name") : {} };
      }
      hasEnumInNamespace(t, r) {
        var _a4;
        return ((_a4 = this.schema.enumTypes[r]) == null ? void 0 : _a4.find((n) => n.name === t)) !== void 0;
      }
      getMergedOutputTypeMap() {
        return { model: Z(this.outputTypes.model, "name"), prisma: Z(this.outputTypes.prisma, "name") };
      }
      getInputTypeMap() {
        return { prisma: Z(this.schema.inputObjectTypes.prisma, "name"), model: this.schema.inputObjectTypes.model ? Z(this.schema.inputObjectTypes.model, "name") : {} };
      }
      getRootFieldMap() {
        return __spreadValues(__spreadValues({}, Z(this.queryType.fields, "name")), Z(this.mutationType.fields, "name"));
      }
    };
    var bt = class {
      constructor(t) {
        return Object.assign(this, new Wt(t), new Ht(t), new zt(t));
      }
    };
    bi(bt, [Wt, Ht, zt]);
    var ue;
    ((t) => {
      let e;
      ((x) => (x.findUnique = "findUnique", x.findUniqueOrThrow = "findUniqueOrThrow", x.findFirst = "findFirst", x.findFirstOrThrow = "findFirstOrThrow", x.findMany = "findMany", x.create = "create", x.createMany = "createMany", x.update = "update", x.updateMany = "updateMany", x.upsert = "upsert", x.delete = "delete", x.deleteMany = "deleteMany", x.groupBy = "groupBy", x.count = "count", x.aggregate = "aggregate", x.findRaw = "findRaw", x.aggregateRaw = "aggregateRaw"))(e = t.ModelAction || (t.ModelAction = {}));
    })(ue || (ue = {}));
    var tr = A(Fi());
    var bl = 100;
    var wt = [];
    var _a2, _b;
    typeof process < "u" && typeof ((_a2 = process.stderr) == null ? void 0 : _a2.write) != "function" && (tr.default.log = (_b = console.debug) != null ? _b : console.log);
    function wl(e) {
      let t = (0, tr.default)(e), r = Object.assign((...n) => (t.log = r.log, n.length !== 0 && wt.push([e, ...n]), wt.length > bl && wt.shift(), t("", ...n)), t);
      return r;
    }
    var an = Object.assign(wl, tr.default);
    function Oi(e = 7500) {
      let t = wt.map((r) => r.map((n) => typeof n == "string" ? n : JSON.stringify(n)).join(" ")).join(`
`);
      return t.length < e ? t : t.slice(-e);
    }
    function ki() {
      wt.length = 0;
    }
    var N = an;
    var ln;
    var Di;
    var _i;
    var Ii;
    var Ni = true;
    typeof process < "u" && ({ FORCE_COLOR: ln, NODE_DISABLE_COLORS: Di, NO_COLOR: _i, TERM: Ii } = process.env || {}, Ni = process.stdout && process.stdout.isTTY);
    var Pl = { enabled: !Di && _i == null && Ii !== "dumb" && (ln != null && ln !== "0" || Ni) };
    function O(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !Pl.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    var hd = O(0, 0);
    var ne = O(1, 22);
    var Oe = O(2, 22);
    var xd = O(3, 23);
    var X = O(4, 24);
    var bd = O(7, 27);
    var wd = O(8, 28);
    var Pd = O(9, 29);
    var Ed = O(30, 39);
    var pe = O(31, 39);
    var Ue = O(32, 39);
    var ye = O(33, 39);
    var Xe = O(34, 39);
    var Td = O(35, 39);
    var ke = O(36, 39);
    var vd = O(37, 39);
    var rr = O(90, 39);
    var Cd = O(90, 39);
    var Md = O(40, 49);
    var Ad = O(41, 49);
    var Sd = O(42, 49);
    var Rd = O(43, 49);
    var Fd = O(44, 49);
    var Od = O(45, 49);
    var kd = O(46, 49);
    var Dd = O(47, 49);
    var Li = A(require("fs"));
    function un() {
      let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
      if (!(e && Li.default.existsSync(e)) && process.arch === "ia32")
        throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
    }
    var nr = "libquery_engine";
    function cn(e, t) {
      let r = t === "url";
      return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${nr}.dylib.node` : `${nr}-${e}.dylib.node` : r ? `${nr}.so.node` : `${nr}-${e}.so.node`;
    }
    var zi = A(require("child_process"));
    var gn = A(require("fs/promises"));
    var ar = A(require("os"));
    var ir = Symbol("@ts-pattern/matcher");
    var $i = "@ts-pattern/anonymous-select-key";
    var qi = function(e) {
      return Boolean(e && typeof e == "object");
    };
    var pn = function(e) {
      return e && !!e[ir];
    };
    var El = function e(t, r, n) {
      if (qi(t)) {
        if (pn(t)) {
          var i = t[ir]().match(r), o = i.matched, s = i.selections;
          return o && s && Object.keys(s).forEach(function(l) {
            return n(l, s[l]);
          }), o;
        }
        if (!qi(r))
          return false;
        if (Array.isArray(t))
          return !!Array.isArray(r) && t.length === r.length && t.every(function(l, u) {
            return e(l, r[u], n);
          });
        if (t instanceof Map)
          return r instanceof Map && Array.from(t.keys()).every(function(l) {
            return e(t.get(l), r.get(l), n);
          });
        if (t instanceof Set) {
          if (!(r instanceof Set))
            return false;
          if (t.size === 0)
            return r.size === 0;
          if (t.size === 1) {
            var a = Array.from(t.values())[0];
            return pn(a) ? Array.from(r.values()).every(function(l) {
              return e(a, l, n);
            }) : r.has(a);
          }
          return Array.from(t.values()).every(function(l) {
            return r.has(l);
          });
        }
        return Object.keys(t).every(function(l) {
          var u, c = t[l];
          return (l in r || pn(u = c) && u[ir]().matcherType === "optional") && e(c, r[l], n);
        });
      }
      return Object.is(r, t);
    };
    function Qe(e) {
      var t;
      return (t = {})[ir] = function() {
        return { match: function(r) {
          return { matched: Boolean(e(r)) };
        } };
      }, t;
    }
    var qd = Qe(function(e) {
      return true;
    });
    var jd = Qe(function(e) {
      return typeof e == "string";
    });
    var Bd = Qe(function(e) {
      return typeof e == "number";
    });
    var Kd = Qe(function(e) {
      return typeof e == "boolean";
    });
    var Vd = Qe(function(e) {
      return typeof e == "bigint";
    });
    var Ud = Qe(function(e) {
      return typeof e == "symbol";
    });
    var Qd = Qe(function(e) {
      return e == null;
    });
    function et(e) {
      return new Tl(e, []);
    }
    var Tl = function() {
      function e(r, n) {
        this.value = void 0, this.cases = void 0, this.value = r, this.cases = n;
      }
      var t = e.prototype;
      return t.with = function() {
        var r = [].slice.call(arguments), n = r[r.length - 1], i = [r[0]], o = [];
        return r.length === 3 && typeof r[1] == "function" ? (i.push(r[0]), o.push(r[1])) : r.length > 2 && i.push.apply(i, r.slice(1, r.length - 1)), new e(this.value, this.cases.concat([{ match: function(s) {
          var a = {}, l = Boolean(i.some(function(u) {
            return El(u, s, function(c, p) {
              a[c] = p;
            });
          }) && o.every(function(u) {
            return u(s);
          }));
          return { matched: l, value: l && Object.keys(a).length ? $i in a ? a[$i] : a : s };
        }, handler: n }]));
      }, t.when = function(r, n) {
        return new e(this.value, this.cases.concat([{ match: function(i) {
          return { matched: Boolean(r(i)), value: i };
        }, handler: n }]));
      }, t.otherwise = function(r) {
        return new e(this.value, this.cases.concat([{ match: function(n) {
          return { matched: true, value: n };
        }, handler: r }])).run();
      }, t.exhaustive = function() {
        return this.run();
      }, t.run = function() {
        for (var r = this.value, n = void 0, i = 0; i < this.cases.length; i++) {
          var o = this.cases[i], s = o.match(this.value);
          if (s.matched) {
            r = s.value, n = o.handler;
            break;
          }
        }
        if (!n) {
          var a;
          try {
            a = JSON.stringify(this.value);
          } catch (e2) {
            a = this.value;
          }
          throw new Error("Pattern matching error: no pattern matches value " + a);
        }
        return n(r, this.value);
      }, e;
    }();
    var Yi = require("util");
    var Gi = A(Ji());
    function Tt(e) {
      return (0, Gi.default)(e, e, { fallback: X });
    }
    var Ml = { warn: ye("prisma:warn") };
    var Al = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function vt(e, ...t) {
      Al.warn() && console.warn(`${Ml.warn} ${e}`, ...t);
    }
    var Sl = (0, Yi.promisify)(zi.default.exec);
    var ie = N("prisma:get-platform");
    var Rl = ["1.0.x", "1.1.x", "3.0.x"];
    function Zi() {
      return __async(this, null, function* () {
        let e = ar.default.platform(), t = process.arch;
        if (e === "freebsd") {
          let s = yield lr("freebsd-version");
          if (s && s.trim().length > 0) {
            let l = /^(\d+)\.?/.exec(s);
            if (l)
              return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
          }
        }
        if (e !== "linux")
          return { platform: e, arch: t };
        let r = yield Ol(), n = yield ql(), i = Dl({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = yield _l(i);
        return __spreadValues({ platform: "linux", libssl: o, arch: t, archFromUname: n }, r);
      });
    }
    function Fl(e) {
      let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = et({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
      return ie(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
    }
    function Ol() {
      return __async(this, null, function* () {
        let e = "/etc/os-release";
        try {
          let t = yield gn.default.readFile(e, { encoding: "utf-8" });
          return Fl(t);
        } catch (e2) {
          return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
        }
      });
    }
    function kl(e) {
      let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
      if (t) {
        let r = `${t[1]}.x`;
        return Xi(r);
      }
    }
    function Wi(e) {
      var _a4;
      let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
      if (t) {
        let r = `${t[1]}${(_a4 = t[2]) != null ? _a4 : ".0"}.x`;
        return Xi(r);
      }
    }
    function Xi(e) {
      let t = (() => {
        if (to(e))
          return e;
        let r = e.split(".");
        return r[1] = "0", r.join(".");
      })();
      if (Rl.includes(t))
        return t;
    }
    function Dl(e) {
      return et(e).with({ familyDistro: "musl" }, () => (ie('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (ie('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (ie('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (ie(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []));
    }
    function _l(e) {
      return __async(this, null, function* () {
        let t = 'grep -v "libssl.so.0"', r = yield Hi(e);
        if (r) {
          ie(`Found libssl.so file using platform-specific paths: ${r}`);
          let o = Wi(r);
          if (ie(`The parsed libssl version is: ${o}`), o)
            return { libssl: o, strategy: "libssl-specific-path" };
        }
        ie('Falling back to "ldconfig" and other generic paths');
        let n = yield lr(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
        if (n || (n = yield Hi(["/lib64", "/usr/lib64", "/lib"])), n) {
          ie(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
          let o = Wi(n);
          if (ie(`The parsed libssl version is: ${o}`), o)
            return { libssl: o, strategy: "ldconfig" };
        }
        let i = yield lr("openssl version -v");
        if (i) {
          ie(`Found openssl binary with version: ${i}`);
          let o = kl(i);
          if (ie(`The parsed openssl version is: ${o}`), o)
            return { libssl: o, strategy: "openssl-binary" };
        }
        return ie("Couldn't find any version of libssl or OpenSSL in the system"), {};
      });
    }
    function Hi(e) {
      return __async(this, null, function* () {
        for (let t of e) {
          let r = yield Il(t);
          if (r)
            return r;
        }
      });
    }
    function Il(e) {
      return __async(this, null, function* () {
        try {
          return (yield gn.default.readdir(e)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
        } catch (t) {
          if (t.code === "ENOENT")
            return;
          throw t;
        }
      });
    }
    function nt() {
      return __async(this, null, function* () {
        let { binaryTarget: e } = yield eo();
        return e;
      });
    }
    function Nl(e) {
      return e.binaryTarget !== void 0;
    }
    function yn() {
      return __async(this, null, function* () {
        let _a4 = yield eo(), { memoized: e } = _a4, t = __objRest(_a4, ["memoized"]);
        return t;
      });
    }
    var sr = {};
    function eo() {
      return __async(this, null, function* () {
        if (Nl(sr))
          return Promise.resolve(__spreadProps(__spreadValues({}, sr), { memoized: true }));
        let e = yield Zi(), t = Ll(e);
        return sr = __spreadProps(__spreadValues({}, e), { binaryTarget: t }), __spreadProps(__spreadValues({}, sr), { memoized: false });
      });
    }
    function Ll(e) {
      let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
      t === "linux" && !["x64", "arm64"].includes(r) && vt(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
      let l = "1.1.x";
      if (t === "linux" && i === void 0) {
        let c = et({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        vt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
      }
      let u = "debian";
      if (t === "linux" && o === void 0 && vt(`Prisma doesn't know which engines to download for the Linux distro "${a}". Falling back to Prisma engines built "${u}".
Please report your experience by creating an issue at ${Tt("https://github.com/prisma/prisma/issues")} so we can add your distro to the list of known supported distros.`), t === "darwin" && r === "arm64")
        return "darwin-arm64";
      if (t === "darwin")
        return "darwin";
      if (t === "win32")
        return "windows";
      if (t === "freebsd")
        return o;
      if (t === "openbsd")
        return "openbsd";
      if (t === "netbsd")
        return "netbsd";
      if (t === "linux" && o === "nixos")
        return "linux-nixos";
      if (t === "linux" && r === "arm64")
        return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
      if (t === "linux" && r === "arm")
        return `linux-arm-openssl-${i || l}`;
      if (t === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || to(i) ? c : `${c}-openssl-${i}`;
      }
      return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && vt(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
    }
    function $l(e) {
      return __async(this, null, function* () {
        try {
          return yield e();
        } catch (e2) {
          return;
        }
      });
    }
    function lr(e) {
      return $l(() => __async(this, null, function* () {
        let t = yield Sl(e);
        return ie(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
      }));
    }
    function ql() {
      return __async(this, null, function* () {
        var _a4;
        return typeof ar.default.machine == "function" ? ar.default.machine() : (_a4 = yield lr("uname -m")) == null ? void 0 : _a4.trim();
      });
    }
    function to(e) {
      return e.startsWith("1.");
    }
    var hn = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "openbsd", "netbsd", "arm"];
    var wn = A(io());
    var pr = A(require("fs"));
    var it = A(require("path"));
    function oo(e) {
      let t = e.ignoreProcessEnv ? {} : process.env, r = (n) => {
        var _a4, _b2;
        return (_b2 = (_a4 = n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)) == null ? void 0 : _a4.reduce(function(o, s) {
          let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
          if (!a)
            return o;
          let l = a[1], u, c;
          if (l === "\\")
            c = a[0], u = c.replace("\\$", "$");
          else {
            let p = a[2];
            c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || "", u = r(u);
          }
          return o.replace(c, u);
        }, n)) != null ? _b2 : n;
      };
      for (let n in e.parsed) {
        let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
        e.parsed[n] = r(i);
      }
      for (let n in e.parsed)
        t[n] = e.parsed[n];
      return e;
    }
    var bn = N("prisma:tryLoadEnv");
    function Ct({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
      var _a4, _b2;
      let n = so(e);
      r.conflictCheck !== "none" && Hl(n, t, r.conflictCheck);
      let i = null;
      return ao(n == null ? void 0 : n.path, t) || (i = so(t)), !n && !i && bn("No Environment variables loaded"), (i == null ? void 0 : i.dotenvResult.error) ? console.error(pe(ne("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n == null ? void 0 : n.message, i == null ? void 0 : i.message].filter(Boolean).join(`
`), parsed: __spreadValues(__spreadValues({}, (_a4 = n == null ? void 0 : n.dotenvResult) == null ? void 0 : _a4.parsed), (_b2 = i == null ? void 0 : i.dotenvResult) == null ? void 0 : _b2.parsed) };
    }
    function Hl(e, t, r) {
      let n = e == null ? void 0 : e.dotenvResult.parsed, i = !ao(e == null ? void 0 : e.path, t);
      if (n && t && i && pr.default.existsSync(t)) {
        let o = wn.default.parse(pr.default.readFileSync(t)), s = [];
        for (let a in o)
          n[a] === o[a] && s.push(a);
        if (s.length > 0) {
          let a = it.default.relative(process.cwd(), e.path), l = it.default.relative(process.cwd(), t);
          if (r === "error") {
            let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${X(a)} and ${X(l)}
Conflicting env vars:
${s.map((c) => `  ${ne(c)}`).join(`
`)}

We suggest to move the contents of ${X(l)} to ${X(a)} to consolidate your env vars.
`;
            throw new Error(u);
          } else if (r === "warn") {
            let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => ne(c)).join(", ")} in ${X(a)} and ${X(l)}
Env vars from ${X(l)} overwrite the ones from ${X(a)}
      `;
            console.warn(`${ye("warn(prisma)")} ${u}`);
          }
        }
      }
    }
    function so(e) {
      return zl(e) ? (bn(`Environment variables loaded from ${e}`), { dotenvResult: oo(wn.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 })), message: Oe(`Environment variables loaded from ${it.default.relative(process.cwd(), e)}`), path: e }) : (bn(`Environment variables not found at ${e}`), null);
    }
    function ao(e, t) {
      return e && t && it.default.resolve(e) === it.default.resolve(t);
    }
    function zl(e) {
      return Boolean(e && pr.default.existsSync(e));
    }
    var lo = "library";
    function Pn(e) {
      let t = Yl();
      return t || ((e == null ? void 0 : e.config.engineType) === "library" ? "library" : (e == null ? void 0 : e.config.engineType) === "binary" ? "binary" : lo);
    }
    function Yl() {
      let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    var eu = A(En());
    var k = A(require("path"));
    var tu = A(En());
    var Mm = N("prisma:engines");
    function go() {
      return k.default.join(__dirname, "../");
    }
    var Am = "libquery-engine";
    k.default.join(__dirname, "../query-engine-darwin");
    k.default.join(__dirname, "../query-engine-darwin-arm64");
    k.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
    k.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
    k.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
    k.default.join(__dirname, "../query-engine-linux-static-x64");
    k.default.join(__dirname, "../query-engine-linux-static-arm64");
    k.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
    k.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
    k.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
    k.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
    k.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
    k.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
    k.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
    k.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
    k.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
    k.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
    k.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
    k.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
    k.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
    k.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
    k.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
    k.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
    k.default.join(__dirname, "../query_engine-windows.dll.node");
    var Tn = A(require("fs"));
    var yo = N("chmodPlusX");
    function vn(e) {
      if (process.platform === "win32")
        return;
      let t = Tn.default.statSync(e), r = t.mode | 64 | 8 | 1;
      if (t.mode === r) {
        yo(`Execution permissions of ${e} are fine`);
        return;
      }
      let n = r.toString(8).slice(-3);
      yo(`Have to call chmodPlusX on ${e}`), Tn.default.chmodSync(e, n);
    }
    function Cn(e) {
      let t = e.e, r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${Tt("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Oe(e.id)}\`).`, s = et({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${r("libssl")}. Please install ${a} and try again.`;
      }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
      return `${o}
${s}

Details: ${t.message}`;
    }
    var Mt = A(require("path"));
    function Mn(e) {
      return Mt.default.sep === Mt.default.posix.sep ? e : e.split(Mt.default.sep).join(Mt.default.posix.sep);
    }
    var xo = A(An());
    function Rn(e) {
      return String(new Sn(e));
    }
    var Sn = class {
      constructor(t) {
        this.config = t;
      }
      toString() {
        let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: ru(t.binaryTargets) }));
        return `generator ${t.name} {
${(0, xo.default)(nu(n), 2)}
}`;
      }
    };
    function ru(e) {
      let t;
      if (e.length > 0) {
        let r = e.find((n) => n.fromEnvVar !== null);
        r ? t = `env("${r.fromEnvVar}")` : t = e.map((n) => n.native ? "native" : n.value);
      } else
        t = void 0;
      return t;
    }
    function nu(e) {
      let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
      return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${iu(n)}`).join(`
`);
    }
    function iu(e) {
      return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
    }
    var St = {};
    xt(St, { error: () => au, info: () => su, log: () => ou, query: () => lu, should: () => bo, tags: () => At, warn: () => Fn });
    var At = { error: pe("prisma:error"), warn: ye("prisma:warn"), info: ke("prisma:info"), query: Xe("prisma:query") };
    var bo = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function ou(...e) {
      console.log(...e);
    }
    function Fn(e, ...t) {
      bo.warn() && console.warn(`${At.warn} ${e}`, ...t);
    }
    function su(e, ...t) {
      console.info(`${At.info} ${e}`, ...t);
    }
    function au(e, ...t) {
      console.error(`${At.error} ${e}`, ...t);
    }
    function lu(e, ...t) {
      console.log(`${At.query} ${e}`, ...t);
    }
    function Je(e, t) {
      throw new Error(t);
    }
    function kn(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    var Dn = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
    function ot(e, t) {
      let r = {};
      for (let n of Object.keys(e))
        r[n] = t(e[n], n);
      return r;
    }
    function _n(e, t) {
      if (e.length === 0)
        return;
      let r = e[0];
      for (let n = 1; n < e.length; n++)
        t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    function ee(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    var vo = /* @__PURE__ */ new Set();
    var In = (e, t, ...r) => {
      vo.has(e) || (vo.add(e), Fn(t, ...r));
    };
    var H = class extends Error {
      constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) {
        super(r);
        this.name = "PrismaClientKnownRequestError", this.code = n, this.clientVersion = i, this.meta = o, Object.defineProperty(this, "batchRequestIdx", { value: s, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    ee(H, "PrismaClientKnownRequestError");
    var Ce = class extends H {
      constructor(t, r) {
        super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    };
    ee(Ce, "NotFoundError");
    var _ = class extends Error {
      constructor(r, n, i) {
        super(r);
        this.name = "PrismaClientInitializationError", this.clientVersion = n, this.errorCode = i, Error.captureStackTrace(_);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    ee(_, "PrismaClientInitializationError");
    var ae = class extends Error {
      constructor(r, n) {
        super(r);
        this.name = "PrismaClientRustPanicError", this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    ee(ae, "PrismaClientRustPanicError");
    var z = class extends Error {
      constructor(r, { clientVersion: n, batchRequestIdx: i }) {
        super(r);
        this.name = "PrismaClientUnknownRequestError", this.clientVersion = n, Object.defineProperty(this, "batchRequestIdx", { value: i, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    ee(z, "PrismaClientUnknownRequestError");
    var te = class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    ee(te, "PrismaClientValidationError");
    var st = class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics(__spreadValues({ format: "prometheus" }, t));
      }
      json(t) {
        return this._engine.metrics(__spreadValues({ format: "json" }, t));
      }
    };
    function Rt(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    function Co(e, t) {
      let r = Rt(() => pu(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    function pu(e) {
      return { datamodel: { models: Nn(e.models), enums: Nn(e.enums), types: Nn(e.types) } };
    }
    function Nn(e) {
      return Object.entries(e).map(([t, r]) => __spreadValues({ name: t }, r));
    }
    var qa = require("async_hooks");
    var ja = require("events");
    var Ba = A(require("fs"));
    var Qt = A(require("path"));
    var U = class {
      constructor(t, r) {
        if (t.length - 1 !== r.length)
          throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof U ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof U) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; )
              this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else
            this.values[o++] = s, this.strings[o] = a;
        }
      }
      get text() {
        let t = 1, r = this.strings[0];
        for (; t < this.strings.length; )
          r += `$${t}${this.strings[t++]}`;
        return r;
      }
      get sql() {
        let t = 1, r = this.strings[0];
        for (; t < this.strings.length; )
          r += `?${this.strings[t++]}`;
        return r;
      }
      inspect() {
        return { text: this.text, sql: this.sql, values: this.values };
      }
    };
    function Mo(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new U([r, ...Array(e.length - 1).fill(t), n], e);
    }
    function Ln(e) {
      return new U([e], []);
    }
    var Ao = Ln("");
    function $n(e, ...t) {
      return new U(e, t);
    }
    function Ft(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    function re(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    var he = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        var _a4;
        return (_a4 = this._map.get(t)) == null ? void 0 : _a4.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n)
          return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    function Ge(e) {
      let t = new he();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        var _a4;
        return (_a4 = e.getPropertyDescriptor) == null ? void 0 : _a4.call(e, r);
      } };
    }
    var Fo = require("util");
    var fr = { enumerable: true, configurable: true, writable: true };
    function gr(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => fr, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    var So = Symbol.for("nodejs.util.inspect.custom");
    function xe(e, t) {
      let r = du(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s))
          return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        var _a4, _b2;
        if (n.has(s))
          return true;
        let a = r.get(s);
        return a ? (_b2 = (_a4 = a.has) == null ? void 0 : _a4.call(a, s)) != null ? _b2 : true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = Ro(Reflect.ownKeys(o), r), a = Ro(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        var _a4, _b2, _c2;
        return ((_c2 = (_b2 = (_a4 = r.get(s)) == null ? void 0 : _a4.getPropertyDescriptor) == null ? void 0 : _b2.call(_a4, s)) == null ? void 0 : _c2.writable) === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable)
          return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? __spreadValues(__spreadValues({}, fr), l == null ? void 0 : l.getPropertyDescriptor(s)) : fr : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[So] = function(o, s, a = Fo.inspect) {
        let l = __spreadValues({}, this);
        return delete l[So], a(l, s);
      }, i;
    }
    function du(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n)
          t.set(i, r);
      }
      return t;
    }
    function Ro(e, t) {
      return e.filter((r) => {
        var _a4, _b2, _c2;
        return (_c2 = (_b2 = (_a4 = t.get(r)) == null ? void 0 : _a4.has) == null ? void 0 : _b2.call(_a4, r)) != null ? _c2 : true;
      });
    }
    function Ot(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    function Oo({ error: e, user_facing_error: t }, r) {
      return t.error_code ? new H(t.message, { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new z(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    var yr = class {
    };
    var No = A(require("fs"));
    var kt = A(require("path"));
    function hr(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${mu(e)}`;
    }
    function mu(e) {
      let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...r, i];
      return Rn(__spreadProps(__spreadValues({}, t), { binaryTargets: o }));
    }
    function De(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
    }
    function _e(e) {
      let { searchedLocations: t } = e;
      return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
    }
    function ko(e) {
      let { runtimeBinaryTarget: t } = e;
      return `${De(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${hr(e)}

${_e(e)}`;
    }
    function xr(e) {
      return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
    }
    function Do(e) {
      let { queryEngineName: t } = e;
      return `${De(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${xr("engine-not-found-bundler-investigation")}

${_e(e)}`;
    }
    function _o(e) {
      var _a4;
      let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e, n = r.find((i) => i.native);
      return `${De(e)}

This happened because Prisma Client was generated for "${(_a4 = n == null ? void 0 : n.value) != null ? _a4 : "unknown"}", but the actual deployment required "${t}".
${hr(e)}

${_e(e)}`;
    }
    function Io(e) {
      let { queryEngineName: t } = e;
      return `${De(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${xr("engine-not-found-tooling-investigation")}

${_e(e)}`;
    }
    var fu = N("prisma:client:engines:resolveEnginePath");
    var gu = () => new RegExp("runtime[\\\\/]library\\.m?js$");
    function Lo(e, t) {
      return __async(this, null, function* () {
        var _a4, _b2, _c2;
        let r = (_a4 = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e]) != null ? _a4 : t.prismaPath;
        if (r !== void 0)
          return r;
        let { enginePath: n, searchedLocations: i } = yield yu(e, t);
        if (fu("enginePath", n), n !== void 0 && e === "binary" && vn(n), n !== void 0)
          return t.prismaPath = n;
        let o = yield nt(), s = (_c2 = (_b2 = t.generator) == null ? void 0 : _b2.binaryTargets) != null ? _c2 : [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(gu()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: $o(e, o), expectedLocation: kt.default.relative(process.cwd(), t.dirname) }, p;
        throw a && l ? p = _o(c) : l ? p = ko(c) : u ? p = Do(c) : p = Io(c), new _(p, t.clientVersion);
      });
    }
    function yu(engineType, config) {
      return __async(this, null, function* () {
        var _a4, _b2, _c2;
        let binaryTarget = yield nt(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, kt.default.resolve(dirname, ".."), (_c2 = (_b2 = (_a4 = config.generator) == null ? void 0 : _a4.output) == null ? void 0 : _b2.value) != null ? _c2 : dirname, kt.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
        __filename.includes("resolveEnginePath") && searchLocations.push(go());
        for (let e of searchLocations) {
          let t = $o(engineType, binaryTarget), r = kt.default.join(e, t);
          if (searchedLocations.push(e), No.default.existsSync(r))
            return { enginePath: r, searchedLocations };
        }
        return { enginePath: void 0, searchedLocations };
      });
    }
    function $o(e, t) {
      return e === "library" ? cn(t, "fs") : `query-engine-${t}${t === "windows" ? ".exe" : ""}`;
    }
    function qo(e, t) {
      return { batch: e, transaction: (t == null ? void 0 : t.kind) === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    var qn = A(On());
    function jo(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
    }
    function Bo(e) {
      return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    var Ko = A(To());
    function Vo({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.md", body: i }) {
      return (0, Ko.default)({ user: t, repo: r, template: n, title: e, body: i });
    }
    function Uo({ version: e, platform: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
      var _a4, _b2;
      let a = Oi(6e3 - ((_a4 = s == null ? void 0 : s.length) != null ? _a4 : 0)), l = Bo((0, qn.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, qn.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(_b2 = process.version) == null ? void 0 : _b2.padEnd(19)}| 
| OS              | ${t == null ? void 0 : t.padEnd(19)}|
| Prisma Client   | ${e == null ? void 0 : e.padEnd(19)}|
| Query Engine    | ${i == null ? void 0 : i.padEnd(19)}|
| Database        | ${o == null ? void 0 : o.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? jo(s) : ""}
\`\`\`
`), p = Vo({ title: r, body: c });
      return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${X(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    var Ho = A(require("fs"));
    function Qo(e) {
      if ((e == null ? void 0 : e.kind) === "itx")
        return e.options.id;
    }
    var Bn = A(require("os"));
    var Jo = A(require("path"));
    var jn = Symbol("PrismaLibraryEngineCache");
    function hu() {
      let e = globalThis;
      return e[jn] === void 0 && (e[jn] = {}), e[jn];
    }
    function xu(e) {
      let t = hu();
      if (t[e] !== void 0)
        return t[e];
      let r = Jo.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
      return process.platform !== "win32" && (i = Bn.default.constants.dlopen.RTLD_LAZY | Bn.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports;
    }
    var br = class {
      constructor(t) {
        this.config = t;
      }
      loadLibrary() {
        return __async(this, null, function* () {
          let t = yield yn(), r = yield Lo("library", this.config);
          try {
            return this.config.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => xu(r));
          } catch (n) {
            let i = Cn({ e: n, platformInfo: t, id: r });
            throw new _(i, this.config.clientVersion);
          }
        });
      }
    };
    var Me = N("prisma:client:libraryEngine");
    function bu(e) {
      return e.item_type === "query" && "query" in e;
    }
    function wu(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    var Go = [...hn, "native"];
    var Wo = 0;
    var Dt = class extends yr {
      constructor(r, n = new br(r)) {
        var _a4, _b2;
        super();
        try {
          this.datamodel = Ho.default.readFileSync(r.datamodelPath, "utf-8");
        } catch (i) {
          throw i.stack.match(/\/\.next|\/next@|\/next\//) ? new _(`Your schema.prisma could not be found, and we detected that you are using Next.js.
Find out why and learn how to fix this: https://pris.ly/d/schema-not-found-nextjs`, r.clientVersion) : r.isBundled === true ? new _("Prisma Client could not find its `schema.prisma`. This is likely caused by a bundling step, which leads to `schema.prisma` not being copied near the resulting bundle. We would appreciate if you could take the time to share some information with us.\nPlease help us by answering a few questions: https://pris.ly/bundler-investigation-error", r.clientVersion) : i;
        }
        this.config = r, this.libraryStarted = false, this.logQueries = (_a4 = r.logQueries) != null ? _a4 : false, this.logLevel = (_b2 = r.logLevel) != null ? _b2 : "error", this.libraryLoader = n, this.logEmitter = r.logEmitter, this.datasourceOverrides = r.datasources ? this.convertDatasources(r.datasources) : {}, r.enableDebugLogs && (this.logLevel = "debug"), this.libraryInstantiationPromise = this.instantiateLibrary(), this.checkForTooManyEngines();
      }
      checkForTooManyEngines() {
        Wo === 10 && console.warn(`${ye("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`);
      }
      transaction(r, n, i) {
        return __async(this, null, function* () {
          var _a4, _b2, _c2, _d, _e2;
          yield this.start();
          let o = JSON.stringify(n), s;
          if (r === "start") {
            let l = JSON.stringify({ max_wait: (_a4 = i == null ? void 0 : i.maxWait) != null ? _a4 : 2e3, timeout: (_b2 = i == null ? void 0 : i.timeout) != null ? _b2 : 5e3, isolation_level: i == null ? void 0 : i.isolationLevel });
            s = yield (_c2 = this.engine) == null ? void 0 : _c2.startTransaction(l, o);
          } else
            r === "commit" ? s = yield (_d = this.engine) == null ? void 0 : _d.commitTransaction(i.id, o) : r === "rollback" && (s = yield (_e2 = this.engine) == null ? void 0 : _e2.rollbackTransaction(i.id, o));
          let a = this.parseEngineResponse(s);
          if (a.error_code)
            throw new H(a.message, { code: a.error_code, clientVersion: this.config.clientVersion, meta: a.meta });
          return a;
        });
      }
      instantiateLibrary() {
        return __async(this, null, function* () {
          if (Me("internalSetup"), this.libraryInstantiationPromise)
            return this.libraryInstantiationPromise;
          un(), this.platform = yield this.getPlatform(), yield this.loadEngine(), this.version();
        });
      }
      getPlatform() {
        return __async(this, null, function* () {
          if (this.platform)
            return this.platform;
          let r = yield nt();
          if (!Go.includes(r))
            throw new _(`Unknown ${pe("PRISMA_QUERY_ENGINE_LIBRARY")} ${pe(ne(r))}. Possible binaryTargets: ${Ue(Go.join(", "))} or a path to the query engine library.
You may have to run ${Ue("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
          return r;
        });
      }
      parseEngineResponse(r) {
        if (!r)
          throw new z("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(r);
        } catch (e) {
          throw new z("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      convertDatasources(r) {
        let n = /* @__PURE__ */ Object.create(null);
        for (let { name: i, url: o } of r)
          n[i] = o;
        return n;
      }
      loadEngine() {
        return __async(this, null, function* () {
          var _a4;
          if (!this.engine) {
            this.QueryEngineConstructor || (this.library = yield this.libraryLoader.loadLibrary(), this.QueryEngineConstructor = this.library.QueryEngine);
            try {
              let r = new WeakRef(this);
              this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: (_a4 = this.config.logQueries) != null ? _a4 : false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
                var _a5;
                (_a5 = r.deref()) == null ? void 0 : _a5.logger(n);
              }), Wo++;
            } catch (r) {
              let n = r, i = this.parseInitError(n.message);
              throw typeof i == "string" ? n : new _(i.message, this.config.clientVersion, i.error_code);
            }
          }
        });
      }
      logger(r) {
        var _a4;
        let n = this.parseEngineResponse(r);
        if (!!n) {
          if ("span" in n) {
            this.config.tracingHelper.createEngineSpan(n);
            return;
          }
          n.level = (_a4 = n == null ? void 0 : n.level.toLowerCase()) != null ? _a4 : "unknown", bu(n) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: n.query, params: n.params, duration: Number(n.duration_ms), target: n.module_path }) : wu(n) ? this.loggerRustPanic = new ae(this.getErrorMessageWithLink(`${n.message}: ${n.reason} in ${n.file}:${n.line}:${n.column}`), this.config.clientVersion) : this.logEmitter.emit(n.level, { timestamp: /* @__PURE__ */ new Date(), message: n.message, target: n.module_path });
        }
      }
      getErrorMessageWithLink(r) {
        var _a4;
        return Uo({ platform: this.platform, title: r, version: this.config.clientVersion, engineVersion: (_a4 = this.versionInfo) == null ? void 0 : _a4.commit, database: this.config.activeProvider, query: this.lastQuery });
      }
      parseInitError(r) {
        try {
          return JSON.parse(r);
        } catch (e) {
        }
        return r;
      }
      parseRequestError(r) {
        try {
          return JSON.parse(r);
        } catch (e) {
        }
        return r;
      }
      on(r, n) {
        if (r === "beforeExit")
          throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
        this.logEmitter.on(r, n);
      }
      start() {
        return __async(this, null, function* () {
          if (yield this.libraryInstantiationPromise, yield this.libraryStoppingPromise, this.libraryStartingPromise)
            return Me(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
          if (this.libraryStarted)
            return;
          let r = () => __async(this, null, function* () {
            var _a4;
            Me("library starting");
            try {
              let n = { traceparent: this.config.tracingHelper.getTraceParent() };
              yield (_a4 = this.engine) == null ? void 0 : _a4.connect(JSON.stringify(n)), this.libraryStarted = true, Me("library started");
            } catch (n) {
              let i = this.parseInitError(n.message);
              throw typeof i == "string" ? n : new _(i.message, this.config.clientVersion, i.error_code);
            } finally {
              this.libraryStartingPromise = void 0;
            }
          });
          return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", r), this.libraryStartingPromise;
        });
      }
      stop() {
        return __async(this, null, function* () {
          if (yield this.libraryStartingPromise, yield this.executingQueryPromise, this.libraryStoppingPromise)
            return Me("library is already stopping"), this.libraryStoppingPromise;
          if (!this.libraryStarted)
            return;
          let r = () => __async(this, null, function* () {
            var _a4;
            yield new Promise((i) => setTimeout(i, 5)), Me("library stopping");
            let n = { traceparent: this.config.tracingHelper.getTraceParent() };
            yield (_a4 = this.engine) == null ? void 0 : _a4.disconnect(JSON.stringify(n)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, Me("library stopped");
          });
          return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", r), this.libraryStoppingPromise;
        });
      }
      version() {
        var _a4, _b2, _c2;
        return this.versionInfo = (_a4 = this.library) == null ? void 0 : _a4.version(), (_c2 = (_b2 = this.versionInfo) == null ? void 0 : _b2.version) != null ? _c2 : "unknown";
      }
      debugPanic(r) {
        var _a4;
        return (_a4 = this.library) == null ? void 0 : _a4.debugPanic(r);
      }
      request(_0, _1) {
        return __async(this, arguments, function* (r, { traceparent: n, interactiveTransaction: i }) {
          var _a4, _b2;
          Me(`sending request, this.libraryStarted: ${this.libraryStarted}`);
          let o = JSON.stringify({ traceparent: n }), s = JSON.stringify(r);
          try {
            yield this.start(), this.executingQueryPromise = (_a4 = this.engine) == null ? void 0 : _a4.query(s, o, i == null ? void 0 : i.id), this.lastQuery = s;
            let a = this.parseEngineResponse(yield this.executingQueryPromise);
            if (a.errors)
              throw a.errors.length === 1 ? this.buildQueryError(a.errors[0]) : new z(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
            if (this.loggerRustPanic)
              throw this.loggerRustPanic;
            return { data: a, elapsed: 0 };
          } catch (a) {
            if (a instanceof _)
              throw a;
            if (a.code === "GenericFailure" && ((_b2 = a.message) == null ? void 0 : _b2.startsWith("PANIC:")))
              throw new ae(this.getErrorMessageWithLink(a.message), this.config.clientVersion);
            let l = this.parseRequestError(a.message);
            throw typeof l == "string" ? a : new z(`${l.message}
${l.backtrace}`, { clientVersion: this.config.clientVersion });
          }
        });
      }
      requestBatch(_0, _1) {
        return __async(this, arguments, function* (r, { transaction: n, traceparent: i }) {
          Me("requestBatch");
          let o = qo(r, n);
          yield this.start(), this.lastQuery = JSON.stringify(o), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: i }), Qo(n));
          let s = yield this.executingQueryPromise, a = this.parseEngineResponse(s);
          if (a.errors)
            throw a.errors.length === 1 ? this.buildQueryError(a.errors[0]) : new z(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
          let { batchResult: l, errors: u } = a;
          if (Array.isArray(l))
            return l.map((c) => {
              var _a4;
              return c.errors && c.errors.length > 0 ? (_a4 = this.loggerRustPanic) != null ? _a4 : this.buildQueryError(c.errors[0]) : { data: c, elapsed: 0 };
            });
          throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(a));
        });
      }
      buildQueryError(r) {
        return r.user_facing_error.is_panic ? new ae(this.getErrorMessageWithLink(r.user_facing_error.message), this.config.clientVersion) : Oo(r, this.config.clientVersion);
      }
      metrics(r) {
        return __async(this, null, function* () {
          yield this.start();
          let n = yield this.engine.metrics(JSON.stringify(r));
          return r.format === "prometheus" ? n : this.parseEngineResponse(n);
        });
      }
    };
    var at = class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r) {
        let n = r.length - 1;
        for (let i = 0; i < r.length; i++)
          this.write(r[i]), i !== n && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t == null ? void 0 : t(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    var wr = Symbol();
    var Kn = /* @__PURE__ */ new WeakMap();
    var Ae = class {
      constructor(t) {
        t === wr ? Kn.set(this, `Prisma.${this._getName()}`) : Kn.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Kn.get(this);
      }
    };
    var _t = class extends Ae {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var It = class extends _t {
    };
    Vn(It, "DbNull");
    var Nt = class extends _t {
    };
    Vn(Nt, "JsonNull");
    var Lt = class extends _t {
    };
    Vn(Lt, "AnyNull");
    var Pr = { classes: { DbNull: It, JsonNull: Nt, AnyNull: Lt }, instances: { DbNull: new It(wr), JsonNull: new Nt(wr), AnyNull: new Lt(wr) } };
    function Vn(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    function lt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function Er(e) {
      return e.toString() !== "Invalid Date";
    }
    var ut = 9e15;
    var $e = 1e9;
    var Un = "0123456789abcdef";
    var vr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var Cr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var Qn = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -ut, maxE: ut, crypto: false };
    var Xo;
    var Se;
    var P = true;
    var Ar = "[DecimalError] ";
    var Le = Ar + "Invalid argument: ";
    var es = Ar + "Precision limit exceeded";
    var ts = Ar + "crypto unavailable";
    var rs = "[object Decimal]";
    var Y = Math.floor;
    var $ = Math.pow;
    var Pu = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var Eu = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var Tu = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var ns = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var me = 1e7;
    var w = 7;
    var vu = 9007199254740991;
    var Cu = vr.length - 1;
    var Jn = Cr.length - 1;
    var m = { toStringTag: rs };
    m.absoluteValue = m.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), h(e);
    };
    m.ceil = function() {
      return h(new this.constructor(this), this.e + 1, 2);
    };
    m.clampedTo = m.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s)
        return new i(NaN);
      if (e.gt(t))
        throw Error(Le + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    m.comparedTo = m.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a)
        return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0])
        return s[0] ? l : a[0] ? -u : 0;
      if (l !== u)
        return l;
      if (o.e !== e.e)
        return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (s[t] !== a[t])
          return s[t] > a[t] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    m.cosine = m.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + w, n.rounding = 1, r = Mu(n, ls(n, r)), n.precision = e, n.rounding = t, h(Se == 2 || Se == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    m.cubeRoot = m.cbrt = function() {
      var e, t, r, n, i, o, s, a, l, u, c = this, p = c.constructor;
      if (!c.isFinite() || c.isZero())
        return new p(c);
      for (P = false, o = c.s * $(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Q(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = $(r, 1 / 3), e = Y((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3; ; )
        if (a = n, l = a.times(a).times(a), u = l.plus(c), n = F(u.plus(c).times(a), u.plus(l), s + 2, 1), Q(a.d).slice(0, s) === (r = Q(n.d)).slice(0, s))
          if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
            if (!i && (h(a, e + 1, 0), a.times(a).times(a).eq(c))) {
              n = a;
              break;
            }
            s += 4, i = 1;
          } else {
            (!+r || !+r.slice(1) && r.charAt(0) == "5") && (h(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
            break;
          }
      return P = true, h(n, e, p.rounding, t);
    };
    m.decimalPlaces = m.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - Y(this.e / w)) * w, e = t[e], e)
          for (; e % 10 == 0; e /= 10)
            r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    m.dividedBy = m.div = function(e) {
      return F(this, new this.constructor(e));
    };
    m.dividedToIntegerBy = m.divToInt = function(e) {
      var t = this, r = t.constructor;
      return h(F(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    m.equals = m.eq = function(e) {
      return this.cmp(e) === 0;
    };
    m.floor = function() {
      return h(new this.constructor(this), this.e + 1, 3);
    };
    m.greaterThan = m.gt = function(e) {
      return this.cmp(e) > 0;
    };
    m.greaterThanOrEqualTo = m.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    m.hyperbolicCosine = m.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite())
        return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero())
        return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Rr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = ct(s, 1, o.times(t), new s(1), true);
      for (var l, u = e, c = new s(8); u--; )
        l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
      return h(o, s.precision = r, s.rounding = n, true);
    };
    m.hyperbolicSine = m.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero())
        return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
        i = ct(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Rr(5, e)), i = ct(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
          s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = t, o.rounding = r, h(i, t, r, true);
    };
    m.hyperbolicTangent = m.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, F(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    m.inverseCosine = m.acos = function() {
      var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
      return n !== -1 ? n === 0 ? t.isNeg() ? de(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? de(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = de(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
    };
    m.inverseHyperbolicCosine = m.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, P = false, r = r.times(r).minus(1).sqrt().plus(r), P = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    m.inverseHyperbolicSine = m.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, P = false, r = r.times(r).plus(1).sqrt().plus(r), P = true, n.precision = e, n.rounding = t, r.ln());
    };
    m.inverseHyperbolicTangent = m.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? h(new o(i), e, t, true) : (o.precision = r = n - i.e, i = F(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    m.inverseSine = m.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = de(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    m.inverseTangent = m.atan = function() {
      var e, t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
      if (u.isFinite()) {
        if (u.isZero())
          return new c(u);
        if (u.abs().eq(1) && p + 4 <= Jn)
          return s = de(c, p + 4, d).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s)
          return new c(NaN);
        if (p + 4 <= Jn)
          return s = de(c, p + 4, d).times(0.5), s.s = u.s, s;
      }
      for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / w + 2 | 0), e = r; e; --e)
        u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (P = false, t = Math.ceil(a / w), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1; )
        if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0)
          for (e = t; s.d[e] === o.d[e] && e--; )
            ;
      return r && (s = s.times(2 << r - 1)), P = true, h(s, c.precision = p, c.rounding = d, true);
    };
    m.isFinite = function() {
      return !!this.d;
    };
    m.isInteger = m.isInt = function() {
      return !!this.d && Y(this.e / w) > this.d.length - 2;
    };
    m.isNaN = function() {
      return !this.s;
    };
    m.isNegative = m.isNeg = function() {
      return this.s < 0;
    };
    m.isPositive = m.isPos = function() {
      return this.s > 0;
    };
    m.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    m.lessThan = m.lt = function(e) {
      return this.cmp(e) < 0;
    };
    m.lessThanOrEqualTo = m.lte = function(e) {
      return this.cmp(e) < 1;
    };
    m.logarithm = m.log = function(e) {
      var t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, g = 5;
      if (e == null)
        e = new c(10), t = true;
      else {
        if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
          return new c(NaN);
        t = e.eq(10);
      }
      if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
        return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t)
        if (r.length > 1)
          o = true;
        else {
          for (i = r[0]; i % 10 === 0; )
            i /= 10;
          o = i !== 1;
        }
      if (P = false, a = p + g, s = Ne(u, a), n = t ? Mr(c, a + 10) : Ne(e, a), l = F(s, n, a, 1), $t(l.d, i = p, d))
        do
          if (a += 10, s = Ne(u, a), n = t ? Mr(c, a + 10) : Ne(e, a), l = F(s, n, a, 1), !o) {
            +Q(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = h(l, p + 1, 0));
            break;
          }
        while ($t(l.d, i += 10, d));
      return P = true, h(l, p, d);
    };
    m.minus = m.sub = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, g = this, y = g.constructor;
      if (e = new y(e), !g.d || !e.d)
        return !g.s || !e.s ? e = new y(NaN) : g.d ? e.s = -e.s : e = new y(e.d || g.s !== e.s ? g : NaN), e;
      if (g.s != e.s)
        return e.s = -e.s, g.plus(e);
      if (u = g.d, d = e.d, a = y.precision, l = y.rounding, !u[0] || !d[0]) {
        if (d[0])
          e.s = -e.s;
        else if (u[0])
          e = new y(g);
        else
          return new y(l === 3 ? -0 : 0);
        return P ? h(e, a, l) : e;
      }
      if (r = Y(e.e / w), c = Y(g.e / w), u = u.slice(), o = c - r, o) {
        for (p = o < 0, p ? (t = u, o = -o, s = d.length) : (t = d, r = c, s = u.length), n = Math.max(Math.ceil(a / w), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
          t.push(0);
        t.reverse();
      } else {
        for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++)
          if (u[n] != d[n]) {
            p = u[n] < d[n];
            break;
          }
        o = 0;
      }
      for (p && (t = u, u = d, d = t, e.s = -e.s), s = u.length, n = d.length - s; n > 0; --n)
        u[s++] = 0;
      for (n = d.length; n > o; ) {
        if (u[--n] < d[n]) {
          for (i = n; i && u[--i] === 0; )
            u[i] = me - 1;
          --u[i], u[n] += me;
        }
        u[n] -= d[n];
      }
      for (; u[--s] === 0; )
        u.pop();
      for (; u[0] === 0; u.shift())
        --r;
      return u[0] ? (e.d = u, e.e = Sr(u, r), P ? h(e, a, l) : e) : new y(l === 3 ? -0 : 0);
    };
    m.modulo = m.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? h(new n(r), n.precision, n.rounding) : (P = false, n.modulo == 9 ? (t = F(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = F(r, e, 0, n.modulo, 1), t = t.times(e), P = true, r.minus(t));
    };
    m.naturalExponential = m.exp = function() {
      return Gn(this);
    };
    m.naturalLogarithm = m.ln = function() {
      return Ne(this);
    };
    m.negated = m.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, h(e);
    };
    m.plus = m.add = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
      if (e = new d(e), !p.d || !e.d)
        return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
      if (p.s != e.s)
        return e.s = -e.s, p.minus(e);
      if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0])
        return c[0] || (e = new d(p)), P ? h(e, a, l) : e;
      if (o = Y(p.e / w), n = Y(e.e / w), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / w), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; )
          r.push(0);
        r.reverse();
      }
      for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0; i; )
        t = (u[--i] = u[i] + c[i] + t) / me | 0, u[i] %= me;
      for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; )
        u.pop();
      return e.d = u, e.e = Sr(u, n), P ? h(e, a, l) : e;
    };
    m.precision = m.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(Le + e);
      return r.d ? (t = is(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    m.round = function() {
      var e = this, t = e.constructor;
      return h(new t(e), e.e + 1, t.rounding);
    };
    m.sine = m.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + w, n.rounding = 1, r = Su(n, ls(n, r)), n.precision = e, n.rounding = t, h(Se > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.squareRoot = m.sqrt = function() {
      var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
      if (u !== 1 || !a || !a[0])
        return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (P = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = Q(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = Y((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3; ; )
        if (o = n, n = o.plus(F(s, o, r + 2, 1)).times(0.5), Q(o.d).slice(0, r) === (t = Q(n.d)).slice(0, r))
          if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
            if (!i && (h(o, l + 1, 0), o.times(o).eq(s))) {
              n = o;
              break;
            }
            r += 4, i = 1;
          } else {
            (!+t || !+t.slice(1) && t.charAt(0) == "5") && (h(n, l + 1, 1), e = !n.times(n).eq(s));
            break;
          }
      return P = true, h(n, l, c.rounding, e);
    };
    m.tangent = m.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = F(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, h(Se == 2 || Se == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.times = m.mul = function(e) {
      var t, r, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, g = (e = new p(e)).d;
      if (e.s *= c.s, !d || !d[0] || !g || !g[0])
        return new p(!e.s || d && !d[0] && !g || g && !g[0] && !d ? NaN : !d || !g ? e.s / 0 : e.s * 0);
      for (r = Y(c.e / w) + Y(e.e / w), l = d.length, u = g.length, l < u && (o = d, d = g, g = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; )
        o.push(0);
      for (n = u; --n >= 0; ) {
        for (t = 0, i = l + n; i > n; )
          a = o[i] + g[n] * d[i - n - 1] + t, o[i--] = a % me | 0, t = a / me | 0;
        o[i] = (o[i] + t) % me | 0;
      }
      for (; !o[--s]; )
        o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = Sr(o, r), P ? h(e, p.precision, p.rounding) : e;
    };
    m.toBinary = function(e, t) {
      return Hn(this, 2, e, t);
    };
    m.toDecimalPlaces = m.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (oe(e, 0, $e), t === void 0 ? t = n.rounding : oe(t, 0, 8), h(r, e + r.e + 1, t));
    };
    m.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = be(n, true) : (oe(e, 0, $e), t === void 0 ? t = i.rounding : oe(t, 0, 8), n = h(new i(n), e + 1, t), r = be(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = be(i) : (oe(e, 0, $e), t === void 0 ? t = o.rounding : oe(t, 0, 8), n = h(new o(i), e + i.e + 1, t), r = be(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    m.toFraction = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, g = this, y = g.d, f = g.constructor;
      if (!y)
        return new f(g);
      if (u = r = new f(1), n = l = new f(0), t = new f(n), o = t.e = is(y) - g.e - 1, s = o % w, t.d[0] = $(10, s < 0 ? w + s : s), e == null)
        e = o > 0 ? t : u;
      else {
        if (a = new f(e), !a.isInt() || a.lt(u))
          throw Error(Le + a);
        e = a.gt(t) ? o > 0 ? t : u : a;
      }
      for (P = false, a = new f(Q(y)), c = f.precision, f.precision = o = y.length * w * 2; p = F(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1; )
        r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i;
      return i = F(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = g.s, d = F(u, n, o, 1).minus(g).abs().cmp(F(l, r, o, 1).minus(g).abs()) < 1 ? [u, n] : [l, r], f.precision = c, P = true, d;
    };
    m.toHexadecimal = m.toHex = function(e, t) {
      return Hn(this, 16, e, t);
    };
    m.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d)
          return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : oe(t, 0, 8), !r.d)
          return e.s ? r : e;
        if (!e.d)
          return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (P = false, r = F(r, e, 0, t, 1).times(e), P = true, h(r)) : (e.s = r.s, r = e), r;
    };
    m.toNumber = function() {
      return +this;
    };
    m.toOctal = function(e, t) {
      return Hn(this, 8, e, t);
    };
    m.toPower = m.pow = function(e) {
      var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0])
        return new l($(+a, u));
      if (a = new l(a), a.eq(1))
        return a;
      if (n = l.precision, o = l.rounding, e.eq(1))
        return h(a, n, o);
      if (t = Y(e.e / w), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= vu)
        return i = os(l, a, r, n), e.s < 0 ? new l(1).div(i) : h(i, n, o);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1)
          return new l(NaN);
        if ((e.d[t] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
          return a.s = s, a;
      }
      return r = $(+a, u), t = r == 0 || !isFinite(r) ? Y(u * (Math.log("0." + Q(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (P = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = Gn(e.times(Ne(a, n + r)), n), i.d && (i = h(i, n + 5, 1), $t(i.d, n, o) && (t = n + 10, i = h(Gn(e.times(Ne(a, t + r)), t), t + 5, 1), +Q(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = h(i, n + 1, 0)))), i.s = s, P = true, l.rounding = o, h(i, n, o));
    };
    m.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = be(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (oe(e, 1, $e), t === void 0 ? t = i.rounding : oe(t, 0, 8), n = h(new i(n), e, t), r = be(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toSignificantDigits = m.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (oe(e, 1, $e), t === void 0 ? t = n.rounding : oe(t, 0, 8)), h(new n(r), e, t);
    };
    m.toString = function() {
      var e = this, t = e.constructor, r = be(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    m.truncated = m.trunc = function() {
      return h(new this.constructor(this), this.e + 1, 1);
    };
    m.valueOf = m.toJSON = function() {
      var e = this, t = e.constructor, r = be(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function Q(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++)
          n = e[t] + "", r = w - n.length, r && (o += Ie(r)), o += n;
        s = e[t], n = s + "", r = w - n.length, r && (o += Ie(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return o + s;
    }
    function oe(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(Le + e);
    }
    function $t(e, t, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10)
        --t;
      return --t < 0 ? (t += w, i = 0) : (i = Math.ceil((t + 1) / w), t %= w), o = $(10, w - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == $(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == $(10, t - 3) - 1, s;
    }
    function Tr(e, t, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; )
          i[o] *= t;
        for (i[0] += Un.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
          i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    function Mu(e, t) {
      var r, n, i;
      if (t.isZero())
        return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Rr(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = ct(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    var F = function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; )
          s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      function t(n, i, o, s) {
        var a, l;
        if (o != s)
          l = o > s ? 1 : -1;
        else
          for (a = l = 0; a < o; a++)
            if (n[a] != i[a]) {
              l = n[a] > i[a] ? 1 : -1;
              break;
            }
        return l;
      }
      function r(n, i, o, s) {
        for (var a = 0; o--; )
          n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; )
          n.shift();
      }
      return function(n, i, o, s, a, l) {
        var u, c, p, d, g, y, f, b, E, v, x, M, le, K, Ke, I, J, ve, G, He, Jt = n.constructor, zr = n.s == i.s ? 1 : -1, W = n.d, R = i.d;
        if (!W || !W[0] || !R || !R[0])
          return new Jt(!n.s || !i.s || (W ? R && W[0] == R[0] : !R) ? NaN : W && W[0] == 0 || !R ? zr * 0 : zr / 0);
        for (l ? (g = 1, c = n.e - i.e) : (l = me, g = w, c = Y(n.e / g) - Y(i.e / g)), G = R.length, J = W.length, E = new Jt(zr), v = E.d = [], p = 0; R[p] == (W[p] || 0); p++)
          ;
        if (R[p] > (W[p] || 0) && c--, o == null ? (K = o = Jt.precision, s = Jt.rounding) : a ? K = o + (n.e - i.e) + 1 : K = o, K < 0)
          v.push(1), y = true;
        else {
          if (K = K / g + 2 | 0, p = 0, G == 1) {
            for (d = 0, R = R[0], K++; (p < J || d) && K--; p++)
              Ke = d * l + (W[p] || 0), v[p] = Ke / R | 0, d = Ke % R | 0;
            y = d || p < J;
          } else {
            for (d = l / (R[0] + 1) | 0, d > 1 && (R = e(R, d, l), W = e(W, d, l), G = R.length, J = W.length), I = G, x = W.slice(0, G), M = x.length; M < G; )
              x[M++] = 0;
            He = R.slice(), He.unshift(0), ve = R[0], R[1] >= l / 2 && ++ve;
            do
              d = 0, u = t(R, x, G, M), u < 0 ? (le = x[0], G != M && (le = le * l + (x[1] || 0)), d = le / ve | 0, d > 1 ? (d >= l && (d = l - 1), f = e(R, d, l), b = f.length, M = x.length, u = t(f, x, b, M), u == 1 && (d--, r(f, G < b ? He : R, b, l))) : (d == 0 && (u = d = 1), f = R.slice()), b = f.length, b < M && f.unshift(0), r(x, f, M, l), u == -1 && (M = x.length, u = t(R, x, G, M), u < 1 && (d++, r(x, G < M ? He : R, M, l))), M = x.length) : u === 0 && (d++, x = [0]), v[p++] = d, u && x[0] ? x[M++] = W[I] || 0 : (x = [W[I]], M = 1);
            while ((I++ < J || x[0] !== void 0) && K--);
            y = x[0] !== void 0;
          }
          v[0] || v.shift();
        }
        if (g == 1)
          E.e = c, Xo = y;
        else {
          for (p = 1, d = v[0]; d >= 10; d /= 10)
            p++;
          E.e = p + c * g - 1, h(E, a ? o + E.e + 1 : o, s, y);
        }
        return E;
      };
    }();
    function h(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, g = e.constructor;
      e:
        if (t != null) {
          if (p = e.d, !p)
            return e;
          for (i = 1, a = p[0]; a >= 10; a /= 10)
            i++;
          if (o = t - i, o < 0)
            o += w, s = t, c = p[d = 0], l = c / $(10, i - s - 1) % 10 | 0;
          else if (d = Math.ceil((o + 1) / w), a = p.length, d >= a)
            if (n) {
              for (; a++ <= d; )
                p.push(0);
              c = l = 0, i = 1, o %= w, s = o - w + 1;
            } else
              break e;
          else {
            for (c = a = p[d], i = 1; a >= 10; a /= 10)
              i++;
            o %= w, s = o - w + i, l = s < 0 ? 0 : c / $(10, i - s - 1) % 10 | 0;
          }
          if (n = n || t < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % $(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / $(10, i - s) : 0 : p[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0])
            return p.length = 0, u ? (t -= e.e + 1, p[0] = $(10, (w - t % w) % w), e.e = -t || 0) : p[0] = e.e = 0, e;
          if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = $(10, w - o), p[d] = s > 0 ? (c / $(10, i - s) % $(10, s) | 0) * a : 0), u)
            for (; ; )
              if (d == 0) {
                for (o = 1, s = p[0]; s >= 10; s /= 10)
                  o++;
                for (s = p[0] += a, a = 1; s >= 10; s /= 10)
                  a++;
                o != a && (e.e++, p[0] == me && (p[0] = 1));
                break;
              } else {
                if (p[d] += a, p[d] != me)
                  break;
                p[d--] = 0, a = 1;
              }
          for (o = p.length; p[--o] === 0; )
            p.pop();
        }
      return P && (e.e > g.maxE ? (e.d = null, e.e = NaN) : e.e < g.minE && (e.e = 0, e.d = [0])), e;
    }
    function be(e, t, r) {
      if (!e.isFinite())
        return as(e);
      var n, i = e.e, o = Q(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Ie(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Ie(-i - 1) + o, r && (n = r - s) > 0 && (o += Ie(n))) : i >= s ? (o += Ie(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Ie(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Ie(n))), o;
    }
    function Sr(e, t) {
      var r = e[0];
      for (t *= w; r >= 10; r /= 10)
        t++;
      return t;
    }
    function Mr(e, t, r) {
      if (t > Cu)
        throw P = true, r && (e.precision = r), Error(es);
      return h(new e(vr), t, 1, true);
    }
    function de(e, t, r) {
      if (t > Jn)
        throw Error(es);
      return h(new e(Cr), t, r, true);
    }
    function is(e) {
      var t = e.length - 1, r = t * w + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10)
          r--;
        for (t = e[0]; t >= 10; t /= 10)
          r++;
      }
      return r;
    }
    function Ie(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    function os(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / w + 4);
      for (P = false; ; ) {
        if (r % 2 && (o = o.times(t), Yo(o.d, s) && (i = true)), r = Y(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), Yo(t.d, s);
      }
      return P = true, o;
    }
    function zo(e) {
      return e.d[e.d.length - 1] & 1;
    }
    function ss(e, t, r) {
      for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
        if (n = new e(t[o]), n.s)
          i[r](n) && (i = n);
        else {
          i = n;
          break;
        }
      return i;
    }
    function Gn(e, t) {
      var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, g = d.rounding, y = d.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
      for (t == null ? (P = false, l = y) : l = t, a = new d(0.03125); e.e > -2; )
        e = e.times(a), p += 5;
      for (n = Math.log($(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new d(1), d.precision = l; ; ) {
        if (o = h(o.times(e), l, 1), r = r.times(++c), a = s.plus(F(o, r, l, 1)), Q(a.d).slice(0, l) === Q(s.d).slice(0, l)) {
          for (i = p; i--; )
            s = h(s.times(s), l, 1);
          if (t == null)
            if (u < 3 && $t(s.d, l - n, g, u))
              d.precision = l += 10, r = o = a = new d(1), c = 0, u++;
            else
              return h(s, d.precision = y, g, P = true);
          else
            return d.precision = y, s;
        }
        s = a;
      }
    }
    function Ne(e, t) {
      var r, n, i, o, s, a, l, u, c, p, d, g = 1, y = 10, f = e, b = f.d, E = f.constructor, v = E.rounding, x = E.precision;
      if (f.s < 0 || !b || !b[0] || !f.e && b[0] == 1 && b.length == 1)
        return new E(b && !b[0] ? -1 / 0 : f.s != 1 ? NaN : b ? 0 : f);
      if (t == null ? (P = false, c = x) : c = t, E.precision = c += y, r = Q(b), n = r.charAt(0), Math.abs(o = f.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          f = f.times(e), r = Q(f.d), n = r.charAt(0), g++;
        o = f.e, n > 1 ? (f = new E("0." + r), o++) : f = new E(n + "." + r.slice(1));
      } else
        return u = Mr(E, c + 2, x).times(o + ""), f = Ne(new E(n + "." + r.slice(1)), c - y).plus(u), E.precision = x, t == null ? h(f, x, v, P = true) : f;
      for (p = f, l = s = f = F(f.minus(1), f.plus(1), c, 1), d = h(f.times(f), c, 1), i = 3; ; ) {
        if (s = h(s.times(d), c, 1), u = l.plus(F(s, new E(i), c, 1)), Q(u.d).slice(0, c) === Q(l.d).slice(0, c))
          if (l = l.times(2), o !== 0 && (l = l.plus(Mr(E, c + 2, x).times(o + ""))), l = F(l, new E(g), c, 1), t == null)
            if ($t(l.d, c - y, v, a))
              E.precision = c += y, u = s = f = F(p.minus(1), p.plus(1), c, 1), d = h(f.times(f), c, 1), i = a = 1;
            else
              return h(l, E.precision = x, v, P = true);
          else
            return E.precision = x, l;
        l = u, i += 2;
      }
    }
    function as(e) {
      return String(e.s * e.s / 0);
    }
    function Wn(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
        ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
        ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % w, r < 0 && (n += w), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= w; n < i; )
            e.d.push(+t.slice(n, n += w));
          t = t.slice(n), n = w - t.length;
        } else
          n -= i;
        for (; n--; )
          t += "0";
        e.d.push(+t), P && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    function Au(e, t) {
      var r, n, i, o, s, a, l, u, c;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), ns.test(t))
          return Wn(e, t);
      } else if (t === "Infinity" || t === "NaN")
        return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (Eu.test(t))
        r = 16, t = t.toLowerCase();
      else if (Pu.test(t))
        r = 2;
      else if (Tu.test(t))
        r = 8;
      else
        throw Error(Le + t);
      for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = os(n, new n(r), o, o * 2)), u = Tr(t, r, me), c = u.length - 1, o = c; u[o] === 0; --o)
        u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = Sr(u, c), e.d = u, P = false, s && (e = F(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? $(2, l) : We.pow(2, l))), P = true, e);
    }
    function Su(e, t) {
      var r, n = t.d.length;
      if (n < 3)
        return t.isZero() ? t : ct(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Rr(5, r)), t = ct(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
        i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
      return t;
    }
    function ct(e, t, r, n, i) {
      var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / w);
      for (P = false, l = r.times(r), a = new e(n); ; ) {
        if (s = F(a.times(l), new e(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = F(s.times(l), new e(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
          for (o = p; s.d[o] === a.d[o] && o--; )
            ;
          if (o == -1)
            break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return P = true, s.d.length = p + 1, s;
    }
    function Rr(e, t) {
      for (var r = e; --t; )
        r *= e;
      return r;
    }
    function ls(e, t) {
      var r, n = t.s < 0, i = de(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o))
        return Se = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero())
        Se = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o))
          return Se = zo(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Se = zo(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    function Hn(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, g = e.constructor, y = r !== void 0;
      if (y ? (oe(r, 1, $e), n === void 0 ? n = g.rounding : oe(n, 0, 8)) : (r = g.precision, n = g.rounding), !e.isFinite())
        c = as(e);
      else {
        for (c = be(e), s = c.indexOf("."), y ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), d = new g(1), d.e = c.length - s, d.d = Tr(be(d), 10, i), d.e = d.d.length), p = Tr(c, 10, i), o = l = p.length; p[--l] == 0; )
          p.pop();
        if (!p[0])
          c = y ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new g(e), e.d = p, e.e = o, e = F(e, d, r, n, 0, i), p = e.d, o = e.e, u = Xo), s = p[r], a = i / 2, u = u || p[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u)
            for (; ++p[--r] > i - 1; )
              p[r] = 0, r || (++o, p.unshift(1));
          for (l = p.length; !p[l - 1]; --l)
            ;
          for (s = 0, c = ""; s < l; s++)
            c += Un.charAt(p[s]);
          if (y) {
            if (l > 1)
              if (t == 16 || t == 8) {
                for (s = t == 16 ? 4 : 3, --l; l % s; l++)
                  c += "0";
                for (p = Tr(c, i, t), l = p.length; !p[l - 1]; --l)
                  ;
                for (s = 1, c = "1."; s < l; s++)
                  c += Un.charAt(p[s]);
              } else
                c = c.charAt(0) + "." + c.slice(1);
            c = c + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; )
              c = "0" + c;
            c = "0." + c;
          } else if (++o > l)
            for (o -= l; o--; )
              c += "0";
          else
            o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    function Yo(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    function Ru(e) {
      return new this(e).abs();
    }
    function Fu(e) {
      return new this(e).acos();
    }
    function Ou(e) {
      return new this(e).acosh();
    }
    function ku(e, t) {
      return new this(e).plus(t);
    }
    function Du(e) {
      return new this(e).asin();
    }
    function _u(e) {
      return new this(e).asinh();
    }
    function Iu(e) {
      return new this(e).atan();
    }
    function Nu(e) {
      return new this(e).atanh();
    }
    function Lu(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = de(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? de(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = de(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(F(e, t, o, 1)), t = de(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(F(e, t, o, 1)), r;
    }
    function $u(e) {
      return new this(e).cbrt();
    }
    function qu(e) {
      return h(e = new this(e), e.e + 1, 2);
    }
    function ju(e, t, r) {
      return new this(e).clamp(t, r);
    }
    function Bu(e) {
      if (!e || typeof e != "object")
        throw Error(Ar + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, $e, "rounding", 0, 8, "toExpNeg", -ut, 0, "toExpPos", 0, ut, "maxE", 0, ut, "minE", -ut, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3)
        if (r = o[t], i && (this[r] = Qn[r]), (n = e[r]) !== void 0)
          if (Y(n) === n && n >= o[t + 1] && n <= o[t + 2])
            this[r] = n;
          else
            throw Error(Le + r + ": " + n);
      if (r = "crypto", i && (this[r] = Qn[r]), (n = e[r]) !== void 0)
        if (n === true || n === false || n === 0 || n === 1)
          if (n)
            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[r] = true;
            else
              throw Error(ts);
          else
            this[r] = false;
        else
          throw Error(Le + r + ": " + n);
      return this;
    }
    function Ku(e) {
      return new this(e).cos();
    }
    function Vu(e) {
      return new this(e).cosh();
    }
    function us(e) {
      var t, r, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i))
          return new i(o);
        if (u.constructor = i, Zo(o)) {
          u.s = o.s, P ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10)
              s++;
            P ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return Wn(u, o.toString());
        } else if (l !== "string")
          throw Error(Le + o);
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), ns.test(o) ? Wn(u, o) : Au(u, o);
      }
      if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Bu, i.clone = us, i.isDecimal = Zo, i.abs = Ru, i.acos = Fu, i.acosh = Ou, i.add = ku, i.asin = Du, i.asinh = _u, i.atan = Iu, i.atanh = Nu, i.atan2 = Lu, i.cbrt = $u, i.ceil = qu, i.clamp = ju, i.cos = Ku, i.cosh = Vu, i.div = Uu, i.exp = Qu, i.floor = Ju, i.hypot = Gu, i.ln = Wu, i.log = Hu, i.log10 = Yu, i.log2 = zu, i.max = Zu, i.min = Xu, i.mod = ec, i.mul = tc, i.pow = rc, i.random = nc, i.round = ic, i.sign = oc, i.sin = sc, i.sinh = ac, i.sqrt = lc, i.sub = uc, i.sum = cc, i.tan = pc, i.tanh = dc, i.trunc = mc, e === void 0 && (e = {}), e && e.defaults !== true)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    function Uu(e, t) {
      return new this(e).div(t);
    }
    function Qu(e) {
      return new this(e).exp();
    }
    function Ju(e) {
      return h(e = new this(e), e.e + 1, 3);
    }
    function Gu() {
      var e, t, r = new this(0);
      for (P = false, e = 0; e < arguments.length; )
        if (t = new this(arguments[e++]), t.d)
          r.d && (r = r.plus(t.times(t)));
        else {
          if (t.s)
            return P = true, new this(1 / 0);
          r = t;
        }
      return P = true, r.sqrt();
    }
    function Zo(e) {
      return e instanceof We || e && e.toStringTag === rs || false;
    }
    function Wu(e) {
      return new this(e).ln();
    }
    function Hu(e, t) {
      return new this(e).log(t);
    }
    function zu(e) {
      return new this(e).log(2);
    }
    function Yu(e) {
      return new this(e).log(10);
    }
    function Zu() {
      return ss(this, arguments, "lt");
    }
    function Xu() {
      return ss(this, arguments, "gt");
    }
    function ec(e, t) {
      return new this(e).mod(t);
    }
    function tc(e, t) {
      return new this(e).mul(t);
    }
    function rc(e, t) {
      return new this(e).pow(t);
    }
    function nc(e) {
      var t, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : oe(e, 1, $e), n = Math.ceil(e / w), this.crypto)
        if (crypto.getRandomValues)
          for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
            i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
        else if (crypto.randomBytes) {
          for (t = crypto.randomBytes(n *= 4); o < n; )
            i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
          o = n / 4;
        } else
          throw Error(ts);
      else
        for (; o < n; )
          a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= w, n && e && (i = $(10, w - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)
        a.pop();
      if (o < 0)
        r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= w)
          a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10)
          n++;
        n < w && (r -= w - n);
      }
      return s.e = r, s.d = a, s;
    }
    function ic(e) {
      return h(e = new this(e), e.e + 1, this.rounding);
    }
    function oc(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    function sc(e) {
      return new this(e).sin();
    }
    function ac(e) {
      return new this(e).sinh();
    }
    function lc(e) {
      return new this(e).sqrt();
    }
    function uc(e, t) {
      return new this(e).sub(t);
    }
    function cc() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (P = false; r.s && ++e < t.length; )
        r = r.plus(t[e]);
      return P = true, h(r, this.precision, this.rounding);
    }
    function pc(e) {
      return new this(e).tan();
    }
    function dc(e) {
      return new this(e).tanh();
    }
    function mc(e) {
      return h(e = new this(e), e.e + 1, 1);
    }
    m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
    m[Symbol.toStringTag] = "Decimal";
    var We = m.constructor = us(Qn);
    vr = new We(vr);
    Cr = new We(Cr);
    var we = We;
    function pt(e) {
      return We.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    var qt = class {
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function dt(e) {
      return e instanceof qt;
    }
    var Fr = (e) => e;
    var Or = { bold: Fr, red: Fr, green: Fr, dim: Fr };
    var cs = { bold: ne, red: pe, green: Ue, dim: Oe };
    var mt = { write(e) {
      e.writeLine(",");
    } };
    var Pe = class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var qe = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var kr = class extends qe {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(r), this;
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new Pe("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(mt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var ps = ": ";
    var Dr = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + ps.length;
      }
      write(t) {
        let r = new Pe(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(ps).write(this.value);
      }
    };
    var D = class extends qe {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o)
          return;
        let s = o;
        for (let a of i) {
          if (!(s.value instanceof D))
            return;
          let l = s.value.getField(a);
          if (!l)
            return;
          s = l;
        }
        return s;
      }
      getDeepFieldValue(r) {
        var _a4;
        return r.length === 0 ? this : (_a4 = this.getDeepField(r)) == null ? void 0 : _a4.value;
      }
      hasField(r) {
        return Boolean(this.getField(r));
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        var _a4;
        return (_a4 = this.getField(r)) == null ? void 0 : _a4.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof D))
            return;
          let o = n.getSubSelectionValue(i);
          if (!o)
            return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n)
          return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof D))
            return;
          let a = s.getSelectionParent();
          if (!a)
            return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let r = this.getField("select");
        if ((r == null ? void 0 : r.value) instanceof D)
          return { kind: "select", value: r.value };
        let n = this.getField("include");
        if ((n == null ? void 0 : n.value) instanceof D)
          return { kind: "include", value: n.value };
      }
      getSubSelectionValue(r) {
        var _a4;
        return (_a4 = this.getSelectionParent()) == null ? void 0 : _a4.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      writeEmpty(r) {
        let n = new Pe("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(mt, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var j = class extends qe {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new Pe(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
    };
    var zn = class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function _r(e) {
      return new zn(ds(e));
    }
    function ds(e) {
      let t = new D();
      for (let [r, n] of Object.entries(e)) {
        let i = new Dr(r, ms(n));
        t.addField(i);
      }
      return t;
    }
    function ms(e) {
      if (typeof e == "string")
        return new j(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean")
        return new j(String(e));
      if (typeof e == "bigint")
        return new j(`${e}n`);
      if (e === null)
        return new j("null");
      if (e === void 0)
        return new j("undefined");
      if (pt(e))
        return new j(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return Buffer.isBuffer(e) ? new j(`Buffer.alloc(${e.byteLength})`) : new j(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Er(e) ? e.toISOString() : "Invalid Date";
        return new j(`new Date("${t}")`);
      }
      return e instanceof Ae ? new j(`Prisma.${e._getName()}`) : dt(e) ? new j(`prisma.${wi(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? gc(e) : typeof e == "object" ? ds(e) : new j(Object.prototype.toString.call(e));
    }
    function gc(e) {
      let t = new kr();
      for (let r of e)
        t.addItem(ms(r));
      return t;
    }
    function fs(e) {
      if (e === void 0)
        return "";
      let t = _r(e);
      return new at(0, { colors: Or }).write(t).toString();
    }
    var jt = "<unknown>";
    function gs(e) {
      var t = e.split(`
`);
      return t.reduce(function(r, n) {
        var i = xc(n) || wc(n) || Tc(n) || Ac(n) || Cc(n);
        return i && r.push(i), r;
      }, []);
    }
    var yc = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var hc = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function xc(e) {
      var t = yc.exec(e);
      if (!t)
        return null;
      var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = hc.exec(t[2]);
      return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || jt, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
    }
    var bc = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function wc(e) {
      var t = bc.exec(e);
      return t ? { file: t[2], methodName: t[1] || jt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var Pc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var Ec = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function Tc(e) {
      var t = Pc.exec(e);
      if (!t)
        return null;
      var r = t[3] && t[3].indexOf(" > eval") > -1, n = Ec.exec(t[3]);
      return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || jt, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
    }
    var vc = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function Cc(e) {
      var t = vc.exec(e);
      return t ? { file: t[3], methodName: t[1] || jt, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
    }
    var Mc = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function Ac(e) {
      var t = Mc.exec(e);
      return t ? { file: t[2], methodName: t[1] || jt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var Yn = class {
      getLocation() {
        return null;
      }
    };
    var Zn = class {
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let t = this._error.stack;
        if (!t)
          return null;
        let n = gs(t).find((i) => {
          if (!i.file)
            return false;
          let o = Mn(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/data-proxy.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function je(e) {
      return e === "minimal" ? new Yn() : new Zn();
    }
    var ys = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function ft(e = {}) {
      let t = Rc(e);
      return Object.entries(t).reduce((n, [i, o]) => (ys[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    function Rc(e = {}) {
      return typeof e._count == "boolean" ? __spreadProps(__spreadValues({}, e), { _count: { _all: e._count } }) : e;
    }
    function Ir(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    function hs(e, t) {
      let r = Ir(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: ft })(e);
    }
    function Fc(e = {}) {
      let _a4 = e, { select: t } = _a4, r = __objRest(_a4, ["select"]);
      return typeof t == "object" ? ft(__spreadProps(__spreadValues({}, r), { _count: t })) : ft(__spreadProps(__spreadValues({}, r), { _count: { _all: true } }));
    }
    function Oc(e = {}) {
      return typeof e.select == "object" ? (t) => Ir(e)(t)._count : (t) => Ir(e)(t)._count._all;
    }
    function xs(e, t) {
      return t({ action: "count", unpacker: Oc(e), argsMapper: Fc })(e);
    }
    function kc(e = {}) {
      let t = ft(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      else
        typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    function Dc(e = {}) {
      return (t) => (typeof (e == null ? void 0 : e._count) == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    function bs(e, t) {
      return t({ action: "groupBy", unpacker: Dc(e), argsMapper: kc })(e);
    }
    function ws(e, t, r) {
      if (t === "aggregate")
        return (n) => hs(n, r);
      if (t === "count")
        return (n) => xs(n, r);
      if (t === "groupBy")
        return (n) => bs(n, r);
    }
    function Ps(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = Dn(r, (i) => i.name);
      return new Proxy({}, __spreadValues({ get(i, o) {
        if (o in i || typeof o == "symbol")
          return i[o];
        let s = n[o];
        if (s)
          return new qt(e, o, s.type, s.isList, s.kind === "enum");
      } }, gr(Object.keys(n))));
    }
    var Es = (e) => Array.isArray(e) ? e : e.split(".");
    var Xn = (e, t) => Es(t).reduce((r, n) => r && r[n], e);
    var Ts = (e, t, r) => Es(t).reduceRight((n, i, o, s) => Object.assign({}, Xn(e, s.slice(0, o)), { [i]: n }), r);
    function _c(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    function Ic(e, t, r) {
      return t === void 0 ? e != null ? e : {} : Ts(t, r, e || true);
    }
    function ei(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => __spreadProps(__spreadValues({}, l), { [u.name]: u }), {});
      return (l) => {
        let u = je(e._errorFormat), c = _c(n, i), p = Ic(l, o, c), d = r({ dataPath: c, callsite: u })(p), g = Nc(e, t);
        return new Proxy(d, __spreadValues({ get(y, f) {
          if (!g.includes(f))
            return y[f];
          let E = [a[f].type, r, f], v = [c, p];
          return ei(e, ...E, ...v);
        } }, gr([...g, ...Object.getOwnPropertyNames(d)])));
      };
    }
    function Nc(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    var Rs = A(An());
    var Ss = A(require("fs"));
    var vs = { keyword: ke, entity: ke, value: (e) => ne(Xe(e)), punctuation: Xe, directive: ke, function: ke, variable: (e) => ne(Xe(e)), string: (e) => ne(Ue(e)), boolean: ye, number: ke, comment: rr };
    var Lc = (e) => e;
    var Nr = {};
    var $c = 0;
    var T = { manual: Nr.Prism && Nr.Prism.manual, disableWorkerMessageHandler: Nr.Prism && Nr.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
      if (e instanceof fe) {
        let t = e;
        return new fe(t.type, T.util.encode(t.content), t.alias);
      } else
        return Array.isArray(e) ? e.map(T.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++$c }), e.__id;
    }, clone: function e(t, r) {
      let n, i, o = T.util.type(t);
      switch (r = r || {}, o) {
        case "Object":
          if (i = T.util.objId(t), r[i])
            return r[i];
          n = {}, r[i] = n;
          for (let s in t)
            t.hasOwnProperty(s) && (n[s] = e(t[s], r));
          return n;
        case "Array":
          return i = T.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
            n[a] = e(s, r);
          }), n);
        default:
          return t;
      }
    } }, languages: { extend: function(e, t) {
      let r = T.util.clone(T.languages[e]);
      for (let n in t)
        r[n] = t[n];
      return r;
    }, insertBefore: function(e, t, r, n) {
      n = n || T.languages;
      let i = n[e], o = {};
      for (let a in i)
        if (i.hasOwnProperty(a)) {
          if (a == t)
            for (let l in r)
              r.hasOwnProperty(l) && (o[l] = r[l]);
          r.hasOwnProperty(a) || (o[a] = i[a]);
        }
      let s = n[e];
      return n[e] = o, T.languages.DFS(T.languages, function(a, l) {
        l === s && a != e && (this[a] = o);
      }), o;
    }, DFS: function e(t, r, n, i) {
      i = i || {};
      let o = T.util.objId;
      for (let s in t)
        if (t.hasOwnProperty(s)) {
          r.call(t, s, t[s], n || s);
          let a = t[s], l = T.util.type(a);
          l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
        }
    } }, plugins: {}, highlight: function(e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return T.hooks.run("before-tokenize", n), n.tokens = T.tokenize(n.code, n.grammar), T.hooks.run("after-tokenize", n), fe.stringify(T.util.encode(n.tokens), n.language);
    }, matchGrammar: function(e, t, r, n, i, o, s) {
      for (let f in r) {
        if (!r.hasOwnProperty(f) || !r[f])
          continue;
        if (f == s)
          return;
        let b = r[f];
        b = T.util.type(b) === "Array" ? b : [b];
        for (let E = 0; E < b.length; ++E) {
          let v = b[E], x = v.inside, M = !!v.lookbehind, le = !!v.greedy, K = 0, Ke = v.alias;
          if (le && !v.pattern.global) {
            let I = v.pattern.toString().match(/[imuy]*$/)[0];
            v.pattern = RegExp(v.pattern.source, I + "g");
          }
          v = v.pattern || v;
          for (let I = n, J = i; I < t.length; J += t[I].length, ++I) {
            let ve = t[I];
            if (t.length > e.length)
              return;
            if (ve instanceof fe)
              continue;
            if (le && I != t.length - 1) {
              v.lastIndex = J;
              var p = v.exec(e);
              if (!p)
                break;
              var c = p.index + (M ? p[1].length : 0), d = p.index + p[0].length, a = I, l = J;
              for (let R = t.length; a < R && (l < d || !t[a].type && !t[a - 1].greedy); ++a)
                l += t[a].length, c >= l && (++I, J = l);
              if (t[I] instanceof fe)
                continue;
              u = a - I, ve = e.slice(J, l), p.index -= J;
            } else {
              v.lastIndex = 0;
              var p = v.exec(ve), u = 1;
            }
            if (!p) {
              if (o)
                break;
              continue;
            }
            M && (K = p[1] ? p[1].length : 0);
            var c = p.index + K, p = p[0].slice(K), d = c + p.length, g = ve.slice(0, c), y = ve.slice(d);
            let G = [I, u];
            g && (++I, J += g.length, G.push(g));
            let He = new fe(f, x ? T.tokenize(p, x) : p, Ke, p, le);
            if (G.push(He), y && G.push(y), Array.prototype.splice.apply(t, G), u != 1 && T.matchGrammar(e, t, r, I, J, true, f), o)
              break;
          }
        }
      }
    }, tokenize: function(e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let i in n)
          t[i] = n[i];
        delete t.rest;
      }
      return T.matchGrammar(e, r, t, 0, 0, false), r;
    }, hooks: { all: {}, add: function(e, t) {
      let r = T.hooks.all;
      r[e] = r[e] || [], r[e].push(t);
    }, run: function(e, t) {
      let r = T.hooks.all[e];
      if (!(!r || !r.length))
        for (var n = 0, i; i = r[n++]; )
          i(t);
    } }, Token: fe };
    T.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    T.languages.javascript = T.languages.extend("clike", { "class-name": [T.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    T.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    T.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: T.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: T.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: T.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: T.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    T.languages.markup && T.languages.markup.tag.addInlined("script", "javascript");
    T.languages.js = T.languages.javascript;
    T.languages.typescript = T.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    T.languages.ts = T.languages.typescript;
    function fe(e, t, r, n, i) {
      this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    fe.stringify = function(e, t) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
        return fe.stringify(r, t);
      }).join("") : qc(e.type)(e.content);
    };
    function qc(e) {
      return vs[e] || Lc;
    }
    function Cs(e) {
      return jc(e, T.languages.javascript);
    }
    function jc(e, t) {
      return T.tokenize(e, t).map((n) => fe.stringify(n)).join("");
    }
    var Ms = A(mo());
    function As(e) {
      return (0, Ms.default)(e);
    }
    var ge = class {
      static read(t) {
        let r;
        try {
          r = Ss.default.readFileSync(t, "utf-8");
        } catch (e) {
          return null;
        }
        return ge.fromContent(r);
      }
      static fromContent(t) {
        let r = t.split(/\r?\n/);
        return new ge(1, r);
      }
      constructor(t, r) {
        this.firstLineNumber = t, this.lines = r;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(t, r) {
        if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
          return this;
        let n = t - this.firstLineNumber, i = [...this.lines];
        return i[n] = r(i[n]), new ge(this.firstLineNumber, i);
      }
      mapLines(t) {
        return new ge(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
      }
      lineAt(t) {
        return this.lines[t - this.firstLineNumber];
      }
      prependSymbolAt(t, r) {
        return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
      }
      slice(t, r) {
        let n = this.lines.slice(t - 1, r).join(`
`);
        return new ge(t, As(n).split(`
`));
      }
      highlight() {
        let t = Cs(this.toString());
        return new ge(this.firstLineNumber, t.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var Bc = { red: pe, gray: rr, dim: Oe, bold: ne, underline: X, highlightSource: (e) => e.highlight() };
    var Kc = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function Vc({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
      var _a4;
      let s = { functionName: `prisma.${r}()`, message: t, isPanic: n != null ? n : false, callArguments: i };
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production")
        return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber)
        return s;
      let l = Math.max(1, a.lineNumber - 3), u = (_a4 = ge.read(a.fileName)) == null ? void 0 : _a4.slice(l, a.lineNumber), c = u == null ? void 0 : u.lineAt(a.lineNumber);
      if (u && c) {
        let p = Qc(c), d = Uc(c);
        if (!d)
          return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (y) => y.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let g = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((y, f) => o.gray(String(f).padStart(g)) + " " + y).mapLines((y) => o.dim(y)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
          let y = p + g + 1;
          y += 2, s.callArguments = (0, Rs.default)(i, y).slice(y);
        }
      }
      return s;
    }
    function Uc(e) {
      let t = Object.keys(ue.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    function Qc(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        if (e.charAt(r) !== " ")
          return t;
        t++;
      }
      return t;
    }
    function Jc({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Gc(t))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else
        a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    function Gc(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    function gt(e) {
      let t = e.showColors ? Bc : Kc, r = Vc(e, t);
      return Jc(r, t);
    }
    function Fs(e, t, r, n) {
      return e === ue.ModelAction.findFirstOrThrow || e === ue.ModelAction.findUniqueOrThrow ? Wc(t, r, n) : n;
    }
    function Wc(e, t, r) {
      return (n) => __async(this, null, function* () {
        if ("rejectOnNotFound" in n.args) {
          let o = gt({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new te(o, { clientVersion: t });
        }
        return yield r(n).catch((o) => {
          throw o instanceof H && o.code === "P2025" ? new Ce(`No ${e} found`, t) : o;
        });
      });
    }
    function Ee(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    var Hc = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var zc = ["aggregate", "count", "groupBy"];
    function ti(e, t) {
      var _a4;
      let r = (_a4 = e._extensions.getAllModelExtensions(t)) != null ? _a4 : {}, n = [Yc(e, t), Xc(e, t), Ft(r), re("name", () => t), re("$name", () => t), re("$parent", () => e._appliedParent)];
      return xe({}, n);
    }
    function Yc(e, t) {
      let r = Ee(t), n = Object.keys(ue.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = (l) => e._request(l);
        s = Fs(o, t, e._clientVersion, s);
        let a = (l) => (u) => {
          let c = je(e._errorFormat);
          return e._createPrismaPromise((p) => {
            let d = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: p, callsite: c };
            return s(__spreadValues(__spreadValues({}, d), l));
          });
        };
        return Hc.includes(o) ? ei(e, t, a) : Zc(i) ? ws(e, i, a) : a({});
      } };
    }
    function Zc(e) {
      return zc.includes(e);
    }
    function Xc(e, t) {
      return Ge(re("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return Ps(t, r);
      }));
    }
    function Os(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    var ri = Symbol();
    function Bt(e) {
      let t = [ep(e), re(ri, () => e), re("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(Ft(r)), xe(e, t);
    }
    function ep(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(Ee), n = [...new Set(t.concat(r))];
      return Ge({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = Os(i);
        if (e._runtimeDataModel.models[o] !== void 0)
          return ti(e, o);
        if (e._runtimeDataModel.models[i] !== void 0)
          return ti(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i))
          return { enumerable: false };
      } });
    }
    function Lr(e) {
      return e[ri] ? e[ri] : e;
    }
    function ks(e) {
      if (typeof e == "function")
        return e(this);
      let t = Lr(this), r = Object.create(t, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return Bt(r);
    }
    function Ds({ result: e, modelName: t, select: r, extensions: n }) {
      let i = n.getAllComputedFields(t);
      if (!i)
        return e;
      let o = [], s = [];
      for (let a of Object.values(i)) {
        if (r) {
          if (!r[a.name])
            continue;
          let l = a.needs.filter((u) => !r[u]);
          l.length > 0 && s.push(Ot(l));
        }
        tp(e, a.needs) && o.push(rp(a, xe(e, o)));
      }
      return o.length > 0 || s.length > 0 ? xe(e, [...o, ...s]) : e;
    }
    function tp(e, t) {
      return t.every((r) => kn(e, r));
    }
    function rp(e, t) {
      return Ge(re(e.name, () => e.compute(t)));
    }
    function $r({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      var _a4;
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++)
          t[s] = $r({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = (_a4 = e(t, i, r)) != null ? _a4 : t;
      return r.include && _s({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && _s({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    function _s({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null)
          continue;
        let l = n.models[r].fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName)
          continue;
        let u = typeof s == "object" ? s : {};
        t[o] = $r({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    function Is({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : $r({ result: e, args: r != null ? r : {}, modelName: t, runtimeDataModel: i, visitor: (s, a, l) => Ds({ result: s, modelName: Ee(a), select: l.select, extensions: n }) });
    }
    function Ns(e) {
      if (e instanceof U)
        return np(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++)
          r[n] = Kt(e[n]);
        return r;
      }
      let t = {};
      for (let r in e)
        t[r] = Kt(e[r]);
      return t;
    }
    function np(e) {
      return new U(e.strings, e.values);
    }
    function Kt(e) {
      if (typeof e != "object" || e == null || e instanceof Ae || dt(e))
        return e;
      if (pt(e))
        return new we(e.toFixed());
      if (lt(e))
        return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e))
        return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; )
          r[t] = Kt(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e)
          r === "__proto__" ? Object.defineProperty(t, r, { value: Kt(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Kt(e[r]);
        return t;
      }
      Je(e, "Unknown value");
    }
    function $s(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        var _a4, _b2;
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (((_a4 = t.transaction) == null ? void 0 : _a4.kind) === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Ns((_b2 = t.args) != null ? _b2 : {}), __internalParams: t, query: (s, a = t) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = Ks(o, l), a.args = s, $s(e, a, r, n + 1);
        } });
      });
    }
    function qs(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r != null ? r : "$none", o);
      return $s(e, t, s);
    }
    function js(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Bs(r, n, 0, e) : e(r);
      };
    }
    function Bs(e, t, r, n) {
      if (r === t.length)
        return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = Ks(i, l), Bs(a, t, r + 1, n);
      } });
    }
    var Ls = (e) => e;
    function Ks(e = Ls, t = Ls) {
      return (r) => e(t(r));
    }
    function Us(e, t, r) {
      let n = Ee(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : ip(__spreadValues(__spreadValues(__spreadValues({}, e), Vs(t.name, e, t.result.$allModels)), Vs(t.name, e, t.result[n])));
    }
    function ip(e) {
      let t = new he(), r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
      return ot(e, (n) => __spreadProps(__spreadValues({}, n), { needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    function Vs(e, t, r) {
      return r ? ot(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: op(t, o, i) })) : {};
    }
    function op(e, t, r) {
      var _a4;
      let n = (_a4 = e == null ? void 0 : e[t]) == null ? void 0 : _a4.compute;
      return n ? (i) => r(__spreadProps(__spreadValues({}, i), { [t]: n(i) })) : r;
    }
    function Qs(e, t) {
      if (!t)
        return e;
      let r = __spreadValues({}, e);
      for (let n of Object.values(t))
        if (!!e[n.name])
          for (let i of n.needs)
            r[i] = true;
      return r;
    }
    var qr = class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new he();
        this.modelExtensionsCache = new he();
        this.queryCallbacksCache = new he();
        this.clientExtensions = Rt(() => {
          var _a4, _b2;
          return this.extension.client ? __spreadValues(__spreadValues({}, (_a4 = this.previous) == null ? void 0 : _a4.getAllClientExtensions()), this.extension.client) : (_b2 = this.previous) == null ? void 0 : _b2.getAllClientExtensions();
        });
        this.batchCallbacks = Rt(() => {
          var _a4, _b2, _c2;
          let t2 = (_b2 = (_a4 = this.previous) == null ? void 0 : _a4.getAllBatchQueryCallbacks()) != null ? _b2 : [], r2 = (_c2 = this.extension.query) == null ? void 0 : _c2.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => {
          var _a4;
          return Us((_a4 = this.previous) == null ? void 0 : _a4.getAllComputedFields(t), this.extension, t);
        });
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          var _a4, _b2;
          let r = Ee(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? (_a4 = this.previous) == null ? void 0 : _a4.getAllModelExtensions(t) : __spreadValues(__spreadValues(__spreadValues({}, (_b2 = this.previous) == null ? void 0 : _b2.getAllModelExtensions(t)), this.extension.model.$allModels), this.extension.model[r]);
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          var _a4, _b2;
          let n = (_b2 = (_a4 = this.previous) == null ? void 0 : _a4.getAllQueryCallbacks(t, r)) != null ? _b2 : [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Be = class {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new Be();
      }
      static single(t) {
        return new Be(new qr(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new Be(new qr(t, this.head));
      }
      getAllComputedFields(t) {
        var _a4;
        return (_a4 = this.head) == null ? void 0 : _a4.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        var _a4;
        return (_a4 = this.head) == null ? void 0 : _a4.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        var _a4;
        return (_a4 = this.head) == null ? void 0 : _a4.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        var _a4, _b2;
        return (_b2 = (_a4 = this.head) == null ? void 0 : _a4.getAllQueryCallbacks(t, r)) != null ? _b2 : [];
      }
      getAllBatchQueryCallbacks() {
        var _a4, _b2;
        return (_b2 = (_a4 = this.head) == null ? void 0 : _a4.getAllBatchQueryCallbacks()) != null ? _b2 : [];
      }
    };
    var Js = N("prisma:client");
    var Gs = { Vercel: "vercel", "Netlify CI": "netlify" };
    function Ws({ postinstall: e, ciName: t, clientVersion: r }) {
      if (Js("checkPlatformCaching:postinstall", e), Js("checkPlatformCaching:ciName", t), e === true && t && t in Gs) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Gs[t]}-build`;
        throw console.error(n), new _(n, r);
      }
    }
    var ea = A(ni());
    function Zs(e, t) {
      let r = Xs(e), n = sp(r), i = lp(n);
      i ? jr(i, t) : t.addErrorMessage(() => "Unknown error");
    }
    function Xs(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? Xs(t) : [t]);
    }
    function sp(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, __spreadProps(__spreadValues({}, n), { argument: __spreadProps(__spreadValues({}, n.argument), { typeNames: ap(o.argument.typeNames, n.argument.typeNames) }) })) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    function ap(e, t) {
      return [...new Set(e.concat(t))];
    }
    function lp(e) {
      return _n(e, (t, r) => {
        let n = zs(t), i = zs(r);
        return n !== i ? n - i : Ys(t) - Ys(r);
      });
    }
    function zs(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    function Ys(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    var Re = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    var Br = class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(mt, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function jr(e, t) {
      switch (e.kind) {
        case "IncludeAndSelect":
          up(e, t);
          break;
        case "IncludeOnScalar":
          cp(e, t);
          break;
        case "EmptySelection":
          pp(e, t);
          break;
        case "UnknownSelectionField":
          dp(e, t);
          break;
        case "UnknownArgument":
          mp(e, t);
          break;
        case "UnknownInputField":
          fp(e, t);
          break;
        case "RequiredArgumentMissing":
          gp(e, t);
          break;
        case "InvalidArgumentType":
          yp(e, t);
          break;
        case "InvalidArgumentValue":
          hp(e, t);
          break;
        case "ValueTooLarge":
          xp(e, t);
          break;
        case "SomeFieldsMissing":
          bp(e, t);
          break;
        case "TooManyFieldsGiven":
          wp(e, t);
          break;
        case "Union":
          Zs(e, t);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function up(e, t) {
      var _a4, _b2;
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      r && r instanceof D && ((_a4 = r.getField("include")) == null ? void 0 : _a4.markAsError(), (_b2 = r.getField("select")) == null ? void 0 : _b2.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green("`include`")} or ${n.green("`select`")}, but ${n.red("not both")} at the same time.`);
    }
    function cp(e, t) {
      var _a4, _b2;
      let [r, n] = Kr(e.selectionPath), i = e.outputType, o = (_a4 = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : _a4.value;
      if (o && ((_b2 = o.getField(n)) == null ? void 0 : _b2.markAsError(), i))
        for (let s of i.fields)
          s.isRelation && o.addSuggestion(new Re(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${Vt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    function pp(e, t) {
      var _a4, _b2;
      let r = e.outputType, n = (_a4 = t.arguments.getDeepSelectionParent(e.selectionPath)) == null ? void 0 : _a4.value, i = (_b2 = n == null ? void 0 : n.isEmpty()) != null ? _b2 : false;
      n && (n.removeAllFields(), na(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${Vt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    function dp(e, t) {
      var _a4;
      let [r, n] = Kr(e.selectionPath), i = t.arguments.getDeepSelectionParent(r);
      i && ((_a4 = i.value.getField(n)) == null ? void 0 : _a4.markAsError(), na(i.value, e.outputType)), t.addErrorMessage((o) => {
        let s = [`Unknown field ${o.red(`\`${n}\``)}`];
        return i && s.push(`for ${o.bold(i.kind)} statement`), s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`), s.push(Vt(o)), s.join(" ");
      });
    }
    function mp(e, t) {
      var _a4;
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof D && ((_a4 = n.getField(r)) == null ? void 0 : _a4.markAsError(), Pp(n, e.arguments)), t.addErrorMessage((i) => ta(i, r, e.arguments.map((o) => o.name)));
    }
    function fp(e, t) {
      var _a4;
      let [r, n] = Kr(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (i instanceof D) {
        (_a4 = i.getDeepField(e.argumentPath)) == null ? void 0 : _a4.markAsError();
        let o = i.getDeepFieldValue(r);
        o instanceof D && ia(o, e.inputType);
      }
      t.addErrorMessage((o) => ta(o, n, e.inputType.fields.map((s) => s.name)));
    }
    function ta(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = Tp(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(Vt(e)), n.join(" ");
    }
    function gp(e, t) {
      let r;
      t.addErrorMessage((l) => (r == null ? void 0 : r.value) instanceof j && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (!(n instanceof D))
        return;
      let [i, o] = Kr(e.argumentPath), s = new Br(), a = n.getDeepFieldValue(i);
      if (a instanceof D)
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l of e.inputTypes[0].fields)
            s.addField(l.name, l.typeNames.join(" | "));
          a.addSuggestion(new Re(o, s).makeRequired());
        } else {
          let l = e.inputTypes.map(ra).join(" | ");
          a.addSuggestion(new Re(o, l).makeRequired());
        }
    }
    function ra(e) {
      return e.kind === "list" ? `${ra(e.elementType)}[]` : e.name;
    }
    function yp(e, t) {
      var _a4;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof D && ((_a4 = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _a4.markAsError()), t.addErrorMessage((i) => {
        let o = Vr("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    function hp(e, t) {
      var _a4;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof D && ((_a4 = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _a4.markAsError()), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = Vr("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    function xp(e, t) {
      var _a4;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i;
      if (n instanceof D) {
        let s = (_a4 = n.getDeepField(e.argumentPath)) == null ? void 0 : _a4.value;
        s == null ? void 0 : s.markAsError(), s instanceof j && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    function bp(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (n instanceof D) {
        let i = n.getDeepFieldValue(e.argumentPath);
        i instanceof D && ia(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Vr("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(Vt(i)), o.join(" ");
      });
    }
    function wp(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i = [];
      if (n instanceof D) {
        let o = n.getDeepFieldValue(e.argumentPath);
        o instanceof D && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Vr("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    function na(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new Re(r.name, "true"));
    }
    function Pp(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new Re(r.name, r.typeNames.join(" | ")));
    }
    function ia(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new Re(r.name, r.typeNames.join(" | ")));
    }
    function Kr(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    function Vt({ green: e }) {
      return `Available options are listed in ${e("green")}.`;
    }
    function Vr(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    var Ep = 3;
    function Tp(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, ea.default)(e, i);
        o > Ep || o < r && (r = o, n = i);
      }
      return n;
    }
    function Ur({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o }) {
      let s = _r(e);
      for (let p of t)
        jr(p, s);
      let a = r === "pretty" ? cs : Or, l = s.renderAllMessages(a), u = new at(0, { colors: a }).write(s).toString(), c = gt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
      throw new te(c, { clientVersion: o });
    }
    var vp = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    function oa({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l }) {
      let u = new yt({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l });
      return { modelName: e, action: vp[t], query: ii(r, u) };
    }
    function ii(_a4 = {}, n) {
      var _b2 = _a4, { select: e, include: t } = _b2, r = __objRest(_b2, ["select", "include"]);
      return { arguments: aa(r, n), selection: Cp(e, t, n) };
    }
    function Cp(e, t, r) {
      return e && t && r.throwValidationError({ kind: "IncludeAndSelect", selectionPath: r.getSelectionPath() }), e ? Sp(e, r) : Mp(r, t);
    }
    function Mp(e, t) {
      let r = {};
      return e.model && !e.isRawAction() && (r.$composites = true, r.$scalars = true), t && Ap(r, t, e), r;
    }
    function Ap(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        let o = r.findField(n);
        o && (o == null ? void 0 : o.kind) !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), i === true ? e[n] = true : typeof i == "object" && (e[n] = ii(i, r.nestSelection(n)));
      }
    }
    function Sp(e, t) {
      let r = {}, n = t.getComputedFields(), i = Qs(e, n);
      for (let [o, s] of Object.entries(i)) {
        let a = t.findField(o);
        (n == null ? void 0 : n[o]) && !a || (s === true ? r[o] = true : typeof s == "object" && (r[o] = ii(s, t.nestSelection(o))));
      }
      return r;
    }
    function sa(e, t) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (lt(e)) {
        if (Er(e))
          return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (dt(e))
        return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e))
        return Rp(e, t);
      if (ArrayBuffer.isView(e))
        return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
      if (Fp(e))
        return e.values;
      if (pt(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Ae) {
        if (e !== Pr.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Op(e))
        return e.toJSON();
      if (typeof e == "object")
        return aa(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function aa(e, t) {
      if (e.$type)
        return { $type: "Json", value: JSON.stringify(e) };
      let r = {};
      for (let n in e) {
        let i = e[n];
        i !== void 0 && (r[n] = sa(i, t.nestArgument(n)));
      }
      return r;
    }
    function Rp(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = e[n];
        i !== void 0 && r.push(sa(i, t.nestArgument(String(n))));
      }
      return r;
    }
    function Fp(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function Op(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    var yt = class {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
      }
      throwValidationError(t) {
        var _a4;
        Ur({ errors: [t], originalMethod: this.params.originalMethod, args: (_a4 = this.params.rootArgs) != null ? _a4 : {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.model))
          return { name: this.params.modelName, fields: this.model.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      getComputedFields() {
        if (!!this.params.modelName)
          return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        var _a4;
        return (_a4 = this.model) == null ? void 0 : _a4.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
        return new yt(__spreadProps(__spreadValues({}, this.params), { modelName: n, selectionPath: this.params.selectionPath.concat(t) }));
      }
      nestArgument(t) {
        return new yt(__spreadProps(__spreadValues({}, this.params), { argumentPath: this.params.argumentPath.concat(t) }));
      }
    };
    var la = (e) => ({ command: e });
    var ua = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
    function Ut(e) {
      try {
        return ca(e, "fast");
      } catch (e2) {
        return ca(e, "slow");
      }
    }
    function ca(e, t) {
      return JSON.stringify(e.map((r) => kp(r, t)));
    }
    function kp(e, t) {
      return typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : lt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : we.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : Dp(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? da(e) : e;
    }
    function Dp(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function da(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(pa);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = pa(e[r]);
      return t;
    }
    function pa(e) {
      return typeof e == "bigint" ? e.toString() : da(e);
    }
    var _p = /^(\s*alter\s)/i;
    var ma = N("prisma:client");
    function oi(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && _p.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var si = (e, t) => (r) => {
      let n = "", i;
      if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: Ut(s || []), __prismaRawParameters__: true };
      } else
        switch (e) {
          case "sqlite":
          case "mysql": {
            n = r.sql, i = { values: Ut(r.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql": {
            n = r.text, i = { values: Ut(r.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            n = ua(r), i = { values: Ut(r.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${e} provider does not support ${t}`);
        }
      return (i == null ? void 0 : i.values) ? ma(`prisma.${t}(${n}, ${i.values})`) : ma(`prisma.${t}(${n})`), { query: n, parameters: i };
    };
    var fa = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new U(t, r);
    } };
    var ga = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function ai(e) {
      return function(r) {
        let n, i = (o = e) => {
          try {
            return o === void 0 || (o == null ? void 0 : o.kind) === "itx" ? n != null ? n : n = ya(r(o)) : ya(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        };
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function ya(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    var ha = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, createEngineSpan() {
      return __async(this, null, function* () {
      });
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var li = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      createEngineSpan(t) {
        return this.getGlobalTracingHelper().createEngineSpan(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        var _a4, _b2;
        return (_b2 = (_a4 = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : _a4.helper) != null ? _b2 : ha;
      }
    };
    function xa(e) {
      return e.includes("tracing") ? new li() : ha;
    }
    function ba(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i == null ? void 0 : i(n);
      } };
    }
    function wa(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    var Ip = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var Pa = Ip;
    function Ta(e, t, r) {
      let n = Ea(e, r), i = Ea(t, r), o = Object.values(i).map((a) => a[a.length - 1]), s = Object.keys(i);
      return Object.entries(n).forEach(([a, l]) => {
        s.includes(a) || o.push(l[l.length - 1]);
      }), o;
    }
    var Ea = (e, t) => e.reduce((r, n) => {
      let i = t(n);
      return r[i] || (r[i] = []), r[i].push(n), r;
    }, {});
    var Qr = class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    var Ca = A(On());
    function Jr(e) {
      return typeof e.batchRequestIdx == "number";
    }
    function Gr(e) {
      return e === null ? e : Array.isArray(e) ? e.map(Gr) : typeof e == "object" ? Np(e) ? Lp(e) : ot(e, Gr) : e;
    }
    function Np(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function Lp({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return Buffer.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new we(t);
        case "Json":
          return JSON.parse(t);
        default:
          Je(t, "Unknown tagged value");
      }
    }
    function va(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
        return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(ui(e.query.arguments)), t.push(ui(e.query.selection)), t.join("");
    }
    function ui(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${ui(n)})` : r;
      }).join(" ")})`;
    }
    var $p = { aggregate: false, aggregateRaw: false, createMany: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function ci(e) {
      return $p[e];
    }
    var Wr = class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error)
              for (let i = 0; i < r.length; i++)
                r[i].reject(n);
            else
              for (let i = 0; i < r.length; i++) {
                let o = n[i];
                o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
              }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++)
              r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    var qp = N("prisma:client:request_handler");
    var Hr = class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new Wr({ batchLoader: js((_0) => __async(this, [_0], function* ({ requests: n, customDataProxyFetch: i }) {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => ci(p.protocolQuery.action));
          return (yield this.client._engine.requestBatch(a, { traceparent: l, transaction: jp(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
            if (p instanceof Error)
              return p;
            try {
              return this.mapQueryEngineResult(n[d], p);
            } catch (g) {
              return g;
            }
          });
        })), singleLoader: (n) => __async(this, null, function* () {
          var _a4;
          let i = ((_a4 = n.transaction) == null ? void 0 : _a4.kind) === "itx" ? Ma(n.transaction) : void 0, o = yield this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: ci(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }), batchBy: (n) => {
          var _a4;
          return ((_a4 = n.transaction) == null ? void 0 : _a4.id) ? `transaction-${n.transaction.id}` : va(n.protocolQuery);
        }, batchOrder(n, i) {
          var _a4, _b2;
          return ((_a4 = n.transaction) == null ? void 0 : _a4.kind) === "batch" && ((_b2 = i.transaction) == null ? void 0 : _b2.kind) === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      request(t) {
        return __async(this, null, function* () {
          try {
            return yield this.dataloader.request(t);
          } catch (r) {
            let { clientMethod: n, callsite: i, transaction: o, args: s } = t;
            this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s });
          }
        });
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n == null ? void 0 : n.data, o = n == null ? void 0 : n.elapsed, s = this.unpack(i, t, r);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o }) {
        if (qp(t), Bp(t, i) || t instanceof Ce)
          throw t;
        if (t instanceof H && Kp(t)) {
          let a = Aa(t.meta);
          Ur({ args: o, errors: [a], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion });
        }
        let s = t.message;
        throw n && (s = gt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: s })), s = this.sanitizeMessage(s), t.code ? new H(s, { code: t.code, clientVersion: this.client._clientVersion, meta: t.meta, batchRequestIdx: t.batchRequestIdx }) : t.isPanic ? new ae(s, this.client._clientVersion) : t instanceof z ? new z(s, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx }) : t instanceof _ ? new _(s, this.client._clientVersion) : t instanceof ae ? new ae(s, this.client._clientVersion) : (t.clientVersion = this.client._clientVersion, t);
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Ca.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t))
          return t;
        let i = Object.values(t)[0], o = r.filter((a) => a !== "select" && a !== "include"), s = Gr(Xn(i, o));
        return n ? n(s) : s;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function jp(e) {
      if (!!e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: Ma(e) };
        Je(e, "Unknown transaction kind");
      }
    }
    function Ma(e) {
      return { id: e.id, payload: e.payload };
    }
    function Bp(e, t) {
      return Jr(e) && (t == null ? void 0 : t.kind) === "batch" && e.batchRequestIdx !== t.index;
    }
    function Kp(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function Aa(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(Aa) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return __spreadProps(__spreadValues({}, e), { selectionPath: t });
      }
      return e;
    }
    var Sa = "5.1.1";
    var Ra = Sa;
    function Fa(e) {
      return e.map((t) => {
        let r = {};
        for (let n of Object.keys(t))
          r[n] = Oa(t[n]);
        return r;
      });
    }
    function Oa({ prisma__type: e, prisma__value: t }) {
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return Buffer.from(t, "base64");
        case "decimal":
          return new we(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "array":
          return t.map(Oa);
        default:
          return t;
      }
    }
    var Ia = A(ni());
    var B = class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    ee(B, "PrismaClientConstructorValidationError");
    var ka = ["datasources", "errorFormat", "log", "__internal"];
    var Da = ["pretty", "colorless", "minimal"];
    var _a = ["info", "query", "warn", "error"];
    var Up = { datasources: (e, t) => {
      if (!!e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new B(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = ht(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new B(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new B(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new B(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new B(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, errorFormat: (e) => {
      if (!!e) {
        if (typeof e != "string")
          throw new B(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!Da.includes(e)) {
          let t = ht(e, Da);
          throw new B(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new B(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !_a.includes(r)) {
          let n = ht(r, _a);
          throw new B(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = ht(i, o);
            throw new B(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i])
              n[i](o);
            else
              throw new B(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object")
        throw new B(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = ht(r, t);
          throw new B(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    } };
    function Na(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!ka.includes(r)) {
          let i = ht(r, ka);
          throw new B(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Up[r](n, t);
      }
    }
    function ht(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = Qp(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    function Qp(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((i) => ({ value: i, distance: (0, Ia.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    function La(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, l = (u) => {
          o || (o = true, r(u));
        };
        for (let u = 0; u < e.length; u++)
          e[u].then((c) => {
            n[u] = c, a();
          }, (c) => {
            if (!Jr(c)) {
              l(c);
              return;
            }
            c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
          });
      });
    }
    var Te = N("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Jp = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var Gp = Symbol.for("prisma.client.transaction.id");
    var Wp = { id: 0, nextId() {
      return ++this.id;
    } };
    function Ka(e) {
      class t {
        constructor(n) {
          var _a4, _b2, _c2, _d, _e2, _f, _g, _h, _i2;
          this._middlewares = new Qr();
          this._createPrismaPromise = ai();
          this.$extends = ks;
          Ws(e), n && Na(n, e.datasourceNames);
          let i = new ja.EventEmitter().on("error", () => {
          });
          this._extensions = Be.empty(), this._previewFeatures = (_b2 = (_a4 = e.generator) == null ? void 0 : _a4.previewFeatures) != null ? _b2 : [], this._clientVersion = (_c2 = e.clientVersion) != null ? _c2 : Ra, this._activeProvider = e.activeProvider, this._dataProxy = e.dataProxy, this._tracingHelper = xa(this._previewFeatures), this._clientEngineType = Pn(e.generator);
          let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Qt.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Qt.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s = Ct(o, { conflictCheck: "none" });
          try {
            let a = n != null ? n : {}, l = (_d = a.__internal) != null ? _d : {}, u = l.debug === true;
            u && N.enable("prisma:client");
            let c = Qt.default.resolve(e.dirname, e.relativePath);
            Ba.default.existsSync(c) || (c = e.dirname), Te("dirname", e.dirname), Te("relativePath", e.relativePath), Te("cwd", c);
            let p = a.datasources || {}, d = Object.entries(p).filter(([f, b]) => b && b.url).map(([f, { url: b }]) => ({ name: f, url: b })), g = Ta([], d, (f) => f.name), y = l.engine || {};
            if (a.errorFormat ? this._errorFormat = a.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: c, dirname: e.dirname, enableDebugLogs: u, allowTriggerPanic: y.allowTriggerPanic, datamodelPath: Qt.default.join(e.dirname, (_e2 = e.filename) != null ? _e2 : "schema.prisma"), prismaPath: (_f = y.binaryPath) != null ? _f : void 0, engineEndpoint: y.endpoint, datasources: g, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: a.log && wa(a.log), logQueries: a.log && Boolean(typeof a.log == "string" ? a.log === "query" : a.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: (_i2 = (_h = s == null ? void 0 : s.parsed) != null ? _h : (_g = e.injectableEdgeEnv) == null ? void 0 : _g.parsed) != null ? _i2 : {}, flags: [], clientVersion: e.clientVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, logEmitter: i, isBundled: e.isBundled }, Te("clientVersion", e.clientVersion), Te("clientEngineType", this._dataProxy ? "dataproxy" : this._clientEngineType), this._dataProxy && Te("using Data Proxy with Node.js runtime"), this._engine = this.getEngine(), this._fetcher = new Hr(this, i), a.log)
              for (let f of a.log) {
                let b = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
                b && this.$on(b, (E) => {
                  var _a5;
                  St.log(`${(_a5 = St.tags[b]) != null ? _a5 : ""}`, E.message || E.query);
                });
              }
            this._metrics = new st(this._engine);
          } catch (a) {
            throw a.clientVersion = this._clientVersion, a;
          }
          return this._appliedParent = Bt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        getEngine() {
          if (this._dataProxy, this._clientEngineType === "library")
            return new Dt(this._engineConfig);
          throw this._clientEngineType, "binary", new te("Invalid client engine type, please use `library` or `binary`", { clientVersion: this._clientVersion });
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.on("beforeExit", i) : this._engine.on(n, (o) => {
            var _a4, _b2, _c2, _d;
            let s = o.fields;
            return i(n === "query" ? { timestamp: o.timestamp, query: (_a4 = s == null ? void 0 : s.query) != null ? _a4 : o.query, params: (_b2 = s == null ? void 0 : s.params) != null ? _b2 : o.params, duration: (_c2 = s == null ? void 0 : s.duration_ms) != null ? _c2 : o.duration, target: o.target } : { timestamp: o.timestamp, message: (_d = s == null ? void 0 : s.message) != null ? _d : o.message, target: o.target });
          });
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        _runDisconnect() {
          return __async(this, null, function* () {
            yield this._engine.stop(), delete this._connectionPromise, this._engine = this.getEngine(), delete this._disconnectionPromise;
          });
        }
        $disconnect() {
          return __async(this, null, function* () {
            try {
              yield this._engine.stop();
            } catch (n) {
              throw n.clientVersion = this._clientVersion, n;
            } finally {
              ki();
            }
          });
        }
        $executeRawInternal(n, i, o, s) {
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: si(this._activeProvider, i), callsite: je(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = $a(n, i);
              return oi(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new te("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (oi(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new te(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: la, callsite: je(this._errorFormat), transaction: i }));
        }
        $queryRawInternal(n, i, o, s) {
          return __async(this, null, function* () {
            return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: si(this._activeProvider, i), callsite: je(this._errorFormat), dataPath: [], middlewareArgsMapper: s }).then(Fa);
          });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(o, "$queryRaw", ...$a(n, i));
            throw new te("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Wp.nextId(), s = ba(n.length), a = n.map((l, u) => {
            var _a4, _b2;
            if ((l == null ? void 0 : l[Symbol.toStringTag]) !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = i == null ? void 0 : i.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
            return (_b2 = (_a4 = l.requestTransaction) == null ? void 0 : _a4.call(l, p)) != null ? _b2 : l;
          });
          return La(a);
        }
        _transactionWithCallback(_0) {
          return __async(this, arguments, function* ({ callback: n, options: i }) {
            let o = { traceparent: this._tracingHelper.getTraceParent() }, s = yield this._engine.transaction("start", o, i), a;
            try {
              let l = __spreadValues({ kind: "itx" }, s);
              a = yield n(this._createItxClient(l)), yield this._engine.transaction("commit", o, s);
            } catch (l) {
              throw yield this._engine.transaction("rollback", o, s).catch(() => {
              }), l;
            }
            return a;
          });
        }
        _createItxClient(n) {
          return Bt(xe(Lr(this), [re("_appliedParent", () => this._appliedParent._createItxClient(n)), re("_createPrismaPromise", () => ai(n)), re(Gp, () => n.id), Ot(Pa)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          var _a4;
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = (_a4 = n.middlewareArgsMapper) != null ? _a4 : Jp, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: Boolean(n.transaction), action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: `${o.model}.${o.action}` } } }, a = -1, l = (u) => __async(this, null, function* () {
            let c = this._middlewares.get(++a);
            if (c)
              return this._tracingHelper.runInChildSpan(s.middleware, (b) => c(u, (E) => (b == null ? void 0 : b.end(), l(E))));
            let _a5 = u, { runInTransaction: p, args: d } = _a5, g = __objRest(_a5, ["runInTransaction", "args"]), y = __spreadValues(__spreadValues({}, n), g);
            d && (y.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== void 0 && p === false && delete y.transaction;
            let f = yield qs(this, y);
            return y.model ? Is({ result: f, modelName: y.model, args: y.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel }) : f;
          });
          return this._tracingHelper.runInChildSpan(s.operation, () => new qa.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
        }
        _executeRequest(_0) {
          return __async(this, arguments, function* ({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: g }) {
            try {
              n = u ? u(n) : n;
              let y = { name: "serialize" }, f = this._tracingHelper.runInChildSpan(y, () => oa({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion }));
              return N.enabled("prisma:client") && (Te("Prisma Client call:"), Te(`prisma.${i}(${fs(n)})`), Te("Generated request:"), Te(JSON.stringify(f, null, 2) + `
`)), (c == null ? void 0 : c.kind) === "batch" && (yield c.lock), this._fetcher.request({ protocolQuery: f, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), customDataProxyFetch: g });
            } catch (y) {
              throw y.clientVersion = this._clientVersion, y;
            }
          });
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new te("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          var _a4;
          return !!((_a4 = this._engineConfig.previewFeatures) == null ? void 0 : _a4.includes(n));
        }
      }
      return t;
    }
    function $a(e, t) {
      return Hp(e) ? [new U(e, t), fa] : [e, ga];
    }
    function Hp(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    var zp = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Va(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!zp.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    function Ua(e) {
      Ct(e, { conflictCheck: "warn" });
    }
  }
});

// prisma/databases/auth/index.js
var require_auth = __commonJS({
  "prisma/databases/auth/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2
    } = require_library();
    var Prisma = {};
    exports2.Prisma = Prisma;
    exports2.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.1.1",
      engine: "6a3747c37ff169c90047725a05a6ef02e32ac97e"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    var path = require("path");
    exports2.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports2.Prisma.AcoesScalarFieldEnum = {
      id: "id",
      descricao: "descricao",
      descricao_titulo: "descricao_titulo",
      tabela: "tabela",
      tabela_titulo: "tabela_titulo",
      valor_padrao: "valor_padrao"
    };
    exports2.Prisma.Acoes_x_gruposScalarFieldEnum = {
      id: "id",
      id_acao: "id_acao",
      id_grupo_usuario: "id_grupo_usuario",
      permite: "permite"
    };
    exports2.Prisma.EmpresasScalarFieldEnum = {
      id: "id",
      cnpj: "cnpj",
      xRazaoSocial: "xRazaoSocial",
      xFant: "xFant",
      xLgr: "xLgr",
      nro: "nro",
      xCpl: "xCpl",
      xBairro: "xBairro",
      cMun: "cMun",
      xMun: "xMun",
      uf: "uf",
      cep: "cep",
      fone: "fone",
      ie: "ie",
      crt: "crt",
      token: "token",
      banco: "banco",
      status: "status",
      email: "email"
    };
    exports2.Prisma.Grupos_usuariosScalarFieldEnum = {
      id: "id",
      nome: "nome",
      id_empresa: "id_empresa",
      pagina_inicial: "pagina_inicial"
    };
    exports2.Prisma.UsuariosScalarFieldEnum = {
      id: "id",
      nome: "nome",
      ultimo_nome: "ultimo_nome",
      email: "email",
      senha: "senha",
      celular: "celular",
      status: "status",
      user_token: "user_token",
      exclusivo: "exclusivo"
    };
    exports2.Prisma.Usuarios_x_empresasScalarFieldEnum = {
      id: "id",
      id_empresa: "id_empresa",
      id_usuario: "id_usuario",
      id_grupo_usuario: "id_grupo_usuario"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports2.Prisma.ModelName = {
      acoes: "acoes",
      acoes_x_grupos: "acoes_x_grupos",
      empresas: "empresas",
      grupos_usuarios: "grupos_usuarios",
      usuarios: "usuarios",
      usuarios_x_empresas: "usuarios_x_empresas"
    };
    var config2 = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "C:\\Users\\Natan\\Documents\\GitHub\\API-WEB\\prisma\\databases\\auth",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": [],
        "isCustomOutput": true
      },
      "relativeEnvPaths": {
        "rootEnvPath": "../../../.env",
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../..",
      "clientVersion": "5.1.1",
      "engineVersion": "6a3747c37ff169c90047725a05a6ef02e32ac97e",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "mysql",
      "dataProxy": false
    };
    var fs2 = require("fs");
    config2.dirname = __dirname;
    var _a2;
    if (!fs2.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "prisma/databases/auth",
        "databases/auth"
      ];
      const alternativePath = (_a2 = alternativePaths.find((altPath) => {
        return fs2.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      })) != null ? _a2 : alternativePaths[0];
      config2.dirname = path.join(process.cwd(), alternativePath);
      config2.isBundled = true;
    }
    config2.runtimeDataModel = JSON.parse('{"models":{"acoes":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"descricao","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"descricao_titulo","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tabela","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tabela_titulo","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"valor_padrao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"acoes_x_grupos","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"acoes_x_grupos","relationName":"acoesToacoes_x_grupos","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"acoes_x_grupos":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"id_acao","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"id_grupo_usuario","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"permite","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"acoes","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"acoes","relationName":"acoesToacoes_x_grupos","relationFromFields":["id_acao"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"grupos_usuarios","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"grupos_usuarios","relationName":"acoes_x_gruposTogrupos_usuarios","relationFromFields":["id_grupo_usuario"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"empresas":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"cnpj","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"xRazaoSocial","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"xFant","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"xLgr","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"nro","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"xCpl","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"xBairro","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cMun","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"xMun","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"uf","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cep","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"fone","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"ie","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"crt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"token","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"banco","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"grupos_usuarios","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"grupos_usuarios","relationName":"empresasTogrupos_usuarios","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"usuarios_x_empresas","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"usuarios_x_empresas","relationName":"empresasTousuarios_x_empresas","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"grupos_usuarios":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"nome","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"id_empresa","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"pagina_inicial","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"notas-fiscais","isGenerated":false,"isUpdatedAt":false},{"name":"acoes_x_grupos","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"acoes_x_grupos","relationName":"acoes_x_gruposTogrupos_usuarios","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"empresas","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"empresas","relationName":"empresasTogrupos_usuarios","relationFromFields":["id_empresa"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"usuarios_x_empresas","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"usuarios_x_empresas","relationName":"grupos_usuariosTousuarios_x_empresas","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"usuarios":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"nome","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"ultimo_nome","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"senha","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"celular","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"A","isGenerated":false,"isUpdatedAt":false},{"name":"user_token","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"exclusivo","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"N","isGenerated":false,"isUpdatedAt":false},{"name":"usuarios_x_empresas","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"usuarios_x_empresas","relationName":"usuariosTousuarios_x_empresas","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"usuarios_x_empresas":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"id_empresa","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"id_usuario","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"id_grupo_usuario","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"empresas","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"empresas","relationName":"empresasTousuarios_x_empresas","relationFromFields":["id_empresa"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"usuarios","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"usuarios","relationName":"usuariosTousuarios_x_empresas","relationFromFields":["id_usuario"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"grupos_usuarios","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"grupos_usuarios","relationName":"grupos_usuariosTousuarios_x_empresas","relationFromFields":["id_grupo_usuario"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports2.Prisma, config2.runtimeDataModel);
    var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
    warnEnvConflicts2({
      rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient = getPrismaClient2(config2);
    exports2.PrismaClient = PrismaClient;
    Object.assign(exports2, Prisma);
    path.join(__dirname, "query_engine-windows.dll.node");
    path.join(process.cwd(), "prisma/databases/auth/query_engine-windows.dll.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "prisma/databases/auth/schema.prisma");
  }
});

// prisma/databases/main/runtime/library.js
var require_library2 = __commonJS({
  "prisma/databases/main/runtime/library.js"(exports, module) {
    "use strict";
    var Qa = Object.create;
    var Gt = Object.defineProperty;
    var Ja = Object.getOwnPropertyDescriptor;
    var Ga = Object.getOwnPropertyNames;
    var Wa = Object.getPrototypeOf;
    var Ha = Object.prototype.hasOwnProperty;
    var L = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var xt = (e, t) => {
      for (var r in t)
        Gt(e, r, { get: t[r], enumerable: true });
    };
    var pi = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of Ga(t))
          !Ha.call(e, i) && i !== r && Gt(e, i, { get: () => t[i], enumerable: !(n = Ja(t, i)) || n.enumerable });
      return e;
    };
    var A = (e, t, r) => (r = e != null ? Qa(Wa(e)) : {}, pi(t || !e || !e.__esModule ? Gt(r, "default", { value: e, enumerable: true }) : r, e));
    var za = (e) => pi(Gt({}, "__esModule", { value: true }), e);
    var Ei = L((pd, Pi) => {
      var ze = 1e3, Ye = ze * 60, Ze = Ye * 60, Ve = Ze * 24, Ya = Ve * 7, Za = Ve * 365.25;
      Pi.exports = function(e, t) {
        t = t || {};
        var r = typeof e;
        if (r === "string" && e.length > 0)
          return Xa(e);
        if (r === "number" && isFinite(e))
          return t.long ? tl(e) : el(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
      };
      function Xa(e) {
        if (e = String(e), !(e.length > 100)) {
          var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
          if (!!t) {
            var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
            switch (n) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return r * Za;
              case "weeks":
              case "week":
              case "w":
                return r * Ya;
              case "days":
              case "day":
              case "d":
                return r * Ve;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return r * Ze;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return r * Ye;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return r * ze;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return r;
              default:
                return;
            }
          }
        }
      }
      function el(e) {
        var t = Math.abs(e);
        return t >= Ve ? Math.round(e / Ve) + "d" : t >= Ze ? Math.round(e / Ze) + "h" : t >= Ye ? Math.round(e / Ye) + "m" : t >= ze ? Math.round(e / ze) + "s" : e + "ms";
      }
      function tl(e) {
        var t = Math.abs(e);
        return t >= Ve ? Yt(e, t, Ve, "day") : t >= Ze ? Yt(e, t, Ze, "hour") : t >= Ye ? Yt(e, t, Ye, "minute") : t >= ze ? Yt(e, t, ze, "second") : e + " ms";
      }
      function Yt(e, t, r, n) {
        var i = t >= r * 1.5;
        return Math.round(e / r) + " " + n + (i ? "s" : "");
      }
    });
    var en = L((dd, Ti) => {
      function rl(e) {
        r.debug = r, r.default = r, r.coerce = l, r.disable = o, r.enable = i, r.enabled = s, r.humanize = Ei(), r.destroy = u, Object.keys(e).forEach((c) => {
          r[c] = e[c];
        }), r.names = [], r.skips = [], r.formatters = {};
        function t(c) {
          let p = 0;
          for (let d = 0; d < c.length; d++)
            p = (p << 5) - p + c.charCodeAt(d), p |= 0;
          return r.colors[Math.abs(p) % r.colors.length];
        }
        r.selectColor = t;
        function r(c) {
          let p, d = null, g, y;
          function f(...b) {
            if (!f.enabled)
              return;
            let E = f, v = Number(/* @__PURE__ */ new Date()), x = v - (p || v);
            E.diff = x, E.prev = p, E.curr = v, p = v, b[0] = r.coerce(b[0]), typeof b[0] != "string" && b.unshift("%O");
            let M = 0;
            b[0] = b[0].replace(/%([a-zA-Z%])/g, (K, Ke) => {
              if (K === "%%")
                return "%";
              M++;
              let I = r.formatters[Ke];
              if (typeof I == "function") {
                let J = b[M];
                K = I.call(E, J), b.splice(M, 1), M--;
              }
              return K;
            }), r.formatArgs.call(E, b), (E.log || r.log).apply(E, b);
          }
          return f.namespace = c, f.useColors = r.useColors(), f.color = r.selectColor(c), f.extend = n, f.destroy = r.destroy, Object.defineProperty(f, "enabled", { enumerable: true, configurable: false, get: () => d !== null ? d : (g !== r.namespaces && (g = r.namespaces, y = r.enabled(c)), y), set: (b) => {
            d = b;
          } }), typeof r.init == "function" && r.init(f), f;
        }
        function n(c, p) {
          let d = r(this.namespace + (typeof p > "u" ? ":" : p) + c);
          return d.log = this.log, d;
        }
        function i(c) {
          r.save(c), r.namespaces = c, r.names = [], r.skips = [];
          let p, d = (typeof c == "string" ? c : "").split(/[\s,]+/), g = d.length;
          for (p = 0; p < g; p++)
            !d[p] || (c = d[p].replace(/\*/g, ".*?"), c[0] === "-" ? r.skips.push(new RegExp("^" + c.slice(1) + "$")) : r.names.push(new RegExp("^" + c + "$")));
        }
        function o() {
          let c = [...r.names.map(a), ...r.skips.map(a).map((p) => "-" + p)].join(",");
          return r.enable(""), c;
        }
        function s(c) {
          if (c[c.length - 1] === "*")
            return true;
          let p, d;
          for (p = 0, d = r.skips.length; p < d; p++)
            if (r.skips[p].test(c))
              return false;
          for (p = 0, d = r.names.length; p < d; p++)
            if (r.names[p].test(c))
              return true;
          return false;
        }
        function a(c) {
          return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*");
        }
        function l(c) {
          return c instanceof Error ? c.stack || c.message : c;
        }
        function u() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        return r.enable(r.load()), r;
      }
      Ti.exports = rl;
    });
    var vi = L((se, Zt) => {
      se.formatArgs = il;
      se.save = ol;
      se.load = sl;
      se.useColors = nl;
      se.storage = al();
      se.destroy = (() => {
        let e = false;
        return () => {
          e || (e = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
      })();
      se.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
      function nl() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? true : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? false : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function il(e) {
        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + Zt.exports.humanize(this.diff), !this.useColors)
          return;
        let t = "color: " + this.color;
        e.splice(1, 0, t, "color: inherit");
        let r = 0, n = 0;
        e[0].replace(/%[a-zA-Z%]/g, (i) => {
          i !== "%%" && (r++, i === "%c" && (n = r));
        }), e.splice(n, 0, t);
      }
      se.log = console.debug || console.log || (() => {
      });
      function ol(e) {
        try {
          e ? se.storage.setItem("debug", e) : se.storage.removeItem("debug");
        } catch (e2) {
        }
      }
      function sl() {
        let e;
        try {
          e = se.storage.getItem("debug");
        } catch (e2) {
        }
        return !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG), e;
      }
      function al() {
        try {
          return localStorage;
        } catch (e) {
        }
      }
      Zt.exports = en()(se);
      var { formatters: ll } = Zt.exports;
      ll.j = function(e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      };
    });
    var tn = L((md, Ci) => {
      "use strict";
      Ci.exports = (e, t = process.argv) => {
        let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
      };
    });
    var on = L((fd, Ai) => {
      "use strict";
      var ul = require("os"), Mi = require("tty"), ce = tn(), { env: q } = process, Fe;
      ce("no-color") || ce("no-colors") || ce("color=false") || ce("color=never") ? Fe = 0 : (ce("color") || ce("colors") || ce("color=true") || ce("color=always")) && (Fe = 1);
      "FORCE_COLOR" in q && (q.FORCE_COLOR === "true" ? Fe = 1 : q.FORCE_COLOR === "false" ? Fe = 0 : Fe = q.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(q.FORCE_COLOR, 10), 3));
      function rn(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      function nn(e, t) {
        if (Fe === 0)
          return 0;
        if (ce("color=16m") || ce("color=full") || ce("color=truecolor"))
          return 3;
        if (ce("color=256"))
          return 2;
        if (e && !t && Fe === void 0)
          return 0;
        let r = Fe || 0;
        if (q.TERM === "dumb")
          return r;
        if (process.platform === "win32") {
          let n = ul.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in q)
          return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in q) || q.CI_NAME === "codeship" ? 1 : r;
        if ("TEAMCITY_VERSION" in q)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(q.TEAMCITY_VERSION) ? 1 : 0;
        if (q.COLORTERM === "truecolor")
          return 3;
        if ("TERM_PROGRAM" in q) {
          let n = parseInt((q.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (q.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(q.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(q.TERM) || "COLORTERM" in q ? 1 : r;
      }
      function cl(e) {
        let t = nn(e, e && e.isTTY);
        return rn(t);
      }
      Ai.exports = { supportsColor: cl, stdout: rn(nn(true, Mi.isatty(1))), stderr: rn(nn(true, Mi.isatty(2))) };
    });
    var Ri = L((V, er) => {
      var pl = require("tty"), Xt = require("util");
      V.init = xl;
      V.log = gl;
      V.formatArgs = ml;
      V.save = yl;
      V.load = hl;
      V.useColors = dl;
      V.destroy = Xt.deprecate(() => {
      }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      V.colors = [6, 2, 3, 4, 5, 1];
      try {
        let e = on();
        e && (e.stderr || e).level >= 2 && (V.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
      } catch (e) {
      }
      V.inspectOpts = Object.keys(process.env).filter((e) => /^debug_/i.test(e)).reduce((e, t) => {
        let r = t.substring(6).toLowerCase().replace(/_([a-z])/g, (i, o) => o.toUpperCase()), n = process.env[t];
        return /^(yes|on|true|enabled)$/i.test(n) ? n = true : /^(no|off|false|disabled)$/i.test(n) ? n = false : n === "null" ? n = null : n = Number(n), e[r] = n, e;
      }, {});
      function dl() {
        return "colors" in V.inspectOpts ? Boolean(V.inspectOpts.colors) : pl.isatty(process.stderr.fd);
      }
      function ml(e) {
        let { namespace: t, useColors: r } = this;
        if (r) {
          let n = this.color, i = "\x1B[3" + (n < 8 ? n : "8;5;" + n), o = `  ${i};1m${t} \x1B[0m`;
          e[0] = o + e[0].split(`
`).join(`
` + o), e.push(i + "m+" + er.exports.humanize(this.diff) + "\x1B[0m");
        } else
          e[0] = fl() + t + " " + e[0];
      }
      function fl() {
        return V.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
      }
      function gl(...e) {
        return process.stderr.write(Xt.format(...e) + `
`);
      }
      function yl(e) {
        e ? process.env.DEBUG = e : delete process.env.DEBUG;
      }
      function hl() {
        return process.env.DEBUG;
      }
      function xl(e) {
        e.inspectOpts = {};
        let t = Object.keys(V.inspectOpts);
        for (let r = 0; r < t.length; r++)
          e.inspectOpts[t[r]] = V.inspectOpts[t[r]];
      }
      er.exports = en()(V);
      var { formatters: Si } = er.exports;
      Si.o = function(e) {
        return this.inspectOpts.colors = this.useColors, Xt.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(" ");
      };
      Si.O = function(e) {
        return this.inspectOpts.colors = this.useColors, Xt.inspect(e, this.inspectOpts);
      };
    });
    var Fi = L((gd, sn) => {
      typeof process > "u" || process.type === "renderer" || process.browser === true || process.__nwjs ? sn.exports = vi() : sn.exports = Ri();
    });
    var Bi = L((Gd, dn) => {
      "use strict";
      var C = dn.exports;
      dn.exports.default = C;
      var S = "\x1B[", Pt = "\x1B]", tt = "\x07", or = ";", ji = process.env.TERM_PROGRAM === "Apple_Terminal";
      C.cursorTo = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        return typeof t != "number" ? S + (e + 1) + "G" : S + (t + 1) + ";" + (e + 1) + "H";
      };
      C.cursorMove = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        let r = "";
        return e < 0 ? r += S + -e + "D" : e > 0 && (r += S + e + "C"), t < 0 ? r += S + -t + "A" : t > 0 && (r += S + t + "B"), r;
      };
      C.cursorUp = (e = 1) => S + e + "A";
      C.cursorDown = (e = 1) => S + e + "B";
      C.cursorForward = (e = 1) => S + e + "C";
      C.cursorBackward = (e = 1) => S + e + "D";
      C.cursorLeft = S + "G";
      C.cursorSavePosition = ji ? "\x1B7" : S + "s";
      C.cursorRestorePosition = ji ? "\x1B8" : S + "u";
      C.cursorGetPosition = S + "6n";
      C.cursorNextLine = S + "E";
      C.cursorPrevLine = S + "F";
      C.cursorHide = S + "?25l";
      C.cursorShow = S + "?25h";
      C.eraseLines = (e) => {
        let t = "";
        for (let r = 0; r < e; r++)
          t += C.eraseLine + (r < e - 1 ? C.cursorUp() : "");
        return e && (t += C.cursorLeft), t;
      };
      C.eraseEndLine = S + "K";
      C.eraseStartLine = S + "1K";
      C.eraseLine = S + "2K";
      C.eraseDown = S + "J";
      C.eraseUp = S + "1J";
      C.eraseScreen = S + "2J";
      C.scrollUp = S + "S";
      C.scrollDown = S + "T";
      C.clearScreen = "\x1Bc";
      C.clearTerminal = process.platform === "win32" ? `${C.eraseScreen}${S}0f` : `${C.eraseScreen}${S}3J${S}H`;
      C.beep = tt;
      C.link = (e, t) => [Pt, "8", or, or, t, tt, e, Pt, "8", or, or, tt].join("");
      C.image = (e, t = {}) => {
        let r = `${Pt}1337;File=inline=1`;
        return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + tt;
      };
      C.iTerm = { setCwd: (e = process.cwd()) => `${Pt}50;CurrentDir=${e}${tt}`, annotation: (e, t = {}) => {
        let r = `${Pt}1337;`, n = typeof t.x < "u", i = typeof t.y < "u";
        if ((n || i) && !(n && i && typeof t.length < "u"))
          throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return e = e.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : r += e, r + tt;
      } };
    });
    var Ui = L((Wd, Vi) => {
      "use strict";
      var vl = on(), rt = tn();
      function Ki(e) {
        if (/^\d{3,4}$/.test(e)) {
          let r = /(\d{1,2})(\d{2})/.exec(e);
          return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
        }
        let t = (e || "").split(".").map((r) => parseInt(r, 10));
        return { major: t[0], minor: t[1], patch: t[2] };
      }
      function mn(e) {
        let { env: t } = process;
        if ("FORCE_HYPERLINK" in t)
          return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
        if (rt("no-hyperlink") || rt("no-hyperlinks") || rt("hyperlink=false") || rt("hyperlink=never"))
          return false;
        if (rt("hyperlink=true") || rt("hyperlink=always") || "NETLIFY" in t)
          return true;
        if (!vl.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t)
          return false;
        if ("TERM_PROGRAM" in t) {
          let r = Ki(t.TERM_PROGRAM_VERSION);
          switch (t.TERM_PROGRAM) {
            case "iTerm.app":
              return r.major === 3 ? r.minor >= 1 : r.major > 3;
            case "WezTerm":
              return r.major >= 20200620;
            case "vscode":
              return r.major > 1 || r.major === 1 && r.minor >= 72;
          }
        }
        if ("VTE_VERSION" in t) {
          if (t.VTE_VERSION === "0.50.0")
            return false;
          let r = Ki(t.VTE_VERSION);
          return r.major > 0 || r.minor >= 50;
        }
        return false;
      }
      Vi.exports = { supportsHyperlink: mn, stdout: mn(process.stdout), stderr: mn(process.stderr) };
    });
    var Ji = L((Hd, Et) => {
      "use strict";
      var Cl = Bi(), fn = Ui(), Qi = (e, t, _a4 = {}) => {
        var _b2 = _a4, { target: r = "stdout" } = _b2, n = __objRest(_b2, ["target"]);
        return fn[r] ? Cl.link(e, t) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
      };
      Et.exports = (e, t, r = {}) => Qi(e, t, r);
      Et.exports.stderr = (e, t, r = {}) => Qi(e, t, __spreadValues({ target: "stderr" }, r));
      Et.exports.isSupported = fn.stdout;
      Et.exports.stderr.isSupported = fn.stderr;
    });
    var ro = L((mm, jl) => {
      jl.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
    });
    var io = L((fm, cr) => {
      var Bl = require("fs"), no = require("path"), Kl = require("os"), Vl = ro(), Ul = Vl.version, Ql = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
      function Jl(e) {
        let t = {}, r = e.toString();
        r = r.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = Ql.exec(r)) != null; ) {
          let i = n[1], o = n[2] || "";
          o = o.trim();
          let s = o[0];
          o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
        }
        return t;
      }
      function xn(e) {
        console.log(`[dotenv@${Ul}][DEBUG] ${e}`);
      }
      function Gl(e) {
        return e[0] === "~" ? no.join(Kl.homedir(), e.slice(1)) : e;
      }
      function Wl(e) {
        let t = no.resolve(process.cwd(), ".env"), r = "utf8", n = Boolean(e && e.debug), i = Boolean(e && e.override);
        e && (e.path != null && (t = Gl(e.path)), e.encoding != null && (r = e.encoding));
        try {
          let o = ur.parse(Bl.readFileSync(t, { encoding: r }));
          return Object.keys(o).forEach(function(s) {
            Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && xn(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
          }), { parsed: o };
        } catch (o) {
          return n && xn(`Failed to load ${t} ${o.message}`), { error: o };
        }
      }
      var ur = { config: Wl, parse: Jl };
      cr.exports.config = ur.config;
      cr.exports.parse = ur.parse;
      cr.exports = ur;
    });
    var co = L((Pm, uo) => {
      "use strict";
      uo.exports = (e) => {
        let t = e.match(/^[ \t]*(?=\S)/gm);
        return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
      };
    });
    var mo = L((Em, po) => {
      "use strict";
      var Zl = co();
      po.exports = (e) => {
        let t = Zl(e);
        if (t === 0)
          return e;
        let r = new RegExp(`^[ \\t]{${t}}`, "gm");
        return e.replace(r, "");
      };
    });
    var fo = L((Tm, Xl) => {
      Xl.exports = { name: "@prisma/engines-version", version: "5.1.1-1.6a3747c37ff169c90047725a05a6ef02e32ac97e", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "6a3747c37ff169c90047725a05a6ef02e32ac97e" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.17.1", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var En = L((dr) => {
      "use strict";
      Object.defineProperty(dr, "__esModule", { value: true });
      dr.enginesVersion = void 0;
      dr.enginesVersion = fo().prisma.enginesVersion;
    });
    var An = L((Nm, ho) => {
      "use strict";
      ho.exports = (e, t = 1, r) => {
        if (r = __spreadValues({ indent: " ", includeEmptyLines: false }, r), typeof e != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0)
          return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Po = L((qm, wo) => {
      "use strict";
      wo.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var On = L((jm, Eo) => {
      "use strict";
      var uu = Po();
      Eo.exports = (e) => typeof e == "string" ? e.replace(uu(), "") : e;
    });
    var To = L((Km, mr) => {
      "use strict";
      mr.exports = (e = {}) => {
        let t;
        if (e.repoUrl)
          t = e.repoUrl;
        else if (e.user && e.repo)
          t = `https://github.com/${e.user}/${e.repo}`;
        else
          throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o))
                throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            r.searchParams.set(i, o);
          }
        }
        return r.toString();
      };
      mr.exports.default = mr.exports;
    });
    var ni = L((jx, Hs) => {
      "use strict";
      Hs.exports = function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        return function(t, r) {
          if (t === r)
            return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
            i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); )
            s++;
          if (i -= s, o -= s, i === 0 || o < 3)
            return o;
          var a = 0, l, u, c, p, d, g, y, f, b, E, v, x, M = [];
          for (l = 0; l < i; l++)
            M.push(l + 1), M.push(t.charCodeAt(s + l));
          for (var le = M.length - 1; a < o - 3; )
            for (b = r.charCodeAt(s + (u = a)), E = r.charCodeAt(s + (c = a + 1)), v = r.charCodeAt(s + (p = a + 2)), x = r.charCodeAt(s + (d = a + 3)), g = a += 4, l = 0; l < le; l += 2)
              y = M[l], f = M[l + 1], u = e(y, u, c, b, f), c = e(u, c, p, E, f), p = e(c, p, d, v, f), g = e(p, d, g, x, f), M[l] = g, d = p, p = c, c = u, u = y;
          for (; a < o; )
            for (b = r.charCodeAt(s + (u = a)), g = ++a, l = 0; l < le; l += 2)
              y = M[l], M[l] = g = e(y, u, g, b, M[l + 1]), u = y;
          return g;
        };
      }();
    });
    var Yp = {};
    xt(Yp, { DMMF: () => ue, DMMFClass: () => bt, Debug: () => an, Decimal: () => we, Extensions: () => Yr, MetricsClient: () => st, NotFoundError: () => Ce, PrismaClientInitializationError: () => _, PrismaClientKnownRequestError: () => H, PrismaClientRustPanicError: () => ae, PrismaClientUnknownRequestError: () => z, PrismaClientValidationError: () => te, Public: () => Zr, Sql: () => U, Types: () => Xr, defineDmmfProperty: () => Co, empty: () => Ao, getPrismaClient: () => Ka, join: () => Mo, makeStrictEnum: () => Va, objectEnumValues: () => Pr, raw: () => Ln, sqltag: () => $n, warnEnvConflicts: () => Ua, warnOnce: () => In });
    module.exports = za(Yp);
    var Yr = {};
    xt(Yr, { defineExtension: () => di, getExtensionContext: () => mi });
    function di(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    function mi(e) {
      return e;
    }
    var Zr = {};
    xt(Zr, { validator: () => fi });
    function fi(...e) {
      return (t) => t;
    }
    var Xr = {};
    xt(Xr, { Extensions: () => gi, Public: () => yi, Result: () => hi, Utils: () => xi });
    var gi = {};
    var yi = {};
    var hi = {};
    var xi = {};
    function bi(e, t) {
      var _a4;
      for (let r of t)
        for (let n of Object.getOwnPropertyNames(r.prototype))
          Object.defineProperty(e.prototype, n, (_a4 = Object.getOwnPropertyDescriptor(r.prototype, n)) != null ? _a4 : /* @__PURE__ */ Object.create(null));
    }
    var Z = (e, t) => {
      let r = {};
      for (let n of e) {
        let i = n[t];
        r[i] = n;
      }
      return r;
    };
    function wi(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    var Wt = class {
      constructor({ datamodel: t }) {
        this.datamodel = t, this.datamodelEnumMap = this.getDatamodelEnumMap(), this.modelMap = this.getModelMap(), this.typeMap = this.getTypeMap(), this.typeAndModelMap = this.getTypeModelMap();
      }
      getDatamodelEnumMap() {
        return Z(this.datamodel.enums, "name");
      }
      getModelMap() {
        return __spreadValues({}, Z(this.datamodel.models, "name"));
      }
      getTypeMap() {
        return __spreadValues({}, Z(this.datamodel.types, "name"));
      }
      getTypeModelMap() {
        return __spreadValues(__spreadValues({}, this.getTypeMap()), this.getModelMap());
      }
    };
    var Ht = class {
      constructor({ mappings: t }) {
        this.mappings = t, this.mappingsMap = this.getMappingsMap();
      }
      getMappingsMap() {
        return Z(this.mappings.modelOperations, "model");
      }
      getOtherOperationNames() {
        return [Object.values(this.mappings.otherOperations.write), Object.values(this.mappings.otherOperations.read)].flat();
      }
    };
    var zt = class {
      constructor({ schema: t }) {
        this.outputTypeToMergedOutputType = (t2) => __spreadProps(__spreadValues({}, t2), { fields: t2.fields });
        this.schema = t, this.enumMap = this.getEnumMap(), this.outputTypes = this.getOutputTypes(), this.outputTypeMap = this.getMergedOutputTypeMap(), this.resolveOutputTypes(), this.inputObjectTypes = this.schema.inputObjectTypes, this.inputTypeMap = this.getInputTypeMap(), this.resolveInputTypes(), this.resolveFieldArgumentTypes(), this.queryType = this.outputTypeMap.prisma.Query, this.mutationType = this.outputTypeMap.prisma.Mutation, this.rootFieldMap = this.getRootFieldMap();
      }
      get [Symbol.toStringTag]() {
        return "DMMFClass";
      }
      resolveOutputTypes() {
        this.resolveOutputTypesInNamespace("prisma"), this.resolveOutputTypesInNamespace("model");
      }
      resolveOutputTypesInNamespace(t) {
        var _a4;
        for (let r of this.outputTypes[t]) {
          for (let n of r.fields) {
            if (typeof n.outputType.type != "string" || n.outputType.location === "scalar")
              continue;
            let i = (_a4 = n.outputType.namespace) != null ? _a4 : "model";
            n.outputType.location === "outputObjectTypes" ? n.outputType.type = this.outputTypeMap[i][n.outputType.type] : n.outputType.location === "enumTypes" && (n.outputType.type = this.enumMap[i][n.outputType.type]);
          }
          r.fieldMap = Z(r.fields, "name");
        }
      }
      resolveInputTypes() {
        this.resolveNamespaceInputTypes("model"), this.resolveNamespaceInputTypes("prisma");
      }
      resolveNamespaceInputTypes(t) {
        var _a4, _b2;
        let r = (_a4 = this.inputObjectTypes[t]) != null ? _a4 : [];
        for (let n of r) {
          for (let i of n.fields)
            for (let o of i.inputTypes) {
              if (typeof o.type != "string")
                continue;
              let s = o.type;
              if (o.location === "scalar")
                continue;
              let a = (_b2 = o.namespace) != null ? _b2 : "model";
              o.location === "inputObjectTypes" && (o.type = this.inputTypeMap[a][s]), o.location === "enumTypes" && (o.type = this.enumMap[a][s]);
            }
          n.fieldMap = Z(n.fields, "name");
        }
      }
      resolveFieldArgumentTypes() {
        this.resolveFieldArgumentTypesInNamespace("model"), this.resolveFieldArgumentTypesInNamespace("prisma");
      }
      resolveFieldArgumentTypesInNamespace(t) {
        var _a4, _b2;
        let r = (_a4 = this.outputTypes[t]) != null ? _a4 : [];
        for (let n of r)
          for (let i of n.fields)
            for (let o of i.args)
              for (let s of o.inputTypes) {
                let a = s.type;
                if (typeof a != "string" || s.location === "scalar")
                  continue;
                let l = (_b2 = s.namespace) != null ? _b2 : "model";
                s.location === "inputObjectTypes" && (s.type = this.inputTypeMap[l][a]), s.location === "enumTypes" && (s.type = this.enumMap[l][a]);
              }
      }
      getOutputTypes() {
        return { model: this.schema.outputObjectTypes.model.map(this.outputTypeToMergedOutputType), prisma: this.schema.outputObjectTypes.prisma.map(this.outputTypeToMergedOutputType) };
      }
      getEnumMap() {
        return { prisma: Z(this.schema.enumTypes.prisma, "name"), model: this.schema.enumTypes.model ? Z(this.schema.enumTypes.model, "name") : {} };
      }
      hasEnumInNamespace(t, r) {
        var _a4;
        return ((_a4 = this.schema.enumTypes[r]) == null ? void 0 : _a4.find((n) => n.name === t)) !== void 0;
      }
      getMergedOutputTypeMap() {
        return { model: Z(this.outputTypes.model, "name"), prisma: Z(this.outputTypes.prisma, "name") };
      }
      getInputTypeMap() {
        return { prisma: Z(this.schema.inputObjectTypes.prisma, "name"), model: this.schema.inputObjectTypes.model ? Z(this.schema.inputObjectTypes.model, "name") : {} };
      }
      getRootFieldMap() {
        return __spreadValues(__spreadValues({}, Z(this.queryType.fields, "name")), Z(this.mutationType.fields, "name"));
      }
    };
    var bt = class {
      constructor(t) {
        return Object.assign(this, new Wt(t), new Ht(t), new zt(t));
      }
    };
    bi(bt, [Wt, Ht, zt]);
    var ue;
    ((t) => {
      let e;
      ((x) => (x.findUnique = "findUnique", x.findUniqueOrThrow = "findUniqueOrThrow", x.findFirst = "findFirst", x.findFirstOrThrow = "findFirstOrThrow", x.findMany = "findMany", x.create = "create", x.createMany = "createMany", x.update = "update", x.updateMany = "updateMany", x.upsert = "upsert", x.delete = "delete", x.deleteMany = "deleteMany", x.groupBy = "groupBy", x.count = "count", x.aggregate = "aggregate", x.findRaw = "findRaw", x.aggregateRaw = "aggregateRaw"))(e = t.ModelAction || (t.ModelAction = {}));
    })(ue || (ue = {}));
    var tr = A(Fi());
    var bl = 100;
    var wt = [];
    var _a2, _b;
    typeof process < "u" && typeof ((_a2 = process.stderr) == null ? void 0 : _a2.write) != "function" && (tr.default.log = (_b = console.debug) != null ? _b : console.log);
    function wl(e) {
      let t = (0, tr.default)(e), r = Object.assign((...n) => (t.log = r.log, n.length !== 0 && wt.push([e, ...n]), wt.length > bl && wt.shift(), t("", ...n)), t);
      return r;
    }
    var an = Object.assign(wl, tr.default);
    function Oi(e = 7500) {
      let t = wt.map((r) => r.map((n) => typeof n == "string" ? n : JSON.stringify(n)).join(" ")).join(`
`);
      return t.length < e ? t : t.slice(-e);
    }
    function ki() {
      wt.length = 0;
    }
    var N = an;
    var ln;
    var Di;
    var _i;
    var Ii;
    var Ni = true;
    typeof process < "u" && ({ FORCE_COLOR: ln, NODE_DISABLE_COLORS: Di, NO_COLOR: _i, TERM: Ii } = process.env || {}, Ni = process.stdout && process.stdout.isTTY);
    var Pl = { enabled: !Di && _i == null && Ii !== "dumb" && (ln != null && ln !== "0" || Ni) };
    function O(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !Pl.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    var hd = O(0, 0);
    var ne = O(1, 22);
    var Oe = O(2, 22);
    var xd = O(3, 23);
    var X = O(4, 24);
    var bd = O(7, 27);
    var wd = O(8, 28);
    var Pd = O(9, 29);
    var Ed = O(30, 39);
    var pe = O(31, 39);
    var Ue = O(32, 39);
    var ye = O(33, 39);
    var Xe = O(34, 39);
    var Td = O(35, 39);
    var ke = O(36, 39);
    var vd = O(37, 39);
    var rr = O(90, 39);
    var Cd = O(90, 39);
    var Md = O(40, 49);
    var Ad = O(41, 49);
    var Sd = O(42, 49);
    var Rd = O(43, 49);
    var Fd = O(44, 49);
    var Od = O(45, 49);
    var kd = O(46, 49);
    var Dd = O(47, 49);
    var Li = A(require("fs"));
    function un() {
      let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
      if (!(e && Li.default.existsSync(e)) && process.arch === "ia32")
        throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
    }
    var nr = "libquery_engine";
    function cn(e, t) {
      let r = t === "url";
      return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${nr}.dylib.node` : `${nr}-${e}.dylib.node` : r ? `${nr}.so.node` : `${nr}-${e}.so.node`;
    }
    var zi = A(require("child_process"));
    var gn = A(require("fs/promises"));
    var ar = A(require("os"));
    var ir = Symbol("@ts-pattern/matcher");
    var $i = "@ts-pattern/anonymous-select-key";
    var qi = function(e) {
      return Boolean(e && typeof e == "object");
    };
    var pn = function(e) {
      return e && !!e[ir];
    };
    var El = function e(t, r, n) {
      if (qi(t)) {
        if (pn(t)) {
          var i = t[ir]().match(r), o = i.matched, s = i.selections;
          return o && s && Object.keys(s).forEach(function(l) {
            return n(l, s[l]);
          }), o;
        }
        if (!qi(r))
          return false;
        if (Array.isArray(t))
          return !!Array.isArray(r) && t.length === r.length && t.every(function(l, u) {
            return e(l, r[u], n);
          });
        if (t instanceof Map)
          return r instanceof Map && Array.from(t.keys()).every(function(l) {
            return e(t.get(l), r.get(l), n);
          });
        if (t instanceof Set) {
          if (!(r instanceof Set))
            return false;
          if (t.size === 0)
            return r.size === 0;
          if (t.size === 1) {
            var a = Array.from(t.values())[0];
            return pn(a) ? Array.from(r.values()).every(function(l) {
              return e(a, l, n);
            }) : r.has(a);
          }
          return Array.from(t.values()).every(function(l) {
            return r.has(l);
          });
        }
        return Object.keys(t).every(function(l) {
          var u, c = t[l];
          return (l in r || pn(u = c) && u[ir]().matcherType === "optional") && e(c, r[l], n);
        });
      }
      return Object.is(r, t);
    };
    function Qe(e) {
      var t;
      return (t = {})[ir] = function() {
        return { match: function(r) {
          return { matched: Boolean(e(r)) };
        } };
      }, t;
    }
    var qd = Qe(function(e) {
      return true;
    });
    var jd = Qe(function(e) {
      return typeof e == "string";
    });
    var Bd = Qe(function(e) {
      return typeof e == "number";
    });
    var Kd = Qe(function(e) {
      return typeof e == "boolean";
    });
    var Vd = Qe(function(e) {
      return typeof e == "bigint";
    });
    var Ud = Qe(function(e) {
      return typeof e == "symbol";
    });
    var Qd = Qe(function(e) {
      return e == null;
    });
    function et(e) {
      return new Tl(e, []);
    }
    var Tl = function() {
      function e(r, n) {
        this.value = void 0, this.cases = void 0, this.value = r, this.cases = n;
      }
      var t = e.prototype;
      return t.with = function() {
        var r = [].slice.call(arguments), n = r[r.length - 1], i = [r[0]], o = [];
        return r.length === 3 && typeof r[1] == "function" ? (i.push(r[0]), o.push(r[1])) : r.length > 2 && i.push.apply(i, r.slice(1, r.length - 1)), new e(this.value, this.cases.concat([{ match: function(s) {
          var a = {}, l = Boolean(i.some(function(u) {
            return El(u, s, function(c, p) {
              a[c] = p;
            });
          }) && o.every(function(u) {
            return u(s);
          }));
          return { matched: l, value: l && Object.keys(a).length ? $i in a ? a[$i] : a : s };
        }, handler: n }]));
      }, t.when = function(r, n) {
        return new e(this.value, this.cases.concat([{ match: function(i) {
          return { matched: Boolean(r(i)), value: i };
        }, handler: n }]));
      }, t.otherwise = function(r) {
        return new e(this.value, this.cases.concat([{ match: function(n) {
          return { matched: true, value: n };
        }, handler: r }])).run();
      }, t.exhaustive = function() {
        return this.run();
      }, t.run = function() {
        for (var r = this.value, n = void 0, i = 0; i < this.cases.length; i++) {
          var o = this.cases[i], s = o.match(this.value);
          if (s.matched) {
            r = s.value, n = o.handler;
            break;
          }
        }
        if (!n) {
          var a;
          try {
            a = JSON.stringify(this.value);
          } catch (e2) {
            a = this.value;
          }
          throw new Error("Pattern matching error: no pattern matches value " + a);
        }
        return n(r, this.value);
      }, e;
    }();
    var Yi = require("util");
    var Gi = A(Ji());
    function Tt(e) {
      return (0, Gi.default)(e, e, { fallback: X });
    }
    var Ml = { warn: ye("prisma:warn") };
    var Al = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function vt(e, ...t) {
      Al.warn() && console.warn(`${Ml.warn} ${e}`, ...t);
    }
    var Sl = (0, Yi.promisify)(zi.default.exec);
    var ie = N("prisma:get-platform");
    var Rl = ["1.0.x", "1.1.x", "3.0.x"];
    function Zi() {
      return __async(this, null, function* () {
        let e = ar.default.platform(), t = process.arch;
        if (e === "freebsd") {
          let s = yield lr("freebsd-version");
          if (s && s.trim().length > 0) {
            let l = /^(\d+)\.?/.exec(s);
            if (l)
              return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
          }
        }
        if (e !== "linux")
          return { platform: e, arch: t };
        let r = yield Ol(), n = yield ql(), i = Dl({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = yield _l(i);
        return __spreadValues({ platform: "linux", libssl: o, arch: t, archFromUname: n }, r);
      });
    }
    function Fl(e) {
      let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = et({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
      return ie(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
    }
    function Ol() {
      return __async(this, null, function* () {
        let e = "/etc/os-release";
        try {
          let t = yield gn.default.readFile(e, { encoding: "utf-8" });
          return Fl(t);
        } catch (e2) {
          return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
        }
      });
    }
    function kl(e) {
      let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
      if (t) {
        let r = `${t[1]}.x`;
        return Xi(r);
      }
    }
    function Wi(e) {
      var _a4;
      let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
      if (t) {
        let r = `${t[1]}${(_a4 = t[2]) != null ? _a4 : ".0"}.x`;
        return Xi(r);
      }
    }
    function Xi(e) {
      let t = (() => {
        if (to(e))
          return e;
        let r = e.split(".");
        return r[1] = "0", r.join(".");
      })();
      if (Rl.includes(t))
        return t;
    }
    function Dl(e) {
      return et(e).with({ familyDistro: "musl" }, () => (ie('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (ie('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (ie('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (ie(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []));
    }
    function _l(e) {
      return __async(this, null, function* () {
        let t = 'grep -v "libssl.so.0"', r = yield Hi(e);
        if (r) {
          ie(`Found libssl.so file using platform-specific paths: ${r}`);
          let o = Wi(r);
          if (ie(`The parsed libssl version is: ${o}`), o)
            return { libssl: o, strategy: "libssl-specific-path" };
        }
        ie('Falling back to "ldconfig" and other generic paths');
        let n = yield lr(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
        if (n || (n = yield Hi(["/lib64", "/usr/lib64", "/lib"])), n) {
          ie(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
          let o = Wi(n);
          if (ie(`The parsed libssl version is: ${o}`), o)
            return { libssl: o, strategy: "ldconfig" };
        }
        let i = yield lr("openssl version -v");
        if (i) {
          ie(`Found openssl binary with version: ${i}`);
          let o = kl(i);
          if (ie(`The parsed openssl version is: ${o}`), o)
            return { libssl: o, strategy: "openssl-binary" };
        }
        return ie("Couldn't find any version of libssl or OpenSSL in the system"), {};
      });
    }
    function Hi(e) {
      return __async(this, null, function* () {
        for (let t of e) {
          let r = yield Il(t);
          if (r)
            return r;
        }
      });
    }
    function Il(e) {
      return __async(this, null, function* () {
        try {
          return (yield gn.default.readdir(e)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
        } catch (t) {
          if (t.code === "ENOENT")
            return;
          throw t;
        }
      });
    }
    function nt() {
      return __async(this, null, function* () {
        let { binaryTarget: e } = yield eo();
        return e;
      });
    }
    function Nl(e) {
      return e.binaryTarget !== void 0;
    }
    function yn() {
      return __async(this, null, function* () {
        let _a4 = yield eo(), { memoized: e } = _a4, t = __objRest(_a4, ["memoized"]);
        return t;
      });
    }
    var sr = {};
    function eo() {
      return __async(this, null, function* () {
        if (Nl(sr))
          return Promise.resolve(__spreadProps(__spreadValues({}, sr), { memoized: true }));
        let e = yield Zi(), t = Ll(e);
        return sr = __spreadProps(__spreadValues({}, e), { binaryTarget: t }), __spreadProps(__spreadValues({}, sr), { memoized: false });
      });
    }
    function Ll(e) {
      let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
      t === "linux" && !["x64", "arm64"].includes(r) && vt(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
      let l = "1.1.x";
      if (t === "linux" && i === void 0) {
        let c = et({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        vt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
      }
      let u = "debian";
      if (t === "linux" && o === void 0 && vt(`Prisma doesn't know which engines to download for the Linux distro "${a}". Falling back to Prisma engines built "${u}".
Please report your experience by creating an issue at ${Tt("https://github.com/prisma/prisma/issues")} so we can add your distro to the list of known supported distros.`), t === "darwin" && r === "arm64")
        return "darwin-arm64";
      if (t === "darwin")
        return "darwin";
      if (t === "win32")
        return "windows";
      if (t === "freebsd")
        return o;
      if (t === "openbsd")
        return "openbsd";
      if (t === "netbsd")
        return "netbsd";
      if (t === "linux" && o === "nixos")
        return "linux-nixos";
      if (t === "linux" && r === "arm64")
        return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
      if (t === "linux" && r === "arm")
        return `linux-arm-openssl-${i || l}`;
      if (t === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || to(i) ? c : `${c}-openssl-${i}`;
      }
      return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && vt(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
    }
    function $l(e) {
      return __async(this, null, function* () {
        try {
          return yield e();
        } catch (e2) {
          return;
        }
      });
    }
    function lr(e) {
      return $l(() => __async(this, null, function* () {
        let t = yield Sl(e);
        return ie(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
      }));
    }
    function ql() {
      return __async(this, null, function* () {
        var _a4;
        return typeof ar.default.machine == "function" ? ar.default.machine() : (_a4 = yield lr("uname -m")) == null ? void 0 : _a4.trim();
      });
    }
    function to(e) {
      return e.startsWith("1.");
    }
    var hn = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "openbsd", "netbsd", "arm"];
    var wn = A(io());
    var pr = A(require("fs"));
    var it = A(require("path"));
    function oo(e) {
      let t = e.ignoreProcessEnv ? {} : process.env, r = (n) => {
        var _a4, _b2;
        return (_b2 = (_a4 = n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)) == null ? void 0 : _a4.reduce(function(o, s) {
          let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
          if (!a)
            return o;
          let l = a[1], u, c;
          if (l === "\\")
            c = a[0], u = c.replace("\\$", "$");
          else {
            let p = a[2];
            c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || "", u = r(u);
          }
          return o.replace(c, u);
        }, n)) != null ? _b2 : n;
      };
      for (let n in e.parsed) {
        let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
        e.parsed[n] = r(i);
      }
      for (let n in e.parsed)
        t[n] = e.parsed[n];
      return e;
    }
    var bn = N("prisma:tryLoadEnv");
    function Ct({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
      var _a4, _b2;
      let n = so(e);
      r.conflictCheck !== "none" && Hl(n, t, r.conflictCheck);
      let i = null;
      return ao(n == null ? void 0 : n.path, t) || (i = so(t)), !n && !i && bn("No Environment variables loaded"), (i == null ? void 0 : i.dotenvResult.error) ? console.error(pe(ne("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n == null ? void 0 : n.message, i == null ? void 0 : i.message].filter(Boolean).join(`
`), parsed: __spreadValues(__spreadValues({}, (_a4 = n == null ? void 0 : n.dotenvResult) == null ? void 0 : _a4.parsed), (_b2 = i == null ? void 0 : i.dotenvResult) == null ? void 0 : _b2.parsed) };
    }
    function Hl(e, t, r) {
      let n = e == null ? void 0 : e.dotenvResult.parsed, i = !ao(e == null ? void 0 : e.path, t);
      if (n && t && i && pr.default.existsSync(t)) {
        let o = wn.default.parse(pr.default.readFileSync(t)), s = [];
        for (let a in o)
          n[a] === o[a] && s.push(a);
        if (s.length > 0) {
          let a = it.default.relative(process.cwd(), e.path), l = it.default.relative(process.cwd(), t);
          if (r === "error") {
            let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${X(a)} and ${X(l)}
Conflicting env vars:
${s.map((c) => `  ${ne(c)}`).join(`
`)}

We suggest to move the contents of ${X(l)} to ${X(a)} to consolidate your env vars.
`;
            throw new Error(u);
          } else if (r === "warn") {
            let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => ne(c)).join(", ")} in ${X(a)} and ${X(l)}
Env vars from ${X(l)} overwrite the ones from ${X(a)}
      `;
            console.warn(`${ye("warn(prisma)")} ${u}`);
          }
        }
      }
    }
    function so(e) {
      return zl(e) ? (bn(`Environment variables loaded from ${e}`), { dotenvResult: oo(wn.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 })), message: Oe(`Environment variables loaded from ${it.default.relative(process.cwd(), e)}`), path: e }) : (bn(`Environment variables not found at ${e}`), null);
    }
    function ao(e, t) {
      return e && t && it.default.resolve(e) === it.default.resolve(t);
    }
    function zl(e) {
      return Boolean(e && pr.default.existsSync(e));
    }
    var lo = "library";
    function Pn(e) {
      let t = Yl();
      return t || ((e == null ? void 0 : e.config.engineType) === "library" ? "library" : (e == null ? void 0 : e.config.engineType) === "binary" ? "binary" : lo);
    }
    function Yl() {
      let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
    }
    var eu = A(En());
    var k = A(require("path"));
    var tu = A(En());
    var Mm = N("prisma:engines");
    function go() {
      return k.default.join(__dirname, "../");
    }
    var Am = "libquery-engine";
    k.default.join(__dirname, "../query-engine-darwin");
    k.default.join(__dirname, "../query-engine-darwin-arm64");
    k.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
    k.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
    k.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
    k.default.join(__dirname, "../query-engine-linux-static-x64");
    k.default.join(__dirname, "../query-engine-linux-static-arm64");
    k.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
    k.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
    k.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
    k.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
    k.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
    k.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
    k.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
    k.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
    k.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
    k.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
    k.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
    k.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
    k.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
    k.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
    k.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
    k.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
    k.default.join(__dirname, "../query_engine-windows.dll.node");
    var Tn = A(require("fs"));
    var yo = N("chmodPlusX");
    function vn(e) {
      if (process.platform === "win32")
        return;
      let t = Tn.default.statSync(e), r = t.mode | 64 | 8 | 1;
      if (t.mode === r) {
        yo(`Execution permissions of ${e} are fine`);
        return;
      }
      let n = r.toString(8).slice(-3);
      yo(`Have to call chmodPlusX on ${e}`), Tn.default.chmodSync(e, n);
    }
    function Cn(e) {
      let t = e.e, r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${Tt("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Oe(e.id)}\`).`, s = et({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${r("libssl")}. Please install ${a} and try again.`;
      }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
      return `${o}
${s}

Details: ${t.message}`;
    }
    var Mt = A(require("path"));
    function Mn(e) {
      return Mt.default.sep === Mt.default.posix.sep ? e : e.split(Mt.default.sep).join(Mt.default.posix.sep);
    }
    var xo = A(An());
    function Rn(e) {
      return String(new Sn(e));
    }
    var Sn = class {
      constructor(t) {
        this.config = t;
      }
      toString() {
        let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: ru(t.binaryTargets) }));
        return `generator ${t.name} {
${(0, xo.default)(nu(n), 2)}
}`;
      }
    };
    function ru(e) {
      let t;
      if (e.length > 0) {
        let r = e.find((n) => n.fromEnvVar !== null);
        r ? t = `env("${r.fromEnvVar}")` : t = e.map((n) => n.native ? "native" : n.value);
      } else
        t = void 0;
      return t;
    }
    function nu(e) {
      let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
      return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${iu(n)}`).join(`
`);
    }
    function iu(e) {
      return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
    }
    var St = {};
    xt(St, { error: () => au, info: () => su, log: () => ou, query: () => lu, should: () => bo, tags: () => At, warn: () => Fn });
    var At = { error: pe("prisma:error"), warn: ye("prisma:warn"), info: ke("prisma:info"), query: Xe("prisma:query") };
    var bo = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function ou(...e) {
      console.log(...e);
    }
    function Fn(e, ...t) {
      bo.warn() && console.warn(`${At.warn} ${e}`, ...t);
    }
    function su(e, ...t) {
      console.info(`${At.info} ${e}`, ...t);
    }
    function au(e, ...t) {
      console.error(`${At.error} ${e}`, ...t);
    }
    function lu(e, ...t) {
      console.log(`${At.query} ${e}`, ...t);
    }
    function Je(e, t) {
      throw new Error(t);
    }
    function kn(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    var Dn = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
    function ot(e, t) {
      let r = {};
      for (let n of Object.keys(e))
        r[n] = t(e[n], n);
      return r;
    }
    function _n(e, t) {
      if (e.length === 0)
        return;
      let r = e[0];
      for (let n = 1; n < e.length; n++)
        t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    function ee(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    var vo = /* @__PURE__ */ new Set();
    var In = (e, t, ...r) => {
      vo.has(e) || (vo.add(e), Fn(t, ...r));
    };
    var H = class extends Error {
      constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) {
        super(r);
        this.name = "PrismaClientKnownRequestError", this.code = n, this.clientVersion = i, this.meta = o, Object.defineProperty(this, "batchRequestIdx", { value: s, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    ee(H, "PrismaClientKnownRequestError");
    var Ce = class extends H {
      constructor(t, r) {
        super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    };
    ee(Ce, "NotFoundError");
    var _ = class extends Error {
      constructor(r, n, i) {
        super(r);
        this.name = "PrismaClientInitializationError", this.clientVersion = n, this.errorCode = i, Error.captureStackTrace(_);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    ee(_, "PrismaClientInitializationError");
    var ae = class extends Error {
      constructor(r, n) {
        super(r);
        this.name = "PrismaClientRustPanicError", this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    ee(ae, "PrismaClientRustPanicError");
    var z = class extends Error {
      constructor(r, { clientVersion: n, batchRequestIdx: i }) {
        super(r);
        this.name = "PrismaClientUnknownRequestError", this.clientVersion = n, Object.defineProperty(this, "batchRequestIdx", { value: i, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    ee(z, "PrismaClientUnknownRequestError");
    var te = class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    ee(te, "PrismaClientValidationError");
    var st = class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics(__spreadValues({ format: "prometheus" }, t));
      }
      json(t) {
        return this._engine.metrics(__spreadValues({ format: "json" }, t));
      }
    };
    function Rt(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    function Co(e, t) {
      let r = Rt(() => pu(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    function pu(e) {
      return { datamodel: { models: Nn(e.models), enums: Nn(e.enums), types: Nn(e.types) } };
    }
    function Nn(e) {
      return Object.entries(e).map(([t, r]) => __spreadValues({ name: t }, r));
    }
    var qa = require("async_hooks");
    var ja = require("events");
    var Ba = A(require("fs"));
    var Qt = A(require("path"));
    var U = class {
      constructor(t, r) {
        if (t.length - 1 !== r.length)
          throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof U ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof U) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; )
              this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else
            this.values[o++] = s, this.strings[o] = a;
        }
      }
      get text() {
        let t = 1, r = this.strings[0];
        for (; t < this.strings.length; )
          r += `$${t}${this.strings[t++]}`;
        return r;
      }
      get sql() {
        let t = 1, r = this.strings[0];
        for (; t < this.strings.length; )
          r += `?${this.strings[t++]}`;
        return r;
      }
      inspect() {
        return { text: this.text, sql: this.sql, values: this.values };
      }
    };
    function Mo(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new U([r, ...Array(e.length - 1).fill(t), n], e);
    }
    function Ln(e) {
      return new U([e], []);
    }
    var Ao = Ln("");
    function $n(e, ...t) {
      return new U(e, t);
    }
    function Ft(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    function re(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    var he = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        var _a4;
        return (_a4 = this._map.get(t)) == null ? void 0 : _a4.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n)
          return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    function Ge(e) {
      let t = new he();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        var _a4;
        return (_a4 = e.getPropertyDescriptor) == null ? void 0 : _a4.call(e, r);
      } };
    }
    var Fo = require("util");
    var fr = { enumerable: true, configurable: true, writable: true };
    function gr(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => fr, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    var So = Symbol.for("nodejs.util.inspect.custom");
    function xe(e, t) {
      let r = du(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s))
          return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        var _a4, _b2;
        if (n.has(s))
          return true;
        let a = r.get(s);
        return a ? (_b2 = (_a4 = a.has) == null ? void 0 : _a4.call(a, s)) != null ? _b2 : true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = Ro(Reflect.ownKeys(o), r), a = Ro(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        var _a4, _b2, _c2;
        return ((_c2 = (_b2 = (_a4 = r.get(s)) == null ? void 0 : _a4.getPropertyDescriptor) == null ? void 0 : _b2.call(_a4, s)) == null ? void 0 : _c2.writable) === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable)
          return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? __spreadValues(__spreadValues({}, fr), l == null ? void 0 : l.getPropertyDescriptor(s)) : fr : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[So] = function(o, s, a = Fo.inspect) {
        let l = __spreadValues({}, this);
        return delete l[So], a(l, s);
      }, i;
    }
    function du(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n)
          t.set(i, r);
      }
      return t;
    }
    function Ro(e, t) {
      return e.filter((r) => {
        var _a4, _b2, _c2;
        return (_c2 = (_b2 = (_a4 = t.get(r)) == null ? void 0 : _a4.has) == null ? void 0 : _b2.call(_a4, r)) != null ? _c2 : true;
      });
    }
    function Ot(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    function Oo({ error: e, user_facing_error: t }, r) {
      return t.error_code ? new H(t.message, { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new z(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    var yr = class {
    };
    var No = A(require("fs"));
    var kt = A(require("path"));
    function hr(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${mu(e)}`;
    }
    function mu(e) {
      let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...r, i];
      return Rn(__spreadProps(__spreadValues({}, t), { binaryTargets: o }));
    }
    function De(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
    }
    function _e(e) {
      let { searchedLocations: t } = e;
      return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
    }
    function ko(e) {
      let { runtimeBinaryTarget: t } = e;
      return `${De(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${hr(e)}

${_e(e)}`;
    }
    function xr(e) {
      return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
    }
    function Do(e) {
      let { queryEngineName: t } = e;
      return `${De(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${xr("engine-not-found-bundler-investigation")}

${_e(e)}`;
    }
    function _o(e) {
      var _a4;
      let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e, n = r.find((i) => i.native);
      return `${De(e)}

This happened because Prisma Client was generated for "${(_a4 = n == null ? void 0 : n.value) != null ? _a4 : "unknown"}", but the actual deployment required "${t}".
${hr(e)}

${_e(e)}`;
    }
    function Io(e) {
      let { queryEngineName: t } = e;
      return `${De(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${xr("engine-not-found-tooling-investigation")}

${_e(e)}`;
    }
    var fu = N("prisma:client:engines:resolveEnginePath");
    var gu = () => new RegExp("runtime[\\\\/]library\\.m?js$");
    function Lo(e, t) {
      return __async(this, null, function* () {
        var _a4, _b2, _c2;
        let r = (_a4 = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e]) != null ? _a4 : t.prismaPath;
        if (r !== void 0)
          return r;
        let { enginePath: n, searchedLocations: i } = yield yu(e, t);
        if (fu("enginePath", n), n !== void 0 && e === "binary" && vn(n), n !== void 0)
          return t.prismaPath = n;
        let o = yield nt(), s = (_c2 = (_b2 = t.generator) == null ? void 0 : _b2.binaryTargets) != null ? _c2 : [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(gu()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: $o(e, o), expectedLocation: kt.default.relative(process.cwd(), t.dirname) }, p;
        throw a && l ? p = _o(c) : l ? p = ko(c) : u ? p = Do(c) : p = Io(c), new _(p, t.clientVersion);
      });
    }
    function yu(engineType, config) {
      return __async(this, null, function* () {
        var _a4, _b2, _c2;
        let binaryTarget = yield nt(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, kt.default.resolve(dirname, ".."), (_c2 = (_b2 = (_a4 = config.generator) == null ? void 0 : _a4.output) == null ? void 0 : _b2.value) != null ? _c2 : dirname, kt.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
        __filename.includes("resolveEnginePath") && searchLocations.push(go());
        for (let e of searchLocations) {
          let t = $o(engineType, binaryTarget), r = kt.default.join(e, t);
          if (searchedLocations.push(e), No.default.existsSync(r))
            return { enginePath: r, searchedLocations };
        }
        return { enginePath: void 0, searchedLocations };
      });
    }
    function $o(e, t) {
      return e === "library" ? cn(t, "fs") : `query-engine-${t}${t === "windows" ? ".exe" : ""}`;
    }
    function qo(e, t) {
      return { batch: e, transaction: (t == null ? void 0 : t.kind) === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    var qn = A(On());
    function jo(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
    }
    function Bo(e) {
      return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    var Ko = A(To());
    function Vo({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.md", body: i }) {
      return (0, Ko.default)({ user: t, repo: r, template: n, title: e, body: i });
    }
    function Uo({ version: e, platform: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
      var _a4, _b2;
      let a = Oi(6e3 - ((_a4 = s == null ? void 0 : s.length) != null ? _a4 : 0)), l = Bo((0, qn.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, qn.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(_b2 = process.version) == null ? void 0 : _b2.padEnd(19)}| 
| OS              | ${t == null ? void 0 : t.padEnd(19)}|
| Prisma Client   | ${e == null ? void 0 : e.padEnd(19)}|
| Query Engine    | ${i == null ? void 0 : i.padEnd(19)}|
| Database        | ${o == null ? void 0 : o.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? jo(s) : ""}
\`\`\`
`), p = Vo({ title: r, body: c });
      return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${X(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    var Ho = A(require("fs"));
    function Qo(e) {
      if ((e == null ? void 0 : e.kind) === "itx")
        return e.options.id;
    }
    var Bn = A(require("os"));
    var Jo = A(require("path"));
    var jn = Symbol("PrismaLibraryEngineCache");
    function hu() {
      let e = globalThis;
      return e[jn] === void 0 && (e[jn] = {}), e[jn];
    }
    function xu(e) {
      let t = hu();
      if (t[e] !== void 0)
        return t[e];
      let r = Jo.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
      return process.platform !== "win32" && (i = Bn.default.constants.dlopen.RTLD_LAZY | Bn.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports;
    }
    var br = class {
      constructor(t) {
        this.config = t;
      }
      loadLibrary() {
        return __async(this, null, function* () {
          let t = yield yn(), r = yield Lo("library", this.config);
          try {
            return this.config.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => xu(r));
          } catch (n) {
            let i = Cn({ e: n, platformInfo: t, id: r });
            throw new _(i, this.config.clientVersion);
          }
        });
      }
    };
    var Me = N("prisma:client:libraryEngine");
    function bu(e) {
      return e.item_type === "query" && "query" in e;
    }
    function wu(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    var Go = [...hn, "native"];
    var Wo = 0;
    var Dt = class extends yr {
      constructor(r, n = new br(r)) {
        var _a4, _b2;
        super();
        try {
          this.datamodel = Ho.default.readFileSync(r.datamodelPath, "utf-8");
        } catch (i) {
          throw i.stack.match(/\/\.next|\/next@|\/next\//) ? new _(`Your schema.prisma could not be found, and we detected that you are using Next.js.
Find out why and learn how to fix this: https://pris.ly/d/schema-not-found-nextjs`, r.clientVersion) : r.isBundled === true ? new _("Prisma Client could not find its `schema.prisma`. This is likely caused by a bundling step, which leads to `schema.prisma` not being copied near the resulting bundle. We would appreciate if you could take the time to share some information with us.\nPlease help us by answering a few questions: https://pris.ly/bundler-investigation-error", r.clientVersion) : i;
        }
        this.config = r, this.libraryStarted = false, this.logQueries = (_a4 = r.logQueries) != null ? _a4 : false, this.logLevel = (_b2 = r.logLevel) != null ? _b2 : "error", this.libraryLoader = n, this.logEmitter = r.logEmitter, this.datasourceOverrides = r.datasources ? this.convertDatasources(r.datasources) : {}, r.enableDebugLogs && (this.logLevel = "debug"), this.libraryInstantiationPromise = this.instantiateLibrary(), this.checkForTooManyEngines();
      }
      checkForTooManyEngines() {
        Wo === 10 && console.warn(`${ye("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`);
      }
      transaction(r, n, i) {
        return __async(this, null, function* () {
          var _a4, _b2, _c2, _d, _e2;
          yield this.start();
          let o = JSON.stringify(n), s;
          if (r === "start") {
            let l = JSON.stringify({ max_wait: (_a4 = i == null ? void 0 : i.maxWait) != null ? _a4 : 2e3, timeout: (_b2 = i == null ? void 0 : i.timeout) != null ? _b2 : 5e3, isolation_level: i == null ? void 0 : i.isolationLevel });
            s = yield (_c2 = this.engine) == null ? void 0 : _c2.startTransaction(l, o);
          } else
            r === "commit" ? s = yield (_d = this.engine) == null ? void 0 : _d.commitTransaction(i.id, o) : r === "rollback" && (s = yield (_e2 = this.engine) == null ? void 0 : _e2.rollbackTransaction(i.id, o));
          let a = this.parseEngineResponse(s);
          if (a.error_code)
            throw new H(a.message, { code: a.error_code, clientVersion: this.config.clientVersion, meta: a.meta });
          return a;
        });
      }
      instantiateLibrary() {
        return __async(this, null, function* () {
          if (Me("internalSetup"), this.libraryInstantiationPromise)
            return this.libraryInstantiationPromise;
          un(), this.platform = yield this.getPlatform(), yield this.loadEngine(), this.version();
        });
      }
      getPlatform() {
        return __async(this, null, function* () {
          if (this.platform)
            return this.platform;
          let r = yield nt();
          if (!Go.includes(r))
            throw new _(`Unknown ${pe("PRISMA_QUERY_ENGINE_LIBRARY")} ${pe(ne(r))}. Possible binaryTargets: ${Ue(Go.join(", "))} or a path to the query engine library.
You may have to run ${Ue("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
          return r;
        });
      }
      parseEngineResponse(r) {
        if (!r)
          throw new z("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(r);
        } catch (e) {
          throw new z("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      convertDatasources(r) {
        let n = /* @__PURE__ */ Object.create(null);
        for (let { name: i, url: o } of r)
          n[i] = o;
        return n;
      }
      loadEngine() {
        return __async(this, null, function* () {
          var _a4;
          if (!this.engine) {
            this.QueryEngineConstructor || (this.library = yield this.libraryLoader.loadLibrary(), this.QueryEngineConstructor = this.library.QueryEngine);
            try {
              let r = new WeakRef(this);
              this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: (_a4 = this.config.logQueries) != null ? _a4 : false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (n) => {
                var _a5;
                (_a5 = r.deref()) == null ? void 0 : _a5.logger(n);
              }), Wo++;
            } catch (r) {
              let n = r, i = this.parseInitError(n.message);
              throw typeof i == "string" ? n : new _(i.message, this.config.clientVersion, i.error_code);
            }
          }
        });
      }
      logger(r) {
        var _a4;
        let n = this.parseEngineResponse(r);
        if (!!n) {
          if ("span" in n) {
            this.config.tracingHelper.createEngineSpan(n);
            return;
          }
          n.level = (_a4 = n == null ? void 0 : n.level.toLowerCase()) != null ? _a4 : "unknown", bu(n) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: n.query, params: n.params, duration: Number(n.duration_ms), target: n.module_path }) : wu(n) ? this.loggerRustPanic = new ae(this.getErrorMessageWithLink(`${n.message}: ${n.reason} in ${n.file}:${n.line}:${n.column}`), this.config.clientVersion) : this.logEmitter.emit(n.level, { timestamp: /* @__PURE__ */ new Date(), message: n.message, target: n.module_path });
        }
      }
      getErrorMessageWithLink(r) {
        var _a4;
        return Uo({ platform: this.platform, title: r, version: this.config.clientVersion, engineVersion: (_a4 = this.versionInfo) == null ? void 0 : _a4.commit, database: this.config.activeProvider, query: this.lastQuery });
      }
      parseInitError(r) {
        try {
          return JSON.parse(r);
        } catch (e) {
        }
        return r;
      }
      parseRequestError(r) {
        try {
          return JSON.parse(r);
        } catch (e) {
        }
        return r;
      }
      on(r, n) {
        if (r === "beforeExit")
          throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
        this.logEmitter.on(r, n);
      }
      start() {
        return __async(this, null, function* () {
          if (yield this.libraryInstantiationPromise, yield this.libraryStoppingPromise, this.libraryStartingPromise)
            return Me(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
          if (this.libraryStarted)
            return;
          let r = () => __async(this, null, function* () {
            var _a4;
            Me("library starting");
            try {
              let n = { traceparent: this.config.tracingHelper.getTraceParent() };
              yield (_a4 = this.engine) == null ? void 0 : _a4.connect(JSON.stringify(n)), this.libraryStarted = true, Me("library started");
            } catch (n) {
              let i = this.parseInitError(n.message);
              throw typeof i == "string" ? n : new _(i.message, this.config.clientVersion, i.error_code);
            } finally {
              this.libraryStartingPromise = void 0;
            }
          });
          return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", r), this.libraryStartingPromise;
        });
      }
      stop() {
        return __async(this, null, function* () {
          if (yield this.libraryStartingPromise, yield this.executingQueryPromise, this.libraryStoppingPromise)
            return Me("library is already stopping"), this.libraryStoppingPromise;
          if (!this.libraryStarted)
            return;
          let r = () => __async(this, null, function* () {
            var _a4;
            yield new Promise((i) => setTimeout(i, 5)), Me("library stopping");
            let n = { traceparent: this.config.tracingHelper.getTraceParent() };
            yield (_a4 = this.engine) == null ? void 0 : _a4.disconnect(JSON.stringify(n)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, Me("library stopped");
          });
          return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", r), this.libraryStoppingPromise;
        });
      }
      version() {
        var _a4, _b2, _c2;
        return this.versionInfo = (_a4 = this.library) == null ? void 0 : _a4.version(), (_c2 = (_b2 = this.versionInfo) == null ? void 0 : _b2.version) != null ? _c2 : "unknown";
      }
      debugPanic(r) {
        var _a4;
        return (_a4 = this.library) == null ? void 0 : _a4.debugPanic(r);
      }
      request(_0, _1) {
        return __async(this, arguments, function* (r, { traceparent: n, interactiveTransaction: i }) {
          var _a4, _b2;
          Me(`sending request, this.libraryStarted: ${this.libraryStarted}`);
          let o = JSON.stringify({ traceparent: n }), s = JSON.stringify(r);
          try {
            yield this.start(), this.executingQueryPromise = (_a4 = this.engine) == null ? void 0 : _a4.query(s, o, i == null ? void 0 : i.id), this.lastQuery = s;
            let a = this.parseEngineResponse(yield this.executingQueryPromise);
            if (a.errors)
              throw a.errors.length === 1 ? this.buildQueryError(a.errors[0]) : new z(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
            if (this.loggerRustPanic)
              throw this.loggerRustPanic;
            return { data: a, elapsed: 0 };
          } catch (a) {
            if (a instanceof _)
              throw a;
            if (a.code === "GenericFailure" && ((_b2 = a.message) == null ? void 0 : _b2.startsWith("PANIC:")))
              throw new ae(this.getErrorMessageWithLink(a.message), this.config.clientVersion);
            let l = this.parseRequestError(a.message);
            throw typeof l == "string" ? a : new z(`${l.message}
${l.backtrace}`, { clientVersion: this.config.clientVersion });
          }
        });
      }
      requestBatch(_0, _1) {
        return __async(this, arguments, function* (r, { transaction: n, traceparent: i }) {
          Me("requestBatch");
          let o = qo(r, n);
          yield this.start(), this.lastQuery = JSON.stringify(o), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: i }), Qo(n));
          let s = yield this.executingQueryPromise, a = this.parseEngineResponse(s);
          if (a.errors)
            throw a.errors.length === 1 ? this.buildQueryError(a.errors[0]) : new z(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
          let { batchResult: l, errors: u } = a;
          if (Array.isArray(l))
            return l.map((c) => {
              var _a4;
              return c.errors && c.errors.length > 0 ? (_a4 = this.loggerRustPanic) != null ? _a4 : this.buildQueryError(c.errors[0]) : { data: c, elapsed: 0 };
            });
          throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(a));
        });
      }
      buildQueryError(r) {
        return r.user_facing_error.is_panic ? new ae(this.getErrorMessageWithLink(r.user_facing_error.message), this.config.clientVersion) : Oo(r, this.config.clientVersion);
      }
      metrics(r) {
        return __async(this, null, function* () {
          yield this.start();
          let n = yield this.engine.metrics(JSON.stringify(r));
          return r.format === "prometheus" ? n : this.parseEngineResponse(n);
        });
      }
    };
    var at = class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r) {
        let n = r.length - 1;
        for (let i = 0; i < r.length; i++)
          this.write(r[i]), i !== n && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t == null ? void 0 : t(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    var wr = Symbol();
    var Kn = /* @__PURE__ */ new WeakMap();
    var Ae = class {
      constructor(t) {
        t === wr ? Kn.set(this, `Prisma.${this._getName()}`) : Kn.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Kn.get(this);
      }
    };
    var _t = class extends Ae {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var It = class extends _t {
    };
    Vn(It, "DbNull");
    var Nt = class extends _t {
    };
    Vn(Nt, "JsonNull");
    var Lt = class extends _t {
    };
    Vn(Lt, "AnyNull");
    var Pr = { classes: { DbNull: It, JsonNull: Nt, AnyNull: Lt }, instances: { DbNull: new It(wr), JsonNull: new Nt(wr), AnyNull: new Lt(wr) } };
    function Vn(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    function lt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function Er(e) {
      return e.toString() !== "Invalid Date";
    }
    var ut = 9e15;
    var $e = 1e9;
    var Un = "0123456789abcdef";
    var vr = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var Cr = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var Qn = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -ut, maxE: ut, crypto: false };
    var Xo;
    var Se;
    var P = true;
    var Ar = "[DecimalError] ";
    var Le = Ar + "Invalid argument: ";
    var es = Ar + "Precision limit exceeded";
    var ts = Ar + "crypto unavailable";
    var rs = "[object Decimal]";
    var Y = Math.floor;
    var $ = Math.pow;
    var Pu = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var Eu = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var Tu = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var ns = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var me = 1e7;
    var w = 7;
    var vu = 9007199254740991;
    var Cu = vr.length - 1;
    var Jn = Cr.length - 1;
    var m = { toStringTag: rs };
    m.absoluteValue = m.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), h(e);
    };
    m.ceil = function() {
      return h(new this.constructor(this), this.e + 1, 2);
    };
    m.clampedTo = m.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s)
        return new i(NaN);
      if (e.gt(t))
        throw Error(Le + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    m.comparedTo = m.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a)
        return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0])
        return s[0] ? l : a[0] ? -u : 0;
      if (l !== u)
        return l;
      if (o.e !== e.e)
        return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (s[t] !== a[t])
          return s[t] > a[t] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    m.cosine = m.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + w, n.rounding = 1, r = Mu(n, ls(n, r)), n.precision = e, n.rounding = t, h(Se == 2 || Se == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    m.cubeRoot = m.cbrt = function() {
      var e, t, r, n, i, o, s, a, l, u, c = this, p = c.constructor;
      if (!c.isFinite() || c.isZero())
        return new p(c);
      for (P = false, o = c.s * $(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Q(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = $(r, 1 / 3), e = Y((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3; ; )
        if (a = n, l = a.times(a).times(a), u = l.plus(c), n = F(u.plus(c).times(a), u.plus(l), s + 2, 1), Q(a.d).slice(0, s) === (r = Q(n.d)).slice(0, s))
          if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
            if (!i && (h(a, e + 1, 0), a.times(a).times(a).eq(c))) {
              n = a;
              break;
            }
            s += 4, i = 1;
          } else {
            (!+r || !+r.slice(1) && r.charAt(0) == "5") && (h(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
            break;
          }
      return P = true, h(n, e, p.rounding, t);
    };
    m.decimalPlaces = m.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - Y(this.e / w)) * w, e = t[e], e)
          for (; e % 10 == 0; e /= 10)
            r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    m.dividedBy = m.div = function(e) {
      return F(this, new this.constructor(e));
    };
    m.dividedToIntegerBy = m.divToInt = function(e) {
      var t = this, r = t.constructor;
      return h(F(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    m.equals = m.eq = function(e) {
      return this.cmp(e) === 0;
    };
    m.floor = function() {
      return h(new this.constructor(this), this.e + 1, 3);
    };
    m.greaterThan = m.gt = function(e) {
      return this.cmp(e) > 0;
    };
    m.greaterThanOrEqualTo = m.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    m.hyperbolicCosine = m.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite())
        return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero())
        return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Rr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = ct(s, 1, o.times(t), new s(1), true);
      for (var l, u = e, c = new s(8); u--; )
        l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
      return h(o, s.precision = r, s.rounding = n, true);
    };
    m.hyperbolicSine = m.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero())
        return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
        i = ct(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Rr(5, e)), i = ct(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
          s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = t, o.rounding = r, h(i, t, r, true);
    };
    m.hyperbolicTangent = m.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, F(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    m.inverseCosine = m.acos = function() {
      var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
      return n !== -1 ? n === 0 ? t.isNeg() ? de(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? de(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = de(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
    };
    m.inverseHyperbolicCosine = m.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, P = false, r = r.times(r).minus(1).sqrt().plus(r), P = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    m.inverseHyperbolicSine = m.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, P = false, r = r.times(r).plus(1).sqrt().plus(r), P = true, n.precision = e, n.rounding = t, r.ln());
    };
    m.inverseHyperbolicTangent = m.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? h(new o(i), e, t, true) : (o.precision = r = n - i.e, i = F(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    m.inverseSine = m.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = de(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    m.inverseTangent = m.atan = function() {
      var e, t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
      if (u.isFinite()) {
        if (u.isZero())
          return new c(u);
        if (u.abs().eq(1) && p + 4 <= Jn)
          return s = de(c, p + 4, d).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s)
          return new c(NaN);
        if (p + 4 <= Jn)
          return s = de(c, p + 4, d).times(0.5), s.s = u.s, s;
      }
      for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / w + 2 | 0), e = r; e; --e)
        u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (P = false, t = Math.ceil(a / w), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1; )
        if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0)
          for (e = t; s.d[e] === o.d[e] && e--; )
            ;
      return r && (s = s.times(2 << r - 1)), P = true, h(s, c.precision = p, c.rounding = d, true);
    };
    m.isFinite = function() {
      return !!this.d;
    };
    m.isInteger = m.isInt = function() {
      return !!this.d && Y(this.e / w) > this.d.length - 2;
    };
    m.isNaN = function() {
      return !this.s;
    };
    m.isNegative = m.isNeg = function() {
      return this.s < 0;
    };
    m.isPositive = m.isPos = function() {
      return this.s > 0;
    };
    m.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    m.lessThan = m.lt = function(e) {
      return this.cmp(e) < 0;
    };
    m.lessThanOrEqualTo = m.lte = function(e) {
      return this.cmp(e) < 1;
    };
    m.logarithm = m.log = function(e) {
      var t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, g = 5;
      if (e == null)
        e = new c(10), t = true;
      else {
        if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
          return new c(NaN);
        t = e.eq(10);
      }
      if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
        return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t)
        if (r.length > 1)
          o = true;
        else {
          for (i = r[0]; i % 10 === 0; )
            i /= 10;
          o = i !== 1;
        }
      if (P = false, a = p + g, s = Ne(u, a), n = t ? Mr(c, a + 10) : Ne(e, a), l = F(s, n, a, 1), $t(l.d, i = p, d))
        do
          if (a += 10, s = Ne(u, a), n = t ? Mr(c, a + 10) : Ne(e, a), l = F(s, n, a, 1), !o) {
            +Q(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = h(l, p + 1, 0));
            break;
          }
        while ($t(l.d, i += 10, d));
      return P = true, h(l, p, d);
    };
    m.minus = m.sub = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, g = this, y = g.constructor;
      if (e = new y(e), !g.d || !e.d)
        return !g.s || !e.s ? e = new y(NaN) : g.d ? e.s = -e.s : e = new y(e.d || g.s !== e.s ? g : NaN), e;
      if (g.s != e.s)
        return e.s = -e.s, g.plus(e);
      if (u = g.d, d = e.d, a = y.precision, l = y.rounding, !u[0] || !d[0]) {
        if (d[0])
          e.s = -e.s;
        else if (u[0])
          e = new y(g);
        else
          return new y(l === 3 ? -0 : 0);
        return P ? h(e, a, l) : e;
      }
      if (r = Y(e.e / w), c = Y(g.e / w), u = u.slice(), o = c - r, o) {
        for (p = o < 0, p ? (t = u, o = -o, s = d.length) : (t = d, r = c, s = u.length), n = Math.max(Math.ceil(a / w), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
          t.push(0);
        t.reverse();
      } else {
        for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++)
          if (u[n] != d[n]) {
            p = u[n] < d[n];
            break;
          }
        o = 0;
      }
      for (p && (t = u, u = d, d = t, e.s = -e.s), s = u.length, n = d.length - s; n > 0; --n)
        u[s++] = 0;
      for (n = d.length; n > o; ) {
        if (u[--n] < d[n]) {
          for (i = n; i && u[--i] === 0; )
            u[i] = me - 1;
          --u[i], u[n] += me;
        }
        u[n] -= d[n];
      }
      for (; u[--s] === 0; )
        u.pop();
      for (; u[0] === 0; u.shift())
        --r;
      return u[0] ? (e.d = u, e.e = Sr(u, r), P ? h(e, a, l) : e) : new y(l === 3 ? -0 : 0);
    };
    m.modulo = m.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? h(new n(r), n.precision, n.rounding) : (P = false, n.modulo == 9 ? (t = F(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = F(r, e, 0, n.modulo, 1), t = t.times(e), P = true, r.minus(t));
    };
    m.naturalExponential = m.exp = function() {
      return Gn(this);
    };
    m.naturalLogarithm = m.ln = function() {
      return Ne(this);
    };
    m.negated = m.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, h(e);
    };
    m.plus = m.add = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
      if (e = new d(e), !p.d || !e.d)
        return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
      if (p.s != e.s)
        return e.s = -e.s, p.minus(e);
      if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0])
        return c[0] || (e = new d(p)), P ? h(e, a, l) : e;
      if (o = Y(p.e / w), n = Y(e.e / w), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / w), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; )
          r.push(0);
        r.reverse();
      }
      for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0; i; )
        t = (u[--i] = u[i] + c[i] + t) / me | 0, u[i] %= me;
      for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; )
        u.pop();
      return e.d = u, e.e = Sr(u, n), P ? h(e, a, l) : e;
    };
    m.precision = m.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(Le + e);
      return r.d ? (t = is(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    m.round = function() {
      var e = this, t = e.constructor;
      return h(new t(e), e.e + 1, t.rounding);
    };
    m.sine = m.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + w, n.rounding = 1, r = Su(n, ls(n, r)), n.precision = e, n.rounding = t, h(Se > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.squareRoot = m.sqrt = function() {
      var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
      if (u !== 1 || !a || !a[0])
        return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (P = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = Q(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = Y((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3; ; )
        if (o = n, n = o.plus(F(s, o, r + 2, 1)).times(0.5), Q(o.d).slice(0, r) === (t = Q(n.d)).slice(0, r))
          if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
            if (!i && (h(o, l + 1, 0), o.times(o).eq(s))) {
              n = o;
              break;
            }
            r += 4, i = 1;
          } else {
            (!+t || !+t.slice(1) && t.charAt(0) == "5") && (h(n, l + 1, 1), e = !n.times(n).eq(s));
            break;
          }
      return P = true, h(n, l, c.rounding, e);
    };
    m.tangent = m.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = F(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, h(Se == 2 || Se == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.times = m.mul = function(e) {
      var t, r, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, g = (e = new p(e)).d;
      if (e.s *= c.s, !d || !d[0] || !g || !g[0])
        return new p(!e.s || d && !d[0] && !g || g && !g[0] && !d ? NaN : !d || !g ? e.s / 0 : e.s * 0);
      for (r = Y(c.e / w) + Y(e.e / w), l = d.length, u = g.length, l < u && (o = d, d = g, g = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; )
        o.push(0);
      for (n = u; --n >= 0; ) {
        for (t = 0, i = l + n; i > n; )
          a = o[i] + g[n] * d[i - n - 1] + t, o[i--] = a % me | 0, t = a / me | 0;
        o[i] = (o[i] + t) % me | 0;
      }
      for (; !o[--s]; )
        o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = Sr(o, r), P ? h(e, p.precision, p.rounding) : e;
    };
    m.toBinary = function(e, t) {
      return Hn(this, 2, e, t);
    };
    m.toDecimalPlaces = m.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (oe(e, 0, $e), t === void 0 ? t = n.rounding : oe(t, 0, 8), h(r, e + r.e + 1, t));
    };
    m.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = be(n, true) : (oe(e, 0, $e), t === void 0 ? t = i.rounding : oe(t, 0, 8), n = h(new i(n), e + 1, t), r = be(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = be(i) : (oe(e, 0, $e), t === void 0 ? t = o.rounding : oe(t, 0, 8), n = h(new o(i), e + i.e + 1, t), r = be(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    m.toFraction = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, g = this, y = g.d, f = g.constructor;
      if (!y)
        return new f(g);
      if (u = r = new f(1), n = l = new f(0), t = new f(n), o = t.e = is(y) - g.e - 1, s = o % w, t.d[0] = $(10, s < 0 ? w + s : s), e == null)
        e = o > 0 ? t : u;
      else {
        if (a = new f(e), !a.isInt() || a.lt(u))
          throw Error(Le + a);
        e = a.gt(t) ? o > 0 ? t : u : a;
      }
      for (P = false, a = new f(Q(y)), c = f.precision, f.precision = o = y.length * w * 2; p = F(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1; )
        r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i;
      return i = F(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = g.s, d = F(u, n, o, 1).minus(g).abs().cmp(F(l, r, o, 1).minus(g).abs()) < 1 ? [u, n] : [l, r], f.precision = c, P = true, d;
    };
    m.toHexadecimal = m.toHex = function(e, t) {
      return Hn(this, 16, e, t);
    };
    m.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d)
          return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : oe(t, 0, 8), !r.d)
          return e.s ? r : e;
        if (!e.d)
          return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (P = false, r = F(r, e, 0, t, 1).times(e), P = true, h(r)) : (e.s = r.s, r = e), r;
    };
    m.toNumber = function() {
      return +this;
    };
    m.toOctal = function(e, t) {
      return Hn(this, 8, e, t);
    };
    m.toPower = m.pow = function(e) {
      var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0])
        return new l($(+a, u));
      if (a = new l(a), a.eq(1))
        return a;
      if (n = l.precision, o = l.rounding, e.eq(1))
        return h(a, n, o);
      if (t = Y(e.e / w), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= vu)
        return i = os(l, a, r, n), e.s < 0 ? new l(1).div(i) : h(i, n, o);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1)
          return new l(NaN);
        if ((e.d[t] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
          return a.s = s, a;
      }
      return r = $(+a, u), t = r == 0 || !isFinite(r) ? Y(u * (Math.log("0." + Q(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (P = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = Gn(e.times(Ne(a, n + r)), n), i.d && (i = h(i, n + 5, 1), $t(i.d, n, o) && (t = n + 10, i = h(Gn(e.times(Ne(a, t + r)), t), t + 5, 1), +Q(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = h(i, n + 1, 0)))), i.s = s, P = true, l.rounding = o, h(i, n, o));
    };
    m.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = be(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (oe(e, 1, $e), t === void 0 ? t = i.rounding : oe(t, 0, 8), n = h(new i(n), e, t), r = be(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toSignificantDigits = m.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (oe(e, 1, $e), t === void 0 ? t = n.rounding : oe(t, 0, 8)), h(new n(r), e, t);
    };
    m.toString = function() {
      var e = this, t = e.constructor, r = be(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    m.truncated = m.trunc = function() {
      return h(new this.constructor(this), this.e + 1, 1);
    };
    m.valueOf = m.toJSON = function() {
      var e = this, t = e.constructor, r = be(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function Q(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++)
          n = e[t] + "", r = w - n.length, r && (o += Ie(r)), o += n;
        s = e[t], n = s + "", r = w - n.length, r && (o += Ie(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return o + s;
    }
    function oe(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(Le + e);
    }
    function $t(e, t, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10)
        --t;
      return --t < 0 ? (t += w, i = 0) : (i = Math.ceil((t + 1) / w), t %= w), o = $(10, w - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == $(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == $(10, t - 3) - 1, s;
    }
    function Tr(e, t, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; )
          i[o] *= t;
        for (i[0] += Un.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
          i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    function Mu(e, t) {
      var r, n, i;
      if (t.isZero())
        return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Rr(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = ct(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    var F = function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; )
          s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      function t(n, i, o, s) {
        var a, l;
        if (o != s)
          l = o > s ? 1 : -1;
        else
          for (a = l = 0; a < o; a++)
            if (n[a] != i[a]) {
              l = n[a] > i[a] ? 1 : -1;
              break;
            }
        return l;
      }
      function r(n, i, o, s) {
        for (var a = 0; o--; )
          n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; )
          n.shift();
      }
      return function(n, i, o, s, a, l) {
        var u, c, p, d, g, y, f, b, E, v, x, M, le, K, Ke, I, J, ve, G, He, Jt = n.constructor, zr = n.s == i.s ? 1 : -1, W = n.d, R = i.d;
        if (!W || !W[0] || !R || !R[0])
          return new Jt(!n.s || !i.s || (W ? R && W[0] == R[0] : !R) ? NaN : W && W[0] == 0 || !R ? zr * 0 : zr / 0);
        for (l ? (g = 1, c = n.e - i.e) : (l = me, g = w, c = Y(n.e / g) - Y(i.e / g)), G = R.length, J = W.length, E = new Jt(zr), v = E.d = [], p = 0; R[p] == (W[p] || 0); p++)
          ;
        if (R[p] > (W[p] || 0) && c--, o == null ? (K = o = Jt.precision, s = Jt.rounding) : a ? K = o + (n.e - i.e) + 1 : K = o, K < 0)
          v.push(1), y = true;
        else {
          if (K = K / g + 2 | 0, p = 0, G == 1) {
            for (d = 0, R = R[0], K++; (p < J || d) && K--; p++)
              Ke = d * l + (W[p] || 0), v[p] = Ke / R | 0, d = Ke % R | 0;
            y = d || p < J;
          } else {
            for (d = l / (R[0] + 1) | 0, d > 1 && (R = e(R, d, l), W = e(W, d, l), G = R.length, J = W.length), I = G, x = W.slice(0, G), M = x.length; M < G; )
              x[M++] = 0;
            He = R.slice(), He.unshift(0), ve = R[0], R[1] >= l / 2 && ++ve;
            do
              d = 0, u = t(R, x, G, M), u < 0 ? (le = x[0], G != M && (le = le * l + (x[1] || 0)), d = le / ve | 0, d > 1 ? (d >= l && (d = l - 1), f = e(R, d, l), b = f.length, M = x.length, u = t(f, x, b, M), u == 1 && (d--, r(f, G < b ? He : R, b, l))) : (d == 0 && (u = d = 1), f = R.slice()), b = f.length, b < M && f.unshift(0), r(x, f, M, l), u == -1 && (M = x.length, u = t(R, x, G, M), u < 1 && (d++, r(x, G < M ? He : R, M, l))), M = x.length) : u === 0 && (d++, x = [0]), v[p++] = d, u && x[0] ? x[M++] = W[I] || 0 : (x = [W[I]], M = 1);
            while ((I++ < J || x[0] !== void 0) && K--);
            y = x[0] !== void 0;
          }
          v[0] || v.shift();
        }
        if (g == 1)
          E.e = c, Xo = y;
        else {
          for (p = 1, d = v[0]; d >= 10; d /= 10)
            p++;
          E.e = p + c * g - 1, h(E, a ? o + E.e + 1 : o, s, y);
        }
        return E;
      };
    }();
    function h(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, g = e.constructor;
      e:
        if (t != null) {
          if (p = e.d, !p)
            return e;
          for (i = 1, a = p[0]; a >= 10; a /= 10)
            i++;
          if (o = t - i, o < 0)
            o += w, s = t, c = p[d = 0], l = c / $(10, i - s - 1) % 10 | 0;
          else if (d = Math.ceil((o + 1) / w), a = p.length, d >= a)
            if (n) {
              for (; a++ <= d; )
                p.push(0);
              c = l = 0, i = 1, o %= w, s = o - w + 1;
            } else
              break e;
          else {
            for (c = a = p[d], i = 1; a >= 10; a /= 10)
              i++;
            o %= w, s = o - w + i, l = s < 0 ? 0 : c / $(10, i - s - 1) % 10 | 0;
          }
          if (n = n || t < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % $(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / $(10, i - s) : 0 : p[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0])
            return p.length = 0, u ? (t -= e.e + 1, p[0] = $(10, (w - t % w) % w), e.e = -t || 0) : p[0] = e.e = 0, e;
          if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = $(10, w - o), p[d] = s > 0 ? (c / $(10, i - s) % $(10, s) | 0) * a : 0), u)
            for (; ; )
              if (d == 0) {
                for (o = 1, s = p[0]; s >= 10; s /= 10)
                  o++;
                for (s = p[0] += a, a = 1; s >= 10; s /= 10)
                  a++;
                o != a && (e.e++, p[0] == me && (p[0] = 1));
                break;
              } else {
                if (p[d] += a, p[d] != me)
                  break;
                p[d--] = 0, a = 1;
              }
          for (o = p.length; p[--o] === 0; )
            p.pop();
        }
      return P && (e.e > g.maxE ? (e.d = null, e.e = NaN) : e.e < g.minE && (e.e = 0, e.d = [0])), e;
    }
    function be(e, t, r) {
      if (!e.isFinite())
        return as(e);
      var n, i = e.e, o = Q(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Ie(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Ie(-i - 1) + o, r && (n = r - s) > 0 && (o += Ie(n))) : i >= s ? (o += Ie(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Ie(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Ie(n))), o;
    }
    function Sr(e, t) {
      var r = e[0];
      for (t *= w; r >= 10; r /= 10)
        t++;
      return t;
    }
    function Mr(e, t, r) {
      if (t > Cu)
        throw P = true, r && (e.precision = r), Error(es);
      return h(new e(vr), t, 1, true);
    }
    function de(e, t, r) {
      if (t > Jn)
        throw Error(es);
      return h(new e(Cr), t, r, true);
    }
    function is(e) {
      var t = e.length - 1, r = t * w + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10)
          r--;
        for (t = e[0]; t >= 10; t /= 10)
          r++;
      }
      return r;
    }
    function Ie(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    function os(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / w + 4);
      for (P = false; ; ) {
        if (r % 2 && (o = o.times(t), Yo(o.d, s) && (i = true)), r = Y(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), Yo(t.d, s);
      }
      return P = true, o;
    }
    function zo(e) {
      return e.d[e.d.length - 1] & 1;
    }
    function ss(e, t, r) {
      for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
        if (n = new e(t[o]), n.s)
          i[r](n) && (i = n);
        else {
          i = n;
          break;
        }
      return i;
    }
    function Gn(e, t) {
      var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, g = d.rounding, y = d.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
      for (t == null ? (P = false, l = y) : l = t, a = new d(0.03125); e.e > -2; )
        e = e.times(a), p += 5;
      for (n = Math.log($(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new d(1), d.precision = l; ; ) {
        if (o = h(o.times(e), l, 1), r = r.times(++c), a = s.plus(F(o, r, l, 1)), Q(a.d).slice(0, l) === Q(s.d).slice(0, l)) {
          for (i = p; i--; )
            s = h(s.times(s), l, 1);
          if (t == null)
            if (u < 3 && $t(s.d, l - n, g, u))
              d.precision = l += 10, r = o = a = new d(1), c = 0, u++;
            else
              return h(s, d.precision = y, g, P = true);
          else
            return d.precision = y, s;
        }
        s = a;
      }
    }
    function Ne(e, t) {
      var r, n, i, o, s, a, l, u, c, p, d, g = 1, y = 10, f = e, b = f.d, E = f.constructor, v = E.rounding, x = E.precision;
      if (f.s < 0 || !b || !b[0] || !f.e && b[0] == 1 && b.length == 1)
        return new E(b && !b[0] ? -1 / 0 : f.s != 1 ? NaN : b ? 0 : f);
      if (t == null ? (P = false, c = x) : c = t, E.precision = c += y, r = Q(b), n = r.charAt(0), Math.abs(o = f.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          f = f.times(e), r = Q(f.d), n = r.charAt(0), g++;
        o = f.e, n > 1 ? (f = new E("0." + r), o++) : f = new E(n + "." + r.slice(1));
      } else
        return u = Mr(E, c + 2, x).times(o + ""), f = Ne(new E(n + "." + r.slice(1)), c - y).plus(u), E.precision = x, t == null ? h(f, x, v, P = true) : f;
      for (p = f, l = s = f = F(f.minus(1), f.plus(1), c, 1), d = h(f.times(f), c, 1), i = 3; ; ) {
        if (s = h(s.times(d), c, 1), u = l.plus(F(s, new E(i), c, 1)), Q(u.d).slice(0, c) === Q(l.d).slice(0, c))
          if (l = l.times(2), o !== 0 && (l = l.plus(Mr(E, c + 2, x).times(o + ""))), l = F(l, new E(g), c, 1), t == null)
            if ($t(l.d, c - y, v, a))
              E.precision = c += y, u = s = f = F(p.minus(1), p.plus(1), c, 1), d = h(f.times(f), c, 1), i = a = 1;
            else
              return h(l, E.precision = x, v, P = true);
          else
            return E.precision = x, l;
        l = u, i += 2;
      }
    }
    function as(e) {
      return String(e.s * e.s / 0);
    }
    function Wn(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
        ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
        ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % w, r < 0 && (n += w), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= w; n < i; )
            e.d.push(+t.slice(n, n += w));
          t = t.slice(n), n = w - t.length;
        } else
          n -= i;
        for (; n--; )
          t += "0";
        e.d.push(+t), P && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    function Au(e, t) {
      var r, n, i, o, s, a, l, u, c;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), ns.test(t))
          return Wn(e, t);
      } else if (t === "Infinity" || t === "NaN")
        return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (Eu.test(t))
        r = 16, t = t.toLowerCase();
      else if (Pu.test(t))
        r = 2;
      else if (Tu.test(t))
        r = 8;
      else
        throw Error(Le + t);
      for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = os(n, new n(r), o, o * 2)), u = Tr(t, r, me), c = u.length - 1, o = c; u[o] === 0; --o)
        u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = Sr(u, c), e.d = u, P = false, s && (e = F(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? $(2, l) : We.pow(2, l))), P = true, e);
    }
    function Su(e, t) {
      var r, n = t.d.length;
      if (n < 3)
        return t.isZero() ? t : ct(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Rr(5, r)), t = ct(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
        i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
      return t;
    }
    function ct(e, t, r, n, i) {
      var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / w);
      for (P = false, l = r.times(r), a = new e(n); ; ) {
        if (s = F(a.times(l), new e(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = F(s.times(l), new e(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
          for (o = p; s.d[o] === a.d[o] && o--; )
            ;
          if (o == -1)
            break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return P = true, s.d.length = p + 1, s;
    }
    function Rr(e, t) {
      for (var r = e; --t; )
        r *= e;
      return r;
    }
    function ls(e, t) {
      var r, n = t.s < 0, i = de(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o))
        return Se = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero())
        Se = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o))
          return Se = zo(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Se = zo(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    function Hn(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, g = e.constructor, y = r !== void 0;
      if (y ? (oe(r, 1, $e), n === void 0 ? n = g.rounding : oe(n, 0, 8)) : (r = g.precision, n = g.rounding), !e.isFinite())
        c = as(e);
      else {
        for (c = be(e), s = c.indexOf("."), y ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), d = new g(1), d.e = c.length - s, d.d = Tr(be(d), 10, i), d.e = d.d.length), p = Tr(c, 10, i), o = l = p.length; p[--l] == 0; )
          p.pop();
        if (!p[0])
          c = y ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new g(e), e.d = p, e.e = o, e = F(e, d, r, n, 0, i), p = e.d, o = e.e, u = Xo), s = p[r], a = i / 2, u = u || p[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u)
            for (; ++p[--r] > i - 1; )
              p[r] = 0, r || (++o, p.unshift(1));
          for (l = p.length; !p[l - 1]; --l)
            ;
          for (s = 0, c = ""; s < l; s++)
            c += Un.charAt(p[s]);
          if (y) {
            if (l > 1)
              if (t == 16 || t == 8) {
                for (s = t == 16 ? 4 : 3, --l; l % s; l++)
                  c += "0";
                for (p = Tr(c, i, t), l = p.length; !p[l - 1]; --l)
                  ;
                for (s = 1, c = "1."; s < l; s++)
                  c += Un.charAt(p[s]);
              } else
                c = c.charAt(0) + "." + c.slice(1);
            c = c + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; )
              c = "0" + c;
            c = "0." + c;
          } else if (++o > l)
            for (o -= l; o--; )
              c += "0";
          else
            o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    function Yo(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    function Ru(e) {
      return new this(e).abs();
    }
    function Fu(e) {
      return new this(e).acos();
    }
    function Ou(e) {
      return new this(e).acosh();
    }
    function ku(e, t) {
      return new this(e).plus(t);
    }
    function Du(e) {
      return new this(e).asin();
    }
    function _u(e) {
      return new this(e).asinh();
    }
    function Iu(e) {
      return new this(e).atan();
    }
    function Nu(e) {
      return new this(e).atanh();
    }
    function Lu(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = de(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? de(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = de(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(F(e, t, o, 1)), t = de(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(F(e, t, o, 1)), r;
    }
    function $u(e) {
      return new this(e).cbrt();
    }
    function qu(e) {
      return h(e = new this(e), e.e + 1, 2);
    }
    function ju(e, t, r) {
      return new this(e).clamp(t, r);
    }
    function Bu(e) {
      if (!e || typeof e != "object")
        throw Error(Ar + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, $e, "rounding", 0, 8, "toExpNeg", -ut, 0, "toExpPos", 0, ut, "maxE", 0, ut, "minE", -ut, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3)
        if (r = o[t], i && (this[r] = Qn[r]), (n = e[r]) !== void 0)
          if (Y(n) === n && n >= o[t + 1] && n <= o[t + 2])
            this[r] = n;
          else
            throw Error(Le + r + ": " + n);
      if (r = "crypto", i && (this[r] = Qn[r]), (n = e[r]) !== void 0)
        if (n === true || n === false || n === 0 || n === 1)
          if (n)
            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[r] = true;
            else
              throw Error(ts);
          else
            this[r] = false;
        else
          throw Error(Le + r + ": " + n);
      return this;
    }
    function Ku(e) {
      return new this(e).cos();
    }
    function Vu(e) {
      return new this(e).cosh();
    }
    function us(e) {
      var t, r, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i))
          return new i(o);
        if (u.constructor = i, Zo(o)) {
          u.s = o.s, P ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10)
              s++;
            P ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return Wn(u, o.toString());
        } else if (l !== "string")
          throw Error(Le + o);
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), ns.test(o) ? Wn(u, o) : Au(u, o);
      }
      if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Bu, i.clone = us, i.isDecimal = Zo, i.abs = Ru, i.acos = Fu, i.acosh = Ou, i.add = ku, i.asin = Du, i.asinh = _u, i.atan = Iu, i.atanh = Nu, i.atan2 = Lu, i.cbrt = $u, i.ceil = qu, i.clamp = ju, i.cos = Ku, i.cosh = Vu, i.div = Uu, i.exp = Qu, i.floor = Ju, i.hypot = Gu, i.ln = Wu, i.log = Hu, i.log10 = Yu, i.log2 = zu, i.max = Zu, i.min = Xu, i.mod = ec, i.mul = tc, i.pow = rc, i.random = nc, i.round = ic, i.sign = oc, i.sin = sc, i.sinh = ac, i.sqrt = lc, i.sub = uc, i.sum = cc, i.tan = pc, i.tanh = dc, i.trunc = mc, e === void 0 && (e = {}), e && e.defaults !== true)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    function Uu(e, t) {
      return new this(e).div(t);
    }
    function Qu(e) {
      return new this(e).exp();
    }
    function Ju(e) {
      return h(e = new this(e), e.e + 1, 3);
    }
    function Gu() {
      var e, t, r = new this(0);
      for (P = false, e = 0; e < arguments.length; )
        if (t = new this(arguments[e++]), t.d)
          r.d && (r = r.plus(t.times(t)));
        else {
          if (t.s)
            return P = true, new this(1 / 0);
          r = t;
        }
      return P = true, r.sqrt();
    }
    function Zo(e) {
      return e instanceof We || e && e.toStringTag === rs || false;
    }
    function Wu(e) {
      return new this(e).ln();
    }
    function Hu(e, t) {
      return new this(e).log(t);
    }
    function zu(e) {
      return new this(e).log(2);
    }
    function Yu(e) {
      return new this(e).log(10);
    }
    function Zu() {
      return ss(this, arguments, "lt");
    }
    function Xu() {
      return ss(this, arguments, "gt");
    }
    function ec(e, t) {
      return new this(e).mod(t);
    }
    function tc(e, t) {
      return new this(e).mul(t);
    }
    function rc(e, t) {
      return new this(e).pow(t);
    }
    function nc(e) {
      var t, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : oe(e, 1, $e), n = Math.ceil(e / w), this.crypto)
        if (crypto.getRandomValues)
          for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
            i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
        else if (crypto.randomBytes) {
          for (t = crypto.randomBytes(n *= 4); o < n; )
            i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
          o = n / 4;
        } else
          throw Error(ts);
      else
        for (; o < n; )
          a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= w, n && e && (i = $(10, w - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)
        a.pop();
      if (o < 0)
        r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= w)
          a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10)
          n++;
        n < w && (r -= w - n);
      }
      return s.e = r, s.d = a, s;
    }
    function ic(e) {
      return h(e = new this(e), e.e + 1, this.rounding);
    }
    function oc(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    function sc(e) {
      return new this(e).sin();
    }
    function ac(e) {
      return new this(e).sinh();
    }
    function lc(e) {
      return new this(e).sqrt();
    }
    function uc(e, t) {
      return new this(e).sub(t);
    }
    function cc() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (P = false; r.s && ++e < t.length; )
        r = r.plus(t[e]);
      return P = true, h(r, this.precision, this.rounding);
    }
    function pc(e) {
      return new this(e).tan();
    }
    function dc(e) {
      return new this(e).tanh();
    }
    function mc(e) {
      return h(e = new this(e), e.e + 1, 1);
    }
    m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
    m[Symbol.toStringTag] = "Decimal";
    var We = m.constructor = us(Qn);
    vr = new We(vr);
    Cr = new We(Cr);
    var we = We;
    function pt(e) {
      return We.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    var qt = class {
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function dt(e) {
      return e instanceof qt;
    }
    var Fr = (e) => e;
    var Or = { bold: Fr, red: Fr, green: Fr, dim: Fr };
    var cs = { bold: ne, red: pe, green: Ue, dim: Oe };
    var mt = { write(e) {
      e.writeLine(",");
    } };
    var Pe = class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var qe = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var kr = class extends qe {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(r), this;
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new Pe("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(mt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var ps = ": ";
    var Dr = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + ps.length;
      }
      write(t) {
        let r = new Pe(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(ps).write(this.value);
      }
    };
    var D = class extends qe {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o)
          return;
        let s = o;
        for (let a of i) {
          if (!(s.value instanceof D))
            return;
          let l = s.value.getField(a);
          if (!l)
            return;
          s = l;
        }
        return s;
      }
      getDeepFieldValue(r) {
        var _a4;
        return r.length === 0 ? this : (_a4 = this.getDeepField(r)) == null ? void 0 : _a4.value;
      }
      hasField(r) {
        return Boolean(this.getField(r));
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        var _a4;
        return (_a4 = this.getField(r)) == null ? void 0 : _a4.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof D))
            return;
          let o = n.getSubSelectionValue(i);
          if (!o)
            return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n)
          return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof D))
            return;
          let a = s.getSelectionParent();
          if (!a)
            return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let r = this.getField("select");
        if ((r == null ? void 0 : r.value) instanceof D)
          return { kind: "select", value: r.value };
        let n = this.getField("include");
        if ((n == null ? void 0 : n.value) instanceof D)
          return { kind: "include", value: n.value };
      }
      getSubSelectionValue(r) {
        var _a4;
        return (_a4 = this.getSelectionParent()) == null ? void 0 : _a4.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      writeEmpty(r) {
        let n = new Pe("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(mt, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var j = class extends qe {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new Pe(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
    };
    var zn = class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function _r(e) {
      return new zn(ds(e));
    }
    function ds(e) {
      let t = new D();
      for (let [r, n] of Object.entries(e)) {
        let i = new Dr(r, ms(n));
        t.addField(i);
      }
      return t;
    }
    function ms(e) {
      if (typeof e == "string")
        return new j(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean")
        return new j(String(e));
      if (typeof e == "bigint")
        return new j(`${e}n`);
      if (e === null)
        return new j("null");
      if (e === void 0)
        return new j("undefined");
      if (pt(e))
        return new j(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return Buffer.isBuffer(e) ? new j(`Buffer.alloc(${e.byteLength})`) : new j(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Er(e) ? e.toISOString() : "Invalid Date";
        return new j(`new Date("${t}")`);
      }
      return e instanceof Ae ? new j(`Prisma.${e._getName()}`) : dt(e) ? new j(`prisma.${wi(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? gc(e) : typeof e == "object" ? ds(e) : new j(Object.prototype.toString.call(e));
    }
    function gc(e) {
      let t = new kr();
      for (let r of e)
        t.addItem(ms(r));
      return t;
    }
    function fs(e) {
      if (e === void 0)
        return "";
      let t = _r(e);
      return new at(0, { colors: Or }).write(t).toString();
    }
    var jt = "<unknown>";
    function gs(e) {
      var t = e.split(`
`);
      return t.reduce(function(r, n) {
        var i = xc(n) || wc(n) || Tc(n) || Ac(n) || Cc(n);
        return i && r.push(i), r;
      }, []);
    }
    var yc = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var hc = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function xc(e) {
      var t = yc.exec(e);
      if (!t)
        return null;
      var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = hc.exec(t[2]);
      return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || jt, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
    }
    var bc = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function wc(e) {
      var t = bc.exec(e);
      return t ? { file: t[2], methodName: t[1] || jt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var Pc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var Ec = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function Tc(e) {
      var t = Pc.exec(e);
      if (!t)
        return null;
      var r = t[3] && t[3].indexOf(" > eval") > -1, n = Ec.exec(t[3]);
      return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || jt, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
    }
    var vc = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function Cc(e) {
      var t = vc.exec(e);
      return t ? { file: t[3], methodName: t[1] || jt, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
    }
    var Mc = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function Ac(e) {
      var t = Mc.exec(e);
      return t ? { file: t[2], methodName: t[1] || jt, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var Yn = class {
      getLocation() {
        return null;
      }
    };
    var Zn = class {
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let t = this._error.stack;
        if (!t)
          return null;
        let n = gs(t).find((i) => {
          if (!i.file)
            return false;
          let o = Mn(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/data-proxy.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function je(e) {
      return e === "minimal" ? new Yn() : new Zn();
    }
    var ys = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function ft(e = {}) {
      let t = Rc(e);
      return Object.entries(t).reduce((n, [i, o]) => (ys[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    function Rc(e = {}) {
      return typeof e._count == "boolean" ? __spreadProps(__spreadValues({}, e), { _count: { _all: e._count } }) : e;
    }
    function Ir(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    function hs(e, t) {
      let r = Ir(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: ft })(e);
    }
    function Fc(e = {}) {
      let _a4 = e, { select: t } = _a4, r = __objRest(_a4, ["select"]);
      return typeof t == "object" ? ft(__spreadProps(__spreadValues({}, r), { _count: t })) : ft(__spreadProps(__spreadValues({}, r), { _count: { _all: true } }));
    }
    function Oc(e = {}) {
      return typeof e.select == "object" ? (t) => Ir(e)(t)._count : (t) => Ir(e)(t)._count._all;
    }
    function xs(e, t) {
      return t({ action: "count", unpacker: Oc(e), argsMapper: Fc })(e);
    }
    function kc(e = {}) {
      let t = ft(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      else
        typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    function Dc(e = {}) {
      return (t) => (typeof (e == null ? void 0 : e._count) == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    function bs(e, t) {
      return t({ action: "groupBy", unpacker: Dc(e), argsMapper: kc })(e);
    }
    function ws(e, t, r) {
      if (t === "aggregate")
        return (n) => hs(n, r);
      if (t === "count")
        return (n) => xs(n, r);
      if (t === "groupBy")
        return (n) => bs(n, r);
    }
    function Ps(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = Dn(r, (i) => i.name);
      return new Proxy({}, __spreadValues({ get(i, o) {
        if (o in i || typeof o == "symbol")
          return i[o];
        let s = n[o];
        if (s)
          return new qt(e, o, s.type, s.isList, s.kind === "enum");
      } }, gr(Object.keys(n))));
    }
    var Es = (e) => Array.isArray(e) ? e : e.split(".");
    var Xn = (e, t) => Es(t).reduce((r, n) => r && r[n], e);
    var Ts = (e, t, r) => Es(t).reduceRight((n, i, o, s) => Object.assign({}, Xn(e, s.slice(0, o)), { [i]: n }), r);
    function _c(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    function Ic(e, t, r) {
      return t === void 0 ? e != null ? e : {} : Ts(t, r, e || true);
    }
    function ei(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => __spreadProps(__spreadValues({}, l), { [u.name]: u }), {});
      return (l) => {
        let u = je(e._errorFormat), c = _c(n, i), p = Ic(l, o, c), d = r({ dataPath: c, callsite: u })(p), g = Nc(e, t);
        return new Proxy(d, __spreadValues({ get(y, f) {
          if (!g.includes(f))
            return y[f];
          let E = [a[f].type, r, f], v = [c, p];
          return ei(e, ...E, ...v);
        } }, gr([...g, ...Object.getOwnPropertyNames(d)])));
      };
    }
    function Nc(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    var Rs = A(An());
    var Ss = A(require("fs"));
    var vs = { keyword: ke, entity: ke, value: (e) => ne(Xe(e)), punctuation: Xe, directive: ke, function: ke, variable: (e) => ne(Xe(e)), string: (e) => ne(Ue(e)), boolean: ye, number: ke, comment: rr };
    var Lc = (e) => e;
    var Nr = {};
    var $c = 0;
    var T = { manual: Nr.Prism && Nr.Prism.manual, disableWorkerMessageHandler: Nr.Prism && Nr.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
      if (e instanceof fe) {
        let t = e;
        return new fe(t.type, T.util.encode(t.content), t.alias);
      } else
        return Array.isArray(e) ? e.map(T.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++$c }), e.__id;
    }, clone: function e(t, r) {
      let n, i, o = T.util.type(t);
      switch (r = r || {}, o) {
        case "Object":
          if (i = T.util.objId(t), r[i])
            return r[i];
          n = {}, r[i] = n;
          for (let s in t)
            t.hasOwnProperty(s) && (n[s] = e(t[s], r));
          return n;
        case "Array":
          return i = T.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
            n[a] = e(s, r);
          }), n);
        default:
          return t;
      }
    } }, languages: { extend: function(e, t) {
      let r = T.util.clone(T.languages[e]);
      for (let n in t)
        r[n] = t[n];
      return r;
    }, insertBefore: function(e, t, r, n) {
      n = n || T.languages;
      let i = n[e], o = {};
      for (let a in i)
        if (i.hasOwnProperty(a)) {
          if (a == t)
            for (let l in r)
              r.hasOwnProperty(l) && (o[l] = r[l]);
          r.hasOwnProperty(a) || (o[a] = i[a]);
        }
      let s = n[e];
      return n[e] = o, T.languages.DFS(T.languages, function(a, l) {
        l === s && a != e && (this[a] = o);
      }), o;
    }, DFS: function e(t, r, n, i) {
      i = i || {};
      let o = T.util.objId;
      for (let s in t)
        if (t.hasOwnProperty(s)) {
          r.call(t, s, t[s], n || s);
          let a = t[s], l = T.util.type(a);
          l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
        }
    } }, plugins: {}, highlight: function(e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return T.hooks.run("before-tokenize", n), n.tokens = T.tokenize(n.code, n.grammar), T.hooks.run("after-tokenize", n), fe.stringify(T.util.encode(n.tokens), n.language);
    }, matchGrammar: function(e, t, r, n, i, o, s) {
      for (let f in r) {
        if (!r.hasOwnProperty(f) || !r[f])
          continue;
        if (f == s)
          return;
        let b = r[f];
        b = T.util.type(b) === "Array" ? b : [b];
        for (let E = 0; E < b.length; ++E) {
          let v = b[E], x = v.inside, M = !!v.lookbehind, le = !!v.greedy, K = 0, Ke = v.alias;
          if (le && !v.pattern.global) {
            let I = v.pattern.toString().match(/[imuy]*$/)[0];
            v.pattern = RegExp(v.pattern.source, I + "g");
          }
          v = v.pattern || v;
          for (let I = n, J = i; I < t.length; J += t[I].length, ++I) {
            let ve = t[I];
            if (t.length > e.length)
              return;
            if (ve instanceof fe)
              continue;
            if (le && I != t.length - 1) {
              v.lastIndex = J;
              var p = v.exec(e);
              if (!p)
                break;
              var c = p.index + (M ? p[1].length : 0), d = p.index + p[0].length, a = I, l = J;
              for (let R = t.length; a < R && (l < d || !t[a].type && !t[a - 1].greedy); ++a)
                l += t[a].length, c >= l && (++I, J = l);
              if (t[I] instanceof fe)
                continue;
              u = a - I, ve = e.slice(J, l), p.index -= J;
            } else {
              v.lastIndex = 0;
              var p = v.exec(ve), u = 1;
            }
            if (!p) {
              if (o)
                break;
              continue;
            }
            M && (K = p[1] ? p[1].length : 0);
            var c = p.index + K, p = p[0].slice(K), d = c + p.length, g = ve.slice(0, c), y = ve.slice(d);
            let G = [I, u];
            g && (++I, J += g.length, G.push(g));
            let He = new fe(f, x ? T.tokenize(p, x) : p, Ke, p, le);
            if (G.push(He), y && G.push(y), Array.prototype.splice.apply(t, G), u != 1 && T.matchGrammar(e, t, r, I, J, true, f), o)
              break;
          }
        }
      }
    }, tokenize: function(e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let i in n)
          t[i] = n[i];
        delete t.rest;
      }
      return T.matchGrammar(e, r, t, 0, 0, false), r;
    }, hooks: { all: {}, add: function(e, t) {
      let r = T.hooks.all;
      r[e] = r[e] || [], r[e].push(t);
    }, run: function(e, t) {
      let r = T.hooks.all[e];
      if (!(!r || !r.length))
        for (var n = 0, i; i = r[n++]; )
          i(t);
    } }, Token: fe };
    T.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    T.languages.javascript = T.languages.extend("clike", { "class-name": [T.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    T.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    T.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: T.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: T.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: T.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: T.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    T.languages.markup && T.languages.markup.tag.addInlined("script", "javascript");
    T.languages.js = T.languages.javascript;
    T.languages.typescript = T.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    T.languages.ts = T.languages.typescript;
    function fe(e, t, r, n, i) {
      this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    fe.stringify = function(e, t) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
        return fe.stringify(r, t);
      }).join("") : qc(e.type)(e.content);
    };
    function qc(e) {
      return vs[e] || Lc;
    }
    function Cs(e) {
      return jc(e, T.languages.javascript);
    }
    function jc(e, t) {
      return T.tokenize(e, t).map((n) => fe.stringify(n)).join("");
    }
    var Ms = A(mo());
    function As(e) {
      return (0, Ms.default)(e);
    }
    var ge = class {
      static read(t) {
        let r;
        try {
          r = Ss.default.readFileSync(t, "utf-8");
        } catch (e) {
          return null;
        }
        return ge.fromContent(r);
      }
      static fromContent(t) {
        let r = t.split(/\r?\n/);
        return new ge(1, r);
      }
      constructor(t, r) {
        this.firstLineNumber = t, this.lines = r;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(t, r) {
        if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
          return this;
        let n = t - this.firstLineNumber, i = [...this.lines];
        return i[n] = r(i[n]), new ge(this.firstLineNumber, i);
      }
      mapLines(t) {
        return new ge(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
      }
      lineAt(t) {
        return this.lines[t - this.firstLineNumber];
      }
      prependSymbolAt(t, r) {
        return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
      }
      slice(t, r) {
        let n = this.lines.slice(t - 1, r).join(`
`);
        return new ge(t, As(n).split(`
`));
      }
      highlight() {
        let t = Cs(this.toString());
        return new ge(this.firstLineNumber, t.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var Bc = { red: pe, gray: rr, dim: Oe, bold: ne, underline: X, highlightSource: (e) => e.highlight() };
    var Kc = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function Vc({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
      var _a4;
      let s = { functionName: `prisma.${r}()`, message: t, isPanic: n != null ? n : false, callArguments: i };
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production")
        return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber)
        return s;
      let l = Math.max(1, a.lineNumber - 3), u = (_a4 = ge.read(a.fileName)) == null ? void 0 : _a4.slice(l, a.lineNumber), c = u == null ? void 0 : u.lineAt(a.lineNumber);
      if (u && c) {
        let p = Qc(c), d = Uc(c);
        if (!d)
          return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (y) => y.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let g = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((y, f) => o.gray(String(f).padStart(g)) + " " + y).mapLines((y) => o.dim(y)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
          let y = p + g + 1;
          y += 2, s.callArguments = (0, Rs.default)(i, y).slice(y);
        }
      }
      return s;
    }
    function Uc(e) {
      let t = Object.keys(ue.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    function Qc(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        if (e.charAt(r) !== " ")
          return t;
        t++;
      }
      return t;
    }
    function Jc({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Gc(t))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else
        a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    function Gc(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    function gt(e) {
      let t = e.showColors ? Bc : Kc, r = Vc(e, t);
      return Jc(r, t);
    }
    function Fs(e, t, r, n) {
      return e === ue.ModelAction.findFirstOrThrow || e === ue.ModelAction.findUniqueOrThrow ? Wc(t, r, n) : n;
    }
    function Wc(e, t, r) {
      return (n) => __async(this, null, function* () {
        if ("rejectOnNotFound" in n.args) {
          let o = gt({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new te(o, { clientVersion: t });
        }
        return yield r(n).catch((o) => {
          throw o instanceof H && o.code === "P2025" ? new Ce(`No ${e} found`, t) : o;
        });
      });
    }
    function Ee(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    var Hc = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var zc = ["aggregate", "count", "groupBy"];
    function ti(e, t) {
      var _a4;
      let r = (_a4 = e._extensions.getAllModelExtensions(t)) != null ? _a4 : {}, n = [Yc(e, t), Xc(e, t), Ft(r), re("name", () => t), re("$name", () => t), re("$parent", () => e._appliedParent)];
      return xe({}, n);
    }
    function Yc(e, t) {
      let r = Ee(t), n = Object.keys(ue.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = (l) => e._request(l);
        s = Fs(o, t, e._clientVersion, s);
        let a = (l) => (u) => {
          let c = je(e._errorFormat);
          return e._createPrismaPromise((p) => {
            let d = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: p, callsite: c };
            return s(__spreadValues(__spreadValues({}, d), l));
          });
        };
        return Hc.includes(o) ? ei(e, t, a) : Zc(i) ? ws(e, i, a) : a({});
      } };
    }
    function Zc(e) {
      return zc.includes(e);
    }
    function Xc(e, t) {
      return Ge(re("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return Ps(t, r);
      }));
    }
    function Os(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    var ri = Symbol();
    function Bt(e) {
      let t = [ep(e), re(ri, () => e), re("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(Ft(r)), xe(e, t);
    }
    function ep(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(Ee), n = [...new Set(t.concat(r))];
      return Ge({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = Os(i);
        if (e._runtimeDataModel.models[o] !== void 0)
          return ti(e, o);
        if (e._runtimeDataModel.models[i] !== void 0)
          return ti(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i))
          return { enumerable: false };
      } });
    }
    function Lr(e) {
      return e[ri] ? e[ri] : e;
    }
    function ks(e) {
      if (typeof e == "function")
        return e(this);
      let t = Lr(this), r = Object.create(t, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return Bt(r);
    }
    function Ds({ result: e, modelName: t, select: r, extensions: n }) {
      let i = n.getAllComputedFields(t);
      if (!i)
        return e;
      let o = [], s = [];
      for (let a of Object.values(i)) {
        if (r) {
          if (!r[a.name])
            continue;
          let l = a.needs.filter((u) => !r[u]);
          l.length > 0 && s.push(Ot(l));
        }
        tp(e, a.needs) && o.push(rp(a, xe(e, o)));
      }
      return o.length > 0 || s.length > 0 ? xe(e, [...o, ...s]) : e;
    }
    function tp(e, t) {
      return t.every((r) => kn(e, r));
    }
    function rp(e, t) {
      return Ge(re(e.name, () => e.compute(t)));
    }
    function $r({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      var _a4;
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++)
          t[s] = $r({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = (_a4 = e(t, i, r)) != null ? _a4 : t;
      return r.include && _s({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && _s({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    function _s({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null)
          continue;
        let l = n.models[r].fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName)
          continue;
        let u = typeof s == "object" ? s : {};
        t[o] = $r({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    function Is({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : $r({ result: e, args: r != null ? r : {}, modelName: t, runtimeDataModel: i, visitor: (s, a, l) => Ds({ result: s, modelName: Ee(a), select: l.select, extensions: n }) });
    }
    function Ns(e) {
      if (e instanceof U)
        return np(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++)
          r[n] = Kt(e[n]);
        return r;
      }
      let t = {};
      for (let r in e)
        t[r] = Kt(e[r]);
      return t;
    }
    function np(e) {
      return new U(e.strings, e.values);
    }
    function Kt(e) {
      if (typeof e != "object" || e == null || e instanceof Ae || dt(e))
        return e;
      if (pt(e))
        return new we(e.toFixed());
      if (lt(e))
        return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e))
        return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; )
          r[t] = Kt(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e)
          r === "__proto__" ? Object.defineProperty(t, r, { value: Kt(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Kt(e[r]);
        return t;
      }
      Je(e, "Unknown value");
    }
    function $s(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        var _a4, _b2;
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (((_a4 = t.transaction) == null ? void 0 : _a4.kind) === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Ns((_b2 = t.args) != null ? _b2 : {}), __internalParams: t, query: (s, a = t) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = Ks(o, l), a.args = s, $s(e, a, r, n + 1);
        } });
      });
    }
    function qs(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r != null ? r : "$none", o);
      return $s(e, t, s);
    }
    function js(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Bs(r, n, 0, e) : e(r);
      };
    }
    function Bs(e, t, r, n) {
      if (r === t.length)
        return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = Ks(i, l), Bs(a, t, r + 1, n);
      } });
    }
    var Ls = (e) => e;
    function Ks(e = Ls, t = Ls) {
      return (r) => e(t(r));
    }
    function Us(e, t, r) {
      let n = Ee(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : ip(__spreadValues(__spreadValues(__spreadValues({}, e), Vs(t.name, e, t.result.$allModels)), Vs(t.name, e, t.result[n])));
    }
    function ip(e) {
      let t = new he(), r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
      return ot(e, (n) => __spreadProps(__spreadValues({}, n), { needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    function Vs(e, t, r) {
      return r ? ot(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: op(t, o, i) })) : {};
    }
    function op(e, t, r) {
      var _a4;
      let n = (_a4 = e == null ? void 0 : e[t]) == null ? void 0 : _a4.compute;
      return n ? (i) => r(__spreadProps(__spreadValues({}, i), { [t]: n(i) })) : r;
    }
    function Qs(e, t) {
      if (!t)
        return e;
      let r = __spreadValues({}, e);
      for (let n of Object.values(t))
        if (!!e[n.name])
          for (let i of n.needs)
            r[i] = true;
      return r;
    }
    var qr = class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new he();
        this.modelExtensionsCache = new he();
        this.queryCallbacksCache = new he();
        this.clientExtensions = Rt(() => {
          var _a4, _b2;
          return this.extension.client ? __spreadValues(__spreadValues({}, (_a4 = this.previous) == null ? void 0 : _a4.getAllClientExtensions()), this.extension.client) : (_b2 = this.previous) == null ? void 0 : _b2.getAllClientExtensions();
        });
        this.batchCallbacks = Rt(() => {
          var _a4, _b2, _c2;
          let t2 = (_b2 = (_a4 = this.previous) == null ? void 0 : _a4.getAllBatchQueryCallbacks()) != null ? _b2 : [], r2 = (_c2 = this.extension.query) == null ? void 0 : _c2.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => {
          var _a4;
          return Us((_a4 = this.previous) == null ? void 0 : _a4.getAllComputedFields(t), this.extension, t);
        });
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          var _a4, _b2;
          let r = Ee(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? (_a4 = this.previous) == null ? void 0 : _a4.getAllModelExtensions(t) : __spreadValues(__spreadValues(__spreadValues({}, (_b2 = this.previous) == null ? void 0 : _b2.getAllModelExtensions(t)), this.extension.model.$allModels), this.extension.model[r]);
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          var _a4, _b2;
          let n = (_b2 = (_a4 = this.previous) == null ? void 0 : _a4.getAllQueryCallbacks(t, r)) != null ? _b2 : [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Be = class {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new Be();
      }
      static single(t) {
        return new Be(new qr(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new Be(new qr(t, this.head));
      }
      getAllComputedFields(t) {
        var _a4;
        return (_a4 = this.head) == null ? void 0 : _a4.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        var _a4;
        return (_a4 = this.head) == null ? void 0 : _a4.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        var _a4;
        return (_a4 = this.head) == null ? void 0 : _a4.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        var _a4, _b2;
        return (_b2 = (_a4 = this.head) == null ? void 0 : _a4.getAllQueryCallbacks(t, r)) != null ? _b2 : [];
      }
      getAllBatchQueryCallbacks() {
        var _a4, _b2;
        return (_b2 = (_a4 = this.head) == null ? void 0 : _a4.getAllBatchQueryCallbacks()) != null ? _b2 : [];
      }
    };
    var Js = N("prisma:client");
    var Gs = { Vercel: "vercel", "Netlify CI": "netlify" };
    function Ws({ postinstall: e, ciName: t, clientVersion: r }) {
      if (Js("checkPlatformCaching:postinstall", e), Js("checkPlatformCaching:ciName", t), e === true && t && t in Gs) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Gs[t]}-build`;
        throw console.error(n), new _(n, r);
      }
    }
    var ea = A(ni());
    function Zs(e, t) {
      let r = Xs(e), n = sp(r), i = lp(n);
      i ? jr(i, t) : t.addErrorMessage(() => "Unknown error");
    }
    function Xs(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? Xs(t) : [t]);
    }
    function sp(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, __spreadProps(__spreadValues({}, n), { argument: __spreadProps(__spreadValues({}, n.argument), { typeNames: ap(o.argument.typeNames, n.argument.typeNames) }) })) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    function ap(e, t) {
      return [...new Set(e.concat(t))];
    }
    function lp(e) {
      return _n(e, (t, r) => {
        let n = zs(t), i = zs(r);
        return n !== i ? n - i : Ys(t) - Ys(r);
      });
    }
    function zs(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    function Ys(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    var Re = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    var Br = class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(mt, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function jr(e, t) {
      switch (e.kind) {
        case "IncludeAndSelect":
          up(e, t);
          break;
        case "IncludeOnScalar":
          cp(e, t);
          break;
        case "EmptySelection":
          pp(e, t);
          break;
        case "UnknownSelectionField":
          dp(e, t);
          break;
        case "UnknownArgument":
          mp(e, t);
          break;
        case "UnknownInputField":
          fp(e, t);
          break;
        case "RequiredArgumentMissing":
          gp(e, t);
          break;
        case "InvalidArgumentType":
          yp(e, t);
          break;
        case "InvalidArgumentValue":
          hp(e, t);
          break;
        case "ValueTooLarge":
          xp(e, t);
          break;
        case "SomeFieldsMissing":
          bp(e, t);
          break;
        case "TooManyFieldsGiven":
          wp(e, t);
          break;
        case "Union":
          Zs(e, t);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function up(e, t) {
      var _a4, _b2;
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      r && r instanceof D && ((_a4 = r.getField("include")) == null ? void 0 : _a4.markAsError(), (_b2 = r.getField("select")) == null ? void 0 : _b2.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green("`include`")} or ${n.green("`select`")}, but ${n.red("not both")} at the same time.`);
    }
    function cp(e, t) {
      var _a4, _b2;
      let [r, n] = Kr(e.selectionPath), i = e.outputType, o = (_a4 = t.arguments.getDeepSelectionParent(r)) == null ? void 0 : _a4.value;
      if (o && ((_b2 = o.getField(n)) == null ? void 0 : _b2.markAsError(), i))
        for (let s of i.fields)
          s.isRelation && o.addSuggestion(new Re(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${Vt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    function pp(e, t) {
      var _a4, _b2;
      let r = e.outputType, n = (_a4 = t.arguments.getDeepSelectionParent(e.selectionPath)) == null ? void 0 : _a4.value, i = (_b2 = n == null ? void 0 : n.isEmpty()) != null ? _b2 : false;
      n && (n.removeAllFields(), na(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${Vt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    function dp(e, t) {
      var _a4;
      let [r, n] = Kr(e.selectionPath), i = t.arguments.getDeepSelectionParent(r);
      i && ((_a4 = i.value.getField(n)) == null ? void 0 : _a4.markAsError(), na(i.value, e.outputType)), t.addErrorMessage((o) => {
        let s = [`Unknown field ${o.red(`\`${n}\``)}`];
        return i && s.push(`for ${o.bold(i.kind)} statement`), s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`), s.push(Vt(o)), s.join(" ");
      });
    }
    function mp(e, t) {
      var _a4;
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof D && ((_a4 = n.getField(r)) == null ? void 0 : _a4.markAsError(), Pp(n, e.arguments)), t.addErrorMessage((i) => ta(i, r, e.arguments.map((o) => o.name)));
    }
    function fp(e, t) {
      var _a4;
      let [r, n] = Kr(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (i instanceof D) {
        (_a4 = i.getDeepField(e.argumentPath)) == null ? void 0 : _a4.markAsError();
        let o = i.getDeepFieldValue(r);
        o instanceof D && ia(o, e.inputType);
      }
      t.addErrorMessage((o) => ta(o, n, e.inputType.fields.map((s) => s.name)));
    }
    function ta(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = Tp(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(Vt(e)), n.join(" ");
    }
    function gp(e, t) {
      let r;
      t.addErrorMessage((l) => (r == null ? void 0 : r.value) instanceof j && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (!(n instanceof D))
        return;
      let [i, o] = Kr(e.argumentPath), s = new Br(), a = n.getDeepFieldValue(i);
      if (a instanceof D)
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l of e.inputTypes[0].fields)
            s.addField(l.name, l.typeNames.join(" | "));
          a.addSuggestion(new Re(o, s).makeRequired());
        } else {
          let l = e.inputTypes.map(ra).join(" | ");
          a.addSuggestion(new Re(o, l).makeRequired());
        }
    }
    function ra(e) {
      return e.kind === "list" ? `${ra(e.elementType)}[]` : e.name;
    }
    function yp(e, t) {
      var _a4;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof D && ((_a4 = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _a4.markAsError()), t.addErrorMessage((i) => {
        let o = Vr("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    function hp(e, t) {
      var _a4;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof D && ((_a4 = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _a4.markAsError()), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = Vr("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    function xp(e, t) {
      var _a4;
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i;
      if (n instanceof D) {
        let s = (_a4 = n.getDeepField(e.argumentPath)) == null ? void 0 : _a4.value;
        s == null ? void 0 : s.markAsError(), s instanceof j && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    function bp(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (n instanceof D) {
        let i = n.getDeepFieldValue(e.argumentPath);
        i instanceof D && ia(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Vr("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(Vt(i)), o.join(" ");
      });
    }
    function wp(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i = [];
      if (n instanceof D) {
        let o = n.getDeepFieldValue(e.argumentPath);
        o instanceof D && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Vr("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    function na(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new Re(r.name, "true"));
    }
    function Pp(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new Re(r.name, r.typeNames.join(" | ")));
    }
    function ia(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new Re(r.name, r.typeNames.join(" | ")));
    }
    function Kr(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    function Vt({ green: e }) {
      return `Available options are listed in ${e("green")}.`;
    }
    function Vr(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    var Ep = 3;
    function Tp(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, ea.default)(e, i);
        o > Ep || o < r && (r = o, n = i);
      }
      return n;
    }
    function Ur({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o }) {
      let s = _r(e);
      for (let p of t)
        jr(p, s);
      let a = r === "pretty" ? cs : Or, l = s.renderAllMessages(a), u = new at(0, { colors: a }).write(s).toString(), c = gt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
      throw new te(c, { clientVersion: o });
    }
    var vp = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    function oa({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l }) {
      let u = new yt({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l });
      return { modelName: e, action: vp[t], query: ii(r, u) };
    }
    function ii(_a4 = {}, n) {
      var _b2 = _a4, { select: e, include: t } = _b2, r = __objRest(_b2, ["select", "include"]);
      return { arguments: aa(r, n), selection: Cp(e, t, n) };
    }
    function Cp(e, t, r) {
      return e && t && r.throwValidationError({ kind: "IncludeAndSelect", selectionPath: r.getSelectionPath() }), e ? Sp(e, r) : Mp(r, t);
    }
    function Mp(e, t) {
      let r = {};
      return e.model && !e.isRawAction() && (r.$composites = true, r.$scalars = true), t && Ap(r, t, e), r;
    }
    function Ap(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        let o = r.findField(n);
        o && (o == null ? void 0 : o.kind) !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), i === true ? e[n] = true : typeof i == "object" && (e[n] = ii(i, r.nestSelection(n)));
      }
    }
    function Sp(e, t) {
      let r = {}, n = t.getComputedFields(), i = Qs(e, n);
      for (let [o, s] of Object.entries(i)) {
        let a = t.findField(o);
        (n == null ? void 0 : n[o]) && !a || (s === true ? r[o] = true : typeof s == "object" && (r[o] = ii(s, t.nestSelection(o))));
      }
      return r;
    }
    function sa(e, t) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (lt(e)) {
        if (Er(e))
          return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (dt(e))
        return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e))
        return Rp(e, t);
      if (ArrayBuffer.isView(e))
        return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
      if (Fp(e))
        return e.values;
      if (pt(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Ae) {
        if (e !== Pr.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (Op(e))
        return e.toJSON();
      if (typeof e == "object")
        return aa(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function aa(e, t) {
      if (e.$type)
        return { $type: "Json", value: JSON.stringify(e) };
      let r = {};
      for (let n in e) {
        let i = e[n];
        i !== void 0 && (r[n] = sa(i, t.nestArgument(n)));
      }
      return r;
    }
    function Rp(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = e[n];
        i !== void 0 && r.push(sa(i, t.nestArgument(String(n))));
      }
      return r;
    }
    function Fp(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function Op(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    var yt = class {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
      }
      throwValidationError(t) {
        var _a4;
        Ur({ errors: [t], originalMethod: this.params.originalMethod, args: (_a4 = this.params.rootArgs) != null ? _a4 : {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.model))
          return { name: this.params.modelName, fields: this.model.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      getComputedFields() {
        if (!!this.params.modelName)
          return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        var _a4;
        return (_a4 = this.model) == null ? void 0 : _a4.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = (r == null ? void 0 : r.kind) === "object" ? r.type : void 0;
        return new yt(__spreadProps(__spreadValues({}, this.params), { modelName: n, selectionPath: this.params.selectionPath.concat(t) }));
      }
      nestArgument(t) {
        return new yt(__spreadProps(__spreadValues({}, this.params), { argumentPath: this.params.argumentPath.concat(t) }));
      }
    };
    var la = (e) => ({ command: e });
    var ua = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
    function Ut(e) {
      try {
        return ca(e, "fast");
      } catch (e2) {
        return ca(e, "slow");
      }
    }
    function ca(e, t) {
      return JSON.stringify(e.map((r) => kp(r, t)));
    }
    function kp(e, t) {
      return typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : lt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : we.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : Dp(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? da(e) : e;
    }
    function Dp(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function da(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(pa);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = pa(e[r]);
      return t;
    }
    function pa(e) {
      return typeof e == "bigint" ? e.toString() : da(e);
    }
    var _p = /^(\s*alter\s)/i;
    var ma = N("prisma:client");
    function oi(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && _p.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var si = (e, t) => (r) => {
      let n = "", i;
      if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: Ut(s || []), __prismaRawParameters__: true };
      } else
        switch (e) {
          case "sqlite":
          case "mysql": {
            n = r.sql, i = { values: Ut(r.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql": {
            n = r.text, i = { values: Ut(r.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            n = ua(r), i = { values: Ut(r.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${e} provider does not support ${t}`);
        }
      return (i == null ? void 0 : i.values) ? ma(`prisma.${t}(${n}, ${i.values})`) : ma(`prisma.${t}(${n})`), { query: n, parameters: i };
    };
    var fa = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new U(t, r);
    } };
    var ga = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function ai(e) {
      return function(r) {
        let n, i = (o = e) => {
          try {
            return o === void 0 || (o == null ? void 0 : o.kind) === "itx" ? n != null ? n : n = ya(r(o)) : ya(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        };
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function ya(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    var ha = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, createEngineSpan() {
      return __async(this, null, function* () {
      });
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var li = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      createEngineSpan(t) {
        return this.getGlobalTracingHelper().createEngineSpan(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        var _a4, _b2;
        return (_b2 = (_a4 = globalThis.PRISMA_INSTRUMENTATION) == null ? void 0 : _a4.helper) != null ? _b2 : ha;
      }
    };
    function xa(e) {
      return e.includes("tracing") ? new li() : ha;
    }
    function ba(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i == null ? void 0 : i(n);
      } };
    }
    function wa(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    var Ip = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var Pa = Ip;
    function Ta(e, t, r) {
      let n = Ea(e, r), i = Ea(t, r), o = Object.values(i).map((a) => a[a.length - 1]), s = Object.keys(i);
      return Object.entries(n).forEach(([a, l]) => {
        s.includes(a) || o.push(l[l.length - 1]);
      }), o;
    }
    var Ea = (e, t) => e.reduce((r, n) => {
      let i = t(n);
      return r[i] || (r[i] = []), r[i].push(n), r;
    }, {});
    var Qr = class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    var Ca = A(On());
    function Jr(e) {
      return typeof e.batchRequestIdx == "number";
    }
    function Gr(e) {
      return e === null ? e : Array.isArray(e) ? e.map(Gr) : typeof e == "object" ? Np(e) ? Lp(e) : ot(e, Gr) : e;
    }
    function Np(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function Lp({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return Buffer.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new we(t);
        case "Json":
          return JSON.parse(t);
        default:
          Je(t, "Unknown tagged value");
      }
    }
    function va(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
        return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(ui(e.query.arguments)), t.push(ui(e.query.selection)), t.join("");
    }
    function ui(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${ui(n)})` : r;
      }).join(" ")})`;
    }
    var $p = { aggregate: false, aggregateRaw: false, createMany: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function ci(e) {
      return $p[e];
    }
    var Wr = class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error)
              for (let i = 0; i < r.length; i++)
                r[i].reject(n);
            else
              for (let i = 0; i < r.length; i++) {
                let o = n[i];
                o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
              }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++)
              r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    var qp = N("prisma:client:request_handler");
    var Hr = class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new Wr({ batchLoader: js((_0) => __async(this, [_0], function* ({ requests: n, customDataProxyFetch: i }) {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => ci(p.protocolQuery.action));
          return (yield this.client._engine.requestBatch(a, { traceparent: l, transaction: jp(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
            if (p instanceof Error)
              return p;
            try {
              return this.mapQueryEngineResult(n[d], p);
            } catch (g) {
              return g;
            }
          });
        })), singleLoader: (n) => __async(this, null, function* () {
          var _a4;
          let i = ((_a4 = n.transaction) == null ? void 0 : _a4.kind) === "itx" ? Ma(n.transaction) : void 0, o = yield this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: ci(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }), batchBy: (n) => {
          var _a4;
          return ((_a4 = n.transaction) == null ? void 0 : _a4.id) ? `transaction-${n.transaction.id}` : va(n.protocolQuery);
        }, batchOrder(n, i) {
          var _a4, _b2;
          return ((_a4 = n.transaction) == null ? void 0 : _a4.kind) === "batch" && ((_b2 = i.transaction) == null ? void 0 : _b2.kind) === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      request(t) {
        return __async(this, null, function* () {
          try {
            return yield this.dataloader.request(t);
          } catch (r) {
            let { clientMethod: n, callsite: i, transaction: o, args: s } = t;
            this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s });
          }
        });
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n == null ? void 0 : n.data, o = n == null ? void 0 : n.elapsed, s = this.unpack(i, t, r);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o }) {
        if (qp(t), Bp(t, i) || t instanceof Ce)
          throw t;
        if (t instanceof H && Kp(t)) {
          let a = Aa(t.meta);
          Ur({ args: o, errors: [a], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion });
        }
        let s = t.message;
        throw n && (s = gt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: s })), s = this.sanitizeMessage(s), t.code ? new H(s, { code: t.code, clientVersion: this.client._clientVersion, meta: t.meta, batchRequestIdx: t.batchRequestIdx }) : t.isPanic ? new ae(s, this.client._clientVersion) : t instanceof z ? new z(s, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx }) : t instanceof _ ? new _(s, this.client._clientVersion) : t instanceof ae ? new ae(s, this.client._clientVersion) : (t.clientVersion = this.client._clientVersion, t);
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Ca.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t))
          return t;
        let i = Object.values(t)[0], o = r.filter((a) => a !== "select" && a !== "include"), s = Gr(Xn(i, o));
        return n ? n(s) : s;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function jp(e) {
      if (!!e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: Ma(e) };
        Je(e, "Unknown transaction kind");
      }
    }
    function Ma(e) {
      return { id: e.id, payload: e.payload };
    }
    function Bp(e, t) {
      return Jr(e) && (t == null ? void 0 : t.kind) === "batch" && e.batchRequestIdx !== t.index;
    }
    function Kp(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function Aa(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(Aa) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return __spreadProps(__spreadValues({}, e), { selectionPath: t });
      }
      return e;
    }
    var Sa = "5.1.1";
    var Ra = Sa;
    function Fa(e) {
      return e.map((t) => {
        let r = {};
        for (let n of Object.keys(t))
          r[n] = Oa(t[n]);
        return r;
      });
    }
    function Oa({ prisma__type: e, prisma__value: t }) {
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return Buffer.from(t, "base64");
        case "decimal":
          return new we(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "array":
          return t.map(Oa);
        default:
          return t;
      }
    }
    var Ia = A(ni());
    var B = class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    ee(B, "PrismaClientConstructorValidationError");
    var ka = ["datasources", "errorFormat", "log", "__internal"];
    var Da = ["pretty", "colorless", "minimal"];
    var _a = ["info", "query", "warn", "error"];
    var Up = { datasources: (e, t) => {
      if (!!e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new B(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = ht(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new B(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new B(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new B(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new B(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, errorFormat: (e) => {
      if (!!e) {
        if (typeof e != "string")
          throw new B(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!Da.includes(e)) {
          let t = ht(e, Da);
          throw new B(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new B(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !_a.includes(r)) {
          let n = ht(r, _a);
          throw new B(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = ht(i, o);
            throw new B(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i])
              n[i](o);
            else
              throw new B(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object")
        throw new B(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = ht(r, t);
          throw new B(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    } };
    function Na(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!ka.includes(r)) {
          let i = ht(r, ka);
          throw new B(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Up[r](n, t);
      }
    }
    function ht(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = Qp(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    function Qp(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((i) => ({ value: i, distance: (0, Ia.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    function La(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, l = (u) => {
          o || (o = true, r(u));
        };
        for (let u = 0; u < e.length; u++)
          e[u].then((c) => {
            n[u] = c, a();
          }, (c) => {
            if (!Jr(c)) {
              l(c);
              return;
            }
            c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
          });
      });
    }
    var Te = N("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Jp = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var Gp = Symbol.for("prisma.client.transaction.id");
    var Wp = { id: 0, nextId() {
      return ++this.id;
    } };
    function Ka(e) {
      class t {
        constructor(n) {
          var _a4, _b2, _c2, _d, _e2, _f, _g, _h, _i2;
          this._middlewares = new Qr();
          this._createPrismaPromise = ai();
          this.$extends = ks;
          Ws(e), n && Na(n, e.datasourceNames);
          let i = new ja.EventEmitter().on("error", () => {
          });
          this._extensions = Be.empty(), this._previewFeatures = (_b2 = (_a4 = e.generator) == null ? void 0 : _a4.previewFeatures) != null ? _b2 : [], this._clientVersion = (_c2 = e.clientVersion) != null ? _c2 : Ra, this._activeProvider = e.activeProvider, this._dataProxy = e.dataProxy, this._tracingHelper = xa(this._previewFeatures), this._clientEngineType = Pn(e.generator);
          let o = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Qt.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Qt.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s = Ct(o, { conflictCheck: "none" });
          try {
            let a = n != null ? n : {}, l = (_d = a.__internal) != null ? _d : {}, u = l.debug === true;
            u && N.enable("prisma:client");
            let c = Qt.default.resolve(e.dirname, e.relativePath);
            Ba.default.existsSync(c) || (c = e.dirname), Te("dirname", e.dirname), Te("relativePath", e.relativePath), Te("cwd", c);
            let p = a.datasources || {}, d = Object.entries(p).filter(([f, b]) => b && b.url).map(([f, { url: b }]) => ({ name: f, url: b })), g = Ta([], d, (f) => f.name), y = l.engine || {};
            if (a.errorFormat ? this._errorFormat = a.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: c, dirname: e.dirname, enableDebugLogs: u, allowTriggerPanic: y.allowTriggerPanic, datamodelPath: Qt.default.join(e.dirname, (_e2 = e.filename) != null ? _e2 : "schema.prisma"), prismaPath: (_f = y.binaryPath) != null ? _f : void 0, engineEndpoint: y.endpoint, datasources: g, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: a.log && wa(a.log), logQueries: a.log && Boolean(typeof a.log == "string" ? a.log === "query" : a.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: (_i2 = (_h = s == null ? void 0 : s.parsed) != null ? _h : (_g = e.injectableEdgeEnv) == null ? void 0 : _g.parsed) != null ? _i2 : {}, flags: [], clientVersion: e.clientVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, logEmitter: i, isBundled: e.isBundled }, Te("clientVersion", e.clientVersion), Te("clientEngineType", this._dataProxy ? "dataproxy" : this._clientEngineType), this._dataProxy && Te("using Data Proxy with Node.js runtime"), this._engine = this.getEngine(), this._fetcher = new Hr(this, i), a.log)
              for (let f of a.log) {
                let b = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
                b && this.$on(b, (E) => {
                  var _a5;
                  St.log(`${(_a5 = St.tags[b]) != null ? _a5 : ""}`, E.message || E.query);
                });
              }
            this._metrics = new st(this._engine);
          } catch (a) {
            throw a.clientVersion = this._clientVersion, a;
          }
          return this._appliedParent = Bt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        getEngine() {
          if (this._dataProxy, this._clientEngineType === "library")
            return new Dt(this._engineConfig);
          throw this._clientEngineType, "binary", new te("Invalid client engine type, please use `library` or `binary`", { clientVersion: this._clientVersion });
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.on("beforeExit", i) : this._engine.on(n, (o) => {
            var _a4, _b2, _c2, _d;
            let s = o.fields;
            return i(n === "query" ? { timestamp: o.timestamp, query: (_a4 = s == null ? void 0 : s.query) != null ? _a4 : o.query, params: (_b2 = s == null ? void 0 : s.params) != null ? _b2 : o.params, duration: (_c2 = s == null ? void 0 : s.duration_ms) != null ? _c2 : o.duration, target: o.target } : { timestamp: o.timestamp, message: (_d = s == null ? void 0 : s.message) != null ? _d : o.message, target: o.target });
          });
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        _runDisconnect() {
          return __async(this, null, function* () {
            yield this._engine.stop(), delete this._connectionPromise, this._engine = this.getEngine(), delete this._disconnectionPromise;
          });
        }
        $disconnect() {
          return __async(this, null, function* () {
            try {
              yield this._engine.stop();
            } catch (n) {
              throw n.clientVersion = this._clientVersion, n;
            } finally {
              ki();
            }
          });
        }
        $executeRawInternal(n, i, o, s) {
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: si(this._activeProvider, i), callsite: je(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = $a(n, i);
              return oi(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new te("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (oi(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new te(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: la, callsite: je(this._errorFormat), transaction: i }));
        }
        $queryRawInternal(n, i, o, s) {
          return __async(this, null, function* () {
            return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: si(this._activeProvider, i), callsite: je(this._errorFormat), dataPath: [], middlewareArgsMapper: s }).then(Fa);
          });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(o, "$queryRaw", ...$a(n, i));
            throw new te("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Wp.nextId(), s = ba(n.length), a = n.map((l, u) => {
            var _a4, _b2;
            if ((l == null ? void 0 : l[Symbol.toStringTag]) !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = i == null ? void 0 : i.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
            return (_b2 = (_a4 = l.requestTransaction) == null ? void 0 : _a4.call(l, p)) != null ? _b2 : l;
          });
          return La(a);
        }
        _transactionWithCallback(_0) {
          return __async(this, arguments, function* ({ callback: n, options: i }) {
            let o = { traceparent: this._tracingHelper.getTraceParent() }, s = yield this._engine.transaction("start", o, i), a;
            try {
              let l = __spreadValues({ kind: "itx" }, s);
              a = yield n(this._createItxClient(l)), yield this._engine.transaction("commit", o, s);
            } catch (l) {
              throw yield this._engine.transaction("rollback", o, s).catch(() => {
              }), l;
            }
            return a;
          });
        }
        _createItxClient(n) {
          return Bt(xe(Lr(this), [re("_appliedParent", () => this._appliedParent._createItxClient(n)), re("_createPrismaPromise", () => ai(n)), re(Gp, () => n.id), Ot(Pa)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          var _a4;
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = (_a4 = n.middlewareArgsMapper) != null ? _a4 : Jp, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: Boolean(n.transaction), action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: `${o.model}.${o.action}` } } }, a = -1, l = (u) => __async(this, null, function* () {
            let c = this._middlewares.get(++a);
            if (c)
              return this._tracingHelper.runInChildSpan(s.middleware, (b) => c(u, (E) => (b == null ? void 0 : b.end(), l(E))));
            let _a5 = u, { runInTransaction: p, args: d } = _a5, g = __objRest(_a5, ["runInTransaction", "args"]), y = __spreadValues(__spreadValues({}, n), g);
            d && (y.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== void 0 && p === false && delete y.transaction;
            let f = yield qs(this, y);
            return y.model ? Is({ result: f, modelName: y.model, args: y.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel }) : f;
          });
          return this._tracingHelper.runInChildSpan(s.operation, () => new qa.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
        }
        _executeRequest(_0) {
          return __async(this, arguments, function* ({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: g }) {
            try {
              n = u ? u(n) : n;
              let y = { name: "serialize" }, f = this._tracingHelper.runInChildSpan(y, () => oa({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion }));
              return N.enabled("prisma:client") && (Te("Prisma Client call:"), Te(`prisma.${i}(${fs(n)})`), Te("Generated request:"), Te(JSON.stringify(f, null, 2) + `
`)), (c == null ? void 0 : c.kind) === "batch" && (yield c.lock), this._fetcher.request({ protocolQuery: f, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), customDataProxyFetch: g });
            } catch (y) {
              throw y.clientVersion = this._clientVersion, y;
            }
          });
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new te("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          var _a4;
          return !!((_a4 = this._engineConfig.previewFeatures) == null ? void 0 : _a4.includes(n));
        }
      }
      return t;
    }
    function $a(e, t) {
      return Hp(e) ? [new U(e, t), fa] : [e, ga];
    }
    function Hp(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    var zp = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Va(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!zp.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    function Ua(e) {
      Ct(e, { conflictCheck: "warn" });
    }
  }
});

// prisma/databases/main/index.js
var require_main = __commonJS({
  "prisma/databases/main/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2
    } = require_library2();
    var Prisma = {};
    exports2.Prisma = Prisma;
    exports2.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.1.1",
      engine: "6a3747c37ff169c90047725a05a6ef02e32ac97e"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    var path = require("path");
    exports2.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports2.Prisma.Pedidos_vendaScalarFieldEnum = {
      id: "id",
      numero: "numero",
      vendedor_id: "vendedor_id",
      vendedor_nome: "vendedor_nome",
      vendedor_id_sirius: "vendedor_id_sirius",
      cliente_id: "cliente_id",
      cliente_nome: "cliente_nome",
      cliente_id_sirius: "cliente_id_sirius",
      usuario_id: "usuario_id",
      desconto: "desconto",
      valor_bruto: "valor_bruto",
      valor_liquido: "valor_liquido",
      forma_pagamento: "forma_pagamento",
      pagamento: "pagamento",
      troco: "troco",
      status: "status",
      cpf_cnpj: "cpf_cnpj",
      observacoes: "observacoes",
      data_criacao: "data_criacao",
      cliente_contato: "cliente_contato",
      data_realizacao: "data_realizacao",
      data_sincronizacao: "data_sincronizacao",
      condicao_pagamento_id: "condicao_pagamento_id",
      entrega_cep: "entrega_cep",
      entrega_logradouro: "entrega_logradouro",
      entrega_numero: "entrega_numero",
      entrega_complemento: "entrega_complemento",
      entrega_bairro: "entrega_bairro",
      entrega_cidade: "entrega_cidade",
      entrega_uf: "entrega_uf"
    };
    exports2.Prisma.Pedidos_venda_itensScalarFieldEnum = {
      id: "id",
      pedido_id: "pedido_id",
      produto_id: "produto_id",
      produto_sirius_id: "produto_sirius_id",
      descricao: "descricao",
      unidade: "unidade",
      quantidade: "quantidade",
      valor_unitario: "valor_unitario",
      valor_total: "valor_total",
      ean: "ean",
      codigo: "codigo"
    };
    exports2.Prisma.Produtos_movimentacoesScalarFieldEnum = {
      id: "id",
      pedido_venda_id: "pedido_venda_id",
      produto_id: "produto_id",
      saldo_anterior: "saldo_anterior",
      saldo_atual: "saldo_atual",
      quantidade: "quantidade",
      tipo_movimentacao: "tipo_movimentacao",
      data_hora: "data_hora",
      pedidos_vendaId: "pedidos_vendaId"
    };
    exports2.Prisma.CertificadoScalarFieldEnum = {
      id: "id",
      senhaCert: "senhaCert",
      serieCert: "serieCert",
      nomeCert: "nomeCert",
      pathCert: "pathCert"
    };
    exports2.Prisma.ClientesScalarFieldEnum = {
      id: "id",
      id_sirius: "id_sirius",
      status: "status",
      dataFoiCadastrado: "dataFoiCadastrado",
      dataUltimaAtualizacao: "dataUltimaAtualizacao",
      razaoSocial: "razaoSocial",
      fantasia: "fantasia",
      cpf: "cpf",
      cnpj: "cnpj",
      idEstrangeiro: "idEstrangeiro",
      indIE: "indIE",
      inscEstadual: "inscEstadual",
      inscMunicipal: "inscMunicipal",
      tipoCliente: "tipoCliente",
      exclusivo: "exclusivo",
      vendedor_id: "vendedor_id",
      vendedor_id_sirius: "vendedor_id_sirius",
      vendedor_nome: "vendedor_nome",
      lista_preco_id: "lista_preco_id",
      lista_preco_nome: "lista_preco_nome",
      condicao_pagamento_id: "condicao_pagamento_id",
      contato: "contato",
      contato_nome: "contato_nome"
    };
    exports2.Prisma.Clientes_x_produtosScalarFieldEnum = {
      id: "id",
      valor: "valor",
      cliente_id: "cliente_id",
      cliente_id_sirius: "cliente_id_sirius",
      produto_id: "produto_id",
      produto_id_sirius: "produto_id_sirius",
      produto_cod: "produto_cod"
    };
    exports2.Prisma.Condicoes_pagamentoScalarFieldEnum = {
      id: "id",
      id_sirius: "id_sirius",
      descricao: "descricao"
    };
    exports2.Prisma.ContatosScalarFieldEnum = {
      id: "id",
      contato: "contato",
      tipoContato: "tipoContato",
      cliente_id: "cliente_id"
    };
    exports2.Prisma.DocreferenciadoScalarFieldEnum = {
      idDocReferenciado: "idDocReferenciado",
      notaFiscal_id: "notaFiscal_id",
      tipoDoc: "tipoDoc",
      chave: "chave"
    };
    exports2.Prisma.EnderecosScalarFieldEnum = {
      id: "id",
      cep: "cep",
      logradouro: "logradouro",
      numero: "numero",
      complemento: "complemento",
      bairro: "bairro",
      cidade: "cidade",
      codMun: "codMun",
      codUF: "codUF",
      uf: "uf",
      cliente_id: "cliente_id",
      tipoEndereco: "tipoEndereco",
      status: "status"
    };
    exports2.Prisma.FornecedoresScalarFieldEnum = {
      id: "id",
      fantasia: "fantasia",
      razaoSocial: "razaoSocial",
      status: "status",
      cpfCnpj: "cpfCnpj",
      tipo: "tipo",
      inscEstadual: "inscEstadual",
      cep: "cep",
      logradouro: "logradouro",
      numero: "numero",
      complemento: "complemento",
      bairro: "bairro",
      cidade: "cidade",
      uf: "uf",
      email: "email",
      celular: "celular",
      telefone: "telefone",
      fax: "fax",
      pessoaContato: "pessoaContato",
      observacoes: "observacoes"
    };
    exports2.Prisma.Listas_precosScalarFieldEnum = {
      id: "id",
      descricao: "descricao",
      id_sirius: "id_sirius"
    };
    exports2.Prisma.Listas_precos_x_produtosScalarFieldEnum = {
      id: "id",
      lista_id: "lista_id",
      produto_id: "produto_id",
      produto_desc: "produto_desc",
      valor: "valor",
      id_sirius: "id_sirius"
    };
    exports2.Prisma.NfeconfigScalarFieldEnum = {
      idnfeconfig: "idnfeconfig",
      tpAmb: "tpAmb",
      tpImp: "tpImp"
    };
    exports2.Prisma.NotafiscalScalarFieldEnum = {
      id: "id",
      versao: "versao",
      chave: "chave",
      status: "status",
      cUf: "cUf",
      cNf: "cNf",
      natOp: "natOp",
      modelo: "modelo",
      serie: "serie",
      nNf: "nNf",
      dhEmi: "dhEmi",
      tpNf: "tpNf",
      idDest: "idDest",
      cMunFG: "cMunFG",
      tpImp: "tpImp",
      tpEmis: "tpEmis",
      cDV: "cDV",
      tpAmb: "tpAmb",
      finNfe: "finNfe",
      indFinal: "indFinal",
      indPres: "indPres",
      procEmi: "procEmi",
      verProc: "verProc",
      vBC: "vBC",
      vICMS: "vICMS",
      vICMSDeson: "vICMSDeson",
      vFCP: "vFCP",
      vBCST: "vBCST",
      vST: "vST",
      vFCPST: "vFCPST",
      vFCPSTRet: "vFCPSTRet",
      vProd: "vProd",
      vFrete: "vFrete",
      vDesc: "vDesc",
      vII: "vII",
      vIPI: "vIPI",
      vIPIDevol: "vIPIDevol",
      vPIS: "vPIS",
      vCOFINS: "vCOFINS",
      vOutro: "vOutro",
      vNF: "vNF",
      vTotTrib: "vTotTrib",
      modFrete: "modFrete",
      emitCnpjcpf: "emitCnpjcpf",
      emitxNome: "emitxNome",
      enderEmitxLgr: "enderEmitxLgr",
      enderEmitNro: "enderEmitNro",
      enderEmitxCpl: "enderEmitxCpl",
      enderEmitxBairro: "enderEmitxBairro",
      enderEmitcMun: "enderEmitcMun",
      enderEmitxMun: "enderEmitxMun",
      enderEmitUF: "enderEmitUF",
      enderEmitCEP: "enderEmitCEP",
      enderEmitFone: "enderEmitFone",
      enderEmitIE: "enderEmitIE",
      emitCrt: "emitCrt",
      destCNPJCPF: "destCNPJCPF",
      destIdEstrangeiro: "destIdEstrangeiro",
      destxNome: "destxNome",
      destIE: "destIE",
      destEmail: "destEmail",
      destFone: "destFone",
      cliente_id: "cliente_id",
      enderDestxLgr: "enderDestxLgr",
      enderDestnro: "enderDestnro",
      enderDestxCpl: "enderDestxCpl",
      enderDestxBairro: "enderDestxBairro",
      enderDestcMun: "enderDestcMun",
      enderDestxMun: "enderDestxMun",
      enderDestUF: "enderDestUF",
      enderDestCep: "enderDestCep",
      enderDestFone: "enderDestFone",
      endereco_id: "endereco_id",
      indIEDest: "indIEDest",
      emitInscEstadual: "emitInscEstadual",
      xml: "xml",
      protocolo: "protocolo",
      dhRecbto: "dhRecbto",
      infCpl: "infCpl",
      infAdFisco: "infAdFisco",
      statusCode: "statusCode",
      xMotivo: "xMotivo",
      retWS: "retWS"
    };
    exports2.Prisma.NotafiscalitemScalarFieldEnum = {
      id: "id",
      cProd: "cProd",
      cEAN: "cEAN",
      xProd: "xProd",
      ncm: "ncm",
      cest: "cest",
      cfop: "cfop",
      uCom: "uCom",
      qCom: "qCom",
      vUnCom: "vUnCom",
      vProd: "vProd",
      cEANTrib: "cEANTrib",
      uTrib: "uTrib",
      qTrib: "qTrib",
      indTotal: "indTotal",
      cst: "cst",
      modBc: "modBc",
      vBc: "vBc",
      pIcms: "pIcms",
      vIcms: "vIcms",
      pFcp: "pFcp",
      vFcp: "vFcp",
      vBCFCP: "vBCFCP",
      modBCST: "modBCST",
      vBCST: "vBCST",
      pICMSST: "pICMSST",
      vICMSST: "vICMSST",
      vBCFCPST: "vBCFCPST",
      pFCPST: "pFCPST",
      vFCPST: "vFCPST",
      pRedBC: "pRedBC",
      vICMSDeson: "vICMSDeson",
      motDesICMS: "motDesICMS",
      vBCSTRet: "vBCSTRet",
      orig: "orig",
      pST: "pST",
      vICMSSTRet: "vICMSSTRet",
      vBCFCPSTRet: "vBCFCPSTRet",
      pFCPSTRet: "pFCPSTRet",
      vFCPSTRet: "vFCPSTRet",
      pRedBCEfet: "pRedBCEfet",
      vBCEfet: "vBCEfet",
      pICMSEfet: "pICMSEfet",
      vICMSEfet: "vICMSEfet",
      pBCOp: "pBCOp",
      UFST: "UFST",
      CSOSN: "CSOSN",
      pCredSN: "pCredSN",
      vCredICMSSN: "vCredICMSSN",
      notafiscal_id: "notafiscal_id",
      vUnTrib: "vUnTrib",
      produto_id: "produto_id",
      vFrete: "vFrete",
      vOutro: "vOutro",
      vDesc: "vDesc",
      cstPIS: "cstPIS",
      vBCPIS: "vBCPIS",
      pPIS: "pPIS",
      vPIS: "vPIS",
      qBCPISProd: "qBCPISProd",
      vAliqPISProd: "vAliqPISProd",
      cstCOFINS: "cstCOFINS",
      vBCCOFINS: "vBCCOFINS",
      pCOFINS: "pCOFINS",
      vCOFINS: "vCOFINS",
      qBCCOFINSProd: "qBCCOFINSProd",
      vAliqCOFINSProd: "vAliqCOFINSProd",
      pDevol: "pDevol",
      vIPIDevol: "vIPIDevol",
      pRedBCST: "pRedBCST",
      pMVAST: "pMVAST"
    };
    exports2.Prisma.NotafiscalpagamentosScalarFieldEnum = {
      id: "id",
      indicacao: "indicacao",
      tipo: "tipo",
      valor: "valor",
      data_criacao: "data_criacao",
      data_vencimento: "data_vencimento",
      notaFiscal_id: "notaFiscal_id"
    };
    exports2.Prisma.Pedido_compra_itensScalarFieldEnum = {
      id: "id",
      produto_id: "produto_id",
      pedido_id: "pedido_id",
      unidade: "unidade",
      complemento_descricao: "complemento_descricao",
      observacoes: "observacoes",
      quantidade: "quantidade",
      valor_unitario: "valor_unitario",
      valor_total: "valor_total",
      produto_descricao: "produto_descricao"
    };
    exports2.Prisma.Pedido_compra_pagamentosScalarFieldEnum = {
      id: "id",
      pedido_id: "pedido_id",
      data_criacao: "data_criacao",
      data_vencimento: "data_vencimento",
      forma_pagamento: "forma_pagamento",
      valor: "valor"
    };
    exports2.Prisma.Pedidos_compraScalarFieldEnum = {
      id: "id",
      fornecedor_id: "fornecedor_id",
      status: "status",
      data_criacao: "data_criacao",
      data_emissao: "data_emissao",
      data_realizado: "data_realizado",
      forma_pagamento: "forma_pagamento",
      valor_total: "valor_total",
      num_pedido_venda: "num_pedido_venda",
      num_nf: "num_nf",
      descricao: "descricao",
      observacoes: "observacoes"
    };
    exports2.Prisma.Pedidos_venda_pagamentosScalarFieldEnum = {
      id: "id",
      pedido_id: "pedido_id",
      forma_pagamento: "forma_pagamento",
      valor: "valor",
      data_criacao: "data_criacao",
      data_vencimento: "data_vencimento"
    };
    exports2.Prisma.ProdutosScalarFieldEnum = {
      id: "id",
      id_sirius: "id_sirius",
      codProduto: "codProduto",
      descricao: "descricao",
      codEAN: "codEAN",
      ncm: "ncm",
      cfop: "cfop",
      unCom: "unCom",
      qtdCom: "qtdCom",
      vlrUnCom: "vlrUnCom",
      vlrProd: "vlrProd",
      codEANTrib: "codEANTrib",
      unTrib: "unTrib",
      qtdTrib: "qtdTrib",
      vlrUnTrib: "vlrUnTrib",
      saldo: "saldo",
      status: "status"
    };
    exports2.Prisma.VendedoresScalarFieldEnum = {
      id: "id",
      id_sirius: "id_sirius",
      nome: "nome",
      apelido: "apelido",
      status: "status",
      cpf: "cpf",
      cnpj: "cnpj",
      inscEstadual: "inscEstadual",
      rg: "rg",
      telefone: "telefone",
      celular: "celular",
      email: "email",
      fax: "fax",
      pessoaContato: "pessoaContato",
      cep: "cep",
      logradouro: "logradouro",
      numero: "numero",
      complemento: "complemento",
      bairro: "bairro",
      regiao: "regiao",
      cidade: "cidade",
      uf: "uf",
      departamento: "departamento",
      porcComissao: "porcComissao",
      porcDescMax: "porcDescMax",
      nomeBanco: "nomeBanco",
      numeroBanco: "numeroBanco",
      agencia: "agencia",
      digitoAgencia: "digitoAgencia",
      conta: "conta",
      digitoConta: "digitoConta",
      observacoes: "observacoes",
      idUser: "idUser"
    };
    exports2.Prisma.Vendedores_x_usuariosScalarFieldEnum = {
      id: "id",
      id_usuario: "id_usuario",
      id_vendedor: "id_vendedor",
      id_vendedor_sirius: "id_vendedor_sirius"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports2.Prisma.ModelName = {
      pedidos_venda: "pedidos_venda",
      pedidos_venda_itens: "pedidos_venda_itens",
      produtos_movimentacoes: "produtos_movimentacoes",
      certificado: "certificado",
      clientes: "clientes",
      clientes_x_produtos: "clientes_x_produtos",
      condicoes_pagamento: "condicoes_pagamento",
      contatos: "contatos",
      docreferenciado: "docreferenciado",
      enderecos: "enderecos",
      fornecedores: "fornecedores",
      listas_precos: "listas_precos",
      listas_precos_x_produtos: "listas_precos_x_produtos",
      nfeconfig: "nfeconfig",
      notafiscal: "notafiscal",
      notafiscalitem: "notafiscalitem",
      notafiscalpagamentos: "notafiscalpagamentos",
      pedido_compra_itens: "pedido_compra_itens",
      pedido_compra_pagamentos: "pedido_compra_pagamentos",
      pedidos_compra: "pedidos_compra",
      pedidos_venda_pagamentos: "pedidos_venda_pagamentos",
      produtos: "produtos",
      vendedores: "vendedores",
      vendedores_x_usuarios: "vendedores_x_usuarios"
    };
    var config2 = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "C:\\Users\\Natan\\Documents\\GitHub\\API-WEB\\prisma\\databases\\main",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          },
          {
            "fromEnvVar": null,
            "value": "debian-openssl-1.1.x"
          }
        ],
        "previewFeatures": [
          "views"
        ],
        "isCustomOutput": true
      },
      "relativeEnvPaths": {
        "rootEnvPath": "../../../.env",
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../..",
      "clientVersion": "5.1.1",
      "engineVersion": "6a3747c37ff169c90047725a05a6ef02e32ac97e",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "mysql",
      "dataProxy": false,
      "postinstall": false
    };
    var fs2 = require("fs");
    config2.dirname = __dirname;
    var _a2;
    if (!fs2.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "prisma/databases/main",
        "databases/main"
      ];
      const alternativePath = (_a2 = alternativePaths.find((altPath) => {
        return fs2.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      })) != null ? _a2 : alternativePaths[0];
      config2.dirname = path.join(process.cwd(), alternativePath);
      config2.isBundled = true;
    }
    config2.runtimeDataModel = JSON.parse('{"models":{"pedidos_venda":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"numero","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"vendedor_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"vendedor_nome","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"vendedor_id_sirius","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"cliente_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"cliente_nome","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cliente_id_sirius","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"usuario_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"desconto","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"valor_bruto","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"valor_liquido","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"forma_pagamento","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"pagamento","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"troco","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cpf_cnpj","dbName":"cpf_cnpj","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"observacoes","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"data_criacao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"cliente_contato","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"data_realizacao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"data_sincronizacao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"condicao_pagamento_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"entrega_cep","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"entrega_logradouro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"entrega_numero","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"entrega_complemento","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"entrega_bairro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"entrega_cidade","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"entrega_uf","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"itens","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"pedidos_venda_itens","relationName":"pedidos_vendaTopedidos_venda_itens","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"produtos_movimentacoes","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"produtos_movimentacoes","relationName":"pedidos_vendaToprodutos_movimentacoes","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"pedidos_venda_itens":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"pedido_id","dbName":"pedido_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"produto_id","dbName":"produto_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"produto_sirius_id","dbName":"produto_sirius_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"descricao","dbName":"descricao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unidade","dbName":"unidade","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"quantidade","dbName":"quantidade","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"valor_unitario","dbName":"valor_unitario","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"valor_total","dbName":"valor_total","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","isGenerated":false,"isUpdatedAt":false},{"name":"ean","dbName":"ean","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"codigo","dbName":"codigo","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"pedidos_venda","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"pedidos_venda","relationName":"pedidos_vendaTopedidos_venda_itens","relationFromFields":["pedido_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"produtos_movimentacoes":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"pedido_venda_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"produto_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"saldo_anterior","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"saldo_atual","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"quantidade","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"tipo_movimentacao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"data_hora","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"pedidos_vendaId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"pedidos_venda","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"pedidos_venda","relationName":"pedidos_vendaToprodutos_movimentacoes","relationFromFields":["pedidos_vendaId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"certificado":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"senhaCert","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"serieCert","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"nomeCert","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"pathCert","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"clientes":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"id_sirius","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"dataFoiCadastrado","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"dataUltimaAtualizacao","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"razaoSocial","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"fantasia","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cpf","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cnpj","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"idEstrangeiro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"indIE","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"inscEstadual","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"inscMunicipal","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tipoCliente","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"exclusivo","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"vendedor_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":"0","isGenerated":false,"isUpdatedAt":false},{"name":"vendedor_id_sirius","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":"0","isGenerated":false,"isUpdatedAt":false},{"name":"vendedor_nome","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"lista_preco_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":"0","isGenerated":false,"isUpdatedAt":false},{"name":"lista_preco_nome","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"condicao_pagamento_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"contato","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"contato_nome","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"contatos","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"contatos","relationName":"clientesTocontatos","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"enderecos","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"enderecos","relationName":"clientesToenderecos","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"notafiscal","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"notafiscal","relationName":"clientesTonotafiscal","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"clientes_x_produtos":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"valor","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"cliente_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"cliente_id_sirius","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"produto_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"produto_id_sirius","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"produto_cod","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"condicoes_pagamento":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"id_sirius","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"descricao","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"contatos":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"contato","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tipoContato","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cliente_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"clientes","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"clientes","relationName":"clientesTocontatos","relationFromFields":["cliente_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"docreferenciado":{"dbName":null,"fields":[{"name":"idDocReferenciado","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"notaFiscal_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"tipoDoc","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"chave","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"notafiscal","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"notafiscal","relationName":"docreferenciadoTonotafiscal","relationFromFields":["notaFiscal_id"],"relationToFields":["id"],"relationOnDelete":"Restrict","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"enderecos":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"cep","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"logradouro","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"numero","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"complemento","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"bairro","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cidade","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"codMun","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"codUF","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"uf","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cliente_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"tipoEndereco","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"A","isGenerated":false,"isUpdatedAt":false},{"name":"clientes","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"clientes","relationName":"clientesToenderecos","relationFromFields":["cliente_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"notafiscal","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"notafiscal","relationName":"enderecosTonotafiscal","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"fornecedores":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"fantasia","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"razaoSocial","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cpfCnpj","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tipo","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"inscEstadual","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cep","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"logradouro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"numero","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"complemento","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"bairro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cidade","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"uf","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"celular","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"telefone","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"fax","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"pessoaContato","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"observacoes","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"listas_precos":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"descricao","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"id_sirius","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"listas_precos_x_produtos":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"lista_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":"0","isGenerated":false,"isUpdatedAt":false},{"name":"produto_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":"0","isGenerated":false,"isUpdatedAt":false},{"name":"produto_desc","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"valor","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Decimal","default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"id_sirius","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"nfeconfig":{"dbName":null,"fields":[{"name":"idnfeconfig","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"tpAmb","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tpImp","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"notafiscal":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"versao","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"chave","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cUf","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cNf","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"natOp","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modelo","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"serie","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"nNf","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"dhEmi","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"tpNf","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"idDest","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cMunFG","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tpImp","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tpEmis","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cDV","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tpAmb","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"finNfe","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"indFinal","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"indPres","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"procEmi","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"verProc","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"vBC","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vICMS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vICMSDeson","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vFCP","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vBCST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vFCPST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vFCPSTRet","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vProd","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vFrete","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vDesc","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vII","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vIPI","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vIPIDevol","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vPIS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vCOFINS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vOutro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vNF","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vTotTrib","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"modFrete","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"emitCnpjcpf","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"emitxNome","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderEmitxLgr","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderEmitNro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderEmitxCpl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderEmitxBairro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderEmitcMun","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderEmitxMun","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderEmitUF","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderEmitCEP","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderEmitFone","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderEmitIE","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"emitCrt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"destCNPJCPF","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"destIdEstrangeiro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"destxNome","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"destIE","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"destEmail","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"destFone","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cliente_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"enderDestxLgr","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderDestnro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderDestxCpl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderDestxBairro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderDestcMun","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderDestxMun","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderDestUF","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderDestCep","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"enderDestFone","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"endereco_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"indIEDest","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"emitInscEstadual","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"xml","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Bytes","isGenerated":false,"isUpdatedAt":false},{"name":"protocolo","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"dhRecbto","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"infCpl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Bytes","isGenerated":false,"isUpdatedAt":false},{"name":"infAdFisco","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Bytes","isGenerated":false,"isUpdatedAt":false},{"name":"statusCode","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"xMotivo","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"retWS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Bytes","isGenerated":false,"isUpdatedAt":false},{"name":"docreferenciado","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"docreferenciado","relationName":"docreferenciadoTonotafiscal","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"clientes","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"clientes","relationName":"clientesTonotafiscal","relationFromFields":["cliente_id"],"relationToFields":["id"],"relationOnDelete":"Restrict","isGenerated":false,"isUpdatedAt":false},{"name":"enderecos","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"enderecos","relationName":"enderecosTonotafiscal","relationFromFields":["endereco_id"],"relationToFields":["id"],"relationOnDelete":"Restrict","isGenerated":false,"isUpdatedAt":false},{"name":"notafiscalpagamentos","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"notafiscalpagamentos","relationName":"notafiscalTonotafiscalpagamentos","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"notafiscalitem":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"cProd","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cEAN","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"xProd","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"ncm","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cest","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cfop","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"uCom","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"qCom","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vUnCom","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vProd","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"cEANTrib","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"uTrib","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"qTrib","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"indTotal","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cst","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"modBc","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"vBc","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pIcms","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vIcms","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pFcp","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vFcp","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vBCFCP","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"modBCST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"vBCST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pICMSST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vICMSST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vBCFCPST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pFCPST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vFCPST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pRedBC","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vICMSDeson","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"motDesICMS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"vBCSTRet","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"orig","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"pST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vICMSSTRet","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vBCFCPSTRet","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pFCPSTRet","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vFCPSTRet","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pRedBCEfet","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vBCEfet","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pICMSEfet","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vICMSEfet","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pBCOp","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"UFST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"CSOSN","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"pCredSN","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vCredICMSSN","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"notafiscal_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"vUnTrib","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"produto_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"vFrete","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vOutro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vDesc","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"cstPIS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"vBCPIS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pPIS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vPIS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"qBCPISProd","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vAliqPISProd","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"cstCOFINS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"vBCCOFINS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pCOFINS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vCOFINS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"qBCCOFINSProd","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vAliqCOFINSProd","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pDevol","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vIPIDevol","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pRedBCST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"pMVAST","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"notafiscalpagamentos":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"indicacao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tipo","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"valor","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"data_criacao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"data_vencimento","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"notaFiscal_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"notafiscal","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"notafiscal","relationName":"notafiscalTonotafiscalpagamentos","relationFromFields":["notaFiscal_id"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"pedido_compra_itens":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"produto_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"pedido_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"unidade","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"complemento_descricao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"observacoes","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"quantidade","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"valor_unitario","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"valor_total","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"produto_descricao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"pedido_compra_pagamentos":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"pedido_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"data_criacao","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"data_vencimento","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"forma_pagamento","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"valor","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"pedidos_compra":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"fornecedor_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"data_criacao","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"data_emissao","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"data_realizado","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"forma_pagamento","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"valor_total","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"num_pedido_venda","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"num_nf","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"descricao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"observacoes","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"pedidos_venda_pagamentos":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"pedido_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"forma_pagamento","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"valor","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"data_criacao","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"data_vencimento","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"produtos":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"id_sirius","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"codProduto","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"descricao","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"codEAN","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"ncm","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cfop","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unCom","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"qtdCom","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vlrUnCom","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vlrProd","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"codEANTrib","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"unTrib","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"qtdTrib","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"vlrUnTrib","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"saldo","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"vendedores":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"id_sirius","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"nome","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"apelido","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cpf","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cnpj","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"inscEstadual","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"rg","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"telefone","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"celular","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"fax","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"pessoaContato","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cep","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"logradouro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"numero","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"complemento","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"bairro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"regiao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"cidade","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"uf","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"departamento","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"porcComissao","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"porcDescMax","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Decimal","isGenerated":false,"isUpdatedAt":false},{"name":"nomeBanco","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"numeroBanco","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"agencia","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"digitoAgencia","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"conta","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"digitoConta","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"observacoes","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"idUser","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"vendedores_x_usuarios":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"BigInt","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"id_usuario","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"id_vendedor","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false},{"name":"id_vendedor_sirius","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports2.Prisma, config2.runtimeDataModel);
    var { warnEnvConflicts: warnEnvConflicts2 } = require_library2();
    warnEnvConflicts2({
      rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient = getPrismaClient2(config2);
    exports2.PrismaClient = PrismaClient;
    Object.assign(exports2, Prisma);
    path.join(__dirname, "query_engine-windows.dll.node");
    path.join(process.cwd(), "prisma/databases/main/query_engine-windows.dll.node");
    path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
    path.join(process.cwd(), "prisma/databases/main/libquery_engine-debian-openssl-1.1.x.so.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "prisma/databases/main/schema.prisma");
  }
});

// src/controllers/authController/RegisterController.ts
var RegisterController_exports = {};
__export(RegisterController_exports, {
  AuthRegisterController: () => AuthRegisterController
});
module.exports = __toCommonJS(RegisterController_exports);

// src/services/authService/RegisterService.ts
var import_bcrypt = __toESM(require("bcrypt"));
var import_crypto = require("crypto");

// src/prisma/index.ts
var import_auth = __toESM(require_auth());
var import_main = __toESM(require_main());
var prismaAuth = new import_auth.PrismaClient();
var prismaMain = new import_main.PrismaClient();

// src/services/authService/RegisterService.ts
var RegisterService = class {
  execute(_0) {
    return __async(this, arguments, function* ({
      nome,
      ultimo_nome,
      email,
      senha,
      celular,
      status,
      exclusivo,
      user_token
    }) {
      const hashPassword = yield import_bcrypt.default.hash(senha, 12);
      const existingUser = yield prismaAuth.usuarios.findFirst({ where: { email } });
      if (existingUser) {
        throw new Error("O email j\xE1 est\xE1 em uso");
      }
      const token = generateUniqueToken();
      const AuthRegister = yield prismaAuth.usuarios.create({
        data: {
          nome,
          ultimo_nome,
          email,
          senha: hashPassword,
          celular,
          status,
          exclusivo,
          user_token: token
        }
      });
      return AuthRegister;
    });
  }
};
function generateUniqueToken() {
  const uniqueToken = (0, import_crypto.randomBytes)(64).toString("hex");
  return uniqueToken;
}

// src/controllers/authController/RegisterController.ts
var AuthRegisterController = class {
  handle(req, res) {
    return __async(this, null, function* () {
      try {
        const {
          nome,
          ultimo_nome,
          email,
          senha,
          celular,
          status,
          exclusivo,
          user_token
        } = req.body;
        const authRegisterService = new RegisterService();
        const userData = yield authRegisterService.execute({
          nome,
          ultimo_nome,
          email,
          senha,
          celular,
          status,
          exclusivo,
          user_token
        });
        return res.status(201).json(userData);
      } catch (err) {
        console.error("Erro ao registrar o usu\xE1rio: " + err);
        return res.status(500).json({ erro: "Erro ao registrar o usu\xE1rio" });
      }
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthRegisterController
});
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
