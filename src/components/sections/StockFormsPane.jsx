import React, {Component} from 'react'
import {connect} from 'react-redux'
import IngridientForm from 'IngridientForm'
import BatchForm from 'BatchForm'
import RecipeForm from 'RecipeForm'
import MenuForm from 'MenuForm'
import BeverageForm from 'BeverageForm'
import CocktailForm from 'CocktailForm'
import {startAddIngredient} from 'ingredientActions'
import {startAddBatch} from 'batchActions'
import {startAddRecipe} from 'recipeActions'
import {startAddMenu} from 'menuActions'
import {startAddBeverage} from 'beverageActions'

export class StockFormsPane extends Component{
  constructor(props) {
    super(props)
  }
  handleIngridient = (ing) => {
    const {dispatch} = this.props;
    dispatch(startAddIngredient(ing));
  }
  handleBatch = (batch) => {
    const {dispatch} = this.props;
    //console.log(values)
    dispatch(startAddBatch(batch));
  }
  handleRecipe = (recipe) => {
    const {dispatch} = this.props;
    //console.log(values)
    dispatch(startAddRecipe(recipe))
  }
  handleMenu = (menu) => {
    const {dispatch} = this.props
    dispatch(startAddMenu(menu))
  }
  handleBeverage = (bev) => {
    const {dispatch} = this.props
    dispatch(startAddBeverage(bev))
  }
  handleCocktail = (cocktail) => {
    const {dispatch} = this.props
    console.log(cocktail)
  }
  render() {
    const {stockForm}  = this.props;
    var whichForm =  () => {
      switch (stockForm) {
        case 'ingridients':
          return (
            <IngridientForm onSubmit={this.handleIngridient}/>
          );
        case 'batches':
          return (
            <BatchForm onSubmit={this.handleBatch}/>
          );
        case 'recipes':
          return(
            <RecipeForm onSubmit={this.handleRecipe}/>
          );
        case 'beverages':
          return (
            <BeverageForm onSubmit={this.handleBeverage}/>
          );
        case 'menus':
          return (
            <MenuForm onSubmit={this.handleMenu}/>
          );
        case 'archive':
          return (
            <p>Archiving will be available later</p>
          );
        case 'cocktails':
          return (
            <CocktailForm onSubmit={this.handleCocktail}/>
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
