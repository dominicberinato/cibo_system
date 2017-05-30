import React,{Component} from 'react'
import {connect} from 'react-redux'
import Table from 'Table'
import {collectTables, clearTables} from 'tableActions'
import Chip from 'material-ui/Chip'

export class TableList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //when mounted also pull some tables from db if any
    var {dispatch} = this.props;
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
            <Chip>No Tables </Chip>
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
