import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {hashHistory} from 'react-router'
//add connect from redux to check state
import{connect} from 'react-redux'



export class CiboBar extends Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
    this.state = {
      sidebar:false
    }
  }
  clicked() {
    this.setState({
      sidebar: !this.state.sidebar
    })
  }
  render() {
    var {property, dispatch, auth} = this.props;
    var userImage =  () => {
      if(auth.photo) {
        return(
          <img className="bar-image" src={auth.photo}/>
        )
      }
    }
    return(
      <div>
        <AppBar
          title="Cibo Property Management"
          onLeftIconButtonTouchTap={this.clicked}
          onTitleTouchTap={() => {
            hashHistory.push('/app');
          }}
          iconElementRight={userImage()}
          />
        <Drawer
          open={this.state.sidebar}
          docked={false}
          onRequestChange={(open) => this.setState({sidebar: open})}
          >
        <MenuItem onTouchTap={()=>{
            this.clicked();
            hashHistory.push('admin');
          }}>Admin</MenuItem>
          <MenuItem onTouchTap={()=>{
              this.clicked();
              hashHistory.push('admin');
            }}>FloorPlan</MenuItem>
        </Drawer>
      </div>
    );
  }
};

export default connect((state) => {
  return {
    property: state.property,
    auth: state.auth
  }
})(CiboBar);
