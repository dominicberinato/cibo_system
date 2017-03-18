import expect from 'expect'
import * as actions from 'ingridientActions'


describe.only('ingridientActions', () => {
  it('Should exist', () => {
    expect(actions).toExist();
  });

  describe('Sync Actions', () => {

    it('should generate addIngridient action',  () => {
      //mock an ingridient
      const ingridient = {
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
        type:'ADD_INGRIDIENT',
        ingridient
      };

      //call an action with our data
      var result = actions.addIngridient(ingridient);

      expect(result).toEqual(addIngAction);
    });

    it('should generate deleteIngridient action', () => {

      //mock an ingridient
      const ingridient = {
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
        type: 'DELETE_INGRIDIENT',
        id: ingridient.id
      }

      //call the action
      const result = actions.deleteIngridient(ingridient.id);

      //assert on result
      expect(result).toEqual(deleteAction);
    });

    it('should generate updateIngridient action', () => {

      //mock an ingridient
      const ingridient = {
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
        type: 'UPDATE_INGRIDIENT',
        id: ingridient.id,
        updates
      };

      //lets call the actions
      var result = actions.updateIngridient(ingridient.id, updates)

      //expect the actions
      expect(result).toEqual(updateAction);
    });
  });


  describe('Async',  () => {
    it('should call startAddIngridient and dispatch addIngridient', () => {
      expect(0).toEqual(1);
    })
  })
})
