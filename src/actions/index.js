export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = book => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  book,
});
