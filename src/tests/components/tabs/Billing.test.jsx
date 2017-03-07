import expect from 'expect'
import React from 'react'
import {shallow} from 'enzyme'
import {Billing} from 'Billing'
import {CurrentBill} from 'CurrentBill'
import {BillingStats} from 'BillingStats'
import {ActiveTables} from 'ActiveTables'
//use this to mock a store


describe('<Billing/>', () => {
  it('should exist', () => {
    expect(Billing).toExist();
  });

  it('should render activetables, BillingStats, CurrentBill',  () => {

    var tables = [];
    var bills = [];
    //mount billing
    const wrapper = shallow(<Billing tables bills />);
    //assert on wrapper
    //expect(wrapper.find(CurrentBill).length).toEqual(1,'CurrentBill not rendered');
    expect(wrapper.find(BillingStats).length).toEqual(1,'BillingStats not rendered');
    expect(wrapper.find(ActiveTables).length).toEqual(1, 'ActiveTables not rendered');
  });
})
