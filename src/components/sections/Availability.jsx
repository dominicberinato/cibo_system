import React,{Component} from 'react'
import {connect} from 'react-redux'
import {collectTables} from 'src/actions/tableActions'

export class Availability extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    //todo implement collectReservations
    var {dispatch} = this.props;
  }
  render() {
    var {tables, reservations} = this.props;
    var renderStats = () =>  {
      //list validReservatations
      var now = new Date();
      var currentReservations = reservations.filter((res) => {
        return(res.time > now.getTime());
      });
      if(tables.length == 0){
        return(<p ref='tableMessage'>No Tables for Bookings</p>)
      } else {
        return(
          <div>
            <div>
              <p ref="currentRes">Current Reservations: {currentReservations.length}</p>
            </div>
            <div>
              <p ref="availableTables">Available Tables: {tables.length - currentReservations.length}</p>
            </div>
            <div>
              <p ref="totalTables">Total Tables: {tables.length}</p>
            </div>
          </div>

        )
      }
    }
    return(
      <div className="availability">
        {renderStats()}
      </div>
    )
  }
}

export default connect((state) => {
  return{
    reservations: state.reservations,
    tables: state.tables
  }
})(Availability);
