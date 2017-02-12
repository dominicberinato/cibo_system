//add firebase and components we need
import firebase, {firebaseRef, googleAuthProvider} from 'src/firebase/index'
import {hashHistory} from 'react-router'

//add login action
export var login = (user) => {
  return {
    type: 'LOGIN',
    user
  };
}
// add logout action
export var logout = () => {
  return {
    type: 'LOGOUT'
  };
}
//add login async action generator
export var startLogin = () => {
  return(dispatch, state) => {
    //lets use googleauth to auth the user
    return firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
      //deal with login success
      dispatch(login(result.user));
    }, (error) => {
      //deal with errors if any
      console.log('auth failed please check', error.message);
    });
  };
}
