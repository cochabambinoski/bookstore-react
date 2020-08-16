/**
 * Implement the books.js reducer 
 * with CREATE_BOOK and REMOVE_BOOK actions.Remember,
 *  your state can not be mutated!
 */

const {
  ADD_BOOK
} = require("../src/actions");

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state, action.book]
      }
      default:
        return state
  }
}