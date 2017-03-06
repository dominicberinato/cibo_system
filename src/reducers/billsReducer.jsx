//make a reducer for bills
export var billsReducer  = (state = [], action) => {
  switch(action.type) {
    case 'START_BILL':
      return [
        ...state,
        action.bill
      ];
    case 'ADD_ITEM':
      //map over all our state items
      return state.map((bill) => {
        if(bill.id === action.id) {
          //if correct bill we can update it
          return {
            ...bill,
            ...action.updates
          }
        } else {
          return bill;
        }
      });
      case 'REMOVE_ITEM':
        //map over all our state items
        return state.map((bill) => {
          if(bill.id === action.id) {
            //if correct bill we can update it
            return {
              ...bill,
              ...action.updates
            }
          } else {
            return bill;
          }
        });
    case 'DELETE_BILL':
      //run our bills through a filter
      return state.filter((bill) => {
        return bill.id != action.id
      });
    default:
      return state;
  }
}
