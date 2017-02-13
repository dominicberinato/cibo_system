import React,{Component} from 'react'
import {connect} from 'react-redux'
import firebase,{firebaseRef} from 'src/firebase/index'
import {hashHistory} from 'react-router'

export class PermComponent extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    //get user object from state
    var {auth} = this.props;
    if(auth) {
      //check that user doesnt exist
      firebaseRef.child(`users/${auth.uid}`).once('value').then((userShot) => {
        if(userShot.val() == null) {
          var userFanOut = {}
          userFanOut[`/users/${auth.uid}`] = auth;
          return firebaseRef.update(userFanOut).then(() => {
            console.log('regod!');
            hashHistory.push('/app');
          })
        }
        else {
          //TODO check if user is admin and accord more perms
          hashHistory.push('/app');
        }
      })
      //onboard
    }
    return(<div></div>)
  }
}
export default connect((state) => {
  return {
    auth: state.auth
  }
})(PermComponent);
