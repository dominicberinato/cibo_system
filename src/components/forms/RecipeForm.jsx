import React,{Component} from 'react'
import {Field, reduxForm} from 'redux-form'

export class RecipeForm extends Component {
  render() {
    var {handleSubmit} = this.props;
    return(
      <div>
        <div>
          <p>Add Recipe</p>
        </div>
        <div>
          <label>Category</label>
          <Field component="input" name="recipeCategory" type="text"/>
        </div>
        <div>
          <label>Description</label>
          <Field component="input" name="recipeDescription" type="text"/>
        </div>
        <div>
          <label>No Of Portions</label>
          <Field component="input" name="recipePortions" type="text"/>
        </div>
        <div>
          <label>Total Price</label>
          <Field component="input" name="recipeCalcPrice" type="text"/>
        </div>
        <div>
          <label>Desired Cost Price</label>
          <Field component="input" name="recipeDesiredCost" type="text"/>
        </div>
        <div>
          <label>Suggested Selling Price</label>
          <Field component="input" name="recipeCategory" type="text"/>
        </div>
        <div className="text-center">
          <input type="submit" value="Add Recipe" className="button"/>
        </div>
      </div>
    )
  }
}

RecipeForm = reduxForm({
  form:'recipe'
})(RecipeForm)

export default RecipeForm;
