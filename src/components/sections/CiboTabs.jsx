import React, {Component, PropTypes} from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';
import Billing from 'Billing'
import Reservations from 'Reservations'
import Finance from 'Finance'
import Marketing from 'Marketing'
import Operations from 'Operations'
import StockManagement from 'StockManagement'
import HumanResources from 'HumanResources'
import {connect} from 'react-redux'
import {assocUser} from 'authActions'


export class CiboTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'reservations'
    };

    this.handleTabChange = this.handleTabChange.bind(this)
  }

  handleTabChange(value) {
    this.setState({ value })
  }
  render() {
    var {property, dispatch} = this.props;
    return(
      <div>
        <Tabs 
	  value={this.state.value}
	  onChange={this.handleTabChange}
	>
          <Tab value="reservations" label="Reservations">
            <Reservations swaptabs={this.handleTabChange}/>
          </Tab>
          <Tab value="billing" label="Billing">
            <Billing/>
          </Tab>
          <Tab value="operations" label="Operations">
            <Operations/>
          </Tab>
          <Tab value="stock" label="Stock">
            <StockManagement/>
          </Tab>
          <Tab value="finance" label="Finance">
            <Finance/>
          </Tab>
          <Tab value="hr" label="HR">
            <HumanResources/>
          </Tab>
          <Tab value="marketing" label="Marketing">
            <Marketing/>
          </Tab>
        </Tabs>
      </div>
    );
  }
}



export default connect((state) => {
  return {
    property: state.property,
    auth: state.auth
  }
})(CiboTabs);
