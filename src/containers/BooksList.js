import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

function BooksList({ books, RemoveBook }) {
  function handleRemoveBook(book) {
    RemoveBook(book);
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove Book</th>
        </tr>
      </thead>
      <tbody>
        {
        books.map(book => <Book removing={handleRemoveBook} key={book.title} book={book} />)
      }
      </tbody>
    </table>
  );
}

const mapDispatchToProps = dispatch => ({
  RemoveBook: book => dispatch(removeBook(book)),
});

const mapStateToProps = state => ({
  books: state.books,
});
BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps,mapDispatchToProps)(BooksList);
