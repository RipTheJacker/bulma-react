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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(1);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(2);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// CONCATENATED MODULE: ./src/utils/index.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
var utils_useBulmaStyles = function useBulmaStyles(props) {
  var extensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var bulmaExtended = _objectSpread({}, Bulma, {}, extensions);

  var _extractBulmaProps = extractBulmaProps(bulmaExtended, props),
      _extractBulmaProps2 = _slicedToArray(_extractBulmaProps, 2),
      bulmaProps = _extractBulmaProps2[0],
      _extractBulmaProps2$ = _extractBulmaProps2[1],
      bulmaClass = _extractBulmaProps2$.bulmaClass,
      className = _extractBulmaProps2$.className,
      other = _objectWithoutProperties(_extractBulmaProps2$, ["bulmaClass", "className"]);

  var classNameWithBulma = external_clsx_default.a.apply(void 0, _toConsumableArray(Object.entries(bulmaProps).map(function (_ref14) {
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
  return utils_useBulmaStyles(props, bulmaExtended);
};
// CONCATENATED MODULE: ./src/components/Element.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Element_slicedToArray(arr, i) { return Element_arrayWithHoles(arr) || Element_iterableToArrayLimit(arr, i) || Element_unsupportedIterableToArray(arr, i) || Element_nonIterableRest(); }

function Element_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Element_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Element_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Element_arrayLikeToArray(o, minLen); }

function Element_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Element_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Element_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Element_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Element_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Element_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Element_Element = function Element(_ref) {
  var tag = _ref.tag,
      extensions = _ref.extensions,
      allProps = Element_objectWithoutProperties(_ref, ["tag", "extensions"]);

  var bulmaExtensions = useBulmaExtensions(extensions);

  var _useBulmaStyles = utils_useBulmaStyles(allProps, bulmaExtensions),
      _useBulmaStyles2 = Element_slicedToArray(_useBulmaStyles, 2),
      bulma = _useBulmaStyles2[0],
      rest = _useBulmaStyles2[1];

  var Tag = tag;
  return external_react_default.a.createElement(Tag, _extends({
    className: bulma
  }, rest));
};

Element_Element.propTypes = {
  tag: external_prop_types_default.a.string,
  extensions: external_prop_types_default.a.object,
  bulmaClass: external_prop_types_default.a.string
};
Element_Element.defaultProps = {
  tag: 'div'
};
/* harmony default export */ var components_Element = (Element_Element);
// CONCATENATED MODULE: ./src/components/Content.jsx
function Content_extends() { Content_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Content_extends.apply(this, arguments); }

function Content_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Content_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Content_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Content_Content = function Content(_ref) {
  var children = _ref.children,
      props = Content_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Content_extends({
    tag: "div"
  }, props, {
    bulmaClass: "content"
  }), children);
};

/* harmony default export */ var components_Content = (Content_Content);
// CONCATENATED MODULE: ./src/components/Footer.jsx
function Footer_extends() { Footer_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Footer_extends.apply(this, arguments); }

function Footer_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Footer_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Footer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Footer_Footer = function Footer(_ref) {
  var children = _ref.children,
      props = Footer_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Footer_extends({
    tag: "footer"
  }, props, {
    bulmaClass: "footer"
  }), children);
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./src/components/Image.jsx
function Image_extends() { Image_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Image_extends.apply(this, arguments); }

function Image_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Image_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Image_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Image_Image = function Image(_ref) {
  var src = _ref.src,
      altText = _ref.altText,
      props = Image_objectWithoutProperties(_ref, ["src", "altText"]);

  var extensions = {
    isRatio: {
      name: 'is'
    },
    isRounded: {
      name: 'is-rounded'
    }
  };
  return external_react_default.a.createElement(components_Element, Image_extends({}, props, {
    tag: "figure",
    extensions: extensions
  }), external_react_default.a.createElement("img", {
    src: src,
    alt: altText
  }));
};

/* harmony default export */ var components_Image = (Image_Image);
// CONCATENATED MODULE: ./src/components/Table.jsx
function Table_extends() { Table_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Table_extends.apply(this, arguments); }

function Table_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Table_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Table_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Table_Table = function Table(_ref) {
  var children = _ref.children,
      hasContainer = _ref.hasContainer,
      props = Table_objectWithoutProperties(_ref, ["children", "hasContainer"]);

  var extensions = {
    isBordered: {
      name: 'is-bordered'
    },
    isStriped: {
      name: 'is-striped'
    },
    isNarrow: {
      name: 'is-narrow'
    },
    isHoverable: {
      name: 'is-hoverable'
    },
    isFullwidth: {
      name: 'is-fullwidth'
    }
  };
  var tableRender = external_react_default.a.createElement(components_Element, Table_extends({}, props, {
    tag: "table",
    extensions: extensions,
    bulmaClass: "table"
  }), children);
  return hasContainer ? external_react_default.a.createElement("div", {
    className: "table-container"
  }, tableRender) : tableRender;
};

/* harmony default export */ var components_Table = (Table_Table);
// CONCATENATED MODULE: ./src/components/Notification.jsx
function Notification_extends() { Notification_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Notification_extends.apply(this, arguments); }

function Notification_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Notification_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Notification_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Notification_Notification = function Notification(_ref) {
  var children = _ref.children,
      props = Notification_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Notification_extends({
    tag: "div"
  }, props, {
    bulmaClass: "notification"
  }), children);
};

/* harmony default export */ var components_Notification = (Notification_Notification);
// CONCATENATED MODULE: ./src/components/Columns.jsx
function Columns_extends() { Columns_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Columns_extends.apply(this, arguments); }



var sizeAliasList = {
  '4/5': 'four-fifths',
  '3/5': 'three-fifths',
  '2/5': 'two-fifths',
  '1/5': 'one-fifth',
  '3/4': 'three-quarters',
  '2/3': 'two-thirds',
  '1/2': 'half',
  '1/3': 'one-third',
  '1/4': 'one-quarter'
};

var parser = function parser(propValue) {
  return sizeAliasList[propValue] || propValue;
};

var Columns_Columns = function Columns(props) {
  return external_react_default.a.createElement(components_Element, Columns_extends({}, props, {
    extensions: {
      isCentered: {
        name: 'is-centered'
      },
      isMultiline: {
        name: 'is-multiline'
      },
      isSize: {
        name: 'is',
        parser: parser,
        responsive: true
      }
    },
    tag: "div",
    bulmaClass: "columns"
  }));
};
var Columns_Column = function Column(props) {
  return external_react_default.a.createElement(components_Element, Columns_extends({}, props, {
    extensions: {
      isNarrow: {
        name: 'is-narrow',
        responsive: true
      },
      isSize: {
        name: 'is',
        parser: parser,
        responsive: true
      }
    },
    tag: "div",
    bulmaClass: "column"
  }));
};
// CONCATENATED MODULE: ./src/components/Messages.jsx
function Messages_extends() { Messages_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Messages_extends.apply(this, arguments); }



var Messages_Message = function Message(props) {
  return external_react_default.a.createElement(components_Element, Messages_extends({
    tag: "div"
  }, props, {
    bulmaClass: "message"
  }));
};
var Messages_MessageHeader = function MessageHeader(props) {
  return external_react_default.a.createElement(components_Element, Messages_extends({
    tag: "div"
  }, props, {
    bulmaClass: "message-header"
  }));
};
var Messages_MessageBody = function MessageBody(props) {
  return external_react_default.a.createElement(components_Element, Messages_extends({
    tag: "div"
  }, props, {
    bulmaClass: "message-body"
  }));
};
// CONCATENATED MODULE: ./src/components/panel/Panel.jsx
function Panel_extends() { Panel_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Panel_extends.apply(this, arguments); }

function Panel_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Panel_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Panel_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Panel_Panel = function Panel(_ref) {
  var children = _ref.children,
      props = Panel_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Panel_extends({
    tag: "div"
  }, props, {
    bulmaClass: "panel"
  }), children);
};

