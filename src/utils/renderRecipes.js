import React from 'react'
import {Field} from 'redux-form'
import {required} from 'validation'
import MenuItem from 'material-ui/MenuItem'
import {renderField} from 'renderField'
import {SelectField} from 'redux-form-material-ui'
const renderRecipes = ({fields, recipes}) => (
  <ul>
    <li>
      <button type="button" className="button" onClick={() => fields.push({})}>Add Item</button>
    </li>
    {
      fields.map((recipe, index) =>
      <li key={index}>
        <button
          className="button"
          type="button"
          title="Remove Recipe"
          onClick={() => fields.remove(index)}>
          Remove Item
        </button>
        <h4>Menu Item</h4>
          <Field name={`${recipe}.name`} component={SelectField} validate={[required]} hintText="Pick A Recipe">
            {recipes.map((recipe) =>{
              return(<MenuItem key={recipe.id} value={recipe.id} primaryText={`${recipe.recipeCategory} - ${recipe.recipeDescription}`}/>)
            })}
          </Field>
      </li>
    )}
  </ul>
)

export default renderRecipes
