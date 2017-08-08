import shortid from 'shortid'
import firebase, {firebaseRef, storageRef} from '../firebase'

//export sync addProperty
export var addProperty = (property) => {
  return  {
    type: 'ADD_PROPERTY',
    property
  }
}

//add async class to pushProperty
export var startAddProperty = (property) => {
  return(dispatch, getState) => {
    //collect property data
    const propertyImage = property.avatar
    const propCreator = getState().auth.uid
    //get id
    var propKey = firebaseRef.child('properties').push().key;
    //build upload
    //get short code
    var propCode = shortid.generate();
    var propFanOut = {};
    propFanOut[`/properties/${propKey}`] = {
      ...property,
      avatar:`${propKey}.png`,
      propCreator,
      propCode
    };
    propFanOut[`/property-users/${propKey}/${propCreator}`] = propCreator;
    propFanOut[`/users/${propCreator}/propCode`] = propKey;

    //perform upload
    var uploadTask = storageRef.child(`${propKey}.png`).put(propertyImage);
    uploadTask.then(() => {
      //TODO Log this to firebase functions
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
