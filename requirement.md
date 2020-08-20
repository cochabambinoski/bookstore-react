1. Enhance the Redux store
 * The Redux store should keep information about the current books filter. Name it filter. It can be a simple string with the name of the category. Remember to add the option All which will just remove the filter from the table.
 * Create the CHANGE_FILTER action in actions/index.js
 * Create a filter.js reducer which modifies filter in the Redux store. It should default to All.
2. Implement the CategoryFilter component
 * The component should render a select box with filter categories.
 * Remember to merge the book categories with the All option in the select box. All is not a valid book category and shouldn’t be saved in the Redux store, although it should be a filter option.
3. Keep the filter value in the Redux store
 * Render the CategoryFilter component in the BooksList component.
 * Implement the handleFilterChange method which modifies the filter state in the Redux store. Pass it down as a prop to CategoryFilter.
 * Implement a conditional method which decides which books should be shown in the table depending on the filter value from Redux store.