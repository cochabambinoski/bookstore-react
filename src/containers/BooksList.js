import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFIlter';

function BooksList({
  books, RemoveBook, filterBook, filter,
}) {
  const handleRemoveBook = book => {
    RemoveBook(book);
  };

  const handleFilterChange = book => {
    filterBook(book);
  };
  return (
    <div>
      <CategoryFilter filter={filter} book={books} changeFilter={handleFilterChange} />
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
          {books.books.filter(
            book => (filter === 'All' || book.category === filter),
          )
            .map(book => (
              <Book
                book={book}
                key={book.id}
                removing={handleRemoveBook}
              />
            ))}
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
  filter: state.filter,
});
BooksList.propTypes = {
  books: PropTypes.shape({
    books: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  filter: PropTypes.string.isRequired,
  filterBook: PropTypes.func.isRequired,
  RemoveBook: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
