import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book, removing }) {
  const handleRemoveBook = () => {
    removing(book);
  };
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td><button type="submit" onClick={handleRemoveBook}>Delete</button></td>
    </tr>
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
