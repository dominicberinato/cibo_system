import React, {Component} from 'react'
import {connect} from 'react-redux'
export class MakeReservation extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <p>Make Reservation</p>
        <form>
          <div>
            <label>Guest Name</label>
            <input ref="resOwner" type="text"/>
          </div>
          <div>
            <label>Time</label>
            <input ref="resTime" type="dateTime"/>
          </div>
          <div>
            <label>Dietary Concerns</label>
            <textarea ref="resDiet" rows="5"></textarea>
          </div>
          <div>
            <label>Table</label>
            <input type="text" ref="resTable"/>
          </div>
          <div>
            <label>Number of Guests</label>
            <input type="text" ref="resAmount"/>
          </div>
          <div>
            <label>Contact</label>
            <input type="text" ref="resContact"/>
          </div>
          <div>
            <input type="submit" className="button hollow"/>
          </div>
        </form>
      </div>
    )
  }
};
export default connect() (MakeReservation);
