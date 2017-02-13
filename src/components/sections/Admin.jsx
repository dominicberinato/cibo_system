import React,{Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import SetProperty from 'SetProperty'
import AddTable from 'AddTable'
import {connect} from 'react-redux'


export class Admin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="row admin-panel">
        <div className="columns small-6 large-6">
          <SetProperty/>
          <AddTable/>
        </div>
        <div columns small-6 large-6>
          <div>
            <p className="text-center">Details</p>
            <p></p>
            <p></p>
          </div>
          <div>
            <p className="text-center">Tables</p>
          </div>
        </div>
      </div>
    )
  }
};
export default connect()(Admin);
