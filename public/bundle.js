/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/core-js/modules/_a-function.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_an-instance.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_an-object.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_classof.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/modules/_classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_cof.js":
/*!***********************************************!*\
  !*** ../node_modules/core-js/modules/_cof.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_core.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/modules/_core.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/core-js/modules/_ctx.js":
/*!***********************************************!*\
  !*** ../node_modules/core-js/modules/_ctx.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js/modules/_defined.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/modules/_defined.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_descriptors.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/modules/_dom-create.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_dom-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/core-js/modules/_export.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/modules/_export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../node_modules/core-js/modules/_fails.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/modules/_fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/core-js/modules/_fix-re-wks.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_fix-re-wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "../node_modules/core-js/modules/_for-of.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/modules/_for-of.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "../node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "../node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "../node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "../node_modules/core-js/modules/_global.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/modules/_global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/core-js/modules/_has.js":
/*!***********************************************!*\
  !*** ../node_modules/core-js/modules/_has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_hide.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/modules/_hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_html.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/modules/_html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../node_modules/core-js/modules/_ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/_ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/modules/_invoke.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/modules/_invoke.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_is-array-iter.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/_is-array-iter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_is-object.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../node_modules/core-js/modules/_iter-call.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_iter-call.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "../node_modules/core-js/modules/_iter-detect.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_iter-detect.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_iterators.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js/modules/_library.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/modules/_library.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../node_modules/core-js/modules/_microtask.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "../node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "../node_modules/core-js/modules/_new-promise-capability.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/modules/_new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_object-dp.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_object-dp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_perform.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/modules/_perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "../node_modules/core-js/modules/_promise-resolve.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/_promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_property-desc.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/_property-desc.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/core-js/modules/_redefine-all.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/_redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "../node_modules/core-js/modules/_redefine.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/modules/_redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "../node_modules/core-js/modules/_set-species.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/_set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "../node_modules/core-js/modules/_set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/_set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../node_modules/core-js/modules/_shared.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/modules/_shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../node_modules/core-js/modules/_species-constructor.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/_species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_task.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/modules/_task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "../node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "../node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "../node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "../node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "../node_modules/core-js/modules/_to-integer.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../node_modules/core-js/modules/_to-length.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/_to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/core-js/modules/_to-primitive.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/_to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/core-js/modules/_uid.js":
/*!***********************************************!*\
  !*** ../node_modules/core-js/modules/_uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../node_modules/core-js/modules/_user-agent.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/_user-agent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "../node_modules/core-js/modules/_wks.js":
/*!***********************************************!*\
  !*** ../node_modules/core-js/modules/_wks.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../node_modules/core-js/modules/core.get-iterator-method.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/modules/core.get-iterator-method.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "../node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../node_modules/core-js/modules/es6.object.to-string.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.object.to-string.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "../node_modules/core-js/modules/es6.promise.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/modules/es6.promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "../node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "../node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "../node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "../node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "../node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "../node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "../node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "../node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "../node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "../node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "../node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "../node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "../node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "../node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "../node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es6.regexp.replace.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es6.regexp.replace.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "../node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	let tabs = __webpack_require__(/*! ./parts/tabs.js */ "./parts/tabs.js"),
		timer = __webpack_require__(/*! ./parts/timer.js */ "./parts/timer.js"),
		scroll = __webpack_require__(/*! ./parts/scroll.js */ "./parts/scroll.js"),
		modal = __webpack_require__(/*! ./parts/modal.js */ "./parts/modal.js"),
		maska = __webpack_require__(/*! ./parts/maska.js */ "./parts/maska.js"),
		form = __webpack_require__(/*! ./parts/form.js */ "./parts/form.js"),
		slider = __webpack_require__(/*! ./parts/slider.js */ "./parts/slider.js"),
		cost = __webpack_require__(/*! ./parts/cost.js */ "./parts/cost.js");

	tabs();
	timer();
	scroll();
	modal();
	maska();
	form();
	slider();
	cost();	
});

