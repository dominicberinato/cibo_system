import React from 'react'
import sinon from 'sinon'
import {shallow} from 'enzyme'
import expect from 'expect'
//store stuff
import {Provider} from 'react-redux'
import CiboTabs from 'CiboTabs'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
var createMockStore = configureMockStore([thunk]);


describe('CiboTabs', () => {
  it('should exist',() => {
    expect(CiboTabs).toExist();
  });

  it('should run initialization when user loads')
  it('should not dispatch assocProp on invalid data', () => {
    const property = {propKey:'17ty9y'};
    const store = createMockStore({});
    const dispatch = sinon.spy();
    const wrapper = shallow(
      <MuiThemeProvider>
        <Provider store={store}>
          <CiboTabs  dispatch={dispatch}/>
        </Provider>
      </MuiThemeProvider>
      );
    wrapper.find('.prop-code').node.value = null;
    wrapper.find('form').simulate('submit');
    sinon.assert.notCalled(dispatch);
  });

  it('should dispatch assocProp when code is provided', () => {
    //mock a store with a user
    //mock a user
    var auth = {
      name:'Isaac Osiemo',
      photo: 'https://image.co',
      uid: 12343,
      email: 'e@2.co'
    };
    const property = {propKey:'17ty9y'}
    const store = createMockStore({auth});

    //make spy
    const dispatch = sinon.spy();
    //mount
    const wrapper = shallow(
      <MuiThemeProvider>
        <Provider store={store}>
          <CiboTabs dispatch={dispatch}/>
        </Provider>
      </MuiThemeProvider>
    );
    //wrapper.setProps({auth: auth});
    //mock input
    wrapper.find('.prop-code').node.value = '123grt';
    wrapper.find('form').simulate('submit');
    //assert spy was called
    sinon.assert.calledOnce(dispatch);
  });
})
