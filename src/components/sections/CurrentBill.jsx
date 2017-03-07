import React, {Component} from 'react'
import {connect} from 'react-redux'

export class CurrentBill extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div className="text-center">
        <p>Current Bill</p>
      </div>
    )
  }
};
export default connect()(CurrentBill);
