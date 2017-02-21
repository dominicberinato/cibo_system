exports.ids = [0];
exports.modules = {

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CiboTabs = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tabs = __webpack_require__(1078);

var _Billing = __webpack_require__(1066);

var _Billing2 = _interopRequireDefault(_Billing);

var _Reservations = __webpack_require__(241);

var _Reservations2 = _interopRequireDefault(_Reservations);

var _Finance = __webpack_require__(1067);

var _Finance2 = _interopRequireDefault(_Finance);

var _Marketing = __webpack_require__(1069);

var _Marketing2 = _interopRequireDefault(_Marketing);

var _Operations = __webpack_require__(1070);

var _Operations2 = _interopRequireDefault(_Operations);

var _StockManagement = __webpack_require__(1071);

var _StockManagement2 = _interopRequireDefault(_StockManagement);

var _HumanResources = __webpack_require__(1068);

var _HumanResources2 = _interopRequireDefault(_HumanResources);

var _reactRedux = __webpack_require__(39);

var _actions = __webpack_require__(110);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CiboTabs: {
    displayName: 'CiboTabs'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/CiboTabs.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/CiboTabs.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var CiboTabs = exports.CiboTabs = _wrapComponent('CiboTabs')(function (_Component) {
  _inherits(CiboTabs, _Component);

  function CiboTabs(props) {
    _classCallCheck(this, CiboTabs);

    var _this = _possibleConstructorReturn(this, (CiboTabs.__proto__ || Object.getPrototypeOf(CiboTabs)).call(this, props));

    _this.assocProduct = _this.assocProduct.bind(_this);
    return _this;
  }

  _createClass(CiboTabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          property = _props.property,
          dispatch = _props.dispatch;
      //check that we have a property key

      if (property.propKey != undefined) {
        dispatch(actions.collectTables(property.propkey));
      }
    }
  }, {
    key: 'assocProduct',
    value: function assocProduct(Event) {
      Event.preventDefault(); //prevent refresh
      //collect user id from state
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          auth = _props2.auth;
      //check that user exists

      if (auth != undefined) {
        //check that form has value
        var code = this.refs.propCode.value;
        //check that code is valid
        if (code.length > 0) {
          //dispatch assoc action
          dispatch(actions.assocUser(auth.uid, code));
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          property = _props3.property,
          dispatch = _props3.dispatch;

      var renderPropertyMessage = function renderPropertyMessage() {
        if (property == undefined) {
          return _react3.default.createElement(
            'div',
            { className: 'text-center' },
            _react3.default.createElement(
              'form',
              { ref: 'form', onSubmit: _this2.assocProduct },
              _react3.default.createElement(
                'label',
                { className: 'property-message' },
                ' ENTER PROPERTY CODE'
              ),
              _react3.default.createElement('input', { className: 'text-center', ref: 'propCode', type: 'text', placeholder: '5GT-HTG' }),
              _react3.default.createElement('input', { ref: 'submit', className: 'button', type: 'submit', value: 'CONNECT' })
            )
          );
        } else {
          return _react3.default.createElement(
            _Tabs.Tabs,
            null,
            _react3.default.createElement(
              _Tabs.Tab,
              { label: 'Reservations' },
              _react3.default.createElement(_Reservations2.default, null)
            ),
            _react3.default.createElement(
              _Tabs.Tab,
              { label: 'Billing' },
              _react3.default.createElement(_Billing2.default, null)
            ),
            _react3.default.createElement(
              _Tabs.Tab,
              { label: 'Operations' },
              _react3.default.createElement(_Operations2.default, null)
            ),
            _react3.default.createElement(
              _Tabs.Tab,
              { label: 'Stock' },
              _react3.default.createElement(_StockManagement2.default, null)
            ),
            _react3.default.createElement(
              _Tabs.Tab,
              { label: 'Finance' },
              _react3.default.createElement(_Finance2.default, null)
            ),
            _react3.default.createElement(
              _Tabs.Tab,
              { label: 'HR' },
              _react3.default.createElement(_HumanResources2.default, null)
            ),
            _react3.default.createElement(
              _Tabs.Tab,
              { label: 'Marketing' },
              _react3.default.createElement(_Marketing2.default, null)
            )
          );
        }
      };
      return _react3.default.createElement(
        'div',
        null,
        renderPropertyMessage()
      );
    }
  }]);

  return CiboTabs;
}(_react2.Component));

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    property: state.property,
    auth: state.auth
  };
})(CiboTabs);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),

/***/ 1066:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Billing = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Billing: {
    displayName: 'Billing'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/tabs/Billing.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/tabs/Billing.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Billing = exports.Billing = _wrapComponent('Billing')(function (_Component) {
  _inherits(Billing, _Component);

  function Billing() {
    _classCallCheck(this, Billing);

    return _possibleConstructorReturn(this, (Billing.__proto__ || Object.getPrototypeOf(Billing)).apply(this, arguments));
  }

  _createClass(Billing, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'p',
        null,
        'Billing Module will be here'
      );
    }
  }]);

  return Billing;
}(_react2.Component));

;

exports.default = Billing;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),

/***/ 1067:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Finance = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Finance: {
    displayName: 'Finance'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/tabs/Finance.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/tabs/Finance.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Finance = exports.Finance = _wrapComponent('Finance')(function (_Component) {
  _inherits(Finance, _Component);

  function Finance() {
    _classCallCheck(this, Finance);

    return _possibleConstructorReturn(this, (Finance.__proto__ || Object.getPrototypeOf(Finance)).apply(this, arguments));
  }

  _createClass(Finance, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'p',
        null,
        'Finance Module will be here '
      );
    }
  }]);

  return Finance;
}(_react2.Component));

exports.default = Finance;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),

/***/ 1068:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HumanResources = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  HumanResources: {
    displayName: 'HumanResources'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/tabs/HumanResources.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/tabs/HumanResources.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var HumanResources = exports.HumanResources = _wrapComponent('HumanResources')(function (_Component) {
  _inherits(HumanResources, _Component);

  function HumanResources() {
    _classCallCheck(this, HumanResources);

    return _possibleConstructorReturn(this, (HumanResources.__proto__ || Object.getPrototypeOf(HumanResources)).apply(this, arguments));
  }

  _createClass(HumanResources, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'p',
        null,
        'Human Resources Module will be here'
      );
    }
  }]);

  return HumanResources;
}(_react2.Component));

exports.default = HumanResources;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),

/***/ 1069:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marketing = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Marketing: {
    displayName: 'Marketing'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/tabs/Marketing.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/tabs/Marketing.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Marketing = exports.Marketing = _wrapComponent('Marketing')(function (_Component) {
  _inherits(Marketing, _Component);

  function Marketing() {
    _classCallCheck(this, Marketing);

    return _possibleConstructorReturn(this, (Marketing.__proto__ || Object.getPrototypeOf(Marketing)).apply(this, arguments));
  }

  _createClass(Marketing, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'p',
        null,
        'Marketing Module will be here'
      );
    }
  }]);

  return Marketing;
}(_react2.Component));

