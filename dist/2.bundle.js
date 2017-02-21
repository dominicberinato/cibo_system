exports.ids = [2];
exports.modules = {

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PermComponent = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(39);

var _index7 = __webpack_require__(111);

var _index8 = _interopRequireDefault(_index7);

var _reactRouter = __webpack_require__(91);

var _actions = __webpack_require__(110);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  PermComponent: {
    displayName: 'PermComponent'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/PermComponent.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/PermComponent.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var PermComponent = exports.PermComponent = _wrapComponent('PermComponent')(function (_Component) {
  _inherits(PermComponent, _Component);

  function PermComponent(props) {
    _classCallCheck(this, PermComponent);

    return _possibleConstructorReturn(this, (PermComponent.__proto__ || Object.getPrototypeOf(PermComponent)).call(this, props));
  }

  _createClass(PermComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          auth = _props.auth,
          dispatch = _props.dispatch;

      if (auth != undefined) {
        //check that user doesnt exist
        _index7.firebaseRef.child('users/' + auth.uid).once('value').then(function (userShot) {
          if (userShot.val() == null) {
            var userFanOut = {};
            userFanOut['/users/' + auth.uid] = auth;
            return _index7.firebaseRef.update(userFanOut).then(function () {
              _reactRouter.hashHistory.push('/app');
            });
          } else {
            //check if user is admin and accord more perms
            //select user
            _index7.firebaseRef.child('users/' + auth.uid).once('value').then(function (userShot) {
              //check if user has a propCode
              var user = userShot.val();
              console.log('this is the user', user);
              if (user.propCode) {
                //user has prop code download property and send to admin
                //download a the property
                _index7.firebaseRef.child('properties/' + user.propCode).once('value').then(function (propShot) {
                  var property = propShot.val();
                  dispatch(actions.addProperty(_extends({}, property, {
                    propKey: propShot.key
                  })));
                  _reactRouter.hashHistory.push('/app');
                });
              } else {
                //TODO create user property list
                var lastPropertyKey;
                _index7.firebaseRef.child('property-users').orderByValue().once('value', function (userprops) {
                  userprops.forEach(function (propUsersList) {
                    propUsersList.forEach(function (propUser) {
                      var lastProperty = propUsersList.key;
                    });
                  });
                });

                //dispatch prop action
                //collect this property from db
                _index7.firebaseRef.child('properties/' + propUsersList.key).once('value').then(function (propSnapShot) {
                  dispatch(actions.addProperty(_extends({}, propSnapShot.val(), {
                    propKey: propUsersList.key
                  })));
                  _reactRouter.hashHistory.push('/app');
                });
              }
            });
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      //get user object from state
      var _props2 = this.props,
          auth = _props2.auth,
          dispatch = _props2.dispatch;

      var welcomeMessage = function welcomeMessage() {
        if (auth != undefined) {
          var uname = auth.name;
          return _react3.default.createElement(
            'div',
            { className: 'text-center permissions-text>' },
            _react3.default.createElement(
              'p',
              null,
              'Hello ' + uname + '!'
            ),
            _react3.default.createElement(
              'p',
              null,
              'Please wait as we load your property'
            )
          );
        }
      };
      return _react3.default.createElement(
        'div',
        null,
        welcomeMessage()
      );
    }
  }]);

  return PermComponent;
}(_react2.Component));

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    auth: state.auth
  };
})(PermComponent);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3Rpb25zL1Blcm1Db21wb25lbnQuanN4Il0sIm5hbWVzIjpbImFjdGlvbnMiLCJwcm9wcyIsImF1dGgiLCJkaXNwYXRjaCIsInVuZGVmaW5lZCIsImNoaWxkIiwidWlkIiwib25jZSIsInRoZW4iLCJ1c2VyU2hvdCIsInZhbCIsInVzZXJGYW5PdXQiLCJ1cGRhdGUiLCJwdXNoIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJwcm9wQ29kZSIsInByb3BTaG90IiwicHJvcGVydHkiLCJhZGRQcm9wZXJ0eSIsInByb3BLZXkiLCJrZXkiLCJsYXN0UHJvcGVydHlLZXkiLCJvcmRlckJ5VmFsdWUiLCJ1c2VycHJvcHMiLCJmb3JFYWNoIiwicHJvcFVzZXJzTGlzdCIsInByb3BVc2VyIiwibGFzdFByb3BlcnR5IiwicHJvcFNuYXBTaG90Iiwid2VsY29tZU1lc3NhZ2UiLCJ1bmFtZSIsIm5hbWUiLCJzdGF0ZSIsIlBlcm1Db21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOztJQUFZQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdWLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEseUhBQ1hBLEtBRFc7QUFFbEI7Ozs7d0NBQ21CO0FBQUEsbUJBQ0ssS0FBS0EsS0FEVjtBQUFBLFVBQ2JDLElBRGEsVUFDYkEsSUFEYTtBQUFBLFVBQ1BDLFFBRE8sVUFDUEEsUUFETzs7QUFFbEIsVUFBR0QsUUFBUUUsU0FBWCxFQUNBO0FBQ0U7QUFDQSw0QkFBWUMsS0FBWixZQUEyQkgsS0FBS0ksR0FBaEMsRUFBdUNDLElBQXZDLENBQTRDLE9BQTVDLEVBQXFEQyxJQUFyRCxDQUEwRCxVQUFDQyxRQUFELEVBQWM7QUFDdEUsY0FBR0EsU0FBU0MsR0FBVCxNQUFrQixJQUFyQixFQUEyQjtBQUN6QixnQkFBSUMsYUFBYSxFQUFqQjtBQUNBQSxtQ0FBcUJULEtBQUtJLEdBQTFCLElBQW1DSixJQUFuQztBQUNBLG1CQUFPLG9CQUFZVSxNQUFaLENBQW1CRCxVQUFuQixFQUErQkgsSUFBL0IsQ0FBb0MsWUFBTTtBQUMvQyx1Q0FBWUssSUFBWixDQUFpQixNQUFqQjtBQUNELGFBRk0sQ0FBUDtBQUdELFdBTkQsTUFPSztBQUNIO0FBQ0E7QUFDQSxnQ0FBWVIsS0FBWixZQUEyQkgsS0FBS0ksR0FBaEMsRUFBdUNDLElBQXZDLENBQTRDLE9BQTVDLEVBQXFEQyxJQUFyRCxDQUEwRCxVQUFDQyxRQUFELEVBQWM7QUFDdEU7QUFDQSxrQkFBSUssT0FBT0wsU0FBU0MsR0FBVCxFQUFYO0FBQ0FLLHNCQUFRQyxHQUFSLENBQVksa0JBQVosRUFBZ0NGLElBQWhDO0FBQ0Esa0JBQUdBLEtBQUtHLFFBQVIsRUFBa0I7QUFDaEI7QUFDQTtBQUNBLG9DQUFZWixLQUFaLGlCQUFnQ1MsS0FBS0csUUFBckMsRUFBaURWLElBQWpELENBQXNELE9BQXRELEVBQStEQyxJQUEvRCxDQUFvRSxVQUFDVSxRQUFELEVBQWM7QUFDaEYsc0JBQUlDLFdBQVdELFNBQVNSLEdBQVQsRUFBZjtBQUNBUCwyQkFBU0gsUUFBUW9CLFdBQVIsY0FDSkQsUUFESTtBQUVQRSw2QkFBU0gsU0FBU0k7QUFGWCxxQkFBVDtBQUlBLDJDQUFZVCxJQUFaLENBQWlCLE1BQWpCO0FBQ0QsaUJBUEQ7QUFRRCxlQVhELE1BV087QUFDTDtBQUNBLG9CQUFJVSxlQUFKO0FBQ0Esb0NBQVlsQixLQUFaLENBQWtCLGdCQUFsQixFQUFvQ21CLFlBQXBDLEdBQ0NqQixJQURELENBQ00sT0FETixFQUNlLFVBQUNrQixTQUFELEVBQWU7QUFDNUJBLDRCQUFVQyxPQUFWLENBQWtCLFVBQUNDLGFBQUQsRUFBbUI7QUFDbkNBLGtDQUFjRCxPQUFkLENBQXNCLFVBQUNFLFFBQUQsRUFBYztBQUNsQywwQkFBSUMsZUFBZUYsY0FBY0wsR0FBakM7QUFDRCxxQkFGRDtBQUdELG1CQUpEO0FBS0QsaUJBUEQ7O0FBU0E7QUFDQTtBQUNBLG9DQUFZakIsS0FBWixpQkFBZ0NzQixjQUFjTCxHQUE5QyxFQUFxRGYsSUFBckQsQ0FBMEQsT0FBMUQsRUFBbUVDLElBQW5FLENBQXdFLFVBQUNzQixZQUFELEVBQWtCO0FBQ3hGM0IsMkJBQVNILFFBQVFvQixXQUFSLGNBQ0pVLGFBQWFwQixHQUFiLEVBREk7QUFFUFcsNkJBQVNNLGNBQWNMO0FBRmhCLHFCQUFUO0FBSUEsMkNBQVlULElBQVosQ0FBaUIsTUFBakI7QUFDRCxpQkFORDtBQU9EO0FBQ0YsYUFyQ0Q7QUF1Q0Q7QUFDRixTQW5ERDtBQW9ERDtBQUNGOzs7NkJBQ1E7QUFDUDtBQURPLG9CQUVnQixLQUFLWixLQUZyQjtBQUFBLFVBRUZDLElBRkUsV0FFRkEsSUFGRTtBQUFBLFVBRUlDLFFBRkosV0FFSUEsUUFGSjs7QUFHUCxVQUFJNEIsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCLFlBQUc3QixRQUFRRSxTQUFYLEVBQXNCO0FBQ3BCLGNBQUk0QixRQUFROUIsS0FBSytCLElBQWpCO0FBQ0EsaUJBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSwrQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBLHlCQUFhRCxLQUFiO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixXQURGO0FBTUQ7QUFDRixPQVZEO0FBV0EsYUFDRTtBQUFBO0FBQUE7QUFDQ0Q7QUFERCxPQURGO0FBSUQ7Ozs7OztrQkFFWSx5QkFBUSxVQUFDRyxLQUFELEVBQVc7QUFDaEMsU0FBTztBQUNMaEMsVUFBTWdDLE1BQU1oQztBQURQLEdBQVA7QUFHRCxDQUpjLEVBSVppQyxhQUpZLEMiLCJmaWxlIjoiMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IGZpcmViYXNlLHtmaXJlYmFzZVJlZn0gZnJvbSAnc3JjL2ZpcmViYXNlL2luZGV4J1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICdzcmMvYWN0aW9ucy9hY3Rpb25zJ1xuXG5leHBvcnQgY2xhc3MgUGVybUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIHthdXRoLCBkaXNwYXRjaH0gPSB0aGlzLnByb3BzO1xuICAgIGlmKGF1dGggIT0gdW5kZWZpbmVkKVxuICAgIHtcbiAgICAgIC8vY2hlY2sgdGhhdCB1c2VyIGRvZXNudCBleGlzdFxuICAgICAgZmlyZWJhc2VSZWYuY2hpbGQoYHVzZXJzLyR7YXV0aC51aWR9YCkub25jZSgndmFsdWUnKS50aGVuKCh1c2VyU2hvdCkgPT4ge1xuICAgICAgICBpZih1c2VyU2hvdC52YWwoKSA9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIHVzZXJGYW5PdXQgPSB7fVxuICAgICAgICAgIHVzZXJGYW5PdXRbYC91c2Vycy8ke2F1dGgudWlkfWBdID0gYXV0aDtcbiAgICAgICAgICByZXR1cm4gZmlyZWJhc2VSZWYudXBkYXRlKHVzZXJGYW5PdXQpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaGFzaEhpc3RvcnkucHVzaCgnL2FwcCcpO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy9jaGVjayBpZiB1c2VyIGlzIGFkbWluIGFuZCBhY2NvcmQgbW9yZSBwZXJtc1xuICAgICAgICAgIC8vc2VsZWN0IHVzZXJcbiAgICAgICAgICBmaXJlYmFzZVJlZi5jaGlsZChgdXNlcnMvJHthdXRoLnVpZH1gKS5vbmNlKCd2YWx1ZScpLnRoZW4oKHVzZXJTaG90KSA9PiB7XG4gICAgICAgICAgICAvL2NoZWNrIGlmIHVzZXIgaGFzIGEgcHJvcENvZGVcbiAgICAgICAgICAgIHZhciB1c2VyID0gdXNlclNob3QudmFsKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyB0aGUgdXNlcicsIHVzZXIpO1xuICAgICAgICAgICAgaWYodXNlci5wcm9wQ29kZSkge1xuICAgICAgICAgICAgICAvL3VzZXIgaGFzIHByb3AgY29kZSBkb3dubG9hZCBwcm9wZXJ0eSBhbmQgc2VuZCB0byBhZG1pblxuICAgICAgICAgICAgICAvL2Rvd25sb2FkIGEgdGhlIHByb3BlcnR5XG4gICAgICAgICAgICAgIGZpcmViYXNlUmVmLmNoaWxkKGBwcm9wZXJ0aWVzLyR7dXNlci5wcm9wQ29kZX1gKS5vbmNlKCd2YWx1ZScpLnRoZW4oKHByb3BTaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gcHJvcFNob3QudmFsKCk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5hZGRQcm9wZXJ0eSh7XG4gICAgICAgICAgICAgICAgICAuLi5wcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICAgIHByb3BLZXk6IHByb3BTaG90LmtleVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvYXBwJyk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvL1RPRE8gY3JlYXRlIHVzZXIgcHJvcGVydHkgbGlzdFxuICAgICAgICAgICAgICB2YXIgbGFzdFByb3BlcnR5S2V5O1xuICAgICAgICAgICAgICBmaXJlYmFzZVJlZi5jaGlsZCgncHJvcGVydHktdXNlcnMnKS5vcmRlckJ5VmFsdWUoKVxuICAgICAgICAgICAgICAub25jZSgndmFsdWUnLCAodXNlcnByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgdXNlcnByb3BzLmZvckVhY2goKHByb3BVc2Vyc0xpc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgIHByb3BVc2Vyc0xpc3QuZm9yRWFjaCgocHJvcFVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxhc3RQcm9wZXJ0eSA9IHByb3BVc2Vyc0xpc3Qua2V5O1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgIC8vZGlzcGF0Y2ggcHJvcCBhY3Rpb25cbiAgICAgICAgICAgICAgLy9jb2xsZWN0IHRoaXMgcHJvcGVydHkgZnJvbSBkYlxuICAgICAgICAgICAgICBmaXJlYmFzZVJlZi5jaGlsZChgcHJvcGVydGllcy8ke3Byb3BVc2Vyc0xpc3Qua2V5fWApLm9uY2UoJ3ZhbHVlJykudGhlbigocHJvcFNuYXBTaG90KSA9PiB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goYWN0aW9ucy5hZGRQcm9wZXJ0eSh7XG4gICAgICAgICAgICAgICAgICAuLi5wcm9wU25hcFNob3QudmFsKCksXG4gICAgICAgICAgICAgICAgICBwcm9wS2V5OiBwcm9wVXNlcnNMaXN0LmtleVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvYXBwJylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvL2dldCB1c2VyIG9iamVjdCBmcm9tIHN0YXRlXG4gICAgdmFyIHthdXRoLCBkaXNwYXRjaH0gPSB0aGlzLnByb3BzO1xuICAgIHZhciB3ZWxjb21lTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgIGlmKGF1dGggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciB1bmFtZSA9IGF1dGgubmFtZTtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGVybWlzc2lvbnMtdGV4dD5cIj5cbiAgICAgICAgICAgIDxwPntgSGVsbG8gJHt1bmFtZX0hYH08L3A+XG4gICAgICAgICAgICA8cD5QbGVhc2Ugd2FpdCBhcyB3ZSBsb2FkIHlvdXIgcHJvcGVydHk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgIHt3ZWxjb21lTWVzc2FnZSgpfVxuICAgIDwvZGl2PilcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXG4gIH1cbn0pKFBlcm1Db21wb25lbnQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWN0aW9ucy9QZXJtQ29tcG9uZW50LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=