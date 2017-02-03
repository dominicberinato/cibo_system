import React,{Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import SetProperty from 'SetProperty'


export class Admin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="row admin-panel">
        <div className="columns small-6 large-6">
          <SetProperty/>
        </div>
        <div columns small-6 large-6>
          <div>
            <p className="text-center">Details</p>
          </div>
          <div>
            <p className="text-center">Tables</p>
          </div>

        </div>
      </div>
    )
  }
};
export default Admin;
