import expect from 'expect'
import {MakeReservation} from 'MakeReservation'
import {mount} from 'enzyme'
import React from 'react'
import sinon from 'sinon'



describe('<MakeReservation/>', () =>{
  test('should exist', () => {
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


  it('should allow input valid guest',() => {
    //lets render the item
    const wrapper = mount(<MakeReservation tables={tables}/>);
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

  it('should dispatch addReservation on valid reservation', () =>{

    //lets mock a spy
    const dispatch = sinon.spy();
    var auth = {uid: 123};
    var property = {propKey: 234};

    //let mount our component
    const wrapper = mount(<MakeReservation dispatch={dispatch} tables={tables} auth={auth} property={property}/>);

    //lets mock a reservation
    const reservation = {
        resKey: 8,
        name: 'Isaac',
        number: 6,
        tbKey: 7,
        propKey: 9,
        contact: '0724341105',
        guestAmount: 7,
        time: '0900'
    };

    //fill required values
    wrapper.ref('resOwner').node.value = reservation.name;
    wrapper.ref('resTime').node.value = "2013-03-18T13:00";
    wrapper.ref('resTable').node.value = reservation.tbKey;
    wrapper.ref('resAmount').node.value = reservation.guestAmount;
    wrapper.ref('resContact').node.value = reservation.contact;

    //simulate submit
    wrapper.ref('form').simulate('submit');

    //assert that dispatch was called
    sinon.assert.calledOnce(dispatch);
  });

  it('should not dispatch addReservation if reservation invalid',  () => {

    //mock a spy
    const addReservationSpy = sinon.spy();

    //render our Component
    var auth = {uid: 123};
    var property = {propKey: 234};

    //let mount our component
    const wrapper = mount(<MakeReservation dispatch={addReservationSpy} tables={tables} auth={auth} property={property}/>);
    wrapper.ref('resTime').node.value = '';
    //simulate submit
    wrapper.ref('form').simulate('submit');

    //make assertion
    sinon.assert.notCalled(addReservationSpy);
  });
});
