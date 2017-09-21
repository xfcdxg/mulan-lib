'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (src, cb) {
  var script = document.createElement('script');
  script.src = src;
  script.onload = cb;
  document.body.appendChild(script);
};