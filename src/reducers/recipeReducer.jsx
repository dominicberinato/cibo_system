export var recipeReducer  = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
        action.recipe
      ];
    case 'UPDATE_RECIPE':
      return state.map((recipe) => {
        if(recipe.id == action.id) {
          return {
            ...recipe,
            ...action.updates
          }
        } else {
          return recipe;
        }
      });
    case 'DELETE_RECIPE':
      return state.filter((recipe) => {
        return recipe.id != action.id
      });
    default:
      return state;
  }
}
