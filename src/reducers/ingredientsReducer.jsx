export var ingredientsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [
        ...state,
        action.ingredient
      ];
    case 'UPDATE_INGREDIENT':
      return state.map((ingredient) => {
        if(ingredient.id == action.id) {
          return {
            ...ingredient,
            ...action.updates
          }
        } else {
          return ingredient
        }
      });
    case 'DELETE_INGREDIENT':
      return state.filter((ingredient) => {
        return ingredient != action.id
      });
    default:
      return state;

  }
}
