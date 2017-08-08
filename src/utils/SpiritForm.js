import React from 'react'
import {Field} from 'redux-form'
import {required} from 'validation'
import MenuItem from 'material-ui/MenuItem'
import {renderField} from 'renderField'
import {SelectField} from 'redux-form-material-ui'
const SpiritForm = ({fields}) => (
  <ul>
    <li>
      <button type="button" className="button" onClick={() => fields.push({})}>Add Spirit</button>
    </li>
    {
      fields.map((spirit, index) =>
      <li key={index}>
        <button
          className="button"
          type="button"
          title="Remove Spirit"
          onClick={() => fields.remove(index)}>
          Remove Spirit
        </button>
        <h4>Spirit Details</h4>
        <Field
          name={`${spirit}.category`}
          type="text"
          component={renderField}
          label="Spirit Category"/>
        <Field
          name={`${spirit}.brand`}
          type="text"
          component={renderField}
          label="Spirit Brand"/>
      </li>
    )}
  </ul>
)

export default SpiritForm
