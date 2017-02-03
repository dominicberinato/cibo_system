import React from 'react'
import ReactDOM from 'react-dom'
// load jquery and foundation in the window scope
import $ from 'script!jquery'
import TestUtils from 'react-addons-test-utils'

import * as actions from 'actions'

//get the unconnected component
import {AddTable} from 'AddTable'

describe('AddTable',  () => {
  //check that component exists
  it('should exist', () => {
    expect(AddTable).toExist();
  });
});