/* harmony default export */ var panel_Panel = (Panel_Panel);
// CONCATENATED MODULE: ./src/components/panel/Heading.jsx
function Heading_extends() { Heading_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Heading_extends.apply(this, arguments); }

function Heading_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Heading_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Heading_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Heading_Heading = function Heading(_ref) {
  var children = _ref.children,
      props = Heading_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Heading_extends({
    tag: "div"
  }, props, {
    bulmaClass: "panel-heading"
  }), children);
};

/* harmony default export */ var panel_Heading = (Heading_Heading);
// CONCATENATED MODULE: ./src/components/panel/Tabs.jsx
function Tabs_extends() { Tabs_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Tabs_extends.apply(this, arguments); }

function Tabs_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Tabs_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Tabs_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Tabs_Tabs = function Tabs(_ref) {
  var children = _ref.children,
      props = Tabs_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Tabs_extends({
    tag: "div"
  }, props, {
    bulmaClass: "panel-tabs"
  }), children);
};

/* harmony default export */ var panel_Tabs = (Tabs_Tabs);
// CONCATENATED MODULE: ./src/components/panel/Block.jsx
function Block_extends() { Block_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Block_extends.apply(this, arguments); }

function Block_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Block_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Block_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Block_Block = function Block(_ref) {
  var children = _ref.children,
      props = Block_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Block_extends({
    tag: "div"
  }, props, {
    bulmaClass: "panel-block"
  }), children);
};

/* harmony default export */ var panel_Block = (Block_Block);
// CONCATENATED MODULE: ./src/components/panel/index.js




// CONCATENATED MODULE: ./src/components/menu/Menu.jsx
function Menu_extends() { Menu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Menu_extends.apply(this, arguments); }

function Menu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Menu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Menu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Menu_Menu = function Menu(_ref) {
  var children = _ref.children,
      props = Menu_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Menu_extends({
    tag: "aside"
  }, props, {
    bulmaClass: "menu"
  }), children);
};

/* harmony default export */ var menu_Menu = (Menu_Menu);
// CONCATENATED MODULE: ./src/components/menu/Label.jsx
function Label_extends() { Label_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Label_extends.apply(this, arguments); }

function Label_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Label_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Label_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Label_Label = function Label(_ref) {
  var children = _ref.children,
      props = Label_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Label_extends({
    tag: "p"
  }, props, {
    bulmaClass: "menu-label"
  }), children);
};

/* harmony default export */ var menu_Label = (Label_Label);
// CONCATENATED MODULE: ./src/components/menu/List.jsx
function List_extends() { List_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return List_extends.apply(this, arguments); }

function List_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = List_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function List_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var List_List = function List(_ref) {
  var children = _ref.children,
      props = List_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, List_extends({
    tag: "ul"
  }, props, {
    bulmaClass: "menu-list"
  }), children);
};

/* harmony default export */ var menu_List = (List_List);
// CONCATENATED MODULE: ./src/components/menu/index.js



// CONCATENATED MODULE: ./src/components/Section.jsx
function Section_extends() { Section_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Section_extends.apply(this, arguments); }

function Section_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Section_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Section_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Section_Section = function Section(_ref) {
  var children = _ref.children,
      props = Section_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Section_extends({
    tag: "section"
  }, props, {
    bulmaClass: "section"
  }), children);
};

/* harmony default export */ var components_Section = (Section_Section);
// CONCATENATED MODULE: ./src/components/Box.jsx
function Box_extends() { Box_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Box_extends.apply(this, arguments); }

function Box_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Box_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Box_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Box_Box = function Box(_ref) {
  var children = _ref.children,
      props = Box_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Box_extends({
    tag: "div"
  }, props, {
    bulmaClass: "box"
  }), children);
};

/* harmony default export */ var components_Box = (Box_Box);
// CONCATENATED MODULE: ./src/components/Container.jsx
function Container_extends() { Container_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Container_extends.apply(this, arguments); }

function Container_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Container_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Container_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Container_Container = function Container(_ref) {
  var children = _ref.children,
      props = Container_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Container_extends({
    tag: "div"
  }, props, {
    bulmaClass: "container"
  }), children);
};

/* harmony default export */ var components_Container = (Container_Container);
// CONCATENATED MODULE: ./src/components/Titles.jsx
function Titles_extends() { Titles_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Titles_extends.apply(this, arguments); }

function Titles_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Titles_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Titles_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Titles_extensions = {
  isSpaced: {
    name: 'is-spaced'
  }
};
var Titles_Title = function Title(_ref) {
  var children = _ref.children,
      props = Titles_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Titles_extends({
    tag: "h1"
  }, props, {
    bulmaClass: "title",
    extensions: Titles_extensions
  }), children);
};
var Titles_Subtitle = function Subtitle(_ref2) {
  var children = _ref2.children,
      props = Titles_objectWithoutProperties(_ref2, ["children"]);

  return external_react_default.a.createElement(components_Element, Titles_extends({
    tag: "h2"
  }, props, {
    bulmaClass: "subtitle",
    extensions: Titles_extensions
  }), children);
};
// CONCATENATED MODULE: ./src/components/Button.jsx
function Button_extends() { Button_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Button_extends.apply(this, arguments); }

