import {firebaseRef} from 'src/firebase/index'

//action to add bill
export var addBill = (bill) => {
  return {
    type: 'ADD_BILL',
    bill
  };
};

//action to add item 
