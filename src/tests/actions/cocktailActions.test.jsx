import expect from 'expect'
import * as actions from 'cocktailActions'
import firebase,{firebaseRef} from 'src/firebase'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const createMockStore = configureMockStore([thunk]);

describe.only('cocktailActions', () => {

  describe('sync', () => {

    it('should generate addCocktail Action', () => {

      //mock a cocktail
      const cocktail  =  {
        name: 'Tea',
        contents: [
          {id: 23, amount: '2 spoons'},
          {id: 56, amount: '1 pinch'}
        ]
      };

      //mock the action
      const action =  {
        type: 'ADD_COCKTAIL',
        cocktail
      };

      //call the actions
      const res =  actions.addCocktail(cocktail);

      expect(res).toEqual(action);
    });

    it('should generate updateCocktail Action', () => {
      //mock a cocktail
      const cocktail  =  {
        id: 2,
        name: 'Tea',
        contents: [
          {id: 23, amount: '2 spoons'},
          {id: 56, amount: '1 pinch'}
        ]
      };


      const updates =  {name: 'Strong tea'};

      const action = {
        type: 'UPDATE_COCKTAIL',
        id: cocktail.id,
        updates
      };

      const res =  actions.updateCocktail(cocktail.id, updates);

      expect(res).toEqual(action);

    });

    it('should generate deleteCocktail Action', () => {

      //mock a cocktail
      const cocktail  =  {
        id: 2,
        name: 'Tea',
        contents: [
          {id: 23, amount: '2 spoons'},
          {id: 56, amount: '1 pinch'}
        ]
      };

      const action = {
        type: 'DELETE_COCKTAIL',
        id: cocktail.id
      };

      const res = actions.deleteCocktail(cocktail.id);

      expect(res).toEqual(action);
    });
  });

  describe('Async', () => {
    //do set up for async tests
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


  });
});
