import React from 'react'
import $ from 'script-loader!jquery'
import sinon from 'sinon'
import * as actions from 'actions'
import {mount} from 'enzyme'
import expect from 'expect'
//store stuff
//thunk and createMockStore
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import {CiboTabs} from 'CiboTabs'

var createMockStore = configureMockStore([thunk])

describe('CiboTabs', () => {
  it('should exist',() => {
    expect(CiboTabs).toExist();
  });

  it('should dispatch assocProp when code is provided', () => {
    //mock a store with a user
    //mock a user
    var auth = {
      name:'Isaac Osiemo',
      photo: 'https://image.co',
      uid: 12343,
      email: 'e@2.co'
    };

    const store = createMockStore({auth});
    //make spy
    const dispatch = sinon.spy();

    //mount
    const wrapper = mount(<CiboTabs store={store} dispatch={dispatch}/>)
    //mock input
    wrapper.ref('propCode').simulate('change', {target:{value: '1234c'}});
    wrapper.ref('submit').simulate('click');

    //assert spy was called
    sinon.assert.calledOnce(dispatch);
  })
})
