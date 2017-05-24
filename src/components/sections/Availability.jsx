import React,{Component} from 'react'
import {connect} from 'react-redux'
import {collectTables} from 'src/actions/tableActions'
import Chip from 'material-ui/Chip';


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
        return(<Chip ref='tableMessage'>No Tables for Bookings</Chip>)
      } else {
        return(
          <div>
            <div className="chip-row">
              <Chip ref="currentRes">Current Reservations: {currentReservations.length}</Chip>
            </div>
            <div className="chip-row">
              <Chip ref="availableTables">Available Tables: {tables.length - currentReservations.length}</Chip>
            </div>
            <div className="chip-row">
              <Chip ref="totalTables">Total Tables: {tables.length}</Chip>
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
