import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from 'src/actions/actions'
import shortid from 'shortid';

//plain class  for testing
export class SetProperty extends Component {
  constructor(props) {
    super(props)
    //bind the funcs
    this.setProp = this.setProp.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.state = {
      file: null
    };
  }
  handleImage(Event) {
    Event.preventDefault();
    let file = Event.target.files[0];
    this.setState({
        file: file,
    });
  }
  setProp(Event) {
    //prevent rafressshhh
    Event.preventDefault();
    var{dispatch} = this.props;
    var mRef = this.refs;
    var pname = mRef.propName.value;
    var padd = mRef.propAddress.value;
    var ploc = mRef.propLocation.value;
    var pava = this.state.file;

    if(pname.length > 0 && padd.length) {
      //make object to send to dispatch
      var pcode = shortid.generate();
      var property = {
        pname,
        address: padd,
        avatar: pava,
        propCode: pcode
      }
      //dispatch our action generator
      dispatch(actions.startAddProperty(property));
    }
    else {
      //TODO display warning for form
      this.refs.propName.focus();
    }
  }
  render() {
    return(
      <div>
        <form ref="form" onSubmit={this.setProp}>
          <div>
            <label>Name</label>
            <input type="text" ref="propName" placeholder="Awesome Restaurant"/>
          </div>
          <div>
            <label>Address</label>
            <input type="text" ref="propAddress" placeholder="22B Baker"/>
          </div>
          <div>
            <label>Location</label>
            <input type="text" ref="propLocation"/>
          </div>
          <div>
            <label>Avatar</label>
          <input ref="file" type="file" name="file" onChange={this.handleImage} className="button yellow-button upload-file"/>
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
