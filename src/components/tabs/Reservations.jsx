import React, {Component} from 'react'
import {connect} from 'react-redux'
import MakeReservation from 'MakeReservation'

export class Reservations extends Component {
  render() {
    return(
      <div className="row">
        <div className="columns small-12 large-6 medium-6">
          <MakeReservation/>
        </div>
        <div className="columns small-12 large-6 medium-6">
          <div className="row">
            Availability
          </div>
          <div className="row">
            Current Bookings
          </div>
        </div>
      </div>
    )
  }
}

export default Reservations;
