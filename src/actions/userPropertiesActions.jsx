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
