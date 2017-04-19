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

    it('should generate deleteBeverage action', () => {
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
        type: 'DELETE_BEVERAGE',
        id: beverage.id
      };

      const res = actions.deleteBeverage(beverage.id);

      expect(res).toEqual(action);
    });
  });

  describe('Async', () => {
    //do set up for async tests
    //data needed
    var uid;
    var propertyRef = firebaseRef.child('properties');
    var testPropertyKey;
    var store;
    var debug = {hello: "world"};
    var mockImage = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
    var testProperty =  {
      pname: 'folk coffee',
      address: '3 Bree Street',
      avatar: mockImage,
      propKey: 58686816897
    };

    //run this code before each asnyc test (login && set up stuff)
    beforeEach((done) => {
      store = createMockStore({property:testProperty})
      //SIGN IN anonymously
      firebase.auth().signInAnonymously().then((user) => {
        uid = user.uid;
        testProperty.propCreator = uid

        //remove any existing proprties
        return firebaseRef.remove();
      }).then(()=> {

      })
      .then(() => done())
      .catch(done);
    });

    ///run this after each tests
    afterEach((done) => {
      firebaseRef.remove().then(() => done());
    });


    it('should startAddBeverage and dispatch addBeverage', (done) => {
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


      //post to db
      const action = actions.startAddBeverage(beverage);

      //dispatch action using store
      store.dispatch(action).then(() => {

        //collect actions that were run
        const mockActions = store.getActions();

        //lets expect that add beverage had been called
        expect(mockActions[0].toInclude({
          type: 'ADD_BEVERAGE',
          beverage: {
            ...beverage
          }
        }));
        done();
      }, done())
    });

    it('should startUpdateBeverage and dispatch updateBeverage', (done) => {
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

      const action = actions.startUpdateBeverage(beverage.id, updates);

      //lets dispatch the async actio
      store.dispatch(action).then(() => {
        //lets get fired actions
        const mockActions = store.getActions();

        expect(mockActions[0].toInclude({
          type: 'UPDATE_BEVERAGE',
          beverage: {
            ...beverage,
            ...updates
          }
        }));
        done();
      }, done())
    });

    it('should startDeleteBeverage and dispatch deleteBeverage', (done) => {
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

      const action = actions.startDeleteBeverage(beverage.id);

      store.dispatch(action).then(() => {
        //lets collect all the fired actions
        const mockActions = store.getActions();

        //call our assertion
        expect(mockActions[0].toInclude({
          type: 'DELETE_BEVERAGE',
          id: beverage.id
        }));
        done();
      }, done())


    });
  });
})
