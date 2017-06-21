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
    default:
      return state;
  }
}
