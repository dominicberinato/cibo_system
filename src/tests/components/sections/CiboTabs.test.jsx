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

  it('calls componentDidMount', () => {
    //make spy
    var spy = sinon.spy(CiboTabs.prototype, 'componentDidMount');
    //render component
    const wrapper = mount(<CiboTabs/>);
    //make assertion
    sinon.assert.calledOnce(spy);
    CiboTabs.prototype.componentDidMount.restore();

  });

  it('should not dispatch assocProp on invalid data', () => {
    const dispatch = sinon.spy();
    const wrapper = mount(<CiboTabs dispatch={dispatch}/>);
    wrapper.setProps({})
    wrapper.ref('propCode').simulate('change', {target:{value: ''}});
    wrapper.ref('form').simulate('submit');
    sinon.assert.notCalled(dispatch);
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
    const wrapper = mount(<CiboTabs auth={auth} dispatch={dispatch}/>);
    //wrapper.setProps({auth: auth});
    //mock input
    wrapper.ref('propCode').node.value = '123grt';
    wrapper.ref('form').simulate('submit');

    //assert spy was called
    sinon.assert.calledOnce(dispatch);
  });
})
