import React,{Component} from 'react'
import {Field, reduxForm, FieldArray} from 'redux-form'
import {required} from 'validation'
import {renderField} from 'renderField'
import {connect} from 'react-redux'
import MenuItem from 'material-ui/MenuItem'
import {SelectField} from 'redux-form-material-ui'


const ings = [
  {id: 1, name:'milk'},
  {id: 2, name:'coffee'}
]

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
            {ingredients.map((table) =>{
              return(<MenuItem key={table.id} value={table.name} primaryText={table.name}/>)
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


export class BatchForm extends Component {
  render(){
    var {handleSubmit} = this.props;
    return(
      <div>
        <div>
          <p>Add Batch</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Category</label>
            <Field name="batchCategory" type="text" component={renderField} validate={[required]}/>
          </div>
          <div>
            <label>Description</label>
            <Field name="batchDescription" type="text" component={renderField} validate={[required]}/>
          </div>
          <div>
            <label>Units</label>
            <Field name="batchUnits" type="text" component={renderField} validate={[required]}/>
          </div>
          <div>
            <label>Size</label>
            <Field name="batchSize" type="text" component={renderField} validate={[required]}/>
          </div>
          <div>
            <FieldArray name="ingredients" ingredients={ings} component={renderIngredients}/>
          </div>
          <div>
            <label>Calculated Batch Cost</label>
            <Field name="batchCalcCost" type="text" component={renderField} disabled="disabled"/>
          </div>
          <div className="text-center">
            <input type="submit" value="Add Batch" className="button"/>
          </div>
        </form>
      </div>
    )
  }
}

BatchForm = reduxForm({
  form:'batch'
})(BatchForm);


BatchForm = connect((state) => {
  return{
    ingredients: state.ingredients
  }
})(BatchForm)

export default BatchForm;
