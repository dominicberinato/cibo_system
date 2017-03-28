export var batchReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BATCH':
      return [
        ...state,
        action.batch
      ];
    case 'DELETE_BATCH':
      return state.filter((batch) => {
        return batch.id != action.id
      });
    case 'UPDATE_BATCH':
      return state.map((batch) => {
        if(batch.id == action.id) {
          return {
            ...batch,
            ...action.updates
          }
        } else {
          return batch
        };
      });
    default:
      return state;
  }
}
