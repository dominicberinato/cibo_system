import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'script-loader!jquery'
import sinon from 'sinon'
import expect from 'expect'
//actions
import * as actions from 'actions';
//use enzyme to test components
import {mount} from 'enzyme'

import PropertyProfile from 'PropertyProfile'

describe('PropertyProfile', () => {
  it('should exist', () => {
    expect(PropertyProfile).toExist();
  })
})
