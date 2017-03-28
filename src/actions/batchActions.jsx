export var addBatch = (batch) => {
  return {
    type: 'ADD_BATCH',
    batch
  };
};

export var updateBatch = (id, updates) =>{
  return {
    type: 'UPDATE_BATCH',
    id,
    updates
  };
};

export var deleteBatch = (id) => {
  return {
    type: 'DELETE_BATCH',
    id
  };
};
