import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import { randomId } from '../index';

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
    if (event.target.tagName === 'INPUT') {
      this.setState({
        title: event.target.value,
      });
    } else {
      this.setState({
        category: event.target.value,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      id: randomId(),
    });
    if (this.state.title != ''){
      this.props.addBook(this.state); }
    // console.log('book added')
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    return (
      <div>
        <form>
          <input value={this.state.title} onChange={this.handleChange} type="text" placeholder="Enter a new book" />
          <select onChange={this.handleChange}>
            {
            // eslint-disable-next-line max-len
            bookCategories.map(category => <option key={category} value={category}>{category}</option>)
          }
          </select>
          <button onClick={this.handleSubmit} type="submit">Save Book</button>
        </form>
        <h1>
          input:
          {this.state.title}
        </h1>
        <h1>
          category:
          {this.state.category}
        </h1>
      </div>
    );
  }
}
// const mapState
const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
