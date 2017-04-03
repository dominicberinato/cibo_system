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

  it('should update menu on updateMenu', () => {
    //mock some data
    const menus = [{
      id:1,
      name: 'bar menu',
      category: 'starters',
      menuItems: [1,2]
    }];

    const updates = {
      menuItems: [1,2,3]
    };

    //mock an action
    const action = {
      type: 'UPDATE_MENU',
      id: menus[0].id,
      updates
    };

    var res = menuReducer(df(menus), df(action));

    expect(res[0].menuItems).toEqual(updates.menuItems);
  });

  it('should delete menu on deleteMenu',  () => {
    //mock some data
    const menus = [{
      id:1,
      name: 'bar menu',
      category: 'starters',
      menuItems: [1,2]
    }];

    //mock actions
    const action = {
      type: 'DELETE_MENU',
      id: menus[0].id
    };

    var res = menuReducer(df(menus), df(action));

    expect(res).toExclude(menus[0]);
  });
});
