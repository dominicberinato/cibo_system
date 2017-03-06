import expect from 'expect'
var df = require('deep-freeze-strict')
import {billsReducer} from 'billsReducer'
describe('BillsReducer', () => {


  it('should add a bill on START_BILL',() => {
    const bill = {
      billKey: 1232,
      tbKey:2,
      tbname: 2,
      resOwner: 'Isaac',
      bill: 30
    };

    //mock our bill action
    var billAction = {
      type: 'START_BILL',
      bill
    };
    //assert expectation on result
    var result = billsReducer(df([]), df(billAction));

    expect(result[0]).toEqual(billAction.bill);
  });

  it('should add item to bill on ADD_ITEM', () => {
    //lets mock a couple of bills
    const bills = [
      {
        billKey: 1232,
        tbKey:2,
        tbname: 2,
        resOwner: 'Isaac',
        bill: 30
      },
      {
        billKey: 1234,
        tbKey:4,
        tbname: 5,
        resOwner: 'Osiemo',
        bill: 30
      }
    ];

    const updates = {
      bill: 40,
      items: [
        '20'
      ]
    };


    //lets mock our bill action
    const action = {
      type: 'ADD_ITEM',
      billId: 1232,
      updates
    };

    //acll our reducer and assert
    var res = billsReducer(df(bills), df(action));
    expect(res[0].bill).toEqual(updates.bill);
    expect(res[0].items).toEqual(updates.items);
  });

  it('should allow removal of item', () => {
    //lets mock a couple of bills
    const bills = [
      {
        billKey: 1232,
        tbKey:2,
        tbname: 2,
        resOwner: 'Isaac',
        bill: 30
      },
      {
        billKey: 1234,
        tbKey:4,
        tbname: 5,
        resOwner: 'Osiemo',
        bill: 30
      }
    ];
    const updates = {
      bill: 20,
      items: [12]
    };

    const action = {
      type: 'REMOVE_ITEM',
      billId: 1234,
      updates
    };

    //lets call the reducer and assert
    var res = billsReducer(df(bills), df(action));

    //lets assert our expectations
    expect(res[1].bill).toEqual(updates.bill);
    expect(res[1].items).toEqual(updates.items);
  })


  it('should delete a bill', () => {
    //lets mock a couple of bills
    const bills = [
      {
        billKey: 1232,
        tbKey:2,
        tbname: 2,
        resOwner: 'Isaac',
        bill: 30
      },
      {
        billKey: 1234,
        tbKey:4,
        tbname: 5,
        resOwner: 'Osiemo',
        bill: 30
      }
    ];

    //lets mock a delete action
    const action = {
      type: 'DELETE_BILL',
      billId: 1234
    };

    //lets run the action through the reducer
    var res = billsReducer(df(bills), df(action));

    //assert that the bill is removed
    expect(res).toExclude(bills[action.billId])
  })


})
