import expect from 'expect'

import {Finance} from 'Finance'

describe('Finance', () => {
  it('should exist', () => {
    expect(Finance).toExist();
  });

  it('should show a realtime view of average table spend', () => {
    expect(1).toEqual(4);
  });

  it('should allow  customer ranking by top Spenders', () => {
    expect(2).toEqual(7);
  });

  it('should report number and value of items sold filtered by food, beverage, spirit', () => {
    expect('wine').toEqual('spirit');
  });

  it('should report top 5 food items sold', () => {
    expect('top').toEqual('tui');
  });

  it('should report top 5 beverage items sold', () => {
    expect('top').toEqual('tui');
  });

  it('should show expected revenue for the day', () => {
    expect('rev').toEqual('nue');
  });

  it('should show average spend per customer', () => {
    expect('custo').toEqual('mer');
  });
})
