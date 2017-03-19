import expect from 'expect'
import {mount} from 'enzyme'
import React from 'react'
import ConnTable, {ActiveTableItem} from 'ActiveTableItem'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import sinon from 'sinon'

var createMockStore = configureMockStore([thunk]);


describe('<ActiveTableItem/>',() => {
  it('should exist', () => {
    expect(ActiveTableItem).toExist();
  });

  it('should set current bill when clicked',  () => {
    const dispatch = sinon.spy();
      //lets mock some bills
      const bills = [{
        id: 1232,
        tbKey:1,
        tbname: 2,
        resOwner: 'Isaac',
        bill: 30
      }];

      const tables = [{
        tbKey:1,
        tbname: '2',
        tbcapacity: 3
      }];

      const auth  = {
        uid: 1234
      };

    const store = createMockStore({tables, bills, auth});

    //lets render a connected table
    const wrapper = mount(<ActiveTableItem {...bills[0]} dispatch={dispatch}/>);

    //lets simulate a click
    wrapper.find('.bill-item').simulate('click');

    sinon.assert.calledOnce(dispatch);

  })

  it('should render a correct bill item', () => {
    //lets render our component
    const wrapper = mount(<ActiveTableItem tbname={'6'}/>);

    //asser that the component contains the needed items
    expect(wrapper.ref('bill-table').length).toEqual(1);
    expect(wrapper.ref('bill-tot').length).toEqual(1);
    expect(wrapper.ref('bill-owner').length).toEqual(1);
  });
})
