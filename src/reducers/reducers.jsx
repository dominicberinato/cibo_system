//pure function that takes in state and works on crud
export var reservationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESERVATION':
      break;
    default:
      return state;
  }
}
// an auth reducer to fill the data we need after auth has occured
export var authReducer = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {...action.user};
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
}

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

export var tablesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TABLE':
      break;
    default:
      return state;
  }
}
