import expect from 'expect'
var df  =require('deep-freeze-strict');
import {batchReducer} from 'batchReducer'

describe.only('batchReducer',  () => {
  it('should add a batch', () => {
    //mock some data
    const batch = {
      id: 3,
      category: 'sauce',
      description: 'Bordelause Sauce',
      units: 'kg',
      size: 2,
      ingridients: [3,4],
      cost: 3400
    };

    const action = {
      type: 'ADD_BATCH',
      batch
    };
    //call our reducer
    const result = batchReducer(df([]), df(action));
    expect(result[0]).toEqual(action.batch);
  });

  it('should update batch on updateBatch', () => {
    //mock some data
    const batches = [{
      id: 3,
      category: 'sauce',
      description: 'Bordelause Sauce',
      units: 'kg',
      size: 2,
      ingridients: [3,4],
      cost: 3400
    }];


    const action =  {
      type: 'UPDATE_BATCH',
      id: batches[0].id,
      updates: {
        ingridients: [3,4,5]
      }
    };

    const result = batchReducer(df(batches), df(action));

    expect(result[0].ingridients).toEqual(action.updates.ingridients);
  });

  it('should delete a batch on deleteBatch', () => {
    //mock some data
    const batches = [{
      id: 3,
      category: 'sauce',
      description: 'Bordelause Sauce',
      units: 'kg',
      size: 2,
      ingridients: [3,4],
      cost: 3400
    }];


    const action = {
      type: 'DELETE_BATCH',
      id: batches[0].id
    };

    const result = batchReducer(df(batches), df(action));

    expect(result).toExclude(batches[0]);
  });
})
