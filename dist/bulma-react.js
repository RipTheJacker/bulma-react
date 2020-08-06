module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusModifiers", function() { return StatusModifiers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toClassnamesArray", function() { return toClassnamesArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBulmaExtensions", function() { return useBulmaExtensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBulmaStyles", function() { return useBulmaStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBulma", function() { return useBulma; });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @external
 * @see {@link https://github.com/lukeed/clsx#readme}
 */
 // @private

var isModifier = function isModifier(mod) {
  return function (bool) {
    return _defineProperty({}, "is-".concat(mod), bool);
  };
}; // @private


var isObject = function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}; // @private


var breakpoints = ['mobile', 'tablet', 'touch', 'desktop', 'widescreen', 'fullhd'].reduce(function (bps, bp) {
  return [].concat(_toConsumableArray(bps), [bp, "".concat(bp, "-only")]);
}, []);
var StatusModifiers = {
  isPrimary: isModifier('primary'),
  isLink: isModifier('link'),
  isInfo: isModifier('info'),
  isSuccess: isModifier('success'),
  isWarning: isModifier('warning'),
  isDanger: isModifier('danger'),
  isLight: isModifier('light')
};
var ColorModifiers = {
  hasText: function hasText(color) {
    return toClassnamesArray('has-text', color);
  },
  isColor: function isColor(color) {
    return toClassnamesArray('is', color);
  }
};
var SizeModifiers = {
  isSmall: isModifier('small'),
  isMedium: isModifier('medium'),
  isLarge: isModifier('large')
};

var Bulma = _objectSpread({
  isBulma: function isBulma(name) {
    return toClassnamesArray('is', name);
  },
  hasTextAlign: function hasTextAlign(alignment) {
    return toClassnamesArray('has-text', handleResponsive(alignment));
  },
  hasTextWeight: function hasTextWeight(weight) {
    return toClassnamesArray('has-text-weight', weight);
  },
  hasBackground: function hasBackground(color) {
    return toClassnamesArray('has-background', color);
  },
  isSize: function isSize(size) {
    return toClassnamesArray('is-size', handleResponsive(size));
  },
  isHidden: function isHidden(hidden) {
    return toClassnamesArray('is-hidden', hidden, handleResponsive(hidden));
  },
  isMobile: isModifier('mobile'),
  isFlex: function isFlex(display) {
    return toClassnamesArray('is-flex', display, handleResponsive(display));
  },
  isBlock: function isBlock(display) {
    return toClassnamesArray('is-block', display, handleResponsive(display));
  },
  isInline: function isInline(display) {
    return toClassnamesArray('is-inline', display, handleResponsive(display));
  },
  isInlineBlock: function isInlineBlock(display) {
    return toClassnamesArray('is-inline-block', display, handleResponsive(display));
  },
  isInlineFlex: function isInlineFlex(display) {
    return toClassnamesArray('is-inline-flex', display, handleResponsive(display));
  },
  isPulled: function isPulled(direction) {
    return toClassnamesArray('is-pulled', direction);
  },
  isShadowless: function isShadowless(direction) {
    return toClassnamesArray('is-shadowless', direction);
  }
}, ColorModifiers, {}, SizeModifiers); // @private


var extractBulmaProps = function extractBulmaProps(bulma, props) {
  var bulmaProps = {};
  var otherProps = {};
  Object.entries(props).forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    return bulma[key] ? Object.assign(bulmaProps, _defineProperty({}, key, value)) : Object.assign(otherProps, _defineProperty({}, key, value));
  });
  return [bulmaProps, otherProps];
};
/**
 * @param  {Object} obj {mobile: true, desktop: 6}
 * @return {Object}     {'mobile': true, '6-desktop': true}
 * @private
 */


var handleResponsive = function handleResponsive(obj) {
  if (!isObject(obj)) return obj;
  return breakpoints.reduce(function (classObj, bp) {
    var value = obj[bp];

    if (value) {
      var isBool = typeof value === 'boolean';
      var cname = isBool ? _defineProperty({}, bp, value) : _defineProperty({}, "".concat(obj[bp], "-").concat(bp), true);
      return _objectSpread({}, classObj, {}, cname);
    }

    return classObj;
  }, {});
};
/**
 * Return array of classnames to pass to classnames lib
 * @see classNames
 * @param  {string} prefix      - The Bulma prefix ie. 'is' or 'has' (without a '-')
 * @param  {(object|string)} objOrString - the React prop value
 * @param {boolean} [responsive=false] If this prefix responds to '-mobile' or '-desktop', etc.
 * @return {Array<{className: Boolean}>}
 */


var toClassnamesArray = function toClassnamesArray(prefix, objOrString) {
  var responsive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var type = _typeof(objOrString);

  if (type === 'boolean') return _defineProperty({}, prefix, objOrString);
  if (type === 'string' || type === 'number') return _defineProperty({}, "".concat(prefix, "-").concat(objOrString), true);

  if (isObject(objOrString)) {
    var values = responsive ? handleResponsive(objOrString) : objOrString;
    return Object.entries(values).map(function (_ref8) {
      var _ref9 = _slicedToArray(_ref8, 2),
          key = _ref9[0],
          value = _ref9[1];

      return _defineProperty({}, "".concat(prefix, "-").concat(key), value);
    });
  }

  if (Array.isArray(objOrString)) return objOrString.map(function (value) {
    return _defineProperty({}, "".concat(prefix, "-").concat(value), true);
  });
  return null;
};
var useBulmaExtensions = function useBulmaExtensions() {
  var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var extended = {};
  Object.entries(extensions).forEach(function (_ref12) {
    var _ref13 = _slicedToArray(_ref12, 2),
        extName = _ref13[0],
        attributes = _ref13[1];

    var name = attributes.name,
        responsive = attributes.responsive,
        parser = attributes.parser;
    Object.assign(extended, _defineProperty({}, extName, function (propValue) {
      var value = parser ? parser(propValue) : propValue;
      return toClassnamesArray(name, value, responsive);
    }));
  });
  return extended;
};
var useBulmaStyles = function useBulmaStyles(props) {
  var extensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var bulmaExtended = _objectSpread({}, Bulma, {}, extensions);

  var _extractBulmaProps = extractBulmaProps(bulmaExtended, props),
      _extractBulmaProps2 = _slicedToArray(_extractBulmaProps, 2),
      bulmaProps = _extractBulmaProps2[0],
      _extractBulmaProps2$ = _extractBulmaProps2[1],
      bulmaClass = _extractBulmaProps2$.bulmaClass,
      className = _extractBulmaProps2$.className,
      other = _objectWithoutProperties(_extractBulmaProps2$, ["bulmaClass", "className"]);

  var classNameWithBulma = clsx__WEBPACK_IMPORTED_MODULE_0___default.a.apply(void 0, _toConsumableArray(Object.entries(bulmaProps).map(function (_ref14) {
    var _ref15 = _slicedToArray(_ref14, 2),
        prop = _ref15[0],
        value = _ref15[1];

    return bulmaExtended[prop](value);
  })).concat([bulmaClass, className]));
  return [classNameWithBulma, other];
};
var useBulma = function useBulma(props) {
  var extensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var bulmaExtended = useBulmaExtensions(extensions);
  return useBulmaStyles(props, bulmaExtended);
};

/***/ })
/******/ ]);
//# sourceMappingURL=bulma-react.js.map