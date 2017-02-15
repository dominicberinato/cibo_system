import React from 'react'
import expect from 'expect'
//get the unconnected component
import {AddTable} from 'AddTable'
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
    wrapper.ref.propName.value = property.pname;
    wrapper.ref.propAddress.value = property.address;
    wrapper.ref.file.value = property.avatar;

    //find form and simulate submit
    wrapper.ref('form').simulate('submit');
    sinon.assert.calledOnce(addPropertySpy)
  });

  //check that  add property is not called with invalid data
  it('should not dispatch addProperty when invalid property data', () => {
    var addPropertySpy  = expect.createSpy();

    //render
    var setprop = TestUtils.renderIntoDocument(<SetProperty dispatch={addPropertySpy}/>);
    var $element = $(ReactDOM.findDOMNode(setprop));

    //set form value
    setprop.refs.propName.value = '';
    setprop.refs.propAddress.value = '';

    //simulate submit
    TestUtils.Simulate.submit($element.find('form')[0]);
    expect(addPropertySpy).toNotHaveBeenCalled();
  });
});
