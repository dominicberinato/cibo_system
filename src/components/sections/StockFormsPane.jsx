import React, {Component} from 'react'
import {connect} from 'react-redux'
import IngridientForm from 'IngridientForm'
import BatchForm from 'BatchForm'
import RecipeForm from 'RecipeForm'

export class StockFormsPane extends Component{
  constructor(props) {
    super(props)
  }
  //TODO
  /* Add Submit Handler for Ingridient form
  Add Submit Handler for Batch Form
  Add Submit Handler for RecipeForm
  */


  render() {
    var {stockForm}  = this.props;
    var whichForm =  () => {
      switch (stockForm) {
        case 'ingridients':
          return (
            <IngridientForm/>
          );
        case 'batches':
          return (
            <BatchForm/>
          );
        case 'recipes':
          return(
            <RecipeForm/>
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
