import React,{Component} from 'react'
import {connect} from 'react-redux'
import {storageRef} from 'src/firebase/index'


export class PropertyProfile extends Component {
  constructor(props){
    super(props);
    //add a state item for the image link
    this.state = {
      link: ''
    };
  }
  componentDidMount() {
    var {dispatch, property} = this.props;
    if(property.avatar) {
      storageRef.child(property.avatar).getDownloadURL().then((url) => {
        this.setState({
          link: url
        });
        }).catch((error) => {
        //an error occurred
        console.log('error occured when fetching image link', error )
      })
    } 
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
                <img className="property-avatar" src={this.state.link}/>
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
