import React, {Component, PropTypes} from 'react'
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
    var {currBill} = this.props;
    var currBillItems = () => {
      if(currBill == '') {
        return(<p className="no-bill"> Please Select a Bill for Details</p>)
      }
    }
    return(
      <div className="current-bill">
        <div className="text-center">
           <p>Items</p>
        </div>
        <div>
          {currBillItems()}
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

//define expected props
CurrentBill.propTypes  = {
  currBill: PropTypes.string
};

//define default props
CurrentBill.defaultProps = {
  currBill: ''
}
export default connect((state) => {
  return {
    currBill: state.currBill
  }
})(CurrentBill);
