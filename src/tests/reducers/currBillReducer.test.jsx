import expect from 'expect'
var df = require('deep-freeze-strict')
import {currBillReducer} from 'currBillReducer'

describe('currBillReducer', () => {
  it('should set the current Bill', () => {

    var billID = 123;

    //lets mock the action
    const currBillAction =  {
      type: 'CURR_BILL',
      billID
    };
    //lets call the reducer
    var res = currBillReducer(df(''), df(currBillAction));

    //lets assert on the result
    expect(res).toEqual(billID);
  });
})
