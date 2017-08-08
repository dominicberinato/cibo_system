import {firebaseRef} from 'src/firebase'
export var addRecipe = (recipe) => {
  return{
    type: 'ADD_RECIPE',
    recipe
  };
};

export var collectPropRecipes = () => {
  return(dispatch, getState) => {
    const propKey = getState().property.key;
    //pull from firebase
    return firebaseRef.child(`/property-recipes/${propKey}`).on('child_added', (snapshot) => {
      firebaseRef.child(`/recipes/${snapshot.val()}`).once('value', (rShot) => {
        dispatch(addRecipe({
          ...rShot.val(),
          id: snapshot.val()
        }))
      })
    })
  }
}

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


export var startAddRecipe = ({recipeCategory, recipeDesiredCost, recipeSuggestedPrice,
   recipeCalcPrice, ingredients=[], batches=[], recipePortions, recipeDescription }) => {
  return(dispatch, getState) => {
    //lets get property id
    const prop = getState().property.key;

    const recipeKey = firebaseRef.child('recipes').push().key;

    //now make a fanout update
    var recipeFanOut = {};

    recipeFanOut[`/recipes/${recipeKey}`] = {recipeCategory, recipeDesiredCost, recipeSuggestedPrice,
       recipeCalcPrice, recipePortions, recipeDescription};
    recipeFanOut[`/property-recipes/${prop}/${recipeKey}`] = recipeKey;
    ingredients.map((ing) => {
      return recipeFanOut[`/recipe-ingredients/${recipeKey}/${ing.name}`] = {id: ing.name, amount: ing.amount}
    })
    batches.map((bat) => {
      return recipeFanOut[`recipe-batches/${recipeKey}/${bat.name}`] = {id: bat.name, amount: bat.amount}
    })


    //update
    return firebaseRef.update(recipeFanOut).then(() => {
      //dispatch local action
      dispatch(addRecipe({
        id: recipeKey,
        recipeCategory,
        recipeDesiredCost,
        recipeSuggestedPrice,
        recipeCalcPrice,
        recipePortions,
        recipeDescription
      }));
    });
  }
}

export var startUpdateRecipe = (id, updates) => {
  return(dispatch, getState) => {
    const prop = getState().property.key;

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
    const prop = getState().property.key;

    var delRecipeFanOut =  {};

    delRecipeFanOut[`/recipes${id}`] = null;
    delRecipeFanOut[`/property-recipes/${prop}/${id}`] = null;

    return firebaseRef.update(delRecipeFanOut).then(() => {
      dispatch(deleteRecipe(id));
    })
  }
}
