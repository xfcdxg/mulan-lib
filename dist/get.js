'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _stringifyQuery = require('./stringify-query');

var _stringifyQuery2 = _interopRequireDefault(_stringifyQuery);

var _responseType = require('./_/response-type');

var _responseType2 = _interopRequireDefault(_responseType);

var _mockFetch = require('./_/mock-fetch');

var _mockFetch2 = _interopRequireDefault(_mockFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$headers = _ref.headers,
      headers = _ref$headers === undefined ? {} : _ref$headers,
      _ref$dataType = _ref.dataType,
      dataType = _ref$dataType === undefined ? 'json' : _ref$dataType;

  return (0, _mockFetch2.default)()((0, _api2.default)('' + url + (data && (0, _stringifyQuery2.default)(data))), { headers: headers }).then(function (resp) {
    return resp[(0, _responseType2.default)(dataType)]();
  });
};