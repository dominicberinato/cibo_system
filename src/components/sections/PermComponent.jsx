import React,{Component} from 'react'
import {connect} from 'react-redux'
import firebase,{firebaseRef} from 'src/firebase/index'
import {hashHistory} from 'react-router'
import {addProperty} from 'propertyActions'

export class PermComponent extends Component {
  constructor(props) {
    super(props);
    this.assocProduct = this.assocProduct.bind(this);

  }
  assocProduct(values) {
    //collect user id from state
    var {dispatch, auth} = this.props;
    //check that user exists
    if(auth != undefined) {
      //check that form has value

      //check that code is valid
      if(pcode.length > 0) {
        //dispatch assoc action
        dispatch(assocUser(values));
      }
    }
  }
  componentDidMount() {
    var {auth, dispatch} = this.props;
  }
  render() {
    return(
      <div>
        <p>perms</p>
      </div>
    )
  }
}
export default connect((state) => {
  return {
    auth: state.auth
  }
})(PermComponent);
