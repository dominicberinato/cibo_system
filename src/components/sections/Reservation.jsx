import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';



export class Reservation extends  Component {
  constructor(props) {
    super(props)
    this.state = {
      reservationDate: '...',
      reservationTime: '...'
    }
  };

  componentDidMount() {
    const {resTime, resDate} = this.props;
    const resDisplayTime = new Date(resTime).toUTCString();
    const resDislayDate = new Date(resDate).toDateString();

    this.setState({
      reservationDate: resDislayDate,
      reservationTime: resDisplayTime
    })
  }
  render() {
    const {resOwner, resTime, resDate, resTable, tables} = this.props;
    const {reservationDate, reservationTime} = this.state;
    var renderRes = () => {
      const table = tables.find((table) => {
        return table.tbKey == resTable;
      })
      if(name){
        return(<p ref="reservationError"> Reloading reservation</p>)
      } else {
        return(
          <Card className='res-item'>
            <CardHeader
              title={`${resOwner} `}
            />
            <CardText>
              {`On ${reservationDate}`}
            </CardText>
            <CardText>
              {`@ ${reservationTime}`}
            </CardText>
            <CardText>
              {`Table: ${table.tbname}`}
            </CardText>
          </Card>
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
