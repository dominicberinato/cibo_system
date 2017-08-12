import React, {Component} from 'react'
import {connect} from 'react-redux'
import { hashHistory } from 'react-router'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { startAddBill, currBill } from 'billActions';

export class Reservation extends  Component {
  constructor(props) {
    super(props);
  };
  
  handleClick(){
    const { resTable, swaptabs, bills, dispatch, auth } = this.props;
    //check if table has an existing bill 
    const existingBill = bills.filter((bill) => {
      return bill.tbKey == resTable
    })

    //if a bill exists for this table we should fire currBill and navigate to billing page 
    if(existingBill.length == 1) {
      dispatch(currBill(existingBill[0].id));
      swaptabs('billing');
    } else {
      //here we don't have an existing bill we can just create a new one associated with the table and swap to billing
      dispatch(startAddBill({
        tbKey: resTable,
	billCreator: auth.uid
      }));
      swaptabs('billing');

    }

        
  }
  render() {
    const {resOwner, resTime, resDate, resTable, tables, auth, swaptabs} = this.props;
    var renderRes = () => {
      const table = tables.find((table) => {
        return table.tbKey == resTable;
      })
      if(name){
        return(<p ref="reservationError"> Reloading reservation</p>)
      } else {
        return(
          <Card onClick={()=>{this.handleClick()}} className='res-item'>
            <CardHeader
              title={`${resOwner} `}
            />
            <CardText>
              {`On ${resDate}`}
            </CardText>
            <CardText>
              {`@ ${resTime}`}
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
    tables: state.tables,
    bills: state.bills,
    auth: state.auth
  }
})(Reservation);
