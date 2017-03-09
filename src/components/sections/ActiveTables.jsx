import React, {Component} from 'react'
import {connect} from 'react-redux'
import ActiveTableItem from 'ActiveTableItem'
import {startAddBill} from 'billActions'

export class ActiveTables extends Component {
  constructor(props){
    super(props)
    this.addBill =  this.addBill.bind(this);
  }
  addBill(Event) {
    Event.preventDefault();
    var {dispatch} = this.props;
    //dispatch(startAddBill())
    console.log('addbill clicked');
  }
  render() {
    var {bills, dispatch} = this.props;
    //conditinal rendr of bills
    var renderBills = () => {
      if(bills.length == 0) {
        return (<p className="empty-bills">No Active Tables Lets Hustle</p>)
      } else {
        return bills.map((bill) => {
          return('we have table');
        });
      }
    }
    return(
      <div className="text-center">
          <p className="text-center">Active Tables</p>
          {renderBills()}
          <div>
            <button ref="add-bill" onClick={this.addBill} className="add-bill button hollow">Start Bill</button>
          </div>
      </div>
    )
  }
};

//declare props for our component
ActiveTables.propTypes = {
  bills: React.PropTypes.array.isRequired
};

export default connect((state) => {
  return{
    bills: state.bills
  }
})(ActiveTables);
