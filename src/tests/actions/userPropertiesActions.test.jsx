import expect from 'expect'
import * as actions from 'userPropertiesActions'
import firebase,{firebaseRef} from 'src/firebase'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe.only('userPropertiesActions', () => {
  it('should exist', () => {
    expect(actions).toExist();
  });

  describe('sync actions', () => {

    it('should generate addUserProperty action', () => {

      const prop = {
        name: 'wohooo',
        key: 1
      };

      const action = {
        type: 'ADD_USER_PROPERTY',
        prop
      };

      const res = actions.addUserProperty(prop);

      expect(res).toEqual(action);
    })

    it('should generate removeUserProperty action', () => {
      const prop = {
        name: 'wohoo',
        key: 1
      };

      const action = {
        type: 'REMOVE_USER_PROPERTY',
        propid: prop.key
      };

      const res =  actions.removeUserProperty(prop.key);

      expect(res).toEqual(action);
    })

  })

})
