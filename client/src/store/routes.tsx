import * as React from 'react';
const { IndexRoute, Route } = require('react-router');

import CounterPage from '../modules/counter/counter.container';

export default (
  <Route path="/" component={ CounterPage }>
  </Route>
);
