//add firebase and components we need
import firebase, {firebaseRef, googleAuthProvider, storageRef} from 'src/firebase/index'
import {hashHistory} from 'react-router'

//add login action
export var login = (user) => {
  return {
    type: 'LOGIN',
    user: user
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
      console.log('auth success');
      dispatch(login(result.user));
    }, (error) => {
      //deal with errors if any
      console.log('auth failed please check', error.message);
    });
  };
}

//export sync addProperty
export var addProperty = (property) => {
  return  {
    type: 'ADD_PROPERTY',
    property
  }
}

//add async class to pushProperty
export var startAddProperty = (property) => {
  return(dispatch, state) => {
     //collect property data
     var propertyImage = property.avatar;
    //perform upload
    //get id
    var propKey = firebaseRef.child('properties').push().key;

    var propFanOut = {};
    propFanOut[`/properties/${propKey}`] = {
      ...property,
      avatar:`${propKey}.png`
    }

    var uploadTask = storageRef.child(`${propKey}.png`).put(propertyImage);
    uploadTask.then(() => {
      console.log('woop up!');
    })
    return firebaseRef.update(propFanOut).then(()=>{
      //dispatch addProperty
      dispatch(addProperty({
        ...property,
        avatar:`${propKey}.png`,
        propKey
      }))
    })
  }
}

//!!!delete property
export var startdeleteProperty = (id) => {
  return(dispatch, state) => {

  }
}
//clear currentproperty
export var clearProperty = () => {
  return {
    type: 'CLEAR_PROPERTY'
  }
}
