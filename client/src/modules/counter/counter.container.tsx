import * as React from 'react';
import {State} from '../../classes/state';

const connect = require('react-redux').connect;

import { increment, decrement } from './counter.actions';
import Counter from './counter.component';

interface ICounterPageProps extends React.Props<any> {
  counter: number;
  increaseCounter: () => void;
  decreaseCounter: () => void;
};

function mapStateToProps(state: State) {
  return {
    counter: state.counter.get('count'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: (): void => dispatch(increment()),
    decreaseCounter: (): void  => dispatch(decrement()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
