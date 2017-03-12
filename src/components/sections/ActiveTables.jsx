import React, {Component, PropTypes} from 'react'
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
    var {dispatch, auth} = this.props;
    //curate new bill
    var tbKey =  this.refs.resTable.value;
    var billCreator = auth.uid
    //create new bill
    //console.log('tbKey', tbKey, 'auth',billCreator);
    //validate
    if(tbKey.length != 0 && billCreator.length != 0) {
      dispatch(startAddBill({
        tbKey,
        billCreator
      }));
    }
  }
  render() {
    var {bills, dispatch, tables} = this.props;
    //conditinal rendr of bills
    var renderBills = () => {
      if(bills.length == 0) {
        return (<p className="empty-bills">No Active Tables Lets Hustle</p>)
      } else {
        return bills.map((bill) => {
          return(<ActiveTableItem key={bill.id} {...bill}/>);
        });
      }
    }
    return(
      <div className="text-center">
          <p className="text-center">Active Tables</p>
          {renderBills()}
          <div>
            <form ref='form' onSubmit={this.addBill}>
              <label>Choose Table</label>
              <select className="table-select" ref="resTable">{tables.map((table) =>{
                  return(<option key={table.tbKey} value={table.tbKey}>{table.tbname}</option>)
                })}</select>
              <button ref="add-bill" className="add-bill button hollow">Start Bill</button>
            </form>
          </div>
      </div>
    )
  }
};

//declare props for our component
ActiveTables.propTypes = {
  bills: PropTypes.array,
  auth: PropTypes.object,
  tables: PropTypes.array
};

ActiveTables.defaultProps = {
  bills:[],
  auth: {},
  tables:[]
}



export default connect((state) => {
  return{
    bills: state.bills,
    tables: state.tables,
    auth: state.auth
  }
})(ActiveTables);
