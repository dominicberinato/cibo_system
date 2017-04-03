export var addMenu = (menu) => {
  return {
    type: 'ADD_MENU',
    menu
  };
};

export var deleteMenu =  (id) => {
  return {
    type: 'DELETE_MENU',
    id
  };
};

export var updateMenu = (id, updates) => {
  return {
    type: 'UPDATE_MENU',
    id,
    updates
  };
};
