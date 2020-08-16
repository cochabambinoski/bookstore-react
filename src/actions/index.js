export const ADD_BOOK = 'ADD_BOOK';

export const createBook = book => {
  return {
    type: ADD_BOOK,
    book
  }
}