;
exports.default = Marketing;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Operations = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Operations: {
    displayName: 'Operations'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/tabs/Operations.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/tabs/Operations.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Operations = exports.Operations = _wrapComponent('Operations')(function (_Component) {
  _inherits(Operations, _Component);

  function Operations() {
    _classCallCheck(this, Operations);

    return _possibleConstructorReturn(this, (Operations.__proto__ || Object.getPrototypeOf(Operations)).apply(this, arguments));
  }

  _createClass(Operations, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'p',
        null,
        'Operations Module will be here'
      );
    }
  }]);

  return Operations;
}(_react2.Component));

;

exports.default = Operations;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),

/***/ 1071:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StockManagement = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  StockManagement: {
    displayName: 'StockManagement'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/tabs/StockManagement.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/tabs/StockManagement.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var StockManagement = exports.StockManagement = _wrapComponent('StockManagement')(function (_Component) {
  _inherits(StockManagement, _Component);

  function StockManagement() {
    _classCallCheck(this, StockManagement);

    return _possibleConstructorReturn(this, (StockManagement.__proto__ || Object.getPrototypeOf(StockManagement)).apply(this, arguments));
  }

  _createClass(StockManagement, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'p',
        null,
        'Stock Management module will be here'
      );
    }
  }]);

  return StockManagement;
}(_react2.Component));

exports.default = StockManagement;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),

/***/ 1074:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _transitions = __webpack_require__(30);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var inkBar = context.muiTheme.inkBar;


  return {
    root: {
      left: props.left,
      width: props.width,
      bottom: 0,
      display: 'block',
      backgroundColor: props.color || inkBar.backgroundColor,
      height: 2,
      marginTop: -2,
      position: 'relative',
      transition: _transitions2.default.easeOut('1s', 'left')
    }
  };
}

var InkBar = function (_Component) {
  (0, _inherits3.default)(InkBar, _Component);

  function InkBar() {
    (0, _classCallCheck3.default)(this, InkBar);
    return (0, _possibleConstructorReturn3.default)(this, (InkBar.__proto__ || (0, _getPrototypeOf2.default)(InkBar)).apply(this, arguments));
  }

  (0, _createClass3.default)(InkBar, [{
    key: 'render',
    value: function render() {
      var style = this.props.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) });
    }
  }]);
  return InkBar;
}(_react.Component);

InkBar.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
undefined !== "production" ? InkBar.propTypes = {
  color: _react.PropTypes.string,
  left: _react.PropTypes.string.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  width: _react.PropTypes.string.isRequired
} : void 0;
exports.default = InkBar;

/***/ }),

/***/ 1075:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(17);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _EnhancedButton = __webpack_require__(233);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tabs = context.muiTheme.tabs;


  return {
    root: {
      color: props.selected ? tabs.selectedTextColor : tabs.textColor,
      fontWeight: 500,
      fontSize: 14,
      width: props.width,
      textTransform: 'uppercase',
      padding: 0
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: props.label && props.icon ? 72 : 48
    }
  };
}

var Tab = function (_Component) {
  (0, _inherits3.default)(Tab, _Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchTap = function (event) {
      if (_this.props.onTouchTap) {
        _this.props.onTouchTap(_this.props.value, event, _this);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          index = _props.index,
          onActive = _props.onActive,
          onTouchTap = _props.onTouchTap,
          selected = _props.selected,
          label = _props.label,
          buttonStyle = _props.buttonStyle,
          style = _props.style,
          value = _props.value,
          width = _props.width,
          other = (0, _objectWithoutProperties3.default)(_props, ['icon', 'index', 'onActive', 'onTouchTap', 'selected', 'label', 'buttonStyle', 'style', 'value', 'width']);


      var styles = getStyles(this.props, this.context);

      var iconElement = void 0;
      if (icon && _react2.default.isValidElement(icon)) {
        var iconProps = {
          style: {
            fontSize: 24,
            color: styles.root.color,
            marginBottom: label ? 5 : 0
          }
        };
        // If it's svg icon set color via props
        if (icon.type.muiName !== 'FontIcon') {
          iconProps.color = styles.root.color;
        }
        iconElement = _react2.default.cloneElement(icon, iconProps);
      }

      var rippleOpacity = 0.3;
      var rippleColor = this.context.muiTheme.tabs.selectedTextColor;

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({}, other, {
          style: (0, _simpleAssign2.default)(styles.root, style),
          focusRippleColor: rippleColor,
          touchRippleColor: rippleColor,
          focusRippleOpacity: rippleOpacity,
          touchRippleOpacity: rippleOpacity,
          onTouchTap: this.handleTouchTap
        }),
        _react2.default.createElement(
          'div',
          { style: (0, _simpleAssign2.default)(styles.button, buttonStyle) },
          iconElement,
          label
        )
      );
    }
  }]);
  return Tab;
}(_react.Component);

Tab.muiName = 'Tab';
Tab.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
undefined !== "production" ? Tab.propTypes = {
  /**
   * Override the inline-styles of the button element.
   */
  buttonStyle: _react.PropTypes.object,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Sets the icon of the tab, you can pass `FontIcon` or `SvgIcon` elements.
   */
  icon: _react.PropTypes.node,
  /**
   * @ignore
   */
  index: _react.PropTypes.any,
  /**
   * Sets the text value of the tab item to the string specified.
   */
  label: _react.PropTypes.node,
  /**
   * Fired when the active tab changes by touch or tap.
   * Use this event to specify any functionality when an active tab changes.
   * For example - we are using this to route to home when the third tab becomes active.
   * This function will always recieve the active tab as it\'s first argument.
   */
  onActive: _react.PropTypes.func,
  /**
   * @ignore
   * This property is overriden by the Tabs component.
   */
  onTouchTap: _react.PropTypes.func,
  /**
   * @ignore
   * Defines if the current tab is selected or not.
   * The Tabs component is responsible for setting this property.
   */
  selected: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * If value prop passed to Tabs component, this value prop is also required.
   * It assigns a value to the tab so that it can be selected by the Tabs.
   */
  value: _react.PropTypes.any,
  /**
   * @ignore
   * This property is overriden by the Tabs component.
   */
  width: _react.PropTypes.string
} : void 0;
exports.default = Tab;

/***/ }),

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  width: '100%',
  position: 'relative',
  textAlign: 'initial'
};

var TabTemplate = function TabTemplate(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      style = _ref.style;

  var templateStyle = (0, _simpleAssign2.default)({}, styles, style);
  if (!selected) {
    templateStyle.height = 0;
    templateStyle.overflow = 'hidden';
  }

  return _react2.default.createElement(
    'div',
    { style: templateStyle },
    children
  );
};

undefined !== "production" ? TabTemplate.propTypes = {
  children: _react.PropTypes.node,
  selected: _react.PropTypes.bool,
  style: _react.PropTypes.object
} : void 0;

exports.default = TabTemplate;

/***/ }),

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(17);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _warning = __webpack_require__(31);

var _warning2 = _interopRequireDefault(_warning);

var _TabTemplate = __webpack_require__(1076);

var _TabTemplate2 = _interopRequireDefault(_TabTemplate);

