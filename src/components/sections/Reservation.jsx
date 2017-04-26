import React, {Component} from 'react'
import {connect} from 'react-redux'


export class Reservation extends  Component {
  constructor(props) {
    super(props)
  };
  render() {
    var {name, time, tbKey, tables} = this.props;
    var renderRes = () => {
      const table = tables.find((table) => {
        return table.tbKey == tbKey;
      })
      if(name.length == 0 || time.length == 0 || tbKey.length == 0){
        return(<p ref="reservationError"> Reloading reservation</p>)
      } else {
        return(
          <div className='res-item'>
            <div>
              <p ref='name'>Name: {name}</p>
            </div>
            <div>
              <p ref='time'>Time: {time}</p>
            </div>
            <div>
              <p ref='table'>Table: {table.tbname}</p>
            </div>
          </div>
        )
      }
    }
  return(
      <div>{renderRes()}</div>
    )
  };
};

export default connect((state) => {
  return {
    tables: state.tables
  }
})(Reservation);
