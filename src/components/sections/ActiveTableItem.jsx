import React,{Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {currBill} from 'billActions'

export class ActiveTableItem extends Component {
  constructor(props){
    super(props)
    this.setBill = this.setBill.bind(this)
  }
  componentDidMount(){

  }
  setBill(Event) {
    Event.preventDefault();
    var {id, dispatch} = this.props;
    //TODO:
    //considere adding details to bill
    dispatch(currBill(id));
  }
  render() {
    // TODO:
    //TEST that active table shows correctly
    var {tbKey, resOwner, bill, tables} = this.props
    const tb = tables.find((tableItem) => {
      return tableItem.tbKey == tbKey
    })
    return(
      <div className="bill-item" onClick={this.setBill}>
        <div className="columns large-4 small-4 medium-4"><p ref="bill-table" className="bill-table">Table: {tb.tbname}</p></div>
        <div className="columns large-4 small-4 medium-4"><p ref="bill-owner" className="bill-owner">Owner: {resOwner}</p></div>
        <div className="columns large-4 small-4 medium-4"><p ref="bill-tot" className="bill-tot">Amount: {bill}</p></div>
      </div>
    )
  }

};

//define props for this compon
ActiveTableItem.propTypes = {
  resOwner: PropTypes.string,
  bill: PropTypes.number,
  tbKey: PropTypes.string,
  tables: PropTypes.array
}


/*lets make default props for name and amount
*as a customer can take a table and order later
*
*/
ActiveTableItem.defaultProps = {
  resOwner: 'Stranger',
  bill: 0,
  tbKey: '',
  tables: []
}



export default connect((state) => {
  return {
    tables: state.tables
  }
})(ActiveTableItem);