var _InkBar = __webpack_require__(1074);

var _InkBar2 = _interopRequireDefault(_InkBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var tabs = context.muiTheme.tabs;


  return {
    tabItemContainer: {
      width: '100%',
      backgroundColor: tabs.backgroundColor,
      whiteSpace: 'nowrap',
      display: 'flex'
    }
  };
}

var Tabs = function (_Component) {
  (0, _inherits3.default)(Tabs, _Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = { selectedIndex: 0 }, _this.handleTabTouchTap = function (value, event, tab) {
      var valueLink = _this.getValueLink(_this.props);
      var index = tab.props.index;

      if (valueLink.value && valueLink.value !== value || _this.state.selectedIndex !== index) {
        valueLink.requestChange(value, event, tab);
      }

      _this.setState({ selectedIndex: index });

      if (tab.props.onActive) {
        tab.props.onActive(tab);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var valueLink = this.getValueLink(this.props);
      var initialIndex = this.props.initialSelectedIndex;

      this.setState({
        selectedIndex: valueLink.value !== undefined ? this.getSelectedIndex(this.props) : initialIndex < this.getTabCount() ? initialIndex : 0
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps, nextContext) {
      var valueLink = this.getValueLink(newProps);
      var newState = {
        muiTheme: nextContext.muiTheme || this.context.muiTheme
      };

      if (valueLink.value !== undefined) {
        newState.selectedIndex = this.getSelectedIndex(newProps);
      }

      this.setState(newState);
    }
  }, {
    key: 'getTabs',
    value: function getTabs() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var tabs = [];

      _react.Children.forEach(props.children, function (tab) {
        if ((0, _react.isValidElement)(tab)) {
          tabs.push(tab);
        }
      });

      return tabs;
    }
  }, {
    key: 'getTabCount',
    value: function getTabCount() {
      return this.getTabs().length;
    }

    // Do not use outside of this component, it will be removed once valueLink is deprecated

  }, {
    key: 'getValueLink',
    value: function getValueLink(props) {
      return props.valueLink || {
        value: props.value,
        requestChange: props.onChange
      };
    }
  }, {
    key: 'getSelectedIndex',
    value: function getSelectedIndex(props) {
      var valueLink = this.getValueLink(props);
      var selectedIndex = -1;

      this.getTabs(props).forEach(function (tab, index) {
        if (valueLink.value === tab.props.value) {
          selectedIndex = index;
        }
      });

      return selectedIndex;
    }
  }, {
    key: 'getSelected',
    value: function getSelected(tab, index) {
      var valueLink = this.getValueLink(this.props);
      return valueLink.value ? valueLink.value === tab.props.value : this.state.selectedIndex === index;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          contentContainerClassName = _props.contentContainerClassName,
          contentContainerStyle = _props.contentContainerStyle,
          initialSelectedIndex = _props.initialSelectedIndex,
          inkBarStyle = _props.inkBarStyle,
          onChange = _props.onChange,
          style = _props.style,
          tabItemContainerStyle = _props.tabItemContainerStyle,
          tabTemplate = _props.tabTemplate,
          tabTemplateStyle = _props.tabTemplateStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['contentContainerClassName', 'contentContainerStyle', 'initialSelectedIndex', 'inkBarStyle', 'onChange', 'style', 'tabItemContainerStyle', 'tabTemplate', 'tabTemplateStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var valueLink = this.getValueLink(this.props);
      var tabValue = valueLink.value;
      var tabContent = [];
      var width = 100 / this.getTabCount();

      var tabs = this.getTabs().map(function (tab, index) {
        undefined !== "production" ? (0, _warning2.default)(tab.type && tab.type.muiName === 'Tab', 'Material-UI: Tabs only accepts Tab Components as children.\n        Found ' + (tab.type.muiName || tab.type) + ' as child number ' + (index + 1) + ' of Tabs') : void 0;

        undefined !== "production" ? (0, _warning2.default)(!tabValue || tab.props.value !== undefined, 'Material-UI: Tabs value prop has been passed, but Tab ' + index + '\n        does not have a value prop. Needs value if Tabs is going\n        to be a controlled component.') : void 0;

        tabContent.push(tab.props.children ? (0, _react.createElement)(tabTemplate || _TabTemplate2.default, {
          key: index,
          selected: _this2.getSelected(tab, index),
          style: tabTemplateStyle
        }, tab.props.children) : undefined);

        return (0, _react.cloneElement)(tab, {
          key: index,
          index: index,
          selected: _this2.getSelected(tab, index),
          width: width + '%',
          onTouchTap: _this2.handleTabTouchTap
        });
      });

      var inkBar = this.state.selectedIndex !== -1 ? _react2.default.createElement(_InkBar2.default, {
        left: width * this.state.selectedIndex + '%',
        width: width + '%',
        style: inkBarStyle
      }) : null;

      var inkBarContainerWidth = tabItemContainerStyle ? tabItemContainerStyle.width : '100%';

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ style: prepareStyles((0, _simpleAssign2.default)({}, style)) }, other),
        _react2.default.createElement(
          'div',
          { style: prepareStyles((0, _simpleAssign2.default)(styles.tabItemContainer, tabItemContainerStyle)) },
          tabs
        ),
        _react2.default.createElement(
          'div',
          { style: { width: inkBarContainerWidth } },
          inkBar
        ),
        _react2.default.createElement(
          'div',
          {
            style: prepareStyles((0, _simpleAssign2.default)({}, contentContainerStyle)),
            className: contentContainerClassName
          },
          tabContent
        )
      );
    }
  }]);
  return Tabs;
}(_react.Component);

Tabs.defaultProps = {
  initialSelectedIndex: 0,
  onChange: function onChange() {}
};
Tabs.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
undefined !== "production" ? Tabs.propTypes = {
  /**
   * Should be used to pass `Tab` components.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * The css class name of the content's container.
   */
  contentContainerClassName: _react.PropTypes.string,
  /**
   * Override the inline-styles of the content's container.
   */
  contentContainerStyle: _react.PropTypes.object,
  /**
   * Specify initial visible tab index.
   * If `initialSelectedIndex` is set but larger than the total amount of specified tabs,
   * `initialSelectedIndex` will revert back to default.
   * If `initialSelectedIndex` is set to any negative value, no tab will be selected intially.
   */
  initialSelectedIndex: _react.PropTypes.number,
  /**
   * Override the inline-styles of the InkBar.
   */
  inkBarStyle: _react.PropTypes.object,
  /**
   * Called when the selected value change.
   */
  onChange: _react.PropTypes.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object,
  /**
   * Override the inline-styles of the tab-labels container.
   */
  tabItemContainerStyle: _react.PropTypes.object,
  /**
   * Override the default tab template used to wrap the content of each tab element.
   */
  tabTemplate: _react.PropTypes.func,
  /**
   * Override the inline-styles of the tab template.
   */
  tabTemplateStyle: _react.PropTypes.object,
  /**
   * Makes Tabs controllable and selects the tab whose value prop matches this prop.
   */
  value: _react.PropTypes.any
} : void 0;
exports.default = Tabs;

