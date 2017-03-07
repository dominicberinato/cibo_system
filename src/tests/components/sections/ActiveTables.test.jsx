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
    //render component
    const wrapper = shallow(<ActiveTables bills={[]} dispatch={dispatch}/>);
    //find button to add bill //press button
    wrapper.find('.add-bill').simulate('click')
    //check that dispatch was called
    sinon.assert.calledOnce(dispatch);
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

    //lets render the component with the bills
    const wrapper = shallow(<ActiveTables dispatch={dispatch} store={bills}/>);

    //assert that component renders an item for each bill
    expect(wrapper.find(ActiveTableItem).length).toEqual(bills.length);
  });

  it('should show  a message when no bills', () => {
    var dispatch = () => {};

    //mock bills
    const bills = [];
    //let's render the component
    const wrapper = shallow(<ActiveTables dispatch={dispatch} bills={bills}/>);
    //assert that the message is showns
    expect(wrapper.find('.empty-bills').length).toEqual(1);
  })
})
