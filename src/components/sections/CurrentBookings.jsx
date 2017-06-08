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
          const resDate = new Date(res.resDate).getUTCDate()
          const nowHours = now.getHours()
          const nowMinutes = now.getMinutes()
          const resHours = new Date(res.resTime).getUTCHours()
          const resMinutes = new Date(res.resTime).getUTCMinutes()

          //TODO Filter current reservations using time and date properly
          //check if the reservation is the same as today or later
          if(resDate >= now.getDate()) {
            //edge case if its the same hour we should check for minutes
            if(nowHours == resHours) {
              //if current minutes are less than resMinutes then it is valid
              if(nowMinutes < resMinutes ){
                return true
              } else {
                //else no
                return false
              }
            }
            else if (nowHours > resHours) {
              //if current hour are  past your hour don't show
              return false
            } else {

              //show
              return true
            }
          } else {
            return false;
          }
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

CurrentBookings.defaultProps= {
  reservations: []
};

export default connect((state) => {
  return{
    reservations: state.reservations
  }
})(CurrentBookings);
