import React, {Component} from 'react'


export class Reservation extends  Component {
  constructor(props) {
    super(props)
  };
  render() {
    var {name, time, tbKey} = this.props;
    var renderRes = () => {
      if(name.length == 0 || time.length == 0 || tbKey.length == 0){
        return(<p ref="reservationError"> Reloading reservation</p>)
      } else {
        return(
          <div>
            <div>
              <p ref='name'>`Name: ${name}`</p>
            </div>
            <div>
              <p ref='time'>`Time: ${time}`</p>
            </div>
            <div>
              <p ref='table'>`Table: ${tbKey}`</p>
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

export default Reservation;
