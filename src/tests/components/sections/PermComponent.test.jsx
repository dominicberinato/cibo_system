import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'script-loader!jquery'
import sinon from 'sinon'
import expect from 'expect'
//actions
import * as actions from 'actions';
//use enzyme to test components
import {mount} from 'enzyme'

import {PermComponent} from 'PermComponent'

describe('PermComponent',() => {
  it('should exist', () => {
    expect(PermComponent).toExist();
  });

  it('calls componentDidMount', () => {
    sinon.spy(PermComponent.prototype, 'componentDidMount');
    const wrapper = mount(<PermComponent/>);
    expect(PermComponent.prototype.componentDidMount).to.have.property('callCount', 1);
    PermComponent.prototype.componentDidMount.restore();
  })
})
