import React from 'react';

export default function BooksForm() {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter a new book" />
        <select>
          {
            // eslint-disable-next-line max-len
            bookCategories.map(category => <option key={category} value={category}>{category}</option>)
          }
        </select>
        <button type="submit">Save Book</button>
      </form>
    </div>
  );
}
