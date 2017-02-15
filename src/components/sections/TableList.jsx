import React,{Component} from 'react'
import {connect} from 'react-redux'

export class TableList extends Component {
  constructor() {
    super();
  }
  render() {
    return(<div>Table List</div>)
  }
}

export default connect((state) => {
  return {
    tables: state.tables
  }
})(TableList);
