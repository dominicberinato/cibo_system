import expect from 'expect'
import * as actions from 'menuActions'
import firebase,{firebaseRef} from 'src/firebase'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const createMockStore = configureMockStore([thunk]);


describe('menuActions', () => {
  it('should exist',  () => {
    expect(actions).toExist();
  });

  describe('sync', () => {
    it('should generate addMenu action', () => {
      const menu = {
        name: 'bar menu',
        category: 'starters',
        menuItems: [1,2]
      };

      const action = {
        type: 'ADD_MENU',
        menu
      };

      const res = actions.addMenu(menu);

      expect(res).toEqual(action);
    });

    it('should generate deleteMenu action',  () => {
      const menu = {
        id:1,
        name: 'bar menu',
        category: 'starters',
        menuItems: [1,2]
      };

      const action = {
        type: 'DELETE_MENU',
        id: menu.id
      };

      const res = actions.deleteMenu(menu.id);

      expect(res).toEqual(action);
    });

    it('should generate updateMenu action',  () => {
      const menu = {
        id:1,
        name: 'bar menu',
        category: 'starters',
        menuItems: [1,2]
      };

      const updates = {
        menuItems: [2,3,4]
      };

      const action = {
        type: 'UPDATE_MENU',
        id: menu.id,
        updates
      };

      const res = actions.updateMenu(menu.id, updates);

      expect(res).toEqual(action);
    });
  });

  describe('Async', () => {
    //data needed
    var uid;
    var propertyRef = firebaseRef.child('properties');
    var testPropertyKey;
    var store;
    var debug = {hello: "world"};
    var mockImage = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});
    var testProperty =  {
      pname: 'folk coffee',
      address: '3 Bree Street',
      avatar: mockImage,
      propKey: 58686816897
    };

    //run this code before each asnyc test (login && set up stuff)
    beforeEach((done) => {
      store = createMockStore({property:testProperty})
      //SIGN IN anonymously
      firebase.auth().signInAnonymously().then((user) => {
        uid = user.uid;
        testProperty.propCreator = uid

        //remove any existing proprties
        return firebaseRef.remove();
      }).then(()=> {

      })
      .then(() => done())
      .catch(done);
    });

    ///run this after each tests
    afterEach((done) => {
      firebaseRef.remove().then(() => done());
    });

    it('should dispatch addMenu on startAddMenu', (done) => {
      //mock an object
      const menu = {
        id:1,
        name: 'bar menu',
        category: 'starters',
        menuItems: [1,2]
      };

      //mock an action
      const action = actions.startAddMenu(menu);

      store.dispatch(action).then(() => {

        //get actions
        const mockActions = store.getActions();

        //assert
        expect(mockActions[0].toInclude({
          type: 'ADD_MENU',
          menu: {
            ...menu
          }
        }));
        done();
      }, done());
    });

    it('should dispatch deleteMenu after startDeleteMenu', (done) => {

      //mock an object
      const menu = {
        id:1,
        name: 'bar menu',
        category: 'starters',
        menuItems: [1,2]
      };

      //get an action
      const action = actions.startDeleteMenu(menu.id);

      //dispatch
      store.dispatch(action).then(()=>{
        //get actions
        const mockActions = store.getActions();

        //assert
        expect(mockActions[0].toInclude({
          type: 'DELETE_MENU',
          id: menu.id
        }));
        done();
      }, done());
    });

    it('should dispatch updateMenu after startUpdateMenu', (done) => {
      //mock an object
      const menu = {
        id:1,
        name: 'bar menu',
        category: 'starters',
        menuItems: [1,2]
      };

      const updates = {
        menuItems: [4,5]
      };
      const action = actions.startUpdateMenu(menu.id, updates);

      store.dispatch(action).then(() => {
        //get Actions
        const mockActions =  store.getActions();

        //assert
        expect(mockActions[0].toInclude({
          type: 'UPDATE_MENU',
          menu: {
            ...menu
          }
        }));
        done();
      }, done());
    })

  })
})
