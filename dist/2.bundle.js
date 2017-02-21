exports.ids = [2];
exports.modules = {

/***/ 1059:
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
//# sourceMappingURL=2.bundle.js.map