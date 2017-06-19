import React, {Component} from 'react'
import {connect} from 'react-redux'
import {startAddProperty} from 'src/actions/propertyActions'
import shortid from 'shortid'
import Chip from 'material-ui/Chip'
import {Field, reduxForm} from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import {required, istext} from 'validation'
import FileInput from 'FileInput'


//plain class  for testing
export class SetPropertyForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    //add submit handler
   const {handleSubmit} = this.props;
   return(
      <div>
        <Chip>Property Details</Chip>
        <form ref="form" onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <Field
              name="propName"
              type="text"
              component={TextField}
              validate={[required, istext]}/>
          </div>
          <div>
            <label>Address</label>
            <Field
                name="propAddress"
                type="text"
                component={TextField}
                validate={[required, istext]}/>
          </div>
          <div>
            <label>2nd Address Line</label>
            <Field
              name="propLocation"
              type="text"
              component={TextField}
              validate={[required, istext]}/>
          </div>
          <div>
          <label>Avatar</label>
          <Field
              name="avatar"
              type="file"
              component={FileInput}
            />
          </div>
          <div className="text-center">
            <input type="submit" className="button" value="SAVE PROPERTY"/>
          </div>
        </form>
      </div>
    )
  }
};

SetPropertyForm = reduxForm({
  form: 'property'
})(SetPropertyForm)

export default SetPropertyForm
