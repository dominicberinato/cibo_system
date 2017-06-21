import expect from 'expect';
var df = require('deep-freeze-strict');
import {userPropertiesReducer} from 'userPropertiesReducer'


describe('userPropertiesReducer', () => {
  it('should exist', () => {
    expect(userPropertiesReducer).toExist()
  });

  it('should add a userProperty', () => {
    //mock a prop
    const prop = {
      name: 'Azure'
    };

    //mock an action
    const action =  {
      type: 'ADD_USER_PROPERTY',
      prop
    };

    const res = userPropertiesReducer(df([]), df(action));

    expect(res[0]).toEqual(prop);
  })

  it('should remove a userProperty', () =>{
    const props =  [{
      key: 1,
      name: 'one'
    },
    {
      key: 2,
      name: 'two'
    }]

    const action = {
      type: 'REMOVE_USER_PROPERTY',
      propid: 1
    };

    const res = userPropertiesReducer(df(props), df(action));

    expect(res).toExclude(props[1]);
  })
})
