import {firebaseRef} from 'src/firebase'
export var addMenu = (menu) => {
  return {
    type: 'ADD_MENU',
    menu
  };
};

export var deleteMenu =  (id) => {
  return {
    type: 'DELETE_MENU',
    id
  };
};

export var updateMenu = (id, updates) => {
  return {
    type: 'UPDATE_MENU',
    id,
    updates
  };
};

export var startAddMenu = (menu) => {
  return(dispatch, getState) => {
    //get our property
    const prop = getState().property.propKey;

    //lets make a ref
    const menuKey = firebaseRef.child('menus').push().key;

    var addMenuFanOut = {};

    addMenuFanOut[`/menus/${menuKey}`] = menu;
    addMenuFanOut[`/property-menus/${prop}/${menuKey}`] = menu;

    //update out fanout
    return firebaseRef.update(addMenuFanOut).then(() => {
      //dispatch local action
      dispatch(addMenu({
        id:menuKey,
        ...menu
      }));
    });
  };
};

export var startDeleteMenu = (id) => {
  return (dispatch, getState) => {
    //get our property
    const prop = getState().property.propKey;

    var deleteMenuFanout   =  {};
    deleteMenuFanout[`/menus/${id}`] = null;
    deleteMenuFanout[`/property-menus/${prop}/${id}`] = null;

    //commit our update
    return firebaseRef.update(deleteMenuFanout).then(() => {
      dispatch(deleteMenu(id)); 
    });
  };
};
