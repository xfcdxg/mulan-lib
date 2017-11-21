'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _always = require('ramda/src/always');

var _always2 = _interopRequireDefault(_always);

var _test = require('ramda/src/test');

var _test2 = _interopRequireDefault(_test);

var _identity = require('ramda/src/identity');

var _identity2 = _interopRequireDefault(_identity);

var _ifElse = require('ramda/src/ifElse');

var _ifElse2 = _interopRequireDefault(_ifElse);

var _mockWindow = require('./_/mock-window');

var _mockWindow2 = _interopRequireDefault(_mockWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var win = (0, _mockWindow2.default)({ MULAN: {} });

// string -> string

exports.default = function (path) {
  return (0, _ifElse2.default)((0, _test2.default)(/^(http|https)/), _identity2.default, (0, _always2.default)('' + (win.MULAN.SERVER_URL || '') + path))(path);
};