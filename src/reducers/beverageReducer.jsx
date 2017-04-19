export var beverageReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BEVERAGE':
      return [
        ...state,
        action.beverage
      ];
    case 'DELETE_BEVERAGE':
      return state.filter((beverage) => {
        beverage.id != action.id
      });
    case 'UPDATE_BEVERAGE':
      return state.map((beverage) => {
        if(beverage.id ==  action.id) {
          return {
            ...beverage,
            ...action.updates
          }
        } else {
          return beverage
        }
      });
    default:
      return state;
  }
}
