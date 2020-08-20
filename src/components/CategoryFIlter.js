import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryFilter() {

    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    return (
      <div>
        <form>
          <select name="category">
            {
            // eslint-disable-next-line max-len
            bookCategories.map(category => <option key={category} value={category}>{category}</option>)
          }
          </select>
        </form>
      </div>
    );
}