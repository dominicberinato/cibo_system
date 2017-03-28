import expect from 'expect'
import * as actions from 'batchActions'

describe.only('batchActions', ()=> {
  it('should exist', () => {
    expect(actions).toExist()
  });


  describe('sync', () => {
    it('should create addBatch action', () => {
      //mock an item
      const batch = {
        category: 'sauce',
        description: 'Bordelause Sauce',
        units: 'kg',
        size: 2,
        ingridients: [3,4],
        cost: 3400
      };

      //mock an action
      const batchAction = {
        type: 'ADD_BATCH',
        batch
      };

      const res = actions.addBatch(batch);

      //assert on result
      expect(res).toEqual(batchAction)
    });

    it('should create updateBatch action', () => {
      //mock an item
      const batch = {
        id: 3,
        category: 'sauce',
        description: 'Bordelause Sauce',
        units: 'kg',
        size: 2,
        ingridients: [3,4],
        cost: 3400
      };

      //mock some updates
      const updates  = {
        ingredients: [3,4,5]
      };


      //mock a result
      const updateBatchAction  = {
        type:'UPDATE_BATCH',
        id : batch.id,
        updates
      };

      const res = actions.updateBatch(batch.id, updates);

      expect(res).toEqual(updateBatchAction);
    });

    it('should create deleteBatchAction', () => {
      //mock an item
      const batch = {
        id: 3,
        category: 'sauce',
        description: 'Bordelause Sauce',
        units: 'kg',
        size: 2,
        ingridients: [3,4],
        cost: 3400
      };

      //mock a result
      const deleteBatchAction = {
        type: 'DELETE_BATCH',
        id: batch.id
      };

      //get a result
      const res = actions.deleteBatch(batch.id);
    })
  });

  describe('async', () => {

  });
})
