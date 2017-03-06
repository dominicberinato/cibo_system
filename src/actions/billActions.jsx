import {firebaseRef} from 'src/firebase/index'

//action to add bill
export var addBill = (bill) => {
  return {
    type: 'ADD_BILL',
    bill
  };
};
//async action to start new table
//TODO somebills will only be counter bills ... add option as table
export var startAddBill = (bill) => {
  return(dispatch, getState) => {
    //get ref to key on db
    var billKey = firebaseRef.child(`bills`).push().key;
    //create fan out
    var billFanOut = {};
    //update fanout
    billFanOut[`/bills/${billKey}`] = bill;
    billFanOut[`/table-bills/${bill.tbKey}/${billKey}`] = billKey;

    return firebaseRef.update(billFanOut).then(() => {
      //dispatch addBill
      dispatch(addBill({
        ...bill,
        id: billKey
      }));
    });
  }
}

//action to add item
export var addItem = (id, updates) => {
  return {
    type: 'ADD_ITEM',
    id,
    updates
  };
};

//action to  remove item
export var removeItem = (id, updates) => {
  return {
    type: 'REMOVE_ITEM',
    id,
    updates
  };
};

//action to delete bill
export var deleteBill = (id) => {
  return  {
    type: 'DELETE_BILL',
    id
  };
};
