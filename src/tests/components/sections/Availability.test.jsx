import expect from 'expect'
import {Availability} from 'Availability'
import React from 'react'
import {mount} from 'enzyme'
import sinon from 'sinon'

describe('<Availability/>', () => {
  it('should exist', () => {
    expect(Availability).toExist();
  })

  it('should list Total Tables, Available Tables,Booked',() => {
    //mock empoty tables
    var tables = [{tbname: 7, tbcapacity: 8}];
    var reservations = [];
    var dispatch = sinon.spy();


    //render item
    var wrapper = mount(<Availability tables={tables} dispatch={dispatch} reservations={reservations} />);

    //make assertion
    expect(wrapper.ref('currentRes').length).toEqual(1);
    expect(wrapper.ref('availableTables').length).toEqual(1);
    expect(wrapper.ref('totalTables').length).toEqual(1);
  });

  it('should show message if no tables' , () => {

    //mock empoty tables
    var dispatch = sinon.spy();
    var tables = [];

    //render item
    var wrapper = mount(<Availability tables={tables} dispatch={dispatch} />);

    //make assertion
    expect(wrapper.ref('tableMessage').length).toEqual(1);
  })
})
