import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {required} from 'validation'
import MenuItem from 'material-ui/MenuItem'
import {TextField, DatePicker, TimePicker, SelectField} from 'redux-form-material-ui'



export class MakeReservationForm extends Component {
  render() {

    //TODO use select for tables
    var {tables, handleSubmit, pristine, submitting, reset} = this.props;
    return(
      <div>
        <p className="heavy">MAKE RESERVATION</p>
        <form ref="form" onSubmit={handleSubmit}>
          <div>
            <label>Guest Name</label>
              <Field
                name="resOwner"
                type="text"
                label="Guest Name"
                component={TextField}
                validate={[required]}
                />
          </div>
          <div>
            <label>Date</label>
            <Field
              name="resDate"
              component={DatePicker}
              validate={[required]}
            />
          </div>
          <div>
            <label>Time</label>
            <Field
              name="resTime"
              component={TimePicker}
              validate={[required]}
            />
          </div>
          <div>
            <label>Dietary Concerns</label>
            <Field
              name="resDiet"
              component={TextField}
              validate={[required]}
              multiLine={true}
              rows={3}
            />
          </div>
          <div>
            <label>Choose Table</label>
            <Field name="resTable" component={SelectField} validate={[required]} hinttext="Pick A table">
              {tables.map((table) =>{
                return(<MenuItem key={table.tbKey} value={table.tbKey} primaryText={table.tbname}/>)
              })}
            </Field>
          </div>
          <div>
            <label>Number of Guests</label>
            <Field
              component={TextField}
              name="resAmount"
              validate={[required]} />
          </div>
          <div>
            <label>Contact</label>
            <Field
              name="resContact"
              component={TextField}
              validate={[required]}
            />
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
