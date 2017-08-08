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

export var collectPropMenus = () => {
  return(dispatch, getState) => {
    const propKey = getState().property.key;
    //pull from firebase
    return firebaseRef.child(`/property-menus/${propKey}`).on('child_added', (snapshot) => {
      firebaseRef.child(`/menus/${snapshot.val()}`).once('value', (mShot) => {
        dispatch(addMenu({
          ...mShot.val(),
          id: snapshot.val()
        }))
      })
    })
  }
}


export var startAddMenu = ({menuName, menuCategory, menuItems=[],
  menuSuggestedPrice, menuSellingPrice, menuCostPrice}) => {
  return(dispatch, getState) => {
    //get our property
    const prop = getState().property.key;

    //lets make a ref
    const menuKey = firebaseRef.child('menus').push().key;

    var addMenuFanOut = {};

    addMenuFanOut[`/menus/${menuKey}`] = {menuName, menuCategory, menuSuggestedPrice, menuSellingPrice, menuCostPrice};
    addMenuFanOut[`/property-menus/${prop}/${menuKey}`] = menuKey;
    menuItems.map((item) => {
      return addMenuFanOut[`/menu-items/${menuKey}/${item.name}`] = item.name
    })

    //update out fanout
    return firebaseRef.update(addMenuFanOut).then(() => {
      //dispatch local action
      dispatch(addMenu({
        id:menuKey,
        menuName,
        menuCategory,
        menuSuggestedPrice,
        menuSellingPrice,
        menuCostPrice
      }));
    });
  };
};

export var startDeleteMenu = (id) => {
  return (dispatch, getState) => {
    //get our property
    const prop = getState().property.key;

    var deleteMenuFanout   =  {};
    deleteMenuFanout[`/menus/${id}`] = null;
    deleteMenuFanout[`/property-menus/${prop}/${id}`] = null;

    //commit our update
    return firebaseRef.update(deleteMenuFanout).then(() => {
      dispatch(deleteMenu(id));
    });
  };
};

export var startUpdateMenu =  (id, updates) => {
  return(dispatch, getState) => {
    //get our property
    const prop = getState().property.key;

    var updateMenuFanOut = {};

    updateMenuFanOut[`/menus/${id}`] =  updates;
    updateMenuFanOut[`/property-menus/${prop}/${id}`] = updates;

    return firebaseRef.update(updateMenuFanOut).then(() => {
      dispatch(updateMenu(id, updates));
    });
  };
};
