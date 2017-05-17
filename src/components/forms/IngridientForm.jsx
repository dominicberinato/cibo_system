import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'

export class IngridientForm extends Component {
  render() {
    var {handleSubmit} = this.props
    return(
      <div>
        <div className="text-center form-label">
          <p>Add Ingridient</p>
        </div>
        <form ref="form" onSubmit={handleSubmit}>
        <div>
          <label>Category</label>
          <Field name="ingridientCategory" type="text" component="input"/>
        </div>
        <div>
          <label>Description</label>
          <Field name="ingridientDescription" type="text" rows="4" component="textarea"/>
        </div>
        <div>
          <label>Brand</label>
          <Field name="ingridientBrand" type="text" component="input"/>
        </div>
        <div>
          <label>Pack Size</label>
          <Field name="ingridientPSize" type="text" component="input"/>
        </div>
        <div>
          <label>Pack Cost</label>
          <Field name="ingridientPackCost" type="text" component="input"/>
        </div>
        <div>
          <label>Supplier</label>
          <Field name="ingridientSupplier" type="text" component="input"/>
        </div>
        <div>
          <label>Estimate Life Span</label>
          <Field name="ingridientElife" type="text" component="input"/>
        </div>
        <div className="text-center">
          <input type="submit" value="Add Ingridient" className="button"/>
        </div>
        </form>
      </div>
    )
  }
};

IngridientForm = reduxForm({
  form:'ingridient'
})(IngridientForm)

export default IngridientForm;
