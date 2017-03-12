import React from 'react'
import {CurrentBill} from 'CurrentBill'
import expect from 'expect'
import {shallow} from 'enzyme'

describe.only('<CurrentBill/>', () => {
  it('should exist', () => {
    expect(CurrentBill).toExist();
  });

  it('should show message if no bill selected', () => {

    //render object
    const wrapper =  shallow(<CurrentBill currBill={""}/>)
    //pass empty currentBill
    //assert message was shown
    expect(wrapper.find('.no-bill').length).toEqual(1);
  });

  it('should allow ordered products to be added to correct table', () => {
    expect(9).toEqual(19);
  });

  it('should allow removal of products from table', () => {
    expect(9).toEqual(89);
  });

  it('should allow settlement of bills by Debit, Credit, Cash, EFT, Foreign Currency', () => {
    expect(8).toEqual(9);
  });


})
