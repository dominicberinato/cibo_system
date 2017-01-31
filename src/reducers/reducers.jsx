//pure function that takes in state and works on crud
export var reservationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESERVATION':

      break;
    default:
      return state;
  }
}
//work on an auth reducer
export var authReducer = (state = {}, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
