import React, {Component} from 'react'
import {connect} from 'react-redux'
//TODO Create single reservation item && render list
import Reservation from 'Reservation'

export class CurrentBookings extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    var {reservations} = this.props;
    var renderReservations = () => {
      if(reservations.length != 0) {
        return reservations.map((res) => {
          return(<Reservation key={res.resKey} {...res} />);
        })
      } else {
        return(<p ref='eResMsg'>No Reservations at the moment</p>)
      }
    }
    return(<div className='reservation-box'>{renderReservations()}</div>)
  }
}


export default connect((state) => {
  return{
    reservations: state.reservations
  }
})(CurrentBookings);
