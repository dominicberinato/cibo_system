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
