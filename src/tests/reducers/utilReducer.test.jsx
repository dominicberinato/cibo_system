import expect from 'expect'
var df = require('deep-freeze-strict')
import {utilReducer} from 'utilReducer'

describe.only('utilReducer', () => {
  it('should exist', () => {
    expect(utilReducer).toExist();
  });

  it('should set the stock form name when called',  () => {

    const action  = {
      type: 'SET_STOCK_FORM',
      formName: 'beverages'
    };

    const res = utilReducer(df(''), df(action));

    expect(res).toEqual(action.formName);
  });
})
