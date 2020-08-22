import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFIlter';

function BooksList({ books, RemoveBook, filterBook }) {
  const handleRemoveBook = book => {
    RemoveBook(book);
  };

  const handleFilterChange = book => {
    filterBook(book);
  };
  return (
    <div>
      <CategoryFilter book={books} changeFilter={handleFilterChange} />
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
          books.books.map(book => <Book removing={handleRemoveBook} key={book.title} book={book} />)
        }
        </tbody>
      </table>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  RemoveBook: book => dispatch(removeBook(book)),
  filterBook: category => dispatch(changeFilter(category)),
});

const mapStateToProps = state => ({
  books: state.books,
});
BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  RemoveBook: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
