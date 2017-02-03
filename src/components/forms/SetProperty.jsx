import React, {Component} from 'react'
import {connect} from 'react-redux'

//plain class  for testing
export class SetProperty extends Component {
  constructor(props) {
    super(props)
    //bind the funcs
    this.setProp = this.setProp.bind(this);
  }
  setProp(Event) {
    //prevent rafressshhh
    Event.preventDefault();
    var{dispatch} = this.props;
    var mRef = this.refs;
    var pname = mRef.propName.value;
    var padd = mRef.propAddress.value;
    var ploc = mRef.propLocation.value;
    var pava = mRef.propAvatar.value;

    if(pname.length > 0 && padd.length > 0 && pava.length > 0) {
      //make object to send to dispatch
      var property = {
        pname,
        address: padd,
        avatar: pava,
      }
      //dispatch our action generator
      dispatch(actions.startAddProperty(property));
    }
    else {
      this.refs.propName.focus();
    }
  }
  render() {
    return(
      <div>
        <form ref="form" onSubmit={this.setProp}>
          <div>
            <label>Name</label>
            <input type="text" ref="propName"/>
          </div>
          <div>
            <label>Address</label>
            <input type="text" ref="propAddress"/>
          </div>
          <div>
            <label>Location</label>
            <input type="text" ref="propLocation"/>
          </div>
          <div>
            <label>Avatar</label>
            <input type="text" ref="propAvatar"/>
          </div>
          <div>
            <input type="submit" className="button" value="SAVE PROPERTY"/>
          </div>
        </form>
      </div>
    )
  }
};

export default connect(

)(SetProperty);
