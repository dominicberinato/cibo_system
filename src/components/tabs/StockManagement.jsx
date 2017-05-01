import React, {Component} from 'react'
import StockButtonsPane from 'StockButtonsPane'

export class StockManagement extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <div className="columns small-12 medium-6 large-6 text-center">
          <StockButtonsPane/>
        </div>
        <div className="columns small-12 medium-6 large-6 text-center">
          <p>Form-Pane</p>
        </div>
      </div>
    );
  }
};

export default StockManagement;
