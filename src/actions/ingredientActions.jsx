export var addIngredient = (ingridient) => {
  return {
    type: 'ADD_INGREDIENT',
    ingridient
  };
}

export var updateIngredient = (id, updates) =>{
  return {
    type: 'UPDATE_INGREDIENT',
    id,
    updates
  };
}

export var deleteIngredient = (id) => {
  return {
    type: 'DELETE_INGREDIENT',
    id
  };
}
