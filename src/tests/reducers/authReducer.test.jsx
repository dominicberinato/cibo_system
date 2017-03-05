import expect from 'expect'
var df = require('deep-freeze-strict')
import {authReducer} from 'authReducer'
//check if Auth Reducer works
describe('AuthenticationReducer', () => {
  //check if the UID is set on login
  it('should set userdata onLogin',  () => {
    var user = {
      name: "Zacck "
    }
    //make an action
    var loginAction = {
      type: 'LOGIN',
      user
    };

    //call the reducer with the action
    //deep freeze state and action to ensure purity
    var result = authReducer(df(''), df(loginAction));

    //check that the result is what we expect
    expect(result).toEqual(loginAction.user)
  });

  //check if recorded information is cleared on logout
  it('should clear User info onLogout', () => {
    //sketch an action
    var logoutAction = {
      type: 'LOGOUT'
    };

    //call the reducer use deep freese
    var result = authReducer(df({uid: 12345}),df(logoutAction));

    //check the result for what we expect
    expect(result).toEqual({});
  });
});
