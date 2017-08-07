import React from 'react'
import {Field} from 'redux-form'
import {required} from 'validation'
import MenuItem from 'material-ui/MenuItem'
import {renderField} from 'renderField'
import {SelectField} from 'redux-form-material-ui'
const renderIngredients = ({fields, ingredients}) => (
  <ul>
    <li>
      <button type="button" className="button" onClick={() => fields.push({})}>Add Ingredient</button>
    </li>
    {
      fields.map((ingredient, index) =>
      <li key={index}>
        <button
          className="button"
          type="button"
          title="Remove Ingredient"
          onClick={() => fields.remove(index)}>
          Remove Ingredient {index + 1}
        </button>
        <h4>Ingredient #{index + 1}</h4>
          <Field name={`${ingredient}.name`} component={SelectField} validate={[required]} hintText="Pick An Ingredient">
            {ingredients.map((ing) =>{
              return(<MenuItem key={ing.id} value={ing.id} primaryText={ing.ingredientDescription}/>)
            })}
          </Field>
        <Field
          name={`${ingredient}.amount`}
          type="text"
          component={renderField}
          label="Ingredient Amount"/>
      </li>
    )}
  </ul>
)

export default renderIngredients
