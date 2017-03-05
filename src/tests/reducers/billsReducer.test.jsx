import expect from 'expect'
var df = require('deep-freeze-strict')
import {billsReducer} from 'billsReducer'
describe('BillsReducer', () => {
  it('should add a bill on addBill',() => {
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
  })
})
