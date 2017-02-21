exports.ids = [3];
exports.modules = {

/***/ 1058:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthComponent = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouter = __webpack_require__(91);

var _actions = __webpack_require__(110);

var actions = _interopRequireWildcard(_actions);

var _reactRedux = __webpack_require__(39);

var _index7 = __webpack_require__(111);

var _index8 = _interopRequireDefault(_index7);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  AuthComponent: {
    displayName: 'AuthComponent'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/AuthComponent.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/AuthComponent.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var AuthComponent = exports.AuthComponent = _wrapComponent('AuthComponent')(function (_Component) {
  _inherits(AuthComponent, _Component);

  function AuthComponent(props) {
    _classCallCheck(this, AuthComponent);

    //bind login func
    var _this = _possibleConstructorReturn(this, (AuthComponent.__proto__ || Object.getPrototypeOf(AuthComponent)).call(this, props));

    _this.onLogin = _this.onLogin.bind(_this);
    return _this;
  }

  _createClass(AuthComponent, [{
    key: 'onLogin',
    value: function onLogin() {
      var dispatch = this.props.dispatch;
      //call login action to sign in with popup

      dispatch(actions.startLogin());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: 'auth' },
        _react3.default.createElement(
          'div',
          { className: 'columns small-centered small-10 medium-6 large-4' },
          _react3.default.createElement(
            'div',
            { className: ' text-center callout callout-auth' },
            _react3.default.createElement(
              'h3',
              null,
              'Login'
            ),
            _react3.default.createElement(
              'button',
              { className: 'button', onClick: this.onLogin },
              ' Login With Google'
            )
          )
        )
      );
    }
  }]);

  return AuthComponent;
}(_react2.Component));

;
exports.default = (0, _reactRedux.connect)()(AuthComponent);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3Rpb25zL0F1dGhDb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImFjdGlvbnMiLCJwcm9wcyIsIm9uTG9naW4iLCJiaW5kIiwiZGlzcGF0Y2giLCJzdGFydExvZ2luIiwiQXV0aENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsTzs7QUFDWjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBRWpCO0FBRmlCLDhIQUNYQSxLQURXOztBQUdqQixVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhQyxJQUFiLE9BQWY7QUFIaUI7QUFJbEI7Ozs7OEJBQ1M7QUFBQSxVQUNKQyxRQURJLEdBQ1EsS0FBS0gsS0FEYixDQUNKRyxRQURJO0FBRVI7O0FBQ0FBLGVBQVNKLFFBQVFLLFVBQVIsRUFBVDtBQUNEOzs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsTUFBZjtBQUNHO0FBQUE7QUFBQSxZQUFLLFdBQVUsa0RBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLG1DQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFRLFdBQVUsUUFBbEIsRUFBMkIsU0FBUyxLQUFLSCxPQUF6QztBQUFBO0FBQUE7QUFGRjtBQURGO0FBREgsT0FERjtBQVVEOzs7Ozs7QUFDRjtrQkFDYywyQkFBVUksYUFBVixDIiwiZmlsZSI6IjMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICdzcmMvYWN0aW9ucy9hY3Rpb25zJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdzcmMvZmlyZWJhc2UvaW5kZXgnXG5cbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy9iaW5kIGxvZ2luIGZ1bmNcbiAgICB0aGlzLm9uTG9naW4gPSB0aGlzLm9uTG9naW4uYmluZCh0aGlzKTtcbiAgfVxuICBvbkxvZ2luKCkge1xuICAgIHZhcntkaXNwYXRjaH0gPSB0aGlzLnByb3BzO1xuICAgIC8vY2FsbCBsb2dpbiBhY3Rpb24gdG8gc2lnbiBpbiB3aXRoIHBvcHVwXG4gICAgZGlzcGF0Y2goYWN0aW9ucy5zdGFydExvZ2luKCkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhcIj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBzbWFsbC1jZW50ZXJlZCBzbWFsbC0xMCBtZWRpdW0tNiBsYXJnZS00XCI+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtY2VudGVyIGNhbGxvdXQgY2FsbG91dC1hdXRoXCI+XG4gICAgICAgICAgICAgPGgzPkxvZ2luPC9oMz5cbiAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMub25Mb2dpbn0+IExvZ2luIFdpdGggR29vZ2xlPC9idXR0b24+XG4gICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoQXV0aENvbXBvbmVudCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlY3Rpb25zL0F1dGhDb21wb25lbnQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==