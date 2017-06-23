import React, {Component} from 'react'
import {connect} from 'react-redux'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {collectUserProperties} from 'userPropertiesActions';
import AssocForm from 'AssocForm';
import {assocUser} from 'authActions';

export class PermComponent extends Component {
  constructor(props) {
    super(props);
    this.assocProduct = this.assocProduct.bind(this);
    this.state = {
      open: true,
    };

  }
  assocProduct(values) {
    var {dispatch} = this.props;
    //dispatch assoc action
    dispatch(assocUser(values));
  }
  componentDidMount() {
    var {auth, dispatch} = this.props;
    dispatch(collectUserProperties())
  }
  render() {
    var {userProps} = this.props;
    var renderDialogContent = () => {
      //no props check database
      if(userProps.length ==  0) {
        return <p> Checking Database for Properties</p>
      } else {
        //one prop named none so we need to show form
        if(userProps.length == 1 && userProps[0].name == 'none') {
          return(
            <AssocForm onSubmit={this.assocProduct}/>
          )
        }
        else {
          //render a list with the properties
          userProps.map((p) => {
            return(
              <p key={p.name}>p.name</p>
            )
          })
        }
      }
    }
    return(
      <div>
        <Dialog
          title="Loading Properties"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {renderDialogContent()}
        </Dialog>
      </div>
    )
  }
}
export default connect((state) => {
  return {
    auth: state.auth,
    userProps: state.userProperties
  }
})(PermComponent);
