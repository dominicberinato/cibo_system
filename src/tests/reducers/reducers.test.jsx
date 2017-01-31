import * as reducers from 'reducers'
import expect from 'expect'
var df = require('deep-freeze-strict')
describe('Reducers', () => {
  //check that reducers exist
  it('should exist', () => {
    expect(reducers).toExist();
  });


  //check if Auth Reducer works
  describe('AuthenticationReducer', () => {
    //check if the UID is set on login
    it('should set UID onLogin',  () => {
      //make an action
      var loginAction = {
        type: 'LOGIN',
        uid: 12345
      };

      //call the reducer with the action
      //deep freeze state and action to ensure purity
      var result = reducers.authReducer(df(''), df(loginAction));

      //check that the result is what we expect
      expect(result).toEqual({uid: loginAction.uid})
    });

    //check if recorded information is cleared on logout
    it('should clear User info onLogout', () => {
      //sketch an action
      var logoutAction = {
        type: 'LOGOUT'
      };

      //call the reducer use deep freese
      var result = reducers.authReducer(df({uid: 12345}),df(logoutAction));

      //check the result for what we expect
      expect(result).toEqual({})
    });
  });
})
