'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var initial = ['周日', '周一', '周二', '周三', '周四', '周五', '周六', '周日'];
// number -> arr -> string

exports.default = function () {
    var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;
    return function (d) {
        return w[d];
    };
};