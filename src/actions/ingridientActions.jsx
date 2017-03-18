export var addIngridient = (ingridient) => {
  return {
    type: 'ADD_INGRIDIENT',
    ingridient
  };
}

export var updateIngridient = (id, updates) =>{
  return {
    type: 'UPDATE_INGRIDIENT',
    id,
    updates
  };
}

export var deleteIngridient = (id) => {
  return {
    type: 'DELETE_INGRIDIENT',
    id
  };
}
