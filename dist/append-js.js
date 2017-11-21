'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (src, cb) {
  if (typeof document === 'undefined') return;
  var script = document.createElement('script');
  script.src = src;
  script.onload = cb;
  document.body.appendChild(script);
};