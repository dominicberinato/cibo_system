export const userPropertiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER_PROPERTY':
      return [
        ...state,
        action.prop
      ];
    case 'REMOVE_USER_PROPERTY':
      return state.filter((prop) => {
        prop.key != action.propid
      });
    case 'CLEAR_USER_PROPERTIES':
      return [];
    default:
      return state;
  }
}
