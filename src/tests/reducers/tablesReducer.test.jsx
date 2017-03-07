import expect from 'expect'
var df = require('deep-freeze-strict')
import {tablesReducer} from 'tablesReducer'
//test tablesReducer
describe('tablesReducer', () => {
  it('should add a new table on addTable', () => {
    //mock the table
    var table = {
      tbname: 7,
      tbcapacity: 8
    };

    var addTableAction = {
      type: 'ADD_TABLE',
      table
    };

    //call reducer
    var result = tablesReducer(df([]), df(addTableAction));

    //assert that reducer added a table to state
    expect(result[0]).toEqual(addTableAction.table);
  });
  it('should update table on updateTable', () => {
    //mock the table
    var tables = [{
      tbname: 7,
      tbcapacity: 8,
      tbKey: 8
    }];

    var updates = {
      tbcapacity: 2
    };

    var updateTableAction = {
      type: 'UPDATE_TABLE',
      id: 8,
      updates
    };

    var result = tablesReducer(df(tables), df(updateTableAction));

    expect(result[0].tbcapacity).toEqual(updates.tbcapacity);
  });
  it('should clear tables on clearTables', () => {
    //mock the table
    var tables = [{
      tbname: 7,
      tbcapacity: 8,
      tbKey: 8
    },
    {
      tbname: 7,
      tbcapacity: 8,
      tbKey: 9
    }
    ];

    var clearTablesAction = {
      type:'CLEAR_TABLES'
    }

    var result = tablesReducer(df(tables), df(clearTablesAction));

    //assertion
    expect(result.length).toEqual(0)
  });
  it('should delete table on deleteTable', () => {
    //mock the table
    var tables = [{
      tbname: 7,
      tbcapacity: 8,
      tbKey: 8
    },
    {
      tbname: 7,
      tbcapacity: 8,
      tbKey: 9
    }
    ];

    var deleteTableAction = {
      type: 'DELETE_TABLE',
      id: 8
    };

    var result = tablesReducer(df(tables), df(deleteTableAction));

    expect(result.length).toEqual(tables.length - 1);
  })
})
