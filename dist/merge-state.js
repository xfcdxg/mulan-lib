'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dissoc = require('ramda/src/dissoc');

var _dissoc2 = _interopRequireDefault(_dissoc);

var _merge = require('ramda/src/merge');

var _merge2 = _interopRequireDefault(_merge);

var _clone = require('ramda/src/clone');

var _clone2 = _interopRequireDefault(_clone);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// (object, object) => object
exports.default = function (state, action) {
  return (0, _compose2.default)((0, _merge2.default)(state), (0, _dissoc2.default)('type'), _clone2.default)(action);
};