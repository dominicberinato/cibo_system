import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
// load jquery and foundation in the window scope
import $ from 'script-loader!jquery'
import TestUtils from 'react-addons-test-utils'

//get the unconnected component
import {AddTable} from 'AddTable'

//enzyme stuff
import {mount} from 'enzyme'
import sinon from 'sinon'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

//use this to mock a store
var createMockStore = configureMockStore([thunk]);

describe('AddTable',  () => {
  //check that component exists
  it('should exist', () => {
    expect(AddTable).toExist();
  });

  //use spies to check that correct actions are dispatched
  it('should dispatch addTable when valid table added', () => {
    const dispatch = sinon.spy()
    //mock store with auth , prop
    //full render component
    //pass in spy as dispatch
    const wrapper = mount(<AddTable property={{propKey:1232}} dispatch={dispatch}/>);
    //set input values
    wrapper.ref('tableName').node.value = 5;
    wrapper.ref('tableSeats').node.value = 7;

    //simulate form submit
    wrapper.ref('form').simulate('submit');

    //assert that the spy was called
    sinon.assert.calledOnce(dispatch);
  });

  //check that invalid table isnt passed
  it('should not dispatch addTable with invalid table', () => {
    var addTableSpy = sinon.spy();

    const wrapper = mount(<AddTable property={{propKey:1232}} dispatch={addTableSpy}/>);
    //set input values
    wrapper.ref('tableName').node.value = '';
    wrapper.ref('tableSeats').node.value = '';

    //simulate form submit
    wrapper.ref('form').simulate('submit');

    //assert that the spy was called
    sinon.assert.notCalled(addTableSpy);
  })
});
