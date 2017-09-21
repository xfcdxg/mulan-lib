'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//将数字转化成汉字，支持范围：1-999
var numToChinese = function numToChinese(s) {
  s = String(s);
  var arr = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  if (s.length === 1) return arr[s];
  if (s.length === 2) {
    var g = arr[s.charAt(1)];
    if (s.charAt(1) === '0') g = '';
    if (s.charAt(0) === '1') return '\u5341' + g;
    if (s.charAt(0) >= '1') return arr[s.charAt(0)] + '\u5341' + g;
  }
  if (s.length === 3) {
    var sh = arr[s.charAt(1)];
    var _g = arr[s.charAt(2)];
    if (s.charAt(1) === '0') sh = '';
    if (s.charAt(2) === '0') _g = '';
    if (sh === '' && _g === '') return arr[s.charAt(0)] + '\u767E';
    if (sh === '') return arr[s.charAt(0)] + '\u767E\u96F6' + _g;
    if (_g === '') return arr[s.charAt(0)] + '\u767E' + arr[s.charAt(1)] + '\u5341';
    return arr[s.charAt(0)] + '\u767E' + arr[s.charAt(1)] + '\u5341' + _g;
  }
};

exports.default = numToChinese;