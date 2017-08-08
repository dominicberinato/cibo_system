import React, {Component} from 'react'
import {Field, reduxForm, FieldArray} from 'redux-form'
import {TextField, DatePicker, SelectField} from 'redux-form-material-ui'
import {required} from 'validation'
import SpiritForm from 'SpiritForm'
import WineForm from 'WineForm'
export class BeverageForm extends Component {
  render(){
    var {handleSubmit} = this.props;
    return(
      <div>
        <p>Add Beverage</p>
        <form ref="form" onSubmit={handleSubmit}>
        <div>
          <label>Major Group</label>
          <Field
            name="beverageMajor"
            type="text"
            component={TextField}
            validate={[required]}/>
        </div>
        <div>
          <label>Description</label>
          <Field
            name="beverageDescription"
            type="text"
            component={TextField}
            validate={[required]}/>
        </div>
        <div>
          <FieldArray name="beverageSpirits"  component={SpiritForm}/>
        </div>
        <div>
          <FieldArray name="beverageWines"  component={WineForm}/>
        </div>
        <div>
          <label>Unit</label>
          <Field
            name="beverageUnit"
            type="text"
            component={TextField}
            validate={[required]}/>
        </div>
        <div>
          <label>Unit Size</label>
          <Field
            name="beverageUnitSize"
            type="text"
            component={TextField}
            validate={[required]}/>
        </div>
        <div>
          <label>Purchase Unit</label>
          <Field
            name="beveragePurchaseUnit"
            type="text"
            component={TextField}
            validate={[required]}/>
        </div>
        <div>
          <label>Purchase Unit Size</label>
          <Field
            name="beveragePurchseUnitSize"
            type="text"
            component={TextField}
            validate={[required]}/>
        </div>
        <div>
          <label>Cost Per Purchasing Unit</label>
          <Field
            name="beverageCPPU"
            type="text"
            component={TextField}
            validate={[required]}/>
        </div>
        <div className="text-center">
          <input type="submit" value="Save Beverage" className="button"/>
        </div>
        </form>
      </div>
    )
  }
}

BeverageForm = reduxForm({
  form:'beverage'
})(BeverageForm)

export default BeverageForm;
