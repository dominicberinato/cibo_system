import firebase, {firebaseRef, googleAuthProvider, storageRef} from 'src/firebase/index';
import {reset} from 'redux-form';
import { addProperty } from 'propertyActions';
import {collectUserProperties} from 'userPropertiesActions';
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
    //TODO use firwbase functions for logging
    console.log('auth success')
    }, (error) => {
      //deal with errors if any
      var errorCode = error.code;
      var errorMessage = error.message;
      //email getting error
      var email = error.email
      console.log('auth failed please check', `Error Code is : ${errorCode} and Error Message Is: ${errorMessage} from email ${email}`);
    });
  };
}

//export property assoc
export var assocUser = (values) => {
  return(dispatch, getState) => {
    const propCode = values.propCode;
    var propertyKey;
    var uid =  getState().auth.uid;
    //find product with code
    return firebaseRef.child('properties').orderByChild('propCode').equalTo(propCode).once('value').then((propList) => {
      propList.forEach((property) => {
        propertyKey = property.key;
        //update list on db to assoc user
        var assocFanOut = {};
        //populate fanout
        assocFanOut[`/property-users/${propertyKey}/${uid}`] = uid;
        assocFanOut[`/user-properties/${uid}/${propertyKey}`] =  property.val();
        return firebaseRef.update(assocFanOut).then(() => {
          //dispath addProperty and render
          dispatch(addProperty({
            ...property.val(),
            propKey: propertyKey
          }));
          //clear the propcode form
          dispatch(reset('assoc'));
          //get properties
          dispatch(collectUserProperties());
        })
      })
    })
  }
}
