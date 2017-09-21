'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _always = require('ramda/src/always');

var _always2 = _interopRequireDefault(_always);

var _test = require('ramda/src/test');

var _test2 = _interopRequireDefault(_test);

var _ifElse = require('ramda/src/ifElse');

var _ifElse2 = _interopRequireDefault(_ifElse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// string -> string
exports.default = function (path) {
  return (0, _ifElse2.default)((0, _test2.default)(/^(http|https)/), (0, _always2.default)(path), (0, _always2.default)('' + (window.OTO_SAAS.SERVER_URL || '') + path))(path);
};