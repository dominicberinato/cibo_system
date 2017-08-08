import {firebaseRef} from 'firebase/index'

export var addBeverage = (beverage) => {
  return {
    type: 'ADD_BEVERAGE',
    beverage
  };
};

export var collectPropBeverages = () => {
  return(dispatch, getState) => {
    const propKey = getState().property.key;
    //pull from firebase
    return firebaseRef.child(`/property-beverages/${propKey}`).on('child_added', (snapshot) => {
      firebaseRef.child(`/beverages/${snapshot.val()}`).once('value', (bShot) => {
        dispatch(addBeverage({
          ...bShot.val(),
          id: snapshot.val()
        }))
      })
    })
  }
}


export var startAddBeverage = ({}) => {
  return(dispatch, getState) => {
    const beverageKey  = firebaseRef.child('beverages').push().key;
    const propKey = getState().property.key;

    //lets make a fanout
    const beverageFanOut = {};

    beverageFanOut[`/beverages/${beverageKey}`] =  beverage;
    beverageFanOut[`/property-beverages/${beverageKey}`] = beverage;

    return firebaseRef.update(beverageFanOut).then(() => {
      //dispatch local action
      dispatch(addBeverage({
        id: beverageKey,
        ...beverage
      }));
    });
  };
};

export var deleteBeverage = (id) => {
  return {
    type: 'DELETE_BEVERAGE',
    id
  };
};

export var startDeleteBeverage = (id) => {
  return(dispatch, getState) => {
    const beverageKey  = id;
    const propKey = getState().property.key;

    //lets make a fanout
    const beverageFanOut = {};

    beverageFanOut[`/beverages/${beverageKey}`] =  null;
    beverageFanOut[`/property-beverages/${beverageKey}`] = null;

    //push our updates

    return firebaseRef.update(beverageFanOut).then(() => {
      //local data
      dispatch(deleteBeverage(id));
    });
  };
};

export var updateBeverage = (id, updates) => {
  return {
    type: 'UPDATE_BEVERAGE',
    id,
    updates
  };
};

export var startUpdateBeverage = (id, updates) => {
  return (dispatch, getState) => {
    const beverageKey  = id;
    const propKey = getState().property.key;

    //lets make a fanout
    const beverageFanOut = {};

    beverageFanOut[`/beverages/${beverageKey}`] =  updates;
    beverageFanOut[`/property-beverages/${beverageKey}`] = updates;

    return firebaseRef.update(beverageFanOut).then(() => {
      //dispatch local action
      dispatch(updateBeverage(id, updates));
    });
  }
}
