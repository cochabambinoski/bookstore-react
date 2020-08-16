/**
 * Implement the books.js reducer 
 * with CREATE_BOOK and REMOVE_BOOK actions.Remember,
 *  your state can not be mutated!
 */
import {initialState} from '../index';
import { ADD_BOOK, REMOVE_BOOK } from '../actions/index';

/*const {
  ADD_BOOK
} = require("../src/actions");*/

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state, action.book]
      }
    case REMOVE_BOOK:
      return {
        books: [...state, action.book]
      }
      default:
        return state
  }
}