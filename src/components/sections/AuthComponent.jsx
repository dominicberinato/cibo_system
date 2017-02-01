import React,{Component} from 'react'
import {hashHistory} from 'react-router'
import * as actions from 'src/actions/actions'

export class AuthComponent extends Component {
  constructor(props) {
    super(props);
  }
  //when component is mounted
  componentDidMount() {

  }
  render() {
    return(<div>Auth</div>);
  }
};
export default AuthComponent;
