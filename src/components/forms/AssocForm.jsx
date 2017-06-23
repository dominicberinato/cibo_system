import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {required} from 'validation';
import {TextField} from 'redux-form-material-ui';

export class AssocForm extends Component {
  render() {
    var {handleSubmit} = this.props;
    return (
      <div className="text-center">
        <form ref='form' onSubmit={this.assocProduct}>
          <label className="property-message"> ENTER PROPERTY CODE</label>
          <div>
            <Field
              className="text-center prop-code"
              name="propCode"
              type="text"
              placeholder="5GT-HTG"
              component={TextField}
              validate={[required]}/>
          </div>
          <div>
            <input ref="submit" className="button" type="submit" value="CONNECT"/>
          </div>
        </form>
      </div>
    )
  }
}

AssocForm = reduxForm({
  form: 'assoc'
})(AssocForm);

export default AssocForm;
