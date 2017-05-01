import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux'
import * as actions from 'utilActions'

export class StockButtonsPane extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    var {dispatch} = this.props;
    return(
      <div className="text-center">
        <div className="row">
          <div className="columns small-6">
            <RaisedButton className="stock-buttons" label="Ingridients" primary={true}/>
            <RaisedButton className="stock-buttons" label="Batches" primary={true}/>
            <RaisedButton className="stock-buttons" label="Beverages" primary={true}/>
          </div>
          <div className="columns small-6">
            <RaisedButton className="stock-buttons" label="Menus" primary={true}/>
            <RaisedButton className="stock-buttons" label="Archive" primary={true}/>
            <RaisedButton className="stock-buttons" label="CockTails" primary={true}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => {

})(StockButtonsPane);
