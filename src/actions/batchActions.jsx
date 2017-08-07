import {firebaseRef} from 'src/firebase/index'

export var addBatch = (batch) => {
  return {
    type: 'ADD_BATCH',
    batch
  };
};

export var startAddBatch =  ({batchCategory,batchDescription,batchUnits,batchSize, ingredients}) => {
  return(dispatch, getState) => {
    //get a  key
    const batchKey = firebaseRef.child('batches').push().key;
    const prop = getState().property.key;
    //lets add a fanOut Update object
    const batchFanOut = {};
    batchFanOut[`/batches/${batchKey}`] = {batchCategory,batchDescription,batchUnits,batchSize};
    batchFanOut[`/property-batches/${prop}/${batchKey}`] = batchKey;
    ingredients.map((ing) => {
      return batchFanOut[`/batch-ingredients/${batchKey}/${ing.name}`] = {id: ing.name, amount: ing.amount}
    })

    return firebaseRef.update(batchFanOut).then(() => {
      //dispatchlocal
      dispatch(addBatch({
        batchCategory,
        batchDescription,
        batchUnits,
        batchSize,
        id: batchKey
      }));
    });
  }
}

export var updateBatch = (id, updates) =>{
  return {
    type: 'UPDATE_BATCH',
    id,
    updates
  };
};

export var startUpdateBatch = (id, updates) => {
  return(dispatch, getState) => {
    var batchUpdateFanOut =  {};

    //populate
    batchUpdateFanOut[`/batches/${id}`] = updates;

    return firebaseRef.update(batchUpdateFanOut).then(() => {
      //call local
      dispatch(updateBatch(id, updates));
    })
  }
}

export var deleteBatch = (id) => {
  return {
    type: 'DELETE_BATCH',
    id
  };
};

export var startDeleteBatch = (id) =>  {
  return(dispatch, getState) => {
    const prop = getState().property.key;
    var batchDeleteFanOut = {};

    //populate
    batchDeleteFanOut[`/batches/${id}`] = null;
    batchDeleteFanOut[`property-batches/${prop}/${id}`] = null;

    //call update
    return firebaseRef.update(batchDeleteFanOut).then(() => {
      dispatch(deleteBatch(id));
    })
  }
}
