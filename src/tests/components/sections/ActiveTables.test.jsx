import React from 'react'
import expect from 'expect'
import sinon from 'sinon'
import {mount} from 'enzyme'

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
    const wrapper = mount(<ActiveTables dispatch={dispatch}/>);
    //find button to add bill //press button
    wrapper.ref('addBill').simulate('click')
    //check that dispatch was called
    sinon.assert.calledOnce(dispatch);
  });

  it('should show an item for each bill', () => {
    //lets mock some bills
    const bills = [{
      billKey: 1232,
      tbKey:2
    }];

    //lets render the component with the bills
    const wrapper = mount(<ActiveTables bills={bills}/>);

    //assert that component renders an item for each bill
    expect(wrapper.find(ActiveTableItem).length).toEqual(bills.length);
  })
})
