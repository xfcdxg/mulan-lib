'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _always = require('ramda/src/always');

var _always2 = _interopRequireDefault(_always);

var _divide = require('ramda/src/divide');

var _divide2 = _interopRequireDefault(_divide);

var _append = require('ramda/src/append');

var _append2 = _interopRequireDefault(_append);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _ = require('ramda/src/__');

var _2 = _interopRequireDefault(_);

var _gte = require('ramda/src/gte');

var _gte2 = _interopRequireDefault(_gte);

var _ifElse = require('ramda/src/ifElse');

var _ifElse2 = _interopRequireDefault(_ifElse);

var _interval = require('./interval');

var _interval2 = _interopRequireDefault(_interval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (st, et) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var p = function p(adj) {
    return function (dur) {
      r = (0, _ifElse2.default)((0, _gte2.default)(dur, _2.default), (0, _compose2.default)((0, _append2.default)(_2.default, r), parseInt, (0, _divide2.default)(dur)), (0, _always2.default)((0, _append2.default)(0, r)))(adj);

      return dur %= adj;
    };
  };

  (0, _compose2.default)(p((0, _interval2.default)('s')), p((0, _interval2.default)('m')), p((0, _interval2.default)('h')), p((0, _interval2.default)('d')))(Math.abs(et - st));

  return r;
};