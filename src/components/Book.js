import React from 'react';

export default function Book(props) {
  return (
    <tr>
        <td>{props.book.id}</td>
        <td>{props.book.title}</td>
        <td>{props.book.category}</td>
    </tr>
  );
}
