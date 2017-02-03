import React, {Component} from 'react'
import {connect} from 'react-redux'

export class AddTable extends Component {
  //class constructor
  constructor(props) {
    super(props)
  }
  //when mounted load ..
  ComponentDidMount(){

  }
  //draw
  render() {
    return(<p>Add Table</p>)
  }
};

export default connect()(AddTable)
