import React from 'react'
import sinon from 'sinon'
import expect from 'expect'
//use enzyme to test components
import {mount} from 'enzyme'


import {PermComponent} from 'PermComponent'


describe('PermComponent',() => {
  it('should exist', () => {
    expect(PermComponent).toExist();
  });

  it('calls componentDidMount', () => {
    //mock a user
    var auth = {
      name:'Isaac Osiemo',
      photo: 'https://image.co',
      uid: 12343,
      email: 'e@2.co'
    };


    var spy = sinon.spy(PermComponent.prototype, 'componentDidMount');
    const wrapper = mount(<PermComponent store={auth}/>);
    //expect(PermComponent.prototype.componentDidMount).to.have.property('callCount', 1);
    sinon.assert.calledOnce(spy)
    PermComponent.prototype.componentDidMount.restore();
  })

})
