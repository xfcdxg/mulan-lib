'use strict';

Object.defineProperty(exports, "__esModule", {
       value: true
});

var _map = require('ramda/src/map');

var _map2 = _interopRequireDefault(_map);

var _mapObjIndexed = require('ramda/src/mapObjIndexed');

var _mapObjIndexed2 = _interopRequireDefault(_mapObjIndexed);

var _join = require('ramda/src/join');

var _join2 = _interopRequireDefault(_join);

var _concat = require('ramda/src/concat');

var _concat2 = _interopRequireDefault(_concat);

var _values = require('ramda/src/values');

var _values2 = _interopRequireDefault(_values);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _encode = require('./encode');

var _encode2 = _interopRequireDefault(_encode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// object -> querystring
exports.default = function (o) {
       return (0, _compose2.default)((0, _concat2.default)('?'), (0, _join2.default)('&'), _values2.default, (0, _mapObjIndexed2.default)(function (value, key) {
              return (0, _compose2.default)((0, _join2.default)('='), (0, _map2.default)(_encode2.default))([key, value]);
       }))(o);
};