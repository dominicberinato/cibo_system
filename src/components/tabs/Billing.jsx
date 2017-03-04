import React, {Component} from 'react'
import ActiveTables from 'ActiveTables'

export class Billing extends Component {
  render() {
    return(
      <div>
        <div className="columns large-6 medium-6 small-12">
          <div className="row">
            <ActiveTables/>
          </div>
          <div className="row">
            <p className="text-center">Billing Stats</p>
          </div>
        </div>
        <div className="columns large-6 medium-6 small-12">
          <p className="text-center">Bill Details</p>
        </div>
      </div>
    );
  }
};

export default Billing;
