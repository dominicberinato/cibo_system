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
