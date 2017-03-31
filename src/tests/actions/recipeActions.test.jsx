import expect from 'expect'
import * as actions from 'recipeActions'
import firebase,{firebaseRef} from 'src/firebase'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const createMockStore = configureMockStore([thunk]);


describe.only('recipeActions', () => {
  it('should exist', () => {
    expect(actions).toExist();
  });

  it('should create recipe', () => {
    //mock recipe
    const recipe = {
      category: 'starter',
      description: 'portions',
      portions: 4,
      totalCost: 34,
      desiredCost: 30,
      suggestedPrice: 67
    };

    //mock action
    const recipeAction = {
      type: 'ADD_RECIPE',
      recipe
    };

    var result = actions.addRecipe(recipe);

    expect(result).toEqual(recipeAction);
  });

  it('should update recipe on updateRecipe',  () => {
    //mock recipe
    const recipe = {
      category: 'starter',
      description: 'portions',
      portions: 4,
      totalCost: 34,
      desiredCost: 30,
      suggestedPrice: 67,
      id: 3
    };

    const updates = {
      suggestedPrice: 56
    }

    //mock action
    const recipeAction = {
      type: 'UPDATE_RECIPE',
      id: recipe.id,
      updateBatchAction
    };

    //call actions with data
    const res = actions.updateRecipe(recipe.id, updates);

    expect(res).toEqual(recipeAction)
  });

  it('should delete recipe on deleteRecipe', () => {
    //mock recipe
    const recipe = {
      category: 'starter',
      description: 'portions',
      portions: 4,
      totalCost: 34,
      desiredCost: 30,
      suggestedPrice: 67,
      id: 3
    };

    //mock action
    const recipeAction = {
      type: 'DELETE_RECIPE',
      id:recipe.id
    };

    const res = actions.deleteRecipe(recipe.id);

    expect(res).toEqual(recipeAction);
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


    it('should call addRecipe after startAddRecipe', (done) => {

      //mock recipe
      const recipe = {
        category: 'starter',
        description: 'portions',
        portions: 4,
        totalCost: 34,
        desiredCost: 30,
        suggestedPrice: 67,
        id: 3
      };

      //mock async action
      const action = actions.startAddRecipe(recipe);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        //assert that action was triggered
        expect(mockActions[0]).toInclude({
          type: 'ADD_RECIPE',
          recipe
        });
      })

    })

  })

})
