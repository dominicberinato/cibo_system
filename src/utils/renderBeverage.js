import React from 'react'
import {Field} from 'redux-form'
import {required} from 'validation'
import MenuItem from 'material-ui/MenuItem'
import {renderField} from 'renderField'
import {SelectField} from 'redux-form-material-ui'
const renderBeverage = ({fields, beverages}) => (
  <ul>
    <li>
      <button type="button" className="button" onClick={() => fields.push({})}>Add Beverage</button>
    </li>
    {
      fields.map((beverage, index) =>
      <li key={index}>
        <button
          className="button"
          type="button"
          title="Remove Beverage"
          onClick={() => fields.remove(index)}>
          Remove Beverage{index + 1}
        </button>
        <h4>Batch #{index + 1}</h4>
          <Field name={`${beverage}.name`} component={SelectField} validate={[required]} hintText="Pick A Beverage">
            {batches.map((bev) =>{
              return(<MenuItem key={bev.id} value={bev.id} primaryText={`${bev.beverageDescription} - ${bev.beverageCategory}`}/>)
            })}
          </Field>
        <Field
          name={`${beverage}.amount`}
          type="text"
          component={renderField}
          label="Beverage Amount"/>
      </li>
    )}
  </ul>
)

export default renderBeverage
