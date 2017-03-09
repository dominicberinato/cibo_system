import React,{Component} from 'react'
import {connect} from 'react-redux'

export class ActiveTableItem extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){

  }
  render() {
    var {tbname, resOwner, bill} = this.props
    return(
      <div className="bill-item">
        <p ref="bill-table" className="bill-table">Table: {tbname}</p>
        <p ref="bill-owner" className="bill-owner">Owner: {resOwner}</p>
        <p ref="bill-tot" className="bill-tot">Amount: {bill}</p>
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
