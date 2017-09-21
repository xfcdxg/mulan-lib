'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multiply = require('ramda/src/multiply');

var _multiply2 = _interopRequireDefault(_multiply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// string -> number
exports.default = function (t) {
  var s = 1000;
  var m = (0, _multiply2.default)(s, 60);
  var h = (0, _multiply2.default)(m, 60);
  var d = (0, _multiply2.default)(h, 24);
  return { s: s, m: m, h: h, d: d }[t];
};