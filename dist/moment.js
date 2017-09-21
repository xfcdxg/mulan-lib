'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _add = require('ramda/src/add');

var _add2 = _interopRequireDefault(_add);

var _gte = require('ramda/src/gte');

var _gte2 = _interopRequireDefault(_gte);

var _divide = require('ramda/src/divide');

var _divide2 = _interopRequireDefault(_divide);

var _multiply = require('ramda/src/multiply');

var _multiply2 = _interopRequireDefault(_multiply);

var _length = require('ramda/src/length');

var _length2 = _interopRequireDefault(_length);

var _replace = require('ramda/src/replace');

var _replace2 = _interopRequireDefault(_replace);

var _indexOf = require('ramda/src/indexOf');

var _indexOf2 = _interopRequireDefault(_indexOf);

var _ = require('ramda/src/__');

var _2 = _interopRequireDefault(_);

var _lt = require('ramda/src/lt');

var _lt2 = _interopRequireDefault(_lt);

var _both = require('ramda/src/both');

var _both2 = _interopRequireDefault(_both);

var _always = require('ramda/src/always');

var _always2 = _interopRequireDefault(_always);

var _equals = require('ramda/src/equals');

var _equals2 = _interopRequireDefault(_equals);

var _type = require('ramda/src/type');

var _type2 = _interopRequireDefault(_type);

var _ifElse = require('ramda/src/ifElse');

var _ifElse2 = _interopRequireDefault(_ifElse);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// string -> string -> [ string | number ]
exports.default = function (f) {
  return function () {
    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return (0, _compose2.default)(format(f), create)(s);
  };
};

// [ string | number ] -> Date


var create = function create(s) {
  return (0, _ifElse2.default)((0, _compose2.default)((0, _equals2.default)('Null'), _type2.default), (0, _always2.default)(new Date()), (0, _always2.default)(new Date((0, _ifElse2.default)((0, _both2.default)((0, _compose2.default)((0, _equals2.default)('String'), _type2.default), (0, _compose2.default)((0, _lt2.default)(_2.default, 0), (0, _indexOf2.default)('T'))), (0, _replace2.default)(/[-]/g, '/'), (0, _ifElse2.default)((0, _both2.default)((0, _compose2.default)((0, _equals2.default)('Number'), _type2.default), (0, _compose2.default)((0, _equals2.default)(10), _length2.default, toString)), (0, _multiply2.default)(1000), (0, _always2.default)(s)))(s))))(s);
};

// string -> date -> [ string | number ]
var format = function format(f) {
  return function (d) {
    switch (f) {
      case 'x':
        return d.getTime();
      case 'X':
        return (0, _divide2.default)(d.getTime(), 1000);
      case 'day':
        return d.getDay();
      case 'date':
        return d.getDate();
      default:
        return stringify(f)(d);
    }
  };
};

// number -> [ number | string ]
var zero = function zero(n) {
  return (0, _ifElse2.default)((0, _gte2.default)(_2.default, 10), (0, _always2.default)(n), (0, _always2.default)('0' + n))(n);
};

// string -> string -> string
var stringify = function stringify(f) {
  return function (d) {
    var year = d.getFullYear();
    var month = (0, _add2.default)(d.getMonth(), 1);
    var day = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    return (0, _ifElse2.default)((0, _compose2.default)((0, _equals2.default)('Null'), _type2.default), (0, _always2.default)(d), (0, _compose2.default)((0, _replace2.default)('YYYY', year), (0, _replace2.default)('MM', zero(month)), (0, _replace2.default)('DD', zero(day)), (0, _replace2.default)('HH', zero(hour)), (0, _replace2.default)('mm', zero(minute)), (0, _replace2.default)('ss', zero(second))))(f);
  };
};