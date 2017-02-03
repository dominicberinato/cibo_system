import React, {Component} from 'react'
import {connect} from 'react-redux'

//plain class  for testing
export class SetProperty extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <form>
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
            <button className="button">SAVE PROPERTY</button>
          </div>
        </form>
      </div>
    )
  }
};

export default connect(

)(SetProperty);
