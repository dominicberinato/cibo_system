//add firebase and components we need
import firebase, {firebaseRef, googleAuthProvider} from 'src/firebase/index'

//add login action
export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
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
      dispatch(login(result.user.uid));
    }, (error) => {
      //deal with errors if any
      console.log('auth failed please check', error);
    });
  };
}
