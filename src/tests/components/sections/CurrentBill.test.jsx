import React from 'react'
import {CurrentBill} from 'CurrentBill'
import expect from 'expect'

describe.only('<CurrentBill/>', () => {
  it('should exist', () => {
    expect(CurrentBill).toExist();
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

  it('should allow users to end shift by closing tables for the day',  () => {
    expect(89).toEqual(9);
  });
})
