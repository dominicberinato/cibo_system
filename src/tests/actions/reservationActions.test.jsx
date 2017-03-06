import configureMockStore from 'redux-mock-store'
import expect from 'expect'
import thunk from 'redux-thunk'
import firebase,{firebaseRef} from 'src/firebase/index'
import * as actions from 'reservationActions'
import {login} from 'authActions'
import shortid from 'shortid'

//use this to mock a store
var createMockStore = configureMockStore([thunk]);

describe('reservationActions', () => {
  describe('sync', () => {
    it('should generate addReservation Action', () => {
      //mock data
      var reservation = {
        resKey: 8,
        name: 'Isaac',
        number: 6,
        tbKey: 7,
        propKey: 9
      };
      var addReservationAction = {
        type: 'ADD_RESERVATION',
        reservation
      };
      //mock call
      var result = actions.addReservation(addReservationAction.reservation);
      //assertion
      expect(result).toEqual(addReservationAction);

    });

    it('should generate removeReservation Action',  () => {
      //mock data
      var resKey = 9;
      var removeReservationAction  = {
        type: 'REMOVE_RESERVATION',
        id: resKey
      };
      //mock calll
      var result = actions.removeReservation(removeReservationAction.id);
      //assertion
      expect(result).toEqual(removeReservationAction);
    })

    it('should generate updateReservation Action', () => {

      //mock data
      var updates =  {
        name: 'Yohan'
      };
      var resKey = 9;
      var updateReservationAction = {
        type: 'UPDATE_RESERVATION',
        id: resKey,
        updates
      };
      // mock calll
      var result = actions.updateReservation(resKey, updates);
      //assertion
      expect(result).toEqual(updateReservationAction);
    })

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

    it('should create a reservation and dispatch ADD_RESERVATION', (done) => {
      //mock a store with a property
      const store = createMockStore({property: {propKey: testPropertyKey}, auth: {uid: uid}});
      //sample reservation
      var reservation = {
        name: 'Isaac',
        number: 6,
        tbKey: 7,
        propKey: 9
      };
      //populate sample action
      const action = actions.startAddReservation(reservation);
      //dispatch sample action
      store.dispatch(action).then(() =>{
        const mockActions = store.getActions();
        //assert add reservation was called
        expect(mockActions[0].type).toEqual('ADD_RESERVATION');
        expect(mockActions[0].reservations.length).toEqual(1);
        done();
      }, done());
    });

    it('should update a reservation and dispatch UPDATE_RESERVATION', (done) => {
       //create mock store with user prop & reservation
       var store = createMockStore({auth:{uid}});

       //mock updates
       var updates = {
         time: '0988'
       };

       //mock action
       const action = actions.startUpdateReservation(testReservationKey, updates);
       //dispatch action
       store.dispatch(action).then(() => {
         const mockActions = store.getActions();
         //lets assert
         expect(mockActions[0].type).toEqual('UPDATE_RESERVATION');
         done();
       }, done())
    });

    it('should remove a reservation and dispatch REMOVE_RESERVATION',  (done) => {
      //mock a store with a user and some resevations
      const store = createMockStore({auth: {uid}, reservations:[{
        ...testReservation,
        resKey: testReservationKey
      }]});

      //lets mock an action
      const action = actions.startRemoveReservation(testReservationKey);

      store.dispatch(action).then(() => {
        //get actions
        const mockActions = store.getActions();
        //lets assert
        expect(mockActions[0].type).toEqual('REMOVE_RESERVATION')
        done();
      }, done());
    })

  })
})
