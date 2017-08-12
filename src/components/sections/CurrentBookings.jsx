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
    var { reservations, swaptabs } = this.props;

    var renderReservations = () => {
      if(reservations.length != 0) {
        const sortedRes = reservations.sort(function (a,b) {
          return new Date(a.resDate).getDate() - new Date(b.resDate).getDate();
        });
        return sortedRes.map((res) => {
          return(<Reservation swaptabs={swaptabs} key={res.resKey} {...res} />);
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
