import React from 'react'
import {Field} from 'redux-form'
import {required} from 'validation'
import MenuItem from 'material-ui/MenuItem'
import {renderField} from 'renderField'
import {SelectField} from 'redux-form-material-ui'
const renderBatches = ({fields, batches}) => (
  <ul>
    <li>
      <button type="button" className="button" onClick={() => fields.push({})}>Add Batch</button>
    </li>
    {
      fields.map((batch, index) =>
      <li key={index}>
        <button
          className="button"
          type="button"
          title="Remove Batch"
          onClick={() => fields.remove(index)}>
          Remove Batch {index + 1}
        </button>
        <h4>Batch #{index + 1}</h4>
          <Field name={`${batch}.name`} component={SelectField} validate={[required]} hintText="Pick A Batch">
            {batches.map((bat) =>{
              return(<MenuItem key={bat.id} value={bat.id} primaryText={bat.batchDescription}/>)
            })}
          </Field>
        <Field
          name={`${batch}.amount`}
          type="text"
          component={renderField}
          label="Batch Amount"/>
      </li>
    )}
  </ul>
)

export default renderBatches
