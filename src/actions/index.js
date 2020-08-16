export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = book => {
  return {
    type: ADD_BOOK,
    book
  }
}

export const removeBook = book => {
  return {
    type: REMOVE_BOOK,
    book
  }
}