import React from 'react'
import expect from 'expect'
//enzyme stuff
import {mount} from 'enzyme'
import sinon from 'sinon'

import {TableList} from 'TableList'

describe('<TableList/>', () => {
  it('should exist',  () => {
    expect(TableList).toExist()
  })
})
