import React, {Component} from 'react'
import {connect} from 'react-redux'

export class PropertyApp extends Component {
  render(){
    return(
      <div>
        {/*render children here*/}
        {this.props.children}
      </div>
    )
  }
};
export default connect()(PropertyApp)
