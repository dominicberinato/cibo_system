import React from 'react'
import {CurrentBill} from 'CurrentBill'
import expect from 'expect'
import {shallow, mount} from 'enzyme'
import sinon from 'sinon'

describe('<CurrentBill/>', () => {
  it('should exist', () => {
    expect(CurrentBill).toExist();
  });

  it('should show message if no bill selected', () => {

    //render object
    const wrapper =  shallow(<CurrentBill currBill={""}/>)
    //pass empty currentBill
    //assert message was shown
    expect(wrapper.find('.no-bill').length).toEqual(1);
  });

  it('should show message if currentBill has no orders', () => {
    const bills = [
      {
        id: '12345',
        tbKey: 1232,
        billCreator: 32433
      }
    ];

    const currBill = '12345';
    //render item
    const wrapper = shallow(<CurrentBill currBill={currBill} bills={bills}/>)

    //assert that message was shown
    expect(wrapper.find('.no-orders').length).toEqual(1);
  })

  it('should allow ordered products to be added to correct table', () => {
    //mock dispatch
    const dispatch = sinon.spy()
    //render a component
    const bills = [
      {
        id: '12345',
        tbKey: 1232,
        billCreator: 32433
      }
    ];

    const currBill = '12345';
    //render item
    const wrapper = mount(<CurrentBill currBill={currBill} dispatch={dispatch} bills={bills}/>);
    wrapper.ref('orderID').node.value = 6;

    wrapper.find('form').simulate('submit');

    //lets assert that dispatch was called
    sinon.assert.calledOnce(dispatch);
  });

  it('should allow removal of products from table', () => {
    expect(9).toEqual(89);
  });

  it('should allow settlement of bills by Debit, Credit, Cash, EFT, Foreign Currency', () => {
    expect(8).toEqual(9);
  });


})
