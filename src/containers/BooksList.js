import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

function BooksList(properties) {
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {
        properties.books.map(book => <Book key={book.title} book={book} />)
      }
      </tbody>
    </table>
  );
}

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(BooksList);
