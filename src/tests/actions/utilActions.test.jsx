import expect from 'expect'
import * as actions from 'utilActions'

describe('Utility Actions', () => {
  it('should exist', () => {
    expect(actions).toExist();
  });

  it('should set the form name for stock forms', () => {
    const action = {
      type: 'SET_STOCK_FORM',
      form: 'beverages'
    };

    const res =  actions.setStockForm(action.form);

    expect(res).toEqual(action);
  })
})
