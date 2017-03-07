import React,{Component} from 'react'
import {connect} from 'react-redux'
import Table from 'Table'
import {collectTables, clearTables} from 'src/actions/tableActions'

export class TableList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //when mounted also pull some tables from db if any
    var {dispatch} = this.props;
    dispatch(clearTables)
    dispatch(collectTables());
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
