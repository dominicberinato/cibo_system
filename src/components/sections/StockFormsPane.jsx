import React, {Component} from 'react'
import {connect} from 'react-redux'

export class StockFormsPane extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    var {stockForm}  = this.props;
    var whichForm =  () => {
      switch (stockForm) {
        case 'ingridients':
          return (
            <p>Ingridients Form</p>
          );
        case 'batches':
          return (
            <p>Batches Form</p>
          );
        case 'beverages':
          return (
            <p>Beverages Form</p>
          );
        case 'menus':
          return (
            <p>Menus Form</p>
          );
        case 'archive':
          return (
            <p>archive form</p>
          );
        case 'cocktails':
          return (
            <p>Cocktails Form</p>
          );
        default:
          return (
            <p>Please Select a form from the buttons</p>
          );
      }
    }

    return (<div>
      {whichForm()}
    </div>);
  }
};


export default connect((state) =>  {
  return {
    stockForm : state.stockForm
  }
}) (StockFormsPane);
