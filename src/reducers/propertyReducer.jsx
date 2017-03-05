//use this to set relevant propertyData
export var propertyReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PROPERTY':
      return action.property;
    case 'CLEAR_PROPERTY':
      return {};
    default:
      return state;
  }
}
