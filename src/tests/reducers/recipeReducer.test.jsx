var df = require('deep-freeze-strict');
import expect from 'expect'
import {recipeReducer} from 'recipeReducer'

describe('recipeReducer', () => {
  it('should exist', () => {
    expect(recipeReducer).toExist();
  });

  it('should add recipe on addRecipe', () => {
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

    const action = {
      type: 'ADD_RECIPE',
      recipe
    };

    const res = recipeReducer(df([]), df(action));

    expect(res[0]).toEqual(action.recipe);
  });

  it('should delete recipe on deleteRecipe', () => {
    //mock recipe
    const recipes = [{
      category: 'starter',
      description: 'portions',
      portions: 4,
      totalCost: 34,
      desiredCost: 30,
      suggestedPrice: 67,
      id: 3
    }];

    const action = {
      type: 'DELETE_RECIPE',
      id: recipes[0].id
    };

    const res = recipeReducer(df(recipes), df(action));

    expect(res).toExclude(recipes[0]);
  });

  it('should update recipe on updateRecipe', () => {
    //mock recipe
    const recipes = [{
      category: 'starter',
      description: 'portions',
      portions: 4,
      totalCost: 34,
      desiredCost: 30,
      suggestedPrice: 67,
      id: 3
    }];

    const updates = {
      suggestedPrice: 89
    };

    const action = {
      type: 'UPDATE_RECIPE',
      id: recipes[0].id,
      updates
    };

    const res = recipeReducer(df(recipes), df(action));

    expect(res[0].suggestedPrice).toEqual(updates.suggestedPrice);
  })
})
