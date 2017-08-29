import React from 'react'
import sinon from 'sinon'
import expect from 'expect'
//use enzyme to test components
import {mount} from 'enzyme'


import PropertyProfile from 'PropertyProfile'

describe('PropertyProfile', () => {
  it('should exist', () => {
    expect(PropertyProfile).toExist();
  })
  it('should render property message  if emmpty', () => {
    const property =  {};
    const wrapper = mount(<PropertyProfile property={property}/>);
    expect(wrapper.find('#emptyMessage')).toExist();
  })

})
