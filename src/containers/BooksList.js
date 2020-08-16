import React from 'react';
import Book from '../components/Book';

export default function BooksList() {
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
        <Book book = {{id: 1, title: 'test', category: 'Action'}}/>
      </tbody>
    </table>
    );
  }