import React, {Component} from 'react'
import {connect} from 'react-redux'

export class ActiveTables extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
          <p className="text-center">Active Tables</p>
      </div>
    )
  }
}

export default connect()(ActiveTables);
