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
    var renderReservations = () => {
      return 0;
    }
    return(<div>{renderReservations()}</div>)
  }
}


export default connect((state) => {
  return{
    reservations: state.reservations
  }
})
