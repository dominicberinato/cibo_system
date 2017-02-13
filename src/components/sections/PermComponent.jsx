import React,{Component} from 'react'
import {connect} from 'react-redux'
import firebase from 'src/firebase/index'

export class PermComponent extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {


  }
  render() {
    return(<p>HandlePermissions</p>)
  }
}
export default connect((state) => {
  return {
    auth: state.auth
  }
})(PermComponent);
