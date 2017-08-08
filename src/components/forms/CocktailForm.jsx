import React, {Component} from 'react'
import {Field, reduxForm, FieldArray} from 'redux-form'
import {TextField, DatePicker, SelectField} from 'redux-form-material-ui'
import {required} from 'validation'
import renderBeverage from 'renderBeverage'
import renderIngredients from 'renderIngredients'
import {connect} from 'react-redux'
export class CocktailForm extends Component {
  render(){
    var {handleSubmit, beverages, ingredients} = this.props;
    return(
      <div>
        <p>Cocktail form</p>
          <div>
            <FieldArray name="cocktailBeverages" beverages={beverages} component={renderBeverage}/>
          </div>
          <div>
            <FieldArray name="cocktailIngredients" ingredients={ingredients} component={renderIngredients}/>
          </div>
      </div>
    )
  }
}

CocktailForm = reduxForm({
  form:'beverage'
})(CocktailForm)
CocktailForm = connect((state) => {
  return{
    beverages: state.beverages,
    ingredients: state.ingredients
  }
})(CocktailForm)


export default CocktailForm
