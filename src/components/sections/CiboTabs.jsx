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
import {collectTables, clearTables} from 'tableActions'
import {assocUser} from 'authActions'

export class CiboTabs extends Component {
  constructor(props){
    super(props);
    this.assocProduct = this.assocProduct.bind(this);
  }
  componentDidMount() {
    var{property, dispatch} = this.props;
    //check that we have a property key
    if(property.propKey  != undefined) {
      dispatch(collectTables());
    }
  }
  assocProduct(Event) {
    Event.preventDefault(); //prevent refresh
    //collect user id from state
    var {dispatch, auth} = this.props;
    //check that user exists
    if(auth != undefined) {
      //check that form has value
      var code = this.refs.propCode.value;
      //check that code is valid
      if(code.length > 0) {
        //dispatch assoc action
        dispatch(assocUser(auth.uid, code));
      }
    }
  }
  render() {
    var {property, dispatch} = this.props;
    var renderPropertyMessage = () => {
      if(property.propKey == undefined) {
        return(
          <div className="text-center">
            <form ref='form' onSubmit={this.assocProduct}>
              <label className="property-message"> ENTER PROPERTY CODE</label>
              <input className="text-center prop-code" ref="propCode" type="text" placeholder="5GT-HTG"/>
              <input ref="submit" className="button" type="submit" value="CONNECT"/>
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
    property: state.property,
    auth: state.auth
  }
})(CiboTabs);
