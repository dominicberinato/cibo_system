import {firebaseRef} from 'src/firebase'
export var addRecipe = (recipe) => {
  return{
    type: 'ADD_RECIPE',
    recipe
  };
};

export var deleteRecipe = (id) => {
  return {
    type: 'DELETE_RECIPE',
    id
  };
};

export var updateRecipe = (id, updates) => {
  return {
    type: 'UPDATE_RECIPE',
    id,
    updates
  };
};


export var startAddRecipe = (recipe) => {
  return(dispatch, getState) => {
    //lets get property id
    const prop = getState().property.propKey;

    const recipeKey = firebaseRef.child('recipes').push().key;

    //now make a fanout update
    var recipeFanOut = {};

    recipeFanOut[`/recipes/${recipeKey}`] = recipe;
    recipeFanOut[`/property-recipes/${prop}/${recipeKey}`] = recipe;

    //update
    return firebaseRef.update(recipeFanOut).then(() => {
      //dispatch local action
      dispatch(addRecipe({
        id: recipeKey,
        ...recipe
      }));
    });
  }
}

export var startUpdateRecipe = (id, updates) => {
  return(dispatch, getState) => {
    const prop = getState().property.propKey;

    //now make a fanout update
    var recipeFanOut = {};

    recipeFanOut[`/recipes/${id}`] = updates;
    recipeFanOut[`/property-recipes/${prop}/${id}`] = updates;

    return firebaseRef.update(recipeFanOut).then(() => {
      //dispatch local action
      dispatch(updateRecipe(id, updates));
    })

  }
}

export var startDeleteRecipe =  (id) => {
  return(dispatch, getState) => {
    const prop = getState().property.propKey;

    var delRecipeFanOut =  {};

    delRecipeFanOut[`/recipes${id}`] = null;
    delRecipeFanOut[`/property-recipes/${prop}/${id}`] = null;

    return firebaseRef.update(delRecipeFanOut).then(() => {
      dispatch(deleteRecipe(id));
    })
  }
}
