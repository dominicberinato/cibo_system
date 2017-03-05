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
