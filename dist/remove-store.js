"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _curry=require("ramda/src/curry"),_curry2=_interopRequireDefault(_curry),_store=require("./store"),_store2=_interopRequireDefault(_store);exports.default=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"local";return remove(e,r)};var remove=(0,_curry2.default)(function(e,r){return _store2.default[r].removeItem(e)});