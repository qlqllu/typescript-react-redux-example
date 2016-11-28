import 'babel-polyfill';

import 'ts-helpers';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import {State} from './classes/state';

const { Provider } = require('react-redux');
const { Router, browserHistory } = require('react-router');
const { syncHistoryWithStore } = require('react-router-redux');

import routes from './store/routes';
import configureStore from './store/configure-store';

import './index.css';
import IntlManager from './IntlManager';

declare const __TEST__: boolean;

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

const locale = getLocale();
if (!__TEST__) {
  IntlManager.loadModuleIntlStrings('.', locale, 'builder-common').then(messages => {
    ReactDOM.render(
      <div>
        <Provider store={ store }>
          <IntlProvider locale="en" messages={messages}>
            <Router history={ history }>
              { routes }
            </Router>
          </IntlProvider>
        </Provider>
      </div>,
      document.getElementById('root')
    );
  });  
}

function getLocale(){
  let state: State = store.getState();
  if(state.routing.locationBeforeTransitions && state.routing.locationBeforeTransitions.query && state.routing.locationBeforeTransitions.query.locale){
    return state.routing.locationBeforeTransitions.query.locale
  }
  return navigator.language;
}
