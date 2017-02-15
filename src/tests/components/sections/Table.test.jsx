import React from 'react'
import expect from 'expect'
//enzyme stuff
import {mount} from 'enzyme'
import sinon from 'sinon'

import {Table} from 'Table'

describe('<Table/>', () => {
  it('should exist',  () => {
    expect(Table).toExist();
  })

  it('should render with the correct data',  () => {
    const wrapper = mount(<Table tbname={7} tbcapacity={8}/>);

    expect(wrapper.ref('tbname')).toExist();
    expect(wrapper.ref('tbcapacity')).toExist();
  })
})
