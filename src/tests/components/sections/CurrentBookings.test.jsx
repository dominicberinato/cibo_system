import {CurrentBookings} from 'CurrentBookings'
import expect from 'expect'
import {shallow, mount} from 'enzyme'
import {Reservation} from 'Reservation'
import React from 'React'

describe('<CurrentBookings/>', () => {
  it('should exist', () => {
    expect(CurrentBookings).toExist();
  });

  it('should show a reservation for each in state', () => {
    const reservations = [{resKey: 8,name:'Isaac', tbKey: 7, time: '0800'}];
    //shallow mount bookings and check for reservations
    const wrapper = shallow(<CurrentBookings reservations={reservations}/>);
    //asserrt
    expect(wrapper.find(Reservation).length).toEqual(reservations.length);
  });

  it('should show empty reservations warnings', () => {
    const reservations = [];
    const wrapper = mount(<CurrentBookings reservations={reservations}/>);
    //asserrt
    expect(wrapper.ref('eResMsg').length).toEqual(1);
  })
})
