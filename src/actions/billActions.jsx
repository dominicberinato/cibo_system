import {firebaseRef} from 'src/firebase/index'

//action to add bill
export var addBill = (bill) => {
  return {
    type: 'ADD_BILL',
    bill
  };
};

//action to add item
export var addItem = (id, updates) => {
  return {
    type: 'ADD_ITEM',
    id,
    updates
  };
};

//action to  remove item
//action to delete bill
