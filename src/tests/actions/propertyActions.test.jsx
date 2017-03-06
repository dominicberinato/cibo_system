import configureMockStore from 'redux-mock-store'
import expect from 'expect'
import thunk from 'redux-thunk'
import firebase,{firebaseRef} from 'src/firebase/index'
import * as actions from 'propertyActions'
import {login} from 'authActions'
import shortid from 'shortid'




//use this to mock a store
var createMockStore = configureMockStore([thunk]);

describe('propertyActions', () => {
  describe('sync', () => {
    //work on addProperty action test
    it('should generate addProperty action',  () => {

      var debug = {hello: "world"};
      var mockImage = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
      var property = {
        name: 'Awesome Place',
        address: 'Baked AF',
        location: '33,60',
        avatar: mockImage
      }
      //lets mock a result
      var addProperty =  {
        type: 'ADD_PROPERTY',
        property
      };

      //trigger
      var result = actions.addProperty(addProperty.property);

      //check result
      expect(result).toEqual(addProperty);
    })
    //work on clearProperty action test
    it('should generate clearProperty action', () => {
      //mock a result
      var clearProperty =  {
        type: 'CLEAR_PROPERTY'
      }
      //trigger code
      var result = actions.clearProperty();
      //check result
      expect(result).toEqual(clearProperty);
    });
  });

  describe('Async', () => {
    var uid;
    var propertyRef = firebaseRef.child('properties');
    var testPropertyKey;
    var testTableRef;
    var testTableKey;
    var store;
    var testReservationKey;
    var testReservationRef;

    var debug = {hello: "world"};
    var mockImage = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});

    //GENERATE PROP CODE
    var propCode = shortid.generate()
;    var testProperty =  {
      pname: 'folk coffee',
      address: '3 Bree Street',
      avatar: mockImage,
      propCode
    };

    var testTable = {
      tbname: 7,
      tbcapacity: 6,
      propID: 7
    }

    var testReservation = {
      name: 'Isaac',
      number: 6,
      tbKey: 7,
      propKey: 9
    }

    //run this code before each asnyc test (login && set up stuff)
    beforeEach((done) => {
      store = createMockStore({})
      //SIGN IN anonymously
      firebase.auth().signInAnonymously().then((user) => {
        uid = user.uid;
        testProperty.propCreator = uid
        // perfom login
        store.dispatch(login({uid}))
        //remove any existing proprties
        return firebaseRef.remove();
      }).then(()=> {
        testTableRef = firebaseRef.child('tables').push();
        testTableKey = testTableRef.key;
        testReservationRef = firebaseRef.child('reservations').push();
        testReservationKey = testReservationRef.key;
        testReservationRef.set({
          ...testReservation
        });
        return testTableRef.set({
          ...testTable
        });

      })
      .then(() => done())
      .catch(done);
    });

    ///run this after each tests
    afterEach((done) => {
      firebaseRef.remove().then(() => done());
    });


        it('should create property  and dispatch ADD_PROPERTY', (done) => {
          testPropertyKey = firebaseRef.child('properties').push().key;
          //lets call our async action
          const action = actions.startAddProperty(testProperty);

          store.dispatch(action).then(() => {
            //get a list of actions
            const mockActions = store.getActions();
            //check that our action was called
            expect(mockactions[0].toInclude({
              type: 'ADD_PROPERTY',
              property:
              {
                ...testProperty
              }
            }));
            done();
          },done());
        });

  })
})
