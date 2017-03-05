import expect from 'expect'
import {mount} from 'enzyme'
import React from 'react'
import {ActiveTableItem} from 'ActiveTableItem'


describe('<ActiveTableItem/>',() => {
  it('should exist', () => {
    expect(ActiveTableItem).toExist();
  });

  it('should render a correct bill item', () => {
    //lets render our component
    const wrapper = mount(<ActiveTableItem tbname={'6'}/>);

    //asser that the component contains the needed items
    expect(wrapper.ref('bill-table').length).toEqual(1);
    expect(wrapper.ref('bill-tot').length).toEqual(1);
    expect(wrapper.ref('bill-owner').length).toEqual(1);
  });
})
