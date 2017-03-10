import React, {Component} from 'react'
import {connect} from 'react-redux'

export class CurrentBill extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div className="current-bill">
        <div className="text-center">
           <p>Items.</p>
        </div>
      </div>
    )
  }
};
export default connect()(CurrentBill);
