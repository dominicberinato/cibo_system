import React from 'react'
import expect from 'expect'
import sinon from 'sinon'
import {shallow, mount} from 'enzyme'

import {ActiveTables} from 'ActiveTables'
import {ActiveTableItem} from 'ActiveTableItem'

describe('<ActiveTables/>',  () => {
  it('should exist', () => {
    expect(ActiveTables).toExist();
  });

  it('should allow adding of a new Bill', () =>{
    //mock aspy as dispatch
    const dispatch = sinon.spy();



    const tables = [{
      tbKey:1,
      tbname: 2,
      tbcapacity: 3
    }];

    //render component
    const wrapper = mount(<ActiveTables bills={[]} tables={tables} auth={{uid: 123}} dispatch={dispatch}/>);
    wrapper.find('.table-select').node.selectedIndex = 0;
    //find button to add bill //press button
    wrapper.find('form').simulate('submit')
    //check that dispatch was called
    sinon.assert.calledOnce(dispatch);
  });

  it('should not allow adding of a new Bill if invalid', () =>{
    //mock aspy as dispatch
    const dispatch = sinon.spy();
    const tables = [{
      tbKey:1,
      tbname: 2,
      tbcapacity: 3
    }];

    //render component
    const wrapper = shallow(<ActiveTables bills={[]} tables={tables} auth={{uid: 123}} dispatch={dispatch}/>);
    //find button to add bill //press button
    wrapper.find('.add-bill').simulate('click')
    //check that dispatch was called
    sinon.assert.notCalled(dispatch);
  });

  it('should show an item for each bill', () => {
    var dispatch = () => {};
    //lets mock some bills
    const bills = [{
      billKey: 1232,
      tbKey:2,
      tbname: 2,
      resOwner: 'Isaac',
      bill: 30
    }];

    const tables = [{
      tbKey:1,
      tbname: 2,
      tbcapacity: 3
    }];


    //lets render the component with the bills
    const wrapper = shallow(<ActiveTables dispatch={dispatch} tables={tables} bills={bills}/>);

    //assert that component renders an item for each bill
    expect(wrapper.find('.bill-item').length).toEqual(bills.length);
  });

  it('should show  a message when no bills', () => {
    var dispatch = () => {};
    const tables = [{
      tbKey:1,
      tbname: 2,
      tbcapacity: 3
    }];

    //mock bills
    const bills = [];
    //let's render the component
    const wrapper = shallow(<ActiveTables dispatch={dispatch} tables={tables} bills={bills}/>);
    //assert that the message is showns
    expect(wrapper.find('.empty-bills').length).toEqual(1);
  })
})
