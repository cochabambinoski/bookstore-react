/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import { randomId, bookCategories } from '../helpers/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: randomId(),
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      id: randomId(),
    });
    if (this.state.title !== '') {
      this.props.addBook(this.state);
    }
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    return (
      <div>
        <h2 className="title">Add a Book</h2>
        <form>
          <input name="title" className="Lesson-Panel" value={this.state.title} onChange={this.handleChange} type="text" placeholder="Book Title" />
          <select name="category" className="Lesson-Panel1" onChange={this.handleChange}>
            <option>Category</option>
            {
            // eslint-disable-next-line max-len
            bookCategories.map(category => <option key={category} value={category}>{category}</option>)
          }
          </select>
          <button className="Rectangle-2" onClick={this.handleSubmit} type="submit">ADD BOOK</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