function Button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Button_Button = function Button(_ref) {
  var children = _ref.children,
      props = Button_objectWithoutProperties(_ref, ["children"]);

  var extensions = {
    isLight: {
      name: 'is-light'
    },
    isInverted: {
      name: 'is-inverted'
    },
    isHovered: {
      name: 'is-hovered'
    },
    isFocused: {
      name: 'is-focused'
    },
    isActive: {
      name: 'is-active'
    },
    isRounded: {
      name: 'is-rounded'
    },
    isLoading: {
      name: 'is-loading'
    },
    isOutlined: {
      name: 'is-outlined'
    }
  };
  return external_react_default.a.createElement(components_Element, Button_extends({
    tag: "button"
  }, props, {
    extensions: extensions,
    bulmaClass: "button"
  }), children);
};

/* harmony default export */ var components_Button = (Button_Button);
// CONCATENATED MODULE: ./src/components/Close.jsx
function Close_extends() { Close_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Close_extends.apply(this, arguments); }




var Close_Close = function Close(props) {
  return external_react_default.a.createElement(components_Element, Close_extends({
    tag: "button"
  }, props, {
    bulmaClass: "delete",
    "aria-label": "close"
  }));
};

/* harmony default export */ var components_Close = (Close_Close);
// CONCATENATED MODULE: ./src/components/Tag.jsx
function Tag_extends() { Tag_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Tag_extends.apply(this, arguments); }

function Tag_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Tag_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Tag_ownKeys(Object(source), true).forEach(function (key) { Tag_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Tag_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Tag_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Tag_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Tag_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Tag_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Tag_Tag = function Tag(_ref) {
  var children = _ref.children,
      props = Tag_objectWithoutProperties(_ref, ["children"]);

  var extensions = Tag_objectSpread({
    isRounded: {
      name: 'is-rounded'
    },
    isDelete: {
      name: 'is-delete'
    }
  }, StatusModifiers);

  return external_react_default.a.createElement(components_Element, Tag_extends({}, props, {
    tag: "span",
    extensions: extensions,
    bulmaClass: "tag"
  }), children);
};

/* harmony default export */ var components_Tag = (Tag_Tag);
// CONCATENATED MODULE: ./src/components/Icon.jsx
function Icon_extends() { Icon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Icon_extends.apply(this, arguments); }

function Icon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Icon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Icon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Icon_Icon = function Icon(_ref) {
  var name = _ref.name,
      props = Icon_objectWithoutProperties(_ref, ["name"]);

  var extensions = {
    isSize: {
      name: 'is'
    },
    isLeft: {
      name: 'is-left'
    },
    isRight: {
      name: 'is-right'
    }
  };
  return external_react_default.a.createElement(components_Element, Icon_extends({
    tag: "span"
  }, props, {
    extensions: extensions,
    bulmaClass: "icon"
  }), external_react_default.a.createElement("i", {
    className: name
  }));
};

/* harmony default export */ var components_Icon = (Icon_Icon);
// CONCATENATED MODULE: ./src/components/navbar/hooks.js

var NavbarContext = Object(external_react_["createContext"])();
var hooks_useNavbarContext = function useNavbarContext() {
  return Object(external_react_["useContext"])(NavbarContext);
};
// CONCATENATED MODULE: ./src/components/navbar/Navbar.jsx
function Navbar_extends() { Navbar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Navbar_extends.apply(this, arguments); }

function Navbar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Navbar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Navbar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Navbar_Navbar = function Navbar(_ref) {
  var _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? false : _ref$isActive,
      children = _ref.children,
      props = Navbar_objectWithoutProperties(_ref, ["isActive", "children"]);

  var extensions = {
    isTransparent: {
      name: 'is-transparent'
    },
    isSpaced: {
      name: 'is-spaced'
    }
  };
  return external_react_default.a.createElement(NavbarContext.Provider, {
    value: {
      active: isActive
    }
  }, external_react_default.a.createElement(components_Element, Navbar_extends({
    tag: "nav",
    extensions: extensions,
    bulmaClass: "navbar",
    role: "navigation",
    "aria-label": "main navigation"
  }, props), children));
};

Navbar_Navbar.propTypes = {
  isActive: external_prop_types_default.a.bool
};
/* harmony default export */ var navbar_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./src/components/navbar/Burger.jsx
function Burger_extends() { Burger_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Burger_extends.apply(this, arguments); }





var Burger_Burger = function Burger(props) {
  var extensions = {
    isActive: {
      name: 'is-active'
    }
  };

  var _useNavbarContext = hooks_useNavbarContext(),
      active = _useNavbarContext.active;

  var ariaExpanded = active ? 'true' : 'false';
  return external_react_default.a.createElement(components_Element, Burger_extends({
    tag: "a",
    extensions: extensions,
    bulmaClass: "navbar-burger",
    role: "button",
    "aria-label": "menu",
    "aria-expanded": ariaExpanded,
    isActive: active
  }, props), external_react_default.a.createElement("span", {
    "aria-hidden": "true"
  }), external_react_default.a.createElement("span", {
    "aria-hidden": "true"
  }), external_react_default.a.createElement("span", {
    "aria-hidden": "true"
  }));
};

/* harmony default export */ var navbar_Burger = (Burger_Burger);
// CONCATENATED MODULE: ./src/components/navbar/Menu.jsx
function navbar_Menu_extends() { navbar_Menu_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return navbar_Menu_extends.apply(this, arguments); }

function navbar_Menu_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = navbar_Menu_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function navbar_Menu_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var navbar_Menu_Menu = function Menu(_ref) {
  var children = _ref.children,
      props = navbar_Menu_objectWithoutProperties(_ref, ["children"]);

  var extensions = {
    isActive: {
      name: 'is-active'
    }
  };

  var _useNavbarContext = hooks_useNavbarContext(),
      active = _useNavbarContext.active;

  return external_react_default.a.createElement(components_Element, navbar_Menu_extends({
    tag: "div",
    extensions: extensions,
    bulmaClass: "navbar-menu",
    isActive: active
  }, props), children);
};

/* harmony default export */ var navbar_Menu = (navbar_Menu_Menu);
// CONCATENATED MODULE: ./src/components/navbar/index.js



// CONCATENATED MODULE: ./src/components/media/Media.jsx
function Media_extends() { Media_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Media_extends.apply(this, arguments); }

function Media_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Media_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Media_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Media_Media = function Media(_ref) {
  var children = _ref.children,
      props = Media_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Media_extends({
    tag: "article"
  }, props, {
    bulmaClass: "media"
  }), children);
};

/* harmony default export */ var media_Media = (Media_Media);
// CONCATENATED MODULE: ./src/components/media/Left.jsx
function Left_extends() { Left_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Left_extends.apply(this, arguments); }

function Left_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Left_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Left_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Left_Left = function Left(_ref) {
  var children = _ref.children,
      props = Left_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Left_extends({
    tag: "figure"
  }, props, {
    bulmaClass: "media-left"
  }), children);
};

