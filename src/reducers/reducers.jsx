//pure function that takes in state and works on crud
export var reservationsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESERVATION':
      return [
        ...state,
        action.reservation
      ]
    case 'REMOVE_RESERVATION':
      return state.filter((reservation) => {
        return reservation.resKey != action.id
      });
    case 'UPDATE_RESERVATION':
      return state.map((reservation) => {
        if(reservation.resKey == action.id) {
          return {
            ...reservation,
            ...action.updates
          }
        } else {
          return reservation
        }
      });
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
      return [
        ...state,
        action.table
      ];
    case 'UPDATE_TABLE':
      return state.map((table) => {
        if(table.tbKey == action.id) {
          return {
            ...table,
            ...action.updates
          };
        } else
        {
          return table;
        }
      });
    case 'DELETE_TABLE':
      return state.filter((table) => {
        return table.tbKey != action.id
      });
    case 'CLEAR_TABLES':
      return [];
    default:
      return state;
  }
}
