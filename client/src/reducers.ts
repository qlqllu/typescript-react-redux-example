import {combineReducers} from 'redux';
const { routerReducer } = require('react-router-redux');
const formReducer = require('redux-form').reducer;
import counter from './modules/counter/counter.reducers';

const rootReducer = combineReducers({
  counter,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
