import {firebaseRef} from 'src/firebase/index'

export const addUserProperty = (prop) => {
  return {
    type: 'ADD_USER_PROPERTY',
    prop
  };
};

export const removeUserProperty = (id) => {
  return {
    type: 'REMOVE_USER_PROPERTY',
    propid: id
  };
};

export const clearProps = () => {
  return {
    type: 'CLEAR_USER_PROPERTIES'
  };
};


export const collectUserProperties = () => {
  return(dispatch, getState) => {
    //id
    const uid =  getState().auth.uid;
    dispatch(clearProps());
    //collect properties
    return firebaseRef.child(`/user-properties/${uid}`).once('value', (userProps) => {
      if(userProps.hasChildren()) {
        //add each to state
        userProps.forEach((userProp) => {
          dispatch(addUserProperty({
            key: userProp.key,
            ...userProp.val()
          }));
        })
      } else {
        dispatch(addUserProperty({name: 'none'}));
      }
    })

  }
}
