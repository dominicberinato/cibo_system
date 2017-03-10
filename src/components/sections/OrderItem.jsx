import React,{Component} from 'react'
import {connect} from 'react-redux'

export class OrderItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var  {cost, name, id} = this.props;
    if(name == undefined || id == undefined || cost  == undefined) {
      return(<p className='order-item-error'>Order Item Error Contact Admin</p>)
    }
    return(
      <div className="order-item">
        <p className="item-name">{name}</p>
        <p className="item-cost">{cost}</p>
      </div>
    )
  }
};

export default OrderItem;
