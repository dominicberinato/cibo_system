import React,{Component} from 'react'
import {connect} from 'react-redux'

export class PropertyProfile extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var {property} = this.props;
    var renderProp =  () => {
      if(Object.keys(property).length == 0) {
        return(
          <div><p>Please Set Property Profile</p></div>
        )
      } else {
        return(
          <div>
            prop details
          </div>
        )
      }
    }
    return(
      <div>{renderProp()}</div>
    )
  }
 }

export default connect((state) =>{
  return {
    property: state.property
  }
})(PropertyProfile)
