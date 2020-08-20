import { ADD_BOOK, REMOVE_BOOK } from '../actions/index';

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.book],
      };
    case REMOVE_BOOK:
      return {
        books: state.books.filter(item => item.id !== action.book.id),
      };
    default:
      return state;
  }
}
