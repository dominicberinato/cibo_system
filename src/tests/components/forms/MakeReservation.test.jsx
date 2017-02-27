import expect from 'expect'
import {MakeReservation} from 'MakeReservation'
import {mount} from 'enzyme'
import React from 'react'


describe('<MakeReservation/>', () =>{
  it('should exist', () => {
    expect(MakeReservation).toExist();
  })

  var tables =
  [
      {
        tbname:6,
        tbcapacity:8,
        tbKey: 6
      },
      {
        tbname: 7,
        tbcapacity: 9,
        tbKey:7
      }
  ];

  var reservations = [];

  //lets render the item
  const wrapper = mount(<MakeReservation store={{tables, reservations}}/>);
  it('should allow input valid guest',() => {
    //expect ref for name
    expect(wrapper.ref('resOwner').length).toEqual(1);
    //expect ref for contact
    expect(wrapper.ref('resContact').length).toEqual(1);
    //expect ref for payment button
    //TODO work on payment solution
    //expect(wrapper.ref('payment').length).toEqual(1);
    //expect ref for dietary concerns
    expect(wrapper.ref('resDiet').length).toEqual(1);
    //expect ref for table
    expect(wrapper.ref('resTable').length).toEqual(1);
  });
});
