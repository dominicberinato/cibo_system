import React, {Component} from 'react'
import {connect} from 'react-redux'

export class StockFormsPane extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    var {stockForm}  = this.props;
    return(
      <p>{stockForm}</p>
    )
  }
};


export default connect((state) =>  {
  return {
    stockForm : state.stockForm
  }
}) (StockFormsPane);
