import React, {Component} from 'react'
import {connect} from 'react-redux'

export class CurrentBill extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.clearBill  = this.clearBill.bind(this);
  };
  addItem(e){
    e.preventDefault();
  }

  clearBill(e) {
    e.preventDefault();
  }
  render() {
    return(
      <div className="current-bill">
        <div className="text-center">
           <p>Items</p>
        </div>
        <div>

        </div>
        <div clasName="row bottom-buttons">
          <div className="text-center columns large-6 small-6  medium-6">
            <button className="button ">Add Item</button>
          </div>
          <div className="text-center columns large-6 small-6  medium-6">
            <button className="button alert">Clear</button>
          </div>
        </div>
      </div>
    )
  }
};
export default connect()(CurrentBill);
