
//use this to mock a store

describe('AddTable',  () => {
  //check that component exists
  it('should exist', () => {
    expect(AddTable).toExist();
  });

  //use spies to check that correct actions are dispatched
  it('should dispatch addTable when valid table added', () => {
    const dispatch = sinon.spy()
    //mock store with auth , prop
    //full render component
    //pass in spy as dispatch
    const wrapper = mount(<AddTable property={{propKey:1232}} dispatch={dispatch}/>);
    //set input values
    wrapper.ref('tableName').node.value = 5;
    wrapper.ref('tableSeats').node.value = 7;

    //simulate form submit
    wrapper.ref('form').simulate('submit');

    //assert that the spy was called
    sinon.assert.calledOnce(dispatch);
  });

  //check that invalid table isnt passed
  it('should not dispatch addTable with invalid table', () => {
    var addTableSpy = sinon.spy();

    const wrapper = mount(<AddTable property={{propKey:1232}} dispatch={addTableSpy}/>);
    //set input values
    wrapper.ref('tableName').node.value = '';
    wrapper.ref('tableSeats').node.value = '';

    //simulate form submit
    wrapper.ref('form').simulate('submit');

    //assert that the spy was called
    sinon.assert.notCalled(addTableSpy);
  })
});
