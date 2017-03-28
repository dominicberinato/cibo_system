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
    })

  });

  describe('async', () => {

  });
})
