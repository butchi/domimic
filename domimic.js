(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Ua = require('./Ua');

var _Ua2 = _interopRequireDefault(_Ua);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Domimic = function () {
  function Domimic() {
    _classCallCheck(this, Domimic);

    this.init();
  }

  _createClass(Domimic, [{
    key: 'init',
    value: function init() {
      var ua = new _Ua2.default();
      console.log(ua.os, ua.browser);
    }
  }]);

  return Domimic;
}();

exports.default = Domimic;

},{"./Ua":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ua = function Ua() {
  _classCallCheck(this, Ua);

  var ua = navigator.userAgent.toLowerCase();
  var os;
  var browser;

  if (false) {} else if (ua.includes('safari')) {
    browser = 'safari';
  } else if (ua.includes('firefox')) {
    browser = 'firefox';
  } else if (ua.includes('chrome')) {
    browser = 'chrome';
  }

  if (false) {} else if (ua.includes('mac os')) {
    os = 'mac';
  } else if (ua.includes('windows')) {
    os = 'windows';
  }

  this.os = os;
  this.browser = browser;
};

exports.default = Ua;

},{}],3:[function(require,module,exports){
'use strict';

var _Domimic = require('./Domimic');

var _Domimic2 = _interopRequireDefault(_Domimic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Domimic = _Domimic2.default;

new _Domimic2.default();

},{"./Domimic":1}]},{},[3]);
