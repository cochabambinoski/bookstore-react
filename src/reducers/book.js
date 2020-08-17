import { ADD_BOOK, REMOVE_BOOK } from '../actions/index';

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state, action.book],
      };
    case REMOVE_BOOK:
      return {
        books: [...state, action.book],
      };
    default:
      return state;
  }
}
