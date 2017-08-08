import React,{Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {currBill} from 'billActions'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

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
    //TODO consider adding more details to bill
    dispatch(currBill(id));
  }
  render() {
    // TODO TEST that active table shows correctly
    var {tbKey, resOwner, bill, tables} = this.props
    const tb = tables.find((tableItem) => {
      return tableItem.tbKey == tbKey
    })
    return(
      <Card className="res-item" onClick={this.setBill}>
        <CardHeader title={`Table: ${tb.tbname}`}/>
        <CardText>{`Owner: ${resOwner}`}</CardText>
        <CardText>{`Amount: ${bill}`}</CardText>
      </Card>
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
