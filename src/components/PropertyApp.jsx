import React, {Component} from 'react'
import {connect} from 'react-redux'
import CiboBar from 'CiboBar'

export class PropertyApp extends Component {
  render(){
    return(
      <div>
        <CiboBar/>
        {this.props.children}
      </div>
    )
  }
};
export default connect()(PropertyApp)
