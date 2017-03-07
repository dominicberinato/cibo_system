import React, {Component} from 'react'
import {connect} from 'react-redux'
import ActiveTableItem from 'ActiveTableItem'
import {startAddBill} from 'billActions'

export class ActiveTables extends Component {
  constructor(props){
    super(props)
  }
  render() {
    var {bills, dispatch} = this.props;
    //conditinal rendr of bills
    var renderBills = () => {
      if(bills.length > 0) {
        return bills.map((bill) => {
          return(<ActiveTableItem key={bill.tbname} {...bill}/>);
        })
      } else {
        return (<p ref="empty-bills">'No Active Tables Lets Hustle'</p>)
      }
    }
    return(
      <div>
          <p className="text-center">Active Tables</p>
          {renderBills()}
          <div>
            <button ref="add-bill" className="button hollow" onClick={dispatch(startAddBill)}>Start Bill</button>
          </div>
      </div>
    )
  }
};

//declare props for our component
ActiveTables.propTypes = {
  bills: React.PropTypes.array.isRequired
};

//default props
ActiveTables.defaultProps = {
  bills:[]
};

export default connect((state) => {
  return{
    bills: state.bills
  }
})(ActiveTables);
