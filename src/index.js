import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import bookReducer from './reducers/book';

const randomId = () => Math.floor(Math.random() * 100);
const bookArray = [
  {
    id: randomId(),
    title: 'Cage the specter',
    category: 'Horror',
  }, {
    id: randomId(),
    title: '2246: Blight',
    category: 'Sci-Fi',
  }, {
    id: randomId(),
    title: 'The Children of Men',
    category: 'History',
  }, {
    id: randomId(),
    title: 'Secret of the Mute Mermaid',
    category: 'History',
  }, {
    id: randomId(),
    title: 'Death of the Giant Beast',
    category: 'Horror',
  },
];

export const initialState = {
  books: bookArray,
};

const store = createStore(bookReducer);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
