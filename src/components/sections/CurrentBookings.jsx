import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chip from 'material-ui/Chip';
//TODO Create single reservation item && render list
import Reservation from 'Reservation'

export class CurrentBookings extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    var {reservations} = this.props;
    var renderReservations = () => {
      var now = new Date();
      var currentReservations = reservations.filter((res) => {
        return(res.time > now.getTime());
      });
      if(currentReservations.length != 0) {
        return currentReservations.map((res) => {
          return(<Reservation key={res.resKey} {...res} />);
        })
      } else {
        return(<Chip className="text-center" ref='eResMsg'>No Reservations at the moment</Chip>)
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
