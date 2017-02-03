import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
// load jquery and foundation in the window scope
import $ from 'script!jquery'
import TestUtils from 'react-addons-test-utils'

import * as actions from 'actions'

import {SetProperty} from 'SetProperty'

describe('SetProperty', () => {
  it('should exist', () => {
    expect(SetProperty).toExist();
  })
})
