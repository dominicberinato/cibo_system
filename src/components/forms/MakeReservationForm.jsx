import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {required} from 'validation'



const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

export class MakeReservationForm extends Component {
  render() {

    //TODO use select for tables
    var {tables, handleSubmit, pristine, submitting, reset} = this.props;
    return(
      <div>
        <p>Make Reservation</p>
        <form ref="form" onSubmit={handleSubmit}>
            <Field
              name="resOwner"
              type="text"
              label="Guest Name *"
              component={renderField}
              validate={[required]}
              />
          <div>
            <label>Time*</label>
            <Field name="resTime" component="input" type="datetime-local"/>
          </div>
          <div>
            <label>Dietary Concerns</label>
            <Field component="textarea" ref="resDiet" type="text" rows="5" />
          </div>
          <div>
            <label>Choose Table</label>
            <select ref="resTable">{tables.map((table) =>{
                return(<option key={table.tbKey} value={table.tbKey}>{table.tbname}</option>)
              })}</select>
          </div>
          <div>
            <label>Number of Guests*</label>
            <Field component="input" type="text" name="resAmount" />
          </div>
          <div>
            <label>Contact</label>
            <Field component="input" type="text" name="resContact"/>
          </div>
          <div>
            <p>All fields marked by * are required please</p>
          </div>
          <div className="text-center">
            <input type="submit" value="Make Reservation" disabled={submitting} className="button hollow"/>
          </div>
        </form>
      </div>
    )
  }
};

MakeReservationForm = reduxForm({
  form: 'reservation'
})(MakeReservationForm)

export default MakeReservationForm;
