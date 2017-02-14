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
          <div id="emptyMessage"><p>Please Set Property Profile</p></div>
        )
      } else {
        return(
          <div>
            <div className="columns small-12 large-2 medium-2">
              <div id="propimg">
                <img/>
              </div>
            </div>
            <div className="columns small-12 large-10 medium-10">
              <div id="name">
                <label>Name:</label>
                <p>{property.pname}</p>
              </div>
              <div id="propcode">
                <label>Code:</label>
                <p>{property.propCode}</p>
              </div>
              <div id="propaddress">
                <label>Address</label>
                <p>{property.address}</p>
              </div>
          </div>
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
