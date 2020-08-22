import { combineReducers } from 'redux';
import bookReducer from './book';
import changeFilterReducer from './filter';

const rootReducer = combineReducers({
  books: bookReducer,
  filter: changeFilterReducer,
});

export default rootReducer;
