import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import bookReducer from './reducers/book';

const bookArray = [
  {
    id:1,
    title:'BookOne',
    category:'Action'
  },
  {
    id:2,
    title:'BookTwo',
    category:'Horror'
  }
];

export const initialState = {
  books:bookArray
}

const store = createStore(bookReducer);
console.log(store.getState());

ReactDOM.render(
  <Provider store = {store}><App/></Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
