import React from 'react';
import PropTypes from 'prop-types';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
    this.props.changeFilter(this.state.category);
  }
  render() {
    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <div>
        <form>
          <label>
            Please choose a category:
            <select name="category" onChange={this.handleChange}>
              {
            // eslint-disable-next-line max-len
            bookCategories.map(category => <option key={category} value={category}>{category}</option>)
          }
            </select>
          </label>
        </form>
        <h1>{this.state.category}</h1>
      </div>
    );
  }
}
export default CategoryFilter;
