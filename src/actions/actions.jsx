//add firebase and components we need
import firebase, {firebaseRef, googleAuthProvider, storageRef} from 'src/firebase/index'
import {hashHistory} from 'react-router'
import shortid from 'shortid'

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
    //get id
    var propKey = firebaseRef.child('properties').push().key;
    //build upload
    //get short code
    var propCode = shortid.generate();
    var propFanOut = {};
    propFanOut[`/properties/${propKey}`] = {
      ...property,
      avatar:`${propKey}.png`,
      propCode
    };
    propFanOut[`/property-users/${propKey}/${property.propCreator}`] = property.propCreator;
    propFanOut[`/users/${property.propCreator}/propCode`] = propKey;

    //perform upload
    var uploadTask = storageRef.child(`${propKey}.png`).put(propertyImage);
    uploadTask.then(() => {
      console.log('woop up!');
    })
    return firebaseRef.update(propFanOut).then(()=>{
      //dispatch addProperty
      dispatch(addProperty({
        ...property,
        avatar:`${propKey}.png`,
        propKey,
        propCode
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
//export async action to start add table
export var startAddTable =  (table) => {
  return(dispatch, getState) => {
    var propId = table.propID;
    //get propid
    var tableFanOut =  {};
    var tableKey = firebaseRef.child('tables').push.key;
    tableFanOut[`/tables/${tableKey}`] = table;
    tableFanOut[`/property-tables/${propid}/${tableKey}`] = tableKey;

    //lets update this fanout
    return firebaseRef.update(tableKey).then(() => {
      dispatch(addTable({
        ...table,
        tableKey,
      }))
    })
  }
}
//add a table to state
export var addTable = (table) => {
  return {
    type: 'ADD_TABLE',
    table
  }
}
