export var menuReducer  = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MENU':
      return [
        ...state,
        {
          ...action.menu
        }
      ];
    case 'DELETE_MENU':
      return state.filter((menu) => {
        return menu.id != action.id;
      });
    case 'UPDATE_MENU':
      return state.map((menu) => {
        if(menu.id == action.id) {
          return {
            ...menu,
            ...action.updates
          }
        } else {
          return menu;
        }
      });
    default:
      return state;
  }
}
