import React from 'react'
import expect from 'expect'
import {mount} from 'enzyme'
import {Reservation} from 'Reservation'


describe('<Reservation/>', () => {

  it('should exist', () => {
    expect(Reservation).toExist();
  })

  it('should render correct details',  () => {

    //lets render the item
    const wrapper = mount(<Reservation tbKey={8} name={'Isaac'} time={'0800'}/>);

    //make assertionfs
    expect(wrapper.ref('name').length).toEqual(1);
    expect(wrapper.ref('time').length).toEqual(1);
    expect(wrapper.ref('table').length).toEqual(1);
  })
})