/***/ }),

/***/ "./parts/cost.js":
/*!***********************!*\
  !*** ./parts/cost.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "../node_modules/core-js/modules/es6.regexp.replace.js");

function cost() {
  'use strict';

  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total');
  var personsSum = 0,
      daysSum = 0,
      placeKoef = place.options[place.selectedIndex].value,
      total = 0;
  totalValue.textContent = 0;
  persons.addEventListener('keyup', function () {
    this.value = this.value.replace(/[^0-9]+/g, '');
    persons.textContent = this.value;
  });
  restDays.addEventListener('keyup', function () {
    this.value = this.value.replace(/[^0-9]+/g, '');
    restDays.textContent = this.value;
  });
  persons.addEventListener('input', function () {
    personsSum = +this.value;
    total = daysSum * personsSum * placeKoef * 4000;

    if (restDays == '') {
      totalValue.textContent = 0;
    } else {
      animateNumbers();
    }
  });
  restDays.addEventListener('input', function () {
    daysSum = +this.value;
    total = daysSum * personsSum * placeKoef * 4000;

    if (persons == '') {
      totalValue.textContent = 0;
    } else {
      animateNumbers();
    }
  });
  place.addEventListener('change', function () {
    placeKoef = +this.options[this.selectedIndex].value;
    total = daysSum * personsSum * placeKoef * 4000;

    if (restDays == '' || persons == '') {
      totalValue.textContent = 0;
    } else {
      animateNumbers();
    }
  });

  function animateNumbers() {
    animate({
      duration: 2000,
      timing: makeEaseInOut(circ),
      draw: function draw(progress) {
        totalValue.textContent = (progress * total).toFixed();
      }
    });
  }

  function animate(options) {
    var start = performance.now();
    requestAnimationFrame(function anime(time) {
      // timeFraction от 0 до 1
      var timeFraction = (time - start) / options.duration;

      if (timeFraction > 1) {
        timeFraction = 1;
      } // текущее состояние анимации


      var progress = options.timing(timeFraction);
      options.draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(anime);
      }
    });
  } //Дуга


  function circ(timeFraction) {
    return 1 - Math.sin(Math.acos(timeFraction));
  } //easeInOut


  function makeEaseInOut(timing) {
    return function (timeFraction) {
      if (timeFraction < 0.5) {
        return timing(2 * timeFraction) / 2;
      } else {
        return (2 - timing(2 * (1 - timeFraction))) / 2;
      }
    };
  }
}

module.exports = cost;

/***/ }),

/***/ "./parts/form.js":
/*!***********************!*\
  !*** ./parts/form.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.promise */ "../node_modules/core-js/modules/es6.promise.js");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "../node_modules/core-js/modules/es6.object.to-string.js");

function form() {
  'use strict';

  var message = {
    loading: 'Загрузка . . .',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };
  var forms = document.querySelectorAll('form'),
      input = document.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      this.appendChild(statusMessage);
      var formData = new FormData(this);
      statusMessage.classList.add('status');

      if (!this.classList.contains('main-form')) {
        statusMessage.classList.add('form-contact');
      }

      statusMessage.classList.remove('status');
      statusMessage.innerHTML = "<img src=\"img/ajax-loader.gif\" alt=\"loader\" style=\"margin-top: 20px;\">";

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'aplication/json charset=utf-8');
          var json = formDataToJSON(data);
          console.log(data);
          console.log(this);

          request.onreadystatechange = function () {
            if (request.status == 200) {
              resolve();
            } else {
              reject();
            }
          };

          request.send(json);
        });
      }

      function formDataToJSON(formData) {
        var obj = {};
        formData.forEach(function (value, key) {
          obj[key] = value;
        });
        return JSON.stringify(obj);
      }

      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData).then(function () {
        statusMessage.classList.add('status');
        statusMessage.innerHTML = message.success;
      }).catch(function () {
        statusMessage.classList.add('status');
        statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    });
  });
}

