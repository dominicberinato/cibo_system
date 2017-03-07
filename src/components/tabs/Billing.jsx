import React, {Component} from 'react'
import ActiveTables from 'ActiveTables'
import BillingStats from 'BillingStats'
import CurrentBill from 'CurrentBill'

export class Billing extends Component {
  render() {
    return(
      <div>
        <div className="columns large-6 medium-6 small-12">
          <div className="row">
            <ActiveTables/>
          </div>
          <div className="row">
            <BillingStats/>
          </div>
        </div>
        <div className="columns large-6 medium-6 small-12">
          <CurrentBill/>
        </div>
      </div>
    );
  }
};

export default Billing;
