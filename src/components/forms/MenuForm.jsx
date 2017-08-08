import React, {Component} from 'react'
import {Field, reduxForm, FieldArray} from 'redux-form'
import {connect} from 'react-redux'
import renderRecipes from 'renderRecipes'

export class MenuForm extends Component {
  render() {
    var {handleSubmit,items} = this.props
    return(
      <div>
        <div>
          <p>Add Menu</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Menu Name</label>
            <Field component="input" type="text" name="menuName"/>
          </div>
          <div>
            <label>Menu Category</label>
            <Field component="input" type="text" name="menuCategory"/>
          </div>
          <div>
            <FieldArray name="menuItems" recipes={items} component={renderRecipes}/>
          </div>
          <div>
            <label>Suggested Selling Price</label>
            <Field component="input" type="text" name="menuSuggestedPrice"/>
          </div>
          <div>
            <label>Selling Price</label>
            <Field component="input" type="text" name="menuSellingPrice"/>
          </div>
          <div>
            <label>Menu Cost</label>
            <Field component="input" type="text" name="menuCostPrice"/>
          </div>
          <div className="text-center">
            <input type="submit" className="button" value="Save Menu"/>
          </div>
        </form>
      </div>
    )
  }
}

MenuForm = reduxForm({
  form:'menu'
})(MenuForm)
MenuForm = connect((state) => {
  return{
    items: state.recipes
  }
})(MenuForm)

export default MenuForm;
