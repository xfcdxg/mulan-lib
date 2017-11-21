'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lt = require('ramda/src/lt');

var _lt2 = _interopRequireDefault(_lt);

var _toString = require('ramda/src/toString');

var _toString2 = _interopRequireDefault(_toString);

var _length = require('ramda/src/length');

var _length2 = _interopRequireDefault(_length);

var _equals = require('ramda/src/equals');

var _equals2 = _interopRequireDefault(_equals);

var _type = require('ramda/src/type');

var _type2 = _interopRequireDefault(_type);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _and = require('ramda/src/and');

var _and2 = _interopRequireDefault(_and);

var _parseJSON = require('./parse-j-s-o-n');

var _parseJSON2 = _interopRequireDefault(_parseJSON);

var _store = require('./_/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = function get(k, t) {
  return _store2.default[t]().getItem(k);
};
var oget = function oget(k, t) {
  return (0, _parseJSON2.default)(get(k, t));
};

exports.default =
// string -> string -> string | object
function (k) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'local';

  try {
    var r = oget(k, t);

    if ((0, _and2.default)((0, _compose2.default)((0, _equals2.default)('Number'), _type2.default)(r), (0, _compose2.default)((0, _lt2.default)(0), _length2.default, _toString2.default)(r))) {
      return get(k, t);
    }
    return r;
  } catch (err) {
    return get(k, t);
  }
};