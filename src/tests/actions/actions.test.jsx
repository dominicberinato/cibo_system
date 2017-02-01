import * as actions from 'actions'
//add ability to mock a store for testing if actions were called
import configureMockStore from 'redux-mock-store'
import expect from 'expect'

describe('Actions', () => {
  //check that actions exist
  it('should exist', () => {
    expect(actions).toExist();
  });

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
  })
})
