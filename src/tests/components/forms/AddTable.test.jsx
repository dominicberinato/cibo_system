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
    var store = createMockStore({
      property: {propKey: 1234},
      auth: {uid: 5662}
    });
    //full render component
    //pass in spy as dispatch
    const wrapper = mount(<AddTable store={store} dispatch={dispatch}/>);
    //set input values
    wrapper.ref('tableName').simulate('change', {target: {value: '5'}});
    wrapper.ref('tableSeats').simulate('change', {target: {value: '5'}});

    //simulate form submit
    wrapper.ref('form').simulate('submit');

    //assert that the spy was called
    sinon.assert.calledOnce(dispatch);
  });

  //check that invalid table isnt passed
  it('should not dispatch addTable with invalid table', () => {
    var addTableSpy = expect.createSpy();

    //render component
    var addtable = TestUtils.renderIntoDocument(<AddTable dispatch={addTableSpy}/>);
    var $element = $(ReactDOM.findDOMNode(addtable));

    //set values
    addtable.refs.tableName.value = '';
    addtable.refs.tableCapacity.value = '';
    //simulate submit
    TestUtils.Simulate.submit($element.find('form')[0]);
    expect(addTableSpy).toNotHaveBeenCalled();
  })
});
