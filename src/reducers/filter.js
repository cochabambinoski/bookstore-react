const { CHANGE_FILTER } = require('../actions');

const changeFilterReducer = (state = [], action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        books: state.books.filter(book => book.category === action.filter.category),
      };
    default:
      return state;
  }
};

export default changeFilterReducer;
