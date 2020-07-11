"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./index.css");

var _typical = require("@camwiegert/typical");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _window$opts$signatur = window.opts.signature,
    enable = _window$opts$signatur.enable,
    contents = _window$opts$signatur.contents,
    isLoop = _window$opts$signatur.isLoop;

function signature() {
  if (!enable) return;
  var signature = "<div class='custom-signature'></div>";
  $('#sidebar_news').append(signature); // 在每一个元素后插入延迟的毫秒数

  var arr = [];

  for (var i = 0; i < contents.length; i++) {
    arr.push(contents.slice(i, i + 1));
  }

  arr.forEach(function (item) {
    item.push(2000);
  });
  arr = [].concat.apply([], arr);
  var element = document.querySelector('.custom-signature');
  isLoop ? _typical.type.apply(void 0, [element].concat(_toConsumableArray(arr), [_typical.type])) : _typical.type.apply(void 0, [element].concat(_toConsumableArray(arr))); // const signature = `<div class='custom-signature'><span></span></div>`
  // new Typed('.custom-signature span', {
  //     strings: contents,
  //     typeSpeed: 70,
  // })
}

var _default = signature;
exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
