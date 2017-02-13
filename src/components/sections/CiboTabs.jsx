import React, {Component} from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import Billing from 'Billing'
import Reservations from 'Reservations'
import Finance from 'Finance'
import Marketing from 'Marketing'
import Operations from 'Operations'
import StockManagement from 'StockManagement'
import HumanResources from 'HumanResources'
import {connect} from 'react-redux'

export class CiboTabs extends Component {
  constructor(props){
    super(props);
    this.assocProduct = this.assocProduct.bind(this);
  }
  assocProduct() {
    
  }
  render() {
    var {property, dispatch} = this.props;

    var renderPropertyMessage = (property) => {
      if(property == undefined) {
        return(
          <div className="text-center">
            <form ref='form' onSubmit={this.assocProduct}>
              <label className="property-message"> ENTER PROPERTY CODE</label>
              <input  className="text-center" ref="propCode" type="text" placeholder="5GT-HTG"/>
              <input  className="button" type="submit" value="CONNECT"/>
            </form>
          </div>
        )
      } else {
        return(
          <Tabs>
            <Tab label="Reservations">
              <Reservations/>
            </Tab>
            <Tab label="Billing">
              <Billing/>
            </Tab>
            <Tab label="Operations">
              <Operations/>
            </Tab>
            <Tab label="Stock">
              <StockManagement/>
            </Tab>
            <Tab label="Finance">
              <Finance/>
            </Tab>
            <Tab label="HR">
              <HumanResources/>
            </Tab>
            <Tab label="Marketing">
              <Marketing/>
            </Tab>
          </Tabs>
        )
      }
    }
    return(
      <div>
        {renderPropertyMessage()}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    property: state.property
  }
})(CiboTabs);
