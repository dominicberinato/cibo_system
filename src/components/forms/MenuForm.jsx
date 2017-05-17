import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

export class MenuForm extends Component {
  render() {
    var {handleSubmit} = this.props
    return(
      <div>
        <div>
          <p>Add Menu</p>
        </div>
        <form>
          <div>
            <label>Menu Name</label>
            <Field component="input" type="text" name="menuName"/>
          </div>
          <div>
            <label>Menu Category</label>
            <Field component="input" type="text" name="menuCategory"/>
          </div>
          <div>
            <label>Menu Item</label>
            <Field component="input" type="text" name="menuName"/>
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
            <input type="submit" className="button" value="Add Menu"/>
          </div>
        </form>
      </div>
    )
  }
}

MenuForm = reduxForm({
  form:'menu'
})(MenuForm)

export default MenuForm;