/***/ }),

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tabs = exports.Tab = undefined;

var _Tab2 = __webpack_require__(1075);

var _Tab3 = _interopRequireDefault(_Tab2);

var _Tabs2 = __webpack_require__(1077);

var _Tabs3 = _interopRequireDefault(_Tabs2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tab = _Tab3.default;
exports.Tabs = _Tabs3.default;
exports.default = _Tabs3.default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3Rpb25zL0NpYm9UYWJzLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYnMvQmlsbGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJzL0ZpbmFuY2UuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFicy9IdW1hblJlc291cmNlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJzL01hcmtldGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJzL09wZXJhdGlvbnMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFicy9TdG9ja01hbmFnZW1lbnQuanN4Iiwid2VicGFjazovLy8uLi9+L21hdGVyaWFsLXVpL1RhYnMvSW5rQmFyLmpzIiwid2VicGFjazovLy8uLi9+L21hdGVyaWFsLXVpL1RhYnMvVGFiLmpzIiwid2VicGFjazovLy8uLi9+L21hdGVyaWFsLXVpL1RhYnMvVGFiVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL34vbWF0ZXJpYWwtdWkvVGFicy9UYWJzLmpzIiwid2VicGFjazovLy8uLi9+L21hdGVyaWFsLXVpL1RhYnMvaW5kZXguanMiXSwibmFtZXMiOlsiYWN0aW9ucyIsInByb3BzIiwiYXNzb2NQcm9kdWN0IiwiYmluZCIsInByb3BlcnR5IiwiZGlzcGF0Y2giLCJwcm9wS2V5IiwidW5kZWZpbmVkIiwiY29sbGVjdFRhYmxlcyIsInByb3BrZXkiLCJFdmVudCIsInByZXZlbnREZWZhdWx0IiwiYXV0aCIsImNvZGUiLCJyZWZzIiwicHJvcENvZGUiLCJ2YWx1ZSIsImxlbmd0aCIsImFzc29jVXNlciIsInVpZCIsInJlbmRlclByb3BlcnR5TWVzc2FnZSIsInN0YXRlIiwiQ2lib1RhYnMiLCJCaWxsaW5nIiwiRmluYW5jZSIsIkh1bWFuUmVzb3VyY2VzIiwiTWFya2V0aW5nIiwiT3BlcmF0aW9ucyIsIlN0b2NrTWFu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O0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxvREFBb0QsV0FBVztBQUMvRjtBQUNBO0FBQ0EsV0FBVyxvR0FBb0c7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVMsOEJBQThCLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx1Qjs7Ozs7Ozs7QUMxVEE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLGlDIiwiZmlsZSI6IjAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7VGFicywgVGFifSBmcm9tICdtYXRlcmlhbC11aS9UYWJzJztcbmltcG9ydCBCaWxsaW5nIGZyb20gJ0JpbGxpbmcnXG5pbXBvcnQgUmVzZXJ2YXRpb25zIGZyb20gJ1Jlc2VydmF0aW9ucydcbmltcG9ydCBGaW5hbmNlIGZyb20gJ0ZpbmFuY2UnXG5pbXBvcnQgTWFya2V0aW5nIGZyb20gJ01hcmtldGluZydcbmltcG9ydCBPcGVyYXRpb25zIGZyb20gJ09wZXJhdGlvbnMnXG5pbXBvcnQgU3RvY2tNYW5hZ2VtZW50IGZyb20gJ1N0b2NrTWFuYWdlbWVudCdcbmltcG9ydCBIdW1hblJlc291cmNlcyBmcm9tICdIdW1hblJlc291cmNlcydcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJ3NyYy9hY3Rpb25zL2FjdGlvbnMnXG5cbmV4cG9ydCBjbGFzcyBDaWJvVGFicyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5hc3NvY1Byb2R1Y3QgPSB0aGlzLmFzc29jUHJvZHVjdC5iaW5kKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHZhcntwcm9wZXJ0eSwgZGlzcGF0Y2h9ID0gdGhpcy5wcm9wcztcbiAgICAvL2NoZWNrIHRoYXQgd2UgaGF2ZSBhIHByb3BlcnR5IGtleVxuICAgIGlmKHByb3BlcnR5LnByb3BLZXkgICE9IHVuZGVmaW5lZCkge1xuICAgICAgZGlzcGF0Y2goYWN0aW9ucy5jb2xsZWN0VGFibGVzKHByb3BlcnR5LnByb3BrZXkpKTtcbiAgICB9XG4gIH1cbiAgYXNzb2NQcm9kdWN0KEV2ZW50KSB7XG4gICAgRXZlbnQucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHJlZnJlc2hcbiAgICAvL2NvbGxlY3QgdXNlciBpZCBmcm9tIHN0YXRlXG4gICAgdmFyIHtkaXNwYXRjaCwgYXV0aH0gPSB0aGlzLnByb3BzO1xuICAgIC8vY2hlY2sgdGhhdCB1c2VyIGV4aXN0c1xuICAgIGlmKGF1dGggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAvL2NoZWNrIHRoYXQgZm9ybSBoYXMgdmFsdWVcbiAgICAgIHZhciBjb2RlID0gdGhpcy5yZWZzLnByb3BDb2RlLnZhbHVlO1xuICAgICAgLy9jaGVjayB0aGF0IGNvZGUgaXMgdmFsaWRcbiAgICAgIGlmKGNvZGUubGVuZ3RoID4gMCkge1xuICAgICAgICAvL2Rpc3BhdGNoIGFzc29jIGFjdGlvblxuICAgICAgICBkaXNwYXRjaChhY3Rpb25zLmFzc29jVXNlcihhdXRoLnVpZCwgY29kZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdmFyIHtwcm9wZXJ0eSwgZGlzcGF0Y2h9ID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcmVuZGVyUHJvcGVydHlNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgaWYocHJvcGVydHkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8Zm9ybSByZWY9J2Zvcm0nIG9uU3VibWl0PXt0aGlzLmFzc29jUHJvZHVjdH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJwcm9wZXJ0eS1tZXNzYWdlXCI+IEVOVEVSIFBST1BFUlRZIENPREU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiByZWY9XCJwcm9wQ29kZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCI1R1QtSFRHXCIvPlxuICAgICAgICAgICAgICA8aW5wdXQgcmVmPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ09OTkVDVFwiLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgIDxUYWJzPlxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cIlJlc2VydmF0aW9uc1wiPlxuICAgICAgICAgICAgICA8UmVzZXJ2YXRpb25zLz5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkJpbGxpbmdcIj5cbiAgICAgICAgICAgICAgPEJpbGxpbmcvPlxuICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICA8VGFiIGxhYmVsPVwiT3BlcmF0aW9uc1wiPlxuICAgICAgICAgICAgICA8T3BlcmF0aW9ucy8+XG4gICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJTdG9ja1wiPlxuICAgICAgICAgICAgICA8U3RvY2tNYW5hZ2VtZW50Lz5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkZpbmFuY2VcIj5cbiAgICAgICAgICAgICAgPEZpbmFuY2UvPlxuICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICA8VGFiIGxhYmVsPVwiSFJcIj5cbiAgICAgICAgICAgICAgPEh1bWFuUmVzb3VyY2VzLz5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgPFRhYiBsYWJlbD1cIk1hcmtldGluZ1wiPlxuICAgICAgICAgICAgICA8TWFya2V0aW5nLz5cbiAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICB7cmVuZGVyUHJvcGVydHlNZXNzYWdlKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvcGVydHk6IHN0YXRlLnByb3BlcnR5LFxuICAgIGF1dGg6IHN0YXRlLmF1dGhcbiAgfVxufSkoQ2lib1RhYnMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWN0aW9ucy9DaWJvVGFicy5qc3giLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY2xhc3MgQmlsbGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oPHA+QmlsbGluZyBNb2R1bGUgd2lsbCBiZSBoZXJlPC9wPilcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmlsbGluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFicy9CaWxsaW5nLmpzeCIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjbGFzcyBGaW5hbmNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybig8cD5GaW5hbmNlIE1vZHVsZSB3aWxsIGJlIGhlcmUgPC9wPilcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRmluYW5jZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFicy9GaW5hbmNlLmpzeCIsImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNsYXNzIEh1bWFuUmVzb3VyY2VzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoPHA+SHVtYW4gUmVzb3VyY2VzIE1vZHVsZSB3aWxsIGJlIGhlcmU8L3A+KVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBIdW1hblJlc291cmNlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvdGFicy9IdW1hblJlc291cmNlcy5qc3giLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY2xhc3MgTWFya2V0aW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybig8cD5NYXJrZXRpbmcgTW9kdWxlIHdpbGwgYmUgaGVyZTwvcD4pXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBNYXJrZXRpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYnMvTWFya2V0aW5nLmpzeCIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjbGFzcyBPcGVyYXRpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybig8cD5PcGVyYXRpb25zIE1vZHVsZSB3aWxsIGJlIGhlcmU8L3A+KVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy90YWJzL09wZXJhdGlvbnMuanN4IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNsYXNzIFN0b2NrTWFuYWdlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oPHA+U3RvY2sgTWFuYWdlbWVudCBtb2R1bGUgd2lsbCBiZSBoZXJlPC9wPilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9ja01hbmFnZW1lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RhYnMvU3RvY2tNYW5hZ2VtZW50LmpzeCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCkge1xuICB2YXIgaW5rQmFyID0gY29udGV4dC5tdWlUaGVtZS5pbmtCYXI7XG5cblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGxlZnQ6IHByb3BzLmxlZnQsXG4gICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICBib3R0b206IDAsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy5jb2xvciB8fCBpbmtCYXIuYmFja2dyb3VuZENvbG9yLFxuICAgICAgaGVpZ2h0OiAyLFxuICAgICAgbWFyZ2luVG9wOiAtMixcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzFzJywgJ2xlZnQnKVxuICAgIH1cbiAgfTtcbn1cblxudmFyIElua0JhciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKElua0JhciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSW5rQmFyKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIElua0Jhcik7XG4gICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKElua0Jhci5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoSW5rQmFyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShJbmtCYXIsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKSB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIElua0Jhcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbklua0Jhci5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gSW5rQmFyLnByb3BUeXBlcyA9IHtcbiAgY29sb3I6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBsZWZ0OiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgd2lkdGg6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5leHBvcnRzLmRlZmF1bHQgPSBJbmtCYXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9tYXRlcmlhbC11aS9UYWJzL0lua0Jhci5qc1xuLy8gbW9kdWxlIGlkID0gMTA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvRW5oYW5jZWRCdXR0b24nKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbmhhbmNlZEJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCkge1xuICB2YXIgdGFicyA9IGNvbnRleHQubXVpVGhlbWUudGFicztcblxuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgY29sb3I6IHByb3BzLnNlbGVjdGVkID8gdGFicy5zZWxlY3RlZFRleHRDb2xvciA6IHRhYnMudGV4dENvbG9yLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICBwYWRkaW5nOiAwXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBoZWlnaHQ6IHByb3BzLmxhYmVsICYmIHByb3BzLmljb24gPyA3MiA6IDQ4XG4gICAgfVxuICB9O1xufVxuXG52YXIgVGFiID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoVGFiLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUYWIoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgVGFiKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFRhYi5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoVGFiKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaGFuZGxlVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoVGFwKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hUYXAoX3RoaXMucHJvcHMudmFsdWUsIGV2ZW50LCBfdGhpcyk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFRhYiwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpY29uID0gX3Byb3BzLmljb24sXG4gICAgICAgICAgaW5kZXggPSBfcHJvcHMuaW5kZXgsXG4gICAgICAgICAgb25BY3RpdmUgPSBfcHJvcHMub25BY3RpdmUsXG4gICAgICAgICAgb25Ub3VjaFRhcCA9IF9wcm9wcy5vblRvdWNoVGFwLFxuICAgICAgICAgIHNlbGVjdGVkID0gX3Byb3BzLnNlbGVjdGVkLFxuICAgICAgICAgIGxhYmVsID0gX3Byb3BzLmxhYmVsLFxuICAgICAgICAgIGJ1dHRvblN0eWxlID0gX3Byb3BzLmJ1dHRvblN0eWxlLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIHZhbHVlID0gX3Byb3BzLnZhbHVlLFxuICAgICAgICAgIHdpZHRoID0gX3Byb3BzLndpZHRoLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2ljb24nLCAnaW5kZXgnLCAnb25BY3RpdmUnLCAnb25Ub3VjaFRhcCcsICdzZWxlY3RlZCcsICdsYWJlbCcsICdidXR0b25TdHlsZScsICdzdHlsZScsICd2YWx1ZScsICd3aWR0aCddKTtcblxuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHZhciBpY29uRWxlbWVudCA9IHZvaWQgMDtcbiAgICAgIGlmIChpY29uICYmIF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChpY29uKSkge1xuICAgICAgICB2YXIgaWNvblByb3BzID0ge1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgICAgICBjb2xvcjogc3R5bGVzLnJvb3QuY29sb3IsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IGxhYmVsID8gNSA6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIElmIGl0J3Mgc3ZnIGljb24gc2V0IGNvbG9yIHZpYSBwcm9wc1xuICAgICAgICBpZiAoaWNvbi50eXBlLm11aU5hbWUgIT09ICdGb250SWNvbicpIHtcbiAgICAgICAgICBpY29uUHJvcHMuY29sb3IgPSBzdHlsZXMucm9vdC5jb2xvcjtcbiAgICAgICAgfVxuICAgICAgICBpY29uRWxlbWVudCA9IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoaWNvbiwgaWNvblByb3BzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJpcHBsZU9wYWNpdHkgPSAwLjM7XG4gICAgICB2YXIgcmlwcGxlQ29sb3IgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUudGFicy5zZWxlY3RlZFRleHRDb2xvcjtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfRW5oYW5jZWRCdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpLFxuICAgICAgICAgIGZvY3VzUmlwcGxlQ29sb3I6IHJpcHBsZUNvbG9yLFxuICAgICAgICAgIHRvdWNoUmlwcGxlQ29sb3I6IHJpcHBsZUNvbG9yLFxuICAgICAgICAgIGZvY3VzUmlwcGxlT3BhY2l0eTogcmlwcGxlT3BhY2l0eSxcbiAgICAgICAgICB0b3VjaFJpcHBsZU9wYWNpdHk6IHJpcHBsZU9wYWNpdHksXG4gICAgICAgICAgb25Ub3VjaFRhcDogdGhpcy5oYW5kbGVUb3VjaFRhcFxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5idXR0b24sIGJ1dHRvblN0eWxlKSB9LFxuICAgICAgICAgIGljb25FbGVtZW50LFxuICAgICAgICAgIGxhYmVsXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBUYWI7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5UYWIubXVpTmFtZSA9ICdUYWInO1xuVGFiLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGJ1dHRvbiBlbGVtZW50LlxuICAgKi9cbiAgYnV0dG9uU3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGNzcyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogU2V0cyB0aGUgaWNvbiBvZiB0aGUgdGFiLCB5b3UgY2FuIHBhc3MgYEZvbnRJY29uYCBvciBgU3ZnSWNvbmAgZWxlbWVudHMuXG4gICAqL1xuICBpY29uOiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBpbmRleDogX3JlYWN0LlByb3BUeXBlcy5hbnksXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB0ZXh0IHZhbHVlIG9mIHRoZSB0YWIgaXRlbSB0byB0aGUgc3RyaW5nIHNwZWNpZmllZC5cbiAgICovXG4gIGxhYmVsOiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSBhY3RpdmUgdGFiIGNoYW5nZXMgYnkgdG91Y2ggb3IgdGFwLlxuICAgKiBVc2UgdGhpcyBldmVudCB0byBzcGVjaWZ5IGFueSBmdW5jdGlvbmFsaXR5IHdoZW4gYW4gYWN0aXZlIHRhYiBjaGFuZ2VzLlxuICAgKiBGb3IgZXhhbXBsZSAtIHdlIGFyZSB1c2luZyB0aGlzIHRvIHJvdXRlIHRvIGhvbWUgd2hlbiB0aGUgdGhpcmQgdGFiIGJlY29tZXMgYWN0aXZlLlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYWx3YXlzIHJlY2lldmUgdGhlIGFjdGl2ZSB0YWIgYXMgaXRcXCdzIGZpcnN0IGFyZ3VtZW50LlxuICAgKi9cbiAgb25BY3RpdmU6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhpcyBwcm9wZXJ0eSBpcyBvdmVycmlkZW4gYnkgdGhlIFRhYnMgY29tcG9uZW50LlxuICAgKi9cbiAgb25Ub3VjaFRhcDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBEZWZpbmVzIGlmIHRoZSBjdXJyZW50IHRhYiBpcyBzZWxlY3RlZCBvciBub3QuXG4gICAqIFRoZSBUYWJzIGNvbXBvbmVudCBpcyByZXNwb25zaWJsZSBmb3Igc2V0dGluZyB0aGlzIHByb3BlcnR5LlxuICAgKi9cbiAgc2VsZWN0ZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB2YWx1ZSBwcm9wIHBhc3NlZCB0byBUYWJzIGNvbXBvbmVudCwgdGhpcyB2YWx1ZSBwcm9wIGlzIGFsc28gcmVxdWlyZWQuXG4gICAqIEl0IGFzc2lnbnMgYSB2YWx1ZSB0byB0aGUgdGFiIHNvIHRoYXQgaXQgY2FuIGJlIHNlbGVjdGVkIGJ5IHRoZSBUYWJzLlxuICAgKi9cbiAgdmFsdWU6IF9yZWFjdC5Qcm9wVHlwZXMuYW55LFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGlzIHByb3BlcnR5IGlzIG92ZXJyaWRlbiBieSB0aGUgVGFicyBjb21wb25lbnQuXG4gICAqL1xuICB3aWR0aDogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn0gOiB2b2lkIDA7XG5leHBvcnRzLmRlZmF1bHQgPSBUYWI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9tYXRlcmlhbC11aS9UYWJzL1RhYi5qc1xuLy8gbW9kdWxlIGlkID0gMTA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdHlsZXMgPSB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB0ZXh0QWxpZ246ICdpbml0aWFsJ1xufTtcblxudmFyIFRhYlRlbXBsYXRlID0gZnVuY3Rpb24gVGFiVGVtcGxhdGUoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgc2VsZWN0ZWQgPSBfcmVmLnNlbGVjdGVkLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlO1xuXG4gIHZhciB0ZW1wbGF0ZVN0eWxlID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMsIHN0eWxlKTtcbiAgaWYgKCFzZWxlY3RlZCkge1xuICAgIHRlbXBsYXRlU3R5bGUuaGVpZ2h0ID0gMDtcbiAgICB0ZW1wbGF0ZVN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gIH1cblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgeyBzdHlsZTogdGVtcGxhdGVTdHlsZSB9LFxuICAgIGNoaWxkcmVuXG4gICk7XG59O1xuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUYWJUZW1wbGF0ZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gIHNlbGVjdGVkOiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIHN0eWxlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGFiVGVtcGxhdGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vfi9tYXRlcmlhbC11aS9UYWJzL1RhYlRlbXBsYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX1RhYlRlbXBsYXRlID0gcmVxdWlyZSgnLi9UYWJUZW1wbGF0ZScpO1xuXG52YXIgX1RhYlRlbXBsYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RhYlRlbXBsYXRlKTtcblxudmFyIF9JbmtCYXIgPSByZXF1aXJlKCcuL0lua0JhcicpO1xuXG52YXIgX0lua0JhcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbmtCYXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIHRhYnMgPSBjb250ZXh0Lm11aVRoZW1lLnRhYnM7XG5cblxuICByZXR1cm4ge1xuICAgIHRhYkl0ZW1Db250YWluZXI6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRhYnMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9XG4gIH07XG59XG5cbnZhciBUYWJzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoVGFicywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVGFicygpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBUYWJzKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFRhYnMuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFRhYnMpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHsgc2VsZWN0ZWRJbmRleDogMCB9LCBfdGhpcy5oYW5kbGVUYWJUb3VjaFRhcCA9IGZ1bmN0aW9uICh2YWx1ZSwgZXZlbnQsIHRhYikge1xuICAgICAgdmFyIHZhbHVlTGluayA9IF90aGlzLmdldFZhbHVlTGluayhfdGhpcy5wcm9wcyk7XG4gICAgICB2YXIgaW5kZXggPSB0YWIucHJvcHMuaW5kZXg7XG5cbiAgICAgIGlmICh2YWx1ZUxpbmsudmFsdWUgJiYgdmFsdWVMaW5rLnZhbHVlICE9PSB2YWx1ZSB8fCBfdGhpcy5zdGF0ZS5zZWxlY3RlZEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICB2YWx1ZUxpbmsucmVxdWVzdENoYW5nZSh2YWx1ZSwgZXZlbnQsIHRhYik7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJbmRleDogaW5kZXggfSk7XG5cbiAgICAgIGlmICh0YWIucHJvcHMub25BY3RpdmUpIHtcbiAgICAgICAgdGFiLnByb3BzLm9uQWN0aXZlKHRhYik7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFRhYnMsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdmFyIHZhbHVlTGluayA9IHRoaXMuZ2V0VmFsdWVMaW5rKHRoaXMucHJvcHMpO1xuICAgICAgdmFyIGluaXRpYWxJbmRleCA9IHRoaXMucHJvcHMuaW5pdGlhbFNlbGVjdGVkSW5kZXg7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWxlY3RlZEluZGV4OiB2YWx1ZUxpbmsudmFsdWUgIT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0U2VsZWN0ZWRJbmRleCh0aGlzLnByb3BzKSA6IGluaXRpYWxJbmRleCA8IHRoaXMuZ2V0VGFiQ291bnQoKSA/IGluaXRpYWxJbmRleCA6IDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzLCBuZXh0Q29udGV4dCkge1xuICAgICAgdmFyIHZhbHVlTGluayA9IHRoaXMuZ2V0VmFsdWVMaW5rKG5ld1Byb3BzKTtcbiAgICAgIHZhciBuZXdTdGF0ZSA9IHtcbiAgICAgICAgbXVpVGhlbWU6IG5leHRDb250ZXh0Lm11aVRoZW1lIHx8IHRoaXMuY29udGV4dC5tdWlUaGVtZVxuICAgICAgfTtcblxuICAgICAgaWYgKHZhbHVlTGluay52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld1N0YXRlLnNlbGVjdGVkSW5kZXggPSB0aGlzLmdldFNlbGVjdGVkSW5kZXgobmV3UHJvcHMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRUYWJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFicygpIHtcbiAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdGhpcy5wcm9wcztcblxuICAgICAgdmFyIHRhYnMgPSBbXTtcblxuICAgICAgX3JlYWN0LkNoaWxkcmVuLmZvckVhY2gocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uICh0YWIpIHtcbiAgICAgICAgaWYgKCgwLCBfcmVhY3QuaXNWYWxpZEVsZW1lbnQpKHRhYikpIHtcbiAgICAgICAgICB0YWJzLnB1c2godGFiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0YWJzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFRhYkNvdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFiQ291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRUYWJzKCkubGVuZ3RoO1xuICAgIH1cblxuICAgIC8vIERvIG5vdCB1c2Ugb3V0c2lkZSBvZiB0aGlzIGNvbXBvbmVudCwgaXQgd2lsbCBiZSByZW1vdmVkIG9uY2UgdmFsdWVMaW5rIGlzIGRlcHJlY2F0ZWRcblxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsdWVMaW5rJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWVMaW5rKHByb3BzKSB7XG4gICAgICByZXR1cm4gcHJvcHMudmFsdWVMaW5rIHx8IHtcbiAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICByZXF1ZXN0Q2hhbmdlOiBwcm9wcy5vbkNoYW5nZVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTZWxlY3RlZEluZGV4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2VsZWN0ZWRJbmRleChwcm9wcykge1xuICAgICAgdmFyIHZhbHVlTGluayA9IHRoaXMuZ2V0VmFsdWVMaW5rKHByb3BzKTtcbiAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gLTE7XG5cbiAgICAgIHRoaXMuZ2V0VGFicyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAodGFiLCBpbmRleCkge1xuICAgICAgICBpZiAodmFsdWVMaW5rLnZhbHVlID09PSB0YWIucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTZWxlY3RlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlbGVjdGVkKHRhYiwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWx1ZUxpbmsgPSB0aGlzLmdldFZhbHVlTGluayh0aGlzLnByb3BzKTtcbiAgICAgIHJldHVybiB2YWx1ZUxpbmsudmFsdWUgPyB2YWx1ZUxpbmsudmFsdWUgPT09IHRhYi5wcm9wcy52YWx1ZSA6IHRoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleCA9PT0gaW5kZXg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbnRlbnRDb250YWluZXJDbGFzc05hbWUgPSBfcHJvcHMuY29udGVudENvbnRhaW5lckNsYXNzTmFtZSxcbiAgICAgICAgICBjb250ZW50Q29udGFpbmVyU3R5bGUgPSBfcHJvcHMuY29udGVudENvbnRhaW5lclN0eWxlLFxuICAgICAgICAgIGluaXRpYWxTZWxlY3RlZEluZGV4ID0gX3Byb3BzLmluaXRpYWxTZWxlY3RlZEluZGV4LFxuICAgICAgICAgIGlua0JhclN0eWxlID0gX3Byb3BzLmlua0JhclN0eWxlLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIHRhYkl0ZW1Db250YWluZXJTdHlsZSA9IF9wcm9wcy50YWJJdGVtQ29udGFpbmVyU3R5bGUsXG4gICAgICAgICAgdGFiVGVtcGxhdGUgPSBfcHJvcHMudGFiVGVtcGxhdGUsXG4gICAgICAgICAgdGFiVGVtcGxhdGVTdHlsZSA9IF9wcm9wcy50YWJUZW1wbGF0ZVN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2NvbnRlbnRDb250YWluZXJDbGFzc05hbWUnLCAnY29udGVudENvbnRhaW5lclN0eWxlJywgJ2luaXRpYWxTZWxlY3RlZEluZGV4JywgJ2lua0JhclN0eWxlJywgJ29uQ2hhbmdlJywgJ3N0eWxlJywgJ3RhYkl0ZW1Db250YWluZXJTdHlsZScsICd0YWJUZW1wbGF0ZScsICd0YWJUZW1wbGF0ZVN0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgdmFyIHZhbHVlTGluayA9IHRoaXMuZ2V0VmFsdWVMaW5rKHRoaXMucHJvcHMpO1xuICAgICAgdmFyIHRhYlZhbHVlID0gdmFsdWVMaW5rLnZhbHVlO1xuICAgICAgdmFyIHRhYkNvbnRlbnQgPSBbXTtcbiAgICAgIHZhciB3aWR0aCA9IDEwMCAvIHRoaXMuZ2V0VGFiQ291bnQoKTtcblxuICAgICAgdmFyIHRhYnMgPSB0aGlzLmdldFRhYnMoKS5tYXAoZnVuY3Rpb24gKHRhYiwgaW5kZXgpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KSh0YWIudHlwZSAmJiB0YWIudHlwZS5tdWlOYW1lID09PSAnVGFiJywgJ01hdGVyaWFsLVVJOiBUYWJzIG9ubHkgYWNjZXB0cyBUYWIgQ29tcG9uZW50cyBhcyBjaGlsZHJlbi5cXG4gICAgICAgIEZvdW5kICcgKyAodGFiLnR5cGUubXVpTmFtZSB8fCB0YWIudHlwZSkgKyAnIGFzIGNoaWxkIG51bWJlciAnICsgKGluZGV4ICsgMSkgKyAnIG9mIFRhYnMnKSA6IHZvaWQgMDtcblxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCF0YWJWYWx1ZSB8fCB0YWIucHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCwgJ01hdGVyaWFsLVVJOiBUYWJzIHZhbHVlIHByb3AgaGFzIGJlZW4gcGFzc2VkLCBidXQgVGFiICcgKyBpbmRleCArICdcXG4gICAgICAgIGRvZXMgbm90IGhhdmUgYSB2YWx1ZSBwcm9wLiBOZWVkcyB2YWx1ZSBpZiBUYWJzIGlzIGdvaW5nXFxuICAgICAgICB0byBiZSBhIGNvbnRyb2xsZWQgY29tcG9uZW50LicpIDogdm9pZCAwO1xuXG4gICAgICAgIHRhYkNvbnRlbnQucHVzaCh0YWIucHJvcHMuY2hpbGRyZW4gPyAoMCwgX3JlYWN0LmNyZWF0ZUVsZW1lbnQpKHRhYlRlbXBsYXRlIHx8IF9UYWJUZW1wbGF0ZTIuZGVmYXVsdCwge1xuICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgc2VsZWN0ZWQ6IF90aGlzMi5nZXRTZWxlY3RlZCh0YWIsIGluZGV4KSxcbiAgICAgICAgICBzdHlsZTogdGFiVGVtcGxhdGVTdHlsZVxuICAgICAgICB9LCB0YWIucHJvcHMuY2hpbGRyZW4pIDogdW5kZWZpbmVkKTtcblxuICAgICAgICByZXR1cm4gKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKHRhYiwge1xuICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIHNlbGVjdGVkOiBfdGhpczIuZ2V0U2VsZWN0ZWQodGFiLCBpbmRleCksXG4gICAgICAgICAgd2lkdGg6IHdpZHRoICsgJyUnLFxuICAgICAgICAgIG9uVG91Y2hUYXA6IF90aGlzMi5oYW5kbGVUYWJUb3VjaFRhcFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgaW5rQmFyID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEluZGV4ICE9PSAtMSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9JbmtCYXIyLmRlZmF1bHQsIHtcbiAgICAgICAgbGVmdDogd2lkdGggKiB0aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXggKyAnJScsXG4gICAgICAgIHdpZHRoOiB3aWR0aCArICclJyxcbiAgICAgICAgc3R5bGU6IGlua0JhclN0eWxlXG4gICAgICB9KSA6IG51bGw7XG5cbiAgICAgIHZhciBpbmtCYXJDb250YWluZXJXaWR0aCA9IHRhYkl0ZW1Db250YWluZXJTdHlsZSA/IHRhYkl0ZW1Db250YWluZXJTdHlsZS53aWR0aCA6ICcxMDAlJztcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGUpKSB9LCBvdGhlciksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy50YWJJdGVtQ29udGFpbmVyLCB0YWJJdGVtQ29udGFpbmVyU3R5bGUpKSB9LFxuICAgICAgICAgIHRhYnNcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBzdHlsZTogeyB3aWR0aDogaW5rQmFyQ29udGFpbmVyV2lkdGggfSB9LFxuICAgICAgICAgIGlua0JhclxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIGNvbnRlbnRDb250YWluZXJTdHlsZSkpLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBjb250ZW50Q29udGFpbmVyQ2xhc3NOYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0YWJDb250ZW50XG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBUYWJzO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVGFicy5kZWZhdWx0UHJvcHMgPSB7XG4gIGluaXRpYWxTZWxlY3RlZEluZGV4OiAwLFxuICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7fVxufTtcblRhYnMuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRhYnMucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogU2hvdWxkIGJlIHVzZWQgdG8gcGFzcyBgVGFiYCBjb21wb25lbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IF9yZWFjdC5Qcm9wVHlwZXMubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgY29udGVudCdzIGNvbnRhaW5lci5cbiAgICovXG4gIGNvbnRlbnRDb250YWluZXJDbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGNvbnRlbnQncyBjb250YWluZXIuXG4gICAqL1xuICBjb250ZW50Q29udGFpbmVyU3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogU3BlY2lmeSBpbml0aWFsIHZpc2libGUgdGFiIGluZGV4LlxuICAgKiBJZiBgaW5pdGlhbFNlbGVjdGVkSW5kZXhgIGlzIHNldCBidXQgbGFyZ2VyIHRoYW4gdGhlIHRvdGFsIGFtb3VudCBvZiBzcGVjaWZpZWQgdGFicyxcbiAgICogYGluaXRpYWxTZWxlY3RlZEluZGV4YCB3aWxsIHJldmVydCBiYWNrIHRvIGRlZmF1bHQuXG4gICAqIElmIGBpbml0aWFsU2VsZWN0ZWRJbmRleGAgaXMgc2V0IHRvIGFueSBuZWdhdGl2ZSB2YWx1ZSwgbm8gdGFiIHdpbGwgYmUgc2VsZWN0ZWQgaW50aWFsbHkuXG4gICAqL1xuICBpbml0aWFsU2VsZWN0ZWRJbmRleDogX3JlYWN0LlByb3BUeXBlcy5udW1iZXIsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgSW5rQmFyLlxuICAgKi9cbiAgaW5rQmFyU3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHNlbGVjdGVkIHZhbHVlIGNoYW5nZS5cbiAgICovXG4gIG9uQ2hhbmdlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHRhYi1sYWJlbHMgY29udGFpbmVyLlxuICAgKi9cbiAgdGFiSXRlbUNvbnRhaW5lclN0eWxlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IHRhYiB0ZW1wbGF0ZSB1c2VkIHRvIHdyYXAgdGhlIGNvbnRlbnQgb2YgZWFjaCB0YWIgZWxlbWVudC5cbiAgICovXG4gIHRhYlRlbXBsYXRlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdGFiIHRlbXBsYXRlLlxuICAgKi9cbiAgdGFiVGVtcGxhdGVTdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBNYWtlcyBUYWJzIGNvbnRyb2xsYWJsZSBhbmQgc2VsZWN0cyB0aGUgdGFiIHdob3NlIHZhbHVlIHByb3AgbWF0Y2hlcyB0aGlzIHByb3AuXG4gICAqL1xuICB2YWx1ZTogX3JlYWN0LlByb3BUeXBlcy5hbnlcbn0gOiB2b2lkIDA7XG5leHBvcnRzLmRlZmF1bHQgPSBUYWJzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vbWF0ZXJpYWwtdWkvVGFicy9UYWJzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuVGFicyA9IGV4cG9ydHMuVGFiID0gdW5kZWZpbmVkO1xuXG52YXIgX1RhYjIgPSByZXF1aXJlKCcuL1RhYicpO1xuXG52YXIgX1RhYjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYWIyKTtcblxudmFyIF9UYWJzMiA9IHJlcXVpcmUoJy4vVGFicycpO1xuXG52YXIgX1RhYnMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFiczIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLlRhYiA9IF9UYWIzLmRlZmF1bHQ7XG5leHBvcnRzLlRhYnMgPSBfVGFiczMuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9UYWJzMy5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vbWF0ZXJpYWwtdWkvVGFicy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9