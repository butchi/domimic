(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

},{"./Domimic":1}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvRG9taW1pYy5qcyIsInNyYy9VYS5qcyIsInNyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztJQ0VNO0FBQ0osV0FESSxPQUNKLEdBQWM7MEJBRFYsU0FDVTs7QUFDWixTQUFLLElBQUwsR0FEWTtHQUFkOztlQURJOzsyQkFLSTtBQUNOLFVBQUksS0FBSyxrQkFBTCxDQURFO0FBRU4sY0FBUSxHQUFSLENBQVksR0FBRyxFQUFILEVBQU8sR0FBRyxPQUFILENBQW5CLENBRk07Ozs7U0FMSjs7O2tCQVdTOzs7Ozs7Ozs7OztJQ2JULEtBQ0osU0FESSxFQUNKLEdBQWM7d0JBRFYsSUFDVTs7QUFDWixNQUFJLEtBQUssVUFBVSxTQUFWLENBQW9CLFdBQXBCLEVBQUwsQ0FEUTtBQUVaLE1BQUksRUFBSixDQUZZO0FBR1osTUFBSSxPQUFKLENBSFk7O0FBS1osTUFBRyxLQUFILEVBQVUsRUFBVixNQUNPLElBQUcsR0FBRyxRQUFILENBQVksUUFBWixDQUFILEVBQTBCO0FBQy9CLGNBQVUsUUFBVixDQUQrQjtHQUExQixNQUVBLElBQUcsR0FBRyxRQUFILENBQVksU0FBWixDQUFILEVBQTJCO0FBQ2hDLGNBQVUsU0FBVixDQURnQztHQUEzQixNQUVBLElBQUcsR0FBRyxRQUFILENBQVksUUFBWixDQUFILEVBQTBCO0FBQy9CLGNBQVUsUUFBVixDQUQrQjtHQUExQjs7QUFJUCxNQUFHLEtBQUgsRUFBVSxFQUFWLE1BQ08sSUFBRyxHQUFHLFFBQUgsQ0FBWSxRQUFaLENBQUgsRUFBMEI7QUFDL0IsU0FBSyxLQUFMLENBRCtCO0dBQTFCLE1BRUEsSUFBRyxHQUFHLFFBQUgsQ0FBWSxTQUFaLENBQUgsRUFBMkI7QUFDaEMsU0FBSyxTQUFMLENBRGdDO0dBQTNCOztBQUlQLE9BQUssRUFBTCxHQUFVLEVBQVYsQ0FyQlk7QUFzQlosT0FBSyxPQUFMLEdBQWUsT0FBZixDQXRCWTtDQUFkOztrQkEwQmE7Ozs7Ozs7Ozs7O0FDMUJmLE9BQU8sT0FBUDs7QUFFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVWEgZnJvbSAnLi9VYSc7XG5cbmNsYXNzIERvbWltaWMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQgKCkge1xuICAgIHZhciB1YSA9IG5ldyBVYSgpO1xuICAgIGNvbnNvbGUubG9nKHVhLm9zLCB1YS5icm93c2VyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb21pbWljOyIsImNsYXNzIFVhIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBvcztcbiAgICB2YXIgYnJvd3NlcjtcblxuICAgIGlmKGZhbHNlKSB7XG4gICAgfSBlbHNlIGlmKHVhLmluY2x1ZGVzKCdzYWZhcmknKSkge1xuICAgICAgYnJvd3NlciA9ICdzYWZhcmknO1xuICAgIH0gZWxzZSBpZih1YS5pbmNsdWRlcygnZmlyZWZveCcpKSB7XG4gICAgICBicm93c2VyID0gJ2ZpcmVmb3gnO1xuICAgIH0gZWxzZSBpZih1YS5pbmNsdWRlcygnY2hyb21lJykpIHtcbiAgICAgIGJyb3dzZXIgPSAnY2hyb21lJztcbiAgICB9XG5cbiAgICBpZihmYWxzZSkge1xuICAgIH0gZWxzZSBpZih1YS5pbmNsdWRlcygnbWFjIG9zJykpIHtcbiAgICAgIG9zID0gJ21hYyc7XG4gICAgfSBlbHNlIGlmKHVhLmluY2x1ZGVzKCd3aW5kb3dzJykpIHtcbiAgICAgIG9zID0gJ3dpbmRvd3MnO1xuICAgIH1cblxuICAgIHRoaXMub3MgPSBvcztcbiAgICB0aGlzLmJyb3dzZXIgPSBicm93c2VyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVhOyIsImltcG9ydCBEb21pbWljIGZyb20gJy4vRG9taW1pYyc7XG53aW5kb3cuRG9taW1pYyA9IERvbWltaWM7XG5cbm5ldyBEb21pbWljKCk7Il19
