const { CHANGE_FILTER } = require('../actions');

const changeFilterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default changeFilterReducer;
