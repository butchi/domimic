(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Domimic = function () {
  function Domimic() {
    _classCallCheck(this, Domimic);

    this.test1();
  }

  _createClass(Domimic, [{
    key: "test1",
    value: function test1() {
      console.log(1);
    }
  }]);

  return Domimic;
}();

exports.default = Domimic;

},{}],2:[function(require,module,exports){
'use strict';

var _Domimic = require('./Domimic');

var _Domimic2 = _interopRequireDefault(_Domimic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Domimic = _Domimic2.default;

new _Domimic2.default();

},{"./Domimic":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvRG9taW1pYy5qcyIsInNyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQ0FNO0FBQ0osV0FESSxPQUNKLEdBQWM7MEJBRFYsU0FDVTs7QUFDWixTQUFLLEtBQUwsR0FEWTtHQUFkOztlQURJOzs0QkFLSztBQUNQLGNBQVEsR0FBUixDQUFZLENBQVosRUFETzs7OztTQUxMOzs7a0JBVVM7Ozs7Ozs7Ozs7O0FDVGYsT0FBTyxPQUFQOztBQUVBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIERvbWltaWMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRlc3QxKCk7XG4gIH1cblxuICB0ZXN0MSAoKSB7XG4gICAgY29uc29sZS5sb2coMSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9taW1pYzsiLCJpbXBvcnQgRG9taW1pYyBmcm9tICcuL0RvbWltaWMnO1xud2luZG93LkRvbWltaWMgPSBEb21pbWljO1xuXG5uZXcgRG9taW1pYygpOyJdfQ==
