import React from 'react';

export default function Book(properties) {
  return (
    <tr>
      <td>{properties.book.id}</td>
      <td>{properties.book.title}</td>
      <td>{properties.book.category}</td>
    </tr>
  );
}