module.exports = form;

/***/ }),

/***/ "./parts/maska.js":
/*!************************!*\
  !*** ./parts/maska.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "../node_modules/core-js/modules/es6.regexp.replace.js");

function maska() {
  'use strict';

  var phones = document.querySelectorAll('input');
  phones.forEach(function (element) {
    if (element.getAttribute('type') === 'tel') {
      element.addEventListener("focus", mask);
      element.addEventListener("input", mask);
      element.addEventListener("blur", mask);
    }
  });

  function mask(event) {
    var matrix = "+38 (0__) ___-__-__",
        curentSimvol = 0,
        onlyNumbers = matrix.replace(/\D/g, ""),
        value = this.value.replace(/\D/g, "");

    if (onlyNumbers.length >= value.length) {
      value = onlyNumbers;
    }

    this.value = matrix.replace(/./g, function (a) {
      if (/[_\d]/.test(a) && curentSimvol < value.length) {
        return value.charAt(curentSimvol++);
      } else if (curentSimvol >= value.length) {
        return '';
      } else {
        return a;
      }
    });

    if (event.type == "blur") {
      if (this.value.length == 6) {
        this.value = "";
      }
    }
  }
}

module.exports = maska;

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function modal() {
  'use strict';

  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descriptionBtn = document.querySelectorAll('.description-btn');
  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });
  descriptionBtn.forEach(function (element) {
    element.addEventListener('click', function () {
      overlay.style.display = 'block';

      if (!isMobile()) {
        console.log("Animations ON");

        if (isIE()) {
          console.log("isIE = ".concat(isIE(), " animations"));
          element.classList.add('more-splash');
        } else {
          overlay.classList.remove('fade');
          console.log("isMobile = ".concat(isMobile(), " and isIE = ").concat(isIE(), " - JS animations")); //Что бы не загружать код, подключил дополнительный файл с ф-циями анимации

          animate({
            duration: 3000,
            timing: makeEaseOut(bounce),
            draw: function draw(progress) {
              overlay.style.opacity = progress;
            }
          });
        }
      } else {
        overlay.classList.remove('fade');
        console.log("isMobele = ".concat(isMobile(), " Animations OFF"));
      }

      document.body.style.overflow = 'hidden';
    });
  });

  function isIE() {
    return /edge/.test(navigator.userAgent.toLowerCase()) || /Internet Explorer/.test(navigator.userAgent.toLowerCase());
  }

  function isMobile() {
    return /ipad|iphone|ipod|android|blackberry|webos|windows phone/i.test(navigator.userAgent.toLowerCase());
  }

  function animate(options) {
    var start = performance.now();
    requestAnimationFrame(function anime(time) {
      // timeFraction от 0 до 1
      var timeFraction = (time - start) / options.duration;

      if (timeFraction > 1) {
        timeFraction = 1;
      } // текущее состояние анимации


      var progress = options.timing(timeFraction);
      options.draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(anime);
      }
    });
  } //Отскок bounce


  function bounce(timeFraction) {
    for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
      }
    }
  } // преобразователь в easeOut


  function makeEaseOut(timing) {
    return function (timeFraction) {
      return 1 - timing(1 - timeFraction);
    };
  }
}

module.exports = modal;

/***/ }),

/***/ "./parts/scroll.js":
/*!*************************!*\
  !*** ./parts/scroll.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "../node_modules/core-js/modules/es6.regexp.replace.js");

function scroll() {
  'use strict';

  var nav = document.querySelectorAll('a'),
      speed = 1 / 2; // Чем меньше дробь, тем быстрее прокрутка

  nav.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      var target = event.target,
          curent = window.pageYOffset,
          hash = target.href.replace(/[^#]*(.*)/, '$1'),
          top = document.querySelector(hash).getBoundingClientRect().top,
          start = null;
      console.log(curent);
      requestAnimationFrame(function step(time) {
        if (start === null) {
          start = time;
        }

        var progress = time - start,
            positions = top < 0 ? Math.max(curent - progress / speed, curent + top) : Math.min(curent + progress / speed, curent + top);
        window.scrollTo(0, positions);

        if (positions != curent + top) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      });
    });
  });
}

module.exports = scroll;

/***/ }),