/* harmony default export */ var media_Left = (Left_Left);
// CONCATENATED MODULE: ./src/components/media/Right.jsx
function Right_extends() { Right_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Right_extends.apply(this, arguments); }

function Right_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Right_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Right_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Right_Right = function Right(_ref) {
  var children = _ref.children,
      props = Right_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Right_extends({
    tag: "figure"
  }, props, {
    bulmaClass: "media-right"
  }), children);
};

/* harmony default export */ var media_Right = (Right_Right);
// CONCATENATED MODULE: ./src/components/media/Content.jsx
function media_Content_extends() { media_Content_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return media_Content_extends.apply(this, arguments); }

function media_Content_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = media_Content_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function media_Content_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var media_Content_Content = function Content(_ref) {
  var children = _ref.children,
      props = media_Content_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, media_Content_extends({
    tag: "div"
  }, props, {
    bulmaClass: "media-content"
  }), children);
};

/* harmony default export */ var media_Content = (media_Content_Content);
// CONCATENATED MODULE: ./src/components/media/index.js




// CONCATENATED MODULE: ./src/components/level/Level.jsx
function Level_extends() { Level_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Level_extends.apply(this, arguments); }

function Level_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Level_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Level_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Level_Level = function Level(_ref) {
  var children = _ref.children,
      props = Level_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Level_extends({
    tag: "nav"
  }, props, {
    bulmaClass: "level"
  }), children);
};

/* harmony default export */ var level_Level = (Level_Level);
// CONCATENATED MODULE: ./src/components/level/Left.jsx
function level_Left_extends() { level_Left_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return level_Left_extends.apply(this, arguments); }

function level_Left_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = level_Left_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function level_Left_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var level_Left_Left = function Left(_ref) {
  var children = _ref.children,
      props = level_Left_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, level_Left_extends({}, props, {
    tag: "div",
    bulmaClass: "level-left"
  }), children);
};

/* harmony default export */ var level_Left = (level_Left_Left);
// CONCATENATED MODULE: ./src/components/level/Right.jsx
function level_Right_extends() { level_Right_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return level_Right_extends.apply(this, arguments); }

function level_Right_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = level_Right_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function level_Right_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var level_Right_Right = function Right(_ref) {
  var children = _ref.children,
      props = level_Right_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, level_Right_extends({}, props, {
    tag: "div",
    bulmaClass: "level-right"
  }), children);
};

/* harmony default export */ var level_Right = (level_Right_Right);
// CONCATENATED MODULE: ./src/components/level/Item.jsx
function Item_extends() { Item_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Item_extends.apply(this, arguments); }

function Item_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Item_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Item_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Item_Item = function Item(_ref) {
  var children = _ref.children,
      props = Item_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Item_extends({
    tag: "div"
  }, props, {
    bulmaClass: "level-item"
  }), external_react_default.a.createElement("div", null, children));
};

/* harmony default export */ var level_Item = (Item_Item);
// CONCATENATED MODULE: ./src/components/level/index.js




// CONCATENATED MODULE: ./src/components/breadcrumbs/Breadcrumb.jsx
function Breadcrumb_extends() { Breadcrumb_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Breadcrumb_extends.apply(this, arguments); }

function Breadcrumb_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Breadcrumb_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Breadcrumb_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Breadcrumb_Breadcrumb = function Breadcrumb(_ref) {
  var children = _ref.children,
      hasSeparator = _ref.hasSeparator,
      props = Breadcrumb_objectWithoutProperties(_ref, ["children", "hasSeparator"]);

  var getSeparator = function getSeparator(name) {
    if (name) return {
      hasSeparator: {
        name: "has-".concat(name, "-separator")
      }
    };
    return {
      hasSeparator: {
        name: ''
      }
    };
  };

  return external_react_default.a.createElement(components_Element, Breadcrumb_extends({}, props, {
    hasSeparator: !!hasSeparator,
    extensions: getSeparator(hasSeparator),
    tag: "nav",
    bulmaClass: "breadcrumb",
    "aria-label": "breadcrumbs"
  }), external_react_default.a.createElement("ul", null, children));
};

/* harmony default export */ var breadcrumbs_Breadcrumb = (Breadcrumb_Breadcrumb);
// CONCATENATED MODULE: ./src/components/breadcrumbs/Item.jsx
function breadcrumbs_Item_extends() { breadcrumbs_Item_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return breadcrumbs_Item_extends.apply(this, arguments); }

function breadcrumbs_Item_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = breadcrumbs_Item_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function breadcrumbs_Item_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var breadcrumbs_Item_Item = function Item(_ref) {
  var children = _ref.children,
      props = breadcrumbs_Item_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, breadcrumbs_Item_extends({}, props, {
    extensions: {
      isActive: {
        name: 'is-active'
      }
    },
    tag: "li"
  }), children);
};

/* harmony default export */ var breadcrumbs_Item = (breadcrumbs_Item_Item);
// CONCATENATED MODULE: ./src/components/breadcrumbs/index.js


// CONCATENATED MODULE: ./src/components/modal/Modal.jsx
function Modal_extends() { Modal_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Modal_extends.apply(this, arguments); }

function Modal_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Modal_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Modal_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Modal_Modal = function Modal(_ref) {
  var children = _ref.children,
      _ref$fullscreen = _ref.fullscreen,
      fullscreen = _ref$fullscreen === void 0 ? true : _ref$fullscreen,
      props = Modal_objectWithoutProperties(_ref, ["children", "fullscreen"]);

  var extensions = {
    isActive: {
      name: 'is-active'
    }
  };
  Object(external_react_["useEffect"])(function () {
    if (props.isActive && fullscreen) {
      document.body.classList.add('is-clipped');
    }

    return function removeClipped() {
      document.body.classList.remove('is-clipped');
    };
  }, [props.isActive]);
  return external_react_default.a.createElement(components_Element, Modal_extends({
    tag: "div"
  }, props, {
    bulmaClass: "modal",
    extensions: extensions,
    role: "dialog",
    "aria-modal": "true"
  }), children);
};

