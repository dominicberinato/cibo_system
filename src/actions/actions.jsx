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

//export property assoc
export var assocUser = (uid, propCode) => {
  return(dispatch, state) => {
    var propertyKey;
    //find product with code
    return firebaseRef.child('properties').orderByChild('propCode').equalTo(propCode).once('value').then((propList) => {
      propList.forEach((property) => {
        propertyKey = property.key;
      })
      //update list on db to assoc user
      var assocFanOut = {};
      //populate fanout
      assocFanOut[`/property-users/${propertyKey}/${uid}`] = uid;

      return firebaseRef.update(assocFanOut).then(() => {
        //dispath addProperty and render
        dispatch(addProperty({
          ...property,
          propKey: propertyKey
        }));
      })
    })


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
//export deleteTable
export var deleteTable = (id) => {
  return {
    type: 'DELETE_TABLE',
    id
  }
};

//export updateTableAction =
export var updateTable = (id, updates) => {
  return {
    type: 'UPDATE_TABLE',
    id,
    updates
  }
};

//export async action to start add table
export var startAddTable =  (table) => {
  return(dispatch, getState) => {
    var propId = table.propId;
    //get propid
    var tableFanOut =  {};
    var tableKey = firebaseRef.child('tables').push().key;
    tableFanOut[`/tables/${tableKey}`] = table;
    tableFanOut[`/property-tables/${propId}/${tableKey}`] = tableKey;

    //lets update this fanout
    return firebaseRef.update(tableFanOut).then(() => {
      dispatch(addTable({
        ...table,
        tbKey: tableKey
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

//export add Reservation action
export var addReservation = (reservation) => {
  return {
    type: 'ADD_RESERVATION',
    reservation
  }
}


//export update reservation
export var updateReservation = (id, updates) => {
  return {
    type: 'UPDATE_RESERVATION',
    id,
    updates
  }
}

//export remove reservation
export var removeReservation = (id) => {
  return {
    type: 'REMOVE_RESERVATION',
    id
  }
}


//export action to collect tables
export var collectTables = () => {
  return(dispatch, getState) => {
    //get the id of the property so we can use a lookup table
    var propKey = getState().property.propKey;

    var tablesRef = firebaseRef.child(`property-tables/${propKey}`);
    return tablesRef.once('value').then((tablesShot) => {
      tablesShot.forEach((childTable) => {
        var tableKey = childTable.key;
        //lets fetch the table from firebase
        return firebaseRef.child(`tables/${tableKey}`).once('value').then((thisTable) => {
          dispatch(addTable({
            tbKey: tableKey,
            ...thisTable.val()
          }))
        })
      })

    })

  }
}
