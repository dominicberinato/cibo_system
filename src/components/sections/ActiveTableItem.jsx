import React,{Component} from 'react'
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
    dispatch(currBill(id));
  }
  render() {
    var {tbname, resOwner, bill} = this.props
    return(
      <div className="bill-item" onClick={this.setBill}>
        <div className="columns large-4 small-4 medium-4"><p ref="bill-table" className="bill-table">Table: {tbname}</p></div>
        <div className="columns large-4 small-4 medium-4"><p ref="bill-owner" className="bill-owner">Owner: {resOwner}</p></div>
        <div className="columns large-4 small-4 medium-4"><p ref="bill-tot" className="bill-tot">Amount: {bill}</p></div>
      </div>
    )
  }

};

//define props for this compon
ActiveTableItem.propTypes = {
  tbname: React.PropTypes.string,
  resOwner: React.PropTypes.string,
  bill: React.PropTypes.number
}


/*lets make default props for name and amount
*as a customer can take a table and order later
*
*/
ActiveTableItem.defaultProps = {
  resOwner: 'Stranger',
  bill: 0,
  tbname: '0'
}



export default connect()(ActiveTableItem);
