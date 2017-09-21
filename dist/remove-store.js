'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('ramda/src/curry');

var _curry2 = _interopRequireDefault(_curry);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (k) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'local';
  return remove(k, t);
};

var remove = (0, _curry2.default)(function (k, t) {
  return _store2.default[t].removeItem(k);
});