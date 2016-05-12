(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

        _this.state = {
            FirstDate: "5/10/2016",
            EndDate: "5/31/2016",
            daysToAdd: 0,
            progressBarVlaue: 0,
            errorMsg: false
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.startTime(this.state.FirstDate, this.state.EndDate);
        }
    }, {
        key: 'ChangeDate',
        value: function ChangeDate(daysToAdd) {
            console.log('prop', daysToAdd);
            this.setState({ daysToAdd: daysToAdd });
        }
    }, {
        key: 'startTime',
        value: function startTime(FirstDate, EndDate) {
            var monthFirstDate = new Date(FirstDate),
                date = new Date();
            if (this.state.daysToAdd != 0) date.setDate(date.getDate() + Number(this.state.daysToAdd.daysToAdd));

            var monthEndDate = new Date(EndDate),
                timeDiff = Math.abs(monthEndDate.getTime() - date.getTime()) / 1000,
                timeDiffAll = Math.abs(monthEndDate.getTime() - monthFirstDate.getTime()) / 1000,
                progressBarVlaue = timeDiff / timeDiffAll * 100;

            progressBarVlaue = Math.floor(100 - progressBarVlaue);

            if (this.state.progressBarVlaue < 0) {
                this.state.errorMsg = true;
            } else this.state.errorMsg = false;

            this.setState({ progressBarVlaue: progressBarVlaue });

            var t = setTimeout(function () {
                this.startTime(FirstDate, EndDate);
            }.bind(this), 1000);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var divWidth = { width: this.state.progressBarVlaue + '%' };

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Countdown with ReactJS'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'progressBarWrapper' },
                    _react2.default.createElement(
                        'div',
                        { className: 'progressBar', style: divWidth },
                        this.state.progressBarVlaue + '%'
                    )
                ),
                _react2.default.createElement(_input2.default, { changeDate: function changeDate(daysToAdd) {
                        return _this2.ChangeDate({ daysToAdd: daysToAdd });
                    } }),
                this.state.errorMsg ? _react2.default.createElement(
                    'span',
                    { className: 'errorMsg' },
                    'Invalid number'
                ) : null
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

},{"./input":3,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('countdown'));

},{"./app":1,"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input(props) {
        _classCallCheck(this, Input);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));
    }

    _createClass(Input, [{
        key: "onInputChange",
        value: function onInputChange(term) {
            this.props.changeDate(term);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "wrap" },
                _react2.default.createElement("input", { type: "number",
                    placeholder: "Days to add until the deadline",
                    onChange: function onChange(event) {
                        return _this2.onInputChange(event.target.value);
                    } })
            );
        }
    }]);

    return Input;
}(_react.Component);

