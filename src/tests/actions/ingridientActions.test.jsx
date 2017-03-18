import expect from 'expect'
import * as actions from 'ingridientActions'
import configureMockStore from 'redux-mock-store'
import firebase,{firebaseRef} from 'src/firebase/index'
import thunk from 'redux-thunk'

const createMockStore = configureMockStore([thunk]);


describe.only('ingridientActions', () => {
  it('Should exist', () => {
    expect(actions).toExist();
  });

  describe('Sync Actions', () => {

    it('should generate addIngridient action',  () => {
      //mock an ingridient
      const ingridient = {
        id: 123232,
        category: 'dairy',
        description: 'butter',
        brand: 'Netherend',
        size: '100kg',
        cost: 'R32',
        supplier: 121323,
        offdate: '03/04/2018'
      };

      //action we expect back
      const addIngAction  =  {
        type:'ADD_INGRIDIENT',
        ingridient
      };

      //call an action with our data
      var result = actions.addIngridient(ingridient);

      expect(result).toEqual(addIngAction);
    });

    it('should generate deleteIngridient action', () => {

      //mock an ingridient
      const ingridient = {
        id: 123232,
        category: 'dairy',
        description: 'butter',
        brand: 'Netherend',
        size: '100kg',
        cost: 'R32',
        supplier: 121323,
        offdate: '03/04/2018'
      };

      //mock up a result
      const deleteAction  = {
        type: 'DELETE_INGRIDIENT',
        id: ingridient.id
      }

      //call the action
      const result = actions.deleteIngridient(ingridient.id);

      //assert on result
      expect(result).toEqual(deleteAction);
    });

    it('should generate updateIngridient action', () => {

      //mock an ingridient
      const ingridient = {
        id: 123232,
        category: 'dairy',
        description: 'butter',
        brand: 'Netherend',
        size: '100kg',
        cost: 'R32',
        supplier: 121323,
        offdate: '03/04/2018'
      };

      //mock update
      const updates =  {
        supplier: 768623862
      };

      const updateAction = {
        type: 'UPDATE_INGRIDIENT',
        id: ingridient.id,
        updates
      };

      //lets call the actions
      var result = actions.updateIngridient(ingridient.id, updates)

      //expect the actions
      expect(result).toEqual(updateAction);
    });
  });


  describe('Async',  () => {
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
      propCode: 58686816897
    };

    //run this code before each asnyc test (login && set up stuff)
    beforeEach((done) => {
      store = createMockStore({})
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

    it('should call startUpdateIngridient and dispatch updateIngridient', (done) => {
      //mock an ingridient
      const ingridient = {
        id: 67979
        category: 'dairy',
        description: 'butter',
        brand: 'Netherend',
        size: '100kg',
        cost: 'R32',
        supplier: 121323,
        offdate: '03/04/2018'
      };

      //MOCK SOME UPDATES
      const updates = {
        offdate: '05/08/2018'
      };

      //trigger and assert
      const action = actions.startUpdateIngridient(ingridient.id, updates);

      //dispatch
      store.dispatch(action).then(() => {
        //collected dispatched actions
        const mockActions = store.getActions();

        //assert
        expect(mockActions[0].toInclude({
          type: 'UPDATE_INGRIDIENT',
          id: ingridient.id,
          updates
        }));
        done();
      }, done())
    })

    it('should call startAddIngridient and dispatch addIngridient', (done) => {
      //mock an ingridient
      const ingridient = {
        category: 'dairy',
        description: 'butter',
        brand: 'Netherend',
        size: '100kg',
        cost: 'R32',
        supplier: 121323,
        offdate: '03/04/2018'
      };

      const action = actions.startAddIngridient(ingridient);

      store.dispatch(action).then(() => {
        //let collect actions
        const mockActions = store.getActions();

        //assert that addIngridient was called
        expect(mockActions[0].toInclude({
          type:'ADD_INGRIDIENT',
          ingridient: {
            ...ingridient
          }
        }));
        done();
      }, done())

    })
  })
})
