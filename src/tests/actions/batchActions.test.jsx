import expect from 'expect'
import * as actions from 'batchActions'
import firebase,{firebaseRef} from 'src/firebase'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const createMockStore = configureMockStore([thunk]);


describe.only('batchActions', ()=> {
  it('should exist', () => {
    expect(actions).toExist()
  });


  describe('sync', () => {
    it('should create addBatch action', () => {
      //mock an item
      const batch = {
        category: 'sauce',
        description: 'Bordelause Sauce',
        units: 'kg',
        size: 2,
        ingridients: [3,4],
        cost: 3400
      };

      //mock an action
      const batchAction = {
        type: 'ADD_BATCH',
        batch
      };

      const res = actions.addBatch(batch);

      //assert on result
      expect(res).toEqual(batchAction)
    });

    it('should create updateBatch action', () => {
      //mock an item
      const batch = {
        id: 3,
        category: 'sauce',
        description: 'Bordelause Sauce',
        units: 'kg',
        size: 2,
        ingridients: [3,4],
        cost: 3400
      };

      //mock some updates
      const updates  = {
        ingredients: [3,4,5]
      };


      //mock a result
      const updateBatchAction  = {
        type:'UPDATE_BATCH',
        id : batch.id,
        updates
      };

      const res = actions.updateBatch(batch.id, updates);

      expect(res).toEqual(updateBatchAction);
    });

    it('should create deleteBatchAction', () => {
      //mock an item
      const batch = {
        id: 3,
        category: 'sauce',
        description: 'Bordelause Sauce',
        units: 'kg',
        size: 2,
        ingridients: [3,4],
        cost: 3400
      };

      //mock a result
      const deleteBatchAction = {
        type: 'DELETE_BATCH',
        id: batch.id
      };

      //get a result
      const res = actions.deleteBatch(batch.id);
    })
  });

  describe('async', () => {
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

    it('should call startAddBatch and dispatch addBatch', (done) => {
      //mock an item
      const batch = {
        id: 3,
        category: 'sauce',
        description: 'Bordelause Sauce',
        units: 'kg',
        size: 2,
        ingridients: [3,4],
        cost: 3400
      };

      //mock our action
      const action = actions.startAddBatch(batch);

      //disptch action on mockStore
      store.dispatch(action).then(() => {

        //collect dispatched actions
        const mockActions = store.getActions();
        //assert addBatch was triggered
        expect(mockActions[0].toInclude({
          type: 'ADD_BATCH',
          batch: {
            ...batch
          }
        }));
        done();
      }, done());
    })
  });
})
