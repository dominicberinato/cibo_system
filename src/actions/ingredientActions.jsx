import firebase, {firebaseRef} from 'src/firebase/index'

export var addIngredient = (ingredient) => {
  return {
    type: 'ADD_INGREDIENT',
    ingredient
  };
}

export var startAddIngredient = (ingredient) => {
  return(dispatch, getState) => {
    //collect data
    const IngKey =  firebaseRef.child('ingredients').push().key;
    const prop = getState.property.propKey
    var IngFanOut = {};
    IngFanOut[`/ingredients/${IngKey}`] = ingredient;
    IngFanOut[`/property-ingredients/${prop}/${IngKey}`] = IngKey;
    //update firebase
    return firebase.update(IngFanOut).then(() => {
      //dispatch local action
      dispatch(addIngredient({
        ...ingredient,
        id: IngKey
      }));
    })

  }
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
