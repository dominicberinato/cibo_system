import React, {Component} from 'react'
import {connect} from 'react-redux'

export class BillingStats extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    return(
      <div className="text-center">
        <p>Billing Stats</p>
      </div>
    );
  };
};

export default connect()(BillingStats);