/* harmony default export */ var modal_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./src/components/modal/ModalContent.jsx
function ModalContent_extends() { ModalContent_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ModalContent_extends.apply(this, arguments); }

function ModalContent_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ModalContent_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ModalContent_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var ModalContent_ModalContent = function ModalContent(_ref) {
  var children = _ref.children,
      props = ModalContent_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, ModalContent_extends({
    tag: "div"
  }, props, {
    bulmaClass: "modal-content"
  }), children);
};

/* harmony default export */ var modal_ModalContent = (ModalContent_ModalContent);
// CONCATENATED MODULE: ./src/components/modal/ModalBackground.jsx
function ModalBackground_extends() { ModalBackground_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ModalBackground_extends.apply(this, arguments); }

function ModalBackground_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = ModalBackground_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function ModalBackground_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var ModalBackground_ModalBackground = function ModalBackground(_ref) {
  var children = _ref.children,
      props = ModalBackground_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, ModalBackground_extends({
    tag: "div"
  }, props, {
    bulmaClass: "modal-background"
  }), children);
};

/* harmony default export */ var modal_ModalBackground = (ModalBackground_ModalBackground);
// CONCATENATED MODULE: ./src/components/modal/Close.jsx
function modal_Close_extends() { modal_Close_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return modal_Close_extends.apply(this, arguments); }




var modal_Close_Close = function Close(props) {
  return external_react_default.a.createElement(components_Element, modal_Close_extends({
    tag: "button"
  }, props, {
    bulmaClass: "modal-close",
    "aria-label": "close"
  }));
};

/* harmony default export */ var modal_Close = (modal_Close_Close);
// CONCATENATED MODULE: ./src/components/modal/Card.jsx
function Card_extends() { Card_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Card_extends.apply(this, arguments); }

function Card_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Card_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Card_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Card_ModalCard = function ModalCard(_ref) {
  var children = _ref.children,
      props = Card_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Card_extends({
    tag: "div",
    bulmaClass: "modal-card"
  }, props), children);
};

/* harmony default export */ var modal_Card = (Card_ModalCard);
// CONCATENATED MODULE: ./src/components/modal/CardHead.jsx
function CardHead_extends() { CardHead_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardHead_extends.apply(this, arguments); }

function CardHead_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardHead_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardHead_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var CardHead_CardHead = function CardHead(_ref) {
  var children = _ref.children,
      props = CardHead_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, CardHead_extends({
    tag: "header",
    bulmaClass: "modal-card-head"
  }, props), children);
};

/* harmony default export */ var modal_CardHead = (CardHead_CardHead);
// CONCATENATED MODULE: ./src/components/modal/CardBody.jsx
function CardBody_extends() { CardBody_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardBody_extends.apply(this, arguments); }

function CardBody_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardBody_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardBody_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var CardBody_CardBody = function CardBody(_ref) {
  var children = _ref.children,
      props = CardBody_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, CardBody_extends({
    tag: "section",
    bulmaClass: "modal-card-body"
  }, props), children);
};

/* harmony default export */ var modal_CardBody = (CardBody_CardBody);
// CONCATENATED MODULE: ./src/components/modal/CardFoot.jsx
function CardFoot_extends() { CardFoot_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardFoot_extends.apply(this, arguments); }

function CardFoot_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardFoot_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardFoot_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var CardFoot_CardFoot = function CardFoot(_ref) {
  var children = _ref.children,
      props = CardFoot_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, CardFoot_extends({
    tag: "footer",
    bulmaClass: "modal-card-foot"
  }, props), children);
};

/* harmony default export */ var modal_CardFoot = (CardFoot_CardFoot);
// CONCATENATED MODULE: ./src/components/modal/index.js








// CONCATENATED MODULE: ./src/components/hero/Hero.jsx
function Hero_extends() { Hero_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Hero_extends.apply(this, arguments); }

function Hero_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Hero_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Hero_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Hero_Hero = function Hero(_ref) {
  var children = _ref.children,
      props = Hero_objectWithoutProperties(_ref, ["children"]);

  var extensions = {
    isBold: {
      name: 'is-bold'
    },
    isFullHeight: {
      name: 'is-fullheight'
    }
  };
  return external_react_default.a.createElement(components_Element, Hero_extends({
    tag: "section"
  }, props, {
    extensions: extensions,
    bulmaClass: "hero"
  }), children);
};

Hero_Hero.propTypes = {
  isSize: external_prop_types_default.a.oneOf(['medium', 'large', 'fullheight'])
};
/* harmony default export */ var hero_Hero = (Hero_Hero);
// CONCATENATED MODULE: ./src/components/hero/Body.jsx
function Body_extends() { Body_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Body_extends.apply(this, arguments); }

function Body_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Body_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Body_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Body_Body = function Body(_ref) {
  var children = _ref.children,
      props = Body_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Body_extends({
    tag: "div",
    bulmaClass: "hero-body"
  }, props), children);
};

/* harmony default export */ var hero_Body = (Body_Body);
// CONCATENATED MODULE: ./src/components/hero/Head.jsx
function Head_extends() { Head_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Head_extends.apply(this, arguments); }

function Head_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Head_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Head_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Head_Head = function Head(_ref) {
  var children = _ref.children,
      props = Head_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Head_extends({
    tag: "div",
    bulmaClass: "hero-head"
  }, props), children);
};

/* harmony default export */ var hero_Head = (Head_Head);
// CONCATENATED MODULE: ./src/components/hero/Foot.jsx
function Foot_extends() { Foot_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Foot_extends.apply(this, arguments); }

function Foot_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Foot_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Foot_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Foot_Foot = function Foot(_ref) {
  var children = _ref.children,
      props = Foot_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Foot_extends({
    tag: "div",
    bulmaClass: "hero-foot"
  }, props), children);
};

/* harmony default export */ var hero_Foot = (Foot_Foot);
// CONCATENATED MODULE: ./src/components/hero/index.js




// CONCATENATED MODULE: ./src/components/form/Field.jsx
function Field_extends() { Field_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Field_extends.apply(this, arguments); }

