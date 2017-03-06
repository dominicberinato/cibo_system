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

  it('should render correct property info', () => {
    var property = {
      propCode: '123YuH',
      Name: 'Isaacs Place',
      Address: 'Seapoint',
      avatar: '123'
    }

    const store = createMockStore({property});

    //mount element with our data
    const wrapper = mount(<PropertyProfile property={property}/>)

    expect(wrapper.find('#name')).toExist();
    // expect(wrapper.find('#propimg').to.have.length(1));
    // expect(wrapper.find('#propcode').to.have.length(1));
    // expect(wrapper.find('#propaddress').to.have.length(1));
  })
})
