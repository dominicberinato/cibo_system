import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Billing from 'Billing'
import Reservations from 'Reservations'
import Finance from 'Finance'
import Marketing from 'Marketing'
import Operations from 'Operations'
import StockManagement from 'StockManagement'
import HumanResources from 'HumanResources'


export class CiboBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <AppBar
          title="Cibo Property Management"
          />
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
      </div>
    );
  }
};

export default CiboBar;
