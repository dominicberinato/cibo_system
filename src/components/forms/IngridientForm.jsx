import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {required} from 'validation'
import {TextField, DatePicker, SelectField} from 'redux-form-material-ui'


export const IngridientForm = (handleSubmit) =>(
    <div>
      <p>Add Ingredient</p>
      <form ref="form" onSubmit={handleSubmit}>
      <div>
        <label>Category</label>
        <Field
          name="ingredientCategory"
          type="text"
          component={TextField}
          validate={[required]}/>
      </div>
      <div>
        <label>Description</label>
        <Field
          name="ingredientDescription"
          type="text"
          multiLine={true}
          rows={4}
          component={TextField}
          validate={[required]}/>
      </div>
      <div>
        <label>Brand</label>
        <Field
          name="ingredientBrand"
          type="text"
          component={TextField}
          validate={[required]}/>
      </div>
      <div>
        <label>Pack Units</label>
        <Field
          name="ingredientPUnits"
          placeholder="kgs, g, lts, mls, spoons"
          type="text"
          component={TextField}
          validate={[required]}/>
      </div>
      <div>
        <label>Pack Size</label>
        <Field
          name="ingredientPSize"
          type="text"
          component={TextField}
          validate={[required]}/>
      </div>
      <div>
        <label>Pack Cost</label>
        <Field
          name="ingredientPackCost"
          type="text"
          component={TextField}
          validate={[required]}/>
      </div>
      <div>
        <label>Supplier</label>
        <Field
          name="ingredientSupplier"
          type="text"
          component={TextField}
          validate={[required]}/>
      </div>
      <div>
        <label>Estimate Life Span</label>
        <Field
          name="ingredientElife"
          type="text"
          component={DatePicker}
          format={(value, name) => value === '' ? null : value}
          validate={[required]}/>
      </div>
      <div>
        <label>Allergens</label>
        <Field
          name="ingredientAllergen"
          type="text"
          placeholder="Milk, Sugar,Gluten"
          component={TextField}
          />
      </div>
      <div className="text-center">
        <input type="submit" value="Add Ingridient" className="button"/>
      </div>
      </form>
    </div>
)

export default reduxForm({
  form:'ingredient'
})(IngridientForm)
