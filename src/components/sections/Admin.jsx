import React,{Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton';


export class Admin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="row admin-panel">
        <div className="columns small-4 large-4">
          <RaisedButton className="raised-margin" label="Add Property" secondary={true} onClick={this.openAddProp}/>
        </div>
      </div>
    )
  }
};
export default Admin;
