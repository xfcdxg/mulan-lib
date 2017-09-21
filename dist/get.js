'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _stringifyQuery = require('./stringify-query');

var _stringifyQuery2 = _interopRequireDefault(_stringifyQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return fetch((0, _api2.default)('' + url + (0, _stringifyQuery2.default)(data)), { headers: headers }).then(function (resp) {
    return resp.json();
  });
};