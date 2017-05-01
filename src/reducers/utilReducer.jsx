export var utilReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_STOCK_FORM':
      return action.formName;
    default:
      return state;
  };
};