function Field_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Field_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Field_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Field_Field = function Field(_ref) {
  var children = _ref.children,
      props = Field_objectWithoutProperties(_ref, ["children"]);

  var extensions = {
    hasAddons: {
      name: 'has-addons'
    },
    isGrouped: {
      name: 'is-grouped'
    },
    isHorizontal: {
      name: 'is-horizontal'
    },
    isExpanded: {
      name: 'is-expanded'
    }
  };
  return external_react_default.a.createElement(components_Element, Field_extends({}, props, {
    extensions: extensions,
    tag: "div",
    bulmaClass: "field"
  }), children);
};

/* harmony default export */ var form_Field = (Field_Field);
// CONCATENATED MODULE: ./src/components/form/Control.jsx
function Control_extends() { Control_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Control_extends.apply(this, arguments); }

function Control_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Control_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Control_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Control_Control = function Control(_ref) {
  var children = _ref.children,
      props = Control_objectWithoutProperties(_ref, ["children"]);

  var extensions = {
    hasIcons: {
      name: 'has-icons'
    },
    isExpanded: {
      name: 'is-expanded'
    },
    isLoading: {
      name: 'is-loading'
    }
  };
  return external_react_default.a.createElement(components_Element, Control_extends({
    tag: "p"
  }, props, {
    extensions: extensions,
    bulmaClass: "control"
  }), children);
};

/* harmony default export */ var form_Control = (Control_Control);
// CONCATENATED MODULE: ./src/components/form/Label.jsx
function form_Label_extends() { form_Label_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return form_Label_extends.apply(this, arguments); }

function form_Label_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = form_Label_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function form_Label_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var form_Label_Label = function Label(_ref) {
  var children = _ref.children,
      props = form_Label_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, form_Label_extends({}, props, {
    tag: "label",
    bulmaClass: "label"
  }), children);
};

/* harmony default export */ var form_Label = (form_Label_Label);
// CONCATENATED MODULE: ./src/components/form/withLabel.jsx
function withLabel_extends() { withLabel_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return withLabel_extends.apply(this, arguments); }

function withLabel_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = withLabel_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function withLabel_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var withLabel_withLabel = function withLabel(Component) {
  return function labelWrapped(_ref) {
    var disabled = _ref.disabled,
        label = _ref.label,
        labelPlacement = _ref.labelPlacement,
        rest = withLabel_objectWithoutProperties(_ref, ["disabled", "label", "labelPlacement"]);

    var isDisabled = disabled;

    if (label) {
      var isBefore = labelPlacement === 'before';
      var isAfter = labelPlacement === 'after' || !isBefore;
      return external_react_default.a.createElement(form_Label, {
        htmlFor: rest.id,
        disabled: isDisabled,
        className: rest.bulmaClass
      }, isBefore && label, external_react_default.a.createElement(Component, withLabel_extends({}, rest, {
        disabled: isDisabled
      })), isAfter && label);
    }

    return external_react_default.a.createElement(Component, withLabel_extends({}, rest, {
      disabled: isDisabled
    }));
  };
};

/* harmony default export */ var form_withLabel = (withLabel_withLabel);
// CONCATENATED MODULE: ./src/components/form/Checkbox.jsx
function Checkbox_extends() { Checkbox_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Checkbox_extends.apply(this, arguments); }





var Checkbox_Checkbox = function Checkbox(props) {
  return external_react_default.a.createElement(components_Element, Checkbox_extends({}, props, {
    type: "checkbox",
    tag: "input",
    bulmaClass: "checkbox"
  }));
};

/* harmony default export */ var form_Checkbox = (form_withLabel(Checkbox_Checkbox));
// CONCATENATED MODULE: ./src/components/form/Radio.jsx
function Radio_extends() { Radio_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Radio_extends.apply(this, arguments); }





var Radio_Radio = function Radio(props) {
  return external_react_default.a.createElement(components_Element, Radio_extends({}, props, {
    type: "radio",
    tag: "input",
    bulmaClass: "radio"
  }));
};

/* harmony default export */ var form_Radio = (form_withLabel(Radio_Radio));
// CONCATENATED MODULE: ./src/components/form/Input.jsx
function Input_extends() { Input_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Input_extends.apply(this, arguments); }




var Input_Input = function Input(props) {
  var extensions = {
    isRounded: {
      name: 'is-rounded'
    },
    isHovered: {
      name: 'is-hovered'
    },
    isFocused: {
      name: 'is-focused'
    },
    isStatic: {
      name: 'is-static'
    }
  };
  return external_react_default.a.createElement(components_Element, Input_extends({
    type: "text"
  }, props, {
    extensions: extensions,
    tag: "input",
    bulmaClass: "input"
  }));
};

/* harmony default export */ var form_Input = (Input_Input);
// CONCATENATED MODULE: ./src/components/form/Textarea.jsx
function Textarea_extends() { Textarea_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Textarea_extends.apply(this, arguments); }

function Textarea_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Textarea_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Textarea_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Textarea_Textarea = function Textarea(_ref) {
  var children = _ref.children,
      props = Textarea_objectWithoutProperties(_ref, ["children"]);

  var extensions = {
    isRounded: {
      name: 'is-rounded'
    },
    isHovered: {
      name: 'is-hovered'
    },
    isFocused: {
      name: 'is-focused'
    },
    isActive: {
      name: 'is-active'
    },
    hasFixedSize: {
      name: 'has-fixed-size'
    }
  };
  return external_react_default.a.createElement(components_Element, Textarea_extends({}, props, {
    extensions: extensions,
    tag: "textarea",
    bulmaClass: "textarea"
  }), children);
};

/* harmony default export */ var form_Textarea = (Textarea_Textarea);
// CONCATENATED MODULE: ./src/components/form/Select.jsx
function Select_extends() { Select_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Select_extends.apply(this, arguments); }

