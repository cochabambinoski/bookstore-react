import React from 'react';

export default function Book(props) {
  return (
    <div>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td>{props.category}</td>
    </div>
  );
}
