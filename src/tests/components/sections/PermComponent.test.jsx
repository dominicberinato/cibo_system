import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'script-loader!jquery'
import sinon from 'sinon'
import expect from 'expect'
//actions
import * as actions from 'actions';
//use enzyme to test components
import {mount} from 'enzyme'

//thunk and createMockStore
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import {PermComponent} from 'PermComponent'

var createMockStore = configureMockStore([thunk]);

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

    const store = createMockStore({auth});
    var spy = sinon.spy(PermComponent.prototype, 'componentDidMount');
    const wrapper = mount(<PermComponent store={store}/>);
    //expect(PermComponent.prototype.componentDidMount).to.have.property('callCount', 1);
    sinon.assert.calledOnce(spy)
    PermComponent.prototype.componentDidMount.restore();
  })

})
