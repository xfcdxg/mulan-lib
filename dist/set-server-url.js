'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mockWindow = require('./_/mock-window');

var _mockWindow2 = _interopRequireDefault(_mockWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var win = (0, _mockWindow2.default)({ MULAN: {} });

// string -> string

exports.default = function (url) {
  return win.MULAN.SERVER_URL = url;
};