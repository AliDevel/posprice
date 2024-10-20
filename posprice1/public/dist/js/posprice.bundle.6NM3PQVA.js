(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/lodash/lodash.js
  var require_lodash = __commonJS({
    "node_modules/lodash/lodash.js"(exports, module) {
      (function() {
        var undefined2;
        var VERSION = "4.17.21";
        var LARGE_ARRAY_SIZE = 200;
        var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
        var HASH_UNDEFINED = "__lodash_hash_undefined__";
        var MAX_MEMOIZE_SIZE = 500;
        var PLACEHOLDER = "__lodash_placeholder__";
        var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
        var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
        var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
        var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
        var HOT_COUNT = 800, HOT_SPAN = 16;
        var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
        var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
        var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
        var wrapFlags = [
          ["ary", WRAP_ARY_FLAG],
          ["bind", WRAP_BIND_FLAG],
          ["bindKey", WRAP_BIND_KEY_FLAG],
          ["curry", WRAP_CURRY_FLAG],
          ["curryRight", WRAP_CURRY_RIGHT_FLAG],
          ["flip", WRAP_FLIP_FLAG],
          ["partial", WRAP_PARTIAL_FLAG],
          ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
          ["rearg", WRAP_REARG_FLAG]
        ];
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
        var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
        var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
        var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
        var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
        var reTrimStart = /^\s+/;
        var reWhitespace = /\s/;
        var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
        var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
        var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
        var reEscapeChar = /\\(\\)?/g;
        var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
        var reFlags = /\w*$/;
        var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
        var reIsBinary = /^0b[01]+$/i;
        var reIsHostCtor = /^\[object .+?Constructor\]$/;
        var reIsOctal = /^0o[0-7]+$/i;
        var reIsUint = /^(?:0|[1-9]\d*)$/;
        var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
        var reNoMatch = /($^)/;
        var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
        var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
        var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
        var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
        var reApos = RegExp(rsApos, "g");
        var reComboMark = RegExp(rsCombo, "g");
        var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
        var reUnicodeWord = RegExp([
          rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
          rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
          rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
          rsUpper + "+" + rsOptContrUpper,
          rsOrdUpper,
          rsOrdLower,
          rsDigits,
          rsEmoji
        ].join("|"), "g");
        var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
        var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
        var contextProps = [
          "Array",
          "Buffer",
          "DataView",
          "Date",
          "Error",
          "Float32Array",
          "Float64Array",
          "Function",
          "Int8Array",
          "Int16Array",
          "Int32Array",
          "Map",
          "Math",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "String",
          "Symbol",
          "TypeError",
          "Uint8Array",
          "Uint8ClampedArray",
          "Uint16Array",
          "Uint32Array",
          "WeakMap",
          "_",
          "clearTimeout",
          "isFinite",
          "parseInt",
          "setTimeout"
        ];
        var templateCounter = -1;
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        var cloneableTags = {};
        cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
        cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
        var deburredLetters = {
          "\xC0": "A",
          "\xC1": "A",
          "\xC2": "A",
          "\xC3": "A",
          "\xC4": "A",
          "\xC5": "A",
          "\xE0": "a",
          "\xE1": "a",
          "\xE2": "a",
          "\xE3": "a",
          "\xE4": "a",
          "\xE5": "a",
          "\xC7": "C",
          "\xE7": "c",
          "\xD0": "D",
          "\xF0": "d",
          "\xC8": "E",
          "\xC9": "E",
          "\xCA": "E",
          "\xCB": "E",
          "\xE8": "e",
          "\xE9": "e",
          "\xEA": "e",
          "\xEB": "e",
          "\xCC": "I",
          "\xCD": "I",
          "\xCE": "I",
          "\xCF": "I",
          "\xEC": "i",
          "\xED": "i",
          "\xEE": "i",
          "\xEF": "i",
          "\xD1": "N",
          "\xF1": "n",
          "\xD2": "O",
          "\xD3": "O",
          "\xD4": "O",
          "\xD5": "O",
          "\xD6": "O",
          "\xD8": "O",
          "\xF2": "o",
          "\xF3": "o",
          "\xF4": "o",
          "\xF5": "o",
          "\xF6": "o",
          "\xF8": "o",
          "\xD9": "U",
          "\xDA": "U",
          "\xDB": "U",
          "\xDC": "U",
          "\xF9": "u",
          "\xFA": "u",
          "\xFB": "u",
          "\xFC": "u",
          "\xDD": "Y",
          "\xFD": "y",
          "\xFF": "y",
          "\xC6": "Ae",
          "\xE6": "ae",
          "\xDE": "Th",
          "\xFE": "th",
          "\xDF": "ss",
          "\u0100": "A",
          "\u0102": "A",
          "\u0104": "A",
          "\u0101": "a",
          "\u0103": "a",
          "\u0105": "a",
          "\u0106": "C",
          "\u0108": "C",
          "\u010A": "C",
          "\u010C": "C",
          "\u0107": "c",
          "\u0109": "c",
          "\u010B": "c",
          "\u010D": "c",
          "\u010E": "D",
          "\u0110": "D",
          "\u010F": "d",
          "\u0111": "d",
          "\u0112": "E",
          "\u0114": "E",
          "\u0116": "E",
          "\u0118": "E",
          "\u011A": "E",
          "\u0113": "e",
          "\u0115": "e",
          "\u0117": "e",
          "\u0119": "e",
          "\u011B": "e",
          "\u011C": "G",
          "\u011E": "G",
          "\u0120": "G",
          "\u0122": "G",
          "\u011D": "g",
          "\u011F": "g",
          "\u0121": "g",
          "\u0123": "g",
          "\u0124": "H",
          "\u0126": "H",
          "\u0125": "h",
          "\u0127": "h",
          "\u0128": "I",
          "\u012A": "I",
          "\u012C": "I",
          "\u012E": "I",
          "\u0130": "I",
          "\u0129": "i",
          "\u012B": "i",
          "\u012D": "i",
          "\u012F": "i",
          "\u0131": "i",
          "\u0134": "J",
          "\u0135": "j",
          "\u0136": "K",
          "\u0137": "k",
          "\u0138": "k",
          "\u0139": "L",
          "\u013B": "L",
          "\u013D": "L",
          "\u013F": "L",
          "\u0141": "L",
          "\u013A": "l",
          "\u013C": "l",
          "\u013E": "l",
          "\u0140": "l",
          "\u0142": "l",
          "\u0143": "N",
          "\u0145": "N",
          "\u0147": "N",
          "\u014A": "N",
          "\u0144": "n",
          "\u0146": "n",
          "\u0148": "n",
          "\u014B": "n",
          "\u014C": "O",
          "\u014E": "O",
          "\u0150": "O",
          "\u014D": "o",
          "\u014F": "o",
          "\u0151": "o",
          "\u0154": "R",
          "\u0156": "R",
          "\u0158": "R",
          "\u0155": "r",
          "\u0157": "r",
          "\u0159": "r",
          "\u015A": "S",
          "\u015C": "S",
          "\u015E": "S",
          "\u0160": "S",
          "\u015B": "s",
          "\u015D": "s",
          "\u015F": "s",
          "\u0161": "s",
          "\u0162": "T",
          "\u0164": "T",
          "\u0166": "T",
          "\u0163": "t",
          "\u0165": "t",
          "\u0167": "t",
          "\u0168": "U",
          "\u016A": "U",
          "\u016C": "U",
          "\u016E": "U",
          "\u0170": "U",
          "\u0172": "U",
          "\u0169": "u",
          "\u016B": "u",
          "\u016D": "u",
          "\u016F": "u",
          "\u0171": "u",
          "\u0173": "u",
          "\u0174": "W",
          "\u0175": "w",
          "\u0176": "Y",
          "\u0177": "y",
          "\u0178": "Y",
          "\u0179": "Z",
          "\u017B": "Z",
          "\u017D": "Z",
          "\u017A": "z",
          "\u017C": "z",
          "\u017E": "z",
          "\u0132": "IJ",
          "\u0133": "ij",
          "\u0152": "Oe",
          "\u0153": "oe",
          "\u0149": "'n",
          "\u017F": "s"
        };
        var htmlEscapes = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        };
        var htmlUnescapes = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'"
        };
        var stringEscapes = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029"
        };
        var freeParseFloat = parseFloat, freeParseInt = parseInt;
        var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
        var freeSelf = typeof self == "object" && self && self.Object === Object && self;
        var root = freeGlobal || freeSelf || Function("return this")();
        var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
        var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
        var moduleExports = freeModule && freeModule.exports === freeExports;
        var freeProcess = moduleExports && freeGlobal.process;
        var nodeUtil = function() {
          try {
            var types = freeModule && freeModule.require && freeModule.require("util").types;
            if (types) {
              return types;
            }
            return freeProcess && freeProcess.binding && freeProcess.binding("util");
          } catch (e) {
          }
        }();
        var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }
        function arrayAggregator(array, setter, iteratee, accumulator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            var value = array[index];
            setter(accumulator, value, iteratee(value), array);
          }
          return accumulator;
        }
        function arrayEach(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEachRight(array, iteratee) {
          var length = array == null ? 0 : array.length;
          while (length--) {
            if (iteratee(array[length], length, array) === false) {
              break;
            }
          }
          return array;
        }
        function arrayEvery(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (!predicate(array[index], index, array)) {
              return false;
            }
          }
          return true;
        }
        function arrayFilter(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result[resIndex++] = value;
            }
          }
          return result;
        }
        function arrayIncludes(array, value) {
          var length = array == null ? 0 : array.length;
          return !!length && baseIndexOf(array, value, 0) > -1;
        }
        function arrayIncludesWith(array, value, comparator) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (comparator(value, array[index])) {
              return true;
            }
          }
          return false;
        }
        function arrayMap(array, iteratee) {
          var index = -1, length = array == null ? 0 : array.length, result = Array(length);
          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }
        function arrayPush(array, values) {
          var index = -1, length = values.length, offset = array.length;
          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }
        function arrayReduce(array, iteratee, accumulator, initAccum) {
          var index = -1, length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[++index];
          }
          while (++index < length) {
            accumulator = iteratee(accumulator, array[index], index, array);
          }
          return accumulator;
        }
        function arrayReduceRight(array, iteratee, accumulator, initAccum) {
          var length = array == null ? 0 : array.length;
          if (initAccum && length) {
            accumulator = array[--length];
          }
          while (length--) {
            accumulator = iteratee(accumulator, array[length], length, array);
          }
          return accumulator;
        }
        function arraySome(array, predicate) {
          var index = -1, length = array == null ? 0 : array.length;
          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }
        var asciiSize = baseProperty("length");
        function asciiToArray(string) {
          return string.split("");
        }
        function asciiWords(string) {
          return string.match(reAsciiWord) || [];
        }
        function baseFindKey(collection, predicate, eachFunc) {
          var result;
          eachFunc(collection, function(value, key, collection2) {
            if (predicate(value, key, collection2)) {
              result = key;
              return false;
            }
          });
          return result;
        }
        function baseFindIndex(array, predicate, fromIndex, fromRight) {
          var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
          while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
              return index;
            }
          }
          return -1;
        }
        function baseIndexOf(array, value, fromIndex) {
          return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
        }
        function baseIndexOfWith(array, value, fromIndex, comparator) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (comparator(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function baseIsNaN(value) {
          return value !== value;
        }
        function baseMean(array, iteratee) {
          var length = array == null ? 0 : array.length;
          return length ? baseSum(array, iteratee) / length : NAN;
        }
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined2 : object[key];
          };
        }
        function basePropertyOf(object) {
          return function(key) {
            return object == null ? undefined2 : object[key];
          };
        }
        function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
          eachFunc(collection, function(value, index, collection2) {
            accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
          });
          return accumulator;
        }
        function baseSortBy(array, comparer) {
          var length = array.length;
          array.sort(comparer);
          while (length--) {
            array[length] = array[length].value;
          }
          return array;
        }
        function baseSum(array, iteratee) {
          var result, index = -1, length = array.length;
          while (++index < length) {
            var current = iteratee(array[index]);
            if (current !== undefined2) {
              result = result === undefined2 ? current : result + current;
            }
          }
          return result;
        }
        function baseTimes(n, iteratee) {
          var index = -1, result = Array(n);
          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }
        function baseToPairs(object, props) {
          return arrayMap(props, function(key) {
            return [key, object[key]];
          });
        }
        function baseTrim(string) {
          return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
        }
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }
        function baseValues(object, props) {
          return arrayMap(props, function(key) {
            return object[key];
          });
        }
        function cacheHas(cache, key) {
          return cache.has(key);
        }
        function charsStartIndex(strSymbols, chrSymbols) {
          var index = -1, length = strSymbols.length;
          while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function charsEndIndex(strSymbols, chrSymbols) {
          var index = strSymbols.length;
          while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
          }
          return index;
        }
        function countHolders(array, placeholder) {
          var length = array.length, result = 0;
          while (length--) {
            if (array[length] === placeholder) {
              ++result;
            }
          }
          return result;
        }
        var deburrLetter = basePropertyOf(deburredLetters);
        var escapeHtmlChar = basePropertyOf(htmlEscapes);
        function escapeStringChar(chr) {
          return "\\" + stringEscapes[chr];
        }
        function getValue(object, key) {
          return object == null ? undefined2 : object[key];
        }
        function hasUnicode(string) {
          return reHasUnicode.test(string);
        }
        function hasUnicodeWord(string) {
          return reHasUnicodeWord.test(string);
        }
        function iteratorToArray(iterator) {
          var data, result = [];
          while (!(data = iterator.next()).done) {
            result.push(data.value);
          }
          return result;
        }
        function mapToArray(map) {
          var index = -1, result = Array(map.size);
          map.forEach(function(value, key) {
            result[++index] = [key, value];
          });
          return result;
        }
        function overArg(func, transform) {
          return function(arg) {
            return func(transform(arg));
          };
        }
        function replaceHolders(array, placeholder) {
          var index = -1, length = array.length, resIndex = 0, result = [];
          while (++index < length) {
            var value = array[index];
            if (value === placeholder || value === PLACEHOLDER) {
              array[index] = PLACEHOLDER;
              result[resIndex++] = index;
            }
          }
          return result;
        }
        function setToArray(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = value;
          });
          return result;
        }
        function setToPairs(set) {
          var index = -1, result = Array(set.size);
          set.forEach(function(value) {
            result[++index] = [value, value];
          });
          return result;
        }
        function strictIndexOf(array, value, fromIndex) {
          var index = fromIndex - 1, length = array.length;
          while (++index < length) {
            if (array[index] === value) {
              return index;
            }
          }
          return -1;
        }
        function strictLastIndexOf(array, value, fromIndex) {
          var index = fromIndex + 1;
          while (index--) {
            if (array[index] === value) {
              return index;
            }
          }
          return index;
        }
        function stringSize(string) {
          return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
        }
        function stringToArray(string) {
          return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
        }
        function trimmedEndIndex(string) {
          var index = string.length;
          while (index-- && reWhitespace.test(string.charAt(index))) {
          }
          return index;
        }
        var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
        function unicodeSize(string) {
          var result = reUnicode.lastIndex = 0;
          while (reUnicode.test(string)) {
            ++result;
          }
          return result;
        }
        function unicodeToArray(string) {
          return string.match(reUnicode) || [];
        }
        function unicodeWords(string) {
          return string.match(reUnicodeWord) || [];
        }
        var runInContext = function runInContext2(context) {
          context = context == null ? root : _2.defaults(root.Object(), context, _2.pick(root, contextProps));
          var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String = context.String, TypeError2 = context.TypeError;
          var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
          var coreJsData = context["__core-js_shared__"];
          var funcToString = funcProto.toString;
          var hasOwnProperty = objectProto.hasOwnProperty;
          var idCounter = 0;
          var maskSrcKey = function() {
            var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
            return uid ? "Symbol(src)_1." + uid : "";
          }();
          var nativeObjectToString = objectProto.toString;
          var objectCtorString = funcToString.call(Object2);
          var oldDash = root._;
          var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
          var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined2, symIterator = Symbol ? Symbol.iterator : undefined2, symToStringTag = Symbol ? Symbol.toStringTag : undefined2;
          var defineProperty = function() {
            try {
              var func = getNative(Object2, "defineProperty");
              func({}, "", {});
              return func;
            } catch (e) {
            }
          }();
          var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
          var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
          var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
          var metaMap = WeakMap && new WeakMap();
          var realNames = {};
          var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
          var symbolProto = Symbol ? Symbol.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
          function lodash(value) {
            if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
              if (value instanceof LodashWrapper) {
                return value;
              }
              if (hasOwnProperty.call(value, "__wrapped__")) {
                return wrapperClone(value);
              }
            }
            return new LodashWrapper(value);
          }
          var baseCreate = function() {
            function object() {
            }
            return function(proto) {
              if (!isObject(proto)) {
                return {};
              }
              if (objectCreate) {
                return objectCreate(proto);
              }
              object.prototype = proto;
              var result2 = new object();
              object.prototype = undefined2;
              return result2;
            };
          }();
          function baseLodash() {
          }
          function LodashWrapper(value, chainAll) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__chain__ = !!chainAll;
            this.__index__ = 0;
            this.__values__ = undefined2;
          }
          lodash.templateSettings = {
            "escape": reEscape,
            "evaluate": reEvaluate,
            "interpolate": reInterpolate,
            "variable": "",
            "imports": {
              "_": lodash
            }
          };
          lodash.prototype = baseLodash.prototype;
          lodash.prototype.constructor = lodash;
          LodashWrapper.prototype = baseCreate(baseLodash.prototype);
          LodashWrapper.prototype.constructor = LodashWrapper;
          function LazyWrapper(value) {
            this.__wrapped__ = value;
            this.__actions__ = [];
            this.__dir__ = 1;
            this.__filtered__ = false;
            this.__iteratees__ = [];
            this.__takeCount__ = MAX_ARRAY_LENGTH;
            this.__views__ = [];
          }
          function lazyClone() {
            var result2 = new LazyWrapper(this.__wrapped__);
            result2.__actions__ = copyArray(this.__actions__);
            result2.__dir__ = this.__dir__;
            result2.__filtered__ = this.__filtered__;
            result2.__iteratees__ = copyArray(this.__iteratees__);
            result2.__takeCount__ = this.__takeCount__;
            result2.__views__ = copyArray(this.__views__);
            return result2;
          }
          function lazyReverse() {
            if (this.__filtered__) {
              var result2 = new LazyWrapper(this);
              result2.__dir__ = -1;
              result2.__filtered__ = true;
            } else {
              result2 = this.clone();
              result2.__dir__ *= -1;
            }
            return result2;
          }
          function lazyValue() {
            var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
            if (!isArr || !isRight && arrLength == length && takeCount == length) {
              return baseWrapperValue(array, this.__actions__);
            }
            var result2 = [];
            outer:
              while (length-- && resIndex < takeCount) {
                index += dir;
                var iterIndex = -1, value = array[index];
                while (++iterIndex < iterLength) {
                  var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                  if (type == LAZY_MAP_FLAG) {
                    value = computed;
                  } else if (!computed) {
                    if (type == LAZY_FILTER_FLAG) {
                      continue outer;
                    } else {
                      break outer;
                    }
                  }
                }
                result2[resIndex++] = value;
              }
            return result2;
          }
          LazyWrapper.prototype = baseCreate(baseLodash.prototype);
          LazyWrapper.prototype.constructor = LazyWrapper;
          function Hash(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function hashClear() {
            this.__data__ = nativeCreate ? nativeCreate(null) : {};
            this.size = 0;
          }
          function hashDelete(key) {
            var result2 = this.has(key) && delete this.__data__[key];
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function hashGet(key) {
            var data = this.__data__;
            if (nativeCreate) {
              var result2 = data[key];
              return result2 === HASH_UNDEFINED ? undefined2 : result2;
            }
            return hasOwnProperty.call(data, key) ? data[key] : undefined2;
          }
          function hashHas(key) {
            var data = this.__data__;
            return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
          }
          function hashSet(key, value) {
            var data = this.__data__;
            this.size += this.has(key) ? 0 : 1;
            data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
            return this;
          }
          Hash.prototype.clear = hashClear;
          Hash.prototype["delete"] = hashDelete;
          Hash.prototype.get = hashGet;
          Hash.prototype.has = hashHas;
          Hash.prototype.set = hashSet;
          function ListCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function listCacheClear() {
            this.__data__ = [];
            this.size = 0;
          }
          function listCacheDelete(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              return false;
            }
            var lastIndex = data.length - 1;
            if (index == lastIndex) {
              data.pop();
            } else {
              splice.call(data, index, 1);
            }
            --this.size;
            return true;
          }
          function listCacheGet(key) {
            var data = this.__data__, index = assocIndexOf(data, key);
            return index < 0 ? undefined2 : data[index][1];
          }
          function listCacheHas(key) {
            return assocIndexOf(this.__data__, key) > -1;
          }
          function listCacheSet(key, value) {
            var data = this.__data__, index = assocIndexOf(data, key);
            if (index < 0) {
              ++this.size;
              data.push([key, value]);
            } else {
              data[index][1] = value;
            }
            return this;
          }
          ListCache.prototype.clear = listCacheClear;
          ListCache.prototype["delete"] = listCacheDelete;
          ListCache.prototype.get = listCacheGet;
          ListCache.prototype.has = listCacheHas;
          ListCache.prototype.set = listCacheSet;
          function MapCache(entries) {
            var index = -1, length = entries == null ? 0 : entries.length;
            this.clear();
            while (++index < length) {
              var entry = entries[index];
              this.set(entry[0], entry[1]);
            }
          }
          function mapCacheClear() {
            this.size = 0;
            this.__data__ = {
              "hash": new Hash(),
              "map": new (Map || ListCache)(),
              "string": new Hash()
            };
          }
          function mapCacheDelete(key) {
            var result2 = getMapData(this, key)["delete"](key);
            this.size -= result2 ? 1 : 0;
            return result2;
          }
          function mapCacheGet(key) {
            return getMapData(this, key).get(key);
          }
          function mapCacheHas(key) {
            return getMapData(this, key).has(key);
          }
          function mapCacheSet(key, value) {
            var data = getMapData(this, key), size2 = data.size;
            data.set(key, value);
            this.size += data.size == size2 ? 0 : 1;
            return this;
          }
          MapCache.prototype.clear = mapCacheClear;
          MapCache.prototype["delete"] = mapCacheDelete;
          MapCache.prototype.get = mapCacheGet;
          MapCache.prototype.has = mapCacheHas;
          MapCache.prototype.set = mapCacheSet;
          function SetCache(values2) {
            var index = -1, length = values2 == null ? 0 : values2.length;
            this.__data__ = new MapCache();
            while (++index < length) {
              this.add(values2[index]);
            }
          }
          function setCacheAdd(value) {
            this.__data__.set(value, HASH_UNDEFINED);
            return this;
          }
          function setCacheHas(value) {
            return this.__data__.has(value);
          }
          SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
          SetCache.prototype.has = setCacheHas;
          function Stack(entries) {
            var data = this.__data__ = new ListCache(entries);
            this.size = data.size;
          }
          function stackClear() {
            this.__data__ = new ListCache();
            this.size = 0;
          }
          function stackDelete(key) {
            var data = this.__data__, result2 = data["delete"](key);
            this.size = data.size;
            return result2;
          }
          function stackGet(key) {
            return this.__data__.get(key);
          }
          function stackHas(key) {
            return this.__data__.has(key);
          }
          function stackSet(key, value) {
            var data = this.__data__;
            if (data instanceof ListCache) {
              var pairs = data.__data__;
              if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                pairs.push([key, value]);
                this.size = ++data.size;
                return this;
              }
              data = this.__data__ = new MapCache(pairs);
            }
            data.set(key, value);
            this.size = data.size;
            return this;
          }
          Stack.prototype.clear = stackClear;
          Stack.prototype["delete"] = stackDelete;
          Stack.prototype.get = stackGet;
          Stack.prototype.has = stackHas;
          Stack.prototype.set = stackSet;
          function arrayLikeKeys(value, inherited) {
            var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String) : [], length = result2.length;
            for (var key in value) {
              if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function arraySample(array) {
            var length = array.length;
            return length ? array[baseRandom(0, length - 1)] : undefined2;
          }
          function arraySampleSize(array, n) {
            return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
          }
          function arrayShuffle(array) {
            return shuffleSelf(copyArray(array));
          }
          function assignMergeValue(object, key, value) {
            if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assignValue(object, key, value) {
            var objValue = object[key];
            if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
              baseAssignValue(object, key, value);
            }
          }
          function assocIndexOf(array, key) {
            var length = array.length;
            while (length--) {
              if (eq(array[length][0], key)) {
                return length;
              }
            }
            return -1;
          }
          function baseAggregator(collection, setter, iteratee2, accumulator) {
            baseEach(collection, function(value, key, collection2) {
              setter(accumulator, value, iteratee2(value), collection2);
            });
            return accumulator;
          }
          function baseAssign(object, source) {
            return object && copyObject(source, keys(source), object);
          }
          function baseAssignIn(object, source) {
            return object && copyObject(source, keysIn(source), object);
          }
          function baseAssignValue(object, key, value) {
            if (key == "__proto__" && defineProperty) {
              defineProperty(object, key, {
                "configurable": true,
                "enumerable": true,
                "value": value,
                "writable": true
              });
            } else {
              object[key] = value;
            }
          }
          function baseAt(object, paths) {
            var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
            while (++index < length) {
              result2[index] = skip ? undefined2 : get(object, paths[index]);
            }
            return result2;
          }
          function baseClamp(number, lower, upper) {
            if (number === number) {
              if (upper !== undefined2) {
                number = number <= upper ? number : upper;
              }
              if (lower !== undefined2) {
                number = number >= lower ? number : lower;
              }
            }
            return number;
          }
          function baseClone(value, bitmask, customizer, key, object, stack) {
            var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
            if (customizer) {
              result2 = object ? customizer(value, key, object, stack) : customizer(value);
            }
            if (result2 !== undefined2) {
              return result2;
            }
            if (!isObject(value)) {
              return value;
            }
            var isArr = isArray(value);
            if (isArr) {
              result2 = initCloneArray(value);
              if (!isDeep) {
                return copyArray(value, result2);
              }
            } else {
              var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
              if (isBuffer(value)) {
                return cloneBuffer(value, isDeep);
              }
              if (tag == objectTag || tag == argsTag || isFunc && !object) {
                result2 = isFlat || isFunc ? {} : initCloneObject(value);
                if (!isDeep) {
                  return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
                }
              } else {
                if (!cloneableTags[tag]) {
                  return object ? value : {};
                }
                result2 = initCloneByTag(value, tag, isDeep);
              }
            }
            stack || (stack = new Stack());
            var stacked = stack.get(value);
            if (stacked) {
              return stacked;
            }
            stack.set(value, result2);
            if (isSet(value)) {
              value.forEach(function(subValue) {
                result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
              });
            } else if (isMap(value)) {
              value.forEach(function(subValue, key2) {
                result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
              });
            }
            var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
            var props = isArr ? undefined2 : keysFunc(value);
            arrayEach(props || value, function(subValue, key2) {
              if (props) {
                key2 = subValue;
                subValue = value[key2];
              }
              assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
            return result2;
          }
          function baseConforms(source) {
            var props = keys(source);
            return function(object) {
              return baseConformsTo(object, source, props);
            };
          }
          function baseConformsTo(object, source, props) {
            var length = props.length;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (length--) {
              var key = props[length], predicate = source[key], value = object[key];
              if (value === undefined2 && !(key in object) || !predicate(value)) {
                return false;
              }
            }
            return true;
          }
          function baseDelay(func, wait, args) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return setTimeout2(function() {
              func.apply(undefined2, args);
            }, wait);
          }
          function baseDifference(array, values2, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
            if (!length) {
              return result2;
            }
            if (iteratee2) {
              values2 = arrayMap(values2, baseUnary(iteratee2));
            }
            if (comparator) {
              includes2 = arrayIncludesWith;
              isCommon = false;
            } else if (values2.length >= LARGE_ARRAY_SIZE) {
              includes2 = cacheHas;
              isCommon = false;
              values2 = new SetCache(values2);
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var valuesIndex = valuesLength;
                  while (valuesIndex--) {
                    if (values2[valuesIndex] === computed) {
                      continue outer;
                    }
                  }
                  result2.push(value);
                } else if (!includes2(values2, computed, comparator)) {
                  result2.push(value);
                }
              }
            return result2;
          }
          var baseEach = createBaseEach(baseForOwn);
          var baseEachRight = createBaseEach(baseForOwnRight, true);
          function baseEvery(collection, predicate) {
            var result2 = true;
            baseEach(collection, function(value, index, collection2) {
              result2 = !!predicate(value, index, collection2);
              return result2;
            });
            return result2;
          }
          function baseExtremum(array, iteratee2, comparator) {
            var index = -1, length = array.length;
            while (++index < length) {
              var value = array[index], current = iteratee2(value);
              if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
                var computed = current, result2 = value;
              }
            }
            return result2;
          }
          function baseFill(array, value, start, end) {
            var length = array.length;
            start = toInteger(start);
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end === undefined2 || end > length ? length : toInteger(end);
            if (end < 0) {
              end += length;
            }
            end = start > end ? 0 : toLength(end);
            while (start < end) {
              array[start++] = value;
            }
            return array;
          }
          function baseFilter(collection, predicate) {
            var result2 = [];
            baseEach(collection, function(value, index, collection2) {
              if (predicate(value, index, collection2)) {
                result2.push(value);
              }
            });
            return result2;
          }
          function baseFlatten(array, depth, predicate, isStrict, result2) {
            var index = -1, length = array.length;
            predicate || (predicate = isFlattenable);
            result2 || (result2 = []);
            while (++index < length) {
              var value = array[index];
              if (depth > 0 && predicate(value)) {
                if (depth > 1) {
                  baseFlatten(value, depth - 1, predicate, isStrict, result2);
                } else {
                  arrayPush(result2, value);
                }
              } else if (!isStrict) {
                result2[result2.length] = value;
              }
            }
            return result2;
          }
          var baseFor = createBaseFor();
          var baseForRight = createBaseFor(true);
          function baseForOwn(object, iteratee2) {
            return object && baseFor(object, iteratee2, keys);
          }
          function baseForOwnRight(object, iteratee2) {
            return object && baseForRight(object, iteratee2, keys);
          }
          function baseFunctions(object, props) {
            return arrayFilter(props, function(key) {
              return isFunction(object[key]);
            });
          }
          function baseGet(object, path) {
            path = castPath(path, object);
            var index = 0, length = path.length;
            while (object != null && index < length) {
              object = object[toKey(path[index++])];
            }
            return index && index == length ? object : undefined2;
          }
          function baseGetAllKeys(object, keysFunc, symbolsFunc) {
            var result2 = keysFunc(object);
            return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
          }
          function baseGetTag(value) {
            if (value == null) {
              return value === undefined2 ? undefinedTag : nullTag;
            }
            return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
          }
          function baseGt(value, other) {
            return value > other;
          }
          function baseHas(object, key) {
            return object != null && hasOwnProperty.call(object, key);
          }
          function baseHasIn(object, key) {
            return object != null && key in Object2(object);
          }
          function baseInRange(number, start, end) {
            return number >= nativeMin(start, end) && number < nativeMax(start, end);
          }
          function baseIntersection(arrays, iteratee2, comparator) {
            var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
            while (othIndex--) {
              var array = arrays[othIndex];
              if (othIndex && iteratee2) {
                array = arrayMap(array, baseUnary(iteratee2));
              }
              maxLength = nativeMin(array.length, maxLength);
              caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
            }
            array = arrays[0];
            var index = -1, seen = caches[0];
            outer:
              while (++index < length && result2.length < maxLength) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                  othIndex = othLength;
                  while (--othIndex) {
                    var cache = caches[othIndex];
                    if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                      continue outer;
                    }
                  }
                  if (seen) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseInverter(object, setter, iteratee2, accumulator) {
            baseForOwn(object, function(value, key, object2) {
              setter(accumulator, iteratee2(value), key, object2);
            });
            return accumulator;
          }
          function baseInvoke(object, path, args) {
            path = castPath(path, object);
            object = parent(object, path);
            var func = object == null ? object : object[toKey(last(path))];
            return func == null ? undefined2 : apply(func, object, args);
          }
          function baseIsArguments(value) {
            return isObjectLike(value) && baseGetTag(value) == argsTag;
          }
          function baseIsArrayBuffer(value) {
            return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
          }
          function baseIsDate(value) {
            return isObjectLike(value) && baseGetTag(value) == dateTag;
          }
          function baseIsEqual(value, other, bitmask, customizer, stack) {
            if (value === other) {
              return true;
            }
            if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
              return value !== value && other !== other;
            }
            return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
          }
          function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
            var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
            objTag = objTag == argsTag ? objectTag : objTag;
            othTag = othTag == argsTag ? objectTag : othTag;
            var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
            if (isSameTag && isBuffer(object)) {
              if (!isBuffer(other)) {
                return false;
              }
              objIsArr = true;
              objIsObj = false;
            }
            if (isSameTag && !objIsObj) {
              stack || (stack = new Stack());
              return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
            }
            if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
              var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
              if (objIsWrapped || othIsWrapped) {
                var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
                stack || (stack = new Stack());
                return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
              }
            }
            if (!isSameTag) {
              return false;
            }
            stack || (stack = new Stack());
            return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
          }
          function baseIsMap(value) {
            return isObjectLike(value) && getTag(value) == mapTag;
          }
          function baseIsMatch(object, source, matchData, customizer) {
            var index = matchData.length, length = index, noCustomizer = !customizer;
            if (object == null) {
              return !length;
            }
            object = Object2(object);
            while (index--) {
              var data = matchData[index];
              if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
                return false;
              }
            }
            while (++index < length) {
              data = matchData[index];
              var key = data[0], objValue = object[key], srcValue = data[1];
              if (noCustomizer && data[2]) {
                if (objValue === undefined2 && !(key in object)) {
                  return false;
                }
              } else {
                var stack = new Stack();
                if (customizer) {
                  var result2 = customizer(objValue, srcValue, key, object, source, stack);
                }
                if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                  return false;
                }
              }
            }
            return true;
          }
          function baseIsNative(value) {
            if (!isObject(value) || isMasked(value)) {
              return false;
            }
            var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
            return pattern.test(toSource(value));
          }
          function baseIsRegExp(value) {
            return isObjectLike(value) && baseGetTag(value) == regexpTag;
          }
          function baseIsSet(value) {
            return isObjectLike(value) && getTag(value) == setTag;
          }
          function baseIsTypedArray(value) {
            return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
          }
          function baseIteratee(value) {
            if (typeof value == "function") {
              return value;
            }
            if (value == null) {
              return identity;
            }
            if (typeof value == "object") {
              return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
            }
            return property(value);
          }
          function baseKeys(object) {
            if (!isPrototype(object)) {
              return nativeKeys(object);
            }
            var result2 = [];
            for (var key in Object2(object)) {
              if (hasOwnProperty.call(object, key) && key != "constructor") {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseKeysIn(object) {
            if (!isObject(object)) {
              return nativeKeysIn(object);
            }
            var isProto = isPrototype(object), result2 = [];
            for (var key in object) {
              if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
                result2.push(key);
              }
            }
            return result2;
          }
          function baseLt(value, other) {
            return value < other;
          }
          function baseMap(collection, iteratee2) {
            var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value, key, collection2) {
              result2[++index] = iteratee2(value, key, collection2);
            });
            return result2;
          }
          function baseMatches(source) {
            var matchData = getMatchData(source);
            if (matchData.length == 1 && matchData[0][2]) {
              return matchesStrictComparable(matchData[0][0], matchData[0][1]);
            }
            return function(object) {
              return object === source || baseIsMatch(object, source, matchData);
            };
          }
          function baseMatchesProperty(path, srcValue) {
            if (isKey(path) && isStrictComparable(srcValue)) {
              return matchesStrictComparable(toKey(path), srcValue);
            }
            return function(object) {
              var objValue = get(object, path);
              return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
            };
          }
          function baseMerge(object, source, srcIndex, customizer, stack) {
            if (object === source) {
              return;
            }
            baseFor(source, function(srcValue, key) {
              stack || (stack = new Stack());
              if (isObject(srcValue)) {
                baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
              } else {
                var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
                if (newValue === undefined2) {
                  newValue = srcValue;
                }
                assignMergeValue(object, key, newValue);
              }
            }, keysIn);
          }
          function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
            var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
            if (stacked) {
              assignMergeValue(object, key, stacked);
              return;
            }
            var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
            var isCommon = newValue === undefined2;
            if (isCommon) {
              var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
              newValue = srcValue;
              if (isArr || isBuff || isTyped) {
                if (isArray(objValue)) {
                  newValue = objValue;
                } else if (isArrayLikeObject(objValue)) {
                  newValue = copyArray(objValue);
                } else if (isBuff) {
                  isCommon = false;
                  newValue = cloneBuffer(srcValue, true);
                } else if (isTyped) {
                  isCommon = false;
                  newValue = cloneTypedArray(srcValue, true);
                } else {
                  newValue = [];
                }
              } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                newValue = objValue;
                if (isArguments(objValue)) {
                  newValue = toPlainObject(objValue);
                } else if (!isObject(objValue) || isFunction(objValue)) {
                  newValue = initCloneObject(srcValue);
                }
              } else {
                isCommon = false;
              }
            }
            if (isCommon) {
              stack.set(srcValue, newValue);
              mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
              stack["delete"](srcValue);
            }
            assignMergeValue(object, key, newValue);
          }
          function baseNth(array, n) {
            var length = array.length;
            if (!length) {
              return;
            }
            n += n < 0 ? length : 0;
            return isIndex(n, length) ? array[n] : undefined2;
          }
          function baseOrderBy(collection, iteratees, orders) {
            if (iteratees.length) {
              iteratees = arrayMap(iteratees, function(iteratee2) {
                if (isArray(iteratee2)) {
                  return function(value) {
                    return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                  };
                }
                return iteratee2;
              });
            } else {
              iteratees = [identity];
            }
            var index = -1;
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            var result2 = baseMap(collection, function(value, key, collection2) {
              var criteria = arrayMap(iteratees, function(iteratee2) {
                return iteratee2(value);
              });
              return { "criteria": criteria, "index": ++index, "value": value };
            });
            return baseSortBy(result2, function(object, other) {
              return compareMultiple(object, other, orders);
            });
          }
          function basePick(object, paths) {
            return basePickBy(object, paths, function(value, path) {
              return hasIn(object, path);
            });
          }
          function basePickBy(object, paths, predicate) {
            var index = -1, length = paths.length, result2 = {};
            while (++index < length) {
              var path = paths[index], value = baseGet(object, path);
              if (predicate(value, path)) {
                baseSet(result2, castPath(path, object), value);
              }
            }
            return result2;
          }
          function basePropertyDeep(path) {
            return function(object) {
              return baseGet(object, path);
            };
          }
          function basePullAll(array, values2, iteratee2, comparator) {
            var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
            if (array === values2) {
              values2 = copyArray(values2);
            }
            if (iteratee2) {
              seen = arrayMap(array, baseUnary(iteratee2));
            }
            while (++index < length) {
              var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
              while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
                if (seen !== array) {
                  splice.call(seen, fromIndex, 1);
                }
                splice.call(array, fromIndex, 1);
              }
            }
            return array;
          }
          function basePullAt(array, indexes) {
            var length = array ? indexes.length : 0, lastIndex = length - 1;
            while (length--) {
              var index = indexes[length];
              if (length == lastIndex || index !== previous) {
                var previous = index;
                if (isIndex(index)) {
                  splice.call(array, index, 1);
                } else {
                  baseUnset(array, index);
                }
              }
            }
            return array;
          }
          function baseRandom(lower, upper) {
            return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
          }
          function baseRange(start, end, step, fromRight) {
            var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
            while (length--) {
              result2[fromRight ? length : ++index] = start;
              start += step;
            }
            return result2;
          }
          function baseRepeat(string, n) {
            var result2 = "";
            if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
              return result2;
            }
            do {
              if (n % 2) {
                result2 += string;
              }
              n = nativeFloor(n / 2);
              if (n) {
                string += string;
              }
            } while (n);
            return result2;
          }
          function baseRest(func, start) {
            return setToString(overRest(func, start, identity), func + "");
          }
          function baseSample(collection) {
            return arraySample(values(collection));
          }
          function baseSampleSize(collection, n) {
            var array = values(collection);
            return shuffleSelf(array, baseClamp(n, 0, array.length));
          }
          function baseSet(object, path, value, customizer) {
            if (!isObject(object)) {
              return object;
            }
            path = castPath(path, object);
            var index = -1, length = path.length, lastIndex = length - 1, nested = object;
            while (nested != null && ++index < length) {
              var key = toKey(path[index]), newValue = value;
              if (key === "__proto__" || key === "constructor" || key === "prototype") {
                return object;
              }
              if (index != lastIndex) {
                var objValue = nested[key];
                newValue = customizer ? customizer(objValue, key, nested) : undefined2;
                if (newValue === undefined2) {
                  newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
                }
              }
              assignValue(nested, key, newValue);
              nested = nested[key];
            }
            return object;
          }
          var baseSetData = !metaMap ? identity : function(func, data) {
            metaMap.set(func, data);
            return func;
          };
          var baseSetToString = !defineProperty ? identity : function(func, string) {
            return defineProperty(func, "toString", {
              "configurable": true,
              "enumerable": false,
              "value": constant(string),
              "writable": true
            });
          };
          function baseShuffle(collection) {
            return shuffleSelf(values(collection));
          }
          function baseSlice(array, start, end) {
            var index = -1, length = array.length;
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end > length ? length : end;
            if (end < 0) {
              end += length;
            }
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result2 = Array2(length);
            while (++index < length) {
              result2[index] = array[index + start];
            }
            return result2;
          }
          function baseSome(collection, predicate) {
            var result2;
            baseEach(collection, function(value, index, collection2) {
              result2 = predicate(value, index, collection2);
              return !result2;
            });
            return !!result2;
          }
          function baseSortedIndex(array, value, retHighest) {
            var low = 0, high = array == null ? low : array.length;
            if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
              while (low < high) {
                var mid = low + high >>> 1, computed = array[mid];
                if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                  low = mid + 1;
                } else {
                  high = mid;
                }
              }
              return high;
            }
            return baseSortedIndexBy(array, value, identity, retHighest);
          }
          function baseSortedIndexBy(array, value, iteratee2, retHighest) {
            var low = 0, high = array == null ? 0 : array.length;
            if (high === 0) {
              return 0;
            }
            value = iteratee2(value);
            var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
            while (low < high) {
              var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
              if (valIsNaN) {
                var setLow = retHighest || othIsReflexive;
              } else if (valIsUndefined) {
                setLow = othIsReflexive && (retHighest || othIsDefined);
              } else if (valIsNull) {
                setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
              } else if (valIsSymbol) {
                setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
              } else if (othIsNull || othIsSymbol) {
                setLow = false;
              } else {
                setLow = retHighest ? computed <= value : computed < value;
              }
              if (setLow) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return nativeMin(high, MAX_ARRAY_INDEX);
          }
          function baseSortedUniq(array, iteratee2) {
            var index = -1, length = array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              if (!index || !eq(computed, seen)) {
                var seen = computed;
                result2[resIndex++] = value === 0 ? 0 : value;
              }
            }
            return result2;
          }
          function baseToNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            return +value;
          }
          function baseToString(value) {
            if (typeof value == "string") {
              return value;
            }
            if (isArray(value)) {
              return arrayMap(value, baseToString) + "";
            }
            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : "";
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function baseUniq(array, iteratee2, comparator) {
            var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
            if (comparator) {
              isCommon = false;
              includes2 = arrayIncludesWith;
            } else if (length >= LARGE_ARRAY_SIZE) {
              var set2 = iteratee2 ? null : createSet(array);
              if (set2) {
                return setToArray(set2);
              }
              isCommon = false;
              includes2 = cacheHas;
              seen = new SetCache();
            } else {
              seen = iteratee2 ? [] : result2;
            }
            outer:
              while (++index < length) {
                var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
                value = comparator || value !== 0 ? value : 0;
                if (isCommon && computed === computed) {
                  var seenIndex = seen.length;
                  while (seenIndex--) {
                    if (seen[seenIndex] === computed) {
                      continue outer;
                    }
                  }
                  if (iteratee2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                } else if (!includes2(seen, computed, comparator)) {
                  if (seen !== result2) {
                    seen.push(computed);
                  }
                  result2.push(value);
                }
              }
            return result2;
          }
          function baseUnset(object, path) {
            path = castPath(path, object);
            object = parent(object, path);
            return object == null || delete object[toKey(last(path))];
          }
          function baseUpdate(object, path, updater, customizer) {
            return baseSet(object, path, updater(baseGet(object, path)), customizer);
          }
          function baseWhile(array, predicate, isDrop, fromRight) {
            var length = array.length, index = fromRight ? length : -1;
            while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
            }
            return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
          }
          function baseWrapperValue(value, actions) {
            var result2 = value;
            if (result2 instanceof LazyWrapper) {
              result2 = result2.value();
            }
            return arrayReduce(actions, function(result3, action) {
              return action.func.apply(action.thisArg, arrayPush([result3], action.args));
            }, result2);
          }
          function baseXor(arrays, iteratee2, comparator) {
            var length = arrays.length;
            if (length < 2) {
              return length ? baseUniq(arrays[0]) : [];
            }
            var index = -1, result2 = Array2(length);
            while (++index < length) {
              var array = arrays[index], othIndex = -1;
              while (++othIndex < length) {
                if (othIndex != index) {
                  result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
                }
              }
            }
            return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
          }
          function baseZipObject(props, values2, assignFunc) {
            var index = -1, length = props.length, valsLength = values2.length, result2 = {};
            while (++index < length) {
              var value = index < valsLength ? values2[index] : undefined2;
              assignFunc(result2, props[index], value);
            }
            return result2;
          }
          function castArrayLikeObject(value) {
            return isArrayLikeObject(value) ? value : [];
          }
          function castFunction(value) {
            return typeof value == "function" ? value : identity;
          }
          function castPath(value, object) {
            if (isArray(value)) {
              return value;
            }
            return isKey(value, object) ? [value] : stringToPath(toString(value));
          }
          var castRest = baseRest;
          function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined2 ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
          }
          var clearTimeout = ctxClearTimeout || function(id) {
            return root.clearTimeout(id);
          };
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
              return buffer.slice();
            }
            var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
            buffer.copy(result2);
            return result2;
          }
          function cloneArrayBuffer(arrayBuffer) {
            var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
            new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
            return result2;
          }
          function cloneDataView(dataView, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
            return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
          }
          function cloneRegExp(regexp) {
            var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
            result2.lastIndex = regexp.lastIndex;
            return result2;
          }
          function cloneSymbol(symbol) {
            return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
          }
          function cloneTypedArray(typedArray, isDeep) {
            var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
            return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
          }
          function compareAscending(value, other) {
            if (value !== other) {
              var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
              var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
              if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
                return 1;
              }
              if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
                return -1;
              }
            }
            return 0;
          }
          function compareMultiple(object, other, orders) {
            var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
            while (++index < length) {
              var result2 = compareAscending(objCriteria[index], othCriteria[index]);
              if (result2) {
                if (index >= ordersLength) {
                  return result2;
                }
                var order = orders[index];
                return result2 * (order == "desc" ? -1 : 1);
              }
            }
            return object.index - other.index;
          }
          function composeArgs(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
            while (++leftIndex < leftLength) {
              result2[leftIndex] = partials[leftIndex];
            }
            while (++argsIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[holders[argsIndex]] = args[argsIndex];
              }
            }
            while (rangeLength--) {
              result2[leftIndex++] = args[argsIndex++];
            }
            return result2;
          }
          function composeArgsRight(args, partials, holders, isCurried) {
            var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
            while (++argsIndex < rangeLength) {
              result2[argsIndex] = args[argsIndex];
            }
            var offset = argsIndex;
            while (++rightIndex < rightLength) {
              result2[offset + rightIndex] = partials[rightIndex];
            }
            while (++holdersIndex < holdersLength) {
              if (isUncurried || argsIndex < argsLength) {
                result2[offset + holders[holdersIndex]] = args[argsIndex++];
              }
            }
            return result2;
          }
          function copyArray(source, array) {
            var index = -1, length = source.length;
            array || (array = Array2(length));
            while (++index < length) {
              array[index] = source[index];
            }
            return array;
          }
          function copyObject(source, props, object, customizer) {
            var isNew = !object;
            object || (object = {});
            var index = -1, length = props.length;
            while (++index < length) {
              var key = props[index];
              var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
              if (newValue === undefined2) {
                newValue = source[key];
              }
              if (isNew) {
                baseAssignValue(object, key, newValue);
              } else {
                assignValue(object, key, newValue);
              }
            }
            return object;
          }
          function copySymbols(source, object) {
            return copyObject(source, getSymbols(source), object);
          }
          function copySymbolsIn(source, object) {
            return copyObject(source, getSymbolsIn(source), object);
          }
          function createAggregator(setter, initializer) {
            return function(collection, iteratee2) {
              var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
              return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
            };
          }
          function createAssigner(assigner) {
            return baseRest(function(object, sources) {
              var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
              customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
              if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                customizer = length < 3 ? undefined2 : customizer;
                length = 1;
              }
              object = Object2(object);
              while (++index < length) {
                var source = sources[index];
                if (source) {
                  assigner(object, source, index, customizer);
                }
              }
              return object;
            });
          }
          function createBaseEach(eachFunc, fromRight) {
            return function(collection, iteratee2) {
              if (collection == null) {
                return collection;
              }
              if (!isArrayLike(collection)) {
                return eachFunc(collection, iteratee2);
              }
              var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
              while (fromRight ? index-- : ++index < length) {
                if (iteratee2(iterable[index], index, iterable) === false) {
                  break;
                }
              }
              return collection;
            };
          }
          function createBaseFor(fromRight) {
            return function(object, iteratee2, keysFunc) {
              var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
              while (length--) {
                var key = props[fromRight ? length : ++index];
                if (iteratee2(iterable[key], key, iterable) === false) {
                  break;
                }
              }
              return object;
            };
          }
          function createBind(func, bitmask, thisArg) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return fn.apply(isBind ? thisArg : this, arguments);
            }
            return wrapper;
          }
          function createCaseFirst(methodName) {
            return function(string) {
              string = toString(string);
              var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
              var chr = strSymbols ? strSymbols[0] : string.charAt(0);
              var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
              return chr[methodName]() + trailing;
            };
          }
          function createCompounder(callback) {
            return function(string) {
              return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
            };
          }
          function createCtor(Ctor) {
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return new Ctor();
                case 1:
                  return new Ctor(args[0]);
                case 2:
                  return new Ctor(args[0], args[1]);
                case 3:
                  return new Ctor(args[0], args[1], args[2]);
                case 4:
                  return new Ctor(args[0], args[1], args[2], args[3]);
                case 5:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4]);
                case 6:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
                case 7:
                  return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
              }
              var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
              return isObject(result2) ? result2 : thisBinding;
            };
          }
          function createCurry(func, bitmask, arity) {
            var Ctor = createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
              while (index--) {
                args[index] = arguments[index];
              }
              var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
              length -= holders.length;
              if (length < arity) {
                return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined2, args, holders, undefined2, undefined2, arity - length);
              }
              var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              return apply(fn, this, args);
            }
            return wrapper;
          }
          function createFind(findIndexFunc) {
            return function(collection, predicate, fromIndex) {
              var iterable = Object2(collection);
              if (!isArrayLike(collection)) {
                var iteratee2 = getIteratee(predicate, 3);
                collection = keys(collection);
                predicate = function(key) {
                  return iteratee2(iterable[key], key, iterable);
                };
              }
              var index = findIndexFunc(collection, predicate, fromIndex);
              return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
            };
          }
          function createFlow(fromRight) {
            return flatRest(function(funcs) {
              var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
              if (fromRight) {
                funcs.reverse();
              }
              while (index--) {
                var func = funcs[index];
                if (typeof func != "function") {
                  throw new TypeError2(FUNC_ERROR_TEXT);
                }
                if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                  var wrapper = new LodashWrapper([], true);
                }
              }
              index = wrapper ? index : length;
              while (++index < length) {
                func = funcs[index];
                var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
                if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                  wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
                } else {
                  wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
                }
              }
              return function() {
                var args = arguments, value = args[0];
                if (wrapper && args.length == 1 && isArray(value)) {
                  return wrapper.plant(value).value();
                }
                var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
                while (++index2 < length) {
                  result2 = funcs[index2].call(this, result2);
                }
                return result2;
              };
            });
          }
          function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
            var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
            function wrapper() {
              var length = arguments.length, args = Array2(length), index = length;
              while (index--) {
                args[index] = arguments[index];
              }
              if (isCurried) {
                var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
              }
              if (partials) {
                args = composeArgs(args, partials, holders, isCurried);
              }
              if (partialsRight) {
                args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
              }
              length -= holdersCount;
              if (isCurried && length < arity) {
                var newHolders = replaceHolders(args, placeholder);
                return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
              }
              var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
              length = args.length;
              if (argPos) {
                args = reorder(args, argPos);
              } else if (isFlip && length > 1) {
                args.reverse();
              }
              if (isAry && ary2 < length) {
                args.length = ary2;
              }
              if (this && this !== root && this instanceof wrapper) {
                fn = Ctor || createCtor(fn);
              }
              return fn.apply(thisBinding, args);
            }
            return wrapper;
          }
          function createInverter(setter, toIteratee) {
            return function(object, iteratee2) {
              return baseInverter(object, setter, toIteratee(iteratee2), {});
            };
          }
          function createMathOperation(operator, defaultValue) {
            return function(value, other) {
              var result2;
              if (value === undefined2 && other === undefined2) {
                return defaultValue;
              }
              if (value !== undefined2) {
                result2 = value;
              }
              if (other !== undefined2) {
                if (result2 === undefined2) {
                  return other;
                }
                if (typeof value == "string" || typeof other == "string") {
                  value = baseToString(value);
                  other = baseToString(other);
                } else {
                  value = baseToNumber(value);
                  other = baseToNumber(other);
                }
                result2 = operator(value, other);
              }
              return result2;
            };
          }
          function createOver(arrayFunc) {
            return flatRest(function(iteratees) {
              iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
              return baseRest(function(args) {
                var thisArg = this;
                return arrayFunc(iteratees, function(iteratee2) {
                  return apply(iteratee2, thisArg, args);
                });
              });
            });
          }
          function createPadding(length, chars) {
            chars = chars === undefined2 ? " " : baseToString(chars);
            var charsLength = chars.length;
            if (charsLength < 2) {
              return charsLength ? baseRepeat(chars, length) : chars;
            }
            var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
            return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
          }
          function createPartial(func, bitmask, thisArg, partials) {
            var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
            function wrapper() {
              var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
              while (++leftIndex < leftLength) {
                args[leftIndex] = partials[leftIndex];
              }
              while (argsLength--) {
                args[leftIndex++] = arguments[++argsIndex];
              }
              return apply(fn, isBind ? thisArg : this, args);
            }
            return wrapper;
          }
          function createRange(fromRight) {
            return function(start, end, step) {
              if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
                end = step = undefined2;
              }
              start = toFinite(start);
              if (end === undefined2) {
                end = start;
                start = 0;
              } else {
                end = toFinite(end);
              }
              step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
              return baseRange(start, end, step, fromRight);
            };
          }
          function createRelationalOperation(operator) {
            return function(value, other) {
              if (!(typeof value == "string" && typeof other == "string")) {
                value = toNumber(value);
                other = toNumber(other);
              }
              return operator(value, other);
            };
          }
          function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
            var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
            bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
            bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
            if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
              bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
            }
            var newData = [
              func,
              bitmask,
              thisArg,
              newPartials,
              newHolders,
              newPartialsRight,
              newHoldersRight,
              argPos,
              ary2,
              arity
            ];
            var result2 = wrapFunc.apply(undefined2, newData);
            if (isLaziable(func)) {
              setData(result2, newData);
            }
            result2.placeholder = placeholder;
            return setWrapToString(result2, func, bitmask);
          }
          function createRound(methodName) {
            var func = Math2[methodName];
            return function(number, precision) {
              number = toNumber(number);
              precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
              if (precision && nativeIsFinite(number)) {
                var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
                pair = (toString(value) + "e").split("e");
                return +(pair[0] + "e" + (+pair[1] - precision));
              }
              return func(number);
            };
          }
          var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
            return new Set2(values2);
          };
          function createToPairs(keysFunc) {
            return function(object) {
              var tag = getTag(object);
              if (tag == mapTag) {
                return mapToArray(object);
              }
              if (tag == setTag) {
                return setToPairs(object);
              }
              return baseToPairs(object, keysFunc(object));
            };
          }
          function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
            var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
            if (!isBindKey && typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var length = partials ? partials.length : 0;
            if (!length) {
              bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
              partials = holders = undefined2;
            }
            ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
            arity = arity === undefined2 ? arity : toInteger(arity);
            length -= holders ? holders.length : 0;
            if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
              var partialsRight = partials, holdersRight = holders;
              partials = holders = undefined2;
            }
            var data = isBindKey ? undefined2 : getData(func);
            var newData = [
              func,
              bitmask,
              thisArg,
              partials,
              holders,
              partialsRight,
              holdersRight,
              argPos,
              ary2,
              arity
            ];
            if (data) {
              mergeData(newData, data);
            }
            func = newData[0];
            bitmask = newData[1];
            thisArg = newData[2];
            partials = newData[3];
            holders = newData[4];
            arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
            if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
              bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
            }
            if (!bitmask || bitmask == WRAP_BIND_FLAG) {
              var result2 = createBind(func, bitmask, thisArg);
            } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
              result2 = createCurry(func, bitmask, arity);
            } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
              result2 = createPartial(func, bitmask, thisArg, partials);
            } else {
              result2 = createHybrid.apply(undefined2, newData);
            }
            var setter = data ? baseSetData : setData;
            return setWrapToString(setter(result2, newData), func, bitmask);
          }
          function customDefaultsAssignIn(objValue, srcValue, key, object) {
            if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              return srcValue;
            }
            return objValue;
          }
          function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
            if (isObject(objValue) && isObject(srcValue)) {
              stack.set(srcValue, objValue);
              baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
              stack["delete"](srcValue);
            }
            return objValue;
          }
          function customOmitClone(value) {
            return isPlainObject(value) ? undefined2 : value;
          }
          function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
            if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
              return false;
            }
            var arrStacked = stack.get(array);
            var othStacked = stack.get(other);
            if (arrStacked && othStacked) {
              return arrStacked == other && othStacked == array;
            }
            var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
            stack.set(array, other);
            stack.set(other, array);
            while (++index < arrLength) {
              var arrValue = array[index], othValue = other[index];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
              }
              if (compared !== undefined2) {
                if (compared) {
                  continue;
                }
                result2 = false;
                break;
              }
              if (seen) {
                if (!arraySome(other, function(othValue2, othIndex) {
                  if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                  }
                })) {
                  result2 = false;
                  break;
                }
              } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                result2 = false;
                break;
              }
            }
            stack["delete"](array);
            stack["delete"](other);
            return result2;
          }
          function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
            switch (tag) {
              case dataViewTag:
                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                  return false;
                }
                object = object.buffer;
                other = other.buffer;
              case arrayBufferTag:
                if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                  return false;
                }
                return true;
              case boolTag:
              case dateTag:
              case numberTag:
                return eq(+object, +other);
              case errorTag:
                return object.name == other.name && object.message == other.message;
              case regexpTag:
              case stringTag:
                return object == other + "";
              case mapTag:
                var convert = mapToArray;
              case setTag:
                var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                convert || (convert = setToArray);
                if (object.size != other.size && !isPartial) {
                  return false;
                }
                var stacked = stack.get(object);
                if (stacked) {
                  return stacked == other;
                }
                bitmask |= COMPARE_UNORDERED_FLAG;
                stack.set(object, other);
                var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                stack["delete"](object);
                return result2;
              case symbolTag:
                if (symbolValueOf) {
                  return symbolValueOf.call(object) == symbolValueOf.call(other);
                }
            }
            return false;
          }
          function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
            if (objLength != othLength && !isPartial) {
              return false;
            }
            var index = objLength;
            while (index--) {
              var key = objProps[index];
              if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                return false;
              }
            }
            var objStacked = stack.get(object);
            var othStacked = stack.get(other);
            if (objStacked && othStacked) {
              return objStacked == other && othStacked == object;
            }
            var result2 = true;
            stack.set(object, other);
            stack.set(other, object);
            var skipCtor = isPartial;
            while (++index < objLength) {
              key = objProps[index];
              var objValue = object[key], othValue = other[key];
              if (customizer) {
                var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
              }
              if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                result2 = false;
                break;
              }
              skipCtor || (skipCtor = key == "constructor");
            }
            if (result2 && !skipCtor) {
              var objCtor = object.constructor, othCtor = other.constructor;
              if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
                result2 = false;
              }
            }
            stack["delete"](object);
            stack["delete"](other);
            return result2;
          }
          function flatRest(func) {
            return setToString(overRest(func, undefined2, flatten), func + "");
          }
          function getAllKeys(object) {
            return baseGetAllKeys(object, keys, getSymbols);
          }
          function getAllKeysIn(object) {
            return baseGetAllKeys(object, keysIn, getSymbolsIn);
          }
          var getData = !metaMap ? noop : function(func) {
            return metaMap.get(func);
          };
          function getFuncName(func) {
            var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
            while (length--) {
              var data = array[length], otherFunc = data.func;
              if (otherFunc == null || otherFunc == func) {
                return data.name;
              }
            }
            return result2;
          }
          function getHolder(func) {
            var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
            return object.placeholder;
          }
          function getIteratee() {
            var result2 = lodash.iteratee || iteratee;
            result2 = result2 === iteratee ? baseIteratee : result2;
            return arguments.length ? result2(arguments[0], arguments[1]) : result2;
          }
          function getMapData(map2, key) {
            var data = map2.__data__;
            return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
          }
          function getMatchData(object) {
            var result2 = keys(object), length = result2.length;
            while (length--) {
              var key = result2[length], value = object[key];
              result2[length] = [key, value, isStrictComparable(value)];
            }
            return result2;
          }
          function getNative(object, key) {
            var value = getValue(object, key);
            return baseIsNative(value) ? value : undefined2;
          }
          function getRawTag(value) {
            var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
            try {
              value[symToStringTag] = undefined2;
              var unmasked = true;
            } catch (e) {
            }
            var result2 = nativeObjectToString.call(value);
            if (unmasked) {
              if (isOwn) {
                value[symToStringTag] = tag;
              } else {
                delete value[symToStringTag];
              }
            }
            return result2;
          }
          var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
            if (object == null) {
              return [];
            }
            object = Object2(object);
            return arrayFilter(nativeGetSymbols(object), function(symbol) {
              return propertyIsEnumerable.call(object, symbol);
            });
          };
          var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
            var result2 = [];
            while (object) {
              arrayPush(result2, getSymbols(object));
              object = getPrototype(object);
            }
            return result2;
          };
          var getTag = baseGetTag;
          if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
            getTag = function(value) {
              var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
              if (ctorString) {
                switch (ctorString) {
                  case dataViewCtorString:
                    return dataViewTag;
                  case mapCtorString:
                    return mapTag;
                  case promiseCtorString:
                    return promiseTag;
                  case setCtorString:
                    return setTag;
                  case weakMapCtorString:
                    return weakMapTag;
                }
              }
              return result2;
            };
          }
          function getView(start, end, transforms) {
            var index = -1, length = transforms.length;
            while (++index < length) {
              var data = transforms[index], size2 = data.size;
              switch (data.type) {
                case "drop":
                  start += size2;
                  break;
                case "dropRight":
                  end -= size2;
                  break;
                case "take":
                  end = nativeMin(end, start + size2);
                  break;
                case "takeRight":
                  start = nativeMax(start, end - size2);
                  break;
              }
            }
            return { "start": start, "end": end };
          }
          function getWrapDetails(source) {
            var match = source.match(reWrapDetails);
            return match ? match[1].split(reSplitDetails) : [];
          }
          function hasPath(object, path, hasFunc) {
            path = castPath(path, object);
            var index = -1, length = path.length, result2 = false;
            while (++index < length) {
              var key = toKey(path[index]);
              if (!(result2 = object != null && hasFunc(object, key))) {
                break;
              }
              object = object[key];
            }
            if (result2 || ++index != length) {
              return result2;
            }
            length = object == null ? 0 : object.length;
            return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
          }
          function initCloneArray(array) {
            var length = array.length, result2 = new array.constructor(length);
            if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
              result2.index = array.index;
              result2.input = array.input;
            }
            return result2;
          }
          function initCloneObject(object) {
            return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
          }
          function initCloneByTag(object, tag, isDeep) {
            var Ctor = object.constructor;
            switch (tag) {
              case arrayBufferTag:
                return cloneArrayBuffer(object);
              case boolTag:
              case dateTag:
                return new Ctor(+object);
              case dataViewTag:
                return cloneDataView(object, isDeep);
              case float32Tag:
              case float64Tag:
              case int8Tag:
              case int16Tag:
              case int32Tag:
              case uint8Tag:
              case uint8ClampedTag:
              case uint16Tag:
              case uint32Tag:
                return cloneTypedArray(object, isDeep);
              case mapTag:
                return new Ctor();
              case numberTag:
              case stringTag:
                return new Ctor(object);
              case regexpTag:
                return cloneRegExp(object);
              case setTag:
                return new Ctor();
              case symbolTag:
                return cloneSymbol(object);
            }
          }
          function insertWrapDetails(source, details) {
            var length = details.length;
            if (!length) {
              return source;
            }
            var lastIndex = length - 1;
            details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
            details = details.join(length > 2 ? ", " : " ");
            return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
          }
          function isFlattenable(value) {
            return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
          }
          function isIndex(value, length) {
            var type = typeof value;
            length = length == null ? MAX_SAFE_INTEGER : length;
            return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
          }
          function isIterateeCall(value, index, object) {
            if (!isObject(object)) {
              return false;
            }
            var type = typeof index;
            if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
              return eq(object[index], value);
            }
            return false;
          }
          function isKey(value, object) {
            if (isArray(value)) {
              return false;
            }
            var type = typeof value;
            if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
              return true;
            }
            return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
          }
          function isKeyable(value) {
            var type = typeof value;
            return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
          }
          function isLaziable(func) {
            var funcName = getFuncName(func), other = lodash[funcName];
            if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
              return false;
            }
            if (func === other) {
              return true;
            }
            var data = getData(other);
            return !!data && func === data[0];
          }
          function isMasked(func) {
            return !!maskSrcKey && maskSrcKey in func;
          }
          var isMaskable = coreJsData ? isFunction : stubFalse;
          function isPrototype(value) {
            var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
            return value === proto;
          }
          function isStrictComparable(value) {
            return value === value && !isObject(value);
          }
          function matchesStrictComparable(key, srcValue) {
            return function(object) {
              if (object == null) {
                return false;
              }
              return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
            };
          }
          function memoizeCapped(func) {
            var result2 = memoize(func, function(key) {
              if (cache.size === MAX_MEMOIZE_SIZE) {
                cache.clear();
              }
              return key;
            });
            var cache = result2.cache;
            return result2;
          }
          function mergeData(data, source) {
            var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
            var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
            if (!(isCommon || isCombo)) {
              return data;
            }
            if (srcBitmask & WRAP_BIND_FLAG) {
              data[2] = source[2];
              newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
            }
            var value = source[3];
            if (value) {
              var partials = data[3];
              data[3] = partials ? composeArgs(partials, value, source[4]) : value;
              data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
            }
            value = source[5];
            if (value) {
              partials = data[5];
              data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
              data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
            }
            value = source[7];
            if (value) {
              data[7] = value;
            }
            if (srcBitmask & WRAP_ARY_FLAG) {
              data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
            }
            if (data[9] == null) {
              data[9] = source[9];
            }
            data[0] = source[0];
            data[1] = newBitmask;
            return data;
          }
          function nativeKeysIn(object) {
            var result2 = [];
            if (object != null) {
              for (var key in Object2(object)) {
                result2.push(key);
              }
            }
            return result2;
          }
          function objectToString(value) {
            return nativeObjectToString.call(value);
          }
          function overRest(func, start, transform2) {
            start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
            return function() {
              var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
              while (++index < length) {
                array[index] = args[start + index];
              }
              index = -1;
              var otherArgs = Array2(start + 1);
              while (++index < start) {
                otherArgs[index] = args[index];
              }
              otherArgs[start] = transform2(array);
              return apply(func, this, otherArgs);
            };
          }
          function parent(object, path) {
            return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
          }
          function reorder(array, indexes) {
            var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
            while (length--) {
              var index = indexes[length];
              array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
            }
            return array;
          }
          function safeGet(object, key) {
            if (key === "constructor" && typeof object[key] === "function") {
              return;
            }
            if (key == "__proto__") {
              return;
            }
            return object[key];
          }
          var setData = shortOut(baseSetData);
          var setTimeout2 = ctxSetTimeout || function(func, wait) {
            return root.setTimeout(func, wait);
          };
          var setToString = shortOut(baseSetToString);
          function setWrapToString(wrapper, reference, bitmask) {
            var source = reference + "";
            return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
          }
          function shortOut(func) {
            var count = 0, lastCalled = 0;
            return function() {
              var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
              lastCalled = stamp;
              if (remaining > 0) {
                if (++count >= HOT_COUNT) {
                  return arguments[0];
                }
              } else {
                count = 0;
              }
              return func.apply(undefined2, arguments);
            };
          }
          function shuffleSelf(array, size2) {
            var index = -1, length = array.length, lastIndex = length - 1;
            size2 = size2 === undefined2 ? length : size2;
            while (++index < size2) {
              var rand = baseRandom(index, lastIndex), value = array[rand];
              array[rand] = array[index];
              array[index] = value;
            }
            array.length = size2;
            return array;
          }
          var stringToPath = memoizeCapped(function(string) {
            var result2 = [];
            if (string.charCodeAt(0) === 46) {
              result2.push("");
            }
            string.replace(rePropName, function(match, number, quote, subString) {
              result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
            });
            return result2;
          });
          function toKey(value) {
            if (typeof value == "string" || isSymbol(value)) {
              return value;
            }
            var result2 = value + "";
            return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
          }
          function toSource(func) {
            if (func != null) {
              try {
                return funcToString.call(func);
              } catch (e) {
              }
              try {
                return func + "";
              } catch (e) {
              }
            }
            return "";
          }
          function updateWrapDetails(details, bitmask) {
            arrayEach(wrapFlags, function(pair) {
              var value = "_." + pair[0];
              if (bitmask & pair[1] && !arrayIncludes(details, value)) {
                details.push(value);
              }
            });
            return details.sort();
          }
          function wrapperClone(wrapper) {
            if (wrapper instanceof LazyWrapper) {
              return wrapper.clone();
            }
            var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
            result2.__actions__ = copyArray(wrapper.__actions__);
            result2.__index__ = wrapper.__index__;
            result2.__values__ = wrapper.__values__;
            return result2;
          }
          function chunk(array, size2, guard) {
            if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
              size2 = 1;
            } else {
              size2 = nativeMax(toInteger(size2), 0);
            }
            var length = array == null ? 0 : array.length;
            if (!length || size2 < 1) {
              return [];
            }
            var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
            while (index < length) {
              result2[resIndex++] = baseSlice(array, index, index += size2);
            }
            return result2;
          }
          function compact(array) {
            var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
            while (++index < length) {
              var value = array[index];
              if (value) {
                result2[resIndex++] = value;
              }
            }
            return result2;
          }
          function concat() {
            var length = arguments.length;
            if (!length) {
              return [];
            }
            var args = Array2(length - 1), array = arguments[0], index = length;
            while (index--) {
              args[index - 1] = arguments[index];
            }
            return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
          }
          var difference = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
          });
          var differenceBy = baseRest(function(array, values2) {
            var iteratee2 = last(values2);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
          });
          var differenceWith = baseRest(function(array, values2) {
            var comparator = last(values2);
            if (isArrayLikeObject(comparator)) {
              comparator = undefined2;
            }
            return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
          });
          function drop(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function dropRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function dropRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
          }
          function dropWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
          }
          function fill(array, value, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
              start = 0;
              end = length;
            }
            return baseFill(array, value, start, end);
          }
          function findIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index);
          }
          function findLastIndex(array, predicate, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length - 1;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return baseFindIndex(array, getIteratee(predicate, 3), index, true);
          }
          function flatten(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, 1) : [];
          }
          function flattenDeep(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseFlatten(array, INFINITY) : [];
          }
          function flattenDepth(array, depth) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(array, depth);
          }
          function fromPairs(pairs) {
            var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
            while (++index < length) {
              var pair = pairs[index];
              result2[pair[0]] = pair[1];
            }
            return result2;
          }
          function head(array) {
            return array && array.length ? array[0] : undefined2;
          }
          function indexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = fromIndex == null ? 0 : toInteger(fromIndex);
            if (index < 0) {
              index = nativeMax(length + index, 0);
            }
            return baseIndexOf(array, value, index);
          }
          function initial(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 0, -1) : [];
          }
          var intersection = baseRest(function(arrays) {
            var mapped = arrayMap(arrays, castArrayLikeObject);
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
          });
          var intersectionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            if (iteratee2 === last(mapped)) {
              iteratee2 = undefined2;
            } else {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
          });
          var intersectionWith = baseRest(function(arrays) {
            var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            if (comparator) {
              mapped.pop();
            }
            return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
          });
          function join(array, separator) {
            return array == null ? "" : nativeJoin.call(array, separator);
          }
          function last(array) {
            var length = array == null ? 0 : array.length;
            return length ? array[length - 1] : undefined2;
          }
          function lastIndexOf(array, value, fromIndex) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return -1;
            }
            var index = length;
            if (fromIndex !== undefined2) {
              index = toInteger(fromIndex);
              index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
            }
            return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
          }
          function nth(array, n) {
            return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
          }
          var pull = baseRest(pullAll);
          function pullAll(array, values2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
          }
          function pullAllBy(array, values2, iteratee2) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
          }
          function pullAllWith(array, values2, comparator) {
            return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
          }
          var pullAt = flatRest(function(array, indexes) {
            var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
            basePullAt(array, arrayMap(indexes, function(index) {
              return isIndex(index, length) ? +index : index;
            }).sort(compareAscending));
            return result2;
          });
          function remove(array, predicate) {
            var result2 = [];
            if (!(array && array.length)) {
              return result2;
            }
            var index = -1, indexes = [], length = array.length;
            predicate = getIteratee(predicate, 3);
            while (++index < length) {
              var value = array[index];
              if (predicate(value, index, array)) {
                result2.push(value);
                indexes.push(index);
              }
            }
            basePullAt(array, indexes);
            return result2;
          }
          function reverse(array) {
            return array == null ? array : nativeReverse.call(array);
          }
          function slice(array, start, end) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
              start = 0;
              end = length;
            } else {
              start = start == null ? 0 : toInteger(start);
              end = end === undefined2 ? length : toInteger(end);
            }
            return baseSlice(array, start, end);
          }
          function sortedIndex(array, value) {
            return baseSortedIndex(array, value);
          }
          function sortedIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
          }
          function sortedIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value);
              if (index < length && eq(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedLastIndex(array, value) {
            return baseSortedIndex(array, value, true);
          }
          function sortedLastIndexBy(array, value, iteratee2) {
            return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
          }
          function sortedLastIndexOf(array, value) {
            var length = array == null ? 0 : array.length;
            if (length) {
              var index = baseSortedIndex(array, value, true) - 1;
              if (eq(array[index], value)) {
                return index;
              }
            }
            return -1;
          }
          function sortedUniq(array) {
            return array && array.length ? baseSortedUniq(array) : [];
          }
          function sortedUniqBy(array, iteratee2) {
            return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function tail(array) {
            var length = array == null ? 0 : array.length;
            return length ? baseSlice(array, 1, length) : [];
          }
          function take(array, n, guard) {
            if (!(array && array.length)) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            return baseSlice(array, 0, n < 0 ? 0 : n);
          }
          function takeRight(array, n, guard) {
            var length = array == null ? 0 : array.length;
            if (!length) {
              return [];
            }
            n = guard || n === undefined2 ? 1 : toInteger(n);
            n = length - n;
            return baseSlice(array, n < 0 ? 0 : n, length);
          }
          function takeRightWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
          }
          function takeWhile(array, predicate) {
            return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
          }
          var union = baseRest(function(arrays) {
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
          });
          var unionBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
          });
          var unionWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
          });
          function uniq(array) {
            return array && array.length ? baseUniq(array) : [];
          }
          function uniqBy(array, iteratee2) {
            return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
          }
          function uniqWith(array, comparator) {
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return array && array.length ? baseUniq(array, undefined2, comparator) : [];
          }
          function unzip(array) {
            if (!(array && array.length)) {
              return [];
            }
            var length = 0;
            array = arrayFilter(array, function(group) {
              if (isArrayLikeObject(group)) {
                length = nativeMax(group.length, length);
                return true;
              }
            });
            return baseTimes(length, function(index) {
              return arrayMap(array, baseProperty(index));
            });
          }
          function unzipWith(array, iteratee2) {
            if (!(array && array.length)) {
              return [];
            }
            var result2 = unzip(array);
            if (iteratee2 == null) {
              return result2;
            }
            return arrayMap(result2, function(group) {
              return apply(iteratee2, undefined2, group);
            });
          }
          var without = baseRest(function(array, values2) {
            return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
          });
          var xor = baseRest(function(arrays) {
            return baseXor(arrayFilter(arrays, isArrayLikeObject));
          });
          var xorBy = baseRest(function(arrays) {
            var iteratee2 = last(arrays);
            if (isArrayLikeObject(iteratee2)) {
              iteratee2 = undefined2;
            }
            return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
          });
          var xorWith = baseRest(function(arrays) {
            var comparator = last(arrays);
            comparator = typeof comparator == "function" ? comparator : undefined2;
            return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
          });
          var zip = baseRest(unzip);
          function zipObject(props, values2) {
            return baseZipObject(props || [], values2 || [], assignValue);
          }
          function zipObjectDeep(props, values2) {
            return baseZipObject(props || [], values2 || [], baseSet);
          }
          var zipWith = baseRest(function(arrays) {
            var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
            iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
            return unzipWith(arrays, iteratee2);
          });
          function chain(value) {
            var result2 = lodash(value);
            result2.__chain__ = true;
            return result2;
          }
          function tap(value, interceptor) {
            interceptor(value);
            return value;
          }
          function thru(value, interceptor) {
            return interceptor(value);
          }
          var wrapperAt = flatRest(function(paths) {
            var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
              return baseAt(object, paths);
            };
            if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
              return this.thru(interceptor);
            }
            value = value.slice(start, +start + (length ? 1 : 0));
            value.__actions__.push({
              "func": thru,
              "args": [interceptor],
              "thisArg": undefined2
            });
            return new LodashWrapper(value, this.__chain__).thru(function(array) {
              if (length && !array.length) {
                array.push(undefined2);
              }
              return array;
            });
          });
          function wrapperChain() {
            return chain(this);
          }
          function wrapperCommit() {
            return new LodashWrapper(this.value(), this.__chain__);
          }
          function wrapperNext() {
            if (this.__values__ === undefined2) {
              this.__values__ = toArray(this.value());
            }
            var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
            return { "done": done, "value": value };
          }
          function wrapperToIterator() {
            return this;
          }
          function wrapperPlant(value) {
            var result2, parent2 = this;
            while (parent2 instanceof baseLodash) {
              var clone2 = wrapperClone(parent2);
              clone2.__index__ = 0;
              clone2.__values__ = undefined2;
              if (result2) {
                previous.__wrapped__ = clone2;
              } else {
                result2 = clone2;
              }
              var previous = clone2;
              parent2 = parent2.__wrapped__;
            }
            previous.__wrapped__ = value;
            return result2;
          }
          function wrapperReverse() {
            var value = this.__wrapped__;
            if (value instanceof LazyWrapper) {
              var wrapped = value;
              if (this.__actions__.length) {
                wrapped = new LazyWrapper(this);
              }
              wrapped = wrapped.reverse();
              wrapped.__actions__.push({
                "func": thru,
                "args": [reverse],
                "thisArg": undefined2
              });
              return new LodashWrapper(wrapped, this.__chain__);
            }
            return this.thru(reverse);
          }
          function wrapperValue() {
            return baseWrapperValue(this.__wrapped__, this.__actions__);
          }
          var countBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              ++result2[key];
            } else {
              baseAssignValue(result2, key, 1);
            }
          });
          function every(collection, predicate, guard) {
            var func = isArray(collection) ? arrayEvery : baseEvery;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          function filter(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, getIteratee(predicate, 3));
          }
          var find = createFind(findIndex);
          var findLast = createFind(findLastIndex);
          function flatMap(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), 1);
          }
          function flatMapDeep(collection, iteratee2) {
            return baseFlatten(map(collection, iteratee2), INFINITY);
          }
          function flatMapDepth(collection, iteratee2, depth) {
            depth = depth === undefined2 ? 1 : toInteger(depth);
            return baseFlatten(map(collection, iteratee2), depth);
          }
          function forEach(collection, iteratee2) {
            var func = isArray(collection) ? arrayEach : baseEach;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function forEachRight(collection, iteratee2) {
            var func = isArray(collection) ? arrayEachRight : baseEachRight;
            return func(collection, getIteratee(iteratee2, 3));
          }
          var groupBy = createAggregator(function(result2, value, key) {
            if (hasOwnProperty.call(result2, key)) {
              result2[key].push(value);
            } else {
              baseAssignValue(result2, key, [value]);
            }
          });
          function includes(collection, value, fromIndex, guard) {
            collection = isArrayLike(collection) ? collection : values(collection);
            fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
            var length = collection.length;
            if (fromIndex < 0) {
              fromIndex = nativeMax(length + fromIndex, 0);
            }
            return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
          }
          var invokeMap = baseRest(function(collection, path, args) {
            var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
            baseEach(collection, function(value) {
              result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
            });
            return result2;
          });
          var keyBy = createAggregator(function(result2, value, key) {
            baseAssignValue(result2, key, value);
          });
          function map(collection, iteratee2) {
            var func = isArray(collection) ? arrayMap : baseMap;
            return func(collection, getIteratee(iteratee2, 3));
          }
          function orderBy(collection, iteratees, orders, guard) {
            if (collection == null) {
              return [];
            }
            if (!isArray(iteratees)) {
              iteratees = iteratees == null ? [] : [iteratees];
            }
            orders = guard ? undefined2 : orders;
            if (!isArray(orders)) {
              orders = orders == null ? [] : [orders];
            }
            return baseOrderBy(collection, iteratees, orders);
          }
          var partition = createAggregator(function(result2, value, key) {
            result2[key ? 0 : 1].push(value);
          }, function() {
            return [[], []];
          });
          function reduce(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
          }
          function reduceRight(collection, iteratee2, accumulator) {
            var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
            return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
          }
          function reject(collection, predicate) {
            var func = isArray(collection) ? arrayFilter : baseFilter;
            return func(collection, negate(getIteratee(predicate, 3)));
          }
          function sample(collection) {
            var func = isArray(collection) ? arraySample : baseSample;
            return func(collection);
          }
          function sampleSize(collection, n, guard) {
            if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
              n = 1;
            } else {
              n = toInteger(n);
            }
            var func = isArray(collection) ? arraySampleSize : baseSampleSize;
            return func(collection, n);
          }
          function shuffle(collection) {
            var func = isArray(collection) ? arrayShuffle : baseShuffle;
            return func(collection);
          }
          function size(collection) {
            if (collection == null) {
              return 0;
            }
            if (isArrayLike(collection)) {
              return isString(collection) ? stringSize(collection) : collection.length;
            }
            var tag = getTag(collection);
            if (tag == mapTag || tag == setTag) {
              return collection.size;
            }
            return baseKeys(collection).length;
          }
          function some(collection, predicate, guard) {
            var func = isArray(collection) ? arraySome : baseSome;
            if (guard && isIterateeCall(collection, predicate, guard)) {
              predicate = undefined2;
            }
            return func(collection, getIteratee(predicate, 3));
          }
          var sortBy = baseRest(function(collection, iteratees) {
            if (collection == null) {
              return [];
            }
            var length = iteratees.length;
            if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
              iteratees = [];
            } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
              iteratees = [iteratees[0]];
            }
            return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
          });
          var now = ctxNow || function() {
            return root.Date.now();
          };
          function after(n, func) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function() {
              if (--n < 1) {
                return func.apply(this, arguments);
              }
            };
          }
          function ary(func, n, guard) {
            n = guard ? undefined2 : n;
            n = func && n == null ? func.length : n;
            return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
          }
          function before(n, func) {
            var result2;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            n = toInteger(n);
            return function() {
              if (--n > 0) {
                result2 = func.apply(this, arguments);
              }
              if (n <= 1) {
                func = undefined2;
              }
              return result2;
            };
          }
          var bind = baseRest(function(func, thisArg, partials) {
            var bitmask = WRAP_BIND_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bind));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(func, bitmask, thisArg, partials, holders);
          });
          var bindKey = baseRest(function(object, key, partials) {
            var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
            if (partials.length) {
              var holders = replaceHolders(partials, getHolder(bindKey));
              bitmask |= WRAP_PARTIAL_FLAG;
            }
            return createWrap(key, bitmask, object, partials, holders);
          });
          function curry(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curry.placeholder;
            return result2;
          }
          function curryRight(func, arity, guard) {
            arity = guard ? undefined2 : arity;
            var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
            result2.placeholder = curryRight.placeholder;
            return result2;
          }
          function debounce(func, wait, options) {
            var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            wait = toNumber(wait) || 0;
            if (isObject(options)) {
              leading = !!options.leading;
              maxing = "maxWait" in options;
              maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            function invokeFunc(time) {
              var args = lastArgs, thisArg = lastThis;
              lastArgs = lastThis = undefined2;
              lastInvokeTime = time;
              result2 = func.apply(thisArg, args);
              return result2;
            }
            function leadingEdge(time) {
              lastInvokeTime = time;
              timerId = setTimeout2(timerExpired, wait);
              return leading ? invokeFunc(time) : result2;
            }
            function remainingWait(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
              return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
            }
            function shouldInvoke(time) {
              var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
              return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
            }
            function timerExpired() {
              var time = now();
              if (shouldInvoke(time)) {
                return trailingEdge(time);
              }
              timerId = setTimeout2(timerExpired, remainingWait(time));
            }
            function trailingEdge(time) {
              timerId = undefined2;
              if (trailing && lastArgs) {
                return invokeFunc(time);
              }
              lastArgs = lastThis = undefined2;
              return result2;
            }
            function cancel() {
              if (timerId !== undefined2) {
                clearTimeout(timerId);
              }
              lastInvokeTime = 0;
              lastArgs = lastCallTime = lastThis = timerId = undefined2;
            }
            function flush() {
              return timerId === undefined2 ? result2 : trailingEdge(now());
            }
            function debounced() {
              var time = now(), isInvoking = shouldInvoke(time);
              lastArgs = arguments;
              lastThis = this;
              lastCallTime = time;
              if (isInvoking) {
                if (timerId === undefined2) {
                  return leadingEdge(lastCallTime);
                }
                if (maxing) {
                  clearTimeout(timerId);
                  timerId = setTimeout2(timerExpired, wait);
                  return invokeFunc(lastCallTime);
                }
              }
              if (timerId === undefined2) {
                timerId = setTimeout2(timerExpired, wait);
              }
              return result2;
            }
            debounced.cancel = cancel;
            debounced.flush = flush;
            return debounced;
          }
          var defer = baseRest(function(func, args) {
            return baseDelay(func, 1, args);
          });
          var delay = baseRest(function(func, wait, args) {
            return baseDelay(func, toNumber(wait) || 0, args);
          });
          function flip(func) {
            return createWrap(func, WRAP_FLIP_FLAG);
          }
          function memoize(func, resolver) {
            if (typeof func != "function" || resolver != null && typeof resolver != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            var memoized = function() {
              var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
              if (cache.has(key)) {
                return cache.get(key);
              }
              var result2 = func.apply(this, args);
              memoized.cache = cache.set(key, result2) || cache;
              return result2;
            };
            memoized.cache = new (memoize.Cache || MapCache)();
            return memoized;
          }
          memoize.Cache = MapCache;
          function negate(predicate) {
            if (typeof predicate != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return function() {
              var args = arguments;
              switch (args.length) {
                case 0:
                  return !predicate.call(this);
                case 1:
                  return !predicate.call(this, args[0]);
                case 2:
                  return !predicate.call(this, args[0], args[1]);
                case 3:
                  return !predicate.call(this, args[0], args[1], args[2]);
              }
              return !predicate.apply(this, args);
            };
          }
          function once(func) {
            return before(2, func);
          }
          var overArgs = castRest(function(func, transforms) {
            transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
            var funcsLength = transforms.length;
            return baseRest(function(args) {
              var index = -1, length = nativeMin(args.length, funcsLength);
              while (++index < length) {
                args[index] = transforms[index].call(this, args[index]);
              }
              return apply(func, this, args);
            });
          });
          var partial = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partial));
            return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
          });
          var partialRight = baseRest(function(func, partials) {
            var holders = replaceHolders(partials, getHolder(partialRight));
            return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
          });
          var rearg = flatRest(function(func, indexes) {
            return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
          });
          function rest(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start === undefined2 ? start : toInteger(start);
            return baseRest(func, start);
          }
          function spread(func, start) {
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            start = start == null ? 0 : nativeMax(toInteger(start), 0);
            return baseRest(function(args) {
              var array = args[start], otherArgs = castSlice(args, 0, start);
              if (array) {
                arrayPush(otherArgs, array);
              }
              return apply(func, this, otherArgs);
            });
          }
          function throttle(func, wait, options) {
            var leading = true, trailing = true;
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (isObject(options)) {
              leading = "leading" in options ? !!options.leading : leading;
              trailing = "trailing" in options ? !!options.trailing : trailing;
            }
            return debounce(func, wait, {
              "leading": leading,
              "maxWait": wait,
              "trailing": trailing
            });
          }
          function unary(func) {
            return ary(func, 1);
          }
          function wrap(value, wrapper) {
            return partial(castFunction(wrapper), value);
          }
          function castArray() {
            if (!arguments.length) {
              return [];
            }
            var value = arguments[0];
            return isArray(value) ? value : [value];
          }
          function clone(value) {
            return baseClone(value, CLONE_SYMBOLS_FLAG);
          }
          function cloneWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
          }
          function cloneDeep(value) {
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
          }
          function cloneDeepWith(value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
          }
          function conformsTo(object, source) {
            return source == null || baseConformsTo(object, source, keys(source));
          }
          function eq(value, other) {
            return value === other || value !== value && other !== other;
          }
          var gt = createRelationalOperation(baseGt);
          var gte = createRelationalOperation(function(value, other) {
            return value >= other;
          });
          var isArguments = baseIsArguments(function() {
            return arguments;
          }()) ? baseIsArguments : function(value) {
            return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
          };
          var isArray = Array2.isArray;
          var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
          function isArrayLike(value) {
            return value != null && isLength(value.length) && !isFunction(value);
          }
          function isArrayLikeObject(value) {
            return isObjectLike(value) && isArrayLike(value);
          }
          function isBoolean(value) {
            return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
          }
          var isBuffer = nativeIsBuffer || stubFalse;
          var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
          function isElement(value) {
            return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
          }
          function isEmpty(value) {
            if (value == null) {
              return true;
            }
            if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
              return !value.length;
            }
            var tag = getTag(value);
            if (tag == mapTag || tag == setTag) {
              return !value.size;
            }
            if (isPrototype(value)) {
              return !baseKeys(value).length;
            }
            for (var key in value) {
              if (hasOwnProperty.call(value, key)) {
                return false;
              }
            }
            return true;
          }
          function isEqual(value, other) {
            return baseIsEqual(value, other);
          }
          function isEqualWith(value, other, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            var result2 = customizer ? customizer(value, other) : undefined2;
            return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
          }
          function isError(value) {
            if (!isObjectLike(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
          }
          function isFinite(value) {
            return typeof value == "number" && nativeIsFinite(value);
          }
          function isFunction(value) {
            if (!isObject(value)) {
              return false;
            }
            var tag = baseGetTag(value);
            return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
          }
          function isInteger(value) {
            return typeof value == "number" && value == toInteger(value);
          }
          function isLength(value) {
            return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
          }
          function isObject(value) {
            var type = typeof value;
            return value != null && (type == "object" || type == "function");
          }
          function isObjectLike(value) {
            return value != null && typeof value == "object";
          }
          var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
          function isMatch(object, source) {
            return object === source || baseIsMatch(object, source, getMatchData(source));
          }
          function isMatchWith(object, source, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return baseIsMatch(object, source, getMatchData(source), customizer);
          }
          function isNaN(value) {
            return isNumber(value) && value != +value;
          }
          function isNative(value) {
            if (isMaskable(value)) {
              throw new Error2(CORE_ERROR_TEXT);
            }
            return baseIsNative(value);
          }
          function isNull(value) {
            return value === null;
          }
          function isNil(value) {
            return value == null;
          }
          function isNumber(value) {
            return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
          }
          function isPlainObject(value) {
            if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
              return false;
            }
            var proto = getPrototype(value);
            if (proto === null) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }
          var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
          function isSafeInteger(value) {
            return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
          }
          var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
          function isString(value) {
            return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
          }
          function isSymbol(value) {
            return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
          }
          var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
          function isUndefined(value) {
            return value === undefined2;
          }
          function isWeakMap(value) {
            return isObjectLike(value) && getTag(value) == weakMapTag;
          }
          function isWeakSet(value) {
            return isObjectLike(value) && baseGetTag(value) == weakSetTag;
          }
          var lt = createRelationalOperation(baseLt);
          var lte = createRelationalOperation(function(value, other) {
            return value <= other;
          });
          function toArray(value) {
            if (!value) {
              return [];
            }
            if (isArrayLike(value)) {
              return isString(value) ? stringToArray(value) : copyArray(value);
            }
            if (symIterator && value[symIterator]) {
              return iteratorToArray(value[symIterator]());
            }
            var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
            return func(value);
          }
          function toFinite(value) {
            if (!value) {
              return value === 0 ? value : 0;
            }
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
              var sign = value < 0 ? -1 : 1;
              return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
          }
          function toInteger(value) {
            var result2 = toFinite(value), remainder = result2 % 1;
            return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
          }
          function toLength(value) {
            return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
          }
          function toNumber(value) {
            if (typeof value == "number") {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            if (isObject(value)) {
              var other = typeof value.valueOf == "function" ? value.valueOf() : value;
              value = isObject(other) ? other + "" : other;
            }
            if (typeof value != "string") {
              return value === 0 ? value : +value;
            }
            value = baseTrim(value);
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
          }
          function toPlainObject(value) {
            return copyObject(value, keysIn(value));
          }
          function toSafeInteger(value) {
            return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
          }
          function toString(value) {
            return value == null ? "" : baseToString(value);
          }
          var assign = createAssigner(function(object, source) {
            if (isPrototype(source) || isArrayLike(source)) {
              copyObject(source, keys(source), object);
              return;
            }
            for (var key in source) {
              if (hasOwnProperty.call(source, key)) {
                assignValue(object, key, source[key]);
              }
            }
          });
          var assignIn = createAssigner(function(object, source) {
            copyObject(source, keysIn(source), object);
          });
          var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keysIn(source), object, customizer);
          });
          var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
            copyObject(source, keys(source), object, customizer);
          });
          var at = flatRest(baseAt);
          function create(prototype, properties) {
            var result2 = baseCreate(prototype);
            return properties == null ? result2 : baseAssign(result2, properties);
          }
          var defaults = baseRest(function(object, sources) {
            object = Object2(object);
            var index = -1;
            var length = sources.length;
            var guard = length > 2 ? sources[2] : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              length = 1;
            }
            while (++index < length) {
              var source = sources[index];
              var props = keysIn(source);
              var propsIndex = -1;
              var propsLength = props.length;
              while (++propsIndex < propsLength) {
                var key = props[propsIndex];
                var value = object[key];
                if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                  object[key] = source[key];
                }
              }
            }
            return object;
          });
          var defaultsDeep = baseRest(function(args) {
            args.push(undefined2, customDefaultsMerge);
            return apply(mergeWith, undefined2, args);
          });
          function findKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
          }
          function findLastKey(object, predicate) {
            return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
          }
          function forIn(object, iteratee2) {
            return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forInRight(object, iteratee2) {
            return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
          }
          function forOwn(object, iteratee2) {
            return object && baseForOwn(object, getIteratee(iteratee2, 3));
          }
          function forOwnRight(object, iteratee2) {
            return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
          }
          function functions(object) {
            return object == null ? [] : baseFunctions(object, keys(object));
          }
          function functionsIn(object) {
            return object == null ? [] : baseFunctions(object, keysIn(object));
          }
          function get(object, path, defaultValue) {
            var result2 = object == null ? undefined2 : baseGet(object, path);
            return result2 === undefined2 ? defaultValue : result2;
          }
          function has(object, path) {
            return object != null && hasPath(object, path, baseHas);
          }
          function hasIn(object, path) {
            return object != null && hasPath(object, path, baseHasIn);
          }
          var invert = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            result2[value] = key;
          }, constant(identity));
          var invertBy = createInverter(function(result2, value, key) {
            if (value != null && typeof value.toString != "function") {
              value = nativeObjectToString.call(value);
            }
            if (hasOwnProperty.call(result2, value)) {
              result2[value].push(key);
            } else {
              result2[value] = [key];
            }
          }, getIteratee);
          var invoke = baseRest(baseInvoke);
          function keys(object) {
            return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
          }
          function keysIn(object) {
            return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
          }
          function mapKeys(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, iteratee2(value, key, object2), value);
            });
            return result2;
          }
          function mapValues(object, iteratee2) {
            var result2 = {};
            iteratee2 = getIteratee(iteratee2, 3);
            baseForOwn(object, function(value, key, object2) {
              baseAssignValue(result2, key, iteratee2(value, key, object2));
            });
            return result2;
          }
          var merge = createAssigner(function(object, source, srcIndex) {
            baseMerge(object, source, srcIndex);
          });
          var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
            baseMerge(object, source, srcIndex, customizer);
          });
          var omit = flatRest(function(object, paths) {
            var result2 = {};
            if (object == null) {
              return result2;
            }
            var isDeep = false;
            paths = arrayMap(paths, function(path) {
              path = castPath(path, object);
              isDeep || (isDeep = path.length > 1);
              return path;
            });
            copyObject(object, getAllKeysIn(object), result2);
            if (isDeep) {
              result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
            }
            var length = paths.length;
            while (length--) {
              baseUnset(result2, paths[length]);
            }
            return result2;
          });
          function omitBy(object, predicate) {
            return pickBy(object, negate(getIteratee(predicate)));
          }
          var pick = flatRest(function(object, paths) {
            return object == null ? {} : basePick(object, paths);
          });
          function pickBy(object, predicate) {
            if (object == null) {
              return {};
            }
            var props = arrayMap(getAllKeysIn(object), function(prop) {
              return [prop];
            });
            predicate = getIteratee(predicate);
            return basePickBy(object, props, function(value, path) {
              return predicate(value, path[0]);
            });
          }
          function result(object, path, defaultValue) {
            path = castPath(path, object);
            var index = -1, length = path.length;
            if (!length) {
              length = 1;
              object = undefined2;
            }
            while (++index < length) {
              var value = object == null ? undefined2 : object[toKey(path[index])];
              if (value === undefined2) {
                index = length;
                value = defaultValue;
              }
              object = isFunction(value) ? value.call(object) : value;
            }
            return object;
          }
          function set(object, path, value) {
            return object == null ? object : baseSet(object, path, value);
          }
          function setWith(object, path, value, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseSet(object, path, value, customizer);
          }
          var toPairs = createToPairs(keys);
          var toPairsIn = createToPairs(keysIn);
          function transform(object, iteratee2, accumulator) {
            var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
            iteratee2 = getIteratee(iteratee2, 4);
            if (accumulator == null) {
              var Ctor = object && object.constructor;
              if (isArrLike) {
                accumulator = isArr ? new Ctor() : [];
              } else if (isObject(object)) {
                accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
              } else {
                accumulator = {};
              }
            }
            (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
              return iteratee2(accumulator, value, index, object2);
            });
            return accumulator;
          }
          function unset(object, path) {
            return object == null ? true : baseUnset(object, path);
          }
          function update(object, path, updater) {
            return object == null ? object : baseUpdate(object, path, castFunction(updater));
          }
          function updateWith(object, path, updater, customizer) {
            customizer = typeof customizer == "function" ? customizer : undefined2;
            return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
          }
          function values(object) {
            return object == null ? [] : baseValues(object, keys(object));
          }
          function valuesIn(object) {
            return object == null ? [] : baseValues(object, keysIn(object));
          }
          function clamp(number, lower, upper) {
            if (upper === undefined2) {
              upper = lower;
              lower = undefined2;
            }
            if (upper !== undefined2) {
              upper = toNumber(upper);
              upper = upper === upper ? upper : 0;
            }
            if (lower !== undefined2) {
              lower = toNumber(lower);
              lower = lower === lower ? lower : 0;
            }
            return baseClamp(toNumber(number), lower, upper);
          }
          function inRange(number, start, end) {
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            number = toNumber(number);
            return baseInRange(number, start, end);
          }
          function random(lower, upper, floating) {
            if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
              upper = floating = undefined2;
            }
            if (floating === undefined2) {
              if (typeof upper == "boolean") {
                floating = upper;
                upper = undefined2;
              } else if (typeof lower == "boolean") {
                floating = lower;
                lower = undefined2;
              }
            }
            if (lower === undefined2 && upper === undefined2) {
              lower = 0;
              upper = 1;
            } else {
              lower = toFinite(lower);
              if (upper === undefined2) {
                upper = lower;
                lower = 0;
              } else {
                upper = toFinite(upper);
              }
            }
            if (lower > upper) {
              var temp = lower;
              lower = upper;
              upper = temp;
            }
            if (floating || lower % 1 || upper % 1) {
              var rand = nativeRandom();
              return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
            }
            return baseRandom(lower, upper);
          }
          var camelCase = createCompounder(function(result2, word, index) {
            word = word.toLowerCase();
            return result2 + (index ? capitalize(word) : word);
          });
          function capitalize(string) {
            return upperFirst(toString(string).toLowerCase());
          }
          function deburr(string) {
            string = toString(string);
            return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
          }
          function endsWith(string, target, position) {
            string = toString(string);
            target = baseToString(target);
            var length = string.length;
            position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
            var end = position;
            position -= target.length;
            return position >= 0 && string.slice(position, end) == target;
          }
          function escape(string) {
            string = toString(string);
            return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
          }
          function escapeRegExp(string) {
            string = toString(string);
            return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
          }
          var kebabCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "-" : "") + word.toLowerCase();
          });
          var lowerCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toLowerCase();
          });
          var lowerFirst = createCaseFirst("toLowerCase");
          function pad(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            if (!length || strLength >= length) {
              return string;
            }
            var mid = (length - strLength) / 2;
            return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
          }
          function padEnd(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
          }
          function padStart(string, length, chars) {
            string = toString(string);
            length = toInteger(length);
            var strLength = length ? stringSize(string) : 0;
            return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
          }
          function parseInt2(string, radix, guard) {
            if (guard || radix == null) {
              radix = 0;
            } else if (radix) {
              radix = +radix;
            }
            return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
          }
          function repeat(string, n, guard) {
            if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
              n = 1;
            } else {
              n = toInteger(n);
            }
            return baseRepeat(toString(string), n);
          }
          function replace() {
            var args = arguments, string = toString(args[0]);
            return args.length < 3 ? string : string.replace(args[1], args[2]);
          }
          var snakeCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? "_" : "") + word.toLowerCase();
          });
          function split(string, separator, limit) {
            if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
              separator = limit = undefined2;
            }
            limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
            if (!limit) {
              return [];
            }
            string = toString(string);
            if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
              separator = baseToString(separator);
              if (!separator && hasUnicode(string)) {
                return castSlice(stringToArray(string), 0, limit);
              }
            }
            return string.split(separator, limit);
          }
          var startCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + upperFirst(word);
          });
          function startsWith(string, target, position) {
            string = toString(string);
            position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
            target = baseToString(target);
            return string.slice(position, position + target.length) == target;
          }
          function template(string, options, guard) {
            var settings = lodash.templateSettings;
            if (guard && isIterateeCall(string, options, guard)) {
              options = undefined2;
            }
            string = toString(string);
            options = assignInWith({}, options, settings, customDefaultsAssignIn);
            var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
            var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
            var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
            var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
            string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
              interpolateValue || (interpolateValue = esTemplateValue);
              source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
              if (escapeValue) {
                isEscaping = true;
                source += "' +\n__e(" + escapeValue + ") +\n'";
              }
              if (evaluateValue) {
                isEvaluating = true;
                source += "';\n" + evaluateValue + ";\n__p += '";
              }
              if (interpolateValue) {
                source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
              }
              index = offset + match.length;
              return match;
            });
            source += "';\n";
            var variable = hasOwnProperty.call(options, "variable") && options.variable;
            if (!variable) {
              source = "with (obj) {\n" + source + "\n}\n";
            } else if (reForbiddenIdentifierChars.test(variable)) {
              throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
            }
            source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
            source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
            var result2 = attempt(function() {
              return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
            });
            result2.source = source;
            if (isError(result2)) {
              throw result2;
            }
            return result2;
          }
          function toLower(value) {
            return toString(value).toLowerCase();
          }
          function toUpper(value) {
            return toString(value).toUpperCase();
          }
          function trim(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return baseTrim(string);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
            return castSlice(strSymbols, start, end).join("");
          }
          function trimEnd(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return string.slice(0, trimmedEndIndex(string) + 1);
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
            return castSlice(strSymbols, 0, end).join("");
          }
          function trimStart(string, chars, guard) {
            string = toString(string);
            if (string && (guard || chars === undefined2)) {
              return string.replace(reTrimStart, "");
            }
            if (!string || !(chars = baseToString(chars))) {
              return string;
            }
            var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
            return castSlice(strSymbols, start).join("");
          }
          function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
              var separator = "separator" in options ? options.separator : separator;
              length = "length" in options ? toInteger(options.length) : length;
              omission = "omission" in options ? baseToString(options.omission) : omission;
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
              var strSymbols = stringToArray(string);
              strLength = strSymbols.length;
            }
            if (length >= strLength) {
              return string;
            }
            var end = length - stringSize(omission);
            if (end < 1) {
              return omission;
            }
            var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
            if (separator === undefined2) {
              return result2 + omission;
            }
            if (strSymbols) {
              end += result2.length - end;
            }
            if (isRegExp(separator)) {
              if (string.slice(end).search(separator)) {
                var match, substring = result2;
                if (!separator.global) {
                  separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
                }
                separator.lastIndex = 0;
                while (match = separator.exec(substring)) {
                  var newEnd = match.index;
                }
                result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
              }
            } else if (string.indexOf(baseToString(separator), end) != end) {
              var index = result2.lastIndexOf(separator);
              if (index > -1) {
                result2 = result2.slice(0, index);
              }
            }
            return result2 + omission;
          }
          function unescape2(string) {
            string = toString(string);
            return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
          }
          var upperCase = createCompounder(function(result2, word, index) {
            return result2 + (index ? " " : "") + word.toUpperCase();
          });
          var upperFirst = createCaseFirst("toUpperCase");
          function words(string, pattern, guard) {
            string = toString(string);
            pattern = guard ? undefined2 : pattern;
            if (pattern === undefined2) {
              return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
            }
            return string.match(pattern) || [];
          }
          var attempt = baseRest(function(func, args) {
            try {
              return apply(func, undefined2, args);
            } catch (e) {
              return isError(e) ? e : new Error2(e);
            }
          });
          var bindAll = flatRest(function(object, methodNames) {
            arrayEach(methodNames, function(key) {
              key = toKey(key);
              baseAssignValue(object, key, bind(object[key], object));
            });
            return object;
          });
          function cond(pairs) {
            var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
            pairs = !length ? [] : arrayMap(pairs, function(pair) {
              if (typeof pair[1] != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              return [toIteratee(pair[0]), pair[1]];
            });
            return baseRest(function(args) {
              var index = -1;
              while (++index < length) {
                var pair = pairs[index];
                if (apply(pair[0], this, args)) {
                  return apply(pair[1], this, args);
                }
              }
            });
          }
          function conforms(source) {
            return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
          }
          function constant(value) {
            return function() {
              return value;
            };
          }
          function defaultTo(value, defaultValue) {
            return value == null || value !== value ? defaultValue : value;
          }
          var flow = createFlow();
          var flowRight = createFlow(true);
          function identity(value) {
            return value;
          }
          function iteratee(func) {
            return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
          }
          function matches(source) {
            return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
          }
          function matchesProperty(path, srcValue) {
            return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
          }
          var method = baseRest(function(path, args) {
            return function(object) {
              return baseInvoke(object, path, args);
            };
          });
          var methodOf = baseRest(function(object, args) {
            return function(path) {
              return baseInvoke(object, path, args);
            };
          });
          function mixin(object, source, options) {
            var props = keys(source), methodNames = baseFunctions(source, props);
            if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
              options = source;
              source = object;
              object = this;
              methodNames = baseFunctions(source, keys(source));
            }
            var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
            arrayEach(methodNames, function(methodName) {
              var func = source[methodName];
              object[methodName] = func;
              if (isFunc) {
                object.prototype[methodName] = function() {
                  var chainAll = this.__chain__;
                  if (chain2 || chainAll) {
                    var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                    actions.push({ "func": func, "args": arguments, "thisArg": object });
                    result2.__chain__ = chainAll;
                    return result2;
                  }
                  return func.apply(object, arrayPush([this.value()], arguments));
                };
              }
            });
            return object;
          }
          function noConflict() {
            if (root._ === this) {
              root._ = oldDash;
            }
            return this;
          }
          function noop() {
          }
          function nthArg(n) {
            n = toInteger(n);
            return baseRest(function(args) {
              return baseNth(args, n);
            });
          }
          var over = createOver(arrayMap);
          var overEvery = createOver(arrayEvery);
          var overSome = createOver(arraySome);
          function property(path) {
            return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
          }
          function propertyOf(object) {
            return function(path) {
              return object == null ? undefined2 : baseGet(object, path);
            };
          }
          var range = createRange();
          var rangeRight = createRange(true);
          function stubArray() {
            return [];
          }
          function stubFalse() {
            return false;
          }
          function stubObject() {
            return {};
          }
          function stubString() {
            return "";
          }
          function stubTrue() {
            return true;
          }
          function times(n, iteratee2) {
            n = toInteger(n);
            if (n < 1 || n > MAX_SAFE_INTEGER) {
              return [];
            }
            var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
            iteratee2 = getIteratee(iteratee2);
            n -= MAX_ARRAY_LENGTH;
            var result2 = baseTimes(length, iteratee2);
            while (++index < n) {
              iteratee2(index);
            }
            return result2;
          }
          function toPath(value) {
            if (isArray(value)) {
              return arrayMap(value, toKey);
            }
            return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
          }
          function uniqueId(prefix) {
            var id = ++idCounter;
            return toString(prefix) + id;
          }
          var add = createMathOperation(function(augend, addend) {
            return augend + addend;
          }, 0);
          var ceil = createRound("ceil");
          var divide = createMathOperation(function(dividend, divisor) {
            return dividend / divisor;
          }, 1);
          var floor = createRound("floor");
          function max(array) {
            return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
          }
          function maxBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
          }
          function mean(array) {
            return baseMean(array, identity);
          }
          function meanBy(array, iteratee2) {
            return baseMean(array, getIteratee(iteratee2, 2));
          }
          function min(array) {
            return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
          }
          function minBy(array, iteratee2) {
            return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
          }
          var multiply = createMathOperation(function(multiplier, multiplicand) {
            return multiplier * multiplicand;
          }, 1);
          var round = createRound("round");
          var subtract = createMathOperation(function(minuend, subtrahend) {
            return minuend - subtrahend;
          }, 0);
          function sum(array) {
            return array && array.length ? baseSum(array, identity) : 0;
          }
          function sumBy(array, iteratee2) {
            return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
          }
          lodash.after = after;
          lodash.ary = ary;
          lodash.assign = assign;
          lodash.assignIn = assignIn;
          lodash.assignInWith = assignInWith;
          lodash.assignWith = assignWith;
          lodash.at = at;
          lodash.before = before;
          lodash.bind = bind;
          lodash.bindAll = bindAll;
          lodash.bindKey = bindKey;
          lodash.castArray = castArray;
          lodash.chain = chain;
          lodash.chunk = chunk;
          lodash.compact = compact;
          lodash.concat = concat;
          lodash.cond = cond;
          lodash.conforms = conforms;
          lodash.constant = constant;
          lodash.countBy = countBy;
          lodash.create = create;
          lodash.curry = curry;
          lodash.curryRight = curryRight;
          lodash.debounce = debounce;
          lodash.defaults = defaults;
          lodash.defaultsDeep = defaultsDeep;
          lodash.defer = defer;
          lodash.delay = delay;
          lodash.difference = difference;
          lodash.differenceBy = differenceBy;
          lodash.differenceWith = differenceWith;
          lodash.drop = drop;
          lodash.dropRight = dropRight;
          lodash.dropRightWhile = dropRightWhile;
          lodash.dropWhile = dropWhile;
          lodash.fill = fill;
          lodash.filter = filter;
          lodash.flatMap = flatMap;
          lodash.flatMapDeep = flatMapDeep;
          lodash.flatMapDepth = flatMapDepth;
          lodash.flatten = flatten;
          lodash.flattenDeep = flattenDeep;
          lodash.flattenDepth = flattenDepth;
          lodash.flip = flip;
          lodash.flow = flow;
          lodash.flowRight = flowRight;
          lodash.fromPairs = fromPairs;
          lodash.functions = functions;
          lodash.functionsIn = functionsIn;
          lodash.groupBy = groupBy;
          lodash.initial = initial;
          lodash.intersection = intersection;
          lodash.intersectionBy = intersectionBy;
          lodash.intersectionWith = intersectionWith;
          lodash.invert = invert;
          lodash.invertBy = invertBy;
          lodash.invokeMap = invokeMap;
          lodash.iteratee = iteratee;
          lodash.keyBy = keyBy;
          lodash.keys = keys;
          lodash.keysIn = keysIn;
          lodash.map = map;
          lodash.mapKeys = mapKeys;
          lodash.mapValues = mapValues;
          lodash.matches = matches;
          lodash.matchesProperty = matchesProperty;
          lodash.memoize = memoize;
          lodash.merge = merge;
          lodash.mergeWith = mergeWith;
          lodash.method = method;
          lodash.methodOf = methodOf;
          lodash.mixin = mixin;
          lodash.negate = negate;
          lodash.nthArg = nthArg;
          lodash.omit = omit;
          lodash.omitBy = omitBy;
          lodash.once = once;
          lodash.orderBy = orderBy;
          lodash.over = over;
          lodash.overArgs = overArgs;
          lodash.overEvery = overEvery;
          lodash.overSome = overSome;
          lodash.partial = partial;
          lodash.partialRight = partialRight;
          lodash.partition = partition;
          lodash.pick = pick;
          lodash.pickBy = pickBy;
          lodash.property = property;
          lodash.propertyOf = propertyOf;
          lodash.pull = pull;
          lodash.pullAll = pullAll;
          lodash.pullAllBy = pullAllBy;
          lodash.pullAllWith = pullAllWith;
          lodash.pullAt = pullAt;
          lodash.range = range;
          lodash.rangeRight = rangeRight;
          lodash.rearg = rearg;
          lodash.reject = reject;
          lodash.remove = remove;
          lodash.rest = rest;
          lodash.reverse = reverse;
          lodash.sampleSize = sampleSize;
          lodash.set = set;
          lodash.setWith = setWith;
          lodash.shuffle = shuffle;
          lodash.slice = slice;
          lodash.sortBy = sortBy;
          lodash.sortedUniq = sortedUniq;
          lodash.sortedUniqBy = sortedUniqBy;
          lodash.split = split;
          lodash.spread = spread;
          lodash.tail = tail;
          lodash.take = take;
          lodash.takeRight = takeRight;
          lodash.takeRightWhile = takeRightWhile;
          lodash.takeWhile = takeWhile;
          lodash.tap = tap;
          lodash.throttle = throttle;
          lodash.thru = thru;
          lodash.toArray = toArray;
          lodash.toPairs = toPairs;
          lodash.toPairsIn = toPairsIn;
          lodash.toPath = toPath;
          lodash.toPlainObject = toPlainObject;
          lodash.transform = transform;
          lodash.unary = unary;
          lodash.union = union;
          lodash.unionBy = unionBy;
          lodash.unionWith = unionWith;
          lodash.uniq = uniq;
          lodash.uniqBy = uniqBy;
          lodash.uniqWith = uniqWith;
          lodash.unset = unset;
          lodash.unzip = unzip;
          lodash.unzipWith = unzipWith;
          lodash.update = update;
          lodash.updateWith = updateWith;
          lodash.values = values;
          lodash.valuesIn = valuesIn;
          lodash.without = without;
          lodash.words = words;
          lodash.wrap = wrap;
          lodash.xor = xor;
          lodash.xorBy = xorBy;
          lodash.xorWith = xorWith;
          lodash.zip = zip;
          lodash.zipObject = zipObject;
          lodash.zipObjectDeep = zipObjectDeep;
          lodash.zipWith = zipWith;
          lodash.entries = toPairs;
          lodash.entriesIn = toPairsIn;
          lodash.extend = assignIn;
          lodash.extendWith = assignInWith;
          mixin(lodash, lodash);
          lodash.add = add;
          lodash.attempt = attempt;
          lodash.camelCase = camelCase;
          lodash.capitalize = capitalize;
          lodash.ceil = ceil;
          lodash.clamp = clamp;
          lodash.clone = clone;
          lodash.cloneDeep = cloneDeep;
          lodash.cloneDeepWith = cloneDeepWith;
          lodash.cloneWith = cloneWith;
          lodash.conformsTo = conformsTo;
          lodash.deburr = deburr;
          lodash.defaultTo = defaultTo;
          lodash.divide = divide;
          lodash.endsWith = endsWith;
          lodash.eq = eq;
          lodash.escape = escape;
          lodash.escapeRegExp = escapeRegExp;
          lodash.every = every;
          lodash.find = find;
          lodash.findIndex = findIndex;
          lodash.findKey = findKey;
          lodash.findLast = findLast;
          lodash.findLastIndex = findLastIndex;
          lodash.findLastKey = findLastKey;
          lodash.floor = floor;
          lodash.forEach = forEach;
          lodash.forEachRight = forEachRight;
          lodash.forIn = forIn;
          lodash.forInRight = forInRight;
          lodash.forOwn = forOwn;
          lodash.forOwnRight = forOwnRight;
          lodash.get = get;
          lodash.gt = gt;
          lodash.gte = gte;
          lodash.has = has;
          lodash.hasIn = hasIn;
          lodash.head = head;
          lodash.identity = identity;
          lodash.includes = includes;
          lodash.indexOf = indexOf;
          lodash.inRange = inRange;
          lodash.invoke = invoke;
          lodash.isArguments = isArguments;
          lodash.isArray = isArray;
          lodash.isArrayBuffer = isArrayBuffer;
          lodash.isArrayLike = isArrayLike;
          lodash.isArrayLikeObject = isArrayLikeObject;
          lodash.isBoolean = isBoolean;
          lodash.isBuffer = isBuffer;
          lodash.isDate = isDate;
          lodash.isElement = isElement;
          lodash.isEmpty = isEmpty;
          lodash.isEqual = isEqual;
          lodash.isEqualWith = isEqualWith;
          lodash.isError = isError;
          lodash.isFinite = isFinite;
          lodash.isFunction = isFunction;
          lodash.isInteger = isInteger;
          lodash.isLength = isLength;
          lodash.isMap = isMap;
          lodash.isMatch = isMatch;
          lodash.isMatchWith = isMatchWith;
          lodash.isNaN = isNaN;
          lodash.isNative = isNative;
          lodash.isNil = isNil;
          lodash.isNull = isNull;
          lodash.isNumber = isNumber;
          lodash.isObject = isObject;
          lodash.isObjectLike = isObjectLike;
          lodash.isPlainObject = isPlainObject;
          lodash.isRegExp = isRegExp;
          lodash.isSafeInteger = isSafeInteger;
          lodash.isSet = isSet;
          lodash.isString = isString;
          lodash.isSymbol = isSymbol;
          lodash.isTypedArray = isTypedArray;
          lodash.isUndefined = isUndefined;
          lodash.isWeakMap = isWeakMap;
          lodash.isWeakSet = isWeakSet;
          lodash.join = join;
          lodash.kebabCase = kebabCase;
          lodash.last = last;
          lodash.lastIndexOf = lastIndexOf;
          lodash.lowerCase = lowerCase;
          lodash.lowerFirst = lowerFirst;
          lodash.lt = lt;
          lodash.lte = lte;
          lodash.max = max;
          lodash.maxBy = maxBy;
          lodash.mean = mean;
          lodash.meanBy = meanBy;
          lodash.min = min;
          lodash.minBy = minBy;
          lodash.stubArray = stubArray;
          lodash.stubFalse = stubFalse;
          lodash.stubObject = stubObject;
          lodash.stubString = stubString;
          lodash.stubTrue = stubTrue;
          lodash.multiply = multiply;
          lodash.nth = nth;
          lodash.noConflict = noConflict;
          lodash.noop = noop;
          lodash.now = now;
          lodash.pad = pad;
          lodash.padEnd = padEnd;
          lodash.padStart = padStart;
          lodash.parseInt = parseInt2;
          lodash.random = random;
          lodash.reduce = reduce;
          lodash.reduceRight = reduceRight;
          lodash.repeat = repeat;
          lodash.replace = replace;
          lodash.result = result;
          lodash.round = round;
          lodash.runInContext = runInContext2;
          lodash.sample = sample;
          lodash.size = size;
          lodash.snakeCase = snakeCase;
          lodash.some = some;
          lodash.sortedIndex = sortedIndex;
          lodash.sortedIndexBy = sortedIndexBy;
          lodash.sortedIndexOf = sortedIndexOf;
          lodash.sortedLastIndex = sortedLastIndex;
          lodash.sortedLastIndexBy = sortedLastIndexBy;
          lodash.sortedLastIndexOf = sortedLastIndexOf;
          lodash.startCase = startCase;
          lodash.startsWith = startsWith;
          lodash.subtract = subtract;
          lodash.sum = sum;
          lodash.sumBy = sumBy;
          lodash.template = template;
          lodash.times = times;
          lodash.toFinite = toFinite;
          lodash.toInteger = toInteger;
          lodash.toLength = toLength;
          lodash.toLower = toLower;
          lodash.toNumber = toNumber;
          lodash.toSafeInteger = toSafeInteger;
          lodash.toString = toString;
          lodash.toUpper = toUpper;
          lodash.trim = trim;
          lodash.trimEnd = trimEnd;
          lodash.trimStart = trimStart;
          lodash.truncate = truncate;
          lodash.unescape = unescape2;
          lodash.uniqueId = uniqueId;
          lodash.upperCase = upperCase;
          lodash.upperFirst = upperFirst;
          lodash.each = forEach;
          lodash.eachRight = forEachRight;
          lodash.first = head;
          mixin(lodash, function() {
            var source = {};
            baseForOwn(lodash, function(func, methodName) {
              if (!hasOwnProperty.call(lodash.prototype, methodName)) {
                source[methodName] = func;
              }
            });
            return source;
          }(), { "chain": false });
          lodash.VERSION = VERSION;
          arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
            lodash[methodName].placeholder = lodash;
          });
          arrayEach(["drop", "take"], function(methodName, index) {
            LazyWrapper.prototype[methodName] = function(n) {
              n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
              var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
              if (result2.__filtered__) {
                result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
              } else {
                result2.__views__.push({
                  "size": nativeMin(n, MAX_ARRAY_LENGTH),
                  "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
                });
              }
              return result2;
            };
            LazyWrapper.prototype[methodName + "Right"] = function(n) {
              return this.reverse()[methodName](n).reverse();
            };
          });
          arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
            var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
            LazyWrapper.prototype[methodName] = function(iteratee2) {
              var result2 = this.clone();
              result2.__iteratees__.push({
                "iteratee": getIteratee(iteratee2, 3),
                "type": type
              });
              result2.__filtered__ = result2.__filtered__ || isFilter;
              return result2;
            };
          });
          arrayEach(["head", "last"], function(methodName, index) {
            var takeName = "take" + (index ? "Right" : "");
            LazyWrapper.prototype[methodName] = function() {
              return this[takeName](1).value()[0];
            };
          });
          arrayEach(["initial", "tail"], function(methodName, index) {
            var dropName = "drop" + (index ? "" : "Right");
            LazyWrapper.prototype[methodName] = function() {
              return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
            };
          });
          LazyWrapper.prototype.compact = function() {
            return this.filter(identity);
          };
          LazyWrapper.prototype.find = function(predicate) {
            return this.filter(predicate).head();
          };
          LazyWrapper.prototype.findLast = function(predicate) {
            return this.reverse().find(predicate);
          };
          LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
            if (typeof path == "function") {
              return new LazyWrapper(this);
            }
            return this.map(function(value) {
              return baseInvoke(value, path, args);
            });
          });
          LazyWrapper.prototype.reject = function(predicate) {
            return this.filter(negate(getIteratee(predicate)));
          };
          LazyWrapper.prototype.slice = function(start, end) {
            start = toInteger(start);
            var result2 = this;
            if (result2.__filtered__ && (start > 0 || end < 0)) {
              return new LazyWrapper(result2);
            }
            if (start < 0) {
              result2 = result2.takeRight(-start);
            } else if (start) {
              result2 = result2.drop(start);
            }
            if (end !== undefined2) {
              end = toInteger(end);
              result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
            }
            return result2;
          };
          LazyWrapper.prototype.takeRightWhile = function(predicate) {
            return this.reverse().takeWhile(predicate).reverse();
          };
          LazyWrapper.prototype.toArray = function() {
            return this.take(MAX_ARRAY_LENGTH);
          };
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
            if (!lodashFunc) {
              return;
            }
            lodash.prototype[methodName] = function() {
              var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
              var interceptor = function(value2) {
                var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
                return isTaker && chainAll ? result3[0] : result3;
              };
              if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
                isLazy = useLazy = false;
              }
              var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
              if (!retUnwrapped && useLazy) {
                value = onlyLazy ? value : new LazyWrapper(this);
                var result2 = func.apply(value, args);
                result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
                return new LodashWrapper(result2, chainAll);
              }
              if (isUnwrapped && onlyLazy) {
                return func.apply(this, args);
              }
              result2 = this.thru(interceptor);
              return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
            };
          });
          arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
            var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
            lodash.prototype[methodName] = function() {
              var args = arguments;
              if (retUnwrapped && !this.__chain__) {
                var value = this.value();
                return func.apply(isArray(value) ? value : [], args);
              }
              return this[chainName](function(value2) {
                return func.apply(isArray(value2) ? value2 : [], args);
              });
            };
          });
          baseForOwn(LazyWrapper.prototype, function(func, methodName) {
            var lodashFunc = lodash[methodName];
            if (lodashFunc) {
              var key = lodashFunc.name + "";
              if (!hasOwnProperty.call(realNames, key)) {
                realNames[key] = [];
              }
              realNames[key].push({ "name": methodName, "func": lodashFunc });
            }
          });
          realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
            "name": "wrapper",
            "func": undefined2
          }];
          LazyWrapper.prototype.clone = lazyClone;
          LazyWrapper.prototype.reverse = lazyReverse;
          LazyWrapper.prototype.value = lazyValue;
          lodash.prototype.at = wrapperAt;
          lodash.prototype.chain = wrapperChain;
          lodash.prototype.commit = wrapperCommit;
          lodash.prototype.next = wrapperNext;
          lodash.prototype.plant = wrapperPlant;
          lodash.prototype.reverse = wrapperReverse;
          lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
          lodash.prototype.first = lodash.prototype.head;
          if (symIterator) {
            lodash.prototype[symIterator] = wrapperToIterator;
          }
          return lodash;
        };
        var _2 = runInContext();
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
          root._ = _2;
          define(function() {
            return _2;
          });
        } else if (freeModule) {
          (freeModule.exports = _2)._ = _2;
          freeExports._ = _2;
        } else {
          root._ = _2;
        }
      }).call(exports);
    }
  });

  // ../posprice1/posprice1/public/js/toConsole.js
  $(function() {
    frappe.realtime.on("toconsole", function(data) {
      data.forEach((element) => {
        console.log(element);
      });
    });
  });

  // ../posprice1/posprice1/public/js/posprice/bus.js
  var evntBus = new Vue();

  // ../posprice1/posprice1/public/js/posprice/components/Navbar.vue
  var __vue_script__ = {
    data() {
      return {
        drawer: false,
        mini: true,
        item: 0,
        items: [{ text: "POS", icon: "mdi-point-of-sale" }],
        page: "",
        fav: true,
        menu: false,
        message: false,
        hints: true,
        menu_item: 0,
        snack: false,
        snackColor: "",
        snackText: "",
        company: "POS Awesome",
        company_img: "/assets/erpnext/images/erpnext-logo.svg",
        pos_profile: "",
        freeze: false,
        freezeTitle: "",
        freezeMsg: "",
        last_invoice: ""
      };
    },
    methods: {
      changePage(key) {
        this.$emit("changePage", key);
      },
      go_desk() {
        frappe.set_route("/");
        location.reload();
      },
      go_about() {
      },
      close_shift_dialog() {
        evntBus.$emit("open_closing_dialog");
      },
      show_mesage(data) {
        this.snack = true;
        this.snackColor = data.color;
        this.snackText = data.text;
      },
      logOut() {
        var me = this;
        me.logged_out = true;
        return frappe.call({
          method: "logout",
          callback: function(r) {
            if (r.exc) {
              return;
            }
            frappe.set_route("/login");
            location.reload();
          }
        });
      },
      print_last_invoice() {
        if (!this.last_invoice)
          return;
        const print_format = this.pos_profile.print_format_for_online || this.pos_profile.print_format;
        const letter_head = this.pos_profile.letter_head || 0;
        const url = frappe.urllib.get_base_url() + "/printview?doctype=Sales%20Invoice&name=" + this.last_invoice + "&trigger_print=1&format=" + print_format + "&no_letterhead=" + letter_head;
        const printWindow = window.open(url, "Print");
        printWindow.addEventListener("load", function() {
          printWindow.print();
        }, true);
      }
    },
    created: function() {
      this.$nextTick(function() {
        evntBus.$on("show_mesage", (data) => {
          this.show_mesage(data);
        });
        evntBus.$on("set_company", (data) => {
          this.company = data.name;
          this.company_img = data.company_logo ? data.company_logo : this.company_img;
        });
        evntBus.$on("register_pos_profile", (data) => {
          this.pos_profile = data.pos_profile;
        });
        evntBus.$on("set_last_invoice", (data) => {
          this.last_invoice = data;
        });
        evntBus.$on("freeze", (data) => {
          this.freeze = true;
          this.freezeTitle = data.title;
          this.freezeMsg = data.msg;
        });
        evntBus.$on("unfreeze", () => {
          this.freeze = false;
          this.freezTitle = "";
          this.freezeMsg = "";
        });
      });
    }
  };
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("nav", [
      _c("v-app-bar", { staticClass: "elevation-2", attrs: { app: "", height: "40" } }, [
        _c("v-app-bar-nav-icon", {
          staticClass: "grey--text",
          on: {
            click: function($event) {
              $event.stopPropagation();
              _vm.drawer = !_vm.drawer;
            }
          }
        }),
        _vm._v(" "),
        _c("v-img", {
          staticClass: "mr-2",
          attrs: {
            src: "/assets/posawesome/js/posapp/components/pos/pos.png",
            alt: "POS Price",
            "max-width": "32",
            color: "primary"
          }
        }),
        _vm._v(" "),
        _c("v-toolbar-title", {
          staticClass: "text-uppercase primary--text",
          staticStyle: { cursor: "pointer" },
          on: { click: _vm.go_desk }
        }, [
          _c("span", { staticClass: "font-weight-light" }, [
            _vm._v("POSPRICE")
          ]),
          _vm._v(" "),
          _c("span")
        ]),
        _vm._v(" "),
        _c("v-spacer")
      ], 1),
      _vm._v(" "),
      _c("v-navigation-drawer", {
        staticClass: "primary margen-top",
        attrs: { "mini-variant": _vm.mini, app: "" },
        on: {
          "update:miniVariant": function($event) {
            _vm.mini = $event;
          },
          "update:mini-variant": function($event) {
            _vm.mini = $event;
          }
        },
        model: {
          value: _vm.drawer,
          callback: function($$v) {
            _vm.drawer = $$v;
          },
          expression: "drawer"
        }
      }, [
        _c("v-list", { attrs: { dark: "" } }, [
          _c("v-list-item", { staticClass: "px-2" }, [
            _c("v-list-item-avatar", [_c("v-img", { attrs: { src: _vm.company_img } })], 1),
            _vm._v(" "),
            _c("v-list-item-title", [_vm._v(_vm._s(_vm.company))]),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  $event.stopPropagation();
                  _vm.mini = !_vm.mini;
                }
              }
            }, [_c("v-icon", [_vm._v("mdi-chevron-left")])], 1)
          ], 1),
          _vm._v(" "),
          _c("v-list-item-group", {
            attrs: { color: "white" },
            model: {
              value: _vm.item,
              callback: function($$v) {
                _vm.item = $$v;
              },
              expression: "item"
            }
          }, _vm._l(_vm.items, function(item) {
            return _c("v-list-item", {
              key: item.text,
              on: {
                click: function($event) {
                  return _vm.changePage(item.text);
                }
              }
            }, [
              _c("v-list-item-icon", [
                _c("v-icon", {
                  domProps: { textContent: _vm._s(item.icon) }
                })
              ], 1),
              _vm._v(" "),
              _c("v-list-item-content", [
                _c("v-list-item-title", {
                  domProps: { textContent: _vm._s(item.text) }
                })
              ], 1)
            ], 1);
          }), 1)
        ], 1)
      ], 1),
      _vm._v(" "),
      _c("v-snackbar", {
        attrs: { timeout: 5e3, color: _vm.snackColor, top: "", right: "" },
        model: {
          value: _vm.snack,
          callback: function($$v) {
            _vm.snack = $$v;
          },
          expression: "snack"
        }
      }, [_vm._v("\n    " + _vm._s(_vm.snackText) + "\n  ")]),
      _vm._v(" "),
      _c("v-dialog", {
        attrs: { persistent: "", "max-width": "290" },
        model: {
          value: _vm.freeze,
          callback: function($$v) {
            _vm.freeze = $$v;
          },
          expression: "freeze"
        }
      }, [
        _c("v-card", [
          _c("v-card-title", { staticClass: "text-h5" }, [
            _vm._v("\n        " + _vm._s(_vm.freezeTitle) + "\n      ")
          ]),
          _vm._v(" "),
          _c("v-card-text", [_vm._v(_vm._s(_vm.freezeMsg))])
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  var __vue_inject_styles__ = function(inject) {
    if (!inject)
      return;
    inject("data-v-68e1a8ed_0", { source: "\n.margen-top[data-v-68e1a8ed] {\n  margin-top: 0px;\n}\n", map: { "version": 3, "sources": ["../posprice1/posprice1/public/js/posprice/components/Navbar.vue"], "names": [], "mappings": ";AAoMA;EACA,eAAA;AACA", "file": "Navbar.vue", "sourcesContent": [`<template>
  <nav>
    <v-app-bar app height="40" class="elevation-2">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="grey--text"
      ></v-app-bar-nav-icon>
      <v-img
        src="/assets/posawesome/js/posapp/components/pos/pos.png"
        alt="POS Price"
        max-width="32"
        class="mr-2"
        color="primary"
      ></v-img>
      <v-toolbar-title
        @click="go_desk"
        style="cursor: pointer"
        class="text-uppercase primary--text"
      >
        <span class="font-weight-light">POSPRICE</span>
        <span></span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      app
      class="primary margen-top"
    >
      <v-list dark>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img :src="company_img"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>{{ company }}</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        <!-- <MyPopup/> -->
        <v-list-item-group v-model="item" color="white">
          <v-list-item
            v-for="item in items"
            :key="item.text"
            @click="changePage(item.text)"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-snackbar v-model="snack" :timeout="5000" :color="snackColor" top right>
      {{ snackText }}
    </v-snackbar>
    <v-dialog v-model="freeze" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          {{ freezeTitle }}
        </v-card-title>
        <v-card-text>{{ freezeMsg }}</v-card-text>
      </v-card>
    </v-dialog>
  </nav>
</template>

<script>
import { evntBus } from '../bus';

export default {
  // components: {MyPopup},
  data() {
    return {
      drawer: false,
      mini: true,
      item: 0,
      items: [{ text: 'POS', icon: 'mdi-point-of-sale' }],
      page: '',
      fav: true,
      menu: false,
      message: false,
      hints: true,
      menu_item: 0,
      snack: false,
      snackColor: '',
      snackText: '',
      company: 'POS Awesome',
      company_img: '/assets/erpnext/images/erpnext-logo.svg',
      pos_profile: '',
      freeze: false,
      freezeTitle: '',
      freezeMsg: '',
      last_invoice: '',
    };
  },
  methods: {
    changePage(key) {
      this.$emit('changePage', key);
    },
    go_desk() {
      frappe.set_route('/');
      location.reload();
    },
    go_about() {
      
    
    },
    close_shift_dialog() {
      evntBus.$emit('open_closing_dialog');
    },
    show_mesage(data) {
      this.snack = true;
      this.snackColor = data.color;
      this.snackText = data.text;
    },
    logOut() {
      var me = this;
      me.logged_out = true;
      return frappe.call({
        method: 'logout',
        callback: function (r) {
          if (r.exc) {
            return;
          }
          frappe.set_route('/login');
          location.reload();
        },
      });
    },
    print_last_invoice() {
      if (!this.last_invoice) return;
      const print_format =
        this.pos_profile.print_format_for_online ||
        this.pos_profile.print_format;
      const letter_head = this.pos_profile.letter_head || 0;
      const url =
        frappe.urllib.get_base_url() +
        '/printview?doctype=Sales%20Invoice&name=' +
        this.last_invoice +
        '&trigger_print=1' +
        '&format=' +
        print_format +
        '&no_letterhead=' +
        letter_head;
      const printWindow = window.open(url, 'Print');
      printWindow.addEventListener(
        'load',
        function () {
          printWindow.print();
        },
        true
      );
    },
  },
  created: function () {
    this.$nextTick(function () {
      evntBus.$on('show_mesage', (data) => {
        this.show_mesage(data);
      });
      evntBus.$on('set_company', (data) => {
        this.company = data.name;
        this.company_img = data.company_logo
          ? data.company_logo
          : this.company_img;
      });
      evntBus.$on('register_pos_profile', (data) => {
        this.pos_profile = data.pos_profile;
      });
      evntBus.$on('set_last_invoice', (data) => {
        this.last_invoice = data;
      });
      evntBus.$on('freeze', (data) => {
        this.freeze = true;
        this.freezeTitle = data.title;
        this.freezeMsg = data.msg;
      });
      evntBus.$on('unfreeze', () => {
        this.freeze = false;
        this.freezTitle = '';
        this.freezeMsg = '';
      });
    });
  },
};
<\/script>

<style scoped>
.margen-top {
  margin-top: 0px;
}
</style>
`] }, media: void 0 });
  };
  var __vue_scope_id__ = "data-v-68e1a8ed";
  var __vue_module_identifier__ = void 0;
  var __vue_is_functional_template__ = false;
  function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../posprice1/posprice1/public/js/posprice/components/Navbar.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__() {
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__ = /* @__PURE__ */ __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, __vue_create_injector__, void 0, void 0);
  var Navbar_default = __vue_component__;

  // ../posprice1/posprice1/public/js/posprice/components/pos/Customer.vue
  var __vue_script__2 = {
    data: () => ({
      pos_profile: "",
      customers: [],
      customer: "",
      readonly: false,
      customer_info: {}
    }),
    methods: {
      update_price_list() {
        let price_list = this.get_price_list();
        if (price_list == this.pos_profile.selling_price_list) {
          price_list = null;
        }
        evntBus.$emit("update_customer_price_list", price_list);
      },
      get_price_list() {
        let price_list = this.pos_profile.selling_price_list;
        if (this.customer_info && this.pos_profile) {
          const { customer_price_list, customer_group_price_list } = this.customer_info;
          const pos_price_list = this.pos_profile.selling_price_list;
          if (customer_price_list && customer_price_list != pos_price_list) {
            price_list = customer_price_list;
          } else if (customer_group_price_list && customer_group_price_list != pos_price_list) {
            price_list = customer_group_price_list;
          }
        }
        return price_list;
      },
      fetch_customer_details() {
        const vm = this;
        if (this.customer) {
          frappe.call({
            method: "posawesome.posawesome.api.posapp.get_customer_info",
            args: {
              customer: vm.customer
            },
            async: false,
            callback: (r) => {
              const message = r.message;
              if (!r.exc) {
                vm.customer_info = __spreadValues({}, message);
              }
              vm.update_price_list();
            }
          });
        }
      },
      shortCustomerDiscount(e) {
        if (e.key === "F9") {
          e.preventDefault();
          evntBus.$emit("set_customer", "1 Skidka");
        }
      },
      shortCustomerRegular(e) {
        if (e.key === "F12") {
          e.preventDefault();
          evntBus.$emit("set_customer", "\u041A\u043B\u0438\u0435\u043D\u0442 1");
        }
      },
      get_customer_names() {
        const vm = this;
        if (vm.pos_profile.posa_local_storage && localStorage.customer_storage) {
          vm.customers = JSON.parse(localStorage.getItem("customer_storage"));
          evntBus.$emit("customer_storage", vm.customers);
        }
        frappe.call({
          method: "posawesome.posawesome.api.posapp.get_customer_names",
          args: {
            pos_profile: this.pos_profile.pos_profile
          },
          callback: function(r) {
            if (r.message) {
              vm.customers = r.message;
              evntBus.$emit("customer_storage", vm.customers);
              console.info("LoadCustomers");
              localStorage.setItem("customer_storage", "");
              localStorage.setItem("customer_storage", JSON.stringify(r.message));
            }
          }
        });
      },
      new_customer() {
        evntBus.$emit("open_update_customer", null);
      },
      edit_customer() {
        evntBus.$emit("open_update_customer", this.customer_info);
      },
      customFilter(item, queryText, itemText) {
        const textOne = item.customer_name ? item.customer_name.toLowerCase() : "";
        const textTwo = item.tax_id ? item.tax_id.toLowerCase() : "";
        const textThree = item.email_id ? item.email_id.toLowerCase() : "";
        const textFour = item.mobile ? item.mobile.toLowerCase() : "";
        const textFifth = item.name.toLowerCase();
        const searchText = queryText.toLowerCase();
        return textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1 || textThree.indexOf(searchText) > -1 || textFour.indexOf(searchText) > -1 || textFifth.indexOf(searchText) > -1;
      }
    },
    computed: {},
    created: function() {
      this.$nextTick(function() {
        evntBus.$on("register_pos_profile", (pos_profile) => {
          this.pos_profile = pos_profile;
          this.get_customer_names();
          this.update_price_list();
        });
        evntBus.$on("set_customer", (customer) => {
          this.customer = customer;
          this.fetch_customer_details();
          if (customer.length > 1) {
            frappe.call({
              method: "posawesome.posawesome.api.posapp.check_customer_credit",
              args: {
                customer
              },
              callback: function(r) {
              }
            });
          }
          ;
        });
        evntBus.$on("add_customer_to_list", (customer) => {
          this.customers.push(customer);
        });
        evntBus.$on("set_customer_readonly", (value) => {
          this.readonly = value;
        });
        evntBus.$on("set_customer_info_to_edit", (data) => {
          this.customer_info = data;
        });
        evntBus.$on("fetch_customer_details", () => {
          this.get_customer_names();
        });
      });
      document.addEventListener("keydown", this.shortCustomerDiscount.bind(this));
      document.addEventListener("keydown", this.shortCustomerRegular.bind(this));
    },
    destroyed() {
      document.removeEventListener("keydown", this.shortCustomerDiscount);
      document.removeEventListener("keydown", this.shortCustomerRegular);
    },
    watch: {
      customer() {
        evntBus.$emit("update_customer", this.customer);
      }
    }
  };
  var __vue_render__2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("v-autocomplete", {
        attrs: {
          dense: "",
          clearable: "",
          "auto-select-first": "",
          outlined: "",
          color: "primary",
          label: _vm.frappe._("Customer"),
          items: _vm.customers,
          "item-text": "customer_name",
          "item-value": "name",
          "background-color": "white",
          "no-data-text": _vm.__("Customer not found"),
          "hide-details": "",
          filter: _vm.customFilter,
          disabled: _vm.readonly,
          "append-icon": "mdi-plus",
          "prepend-inner-icon": "mdi-account-edit",
          readonly: ""
        },
        on: {
          "click:append": _vm.new_customer,
          "click:prepend-inner": _vm.edit_customer
        },
        scopedSlots: _vm._u([
          {
            key: "item",
            fn: function(data) {
              return [
                [
                  _c("v-list-item-content", [
                    _c("v-list-item-title", {
                      staticClass: "primary--text subtitle-1",
                      domProps: { innerHTML: _vm._s(data.item.customer_name) }
                    }),
                    _vm._v(" "),
                    data.item.customer_name != data.item.name ? _c("v-list-item-subtitle", {
                      domProps: {
                        innerHTML: _vm._s("ID: " + data.item.name)
                      }
                    }) : _vm._e(),
                    _vm._v(" "),
                    data.item.tax_id ? _c("v-list-item-subtitle", {
                      domProps: {
                        innerHTML: _vm._s("TAX ID: " + data.item.tax_id)
                      }
                    }) : _vm._e(),
                    _vm._v(" "),
                    data.item.email_id ? _c("v-list-item-subtitle", {
                      domProps: {
                        innerHTML: _vm._s("Email: " + data.item.email_id)
                      }
                    }) : _vm._e(),
                    _vm._v(" "),
                    data.item.mobile ? _c("v-list-item-subtitle", {
                      domProps: {
                        innerHTML: _vm._s("Mobile No: " + data.item.mobile)
                      }
                    }) : _vm._e(),
                    _vm._v(" "),
                    data.item.address ? _c("v-list-item-subtitle", {
                      domProps: {
                        innerHTML: _vm._s("Primary Address: " + data.item.address)
                      }
                    }) : _vm._e()
                  ], 1)
                ]
              ];
            }
          }
        ]),
        model: {
          value: _vm.customer,
          callback: function($$v) {
            _vm.customer = $$v;
          },
          expression: "customer"
        }
      })
    ], 1);
  };
  var __vue_staticRenderFns__2 = [];
  __vue_render__2._withStripped = true;
  var __vue_inject_styles__2 = void 0;
  var __vue_scope_id__2 = void 0;
  var __vue_module_identifier__2 = void 0;
  var __vue_is_functional_template__2 = false;
  function __vue_normalize__2(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../posprice1/posprice1/public/js/posprice/components/pos/Customer.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (false) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  var __vue_component__2 = /* @__PURE__ */ __vue_normalize__2({ render: __vue_render__2, staticRenderFns: __vue_staticRenderFns__2 }, __vue_inject_styles__2, __vue_script__2, __vue_scope_id__2, __vue_is_functional_template__2, __vue_module_identifier__2, false, void 0, void 0, void 0);
  var Customer_default = __vue_component__2;

  // ../posprice1/posprice1/public/js/posprice/components/pos/ItemsSelector.vue
  var import_lodash = __toESM(require_lodash());
  var __vue_script__3 = {
    data: () => ({
      pos_profile: "",
      flags: {},
      items_view: "list",
      item_group: "ALL",
      loading: false,
      items_group: ["ALL"],
      items: [],
      search: "",
      first_search: "",
      itemsPerPage: 1e3,
      offersCount: 0,
      appliedOffersCount: 0,
      couponsCount: 0,
      appliedCouponsCount: 0,
      customer_price_list: null,
      float_precision: 2,
      currency_precision: 2,
      new_line: false,
      selectedCardIndex: null,
      qty: 1
    }),
    watch: {
      filtred_items(data_value) {
      },
      customer_price_list() {
        if (this.pos_profile.offline) {
          evntBus.$emit("update_invoice_items");
        } else {
          this.get_items();
        }
      },
      new_line() {
        evntBus.$emit("set_new_line", this.new_line);
      }
    },
    components: {
      Customer: Customer_default
    },
    methods: {
      formatCurrency(value) {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "TMT"
        }).format(value);
      },
      shortSearchFocus(e) {
        if (e.key === "F8") {
          e.preventDefault();
          if (this.$refs.debounce_search) {
            this.$refs.debounce_search.focus();
          }
        }
      },
      shortQTYFocus(e) {
        if (e.key === "F10") {
          e.preventDefault();
          if (this.$refs.debounce_qty) {
            this.$refs.debounce_qty.focus();
          }
        }
      },
      get_items() {
        if (!this.pos_profile) {
          console.error("No POS Profile");
          return;
        }
        const vm = this;
        this.loading = true;
        if (vm.pos_profile.posa_local_storage && localStorage.items_storage) {
          vm.items = JSON.parse(localStorage.getItem("items_storage"));
          evntBus.$emit("set_all_items", vm.items);
          vm.loading = false;
        }
        frappe.call({
          method: "posawesome.posawesome.api.posapp.get_items",
          args: {
            pos_profile: vm.pos_profile,
            price_list: vm.customer_price_list
          },
          callback: function(r) {
            if (r.message) {
              vm.items = r.message;
              evntBus.$emit("set_all_items", vm.items);
              vm.loading = false;
              console.info("loadItmes");
              if (vm.pos_profile.posa_local_storage) {
                localStorage.setItem("items_storage", "");
                localStorage.setItem("items_storage", JSON.stringify(r.message));
              }
            }
          }
        });
      },
      get_price_list() {
        let price_list = this.pos_profile.selling_price_list;
        if (this.customer_info && this.pos_profile) {
          const { customer_price_list, customer_group_price_list } = this.customer_info;
          const pos_price_list = this.pos_profile.selling_price_list;
          if (customer_price_list && customer_price_list != pos_price_list) {
            price_list = customer_price_list;
          } else if (customer_group_price_list && customer_group_price_list != pos_price_list) {
            price_list = customer_group_price_list;
          }
        }
        return price_list;
      },
      getItemPrices(item_code) {
        let price_list = this.pos_profile.selling_price_list;
        if (this.customer_price_list) {
          price_list = this.customer_price_list;
        }
        let item = this.filtred_items.filter((item2) => item2.item_code === item_code);
        if (item && item[0].item_prices) {
          let prices2 = item[0].item_prices.filter((price) => price.price_list === price_list);
          return prices2;
        }
        return [];
        return prices;
      },
      is_scale_item(first_search) {
        if (first_search) {
          if (first_search.startsWith(this.pos_profile.posa_scale_barcode_start) || first_search.startsWith(this.pos_profile.scale_barcode_start_with_2)) {
            return true;
          }
          return false;
        }
      },
      add_item(item) {
        item = __spreadValues({}, item);
        if (item.has_variants) {
          evntBus.$emit("open_variants_model", item, this.items);
        } else {
          if (!item.qty || item.qty === 1) {
            item.qty = Math.abs(this.qty);
          }
          evntBus.$emit("add_item", item);
          this.qty = 1;
        }
      },
      enter_event() {
        var is_scale_item = this.is_scale_item(this.first_search);
        if (!this.filtred_items.length || !this.first_search || this.filtred_items.length > 1 && !is_scale_item) {
          return;
        }
        const qty = this.get_item_qty(this.first_search);
        const new_item = __spreadValues({}, this.filtred_items[0]);
        new_item.qty = flt(qty);
        new_item.item_barcode.forEach((element) => {
          if (this.search == element.barcode) {
            new_item.uom = element.posa_uom;
          }
        });
        if (this.flags.serial_no) {
          new_item.to_set_serial_no = this.flags.serial_no;
        }
        this.add_item(new_item);
        this.search = null;
        this.first_search = "";
        this.first_search = null;
        this.debounce_search = "";
        this.debounce_search = null;
        this.flags.serial_no = null;
        this.qty = 1;
        this.$refs.debounce_search.value = "";
      },
      get_item_qty(first_search) {
        let scal_qty = Math.abs(this.qty);
        if (first_search.startsWith(this.pos_profile.posa_scale_barcode_start) || first_search.startsWith(this.pos_profile.scale_barcode_start_with_2)) {
          var pesokg1 = first_search.substr(7, 5);
          var pesokg;
          if (pesokg1.startsWith("0000")) {
            pesokg = "0.00" + pesokg1.substr(4);
          } else if (pesokg1.startsWith("000")) {
            pesokg = "0.0" + pesokg1.substr(3);
          } else if (pesokg1.startsWith("00")) {
            pesokg = "0." + pesokg1.substr(2);
          } else if (pesokg1.startsWith("0")) {
            pesokg = pesokg1.substr(1, 1) + "." + pesokg1.substr(2, pesokg1.length);
          } else if (!pesokg1.startsWith("0")) {
            pesokg = pesokg1.substr(0, 2) + "." + pesokg1.substr(2, pesokg1.length);
          }
          scal_qty = pesokg;
        }
        return scal_qty;
      },
      get_search(first_search) {
        let search_term = "";
        if (first_search) {
          if (first_search.startsWith(this.pos_profile.posa_scale_barcode_start) || first_search.startsWith(this.pos_profile.scale_barcode_start_with_2)) {
            search_term = first_search.substr(1, 6);
          } else {
            search_term = first_search;
          }
          return search_term;
        }
      },
      esc_event() {
        this.search = null;
        this.first_search = null;
        this.qty = 1;
        this.first_search = "";
      },
      update_cur_items_details() {
        this.update_items_details(this.filtred_items);
      },
      scan_barcoud() {
        const vm = this;
        onScan.attachTo(document, {
          suffixKeyCodes: [],
          keyCodeMapper: function(oEvent) {
            oEvent.stopImmediatePropagation();
            return onScan.decodeKeyEvent(oEvent);
          },
          onScan: function(sCode) {
            setTimeout(() => {
              vm.trigger_onscan(sCode);
            }, 300);
          }
        });
      },
      trigger_onscan(sCode) {
        var name = "";
        var customerStorage = JSON.parse(localStorage.getItem("customer_storage")) || [];
        var customerFound = customerStorage.some(function(entry) {
          if (entry.customer_id === sCode) {
            name = entry.name;
            return true;
          }
          return false;
        });
        if (!name) {
          this.first_search = sCode;
          if (this.filtred_items.length == 0) {
            evntBus.$emit("show_mesage", {
              text: `No Item has this barcode "${sCode}"`,
              color: "error"
            });
            frappe.utils.play_sound("error");
          } else {
            this.enter_event();
            this.debounce_search = null;
            this.search = null;
          }
        } else {
          if (customerFound) {
            evntBus.$emit("set_customer", name);
          }
        }
      },
      formtCurrency(value) {
        value = parseFloat(value);
        return value.toFixed(this.currency_precision).replace(/\d(?=(\d{3})+\.)/g, "$&,");
      },
      formtFloat(value) {
        value = parseFloat(value);
        return value.toFixed(this.float_precision).replace(/\d(?=(\d{3})+\.)/g, "$&,");
      }
    },
    computed: {
      filtred_items() {
        this.search = this.get_search(this.first_search);
        var is_scale_item = this.is_scale_item(this.first_search);
        let filtred_list = [];
        let filtred_group_list = [];
        if (this.item_group != "ALL") {
          filtred_group_list = this.items.filter((item) => item.item_group.toLowerCase().includes(this.item_group.toLowerCase()));
        } else {
          filtred_group_list = this.items;
        }
        if (!this.search || this.search.length < 3) {
          if (this.pos_profile.posa_show_template_items && this.pos_profile.posa_hide_variants_items) {
            return filtred_list = filtred_group_list.filter((item) => !item.variant_of).slice(0, 50);
          } else {
            return filtred_list = filtred_group_list.slice(0, 50);
          }
        } else if (this.search) {
          if (!is_scale_item) {
            filtred_list = filtred_group_list.filter((item) => {
              let found = false;
              for (let element of item.item_barcode) {
                if (element.barcode == this.search) {
                  found = true;
                  break;
                }
              }
              return found;
            });
          }
          if (filtred_list.length == 0) {
            if (is_scale_item == true && this.search.length == 6) {
              let groupName = "\u0420\u0430\u0437\u0432\u0435\u0441\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B";
              filtred_group_list = this.items.filter((item) => item.item_group.toLowerCase().includes(groupName.toLowerCase()));
              filtred_list = filtred_group_list.filter((item) => item.item_code.toLowerCase().includes(this.search.toLowerCase()));
            } else if (this.pos_profile.posa_search_strict1) {
              console.log(this.pos_profile.posa_search_strict1);
              filtred_list = filtred_group_list.filter((item) => item.item_code === this.search.toLowerCase());
            } else {
              filtred_list = filtred_group_list.filter((item) => item.item_code.toLowerCase().includes(this.search.toLowerCase()));
            }
            if (filtred_list.length == 0) {
              filtred_list = filtred_group_list.filter((item) => item.item_name.toLowerCase().includes(this.search.toLowerCase()));
            }
            if (filtred_list.length == 0 && this.pos_profile.posa_search_serial_no) {
              filtred_list = filtred_group_list.filter((item) => {
                let found = false;
                for (let element of item.serial_no_data) {
                  if (element.serial_no == this.search) {
                    found = true;
                    this.flags.serial_no = null;
                    this.flags.serial_no = this.search;
                    break;
                  }
                }
                return found;
              });
            }
          }
        }
        if (this.pos_profile.posa_show_template_items && this.pos_profile.posa_hide_variants_items) {
          return filtred_list.filter((item) => !item.variant_of).slice(0, 50);
        } else {
          return filtred_list.slice(0, 50);
        }
      },
      debounce_search: {
        get() {
          return this.first_search;
        },
        set: import_lodash.default.debounce(function(newValue) {
          this.first_search = newValue;
        }, 200)
      }
    },
    created: function() {
      this.$nextTick(function() {
      });
      evntBus.$on("register_pos_profile", (data) => {
        this.pos_profile = data.pos_profile;
        this.get_items();
        this.float_precision = frappe.defaults.get_default("float_precision") || 2;
        this.currency_precision = frappe.defaults.get_default("currency_precision") || 2;
        this.items_view = this.pos_profile.posa_default_card_view ? "card" : "list";
      });
      evntBus.$on("update_cur_items_details", () => {
        this.update_cur_items_details();
      });
      evntBus.$on("update_offers_counters", (data) => {
        this.offersCount = data.offersCount;
        this.appliedOffersCount = data.appliedOffersCount;
      });
      evntBus.$on("update_coupons_counters", (data) => {
        this.couponsCount = data.couponsCount;
        this.appliedCouponsCount = data.appliedCouponsCount;
      });
      evntBus.$on("update_customer_price_list", (data) => {
        this.customer_price_list = data;
      });
      document.addEventListener("keydown", this.shortSearchFocus.bind(this));
      document.addEventListener("keydown", this.shortQTYFocus.bind(this));
    },
    destroyed() {
      document.removeEventListener("keydown", this.shortQTYFocus);
      document.removeEventListener("keydown", this.shortSearchFocus);
    },
    mounted() {
      this.scan_barcoud();
    }
  };
  var __vue_render__3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("v-card", {
        staticClass: "selection mx-auto grey lighten-5 mt-3",
        staticStyle: { "max-height": "20vh", height: "20vh" },
        attrs: { elevation: "2", shaped: "" }
      }, [
        _c("v-progress-linear", {
          attrs: {
            active: _vm.loading,
            indeterminate: _vm.loading,
            absolute: "",
            top: "",
            color: "info"
          }
        }),
        _vm._v(" "),
        _c("v-row", { staticClass: "items px-2 py-1" }, [
          _c("v-col", { staticClass: "pb-0 mb-2", attrs: { cols: "20" } }, [
            _c("v-text-field", {
              ref: "debounce_search",
              attrs: {
                dense: "",
                clearable: "",
                autofocus: "",
                outlined: "",
                color: "primary",
                label: _vm.frappe._("Search Items"),
                hint: "Search by item code, serial number, batch no, or barcode",
                "background-color": "white",
                "hide-details": ""
              },
              on: {
                keydown: [
                  function($event) {
                    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, [
                      "Esc",
                      "Escape"
                    ])) {
                      return null;
                    }
                    return _vm.esc_event.apply(null, arguments);
                  },
                  function($event) {
                    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
                      return null;
                    }
                    return _vm.enter_event.apply(null, arguments);
                  }
                ]
              },
              model: {
                value: _vm.debounce_search,
                callback: function($$v) {
                  _vm.debounce_search = $$v;
                },
                expression: "debounce_search"
              }
            })
          ], 1),
          _vm._v(" "),
          _c("v-col", { staticClass: "pb-2", attrs: { cols: "20" } }, [_c("Customer")], 1),
          _vm._v(" "),
          _vm.pos_profile.posa_input_qty ? _c("v-col", { staticClass: "pb-0 mb-2", attrs: { cols: "3" } }, [
            _c("v-text-field", {
              ref: "debounce_qty",
              attrs: {
                dense: "",
                outlined: "",
                color: "primary",
                label: _vm.frappe._("QTY"),
                "background-color": "white",
                "hide-details": "",
                type: "number"
              },
              on: {
                keydown: [
                  function($event) {
                    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
                      return null;
                    }
                    return _vm.enter_event.apply(null, arguments);
                  },
                  function($event) {
                    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, [
                      "Esc",
                      "Escape"
                    ])) {
                      return null;
                    }
                    return _vm.esc_event.apply(null, arguments);
                  }
                ]
              },
              model: {
                value: _vm.qty,
                callback: function($$v) {
                  _vm.qty = _vm._n($$v);
                },
                expression: "qty"
              }
            })
          ], 1) : _vm._e(),
          _vm._v(" "),
          _vm.pos_profile.posa_new_line ? _c("v-col", { staticClass: "pb-0 mb-2", attrs: { cols: "2" } }, [
            _c("v-checkbox", {
              attrs: {
                color: "accent",
                value: "true",
                label: "New Line",
                dense: "",
                "hide-details": ""
              },
              model: {
                value: _vm.new_line,
                callback: function($$v) {
                  _vm.new_line = $$v;
                },
                expression: "new_line"
              }
            })
          ], 1) : _vm._e()
        ], 1)
      ], 1),
      _vm._v(" "),
      _c("v-container", { staticClass: "fill-height d-flex align-center justify-center" }, [
        _c("v-card", { staticClass: "mx-auto pa-3" }, [
          _vm.filtred_items.length > 0 ? _c("v-list-item", [
            _c("v-list-item-content", [
              _c("v-list-item-subtitle", {
                staticClass: "headline font-weight-bold",
                staticStyle: {
                  "background-color": "yellow",
                  padding: "10px",
                  "border-radius": "8px"
                }
              }, [
                _c("span", {
                  staticStyle: {
                    "font-size": "2rem",
                    "font-weight": "900"
                  }
                }, [
                  _c("strong", [
                    _vm._v(_vm._s(_vm.frappe._("Item")) + ": ")
                  ]),
                  _vm._v("  " + _vm._s(_vm.filtred_items[0].item_code) + "  " + _vm._s(_vm.filtred_items[0].item_name) + "\n            ")
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.getItemPrices(_vm.filtred_items[0].item_code), function(price) {
                return _c("v-card", {
                  key: price.uom,
                  staticClass: "pa-3 my-2",
                  staticStyle: {
                    "background-color": "lightgreen",
                    "border-radius": "8px"
                  },
                  attrs: { outlined: "" }
                }, [
                  _c("v-list-item-subtitle", { staticClass: "headline" }, [
                    _c("strong", [
                      _vm._v(_vm._s(_vm.frappe._("Price:")) + " ")
                    ]),
                    _vm._v(" "),
                    _c("span", {
                      staticStyle: {
                        "font-size": "6rem",
                        "font-weight": "900"
                      }
                    }, [
                      _vm._v("\n                " + _vm._s(price.price_list_rate) + " TMT\n              ")
                    ]),
                    _vm._v(" \n              " + _vm._s(price.uom) + " "),
                    _c("br")
                  ])
                ], 1);
              })
            ], 2)
          ], 1) : _c("v-list-item", [
            _c("v-list-item-content", [
              _c("v-list-item-title", { staticClass: "display-1 primary--text" }, [
                _vm._v("\n            No item selected\n          ")
              ])
            ], 1)
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__3 = [];
  __vue_render__3._withStripped = true;
  var __vue_inject_styles__3 = function(inject) {
    if (!inject)
      return;
    inject("data-v-36146c98_0", { source: "\n.fill-height[data-v-36146c98] {\n  height: calc(75vh); /* Allocate 75% of the height for item display */\n}\n.display-1[data-v-36146c98] {\n  font-size: 4rem;\n}\n.headline[data-v-36146c98] {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n", map: { "version": 3, "sources": ["../posprice1/posprice1/public/js/posprice/components/pos/ItemsSelector.vue"], "names": [], "mappings": ";AAwjBA;EACA,kBAAA,EAAA,gDAAA;AACA;AACA;EACA,eAAA;AACA;AACA;EACA,eAAA;EACA,mBAAA;AACA", "file": "ItemsSelector.vue", "sourcesContent": [`<template>
  <div>
    <!-- Search Section -->
    <v-card
      class="selection mx-auto grey lighten-5 mt-3"
      elevation="2"
      shaped
      style="max-height: 20vh; height: 20vh"
    >
      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        top
        color="info"
      ></v-progress-linear>
      
      <v-row class="items px-2 py-1">
        <!-- Item Search -->
        <v-col class="pb-0 mb-2" cols="20">
          <v-text-field
            dense
            clearable
            autofocus
            outlined
            color="primary"
            :label="frappe._('Search Items')"
            hint="Search by item code, serial number, batch no, or barcode"
            background-color="white"
            hide-details
            v-model="debounce_search"
            @keydown.esc="esc_event"
            @keydown.enter="enter_event"
            ref="debounce_search"
          ></v-text-field>
        </v-col>
        
        <!-- Customer Search -->
        <v-col cols="20" class="pb-2">
          <Customer></Customer>
        </v-col>
        
        <!-- Optional Fields (QTY and New Line) -->
        <v-col cols="3" class="pb-0 mb-2" v-if="pos_profile.posa_input_qty">
          <v-text-field
            dense
            outlined
            color="primary"
            :label="frappe._('QTY')"
            background-color="white"
            hide-details
            v-model.number="qty"
            type="number"
            @keydown.enter="enter_event"
            @keydown.esc="esc_event"
            ref="debounce_qty"
          ></v-text-field>
        </v-col>
        <v-col cols="2" class="pb-0 mb-2" v-if="pos_profile.posa_new_line">
          <v-checkbox
            v-model="new_line"
            color="accent"
            value="true"
            label="New Line"
            dense
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-card>

    <!-- Item Display Section -->
    <v-container class="fill-height d-flex align-center justify-center">
      <v-card class="mx-auto pa-3" >
        <!-- Check if filtered_items has at least one item -->
        <v-list-item v-if="filtred_items.length > 0">
          <v-list-item-content>
            <!-- Labels with Item Data -->
            <v-list-item-subtitle class="headline font-weight-bold"
            style="background-color: yellow; padding: 10px; border-radius: 8px;">
              
              <span style="font-size: 2rem; font-weight: 900;">
              <strong>{{ frappe._('Item') }}: </strong>  {{ filtred_items[0].item_code }}  {{ filtred_items[0].item_name }}
              </span>
            </v-list-item-subtitle>
        
            <!-- Loop through prices and display them -->
            <v-card
              v-for="price in getItemPrices(filtred_items[0].item_code)"
              :key="price.uom"
              class="pa-3 my-2"
              outlined
              style="background-color: lightgreen; border-radius: 8px;"
            >
              <v-list-item-subtitle class="headline">
                <strong>{{ frappe._('Price:') }} </strong> 
                <span style="font-size: 6rem; font-weight: 900;">
                  {{ price.price_list_rate }} TMT
                </span> 
                {{ price.uom }} <br>
              </v-list-item-subtitle>
            </v-card>
          </v-list-item-content>
        </v-list-item>

        <!-- Fallback when no item is selected -->
        <v-list-item v-else>
          <v-list-item-content>
            <v-list-item-title class="display-1 primary--text">
              No item selected
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>
  </div>
</template>


<script>
import { evntBus } from '../../bus';
import Customer from './Customer.vue';
import _ from 'lodash';
export default {
  data: () => ({
    pos_profile: '',
    flags: {},
    items_view: 'list',
    item_group: 'ALL',
    loading: false,
    items_group: ['ALL'],
    items: [],
    search: '',
    first_search: '',
    itemsPerPage: 1000,
    offersCount: 0,
    appliedOffersCount: 0,
    couponsCount: 0,
    appliedCouponsCount: 0,
    customer_price_list: null,
    float_precision: 2,
    currency_precision: 2,
    new_line: false,
    selectedCardIndex: null,
    qty: 1,
  }),

  watch: {
    filtred_items(data_value) {
     // this.update_items_details(data_value);
    },
    customer_price_list() {
      if(this.pos_profile.offline){
        evntBus.$emit('update_invoice_items');
      }else{
      this.get_items();
    }
    },
    new_line() {
      evntBus.$emit('set_new_line', this.new_line);
    },
  },
  components: {
    Customer,
  },

  methods: {
  
    formatCurrency(value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'TMT',
      }).format(value);
    },
    shortSearchFocus(e) {
   
      if (e.key === 'F8') {
        e.preventDefault();
        if (this.$refs.debounce_search){
        this.$refs.debounce_search.focus();
      }
      }
    },
    shortQTYFocus(e) {
   
   if (e.key === 'F10') {
     e.preventDefault();
     if (this.$refs.debounce_qty){
     this.$refs.debounce_qty.focus();
   }
   }
 },

    get_items() {
      if (!this.pos_profile) {
        console.error('No POS Profile');
        return;
      }
      const vm = this;
      this.loading = true;
      if (vm.pos_profile.posa_local_storage && localStorage.items_storage) {
        vm.items = JSON.parse(localStorage.getItem('items_storage'));
        evntBus.$emit('set_all_items', vm.items);
        vm.loading = false;
      }
      frappe.call({
        method: 'posawesome.posawesome.api.posapp.get_items',
        args: {
          pos_profile: vm.pos_profile,
          price_list: vm.customer_price_list,
        },
        callback: function (r) {
          if (r.message) {
            vm.items = r.message;
            evntBus.$emit('set_all_items', vm.items);
            vm.loading = false;
            console.info('loadItmes');
            if (vm.pos_profile.posa_local_storage) {
             
              localStorage.setItem('items_storage', '');
              localStorage.setItem('items_storage', JSON.stringify(r.message));
            }
          }
        },
      });
    },
    get_price_list() {
      let price_list = this.pos_profile.selling_price_list;
      if (this.customer_info && this.pos_profile) {
        const { customer_price_list, customer_group_price_list } =
          this.customer_info;
        const pos_price_list = this.pos_profile.selling_price_list;
        if (customer_price_list && customer_price_list != pos_price_list) {
          price_list = customer_price_list;
        } else if (
          customer_group_price_list &&
          customer_group_price_list != pos_price_list
        ) {
          price_list = customer_group_price_list;
        }
      }
      return price_list;
    },
    // Method to get the prices for a particular item_code
    getItemPrices(item_code) {
      let price_list = this.pos_profile.selling_price_list;
      if (this.customer_price_list){
        price_list = this.customer_price_list; 
      }
      
      
       

      let item = this.filtred_items.filter(item => item.item_code === item_code);
     // Ensure the item exists and has item_prices before attempting to filter
  if (item && item[0].item_prices) {
    // Filter the prices based on the price list
    let prices = item[0].item_prices.filter(price => price.price_list === price_list);
    return prices;  // Return the filtered prices
  }

  return [];   
      return prices 
    },
   is_scale_item(first_search){
   if(first_search){
    if (first_search.startsWith(this.pos_profile.posa_scale_barcode_start )  || first_search.startsWith(this.pos_profile.scale_barcode_start_with_2 )  )    {
   return true;
    }
    return false;
  }},
    add_item(item) {
      item = { ...item };
      if (item.has_variants) {
        evntBus.$emit('open_variants_model', item, this.items);
      } else {
        if (!item.qty || item.qty === 1) {
          item.qty = Math.abs(this.qty);
        }
        evntBus.$emit('add_item', item);
        this.qty = 1;
      }
    },
    enter_event() {
      var is_scale_item = this.is_scale_item(this.first_search);
      if (!this.filtred_items.length || !this.first_search || (this.filtred_items.length>1 && !is_scale_item)) {
        return;
      }
      const qty = this.get_item_qty(this.first_search);
      const new_item = { ...this.filtred_items[0] };
      new_item.qty = flt(qty);
      new_item.item_barcode.forEach((element) => {
        if (this.search == element.barcode) {
          new_item.uom = element.posa_uom;
        }
      });
      if (this.flags.serial_no) {
        new_item.to_set_serial_no = this.flags.serial_no;
      }
      this.add_item(new_item);
      
      this.search = null;
      this.first_search = '';
      this.first_search = null;
      this.debounce_search = '';
      this.debounce_search = null;
      this.flags.serial_no = null;
      this.qty = 1;
      this.$refs.debounce_search.value = '';
     // this.$refs.debounce_search.focus();
    },
    get_item_qty(first_search) {
      let scal_qty = Math.abs(this.qty);
      if (first_search.startsWith(this.pos_profile.posa_scale_barcode_start )  || first_search.startsWith(this.pos_profile.scale_barcode_start_with_2 )  )    {
   
        var pesokg1 = first_search.substr(7, 5);
          var pesokg;
          if (pesokg1.startsWith('0000')) {
            pesokg = '0.00' + pesokg1.substr(4);
          } else if (pesokg1.startsWith('000')) {
            pesokg = '0.0' + pesokg1.substr(3);
          } else if (pesokg1.startsWith('00')) {
            pesokg = '0.' + pesokg1.substr(2);
          } else if (pesokg1.startsWith('0')) {
            pesokg = pesokg1.substr(1, 1) + '.' + pesokg1.substr(2, pesokg1.length);
          } else if (!pesokg1.startsWith('0')) {
            pesokg =
              pesokg1.substr(0, 2) + '.' + pesokg1.substr(2, pesokg1.length);
          }
          scal_qty = pesokg;
      }
      return scal_qty;
    },
    get_search(first_search) {
      let search_term = '';
      if ( first_search ){

 if  (first_search.startsWith(this.pos_profile.posa_scale_barcode_start )  || first_search.startsWith(this.pos_profile.scale_barcode_start_with_2 )  )    {
     search_term = first_search.substr(1, 6);
      } else {
        search_term = first_search;
      }
      return search_term;
    }},
    esc_event() {
      this.search = null;
      this.first_search = null;
      this.qty = 1;
      this.first_search = '';
      //this.$refs.debounce_search.focus();
    },
    
    update_cur_items_details() {
      this.update_items_details(this.filtred_items);
    },
    scan_barcoud() {
      
      const vm = this;
      onScan.attachTo(document, {
        suffixKeyCodes: [],
        keyCodeMapper: function (oEvent) {
         
          oEvent.stopImmediatePropagation();
          
          return onScan.decodeKeyEvent(oEvent);
        },
        onScan: function (sCode) {
          
          setTimeout(() => {
            vm.trigger_onscan(sCode);
          }, 300);
        },
      });
    },
    trigger_onscan(sCode) {

      var name = '';
var customerStorage = JSON.parse(localStorage.getItem('customer_storage')) || [];

// Check customer storage
var customerFound = customerStorage.some(function(entry) {
    if (entry.customer_id === sCode) {
        name = entry.name;
        return true;
    }
    return false;
});
if (!name) {
      this.first_search= sCode;
      if (this.filtred_items.length == 0) {
        evntBus.$emit('show_mesage', {
          text: \`No Item has this barcode "\${sCode}"\`,
          color: 'error',
        });
        frappe.utils.play_sound('error');
      } else {
       
        this.enter_event();
        this.debounce_search = null;
        this.search = null;
      }} else {
    if (customerFound) {
        evntBus.$emit('set_customer', name);
    }}
    },
    formtCurrency(value) {
      value = parseFloat(value);
      return value
        .toFixed(this.currency_precision)
        .replace(/\\d(?=(\\d{3})+\\.)/g, '$&,');
    },
    formtFloat(value) {
      value = parseFloat(value);
      return value
        .toFixed(this.float_precision)
        .replace(/\\d(?=(\\d{3})+\\.)/g, '$&,');
    },
  },

  computed: {
 

    filtred_items() {
      this.search = this.get_search(this.first_search);
     
      var is_scale_item = this.is_scale_item(this.first_search);
  
      let filtred_list = [];
      let filtred_group_list = [];
      if (this.item_group != 'ALL') {
        filtred_group_list = this.items.filter((item) =>
          item.item_group.toLowerCase().includes(this.item_group.toLowerCase())
        );
      } else {
        filtred_group_list = this.items;
      }
      if (!this.search || this.search.length < 3) {
        if (
          this.pos_profile.posa_show_template_items &&
          this.pos_profile.posa_hide_variants_items
        ) {
          return (filtred_list = filtred_group_list
            .filter((item) => !item.variant_of)
            .slice(0, 50));
        } else {
          return (filtred_list = filtred_group_list.slice(0, 50));
        }
      } else if (this.search ) {
        if (!is_scale_item){
        filtred_list = filtred_group_list.filter((item) => {
          let found = false;
          for (let element of item.item_barcode) {
            if (element.barcode == this.search) {
              found = true;
              break;
            }
          }
          return found;
        });}
        if (filtred_list.length == 0) {
          //logic if it scale item check includes
          //other wise check strict.
          //A.R. Change 2.02.2024
     
          if (is_scale_item == true && this.search.length == 6  ){
            let groupName = "\u0420\u0430\u0437\u0432\u0435\u0441\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B";
            
        filtred_group_list = this.items.filter((item) => item.item_group.toLowerCase().includes(groupName.toLowerCase()));  
        filtred_list = filtred_group_list.filter((item) =>item.item_code.toLowerCase().includes(this.search.toLowerCase()));
          
        } else if ( this.pos_profile.posa_search_strict1 ) {
          console.log(this.pos_profile.posa_search_strict1 );
            filtred_list = filtred_group_list.filter((item) =>
          item.item_code === this.search.toLowerCase() 
          );
          }else{
            
            filtred_list = filtred_group_list.filter((item) =>
          item.item_code.toLowerCase().includes(this.search.toLowerCase()) 
          );
          }
          if (filtred_list.length == 0) {
            filtred_list = filtred_group_list.filter((item) =>
              item.item_name.toLowerCase().includes(this.search.toLowerCase())
            );
          }
          if (
            filtred_list.length == 0 &&
            this.pos_profile.posa_search_serial_no
          ) {
            filtred_list = filtred_group_list.filter((item) => {
              let found = false;
              for (let element of item.serial_no_data) {
                if (element.serial_no == this.search) {
                  found = true;
                  this.flags.serial_no = null;
                  this.flags.serial_no = this.search;
                  break;
                }
              }
              return found;
            });
          }
        }
      }
      if (
        this.pos_profile.posa_show_template_items &&
        this.pos_profile.posa_hide_variants_items
      ) {
        return filtred_list.filter((item) => !item.variant_of).slice(0, 50);
      } else {
        return filtred_list.slice(0, 50);
      }
    },
    debounce_search: {
      get() {
        return this.first_search;
      },
      set: _.debounce(function (newValue) {
        this.first_search = newValue;
      }, 200),
    },
  },
  
  created: function () {
    this.$nextTick(function () {});
    evntBus.$on('register_pos_profile', (data) => {
      this.pos_profile = data.pos_profile;
      this.get_items();
      this.float_precision =
        frappe.defaults.get_default('float_precision') || 2;
      this.currency_precision =
        frappe.defaults.get_default('currency_precision') || 2;
      this.items_view = this.pos_profile.posa_default_card_view
        ? 'card'
        : 'list';
    });
    evntBus.$on('update_cur_items_details', () => {
      this.update_cur_items_details();
    });
    evntBus.$on('update_offers_counters', (data) => {
      this.offersCount = data.offersCount;
      this.appliedOffersCount = data.appliedOffersCount;
    });
    evntBus.$on('update_coupons_counters', (data) => {
      this.couponsCount = data.couponsCount;
      this.appliedCouponsCount = data.appliedCouponsCount;
    });
    evntBus.$on('update_customer_price_list', (data) => {
      this.customer_price_list = data;
    });

    document.addEventListener('keydown', this.shortSearchFocus.bind(this));

    document.addEventListener('keydown', this.shortQTYFocus.bind(this));
  },
  destroyed() {
    document.removeEventListener('keydown', this.shortQTYFocus);
    document.removeEventListener('keydown', this.shortSearchFocus);
   
  },
  mounted() {
    this.scan_barcoud();
  },
};
<\/script>

<style scoped>
.fill-height {
  height: calc(75vh); /* Allocate 75% of the height for item display */
}
.display-1 {
  font-size: 4rem;
}
.headline {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>`] }, media: void 0 });
  };
  var __vue_scope_id__3 = "data-v-36146c98";
  var __vue_module_identifier__3 = void 0;
  var __vue_is_functional_template__3 = false;
  function __vue_normalize__3(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../posprice1/posprice1/public/js/posprice/components/pos/ItemsSelector.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__2() {
    const styles = __vue_create_injector__2.styles || (__vue_create_injector__2.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__3 = /* @__PURE__ */ __vue_normalize__3({ render: __vue_render__3, staticRenderFns: __vue_staticRenderFns__3 }, __vue_inject_styles__3, __vue_script__3, __vue_scope_id__3, __vue_is_functional_template__3, __vue_module_identifier__3, false, __vue_create_injector__2, void 0, void 0);
  var ItemsSelector_default = __vue_component__3;

  // ../posprice1/posprice1/public/js/posprice/components/pos/Invoice.vue
  var __vue_render__4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("v-dialog", {
        attrs: { "max-width": "330" },
        model: {
          value: _vm.cancel_dialog,
          callback: function($$v) {
            _vm.cancel_dialog = $$v;
          },
          expression: "cancel_dialog"
        }
      }, [
        _c("v-card", [
          _c("v-card-title", { staticClass: "text-h5" }, [
            _c("span", { staticClass: "headline primary--text" }, [
              _vm._v(_vm._s(_vm.__("Cancel Current Invoice ?")))
            ])
          ]),
          _vm._v(" "),
          _c("v-card-actions", [
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "error" },
              on: { click: _vm.cancel_invoice }
            }, [
              _vm._v("\n          " + _vm._s(_vm.__("Cancel")) + "\n        ")
            ]),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "warning" },
              on: {
                click: function($event) {
                  _vm.cancel_dialog = false;
                }
              }
            }, [
              _vm._v("\n          " + _vm._s(_vm.__("Back")) + "\n        ")
            ])
          ], 1)
        ], 1)
      ], 1),
      _vm._v(" "),
      _c("v-card", {
        staticClass: "cards my-0 py-0 mt-3 grey lighten-5",
        staticStyle: { "max-height": "70vh", height: "70vh" }
      }, [
        _c("v-row", { staticClass: "items px-2 py-1", attrs: { align: "center" } }, [
          _vm.pos_profile.posa_allow_sales_order ? _c("v-col", { staticClass: "pb-2 pr-0", attrs: { cols: "9" } }, [_c("Customer")], 1) : _vm._e(),
          _vm._v(" "),
          !_vm.pos_profile.posa_allow_sales_order ? _c("v-col", { staticClass: "pb-2", attrs: { cols: "12" } }, [_c("Customer")], 1) : _vm._e(),
          _vm._v(" "),
          _vm.pos_profile.posa_allow_sales_order ? _c("v-col", { staticClass: "pb-2", attrs: { cols: "3" } }, [
            _c("v-select", {
              attrs: {
                dense: "",
                "hide-details": "",
                outlined: "",
                color: "primary",
                "background-color": "white",
                items: _vm.invoiceTypes,
                label: _vm.frappe._("Type"),
                disabled: _vm.invoiceType == "Return"
              },
              model: {
                value: _vm.invoiceType,
                callback: function($$v) {
                  _vm.invoiceType = $$v;
                },
                expression: "invoiceType"
              }
            })
          ], 1) : _vm._e()
        ], 1),
        _vm._v(" "),
        _vm.pos_profile.posa_use_delivery_charges ? _c("v-row", {
          staticClass: "items px-2 py-1 mt-0 pt-0",
          attrs: { align: "center" }
        }, [
          _c("v-col", {
            staticClass: "pb-0 mb-0 pr-0 pt-0",
            attrs: { cols: "8" }
          }, [
            _c("v-autocomplete", {
              attrs: {
                dense: "",
                clearable: "",
                "auto-select-first": "",
                outlined: "",
                color: "primary",
                label: _vm.frappe._("Delivery Charges"),
                items: _vm.delivery_charges,
                "item-text": "name",
                "return-object": "",
                "background-color": "white",
                "no-data-text": _vm.__("Charges not found"),
                "hide-details": "",
                filter: _vm.deliveryChargesFilter,
                disabled: _vm.readonly
              },
              on: {
                change: function($event) {
                  return _vm.update_delivery_charges();
                }
              },
              scopedSlots: _vm._u([
                {
                  key: "item",
                  fn: function(data) {
                    return [
                      [
                        _c("v-list-item-content", [
                          _c("v-list-item-title", {
                            staticClass: "primary--text subtitle-1",
                            domProps: {
                              innerHTML: _vm._s(data.item.name)
                            }
                          }),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", {
                            domProps: {
                              innerHTML: _vm._s("Rate: " + data.item.rate)
                            }
                          })
                        ], 1)
                      ]
                    ];
                  }
                }
              ], null, false, 2885212015),
              model: {
                value: _vm.selcted_delivery_charges,
                callback: function($$v) {
                  _vm.selcted_delivery_charges = $$v;
                },
                expression: "selcted_delivery_charges"
              }
            })
          ], 1),
          _vm._v(" "),
          _c("v-col", { staticClass: "pb-0 mb-0 pt-0", attrs: { cols: "4" } }, [
            _c("v-text-field", {
              attrs: {
                dense: "",
                outlined: "",
                color: "primary",
                label: _vm.frappe._("Delivery Charges Rate"),
                "background-color": "white",
                "hide-details": "",
                value: _vm.formtCurrency(_vm.delivery_charges_rate),
                prefix: _vm.pos_profile.currency,
                disabled: ""
              }
            })
          ], 1)
        ], 1) : _vm._e(),
        _vm._v(" "),
        _vm.pos_profile.posa_allow_change_posting_date ? _c("v-row", {
          staticClass: "items px-2 py-1 mt-0 pt-0",
          attrs: { align: "center" }
        }, [
          _vm.pos_profile.posa_allow_change_posting_date ? _c("v-col", { staticClass: "pb-2", attrs: { cols: "4" } }, [
            _c("v-menu", {
              ref: "invoice_posting_date",
              attrs: {
                "close-on-content-click": false,
                transition: "scale-transition",
                dense: ""
              },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on;
                    var attrs = ref.attrs;
                    return [
                      _c("v-text-field", _vm._g(_vm._b({
                        attrs: {
                          label: _vm.frappe._("Posting Date"),
                          readonly: "",
                          outlined: "",
                          dense: "",
                          "background-color": "white",
                          clearable: "",
                          color: "primary",
                          "hide-details": ""
                        },
                        model: {
                          value: _vm.posting_date,
                          callback: function($$v) {
                            _vm.posting_date = $$v;
                          },
                          expression: "posting_date"
                        }
                      }, "v-text-field", attrs, false), on))
                    ];
                  }
                }
              ], null, false, 216671095),
              model: {
                value: _vm.invoice_posting_date,
                callback: function($$v) {
                  _vm.invoice_posting_date = $$v;
                },
                expression: "invoice_posting_date"
              }
            }, [
              _vm._v(" "),
              _c("v-date-picker", {
                attrs: {
                  "no-title": "",
                  scrollable: "",
                  color: "primary",
                  min: _vm.frappe.datetime.add_days(_vm.frappe.datetime.now_date(true), -7),
                  max: _vm.frappe.datetime.add_days(_vm.frappe.datetime.now_date(true), 7)
                },
                on: {
                  input: function($event) {
                    _vm.invoice_posting_date = false;
                  }
                },
                model: {
                  value: _vm.posting_date,
                  callback: function($$v) {
                    _vm.posting_date = $$v;
                  },
                  expression: "posting_date"
                }
              })
            ], 1)
          ], 1) : _vm._e()
        ], 1) : _vm._e(),
        _vm._v(" "),
        _c("div", {
          staticClass: "my-0 py-0 overflow-y-auto",
          staticStyle: { "max-height": "60vh" }
        }, [
          [
            _c("v-data-table", {
              staticClass: "elevation-1",
              attrs: {
                headers: _vm.items_headers,
                items: _vm.items,
                "single-expand": _vm.singleExpand,
                expanded: _vm.expanded,
                "show-expand": "",
                "item-key": "posa_row_id",
                "items-per-page": _vm.itemsPerPage,
                "hide-default-footer": ""
              },
              on: {
                "update:expanded": function($event) {
                  _vm.expanded = $event;
                }
              },
              scopedSlots: _vm._u([
                {
                  key: "item.qty",
                  fn: function(ref) {
                    var item = ref.item;
                    return [_vm._v(_vm._s(item.qty))];
                  }
                },
                {
                  key: "item.rate",
                  fn: function(ref) {
                    var item = ref.item;
                    return [_vm._v(_vm._s(_vm.formtCurrency(item.rate)))];
                  }
                },
                {
                  key: "item.amount",
                  fn: function(ref) {
                    var item = ref.item;
                    return [
                      _vm._v(_vm._s(_vm.formtCurrency(item.qty * item.rate)))
                    ];
                  }
                },
                {
                  key: "item.posa_is_offer",
                  fn: function(ref) {
                    var item = ref.item;
                    return [
                      _c("v-simple-checkbox", {
                        attrs: {
                          value: !!item.posa_is_offer || !!item.posa_is_replace,
                          disabled: ""
                        }
                      })
                    ];
                  }
                },
                {
                  key: "expanded-item",
                  fn: function(ref) {
                    var headers = ref.headers;
                    var item = ref.item;
                    return [
                      _c("td", {
                        staticClass: "ma-0 pa-0",
                        attrs: { colspan: headers.length }
                      }, [
                        _c("v-row", { staticClass: "ma-0 pa-0" }, [
                          _c("v-col", { attrs: { cols: "1" } }, [
                            _c("v-btn", {
                              attrs: {
                                disabled: !!item.posa_is_offer || !!item.posa_is_replace,
                                icon: "",
                                color: "error"
                              },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation();
                                  return _vm.remove_item(item);
                                }
                              }
                            }, [_c("v-icon", [_vm._v("mdi-delete")])], 1)
                          ], 1),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "1" } }, [
                            _c("v-btn", {
                              attrs: {
                                disabled: !!item.posa_is_offer || !!item.posa_is_replace,
                                icon: "",
                                color: "secondary"
                              },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation();
                                  return _vm.subtract_one(item);
                                }
                              }
                            }, [
                              _c("v-icon", [
                                _vm._v("mdi-minus-circle-outline")
                              ])
                            ], 1)
                          ], 1),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "1" } }, [
                            _c("v-btn", {
                              attrs: {
                                disabled: !!item.posa_is_offer || !!item.posa_is_replace,
                                icon: "",
                                color: "secondary"
                              },
                              on: {
                                click: function($event) {
                                  $event.stopPropagation();
                                  return _vm.add_one(item);
                                }
                              }
                            }, [
                              _c("v-icon", [
                                _vm._v("mdi-plus-circle-outline")
                              ])
                            ], 1)
                          ], 1)
                        ], 1),
                        _vm._v(" "),
                        _c("v-row", { staticClass: "ma-0 pa-0" }, [
                          _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-text-field", {
                              attrs: {
                                dense: "",
                                outlined: "",
                                color: "primary",
                                label: _vm.frappe._("Item Code"),
                                "background-color": "white",
                                "hide-details": "",
                                disabled: ""
                              },
                              model: {
                                value: item.item_code,
                                callback: function($$v) {
                                  _vm.$set(item, "item_code", $$v);
                                },
                                expression: "item.item_code"
                              }
                            })
                          ], 1),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-text-field", {
                              ref: "quantity",
                              attrs: {
                                dense: "",
                                outlined: "",
                                color: "primary",
                                label: _vm.frappe._("QTY"),
                                "background-color": "white",
                                "hide-details": "",
                                type: "number",
                                disabled: !!item.posa_is_offer || !!item.posa_is_replace
                              },
                              on: {
                                change: function($event) {
                                  return _vm.calc_sotck_gty(item, $event);
                                }
                              },
                              model: {
                                value: item.qty,
                                callback: function($$v) {
                                  _vm.$set(item, "qty", _vm._n($$v));
                                },
                                expression: "item.qty"
                              }
                            })
                          ], 1),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-select", {
                              ref: "uom",
                              attrs: {
                                dense: "",
                                "background-color": "white",
                                label: _vm.frappe._("UOM"),
                                items: item.item_uoms,
                                outlined: "",
                                "item-text": "uom",
                                "item-value": "uom",
                                "hide-details": "",
                                disabled: !!_vm.invoice_doc.is_return || !!item.posa_is_offer || !!item.posa_is_replace
                              },
                              on: {
                                change: function($event) {
                                  return _vm.calc_uom(item, $event);
                                }
                              },
                              model: {
                                value: item.uom,
                                callback: function($$v) {
                                  _vm.$set(item, "uom", $$v);
                                },
                                expression: "item.uom"
                              }
                            })
                          ], 1),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-text-field", {
                              ref: "rate",
                              attrs: {
                                dense: "",
                                outlined: "",
                                color: "primary",
                                label: _vm.frappe._("Rate"),
                                "background-color": "white",
                                "hide-details": "",
                                type: "number",
                                prefix: _vm.invoice_doc.currency,
                                id: "rate",
                                disabled: !!item.posa_is_offer || !!item.posa_is_replace || !!item.posa_offer_applied || !_vm.pos_profile.posa_allow_user_to_edit_rate || !!_vm.invoice_doc.is_return ? true : false
                              },
                              on: {
                                change: function($event) {
                                  return _vm.calc_prices(item, $event);
                                }
                              },
                              model: {
                                value: item.rate,
                                callback: function($$v) {
                                  _vm.$set(item, "rate", _vm._n($$v));
                                },
                                expression: "item.rate"
                              }
                            })
                          ], 1),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-text-field", {
                              attrs: {
                                dense: "",
                                outlined: "",
                                color: "primary",
                                label: _vm.frappe._("Discount Percentage"),
                                "background-color": "white",
                                "hide-details": "",
                                type: "number",
                                id: "discount_percentage",
                                disabled: !!item.posa_is_offer || !!item.posa_is_replace || item.posa_offer_applied || !_vm.pos_profile.posa_allow_user_to_edit_item_discount || !!_vm.invoice_doc.is_return ? true : false
                              },
                              on: {
                                change: function($event) {
                                  return _vm.calc_prices(item, $event);
                                }
                              },
                              model: {
                                value: item.discount_percentage,
                                callback: function($$v) {
                                  _vm.$set(item, "discount_percentage", _vm._n($$v));
                                },
                                expression: "item.discount_percentage"
                              }
                            })
                          ], 1),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-text-field", {
                              attrs: {
                                dense: "",
                                outlined: "",
                                color: "primary",
                                label: _vm.frappe._("Discount Amount"),
                                "background-color": "white",
                                "hide-details": "",
                                type: "number",
                                prefix: _vm.invoice_doc.currency,
                                id: "discount_amount",
                                disabled: !!item.posa_is_offer || !!item.posa_is_replace || !!item.posa_offer_applied || !_vm.pos_profile.posa_allow_user_to_edit_item_discount || !!_vm.invoice_doc.is_return ? true : false
                              },
                              on: {
                                change: function($event) {
                                  return _vm.calc_prices(item, $event);
                                }
                              },
                              model: {
                                value: item.discount_amount,
                                callback: function($$v) {
                                  _vm.$set(item, "discount_amount", _vm._n($$v));
                                },
                                expression: "item.discount_amount"
                              }
                            })
                          ], 1),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-text-field", {
                              attrs: {
                                dense: "",
                                outlined: "",
                                color: "primary",
                                label: _vm.frappe._("Price list Rate"),
                                "background-color": "white",
                                "hide-details": "",
                                type: "number",
                                disabled: "",
                                prefix: _vm.invoice_doc.currency
                              },
                              model: {
                                value: item.price_list_rate,
                                callback: function($$v) {
                                  _vm.$set(item, "price_list_rate", $$v);
                                },
                                expression: "item.price_list_rate"
                              }
                            })
                          ], 1),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-text-field", {
                              attrs: {
                                dense: "",
                                outlined: "",
                                color: "primary",
                                label: _vm.frappe._("Available QTY"),
                                "background-color": "white",
                                "hide-details": "",
                                type: "number",
                                disabled: ""
                              },
                              model: {
                                value: item.actual_qty,
                                callback: function($$v) {
                                  _vm.$set(item, "actual_qty", $$v);
                                },
                                expression: "item.actual_qty"
                              }
                            })
                          ], 1),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-text-field", {
                              attrs: {
                                dense: "",
                                outlined: "",
                                color: "primary",
                                label: _vm.frappe._("Group"),
                                "background-color": "white",
                                "hide-details": "",
                                disabled: ""
                              },
                              model: {
                                value: item.item_group,
                                callback: function($$v) {
                                  _vm.$set(item, "item_group", $$v);
                                },
                                expression: "item.item_group"
                              }
                            })
                          ], 1),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-text-field", {
                              attrs: {
                                dense: "",
                                outlined: "",
                                color: "primary",
                                label: _vm.frappe._("Stock QTY"),
                                "background-color": "white",
                                "hide-details": "",
                                type: "number",
                                disabled: ""
                              },
                              model: {
                                value: item.stock_qty,
                                callback: function($$v) {
                                  _vm.$set(item, "stock_qty", $$v);
                                },
                                expression: "item.stock_qty"
                              }
                            })
                          ], 1),
                          _vm._v(" "),
                          _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-text-field", {
                              attrs: {
                                dense: "",
                                outlined: "",
                                color: "primary",
                                label: _vm.frappe._("Stock UOM"),
                                "background-color": "white",
                                "hide-details": "",
                                disabled: ""
                              },
                              model: {
                                value: item.stock_uom,
                                callback: function($$v) {
                                  _vm.$set(item, "stock_uom", $$v);
                                },
                                expression: "item.stock_uom"
                              }
                            })
                          ], 1),
                          _vm._v(" "),
                          item.posa_offer_applied ? _c("v-col", {
                            attrs: { align: "center", cols: "4" }
                          }, [
                            _c("v-checkbox", {
                              staticClass: "shrink mr-2 mt-0",
                              attrs: {
                                dense: "",
                                label: _vm.frappe._("Offer Applied"),
                                readonly: "",
                                "hide-details": ""
                              },
                              model: {
                                value: item.posa_offer_applied,
                                callback: function($$v) {
                                  _vm.$set(item, "posa_offer_applied", $$v);
                                },
                                expression: "item.posa_offer_applied"
                              }
                            })
                          ], 1) : _vm._e(),
                          _vm._v(" "),
                          item.has_serial_no == 1 || item.serial_no ? _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-text-field", {
                              attrs: {
                                dense: "",
                                outlined: "",
                                color: "primary",
                                label: _vm.frappe._("Serial No QTY"),
                                "background-color": "white",
                                "hide-details": "",
                                type: "number",
                                disabled: ""
                              },
                              model: {
                                value: item.serial_no_selected_count,
                                callback: function($$v) {
                                  _vm.$set(item, "serial_no_selected_count", $$v);
                                },
                                expression: "item.serial_no_selected_count"
                              }
                            })
                          ], 1) : _vm._e(),
                          _vm._v(" "),
                          item.has_serial_no == 1 || item.serial_no ? _c("v-col", { attrs: { cols: "12" } }, [
                            _c("v-autocomplete", {
                              attrs: {
                                items: item.serial_no_data,
                                "item-text": "serial_no",
                                outlined: "",
                                dense: "",
                                chips: "",
                                color: "primary",
                                "small-chips": "",
                                label: _vm.frappe._("Serial No"),
                                multiple: ""
                              },
                              on: {
                                change: function($event) {
                                  return _vm.set_serial_no(item);
                                }
                              },
                              model: {
                                value: item.serial_no_selected,
                                callback: function($$v) {
                                  _vm.$set(item, "serial_no_selected", $$v);
                                },
                                expression: "item.serial_no_selected"
                              }
                            })
                          ], 1) : _vm._e(),
                          _vm._v(" "),
                          item.has_batch_no == 1 || item.batch_no ? _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-text-field", {
                              attrs: {
                                dense: "",
                                outlined: "",
                                color: "primary",
                                label: _vm.frappe._("Batch No Available QTY"),
                                "background-color": "white",
                                "hide-details": "",
                                type: "number",
                                disabled: ""
                              },
                              model: {
                                value: item.actual_batch_qty,
                                callback: function($$v) {
                                  _vm.$set(item, "actual_batch_qty", $$v);
                                },
                                expression: "item.actual_batch_qty"
                              }
                            })
                          ], 1) : _vm._e(),
                          _vm._v(" "),
                          item.has_batch_no == 1 || item.batch_no ? _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-text-field", {
                              attrs: {
                                dense: "",
                                outlined: "",
                                color: "primary",
                                label: _vm.frappe._("Batch No Expiry Date"),
                                "background-color": "white",
                                "hide-details": "",
                                disabled: ""
                              },
                              model: {
                                value: item.batch_no_expiry_date,
                                callback: function($$v) {
                                  _vm.$set(item, "batch_no_expiry_date", $$v);
                                },
                                expression: "item.batch_no_expiry_date"
                              }
                            })
                          ], 1) : _vm._e(),
                          _vm._v(" "),
                          item.has_batch_no == 1 || item.batch_no ? _c("v-col", { attrs: { cols: "8" } }, [
                            _c("v-autocomplete", {
                              attrs: {
                                items: item.batch_no_data,
                                "item-text": "batch_no",
                                outlined: "",
                                dense: "",
                                color: "primary",
                                label: _vm.frappe._("Batch No")
                              },
                              on: {
                                change: function($event) {
                                  return _vm.set_batch_qty(item, $event);
                                }
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "item",
                                  fn: function(data) {
                                    return [
                                      [
                                        _c("v-list-item-content", [
                                          _c("v-list-item-title", {
                                            domProps: {
                                              innerHTML: _vm._s(data.item.batch_no)
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-list-item-subtitle", {
                                            domProps: {
                                              innerHTML: _vm._s("Available QTY  '" + data.item.batch_qty + "' - Expiry Date " + data.item.expiry_date)
                                            }
                                          })
                                        ], 1)
                                      ]
                                    ];
                                  }
                                }
                              ], null, true),
                              model: {
                                value: item.batch_no,
                                callback: function($$v) {
                                  _vm.$set(item, "batch_no", $$v);
                                },
                                expression: "item.batch_no"
                              }
                            })
                          ], 1) : _vm._e(),
                          _vm._v(" "),
                          _vm.pos_profile.posa_allow_sales_order && _vm.invoiceType == "Order" ? _c("v-col", { attrs: { cols: "4" } }, [
                            _c("v-menu", {
                              ref: "item_delivery_date",
                              attrs: {
                                "close-on-content-click": false,
                                "return-value": item.posa_delivery_date,
                                transition: "scale-transition",
                                dense: ""
                              },
                              on: {
                                "update:returnValue": function($event) {
                                  return _vm.$set(item, "posa_delivery_date", $event);
                                },
                                "update:return-value": function($event) {
                                  return _vm.$set(item, "posa_delivery_date", $event);
                                }
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref2) {
                                    var on = ref2.on;
                                    var attrs = ref2.attrs;
                                    return [
                                      _c("v-text-field", _vm._g(_vm._b({
                                        attrs: {
                                          label: _vm.frappe._("Delivery Date"),
                                          readonly: "",
                                          outlined: "",
                                          dense: "",
                                          clearable: "",
                                          color: "primary",
                                          "hide-details": ""
                                        },
                                        model: {
                                          value: item.posa_delivery_date,
                                          callback: function($$v) {
                                            _vm.$set(item, "posa_delivery_date", $$v);
                                          },
                                          expression: "item.posa_delivery_date"
                                        }
                                      }, "v-text-field", attrs, false), on))
                                    ];
                                  }
                                }
                              ], null, true),
                              model: {
                                value: item.item_delivery_date,
                                callback: function($$v) {
                                  _vm.$set(item, "item_delivery_date", $$v);
                                },
                                expression: "item.item_delivery_date"
                              }
                            }, [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: {
                                  "no-title": "",
                                  scrollable: "",
                                  color: "primary",
                                  min: _vm.frappe.datetime.now_date()
                                },
                                model: {
                                  value: item.posa_delivery_date,
                                  callback: function($$v) {
                                    _vm.$set(item, "posa_delivery_date", $$v);
                                  },
                                  expression: "item.posa_delivery_date"
                                }
                              }, [
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c("v-btn", {
                                  attrs: {
                                    text: "",
                                    color: "primary"
                                  },
                                  on: {
                                    click: function($event) {
                                      item.item_delivery_date = false;
                                    }
                                  }
                                }, [
                                  _vm._v("\n                        Cancel\n                      ")
                                ]),
                                _vm._v(" "),
                                _c("v-btn", {
                                  attrs: {
                                    text: "",
                                    color: "primary"
                                  },
                                  on: {
                                    click: function($event) {
                                      ;
                                      [
                                        _vm.$refs.item_delivery_date.save(item.posa_delivery_date),
                                        _vm.validate_due_date(item)
                                      ];
                                    }
                                  }
                                }, [
                                  _vm._v("\n                        OK\n                      ")
                                ])
                              ], 1)
                            ], 1)
                          ], 1) : _vm._e(),
                          _vm._v(" "),
                          _vm.pos_profile.posa_display_additional_notes ? _c("v-col", { attrs: { cols: "8" } }, [
                            _c("v-textarea", {
                              staticClass: "pa-0",
                              attrs: {
                                outlined: "",
                                dense: "",
                                clearable: "",
                                color: "primary",
                                "auto-grow": "",
                                rows: "1",
                                label: _vm.frappe._("Additional Notes"),
                                value: item.posa_notes
                              },
                              model: {
                                value: item.posa_notes,
                                callback: function($$v) {
                                  _vm.$set(item, "posa_notes", $$v);
                                },
                                expression: "item.posa_notes"
                              }
                            })
                          ], 1) : _vm._e()
                        ], 1)
                      ], 1)
                    ];
                  }
                }
              ])
            })
          ]
        ], 2)
      ], 1),
      _vm._v(" "),
      _c("v-card", { staticClass: "cards mb-0 mt-3 py-0 grey lighten-5" }, [
        _c("v-row", { attrs: { "no-gutters": "" } }, [
          _c("v-col", { attrs: { cols: "7" } }, [
            _c("v-row", {
              staticClass: "pa-1 pt-9 pr-1",
              attrs: { "no-gutters": "" }
            }, [
              _c("v-col", { staticClass: "pa-1", attrs: { cols: "6" } }, [
                _c("v-text-field", {
                  attrs: {
                    value: _vm.formtFloat(_vm.total_qty),
                    label: _vm.frappe._("Total Qty"),
                    outlined: "",
                    dense: "",
                    readonly: "",
                    "hide-details": "",
                    color: "accent"
                  }
                })
              ], 1),
              _vm._v(" "),
              !_vm.pos_profile.posa_use_percentage_discount ? _c("v-col", { staticClass: "pa-1", attrs: { cols: "6" } }, [
                _c("v-text-field", {
                  ref: "discount",
                  attrs: {
                    label: _vm.frappe._("Additional Discount"),
                    outlined: "",
                    dense: "",
                    "hide-details": "",
                    color: "warning",
                    type: "number",
                    prefix: _vm.pos_profile.currency,
                    disabled: !_vm.pos_profile.posa_allow_user_to_edit_additional_discount || _vm.discount_percentage_offer_name ? true : false
                  },
                  model: {
                    value: _vm.discount_amount,
                    callback: function($$v) {
                      _vm.discount_amount = $$v;
                    },
                    expression: "discount_amount"
                  }
                })
              ], 1) : _vm._e(),
              _vm._v(" "),
              _vm.pos_profile.posa_use_percentage_discount ? _c("v-col", { staticClass: "pa-1", attrs: { cols: "6" } }, [
                _c("v-text-field", {
                  ref: "percentage_discount",
                  attrs: {
                    label: _vm.frappe._("Additional Discount %"),
                    outlined: "",
                    dense: "",
                    color: "warning",
                    "hide-details": "",
                    type: "number",
                    disabled: !_vm.pos_profile.posa_allow_user_to_edit_additional_discount || _vm.discount_percentage_offer_name ? true : false
                  },
                  on: { change: _vm.update_discount_umount },
                  model: {
                    value: _vm.additional_discount_percentage,
                    callback: function($$v) {
                      _vm.additional_discount_percentage = $$v;
                    },
                    expression: "additional_discount_percentage"
                  }
                })
              ], 1) : _vm._e(),
              _vm._v(" "),
              _c("v-col", { staticClass: "pa-1 mt-2", attrs: { cols: "6" } }, [
                _c("v-text-field", {
                  attrs: {
                    value: _vm.formtCurrency(_vm.total_items_discount_amount),
                    label: _vm.frappe._("Items Discounts"),
                    outlined: "",
                    dense: "",
                    color: "warning",
                    readonly: "",
                    "hide-details": "",
                    prefix: _vm.pos_profile.currency
                  }
                })
              ], 1),
              _vm._v(" "),
              _c("v-col", { staticClass: "pa-1 mt-2", attrs: { cols: "6" } }, [
                _c("v-text-field", {
                  attrs: {
                    value: _vm.formtCurrency(_vm.subtotal),
                    label: _vm.frappe._("Total"),
                    outlined: "",
                    dense: "",
                    readonly: "",
                    "hide-details": "",
                    color: "success",
                    prefix: _vm.pos_profile.currency
                  }
                })
              ], 1)
            ], 1)
          ], 1),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "5" } }, [
            _c("v-row", {
              staticClass: "pa-1 pt-2 pl-0",
              attrs: { "no-gutters": "" }
            }, [
              _c("v-col", { staticClass: "pa-1", attrs: { cols: "6" } }, [
                _c("v-btn", {
                  staticClass: "pa-0",
                  attrs: { block: "", color: "warning", dark: "" },
                  on: { click: _vm.get_draft_invoices }
                }, [_vm._v(_vm._s(_vm.__("Held")))])
              ], 1),
              _vm._v(" "),
              _c("v-col", { staticClass: "pa-1", attrs: { cols: "6" } }, [
                _c("v-btn", {
                  staticClass: "pa-0",
                  class: {
                    "disable-events": !_vm.pos_profile.posa_allow_return
                  },
                  attrs: {
                    block: "",
                    color: "secondary",
                    dark: ""
                  },
                  on: { click: _vm.open_returns }
                }, [_vm._v(_vm._s(_vm.__("Return")))])
              ], 1),
              _vm._v(" "),
              _c("v-col", { staticClass: "pa-1", attrs: { cols: "6" } }, [
                _c("v-btn", {
                  staticClass: "pa-0",
                  attrs: { block: "", color: "error", dark: "" },
                  on: {
                    click: function($event) {
                      _vm.cancel_dialog = true;
                    }
                  }
                }, [_vm._v(_vm._s(_vm.__("Cancel")))])
              ], 1),
              _vm._v(" "),
              _c("v-col", { staticClass: "pa-1", attrs: { cols: "6" } }, [
                _c("v-btn", {
                  staticClass: "pa-0",
                  attrs: { block: "", color: "accent", dark: "" },
                  on: { click: _vm.new_invoice }
                }, [_vm._v(_vm._s(_vm.__("Save/New")))])
              ], 1),
              _vm._v(" "),
              _c("v-col", { staticClass: "pa-1" }, [
                _c("v-btn", {
                  staticClass: "pa-0",
                  attrs: { block: "", color: "success", dark: "" },
                  on: { click: _vm.show_payment }
                }, [_vm._v(_vm._s(_vm.__("PAY")))])
              ], 1),
              _vm._v(" "),
              _vm.pos_profile.posa_allow_print_draft_invoices ? _c("v-col", { staticClass: "pa-1", attrs: { cols: "6" } }, [
                _c("v-btn", {
                  staticClass: "pa-0",
                  attrs: {
                    block: "",
                    color: "primary",
                    dark: ""
                  },
                  on: { click: _vm.print_draft_invoice }
                }, [_vm._v(_vm._s(_vm.__("Print Draft")))])
              ], 1) : _vm._e()
            ], 1)
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  __vue_render__4._withStripped = true;

  // ../posprice1/posprice1/public/js/posprice/components/pos/OpeningDialog.vue
  var __vue_render__5 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-row", { attrs: { justify: "center" } }, [
      _c("v-dialog", {
        attrs: { persistent: "", "max-width": "600px" },
        model: {
          value: _vm.dialog,
          callback: function($$v) {
            _vm.dialog = $$v;
          },
          expression: "dialog"
        }
      }, [
        _c("v-card", [
          _c("v-card-title", [
            _c("span", { staticClass: "headline primary--text" }, [
              _vm._v(_vm._s(_vm.__("Create POS Opening Shift")))
            ])
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("v-container", [
              _c("v-row", [
                _c("v-col", { attrs: { cols: "12" } }, [
                  _c("v-autocomplete", {
                    attrs: {
                      items: _vm.companys,
                      label: _vm.frappe._("Company"),
                      required: ""
                    },
                    model: {
                      value: _vm.company,
                      callback: function($$v) {
                        _vm.company = $$v;
                      },
                      expression: "company"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "12" } }, [
                  _c("v-autocomplete", {
                    attrs: {
                      items: _vm.pos_profiles,
                      label: _vm.frappe._("POS Profile"),
                      required: ""
                    },
                    model: {
                      value: _vm.pos_profile,
                      callback: function($$v) {
                        _vm.pos_profile = $$v;
                      },
                      expression: "pos_profile"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "12" } }, [
                  [
                    _c("v-data-table", {
                      staticClass: "elevation-1",
                      attrs: {
                        headers: _vm.payments_methods_headers,
                        items: _vm.payments_methods,
                        "item-key": "mode_of_payment",
                        "items-per-page": _vm.itemsPerPage,
                        "hide-default-footer": ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "item.amount",
                          fn: function(props) {
                            return [
                              _c("v-edit-dialog", {
                                attrs: {
                                  "return-value": props.item.amount
                                },
                                on: {
                                  "update:returnValue": function($event) {
                                    return _vm.$set(props.item, "amount", $event);
                                  },
                                  "update:return-value": function($event) {
                                    return _vm.$set(props.item, "amount", $event);
                                  }
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "input",
                                    fn: function() {
                                      return [
                                        _c("v-text-field", {
                                          attrs: {
                                            rules: [
                                              _vm.max25chars
                                            ],
                                            label: _vm.frappe._("Edit"),
                                            "single-line": "",
                                            counter: "",
                                            type: "number"
                                          },
                                          model: {
                                            value: props.item.amount,
                                            callback: function($$v) {
                                              _vm.$set(props.item, "amount", $$v);
                                            },
                                            expression: "props.item.amount"
                                          }
                                        })
                                      ];
                                    },
                                    proxy: true
                                  }
                                ], null, true)
                              }, [
                                _vm._v("\n                      " + _vm._s(_vm.formtCurrency(props.item.amount)) + "\n                      ")
                              ])
                            ];
                          }
                        }
                      ])
                    })
                  ]
                ], 2)
              ], 1)
            ], 1)
          ], 1),
          _vm._v(" "),
          _c("v-card-actions", [
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "error", dark: "" },
              on: { click: _vm.go_desk }
            }, [_vm._v("Cancel")]),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "success", dark: "" },
              on: { click: _vm.submit_dialog }
            }, [_vm._v("Submit")])
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  __vue_render__5._withStripped = true;

  // ../posprice1/posprice1/public/js/posprice/components/pos/Payments.vue
  var __vue_render__6 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("v-card", {
        staticClass: "selection mx-auto grey lighten-5 pa-1",
        staticStyle: { "max-height": "76vh", height: "76vh" }
      }, [
        _c("v-progress-linear", {
          attrs: {
            active: _vm.loading,
            indeterminate: _vm.loading,
            absolute: "",
            top: "",
            color: "info"
          }
        }),
        _vm._v(" "),
        _c("div", {
          staticClass: "overflow-y-auto px-2 pt-2",
          staticStyle: { "max-height": "75vh" }
        }, [
          _vm.invoice_doc ? _c("v-row", { staticClass: "px-1 py-0" }, [
            _c("v-col", { attrs: { cols: "7" } }, [
              _c("v-text-field", {
                attrs: {
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("Paid Amount"),
                  "background-color": "white",
                  "hide-details": "",
                  value: _vm.formtCurrency(_vm.total_payments),
                  readonly: "",
                  prefix: _vm.invoice_doc.currency,
                  dense: ""
                }
              })
            ], 1),
            _vm._v(" "),
            _c("v-col", { attrs: { cols: "5" } }, [
              _c("v-text-field", {
                attrs: {
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._(_vm.diff_lable),
                  "background-color": "white",
                  "hide-details": "",
                  value: _vm.formtCurrency(_vm.diff_payment),
                  disabled: "",
                  prefix: _vm.invoice_doc.currency,
                  dense: ""
                }
              })
            ], 1),
            _vm._v(" "),
            _vm.diff_payment < 0 && !_vm.invoice_doc.is_return ? _c("v-col", { attrs: { cols: "7" } }, [
              _c("v-text-field", {
                attrs: {
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("Paid Change"),
                  "background-color": "white",
                  prefix: _vm.invoice_doc.currency,
                  rules: _vm.paid_change_rules,
                  dense: "",
                  type: "number"
                },
                on: {
                  input: function($event) {
                    return _vm.set_paid_change();
                  }
                },
                model: {
                  value: _vm.paid_change,
                  callback: function($$v) {
                    _vm.paid_change = $$v;
                  },
                  expression: "paid_change"
                }
              })
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.diff_payment < 0 && !_vm.invoice_doc.is_return ? _c("v-col", { attrs: { cols: "5" } }, [
              _c("v-text-field", {
                attrs: {
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("Credit Change"),
                  "background-color": "white",
                  "hide-details": "",
                  value: _vm.formtCurrency(_vm.credit_change),
                  disabled: "",
                  prefix: _vm.invoice_doc.currency,
                  dense: ""
                }
              })
            ], 1) : _vm._e()
          ], 1) : _vm._e(),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _vm.is_cashback ? _c("div", _vm._l(_vm.invoice_doc.payments, function(payment) {
            return _c("v-row", { key: payment.name, staticClass: "pyments px-1 py-0" }, [
              !_vm.is_mpesa_c2b_payment(payment) ? _c("v-col", { attrs: { cols: "6" } }, [
                _c("v-text-field", {
                  key: payment.idx + "F",
                  attrs: {
                    dense: "",
                    outlined: "",
                    color: "primary",
                    id: payment.idx + "F",
                    label: _vm.frappe._(payment.mode_of_payment),
                    "background-color": "white",
                    "hide-details": "",
                    type: "number",
                    prefix: _vm.invoice_doc.currency,
                    readonly: _vm.invoice_doc.is_return ? true : false
                  },
                  on: {
                    focus: function($event) {
                      return _vm.set_rest_amount(payment.idx);
                    }
                  },
                  model: {
                    value: payment.amount,
                    callback: function($$v) {
                      _vm.$set(payment, "amount", $$v);
                    },
                    expression: "payment.amount"
                  }
                })
              ], 1) : _vm._e(),
              _vm._v(" "),
              !_vm.is_mpesa_c2b_payment(payment) ? _c("v-col", {
                attrs: {
                  cols: 6 ? (payment.type != "Phone" || payment.amount == 0 || !_vm.request_payment_field) && !_vm.is_mpesa_c2b_payment(payment) : 3
                }
              }, [
                _c("v-btn", {
                  key: payment.idx,
                  staticClass: "payment-button",
                  class: {
                    "selected-payment": payment.idx === this.selectedPaymentMode
                  },
                  attrs: {
                    block: "",
                    id: payment.idx,
                    color: "primary",
                    dark: ""
                  },
                  on: {
                    click: function($event) {
                      return _vm.set_full_amount(payment.idx);
                    }
                  }
                }, [_vm._v(_vm._s(payment.mode_of_payment))])
              ], 1) : _vm._e(),
              _vm._v(" "),
              _vm.is_mpesa_c2b_payment(payment) ? _c("v-col", { staticClass: "pl-3", attrs: { cols: 12 } }, [
                _c("v-btn", {
                  attrs: {
                    block: "",
                    color: "success",
                    dark: ""
                  },
                  on: {
                    click: function($event) {
                      return _vm.mpesa_c2b_dialg(payment);
                    }
                  }
                }, [
                  _vm._v("\n              " + _vm._s(_vm.__("Get Payments " + payment.mode_of_payment)) + "\n            ")
                ])
              ], 1) : _vm._e(),
              _vm._v(" "),
              payment.type == "Phone" && payment.amount > 0 && _vm.request_payment_field ? _c("v-col", { staticClass: "pl-1", attrs: { cols: 3 } }, [
                _c("v-btn", {
                  attrs: {
                    block: "",
                    color: "success",
                    dark: "",
                    disabled: payment.amount == 0
                  },
                  on: {
                    click: function($event) {
                      ;
                      _vm.phone_dialog = true, payment.amount = Math.ceil(payment.amount);
                    }
                  }
                }, [
                  _vm._v("\n              " + _vm._s(_vm.__("Request")) + "\n            ")
                ])
              ], 1) : _vm._e()
            ], 1);
          }), 1) : _vm._e(),
          _vm._v(" "),
          _vm.invoice_doc && _vm.available_pioints_amount > 0 && !_vm.invoice_doc.is_return ? _c("v-row", { staticClass: "pyments px-1 py-0" }, [
            _c("v-col", { attrs: { cols: "7" } }, [
              _c("v-text-field", {
                attrs: {
                  dense: "",
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("Redeem Loyalty Points"),
                  "background-color": "white",
                  "hide-details": "",
                  type: "number",
                  prefix: _vm.invoice_doc.currency
                },
                model: {
                  value: _vm.loyalty_amount,
                  callback: function($$v) {
                    _vm.loyalty_amount = $$v;
                  },
                  expression: "loyalty_amount"
                }
              })
            ], 1),
            _vm._v(" "),
            _c("v-col", { attrs: { cols: "5" } }, [
              _c("v-text-field", {
                attrs: {
                  dense: "",
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("You can redeem upto"),
                  "background-color": "white",
                  "hide-details": "",
                  value: _vm.formtFloat(_vm.available_pioints_amount),
                  prefix: _vm.invoice_doc.currency,
                  disabled: ""
                }
              })
            ], 1)
          ], 1) : _vm._e(),
          _vm._v(" "),
          _vm.invoice_doc && _vm.available_customer_credit > 0 && !_vm.invoice_doc.is_return && _vm.redeem_customer_credit ? _c("v-row", { staticClass: "pyments px-1 py-0" }, [
            _c("v-col", { attrs: { cols: "7" } }, [
              _c("v-text-field", {
                attrs: {
                  dense: "",
                  outlined: "",
                  disabled: "",
                  color: "primary",
                  label: _vm.frappe._("Redeemed Customer Credit"),
                  "background-color": "white",
                  "hide-details": "",
                  type: "number",
                  prefix: _vm.invoice_doc.currency
                },
                model: {
                  value: _vm.redeemed_customer_credit,
                  callback: function($$v) {
                    _vm.redeemed_customer_credit = $$v;
                  },
                  expression: "redeemed_customer_credit"
                }
              })
            ], 1),
            _vm._v(" "),
            _c("v-col", { attrs: { cols: "5" } }, [
              _c("v-text-field", {
                attrs: {
                  dense: "",
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("You can redeem credit upto"),
                  "background-color": "white",
                  "hide-details": "",
                  value: _vm.formtCurrency(_vm.available_customer_credit),
                  prefix: _vm.invoice_doc.currency,
                  disabled: ""
                }
              })
            ], 1)
          ], 1) : _vm._e(),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c("v-row", { staticClass: "px-1 py-0" }, [
            _c("v-col", { attrs: { cols: "6" } }, [
              _c("v-text-field", {
                attrs: {
                  dense: "",
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("Net Total"),
                  "background-color": "white",
                  "hide-details": "",
                  value: _vm.formtCurrency(_vm.invoice_doc.net_total),
                  disabled: "",
                  prefix: _vm.invoice_doc.currency
                }
              })
            ], 1),
            _vm._v(" "),
            _c("v-col", { attrs: { cols: "6" } }, [
              _c("v-text-field", {
                attrs: {
                  dense: "",
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("Tax and Charges"),
                  "background-color": "white",
                  "hide-details": "",
                  value: _vm.formtCurrency(_vm.invoice_doc.total_taxes_and_charges),
                  disabled: "",
                  prefix: _vm.invoice_doc.currency
                }
              })
            ], 1),
            _vm._v(" "),
            _c("v-col", { attrs: { cols: "6" } }, [
              _c("v-text-field", {
                attrs: {
                  dense: "",
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("Total Amount"),
                  "background-color": "white",
                  "hide-details": "",
                  value: _vm.formtCurrency(_vm.invoice_doc.total),
                  disabled: "",
                  prefix: _vm.invoice_doc.currency
                }
              })
            ], 1),
            _vm._v(" "),
            _c("v-col", { attrs: { cols: "6" } }, [
              _c("v-text-field", {
                attrs: {
                  dense: "",
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("Discount Amount"),
                  "background-color": "white",
                  "hide-details": "",
                  value: _vm.formtCurrency(_vm.invoice_doc.discount_amount),
                  disabled: "",
                  prefix: _vm.invoice_doc.currency
                }
              })
            ], 1),
            _vm._v(" "),
            _c("v-col", { attrs: { cols: "6" } }, [
              _c("v-text-field", {
                attrs: {
                  dense: "",
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("Grand Total"),
                  "background-color": "white",
                  "hide-details": "",
                  value: _vm.formtCurrency(_vm.invoice_doc.grand_total),
                  disabled: "",
                  prefix: _vm.invoice_doc.currency
                }
              })
            ], 1),
            _vm._v(" "),
            _vm.pos_profile.posa_allow_sales_order && _vm.invoiceType == "Order" ? _c("v-col", { attrs: { cols: "6" } }, [
              _c("v-menu", {
                ref: "order_delivery_date",
                attrs: {
                  "close-on-content-click": false,
                  transition: "scale-transition",
                  dense: ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "activator",
                    fn: function(ref) {
                      var on = ref.on;
                      var attrs = ref.attrs;
                      return [
                        _c("v-text-field", _vm._g(_vm._b({
                          attrs: {
                            label: _vm.frappe._("Delivery Date"),
                            readonly: "",
                            outlined: "",
                            dense: "",
                            "background-color": "white",
                            clearable: "",
                            color: "primary",
                            "hide-details": ""
                          },
                          model: {
                            value: _vm.invoice_doc.posa_delivery_date,
                            callback: function($$v) {
                              _vm.$set(_vm.invoice_doc, "posa_delivery_date", $$v);
                            },
                            expression: "invoice_doc.posa_delivery_date"
                          }
                        }, "v-text-field", attrs, false), on))
                      ];
                    }
                  }
                ], null, false, 3418006649),
                model: {
                  value: _vm.order_delivery_date,
                  callback: function($$v) {
                    _vm.order_delivery_date = $$v;
                  },
                  expression: "order_delivery_date"
                }
              }, [
                _vm._v(" "),
                _c("v-date-picker", {
                  attrs: {
                    "no-title": "",
                    scrollable: "",
                    color: "primary",
                    min: _vm.frappe.datetime.now_date()
                  },
                  on: {
                    input: function($event) {
                      _vm.order_delivery_date = false;
                    }
                  },
                  model: {
                    value: _vm.invoice_doc.posa_delivery_date,
                    callback: function($$v) {
                      _vm.$set(_vm.invoice_doc, "posa_delivery_date", $$v);
                    },
                    expression: "invoice_doc.posa_delivery_date"
                  }
                })
              ], 1)
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.invoice_doc.posa_delivery_date ? _c("v-col", { attrs: { cols: "12" } }, [
              _c("v-autocomplete", {
                attrs: {
                  dense: "",
                  clearable: "",
                  "auto-select-first": "",
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("Address"),
                  items: _vm.addresses,
                  "item-text": "address_title",
                  "item-value": "name",
                  "background-color": "white",
                  "no-data-text": "Address not found",
                  "hide-details": "",
                  filter: _vm.addressFilter,
                  "append-icon": "mdi-plus"
                },
                on: { "click:append": _vm.new_address },
                scopedSlots: _vm._u([
                  {
                    key: "item",
                    fn: function(data) {
                      return [
                        [
                          _c("v-list-item-content", [
                            _c("v-list-item-title", {
                              staticClass: "primary--text subtitle-1",
                              domProps: {
                                innerHTML: _vm._s(data.item.address_title)
                              }
                            }),
                            _vm._v(" "),
                            _c("v-list-item-title", {
                              domProps: {
                                innerHTML: _vm._s(data.item.address_line1)
                              }
                            }),
                            _vm._v(" "),
                            data.item.custoaddress_line2mer_name ? _c("v-list-item-subtitle", {
                              domProps: {
                                innerHTML: _vm._s(data.item.address_line2)
                              }
                            }) : _vm._e(),
                            _vm._v(" "),
                            data.item.city ? _c("v-list-item-subtitle", {
                              domProps: {
                                innerHTML: _vm._s(data.item.city)
                              }
                            }) : _vm._e(),
                            _vm._v(" "),
                            data.item.state ? _c("v-list-item-subtitle", {
                              domProps: {
                                innerHTML: _vm._s(data.item.state)
                              }
                            }) : _vm._e(),
                            _vm._v(" "),
                            data.item.country ? _c("v-list-item-subtitle", {
                              domProps: {
                                innerHTML: _vm._s(data.item.mobile_no)
                              }
                            }) : _vm._e(),
                            _vm._v(" "),
                            data.item.address_type ? _c("v-list-item-subtitle", {
                              domProps: {
                                innerHTML: _vm._s(data.item.address_type)
                              }
                            }) : _vm._e()
                          ], 1)
                        ]
                      ];
                    }
                  }
                ], null, false, 2426684905),
                model: {
                  value: _vm.invoice_doc.shipping_address_name,
                  callback: function($$v) {
                    _vm.$set(_vm.invoice_doc, "shipping_address_name", $$v);
                  },
                  expression: "invoice_doc.shipping_address_name"
                }
              })
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.pos_profile.posa_display_additional_notes ? _c("v-col", { attrs: { cols: "12" } }, [
              _c("v-textarea", {
                staticClass: "pa-0",
                attrs: {
                  outlined: "",
                  dense: "",
                  "background-color": "white",
                  clearable: "",
                  color: "primary",
                  "auto-grow": "",
                  rows: "2",
                  label: _vm.frappe._("Additional Notes"),
                  value: _vm.invoice_doc.posa_notes
                },
                model: {
                  value: _vm.invoice_doc.posa_notes,
                  callback: function($$v) {
                    _vm.$set(_vm.invoice_doc, "posa_notes", $$v);
                  },
                  expression: "invoice_doc.posa_notes"
                }
              })
            ], 1) : _vm._e()
          ], 1),
          _vm._v(" "),
          _vm.pos_profile.posa_allow_customer_purchase_order ? _c("div", [
            _c("v-divider"),
            _vm._v(" "),
            _c("v-row", {
              staticClass: "px-1 py-0",
              attrs: { justify: "center", align: "start" }
            }, [
              _c("v-col", { attrs: { cols: "6" } }, [
                _c("v-text-field", {
                  attrs: {
                    label: _vm.frappe._("Purchase Order"),
                    outlined: "",
                    dense: "",
                    "background-color": "white",
                    clearable: "",
                    color: "primary",
                    "hide-details": ""
                  },
                  model: {
                    value: _vm.invoice_doc.po_no,
                    callback: function($$v) {
                      _vm.$set(_vm.invoice_doc, "po_no", $$v);
                    },
                    expression: "invoice_doc.po_no"
                  }
                })
              ], 1),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "6" } }, [
                _c("v-menu", {
                  ref: "po_date_menu",
                  attrs: {
                    "close-on-content-click": false,
                    transition: "scale-transition"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on;
                        var attrs = ref.attrs;
                        return [
                          _c("v-text-field", _vm._g(_vm._b({
                            attrs: {
                              label: _vm.frappe._("Purchase Order Date"),
                              readonly: "",
                              outlined: "",
                              dense: "",
                              "hide-details": "",
                              color: "primary"
                            },
                            model: {
                              value: _vm.invoice_doc.po_date,
                              callback: function($$v) {
                                _vm.$set(_vm.invoice_doc, "po_date", $$v);
                              },
                              expression: "invoice_doc.po_date"
                            }
                          }, "v-text-field", attrs, false), on))
                        ];
                      }
                    }
                  ], null, false, 3566944987),
                  model: {
                    value: _vm.po_date_menu,
                    callback: function($$v) {
                      _vm.po_date_menu = $$v;
                    },
                    expression: "po_date_menu"
                  }
                }, [
                  _vm._v(" "),
                  _c("v-date-picker", {
                    attrs: {
                      "no-title": "",
                      scrollable: "",
                      color: "primary"
                    },
                    on: {
                      input: function($event) {
                        _vm.po_date_menu = false;
                      }
                    },
                    model: {
                      value: _vm.invoice_doc.po_date,
                      callback: function($$v) {
                        _vm.$set(_vm.invoice_doc, "po_date", $$v);
                      },
                      expression: "invoice_doc.po_date"
                    }
                  })
                ], 1)
              ], 1)
            ], 1)
          ], 1) : _vm._e(),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c("v-row", {
            staticClass: "px-1 py-0",
            attrs: { align: "start", "no-gutters": "" }
          }, [
            _vm.pos_profile.posa_allow_write_off_change && _vm.diff_payment > 0 && !_vm.invoice_doc.is_return ? _c("v-col", { attrs: { cols: "6" } }, [
              _c("v-switch", {
                staticClass: "my-0 py-0",
                attrs: {
                  flat: "",
                  label: _vm.frappe._("Write Off Difference Amount")
                },
                model: {
                  value: _vm.is_write_off_change,
                  callback: function($$v) {
                    _vm.is_write_off_change = $$v;
                  },
                  expression: "is_write_off_change"
                }
              })
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.pos_profile.posa_allow_credit_sale && !_vm.invoice_doc.is_return ? _c("v-col", { attrs: { cols: "6" } }, [
              _c("v-switch", {
                staticClass: "my-0 py-0",
                attrs: {
                  flat: "",
                  label: _vm.frappe._("Is Credit Sale")
                },
                model: {
                  value: _vm.is_credit_sale,
                  callback: function($$v) {
                    _vm.is_credit_sale = $$v;
                  },
                  expression: "is_credit_sale"
                }
              })
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.invoice_doc.is_return && _vm.pos_profile.use_cashback ? _c("v-col", { attrs: { cols: "6" } }, [
              _c("v-switch", {
                staticClass: "my-0 py-0",
                attrs: {
                  flat: "",
                  label: _vm.frappe._("Is Cashback")
                },
                model: {
                  value: _vm.is_cashback,
                  callback: function($$v) {
                    _vm.is_cashback = $$v;
                  },
                  expression: "is_cashback"
                }
              })
            ], 1) : _vm._e(),
            _vm._v(" "),
            _vm.is_credit_sale ? _c("v-col", { attrs: { cols: "6" } }, [
              _c("v-menu", {
                ref: "date_menu",
                attrs: {
                  "close-on-content-click": false,
                  transition: "scale-transition"
                },
                scopedSlots: _vm._u([
                  {
                    key: "activator",
                    fn: function(ref) {
                      var on = ref.on;
                      var attrs = ref.attrs;
                      return [
                        _c("v-text-field", _vm._g(_vm._b({
                          attrs: {
                            label: _vm.frappe._("Due Date"),
                            readonly: "",
                            outlined: "",
                            dense: "",
                            "hide-details": "",
                            color: "primary"
                          },
                          model: {
                            value: _vm.invoice_doc.due_date,
                            callback: function($$v) {
                              _vm.$set(_vm.invoice_doc, "due_date", $$v);
                            },
                            expression: "invoice_doc.due_date"
                          }
                        }, "v-text-field", attrs, false), on))
                      ];
                    }
                  }
                ], null, false, 2759492897),
                model: {
                  value: _vm.date_menu,
                  callback: function($$v) {
                    _vm.date_menu = $$v;
                  },
                  expression: "date_menu"
                }
              }, [
                _vm._v(" "),
                _c("v-date-picker", {
                  attrs: {
                    "no-title": "",
                    scrollable: "",
                    color: "primary",
                    min: _vm.frappe.datetime.now_date()
                  },
                  on: {
                    input: function($event) {
                      _vm.date_menu = false;
                    }
                  },
                  model: {
                    value: _vm.invoice_doc.due_date,
                    callback: function($$v) {
                      _vm.$set(_vm.invoice_doc, "due_date", $$v);
                    },
                    expression: "invoice_doc.due_date"
                  }
                })
              ], 1)
            ], 1) : _vm._e(),
            _vm._v(" "),
            !_vm.invoice_doc.is_return && _vm.pos_profile.use_customer_credit ? _c("v-col", { attrs: { cols: "6" } }, [
              _c("v-switch", {
                staticClass: "my-0 py-0",
                attrs: {
                  flat: "",
                  label: _vm.frappe._("Use Customer Credit")
                },
                on: {
                  change: function($event) {
                    return _vm.get_available_credit($event);
                  }
                },
                model: {
                  value: _vm.redeem_customer_credit,
                  callback: function($$v) {
                    _vm.redeem_customer_credit = $$v;
                  },
                  expression: "redeem_customer_credit"
                }
              })
            ], 1) : _vm._e()
          ], 1),
          _vm._v(" "),
          _vm.invoice_doc && _vm.available_customer_credit > 0 && !_vm.invoice_doc.is_return && _vm.redeem_customer_credit ? _c("div", _vm._l(_vm.customer_credit_dict, function(row, idx) {
            return _c("v-row", { key: idx }, [
              _c("v-col", { attrs: { cols: "4" } }, [
                _c("div", { staticClass: "pa-2 py-3" }, [
                  _vm._v(_vm._s(row.credit_origin))
                ])
              ]),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "4" } }, [
                _c("v-text-field", {
                  attrs: {
                    dense: "",
                    outlined: "",
                    color: "primary",
                    label: _vm.frappe._("Available Credit"),
                    "background-color": "white",
                    "hide-details": "",
                    value: _vm.formtCurrency(row.total_credit),
                    disabled: "",
                    prefix: _vm.invoice_doc.currency
                  }
                })
              ], 1),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "4" } }, [
                _c("v-text-field", {
                  attrs: {
                    dense: "",
                    outlined: "",
                    color: "primary",
                    label: _vm.frappe._("Redeem Credit"),
                    "background-color": "white",
                    "hide-details": "",
                    type: "number",
                    prefix: _vm.invoice_doc.currency
                  },
                  model: {
                    value: row.credit_to_redeem,
                    callback: function($$v) {
                      _vm.$set(row, "credit_to_redeem", $$v);
                    },
                    expression: "row.credit_to_redeem"
                  }
                })
              ], 1)
            ], 1);
          }), 1) : _vm._e(),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c("v-row", { staticClass: "pb-0 mb-2", attrs: { align: "start" } }, [
            _c("v-col", { attrs: { cols: "12" } }, [
              _c("v-autocomplete", {
                attrs: {
                  dense: "",
                  clearable: "",
                  "auto-select-first": "",
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("Sales Person"),
                  items: _vm.sales_persons,
                  "item-text": "sales_person_name",
                  "item-value": "name",
                  "background-color": "white",
                  "no-data-text": _vm.__("Sales Person not found"),
                  "hide-details": "",
                  filter: _vm.salesPersonFilter,
                  disabled: _vm.readonly
                },
                scopedSlots: _vm._u([
                  {
                    key: "item",
                    fn: function(data) {
                      return [
                        [
                          _c("v-list-item-content", [
                            _c("v-list-item-title", {
                              staticClass: "primary--text subtitle-1",
                              domProps: {
                                innerHTML: _vm._s(data.item.sales_person_name)
                              }
                            }),
                            _vm._v(" "),
                            data.item.sales_person_name != data.item.name ? _c("v-list-item-subtitle", {
                              domProps: {
                                innerHTML: _vm._s("ID: " + data.item.name)
                              }
                            }) : _vm._e()
                          ], 1)
                        ]
                      ];
                    }
                  }
                ]),
                model: {
                  value: _vm.sales_person,
                  callback: function($$v) {
                    _vm.sales_person = $$v;
                  },
                  expression: "sales_person"
                }
              })
            ], 1)
          ], 1)
        ], 1)
      ], 1),
      _vm._v(" "),
      _c("v-card", { staticClass: "cards mb-0 mt-3 py-0", attrs: { flat: "" } }, [
        _c("v-row", { attrs: { align: "start", "no-gutters": "" } }, [
          _c("v-col", { attrs: { cols: "6" } }, [
            _c("v-btn", {
              attrs: {
                block: "",
                large: "",
                color: "primary",
                dark: "",
                disabled: _vm.vaildatPayment
              },
              on: { click: _vm.submit }
            }, [_vm._v(_vm._s(_vm.__("Submit")))])
          ], 1),
          _vm._v(" "),
          _c("v-col", { staticClass: "pl-1", attrs: { cols: "6" } }, [
            _c("v-btn", {
              attrs: {
                block: "",
                large: "",
                color: "success",
                dark: "",
                disabled: _vm.vaildatPayment
              },
              on: {
                click: function($event) {
                  return _vm.submit(void 0, false, true);
                }
              }
            }, [_vm._v(_vm._s(_vm.__("Submit & Print")))])
          ], 1),
          _vm._v(" "),
          _c("v-col", { attrs: { cols: "12" } }, [
            _c("v-btn", {
              staticClass: "mt-2 pa-1",
              attrs: { block: "", large: "", color: "error", dark: "" },
              on: { click: _vm.back_to_invoice }
            }, [_vm._v(_vm._s(_vm.__("Cancel Payment")))])
          ], 1)
        ], 1)
      ], 1),
      _vm._v(" "),
      _c("div", [
        _c("v-dialog", {
          attrs: { "max-width": "400px" },
          model: {
            value: _vm.phone_dialog,
            callback: function($$v) {
              _vm.phone_dialog = $$v;
            },
            expression: "phone_dialog"
          }
        }, [
          _c("v-card", [
            _c("v-card-title", [
              _c("span", { staticClass: "headline primary--text" }, [
                _vm._v(_vm._s(_vm.__("Confirm Mobile Number")))
              ])
            ]),
            _vm._v(" "),
            _c("v-card-text", { staticClass: "pa-0" }, [
              _c("v-container", [
                _c("v-text-field", {
                  attrs: {
                    dense: "",
                    outlined: "",
                    color: "primary",
                    label: _vm.frappe._("Mobile Number"),
                    "background-color": "white",
                    "hide-details": "",
                    type: "number"
                  },
                  model: {
                    value: _vm.invoice_doc.contact_mobile,
                    callback: function($$v) {
                      _vm.$set(_vm.invoice_doc, "contact_mobile", $$v);
                    },
                    expression: "invoice_doc.contact_mobile"
                  }
                })
              ], 1)
            ], 1),
            _vm._v(" "),
            _c("v-card-actions", [
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-btn", {
                attrs: { color: "error", dark: "" },
                on: {
                  click: function($event) {
                    _vm.phone_dialog = false;
                  }
                }
              }, [_vm._v(_vm._s(_vm.__("Close")))]),
              _vm._v(" "),
              _c("v-btn", {
                attrs: { color: "primary", dark: "" },
                on: { click: _vm.request_payment }
              }, [_vm._v(_vm._s(_vm.__("Request")))])
            ], 1)
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  __vue_render__6._withStripped = true;

  // ../posprice1/posprice1/public/js/posprice/components/pos/PosOffers.vue
  var __vue_render__7 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("v-card", {
        staticClass: "selection mx-auto grey lighten-5",
        staticStyle: { "max-height": "80vh", height: "80vh" }
      }, [
        _c("v-card-title", [
          _c("span", { staticClass: "text-h6 primary--text" }, [
            _vm._v(_vm._s(_vm.__("Offers")))
          ])
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass: "my-0 py-0 overflow-y-auto",
          staticStyle: { "max-height": "75vh" }
        }, [
          [
            _c("v-data-table", {
              staticClass: "elevation-1",
              attrs: {
                headers: _vm.items_headers,
                items: _vm.pos_offers,
                "single-expand": _vm.singleExpand,
                expanded: _vm.expanded,
                "show-expand": "",
                "item-key": "row_id",
                "items-per-page": _vm.itemsPerPage,
                "hide-default-footer": ""
              },
              on: {
                "update:expanded": function($event) {
                  _vm.expanded = $event;
                }
              },
              scopedSlots: _vm._u([
                {
                  key: "item.offer_applied",
                  fn: function(ref) {
                    var item = ref.item;
                    return [
                      _c("v-simple-checkbox", {
                        attrs: {
                          disabled: item.offer == "Give Product" && !item.give_item && (!_vm.offer.replace_cheapest_item || !_vm.offer.replace_item) || item.offer == "Grand Total" && _vm.discount_percentage_offer_name && _vm.discount_percentage_offer_name != item.name
                        },
                        on: { click: _vm.forceUpdateItem },
                        model: {
                          value: item.offer_applied,
                          callback: function($$v) {
                            _vm.$set(item, "offer_applied", $$v);
                          },
                          expression: "item.offer_applied"
                        }
                      })
                    ];
                  }
                },
                {
                  key: "expanded-item",
                  fn: function(ref) {
                    var headers = ref.headers;
                    var item = ref.item;
                    return [
                      _c("td", { attrs: { colspan: headers.length } }, [
                        _c("v-row", { staticClass: "mt-2" }, [
                          item.description ? _c("v-col", [
                            _c("div", {
                              staticClass: "primary--text",
                              domProps: {
                                innerHTML: _vm._s(_vm.handleNewLine(item.description))
                              }
                            })
                          ]) : _vm._e(),
                          _vm._v(" "),
                          item.offer == "Give Product" ? _c("v-col", [
                            _c("v-autocomplete", {
                              attrs: {
                                items: _vm.get_give_items(item),
                                "item-text": "item_code",
                                outlined: "",
                                dense: "",
                                color: "primary",
                                label: _vm.frappe._("Give Item"),
                                disabled: item.apply_type != "Item Group" || item.replace_item || item.replace_cheapest_item
                              },
                              model: {
                                value: item.give_item,
                                callback: function($$v) {
                                  _vm.$set(item, "give_item", $$v);
                                },
                                expression: "item.give_item"
                              }
                            })
                          ], 1) : _vm._e()
                        ], 1)
                      ], 1)
                    ];
                  }
                }
              ])
            })
          ]
        ], 2)
      ], 1),
      _vm._v(" "),
      _c("v-card", {
        staticClass: "cards mb-0 mt-3 py-0",
        staticStyle: { "max-height": "11vh", height: "11vh" },
        attrs: { flat: "" }
      }, [
        _c("v-row", { attrs: { align: "start", "no-gutters": "" } }, [
          _c("v-col", { attrs: { cols: "12" } }, [
            _c("v-btn", {
              staticClass: "pa-1",
              attrs: {
                block: "",
                large: "",
                color: "warning",
                dark: ""
              },
              on: { click: _vm.back_to_invoice }
            }, [_vm._v(_vm._s(_vm.__("Back")))])
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  __vue_render__7._withStripped = true;

  // ../posprice1/posprice1/public/js/posprice/components/pos/PosCoupons.vue
  var __vue_render__8 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("v-card", {
        staticClass: "selection mx-auto grey lighten-5",
        staticStyle: { "max-height": "80vh", height: "80vh" }
      }, [
        _c("v-card-title", [
          _c("v-row", {
            attrs: {
              "no-gutters": "",
              align: "center",
              justify: "center"
            }
          }, [
            _c("v-col", { attrs: { cols: "6" } }, [
              _c("span", { staticClass: "text-h6 primary--text" }, [
                _vm._v(_vm._s(_vm.__("Coupons")))
              ])
            ]),
            _vm._v(" "),
            _c("v-col", { attrs: { cols: "4" } }, [
              _c("v-text-field", {
                staticClass: "mr-4",
                attrs: {
                  dense: "",
                  outlined: "",
                  color: "primary",
                  label: _vm.frappe._("Coupon"),
                  "background-color": "white",
                  "hide-details": ""
                },
                model: {
                  value: _vm.new_coupon,
                  callback: function($$v) {
                    _vm.new_coupon = $$v;
                  },
                  expression: "new_coupon"
                }
              })
            ], 1),
            _vm._v(" "),
            _c("v-col", { attrs: { cols: "2" } }, [
              _c("v-btn", {
                staticClass: "pa-1",
                attrs: { color: "success", dark: "" },
                on: {
                  click: function($event) {
                    return _vm.add_coupon(_vm.new_coupon);
                  }
                }
              }, [_vm._v(_vm._s(_vm.__("add")))])
            ], 1)
          ], 1)
        ], 1),
        _vm._v(" "),
        _c("div", {
          staticClass: "my-0 py-0 overflow-y-auto",
          staticStyle: { "max-height": "75vh" }
        }, [
          [
            _c("v-data-table", {
              staticClass: "elevation-1",
              attrs: {
                headers: _vm.items_headers,
                items: _vm.posa_coupons,
                "single-expand": _vm.singleExpand,
                expanded: _vm.expanded,
                "item-key": "coupon",
                "items-per-page": _vm.itemsPerPage,
                "hide-default-footer": ""
              },
              on: {
                "update:expanded": function($event) {
                  _vm.expanded = $event;
                }
              },
              scopedSlots: _vm._u([
                {
                  key: "item.applied",
                  fn: function(ref) {
                    var item = ref.item;
                    return [
                      _c("v-simple-checkbox", {
                        attrs: { disabled: "" },
                        model: {
                          value: item.applied,
                          callback: function($$v) {
                            _vm.$set(item, "applied", $$v);
                          },
                          expression: "item.applied"
                        }
                      })
                    ];
                  }
                }
              ])
            })
          ]
        ], 2)
      ], 1),
      _vm._v(" "),
      _c("v-card", {
        staticClass: "cards mb-0 mt-3 py-0",
        staticStyle: { "max-height": "11vh", height: "11vh" },
        attrs: { flat: "" }
      }, [
        _c("v-row", { attrs: { align: "start", "no-gutters": "" } }, [
          _c("v-col", { attrs: { cols: "12" } }, [
            _c("v-btn", {
              staticClass: "pa-1",
              attrs: {
                block: "",
                large: "",
                color: "warning",
                dark: ""
              },
              on: { click: _vm.back_to_invoice }
            }, [_vm._v(_vm._s(_vm.__("Back")))])
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  __vue_render__8._withStripped = true;

  // ../posprice1/posprice1/public/js/posprice/components/pos/Drafts.vue
  var __vue_render__9 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-row", { attrs: { justify: "center" } }, [
      _c("v-dialog", {
        attrs: { "max-width": "900px" },
        model: {
          value: _vm.draftsDialog,
          callback: function($$v) {
            _vm.draftsDialog = $$v;
          },
          expression: "draftsDialog"
        }
      }, [
        _c("v-card", [
          _c("v-card-title", [
            _c("span", { staticClass: "headline primary--text" }, [
              _vm._v(_vm._s(_vm.__("Select Hold Invoice")))
            ])
          ]),
          _vm._v(" "),
          _c("v-card-text", { staticClass: "pa-0" }, [
            _c("v-container", [
              _c("v-row", [
                _c("v-col", { staticClass: "pa-1", attrs: { cols: "12" } }, [
                  [
                    _c("v-data-table", {
                      staticClass: "elevation-1",
                      attrs: {
                        headers: _vm.headers,
                        items: _vm.dialog_data,
                        "item-key": "name",
                        "single-select": _vm.singleSelect,
                        "show-select": ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "item.posting_time",
                          fn: function(ref) {
                            var item = ref.item;
                            return [
                              _vm._v("\n                    " + _vm._s(item.posting_time.split(".")[0]) + "\n                  ")
                            ];
                          }
                        }
                      ]),
                      model: {
                        value: _vm.selected,
                        callback: function($$v) {
                          _vm.selected = $$v;
                        },
                        expression: "selected"
                      }
                    })
                  ]
                ], 2)
              ], 1)
            ], 1)
          ], 1),
          _vm._v(" "),
          _c("v-card-actions", [
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "error", dark: "" },
              on: { click: _vm.close_dialog }
            }, [_vm._v("Close")]),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "success", dark: "" },
              on: { click: _vm.submit_dialog }
            }, [_vm._v("Select")])
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  __vue_render__9._withStripped = true;

  // ../posprice1/posprice1/public/js/posprice/components/pos/ClosingDialog.vue
  var __vue_render__10 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-row", { attrs: { justify: "center" } }, [
      _c("v-dialog", {
        attrs: { "max-width": "900px" },
        model: {
          value: _vm.closingDialog,
          callback: function($$v) {
            _vm.closingDialog = $$v;
          },
          expression: "closingDialog"
        }
      }, [
        _c("v-card", [
          _c("v-card-title", [
            _c("span", { staticClass: "headline primary--text" }, [
              _vm._v(_vm._s(_vm.__("Closing POS Shift")))
            ])
          ]),
          _vm._v(" "),
          _c("v-card-text", { staticClass: "pa-0" }, [
            _c("v-container", [
              _c("v-row", [
                _c("v-col", { staticClass: "pa-1", attrs: { cols: "12" } }, [
                  [
                    _c("v-data-table", {
                      staticClass: "elevation-1",
                      attrs: {
                        headers: _vm.headers,
                        items: _vm.dialog_data.payment_reconciliation,
                        "item-key": "mode_of_payment",
                        "items-per-page": _vm.itemsPerPage,
                        "hide-default-footer": ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "item.closing_amount",
                          fn: function(props) {
                            return [
                              _c("v-edit-dialog", {
                                attrs: {
                                  "return-value": props.item.closing_amount
                                },
                                on: {
                                  "update:returnValue": function($event) {
                                    return _vm.$set(props.item, "closing_amount", $event);
                                  },
                                  "update:return-value": function($event) {
                                    return _vm.$set(props.item, "closing_amount", $event);
                                  }
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "input",
                                    fn: function() {
                                      return [
                                        _c("v-text-field", {
                                          attrs: {
                                            rules: [
                                              _vm.max25chars
                                            ],
                                            label: _vm.frappe._("Edit"),
                                            "single-line": "",
                                            counter: "",
                                            type: "number"
                                          },
                                          model: {
                                            value: props.item.closing_amount,
                                            callback: function($$v) {
                                              _vm.$set(props.item, "closing_amount", $$v);
                                            },
                                            expression: "props.item.closing_amount"
                                          }
                                        })
                                      ];
                                    },
                                    proxy: true
                                  }
                                ], null, true)
                              }, [
                                _vm._v("\n                      " + _vm._s(_vm.formtCurrency(props.item.closing_amount)) + "\n                      ")
                              ])
                            ];
                          }
                        },
                        {
                          key: "item.difference",
                          fn: function(ref) {
                            var item = ref.item;
                            return [
                              _vm._v(_vm._s(item.difference = _vm.formtCurrency(item.expected_amount - item.closing_amount)))
                            ];
                          }
                        },
                        {
                          key: "item.opening_amount",
                          fn: function(ref) {
                            var item = ref.item;
                            return [
                              _vm._v(_vm._s(_vm.formtCurrency(item.opening_amount)))
                            ];
                          }
                        },
                        {
                          key: "item.expected_amount",
                          fn: function(ref) {
                            var item = ref.item;
                            return [
                              _vm._v(_vm._s(_vm.formtCurrency(item.expected_amount)))
                            ];
                          }
                        }
                      ])
                    })
                  ]
                ], 2)
              ], 1)
            ], 1)
          ], 1),
          _vm._v(" "),
          _c("v-card-actions", [
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "error", dark: "" },
              on: { click: _vm.close_dialog }
            }, [_vm._v(_vm._s(_vm.__("Close")))]),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "success", dark: "" },
              on: { click: _vm.submit_dialog }
            }, [_vm._v(_vm._s(_vm.__("Submit")))])
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  __vue_render__10._withStripped = true;

  // ../posprice1/posprice1/public/js/posprice/components/pos/UpdateCustomer.vue
  var __vue_render__11 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-row", { attrs: { justify: "center" } }, [
      _c("v-dialog", {
        attrs: { "max-width": "600px" },
        on: { "click:outside": _vm.clear_customer },
        model: {
          value: _vm.customerDialog,
          callback: function($$v) {
            _vm.customerDialog = $$v;
          },
          expression: "customerDialog"
        }
      }, [
        _c("v-card", [
          _c("v-card-title", [
            _vm.customer_id ? _c("span", { staticClass: "headline primary--text" }, [
              _vm._v(_vm._s(_vm.__("Update Customer")))
            ]) : _c("span", { staticClass: "headline primary--text" }, [
              _vm._v(_vm._s(_vm.__("Create Customer")))
            ])
          ]),
          _vm._v(" "),
          _c("v-card-text", { staticClass: "pa-0" }, [
            _c("v-container", [
              _c("v-row", [
                _c("v-col", { attrs: { cols: "12" } }, [
                  _c("v-text-field", {
                    attrs: {
                      dense: "",
                      color: "primary",
                      label: _vm.frappe._("Customer Name") + " *",
                      "background-color": "white",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.customer_name,
                      callback: function($$v) {
                        _vm.customer_name = $$v;
                      },
                      expression: "customer_name"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "6" } }, [
                  _c("v-text-field", {
                    attrs: {
                      dense: "",
                      color: "primary",
                      label: _vm.frappe._("Tax ID"),
                      "background-color": "white",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.tax_id,
                      callback: function($$v) {
                        _vm.tax_id = $$v;
                      },
                      expression: "tax_id"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "6" } }, [
                  _c("v-text-field", {
                    attrs: {
                      dense: "",
                      color: "primary",
                      label: _vm.frappe._("Mobile No"),
                      "background-color": "white",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.mobile,
                      callback: function($$v) {
                        _vm.mobile = $$v;
                      },
                      expression: "mobile"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "6" } }, [
                  _c("v-text-field", {
                    attrs: {
                      dense: "",
                      color: "primary",
                      label: _vm.frappe._("Email Id"),
                      "background-color": "white",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.email_id,
                      callback: function($$v) {
                        _vm.email_id = $$v;
                      },
                      expression: "email_id"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "6" } }, [
                  _c("v-select", {
                    attrs: {
                      dense: "",
                      label: "Gender",
                      items: _vm.genders
                    },
                    model: {
                      value: _vm.gender,
                      callback: function($$v) {
                        _vm.gender = $$v;
                      },
                      expression: "gender"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "6" } }, [
                  _c("v-text-field", {
                    attrs: {
                      dense: "",
                      color: "primary",
                      label: _vm.frappe._("Referral Code"),
                      "background-color": "white",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.referral_code,
                      callback: function($$v) {
                        _vm.referral_code = $$v;
                      },
                      expression: "referral_code"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "6" } }, [
                  _c("v-menu", {
                    ref: "birthday_menu",
                    attrs: {
                      "close-on-content-click": false,
                      transition: "scale-transition",
                      dense: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "activator",
                        fn: function(ref) {
                          var on = ref.on;
                          var attrs = ref.attrs;
                          return [
                            _c("v-text-field", _vm._g(_vm._b({
                              attrs: {
                                label: _vm.frappe._("Birthday"),
                                readonly: "",
                                dense: "",
                                clearable: "",
                                "hide-details": "",
                                color: "primary"
                              },
                              model: {
                                value: _vm.birthday,
                                callback: function($$v) {
                                  _vm.birthday = $$v;
                                },
                                expression: "birthday"
                              }
                            }, "v-text-field", attrs, false), on))
                          ];
                        }
                      }
                    ]),
                    model: {
                      value: _vm.birthday_menu,
                      callback: function($$v) {
                        _vm.birthday_menu = $$v;
                      },
                      expression: "birthday_menu"
                    }
                  }, [
                    _vm._v(" "),
                    _c("v-date-picker", {
                      attrs: {
                        color: "primary",
                        "no-title": "",
                        scrollable: "",
                        max: _vm.frappe.datetime.now_date()
                      },
                      on: {
                        input: function($event) {
                          _vm.birthday_menu = false;
                        }
                      },
                      model: {
                        value: _vm.birthday,
                        callback: function($$v) {
                          _vm.birthday = $$v;
                        },
                        expression: "birthday"
                      }
                    })
                  ], 1)
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "6" } }, [
                  _c("v-autocomplete", {
                    attrs: {
                      clearable: "",
                      dense: "",
                      "auto-select-first": "",
                      color: "primary",
                      label: _vm.frappe._("Customer Group") + " *",
                      items: _vm.groups,
                      "background-color": "white",
                      "no-data-text": _vm.__("Group not found"),
                      "hide-details": "",
                      required: ""
                    },
                    model: {
                      value: _vm.group,
                      callback: function($$v) {
                        _vm.group = $$v;
                      },
                      expression: "group"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "6" } }, [
                  _c("v-autocomplete", {
                    attrs: {
                      clearable: "",
                      dense: "",
                      "auto-select-first": "",
                      color: "primary",
                      label: _vm.frappe._("Territory") + " *",
                      items: _vm.territorys,
                      "background-color": "white",
                      "no-data-text": _vm.__("Territory not found"),
                      "hide-details": "",
                      required: ""
                    },
                    model: {
                      value: _vm.territory,
                      callback: function($$v) {
                        _vm.territory = $$v;
                      },
                      expression: "territory"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _vm.loyalty_program ? _c("v-col", { attrs: { cols: "6" } }, [
                  _c("v-text-field", {
                    attrs: {
                      label: _vm.frappe._("Loyalty Program"),
                      dense: "",
                      readonly: "",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.loyalty_program,
                      callback: function($$v) {
                        _vm.loyalty_program = $$v;
                      },
                      expression: "loyalty_program"
                    }
                  })
                ], 1) : _vm._e(),
                _vm._v(" "),
                _vm.loyalty_points ? _c("v-col", { attrs: { cols: "6" } }, [
                  _c("v-text-field", {
                    attrs: {
                      label: _vm.frappe._("Loyalty Points"),
                      dense: "",
                      readonly: "",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.loyalty_points,
                      callback: function($$v) {
                        _vm.loyalty_points = $$v;
                      },
                      expression: "loyalty_points"
                    }
                  })
                ], 1) : _vm._e()
              ], 1)
            ], 1)
          ], 1),
          _vm._v(" "),
          _c("v-card-actions", [
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "error", dark: "" },
              on: { click: _vm.close_dialog }
            }, [_vm._v(_vm._s(_vm.__("Close")))]),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "success", dark: "" },
              on: { click: _vm.submit_dialog }
            }, [_vm._v(_vm._s(_vm.__("Submit")))])
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  __vue_render__11._withStripped = true;

  // ../posprice1/posprice1/public/js/posprice/components/pos/NewAddress.vue
  var __vue_render__12 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-row", { attrs: { justify: "center" } }, [
      _c("v-dialog", {
        attrs: { "max-width": "600px" },
        model: {
          value: _vm.addressDialog,
          callback: function($$v) {
            _vm.addressDialog = $$v;
          },
          expression: "addressDialog"
        }
      }, [
        _c("v-card", [
          _c("v-card-title", [
            _c("span", { staticClass: "headline primary--text" }, [
              _vm._v(_vm._s(_vm.__("Add New Address")))
            ])
          ]),
          _vm._v(" "),
          _c("v-card-text", { staticClass: "pa-0" }, [
            _c("v-container", [
              _c("v-row", [
                _c("v-col", { attrs: { cols: "12" } }, [
                  _c("v-text-field", {
                    attrs: {
                      dense: "",
                      color: "primary",
                      label: _vm.frappe._("Address Name"),
                      "background-color": "white",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.address.name,
                      callback: function($$v) {
                        _vm.$set(_vm.address, "name", $$v);
                      },
                      expression: "address.name"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "12" } }, [
                  _c("v-text-field", {
                    attrs: {
                      dense: "",
                      color: "primary",
                      label: _vm.frappe._("Address Line 1"),
                      "background-color": "white",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.address.address_line1,
                      callback: function($$v) {
                        _vm.$set(_vm.address, "address_line1", $$v);
                      },
                      expression: "address.address_line1"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "12" } }, [
                  _c("v-text-field", {
                    attrs: {
                      dense: "",
                      color: "primary",
                      label: _vm.frappe._("Address Line 2"),
                      "background-color": "white",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.address.address_line2,
                      callback: function($$v) {
                        _vm.$set(_vm.address, "address_line2", $$v);
                      },
                      expression: "address.address_line2"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "6" } }, [
                  _c("v-text-field", {
                    attrs: {
                      label: "City",
                      dense: "",
                      color: "primary",
                      "background-color": "white",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.address.city,
                      callback: function($$v) {
                        _vm.$set(_vm.address, "city", $$v);
                      },
                      expression: "address.city"
                    }
                  })
                ], 1),
                _vm._v(" "),
                _c("v-col", { attrs: { cols: "6" } }, [
                  _c("v-text-field", {
                    attrs: {
                      label: "State",
                      dense: "",
                      "background-color": "white",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.address.state,
                      callback: function($$v) {
                        _vm.$set(_vm.address, "state", $$v);
                      },
                      expression: "address.state"
                    }
                  })
                ], 1)
              ], 1)
            ], 1)
          ], 1),
          _vm._v(" "),
          _c("v-card-actions", [
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "error", dark: "" },
              on: { click: _vm.close_dialog }
            }, [_vm._v(_vm._s(_vm.__("Close")))]),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "success", dark: "" },
              on: { click: _vm.submit_dialog }
            }, [_vm._v(_vm._s(_vm.__("Submit")))])
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  __vue_render__12._withStripped = true;

  // ../posprice1/posprice1/public/js/posprice/components/pos/Variants.vue
  var __vue_render__13 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-row", { attrs: { justify: "center" } }, [
      _c("v-dialog", {
        attrs: { "max-width": "600px" },
        model: {
          value: _vm.varaintsDialog,
          callback: function($$v) {
            _vm.varaintsDialog = $$v;
          },
          expression: "varaintsDialog"
        }
      }, [
        _c("v-card", { attrs: { "min-height": "500px" } }, [
          _c("v-card-title", [
            _c("span", { staticClass: "headline primary--text" }, [
              _vm._v("Select Item")
            ]),
            _vm._v(" "),
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "error", dark: "" },
              on: { click: _vm.close_dialog }
            }, [_vm._v("Close")])
          ], 1),
          _vm._v(" "),
          _c("v-card-text", { staticClass: "pa-0" }, [
            _vm.parentItem ? _c("v-container", [
              _vm._l(_vm.parentItem.attributes, function(attr) {
                return _c("div", { key: attr.attribute }, [
                  _c("v-chip-group", {
                    attrs: {
                      "active-class": "green--text text--accent-4",
                      column: ""
                    },
                    model: {
                      value: _vm.filters[attr.attribute],
                      callback: function($$v) {
                        _vm.$set(_vm.filters, attr.attribute, $$v);
                      },
                      expression: "filters[attr.attribute]"
                    }
                  }, _vm._l(attr.values, function(value) {
                    return _c("v-chip", {
                      key: value.abbr,
                      attrs: {
                        value: value.attribute_value,
                        outlined: "",
                        label: ""
                      },
                      on: { click: _vm.updateFiltredItems }
                    }, [
                      _vm._v("\n                " + _vm._s(value.attribute_value) + "\n              ")
                    ]);
                  }), 1),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "p-0 m-0" })
                ], 1);
              }),
              _vm._v(" "),
              _c("div", [
                _c("v-row", {
                  staticClass: "overflow-y-auto",
                  staticStyle: { "max-height": "500px" },
                  attrs: { dense: "" }
                }, _vm._l(_vm.filterdItems, function(item, idx) {
                  return _c("v-col", {
                    key: idx,
                    attrs: {
                      xl: "2",
                      lg: "3",
                      md: "4",
                      sm: "4",
                      cols: "6",
                      "min-height": "50"
                    }
                  }, [
                    _c("v-card", {
                      attrs: { hover: "hover" },
                      on: {
                        click: function($event) {
                          return _vm.add_item(item);
                        }
                      }
                    }, [
                      _c("v-img", {
                        staticClass: "white--text align-end",
                        attrs: {
                          src: item.image || "/assets/posawesome/js/posapp/components/pos/placeholder-image.png",
                          gradient: "to bottom, rgba(0,0,0,.2), rgba(0,0,0,.7)",
                          height: "100px"
                        }
                      }, [
                        _c("v-card-text", {
                          staticClass: "text-subtitle-2 px-1 pb-2",
                          domProps: {
                            textContent: _vm._s(item.item_name)
                          }
                        })
                      ], 1),
                      _vm._v(" "),
                      _c("v-card-text", {
                        staticClass: "text--primary pa-1"
                      }, [
                        _c("div", {
                          staticClass: "text-caption primary--text accent-3"
                        }, [
                          _vm._v("\n                      " + _vm._s(item.rate || 0) + " " + _vm._s(item.currency || "") + "\n                    ")
                        ])
                      ])
                    ], 1)
                  ], 1);
                }), 1)
              ], 1)
            ], 2) : _vm._e()
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  __vue_render__13._withStripped = true;

  // ../posprice1/posprice1/public/js/posprice/components/pos/Returns.vue
  var __vue_render__14 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-row", { attrs: { justify: "center" } }, [
      _c("v-dialog", {
        attrs: { "max-width": "800px", "min-width": "800px" },
        model: {
          value: _vm.invoicesDialog,
          callback: function($$v) {
            _vm.invoicesDialog = $$v;
          },
          expression: "invoicesDialog"
        }
      }, [
        _c("v-card", [
          _c("v-card-title", [
            _c("span", { staticClass: "headline primary--text" }, [
              _vm._v(_vm._s(_vm.__("Select Return Invoice")))
            ])
          ]),
          _vm._v(" "),
          _c("v-container", [
            _c("v-row", { staticClass: "mb-4" }, [
              _c("v-text-field", {
                staticClass: "mx-4",
                attrs: {
                  color: "primary",
                  label: _vm.frappe._("Invoice ID"),
                  "background-color": "white",
                  "hide-details": "",
                  dense: "",
                  clearable: ""
                },
                model: {
                  value: _vm.invoice_name,
                  callback: function($$v) {
                    _vm.invoice_name = $$v;
                  },
                  expression: "invoice_name"
                }
              }),
              _vm._v(" "),
              _c("v-btn", {
                staticClass: "ml-2",
                attrs: { text: "", color: "primary", dark: "" },
                on: { click: _vm.search_invoices }
              }, [_vm._v(_vm._s(_vm.__("Search")))])
            ], 1),
            _vm._v(" "),
            _c("v-row", [
              _vm.dialog_data ? _c("v-col", { staticClass: "pa-1", attrs: { cols: "12" } }, [
                [
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.dialog_data,
                      "item-key": "name",
                      "single-select": _vm.singleSelect,
                      "show-select": ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.grand_total",
                        fn: function(ref) {
                          var item = ref.item;
                          return [
                            _vm._v(_vm._s(_vm.formtCurrency(item.grand_total)))
                          ];
                        }
                      }
                    ], null, false, 710962859),
                    model: {
                      value: _vm.selected,
                      callback: function($$v) {
                        _vm.selected = $$v;
                      },
                      expression: "selected"
                    }
                  })
                ]
              ], 2) : _vm._e()
            ], 1)
          ], 1),
          _vm._v(" "),
          _c("v-card-actions", { staticClass: "mt-4" }, [
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "error mx-2", dark: "" },
              on: { click: _vm.close_dialog }
            }, [_vm._v("Close")]),
            _vm._v(" "),
            _vm.selected.length ? _c("v-btn", {
              attrs: { color: "success", dark: "" },
              on: { click: _vm.submit_dialog }
            }, [_vm._v(_vm._s(_vm.__("Select")))]) : _vm._e()
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  __vue_render__14._withStripped = true;

  // ../posprice1/posprice1/public/js/posprice/components/pos/Mpesa-Payments.vue
  var __vue_render__15 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-row", { attrs: { justify: "center" } }, [
      _c("v-dialog", {
        attrs: { "max-width": "800px", "min-width": "800px" },
        model: {
          value: _vm.dialog,
          callback: function($$v) {
            _vm.dialog = $$v;
          },
          expression: "dialog"
        }
      }, [
        _c("v-card", [
          _c("v-card-title", [
            _c("span", { staticClass: "headline primary--text" }, [
              _vm._v(_vm._s(_vm.__("Select Payment")))
            ])
          ]),
          _vm._v(" "),
          _c("v-container", [
            _c("v-row", { staticClass: "mb-4" }, [
              _c("v-text-field", {
                staticClass: "mx-4",
                attrs: {
                  color: "primary",
                  label: _vm.frappe._("Full Name"),
                  "background-color": "white",
                  "hide-details": "",
                  dense: "",
                  clearable: ""
                },
                model: {
                  value: _vm.full_name,
                  callback: function($$v) {
                    _vm.full_name = $$v;
                  },
                  expression: "full_name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "mx-4",
                attrs: {
                  color: "primary",
                  label: _vm.frappe._("Mobile No"),
                  "background-color": "white",
                  "hide-details": "",
                  dense: "",
                  clearable: ""
                },
                model: {
                  value: _vm.mobile_no,
                  callback: function($$v) {
                    _vm.mobile_no = $$v;
                  },
                  expression: "mobile_no"
                }
              }),
              _vm._v(" "),
              _c("v-btn", {
                staticClass: "ml-2",
                attrs: { text: "", color: "primary", dark: "" },
                on: { click: _vm.search }
              }, [_vm._v(_vm._s(_vm.__("Search")))])
            ], 1),
            _vm._v(" "),
            _c("v-row", [
              _vm.dialog_data ? _c("v-col", { staticClass: "pa-1", attrs: { cols: "12" } }, [
                [
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.dialog_data,
                      "item-key": "name",
                      "single-select": _vm.singleSelect,
                      "show-select": ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.amount",
                        fn: function(ref) {
                          var item = ref.item;
                          return [
                            _vm._v(_vm._s(_vm.formtCurrency(item.amount)))
                          ];
                        }
                      },
                      {
                        key: "item.posting_date",
                        fn: function(ref) {
                          var item = ref.item;
                          return [
                            _vm._v(_vm._s(item.posting_date.slice(0, 16)))
                          ];
                        }
                      }
                    ], null, false, 3318502569),
                    model: {
                      value: _vm.selected,
                      callback: function($$v) {
                        _vm.selected = $$v;
                      },
                      expression: "selected"
                    }
                  })
                ]
              ], 2) : _vm._e()
            ], 1)
          ], 1),
          _vm._v(" "),
          _c("v-card-actions", { staticClass: "mt-4" }, [
            _c("v-spacer"),
            _vm._v(" "),
            _c("v-btn", {
              attrs: { color: "error mx-2", dark: "" },
              on: { click: _vm.close_dialog }
            }, [_vm._v("Close")]),
            _vm._v(" "),
            _vm.selected.length ? _c("v-btn", {
              attrs: { color: "success", dark: "" },
              on: { click: _vm.submit_dialog }
            }, [_vm._v(_vm._s(_vm.__("Select")))]) : _vm._e()
          ], 1)
        ], 1)
      ], 1)
    ], 1);
  };
  __vue_render__15._withStripped = true;

  // ../posprice1/posprice1/public/js/posprice/components/pos/Pos.vue
  var __vue_script__4 = {
    data: function() {
      return {
        dialog: false,
        pos_profile: "",
        pos_opening_shift: "",
        payment: false,
        offers: false,
        coupons: false
      };
    },
    components: {
      ItemsSelector: ItemsSelector_default
    },
    methods: {
      check_opening_entry() {
        return frappe.call("posawesome.posawesome.api.posapp.check_opening_shift", {
          user: frappe.session.user
        }).then((r) => {
          if (r.message) {
            this.pos_profile = r.message.pos_profile;
            this.pos_opening_shift = r.message.pos_opening_shift;
            this.get_offers(this.pos_profile.name);
            evntBus.$emit("register_pos_profile", r.message);
            evntBus.$emit("set_company", r.message.company);
            console.info("LoadPosProfile");
          } else {
            this.create_opening_voucher();
          }
        });
      },
      create_opening_voucher() {
        this.dialog = true;
      },
      get_closing_data() {
        return frappe.call("posawesome.posawesome.doctype.pos_closing_shift.pos_closing_shift.make_closing_shift_from_opening", {
          opening_shift: this.pos_opening_shift
        }).then((r) => {
          if (r.message) {
            evntBus.$emit("open_ClosingDialog", r.message);
          } else {
            console.log(r);
          }
        });
      },
      submit_closing_pos(data) {
        frappe.call("posawesome.posawesome.doctype.pos_closing_shift.pos_closing_shift.submit_closing_shift", {
          closing_shift: data
        }).then((r) => {
          if (r.message) {
            evntBus.$emit("show_mesage", {
              text: `POS Shift Closed`,
              color: "success"
            });
            this.check_opening_entry();
          } else {
            console.log(r);
          }
        });
      },
      get_offers(pos_profile) {
        return frappe.call("posawesome.posawesome.api.posapp.get_offers", {
          profile: pos_profile
        }).then((r) => {
          if (r.message) {
            console.info("LoadOffers");
            evntBus.$emit("set_offers", r.message);
          }
        });
      },
      get_pos_setting() {
        frappe.db.get_doc("POS Settings", void 0).then((doc) => {
          evntBus.$emit("set_pos_settings", doc);
        });
      }
    },
    created: function() {
      this.$nextTick(function() {
        this.check_opening_entry();
        this.get_pos_setting();
        evntBus.$on("close_opening_dialog", () => {
          this.dialog = false;
        });
        evntBus.$on("register_pos_data", (data) => {
          this.pos_profile = data.pos_profile;
          this.get_offers(this.pos_profile.name);
          this.pos_opening_shift = data.pos_opening_shift;
          evntBus.$emit("register_pos_profile", data);
          console.info("LoadPosProfile");
        });
        evntBus.$on("show_payment", (data) => {
          this.payment = true ? data === "true" : false;
          this.offers = false ? data === "true" : false;
          this.coupons = false ? data === "true" : false;
        });
        evntBus.$on("show_offers", (data) => {
          this.offers = true ? data === "true" : false;
          this.payment = false ? data === "true" : false;
          this.coupons = false ? data === "true" : false;
        });
        evntBus.$on("show_coupons", (data) => {
          this.coupons = true ? data === "true" : false;
          this.offers = false ? data === "true" : false;
          this.payment = false ? data === "true" : false;
        });
        evntBus.$on("open_closing_dialog", () => {
          this.get_closing_data();
        });
        evntBus.$on("submit_closing_pos", (data) => {
          this.submit_closing_pos(data);
        });
      });
    }
  };
  var __vue_render__16 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "full-screen" }, [_c("ItemsSelector")], 1);
  };
  var __vue_staticRenderFns__4 = [];
  __vue_render__16._withStripped = true;
  var __vue_inject_styles__4 = function(inject) {
    if (!inject)
      return;
    inject("data-v-039833ec_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: { "version": 3, "sources": [], "names": [], "mappings": "", "file": "Pos.vue" }, media: void 0 });
  };
  var __vue_scope_id__4 = "data-v-039833ec";
  var __vue_module_identifier__4 = void 0;
  var __vue_is_functional_template__4 = false;
  function __vue_normalize__4(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../posprice1/posprice1/public/js/posprice/components/pos/Pos.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__3() {
    const styles = __vue_create_injector__3.styles || (__vue_create_injector__3.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__4 = /* @__PURE__ */ __vue_normalize__4({ render: __vue_render__16, staticRenderFns: __vue_staticRenderFns__4 }, __vue_inject_styles__4, __vue_script__4, __vue_scope_id__4, __vue_is_functional_template__4, __vue_module_identifier__4, false, __vue_create_injector__3, void 0, void 0);
  var Pos_default = __vue_component__4;

  // ../posprice1/posprice1/public/js/posprice/Home.vue
  var __vue_script__5 = {
    data: function() {
      return {
        page: "POS"
      };
    },
    components: {
      Navbar: Navbar_default,
      POS: Pos_default
    },
    methods: {
      setPage(page) {
        this.page = page;
      },
      remove_frappe_nav() {
        this.$nextTick(function() {
          $(".page-head").remove();
          $(".navbar.navbar-default.navbar-fixed-top").remove();
        });
      }
    },
    mounted() {
      this.remove_frappe_nav();
    },
    updated() {
    },
    created: function() {
      setTimeout(() => {
        this.remove_frappe_nav();
      }, 1e3);
    }
  };
  var __vue_render__17 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("v-app", { staticClass: "container1" }, [
      _c("v-main", [
        _c("Navbar", {
          on: {
            changePage: function($event) {
              return _vm.setPage($event);
            }
          }
        }),
        _vm._v(" "),
        _c("keep-alive", [_c(_vm.page, { tag: "component", staticClass: "mx-4 md-4" })], 1)
      ], 1)
    ], 1);
  };
  var __vue_staticRenderFns__5 = [];
  __vue_render__17._withStripped = true;
  var __vue_inject_styles__5 = function(inject) {
    if (!inject)
      return;
    inject("data-v-443791b4_0", { source: "\n.container1[data-v-443791b4] {\n  margin-top: 0px;\n}\n", map: { "version": 3, "sources": ["../posprice1/posprice1/public/js/posprice/Home.vue"], "names": [], "mappings": ";AAiDA;EACA,eAAA;AACA", "file": "Home.vue", "sourcesContent": [`<template>
  <v-app class="container1">
    <v-main>
      <Navbar @changePage="setPage($event)"></Navbar>
      <keep-alive>
        <component v-bind:is="page" class="mx-4 md-4"></component>
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import POS from './components/pos/Pos.vue';

export default {
  data: function () {
    return {
      page: 'POS',
    };
  },
  components: {
    Navbar,
    POS,
  },
  methods: {
    setPage(page) {
      this.page = page;
    },
    remove_frappe_nav() {
      this.$nextTick(function () {
        $('.page-head').remove();
        $('.navbar.navbar-default.navbar-fixed-top').remove();
      });
    },
  },
  mounted() {
    this.remove_frappe_nav();
  },
  updated() {},
  created: function () {
    setTimeout(() => {
      this.remove_frappe_nav();
    }, 1000);
  },
};
<\/script>

<style scoped>
.container1 {
  margin-top: 0px;
}
</style>`] }, media: void 0 });
  };
  var __vue_scope_id__5 = "data-v-443791b4";
  var __vue_module_identifier__5 = void 0;
  var __vue_is_functional_template__5 = false;
  function __vue_normalize__5(template, style, script, scope, functional, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    const component = (typeof script === "function" ? script.options : script) || {};
    component.__file = "../posprice1/posprice1/public/js/posprice/Home.vue";
    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional)
        component.functional = true;
    }
    component._scopeId = scope;
    if (true) {
      let hook;
      if (false) {
        hook = function(context) {
          context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
          if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
            context = __VUE_SSR_CONTEXT__;
          }
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        component._ssrRegister = hook;
      } else if (style) {
        hook = shadowMode ? function(context) {
          style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
        } : function(context) {
          style.call(this, createInjector(context));
        };
      }
      if (hook !== void 0) {
        if (component.functional) {
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }
    return component;
  }
  function __vue_create_injector__4() {
    const styles = __vue_create_injector__4.styles || (__vue_create_injector__4.styles = {});
    const isOldIE = typeof navigator !== "undefined" && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]'))
        return;
      const group = isOldIE ? css.media || "default" : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: void 0 });
      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;
        style.ids.push(id);
        if (false) {
          code += "\n/*# sourceURL=" + css.map.sources[0] + " */";
          code += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + " */";
        }
        if (isOldIE) {
          style.element = style.element || document.querySelector("style[data-group=" + group + "]");
        }
        if (!style.element) {
          const head = document.head || document.getElementsByTagName("head")[0];
          const el = style.element = document.createElement("style");
          el.type = "text/css";
          if (css.media)
            el.setAttribute("media", css.media);
          if (isOldIE) {
            el.setAttribute("data-group", group);
            el.setAttribute("data-next-index", "0");
          }
          head.appendChild(el);
        }
        if (isOldIE) {
          index = parseInt(style.element.getAttribute("data-next-index"));
          style.element.setAttribute("data-next-index", index + 1);
        }
        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join("\n");
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index])
            style.element.removeChild(nodes[index]);
          if (nodes.length)
            style.element.insertBefore(textNode, nodes[index]);
          else
            style.element.appendChild(textNode);
        }
      }
    };
  }
  var __vue_component__5 = /* @__PURE__ */ __vue_normalize__5({ render: __vue_render__17, staticRenderFns: __vue_staticRenderFns__5 }, __vue_inject_styles__5, __vue_script__5, __vue_scope_id__5, __vue_is_functional_template__5, __vue_module_identifier__5, false, __vue_create_injector__4, void 0, void 0);
  var Home_default = __vue_component__5;

  // ../posprice1/posprice1/public/js/posprice/posprice.js
  frappe.provide("frappe.Posprice");
  frappe.Posprice.Posprice = class {
    constructor({ parent }) {
      this.$parent = $(document);
      this.page = parent.page;
      this.make_body();
    }
    make_body() {
      this.$el = this.$parent.find(".main-section");
      this.vue = new Vue({
        vuetify: new Vuetify({
          rtl: frappe.utils.is_rtl(),
          theme: {
            themes: {
              light: {
                background: "#FFFFFF",
                primary: "#0097A7",
                secondary: "#00BCD4",
                accent: "#9575CD",
                success: "#66BB6A",
                info: "#2196F3",
                warning: "#FF9800",
                error: "#E86674",
                orange: "#E65100",
                golden: "#A68C59",
                badge: "#F5528C",
                customPrimary: "#085294"
              }
            }
          }
        }),
        el: this.$el[0],
        data: {},
        render: (h) => h(Home_default)
      });
    }
    setup_header() {
    }
  };
})();
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
//# sourceMappingURL=posprice.bundle.6NM3PQVA.js.map
