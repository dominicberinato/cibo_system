export var addBeverage = (beverage) => {
  return {
    type: 'ADD_BEVERAGE',
    beverage
  };
};

export var deleteBeverage = (id) => {
  return {
    type: 'DELETE_BEVERAGE',
    id
  };
};

export var updateBeverage = (id, updates) => {
  return {
    type: 'UPDATE_BEVERAGE',
    id,
    updates
  };
};
