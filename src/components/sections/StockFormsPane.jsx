import React, {Component} from 'react'
import {connect} from 'react-redux'
import IngridientForm from 'IngridientForm'
import BatchForm from 'BatchForm'
import RecipeForm from 'RecipeForm'
import MenuForm from 'MenuForm'
export class StockFormsPane extends Component{
  constructor(props) {
    super(props)
  }
  //TODO
  /* Add Submit Handler for Ingridient form
  Add Submit Handler for Batch Form
  Add Submit Handler for RecipeForm
  Add submit handler for menuForm
  */
  handleIngridient = (values) => {
    console.log(values);
  }
  render() {
    var {stockForm}  = this.props;
    var whichForm =  () => {
      switch (stockForm) {
        case 'ingridients':
          return (
            <IngridientForm onSubmit={this.handleIngridient}/>
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
            <MenuForm/>
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
