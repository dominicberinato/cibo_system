import React, {Component} from 'react';
import {connect} from 'react-redux';
import {required, isnumber} from 'validation';
import {TextField} from 'redux-form-material-ui';
import {Field, reduxForm} from 'redux-form';



export class AddTable extends Component {
  //class constructor
  constructor(props) {
    super(props);
  }
  //draw
  render() {
    var {property, handleSubmit} =  this.props;
    return(
      <div>
        <form ref='form' onSubmit={handleSubmit}>
          <div>
            <label>Name / Number</label>
            <div>
              <Field
                name="tbname"
                type="text"
                component={TextField}
                validate={[required]}/>
            </div>
          </div>
          <div>
            <label>Table Capacity</label>
              <div>
                <Field
                  name="tbcapacity"
                  type="text"
                  component={TextField}
                  validate={[required, isnumber]}/>
              </div>
          </div>
          <div className="text-center">
            <input type='submit' className='button' value='Add Table'/>
          </div>
        </form>
      </div>
    )
  }
};

AddTable = reduxForm({
  form: 'table'
})(AddTable);

export default AddTable;
