import {firebaseRef} from 'src/firebase/index'

export var addBatch = (batch) => {
  return {
    type: 'ADD_BATCH',
    batch
  };
};

export var startAddBatch =  (batch) => {
  return(dispatch, getState) => {
    //get a  key
    const batchKey = firebaseRef.child('batches').push().key;
    const prop = getState().property.propKey;
    //lets add a fanOut Update object
    var batchFanOut = {};
    batchFanOut[`/batches/${batchKey}`] = batch;
    batchFanOut[`/property-batches/${prop}/${batchKey}`] = batchKey;

    return firebaseRef.update(batchFanOut).then(() => {
      //dispatchlocal
      dispatch(addBatch({
        ...batch,
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
    const prop = getState().property.propKey;
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
