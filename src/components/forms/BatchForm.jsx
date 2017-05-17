import React,{Component} from 'react'
import {Field, reduxForm} from 'redux-form'

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
            <Field name="batchCategory" type="text" component="input"/>
          </div>
          <div>
            <label>Description</label>
            <Field name="batchDescription" type="text" component="input"/>
          </div>
          <div>
            <label>Units</label>
            <Field name="batchUnits" type="text" component="input"/>
          </div>
          <div>
            <label>Size</label>
            <Field name="batchSize" type="text" component="input"/>
          </div>
          <div>
            <label>Add Ingridients</label>
            <Field name="batchIngridients" type="text" component="input"/>
          </div>
          <div>
            <label>Calculated Batch Cost</label>
            <Field name="batchCalcCost" type="text" component="input"/>
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

export default BatchForm;
