import React,{Component} from 'react'
import {connect} from 'react-redux'

export class PermComponent extends Component {
  
  render() {
    return(<p>HandlePermissions</p>)
  }
}
export default connect((state) => {
  return {
    auth: state.auth
  }
})(PermComponent);
