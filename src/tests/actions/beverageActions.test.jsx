import expect from 'expect'
import * as actions from 'beverageActions'
import firebase,{firebaseRef} from 'src/firebase'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const createMockStore = configureMockStore([thunk]);

describe.only('beverageActions', () => {
  it('should exist', () => {
    expect(actions).toExist();
  });


  describe('Sync', () => {
    it('should generate addBeverage action', () => {

      const beverage =  {
        major: 'Spirit',
        category: 'Vodka',
        brand: 'Grey Goose',
        description: 'Citron',
        unitsize: '220ml',
        purchasesize: '6 units',
        purchasecost: 300
      };

      const action =  {
        type: 'ADD_BEVERAGE',
        beverage
      };

      const res = actions.addBeverage(beverage);

      expect(res).toEqual(action)
    });

    it('should generate updateBeverage action', () => {
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

      const updates = {
        purchasecost: 400
      };



      const action =  {
        type: 'UPDATE_BEVERAGE',
        id: beverage.id,
        updates
      };

      const res = actions.updateBeverage(beverage.id, updates);

      expect(res).toEqual(action);
    });


  });
})
