import React,{Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {currBill} from 'billActions'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

export class ActiveTableItem extends Component {
  constructor(props){
    super(props)
    this.setBill = this.setBill.bind(this)
  }
  setBill(Event) {
    Event.preventDefault();
    var {id, dispatch} = this.props;
    //TODO consider adding more details to bill
    dispatch(currBill(id));
  }
  render() {
    // TODO TEST that active table shows correctly
    var {tbKey, resOwner, items, tables} = this.props
    const tb = tables.find((tableItem) => {
      return tableItem.tbKey == tbKey
    })
    
    const billCosts = items.map((item) => {
      return item.price;
    })

    const totalBillCost = billCosts.reduce((prev,curr) => {
      return prev + curr;
    }, 0)
    return(
      <Card className="res-item" onClick={this.setBill}>
        <CardHeader title={`Table: ${tb.tbname}`}/>
        <CardText>{`Owner: ${resOwner}`}</CardText>
        <CardText>{`Amount: ${totalBillCost}`}</CardText>
      </Card>
    )
  }

};

//define props for this compon
ActiveTableItem.propTypes = {
  resOwner: PropTypes.string,
  items: PropTypes.array,
  tbKey: PropTypes.string,
  tables: PropTypes.array
}


/*lets make default props for name and amount
*as a customer can take a table and order later
*
*/
ActiveTableItem.defaultProps = {
  resOwner: 'Stranger',
  items: [],
  tbKey: '',
  tables: []
}



export default connect((state) => {
  return {
    tables: state.tables
  }
})(ActiveTableItem);
