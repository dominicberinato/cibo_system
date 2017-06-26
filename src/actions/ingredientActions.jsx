import firebase, {firebaseRef} from 'src/firebase/index'
import {reset} from 'redux-form'
//local add ingredient
export var addIngredient = (ingredient) => {
  return {
    type: 'ADD_INGREDIENT',
    ingredient
  };
}


//Collect the ingredients for this property from db
//TODO Collect ingredients owned by this property and add them to state
export const collectPropIngridients = () => {

}

//async add ingredient
export var startAddIngredient = (ingredient) => {
  return(dispatch, getState) => {
    //collect data
    const IngKey =  firebaseRef.child('ingredients').push().key;
    const prop = getState().property.key;
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
      dispatch(reset('ingredient'));
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

export var startDeleteIngredient = (id) => {
  return(dispatch, getState) => {
    const prop = getState().property.key
    //lets create a fanout
    var IngDeleteFanOut =  {};

    //populate fanout with we want deleted
    IngDeleteFanOut[`/ingredients/${id}`] = null;
    IngDeleteFanOut[`/property-ingredients/${prop}/${id}`] =  null;

    //update remote db
    return firebaseRef.update(IngDeleteFanOut).then(() => {
      //dispatch local
      dispatch(deleteIngredient(id))
    })
  }
}
