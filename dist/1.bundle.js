exports.ids = [1];
exports.modules = {

/***/ 1057:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Admin = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RaisedButton = __webpack_require__(1073);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _SetProperty = __webpack_require__(1062);

var _SetProperty2 = _interopRequireDefault(_SetProperty);

var _AddTable = __webpack_require__(1061);

var _AddTable2 = _interopRequireDefault(_AddTable);

var _PropertyProfile = __webpack_require__(1063);

var _PropertyProfile2 = _interopRequireDefault(_PropertyProfile);

var _TableList = __webpack_require__(1065);

var _TableList2 = _interopRequireDefault(_TableList);

var _reactRedux = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Admin: {
    displayName: 'Admin'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/Admin.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/Admin.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Admin = exports.Admin = _wrapComponent('Admin')(function (_Component) {
  _inherits(Admin, _Component);

  function Admin(props) {
    _classCallCheck(this, Admin);

    return _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this, props));
  }

  _createClass(Admin, [{
    key: 'render',
    value: function render() {
      //TODO show SetProperty only if prop not set
      return _react3.default.createElement(
        'div',
        { className: 'row admin-panel' },
        _react3.default.createElement(
          'div',
          { className: 'columns small-12 medium-6 large-6' },
          _react3.default.createElement(_SetProperty2.default, null),
          _react3.default.createElement(_AddTable2.default, null)
        ),
        _react3.default.createElement(
          'div',
          { className: 'columns small-12 large-6 medium-6' },
          _react3.default.createElement(
            'div',
            { className: 'row' },
            _react3.default.createElement(_PropertyProfile2.default, null)
          ),
          _react3.default.createElement(
            'div',
            null,
            _react3.default.createElement(_TableList2.default, null)
          )
        )
      );
    }
  }]);

  return Admin;
}(_react2.Component));

;
exports.default = (0, _reactRedux.connect)()(Admin);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),

/***/ 1061:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddTable = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(39);

var _actions = __webpack_require__(110);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  AddTable: {
    displayName: 'AddTable'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/forms/AddTable.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/forms/AddTable.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var AddTable = exports.AddTable = _wrapComponent('AddTable')(function (_Component) {
  _inherits(AddTable, _Component);

  //class constructor
  function AddTable(props) {
    _classCallCheck(this, AddTable);

    var _this = _possibleConstructorReturn(this, (AddTable.__proto__ || Object.getPrototypeOf(AddTable)).call(this, props));

    _this.saveTable = _this.saveTable.bind(_this);
    return _this;
  }

  _createClass(AddTable, [{
    key: 'saveTable',
    value: function saveTable(Event) {
      Event.preventDefault();
      var dispatch = this.props.dispatch;
      //validate all data we need is present

      var tbname = this.refs.tableName.value;
      var tbcapacity = this.refs.tableSeats.value;
      var tbProp = this.refs.tableProperty.value;

      if (tbname.length == 0 || tbcapacity.length == 0 || tbProp.length == 0) {} else {
        //call start addtable
        //curate data
        var tbObject = {
          propId: tbProp,
          tbname: tbname,
          tbcapacity: tbcapacity
        };
        //uploadData
        dispatch(actions.startAddTable(tbObject));
      }
    }
    //when mounted load ..

  }, {
    key: 'ComponentDidMount',
    value: function ComponentDidMount() {}
    //draw

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var property = this.props.property;

      var renderForm = function renderForm() {
        if (property.propKey != undefined) {
          return _react3.default.createElement(
            'div',
            null,
            _react3.default.createElement(
              'form',
              { ref: 'form', onSubmit: _this2.saveTable },
              _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(
                  'label',
                  null,
                  'Name / Number'
                ),
                _react3.default.createElement('input', { ref: 'tableName', type: 'text' })
              ),
              _react3.default.createElement(
                'div',
                null,
                _react3.default.createElement(
                  'label',
                  null,
                  'Table Capacity'
                ),
                _react3.default.createElement('input', { ref: 'tableSeats', type: 'number' })
              ),
              _react3.default.createElement('input', { ref: 'tableProperty', type: 'hidden', defaultValue: property.propKey }),
              _react3.default.createElement(
                'div',
                { className: 'text-center' },
                _react3.default.createElement('input', { type: 'submit', className: 'button', value: 'Add Table' })
              )
            )
          );
        } else {
          return _react3.default.createElement(
            'p',
            null,
            'Please Property Details To Add A Table'
          );
        }
      };
      return _react3.default.createElement(
        'div',
        null,
        renderForm()
      );
    }
  }]);

  return AddTable;
}(_react2.Component));

;

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    auth: state.auth,
    property: state.property
  };
})(AddTable);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),

/***/ 1062:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SetProperty = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(39);

var _actions = __webpack_require__(110);

var actions = _interopRequireWildcard(_actions);

var _shortid = __webpack_require__(507);

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SetProperty: {
    displayName: 'SetProperty'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/forms/SetProperty.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/forms/SetProperty.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

//plain class  for testing
var SetProperty = exports.SetProperty = _wrapComponent('SetProperty')(function (_Component) {
  _inherits(SetProperty, _Component);

  function SetProperty(props) {
    _classCallCheck(this, SetProperty);

    //bind the funcs
    var _this = _possibleConstructorReturn(this, (SetProperty.__proto__ || Object.getPrototypeOf(SetProperty)).call(this, props));

    _this.setProp = _this.setProp.bind(_this);
    _this.handleImage = _this.handleImage.bind(_this);
    _this.state = {
      file: null
    };
    return _this;
  }

  _createClass(SetProperty, [{
    key: 'handleImage',
    value: function handleImage(Event) {
      Event.preventDefault();
      var file = Event.target.files[0];
      this.setState({
        file: file
      });
    }
  }, {
    key: 'setProp',
    value: function setProp(Event) {
      //prevent rafressshhh
      Event.preventDefault();
      var _props = this.props,
          dispatch = _props.dispatch,
          auth = _props.auth;

      var mRef = this.refs;
      var pname = mRef.propName.value;
      var padd = mRef.propAddress.value;
      var ploc = mRef.propLocation.value;
      var pava = this.state.file;

      if (pname.length > 0 && padd.length) {
        //collect user id
        //make object to send to dispatch
        var pcode = _shortid2.default.generate();
        var property = {
          pname: pname,
          address: padd,
          avatar: pava,
          propCode: pcode,
          propCreator: auth.uid
        };
        //dispatch our action generator
        dispatch(actions.startAddProperty(property));
      } else {
        //TODO display warning for form
        this.refs.propName.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(
          'form',
          { ref: 'form', onSubmit: this.setProp },
          _react3.default.createElement(
            'div',
            null,
            _react3.default.createElement(
              'label',
              null,
              'Name'
            ),
            _react3.default.createElement('input', { type: 'text', ref: 'propName', placeholder: 'Awesome Restaurant' })
          ),
          _react3.default.createElement(
            'div',
            null,
            _react3.default.createElement(
              'label',
              null,
              'Address'
            ),
            _react3.default.createElement('input', { type: 'text', ref: 'propAddress', placeholder: '22B Baker' })
          ),
          _react3.default.createElement(
            'div',
            null,
            _react3.default.createElement(
              'label',
              null,
              'Location'
            ),
            _react3.default.createElement('input', { type: 'text', ref: 'propLocation' })
          ),
          _react3.default.createElement(
            'div',
            null,
            _react3.default.createElement(
              'label',
              null,
              'Avatar'
            ),
            _react3.default.createElement('input', { ref: 'file', type: 'file', name: 'file', onChange: this.handleImage, className: 'button yellow-button upload-file' })
          ),
          _react3.default.createElement(
            'div',
            { className: 'text-center' },
            _react3.default.createElement('input', { type: 'submit', className: 'button', value: 'SAVE PROPERTY' })
          )
        )
      );
    }
  }]);

  return SetProperty;
}(_react2.Component));

;

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    auth: state.auth
  };
})(SetProperty);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),

