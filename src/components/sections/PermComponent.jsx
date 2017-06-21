import React,{Component} from 'react'
import {connect} from 'react-redux'
import firebase,{firebaseRef} from 'src/firebase/index'
import {hashHistory} from 'react-router'
import {addProperty} from 'propertyActions'

export class PermComponent extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var {auth, dispatch} = this.props;
    console.log('this is the auth object', auth);
  }
  render() {
    //get user object from state
    var {auth, dispatch} = this.props;
    var welcomeMessage = () => {
      if(auth != undefined) {
        var uname = auth.name;
        return(
          <div className="text-center permissions-text>">
            <p>{`Hello ${uname}!`}</p>
            <p>Please wait as we load your properties</p>
          </div>
        )
      }
    }
    return(
      <div>
      {welcomeMessage()}
    </div>)
  }
}
export default connect((state) => {
  return {
    auth: state.auth
  }
})(PermComponent);
