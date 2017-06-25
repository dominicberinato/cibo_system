import React, {Component} from 'react'
import {connect} from 'react-redux'
import MakeReservationForm from 'MakeReservationForm'
import {startAddReservation} from 'reservationActions'

export class MakeReservation extends Component {
  constructor(props) {
    super(props);
    this.submitReservation = this.submitReservation.bind(this);
  }
  submitReservation(values) {
    //get data from state.
    //format date and time
    var {dispatch} = this.props;
    const d = values.resDate.toDateString();
    const t = values.resTime.toTimeString();
    dispatch(startAddReservation({
      ...values,
      resTime: t,
      resDate: d
    }));
  }
  render() {
    var {tables} = this.props;
    return(<MakeReservationForm onSubmit={this.submitReservation} tables={tables}/>);
  };
};

export default connect((state) => {
  //collect property and user from state
  return {
    auth: state.auth,
    property: state.property,
    tables: state.tables
  }
}) (MakeReservation);
