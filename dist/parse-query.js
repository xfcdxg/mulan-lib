'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _always = require('ramda/src/always');

var _always2 = _interopRequireDefault(_always);

var _drop = require('ramda/src/drop');

var _drop2 = _interopRequireDefault(_drop);

var _indexOf = require('ramda/src/indexOf');

var _indexOf2 = _interopRequireDefault(_indexOf);

var _gte = require('ramda/src/gte');

var _gte2 = _interopRequireDefault(_gte);

var _last = require('ramda/src/last');

var _last2 = _interopRequireDefault(_last);

var _head = require('ramda/src/head');

var _head2 = _interopRequireDefault(_head);

var _assoc = require('ramda/src/assoc');

var _assoc2 = _interopRequireDefault(_assoc);

var _split = require('ramda/src/split');

var _split2 = _interopRequireDefault(_split);

var _map = require('ramda/src/map');

var _map2 = _interopRequireDefault(_map);

var _reduce = require('ramda/src/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _decode = require('./decode');

var _decode2 = _interopRequireDefault(_decode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// querystring -> object
exports.default = function (s) {
  return (0, _compose2.default)((0, _reduce2.default)(function (query, param) {
    var arr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _compose2.default)((0, _map2.default)(_decode2.default), (0, _split2.default)('='))(param);
    return (0, _assoc2.default)((0, _head2.default)(arr), (0, _last2.default)(arr), query);
  }, {}), (0, _split2.default)('&'), (0, _gte2.default)((0, _indexOf2.default)('?', s), 0) ? (0, _drop2.default)(1) : (0, _always2.default)(s))(s);
};