import React from 'react'
import {orderReducer} from 'orderReducer'
import expect from 'expect'

describe('OrderReducer', () => {
  it('should exist',  () => {
    expect(orderReducer).toExist();
  });

  it('should add item to bill', () => {
    //lets mock a couple of bills
    const bills = [
      {
        billKey: 1232,
        tbKey:2,
        tbname: 2,
        resOwner: 'Isaac',
        bill: 30
      },
      {
        billKey: 1234,
        tbKey:4,
        tbname: 5,
        resOwner: 'Osiemo',
        bill: 30
      }
    ];

    //lets mock our bill action
    expect(0).toEqual(1);
  });

  it('should allow removal of item', () => {
    expect(3).toEqual(9);
  })
})
