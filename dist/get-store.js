'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

var _parseJSON = require('./parse-j-s-o-n');

var _parseJSON2 = _interopRequireDefault(_parseJSON);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default =
// string -> string -> string | object
function (k) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'local';

  try {
    var r = oget(k, t);
    if (typeof r === 'number' && (r + '').length > 0) {
      return get(k, t);
    }
    return r;
  } catch (err) {
    // console.log(err)
    return get(k, t);
  }
};

var get = (0, _curry2.default)(function (k, t) {
  return _store2.default[t].getItem(k);
});

var oget = (0, _curry2.default)(function (k, t) {
  return (0, _parseJSON2.default)(get(k, t));
});