'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _type = require('ramda/src/type');

var _type2 = _interopRequireDefault(_type);

var _identity = require('ramda/src/identity');

var _identity2 = _interopRequireDefault(_identity);

var _replace = require('ramda/src/replace');

var _replace2 = _interopRequireDefault(_replace);

var _always = require('ramda/src/always');

var _always2 = _interopRequireDefault(_always);

var _props = require('ramda/src/props');

var _props2 = _interopRequireDefault(_props);

var _equals = require('ramda/src/equals');

var _equals2 = _interopRequireDefault(_equals);

var _head = require('ramda/src/head');

var _head2 = _interopRequireDefault(_head);

var _ifElse = require('ramda/src/ifElse');

var _ifElse2 = _interopRequireDefault(_ifElse);

var _ = require('ramda/src/__');

var _2 = _interopRequireDefault(_);

var _merge = require('ramda/src/merge');

var _merge2 = _interopRequireDefault(_merge);

var _clone = require('ramda/src/clone');

var _clone2 = _interopRequireDefault(_clone);

var _compose = require('ramda/src/compose');

var _compose2 = _interopRequireDefault(_compose);

var _stringifyQuery = require('./stringify-query');

var _stringifyQuery2 = _interopRequireDefault(_stringifyQuery);

var _stringifyJSON = require('./stringify-j-s-o-n');

var _stringifyJSON2 = _interopRequireDefault(_stringifyJSON);

var _responseType = require('./_/response-type');

var _responseType2 = _interopRequireDefault(_responseType);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _mockFetch = require('./_/mock-fetch');

var _mockFetch2 = _interopRequireDefault(_mockFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONTENT_TYPE = {
  JSON: 'application/json',
  FORM: 'application/x-www-form-urlencoded'
};

exports.default = function (url, data) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$method = _ref.method,
      method = _ref$method === undefined ? 'post' : _ref$method,
      _ref$headers = _ref.headers,
      headers = _ref$headers === undefined ? {} : _ref$headers,
      _ref$dataType = _ref.dataType,
      dataType = _ref$dataType === undefined ? 'json' : _ref$dataType;

  headers = (0, _compose2.default)((0, _merge2.default)({ 'Content-Type': CONTENT_TYPE.JSON }, _2.default), _clone2.default)(headers);

  var body = (0, _ifElse2.default)((0, _compose2.default)((0, _equals2.default)(CONTENT_TYPE.FORM), _head2.default, (0, _props2.default)(['Content-Type'])), (0, _compose2.default)(_always2.default, (0, _replace2.default)('?', ''), _stringifyQuery2.default)(data), (0, _always2.default)((0, _ifElse2.default)((0, _compose2.default)((0, _equals2.default)('String'), _type2.default), _identity2.default, (0, _compose2.default)(_always2.default, _stringifyJSON2.default)(data))(data)))(headers);

  return (0, _mockFetch2.default)()((0, _api2.default)(url), { method: method, headers: headers, body: body }).then(function (resp) {
    return resp[(0, _responseType2.default)(dataType)]();
  });
};