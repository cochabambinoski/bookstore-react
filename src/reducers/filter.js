import { initialState } from '../helpers';

const { CHANGE_FILTER } = require('../actions');

const changeFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        // books: state.books.filter(book => console.log(book.category)),
        books: state.books.filter(book => console.log(book.category === action.filter.category)),
      };
    default:
      return state;
  }
};

export default changeFilterReducer;
