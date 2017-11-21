'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _equals = require('ramda/src/equals');

var _equals2 = _interopRequireDefault(_equals);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (s) {
  if ((0, _equals2.default)('undefined', typeof encodeURIComponent === 'undefined' ? 'undefined' : _typeof(encodeURIComponent))) {
    return require('querystring').escape(s);
  }
  return encodeURIComponent(s);
};