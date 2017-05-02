import React, {Component} from 'react'
import {connect} from 'react-redux'

export class IngridientForm extends Component {
  render() {
    return(
      <p>
        This is the form
      </p>)
  }
};

export default connect()(IngridientForm)