/***/ 1063:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertyProfile = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(39);

var _index7 = __webpack_require__(111);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  PropertyProfile: {
    displayName: 'PropertyProfile'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/PropertyProfile.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/PropertyProfile.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var PropertyProfile = exports.PropertyProfile = _wrapComponent('PropertyProfile')(function (_Component) {
  _inherits(PropertyProfile, _Component);

  function PropertyProfile(props) {
    _classCallCheck(this, PropertyProfile);

    //add a state item for the image link
    var _this = _possibleConstructorReturn(this, (PropertyProfile.__proto__ || Object.getPrototypeOf(PropertyProfile)).call(this, props));

    _this.state = {
      link: ''
    };
    return _this;
  }

  _createClass(PropertyProfile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          dispatch = _props.dispatch,
          property = _props.property;

      if (property.avatar) {
        _index7.storageRef.child(property.avatar).getDownloadURL().then(function (url) {
          _this2.setState({
            link: url
          });
        }).catch(function (error) {
          //an error occurred
          console.log('error occured when fetching image link', error);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var property = this.props.property;

      var renderProp = function renderProp() {
        if (Object.keys(property).length == 0) {
          return _react3.default.createElement(
            'div',
            { id: 'emptyMessage' },
            _react3.default.createElement(
              'p',
              null,
              'Please Set Property Profile'
            )
          );
        } else {
          return _react3.default.createElement(
            'div',
            null,
            _react3.default.createElement(
              'div',
              { className: 'columns small-12 large-2 medium-2' },
              _react3.default.createElement(
                'div',
                { id: 'propimg' },
                _react3.default.createElement('img', { className: 'property-avatar', src: _this3.state.link })
              )
            ),
            _react3.default.createElement(
              'div',
              { className: 'columns small-12 large-10 medium-10' },
              _react3.default.createElement(
                'div',
                { id: 'name' },
                _react3.default.createElement(
                  'label',
                  null,
                  'Name:'
                ),
                _react3.default.createElement(
                  'p',
                  null,
                  property.pname
                )
              ),
              _react3.default.createElement(
                'div',
                { id: 'propcode' },
                _react3.default.createElement(
                  'label',
                  null,
                  'Code:'
                ),
                _react3.default.createElement(
                  'p',
                  null,
                  property.propCode
                )
              ),
              _react3.default.createElement(
                'div',
                { id: 'propaddress' },
                _react3.default.createElement(
                  'label',
                  null,
                  'Address'
                ),
                _react3.default.createElement(
                  'p',
                  null,
                  property.address
                )
              )
            )
          );
        }
      };
      return _react3.default.createElement(
        'div',
        null,
        renderProp()
      );
    }
  }]);

  return PropertyProfile;
}(_react2.Component));

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    property: state.property
  };
})(PropertyProfile);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = undefined;

var _index = __webpack_require__(75);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(73);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(74);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = __webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Table: {
    displayName: 'Table'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/Table.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/Table.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Table = exports.Table = _wrapComponent('Table')(function (_Component) {
  _inherits(Table, _Component);

  function Table(props) {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          tbname = _props.tbname,
          tbcapacity = _props.tbcapacity;

      var renderTable = function renderTable() {
        if (tbname != undefined && tbcapacity != undefined) {
          return _react3.default.createElement(
            'div',
            null,
            _react3.default.createElement(
              'div',
              null,
              _react3.default.createElement(
                'label',
                null,
                'Table Name/Number'
              ),
              _react3.default.createElement(
                'p',
                { ref: 'tbname' },
                tbname
              )
            ),
            _react3.default.createElement(
              'div',
              null,
              _react3.default.createElement(
                'label',
                null,
                'Table Capacity'
              ),
              _react3.default.createElement(
                'p',
                { ref: 'tbcapacity' },
                tbcapacity
              )
            )
          );
        } else {
          return _react3.default.createElement(
            'div',
            null,
            _react3.default.createElement(
              'p',
              null,
              'No Table Here'
            )
          );
        }
      };
      return _react3.default.createElement(
        'div',
        null,
        renderTable()
      );
    }
  }]);

  return Table;
}(_react2.Component));

;

exports.default = Table;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableList = undefined;

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

var _Table = __webpack_require__(1064);

var _Table2 = _interopRequireDefault(_Table);

var _actions = __webpack_require__(110);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TableList: {
    displayName: 'TableList'
  }
};

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/TableList.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/zacck/Documents/www/cibo/src/components/sections/TableList.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersZacckDocumentsWwwCiboNode_modulesReactTransformHmrLibIndexJs2(_UsersZacckDocumentsWwwCiboNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var TableList = exports.TableList = _wrapComponent('TableList')(function (_Component) {
  _inherits(TableList, _Component);

  function TableList(props) {
    _classCallCheck(this, TableList);

    return _possibleConstructorReturn(this, (TableList.__proto__ || Object.getPrototypeOf(TableList)).call(this, props));
  }

  _createClass(TableList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //when mounted also pull some tables from db if any
      var dispatch = this.props.dispatch;

      dispatch(actions.collectTables());
    }
  }, {
    key: 'render',
    value: function render() {
      var tables = this.props.tables;

      var renderTables = function renderTables() {
        if (tables.length > 0) {
          return tables.map(function (table) {
            return _react3.default.createElement(_Table2.default, _extends({ key: table.tbKey }, table));
          });
        } else {
          return _react3.default.createElement(
            'p',
            { className: 'container__message' },
            'No Tables '
          );
        }
      };
      return _react3.default.createElement(
        'div',
        null,
        renderTables()
      );
    }
  }]);

  return TableList;
}(_react2.Component));

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    tables: state.tables
  };
})(TableList);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module)))

/***/ }),

/***/ 1072:
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

var _transitions = __webpack_require__(30);

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = __webpack_require__(151);

var _childUtils = __webpack_require__(234);

var _EnhancedButton = __webpack_require__(233);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _Paper = __webpack_require__(112);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLabel(props, propName, componentName) {
  if (undefined !== 'production') {
    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
    }
  }
}

