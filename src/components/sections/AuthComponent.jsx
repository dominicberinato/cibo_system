import React,{Component} from 'react'
import {hashHistory} from 'react-router'
import * as actions from 'src/actions/actions'
import {connect} from 'react-redux'
import firebase from 'src/firebase/index'

export class AuthComponent extends Component {
  constructor(props) {
    super(props);
    //bind login func
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin() {
    var{dispatch} = this.props;
    //call login action to sign in with popup
    dispatch(actions.startLogin());
  }
  render() {
    return(
      <div className="auth">
         <div className="columns small-centered small-10 medium-6 large-4">
           <div className=" text-center callout callout-auth">
             <h3>Login</h3>
             <button className="button" onClick={this.onLogin}> Login With Google</button>
           </div>
         </div>
       </div>
     );
  }
};
export default connect()(AuthComponent);
