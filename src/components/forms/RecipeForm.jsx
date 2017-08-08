import React,{Component} from 'react'
import {Field, reduxForm, FieldArray} from 'redux-form'
import renderIngredients from 'renderIngredients'
import renderBatches from 'renderBatches'
import {connect} from 'react-redux'

export class RecipeForm extends Component {
  render() {
    var {handleSubmit, ingredients, batches} = this.props;
    return(
      <div>
        <div>
          <p>Add Recipe</p>
        </div>
        <form onSubmit={handleSubmit}>
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
          <FieldArray name="ingredients" ingredients={ingredients} component={renderIngredients}/>
        </div>
        <div>
          <FieldArray name="batches" batches={batches} component={renderBatches}/>
        </div>
        <div>
          <label>Desired Cost Price</label>
          <Field component="input" name="recipeDesiredCost" type="text"/>
        </div>
        <div>
          <label>Suggested Selling Price</label>
          <Field component="input" name="recipeSuggestedPrice" type="text"/>
        </div>
        <div className="text-center">
          <input type="submit" value="Add Recipe" className="button"/>
        </div>
        </form>
      </div>
    )
  }
}

RecipeForm = reduxForm({
  form:'recipe'
})(RecipeForm)

RecipeForm = connect((state) => {
  return{
    ingredients: state.ingredients,
    batches: state.batches
  }
})(RecipeForm)


export default RecipeForm;
