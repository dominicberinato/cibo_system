import expect from 'expect'
import * as actions from 'userPropertiesActions'
import firebase,{firebaseRef} from 'src/firebase'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

//use this to mock a store
var createMockStore = configureMockStore([thunk]);

describe('userPropertiesActions', () => {
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
    });

    it('should generate clearUserProperties action',  () => {
      const action = {
        type: 'CLEAR_USER_PROPERTIES'
      };
      const res = actions.clearProps();

      expect(res).toEqual(action);
    })
  })


  describe('async', () => {
    const sampleProp = {
      name: 'Azure',
      key: 123
    };

    var uid;

    let propRef;
    //do some set up
    beforeEach(done => {
      const beforeFanout = {};
      firebase.auth().signInAnonymously().then((user) => {
        //get user id
        uid = user.uid;
        //get prop key
        const pkey =  sampleProp.key;
        //add user and property to firebase
        beforeFanout[`/users/${uid}`] = uid;
        beforeFanout[`/properties/${pkey}`] =  sampleProp;
        beforeFanout[`/property-users/${pkey}/${uid}`] = uid;
        beforeFanout[`/user-properties/${uid}/${pkey}`] = sampleProp;

        return firebaseRef.update(beforeFanout)
        .then(() => done())
        .catch(done);
      })
    });

    afterEach(done =>  {
      //clear fb
      firebaseRef.remove().then(() =>  done());
    })

    it('should collect userproperties', done => {

      //make a store to record actions
      //store contains uid that collect user properties uses
      const store = createMockStore({auth:{uid}})

      const action = actions.collectUserProperties();

      store.dispatch(action).then(() => {
        //get fired actions
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_USER_PROPERTY');
        expect(mockActions[0].prop).toEqual(sampleProp);
        done();
      }, done());
    });


  });
});
