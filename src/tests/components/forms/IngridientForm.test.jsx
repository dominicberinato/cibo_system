import {IngridientForm} from 'IngridientForm'
import React from 'react'
import sinon from 'sinon'


describe('<IngridientForm/>', () => {
  test('should exist', () => {
    expect(IngridientForm).toBeDefined();
  });

  test('<IngridientForm/> to render form correctly',  () => {
    const wrapper = shallow(
      <IngridientForm/>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
