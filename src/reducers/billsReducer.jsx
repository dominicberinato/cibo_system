//make a reducer for bills
export var billsReducer  = (state = [], action) => {
  switch(action.type) {
    case 'START_BILL':
      return [
        ...state,
        action.bill
      ];
    default:
      return state;
  }
}
