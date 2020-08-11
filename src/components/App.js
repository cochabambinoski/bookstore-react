import React from 'react';
import { BooksList } from './BooksList';
import { BooksForm } from './BooksForm';

export const App = () => {
  return (
    <div>
      <BooksList />
      <BooksForm />
    </div>
  );
}