/***/ "./parts/slider.js":
/*!*************************!*\
  !*** ./parts/slider.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function slider() {
  'use strict';

  var slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  var sliderIndex = 1,
      width = slides[sliderIndex].clientWidth;
  slideShow(sliderIndex); //const body = body.style.overflowX = 'hidden';

  function slideShow(index, move) {
    if (index > slides.length) {
      sliderIndex = 1;
    }

    if (index < 1) {
      sliderIndex = slides.length;
    }

    slides.forEach(function (item) {
      item.style.display = 'none';
      item.style.marginLeft = width;
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[sliderIndex - 1].classList.remove('fade');
    slides[sliderIndex - 1].style.display = 'block';
    var img1 = slides[sliderIndex - 1].querySelector('img');
    document.body.style.overflowX = 'hidden';
    animate({
      duration: 1000,
      timing: makeEaseOut(bounce),
      draw: function draw(progress) {
        if (move > 0) {
          img1.style.marginLeft = (progress - 1) * width + "px";
        } else {
          img1.style.marginLeft = width - progress * width + "px";
        }
      }
    });
    animate({
      duration: 1500,
      timing: linear,
      draw: function draw(progress) {
        img1.style.opacity = progress;
      }
    });
    dots[sliderIndex - 1].classList.add('dot-active');
  }

  function slideMove(index) {
    slideShow(sliderIndex += index, index);
  }

  function slideCurent(index) {
    slideShow(sliderIndex = index, index);
  }

  prev.addEventListener('click', function () {
    return slideMove(-1);
  });
  next.addEventListener('click', function () {
    return slideMove(1);
  });
  dotsWrap.addEventListener('click', function (event) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        slideCurent(i);
      }
    }
  });

  function animate(options) {
    var start = performance.now();
    requestAnimationFrame(function anime(time) {
      // timeFraction от 0 до 1
      var timeFraction = (time - start) / options.duration;

      if (timeFraction > 1) {
        timeFraction = 1;
      } // текущее состояние анимации


      var progress = options.timing(timeFraction);
      options.draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(anime);
      }
    });
  } //Линейная


  function linear(timeFraction) {
    return timeFraction;
  } //Отскок bounce


  function bounce(timeFraction) {
    for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
      }
    }
  } // преобразователь в easeOut


  function makeEaseOut(timing) {
    return function (timeFraction) {
      return 1 - timing(1 - timeFraction);
    };
  }
}

module.exports = slider;

/***/ }),

/***/ "./parts/tabs.js":
/*!***********************!*\
  !*** ./parts/tabs.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function tabs() {
  'use strict';

  var info = document.querySelector('.info-header'),
      tabs = document.querySelectorAll('.info-header-tab'),
      tabContent = document.querySelectorAll('.info-tabcontent');
  hideTabContent(1);

  function hideTabContent(key) {
    for (var i = key; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  function showTabContent(key) {
    if (tabContent[key].classList.contains('hide')) {
      tabContent[key].classList.remove('hide');
      tabContent[key].classList.add('show');
    }
  }

  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i] == target) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function timer() {
  'use strict';

  var deadLine = '2019-04-04';

  function getTimeRemaining(endTime) {
    var t = Date.parse(endTime) - Date.parse(new Date());
    t = t <= 0 ? t = 0 : t;
    var seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endTime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(update, 1000);

    function update() {
      var t = getTimeRemaining(endTime);
      hours.textContent = getNormal(t.hours);
      minutes.textContent = getNormal(t.minutes);
      seconds.textContent = getNormal(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

    return '';
  }

  setClock('timer', deadLine);

  function getNormal(number) {
    return number < 10 ? '0' + number : number;
  }
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map