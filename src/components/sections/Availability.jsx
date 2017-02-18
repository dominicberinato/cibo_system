import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as actions from 'src/actions/actions'

export class Availability extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    //todo implement collectReservations
    var {dispatch} = this.props;
    dispatch(actions.collectTables());
  }
  render() {
    var {tables, reservations} = this.props;
    return(
      <div>
        <p>Current Reservations: {reservations.length}</p>
        <p>Avaible Tables: {tables.length - reservations.length}</p>
        <p>Total Tables: {tables.length}</p>
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
