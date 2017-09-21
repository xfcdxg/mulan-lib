'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _length = require('ramda/src/length');

var _length2 = _interopRequireDefault(_length);

var _subtract = require('ramda/src/subtract');

var _subtract2 = _interopRequireDefault(_subtract);

var _type = require('ramda/src/type');

var _type2 = _interopRequireDefault(_type);

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _curry2.default)(function (idx, len, str) {
  var code = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '*';

  if (equals('String', (0, _type2.default)(len))) {
    str = len;
    len = 0;
  }
  //剩余长度
  var l = (0, _subtract2.default)((0, _length2.default)(str), idx);

  len = len > l ? l : len;

  if (lt(len, 0)) {
    var x = Math.abs(len);
    len = 0 === idx ? x : idx < x ? idx : x;
    idx = 0 === idx ? (0, _length2.default)(str) - x : idx > x ? idx - x - 1 : 0;
  }

  var s = str.substr(0, idx);
  var c = function () {
    var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    while (c++ < len) {
      m += code;
    }return m;
  }();
  var e = str.substr(idx + len);

  return '' + s + c + e;
});