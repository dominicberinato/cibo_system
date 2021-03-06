import React from 'react'
import expect from 'expect'
//enzyme stuff
import {mount} from 'enzyme'
import sinon from 'sinon'


import {SetProperty} from 'SetProperty'

describe('SetProperty', () => {
  it('should exist', () => {
    expect(SetProperty).toExist();
  });

  //check ADD property is called
  it('should dispatch addProperty when a valid property is submitted', () => {
    var addPropertySpy = sinon.spy();
    //mock file
    var debug = {hello: "world"};
    var mockImage = new Blob([JSON.stringify(debug, null, 2)], {type : 'application/json'});


    var property = {
      pname: 'folk coffee',
      address: '3 Bree Street',
      avatar: mockImage
    };

    const wrapper = mount(<SetProperty auth={{uid: 1234}} dispatch={addPropertySpy}/>)

    //set form values
    wrapper.ref('propName').node.value = property.pname;
    wrapper.ref('propAddress').node.value = property.address;
    wrapper.ref('file').node.value = '';

    //find form and simulate submit
    wrapper.ref('form').simulate('submit');
    sinon.assert.calledOnce(addPropertySpy);
  });

  //check that  add property is not called with invalid data
  it('should not dispatch addProperty when invalid property data', () => {
    var addPropertySpy = sinon.spy();

    const wrapper = mount(<SetProperty auth={{uid: 1234}} dispatch={addPropertySpy}/>)

    //set form values
    wrapper.ref('propName').node.value = '';
    wrapper.ref('propAddress').node.value = '';
    wrapper.ref('file').node.value = '';

    //find form and simulate submit
    wrapper.ref('form').simulate('submit');
    sinon.assert.notCalled(addPropertySpy)
  });
});
