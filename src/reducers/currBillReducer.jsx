export var currBillReducer = (state = '', action) =>  {
  switch (action.type) {
    case 'CURR_BILL':
      return action.billID;
    default:
      return state;
  }
}
