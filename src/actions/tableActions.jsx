import {firebaseRef} from 'src/firebase/index';
import {reset} from 'redux-form';
//export async action to delete table
export var startDeleteTable = (tbKey) => {
  return(dispatch, getState) => {
    //TODO delete all connected assets to table using fanout
    var deleteTableFanOut =  {};
    //lets remove content
    return firebaseRef.child(`tables/${tbKey}`).remove().then(() => {
      //lets call the deleteTable
      dispatch(deleteTable(tbKey));
    })
  }
}
//export deleteTable
export var deleteTable = (id) => {
  return {
    type: 'DELETE_TABLE',
    id
  }
};

//export action to remote update table
export var startUpdateTable = (id, updates) => {
  return(dispatch, getState) => {
     //check that the table we are about to upate is valid
     return firebaseRef.child(`/tables/${id}`).once('value').then((tableSnapshot) => {
       if(tableSnapshot.val() != null) {
         //create a fanout
         var updateTableFanOut =  {} ;
         //populate
         updateTableFanOut['/tables/${id}']  = {
                                                  ...tableSnapshot.val(),
                                                  ...updates
                                                };
        //later object spread overrides earlier^^^^
        //update table locally
        dispatch(updateTable(id, updates));
       }
       //TODO deal with failure to update table in firebase
     })
  }
}

//export action to collect tables
export var collectTables = () => {
  return(dispatch, getState) => {
    //get the id of the property so we can use a lookup table
    var propKey = getState().property.key;

    var tablesRef = firebaseRef.child(`property-tables/${propKey}`);

    return tablesRef.once('value').then((tablesShot) => {
      var tables = Object.keys(tablesShot.val());
      dispatch(clearTables());
      tables.map((table) => {
        //lets fetch the table from firebase
        return firebaseRef.child(`tables/${table}`).once('value').then((thisTable) => {
          dispatch(addTable({
            tbKey: table,
            ...thisTable.val()
          }))
        })
      })
    })
  }
}

//export updateTableAction =
export var updateTable = (id, updates) => {
  return {
    type: 'UPDATE_TABLE',
    id,
    updates
  }
};

//export async action to start add table
export var startAddTable =  (table) => {
  return(dispatch, getState) => {
    var propId = getState().property.key;
    //get propid
    var tableFanOut =  {};
    var tableKey = firebaseRef.child('tables').push().key;
    tableFanOut[`/tables/${tableKey}`] = table;
    tableFanOut[`/property-tables/${propId}/${tableKey}`] = tableKey;

    //lets update this fanout
    return firebaseRef.update(tableFanOut).then(() => {
      dispatch(addTable({
        ...table,
        tbKey: tableKey
      }));
      dispatch(reset('table'))
    })
  }
}
//add a table to state
export var addTable = (table) => {
  return {
    type: 'ADD_TABLE',
    table
  }
}
//action to clear tables
export var clearTables = () => {
  return {
    type: 'CLEAR_TABLES'
  }
}
