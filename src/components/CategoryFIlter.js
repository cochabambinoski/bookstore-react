import React from 'react';
import PropTypes from 'prop-types';
import { bookCategories } from '../helpers/index';

function CategoryFilter(props) {
  const handleFilterChange = event => {
    const { value } = event.target;
    props.changeFilter(value);
  };
  return (
    <div>
      <form>
        <label htmlFor="book-categories">
          Please choose a category:
          <select
            id="book-categories"
            name="category"
            onChange={handleFilterChange}
          >
            <option value="All">
              All
            </option>
            { bookCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
}

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
