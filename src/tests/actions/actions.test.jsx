import * as actions from 'actions'
//add ability to mock a store for testing if actions were called
import configureMockStore from 'redux-mock-store'
import expect from 'expect'
import thunk from 'redux-thunk'
import firebase,{firebaseRef} from 'src/firebase/index'

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
    })

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
    var propertyRef;
    var testPropertyRef;

    var debug = {hello: "world"};
    var mockImage = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});

    var testProperty =  {
      pname: 'folk coffee',
      address: '3 Bree Street',
      avatar: mockImage
    };

    var testTable = {
      tbName: 7,
      tbCapacity: 6
    }

    //run this code before each asnyc test (login && set up stuff)
    beforeEach((done) => {
      //SIGN IN anonymously
      firebase.auth().signInAnonymously().then((user) => {
        uid = user.uid;
        propertyRef = firebaseRef.child(`properties/property`);
        return  propertyRef.remove();
      }).then(()=> {
        testPropertyRef = propertyRef.push();
        return testPropertyRef.set(testProperty);
      })
      .then(() => done())
      .catch(done);
    });

    ///run this after each tests
    afterEach((done) => {
      propertyRef.remove().then(() => done());
    });


    it('should create property  and dispatch ADD_PROPERTY', (done) => {
      //lets make a mock store
      const store = createMockStore({auth:{uid}});
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

    it('should create table and dispatch ADD_TABLE', (done) => {

      //mock a store
      const store = createMockStore({auth: {uid}});

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
