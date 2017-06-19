import React, {Component} from 'react'
import {connect} from 'react-redux'
import {startAddProperty} from 'propertyActions'
import SetPropertyForm from 'SetPropertyForm'


export class SetProperty extends Component {
  constructor(props) {
    super(props)
    this.setProp = this.setProp.bind(this)
  }
  setProp(values) {
      const {dispatch} = this.props;
      //dispatch our action generator
      dispatch(startAddProperty(values));
  }

  render() {
    return(
      <SetPropertyForm onSubmit={this.setProp}/>
    )
  }

}

export default connect((state) => {
  return {
    auth: state.auth
  }
})(SetProperty);
