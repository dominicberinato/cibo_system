import React from 'react'
import sinon from 'sinon'
import * as actions from 'actions'
import {mount} from 'enzyme'
import expect from 'expect'
//store stuff
import {CiboTabs} from 'CiboTabs'


describe('CiboTabs', () => {
  it('should exist',() => {
    expect(CiboTabs).toExist();
  });

  //TODO test componen t did muount

  it('should not dispatch assocProp on invalid data', () => {
    const dispatch = sinon.spy();
    const wrapper = mount(<CiboTabs property={{propKey:'17ty9y'}} dispatch={dispatch}/>);
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

    //make spy
    const dispatch = sinon.spy();
    //mount
    const wrapper = mount(<CiboTabs auth={auth} property={{propKey:'17ty9y'}} dispatch={dispatch}/>);
    //wrapper.setProps({auth: auth});
    //mock input
    wrapper.ref('propCode').node.value = '123grt';
    wrapper.ref('form').simulate('submit');
    //assert spy was called
    sinon.assert.calledOnce(dispatch);
  });
})
