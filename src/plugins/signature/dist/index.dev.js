"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./index.css");

var _typed = _interopRequireDefault(require("typed.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 个性签名在侧边栏构建
var _window$opts$signatur = window.opts.signature,
    enable = _window$opts$signatur.enable,
    contents = _window$opts$signatur.contents;

function build() {
  var signature = "<div class='custom-signature'><span></span></div>";
  $('#sidebar_news').append(signature);
}

function typed() {
  new _typed["default"]('.custom-signature span', {
    strings: contents,
    typeSpeed: 70
  });
}

function signature() {
  if (!enable) return;
  build();
  typed();
}

var _default = signature;
exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
