'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

var _equals = require('ramda/src/equals');

var _equals2 = _interopRequireDefault(_equals);

var _type = require('ramda/src/type');

var _type2 = _interopRequireDefault(_type);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _ifElse = require('ramda/src/ifElse');

var _ifElse2 = _interopRequireDefault(_ifElse);

var _stringifyJSON = require('./stringify-j-s-o-n');

var _stringifyJSON2 = _interopRequireDefault(_stringifyJSON);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default =
// string -> string -> string | object -> empty
function (k, v) {
  var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'local';
  return (0, _ifElse2.default)((0, _compose2.default)((0, _equals2.default)('String'), _type2.default), set(k, t), oset(k, t))(v);
};

var set = (0, _curry2.default)(function (k, t, v) {
  return _store2.default[t].setItem(k, v);
});

var oset = (0, _curry2.default)(function (k, t, o) {
  return set(k, t, (0, _stringifyJSON2.default)(o));
});