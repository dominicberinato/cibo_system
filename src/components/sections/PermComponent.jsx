import React,{Component} from 'react'
import {connect} from 'react-redux'
import firebase,{firebaseRef} from 'src/firebase/index'
import {hashHistory} from 'react-router'
import * as actions from 'src/actions/actions'

export class PermComponent extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    var {auth, dispatch} = this.props;
    if(auth != undefined)
    {
      //check that user doesnt exist
      firebaseRef.child(`users/${auth.uid}`).once('value').then((userShot) => {
        if(userShot.val() == null) {
          var userFanOut = {}
          userFanOut[`/users/${auth.uid}`] = auth;
          return firebaseRef.update(userFanOut).then(() => {
            hashHistory.push('/app');
          })
        }
        else {
          //check if user is admin and accord more perms
          //select user
          firebaseRef.child(`users/${auth.uid}`).once('value').then((userShot) => {
            //check if user has a propCode
            var user = userShot.val();
            console.log('this is the user', user);
            if(user.propCode) {
              //user has prop code download property and send to admin
              //download a the property
              firebaseRef.child(`properties/${user.propCode}`).once('value').then((propShot) => {
                var property = propShot.val();
                dispatch(actions.addProperty({
                  ...property,
                  propKey: propShot.key
                }));
                hashHistory.push('/app');
              })
            } else {
              //TODO create user property list
              var lastPropertyKey;
              firebaseRef.child('property-users').orderByValue()
              .once('value', (userprops) => {
                userprops.forEach((propUsersList) => {
                  propUsersList.forEach((propUser) => {
                    var lastProperty = propUsersList.key;
                  })
                })
              })

              //dispatch prop action
              //collect this property from db
              firebaseRef.child(`properties/${propUsersList.key}`).once('value').then((propSnapShot) => {
                dispatch(actions.addProperty({
                  ...propSnapShot.val(),
                  propKey: propUsersList.key
                }));
                hashHistory.push('/app')
              })
            }
          })

        }
      })
    }
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
            <p>Please wait as we load your property</p>
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
