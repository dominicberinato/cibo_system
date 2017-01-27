import React, {Component} from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import Billing from 'Billing'
import Reservations from 'Reservations'
import Finance from 'Finance'
import Marketing from 'Marketing'
import Operations from 'Operations'
import StockManagement from 'StockManagement'
import HumanResources from 'HumanResources'

export class CiboTabs extends Component {
  render() {
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
    );
  }
}

export default CiboTabs;
