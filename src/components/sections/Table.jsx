import React,{Component} from 'react'
import {connect} from 'react-redux'

export class Table extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var {tbname, tbcapacity} = this.props;
    var renderTable = () => {
      if(tbname != undefined && tbcapacity != undefined) {
        return(
          <div>
            <div >
              <label>Table Name/Number</label>
              <p ref="tbname">{tbname}</p>
            </div>
            <div >
              <label>Table Capacity</label>
              <p ref="tbcapacity">{tbcapacity}</p>
            </div>
          </div>
        )
      } else {
        return(<div><p>No Table Here</p></div>)
      }

    }
    return(
      <div>
        {renderTable()}
      </div>
  );
}
};

export default Table;
