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
    return(
      <div>
        <form>
          <input ref='tableName' type='text'/>
          <input ref='tableSeats' type='number'/>
          <input type='submit' className='button' value='Add Table'/>
        </form>
      </div>
  )
  }
};

export default connect()(AddTable)
