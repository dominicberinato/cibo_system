export var addIngredient = (ingredient) => {
  return {
    type: 'ADD_INGREDIENT',
    ingredient
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
