'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _always = require('ramda/src/always');

var _always2 = _interopRequireDefault(_always);

var _equals = require('ramda/src/equals');

var _equals2 = _interopRequireDefault(_equals);

var _ifElse = require('ramda/src/ifElse');

var _ifElse2 = _interopRequireDefault(_ifElse);

var _merge = require('ramda/src/merge');

var _merge2 = _interopRequireDefault(_merge);

var _clone = require('ramda/src/clone');

var _clone2 = _interopRequireDefault(_clone);

var _test = require('ramda/src/test');

var _test2 = _interopRequireDefault(_test);

var _isEmpty = require('ramda/src/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isNil = require('ramda/src/isNil');

var _isNil2 = _interopRequireDefault(_isNil);

var _or = require('ramda/src/or');

var _or2 = _interopRequireDefault(_or);

var _ = require('ramda/src/__');

var _2 = _interopRequireDefault(_);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _getStore = require('./get-store');

var _getStore2 = _interopRequireDefault(_getStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var sid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _getStore2.default)('customerUserId', 'session');
  return (0, _compose2.default)(mergeHeader((0, _or2.default)((0, _isNil2.default)(sid), (0, _isEmpty2.default)(sid)), { sid: 'no-sid' }, { sid: sid }, _2.default), mergeHeader((0, _test2.default)(/^(192.168|127.0|localhost)/, location.host), { appCode: 'blm' }, {}, _2.default))(headers);
};

var mergeHeader = function mergeHeader(condition) {
  var tr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var headers = arguments[3];
  return (0, _compose2.default)((0, _merge2.default)(headers, _2.default), _clone2.default)((0, _ifElse2.default)((0, _equals2.default)(true), (0, _always2.default)(tr), (0, _always2.default)(fr))(condition));
};