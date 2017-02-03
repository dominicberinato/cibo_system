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
      var loginAction = {
        type: 'LOGIN',
        uid: 12345
      };

      //lets trigger the action
      var result = actions.login(loginAction.uid);

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

    //work on addProperty action test
    it('should generate addProperty action',  () => {
      //lets mock a result
      var addProperty =  {
        type: 'ADD_PROPERTY',
        property
      };

      //trigger
      var result = actions.addProperty(action.property);

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
    it('should create property  and dispatch ADD_PROPERTY', (done) => {
      const store = createMockStore();
    })
  })




})
