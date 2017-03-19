import expect from 'expect'
import * as actions from 'ingredientActions'
import configureMockStore from 'redux-mock-store'
import firebase,{firebaseRef} from 'src/firebase/index'
import thunk from 'redux-thunk'

const createMockStore = configureMockStore([thunk]);


describe('ingridientActions', () => {
  it('Should exist', () => {
    expect(actions).toExist();
  });

  describe('Sync Actions', () => {

    it('should generate addIngredient action',  () => {
      //mock an ingridient
      const ingredient = {
        id: 123232,
        category: 'dairy',
        description: 'butter',
        brand: 'Netherend',
        size: '100kg',
        cost: 'R32',
        supplier: 121323,
        offdate: '03/04/2018'
      };

      //action we expect back
      const addIngAction  =  {
        type:'ADD_INGREDIENT',
        ingredient
      };

      //call an action with our data
      var result = actions.addIngredient(ingredient);

      expect(result).toEqual(addIngAction);
    });

    it('should generate deleteIngredient action', () => {

      //mock an ingridient
      const ingredient = {
        id: 123232,
        category: 'dairy',
        description: 'butter',
        brand: 'Netherend',
        size: '100kg',
        cost: 'R32',
        supplier: 121323,
        offdate: '03/04/2018'
      };

      //mock up a result
      const deleteAction  = {
        type: 'DELETE_INGREDIENT',
        id: ingredient.id
      }

      //call the action
      const result = actions.deleteIngredient(ingredient.id);

      //assert on result
      expect(result).toEqual(deleteAction);
    });

    it('should generate updateIngredient action', () => {

      //mock an ingridient
      const ingredient = {
        id: 123232,
        category: 'dairy',
        description: 'butter',
        brand: 'Netherend',
        size: '100kg',
        cost: 'R32',
        supplier: 121323,
        offdate: '03/04/2018'
      };

      //mock update
      const updates =  {
        supplier: 768623862
      };

      const updateAction = {
        type: 'UPDATE_INGREDIENT',
        id: ingredient.id,
        updates
      };

      //lets call the actions
      var result = actions.updateIngredient(ingredient.id, updates)

      //expect the actions
      expect(result).toEqual(updateAction);
    });
  });


  describe('Async',  () => {
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

    it('should call startUpdateIngredient and dispatch updateIngridient', (done) => {
      //mock an ingridient
      const ingredient = {
        id: 67979,
        category: 'dairy',
        description: 'butter',
        brand: 'Netherend',
        size: '100kg',
        cost: 'R32',
        supplier: 121323,
        offdate: '03/04/2018'
      };

      //MOCK SOME UPDATES
      const updates = {
        offdate: '05/08/2018'
      };

      //trigger and assert
      const action = actions.startUpdateIngredient(ingredient.id, updates);

      //dispatch
      store.dispatch(action).then(() => {
        //collected dispatched actions
        const mockActions = store.getActions();

        //assert
        expect(mockActions[0].toInclude({
          type: 'UPDATE_INGREDIENT',
          id: ingridient.id,
          updates
        }));
        done();
      }, done())
    });

    it('should startDeleteIngredient and dispatch deleteIngredient',(done) => {
      //mock an ingridient
      const ingredient = {
        id:669879,
        category: 'dairy',
        description: 'butter',
        brand: 'Netherend',
        size: '100kg',
        cost: 'R32',
        supplier: 121323,
        offdate: '03/04/2018'
      };

      //mock an action
      const action = actions.startDeleteIngredient(ingredient.id);

      //dispatch action
      store.dispatch(action).then(() => {
        //get fired actions
        const mockActions = store.getActions();
        //assert
        expect(mockActions[0].toInclude({
          type: 'DELETE_INGREDIENT',
          id: ingridient.id
        }));
        done();
      }, done())
    })


    it('should call startAddIngridient and dispatch addIngridient', (done) => {
      //mock an ingridient
      const ingredient = {
        category: 'dairy',
        description: 'butter',
        brand: 'Netherend',
        size: '100kg',
        cost: 'R32',
        supplier: 121323,
        offdate: '03/04/2018'
      };

      const action = actions.startAddIngredient(ingredient);

      store.dispatch(action).then(() => {
        //let collect actions
        const mockActions = store.getActions();

        //assert that addIngridient was called
        expect(mockActions[0].toInclude({
          type:'ADD_INGREDIENT',
          ingridient: {
            ...ingridient
          }
        }));
        done();
      }, done())

    })
  })
})
