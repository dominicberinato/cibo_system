import React from 'react'
import expect from 'expect'
//enzyme stuff
import {mount, shallow} from 'enzyme'
import sinon from 'sinon'

import {TableList} from 'TableList'
import {Table} from 'Table'

describe('<TableList/>', () => {
  it('should exist',  () => {
    expect(TableList).toExist()
  });

  it('should render one Table for each table',  ()=> {
    const tables = [{tbKey: 7, tbname: 6, tbcapacity:2},{tbKey:9, tbname:5, tbcapacity:4}];
    //use shallow to not get into children's business
    const wrapper = shallow(<TableList tables={tables}/>);
    //assert
    expect(wrapper.find(Table).length).toEqual(tables.length)
  })
})
