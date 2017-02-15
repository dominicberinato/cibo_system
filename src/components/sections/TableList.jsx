import React,{Component} from 'react'
import {connect} from 'react-redux'
import Table from 'Table'

export class TableList extends Component {
  constructor() {
    super();
  }
  render() {
    var {tables} = this.props;
    var renderTables = () => {
      if(tables.length > 0) {
        return tables.map((table) => {
          return(
            <Table key={table.tbKey} {...table}/>
          )
        })
      } else {
        return (
           <p className="container__message">No Tables </p>
        )
      }
    }
    return(
      <div>
        {renderTables()}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    tables: state.tables
  }
})(TableList);
