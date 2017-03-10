import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'
import {OrderItem} from 'OrderItem'


describe('<OrderItem/>', () => {
  it('should exist', () => {
    expect(OrderItem).toExist();
  })

  it('should render an order Item correctly', () => {

    const item =  {
      id: 1,
      name: 'Tea',
      cost: 20
    };

    const wrapper =  shallow(<OrderItem  {...item}/>);

    expect(wrapper.find('.item-name').length).toEqual(1);
    expect(wrapper.find('.item-cost').length).toEqual(1);
  })
})
