import React, {Component} from 'react'
import {connect} from 'react-redux'
export class MakeReservation extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(<p>Reservation form</p>)
  }
};
export default connect() (MakeReservation);
