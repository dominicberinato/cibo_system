import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'script-loader!jquery'
var sinon = require('sinon');
//actions
import * as actions from 'actions';
//use enzyme to test components
import {mount} from 'enzyme'

import {PermComponent} from 'PermComponent'

describe('PermComponent',() => {
  it('should exist', () => {
    expect(PermComponent).toExist();
  });
})
