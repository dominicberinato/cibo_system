import React, {Component} from 'react'
import {connect} from 'react-redux'
//TODO Create single reservation item && render list

export class CurrentBookings extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render(){

    var {reservations} = this.props;
    var renderReservations = () => {
      if(reservations.length != 0) {
        return 'we have reservations!'
      } else {
        return(<p>No Reservations at the moment</p>)
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