exports.default = Input;

},{"react":"react"}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyIsImFwcFxcaW5kZXguanMiLCJhcHBcXGlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQixHOzs7QUFDakIsaUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDJGQUNULEtBRFM7O0FBRWYsY0FBSyxLQUFMLEdBQWE7QUFDVCx1QkFBVyxXQURGO0FBRVQscUJBQVMsV0FGQTtBQUdULHVCQUFXLENBSEY7QUFJVCw4QkFBa0IsQ0FKVDtBQUtULHNCQUFVO0FBTEQsU0FBYjtBQUZlO0FBU2xCOzs7OzRDQUVtQjtBQUN0QixpQkFBSyxTQUFMLENBQWUsS0FBSyxLQUFMLENBQVcsU0FBMUIsRUFBcUMsS0FBSyxLQUFMLENBQVcsT0FBaEQ7QUFDRzs7O21DQUVVLFMsRUFBVTtBQUNwQixvQkFBUSxHQUFSLENBQVksTUFBWixFQUFvQixTQUFwQjtBQUNBLGlCQUFLLFFBQUwsQ0FBYyxFQUFDLG9CQUFELEVBQWQ7QUFDQTs7O2tDQUlTLFMsRUFBVyxPLEVBQVM7QUFDaEMsZ0JBQUksaUJBQWlCLElBQUksSUFBSixDQUFTLFNBQVQsQ0FBckI7Z0JBQ0MsT0FBTyxJQUFJLElBQUosRUFEUjtBQUVBLGdCQUFHLEtBQUssS0FBTCxDQUFXLFNBQVgsSUFBd0IsQ0FBM0IsRUFDQyxLQUFLLE9BQUwsQ0FBYSxLQUFLLE9BQUwsS0FBaUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLFNBQTVCLENBQTlCOztBQUVELGdCQUFJLGVBQWUsSUFBSSxJQUFKLENBQVMsT0FBVCxDQUFuQjtnQkFDQyxXQUFZLEtBQUssR0FBTCxDQUFTLGFBQWEsT0FBYixLQUF5QixLQUFLLE9BQUwsRUFBbEMsQ0FBRCxHQUFvRCxJQURoRTtnQkFFQyxjQUFlLEtBQUssR0FBTCxDQUFTLGFBQWEsT0FBYixLQUF5QixlQUFlLE9BQWYsRUFBbEMsQ0FBRCxHQUE4RCxJQUY3RTtnQkFHQyxtQkFBb0IsV0FBUyxXQUFWLEdBQXVCLEdBSDNDOztBQUtBLCtCQUFtQixLQUFLLEtBQUwsQ0FBVyxNQUFNLGdCQUFqQixDQUFuQjs7QUFFQSxnQkFBRyxLQUFLLEtBQUwsQ0FBVyxnQkFBWCxHQUE4QixDQUFqQyxFQUFtQztBQUNsQyxxQkFBSyxLQUFMLENBQVcsUUFBWCxHQUFzQixJQUF0QjtBQUNBLGFBRkQsTUFJQyxLQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCLEtBQXRCOztBQUVELGlCQUFLLFFBQUwsQ0FBYyxFQUFDLGtDQUFELEVBQWQ7O0FBRUEsZ0JBQUksSUFBSSxXQUFXLFlBQVU7QUFBQyxxQkFBSyxTQUFMLENBQWUsU0FBZixFQUEwQixPQUExQjtBQUFvQyxhQUEvQyxDQUFnRCxJQUFoRCxDQUFxRCxJQUFyRCxDQUFYLEVBQXVFLElBQXZFLENBQVI7QUFDQTs7O2lDQUVXO0FBQUE7O0FBQ1IsZ0JBQUksV0FBVyxFQUFFLE9BQU8sS0FBSyxLQUFMLENBQVcsZ0JBQVgsR0FBOEIsR0FBdkMsRUFBZjs7QUFFRyxtQkFFSTtBQUFBO2dCQUFBLEVBQUssV0FBVSxXQUFmO2dCQUNJO0FBQUE7b0JBQUE7b0JBQUE7QUFBQSxpQkFESjtnQkFFSTtBQUFBO29CQUFBLEVBQUssV0FBVSxvQkFBZjtvQkFDQztBQUFBO3dCQUFBLEVBQUssV0FBVSxhQUFmLEVBQTZCLE9BQU8sUUFBcEM7d0JBQWdELEtBQUssS0FBTCxDQUFXLGdCQUFYLEdBQThCO0FBQTlFO0FBREQsaUJBRko7Z0JBS0ksaURBQU8sWUFBWTtBQUFBLCtCQUFhLE9BQUssVUFBTCxDQUFnQixFQUFDLG9CQUFELEVBQWhCLENBQWI7QUFBQSxxQkFBbkIsR0FMSjtnQkFNTSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEdBQXNCO0FBQUE7b0JBQUEsRUFBTSxXQUFVLFVBQWhCO29CQUFBO0FBQUEsaUJBQXRCLEdBQXlFO0FBTi9FLGFBRko7QUFZSDs7Ozs7O2tCQTlEZ0IsRzs7Ozs7QUNKckI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxtQkFBUyxNQUFULENBQWdCLGtEQUFoQixFQUF5QixTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBekI7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7OztJQUVNLEs7OztBQUNGLG1CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3RkFDVCxLQURTO0FBRWxCOzs7O3NDQUVhLEksRUFBTTtBQUNoQixpQkFBSyxLQUFMLENBQVcsVUFBWCxDQUFzQixJQUF0QjtBQUNIOzs7aUNBRVE7QUFBQTs7QUFDTCxtQkFDSTtBQUFBO2dCQUFBLEVBQUssV0FBVSxNQUFmO2dCQUNJLHlDQUFPLE1BQUssUUFBWjtBQUNPLGlDQUFZLGdDQURuQjtBQUVPLDhCQUFXO0FBQUEsK0JBQVMsT0FBSyxhQUFMLENBQW1CLE1BQU0sTUFBTixDQUFhLEtBQWhDLENBQVQ7QUFBQSxxQkFGbEI7QUFESixhQURKO0FBT0g7Ozs7OztrQkFJVSxLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgRmlyc3REYXRlOiBcIjUvMTAvMjAxNlwiLFxyXG4gICAgICAgICAgICBFbmREYXRlOiBcIjUvMzEvMjAxNlwiLFxyXG4gICAgICAgICAgICBkYXlzVG9BZGQ6IDAsXHJcbiAgICAgICAgICAgIHByb2dyZXNzQmFyVmxhdWU6IDAsXHJcbiAgICAgICAgICAgIGVycm9yTXNnOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSh0aGlzLnN0YXRlLkZpcnN0RGF0ZSwgdGhpcy5zdGF0ZS5FbmREYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBDaGFuZ2VEYXRlKGRheXNUb0FkZCl7XHJcbiAgICBcdGNvbnNvbGUubG9nKCdwcm9wJywgZGF5c1RvQWRkKTtcclxuICAgIFx0dGhpcy5zZXRTdGF0ZSh7ZGF5c1RvQWRkfSk7XHRcdFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhcnRUaW1lKEZpcnN0RGF0ZSwgRW5kRGF0ZSkge1xyXG5cdFx0dmFyIG1vbnRoRmlyc3REYXRlID0gbmV3IERhdGUoRmlyc3REYXRlKSxcclxuXHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRpZih0aGlzLnN0YXRlLmRheXNUb0FkZCAhPSAwKVxyXG5cdFx0XHRkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBOdW1iZXIodGhpcy5zdGF0ZS5kYXlzVG9BZGQuZGF5c1RvQWRkKSk7IFxyXG5cclxuXHRcdHZhciBtb250aEVuZERhdGUgPSBuZXcgRGF0ZShFbmREYXRlKSxcclxuXHRcdFx0dGltZURpZmYgPSAoTWF0aC5hYnMobW9udGhFbmREYXRlLmdldFRpbWUoKSAtIGRhdGUuZ2V0VGltZSgpKSkvMTAwMCxcclxuXHRcdFx0dGltZURpZmZBbGwgPSAoTWF0aC5hYnMobW9udGhFbmREYXRlLmdldFRpbWUoKSAtIG1vbnRoRmlyc3REYXRlLmdldFRpbWUoKSkpLzEwMDAsXHJcblx0XHRcdHByb2dyZXNzQmFyVmxhdWUgPSAodGltZURpZmYvdGltZURpZmZBbGwpKjEwMDtcclxuXHJcblx0XHRwcm9ncmVzc0JhclZsYXVlID0gTWF0aC5mbG9vcigxMDAgLSBwcm9ncmVzc0JhclZsYXVlKTtcclxuXHJcblx0XHRpZih0aGlzLnN0YXRlLnByb2dyZXNzQmFyVmxhdWUgPCAwKXtcclxuXHRcdFx0dGhpcy5zdGF0ZS5lcnJvck1zZyA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc3RhdGUuZXJyb3JNc2cgPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnNldFN0YXRlKHtwcm9ncmVzc0JhclZsYXVlfSk7XHJcblxyXG5cdFx0dmFyIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhpcy5zdGFydFRpbWUoRmlyc3REYXRlLCBFbmREYXRlKTt9LmJpbmQodGhpcyksIDEwMDApO1xyXG5cdH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICBcdHZhciBkaXZXaWR0aCA9IHsgd2lkdGg6IHRoaXMuc3RhdGUucHJvZ3Jlc3NCYXJWbGF1ZSArICclJ307XHJcblxyXG4gICAgICAgIHJldHVybiAoICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Db3VudGRvd24gd2l0aCBSZWFjdEpTPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NCYXJXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NCYXJcIiBzdHlsZT17ZGl2V2lkdGh9ID57dGhpcy5zdGF0ZS5wcm9ncmVzc0JhclZsYXVlICsgJyUnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgY2hhbmdlRGF0ZT17ZGF5c1RvQWRkID0+IHRoaXMuQ2hhbmdlRGF0ZSh7ZGF5c1RvQWRkfSl9Lz5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5lcnJvck1zZyA/IDxzcGFuIGNsYXNzTmFtZT1cImVycm9yTXNnXCI+SW52YWxpZCBudW1iZXI8L3NwYW4+IDogbnVsbCB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50ZG93bicpKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnB1dENoYW5nZSh0ZXJtKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jaGFuZ2VEYXRlKHRlcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRheXMgdG8gYWRkIHVudGlsIHRoZSBkZWFkbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBldmVudCA9PiB0aGlzLm9uSW5wdXRDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7Il19
