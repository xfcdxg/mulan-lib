'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('ramda/src/__');

var _2 = _interopRequireDefault(_);

var _multiply = require('ramda/src/multiply');

var _multiply2 = _interopRequireDefault(_multiply);

var _add = require('ramda/src/add');

var _add2 = _interopRequireDefault(_add);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

var _interval = require('./interval');

var _interval2 = _interopRequireDefault(_interval);

var _moment = require('./moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stamp = (0, _moment2.default)('x');

exports.default = (0, _curry2.default)(function (s, t, d) {
  return (0, _compose2.default)(stamp, (0, _add2.default)(stamp(d)), (0, _multiply2.default)(_2.default, (0, _interval2.default)(t)))(s);
});