function Select_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Select_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Select_ownKeys(Object(source), true).forEach(function (key) { Select_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Select_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Select_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Select_slicedToArray(arr, i) { return Select_arrayWithHoles(arr) || Select_iterableToArrayLimit(arr, i) || Select_unsupportedIterableToArray(arr, i) || Select_nonIterableRest(); }

function Select_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Select_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Select_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Select_arrayLikeToArray(o, minLen); }

function Select_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Select_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Select_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Select_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Select_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Select_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Select_Select = function Select(_ref) {
  var children = _ref.children,
      props = Select_objectWithoutProperties(_ref, ["children"]);

  var extensions = {
    isMultiple: {
      name: 'is-multiple'
    },
    isRounded: {
      name: 'is-rounded'
    },
    isHovered: {
      name: 'is-hovered'
    },
    isFocused: {
      name: 'is-focused'
    },
    isLoading: {
      name: 'is-loading'
    }
  };
  var bulmaExtensions = useBulmaExtensions(extensions);

  var _useBulmaStyles = utils_useBulmaStyles(Select_objectSpread({}, props, {
    bulmaClass: 'select'
  }), bulmaExtensions),
      _useBulmaStyles2 = Select_slicedToArray(_useBulmaStyles, 2),
      bulma = _useBulmaStyles2[0],
      rest = _useBulmaStyles2[1];

  return external_react_default.a.createElement("div", {
    className: bulma
  }, external_react_default.a.createElement("select", Select_extends({}, rest, {
    multiple: props.isMultiple
  }), children));
};

/* harmony default export */ var form_Select = (Select_Select);
// CONCATENATED MODULE: ./src/components/form/Help.jsx
function Help_extends() { Help_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Help_extends.apply(this, arguments); }

function Help_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Help_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Help_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Help_Help = function Help(_ref) {
  var children = _ref.children,
      props = Help_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, Help_extends({
    tag: "p"
  }, props, {
    bulmaClass: "help"
  }), children);
};

/* harmony default export */ var form_Help = (Help_Help);
// CONCATENATED MODULE: ./src/components/form/index.js









// CONCATENATED MODULE: ./src/components/card/index.jsx
function card_extends() { card_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return card_extends.apply(this, arguments); }

function card_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = card_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function card_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var card_Card = function Card(_ref) {
  var children = _ref.children,
      props = card_objectWithoutProperties(_ref, ["children"]);

  return external_react_default.a.createElement(components_Element, card_extends({}, props, {
    tag: "div",
    bulmaClass: "card"
  }), children);
};
var card_CardContent = function CardContent(_ref2) {
  var children = _ref2.children,
      props = card_objectWithoutProperties(_ref2, ["children"]);

  return external_react_default.a.createElement(components_Element, card_extends({}, props, {
    bulmaClass: "card-content"
  }), children);
};
var card_CardHeader = function CardHeader(_ref3) {
  var children = _ref3.children,
      props = card_objectWithoutProperties(_ref3, ["children"]);

  var extensions = {
    isCentered: {
      name: 'is-centered'
    }
  };
  return external_react_default.a.createElement(components_Element, card_extends({}, props, {
    bulmaClass: "card-header",
    extensions: extensions
  }), children);
};
var card_CardFooter = function CardFooter(_ref4) {
  var children = _ref4.children,
      props = card_objectWithoutProperties(_ref4, ["children"]);

  return external_react_default.a.createElement(components_Element, card_extends({}, props, {
    bulmaClass: "card-footer"
  }), children);
};
var card_CardImage = function CardImage(_ref5) {
  var children = _ref5.children,
      props = card_objectWithoutProperties(_ref5, ["children"]);

  return external_react_default.a.createElement(components_Element, card_extends({}, props, {
    bulmaClass: "card-image"
  }), children);
};
var card_CardHeaderTitle = function CardHeaderTitle(_ref6) {
  var children = _ref6.children,
      props = card_objectWithoutProperties(_ref6, ["children"]);

  return external_react_default.a.createElement(components_Element, card_extends({
    tag: "p"
  }, props, {
    bulmaClass: "card-header-title"
  }), children);
};
var card_CardHeaderIcon = function CardHeaderIcon(_ref7) {
  var children = _ref7.children,
      props = card_objectWithoutProperties(_ref7, ["children"]);

  return external_react_default.a.createElement(components_Element, card_extends({
    tag: "span"
  }, props, {
    bulmaClass: "card-header-icon"
  }), children);
};
// CONCATENATED MODULE: ./src/components/index.js



























// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Content */__webpack_require__.d(__webpack_exports__, "Content", function() { return components_Content; });
/* concated harmony reexport Footer */__webpack_require__.d(__webpack_exports__, "Footer", function() { return components_Footer; });
/* concated harmony reexport Image */__webpack_require__.d(__webpack_exports__, "Image", function() { return components_Image; });
/* concated harmony reexport Table */__webpack_require__.d(__webpack_exports__, "Table", function() { return components_Table; });
/* concated harmony reexport Notification */__webpack_require__.d(__webpack_exports__, "Notification", function() { return components_Notification; });
/* concated harmony reexport Columns */__webpack_require__.d(__webpack_exports__, "Columns", function() { return Columns_Columns; });
/* concated harmony reexport Column */__webpack_require__.d(__webpack_exports__, "Column", function() { return Columns_Column; });
/* concated harmony reexport Message */__webpack_require__.d(__webpack_exports__, "Message", function() { return Messages_Message; });
/* concated harmony reexport MessageBody */__webpack_require__.d(__webpack_exports__, "MessageBody", function() { return Messages_MessageBody; });
/* concated harmony reexport MessageHeader */__webpack_require__.d(__webpack_exports__, "MessageHeader", function() { return Messages_MessageHeader; });
/* concated harmony reexport Panel */__webpack_require__.d(__webpack_exports__, "Panel", function() { return panel_Panel; });
/* concated harmony reexport PanelTabs */__webpack_require__.d(__webpack_exports__, "PanelTabs", function() { return panel_Tabs; });
/* concated harmony reexport PanelBlock */__webpack_require__.d(__webpack_exports__, "PanelBlock", function() { return panel_Block; });
/* concated harmony reexport PanelHeading */__webpack_require__.d(__webpack_exports__, "PanelHeading", function() { return panel_Heading; });
/* concated harmony reexport Menu */__webpack_require__.d(__webpack_exports__, "Menu", function() { return menu_Menu; });
/* concated harmony reexport MenuLabel */__webpack_require__.d(__webpack_exports__, "MenuLabel", function() { return menu_Label; });
/* concated harmony reexport MenuList */__webpack_require__.d(__webpack_exports__, "MenuList", function() { return menu_List; });
/* concated harmony reexport Section */__webpack_require__.d(__webpack_exports__, "Section", function() { return components_Section; });
/* concated harmony reexport Box */__webpack_require__.d(__webpack_exports__, "Box", function() { return components_Box; });
/* concated harmony reexport Container */__webpack_require__.d(__webpack_exports__, "Container", function() { return components_Container; });
/* concated harmony reexport Title */__webpack_require__.d(__webpack_exports__, "Title", function() { return Titles_Title; });
/* concated harmony reexport Subtitle */__webpack_require__.d(__webpack_exports__, "Subtitle", function() { return Titles_Subtitle; });
/* concated harmony reexport Element */__webpack_require__.d(__webpack_exports__, "Element", function() { return components_Element; });
/* concated harmony reexport Button */__webpack_require__.d(__webpack_exports__, "Button", function() { return components_Button; });
/* concated harmony reexport Close */__webpack_require__.d(__webpack_exports__, "Close", function() { return components_Close; });
/* concated harmony reexport Tag */__webpack_require__.d(__webpack_exports__, "Tag", function() { return components_Tag; });
/* concated harmony reexport Icon */__webpack_require__.d(__webpack_exports__, "Icon", function() { return components_Icon; });
/* concated harmony reexport Navbar */__webpack_require__.d(__webpack_exports__, "Navbar", function() { return navbar_Navbar; });
/* concated harmony reexport NavbarBurger */__webpack_require__.d(__webpack_exports__, "NavbarBurger", function() { return navbar_Burger; });
/* concated harmony reexport NavbarMenu */__webpack_require__.d(__webpack_exports__, "NavbarMenu", function() { return navbar_Menu; });
/* concated harmony reexport Media */__webpack_require__.d(__webpack_exports__, "Media", function() { return media_Media; });
/* concated harmony reexport MediaLeft */__webpack_require__.d(__webpack_exports__, "MediaLeft", function() { return media_Left; });
/* concated harmony reexport MediaRight */__webpack_require__.d(__webpack_exports__, "MediaRight", function() { return media_Right; });
/* concated harmony reexport MediaContent */__webpack_require__.d(__webpack_exports__, "MediaContent", function() { return media_Content; });
/* concated harmony reexport Level */__webpack_require__.d(__webpack_exports__, "Level", function() { return level_Level; });
/* concated harmony reexport LevelLeft */__webpack_require__.d(__webpack_exports__, "LevelLeft", function() { return level_Left; });
/* concated harmony reexport LevelRight */__webpack_require__.d(__webpack_exports__, "LevelRight", function() { return level_Right; });
/* concated harmony reexport LevelItem */__webpack_require__.d(__webpack_exports__, "LevelItem", function() { return level_Item; });
/* concated harmony reexport Breadcrumb */__webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return breadcrumbs_Breadcrumb; });
/* concated harmony reexport BreadcrumbItem */__webpack_require__.d(__webpack_exports__, "BreadcrumbItem", function() { return breadcrumbs_Item; });
/* concated harmony reexport Modal */__webpack_require__.d(__webpack_exports__, "Modal", function() { return modal_Modal; });
/* concated harmony reexport ModalClose */__webpack_require__.d(__webpack_exports__, "ModalClose", function() { return modal_Close; });
/* concated harmony reexport ModalBackground */__webpack_require__.d(__webpack_exports__, "ModalBackground", function() { return modal_ModalBackground; });
/* concated harmony reexport ModalContent */__webpack_require__.d(__webpack_exports__, "ModalContent", function() { return modal_ModalContent; });
/* concated harmony reexport ModalCard */__webpack_require__.d(__webpack_exports__, "ModalCard", function() { return modal_Card; });
/* concated harmony reexport ModalCardHead */__webpack_require__.d(__webpack_exports__, "ModalCardHead", function() { return modal_CardHead; });
/* concated harmony reexport ModalCardBody */__webpack_require__.d(__webpack_exports__, "ModalCardBody", function() { return modal_CardBody; });
/* concated harmony reexport ModalCardFoot */__webpack_require__.d(__webpack_exports__, "ModalCardFoot", function() { return modal_CardFoot; });
/* concated harmony reexport Hero */__webpack_require__.d(__webpack_exports__, "Hero", function() { return hero_Hero; });
/* concated harmony reexport HeroHead */__webpack_require__.d(__webpack_exports__, "HeroHead", function() { return hero_Head; });
/* concated harmony reexport HeroBody */__webpack_require__.d(__webpack_exports__, "HeroBody", function() { return hero_Body; });
/* concated harmony reexport HeroFoot */__webpack_require__.d(__webpack_exports__, "HeroFoot", function() { return hero_Foot; });
/* concated harmony reexport Select */__webpack_require__.d(__webpack_exports__, "Select", function() { return form_Select; });
/* concated harmony reexport Textarea */__webpack_require__.d(__webpack_exports__, "Textarea", function() { return form_Textarea; });
/* concated harmony reexport Label */__webpack_require__.d(__webpack_exports__, "Label", function() { return form_Label; });
/* concated harmony reexport Radio */__webpack_require__.d(__webpack_exports__, "Radio", function() { return form_Radio; });
/* concated harmony reexport Checkbox */__webpack_require__.d(__webpack_exports__, "Checkbox", function() { return form_Checkbox; });
/* concated harmony reexport Input */__webpack_require__.d(__webpack_exports__, "Input", function() { return form_Input; });
/* concated harmony reexport Field */__webpack_require__.d(__webpack_exports__, "Field", function() { return form_Field; });
/* concated harmony reexport Control */__webpack_require__.d(__webpack_exports__, "Control", function() { return form_Control; });
/* concated harmony reexport Help */__webpack_require__.d(__webpack_exports__, "Help", function() { return form_Help; });
/* concated harmony reexport Card */__webpack_require__.d(__webpack_exports__, "Card", function() { return card_Card; });
/* concated harmony reexport CardHeader */__webpack_require__.d(__webpack_exports__, "CardHeader", function() { return card_CardHeader; });
/* concated harmony reexport CardHeaderTitle */__webpack_require__.d(__webpack_exports__, "CardHeaderTitle", function() { return card_CardHeaderTitle; });
/* concated harmony reexport CardHeaderIcon */__webpack_require__.d(__webpack_exports__, "CardHeaderIcon", function() { return card_CardHeaderIcon; });
/* concated harmony reexport CardContent */__webpack_require__.d(__webpack_exports__, "CardContent", function() { return card_CardContent; });
/* concated harmony reexport CardImage */__webpack_require__.d(__webpack_exports__, "CardImage", function() { return card_CardImage; });
/* concated harmony reexport CardFooter */__webpack_require__.d(__webpack_exports__, "CardFooter", function() { return card_CardFooter; });
/* concated harmony reexport Delete */__webpack_require__.d(__webpack_exports__, "Delete", function() { return components_Close; });



/***/ })
/******/ ]);
//# sourceMappingURL=bulma-react.js.map