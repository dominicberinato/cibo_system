import expect from 'expect'
var df = require('deep-freeze-strict')
import {propertyReducer} from 'propertyReducer'

//test propertyReducer
describe('propertyReducer', () => {
  it('should set propertydata on addProperty', () => {
    var property = {
      name: "Best Western Cape Suites Hotel",
      address: "Roeland Street",
      coords:"lat, long",
      id:12345,
      avatar: 'image here'
    }
    //add property action
    var addProperty =  {
      type: 'ADD_PROPERTY',
      property
    };

    //call reducer and use deep freeze to check purity
    var result = propertyReducer(df({}), df(addProperty));

    //check that our action was consumed
    expect(result).toEqual(addProperty.property);
  });

  //test clear action
  it('should clear propertydata onclear', () => {
    //mock an action
    var clearProperty ={
      type: 'CLEAR_PROPERTY'
    };

    //call reducer
    var result = propertyReducer(df({}), df(clearProperty));

    //check result to see if our reducers worked
    expect(result).toEqual({});
  });
})
