import expect from 'expect'
var df = require('deep-freeze-strict')
import {ingredientsReducer} from 'ingredientsReducer'

describe.only('ingredientsReducer', () => {
  it('should add an ingredient',  () => {
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

    const addIngAction = {
      type: 'ADD_INGREDIENT',
      ingredient
    };

    //call reducer
    var result = ingredientsReducer(df([]), df(addIngAction));

    //expect that the ing was returned
    expect(result[0]).toEqual(addIngAction.ingredient);
  });

  it('should update an ingredient', () => {
    //mock an ingridient
    const ingredients = [{
      id: 123232,
      category: 'dairy',
      description: 'butter',
      brand: 'Netherend',
      size: '100kg',
      cost: 'R32',
      supplier: 121323,
      offdate: '03/04/2018'
    }];

    const updates = {
      size: '300kg'
    };

    const updateAction = {
      type: 'UPDATE_INGREDIENT',
      id: ingredients[0].id,
      updates
    };

    //trigger reducer
    var result = ingredientsReducer(df(ingredients), df(updateAction));

    ///assert on result
    expect(result[0].size).toEqual(updates.size);

  })

  it('should remove ingredient on deleteIngredient', () => {
    //mock an ingridient
    const ingredients = [{
      id: 123232,
      category: 'dairy',
      description: 'butter',
      brand: 'Netherend',
      size: '100kg',
      cost: 'R32',
      supplier: 121323,
      offdate: '03/04/2018'
    }];

    const delIngAction = {
      type:'DELETE_INGREDIENT',
      id: ingredients[0].id
    };

    //trigger reducer
    var result = ingredientsReducer(df(ingredients), df(delIngAction));

    //assert on result
    expect(result).toExclude(ingredients[delIngAction.id]);
  })
})
