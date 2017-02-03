import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
// load jquery and foundation in the window scope
import $ from 'script!jquery'
import TestUtils from 'react-addons-test-utils'

import * as actions from 'actions'

//get the unconnected component
import {AddTable} from 'AddTable'

describe('AddTable',  () => {
  //check that component exists
  it('should exist', () => {
    expect(AddTable).toExist();
  });

  //use spies to check that correct actions are dispatched
  it('should dispatch addTable when valid table added', () => {
    var addTableSpy = expect.createSpy();
    //mock table data
    var table = {
     tbname:'Sambuka',
     tbcapacity: 7
    }

    //var addtable Action
    var action = actions.startAddTable(table);

    /*render component & test */
    var addtable = TestUtils.renderIntoDocument(<AddTable dispatch={addTableSpy}/>);
    var $element = $(ReactDOM.findDOMNode(addtable));

    //populate fields with data
    addtable.refs.tableName.value = table.tbname;
    addtable.refs.tableCapacity.value = table.tbcapacity;

    //simulate a submit
    TestUtils.Simulate.submit($element.find(('form')[0]));
    expect(addTableSpy).toHaveBeenCalledWith(action);
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
