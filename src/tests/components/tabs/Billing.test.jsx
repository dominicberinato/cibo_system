import expect from 'expect'
import React from 'react'
import {mount} from 'enzyme'
import {Billing} from 'Billing'
import {CurrentBill} from 'CurrentBill'
import {BillingStats} from 'BillingStats'
import {ActiveTables} from 'ActiveTables'

describe('<Billing/>', () => {
  it('should exist', () => {
    expect(Billing).toExist();
  });

  it('should render activetables, BillingStats, CurrentBill',  () => {
    //mount billing
    const wrapper = mount(<Billing tables={[]} bills={[]}/>);
    //assert on wrapper
    expect(wrapper.find(CurrentBill).length).toEqual(1);
    expect(wrapper.find(BillingStats).length).toEqual(1);
    expect(wrapper.find(ActiveTables).length).toEqual(1);
  });
})
