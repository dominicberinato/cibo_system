import * as actions from 'actions'
//add ability to mock a store for testing if actions were called
import configureMockStore from 'redux-mock-store'
import expect from 'expect'
import thunk from 'redux-thunk'
import firebase,{firebaseRef} from 'src/firebase/index'
import shortid from 'shortid'

//use this to mock a store
var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  //check that actions exist
  it('should exist', () => {
    expect(actions).toExist();
  });
  //test Synchronous actions
  describe('Sync Actions', () => {
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

    //it should generate an addTable action
    it('should generate addTable', () => {
      var table = {
        tbname: 7,
        tbCapacity: 5
      }

      var addTableAction = {
        type: 'ADD_TABLE',
        table
      }

      var result = actions.addTable(addTableAction.table);
      expect(result).toEqual(addTableAction);
    });

    it('should generate updateTable action', () => {
      expect(1).toEqual(3);
    });

    it('should generate deleteTable action', () => {
      expect(3).toEqual(4);
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




  //Test Asynchrounous Actions
  describe('Async Actions', () => {

    var uid;
    var propertyRef = firebaseRef.child('properties');
    var testPropertyKey;
    var store;

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
      tbName: 7,
      tbCapacity: 6,
      propID: 7
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
        //TODO check for correctness
        return true;
      })
      .then(() => done())
      .catch(done);
    });

    ///run this after each tests
    afterEach((done) => {
      firebaseRef.remove().then(() => done());
    });

    it('should update table and dispatch updateTable', () => {
      expect(1).toEqual(4);
    });

    it('should delete table and dispatch deleteTable', () => {
      expect(2).toEqual(3);
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

    describe('Table Tests', () => {

    })

    it('should create table and dispatch ADD_TABLE', (done) => {

      //call our async action
      const action = actions.startAddTable(testTable);

      store.dispatch(action).then(()=> {
        //get store's actions
        const mockActions = store.getActions();
        //asser that our action was called
        expect(mockActions[0].toInclude({
          type: 'ADD_TABLE',
          table: {
            ...testTable
          }
        }));
        done();
      },done());
    });
  })
})
