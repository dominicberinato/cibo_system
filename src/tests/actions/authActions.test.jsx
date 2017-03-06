import configureMockStore from 'redux-mock-store'
import expect from 'expect'
import thunk from 'redux-thunk'
import firebase,{firebaseRef} from 'src/firebase/index'
import * as actions from 'authActions'
import shortid from 'shortid'



//use this to mock a store
var createMockStore = configureMockStore([thunk]);

describe('authActions', () => {
  //check that actions exist
  it('should exist', () => {
    expect(actions).toExist();
  });

  describe('sync', () => {
    //work on login action test
    it('should generate login action', () => {
      //mock an action
      var user: {
        name: 'z',
        image: 'http://img.co',
        uid: 12345,
        isAdmin: false,
        email: 'me@me.com'
      }
      var loginAction = {
        type: 'LOGIN',
        user
      };

      //lets trigger the action
      var result = actions.login(loginAction.user);
      //check that the result is same as mocked
      expect(result).toEqual(loginAction);
    });

    //work on logout action test
    it('should generate logout action', () => {
      //mock out result action
      var logoutAction = {
        type: 'LOGOUT'
      };

      //lets trigger
      var result = actions.logout();

      //check that the result is same as mocked
      expect(result).toEqual(logoutAction);
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
        store.dispatch(actions.login({uid}))
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

    it('should associate user and property then dispatch ADD_PROPERTY', (done) => {
      //push property
      testPropertyKey = firebaseRef.child('properties').push().key;
      firebaseRef.child(`properties/${testPropertyKey}`).set(testProperty);

      //mock our action
      const action = actions.assocUser(1235, propCode);

      store.dispatch(action).then(() => {
        //collect mocked actions
        const mockActions = store.getActions();
        expect(mockActions[0].toInclude({
          type: 'ADD_PROPERTY',
          property: {
            ...testProperty
          }
        }));
        done();
      }, done());
    });

  })
})
