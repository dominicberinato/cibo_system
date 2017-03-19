import firebase, {firebaseRef} from 'src/firebase/index'
//local add ingredient
export var addIngredient = (ingredient) => {
  return {
    type: 'ADD_INGREDIENT',
    ingredient
  };
}
//async add ingredient
export var startAddIngredient = (ingredient) => {
  return(dispatch, getState) => {
    //collect data
    const IngKey =  firebaseRef.child('ingredients').push().key;
    const prop = getState().property.propKey
    var IngFanOut = {};
    IngFanOut[`/ingredients/${IngKey}`] = ingredient;
    IngFanOut[`/property-ingredients/${prop}/${IngKey}`] = IngKey;
    //update firebase
    return firebaseRef.update(IngFanOut).then(() => {
      //dispatch local action
      dispatch(addIngredient({
        ...ingredient,
        id: IngKey
      }));
    })

  }
}
//local update ingredient
export var updateIngredient = (id, updates) =>{
  return {
    type: 'UPDATE_INGREDIENT',
    id,
    updates
  };
}

//async update ingredient
export var startUpdateIngredient = (id, updates) => {
  return (dispatch, getState) => {
    //init update obj
    var IngUpdateFanOut = {};
    //populate update
    IngUpdateFanOut[`/ingredients/${id}`] = updates;

    //lets run update and call local
    return firebaseRef.update(IngUpdateFanOut).then(() => {
      //dispatch local action
      dispatch(updateIngredient(id, updates))
    });
  }
}



export var deleteIngredient = (id) => {
  return {
    type: 'DELETE_INGREDIENT',
    id
  };
}
