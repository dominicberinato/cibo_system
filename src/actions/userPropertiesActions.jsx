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


export const collectUserProperties = () => {
  return(dispatch, getState) => {
    //id
    const uid =  getState().auth.uid;
    //collect properties
    return firebaseRef.child(`/user-properties/${uid}`).once('value',(userProps) =>{
      if(userProps.length > 0) {
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
