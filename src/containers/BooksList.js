import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

function BooksList(props) {
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
        props.books.map((book,id) => 
          <Book key={id} book={book} />
        )
      }
      </tbody>
    </table>
  );
}

const mapStateToProps = state => {
  return {
    books: state.books,
  }
}

export default connect(mapStateToProps)(BooksList);
