export var tablesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TABLE':
      return [
        ...state,
        action.table
      ];
    case 'UPDATE_TABLE':
      return state.map((table) => {
        if(table.tbKey == action.id) {
          return {
            ...table,
            ...action.updates
          };
        } else
        {
          return table;
        }
      });
    case 'DELETE_TABLE':
      return state.filter((table) => {
        return table.tbKey != action.id
      });
    case 'CLEAR_TABLES':
      return [];
    default:
      return state;
  }
}
