import React from 'react'
import {Field} from 'redux-form'
import {required} from 'validation'
import MenuItem from 'material-ui/MenuItem'
import {renderField} from 'renderField'
import {SelectField} from 'redux-form-material-ui'
const WineForm = ({fields}) => (
  <ul>
    <li>
      <button type="button" className="button" onClick={() => fields.push({})}>Add Wine Details</button>
    </li>
    {
      fields.map((wine, index) =>
      <li key={index}>
        <button
          className="button"
          type="button"
          title="Remove Wine"
          onClick={() => fields.remove(index)}>
          Remove Wine
        </button>
        <h4>Wine Details</h4>
        <Field
          name={`${wine}.category`}
          type="text"
          component={renderField}
          label="Category"/>
        <Field
          name={`${wine}.subcategory`}
          type="text"
          component={renderField}
          label="Sub Category"/>
        <Field
          name={`${wine}.grape`}
          type="text"
          component={renderField}
          label="Grape"/>
        <Field
          name={`${wine}.country`}
          type="text"
          component={renderField}
          label="Country"/>
        <Field
          name={`${wine}.region`}
          type="text"
          component={renderField}
          label="Region"/>
        <Field
          name={`${wine}.farm`}
          type="text"
          component={renderField}
          label="Farm"/>
        <Field
          name={`${wine}.vintage`}
          type="text"
          component={renderField}
          label="Vintage?"/>
      </li>
    )}
  </ul>
)

export default WineForm
