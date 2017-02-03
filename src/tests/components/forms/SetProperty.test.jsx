import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
// load jquery and foundation in the window scope
import $ from 'script!jquery'
import TestUtils from 'react-addons-test-utils'

import * as actions from 'actions'

import {SetProperty} from 'SetProperty'

describe('SetProperty', () => {
  it('should exist', () => {
    expect(SetProperty).toExist();
  });

  //check ADD property is called
  it('should dispatch addProperty when a valid property is submitted', () => {
    var addPropertySpy = expect.createSpy();

    var property = {
      pname: 'folk coffee',
      address: '3 Bree Street',
      avatar: 'image'
    };

    var action = actions.startAddProperty(property);

    //render component
    var setprop = TestUtils.renderIntoDocument(<SetProperty dispatch={addPropertySpy}/>);
    var $element = $(ReactDOM.findDOMNode(setprop));

    //set form values
    setprop.refs.propName.value = property.pname;
    setprop.refs.propAddress.value = property.address;
    setprop.refs.propAvatar.value = property.avatar;

    //find form and simulate submit
    TestUtils.Simulate.submit($element.find('form')[0]);
    expect(addPropertySpy).toHaveBeenCalledWith(action)
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
    setprop.refs.propAvatar.value = '';

    //simulate submit
    TestUtils.Simulate.submit($element.find('form')[0]);
    expect(addPropertySpy).toNotHaveBeenCalled();
  });
});
