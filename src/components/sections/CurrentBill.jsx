import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { addItem } from "billActions";

export class CurrentBill extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.clearBill = this.clearBill.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    //lets get props from connect
    var { dispatch, currBill } = this.props;

    //lets validate
    const itemID = this.refs.orderID.value;

    if (itemID.length > 0) {
      //dispatch updates
      const updates = {
	      items: [{name:itemID, price:32}]
      };

      //call dispatch with  our orders
      dispatch(addItem(currBill, updates));
    }
  }

  clearBill(e) {
    e.preventDefault();
  }
  render() {
    const { currBill, bills } = this.props;
    const currBillItems = () => {
      if (currBill === "") {
        return (
          <p className="no-bill text-center">
	   Please Select a Bill for Details
          </p>
        );
      }
      //pick current bill from state
      const myBill = bills.find(billItem => {
        return billItem.id == currBill;
      });
      //check items
      if (myBill.items != undefined) {
        //list items
        return (
          <div>
            <div className="item-orders text-center">
              {myBill.items.map(item => {
		const time = Date.now();
                return (
                  <div key={ item.name+time } className="item-line">
                    <div className="small-6 item-name"> <p> { item.name } </p> </div>
		    <div className="small-6 item-price"> <p> { item.price } </p> </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center ">
              <form ref="form" onSubmit={this.addItem}>
                <div>
                  <label>Order Item</label>
                  <input className="item-input" type="text" ref="orderID" />
                </div>
                <div>
                  <button className="button ">Add Item</button>
                </div>
              </form>
            </div>
            <div>
              <button className="button alert">Clear</button>
            </div>
          </div>
        );
      } 
      else {
        return (
          <div>
            <p className="no-orders text-center"> Please take orders</p>
            <div className="text-center ">
              <form ref="form" onSubmit={this.addItem}>
                <div>
                  <label>Order Item</label>
                  <input className="item-input" type="text" ref="orderID" />
                </div>
                <div>
                  <button className="button ">Add Item</button>
                </div>
              </form>
            </div>
            <div>
              <button className="button alert">Clear</button>
            </div>
          </div>
        );
      }
    };
    return (
      <div className="current-bill">
        <div className="text-center">
          <p>Items</p>
        </div>
        <div>
          {currBillItems()}
        </div>
      </div>
    );
  }
}

//define expected props
CurrentBill.propTypes = {
  currBill: PropTypes.string,
  bills: PropTypes.array
};

//define default props
CurrentBill.defaultProps = {
  currBill: "",
  bills: []
};
export default connect(state => {
  return {
    currBill: state.currBill,
    bills: state.bills
  };
})(CurrentBill);