function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      button = _context$muiTheme.button,
      raisedButton = _context$muiTheme.raisedButton;
  var disabled = props.disabled,
      disabledBackgroundColor = props.disabledBackgroundColor,
      disabledLabelColor = props.disabledLabelColor,
      fullWidth = props.fullWidth,
      icon = props.icon,
      label = props.label,
      labelPosition = props.labelPosition,
      primary = props.primary,
      secondary = props.secondary,
      style = props.style;


  var amount = primary || secondary ? 0.4 : 0.08;

  var backgroundColor = raisedButton.color;
  var labelColor = raisedButton.textColor;

  if (disabled) {
    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
  } else if (primary) {
    backgroundColor = raisedButton.primaryColor;
    labelColor = raisedButton.primaryTextColor;
  } else if (secondary) {
    backgroundColor = raisedButton.secondaryColor;
    labelColor = raisedButton.secondaryTextColor;
  } else {
    if (props.backgroundColor) {
      backgroundColor = props.backgroundColor;
    }
    if (props.labelColor) {
      labelColor = props.labelColor;
    }
  }

  var buttonHeight = style && style.height || button.height;
  var borderRadius = 2;

  return {
    root: {
      display: 'inline-block',
      transition: _transitions2.default.easeOut(),
      minWidth: fullWidth ? '100%' : button.minWidth
    },
    button: {
      height: buttonHeight,
      lineHeight: buttonHeight + 'px',
      width: '100%',
      padding: 0,
      borderRadius: borderRadius,
      transition: _transitions2.default.easeOut(),
      backgroundColor: backgroundColor,
      // That's the default value for a button but not a link
      textAlign: 'center'
    },
    label: {
      position: 'relative',
      opacity: 1,
      fontSize: raisedButton.fontSize,
      letterSpacing: 0,
      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
      fontWeight: raisedButton.fontWeight,
      margin: 0,
      userSelect: 'none',
      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      color: labelColor
    },
    icon: {
      verticalAlign: 'middle',
      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
      marginRight: label && labelPosition === 'before' ? 12 : 0
    },
    overlay: {
      height: buttonHeight,
      borderRadius: borderRadius,
      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
      transition: _transitions2.default.easeOut(),
      top: 0
    },
    ripple: {
      color: labelColor,
      opacity: !(primary || secondary) ? 0.1 : 0.16
    }
  };
}

var RaisedButton = function (_Component) {
  (0, _inherits3.default)(RaisedButton, _Component);

  function RaisedButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RaisedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      keyboardFocused: false,
      touched: false,
      initialZDepth: 0,
      zDepth: 0
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.setState({
          zDepth: _this.state.initialZDepth + 1
        });
      }
      if (_this.props.onMouseDown) {
        _this.props.onMouseDown(event);
      }
    }, _this.handleMouseUp = function (event) {
      _this.setState({
        zDepth: _this.state.initialZDepth
      });
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.state.keyboardFocused) {
        _this.setState({
          zDepth: _this.state.initialZDepth,
          hovered: false
        });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      if (!_this.state.keyboardFocused && !_this.state.touched) {
        _this.setState({
          hovered: true
        });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth + 1
      });

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleTouchEnd = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth
      });

      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;

      _this.setState({
        zDepth: zDepth,
        keyboardFocused: keyboardFocused
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RaisedButton, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var zDepth = this.props.disabled ? 0 : 1;
      this.setState({
        zDepth: zDepth,
        initialZDepth: zDepth
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var zDepth = nextProps.disabled ? 0 : 1;
      var nextState = {
        zDepth: zDepth,
        initialZDepth: zDepth
      };

      if (nextProps.disabled) {
        nextState.hovered = false;
      }

      this.setState(nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          buttonStyle = _props.buttonStyle,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          disabledBackgroundColor = _props.disabledBackgroundColor,
          disabledLabelColor = _props.disabledLabelColor,
          fullWidth = _props.fullWidth,
          icon = _props.icon,
          label = _props.label,
          labelColor = _props.labelColor,
          labelPosition = _props.labelPosition,
          labelStyle = _props.labelStyle,
          overlayStyle = _props.overlayStyle,
          primary = _props.primary,
          rippleStyle = _props.rippleStyle,
          secondary = _props.secondary,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);

      var buttonEventHandlers = disabled ? {} : {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        onKeyboardFocus: this.handleKeyboardFocus
      };

      var labelElement = label && _react2.default.createElement(
        'span',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
        label
      );

      var iconCloned = icon && (0, _react.cloneElement)(icon, {
        color: icon.props.color || styles.label.color,
        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style)
      });

      // Place label before or after children.
      var childrenFragment = labelPosition === 'before' ? {
        labelElement: labelElement,
        iconCloned: iconCloned,
        children: children
      } : {
        children: children,
        iconCloned: iconCloned,
        labelElement: labelElement
      };

      var enhancedButtonChildren = (0, _childUtils.createChildFragment)(childrenFragment);

      return _react2.default.createElement(
        _Paper2.default,
        {
          className: className,
          style: (0, _simpleAssign2.default)(styles.root, style),
          zDepth: this.state.zDepth
        },
        _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({}, other, buttonEventHandlers, {
            ref: 'container',
            disabled: disabled,
            style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
            focusRippleColor: mergedRippleStyles.color,
            touchRippleColor: mergedRippleStyles.color,
            focusRippleOpacity: mergedRippleStyles.opacity,
            touchRippleOpacity: mergedRippleStyles.opacity
          }),
          _react2.default.createElement(
            'div',
            {
              ref: 'overlay',
              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle))
            },
            enhancedButtonChildren
          )
        )
      );
    }
  }]);
  return RaisedButton;
}(_react.Component);

