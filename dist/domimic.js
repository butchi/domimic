(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Test = {
  testtest: function testtest() {
    console.log('2');
  }
};

exports.default = Test;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Test = require('./Test');

var _Test2 = _interopRequireDefault(_Test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (ns) {
  var Domimic = function () {
    function Domimic() {
      _classCallCheck(this, Domimic);

      this.test1();
      this.test2();
    }

    _createClass(Domimic, [{
      key: 'test1',
      value: function test1() {
        console.log(1);
      }
    }, {
      key: 'test2',
      value: function test2() {
        _Test2.default.testtest();
      }
    }]);

    return Domimic;
  }();

  // export

  window.domimic = new Domimic();
})(window.licker);

},{"./Test":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvVGVzdC5qcyIsInNyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBQSxJQUFJLE9BQU87QUFDVCxnQ0FBVztBQUNULFlBQVEsR0FBUixDQUFZLEdBQVosRUFEUztHQURGO0NBQVA7O2tCQU1XOzs7Ozs7Ozs7Ozs7Ozs7QUNMZixDQUFDLFVBQUMsRUFBRCxFQUFRO01BQ0Q7QUFDSixhQURJLE9BQ0osR0FBYzs0QkFEVixTQUNVOztBQUNaLFdBQUssS0FBTCxHQURZO0FBRVosV0FBSyxLQUFMLEdBRlk7S0FBZDs7aUJBREk7OzhCQU1LO0FBQ1AsZ0JBQVEsR0FBUixDQUFZLENBQVosRUFETzs7Ozs4QkFJQTtBQUNQLHVCQUFLLFFBQUwsR0FETzs7OztXQVZMOzs7O0FBREM7QUFpQlAsU0FBTyxPQUFQLEdBQWlCLElBQUksT0FBSixFQUFqQixDQWpCTztDQUFSLENBQUQsQ0FrQkcsT0FBTyxNQUFQLENBbEJIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBUZXN0ID0ge1xuICB0ZXN0dGVzdCgpIHtcbiAgICBjb25zb2xlLmxvZygnMicpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3Q7IiwiaW1wb3J0IFRlc3QgZnJvbSAnLi9UZXN0J1xuKChucykgPT4ge1xuICBjbGFzcyBEb21pbWljIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMudGVzdDEoKTtcbiAgICAgIHRoaXMudGVzdDIoKTtcbiAgICB9XG5cbiAgICB0ZXN0MSAoKSB7XG4gICAgICBjb25zb2xlLmxvZygxKTtcbiAgICB9XG5cbiAgICB0ZXN0MiAoKSB7XG4gICAgICBUZXN0LnRlc3R0ZXN0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXhwb3J0XG4gIHdpbmRvdy5kb21pbWljID0gbmV3IERvbWltaWMoKTtcbn0pKHdpbmRvdy5saWNrZXIpO1xuIl19
