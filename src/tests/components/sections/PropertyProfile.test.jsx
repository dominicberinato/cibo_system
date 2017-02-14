import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'script-loader!jquery'
import sinon from 'sinon'
import expect from 'expect'
//actions
import * as actions from 'actions';
//use enzyme to test components
import {mount} from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
//use this to mock a store
var createMockStore = configureMockStore([thunk]);

import PropertyProfile from 'PropertyProfile'

describe('PropertyProfile', () => {
  it('should exist', () => {
    expect(PropertyProfile).toExist();
  })
  it('should render property message  if emmpty', () => {
    const store = createMockStore({property: {}});

    const wrapper = mount(<PropertyProfile store={store}/>);
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
    const wrapper = mount(<PropertyProfile store={store}/>)

    expect(wrapper.find('#name')).toExist();
    // expect(wrapper.find('#propimg').to.have.length(1));
    // expect(wrapper.find('#propcode').to.have.length(1));
    // expect(wrapper.find('#propaddress').to.have.length(1));
  })
})
