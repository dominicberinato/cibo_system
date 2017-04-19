import expect from 'expect'
var df  =require('deep-freeze-strict');
import {beverageReducer} from 'beverageReducer'


describe.only('beverageReducer', () => {
  it('should exist',  () => {
    expect(beverageReducer).toExist();
  });

  it('should add a beverage on addBeverage',  () => {
    const beverage =  {
      id: 1,
      major: 'Spirit',
      category: 'Vodka',
      brand: 'Grey Goose',
      description: 'Citron',
      unitsize: '220ml',
      purchasesize: '6 units',
      purchasecost: 300
    };

    const action = {
      type: 'ADD_BEVERAGE',
      beverage
    };

    const res = beverageReducer(df([]), df(action));

    expect(res[0]).toEqual(action.beverage);
  });


  it('should update a beverage on updateBeverage', () => {
    const beverages = [
      {
        id: 1,
        major: 'Spirit',
        category: 'Vodka',
        brand: 'Grey Goose',
        description: 'Citron',
        unitsize: '220ml',
        purchasesize: '6 units',
        purchasecost: 300
      },
      {
        id: 3,
        major: 'Spirit',
        category: 'Vodka',
        brand: 'Grey Goose',
        description: 'Citron',
        unitsize: '220ml',
        purchasesize: '6 units',
        purchasecost: 300
      }];

      const updates = {
        major: 'Tea'
      };

      const action = {
        type: 'UPDATE_BEVERAGE',
        id: beverages[1].id,
        updates
      };

      const res = beverageReducer(df(beverages), df(action));

      expect(res[1].major).toEqual(updates.major);
  });

  it('should delete beverage on deleteBeverage',  () => {
    const beverages = [
      {
        id: 1,
        major: 'Spirit',
        category: 'Vodka',
        brand: 'Grey Goose',
        description: 'Citron',
        unitsize: '220ml',
        purchasesize: '6 units',
        purchasecost: 300
      },
      {
        id: 3,
        major: 'Spirit',
        category: 'Vodka',
        brand: 'Grey Goose',
        description: 'Citron',
        unitsize: '220ml',
        purchasesize: '6 units',
        purchasecost: 300
      }];

      const action =  {
        type: 'DELETE_BEVERAGE',
        id: beverages[1].id
      };

      const res = beverageReducer(df(beverages), df(action));

      expect(res).toExclude(beverages[1]);
  });
});
