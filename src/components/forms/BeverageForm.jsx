import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

export class BeverageForm extends Component {
  render(){
    var {handleSubmit} = this.props;
    return(
      <div>
        <div>
          <p>Add Beverage</p>
          <form>
            <div>
              <label></label>
            </div>
            <div>
              <input type="submit"  value="Add Beverage"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

BeverageForm = reduxForm({
  form:'beverage'
})(BeverageForm)

export default BeverageForm;
