import shortid from 'shortid'
import firebase, {firebaseRef, storageRef} from 'src/firebase/index'

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
