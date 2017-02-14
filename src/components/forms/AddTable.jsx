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
    var {property} =  this.props;
    console.log('this is property', property);
    var renderForm =  () => {
      if(Object.keys(property).length != 0) {
        return(
          <div>
            <form>
              <input ref='tableName' type='text'/>
              <input ref='tableSeats' type='number'/>
              <input type='submit' className='button' value='Add Table'/>
            </form>
          </div>
        )
      } else {
        return(
          <p>Please Property Details To Add A Table</p>
        )
      }
    }
    return(
      <div>
        {renderForm()}
    </div>)
  }
};

export default connect((state) => {
  return{
    auth: state.auth,
    property: state.property
  }
})(AddTable)