RaisedButton.muiName = 'RaisedButton';
RaisedButton.defaultProps = {
  disabled: false,
  labelPosition: 'after',
  fullWidth: false,
  primary: false,
  secondary: false
};
RaisedButton.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
undefined !== "production" ? RaisedButton.propTypes = {
  /**
   * Override the default background color for the button,
   * but not the default disabled background color
   * (use `disabledBackgroundColor` for this).
   */
  backgroundColor: _react.PropTypes.string,
  /**
   * Override the inline-styles of the button element.
   */
  buttonStyle: _react.PropTypes.object,
  /**
   * The content of the button.
   * If a label is provided via the `label` prop, the text within the label
   * will be displayed in addition to the content provided here.
   */
  children: _react.PropTypes.node,
  /**
   * The CSS class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * If true, the button will be disabled.
   */
  disabled: _react.PropTypes.bool,
  /**
   * Override the default background color for the button
   * when it is disabled.
   */
  disabledBackgroundColor: _react.PropTypes.string,
  /**
   * The color of the button's label when the button is disabled.
   */
  disabledLabelColor: _react.PropTypes.string,
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: _react.PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _react.PropTypes.string,
  /**
   * An icon to be displayed within the button.
   */
  icon: _react.PropTypes.node,
  /**
   * The label to be displayed within the button.
   * If content is provided via the `children` prop, that content will be
   * displayed in addition to the label provided here.
   */
  label: validateLabel,
  /**
   * The color of the button's label.
   */
  labelColor: _react.PropTypes.string,
  /**
   * The position of the button's label relative to the button's `children`.
   */
  labelPosition: _react.PropTypes.oneOf(['before', 'after']),
  /**
   * Override the inline-styles of the button's label element.
   */
  labelStyle: _react.PropTypes.object,
  /** @ignore */
  onMouseDown: _react.PropTypes.func,
  /** @ignore */
  onMouseEnter: _react.PropTypes.func,
  /** @ignore */
  onMouseLeave: _react.PropTypes.func,
  /** @ignore */
  onMouseUp: _react.PropTypes.func,
  /** @ignore */
  onTouchEnd: _react.PropTypes.func,
  /** @ignore */
  onTouchStart: _react.PropTypes.func,
  /**
   * Override the inline style of the button overlay.
   */
  overlayStyle: _react.PropTypes.object,
  /**
   * If true, the button will use the theme's primary color.
   */
  primary: _react.PropTypes.bool,
  /**
   * Override the inline style of the ripple element.
   */
  rippleStyle: _react.PropTypes.object,
  /**
   * If true, the button will use the theme's secondary color.
   * If both `secondary` and `primary` are true, the button will use
   * the theme's primary color.
   */
  secondary: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;
exports.default = RaisedButton;

/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _RaisedButton = __webpack_require__(1072);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RaisedButton2.default;

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3Rpb25zL0FkbWluLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL0FkZFRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm1zL1NldFByb3BlcnR5LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NlY3Rpb25zL1Byb3BlcnR5UHJvZmlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWN0aW9ucy9UYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWN0aW9ucy9UYWJsZUxpc3QuanN4Iiwid2VicGFjazovLy8uLi9+L21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9SYWlzZWRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4uL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiQWRtaW4iLCJhY3Rpb25zIiwic2F2ZVRhYmxlIiwiYmluZCIsIkV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXNwYXRjaCIsInRibmFtZSIsInJlZnMiLCJ0YWJsZU5hbWUiLCJ2YWx1ZSIsInRiY2FwYWNpdHkiLCJ0YWJsZVNlYXRzIiwidGJQcm9wIiwidGFibGVQcm9wZXJ0eSIsImxlbmd0aCIsInRiT2JqZWN0IiwicHJvcElkIiwic3RhcnRBZGRUYWJsZSIsInByb3BlcnR5IiwicmVuZGVyRm9ybSIsInByb3BLZXkiLCJ1bmRlZmluZWQiLCJzdGF0ZSIsImF1dGgiLCJBZGRUYWJsZSIsInNldFByb3AiLCJoYW5kbGVJbWFnZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInNldFN0YXRlIiwibVJlZiIsInBuYW1lIiwicHJvcE5hbWUiLCJwYWRkIiwicHJvcEFkZHJlc3MiLCJwbG9jIiwicHJvcExvY2F0aW9uIiwicGF2YSIsInBjb2RlIiwiZ2VuZXJhdGUiLCJhZGRyZXNzIiwiYXZhdGFyIiwicHJvcENvZGUiLCJwcm9wQ3JlYXRvciIsInVpZCIsInN0YXJ0QWRkUHJvcGVydHkiLCJmb2N1cyIsIlNldFByb3BlcnR5IiwibGluayIsImNoaWxkIiwiZ2V0RG93bmxvYWRVUkwiLCJ0aGVuIiwidXJsIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJQcm9wIiwiT2JqZWN0Iiwia2V5cyIsIlByb3BlcnR5UHJvZmlsZSIsInJlbmRlclRhYmxlIiwiVGFibGUiLCJjb2xsZWN0VGFibGVzIiwidGFibGVzIiwicmVuZGVyVGFibGVzIiwibWFwIiwidGFibGUiLCJ0YktleSIsIlRhYmxlTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlFLGlCQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEseUdBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBQ1E7QUFDUDtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxpQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsbUNBQWY7QUFDRSxvRUFERjtBQUVFO0FBRkYsU0FERjtBQUtFO0FBQUE7QUFBQSxZQUFLLFdBQVUsbUNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLEtBQWY7QUFDRTtBQURGLFdBREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQURGO0FBSkY7QUFMRixPQURGO0FBZ0JEOzs7Ozs7QUFDRjtrQkFDYywyQkFBVUMsS0FBVixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENmOztBQUNBOztJQUFZQyxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdWO0FBQ0Esb0JBQVlGLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0csU0FBTCxHQUFpQixNQUFLQSxTQUFM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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsK0I7Ozs7Ozs7O0FDemRBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHlDIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nXG5pbXBvcnQgU2V0UHJvcGVydHkgZnJvbSAnU2V0UHJvcGVydHknXG5pbXBvcnQgQWRkVGFibGUgZnJvbSAnQWRkVGFibGUnXG5pbXBvcnQgUHJvcGVydHlQcm9maWxlIGZyb20gJ1Byb3BlcnR5UHJvZmlsZSdcbmltcG9ydCBUYWJsZUxpc3QgZnJvbSAnVGFibGVMaXN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuXG5leHBvcnQgY2xhc3MgQWRtaW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgLy9UT0RPIHNob3cgU2V0UHJvcGVydHkgb25seSBpZiBwcm9wIG5vdCBzZXRcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhZG1pbi1wYW5lbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgc21hbGwtMTIgbWVkaXVtLTYgbGFyZ2UtNlwiPlxuICAgICAgICAgIDxTZXRQcm9wZXJ0eS8+XG4gICAgICAgICAgPEFkZFRhYmxlLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBzbWFsbC0xMiBsYXJnZS02IG1lZGl1bS02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxQcm9wZXJ0eVByb2ZpbGUvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VGFibGVMaXN0Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoQWRtaW4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWN0aW9ucy9BZG1pbi5qc3giLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnc3JjL2FjdGlvbnMvYWN0aW9ucydcblxuZXhwb3J0IGNsYXNzIEFkZFRhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLy9jbGFzcyBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNhdmVUYWJsZSA9IHRoaXMuc2F2ZVRhYmxlLmJpbmQodGhpcyk7XG4gIH1cbiAgc2F2ZVRhYmxlKEV2ZW50KSB7XG4gICAgRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIge2Rpc3BhdGNofSA9IHRoaXMucHJvcHM7XG4gICAgLy92YWxpZGF0ZSBhbGwgZGF0YSB3ZSBuZWVkIGlzIHByZXNlbnRcbiAgICB2YXIgdGJuYW1lID0gdGhpcy5yZWZzLnRhYmxlTmFtZS52YWx1ZTtcbiAgICB2YXIgdGJjYXBhY2l0eSA9IHRoaXMucmVmcy50YWJsZVNlYXRzLnZhbHVlO1xuICAgIHZhciB0YlByb3AgPSAgdGhpcy5yZWZzLnRhYmxlUHJvcGVydHkudmFsdWU7XG5cbiAgICBpZih0Ym5hbWUubGVuZ3RoID09IDAgfHwgdGJjYXBhY2l0eS5sZW5ndGggPT0gIDAgfHwgdGJQcm9wLmxlbmd0aCA9PSAwKSB7XG5cbiAgICB9IGVsc2VcbiAgICB7XG4gICAgICAvL2NhbGwgc3RhcnQgYWRkdGFibGVcbiAgICAgIC8vY3VyYXRlIGRhdGFcbiAgICAgIHZhciB0Yk9iamVjdCA9IHtcbiAgICAgICAgcHJvcElkOnRiUHJvcCxcbiAgICAgICAgdGJuYW1lLFxuICAgICAgICB0YmNhcGFjaXR5XG4gICAgICB9XG4gICAgICAvL3VwbG9hZERhdGFcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuc3RhcnRBZGRUYWJsZSh0Yk9iamVjdCkpXG4gICAgfVxuICB9XG4gIC8vd2hlbiBtb3VudGVkIGxvYWQgLi5cbiAgQ29tcG9uZW50RGlkTW91bnQoKXtcblxuICB9XG4gIC8vZHJhd1xuICByZW5kZXIoKSB7XG4gICAgdmFyIHtwcm9wZXJ0eX0gPSAgdGhpcy5wcm9wcztcbiAgICB2YXIgcmVuZGVyRm9ybSA9ICAoKSA9PiB7XG4gICAgICBpZihwcm9wZXJ0eS5wcm9wS2V5ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIHJlZj0nZm9ybScgb25TdWJtaXQ9e3RoaXMuc2F2ZVRhYmxlfT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZSAvIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlZj0ndGFibGVOYW1lJyB0eXBlPSd0ZXh0Jy8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5UYWJsZSBDYXBhY2l0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlZj0ndGFibGVTZWF0cycgdHlwZT0nbnVtYmVyJy8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgcmVmPSd0YWJsZVByb3BlcnR5JyB0eXBlPVwiaGlkZGVuXCIgZGVmYXVsdFZhbHVlPXtwcm9wZXJ0eS5wcm9wS2V5fS8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J1dHRvbicgdmFsdWU9J0FkZCBUYWJsZScvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgIDxwPlBsZWFzZSBQcm9wZXJ0eSBEZXRhaWxzIFRvIEFkZCBBIFRhYmxlPC9wPlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIHtyZW5kZXJGb3JtKCl9XG4gICAgPC9kaXY+KVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KChzdGF0ZSkgPT4ge1xuICByZXR1cm57XG4gICAgYXV0aDogc3RhdGUuYXV0aCxcbiAgICBwcm9wZXJ0eTogc3RhdGUucHJvcGVydHlcbiAgfVxufSkoQWRkVGFibGUpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Zvcm1zL0FkZFRhYmxlLmpzeCIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICdzcmMvYWN0aW9ucy9hY3Rpb25zJ1xuaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XG5cbi8vcGxhaW4gY2xhc3MgIGZvciB0ZXN0aW5nXG5leHBvcnQgY2xhc3MgU2V0UHJvcGVydHkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIC8vYmluZCB0aGUgZnVuY3NcbiAgICB0aGlzLnNldFByb3AgPSB0aGlzLnNldFByb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUltYWdlID0gdGhpcy5oYW5kbGVJbWFnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWxlOiBudWxsXG4gICAgfTtcbiAgfVxuICBoYW5kbGVJbWFnZShFdmVudCkge1xuICAgIEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGZpbGUgPSBFdmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpbGU6IGZpbGUsXG4gICAgfSk7XG4gIH1cbiAgc2V0UHJvcChFdmVudCkge1xuICAgIC8vcHJldmVudCByYWZyZXNzc2hoaFxuICAgIEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFye2Rpc3BhdGNoLCBhdXRofSA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG1SZWYgPSB0aGlzLnJlZnM7XG4gICAgdmFyIHBuYW1lID0gbVJlZi5wcm9wTmFtZS52YWx1ZTtcbiAgICB2YXIgcGFkZCA9IG1SZWYucHJvcEFkZHJlc3MudmFsdWU7XG4gICAgdmFyIHBsb2MgPSBtUmVmLnByb3BMb2NhdGlvbi52YWx1ZTtcbiAgICB2YXIgcGF2YSA9IHRoaXMuc3RhdGUuZmlsZTtcblxuICAgIGlmKHBuYW1lLmxlbmd0aCA+IDAgJiYgcGFkZC5sZW5ndGgpIHtcbiAgICAgIC8vY29sbGVjdCB1c2VyIGlkXG4gICAgICAvL21ha2Ugb2JqZWN0IHRvIHNlbmQgdG8gZGlzcGF0Y2hcbiAgICAgIHZhciBwY29kZSA9IHNob3J0aWQuZ2VuZXJhdGUoKTtcbiAgICAgIHZhciBwcm9wZXJ0eSA9IHtcbiAgICAgICAgcG5hbWUsXG4gICAgICAgIGFkZHJlc3M6IHBhZGQsXG4gICAgICAgIGF2YXRhcjogcGF2YSxcbiAgICAgICAgcHJvcENvZGU6IHBjb2RlLFxuICAgICAgICBwcm9wQ3JlYXRvcjogYXV0aC51aWRcbiAgICAgIH1cbiAgICAgIC8vZGlzcGF0Y2ggb3VyIGFjdGlvbiBnZW5lcmF0b3JcbiAgICAgIGRpc3BhdGNoKGFjdGlvbnMuc3RhcnRBZGRQcm9wZXJ0eShwcm9wZXJ0eSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vVE9ETyBkaXNwbGF5IHdhcm5pbmcgZm9yIGZvcm1cbiAgICAgIHRoaXMucmVmcy5wcm9wTmFtZS5mb2N1cygpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gcmVmPVwiZm9ybVwiIG9uU3VibWl0PXt0aGlzLnNldFByb3B9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJwcm9wTmFtZVwiIHBsYWNlaG9sZGVyPVwiQXdlc29tZSBSZXN0YXVyYW50XCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+QWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJwcm9wQWRkcmVzc1wiIHBsYWNlaG9sZGVyPVwiMjJCIEJha2VyXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+TG9jYXRpb248L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwicHJvcExvY2F0aW9uXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPkF2YXRhcjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHJlZj1cImZpbGVcIiB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW1hZ2V9IGNsYXNzTmFtZT1cImJ1dHRvbiB5ZWxsb3ctYnV0dG9uIHVwbG9hZC1maWxlXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdmFsdWU9XCJTQVZFIFBST1BFUlRZXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYXV0aDogc3RhdGUuYXV0aFxuICB9XG59KShTZXRQcm9wZXJ0eSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Zvcm1zL1NldFByb3BlcnR5LmpzeCIsImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3N0b3JhZ2VSZWZ9IGZyb20gJ3NyYy9maXJlYmFzZS9pbmRleCdcblxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvL2FkZCBhIHN0YXRlIGl0ZW0gZm9yIHRoZSBpbWFnZSBsaW5rXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpbms6ICcnXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIge2Rpc3BhdGNoLCBwcm9wZXJ0eX0gPSB0aGlzLnByb3BzO1xuICAgIGlmKHByb3BlcnR5LmF2YXRhcikge1xuICAgICAgc3RvcmFnZVJlZi5jaGlsZChwcm9wZXJ0eS5hdmF0YXIpLmdldERvd25sb2FkVVJMKCkudGhlbigodXJsKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGxpbms6IHVybFxuICAgICAgICB9KTtcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIC8vYW4gZXJyb3Igb2NjdXJyZWRcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG9jY3VyZWQgd2hlbiBmZXRjaGluZyBpbWFnZSBsaW5rJywgZXJyb3IgKVxuICAgICAgfSlcbiAgICB9IFxuICB9XG4gIHJlbmRlcigpe1xuICAgIHZhciB7cHJvcGVydHl9ID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcmVuZGVyUHJvcCA9ICAoKSA9PiB7XG4gICAgICBpZihPYmplY3Qua2V5cyhwcm9wZXJ0eSkubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgIDxkaXYgaWQ9XCJlbXB0eU1lc3NhZ2VcIj48cD5QbGVhc2UgU2V0IFByb3BlcnR5IFByb2ZpbGU8L3A+PC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIHNtYWxsLTEyIGxhcmdlLTIgbWVkaXVtLTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInByb3BpbWdcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb3BlcnR5LWF2YXRhclwiIHNyYz17dGhpcy5zdGF0ZS5saW5rfS8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgc21hbGwtMTIgbGFyZ2UtMTAgbWVkaXVtLTEwXCI+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8cD57cHJvcGVydHkucG5hbWV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInByb3Bjb2RlXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkNvZGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8cD57cHJvcGVydHkucHJvcENvZGV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInByb3BhZGRyZXNzXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxwPntwcm9wZXJ0eS5hZGRyZXNzfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybihcbiAgICAgIDxkaXY+e3JlbmRlclByb3AoKX08L2Rpdj5cbiAgICApXG4gIH1cbiB9XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PntcbiAgcmV0dXJuIHtcbiAgICBwcm9wZXJ0eTogc3RhdGUucHJvcGVydHlcbiAgfVxufSkoUHJvcGVydHlQcm9maWxlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zZWN0aW9ucy9Qcm9wZXJ0eVByb2ZpbGUuanN4IiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuZXhwb3J0IGNsYXNzIFRhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgdmFyIHt0Ym5hbWUsIHRiY2FwYWNpdHl9ID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcmVuZGVyVGFibGUgPSAoKSA9PiB7XG4gICAgICBpZih0Ym5hbWUgIT0gdW5kZWZpbmVkICYmIHRiY2FwYWNpdHkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgIDxsYWJlbD5UYWJsZSBOYW1lL051bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxwIHJlZj1cInRibmFtZVwiPnt0Ym5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgICAgPGxhYmVsPlRhYmxlIENhcGFjaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHAgcmVmPVwidGJjYXBhY2l0eVwiPnt0YmNhcGFjaXR5fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4oPGRpdj48cD5ObyBUYWJsZSBIZXJlPC9wPjwvZGl2PilcbiAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICB7cmVuZGVyVGFibGUoKX1cbiAgICAgIDwvZGl2PlxuICApO1xufVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NlY3Rpb25zL1RhYmxlLmpzeCIsImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgVGFibGUgZnJvbSAnVGFibGUnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJ3NyYy9hY3Rpb25zL2FjdGlvbnMnXG5cbmV4cG9ydCBjbGFzcyBUYWJsZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL3doZW4gbW91bnRlZCBhbHNvIHB1bGwgc29tZSB0YWJsZXMgZnJvbSBkYiBpZiBhbnlcbiAgICB2YXIge2Rpc3BhdGNofSA9IHRoaXMucHJvcHM7XG4gICAgZGlzcGF0Y2goYWN0aW9ucy5jb2xsZWN0VGFibGVzKCkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICB2YXIge3RhYmxlc30gPSB0aGlzLnByb3BzO1xuICAgIHZhciByZW5kZXJUYWJsZXMgPSAoKSA9PiB7XG4gICAgICBpZih0YWJsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGFibGVzLm1hcCgodGFibGUpID0+IHtcbiAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8VGFibGUga2V5PXt0YWJsZS50YktleX0gey4uLnRhYmxlfS8+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGFpbmVyX19tZXNzYWdlXCI+Tm8gVGFibGVzIDwvcD5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICB7cmVuZGVyVGFibGVzKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGFibGVzOiBzdGF0ZS50YWJsZXNcbiAgfVxufSkoVGFibGVMaXN0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvc2VjdGlvbnMvVGFibGVMaXN0LmpzeCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfY29sb3JNYW5pcHVsYXRvciA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbG9yTWFuaXB1bGF0b3InKTtcblxudmFyIF9jaGlsZFV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvY2hpbGRVdGlscycpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvRW5oYW5jZWRCdXR0b24nKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbmhhbmNlZEJ1dHRvbik7XG5cbnZhciBfUGFwZXIgPSByZXF1aXJlKCcuLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGVMYWJlbChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXByb3BzLmNoaWxkcmVuICYmIHByb3BzLmxhYmVsICE9PSAwICYmICFwcm9wcy5sYWJlbCAmJiAhcHJvcHMuaWNvbikge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUmVxdWlyZWQgcHJvcCBsYWJlbCBvciBjaGlsZHJlbiBvciBpY29uIHdhcyBub3Qgc3BlY2lmaWVkIGluICcgKyBjb21wb25lbnROYW1lICsgJy4nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgYnV0dG9uID0gX2NvbnRleHQkbXVpVGhlbWUuYnV0dG9uLFxuICAgICAgcmFpc2VkQnV0dG9uID0gX2NvbnRleHQkbXVpVGhlbWUucmFpc2VkQnV0dG9uO1xuICB2YXIgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkQmFja2dyb3VuZENvbG9yID0gcHJvcHMuZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBkaXNhYmxlZExhYmVsQ29sb3IgPSBwcm9wcy5kaXNhYmxlZExhYmVsQ29sb3IsXG4gICAgICBmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBsYWJlbFBvc2l0aW9uID0gcHJvcHMubGFiZWxQb3NpdGlvbixcbiAgICAgIHByaW1hcnkgPSBwcm9wcy5wcmltYXJ5LFxuICAgICAgc2Vjb25kYXJ5ID0gcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcblxuXG4gIHZhciBhbW91bnQgPSBwcmltYXJ5IHx8IHNlY29uZGFyeSA/IDAuNCA6IDAuMDg7XG5cbiAgdmFyIGJhY2tncm91bmRDb2xvciA9IHJhaXNlZEJ1dHRvbi5jb2xvcjtcbiAgdmFyIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24udGV4dENvbG9yO1xuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IGRpc2FibGVkQmFja2dyb3VuZENvbG9yIHx8IHJhaXNlZEJ1dHRvbi5kaXNhYmxlZENvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSBkaXNhYmxlZExhYmVsQ29sb3IgfHwgcmFpc2VkQnV0dG9uLmRpc2FibGVkVGV4dENvbG9yO1xuICB9IGVsc2UgaWYgKHByaW1hcnkpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24ucHJpbWFyeUNvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24ucHJpbWFyeVRleHRDb2xvcjtcbiAgfSBlbHNlIGlmIChzZWNvbmRhcnkpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24uc2Vjb25kYXJ5Q29sb3I7XG4gICAgbGFiZWxDb2xvciA9IHJhaXNlZEJ1dHRvbi5zZWNvbmRhcnlUZXh0Q29sb3I7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb3BzLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgYmFja2dyb3VuZENvbG9yID0gcHJvcHMuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICBpZiAocHJvcHMubGFiZWxDb2xvcikge1xuICAgICAgbGFiZWxDb2xvciA9IHByb3BzLmxhYmVsQ29sb3I7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1dHRvbkhlaWdodCA9IHN0eWxlICYmIHN0eWxlLmhlaWdodCB8fCBidXR0b24uaGVpZ2h0O1xuICB2YXIgYm9yZGVyUmFkaXVzID0gMjtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIG1pbldpZHRoOiBmdWxsV2lkdGggPyAnMTAwJScgOiBidXR0b24ubWluV2lkdGhcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgaGVpZ2h0OiBidXR0b25IZWlnaHQsXG4gICAgICBsaW5lSGVpZ2h0OiBidXR0b25IZWlnaHQgKyAncHgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgIC8vIFRoYXQncyB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgYSBidXR0b24gYnV0IG5vdCBhIGxpbmtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBmb250U2l6ZTogcmFpc2VkQnV0dG9uLmZvbnRTaXplLFxuICAgICAgbGV0dGVyU3BhY2luZzogMCxcbiAgICAgIHRleHRUcmFuc2Zvcm06IHJhaXNlZEJ1dHRvbi50ZXh0VHJhbnNmb3JtIHx8IGJ1dHRvbi50ZXh0VHJhbnNmb3JtIHx8ICd1cHBlcmNhc2UnLFxuICAgICAgZm9udFdlaWdodDogcmFpc2VkQnV0dG9uLmZvbnRXZWlnaHQsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICBwYWRkaW5nTGVmdDogaWNvbiAmJiBsYWJlbFBvc2l0aW9uICE9PSAnYmVmb3JlJyA/IDggOiBiYXNlVGhlbWUuc3BhY2luZy5kZXNrdG9wR3V0dGVyTGVzcyxcbiAgICAgIHBhZGRpbmdSaWdodDogaWNvbiAmJiBsYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJyA/IDggOiBiYXNlVGhlbWUuc3BhY2luZy5kZXNrdG9wR3V0dGVyTGVzcyxcbiAgICAgIGNvbG9yOiBsYWJlbENvbG9yXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIG1hcmdpbkxlZnQ6IGxhYmVsICYmIGxhYmVsUG9zaXRpb24gIT09ICdiZWZvcmUnID8gMTIgOiAwLFxuICAgICAgbWFyZ2luUmlnaHQ6IGxhYmVsICYmIGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gMTIgOiAwXG4gICAgfSxcbiAgICBvdmVybGF5OiB7XG4gICAgICBoZWlnaHQ6IGJ1dHRvbkhlaWdodCxcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAoc3RhdGUua2V5Ym9hcmRGb2N1c2VkIHx8IHN0YXRlLmhvdmVyZWQpICYmICFkaXNhYmxlZCAmJiAoMCwgX2NvbG9yTWFuaXB1bGF0b3IuZmFkZSkobGFiZWxDb2xvciwgYW1vdW50KSxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICB0b3A6IDBcbiAgICB9LFxuICAgIHJpcHBsZToge1xuICAgICAgY29sb3I6IGxhYmVsQ29sb3IsXG4gICAgICBvcGFjaXR5OiAhKHByaW1hcnkgfHwgc2Vjb25kYXJ5KSA/IDAuMSA6IDAuMTZcbiAgICB9XG4gIH07XG59XG5cbnZhciBSYWlzZWRCdXR0b24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShSYWlzZWRCdXR0b24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJhaXNlZEJ1dHRvbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBSYWlzZWRCdXR0b24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gUmFpc2VkQnV0dG9uLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShSYWlzZWRCdXR0b24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdmVyZWQ6IGZhbHNlLFxuICAgICAga2V5Ym9hcmRGb2N1c2VkOiBmYWxzZSxcbiAgICAgIHRvdWNoZWQ6IGZhbHNlLFxuICAgICAgaW5pdGlhbFpEZXB0aDogMCxcbiAgICAgIHpEZXB0aDogMFxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gb25seSBsaXN0ZW4gdG8gbGVmdCBjbGlja3NcbiAgICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aCArIDFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZURvd24pIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlVXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoXG4gICAgICB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlVXApIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmtleWJvYXJkRm9jdXNlZCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoLFxuICAgICAgICAgIGhvdmVyZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUua2V5Ym9hcmRGb2N1c2VkICYmICFfdGhpcy5zdGF0ZS50b3VjaGVkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBob3ZlcmVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VFbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdG91Y2hlZDogdHJ1ZSxcbiAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoICsgMVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaEVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b3VjaGVkOiB0cnVlLFxuICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGhcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Ub3VjaEVuZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblRvdWNoRW5kKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVLZXlib2FyZEZvY3VzID0gZnVuY3Rpb24gKGV2ZW50LCBrZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgIHZhciB6RGVwdGggPSBrZXlib2FyZEZvY3VzZWQgJiYgIV90aGlzLnByb3BzLmRpc2FibGVkID8gX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aCArIDEgOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHpEZXB0aDogekRlcHRoLFxuICAgICAgICBrZXlib2FyZEZvY3VzZWQ6IGtleWJvYXJkRm9jdXNlZFxuICAgICAgfSk7XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFJhaXNlZEJ1dHRvbiwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB2YXIgekRlcHRoID0gdGhpcy5wcm9wcy5kaXNhYmxlZCA/IDAgOiAxO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHpEZXB0aDogekRlcHRoLFxuICAgICAgICBpbml0aWFsWkRlcHRoOiB6RGVwdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIHpEZXB0aCA9IG5leHRQcm9wcy5kaXNhYmxlZCA/IDAgOiAxO1xuICAgICAgdmFyIG5leHRTdGF0ZSA9IHtcbiAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgIGluaXRpYWxaRGVwdGg6IHpEZXB0aFxuICAgICAgfTtcblxuICAgICAgaWYgKG5leHRQcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICBuZXh0U3RhdGUuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yID0gX3Byb3BzLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICBidXR0b25TdHlsZSA9IF9wcm9wcy5idXR0b25TdHlsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVkQmFja2dyb3VuZENvbG9yID0gX3Byb3BzLmRpc2FibGVkQmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgIGRpc2FibGVkTGFiZWxDb2xvciA9IF9wcm9wcy5kaXNhYmxlZExhYmVsQ29sb3IsXG4gICAgICAgICAgZnVsbFdpZHRoID0gX3Byb3BzLmZ1bGxXaWR0aCxcbiAgICAgICAgICBpY29uID0gX3Byb3BzLmljb24sXG4gICAgICAgICAgbGFiZWwgPSBfcHJvcHMubGFiZWwsXG4gICAgICAgICAgbGFiZWxDb2xvciA9IF9wcm9wcy5sYWJlbENvbG9yLFxuICAgICAgICAgIGxhYmVsUG9zaXRpb24gPSBfcHJvcHMubGFiZWxQb3NpdGlvbixcbiAgICAgICAgICBsYWJlbFN0eWxlID0gX3Byb3BzLmxhYmVsU3R5bGUsXG4gICAgICAgICAgb3ZlcmxheVN0eWxlID0gX3Byb3BzLm92ZXJsYXlTdHlsZSxcbiAgICAgICAgICBwcmltYXJ5ID0gX3Byb3BzLnByaW1hcnksXG4gICAgICAgICAgcmlwcGxlU3R5bGUgPSBfcHJvcHMucmlwcGxlU3R5bGUsXG4gICAgICAgICAgc2Vjb25kYXJ5ID0gX3Byb3BzLnNlY29uZGFyeSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydiYWNrZ3JvdW5kQ29sb3InLCAnYnV0dG9uU3R5bGUnLCAnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkQmFja2dyb3VuZENvbG9yJywgJ2Rpc2FibGVkTGFiZWxDb2xvcicsICdmdWxsV2lkdGgnLCAnaWNvbicsICdsYWJlbCcsICdsYWJlbENvbG9yJywgJ2xhYmVsUG9zaXRpb24nLCAnbGFiZWxTdHlsZScsICdvdmVybGF5U3R5bGUnLCAncHJpbWFyeScsICdyaXBwbGVTdHlsZScsICdzZWNvbmRhcnknLCAnc3R5bGUnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG4gICAgICB2YXIgbWVyZ2VkUmlwcGxlU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMucmlwcGxlLCByaXBwbGVTdHlsZSk7XG5cbiAgICAgIHZhciBidXR0b25FdmVudEhhbmRsZXJzID0gZGlzYWJsZWQgPyB7fSA6IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuICAgICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlTW91c2VVcCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZCxcbiAgICAgICAgb25LZXlib2FyZEZvY3VzOiB0aGlzLmhhbmRsZUtleWJvYXJkRm9jdXNcbiAgICAgIH07XG5cbiAgICAgIHZhciBsYWJlbEVsZW1lbnQgPSBsYWJlbCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMubGFiZWwsIGxhYmVsU3R5bGUpKSB9LFxuICAgICAgICBsYWJlbFxuICAgICAgKTtcblxuICAgICAgdmFyIGljb25DbG9uZWQgPSBpY29uICYmICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShpY29uLCB7XG4gICAgICAgIGNvbG9yOiBpY29uLnByb3BzLmNvbG9yIHx8IHN0eWxlcy5sYWJlbC5jb2xvcixcbiAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuaWNvbiwgaWNvbi5wcm9wcy5zdHlsZSlcbiAgICAgIH0pO1xuXG4gICAgICAvLyBQbGFjZSBsYWJlbCBiZWZvcmUgb3IgYWZ0ZXIgY2hpbGRyZW4uXG4gICAgICB2YXIgY2hpbGRyZW5GcmFnbWVudCA9IGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8ge1xuICAgICAgICBsYWJlbEVsZW1lbnQ6IGxhYmVsRWxlbWVudCxcbiAgICAgICAgaWNvbkNsb25lZDogaWNvbkNsb25lZCxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9IDoge1xuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgIGljb25DbG9uZWQ6IGljb25DbG9uZWQsXG4gICAgICAgIGxhYmVsRWxlbWVudDogbGFiZWxFbGVtZW50XG4gICAgICB9O1xuXG4gICAgICB2YXIgZW5oYW5jZWRCdXR0b25DaGlsZHJlbiA9ICgwLCBfY2hpbGRVdGlscy5jcmVhdGVDaGlsZEZyYWdtZW50KShjaGlsZHJlbkZyYWdtZW50KTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUGFwZXIyLmRlZmF1bHQsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSksXG4gICAgICAgICAgekRlcHRoOiB0aGlzLnN0YXRlLnpEZXB0aFxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfRW5oYW5jZWRCdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIGJ1dHRvbkV2ZW50SGFuZGxlcnMsIHtcbiAgICAgICAgICAgIHJlZjogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5idXR0b24sIGJ1dHRvblN0eWxlKSxcbiAgICAgICAgICAgIGZvY3VzUmlwcGxlQ29sb3I6IG1lcmdlZFJpcHBsZVN0eWxlcy5jb2xvcixcbiAgICAgICAgICAgIHRvdWNoUmlwcGxlQ29sb3I6IG1lcmdlZFJpcHBsZVN0eWxlcy5jb2xvcixcbiAgICAgICAgICAgIGZvY3VzUmlwcGxlT3BhY2l0eTogbWVyZ2VkUmlwcGxlU3R5bGVzLm9wYWNpdHksXG4gICAgICAgICAgICB0b3VjaFJpcHBsZU9wYWNpdHk6IG1lcmdlZFJpcHBsZVN0eWxlcy5vcGFjaXR5XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiAnb3ZlcmxheScsXG4gICAgICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMub3ZlcmxheSwgb3ZlcmxheVN0eWxlKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmhhbmNlZEJ1dHRvbkNoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUmFpc2VkQnV0dG9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuUmFpc2VkQnV0dG9uLm11aU5hbWUgPSAnUmFpc2VkQnV0dG9uJztcblJhaXNlZEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgbGFiZWxQb3NpdGlvbjogJ2FmdGVyJyxcbiAgZnVsbFdpZHRoOiBmYWxzZSxcbiAgcHJpbWFyeTogZmFsc2UsXG4gIHNlY29uZGFyeTogZmFsc2Vcbn07XG5SYWlzZWRCdXR0b24uY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFJhaXNlZEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgYnV0dG9uLFxuICAgKiBidXQgbm90IHRoZSBkZWZhdWx0IGRpc2FibGVkIGJhY2tncm91bmQgY29sb3JcbiAgICogKHVzZSBgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3JgIGZvciB0aGlzKS5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgYnV0dG9uIGVsZW1lbnQuXG4gICAqL1xuICBidXR0b25TdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uLlxuICAgKiBJZiBhIGxhYmVsIGlzIHByb3ZpZGVkIHZpYSB0aGUgYGxhYmVsYCBwcm9wLCB0aGUgdGV4dCB3aXRoaW4gdGhlIGxhYmVsXG4gICAqIHdpbGwgYmUgZGlzcGxheWVkIGluIGFkZGl0aW9uIHRvIHRoZSBjb250ZW50IHByb3ZpZGVkIGhlcmUuXG4gICAqL1xuICBjaGlsZHJlbjogX3JlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAvKipcbiAgICogVGhlIENTUyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b25cbiAgICogd2hlbiBpdCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkQmFja2dyb3VuZENvbG9yOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgd2hlbiB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWRMYWJlbENvbG9yOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIGhyZWY6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogQW4gaWNvbiB0byBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSBidXR0b24uXG4gICAqL1xuICBpY29uOiBfcmVhY3QuUHJvcFR5cGVzLm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgYnV0dG9uLlxuICAgKiBJZiBjb250ZW50IGlzIHByb3ZpZGVkIHZpYSB0aGUgYGNoaWxkcmVuYCBwcm9wLCB0aGF0IGNvbnRlbnQgd2lsbCBiZVxuICAgKiBkaXNwbGF5ZWQgaW4gYWRkaXRpb24gdG8gdGhlIGxhYmVsIHByb3ZpZGVkIGhlcmUuXG4gICAqL1xuICBsYWJlbDogdmFsaWRhdGVMYWJlbCxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwuXG4gICAqL1xuICBsYWJlbENvbG9yOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgcmVsYXRpdmUgdG8gdGhlIGJ1dHRvbidzIGBjaGlsZHJlbmAuXG4gICAqL1xuICBsYWJlbFBvc2l0aW9uOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mKFsnYmVmb3JlJywgJ2FmdGVyJ10pLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGJ1dHRvbidzIGxhYmVsIGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbFN0eWxlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZURvd246IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUVudGVyOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VMZWF2ZTogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlVXA6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaEVuZDogX3JlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoU3RhcnQ6IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUgc3R5bGUgb2YgdGhlIGJ1dHRvbiBvdmVybGF5LlxuICAgKi9cbiAgb3ZlcmxheVN0eWxlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB1c2UgdGhlIHRoZW1lJ3MgcHJpbWFyeSBjb2xvci5cbiAgICovXG4gIHByaW1hcnk6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUgc3R5bGUgb2YgdGhlIHJpcHBsZSBlbGVtZW50LlxuICAgKi9cbiAgcmlwcGxlU3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZSB0aGUgdGhlbWUncyBzZWNvbmRhcnkgY29sb3IuXG4gICAqIElmIGJvdGggYHNlY29uZGFyeWAgYW5kIGBwcmltYXJ5YCBhcmUgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZVxuICAgKiB0aGUgdGhlbWUncyBwcmltYXJ5IGNvbG9yLlxuICAgKi9cbiAgc2Vjb25kYXJ5OiBfcmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59IDogdm9pZCAwO1xuZXhwb3J0cy5kZWZhdWx0ID0gUmFpc2VkQnV0dG9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL1JhaXNlZEJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfUmFpc2VkQnV0dG9uID0gcmVxdWlyZSgnLi9SYWlzZWRCdXR0b24nKTtcblxudmFyIF9SYWlzZWRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmFpc2VkQnV0dG9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1JhaXNlZEJ1dHRvbjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9+L21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9