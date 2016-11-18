import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from './counter.actions';
import { fromJS, Map } from 'immutable';


const INITIAL_STATE: Map<string, number> = fromJS({
  count: 0,
});

function counterReducer(state = INITIAL_STATE, action = { type: '' }) {
  switch (action.type) {

  case INCREMENT_COUNTER:
    return state.update('count', (value) => value + 1);

  case DECREMENT_COUNTER:
    return state.update('count', (value) => value - 1);

  default:
    return state;
  }
}


export default counterReducer;
