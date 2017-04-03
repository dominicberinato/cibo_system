var df = require('deep-freeze-strict')
import expect from 'expect'
import {menuReducer} from 'menuReducer'

describe.only('menuReducer', () => {
  it('should exist', () => {
    expect(menuReducer).toExist();
  });

  it('should create menu on addMenu', () => {
    //mock some data
    const menu = {
      id:1,
      name: 'bar menu',
      category: 'starters',
      menuItems: [1,2]
    };

    //mock an action
    const action = {
      type: 'ADD_MENU',
      menu
    };

    var res = menuReducer(df([]), df(action));

    expect(res[0]).toEqual(action.menu);
  });
})
