import React from 'react'
import expect from 'expect'
import {BillingStats} from 'BillingStats'

describe('<BillingStats/>', () => {
  it('should exist',  () => {
    expect(BillingStats).toExist();
  });

  describe('Billing Reports', () => {
    it('should show total takings for the day', () => {
      expect(8).toEqual(0);
    });
    it('should split and calculate totals of Food, Beverage, Gratuity', () => {
      expect(0).toEqual(8);
    });
    it('should calculate allowances', () => {
      expect(10).toEqual(0);
    });
    it('should calculate subtotals', () => {
      expect(9).toEqual(90);
    })
  });
})
