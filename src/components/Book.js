import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book, removing }) {
  const handleRemoveBook = () => {
    removing(book);
  };
  return (
    <div className="books-item">
      <div className="book-info">
      <h2 className="book-category">{book.category}</h2>
      <h2 className="book-title">{book.title}</h2>
      </div>
      <div className="book-links">
        <button type="submit">Comment</button>
        <button type="submit" onClick={handleRemoveBook}>Remove</button>
        <button type="submit">Edit</button>
      </div>

    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removing: PropTypes.func.isRequired,
};
