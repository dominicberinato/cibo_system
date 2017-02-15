import React,{Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import SetProperty from 'SetProperty'
import AddTable from 'AddTable'
import PropertyProfile from 'PropertyProfile'
import TableList from 'TableList'
import {connect} from 'react-redux'


export class Admin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="row admin-panel">
        <div className="columns small-12 medium-6 large-6">
          <SetProperty/>
          <AddTable/>
        </div>
        <div className="columns small-12 large-6 medium-6">
          <div className="row">
            <PropertyProfile/>
          </div>
          <div>
            <TableList/>
          </div>
        </div>
      </div>
    )
  }
};
export default connect()(Admin);
