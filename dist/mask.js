'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _add = require('ramda/src/add');

var _add2 = _interopRequireDefault(_add);

var _slice = require('ramda/src/slice');

var _slice2 = _interopRequireDefault(_slice);

var _lt = require('ramda/src/lt');

var _lt2 = _interopRequireDefault(_lt);

var _length = require('ramda/src/length');

var _length2 = _interopRequireDefault(_length);

var _subtract = require('ramda/src/subtract');

var _subtract2 = _interopRequireDefault(_subtract);

var _type = require('ramda/src/type');

var _type2 = _interopRequireDefault(_type);

var _equals = require('ramda/src/equals');

var _equals2 = _interopRequireDefault(_equals);

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curry2.default)(function (idx, len, str) {
  var code = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '*';

  if ((0, _equals2.default)('String', (0, _type2.default)(len))) {
    str = len;
    len = 0;
  }
  // 剩余长度
  var l = (0, _subtract2.default)((0, _length2.default)(str), idx);

  len = len > l ? l : len;

  if ((0, _lt2.default)(len, 0)) {
    var x = Math.abs(len);
    len = idx === 0 ? x : idx < x ? idx : x;
    idx = idx === 0 ? (0, _length2.default)(str) - x : idx > x ? idx - x - 1 : 0;
  }

  // const s = str.substr(0, idx)
  var s = (0, _slice2.default)(0, idx, str);
  var c = function () {
    var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    while (x++ < len) {
      m += code;
    }return m;
  }();
  // const e = str.substr(idx + len)
  var e = (0, _slice2.default)((0, _add2.default)(idx, len), (0, _length2.default)(str), str);

  return '' + s + c + e;
});