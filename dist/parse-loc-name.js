"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _replace = require("ramda/src/replace");

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// string -> string
exports.default = function (name) {
  return (0, _replace2.default)(/省|市|区|县|特别行政区/g, "", name);
};