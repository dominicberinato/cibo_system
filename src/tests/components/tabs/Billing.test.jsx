import expect from 'expect'


import {Billing} from 'Billing';

describe('Billing', () => {
  it('should exist', () => {
    expect(Billing).toExist();
  });

  it('should allow ordered products to be added to each table', () => {
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

  describe('Billing Reports', () => {
    it('should show total takings for the day', () => {
      expect(8).toEqual(0);
    });
    it('should split and calculate totals of Food, Beverage, Gratuity', () => {
      expect(0).toEqual(8);
    });
    it('should calculate allowances', () => {
      expect(0).toEqual(0);
    });
    it('should calculate subtotals', () => {
      expect(9).toEqual(90);
    })
  });
})
